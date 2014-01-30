[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html",
        "fct-type": "module",
        "title": "Codec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "Codec",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#t:Codec",
      "description": {
        "fct-descr": "\u003cp\u003eA codec.  The first component is used to encode observations\n of type a, the second one is used to encode labels of type b.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#Codec",
        "fct-type": "type",
        "title": "Codec"
      },
      "index": {
        "description": "codec The first component is used to encode observations of type the second one is used to encode labels of type",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "Codec",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#t:CodecM",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for the codec monad.  It is important to notice that by a\n codec we denote here a structure of two \u003ccode\u003e\u003ca\u003eAtomCodec\u003c/a\u003e\u003c/code\u003es while in the\n monad-codec package it denotes a monad.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#CodecM",
        "fct-type": "type",
        "title": "CodecM"
      },
      "index": {
        "description": "Type synonym for the codec monad It is important to notice that by codec we denote here structure of two AtomCodec while in the monad-codec package it denotes monad",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "CodecM",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:decodeLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b -\u003e Lb -\u003e b",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#decodeLabel",
        "fct-type": "function",
        "title": "decodeLabel"
      },
      "index": {
        "description": "Decode the label",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "decodeLabel",
        "normalized": "Codec a b-\u003eLb-\u003eb",
        "package": "crf-chain1",
        "partial": "Label",
        "signature": "Codec a b-\u003eLb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:decodeLabels",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the sequence of labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b -\u003e [Lb] -\u003e [b]",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#decodeLabels",
        "fct-type": "function",
        "title": "decodeLabels"
      },
      "index": {
        "description": "Decode the sequence of labels",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "decodeLabels",
        "normalized": "Codec a b-\u003e[Lb]-\u003e[b]",
        "package": "crf-chain1",
        "partial": "Labels",
        "signature": "Codec a b-\u003e[Lb]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeData",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the dataset with the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b -\u003e [Sent a] -\u003e [Xs]",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeData",
        "fct-type": "function",
        "title": "encodeData"
      },
      "index": {
        "description": "Encode the dataset with the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeData",
        "normalized": "Codec a b-\u003e[Sent a]-\u003e[Xs]",
        "package": "crf-chain1",
        "partial": "Data",
        "signature": "Codec a b-\u003e[Sent a]-\u003e[Xs]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeDataL",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled dataset using the codec.  Substitute the default\n label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "b -\u003e Codec a b -\u003e [SentL a b] -\u003e [(Xs, Ys)]",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeDataL",
        "fct-type": "function",
        "title": "encodeDataL"
      },
      "index": {
        "description": "Encode the labeled dataset using the codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeDataL",
        "normalized": "a-\u003eCodec b a-\u003e[SentL b a]-\u003e[(Xs,Ys)]",
        "package": "crf-chain1",
        "partial": "Data",
        "signature": "b-\u003eCodec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence using the given codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b -\u003e Sent a -\u003e Xs",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent",
        "fct-type": "function",
        "title": "encodeSent"
      },
      "index": {
        "description": "Encode the sentence using the given codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSent",
        "normalized": "Codec a b-\u003eSent a-\u003eXs",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": "Codec a b-\u003eSent a-\u003eXs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence and do *not* update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Sent a -\u003e CodecM a b Xs",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent%27Cn",
        "fct-type": "function",
        "title": "encodeSent'Cn"
      },
      "index": {
        "description": "Encode the sentence and do not update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSent'Cn",
        "normalized": "Sent a-\u003eCodecM a b Xs",
        "package": "crf-chain1",
        "partial": "Sent' Cn",
        "signature": "Sent a-\u003eCodecM a b Xs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSent-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Sent a -\u003e CodecM a b Xs",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSent%27Cu",
        "fct-type": "function",
        "title": "encodeSent'Cu"
      },
      "index": {
        "description": "Encode the sentence and update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSent'Cu",
        "normalized": "Sent a-\u003eCodecM a b Xs",
        "package": "crf-chain1",
        "partial": "Sent' Cu",
        "signature": "Sent a-\u003eCodecM a b Xs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence with the given codec.  Substitute the\n default label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "b -\u003e Codec a b -\u003e SentL a b -\u003e (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL",
        "fct-type": "function",
        "title": "encodeSentL"
      },
      "index": {
        "description": "Encode the labeled sentence with the given codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSentL",
        "normalized": "a-\u003eCodec b a-\u003eSentL b a-\u003e(Xs,Ys)",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": "b-\u003eCodec a b-\u003eSentL a b-\u003e(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence and do *not* update the codec.\n Substitute the default label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "b -\u003e SentL a b -\u003e CodecM a b (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL%27Cn",
        "fct-type": "function",
        "title": "encodeSentL'Cn"
      },
      "index": {
        "description": "Encode the labeled sentence and do not update the codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSentL'Cn",
        "normalized": "a-\u003eSentL b a-\u003eCodecM b a(Xs,Ys)",
        "package": "crf-chain1",
        "partial": "Sent L' Cn",
        "signature": "b-\u003eSentL a b-\u003eCodecM a b(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeSentL-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeSentL%27Cu",
        "fct-type": "function",
        "title": "encodeSentL'Cu"
      },
      "index": {
        "description": "Encode the labeled sentence and update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeSentL'Cu",
        "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
        "package": "crf-chain1",
        "partial": "Sent L' Cu",
        "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWord-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the word and do *not* update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Word a -\u003e CodecM a b X",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWord%27Cn",
        "fct-type": "function",
        "title": "encodeWord'Cn"
      },
      "index": {
        "description": "Encode the word and do not update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeWord'Cn",
        "normalized": "Word a-\u003eCodecM a b X",
        "package": "crf-chain1",
        "partial": "Word' Cn",
        "signature": "Word a-\u003eCodecM a b X"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWord-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the word and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Word a -\u003e CodecM a b X",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWord%27Cu",
        "fct-type": "function",
        "title": "encodeWord'Cu"
      },
      "index": {
        "description": "Encode the word and update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeWord'Cu",
        "normalized": "Word a-\u003eCodecM a b X",
        "package": "crf-chain1",
        "partial": "Word' Cu",
        "signature": "Word a-\u003eCodecM a b X"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWordL-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncodec the labeled word and do *not* update the codec.\n If the label is not in the codec, use the default value.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "Int -\u003e WordL a b -\u003e CodecM a b (X, Y)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWordL%27Cn",
        "fct-type": "function",
        "title": "encodeWordL'Cn"
      },
      "index": {
        "description": "Encodec the labeled word and do not update the codec If the label is not in the codec use the default value",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeWordL'Cn",
        "normalized": "Int-\u003eWordL a b-\u003eCodecM a b(X,Y)",
        "package": "crf-chain1",
        "partial": "Word L' Cn",
        "signature": "Int-\u003eWordL a b-\u003eCodecM a b(X,Y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:encodeWordL-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled word and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "WordL a b -\u003e CodecM a b (X, Y)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#encodeWordL%27Cu",
        "fct-type": "function",
        "title": "encodeWordL'Cu"
      },
      "index": {
        "description": "Encode the labeled word and update the codec",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "encodeWordL'Cu",
        "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
        "package": "crf-chain1",
        "partial": "Word L' Cu",
        "signature": "WordL a b-\u003eCodecM a b(X,Y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Codec.html#v:mkCodec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the codec on the basis of the labeled dataset, return the\n resultant codec and the encoded dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Codec",
        "fct-package": "crf-chain1",
        "fct-signature": "[SentL a b] -\u003e (Codec a b, [(Xs, Ys)])",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Codec.html#mkCodec",
        "fct-type": "function",
        "title": "mkCodec"
      },
      "index": {
        "description": "Create the codec on the basis of the labeled dataset return the resultant codec and the encoded dataset",
        "hierarchy": "Data CRF Chain1 Dataset Codec",
        "module": "Data.CRF.Chain1.Dataset.Codec",
        "name": "mkCodec",
        "normalized": "[SentL a b]-\u003e(Codec a b,[(Xs,Ys)])",
        "package": "crf-chain1",
        "partial": "Codec",
        "signature": "[SentL a b]-\u003e(Codec a b,[(Xs,Ys)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html",
        "fct-type": "module",
        "title": "External"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "External",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Dist",
      "description": {
        "fct-descr": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Dist",
        "fct-type": "data",
        "title": "Dist"
      },
      "index": {
        "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "Dist",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Sent",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Sent",
        "fct-type": "type",
        "title": "Sent"
      },
      "index": {
        "description": "sentence of words",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "Sent",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:SentL",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#SentL",
        "fct-type": "type",
        "title": "SentL"
      },
      "index": {
        "description": "sentence of labeled words",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "SentL",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA Word is represented by a set of observations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Word",
        "fct-type": "type",
        "title": "Word"
      },
      "index": {
        "description": "Word is represented by set of observations",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#t:WordL",
      "description": {
        "fct-descr": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#WordL",
        "fct-type": "type",
        "title": "WordL"
      },
      "index": {
        "description": "WordL is labeled word i.e word with probability distribution defined over labels",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "WordL",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate the word with the label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "Word a -\u003e b -\u003e WordL a b",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "Annotate the word with the label",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "annotate",
        "normalized": "Word a-\u003eb-\u003eWordL a b",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Word a-\u003eb-\u003eWordL a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-External.html#v:mkDist",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.External",
        "fct-package": "crf-chain1",
        "fct-signature": "[(a, Double)] -\u003e Dist a",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#mkDist",
        "fct-type": "function",
        "title": "mkDist"
      },
      "index": {
        "description": "Construct the probability distribution",
        "hierarchy": "Data CRF Chain1 Dataset External",
        "module": "Data.CRF.Chain1.Dataset.External",
        "name": "mkDist",
        "normalized": "[(a,Double)]-\u003eDist a",
        "package": "crf-chain1",
        "partial": "Dist",
        "signature": "[(a,Double)]-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Lb",
      "description": {
        "fct-descr": "\u003cp\u003eA label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
        "fct-type": "newtype",
        "title": "Lb"
      },
      "index": {
        "description": "label",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Lb",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Ob",
      "description": {
        "fct-descr": "\u003cp\u003eAn observation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
        "fct-type": "newtype",
        "title": "Ob"
      },
      "index": {
        "description": "An observation",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Ob",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eSimple word represented by a list of its observations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
        "fct-type": "newtype",
        "title": "X"
      },
      "index": {
        "description": "Simple word represented by list of its observations",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "X",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Xs",
      "description": {
        "fct-descr": "\u003cp\u003eSentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Xs",
        "fct-type": "type",
        "title": "Xs"
      },
      "index": {
        "description": "Sentence of words",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Xs",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Xs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Y",
      "description": {
        "fct-descr": "\u003cp\u003eProbability distribution over labels. \n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
        "fct-type": "newtype",
        "title": "Y"
      },
      "index": {
        "description": "Probability distribution over labels",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Y",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#t:Ys",
      "description": {
        "fct-descr": "\u003cp\u003eSentence of Y (label choices).\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ys",
        "fct-type": "type",
        "title": "Ys"
      },
      "index": {
        "description": "Sentence of label choices",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Ys",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Lb",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Lb",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
        "fct-type": "function",
        "title": "Lb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Lb",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Ob",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Ob",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
        "fct-type": "function",
        "title": "Ob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Ob",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:X",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "X",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "X",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:Y",
      "description": {
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Y",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
        "fct-type": "function",
        "title": "Y"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "Y",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:_unX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector Ob",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "_unX"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "_unX",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:_unY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector (Lb, Double)",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Y",
        "fct-type": "function",
        "title": "_unY"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "_unY",
        "normalized": "Vector(Lb,Double)",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Vector(Lb,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:mkX",
      "description": {
        "fct-descr": "\u003cp\u003eX constructor.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "[Ob] -\u003e X",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#mkX",
        "fct-type": "function",
        "title": "mkX"
      },
      "index": {
        "description": "constructor",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "mkX",
        "normalized": "[Ob]-\u003eX",
        "package": "crf-chain1",
        "partial": "",
        "signature": "[Ob]-\u003eX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:mkY",
      "description": {
        "fct-descr": "\u003cp\u003eY constructor.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Lb, Double)] -\u003e Y",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#mkY",
        "fct-type": "function",
        "title": "mkY"
      },
      "index": {
        "description": "constructor",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "mkY",
        "normalized": "[(Lb,Double)]-\u003eY",
        "package": "crf-chain1",
        "partial": "",
        "signature": "[(Lb,Double)]-\u003eY"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unLb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Lb",
        "fct-type": "function",
        "title": "unLb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "unLb",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unOb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#Ob",
        "fct-type": "function",
        "title": "unOb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "unOb",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unX",
      "description": {
        "fct-descr": "\u003cp\u003eX deconstructor symetric to mkX.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "X -\u003e [Ob]",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#unX",
        "fct-type": "function",
        "title": "unX"
      },
      "index": {
        "description": "deconstructor symetric to mkX",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "unX",
        "normalized": "X-\u003e[Ob]",
        "package": "crf-chain1",
        "partial": "",
        "signature": "X-\u003e[Ob]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Dataset-Internal.html#v:unY",
      "description": {
        "fct-descr": "\u003cp\u003eY deconstructor symetric to mkY.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Dataset.Internal",
        "fct-package": "crf-chain1",
        "fct-signature": "Y -\u003e [(Lb, Double)]",
        "fct-source": "src/Data-CRF-Chain1-Dataset-Internal.html#unY",
        "fct-type": "function",
        "title": "unY"
      },
      "index": {
        "description": "deconstructor symetric to mkY",
        "hierarchy": "Data CRF Chain1 Dataset Internal",
        "module": "Data.CRF.Chain1.Dataset.Internal",
        "name": "unY",
        "normalized": "Y-\u003e[(Lb,Double)]",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Y-\u003e[(Lb,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n hidden features, i.e. all features which can be constructed \n (by means of cartesian product) on the basis of the set of\n observations and the set of labels.\n For example, the list of hidden observation features can\n be defined as \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003c$\u003e\u003c/code\u003e os \u003ccode\u003e\u003c*\u003e\u003c/code\u003e xs, where os is a\n list of all observations and xs is a list of all labels.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Feature.Present\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Hidden",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html",
        "fct-type": "module",
        "title": "Hidden"
      },
      "index": {
        "description": "The module provides feature selection functions which extract hidden features i.e all features which can be constructed by means of cartesian product on the basis of the set of observations and the set of labels For example the list of hidden observation features can be defined as OFeature os xs where os is list of all observations and xs is list of all labels You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Feature.Present module",
        "hierarchy": "Data CRF Chain1 Feature Hidden",
        "module": "Data.CRF.Chain1.Feature.Hidden",
        "name": "Hidden",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all types which can be constructed\n based on the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Hidden",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenFeats",
        "fct-type": "function",
        "title": "hiddenFeats"
      },
      "index": {
        "description": "Hidden Feature of all types which can be constructed based on the dataset",
        "hierarchy": "Data CRF Chain1 Feature Hidden",
        "module": "Data.CRF.Chain1.Feature.Hidden",
        "name": "hiddenFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "Feats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenOFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Hidden",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenOFeats",
        "fct-type": "function",
        "title": "hiddenOFeats"
      },
      "index": {
        "description": "Hidden OFeature which can be constructed based on the dataset",
        "hierarchy": "Data CRF Chain1 Feature Hidden",
        "module": "Data.CRF.Chain1.Feature.Hidden",
        "name": "hiddenOFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "OFeats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenSFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Hidden",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenSFeats",
        "fct-type": "function",
        "title": "hiddenSFeats"
      },
      "index": {
        "description": "Hidden SFeature which can be constructed based on the dataset",
        "hierarchy": "Data CRF Chain1 Feature Hidden",
        "module": "Data.CRF.Chain1.Feature.Hidden",
        "name": "hiddenSFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "SFeats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Hidden.html#v:hiddenTFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Hidden",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenTFeats",
        "fct-type": "function",
        "title": "hiddenTFeats"
      },
      "index": {
        "description": "Hidden TFeature which can be constructed based on the dataset",
        "hierarchy": "Data CRF Chain1 Feature Hidden",
        "module": "Data.CRF.Chain1.Feature.Hidden",
        "name": "hiddenTFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "TFeats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n features present in the dataset, i.e. features which directly occure\n the dataset.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Feature.Hidden\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Present",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html",
        "fct-type": "module",
        "title": "Present"
      },
      "index": {
        "description": "The module provides feature selection functions which extract features present in the dataset i.e features which directly occure the dataset You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Feature.Hidden module",
        "hierarchy": "Data CRF Chain1 Feature Present",
        "module": "Data.CRF.Chain1.Feature.Present",
        "name": "Present",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Present",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all kinds which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Present",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html#presentFeats",
        "fct-type": "function",
        "title": "presentFeats"
      },
      "index": {
        "description": "Feature of all kinds which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Feature Present",
        "module": "Data.CRF.Chain1.Feature.Present",
        "name": "presentFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "Feats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentOFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Present",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html#presentOFeats",
        "fct-type": "function",
        "title": "presentOFeats"
      },
      "index": {
        "description": "OFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Feature Present",
        "module": "Data.CRF.Chain1.Feature.Present",
        "name": "presentOFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "OFeats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentSFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Present",
        "fct-package": "crf-chain1",
        "fct-signature": "[(a, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html#presentSFeats",
        "fct-type": "function",
        "title": "presentSFeats"
      },
      "index": {
        "description": "SFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Feature Present",
        "module": "Data.CRF.Chain1.Feature.Present",
        "name": "presentSFeats",
        "normalized": "[(a,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "SFeats",
        "signature": "[(a,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature-Present.html#v:presentTFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature.Present",
        "fct-package": "crf-chain1",
        "fct-signature": "[(a, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html#presentTFeats",
        "fct-type": "function",
        "title": "presentTFeats"
      },
      "index": {
        "description": "TFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Feature Present",
        "module": "Data.CRF.Chain1.Feature.Present",
        "name": "presentTFeats",
        "normalized": "[(a,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "TFeats",
        "signature": "[(a,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Feature.html",
        "fct-type": "module",
        "title": "Feature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "Feature",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#t:Feature",
      "description": {
        "fct-descr": "\u003cp\u003eA Feature is either an observation feature OFeature o x, which\n models relation between observation o and label x assigned to\n the same word, or a transition feature TFeature x y (SFeature x\n for the first position in the sentence), which models relation\n between two subsequent labels, x (on i-th position) and y\n (on (i-1)-th positoin).\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#Feature",
        "fct-type": "data",
        "title": "Feature"
      },
      "index": {
        "description": "Feature is either an observation feature OFeature which models relation between observation and label assigned to the same word or transition feature TFeature SFeature for the first position in the sentence which models relation between two subsequent labels on i-th position and on i-1 th positoin",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "Feature",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:OFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "OFeature !Ob !Lb",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#Feature",
        "fct-type": "function",
        "title": "OFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "OFeature",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "OFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:SFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "SFeature !Lb",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#Feature",
        "fct-type": "function",
        "title": "SFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "SFeature",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "SFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:TFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "TFeature !Lb !Lb",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#Feature",
        "fct-type": "function",
        "title": "TFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "TFeature",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "TFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:featuresIn",
      "description": {
        "fct-descr": "\u003cp\u003eAll features with assigned probabilities in given labeled sentence.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "Xs -\u003e Ys -\u003e [(Feature, LogFloat)]",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#featuresIn",
        "fct-type": "function",
        "title": "featuresIn"
      },
      "index": {
        "description": "All features with assigned probabilities in given labeled sentence",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "featuresIn",
        "normalized": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
        "package": "crf-chain1",
        "partial": "In",
        "signature": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isOFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it an \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#isOFeat",
        "fct-type": "function",
        "title": "isOFeat"
      },
      "index": {
        "description": "Is it an OFeature",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "isOFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1",
        "partial": "OFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isSFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#isSFeat",
        "fct-type": "function",
        "title": "isSFeat"
      },
      "index": {
        "description": "Is it SFeature",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "isSFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1",
        "partial": "SFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Feature.html#v:isTFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Feature",
        "fct-package": "crf-chain1",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Feature.html#isTFeat",
        "fct-type": "function",
        "title": "isTFeat"
      },
      "index": {
        "description": "Is it TFeature",
        "hierarchy": "Data CRF Chain1 Feature",
        "module": "Data.CRF.Chain1.Feature",
        "name": "isTFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1",
        "partial": "TFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Inference.html",
        "fct-type": "module",
        "title": "Inference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "Inference",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Inference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:accuracy",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the accuracy of the model with respect to the labeled dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e [(Xs, Ys)] -\u003e Double",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#accuracy",
        "fct-type": "function",
        "title": "accuracy"
      },
      "index": {
        "description": "Compute the accuracy of the model with respect to the labeled dataset",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "accuracy",
        "normalized": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003e[(Xs,Ys)]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:expectedFeaturesIn",
      "description": {
        "fct-descr": "\u003cp\u003eA list of features (represented by feature indices) defined within\n the context of the sentence accompanied by expected probabilities\n determined on the basis of the model. \n\u003c/p\u003e\u003cp\u003eOne feature can occur multiple times in the output list.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Xs -\u003e [(FeatIx, LogFloat)]",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#expectedFeaturesIn",
        "fct-type": "function",
        "title": "expectedFeaturesIn"
      },
      "index": {
        "description": "list of features represented by feature indices defined within the context of the sentence accompanied by expected probabilities determined on the basis of the model One feature can occur multiple times in the output list",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "expectedFeaturesIn",
        "normalized": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
        "package": "crf-chain1",
        "partial": "Features In",
        "signature": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:marginals",
      "description": {
        "fct-descr": "\u003cp\u003eTag probabilities with respect to marginal distributions.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#marginals",
        "fct-type": "function",
        "title": "marginals"
      },
      "index": {
        "description": "Tag probabilities with respect to marginal distributions",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "marginals",
        "normalized": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the most probable label sequence given the context of the\n CRF model and the sentence.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Xs -\u003e [Lb]",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Determine the most probable label sequence given the context of the CRF model and the sentence",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "tag",
        "normalized": "Model-\u003eXs-\u003e[Lb]",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003eXs-\u003e[Lb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:zx",
      "description": {
        "fct-descr": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n backward computation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Xs -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#zx",
        "fct-type": "function",
        "title": "zx"
      },
      "index": {
        "description": "Normalization factor computed for the Xs sentence using the backward computation",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "zx",
        "normalized": "Model-\u003eXs-\u003eLogFloat",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003eXs-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Inference.html#v:zx-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n forward computation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Inference",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Xs -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Inference.html#zx%27",
        "fct-type": "function",
        "title": "zx'"
      },
      "index": {
        "description": "Normalization factor computed for the Xs sentence using the forward computation",
        "hierarchy": "Data CRF Chain1 Inference",
        "module": "Data.CRF.Chain1.Inference",
        "name": "zx'",
        "normalized": "Model-\u003eXs-\u003eLogFloat",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003eXs-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal implementation of the CRF model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "Internal implementation of the CRF model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#t:FeatIx",
      "description": {
        "fct-descr": "\u003cp\u003eA feature index.  To every model feature a unique index is assigned.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Model.html#FeatIx",
        "fct-type": "newtype",
        "title": "FeatIx"
      },
      "index": {
        "description": "feature index To every model feature unique index is assigned",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "FeatIx",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eThe model is realy a map from features to potentials, but for the sake\n of efficiency the internal representation is more complex.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "data",
        "title": "Model"
      },
      "index": {
        "description": "The model is realy map from features to potentials but for the sake of efficiency the internal representation is more complex",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:FeatIx",
      "description": {
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Model.html#FeatIx",
        "fct-type": "function",
        "title": "FeatIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "FeatIx",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:Model",
      "description": {
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:featToInt",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efeatToIx\u003c/a\u003e\u003c/code\u003e but immediately unwrap the feature index to\n integer value.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Feature -\u003e Int",
        "fct-source": "src/Data-CRF-Chain1-Model.html#featToInt",
        "fct-type": "function",
        "title": "featToInt"
      },
      "index": {
        "description": "Same as featToIx but immediately unwrap the feature index to integer value",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "featToInt",
        "normalized": "Model-\u003eFeature-\u003eInt",
        "package": "crf-chain1",
        "partial": "To Int",
        "signature": "Model-\u003eFeature-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:featToIx",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the index for the given feature.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Feature -\u003e FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Model.html#featToIx",
        "fct-type": "function",
        "title": "featToIx"
      },
      "index": {
        "description": "Determine the index for the given feature",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "featToIx",
        "normalized": "Model-\u003eFeature-\u003eFeatIx",
        "package": "crf-chain1",
        "partial": "To Ix",
        "signature": "Model-\u003eFeature-\u003eFeatIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:ixMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from features to feature indices\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Map Feature FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "ixMap"
      },
      "index": {
        "description": "map from features to feature indices",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "ixMap",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:lbNum",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of labels. The label set is of the {0, 1, .., lbNum - 1}\n form, which is guaranteed by the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "lbNum"
      },
      "index": {
        "description": "Number of labels The label set is of the lbNum form which is guaranteed by the codec",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "lbNum",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:lbSet",
      "description": {
        "fct-descr": "\u003cp\u003eList of labels [0 .. \u003ccode\u003e\u003ca\u003elbNum\u003c/a\u003e\u003c/code\u003e - 1].\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e [Lb]",
        "fct-source": "src/Data-CRF-Chain1-Model.html#lbSet",
        "fct-type": "function",
        "title": "lbSet"
      },
      "index": {
        "description": "List of labels lbNum",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "lbSet",
        "normalized": "Model-\u003e[Lb]",
        "package": "crf-chain1",
        "partial": "Set",
        "signature": "Model-\u003e[Lb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:mkModel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the model from the list of features.  All parameters will be\n set to 0.  There may be repetitions in the input list.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "[Feature] -\u003e Model",
        "fct-source": "src/Data-CRF-Chain1-Model.html#mkModel",
        "fct-type": "function",
        "title": "mkModel"
      },
      "index": {
        "description": "Construct the model from the list of features All parameters will be set to There may be repetitions in the input list",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "mkModel",
        "normalized": "[Feature]-\u003eModel",
        "package": "crf-chain1",
        "partial": "Model",
        "signature": "[Feature]-\u003eModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:nextIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of ,,next'' labels which constitute a valid feature in combination\n with the ,,current'' label accompanied by feature indices determined by\n ,,next'' labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Lb -\u003e [LbIx]",
        "fct-source": "src/Data-CRF-Chain1-Model.html#nextIxs",
        "fct-type": "function",
        "title": "nextIxs"
      },
      "index": {
        "description": "List of next labels which constitute valid feature in combination with the current label accompanied by feature indices determined by next labels",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "nextIxs",
        "normalized": "Model-\u003eLb-\u003e[LbIx]",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": "Model-\u003eLb-\u003e[LbIx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:nextIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of ,,next'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector (Vector LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "nextIxsV"
      },
      "index": {
        "description": "Set of next labels for the value of the current label Both labels constitute transition feature present in the the model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "nextIxsV",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:obIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of labels which constitute a valid feature in combination with\n the given observation accompanied by feature indices determined by\n these labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Ob -\u003e [LbIx]",
        "fct-source": "src/Data-CRF-Chain1-Model.html#obIxs",
        "fct-type": "function",
        "title": "obIxs"
      },
      "index": {
        "description": "List of labels which constitute valid feature in combination with the given observation accompanied by feature indices determined by these labels",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "obIxs",
        "normalized": "Model-\u003eOb-\u003e[LbIx]",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": "Model-\u003eOb-\u003e[LbIx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:obIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of labels for the given observation which, together with the\n observation, constitute an observation feature of the model. \n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector (Vector LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "obIxsV"
      },
      "index": {
        "description": "Set of labels for the given observation which together with the observation constitute an observation feature of the model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "obIxsV",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:prevIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of ,,previous'' labels which constitute a valid feature in\n combination with the ,,current'' label accompanied by feature indices\n determined by ,,previous'' labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Lb -\u003e [LbIx]",
        "fct-source": "src/Data-CRF-Chain1-Model.html#prevIxs",
        "fct-type": "function",
        "title": "prevIxs"
      },
      "index": {
        "description": "List of previous labels which constitute valid feature in combination with the current label accompanied by feature indices determined by previous labels",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "prevIxs",
        "normalized": "Model-\u003eLb-\u003e[LbIx]",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": "Model-\u003eLb-\u003e[LbIx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:prevIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of ,,previous'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector (Vector LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "prevIxsV"
      },
      "index": {
        "description": "Set of previous labels for the value of the current label Both labels constitute transition feature present in the the model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "prevIxsV",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of labels which can be located on the first position of\n a sentence together with feature indices determined by them.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e [LbIx]",
        "fct-source": "src/Data-CRF-Chain1-Model.html#sgIxs",
        "fct-type": "function",
        "title": "sgIxs"
      },
      "index": {
        "description": "List of labels which can be located on the first position of sentence together with feature indices determined by them",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "sgIxs",
        "normalized": "Model-\u003e[LbIx]",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": "Model-\u003e[LbIx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSingular feature index for the given label.  Index is equall to -1\n if feature is not present in the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "sgIxsV"
      },
      "index": {
        "description": "Singular feature index for the given label Index is equall to if feature is not present in the model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "sgIxsV",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:sgValue",
      "description": {
        "fct-descr": "\u003cp\u003ePotential value (in log domain) of the singular feature with the\n given label.  The value defaults to 0 when the feature is not a\n member of the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e Lb -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Model.html#sgValue",
        "fct-type": "function",
        "title": "sgValue"
      },
      "index": {
        "description": "Potential value in log domain of the singular feature with the given label The value defaults to when the feature is not member of the model",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "sgValue",
        "normalized": "Model-\u003eLb-\u003eLogFloat",
        "package": "crf-chain1",
        "partial": "Value",
        "signature": "Model-\u003eLb-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:unFeatIx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Model.html#FeatIx",
        "fct-type": "function",
        "title": "unFeatIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "unFeatIx",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:valueL",
      "description": {
        "fct-descr": "\u003cp\u003eModel potential defined for the given feature interpreted as a\n number in logarithmic domain.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Model -\u003e FeatIx -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Model.html#valueL",
        "fct-type": "function",
        "title": "valueL"
      },
      "index": {
        "description": "Model potential defined for the given feature interpreted as number in logarithmic domain",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "valueL",
        "normalized": "Model-\u003eFeatIx-\u003eLogFloat",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Model-\u003eFeatIx-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Model.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eValue (potential) of the model for feature index.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Model",
        "fct-package": "crf-chain1",
        "fct-signature": "Vector Double",
        "fct-source": "src/Data-CRF-Chain1-Model.html#Model",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "Value potential of the model for feature index",
        "hierarchy": "Data CRF Chain1 Model",
        "module": "Data.CRF.Chain1.Model",
        "name": "values",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Train.html",
        "fct-type": "module",
        "title": "Train"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "Train",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Train",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#t:CRF",
      "description": {
        "fct-descr": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "data",
        "title": "CRF"
      },
      "index": {
        "description": "conditional random field model with additional codec used for data encoding",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:CRF",
      "description": {
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "CRF",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "CRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:codec",
      "description": {
        "fct-descr": "\u003cp\u003eThe codec is used to transform data into internal representation,\n where each observation and each label is represented by a unique\n integer number.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "codec"
      },
      "index": {
        "description": "The codec is used to transform data into internal representation where each observation and each label is represented by unique integer number",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "codec",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:model",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual model, which is a map from \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es to potentials.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "Model",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "model"
      },
      "index": {
        "description": "The actual model which is map from Feature to potentials",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "model",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1-Train.html#v:train",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n The resulting model will contain features extracted with\n the user supplied extraction function.\n You can use the functions provided by the \u003ca\u003eData.CRF.Chain1.Feature.Present\u003c/a\u003e\n and \u003ca\u003eData.CRF.Chain1.Feature.Hidden\u003c/a\u003e modules for this purpose.\n When the evaluation data \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, the iterative\n training process will notify the user about the current accuracy\n on the evaluation part every full iteration over the training part.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Train",
        "fct-package": "crf-chain1",
        "fct-signature": "SgdArgs-\u003e IO [SentL a b]-\u003e Maybe (b, IO [SentL a b])-\u003e ([(Xs, Ys)] -\u003e [Feature])-\u003e IO (CRF a b)",
        "fct-type": "function",
        "title": "train"
      },
      "index": {
        "description": "Train the CRF using the stochastic gradient descent method The resulting model will contain features extracted with the user supplied extraction function You can use the functions provided by the Data.CRF.Chain1.Feature.Present and Data.CRF.Chain1.Feature.Hidden modules for this purpose When the evaluation data IO action is Just the iterative training process will notify the user about the current accuracy on the evaluation part every full iteration over the training part",
        "hierarchy": "Data CRF Chain1 Train",
        "module": "Data.CRF.Chain1.Train",
        "name": "train",
        "normalized": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)",
        "package": "crf-chain1",
        "partial": "",
        "signature": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides first-order, linear-chain conditional random fields\n (CRFs).\n\u003c/p\u003e\u003cp\u003eImportant feature of the implemented flavour of CRFs is that transition\n features which are not included in the CRF model are considered to have\n probability of 0. \n It is particularly useful when the training material determines the set\n of possible label transitions (e.g. when using the IOB encoding method).\n Furthermore, this design decision makes the implementation much faster\n for sparse datasets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1.html",
        "fct-type": "module",
        "title": "Chain1"
      },
      "index": {
        "description": "The module provides first-order linear-chain conditional random fields CRFs Important feature of the implemented flavour of CRFs is that transition features which are not included in the CRF model are considered to have probability of It is particularly useful when the training material determines the set of possible label transitions e.g when using the IOB encoding method Furthermore this design decision makes the implementation much faster for sparse datasets",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "Chain1",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Chain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:CRF",
      "description": {
        "fct-descr": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "data",
        "title": "CRF"
      },
      "index": {
        "description": "conditional random field model with additional codec used for data encoding",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Dist",
      "description": {
        "fct-descr": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Dist",
        "fct-type": "data",
        "title": "Dist"
      },
      "index": {
        "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "Dist",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Sent",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Sent",
        "fct-type": "type",
        "title": "Sent"
      },
      "index": {
        "description": "sentence of words",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "Sent",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:SentL",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#SentL",
        "fct-type": "type",
        "title": "SentL"
      },
      "index": {
        "description": "sentence of labeled words",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "SentL",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA Word is represented by a set of observations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#Word",
        "fct-type": "type",
        "title": "Word"
      },
      "index": {
        "description": "Word is represented by set of observations",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#t:WordL",
      "description": {
        "fct-descr": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#WordL",
        "fct-type": "type",
        "title": "WordL"
      },
      "index": {
        "description": "WordL is labeled word i.e word with probability distribution defined over labels",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "WordL",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:CRF",
      "description": {
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "CRF",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "CRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate the word with the label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "Word a -\u003e b -\u003e WordL a b",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "Annotate the word with the label",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "annotate",
        "normalized": "Word a-\u003eb-\u003eWordL a b",
        "package": "crf-chain1",
        "partial": "",
        "signature": "Word a-\u003eb-\u003eWordL a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:codec",
      "description": {
        "fct-descr": "\u003cp\u003eThe codec is used to transform data into internal representation,\n where each observation and each label is represented by a unique\n integer number.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "Codec a b",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "codec"
      },
      "index": {
        "description": "The codec is used to transform data into internal representation where each observation and each label is represented by unique integer number",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "codec",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:hiddenFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all types which can be constructed\n based on the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Hidden.html#hiddenFeats",
        "fct-type": "function",
        "title": "hiddenFeats"
      },
      "index": {
        "description": "Hidden Feature of all types which can be constructed based on the dataset",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "hiddenFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "Feats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:mkDist",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "[(a, Double)] -\u003e Dist a",
        "fct-source": "src/Data-CRF-Chain1-Dataset-External.html#mkDist",
        "fct-type": "function",
        "title": "mkDist"
      },
      "index": {
        "description": "Construct the probability distribution",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "mkDist",
        "normalized": "[(a,Double)]-\u003eDist a",
        "package": "crf-chain1",
        "partial": "Dist",
        "signature": "[(a,Double)]-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:model",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual model, which is a map from \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es to potentials.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "Model",
        "fct-source": "src/Data-CRF-Chain1-Train.html#CRF",
        "fct-type": "function",
        "title": "model"
      },
      "index": {
        "description": "The actual model which is map from Feature to potentials",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "model",
        "normalized": "",
        "package": "crf-chain1",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:presentFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all kinds which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Feature-Present.html#presentFeats",
        "fct-type": "function",
        "title": "presentFeats"
      },
      "index": {
        "description": "Feature of all kinds which occur in the dataset",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "presentFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1",
        "partial": "Feats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the most probable label sequence within the context of the\n given sentence using the model provided by the \u003ccode\u003e\u003ca\u003eCRF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "CRF a b -\u003e Sent a -\u003e [b]",
        "fct-source": "src/Data-CRF-Chain1.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Determine the most probable label sequence within the context of the given sentence using the model provided by the CRF",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "tag",
        "normalized": "CRF a b-\u003eSent a-\u003e[b]",
        "package": "crf-chain1",
        "partial": "",
        "signature": "CRF a b-\u003eSent a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1/docs/Data-CRF-Chain1.html#v:train",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n The resulting model will contain features extracted with\n the user supplied extraction function.\n You can use the functions provided by the \u003ca\u003eData.CRF.Chain1.Feature.Present\u003c/a\u003e\n and \u003ca\u003eData.CRF.Chain1.Feature.Hidden\u003c/a\u003e modules for this purpose.\n When the evaluation data \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, the iterative\n training process will notify the user about the current accuracy\n on the evaluation part every full iteration over the training part.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1",
        "fct-package": "crf-chain1",
        "fct-signature": "SgdArgs-\u003e IO [SentL a b]-\u003e Maybe (b, IO [SentL a b])-\u003e ([(Xs, Ys)] -\u003e [Feature])-\u003e IO (CRF a b)",
        "fct-type": "function",
        "title": "train"
      },
      "index": {
        "description": "Train the CRF using the stochastic gradient descent method The resulting model will contain features extracted with the user supplied extraction function You can use the functions provided by the Data.CRF.Chain1.Feature.Present and Data.CRF.Chain1.Feature.Hidden modules for this purpose When the evaluation data IO action is Just the iterative training process will notify the user about the current accuracy on the evaluation part every full iteration over the training part",
        "hierarchy": "Data CRF Chain1",
        "module": "Data.CRF.Chain1",
        "name": "train",
        "normalized": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)",
        "package": "crf-chain1",
        "partial": "",
        "signature": "SgdArgs-\u003eIO[SentL a b]-\u003eMaybe(b,IO[SentL a b])-\u003e([(Xs,Ys)]-\u003e[Feature])-\u003eIO(CRF a b)"
      }
    }
  }
]