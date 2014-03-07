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
        "word": "monadcryptorandom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMuch like the \u003ca\u003eMonadRandom\u003c/a\u003e package (\u003ca\u003eControl.Monad.Random\u003c/a\u003e), this module\nprovides plumbing for the CryptoRandomGen generators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.CryptoRandom",
          "name": "CryptoRandom",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html",
          "type": "module"
        },
        "index": {
          "description": "Much like the MonadRandom package Control.Monad.Random this module provides plumbing for the CryptoRandomGen generators",
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CryptoRandom",
          "package": "monadcryptorandom",
          "partial": "Crypto Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple users of generators can use CRand for\n quick and easy generation of randoms.  See\n below for a simple use of \u003ccode\u003e\u003ca\u003enewGenIO\u003c/a\u003e\u003c/code\u003e (from \u003ca\u003ecrypto-api\u003c/a\u003e),\n \u003ccode\u003e\u003ca\u003egetCRandom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003erunCRandom\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003egetRandPair = do\n   int \u003c- getCRandom\n   bytes \u003c- getBytes 100\n   return (int, bytes)\n\nfunc = do\n   g \u003c- newGenIO\n   case runCRand getRandPair g of\n       Right ((int,bytes), g') -\u003e useRandomVals (int,bytes)\n       Left x -\u003e handleGenError x\n\u003c/pre\u003e",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRand",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#CRand",
          "type": "type"
        },
        "index": {
          "description": "Simple users of generators can use CRand for quick and easy generation of randoms See below for simple use of newGenIO from crypto-api getCRandom getBytes and runCRandom getRandPair do int getCRandom bytes getBytes return int bytes func do newGenIO case runCRand getRandPair of Right int bytes useRandomVals int bytes Left handleGenError",
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRand",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCRandT is the transformer suggested for MonadCRandom.\n\u003c/p\u003e",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandT",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#CRandT",
          "type": "newtype"
        },
        "index": {
          "description": "CRandT is the transformer suggested for MonadCRandom",
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandT",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCRandom a\u003c/code\u003e is much like the \u003ccode\u003eRandom\u003c/code\u003e class from the \u003ca\u003eSystem.Random\u003c/a\u003e module in the \u003ca\u003erandom\u003c/a\u003e package.\n The main difference is CRandom builds on \u003ca\u003ecrypto-api\u003c/a\u003e's \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e, so it allows\n explicit failure.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecrandomR (low,high) g\u003c/code\u003e as typically instantiated will generate a value between\n [low, high] inclusively, swapping the pair if high \u003c low.\n\u003c/p\u003e\u003cp\u003eProvided instances for \u003ccode\u003ecrandom g\u003c/code\u003e generates randoms between the bounds and between +/- 2^256\n for Integer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecrandomR\u003c/a\u003e\u003c/code\u003e function has degraded (theoretically unbounded, probabilistically decent) performance\n the closer your range size (high - low) is to 2^n (from the top).\n\u003c/p\u003e",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandom",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#CRandom",
          "type": "class"
        },
        "index": {
          "description": "CRandom is much like the Random class from the System.Random module in the random package The main difference is CRandom builds on crypto-api CryptoRandomGen so it allows explicit failure crandomR low high as typically instantiated will generate value between low high inclusively swapping the pair if high low Provided instances for crandom generates randoms between the bounds and between for Integer The crandomR function has degraded theoretically unbounded probabilistically decent performance the closer your range size high low is to from the top",
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandom",
          "package": "monadcryptorandom",
          "partial": "CRandom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandomR",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#CRandomR",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandomR",
          "package": "monadcryptorandom",
          "partial": "CRandom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:CRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "ContainsGenError",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#ContainsGenError",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "ContainsGenError",
          "package": "monadcryptorandom",
          "partial": "Contains Gen Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:ContainsGenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadCRandom m\u003c/code\u003e represents a monad that can produce\n random values (or fail with a \u003ccode\u003e\u003ca\u003eGenError\u003c/a\u003e\u003c/code\u003e).  It is suggested\n you use the \u003ccode\u003e\u003ca\u003eCRandT\u003c/a\u003e\u003c/code\u003e transformer in your monad stack.\n\u003c/p\u003e",
          "module": "Control.Monad.CryptoRandom",
          "name": "MonadCRandom",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#MonadCRandom",
          "type": "class"
        },
        "index": {
          "description": "MonadCRandom represents monad that can produce random values or fail with GenError It is suggested you use the CRandT transformer in your monad stack",
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "MonadCRandom",
          "package": "monadcryptorandom",
          "partial": "Monad CRandom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:MonadCRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "MonadCRandomR",
          "package": "monadcryptorandom",
          "source": "src/Control-Monad-CryptoRandom.html#MonadCRandomR",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "MonadCRandomR",
          "package": "monadcryptorandom",
          "partial": "Monad CRandom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#t:MonadCRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandT",
          "package": "monadcryptorandom",
          "signature": "CRandT",
          "source": "src/Control-Monad-CryptoRandom.html#CRandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "CRandT",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:CRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "crandom",
          "package": "monadcryptorandom",
          "signature": "g -\u003e Either GenError (a, g)",
          "source": "src/Control-Monad-CryptoRandom.html#crandom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "crandom",
          "normalized": "a-\u003eEither GenError(b,a)",
          "package": "monadcryptorandom",
          "signature": "g-\u003eEither GenError(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "crandomR",
          "package": "monadcryptorandom",
          "signature": "(a, a) -\u003e g -\u003e Either GenError (a, g)",
          "source": "src/Control-Monad-CryptoRandom.html#crandomR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "crandomR",
          "normalized": "(a,a)-\u003eb-\u003eEither GenError(a,b)",
          "package": "monadcryptorandom",
          "signature": "(a,a)-\u003eg-\u003eEither GenError(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "crandomRs",
          "package": "monadcryptorandom",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "source": "src/Control-Monad-CryptoRandom.html#crandomRs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "crandomRs",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "monadcryptorandom",
          "partial": "Rs",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "crandoms",
          "package": "monadcryptorandom",
          "signature": "g -\u003e [a]",
          "source": "src/Control-Monad-CryptoRandom.html#crandoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "crandoms",
          "normalized": "a-\u003e[b]",
          "package": "monadcryptorandom",
          "signature": "g-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:crandoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "doReseed",
          "package": "monadcryptorandom",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Control-Monad-CryptoRandom.html#doReseed",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "doReseed",
          "normalized": "ByteString-\u003ea()",
          "package": "monadcryptorandom",
          "partial": "Reseed",
          "signature": "ByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:doReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "evalCRand",
          "package": "monadcryptorandom",
          "signature": "CRand g GenError a -\u003e g -\u003e Either GenError a",
          "source": "src/Control-Monad-CryptoRandom.html#evalCRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "evalCRand",
          "normalized": "CRand a GenError b-\u003ea-\u003eEither GenError b",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "signature": "CRand g GenError a-\u003eg-\u003eEither GenError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:evalCRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "evalCRandT",
          "package": "monadcryptorandom",
          "signature": "CRandT g e m a -\u003e g -\u003e m (Either e a)",
          "source": "src/Control-Monad-CryptoRandom.html#evalCRandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "evalCRandT",
          "normalized": "CRandT a b c d-\u003ea-\u003ec(Either b d)",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "signature": "CRandT g e m a-\u003eg-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:evalCRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "fromGenError",
          "package": "monadcryptorandom",
          "signature": "GenError -\u003e e",
          "source": "src/Control-Monad-CryptoRandom.html#fromGenError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "fromGenError",
          "normalized": "GenError-\u003ea",
          "package": "monadcryptorandom",
          "partial": "Gen Error",
          "signature": "GenError-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:fromGenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "getBytes",
          "package": "monadcryptorandom",
          "signature": "Int -\u003e m ByteString",
          "source": "src/Control-Monad-CryptoRandom.html#getBytes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "getBytes",
          "normalized": "Int-\u003ea ByteString",
          "package": "monadcryptorandom",
          "partial": "Bytes",
          "signature": "Int-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "getBytesWithEntropy",
          "package": "monadcryptorandom",
          "signature": "Int -\u003e ByteString -\u003e m ByteString",
          "source": "src/Control-Monad-CryptoRandom.html#getBytesWithEntropy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "getBytesWithEntropy",
          "normalized": "Int-\u003eByteString-\u003ea ByteString",
          "package": "monadcryptorandom",
          "partial": "Bytes With Entropy",
          "signature": "Int-\u003eByteString-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getBytesWithEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "getCRandom",
          "package": "monadcryptorandom",
          "signature": "m a",
          "source": "src/Control-Monad-CryptoRandom.html#getCRandom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "getCRandom",
          "package": "monadcryptorandom",
          "partial": "CRandom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getCRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "getCRandomR",
          "package": "monadcryptorandom",
          "signature": "(a, a) -\u003e m a",
          "source": "src/Control-Monad-CryptoRandom.html#getCRandomR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "getCRandomR",
          "normalized": "(a,a)-\u003eb a",
          "package": "monadcryptorandom",
          "partial": "CRandom",
          "signature": "(a,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:getCRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "newGenCRand",
          "package": "monadcryptorandom",
          "signature": "m g",
          "source": "src/Control-Monad-CryptoRandom.html#newGenCRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "newGenCRand",
          "package": "monadcryptorandom",
          "partial": "Gen CRand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:newGenCRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "runCRand",
          "package": "monadcryptorandom",
          "signature": "CRand g e a -\u003e g -\u003e Either e (a, g)",
          "source": "src/Control-Monad-CryptoRandom.html#runCRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "runCRand",
          "normalized": "CRand a b c-\u003ea-\u003eEither b(c,a)",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "signature": "CRand g e a-\u003eg-\u003eEither e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:runCRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "runCRandT",
          "package": "monadcryptorandom",
          "signature": "CRandT g e m a -\u003e g -\u003e m (Either e (a, g))",
          "source": "src/Control-Monad-CryptoRandom.html#runCRandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "runCRandT",
          "normalized": "CRandT a b c d-\u003ea-\u003ec(Either b(d,a))",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "signature": "CRandT g e m a-\u003eg-\u003em(Either e(a,g))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:runCRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "toGenError",
          "package": "monadcryptorandom",
          "signature": "e -\u003e Maybe GenError",
          "source": "src/Control-Monad-CryptoRandom.html#toGenError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "toGenError",
          "normalized": "a-\u003eMaybe GenError",
          "package": "monadcryptorandom",
          "partial": "Gen Error",
          "signature": "e-\u003eMaybe GenError",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:toGenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CryptoRandom",
          "name": "unCRandT",
          "package": "monadcryptorandom",
          "signature": "StateT g (ErrorT e m) a",
          "source": "src/Control-Monad-CryptoRandom.html#CRandT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CryptoRandom",
          "module": "Control.Monad.CryptoRandom",
          "name": "unCRandT",
          "package": "monadcryptorandom",
          "partial": "CRand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadcryptorandom/docs/Control-Monad-CryptoRandom.html#v:unCRandT"
      }
    }
  ]
]