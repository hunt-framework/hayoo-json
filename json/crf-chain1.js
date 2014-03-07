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
        "word": "crf-chain1"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec.  The first component is used to encode observations\n of type a, the second one is used to encode labels of type b.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#Codec",
          "type": "type"
        },
        "index": {
          "description": "codec The first component is used to encode observations of type the second one is used to encode labels of type",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "Codec",
          "package": "crf-chain1",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for the codec monad.  It is important to notice that by a\n codec we denote here a structure of two \u003ccode\u003e\u003ca\u003eAtomCodec\u003c/a\u003e\u003c/code\u003es while in the\n monad-codec package it denotes a monad.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "CodecM",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#CodecM",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for the codec monad It is important to notice that by codec we denote here structure of two AtomCodec while in the monad-codec package it denotes monad",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "CodecM",
          "package": "crf-chain1",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#t:CodecM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "decodeLabel",
          "package": "crf-chain1",
          "signature": "Codec a b -\u003e Lb -\u003e b",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#decodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Decode the label",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "decodeLabel",
          "normalized": "Codec a b-\u003eLb-\u003eb",
          "package": "crf-chain1",
          "partial": "Label",
          "signature": "Codec a b-\u003eLb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:decodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the sequence of labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "decodeLabels",
          "package": "crf-chain1",
          "signature": "Codec a b -\u003e [Lb] -\u003e [b]",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#decodeLabels",
          "type": "function"
        },
        "index": {
          "description": "Decode the sequence of labels",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "decodeLabels",
          "normalized": "Codec a b-\u003e[Lb]-\u003e[b]",
          "package": "crf-chain1",
          "partial": "Labels",
          "signature": "Codec a b-\u003e[Lb]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:decodeLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the dataset with the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeData",
          "package": "crf-chain1",
          "signature": "Codec a b -\u003e [Sent a] -\u003e [Xs]",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeData",
          "type": "function"
        },
        "index": {
          "description": "Encode the dataset with the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeData",
          "normalized": "Codec a b-\u003e[Sent a]-\u003e[Xs]",
          "package": "crf-chain1",
          "partial": "Data",
          "signature": "Codec a b-\u003e[Sent a]-\u003e[Xs]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled dataset using the codec.  Substitute the default\n label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeDataL",
          "package": "crf-chain1",
          "signature": "b -\u003e Codec a b -\u003e [SentL a b] -\u003e [(Xs, Ys)]",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeDataL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled dataset using the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeDataL",
          "normalized": "a-\u003eCodec b a-\u003e[SentL b a]-\u003e[(Xs,Ys)]",
          "package": "crf-chain1",
          "partial": "Data",
          "signature": "b-\u003eCodec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeDataL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence using the given codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent",
          "package": "crf-chain1",
          "signature": "Codec a b -\u003e Sent a -\u003e Xs",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence using the given codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent",
          "normalized": "Codec a b-\u003eSent a-\u003eXs",
          "package": "crf-chain1",
          "partial": "Sent",
          "signature": "Codec a b-\u003eSent a-\u003eXs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent'Cn",
          "package": "crf-chain1",
          "signature": "Sent a -\u003e CodecM a b Xs",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and do not update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent'Cn",
          "normalized": "Sent a-\u003eCodecM a b Xs",
          "package": "crf-chain1",
          "partial": "Sent' Cn",
          "signature": "Sent a-\u003eCodecM a b Xs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent'Cu",
          "package": "crf-chain1",
          "signature": "Sent a -\u003e CodecM a b Xs",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the sentence and update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSent'Cu",
          "normalized": "Sent a-\u003eCodecM a b Xs",
          "package": "crf-chain1",
          "partial": "Sent' Cu",
          "signature": "Sent a-\u003eCodecM a b Xs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence with the given codec.  Substitute the\n default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL",
          "package": "crf-chain1",
          "signature": "b -\u003e Codec a b -\u003e SentL a b -\u003e (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence with the given codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL",
          "normalized": "a-\u003eCodec b a-\u003eSentL b a-\u003e(Xs,Ys)",
          "package": "crf-chain1",
          "partial": "Sent",
          "signature": "b-\u003eCodec a b-\u003eSentL a b-\u003e(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and do *not* update the codec.\n Substitute the default label for any label not present in the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL'Cn",
          "package": "crf-chain1",
          "signature": "b -\u003e SentL a b -\u003e CodecM a b (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and do not update the codec Substitute the default label for any label not present in the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL'Cn",
          "normalized": "a-\u003eSentL b a-\u003eCodecM b a(Xs,Ys)",
          "package": "crf-chain1",
          "partial": "Sent L' Cn",
          "signature": "b-\u003eSentL a b-\u003eCodecM a b(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled sentence and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL'Cu",
          "package": "crf-chain1",
          "signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled sentence and update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeSentL'Cu",
          "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "package": "crf-chain1",
          "partial": "Sent L' Cu",
          "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and do *not* update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWord'Cn",
          "package": "crf-chain1",
          "signature": "Word a -\u003e CodecM a b X",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWord%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and do not update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWord'Cn",
          "normalized": "Word a-\u003eCodecM a b X",
          "package": "crf-chain1",
          "partial": "Word' Cn",
          "signature": "Word a-\u003eCodecM a b X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWord-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWord'Cu",
          "package": "crf-chain1",
          "signature": "Word a -\u003e CodecM a b X",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWord%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the word and update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWord'Cu",
          "normalized": "Word a-\u003eCodecM a b X",
          "package": "crf-chain1",
          "partial": "Word' Cu",
          "signature": "Word a-\u003eCodecM a b X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWord-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodec the labeled word and do *not* update the codec.\n If the label is not in the codec, use the default value.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWordL'Cn",
          "package": "crf-chain1",
          "signature": "Int -\u003e WordL a b -\u003e CodecM a b (X, Y)",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWordL%27Cn",
          "type": "function"
        },
        "index": {
          "description": "Encodec the labeled word and do not update the codec If the label is not in the codec use the default value",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWordL'Cn",
          "normalized": "Int-\u003eWordL a b-\u003eCodecM a b(X,Y)",
          "package": "crf-chain1",
          "partial": "Word L' Cn",
          "signature": "Int-\u003eWordL a b-\u003eCodecM a b(X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWordL-39-Cn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the labeled word and update the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWordL'Cu",
          "package": "crf-chain1",
          "signature": "WordL a b -\u003e CodecM a b (X, Y)",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWordL%27Cu",
          "type": "function"
        },
        "index": {
          "description": "Encode the labeled word and update the codec",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "encodeWordL'Cu",
          "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
          "package": "crf-chain1",
          "partial": "Word L' Cu",
          "signature": "WordL a b-\u003eCodecM a b(X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWordL-39-Cu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the codec on the basis of the labeled dataset, return the\n resultant codec and the encoded dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "mkCodec",
          "package": "crf-chain1",
          "signature": "[SentL a b] -\u003e (Codec a b, [(Xs, Ys)])",
          "source": "src/Data-CRF-Chain1-Dataset-Codec.html#mkCodec",
          "type": "function"
        },
        "index": {
          "description": "Create the codec on the basis of the labeled dataset return the resultant codec and the encoded dataset",
          "hierarchy": "Data CRF Chain1 Dataset Codec",
          "module": "Data.CRF.Chain1.Dataset.Codec",
          "name": "mkCodec",
          "normalized": "[SentL a b]-\u003e(Codec a b,[(Xs,Ys)])",
          "package": "crf-chain1",
          "partial": "Codec",
          "signature": "[SentL a b]-\u003e(Codec a b,[(Xs,Ys)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:mkCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "External",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "External",
          "package": "crf-chain1",
          "partial": "External",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Dist",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Dist",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Dist",
          "package": "crf-chain1",
          "partial": "Dist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Sent",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Sent",
          "package": "crf-chain1",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "SentL",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "SentL",
          "package": "crf-chain1",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Word is represented by a set of observations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Word",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Word",
          "type": "type"
        },
        "index": {
          "description": "Word is represented by set of observations",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "Word",
          "package": "crf-chain1",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "WordL",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#WordL",
          "type": "type"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "WordL",
          "package": "crf-chain1",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate the word with the label.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Dataset.External\",\"Data.CRF.Chain1\"]",
          "name": "annotate",
          "package": "crf-chain1",
          "signature": "Word a -\u003e b -\u003e WordL a b",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#annotate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:annotate\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:annotate\"]"
        },
        "index": {
          "description": "Annotate the word with the label",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "annotate",
          "normalized": "Word a-\u003eb-\u003eWordL a b",
          "package": "crf-chain1",
          "signature": "Word a-\u003eb-\u003eWordL a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Dataset.External\",\"Data.CRF.Chain1\"]",
          "name": "mkDist",
          "package": "crf-chain1",
          "signature": "[(a, Double)] -\u003e Dist a",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#mkDist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:mkDist\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:mkDist\"]"
        },
        "index": {
          "description": "Construct the probability distribution",
          "hierarchy": "Data CRF Chain1 Dataset External",
          "module": "Data.CRF.Chain1.Dataset.External",
          "name": "mkDist",
          "normalized": "[(a,Double)]-\u003eDist a",
          "package": "crf-chain1",
          "partial": "Dist",
          "signature": "[(a,Double)]-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:mkDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Internal",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Internal",
          "package": "crf-chain1",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
          "type": "newtype"
        },
        "index": {
          "description": "label",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1",
          "partial": "Lb",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn observation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
          "type": "newtype"
        },
        "index": {
          "description": "An observation",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1",
          "partial": "Ob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple word represented by a list of its observations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
          "type": "newtype"
        },
        "index": {
          "description": "Simple word represented by list of its observations",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Xs",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Xs",
          "type": "type"
        },
        "index": {
          "description": "Sentence of words",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Xs",
          "package": "crf-chain1",
          "partial": "Xs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Xs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability distribution over labels. \n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
          "type": "newtype"
        },
        "index": {
          "description": "Probability distribution over labels",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence of Y (label choices).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ys",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ys",
          "type": "type"
        },
        "index": {
          "description": "Sentence of label choices",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ys",
          "package": "crf-chain1",
          "partial": "Ys",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Ys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1",
          "signature": "Lb",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Lb",
          "package": "crf-chain1",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1",
          "signature": "Ob",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Ob",
          "package": "crf-chain1",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1",
          "signature": "X",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "X",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1",
          "signature": "Y",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "Y",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "_unX",
          "package": "crf-chain1",
          "signature": "Vector Ob",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "_unX",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:_unX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "_unY",
          "package": "crf-chain1",
          "signature": "Vector (Lb, Double)",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "_unY",
          "normalized": "Vector(Lb,Double)",
          "package": "crf-chain1",
          "signature": "Vector(Lb,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:_unY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "mkX",
          "package": "crf-chain1",
          "signature": "[Ob] -\u003e X",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#mkX",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "mkX",
          "normalized": "[Ob]-\u003eX",
          "package": "crf-chain1",
          "signature": "[Ob]-\u003eX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:mkX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY constructor.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "mkY",
          "package": "crf-chain1",
          "signature": "[(Lb, Double)] -\u003e Y",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#mkY",
          "type": "function"
        },
        "index": {
          "description": "constructor",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "mkY",
          "normalized": "[(Lb,Double)]-\u003eY",
          "package": "crf-chain1",
          "signature": "[(Lb,Double)]-\u003eY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:mkY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unLb",
          "package": "crf-chain1",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unLb",
          "package": "crf-chain1",
          "partial": "Lb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unLb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unOb",
          "package": "crf-chain1",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unOb",
          "package": "crf-chain1",
          "partial": "Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unOb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX deconstructor symetric to mkX.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unX",
          "package": "crf-chain1",
          "signature": "X -\u003e [Ob]",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#unX",
          "type": "function"
        },
        "index": {
          "description": "deconstructor symetric to mkX",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unX",
          "normalized": "X-\u003e[Ob]",
          "package": "crf-chain1",
          "signature": "X-\u003e[Ob]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY deconstructor symetric to mkY.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unY",
          "package": "crf-chain1",
          "signature": "Y -\u003e [(Lb, Double)]",
          "source": "src/Data-CRF-Chain1-Dataset-Internal.html#unY",
          "type": "function"
        },
        "index": {
          "description": "deconstructor symetric to mkY",
          "hierarchy": "Data CRF Chain1 Dataset Internal",
          "module": "Data.CRF.Chain1.Dataset.Internal",
          "name": "unY",
          "normalized": "Y-\u003e[(Lb,Double)]",
          "package": "crf-chain1",
          "signature": "Y-\u003e[(Lb,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n hidden features, i.e. all features which can be constructed \n (by means of cartesian product) on the basis of the set of\n observations and the set of labels.\n For example, the list of hidden observation features can\n be defined as \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003c$\u003e\u003c/code\u003e os \u003ccode\u003e\u003c*\u003e\u003c/code\u003e xs, where os is a\n list of all observations and xs is a list of all labels.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Feature.Present\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "Hidden",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Feature-Hidden.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides feature selection functions which extract hidden features i.e all features which can be constructed by means of cartesian product on the basis of the set of observations and the set of labels For example the list of hidden observation features can be defined as OFeature os xs where os is list of all observations and xs is list of all labels You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Feature.Present module",
          "hierarchy": "Data CRF Chain1 Feature Hidden",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "Hidden",
          "package": "crf-chain1",
          "partial": "Hidden",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all types which can be constructed\n based on the dataset.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Feature.Hidden\",\"Data.CRF.Chain1\"]",
          "name": "hiddenFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenFeats",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenFeats\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:hiddenFeats\"]"
        },
        "index": {
          "description": "Hidden Feature of all types which can be constructed based on the dataset",
          "hierarchy": "Data CRF Chain1 Feature Hidden",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "Feats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenOFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenOFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden OFeature which can be constructed based on the dataset",
          "hierarchy": "Data CRF Chain1 Feature Hidden",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenOFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "OFeats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenOFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenSFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenSFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden SFeature which can be constructed based on the dataset",
          "hierarchy": "Data CRF Chain1 Feature Hidden",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenSFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "SFeats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenSFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenTFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenTFeats",
          "type": "function"
        },
        "index": {
          "description": "Hidden TFeature which can be constructed based on the dataset",
          "hierarchy": "Data CRF Chain1 Feature Hidden",
          "module": "Data.CRF.Chain1.Feature.Hidden",
          "name": "hiddenTFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "TFeats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenTFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n features present in the dataset, i.e. features which directly occure\n the dataset.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Feature.Hidden\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "Present",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Feature-Present.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides feature selection functions which extract features present in the dataset i.e features which directly occure the dataset You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Feature.Hidden module",
          "hierarchy": "Data CRF Chain1 Feature Present",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "Present",
          "package": "crf-chain1",
          "partial": "Present",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all kinds which occur in the dataset.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Feature.Present\",\"Data.CRF.Chain1\"]",
          "name": "presentFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Present.html#presentFeats",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentFeats\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:presentFeats\"]"
        },
        "index": {
          "description": "Feature of all kinds which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Feature Present",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "Feats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentOFeats",
          "package": "crf-chain1",
          "signature": "[(Xs, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Present.html#presentOFeats",
          "type": "function"
        },
        "index": {
          "description": "OFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Feature Present",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentOFeats",
          "normalized": "[(Xs,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "OFeats",
          "signature": "[(Xs,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentOFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentSFeats",
          "package": "crf-chain1",
          "signature": "[(a, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Present.html#presentSFeats",
          "type": "function"
        },
        "index": {
          "description": "SFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Feature Present",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentSFeats",
          "normalized": "[(a,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "SFeats",
          "signature": "[(a,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentSFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentTFeats",
          "package": "crf-chain1",
          "signature": "[(a, Ys)] -\u003e [Feature]",
          "source": "src/Data-CRF-Chain1-Feature-Present.html#presentTFeats",
          "type": "function"
        },
        "index": {
          "description": "TFeature which occur in the dataset",
          "hierarchy": "Data CRF Chain1 Feature Present",
          "module": "Data.CRF.Chain1.Feature.Present",
          "name": "presentTFeats",
          "normalized": "[(a,Ys)]-\u003e[Feature]",
          "package": "crf-chain1",
          "partial": "TFeats",
          "signature": "[(a,Ys)]-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentTFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Feature",
          "name": "Feature",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Feature.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "Feature",
          "package": "crf-chain1",
          "partial": "Feature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Feature is either an observation feature OFeature o x, which\n models relation between observation o and label x assigned to\n the same word, or a transition feature TFeature x y (SFeature x\n for the first position in the sentence), which models relation\n between two subsequent labels, x (on i-th position) and y\n (on (i-1)-th positoin).\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature",
          "name": "Feature",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Feature.html#Feature",
          "type": "data"
        },
        "index": {
          "description": "Feature is either an observation feature OFeature which models relation between observation and label assigned to the same word or transition feature TFeature SFeature for the first position in the sentence which models relation between two subsequent labels on i-th position and on i-1 th positoin",
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "Feature",
          "package": "crf-chain1",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#t:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Feature",
          "name": "OFeature",
          "package": "crf-chain1",
          "signature": "OFeature !Ob !Lb",
          "source": "src/Data-CRF-Chain1-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "OFeature",
          "package": "crf-chain1",
          "partial": "OFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:OFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Feature",
          "name": "SFeature",
          "package": "crf-chain1",
          "signature": "SFeature !Lb",
          "source": "src/Data-CRF-Chain1-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "SFeature",
          "package": "crf-chain1",
          "partial": "SFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:SFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Feature",
          "name": "TFeature",
          "package": "crf-chain1",
          "signature": "TFeature !Lb !Lb",
          "source": "src/Data-CRF-Chain1-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "TFeature",
          "package": "crf-chain1",
          "partial": "TFeature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:TFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll features with assigned probabilities in given labeled sentence.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature",
          "name": "featuresIn",
          "package": "crf-chain1",
          "signature": "Xs -\u003e Ys -\u003e [(Feature, LogFloat)]",
          "source": "src/Data-CRF-Chain1-Feature.html#featuresIn",
          "type": "function"
        },
        "index": {
          "description": "All features with assigned probabilities in given labeled sentence",
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "featuresIn",
          "normalized": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
          "package": "crf-chain1",
          "partial": "In",
          "signature": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:featuresIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it an \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isOFeat",
          "package": "crf-chain1",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Feature.html#isOFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it an OFeature",
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isOFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1",
          "partial": "OFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isOFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isSFeat",
          "package": "crf-chain1",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Feature.html#isSFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it SFeature",
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isSFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1",
          "partial": "SFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isSFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isTFeat",
          "package": "crf-chain1",
          "signature": "Feature -\u003e Bool",
          "source": "src/Data-CRF-Chain1-Feature.html#isTFeat",
          "type": "function"
        },
        "index": {
          "description": "Is it TFeature",
          "hierarchy": "Data CRF Chain1 Feature",
          "module": "Data.CRF.Chain1.Feature",
          "name": "isTFeat",
          "normalized": "Feature-\u003eBool",
          "package": "crf-chain1",
          "partial": "TFeat",
          "signature": "Feature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isTFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Inference",
          "name": "Inference",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Inference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "Inference",
          "package": "crf-chain1",
          "partial": "Inference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the accuracy of the model with respect to the labeled dataset.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "accuracy",
          "package": "crf-chain1",
          "signature": "Model -\u003e [(Xs, Ys)] -\u003e Double",
          "source": "src/Data-CRF-Chain1-Inference.html#accuracy",
          "type": "function"
        },
        "index": {
          "description": "Compute the accuracy of the model with respect to the labeled dataset",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "accuracy",
          "normalized": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
          "package": "crf-chain1",
          "signature": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:accuracy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of features (represented by feature indices) defined within\n the context of the sentence accompanied by expected probabilities\n determined on the basis of the model. \n\u003c/p\u003e\u003cp\u003eOne feature can occur multiple times in the output list.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "expectedFeaturesIn",
          "package": "crf-chain1",
          "signature": "Model -\u003e Xs -\u003e [(FeatIx, LogFloat)]",
          "source": "src/Data-CRF-Chain1-Inference.html#expectedFeaturesIn",
          "type": "function"
        },
        "index": {
          "description": "list of features represented by feature indices defined within the context of the sentence accompanied by expected probabilities determined on the basis of the model One feature can occur multiple times in the output list",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "expectedFeaturesIn",
          "normalized": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
          "package": "crf-chain1",
          "partial": "Features In",
          "signature": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:expectedFeaturesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag probabilities with respect to marginal distributions.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "marginals",
          "package": "crf-chain1",
          "signature": "Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
          "source": "src/Data-CRF-Chain1-Inference.html#marginals",
          "type": "function"
        },
        "index": {
          "description": "Tag probabilities with respect to marginal distributions",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "marginals",
          "normalized": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "package": "crf-chain1",
          "signature": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:marginals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the most probable label sequence given the context of the\n CRF model and the sentence.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "tag",
          "package": "crf-chain1",
          "signature": "Model -\u003e Xs -\u003e [Lb]",
          "source": "src/Data-CRF-Chain1-Inference.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Determine the most probable label sequence given the context of the CRF model and the sentence",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "tag",
          "normalized": "Model-\u003eXs-\u003e[Lb]",
          "package": "crf-chain1",
          "signature": "Model-\u003eXs-\u003e[Lb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n backward computation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "zx",
          "package": "crf-chain1",
          "signature": "Model -\u003e Xs -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Inference.html#zx",
          "type": "function"
        },
        "index": {
          "description": "Normalization factor computed for the Xs sentence using the backward computation",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "zx",
          "normalized": "Model-\u003eXs-\u003eLogFloat",
          "package": "crf-chain1",
          "signature": "Model-\u003eXs-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:zx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n forward computation.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Inference",
          "name": "zx'",
          "package": "crf-chain1",
          "signature": "Model -\u003e Xs -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Inference.html#zx%27",
          "type": "function"
        },
        "index": {
          "description": "Normalization factor computed for the Xs sentence using the forward computation",
          "hierarchy": "Data CRF Chain1 Inference",
          "module": "Data.CRF.Chain1.Inference",
          "name": "zx'",
          "normalized": "Model-\u003eXs-\u003eLogFloat",
          "package": "crf-chain1",
          "signature": "Model-\u003eXs-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:zx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal implementation of the CRF model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Internal implementation of the CRF model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature index.  To every model feature a unique index is assigned.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "FeatIx",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Model.html#FeatIx",
          "type": "newtype"
        },
        "index": {
          "description": "feature index To every model feature unique index is assigned",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "FeatIx",
          "package": "crf-chain1",
          "partial": "Feat Ix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#t:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe model is realy a map from features to potentials, but for the sake\n of efficiency the internal representation is more complex.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "data"
        },
        "index": {
          "description": "The model is realy map from features to potentials but for the sake of efficiency the internal representation is more complex",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Model",
          "name": "FeatIx",
          "package": "crf-chain1",
          "signature": "FeatIx",
          "source": "src/Data-CRF-Chain1-Model.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "FeatIx",
          "package": "crf-chain1",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:FeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "signature": "Model",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "Model",
          "package": "crf-chain1",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efeatToIx\u003c/a\u003e\u003c/code\u003e but immediately unwrap the feature index to\n integer value.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "featToInt",
          "package": "crf-chain1",
          "signature": "Model -\u003e Feature -\u003e Int",
          "source": "src/Data-CRF-Chain1-Model.html#featToInt",
          "type": "function"
        },
        "index": {
          "description": "Same as featToIx but immediately unwrap the feature index to integer value",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "featToInt",
          "normalized": "Model-\u003eFeature-\u003eInt",
          "package": "crf-chain1",
          "partial": "To Int",
          "signature": "Model-\u003eFeature-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:featToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the index for the given feature.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "featToIx",
          "package": "crf-chain1",
          "signature": "Model -\u003e Feature -\u003e FeatIx",
          "source": "src/Data-CRF-Chain1-Model.html#featToIx",
          "type": "function"
        },
        "index": {
          "description": "Determine the index for the given feature",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "featToIx",
          "normalized": "Model-\u003eFeature-\u003eFeatIx",
          "package": "crf-chain1",
          "partial": "To Ix",
          "signature": "Model-\u003eFeature-\u003eFeatIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:featToIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from features to feature indices\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "ixMap",
          "package": "crf-chain1",
          "signature": "Map Feature FeatIx",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "map from features to feature indices",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "ixMap",
          "package": "crf-chain1",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:ixMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of labels. The label set is of the {0, 1, .., lbNum - 1}\n form, which is guaranteed by the codec.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "lbNum",
          "package": "crf-chain1",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Number of labels The label set is of the lbNum form which is guaranteed by the codec",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "lbNum",
          "package": "crf-chain1",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:lbNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of labels [0 .. \u003ccode\u003e\u003ca\u003elbNum\u003c/a\u003e\u003c/code\u003e - 1].\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "lbSet",
          "package": "crf-chain1",
          "signature": "Model -\u003e [Lb]",
          "source": "src/Data-CRF-Chain1-Model.html#lbSet",
          "type": "function"
        },
        "index": {
          "description": "List of labels lbNum",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "lbSet",
          "normalized": "Model-\u003e[Lb]",
          "package": "crf-chain1",
          "partial": "Set",
          "signature": "Model-\u003e[Lb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:lbSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the model from the list of features.  All parameters will be\n set to 0.  There may be repetitions in the input list.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "mkModel",
          "package": "crf-chain1",
          "signature": "[Feature] -\u003e Model",
          "source": "src/Data-CRF-Chain1-Model.html#mkModel",
          "type": "function"
        },
        "index": {
          "description": "Construct the model from the list of features All parameters will be set to There may be repetitions in the input list",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "mkModel",
          "normalized": "[Feature]-\u003eModel",
          "package": "crf-chain1",
          "partial": "Model",
          "signature": "[Feature]-\u003eModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:mkModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of ,,next'' labels which constitute a valid feature in combination\n with the ,,current'' label accompanied by feature indices determined by\n ,,next'' labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "nextIxs",
          "package": "crf-chain1",
          "signature": "Model -\u003e Lb -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain1-Model.html#nextIxs",
          "type": "function"
        },
        "index": {
          "description": "List of next labels which constitute valid feature in combination with the current label accompanied by feature indices determined by next labels",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "nextIxs",
          "normalized": "Model-\u003eLb-\u003e[LbIx]",
          "package": "crf-chain1",
          "partial": "Ixs",
          "signature": "Model-\u003eLb-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:nextIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of ,,next'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "nextIxsV",
          "package": "crf-chain1",
          "signature": "Vector (Vector LbIx)",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of next labels for the value of the current label Both labels constitute transition feature present in the the model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "nextIxsV",
          "package": "crf-chain1",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:nextIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of labels which constitute a valid feature in combination with\n the given observation accompanied by feature indices determined by\n these labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "obIxs",
          "package": "crf-chain1",
          "signature": "Model -\u003e Ob -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain1-Model.html#obIxs",
          "type": "function"
        },
        "index": {
          "description": "List of labels which constitute valid feature in combination with the given observation accompanied by feature indices determined by these labels",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "obIxs",
          "normalized": "Model-\u003eOb-\u003e[LbIx]",
          "package": "crf-chain1",
          "partial": "Ixs",
          "signature": "Model-\u003eOb-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:obIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of labels for the given observation which, together with the\n observation, constitute an observation feature of the model. \n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "obIxsV",
          "package": "crf-chain1",
          "signature": "Vector (Vector LbIx)",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of labels for the given observation which together with the observation constitute an observation feature of the model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "obIxsV",
          "package": "crf-chain1",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:obIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of ,,previous'' labels which constitute a valid feature in\n combination with the ,,current'' label accompanied by feature indices\n determined by ,,previous'' labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "prevIxs",
          "package": "crf-chain1",
          "signature": "Model -\u003e Lb -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain1-Model.html#prevIxs",
          "type": "function"
        },
        "index": {
          "description": "List of previous labels which constitute valid feature in combination with the current label accompanied by feature indices determined by previous labels",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "prevIxs",
          "normalized": "Model-\u003eLb-\u003e[LbIx]",
          "package": "crf-chain1",
          "partial": "Ixs",
          "signature": "Model-\u003eLb-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:prevIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of ,,previous'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "prevIxsV",
          "package": "crf-chain1",
          "signature": "Vector (Vector LbIx)",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Set of previous labels for the value of the current label Both labels constitute transition feature present in the the model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "prevIxsV",
          "package": "crf-chain1",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:prevIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of labels which can be located on the first position of\n a sentence together with feature indices determined by them.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgIxs",
          "package": "crf-chain1",
          "signature": "Model -\u003e [LbIx]",
          "source": "src/Data-CRF-Chain1-Model.html#sgIxs",
          "type": "function"
        },
        "index": {
          "description": "List of labels which can be located on the first position of sentence together with feature indices determined by them",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgIxs",
          "normalized": "Model-\u003e[LbIx]",
          "package": "crf-chain1",
          "partial": "Ixs",
          "signature": "Model-\u003e[LbIx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgIxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingular feature index for the given label.  Index is equall to -1\n if feature is not present in the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgIxsV",
          "package": "crf-chain1",
          "signature": "Vector FeatIx",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Singular feature index for the given label Index is equall to if feature is not present in the model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgIxsV",
          "package": "crf-chain1",
          "partial": "Ixs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgIxsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential value (in log domain) of the singular feature with the\n given label.  The value defaults to 0 when the feature is not a\n member of the model.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgValue",
          "package": "crf-chain1",
          "signature": "Model -\u003e Lb -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Model.html#sgValue",
          "type": "function"
        },
        "index": {
          "description": "Potential value in log domain of the singular feature with the given label The value defaults to when the feature is not member of the model",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "sgValue",
          "normalized": "Model-\u003eLb-\u003eLogFloat",
          "package": "crf-chain1",
          "partial": "Value",
          "signature": "Model-\u003eLb-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Model",
          "name": "unFeatIx",
          "package": "crf-chain1",
          "signature": "Int",
          "source": "src/Data-CRF-Chain1-Model.html#FeatIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "unFeatIx",
          "package": "crf-chain1",
          "partial": "Feat Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:unFeatIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModel potential defined for the given feature interpreted as a\n number in logarithmic domain.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "valueL",
          "package": "crf-chain1",
          "signature": "Model -\u003e FeatIx -\u003e LogFloat",
          "source": "src/Data-CRF-Chain1-Model.html#valueL",
          "type": "function"
        },
        "index": {
          "description": "Model potential defined for the given feature interpreted as number in logarithmic domain",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "valueL",
          "normalized": "Model-\u003eFeatIx-\u003eLogFloat",
          "package": "crf-chain1",
          "signature": "Model-\u003eFeatIx-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:valueL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue (potential) of the model for feature index.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Model",
          "name": "values",
          "package": "crf-chain1",
          "signature": "Vector Double",
          "source": "src/Data-CRF-Chain1-Model.html#Model",
          "type": "function"
        },
        "index": {
          "description": "Value potential of the model for feature index",
          "hierarchy": "Data CRF Chain1 Model",
          "module": "Data.CRF.Chain1.Model",
          "name": "values",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CRF.Chain1.Train",
          "name": "Train",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Train.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "Train",
          "package": "crf-chain1",
          "partial": "Train",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1.Train",
          "name": "CRF",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Train.html#CRF",
          "type": "data"
        },
        "index": {
          "description": "conditional random field model with additional codec used for data encoding",
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "CRF",
          "package": "crf-chain1",
          "partial": "CRF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#t:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CRF.Chain1.Train\",\"Data.CRF.Chain1\"]",
          "name": "CRF",
          "package": "crf-chain1",
          "signature": "CRF",
          "source": "src/Data-CRF-Chain1-Train.html#CRF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:CRF\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:CRF\"]"
        },
        "index": {
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "CRF",
          "package": "crf-chain1",
          "partial": "CRF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe codec is used to transform data into internal representation,\n where each observation and each label is represented by a unique\n integer number.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Train\",\"Data.CRF.Chain1\"]",
          "name": "codec",
          "package": "crf-chain1",
          "signature": "Codec a b",
          "source": "src/Data-CRF-Chain1-Train.html#CRF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:codec\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:codec\"]"
        },
        "index": {
          "description": "The codec is used to transform data into internal representation where each observation and each label is represented by unique integer number",
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "codec",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual model, which is a map from \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es to potentials.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Train\",\"Data.CRF.Chain1\"]",
          "name": "model",
          "package": "crf-chain1",
          "signature": "Model",
          "source": "src/Data-CRF-Chain1-Train.html#CRF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:model\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:model\"]"
        },
        "index": {
          "description": "The actual model which is map from Feature to potentials",
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "model",
          "package": "crf-chain1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n The resulting model will contain features extracted with\n the user supplied extraction function.\n You can use the functions provided by the \u003ca\u003eData.CRF.Chain1.Feature.Present\u003c/a\u003e\n and \u003ca\u003eData.CRF.Chain1.Feature.Hidden\u003c/a\u003e modules for this purpose.\n When the evaluation data \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, the iterative\n training process will notify the user about the current accuracy\n on the evaluation part every full iteration over the training part.\n\u003c/p\u003e",
          "module": "[\"Data.CRF.Chain1.Train\",\"Data.CRF.Chain1\"]",
          "name": "train",
          "package": "crf-chain1",
          "signature": "SgdArgs-\u003e IO [SentL a b]-\u003e Maybe (b, IO [SentL a b])-\u003e ([(Xs, Ys)] -\u003e [Feature])-\u003e IO (CRF a b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:train\",\"http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:train\"]"
        },
        "index": {
          "description": "Train the CRF using the stochastic gradient descent method The resulting model will contain features extracted with the user supplied extraction function You can use the functions provided by the Data.CRF.Chain1.Feature.Present and Data.CRF.Chain1.Feature.Hidden modules for this purpose When the evaluation data IO action is Just the iterative training process will notify the user about the current accuracy on the evaluation part every full iteration over the training part",
          "hierarchy": "Data CRF Chain1 Train",
          "module": "Data.CRF.Chain1.Train",
          "name": "train",
          "normalized": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)",
          "package": "crf-chain1",
          "signature": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides first-order, linear-chain conditional random fields\n (CRFs).\n\u003c/p\u003e\u003cp\u003eImportant feature of the implemented flavour of CRFs is that transition\n features which are not included in the CRF model are considered to have\n probability of 0. \n It is particularly useful when the training material determines the set\n of possible label transitions (e.g. when using the IOB encoding method).\n Furthermore, this design decision makes the implementation much faster\n for sparse datasets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CRF.Chain1",
          "name": "Chain1",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides first-order linear-chain conditional random fields CRFs Important feature of the implemented flavour of CRFs is that transition features which are not included in the CRF model are considered to have probability of It is particularly useful when the training material determines the set of possible label transitions e.g when using the IOB encoding method Furthermore this design decision makes the implementation much faster for sparse datasets",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "Chain1",
          "package": "crf-chain1",
          "partial": "Chain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "CRF",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Train.html#CRF",
          "type": "data"
        },
        "index": {
          "description": "conditional random field model with additional codec used for data encoding",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "CRF",
          "package": "crf-chain1",
          "partial": "CRF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:CRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "Dist",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Dist",
          "type": "data"
        },
        "index": {
          "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "Dist",
          "package": "crf-chain1",
          "partial": "Dist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "Sent",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Sent",
          "type": "type"
        },
        "index": {
          "description": "sentence of words",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "Sent",
          "package": "crf-chain1",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "SentL",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#SentL",
          "type": "type"
        },
        "index": {
          "description": "sentence of labeled words",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "SentL",
          "package": "crf-chain1",
          "partial": "Sent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:SentL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Word is represented by a set of observations.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "Word",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#Word",
          "type": "type"
        },
        "index": {
          "description": "Word is represented by set of observations",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "Word",
          "package": "crf-chain1",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "WordL",
          "package": "crf-chain1",
          "source": "src/Data-CRF-Chain1-Dataset-External.html#WordL",
          "type": "type"
        },
        "index": {
          "description": "WordL is labeled word i.e word with probability distribution defined over labels",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "WordL",
          "package": "crf-chain1",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:WordL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the most probable label sequence within the context of the\n given sentence using the model provided by the \u003ccode\u003e\u003ca\u003eCRF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CRF.Chain1",
          "name": "tag",
          "package": "crf-chain1",
          "signature": "CRF a b -\u003e Sent a -\u003e [b]",
          "source": "src/Data-CRF-Chain1.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Determine the most probable label sequence within the context of the given sentence using the model provided by the CRF",
          "hierarchy": "Data CRF Chain1",
          "module": "Data.CRF.Chain1",
          "name": "tag",
          "normalized": "CRF a b-\u003eSent a-\u003e[b]",
          "package": "crf-chain1",
          "signature": "CRF a b-\u003eSent a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:tag"
      }
    }
  ]
]