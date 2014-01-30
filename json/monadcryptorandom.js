[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMuch like the \u003ca\u003eMonadRandom\u003c/a\u003e package (\u003ca\u003eControl.Monad.Random\u003c/a\u003e), this module\nprovides plumbing for the CryptoRandomGen generators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CryptoRandom.html",
        "fct-type": "module",
        "title": "CryptoRandom"
      },
      "index": {
        "description": "Much like the MonadRandom package Control.Monad.Random this module provides plumbing for the CryptoRandomGen generators",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CryptoRandom",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "Crypto Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRand",
      "description": {
        "fct-descr": "\u003cp\u003eSimple users of generators can use CRand for\n quick and easy generation of randoms.  See\n below for a simple use of \u003ccode\u003e\u003ca\u003enewGenIO\u003c/a\u003e\u003c/code\u003e (from \u003ca\u003ecrypto-api\u003c/a\u003e),\n \u003ccode\u003e\u003ca\u003egetCRandom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003erunCRandom\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003egetRandPair = do\n   int \u003c- getCRandom\n   bytes \u003c- getBytes 100\n   return (int, bytes)\n\nfunc = do\n   g \u003c- newGenIO\n   case runCRand getRandPair g of\n       Right ((int,bytes), g') -\u003e useRandomVals (int,bytes)\n       Left x -\u003e handleGenError x\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRand",
        "fct-type": "type",
        "title": "CRand"
      },
      "index": {
        "description": "Simple users of generators can use CRand for quick and easy generation of randoms See below for simple use of newGenIO from crypto-api getCRandom getBytes and runCRandom getRandPair do int getCRandom bytes getBytes return int bytes func do newGenIO case runCRand getRandPair of Right int bytes useRandomVals int bytes Left handleGenError",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CRand",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandT",
      "description": {
        "fct-descr": "\u003cp\u003eCRandT is the transformer suggested for MonadCRandom.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRandT",
        "fct-type": "newtype",
        "title": "CRandT"
      },
      "index": {
        "description": "CRandT is the transformer suggested for MonadCRandom",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CRandT",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCRandom a\u003c/code\u003e is much like the \u003ccode\u003eRandom\u003c/code\u003e class from the \u003ca\u003eSystem.Random\u003c/a\u003e module in the \u003ca\u003erandom\u003c/a\u003e package.\n The main difference is CRandom builds on \u003ca\u003ecrypto-api\u003c/a\u003e's \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e, so it allows\n explicit failure.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecrandomR (low,high) g\u003c/code\u003e as typically instantiated will generate a value between\n [low, high] inclusively, swapping the pair if high \u003c low.\n\u003c/p\u003e\u003cp\u003eProvided instances for \u003ccode\u003ecrandom g\u003c/code\u003e generates randoms between the bounds and between +/- 2^256\n for Integer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecrandomR\u003c/a\u003e\u003c/code\u003e function has degraded (theoretically unbounded, probabilistically decent) performance\n the closer your range size (high - low) is to 2^n (from the top).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRandom",
        "fct-type": "class",
        "title": "CRandom"
      },
      "index": {
        "description": "CRandom is much like the Random class from the System.Random module in the random package The main difference is CRandom builds on crypto-api CryptoRandomGen so it allows explicit failure crandomR low high as typically instantiated will generate value between low high inclusively swapping the pair if high low Provided instances for crandom generates randoms between the bounds and between for Integer The crandomR function has degraded theoretically unbounded probabilistically decent performance the closer your range size high low is to from the top",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CRandom",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandomR",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRandomR",
        "fct-type": "class",
        "title": "CRandomR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CRandomR",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:ContainsGenError",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CryptoRandom.html#ContainsGenError",
        "fct-type": "class",
        "title": "ContainsGenError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "ContainsGenError",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "Contains Gen Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:MonadCRandom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadCRandom m\u003c/code\u003e represents a monad that can produce\n random values (or fail with a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e).  It is suggested\n you use the \u003ccode\u003e\u003ca\u003eCRandT\u003c/a\u003e\u003c/code\u003e transformer in your monad stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CryptoRandom.html#MonadCRandom",
        "fct-type": "class",
        "title": "MonadCRandom"
      },
      "index": {
        "description": "MonadCRandom represents monad that can produce random values or fail with GenError It is suggested you use the CRandT transformer in your monad stack",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "MonadCRandom",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "Monad CRandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:MonadCRandomR",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CryptoRandom.html#MonadCRandomR",
        "fct-type": "class",
        "title": "MonadCRandomR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "MonadCRandomR",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "Monad CRandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:CRandT",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "CRandT",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRandT",
        "fct-type": "function",
        "title": "CRandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "CRandT",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandom",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "g -\u003e Either GenError (a, g)",
        "fct-source": "src/Control-Monad-CryptoRandom.html#crandom",
        "fct-type": "method",
        "title": "crandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "crandom",
        "normalized": "a-\u003eEither GenError(b,a)",
        "package": "monadcryptorandom",
        "partial": "",
        "signature": "g-\u003eEither GenError(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandomR",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "(a, a) -\u003e g -\u003e Either GenError (a, g)",
        "fct-source": "src/Control-Monad-CryptoRandom.html#crandomR",
        "fct-type": "method",
        "title": "crandomR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "crandomR",
        "normalized": "(a,a)-\u003eb-\u003eEither GenError(a,b)",
        "package": "monadcryptorandom",
        "partial": "",
        "signature": "(a,a)-\u003eg-\u003eEither GenError(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandomRs",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "(a, a) -\u003e g -\u003e [a]",
        "fct-source": "src/Control-Monad-CryptoRandom.html#crandomRs",
        "fct-type": "method",
        "title": "crandomRs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "crandomRs",
        "normalized": "(a,a)-\u003eb-\u003e[a]",
        "package": "monadcryptorandom",
        "partial": "Rs",
        "signature": "(a,a)-\u003eg-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandoms",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "g -\u003e [a]",
        "fct-source": "src/Control-Monad-CryptoRandom.html#crandoms",
        "fct-type": "method",
        "title": "crandoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "crandoms",
        "normalized": "a-\u003e[b]",
        "package": "monadcryptorandom",
        "partial": "",
        "signature": "g-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:doReseed",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "ByteString -\u003e m ()",
        "fct-source": "src/Control-Monad-CryptoRandom.html#doReseed",
        "fct-type": "method",
        "title": "doReseed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "doReseed",
        "normalized": "ByteString-\u003ea()",
        "package": "monadcryptorandom",
        "partial": "Reseed",
        "signature": "ByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:evalCRand",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "CRand g GenError a -\u003e g -\u003e Either GenError a",
        "fct-source": "src/Control-Monad-CryptoRandom.html#evalCRand",
        "fct-type": "function",
        "title": "evalCRand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "evalCRand",
        "normalized": "CRand a GenError b-\u003ea-\u003eEither GenError b",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": "CRand g GenError a-\u003eg-\u003eEither GenError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:evalCRandT",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "CRandT g e m a -\u003e g -\u003e m (Either e a)",
        "fct-source": "src/Control-Monad-CryptoRandom.html#evalCRandT",
        "fct-type": "function",
        "title": "evalCRandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "evalCRandT",
        "normalized": "CRandT a b c d-\u003ea-\u003ec(Either b d)",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": "CRandT g e m a-\u003eg-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:fromGenError",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "GenError -\u003e e",
        "fct-source": "src/Control-Monad-CryptoRandom.html#fromGenError",
        "fct-type": "method",
        "title": "fromGenError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "fromGenError",
        "normalized": "GenError-\u003ea",
        "package": "monadcryptorandom",
        "partial": "Gen Error",
        "signature": "GenError-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getBytes",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "Int -\u003e m ByteString",
        "fct-source": "src/Control-Monad-CryptoRandom.html#getBytes",
        "fct-type": "method",
        "title": "getBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "getBytes",
        "normalized": "Int-\u003ea ByteString",
        "package": "monadcryptorandom",
        "partial": "Bytes",
        "signature": "Int-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getBytesWithEntropy",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "Int -\u003e ByteString -\u003e m ByteString",
        "fct-source": "src/Control-Monad-CryptoRandom.html#getBytesWithEntropy",
        "fct-type": "method",
        "title": "getBytesWithEntropy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "getBytesWithEntropy",
        "normalized": "Int-\u003eByteString-\u003ea ByteString",
        "package": "monadcryptorandom",
        "partial": "Bytes With Entropy",
        "signature": "Int-\u003eByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getCRandom",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-CryptoRandom.html#getCRandom",
        "fct-type": "method",
        "title": "getCRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "getCRandom",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getCRandomR",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "(a, a) -\u003e m a",
        "fct-source": "src/Control-Monad-CryptoRandom.html#getCRandomR",
        "fct-type": "method",
        "title": "getCRandomR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "getCRandomR",
        "normalized": "(a,a)-\u003eb a",
        "package": "monadcryptorandom",
        "partial": "CRandom",
        "signature": "(a,a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:newGenCRand",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "m g",
        "fct-source": "src/Control-Monad-CryptoRandom.html#newGenCRand",
        "fct-type": "function",
        "title": "newGenCRand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "newGenCRand",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "Gen CRand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:runCRand",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "CRand g e a -\u003e g -\u003e Either e (a, g)",
        "fct-source": "src/Control-Monad-CryptoRandom.html#runCRand",
        "fct-type": "function",
        "title": "runCRand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "runCRand",
        "normalized": "CRand a b c-\u003ea-\u003eEither b(c,a)",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": "CRand g e a-\u003eg-\u003eEither e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:runCRandT",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "CRandT g e m a -\u003e g -\u003e m (Either e (a, g))",
        "fct-source": "src/Control-Monad-CryptoRandom.html#runCRandT",
        "fct-type": "function",
        "title": "runCRandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "runCRandT",
        "normalized": "CRandT a b c d-\u003ea-\u003ec(Either b(d,a))",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": "CRandT g e m a-\u003eg-\u003em(Either e(a,g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:toGenError",
      "description": {
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "e -\u003e Maybe GenError",
        "fct-source": "src/Control-Monad-CryptoRandom.html#toGenError",
        "fct-type": "method",
        "title": "toGenError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "toGenError",
        "normalized": "a-\u003eMaybe GenError",
        "package": "monadcryptorandom",
        "partial": "Gen Error",
        "signature": "e-\u003eMaybe GenError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:unCRandT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.CryptoRandom",
        "fct-package": "monadcryptorandom",
        "fct-signature": "StateT g (ErrorT e m) a",
        "fct-source": "src/Control-Monad-CryptoRandom.html#CRandT",
        "fct-type": "function",
        "title": "unCRandT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CryptoRandom",
        "module": "Control.Monad.CryptoRandom",
        "name": "unCRandT",
        "normalized": "",
        "package": "monadcryptorandom",
        "partial": "CRand",
        "signature": ""
      }
    }
  }
]