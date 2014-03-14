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
        "word": "random-source"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "Source",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "Source",
          "package": "random-source",
          "partial": "Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type provides a way to define a \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e for a monad without actually\n having to declare an instance.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "GetPrim",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html#GetPrim",
          "type": "newtype"
        },
        "index": {
          "description": "This type provides way to define RandomSource for monad without actually having to declare an instance",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "GetPrim",
          "package": "random-source",
          "partial": "Get Prim",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#t:GetPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for monads with a chosen source of entropy.  For example,\n \u003ccode\u003eRVar\u003c/code\u003e is such a monad - the source from which it is (eventually) sampled\n is the only source from which a random variable is permitted to draw, so\n when directly requesting entropy for a random variable these functions\n are used.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrim\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003emonadRandom\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003emonadRandom\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell and GADTs language extensions):\n\u003c/p\u003e\u003cpre\u003e $(monadRandom [d|\n         instance MonadRandom FooM where\n             getRandomDouble = return pi\n             getRandomWord16 = return 4\n             {- etc... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "MonadRandom",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html#MonadRandom",
          "type": "class"
        },
        "index": {
          "description": "typeclass for monads with chosen source of entropy For example RVar is such monad the source from which it is eventually sampled is the only source from which random variable is permitted to draw so when directly requesting entropy for random variable these functions are used Minimum implementation is either the internal getRandomPrim or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the monadRandom Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use monadRandom just wrap your instance declaration as follows and enable the TemplateHaskell and GADTs language extensions monadRandom instance MonadRandom FooM where getRandomDouble return pi getRandomWord16 return etc",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "MonadRandom",
          "package": "random-source",
          "partial": "Monad Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#t:MonadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePrompt\u003c/code\u003e GADT describing a request for a primitive random variate.\n Random variable definitions will request their entropy via these prompts,\n and entropy sources will satisfy those requests.  The functions in\n \u003ca\u003eData.Random.Source.Internal.TH\u003c/a\u003e extend incomplete entropy-source definitions\n to complete ones, essentially defining a very flexible \n implementation-defaulting system.\n\u003c/p\u003e\u003cp\u003eSome possible future additions:\n    PrimFloat :: Prim Float\n    PrimInt :: Prim Int\n    PrimPair :: Prim a -\u003e Prim b -\u003e Prim (a :*: b)\n    PrimNormal :: Prim Double\n    PrimChoice :: [(Double :*: a)] -\u003e Prim a\n    PrimBytes  :: !Int -\u003e Prim ByteString\n\u003c/p\u003e\u003cp\u003eUnfortunately, I cannot get Haddock to accept my comments about the \n data constructors, but hopefully they should be reasonably self-explanatory.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "Prim",
          "package": "random-source",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "data"
        },
        "index": {
          "description": "Prompt GADT describing request for primitive random variate Random variable definitions will request their entropy via these prompts and entropy sources will satisfy those requests The functions in Data.Random.Source.Internal.TH extend incomplete entropy-source definitions to complete ones essentially defining very flexible implementation-defaulting system Some possible future additions PrimFloat Prim Float PrimInt Prim Int PrimPair Prim Prim Prim PrimNormal Prim Double PrimChoice Double Prim PrimBytes Int Prim ByteString Unfortunately cannot get Haddock to accept my comments about the data constructors but hopefully they should be reasonably self-explanatory",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "Prim",
          "package": "random-source",
          "partial": "Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source of entropy which can be used in the given monad.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrimFrom\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003erandomSource\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003erandomSource\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell, MultiParamTypeClasses and GADTs language\n extensions, as well as any others required by your instances, such as\n FlexibleInstances):\n\u003c/p\u003e\u003cpre\u003e $(randomSource [d|\n         instance RandomSource FooM Bar where\n             {- at least one RandomSource function... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "RandomSource",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html#RandomSource",
          "type": "class"
        },
        "index": {
          "description": "source of entropy which can be used in the given monad See also MonadRandom Minimum implementation is either the internal getRandomPrimFrom or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the randomSource Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use randomSource just wrap your instance declaration as follows and enable the TemplateHaskell MultiParamTypeClasses and GADTs language extensions as well as any others required by your instances such as FlexibleInstances randomSource instance RandomSource FooM Bar where at least one RandomSource function",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "RandomSource",
          "package": "random-source",
          "partial": "Random Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#t:RandomSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "GetPrim",
          "package": "random-source",
          "signature": "GetPrim (forall t.  Prim t -\u003e m t)",
          "source": "src/Data-Random-Internal-Source.html#GetPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "GetPrim",
          "normalized": "GetPrim(a b Prim c-\u003ed c)",
          "package": "random-source",
          "partial": "Get Prim",
          "signature": "GetPrim(forall t. Prim t-\u003em t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:GetPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimDouble",
          "package": "random-source",
          "signature": "Prim Double",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimDouble",
          "package": "random-source",
          "partial": "Prim Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimNByteInteger",
          "package": "random-source",
          "signature": "Int -\u003e Prim Integer",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimNByteInteger",
          "normalized": "Int-\u003ePrim Integer",
          "package": "random-source",
          "partial": "Prim NByte Integer",
          "signature": "Int-\u003ePrim Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimNByteInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord16",
          "package": "random-source",
          "signature": "Prim Word16",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord16",
          "package": "random-source",
          "partial": "Prim Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord32",
          "package": "random-source",
          "signature": "Prim Word32",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord32",
          "package": "random-source",
          "partial": "Prim Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord64",
          "package": "random-source",
          "signature": "Prim Word64",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord64",
          "package": "random-source",
          "partial": "Prim Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord8",
          "package": "random-source",
          "signature": "Prim Word8",
          "source": "src/Data-Random-Source-Internal-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "PrimWord8",
          "package": "random-source",
          "partial": "Prim Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:PrimWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 1\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomDouble",
          "package": "random-source",
          "signature": "m Double",
          "source": "src/Data-Random-Internal-Source.html#getRandomDouble",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Double in the range",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomDouble",
          "package": "random-source",
          "partial": "Random Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 1\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomDoubleFrom",
          "package": "random-source",
          "signature": "s -\u003e m Double",
          "source": "src/Data-Random-Internal-Source.html#getRandomDoubleFrom",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Double in the range",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomDoubleFrom",
          "normalized": "a-\u003eb Double",
          "package": "random-source",
          "partial": "Random Double From",
          "signature": "s-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomDoubleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 256^n\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomNByteInteger",
          "package": "random-source",
          "signature": "Int -\u003e m Integer",
          "source": "src/Data-Random-Internal-Source.html#getRandomNByteInteger",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Integer in the range",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomNByteInteger",
          "normalized": "Int-\u003ea Integer",
          "package": "random-source",
          "partial": "Random NByte Integer",
          "signature": "Int-\u003em Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomNByteInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 256^n\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomNByteIntegerFrom",
          "package": "random-source",
          "signature": "s -\u003e Int -\u003e m Integer",
          "source": "src/Data-Random-Internal-Source.html#getRandomNByteIntegerFrom",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Integer in the range",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomNByteIntegerFrom",
          "normalized": "a-\u003eInt-\u003eb Integer",
          "package": "random-source",
          "partial": "Random NByte Integer From",
          "signature": "s-\u003eInt-\u003em Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomNByteIntegerFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random value corresponding to the specified primitive.\n\u003c/p\u003e\u003cp\u003eThis is an internal interface; use at your own risk.  It may change or\n disappear at any time.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomPrim",
          "package": "random-source",
          "signature": "Prim t -\u003e m t",
          "source": "src/Data-Random-Internal-Source.html#getRandomPrim",
          "type": "method"
        },
        "index": {
          "description": "Generate random value corresponding to the specified primitive This is an internal interface use at your own risk It may change or disappear at any time",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomPrim",
          "normalized": "Prim a-\u003eb a",
          "package": "random-source",
          "partial": "Random Prim",
          "signature": "Prim t-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random value corresponding to the specified primitive.\n\u003c/p\u003e\u003cp\u003eThis is an internal interface; use at your own risk.  It may change or\n disappear at any time.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomPrimFrom",
          "package": "random-source",
          "signature": "s -\u003e Prim t -\u003e m t",
          "source": "src/Data-Random-Internal-Source.html#getRandomPrimFrom",
          "type": "method"
        },
        "index": {
          "description": "Generate random value corresponding to the specified primitive This is an internal interface use at your own risk It may change or disappear at any time",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomPrimFrom",
          "normalized": "a-\u003ePrim b-\u003ec b",
          "package": "random-source",
          "partial": "Random Prim From",
          "signature": "s-\u003ePrim t-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomPrimFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord16",
          "package": "random-source",
          "signature": "m Word16",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord16",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word16",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord16",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord16From",
          "package": "random-source",
          "signature": "s -\u003e m Word16",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord16From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word16",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord16From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord16From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord32",
          "package": "random-source",
          "signature": "m Word32",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord32",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word32",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord32",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord32From",
          "package": "random-source",
          "signature": "s -\u003e m Word32",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord32From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word32",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord32From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord32From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord64",
          "package": "random-source",
          "signature": "m Word64",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord64",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word64",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord64",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord64From",
          "package": "random-source",
          "signature": "s -\u003e m Word64",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord64From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word64",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord64From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord64From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord8",
          "package": "random-source",
          "signature": "m Word8",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord8",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word8",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord8",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord8From",
          "package": "random-source",
          "signature": "s -\u003e m Word8",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord8From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word8",
          "hierarchy": "Data Random Internal Source",
          "module": "Data.Random.Internal.Source",
          "name": "getRandomWord8From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Source.html#v:getRandomWord8From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few little functions I found myself writing inline over and over again.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "Words",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Words.html",
          "type": "module"
        },
        "index": {
          "description": "few little functions found myself writing inline over and over again",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "Words",
          "package": "random-source",
          "partial": "Words",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a word out of 2 bytes.  No promises are made regarding the order\n in which the bytes are stuffed.  Note that this means that a \u003ccode\u003eRandomSource\u003c/code\u003e\n or \u003ccode\u003eMonadRandom\u003c/code\u003e making use of the default definition of \u003ccode\u003egetRandomWord\u003c/code\u003e, etc.,\n may return different random values on different platforms when started \n with the same seed, depending on the platform's endianness.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord16",
          "package": "random-source",
          "signature": "Word8 -\u003e Word8 -\u003e Word16",
          "source": "src/Data-Random-Internal-Words.html#buildWord16",
          "type": "function"
        },
        "index": {
          "description": "Build word out of bytes No promises are made regarding the order in which the bytes are stuffed Note that this means that RandomSource or MonadRandom making use of the default definition of getRandomWord etc may return different random values on different platforms when started with the same seed depending on the platform endianness",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord16",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a word out of 4 bytes.  No promises are made regarding the order\n in which the bytes are stuffed.  Note that this means that a \u003ccode\u003eRandomSource\u003c/code\u003e\n or \u003ccode\u003eMonadRandom\u003c/code\u003e making use of the default definition of \u003ccode\u003egetRandomWord\u003c/code\u003e, etc.,\n may return different random values on different platforms when started \n with the same seed, depending on the platform's endianness.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord32",
          "package": "random-source",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word32",
          "source": "src/Data-Random-Internal-Words.html#buildWord32",
          "type": "function"
        },
        "index": {
          "description": "Build word out of bytes No promises are made regarding the order in which the bytes are stuffed Note that this means that RandomSource or MonadRandom making use of the default definition of getRandomWord etc may return different random values on different platforms when started with the same seed depending on the platform endianness",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord32",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Words",
          "name": "buildWord32'",
          "package": "random-source",
          "signature": "Word16 -\u003e Word16 -\u003e Word32",
          "source": "src/Data-Random-Internal-Words.html#buildWord32%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord32'",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord32-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a word out of 8 bytes.  No promises are made regarding the order\n in which the bytes are stuffed.  Note that this means that a \u003ccode\u003eRandomSource\u003c/code\u003e\n or \u003ccode\u003eMonadRandom\u003c/code\u003e making use of the default definition of \u003ccode\u003egetRandomWord\u003c/code\u003e, etc.,\n may return different random values on different platforms when started \n with the same seed, depending on the platform's endianness.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64",
          "package": "random-source",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word64",
          "source": "src/Data-Random-Internal-Words.html#buildWord64",
          "type": "function"
        },
        "index": {
          "description": "Build word out of bytes No promises are made regarding the order in which the bytes are stuffed Note that this means that RandomSource or MonadRandom making use of the default definition of getRandomWord etc may return different random values on different platforms when started with the same seed depending on the platform endianness",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64'",
          "package": "random-source",
          "signature": "Word16 -\u003e Word16 -\u003e Word16 -\u003e Word16 -\u003e Word64",
          "source": "src/Data-Random-Internal-Words.html#buildWord64%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64'",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord64-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64''",
          "package": "random-source",
          "signature": "Word32 -\u003e Word32 -\u003e Word64",
          "source": "src/Data-Random-Internal-Words.html#buildWord64%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "buildWord64''",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "random-source",
          "partial": "Word",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:buildWord64-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range [0,1).  Note that a Double's \n mantissa is 52 bits, so this does not fill all of them.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToDouble",
          "package": "random-source",
          "signature": "Word32 -\u003e Double",
          "source": "src/Data-Random-Internal-Words.html#word32ToDouble",
          "type": "function"
        },
        "index": {
          "description": "Pack Word32 into Double in the range Note that Double mantissa is bits so this does not fill all of them",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToDouble",
          "normalized": "Word-\u003eDouble",
          "package": "random-source",
          "partial": "To Double",
          "signature": "Word-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:word32ToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the low 23 bits from a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in the range [0,1).\n Used to convert a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToFloat",
          "package": "random-source",
          "signature": "Word32 -\u003e Float",
          "source": "src/Data-Random-Internal-Words.html#word32ToFloat",
          "type": "function"
        },
        "index": {
          "description": "Pack the low bits from Word32 into Float in the range Used to convert stdUniform Word32 to stdUniform Double",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToFloat",
          "normalized": "Word-\u003eFloat",
          "package": "random-source",
          "partial": "To Float",
          "signature": "Word-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:word32ToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as word32ToFloat, but also return the unused bits (as the 9\n least significant bits of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToFloatWithExcess",
          "package": "random-source",
          "signature": "Word32 -\u003e (Float, Word32)",
          "source": "src/Data-Random-Internal-Words.html#word32ToFloatWithExcess",
          "type": "function"
        },
        "index": {
          "description": "Same as word32ToFloat but also return the unused bits as the least significant bits of Word32",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "word32ToFloatWithExcess",
          "normalized": "Word-\u003e(Float,Word)",
          "package": "random-source",
          "partial": "To Float With Excess",
          "signature": "Word-\u003e(Float,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:word32ToFloatWithExcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the low 52 bits from a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range [0,1).\n Used to convert a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "wordToDouble",
          "package": "random-source",
          "signature": "Word64 -\u003e Double",
          "source": "src/Data-Random-Internal-Words.html#wordToDouble",
          "type": "function"
        },
        "index": {
          "description": "Pack the low bits from Word64 into Double in the range Used to convert stdUniform Word64 to stdUniform Double",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "wordToDouble",
          "normalized": "Word-\u003eDouble",
          "package": "random-source",
          "partial": "To Double",
          "signature": "Word-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:wordToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as wordToDouble, but also return the unused bits (as the 12\n least significant bits of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "wordToDoubleWithExcess",
          "package": "random-source",
          "signature": "Word64 -\u003e (Double, Word64)",
          "source": "src/Data-Random-Internal-Words.html#wordToDoubleWithExcess",
          "type": "function"
        },
        "index": {
          "description": "Same as wordToDouble but also return the unused bits as the least significant bits of Word64",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "wordToDoubleWithExcess",
          "normalized": "Word-\u003e(Double,Word)",
          "package": "random-source",
          "partial": "To Double With Excess",
          "signature": "Word-\u003e(Double,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:wordToDoubleWithExcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the low 23 bits from a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in the range [0,1).\n Used to convert a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003estdUniform\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "wordToFloat",
          "package": "random-source",
          "signature": "Word64 -\u003e Float",
          "source": "src/Data-Random-Internal-Words.html#wordToFloat",
          "type": "function"
        },
        "index": {
          "description": "Pack the low bits from Word64 into Float in the range Used to convert stdUniform Word64 to stdUniform Double",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "wordToFloat",
          "normalized": "Word-\u003eFloat",
          "package": "random-source",
          "partial": "To Float",
          "signature": "Word-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:wordToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as wordToFloat, but also return the unused bits (as the 41\n least significant bits of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Words",
          "name": "wordToFloatWithExcess",
          "package": "random-source",
          "signature": "Word64 -\u003e (Float, Word64)",
          "source": "src/Data-Random-Internal-Words.html#wordToFloatWithExcess",
          "type": "function"
        },
        "index": {
          "description": "Same as wordToFloat but also return the unused bits as the least significant bits of Word64",
          "hierarchy": "Data Random Internal Words",
          "module": "Data.Random.Internal.Words",
          "name": "wordToFloatWithExcess",
          "normalized": "Word-\u003e(Float,Word)",
          "package": "random-source",
          "partial": "To Float With Excess",
          "signature": "Word-\u003e(Float,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Internal-Words.html#v:wordToFloatWithExcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "source": "src/Data-Random-Source-DevRandom.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Source DevRandom",
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "partial": "Dev Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-DevRandom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn systems that have it, /dev/random is a handy-dandy ready-to-use source\n of nonsense.  Keep in mind that on some systems, Linux included, /dev/random\n collects \"real\" entropy, and if you don't have a good source of it, such as\n special hardware for the purpose or a *lot* of network traffic, it's pretty easy\n to suck the entropy pool dry with entropy-intensive applications.  For many\n purposes other than cryptography, /dev/urandom is preferable because when it\n runs out of real entropy it'll still churn out pseudorandom data.\n\u003c/p\u003e",
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "source": "src/Data-Random-Source-DevRandom.html#DevRandom",
          "type": "data"
        },
        "index": {
          "description": "On systems that have it dev random is handy-dandy ready-to-use source of nonsense Keep in mind that on some systems Linux included dev random collects real entropy and if you don have good source of it such as special hardware for the purpose or lot of network traffic it pretty easy to suck the entropy pool dry with entropy-intensive applications For many purposes other than cryptography dev urandom is preferable because when it runs out of real entropy it ll still churn out pseudorandom data",
          "hierarchy": "Data Random Source DevRandom",
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "partial": "Dev Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-DevRandom.html#t:DevRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "signature": "DevRandom",
          "source": "src/Data-Random-Source-DevRandom.html#DevRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Source DevRandom",
          "module": "Data.Random.Source.DevRandom",
          "name": "DevRandom",
          "package": "random-source",
          "partial": "Dev Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-DevRandom.html#v:DevRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.DevRandom",
          "name": "DevURandom",
          "package": "random-source",
          "signature": "DevURandom",
          "source": "src/Data-Random-Source-DevRandom.html#DevRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Source DevRandom",
          "module": "Data.Random.Source.DevRandom",
          "name": "DevURandom",
          "package": "random-source",
          "partial": "Dev URandom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-DevRandom.html#v:DevURandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor convenience, this module defines an instance of \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n On Windows it uses \u003ca\u003eData.Random.Source.MWC\u003c/a\u003e (or \u003ca\u003eData.Random.Source.StdGen\u003c/a\u003e on older\n versions of GHC where the mwc-random package doesn't build) and on other platforms it uses\n \u003ca\u003eData.Random.Source.DevRandom\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Source.IO",
          "name": "IO",
          "package": "random-source",
          "source": "src/Data-Random-Source-IO.html",
          "type": "module"
        },
        "index": {
          "description": "For convenience this module defines an instance of MonadRandom for the IO monad On Windows it uses Data.Random.Source.MWC or Data.Random.Source.StdGen on older versions of GHC where the mwc-random package doesn build and on other platforms it uses Data.Random.Source.DevRandom",
          "hierarchy": "Data Random Source IO",
          "module": "Data.Random.Source.IO",
          "name": "IO",
          "package": "random-source",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the following instances:\n\u003c/p\u003e\u003cpre\u003e instance RandomSource (ST s) (Gen s)\n instance RandomSource IO (Gen RealWorld)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "MWC",
          "package": "random-source",
          "source": "src/Data-Random-Source-MWC.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the following instances instance RandomSource ST Gen instance RandomSource IO Gen RealWorld",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "MWC",
          "package": "random-source",
          "partial": "MWC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of the pseudo-random number generator.\n\u003c/p\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "Gen",
          "package": "random-source",
          "type": "data"
        },
        "index": {
          "description": "State of the pseudo-random number generator",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "Gen",
          "package": "random-source",
          "partial": "Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#t:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "RealWorld",
          "package": "random-source",
          "type": "data"
        },
        "index": {
          "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "RealWorld",
          "package": "random-source",
          "partial": "Real World",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#t:RealWorld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generator for variates using a fixed seed.\n\u003c/p\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "create",
          "package": "random-source",
          "signature": "m (Gen (PrimState m))",
          "type": "function"
        },
        "index": {
          "description": "Create generator for variates using fixed seed",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "create",
          "package": "random-source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generator for variates using the given seed, of which up\n to 256 elements will be used.  For arrays of less than 256\n elements, part of the default seed will be used to finish\n initializing the generator's state.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e initialize (singleton 42)\n\u003c/pre\u003e\u003cpre\u003e initialize (toList [4, 8, 15, 16, 23, 42])\n\u003c/pre\u003e\u003cp\u003eIf a seed contains fewer than 256 elements, it is first used\n verbatim, then its elements are \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003eed against elements of the\n default seed until 256 elements are reached.\n\u003c/p\u003e\u003cp\u003eIf a seed contains exactly 258 elements, then the last two elements\n are used to set the generator's initial state. This allows for\n complete generator reproducibility, so that e.g. \u003ccode\u003egen' == gen\u003c/code\u003e in\n the following example:\n\u003c/p\u003e\u003cpre\u003egen' \u003c- \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromSeed\u003c/a\u003e\u003c/code\u003e =\u003c\u003c \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "initialize",
          "package": "random-source",
          "signature": "v Word32 -\u003e m (Gen (PrimState m))",
          "type": "function"
        },
        "index": {
          "description": "Create generator for variates using the given seed of which up to elements will be used For arrays of less than elements part of the default seed will be used to finish initializing the generator state Examples initialize singleton initialize toList If seed contains fewer than elements it is first used verbatim then its elements are xor ed against elements of the default seed until elements are reached If seed contains exactly elements then the last two elements are used to set the generator initial state This allows for complete generator reproducibility so that e.g gen gen in the following example gen initialize fromSeed save",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "initialize",
          "normalized": "a Word-\u003eb(Gen(PrimState b))",
          "package": "random-source",
          "signature": "v Word-\u003em(Gen(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e that mirrors the state of a saved \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "restore",
          "package": "random-source",
          "signature": "Seed -\u003e m (Gen (PrimState m))",
          "type": "function"
        },
        "index": {
          "description": "Create new Gen that mirrors the state of saved Seed",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "restore",
          "normalized": "Seed-\u003ea(Gen(PrimState a))",
          "package": "random-source",
          "signature": "Seed-\u003em(Gen(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the state of a \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e, for later use by \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Source.MWC",
          "name": "save",
          "package": "random-source",
          "signature": "Gen (PrimState m) -\u003e m Seed",
          "type": "function"
        },
        "index": {
          "description": "Save the state of Gen for later use by restore",
          "hierarchy": "Data Random Source MWC",
          "module": "Data.Random.Source.MWC",
          "name": "save",
          "normalized": "Gen(PrimState a)-\u003ea Seed",
          "package": "random-source",
          "signature": "Gen(PrimState m)-\u003em Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-MWC.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions useful for implementing new \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e instances for state-abstractions containing \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e\n values (the pure pseudorandom generator provided by the\n mersenne-random-pure64 package), as well as instances for some common\n cases.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e generator is immutable, so \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e by itself cannot be a \n \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e (if it were, it would always give the same \"random\"\n values).  Some form of mutable state must be used, such as an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, etc..  A few default instances are provided by this module\n along with a more-general function (\u003ccode\u003e\u003ca\u003egetRandomPrimFromMTRef\u003c/a\u003e\u003c/code\u003e) usable as\n an implementation for new cases users might need.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Source.PureMT",
          "name": "PureMT",
          "package": "random-source",
          "source": "src/Data-Random-Source-PureMT.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions useful for implementing new MonadRandom and RandomSource instances for state-abstractions containing PureMT values the pure pseudorandom generator provided by the mersenne-random-pure64 package as well as instances for some common cases PureMT generator is immutable so PureMT by itself cannot be RandomSource if it were it would always give the same random values Some form of mutable state must be used such as an IORef State monad etc few default instances are provided by this module along with more-general function getRandomPrimFromMTRef usable as an implementation for new cases users might need",
          "hierarchy": "Data Random Source PureMT",
          "module": "Data.Random.Source.PureMT",
          "name": "PureMT",
          "package": "random-source",
          "partial": "Pure MT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-PureMT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e, a pure mersenne twister pseudo-random number generator\n\u003c/p\u003e",
          "module": "Data.Random.Source.PureMT",
          "name": "PureMT",
          "package": "random-source",
          "type": "data"
        },
        "index": {
          "description": "PureMT pure mersenne twister pseudo-random number generator",
          "hierarchy": "Data Random Source PureMT",
          "module": "Data.Random.Source.PureMT",
          "name": "PureMT",
          "package": "random-source",
          "partial": "Pure MT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-PureMT.html#t:PureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a mutable reference to a \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e generator, we can implement\n \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e for it in any monad in which the reference can be modified.\n\u003c/p\u003e\u003cp\u003eTypically this would be used to define a new \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e instance for\n some new reference type or new monad in which an existing reference type\n can be modified atomically.  As an example, the following instance could\n be used to describe how \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e can be a \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e in the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad:\n\u003c/p\u003e\u003cpre\u003e instance RandomSource IO (IORef PureMT) where\n     supportedPrimsFrom _ _ = True\n     getSupportedRandomPrimFrom = getRandomPrimFromMTRef\n\u003c/pre\u003e\u003cp\u003e(note that there is actually a more general instance declared already\n covering this as a a special case, so there's no need to repeat this\n declaration anywhere)\n\u003c/p\u003e\u003cp\u003eExample usage (using some functions from \u003ca\u003eData.Random\u003c/a\u003e in the random-fu \n package):\n\u003c/p\u003e\u003cpre\u003e main = do\n     src \u003c- newIORef (pureMT 1234)          -- OR: newPureMT \u003e\u003e= newIORef\n     x \u003c- runRVar (uniform 0 100) src :: IO Double\n     print x\n\u003c/pre\u003e",
          "module": "Data.Random.Source.PureMT",
          "name": "getRandomPrimFromMTRef",
          "package": "random-source",
          "signature": "sr -\u003e Prim a -\u003e m a",
          "source": "src/Data-Random-Source-PureMT.html#getRandomPrimFromMTRef",
          "type": "function"
        },
        "index": {
          "description": "Given mutable reference to PureMT generator we can implement RandomSource for it in any monad in which the reference can be modified Typically this would be used to define new RandomSource instance for some new reference type or new monad in which an existing reference type can be modified atomically As an example the following instance could be used to describe how IORef PureMT can be RandomSource in the IO monad instance RandomSource IO IORef PureMT where supportedPrimsFrom True getSupportedRandomPrimFrom getRandomPrimFromMTRef note that there is actually more general instance declared already covering this as special case so there no need to repeat this declaration anywhere Example usage using some functions from Data.Random in the random-fu package main do src newIORef pureMT OR newPureMT newIORef runRVar uniform src IO Double print",
          "hierarchy": "Data Random Source PureMT",
          "module": "Data.Random.Source.PureMT",
          "name": "getRandomPrimFromMTRef",
          "normalized": "a-\u003ePrim b-\u003ec b",
          "package": "random-source",
          "partial": "Random Prim From MTRef",
          "signature": "sr-\u003ePrim a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-PureMT.html#v:getRandomPrimFromMTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new PureMT generator, using the clocktime as the base for the seed.\n\u003c/p\u003e",
          "module": "Data.Random.Source.PureMT",
          "name": "newPureMT",
          "package": "random-source",
          "signature": "IO PureMT",
          "type": "function"
        },
        "index": {
          "description": "Create new PureMT generator using the clocktime as the base for the seed",
          "hierarchy": "Data Random Source PureMT",
          "module": "Data.Random.Source.PureMT",
          "name": "newPureMT",
          "package": "random-source",
          "partial": "Pure MT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-PureMT.html#v:newPureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PureMT generator from a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e seed.\n\u003c/p\u003e",
          "module": "Data.Random.Source.PureMT",
          "name": "pureMT",
          "package": "random-source",
          "signature": "Word64 -\u003e PureMT",
          "type": "function"
        },
        "index": {
          "description": "Create PureMT generator from Word64 seed",
          "hierarchy": "Data Random Source PureMT",
          "module": "Data.Random.Source.PureMT",
          "name": "pureMT",
          "normalized": "Word-\u003ePureMT",
          "package": "random-source",
          "partial": "MT",
          "signature": "Word-\u003ePureMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-PureMT.html#v:pureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.Std",
          "name": "Std",
          "package": "random-source",
          "source": "src/Data-Random-Source-Std.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Source Std",
          "module": "Data.Random.Source.Std",
          "name": "Std",
          "package": "random-source",
          "partial": "Std",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-Std.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token representing the \"standard\" entropy source in a \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e\n monad.  Its sole purpose is to make the following true (when the types check):\n\u003c/p\u003e\u003cpre\u003e runRVar x StdRandom === sampleRVar\n\u003c/pre\u003e",
          "module": "Data.Random.Source.Std",
          "name": "StdRandom",
          "package": "random-source",
          "source": "src/Data-Random-Source-Std.html#StdRandom",
          "type": "data"
        },
        "index": {
          "description": "token representing the standard entropy source in MonadRandom monad Its sole purpose is to make the following true when the types check runRVar StdRandom sampleRVar",
          "hierarchy": "Data Random Source Std",
          "module": "Data.Random.Source.Std",
          "name": "StdRandom",
          "package": "random-source",
          "partial": "Std Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-Std.html#t:StdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.Std",
          "name": "StdRandom",
          "package": "random-source",
          "signature": "StdRandom",
          "source": "src/Data-Random-Source-Std.html#StdRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Source Std",
          "module": "Data.Random.Source.Std",
          "name": "StdRandom",
          "package": "random-source",
          "partial": "Std Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-Std.html#v:StdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions useful for implementing new \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e instances for state-abstractions containing \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e\n values (the pure pseudorandom generator provided by the System.Random\n module in the \"random\" package), as well as instances for some common\n cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "StdGen",
          "package": "random-source",
          "source": "src/Data-Random-Source-StdGen.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions useful for implementing new MonadRandom and RandomSource instances for state-abstractions containing StdGen values the pure pseudorandom generator provided by the System.Random module in the random package as well as instances for some common cases",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "StdGen",
          "package": "random-source",
          "partial": "Std Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e of at least 30 bits.\n\u003c/p\u003e\u003cp\u003eThe result of repeatedly using \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e should be at least as statistically\nrobust as the \u003cem\u003eMinimal Standard Random Number Generator\u003c/em\u003e described by\n[\u003ca\u003eSystem.Random\u003c/a\u003e, \u003ca\u003eSystem.Random\u003c/a\u003e].\nUntil more is known about implementations of \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, all we require is\nthat \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e deliver generators that are (a) not identical and\n(b) independently robust in the sense just given.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instances of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e provide a primitive way to save the\nstate of a random number generator.\nIt is required that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e g) == g\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition, \u003ccode\u003e\u003ca\u003ereads\u003c/a\u003e\u003c/code\u003e may be used to map an arbitrary string (not necessarily one\nproduced by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e) onto a value of type \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e. In general, the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\ninstance of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e has the following properties: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It guarantees to succeed on any string. \n\u003c/li\u003e\u003cli\u003e It guarantees to consume only a finite portion of the string. \n\u003c/li\u003e\u003cli\u003e Different argument strings are likely to result in different results.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "StdGen",
          "package": "random-source",
          "type": "data"
        },
        "index": {
          "description": "The StdGen instance of RandomGen has genRange of at least bits The result of repeatedly using next should be at least as statistically robust as the Minimal Standard Random Number Generator described by System.Random System.Random Until more is known about implementations of split all we require is that split deliver generators that are not identical and independently robust in the sense just given The Show and Read instances of StdGen provide primitive way to save the state of random number generator It is required that read show In addition reads may be used to map an arbitrary string not necessarily one produced by show onto value of type StdGen In general the Read instance of StdGen has the following properties It guarantees to succeed on any string It guarantees to consume only finite portion of the string Different argument strings are likely to result in different results",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "StdGen",
          "package": "random-source",
          "partial": "Std Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#t:StdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a mutable reference to a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e generator, we can make a\n \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e usable in any monad in which the reference can be modified.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Random.Source.PureMT\u003c/a\u003e.\u003ccode\u003egetRandomPrimFromMTRef\u003c/code\u003e for more detailed\n usage hints - this function serves exactly the same purpose except for a\n \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e generator instead of a \u003ccode\u003ePureMT\u003c/code\u003e generator.\n\u003c/p\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromRandomGenRef",
          "package": "random-source",
          "signature": "sr -\u003e Prim a -\u003e m a",
          "source": "src/Data-Random-Source-StdGen.html#getRandomPrimFromRandomGenRef",
          "type": "function"
        },
        "index": {
          "description": "Given mutable reference to RandomGen generator we can make RandomSource usable in any monad in which the reference can be modified See Data.Random.Source.PureMT getRandomPrimFromMTRef for more detailed usage hints this function serves exactly the same purpose except for StdGen generator instead of PureMT generator",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromRandomGenRef",
          "normalized": "a-\u003ePrim b-\u003ec b",
          "package": "random-source",
          "partial": "Random Prim From Random Gen Ref",
          "signature": "sr-\u003ePrim a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#v:getRandomPrimFromRandomGenRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilarly, \u003ccode\u003egetRandomWordFromRandomGenState x\u003c/code\u003e can be used in any \"state\"\n monad in the mtl sense whose state is a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e generator.\n Additionally, the standard mtl state monads have \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e instances\n which do precisely that, allowing an easy conversion of \u003ccode\u003eRVar\u003c/code\u003es and\n other \u003ccode\u003eDistribution\u003c/code\u003e instances to \"pure\" random variables.\n\u003c/p\u003e\u003cp\u003eAgain, see \u003ca\u003eData.Random.Source.PureMT\u003c/a\u003e.\u003ccode\u003egetRandomPrimFromMTState\u003c/code\u003e for more\n detailed usage hints - this function serves exactly the same purpose except \n for a \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e generator instead of a \u003ccode\u003ePureMT\u003c/code\u003e generator.\n\u003c/p\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromRandomGenState",
          "package": "random-source",
          "signature": "Prim a -\u003e m a",
          "source": "src/Data-Random-Source-StdGen.html#getRandomPrimFromRandomGenState",
          "type": "function"
        },
        "index": {
          "description": "Similarly getRandomWordFromRandomGenState can be used in any state monad in the mtl sense whose state is RandomGen generator Additionally the standard mtl state monads have MonadRandom instances which do precisely that allowing an easy conversion of RVar and other Distribution instances to pure random variables Again see Data.Random.Source.PureMT getRandomPrimFromMTState for more detailed usage hints this function serves exactly the same purpose except for StdGen generator instead of PureMT generator",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromRandomGenState",
          "normalized": "Prim a-\u003eb a",
          "package": "random-source",
          "partial": "Random Prim From Random Gen State",
          "signature": "Prim a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#v:getRandomPrimFromRandomGenState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromStdGenIO",
          "package": "random-source",
          "signature": "Prim a -\u003e IO a",
          "source": "src/Data-Random-Source-StdGen.html#getRandomPrimFromStdGenIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "getRandomPrimFromStdGenIO",
          "normalized": "Prim a-\u003eIO a",
          "package": "random-source",
          "partial": "Random Prim From Std Gen IO",
          "signature": "Prim a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#v:getRandomPrimFromStdGenIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003emkStdGen\u003c/a\u003e\u003c/code\u003e provides an alternative way of producing an initial\ngenerator, by mapping an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e into a generator. Again, distinct arguments\nshould be likely to produce distinct generators.\n\u003c/p\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "mkStdGen",
          "package": "random-source",
          "signature": "Int -\u003e StdGen",
          "type": "function"
        },
        "index": {
          "description": "The function mkStdGen provides an alternative way of producing an initial generator by mapping an Int into generator Again distinct arguments should be likely to produce distinct generators",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "mkStdGen",
          "normalized": "Int-\u003eStdGen",
          "package": "random-source",
          "partial": "Std Gen",
          "signature": "Int-\u003eStdGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#v:mkStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e to the current global random generator,\n updates it with one of the results, and returns the other.\n\u003c/p\u003e",
          "module": "Data.Random.Source.StdGen",
          "name": "newStdGen",
          "package": "random-source",
          "signature": "IO StdGen",
          "type": "function"
        },
        "index": {
          "description": "Applies split to the current global random generator updates it with one of the results and returns the other",
          "hierarchy": "Data Random Source StdGen",
          "module": "Data.Random.Source.StdGen",
          "name": "newStdGen",
          "package": "random-source",
          "partial": "Std Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source-StdGen.html#v:newStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Source",
          "name": "Source",
          "package": "random-source",
          "source": "src/Data-Random-Source.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "Source",
          "package": "random-source",
          "partial": "Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for monads with a chosen source of entropy.  For example,\n \u003ccode\u003eRVar\u003c/code\u003e is such a monad - the source from which it is (eventually) sampled\n is the only source from which a random variable is permitted to draw, so\n when directly requesting entropy for a random variable these functions\n are used.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrim\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003emonadRandom\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003emonadRandom\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell and GADTs language extensions):\n\u003c/p\u003e\u003cpre\u003e $(monadRandom [d|\n         instance MonadRandom FooM where\n             getRandomDouble = return pi\n             getRandomWord16 = return 4\n             {- etc... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Source",
          "name": "MonadRandom",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html#MonadRandom",
          "type": "class"
        },
        "index": {
          "description": "typeclass for monads with chosen source of entropy For example RVar is such monad the source from which it is eventually sampled is the only source from which random variable is permitted to draw so when directly requesting entropy for random variable these functions are used Minimum implementation is either the internal getRandomPrim or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the monadRandom Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use monadRandom just wrap your instance declaration as follows and enable the TemplateHaskell and GADTs language extensions monadRandom instance MonadRandom FooM where getRandomDouble return pi getRandomWord16 return etc",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "MonadRandom",
          "package": "random-source",
          "partial": "Monad Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#t:MonadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source of entropy which can be used in the given monad.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrimFrom\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003erandomSource\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003erandomSource\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell, MultiParamTypeClasses and GADTs language\n extensions, as well as any others required by your instances, such as\n FlexibleInstances):\n\u003c/p\u003e\u003cpre\u003e $(randomSource [d|\n         instance RandomSource FooM Bar where\n             {- at least one RandomSource function... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Source",
          "name": "RandomSource",
          "package": "random-source",
          "source": "src/Data-Random-Internal-Source.html#RandomSource",
          "type": "class"
        },
        "index": {
          "description": "source of entropy which can be used in the given monad See also MonadRandom Minimum implementation is either the internal getRandomPrimFrom or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the randomSource Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use randomSource just wrap your instance declaration as follows and enable the TemplateHaskell MultiParamTypeClasses and GADTs language extensions as well as any others required by your instances such as FlexibleInstances randomSource instance RandomSource FooM Bar where at least one RandomSource function",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "RandomSource",
          "package": "random-source",
          "partial": "Random Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#t:RandomSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 1\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomDouble",
          "package": "random-source",
          "signature": "m Double",
          "source": "src/Data-Random-Internal-Source.html#getRandomDouble",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Double in the range",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomDouble",
          "package": "random-source",
          "partial": "Random Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 1\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomDoubleFrom",
          "package": "random-source",
          "signature": "s -\u003e m Double",
          "source": "src/Data-Random-Internal-Source.html#getRandomDoubleFrom",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Double in the range",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomDoubleFrom",
          "normalized": "a-\u003eb Double",
          "package": "random-source",
          "partial": "Random Double From",
          "signature": "s-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomDoubleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 256^n\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomNByteInteger",
          "package": "random-source",
          "signature": "Int -\u003e m Integer",
          "source": "src/Data-Random-Internal-Source.html#getRandomNByteInteger",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Integer in the range",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomNByteInteger",
          "normalized": "Int-\u003ea Integer",
          "package": "random-source",
          "partial": "Random NByte Integer",
          "signature": "Int-\u003em Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomNByteInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 256^n\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomNByteIntegerFrom",
          "package": "random-source",
          "signature": "s -\u003e Int -\u003e m Integer",
          "source": "src/Data-Random-Internal-Source.html#getRandomNByteIntegerFrom",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Integer in the range",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomNByteIntegerFrom",
          "normalized": "a-\u003eInt-\u003eb Integer",
          "package": "random-source",
          "partial": "Random NByte Integer From",
          "signature": "s-\u003eInt-\u003em Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomNByteIntegerFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord16",
          "package": "random-source",
          "signature": "m Word16",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord16",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word16",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord16",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord16From",
          "package": "random-source",
          "signature": "s -\u003e m Word16",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord16From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word16",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord16From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord16From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord32",
          "package": "random-source",
          "signature": "m Word32",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord32",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word32",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord32",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord32From",
          "package": "random-source",
          "signature": "s -\u003e m Word32",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord32From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word32",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord32From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord32From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord64",
          "package": "random-source",
          "signature": "m Word64",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord64",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word64",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord64",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord64From",
          "package": "random-source",
          "signature": "s -\u003e m Word64",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord64From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word64",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord64From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord64From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord8",
          "package": "random-source",
          "signature": "m Word8",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord8",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word8",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord8",
          "package": "random-source",
          "partial": "Random Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Source",
          "name": "getRandomWord8From",
          "package": "random-source",
          "signature": "s -\u003e m Word8",
          "source": "src/Data-Random-Internal-Source.html#getRandomWord8From",
          "type": "method"
        },
        "index": {
          "description": "Generate uniformly distributed random Word8",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "getRandomWord8From",
          "normalized": "a-\u003eb Word",
          "package": "random-source",
          "partial": "Random Word From",
          "signature": "s-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:getRandomWord8From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete a possibly-incomplete \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e implementation.  It is \n recommended that this macro be used even if the implementation is currently\n complete, as the \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e class may be extended at any time.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003e\u003ca\u003emonadRandom\u003c/a\u003e\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell and GADTs language extensions):\n\u003c/p\u003e\u003cpre\u003e $(monadRandom [d|\n         instance MonadRandom FooM where\n             getRandomDouble = return pi\n             getRandomWord16 = return 4\n             {- etc... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Source",
          "name": "monadRandom",
          "package": "random-source",
          "signature": "Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Random-Source-Internal-TH.html#monadRandom",
          "type": "function"
        },
        "index": {
          "description": "Complete possibly-incomplete MonadRandom implementation It is recommended that this macro be used even if the implementation is currently complete as the MonadRandom class may be extended at any time To use monadRandom just wrap your instance declaration as follows and enable the TemplateHaskell and GADTs language extensions monadRandom instance MonadRandom FooM where getRandomDouble return pi getRandomWord16 return etc",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "monadRandom",
          "normalized": "Q[Dec]-\u003eQ[Dec]",
          "package": "random-source",
          "partial": "Random",
          "signature": "Q[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:monadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete a possibly-incomplete \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e implementation.  It is \n recommended that this macro be used even if the implementation is currently\n complete, as the \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e class may be extended at any time.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003e\u003ca\u003erandomSource\u003c/a\u003e\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell, MultiParamTypeClasses and GADTs language\n extensions, as well as any others required by your instances, such as\n FlexibleInstances):\n\u003c/p\u003e\u003cpre\u003e $(randomSource [d|\n         instance RandomSource FooM Bar where\n             {- at least one RandomSource function... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random.Source",
          "name": "randomSource",
          "package": "random-source",
          "signature": "Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Random-Source-Internal-TH.html#randomSource",
          "type": "function"
        },
        "index": {
          "description": "Complete possibly-incomplete RandomSource implementation It is recommended that this macro be used even if the implementation is currently complete as the RandomSource class may be extended at any time To use randomSource just wrap your instance declaration as follows and enable the TemplateHaskell MultiParamTypeClasses and GADTs language extensions as well as any others required by your instances such as FlexibleInstances randomSource instance RandomSource FooM Bar where at least one RandomSource function",
          "hierarchy": "Data Random Source",
          "module": "Data.Random.Source",
          "name": "randomSource",
          "normalized": "Q[Dec]-\u003eQ[Dec]",
          "package": "random-source",
          "partial": "Source",
          "signature": "Q[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-source/docs/Data-Random-Source.html#v:randomSource"
      }
    }
  ]
]