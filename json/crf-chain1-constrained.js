[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html",
        "fct-type": "module",
        "title": "Codec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "Codec",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#t:Codec",
      "description": {
        "fct-descr": "\u003cp\u003eA codec.  The first component is used to encode observations\n of type a, the second one is used to encode labels of type b.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#Codec",
        "fct-type": "type",
        "title": "Codec"
      },
      "index": {
        "description": "codec The first component is used to encode observations of type the second one is used to encode labels of type",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "Codec",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#t:CodecM",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for the codec monad.  It is important to notice that by a\n codec we denote here a structure of two \u003ccode\u003e\u003ca\u003eAtomCodec\u003c/a\u003e\u003c/code\u003es while in the\n monad-codec package it denotes a monad.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#CodecM",
        "fct-type": "type",
        "title": "CodecM"
      },
      "index": {
        "description": "Type synonym for the codec monad It is important to notice that by codec we denote here structure of two AtomCodec while in the monad-codec package it denotes monad",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "CodecM",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:decodeLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Lb -\u003e Maybe b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#decodeLabel",
        "fct-type": "function",
        "title": "decodeLabel"
      },
      "index": {
        "description": "Decode the label",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "decodeLabel",
        "normalized": "Codec a b-\u003eLb-\u003eMaybe b",
        "package": "crf-chain1-constrained",
        "partial": "Label",
        "signature": "Codec a b-\u003eLb-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:decodeLabels",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the sequence of labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e [Lb] -\u003e [Maybe b]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#decodeLabels",
        "fct-type": "function",
        "title": "decodeLabels"
      },
      "index": {
        "description": "Decode the sequence of labels",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "decodeLabels",
        "normalized": "Codec a b-\u003e[Lb]-\u003e[Maybe b]",
        "package": "crf-chain1-constrained",
        "partial": "Labels",
        "signature": "Codec a b-\u003e[Lb]-\u003e[Maybe b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeData",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the dataset with the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e [Sent a b] -\u003e [Xs]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeData",
        "fct-type": "function",
        "title": "encodeData"
      },
      "index": {
        "description": "Encode the dataset with the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeData",
        "normalized": "Codec a b-\u003e[Sent a b]-\u003e[Xs]",
        "package": "crf-chain1-constrained",
        "partial": "Data",
        "signature": "Codec a b-\u003e[Sent a b]-\u003e[Xs]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeDataL",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled dataset using the codec.  Substitute the default\n label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e [SentL a b] -\u003e [(Xs, Ys)]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeDataL",
        "fct-type": "function",
        "title": "encodeDataL"
      },
      "index": {
        "description": "Encode the labeled dataset using the codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeDataL",
        "normalized": "Codec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]",
        "package": "crf-chain1-constrained",
        "partial": "Data",
        "signature": "Codec a b-\u003e[SentL a b]-\u003e[(Xs,Ys)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeLabels",
      "description": {
        "fct-descr": "\u003cp\u003eEncode labels into an ascending vector of distinct label codes.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e [b] -\u003e AVec Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeLabels",
        "fct-type": "function",
        "title": "encodeLabels"
      },
      "index": {
        "description": "Encode labels into an ascending vector of distinct label codes",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeLabels",
        "normalized": "Codec a b-\u003e[b]-\u003eAVec Lb",
        "package": "crf-chain1-constrained",
        "partial": "Labels",
        "signature": "Codec a b-\u003e[b]-\u003eAVec Lb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence using the given codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Sent a b -\u003e Xs",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent",
        "fct-type": "function",
        "title": "encodeSent"
      },
      "index": {
        "description": "Encode the sentence using the given codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSent",
        "normalized": "Codec a b-\u003eSent a b-\u003eXs",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": "Codec a b-\u003eSent a b-\u003eXs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence and do *not* update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Sent a b -\u003e CodecM a b Xs",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent%27Cn",
        "fct-type": "function",
        "title": "encodeSent'Cn"
      },
      "index": {
        "description": "Encode the sentence and do not update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSent'Cn",
        "normalized": "Sent a b-\u003eCodecM a b Xs",
        "package": "crf-chain1-constrained",
        "partial": "Sent' Cn",
        "signature": "Sent a b-\u003eCodecM a b Xs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSent-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the sentence and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Sent a b -\u003e CodecM a b Xs",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSent%27Cu",
        "fct-type": "function",
        "title": "encodeSent'Cu"
      },
      "index": {
        "description": "Encode the sentence and update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSent'Cu",
        "normalized": "Sent a b-\u003eCodecM a b Xs",
        "package": "crf-chain1-constrained",
        "partial": "Sent' Cu",
        "signature": "Sent a b-\u003eCodecM a b Xs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence with the given codec.  Substitute the\n default label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e SentL a b -\u003e (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL",
        "fct-type": "function",
        "title": "encodeSentL"
      },
      "index": {
        "description": "Encode the labeled sentence with the given codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSentL",
        "normalized": "Codec a b-\u003eSentL a b-\u003e(Xs,Ys)",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": "Codec a b-\u003eSentL a b-\u003e(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence and do *not* update the codec.\n Substitute the default label for any label not present in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL%27Cn",
        "fct-type": "function",
        "title": "encodeSentL'Cn"
      },
      "index": {
        "description": "Encode the labeled sentence and do not update the codec Substitute the default label for any label not present in the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSentL'Cn",
        "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
        "package": "crf-chain1-constrained",
        "partial": "Sent L' Cn",
        "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeSentL-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled sentence and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "SentL a b -\u003e CodecM a b (Xs, Ys)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeSentL%27Cu",
        "fct-type": "function",
        "title": "encodeSentL'Cu"
      },
      "index": {
        "description": "Encode the labeled sentence and update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeSentL'Cu",
        "normalized": "SentL a b-\u003eCodecM a b(Xs,Ys)",
        "package": "crf-chain1-constrained",
        "partial": "Sent L' Cu",
        "signature": "SentL a b-\u003eCodecM a b(Xs,Ys)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWord-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the word and do *not* update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e CodecM a b X",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWord%27Cn",
        "fct-type": "function",
        "title": "encodeWord'Cn"
      },
      "index": {
        "description": "Encode the word and do not update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeWord'Cn",
        "normalized": "Word a b-\u003eCodecM a b X",
        "package": "crf-chain1-constrained",
        "partial": "Word' Cn",
        "signature": "Word a b-\u003eCodecM a b X"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWord-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the word and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e CodecM a b X",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWord%27Cu",
        "fct-type": "function",
        "title": "encodeWord'Cu"
      },
      "index": {
        "description": "Encode the word and update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeWord'Cu",
        "normalized": "Word a b-\u003eCodecM a b X",
        "package": "crf-chain1-constrained",
        "partial": "Word' Cu",
        "signature": "Word a b-\u003eCodecM a b X"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWordL-39-Cn",
      "description": {
        "fct-descr": "\u003cp\u003eEncodec the labeled word and do *not* update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "WordL a b -\u003e CodecM a b (X, Y)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWordL%27Cn",
        "fct-type": "function",
        "title": "encodeWordL'Cn"
      },
      "index": {
        "description": "Encodec the labeled word and do not update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeWordL'Cn",
        "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
        "package": "crf-chain1-constrained",
        "partial": "Word L' Cn",
        "signature": "WordL a b-\u003eCodecM a b(X,Y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:encodeWordL-39-Cu",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the labeled word and update the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "WordL a b -\u003e CodecM a b (X, Y)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#encodeWordL%27Cu",
        "fct-type": "function",
        "title": "encodeWordL'Cu"
      },
      "index": {
        "description": "Encode the labeled word and update the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "encodeWordL'Cu",
        "normalized": "WordL a b-\u003eCodecM a b(X,Y)",
        "package": "crf-chain1-constrained",
        "partial": "Word L' Cu",
        "signature": "WordL a b-\u003eCodecM a b(X,Y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:lbMax",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum internal label included in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#lbMax",
        "fct-type": "function",
        "title": "lbMax"
      },
      "index": {
        "description": "The maximum internal label included in the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "lbMax",
        "normalized": "Codec a b-\u003eLb",
        "package": "crf-chain1-constrained",
        "partial": "Max",
        "signature": "Codec a b-\u003eLb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:mkCodec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate codec on the basis of the labeled dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[SentL a b] -\u003e Codec a b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#mkCodec",
        "fct-type": "function",
        "title": "mkCodec"
      },
      "index": {
        "description": "Create codec on the basis of the labeled dataset",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "mkCodec",
        "normalized": "[SentL a b]-\u003eCodec a b",
        "package": "crf-chain1-constrained",
        "partial": "Codec",
        "signature": "[SentL a b]-\u003eCodec a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:obMax",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum internal observation included in the codec.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Ob",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#obMax",
        "fct-type": "function",
        "title": "obMax"
      },
      "index": {
        "description": "The maximum internal observation included in the codec",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "obMax",
        "normalized": "Codec a b-\u003eOb",
        "package": "crf-chain1-constrained",
        "partial": "Max",
        "signature": "Codec a b-\u003eOb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:unJust",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the label when \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e or one of the unknown values\n when \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Word a b -\u003e Maybe b -\u003e b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#unJust",
        "fct-type": "function",
        "title": "unJust"
      },
      "index": {
        "description": "Return the label when Just or one of the unknown values when Nothing",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "unJust",
        "normalized": "Codec a b-\u003eWord a b-\u003eMaybe b-\u003eb",
        "package": "crf-chain1-constrained",
        "partial": "Just",
        "signature": "Codec a b-\u003eWord a b-\u003eMaybe b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Codec.html#v:unJusts",
      "description": {
        "fct-descr": "\u003cp\u003eReplace \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e labels with all unknown labels from\n the set of potential interpretations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b -\u003e Word a b -\u003e [Maybe b] -\u003e [b]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Codec.html#unJusts",
        "fct-type": "function",
        "title": "unJusts"
      },
      "index": {
        "description": "Replace Nothing labels with all unknown labels from the set of potential interpretations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Codec",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Codec",
        "name": "unJusts",
        "normalized": "Codec a b-\u003eWord a b-\u003e[Maybe b]-\u003e[b]",
        "package": "crf-chain1-constrained",
        "partial": "Justs",
        "signature": "Codec a b-\u003eWord a b-\u003e[Maybe b]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html",
        "fct-type": "module",
        "title": "External"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "External",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Prob",
      "description": {
        "fct-descr": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Prob",
        "fct-type": "data",
        "title": "Prob"
      },
      "index": {
        "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "Prob",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Sent",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Sent",
        "fct-type": "type",
        "title": "Sent"
      },
      "index": {
        "description": "sentence of words",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "Sent",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:SentL",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#SentL",
        "fct-type": "type",
        "title": "SentL"
      },
      "index": {
        "description": "sentence of labeled words",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "SentL",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA Word is represented by a set of observations\n and a set of potential interpretation labels.\n When the set of potential labels is empty the word\n is considered to be unknown and the default potential\n set is used in its place.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "data",
        "title": "Word"
      },
      "index": {
        "description": "Word is represented by set of observations and set of potential interpretation labels When the set of potential labels is empty the word is considered to be unknown and the default potential set is used in its place",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#t:WordL",
      "description": {
        "fct-descr": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  Use the \u003ccode\u003e\u003ca\u003emkWordL\u003c/a\u003e\u003c/code\u003e smart constructor to build \u003ccode\u003e\u003ca\u003eWordL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#WordL",
        "fct-type": "data",
        "title": "WordL"
      },
      "index": {
        "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word Use the mkWordL smart constructor to build WordL",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "WordL",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:Word",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "Word"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:lbs",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of potential interpretations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Set b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "lbs"
      },
      "index": {
        "description": "The set of potential interpretations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "lbs",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkProb",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(a, Double)] -\u003e Prob a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkProb",
        "fct-type": "function",
        "title": "mkProb"
      },
      "index": {
        "description": "Construct the probability distribution",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "mkProb",
        "normalized": "[(a,Double)]-\u003eProb a",
        "package": "crf-chain1-constrained",
        "partial": "Prob",
        "signature": "[(a,Double)]-\u003eProb a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:mkWordL",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure, that every label from the distribution domain is a member\n of the set of potential labels corresponding to the word.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e Prob b -\u003e WordL a b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkWordL",
        "fct-type": "function",
        "title": "mkWordL"
      },
      "index": {
        "description": "Ensure that every label from the distribution domain is member of the set of potential labels corresponding to the word",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "mkWordL",
        "normalized": "Word a b-\u003eProb b-\u003eWordL a b",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": "Word a b-\u003eProb b-\u003eWordL a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:obs",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of observations\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Set a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "obs"
      },
      "index": {
        "description": "The set of observations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "obs",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-External.html#v:unknown",
      "description": {
        "fct-descr": "\u003cp\u003eThe word is considered to be unknown when the set of potential\n labels is empty.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#unknown",
        "fct-type": "function",
        "title": "unknown"
      },
      "index": {
        "description": "The word is considered to be unknown when the set of potential labels is empty",
        "hierarchy": "Data CRF Chain1 Constrained Dataset External",
        "module": "Data.CRF.Chain1.Constrained.Dataset.External",
        "name": "unknown",
        "normalized": "Word a b-\u003eBool",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Word a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:AVec",
      "description": {
        "fct-descr": "\u003cp\u003eAscending vector of unique interger elements.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#AVec",
        "fct-type": "data",
        "title": "AVec"
      },
      "index": {
        "description": "Ascending vector of unique interger elements",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "AVec",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "AVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Lb",
      "description": {
        "fct-descr": "\u003cp\u003eA label.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
        "fct-type": "newtype",
        "title": "Lb"
      },
      "index": {
        "description": "label",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Lb",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Ob",
      "description": {
        "fct-descr": "\u003cp\u003eAn observation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
        "fct-type": "newtype",
        "title": "Ob"
      },
      "index": {
        "description": "An observation",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Ob",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eA word represented by a list of its observations\n and a list of its potential label interpretations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
        "fct-type": "data",
        "title": "X"
      },
      "index": {
        "description": "word represented by list of its observations and list of its potential label interpretations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "X",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Xs",
      "description": {
        "fct-descr": "\u003cp\u003eSentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Xs",
        "fct-type": "type",
        "title": "Xs"
      },
      "index": {
        "description": "Sentence of words",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Xs",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Xs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Y",
      "description": {
        "fct-descr": "\u003cp\u003eProbability distribution over labels.  We assume, that when y is\n a member of chosen labels list it is also a member of the list\n potential labels for corresponding \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e word.\n TODO: Perhaps we should substitute \u003ccode\u003e\u003ca\u003eLb\u003c/a\u003e\u003c/code\u003es with label indices\n corresponding to labels from the vector of potential labels?\n FIXME: The type definition is incorrect (see \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e definition),\n it should be something like AVec2.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
        "fct-type": "newtype",
        "title": "Y"
      },
      "index": {
        "description": "Probability distribution over labels We assume that when is member of chosen labels list it is also member of the list potential labels for corresponding word TODO Perhaps we should substitute Lb with label indices corresponding to labels from the vector of potential labels FIXME The type definition is incorrect see fromList definition it should be something like AVec2",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Y",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#t:Ys",
      "description": {
        "fct-descr": "\u003cp\u003eSentence of Y (label choices).\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ys",
        "fct-type": "type",
        "title": "Ys"
      },
      "index": {
        "description": "Sentence of label choices",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Ys",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Lb",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
        "fct-type": "function",
        "title": "Lb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Lb",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Ob",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Ob",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
        "fct-type": "function",
        "title": "Ob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Ob",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:R",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with custom set of potential labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "R",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "The word with custom set of potential labels",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "R",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:X",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with default set of potential interpretations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "X",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "The word with default set of potential interpretations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "X",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:Y",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Y",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
        "fct-type": "function",
        "title": "Y"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "Y",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unR",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "_unR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "_unR",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Ob",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#X",
        "fct-type": "function",
        "title": "_unX"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "_unX",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:_unY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec (Lb, Double)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Y",
        "fct-type": "function",
        "title": "_unY"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "_unY",
        "normalized": "AVec(Lb,Double)",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "AVec(Lb,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector satisfies the AVec properties.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[a] -\u003e AVec a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Smart AVec constructor which ensures that the underlying vector satisfies the AVec properties",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "fromList",
        "normalized": "[a]-\u003eAVec a",
        "package": "crf-chain1-constrained",
        "partial": "List",
        "signature": "[a]-\u003eAVec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:fromSet",
      "description": {
        "fct-descr": "\u003cp\u003eSmart AVec constructor which ensures that the\n underlying vector satisfies the AVec properties.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Set a -\u003e AVec a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#fromSet",
        "fct-type": "function",
        "title": "fromSet"
      },
      "index": {
        "description": "Smart AVec constructor which ensures that the underlying vector satisfies the AVec properties",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "fromSet",
        "normalized": "Set a-\u003eAVec a",
        "package": "crf-chain1-constrained",
        "partial": "Set",
        "signature": "Set a-\u003eAVec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:mkX",
      "description": {
        "fct-descr": "\u003cp\u003eX constructor.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[Ob] -\u003e [Lb] -\u003e X",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#mkX",
        "fct-type": "function",
        "title": "mkX"
      },
      "index": {
        "description": "constructor",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "mkX",
        "normalized": "[Ob]-\u003e[Lb]-\u003eX",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "[Ob]-\u003e[Lb]-\u003eX"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:mkY",
      "description": {
        "fct-descr": "\u003cp\u003eY constructor.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(Lb, Double)] -\u003e Y",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#mkY",
        "fct-type": "function",
        "title": "mkY"
      },
      "index": {
        "description": "constructor",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "mkY",
        "normalized": "[(Lb,Double)]-\u003eY",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "[(Lb,Double)]-\u003eY"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unLb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Lb",
        "fct-type": "function",
        "title": "unLb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "unLb",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Lb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unOb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#Ob",
        "fct-type": "function",
        "title": "unOb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "unOb",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unR",
      "description": {
        "fct-descr": "\u003cp\u003eList of potential labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb -\u003e X -\u003e [Lb]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unR",
        "fct-type": "function",
        "title": "unR"
      },
      "index": {
        "description": "List of potential labels",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "unR",
        "normalized": "AVec Lb-\u003eX-\u003e[Lb]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "AVec Lb-\u003eX-\u003e[Lb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unX",
      "description": {
        "fct-descr": "\u003cp\u003eList of observations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "X -\u003e [Ob]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unX",
        "fct-type": "function",
        "title": "unX"
      },
      "index": {
        "description": "List of observations",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "unX",
        "normalized": "X-\u003e[Ob]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "X-\u003e[Ob]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Dataset-Internal.html#v:unY",
      "description": {
        "fct-descr": "\u003cp\u003eY deconstructor symetric to mkY.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Y -\u003e [(Lb, Double)]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-Internal.html#unY",
        "fct-type": "function",
        "title": "unY"
      },
      "index": {
        "description": "deconstructor symetric to mkY",
        "hierarchy": "Data CRF Chain1 Constrained Dataset Internal",
        "module": "Data.CRF.Chain1.Constrained.Dataset.Internal",
        "name": "unY",
        "normalized": "Y-\u003e[(Lb,Double)]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Y-\u003e[(Lb,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n hidden features, i.e. all features which can be constructed \n on the basis of observations and potential labels (constraints)\n corresponding to individual words.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Present\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html",
        "fct-type": "module",
        "title": "Hidden"
      },
      "index": {
        "description": "The module provides feature selection functions which extract hidden features i.e all features which can be constructed on the basis of observations and potential labels constraints corresponding to individual words You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Constrained.Feature.Present module",
        "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
        "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "name": "Hidden",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all types which can be constructed\n on the basis of the dataset.  The default set of potential\n interpretations is used for all unknown words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenFeats",
        "fct-type": "function",
        "title": "hiddenFeats"
      },
      "index": {
        "description": "Hidden Feature of all types which can be constructed on the basis of the dataset The default set of potential interpretations is used for all unknown words",
        "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
        "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "name": "hiddenFeats",
        "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "Feats",
        "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenOFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenOFeats",
        "fct-type": "function",
        "title": "hiddenOFeats"
      },
      "index": {
        "description": "Hidden OFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
        "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
        "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "name": "hiddenOFeats",
        "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "OFeats",
        "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenSFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenSFeats",
        "fct-type": "function",
        "title": "hiddenSFeats"
      },
      "index": {
        "description": "Hidden SFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
        "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
        "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "name": "hiddenSFeats",
        "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "SFeats",
        "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Hidden.html#v:hiddenTFeats",
      "description": {
        "fct-descr": "\u003cp\u003eHidden \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which can be constructed based on the dataset.\n The default set of potential interpretations is used for all unknown words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb -\u003e [(Xs, b)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Hidden.html#hiddenTFeats",
        "fct-type": "function",
        "title": "hiddenTFeats"
      },
      "index": {
        "description": "Hidden TFeature which can be constructed based on the dataset The default set of potential interpretations is used for all unknown words",
        "hierarchy": "Data CRF Chain1 Constrained Feature Hidden",
        "module": "Data.CRF.Chain1.Constrained.Feature.Hidden",
        "name": "hiddenTFeats",
        "normalized": "AVec Lb-\u003e[(Xs,a)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "TFeats",
        "signature": "AVec Lb-\u003e[(Xs,b)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides feature selection functions which extract\n features present in the dataset, i.e. features which directly occure\n the dataset.\n\u003c/p\u003e\u003cp\u003eYou can mix functions defined here with the selection functions\n from the \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Hidden\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html",
        "fct-type": "module",
        "title": "Present"
      },
      "index": {
        "description": "The module provides feature selection functions which extract features present in the dataset i.e features which directly occure the dataset You can mix functions defined here with the selection functions from the Data.CRF.Chain1.Constrained.Feature.Hidden module",
        "hierarchy": "Data CRF Chain1 Constrained Feature Present",
        "module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "name": "Present",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Present",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es of all kinds which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentFeats",
        "fct-type": "function",
        "title": "presentFeats"
      },
      "index": {
        "description": "Feature of all kinds which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Constrained Feature Present",
        "module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "name": "presentFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "Feats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentOFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(Xs, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentOFeats",
        "fct-type": "function",
        "title": "presentOFeats"
      },
      "index": {
        "description": "OFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Constrained Feature Present",
        "module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "name": "presentOFeats",
        "normalized": "[(Xs,Ys)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "OFeats",
        "signature": "[(Xs,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentSFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(a, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentSFeats",
        "fct-type": "function",
        "title": "presentSFeats"
      },
      "index": {
        "description": "SFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Constrained Feature Present",
        "module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "name": "presentSFeats",
        "normalized": "[(a,Ys)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "SFeats",
        "signature": "[(a,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature-Present.html#v:presentTFeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003es which occur in the dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(a, Ys)] -\u003e [Feature]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature-Present.html#presentTFeats",
        "fct-type": "function",
        "title": "presentTFeats"
      },
      "index": {
        "description": "TFeature which occur in the dataset",
        "hierarchy": "Data CRF Chain1 Constrained Feature Present",
        "module": "Data.CRF.Chain1.Constrained.Feature.Present",
        "name": "presentTFeats",
        "normalized": "[(a,Ys)]-\u003e[Feature]",
        "package": "crf-chain1-constrained",
        "partial": "TFeats",
        "signature": "[(a,Ys)]-\u003e[Feature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html",
        "fct-type": "module",
        "title": "Feature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "Feature",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#t:Feature",
      "description": {
        "fct-descr": "\u003cp\u003eA Feature is either an observation feature OFeature o x, which\n models relation between observation o and label x assigned to\n the same word, or a transition feature TFeature x y (SFeature x\n for the first position in the sentence), which models relation\n between two subsequent labels, x (on i-th position) and y\n (on (i-1)-th positoin).\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
        "fct-type": "data",
        "title": "Feature"
      },
      "index": {
        "description": "Feature is either an observation feature OFeature which models relation between observation and label assigned to the same word or transition feature TFeature SFeature for the first position in the sentence which models relation between two subsequent labels on i-th position and on i-1 th positoin",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "Feature",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:OFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "OFeature !Ob !Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
        "fct-type": "function",
        "title": "OFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "OFeature",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "OFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:SFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "SFeature !Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
        "fct-type": "function",
        "title": "SFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "SFeature",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "SFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:TFeature",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "TFeature !Lb !Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#Feature",
        "fct-type": "function",
        "title": "TFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "TFeature",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "TFeature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:featuresIn",
      "description": {
        "fct-descr": "\u003cp\u003eAll features with assigned probabilities in given labeled sentence.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Xs -\u003e Ys -\u003e [(Feature, LogFloat)]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#featuresIn",
        "fct-type": "function",
        "title": "featuresIn"
      },
      "index": {
        "description": "All features with assigned probabilities in given labeled sentence",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "featuresIn",
        "normalized": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]",
        "package": "crf-chain1-constrained",
        "partial": "In",
        "signature": "Xs-\u003eYs-\u003e[(Feature,LogFloat)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isOFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it an \u003ccode\u003e\u003ca\u003eOFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#isOFeat",
        "fct-type": "function",
        "title": "isOFeat"
      },
      "index": {
        "description": "Is it an OFeature",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "isOFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1-constrained",
        "partial": "OFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isSFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eSFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#isSFeat",
        "fct-type": "function",
        "title": "isSFeat"
      },
      "index": {
        "description": "Is it SFeature",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "isSFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1-constrained",
        "partial": "SFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Feature.html#v:isTFeat",
      "description": {
        "fct-descr": "\u003cp\u003eIs it a \u003ccode\u003e\u003ca\u003eTFeature\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Feature",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Feature -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Feature.html#isTFeat",
        "fct-type": "function",
        "title": "isTFeat"
      },
      "index": {
        "description": "Is it TFeature",
        "hierarchy": "Data CRF Chain1 Constrained Feature",
        "module": "Data.CRF.Chain1.Constrained.Feature",
        "name": "isTFeat",
        "normalized": "Feature-\u003eBool",
        "package": "crf-chain1-constrained",
        "partial": "TFeat",
        "signature": "Feature-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html",
        "fct-type": "module",
        "title": "Inference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "Inference",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Inference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:accuracy",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the accuracy of the model with respect to the labeled dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e [(Xs, Ys)] -\u003e Double",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#accuracy",
        "fct-type": "function",
        "title": "accuracy"
      },
      "index": {
        "description": "Compute the accuracy of the model with respect to the labeled dataset",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "accuracy",
        "normalized": "Model-\u003e[(Xs,Ys)]-\u003eDouble",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003e[(Xs,Ys)]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:expectedFeaturesIn",
      "description": {
        "fct-descr": "\u003cp\u003eA list of features (represented by feature indices) defined within\n the context of the sentence accompanied by expected probabilities\n determined on the basis of the model. \n\u003c/p\u003e\u003cp\u003eOne feature can occur multiple times in the output list.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Xs -\u003e [(FeatIx, LogFloat)]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#expectedFeaturesIn",
        "fct-type": "function",
        "title": "expectedFeaturesIn"
      },
      "index": {
        "description": "list of features represented by feature indices defined within the context of the sentence accompanied by expected probabilities determined on the basis of the model One feature can occur multiple times in the output list",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "expectedFeaturesIn",
        "normalized": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]",
        "package": "crf-chain1-constrained",
        "partial": "Features In",
        "signature": "Model-\u003eXs-\u003e[(FeatIx,LogFloat)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:marginals",
      "description": {
        "fct-descr": "\u003cp\u003eTag probabilities with respect to marginal distributions.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#marginals",
        "fct-type": "function",
        "title": "marginals"
      },
      "index": {
        "description": "Tag probabilities with respect to marginal distributions",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "marginals",
        "normalized": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003eXs-\u003e[[(Lb,LogFloat)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eFind the most probable label sequence (with probabilities of individual\n lables determined with respect to marginal distributions) satisfying the\n constraints imposed over label values.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Xs -\u003e [Lb]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Find the most probable label sequence with probabilities of individual lables determined with respect to marginal distributions satisfying the constraints imposed over label values",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "tag",
        "normalized": "Model-\u003eXs-\u003e[Lb]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003eXs-\u003e[Lb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:tagK",
      "description": {
        "fct-descr": "\u003cp\u003eGet (at most) k best tags for each word and return them in\n descending order.  TODO: Tagging with respect to marginal\n distributions might not be the best idea.  Think of some\n more elegant method.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Int -\u003e Model -\u003e Xs -\u003e [[(Lb, LogFloat)]]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#tagK",
        "fct-type": "function",
        "title": "tagK"
      },
      "index": {
        "description": "Get at most best tags for each word and return them in descending order TODO Tagging with respect to marginal distributions might not be the best idea Think of some more elegant method",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "tagK",
        "normalized": "Int-\u003eModel-\u003eXs-\u003e[[(Lb,LogFloat)]]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Int-\u003eModel-\u003eXs-\u003e[[(Lb,LogFloat)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:zx",
      "description": {
        "fct-descr": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n backward computation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Xs -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#zx",
        "fct-type": "function",
        "title": "zx"
      },
      "index": {
        "description": "Normalization factor computed for the Xs sentence using the backward computation",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "zx",
        "normalized": "Model-\u003eXs-\u003eLogFloat",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003eXs-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Inference.html#v:zx-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNormalization factor computed for the \u003ccode\u003e\u003ca\u003eXs\u003c/a\u003e\u003c/code\u003e sentence using the\n forward computation.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Inference",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Xs -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Inference.html#zx%27",
        "fct-type": "function",
        "title": "zx'"
      },
      "index": {
        "description": "Normalization factor computed for the Xs sentence using the forward computation",
        "hierarchy": "Data CRF Chain1 Constrained Inference",
        "module": "Data.CRF.Chain1.Constrained.Inference",
        "name": "zx'",
        "normalized": "Model-\u003eXs-\u003eLogFloat",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003eXs-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal implementation of the CRF model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "Internal implementation of the CRF model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#t:FeatIx",
      "description": {
        "fct-descr": "\u003cp\u003eA feature index.  To every model feature a unique index is assigned.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
        "fct-type": "newtype",
        "title": "FeatIx"
      },
      "index": {
        "description": "feature index To every model feature unique index is assigned",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "FeatIx",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eThe model is actually a map from features to their respective potentials,\n but for the sake of efficiency the internal representation is more complex.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "data",
        "title": "Model"
      },
      "index": {
        "description": "The model is actually map from features to their respective potentials but for the sake of efficiency the internal representation is more complex",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:FeatIx",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
        "fct-type": "function",
        "title": "FeatIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "FeatIx",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:Model",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "Model",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToIx",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine index for the given feature.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Feature -\u003e Maybe FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#featToIx",
        "fct-type": "function",
        "title": "featToIx"
      },
      "index": {
        "description": "Determine index for the given feature",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "featToIx",
        "normalized": "Model-\u003eFeature-\u003eMaybe FeatIx",
        "package": "crf-chain1-constrained",
        "partial": "To Ix",
        "signature": "Model-\u003eFeature-\u003eMaybe FeatIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToJustInt",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine index for the given feature and return it as an integer.\n Throw error when the feature is not a member of the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Feature -\u003e Int",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#featToJustInt",
        "fct-type": "function",
        "title": "featToJustInt"
      },
      "index": {
        "description": "Determine index for the given feature and return it as an integer Throw error when the feature is not member of the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "featToJustInt",
        "normalized": "Model-\u003eFeature-\u003eInt",
        "package": "crf-chain1-constrained",
        "partial": "To Just Int",
        "signature": "Model-\u003eFeature-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:featToJustIx",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine index for the given feature.  Throw error when\n the feature is not a member of the model. \n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Feature -\u003e FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#featToJustIx",
        "fct-type": "function",
        "title": "featToJustIx"
      },
      "index": {
        "description": "Determine index for the given feature Throw error when the feature is not member of the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "featToJustIx",
        "normalized": "Model-\u003eFeature-\u003eFeatIx",
        "package": "crf-chain1-constrained",
        "partial": "To Just Ix",
        "signature": "Model-\u003eFeature-\u003eFeatIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:ixMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from features to feature indices\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Map Feature FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "ixMap"
      },
      "index": {
        "description": "map from features to feature indices",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "ixMap",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:mkModel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the model from the list of features.  All parameters will be\n set to 0.  There can be repetitions in the input list.\n We assume that the set of labels is of the {0, 1, .. \u003ccode\u003elbMax\u003c/code\u003e} form and,\n similarly, the set of observations is of the {0, 1, .. \u003ccode\u003eobMax\u003c/code\u003e} form.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Ob -\u003e Lb -\u003e [Feature] -\u003e Model",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#mkModel",
        "fct-type": "function",
        "title": "mkModel"
      },
      "index": {
        "description": "Construct the model from the list of features All parameters will be set to There can be repetitions in the input list We assume that the set of labels is of the lbMax form and similarly the set of observations is of the obMax form",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "mkModel",
        "normalized": "Ob-\u003eLb-\u003e[Feature]-\u003eModel",
        "package": "crf-chain1-constrained",
        "partial": "Model",
        "signature": "Ob-\u003eLb-\u003e[Feature]-\u003eModel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:nextIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of ,,next'' labels which constitute a valid feature in combination\n with the ,,current'' label accompanied by feature indices determined by\n ,,next'' labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Lb -\u003e AVec LbIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#nextIxs",
        "fct-type": "function",
        "title": "nextIxs"
      },
      "index": {
        "description": "List of next labels which constitute valid feature in combination with the current label accompanied by feature indices determined by next labels",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "nextIxs",
        "normalized": "Model-\u003eLb-\u003eAVec LbIx",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": "Model-\u003eLb-\u003eAVec LbIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:nextIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of ,,next'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Vector (AVec LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "nextIxsV"
      },
      "index": {
        "description": "Set of next labels for the value of the current label Both labels constitute transition feature present in the the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "nextIxsV",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:obIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of labels which constitute a valid feature in combination with\n the given observation accompanied by feature indices determined by\n these labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Ob -\u003e AVec LbIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#obIxs",
        "fct-type": "function",
        "title": "obIxs"
      },
      "index": {
        "description": "List of labels which constitute valid feature in combination with the given observation accompanied by feature indices determined by these labels",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "obIxs",
        "normalized": "Model-\u003eOb-\u003eAVec LbIx",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": "Model-\u003eOb-\u003eAVec LbIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:obIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of labels for the given observation which, together with the\n observation, constitute an observation feature of the model. \n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Vector (AVec LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "obIxsV"
      },
      "index": {
        "description": "Set of labels for the given observation which together with the observation constitute an observation feature of the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "obIxsV",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:prevIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of ,,previous'' labels which constitute a valid feature in\n combination with the ,,current'' label accompanied by feature indices\n determined by ,,previous'' labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Lb -\u003e AVec LbIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#prevIxs",
        "fct-type": "function",
        "title": "prevIxs"
      },
      "index": {
        "description": "List of previous labels which constitute valid feature in combination with the current label accompanied by feature indices determined by previous labels",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "prevIxs",
        "normalized": "Model-\u003eLb-\u003eAVec LbIx",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": "Model-\u003eLb-\u003eAVec LbIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:prevIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSet of ,,previous'' labels for the value of the ,,current'' label.\n Both labels constitute a transition feature present in the the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Vector (AVec LbIx)",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "prevIxsV"
      },
      "index": {
        "description": "Set of previous labels for the value of the current label Both labels constitute transition feature present in the the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "prevIxsV",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:r0",
      "description": {
        "fct-descr": "\u003cp\u003eA default set of labels.  It is used on sentence positions for which\n no constraints are assigned.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "AVec Lb",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "r0"
      },
      "index": {
        "description": "default set of labels It is used on sentence positions for which no constraints are assigned",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "r0",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgIxs",
      "description": {
        "fct-descr": "\u003cp\u003eList of labels which can be located on the first position of\n a sentence together with feature indices determined by them.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e [LbIx]",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#sgIxs",
        "fct-type": "function",
        "title": "sgIxs"
      },
      "index": {
        "description": "List of labels which can be located on the first position of sentence together with feature indices determined by them",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "sgIxs",
        "normalized": "Model-\u003e[LbIx]",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": "Model-\u003e[LbIx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgIxsV",
      "description": {
        "fct-descr": "\u003cp\u003eSingular feature index for the given label.  Index is equall to -1\n if feature is not present in the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Vector FeatIx",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "sgIxsV"
      },
      "index": {
        "description": "Singular feature index for the given label Index is equall to if feature is not present in the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "sgIxsV",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Ixs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:sgValue",
      "description": {
        "fct-descr": "\u003cp\u003ePotential value (in log domain) of the singular feature with the\n given label.  The value defaults to 1 (0 in log domain) when the feature\n is not a member of the model.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e Lb -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#sgValue",
        "fct-type": "function",
        "title": "sgValue"
      },
      "index": {
        "description": "Potential value in log domain of the singular feature with the given label The value defaults to in log domain when the feature is not member of the model",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "sgValue",
        "normalized": "Model-\u003eLb-\u003eLogFloat",
        "package": "crf-chain1-constrained",
        "partial": "Value",
        "signature": "Model-\u003eLb-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:unFeatIx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Int",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#FeatIx",
        "fct-type": "function",
        "title": "unFeatIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "unFeatIx",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Feat Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:valueL",
      "description": {
        "fct-descr": "\u003cp\u003eModel potential defined for the given feature interpreted as a\n number in logarithmic domain.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model -\u003e FeatIx -\u003e LogFloat",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#valueL",
        "fct-type": "function",
        "title": "valueL"
      },
      "index": {
        "description": "Model potential defined for the given feature interpreted as number in logarithmic domain",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "valueL",
        "normalized": "Model-\u003eFeatIx-\u003eLogFloat",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Model-\u003eFeatIx-\u003eLogFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Model.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eValue (potential) of the model for feature index.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Model",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Vector Double",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Model.html#Model",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "Value potential of the model for feature index",
        "hierarchy": "Data CRF Chain1 Constrained Model",
        "module": "Data.CRF.Chain1.Constrained.Model",
        "name": "values",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html",
        "fct-type": "module",
        "title": "Train"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "Train",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Train",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#t:CRF",
      "description": {
        "fct-descr": "\u003cp\u003eA conditional random field model with additional codec used for\n data encoding.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
        "fct-type": "data",
        "title": "CRF"
      },
      "index": {
        "description": "conditional random field model with additional codec used for data encoding",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:CRF",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "CRF",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
        "fct-type": "function",
        "title": "CRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "CRF",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "CRF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:anyChosen",
      "description": {
        "fct-descr": "\u003cp\u003eCollect labels assigned to words in a dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[SentL a b] -\u003e Set b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#anyChosen",
        "fct-type": "function",
        "title": "anyChosen"
      },
      "index": {
        "description": "Collect labels assigned to words in dataset",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "anyChosen",
        "normalized": "[SentL a b]-\u003eSet b",
        "package": "crf-chain1-constrained",
        "partial": "Chosen",
        "signature": "[SentL a b]-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:anyInterps",
      "description": {
        "fct-descr": "\u003cp\u003eCollect interpretations (also labels assigned) of words in a dataset.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[SentL a b] -\u003e Set b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#anyInterps",
        "fct-type": "function",
        "title": "anyInterps"
      },
      "index": {
        "description": "Collect interpretations also labels assigned of words in dataset",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "anyInterps",
        "normalized": "[SentL a b]-\u003eSet b",
        "package": "crf-chain1-constrained",
        "partial": "Interps",
        "signature": "[SentL a b]-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:codec",
      "description": {
        "fct-descr": "\u003cp\u003eThe codec is used to transform data into internal representation,\n where each observation and each label is represented by a unique\n integer number.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Codec a b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
        "fct-type": "function",
        "title": "codec"
      },
      "index": {
        "description": "The codec is used to transform data into internal representation where each observation and each label is represented by unique integer number",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "codec",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:model",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual model, which is a map from \u003ccode\u003e\u003ca\u003eFeature\u003c/a\u003e\u003c/code\u003es to potentials.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Model",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#CRF",
        "fct-type": "function",
        "title": "model"
      },
      "index": {
        "description": "The actual model which is map from Feature to potentials",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "model",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:oovChosen",
      "description": {
        "fct-descr": "\u003cp\u003eCollect labels assigned to OOV words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[SentL a b] -\u003e Set b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Train.html#oovChosen",
        "fct-type": "function",
        "title": "oovChosen"
      },
      "index": {
        "description": "Collect labels assigned to OOV words",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "oovChosen",
        "normalized": "[SentL a b]-\u003eSet b",
        "package": "crf-chain1-constrained",
        "partial": "Chosen",
        "signature": "[SentL a b]-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained-Train.html#v:train",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the CRF using the stochastic gradient descent method.\n\u003c/p\u003e\u003cp\u003eThe resulting model will contain features extracted with the user supplied\n extraction function.  You can use the functions provided by the\n \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Present\u003c/a\u003e and\n \u003ca\u003eData.CRF.Chain1.Constrained.Feature.Hidden\u003c/a\u003e\n modules for this purpose.\n\u003c/p\u003e\u003cp\u003eYou also have to supply R0 construction method (e.g. \u003ccode\u003e\u003ca\u003eoovChosen\u003c/a\u003e\u003c/code\u003e)\n which determines the contents of the default set of labels.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained.Train",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "SgdArgs-\u003e Bool-\u003e ([SentL a b] -\u003e Set b)-\u003e (AVec Lb -\u003e [(Xs, Ys)] -\u003e [Feature])-\u003e IO [SentL a b]-\u003e IO [SentL a b]-\u003e IO (CRF a b)",
        "fct-type": "function",
        "title": "train"
      },
      "index": {
        "description": "Train the CRF using the stochastic gradient descent method The resulting model will contain features extracted with the user supplied extraction function You can use the functions provided by the Data.CRF.Chain1.Constrained.Feature.Present and Data.CRF.Chain1.Constrained.Feature.Hidden modules for this purpose You also have to supply R0 construction method e.g oovChosen which determines the contents of the default set of labels",
        "hierarchy": "Data CRF Chain1 Constrained Train",
        "module": "Data.CRF.Chain1.Constrained.Train",
        "name": "train",
        "normalized": "SgdArgs-\u003eBool-\u003e([SentL a b]-\u003eSet b)-\u003e(AVec Lb-\u003e[(Xs,Ys)]-\u003e[Feature])-\u003eIO[SentL a b]-\u003eIO[SentL a b]-\u003eIO(CRF a b)",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "SgdArgs-\u003eBool-\u003e([SentL a b]-\u003eSet b)-\u003e(AVec Lb-\u003e[(Xs,Ys)]-\u003e[Feature])-\u003eIO[SentL a b]-\u003eIO[SentL a b]-\u003eIO(CRF a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides first-order, linear-chain conditional random fields\n (CRFs) with position-wide constraints over label values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "module",
        "fct-source": "src/Data-CRF-Chain1-Constrained.html",
        "fct-type": "module",
        "title": "Constrained"
      },
      "index": {
        "description": "The module provides first-order linear-chain conditional random fields CRFs with position-wide constraints over label values",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "Constrained",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Prob",
      "description": {
        "fct-descr": "\u003cp\u003eA probability distribution defined over elements of type a.\n All elements not included in the map have probability equal\n to 0.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Prob",
        "fct-type": "data",
        "title": "Prob"
      },
      "index": {
        "description": "probability distribution defined over elements of type All elements not included in the map have probability equal to",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "Prob",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Sent",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Sent",
        "fct-type": "type",
        "title": "Sent"
      },
      "index": {
        "description": "sentence of words",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "Sent",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:SentL",
      "description": {
        "fct-descr": "\u003cp\u003eA sentence of labeled words.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "type",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#SentL",
        "fct-type": "type",
        "title": "SentL"
      },
      "index": {
        "description": "sentence of labeled words",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "SentL",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA Word is represented by a set of observations\n and a set of potential interpretation labels.\n When the set of potential labels is empty the word\n is considered to be unknown and the default potential\n set is used in its place.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "data",
        "title": "Word"
      },
      "index": {
        "description": "Word is represented by set of observations and set of potential interpretation labels When the set of potential labels is empty the word is considered to be unknown and the default potential set is used in its place",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#t:WordL",
      "description": {
        "fct-descr": "\u003cp\u003eA WordL is a labeled word, i.e. a word with probability distribution\n defined over labels.  We assume that every label from the distribution\n domain is a member of the set of potential labels corresponding to the\n word.  Use the \u003ccode\u003e\u003ca\u003emkWordL\u003c/a\u003e\u003c/code\u003e smart constructor to build \u003ccode\u003e\u003ca\u003eWordL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "data",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#WordL",
        "fct-type": "data",
        "title": "WordL"
      },
      "index": {
        "description": "WordL is labeled word i.e word with probability distribution defined over labels We assume that every label from the distribution domain is member of the set of potential labels corresponding to the word Use the mkWordL smart constructor to build WordL",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "WordL",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:Word",
      "description": {
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "Word"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "Word",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:lbs",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of potential interpretations.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Set b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "lbs"
      },
      "index": {
        "description": "The set of potential interpretations",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "lbs",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:mkProb",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the probability distribution.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "[(a, Double)] -\u003e Prob a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkProb",
        "fct-type": "function",
        "title": "mkProb"
      },
      "index": {
        "description": "Construct the probability distribution",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "mkProb",
        "normalized": "[(a,Double)]-\u003eProb a",
        "package": "crf-chain1-constrained",
        "partial": "Prob",
        "signature": "[(a,Double)]-\u003eProb a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:mkWordL",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure, that every label from the distribution domain is a member\n of the set of potential labels corresponding to the word.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e Prob b -\u003e WordL a b",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#mkWordL",
        "fct-type": "function",
        "title": "mkWordL"
      },
      "index": {
        "description": "Ensure that every label from the distribution domain is member of the set of potential labels corresponding to the word",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "mkWordL",
        "normalized": "Word a b-\u003eProb b-\u003eWordL a b",
        "package": "crf-chain1-constrained",
        "partial": "Word",
        "signature": "Word a b-\u003eProb b-\u003eWordL a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:obs",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of observations\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Set a",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#Word",
        "fct-type": "function",
        "title": "obs"
      },
      "index": {
        "description": "The set of observations",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "obs",
        "normalized": "",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the most probable label sequence within the context of the\n given sentence using the model provided by the \u003ccode\u003e\u003ca\u003eCRF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "CRF a b -\u003e Sent a b -\u003e [b]",
        "fct-source": "src/Data-CRF-Chain1-Constrained.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Determine the most probable label sequence within the context of the given sentence using the model provided by the CRF",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "tag",
        "normalized": "CRF a b-\u003eSent a b-\u003e[b]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "CRF a b-\u003eSent a b-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:tagK",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the most probable label sets of the given size (at maximum)\n for each position in the input sentence.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Int -\u003e CRF a b -\u003e Sent a b -\u003e [[b]]",
        "fct-source": "src/Data-CRF-Chain1-Constrained.html#tagK",
        "fct-type": "function",
        "title": "tagK"
      },
      "index": {
        "description": "Determine the most probable label sets of the given size at maximum for each position in the input sentence",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "tagK",
        "normalized": "Int-\u003eCRF a b-\u003eSent a b-\u003e[[b]]",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Int-\u003eCRF a b-\u003eSent a b-\u003e[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crf-chain1-constrained/docs/Data-CRF-Chain1-Constrained.html#v:unknown",
      "description": {
        "fct-descr": "\u003cp\u003eThe word is considered to be unknown when the set of potential\n labels is empty.\n\u003c/p\u003e",
        "fct-module": "Data.CRF.Chain1.Constrained",
        "fct-package": "crf-chain1-constrained",
        "fct-signature": "Word a b -\u003e Bool",
        "fct-source": "src/Data-CRF-Chain1-Constrained-Dataset-External.html#unknown",
        "fct-type": "function",
        "title": "unknown"
      },
      "index": {
        "description": "The word is considered to be unknown when the set of potential labels is empty",
        "hierarchy": "Data CRF Chain1 Constrained",
        "module": "Data.CRF.Chain1.Constrained",
        "name": "unknown",
        "normalized": "Word a b-\u003eBool",
        "package": "crf-chain1-constrained",
        "partial": "",
        "signature": "Word a b-\u003eBool"
      }
    }
  }
]