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
        "word": "monad-codec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Codec monad provides functions for encoding and decoding\n complex data structures with unique integer numbers.  In the\n simplest case the entire sturecture can be transformed to unique\n atom (see \u003ccode\u003eexample1\u003c/code\u003e below).  When it is not sufficient to encode\n the input object with one codec, more complex codec structure can\n be used (see \u003ccode\u003eexample2\u003c/code\u003e below).  The library relies on a 'data-lens'\n package which provides types and functions for codec manipulations.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e example1 = evalCodec empty $ do\n     let xs = \"abcabd\"\n     ys \u003c- mapM (encode idLens) xs\n     zs \u003c- mapM (decode idLens) ys\n     return $ zip zs ys\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[('a',0),('b',1),('c',2),('a',0),('b',1),('d',3)]\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre\u003e example2 = evalCodec (empty, empty) $ do\n     let xs = zip \"abcabd\" [1, 34342, 5435, 34342, 124, 1]\n     ys \u003c- forM xs $ \\(x, y) -\u003e\n         (,) \u003c$\u003e encode fstLens x \u003c*\u003e encode sndLens y\n     zs \u003c- forM ys $ \\(i, j) -\u003e \n         (,) \u003c$\u003e decode fstLens i \u003c*\u003e decode sndLens j\n     return (zs, ys)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst example2\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[('a',1),('b',34342),('c',5435),('a',34342),('b',124),('d',1)]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esnd example2\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[(0,0),(1,1),(2,2),(0,1),(1,3),(3,0)]\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Codec",
          "name": "Codec",
          "package": "monad-codec",
          "source": "src/Control-Monad-Codec.html",
          "type": "module"
        },
        "index": {
          "description": "The Codec monad provides functions for encoding and decoding complex data structures with unique integer numbers In the simplest case the entire sturecture can be transformed to unique atom see example1 below When it is not sufficient to encode the input object with one codec more complex codec structure can be used see example2 below The library relies on data-lens package which provides types and functions for codec manipulations Example example1 evalCodec empty do let xs abcabd ys mapM encode idLens xs zs mapM decode idLens ys return zip zs ys example1 example2 evalCodec empty empty do let xs zip abcabd ys forM xs encode fstLens encode sndLens zs forM ys decode fstLens decode sndLens return zs ys fst example2 snd example2",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "Codec",
          "package": "monad-codec",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic Codec component, which represents to and fro mapping\n between \u003ccode\u003ea\u003c/code\u003e objects and unique intergers.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "AtomCodec",
          "package": "monad-codec",
          "source": "src/Control-Monad-Codec.html#AtomCodec",
          "type": "data"
        },
        "index": {
          "description": "Atomic Codec component which represents to and fro mapping between objects and unique intergers",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "AtomCodec",
          "package": "monad-codec",
          "partial": "Atom Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#t:AtomCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a type synonym for a lens between codec and codec component.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "AtomLens",
          "package": "monad-codec",
          "source": "src/Control-Monad-Codec.html#AtomLens",
          "type": "type"
        },
        "index": {
          "description": "Just type synonym for lens between codec and codec component",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "AtomLens",
          "package": "monad-codec",
          "partial": "Atom Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#t:AtomLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Codec monad preserves mappings between objects and respective\n codec components.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "Codec",
          "package": "monad-codec",
          "source": "src/Control-Monad-Codec.html#Codec",
          "type": "data"
        },
        "index": {
          "description": "Codec monad preserves mappings between objects and respective codec components",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "Codec",
          "package": "monad-codec",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Codec",
          "name": "AtomCodec",
          "package": "monad-codec",
          "signature": "AtomCodec",
          "source": "src/Control-Monad-Codec.html#AtomCodec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "AtomCodec",
          "package": "monad-codec",
          "partial": "Atom Codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:AtomCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the number with codec component identified by the lens.\n Report error when the number is not present in the codec component. \n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "decode",
          "package": "monad-codec",
          "signature": "AtomLens c a -\u003e Int -\u003e Codec c a",
          "source": "src/Control-Monad-Codec.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode the number with codec component identified by the lens Report error when the number is not present in the codec component",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "decode",
          "normalized": "AtomLens a b-\u003eInt-\u003eCodec a b",
          "package": "monad-codec",
          "signature": "AtomLens c a-\u003eInt-\u003eCodec c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty codec component.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "empty",
          "package": "monad-codec",
          "signature": "AtomCodec a",
          "source": "src/Control-Monad-Codec.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty codec component",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "empty",
          "package": "monad-codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the object with codec component identified by the lens.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "encode",
          "package": "monad-codec",
          "signature": "AtomLens c a -\u003e a -\u003e Codec c Int",
          "source": "src/Control-Monad-Codec.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode the object with codec component identified by the lens",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "encode",
          "normalized": "AtomLens a b-\u003eb-\u003eCodec a Int",
          "package": "monad-codec",
          "signature": "AtomLens c a-\u003ea-\u003eCodec c Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of encode which doesn't update the return componenent\n of the atom codec.  It is useful when we know that particular\n value (e.g. value of a condition observation) won't be decoded\n afterwards so there is no need to store it and waste memory.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "encode'",
          "package": "monad-codec",
          "signature": "AtomLens c a -\u003e a -\u003e Codec c Int",
          "source": "src/Control-Monad-Codec.html#encode%27",
          "type": "function"
        },
        "index": {
          "description": "Version of encode which doesn update the return componenent of the atom codec It is useful when we know that particular value e.g value of condition observation won be decoded afterwards so there is no need to store it and waste memory",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "encode'",
          "normalized": "AtomLens a b-\u003eb-\u003eCodec a Int",
          "package": "monad-codec",
          "signature": "AtomLens c a-\u003ea-\u003eCodec c Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:encode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the Codec monad with the initial codec value.\n Only the monad result will be returned.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "evalCodec",
          "package": "monad-codec",
          "signature": "c -\u003e Codec c a -\u003e a",
          "source": "src/Control-Monad-Codec.html#evalCodec",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the Codec monad with the initial codec value Only the monad result will be returned",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "evalCodec",
          "normalized": "a-\u003eCodec a b-\u003eb",
          "package": "monad-codec",
          "partial": "Codec",
          "signature": "c-\u003eCodec c a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:evalCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the Codec monad with the initial codec value.\n Only the final codec state will be returned.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "execCodec",
          "package": "monad-codec",
          "signature": "c -\u003e Codec c a -\u003e c",
          "source": "src/Control-Monad-Codec.html#execCodec",
          "type": "function"
        },
        "index": {
          "description": "Execute the Codec monad with the initial codec value Only the final codec state will be returned",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "execCodec",
          "normalized": "a-\u003eCodec a b-\u003ea",
          "package": "monad-codec",
          "partial": "Codec",
          "signature": "c-\u003eCodec c a-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:execCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Codec",
          "name": "from",
          "package": "monad-codec",
          "signature": "(IntMap a)",
          "source": "src/Control-Monad-Codec.html#AtomCodec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "from",
          "package": "monad-codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity lenses should be used whenever the structure of the codec\n is simple, i.e. only one atomic codec is used.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "idLens",
          "package": "monad-codec",
          "signature": "Lens a a",
          "source": "src/Control-Monad-Codec.html#idLens",
          "type": "function"
        },
        "index": {
          "description": "Identity lenses should be used whenever the structure of the codec is simple i.e only one atomic codec is used",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "idLens",
          "package": "monad-codec",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:idLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the number with codec component identified by the lens.\n Return Nothing if the object is not present in the atomic\n codec component.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "maybeDecode",
          "package": "monad-codec",
          "signature": "AtomLens c a -\u003e Int -\u003e Codec c (Maybe a)",
          "source": "src/Control-Monad-Codec.html#maybeDecode",
          "type": "function"
        },
        "index": {
          "description": "Decode the number with codec component identified by the lens Return Nothing if the object is not present in the atomic codec component",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "maybeDecode",
          "normalized": "AtomLens a b-\u003eInt-\u003eCodec a(Maybe b)",
          "package": "monad-codec",
          "partial": "Decode",
          "signature": "AtomLens c a-\u003eInt-\u003eCodec c(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:maybeDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the object with codec component identified by the lens.\n Return Nothing if the object is not present in the atomic\n codec component.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "maybeEncode",
          "package": "monad-codec",
          "signature": "AtomLens c a -\u003e a -\u003e Codec c (Maybe Int)",
          "source": "src/Control-Monad-Codec.html#maybeEncode",
          "type": "function"
        },
        "index": {
          "description": "Encode the object with codec component identified by the lens Return Nothing if the object is not present in the atomic codec component",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "maybeEncode",
          "normalized": "AtomLens a b-\u003eb-\u003eCodec a(Maybe Int)",
          "package": "monad-codec",
          "partial": "Encode",
          "signature": "AtomLens c a-\u003ea-\u003eCodec c(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:maybeEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Codec monad with the initial codec value.\n Return both the result and the final codec state.\n The obtained codec can be used next to perform subsequent\n decoding or encoding.\n\u003c/p\u003e",
          "module": "Control.Monad.Codec",
          "name": "runCodec",
          "package": "monad-codec",
          "signature": "c -\u003e Codec c a -\u003e (a, c)",
          "source": "src/Control-Monad-Codec.html#runCodec",
          "type": "function"
        },
        "index": {
          "description": "Run the Codec monad with the initial codec value Return both the result and the final codec state The obtained codec can be used next to perform subsequent decoding or encoding",
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "runCodec",
          "normalized": "a-\u003eCodec a b-\u003e(b,a)",
          "package": "monad-codec",
          "partial": "Codec",
          "signature": "c-\u003eCodec c a-\u003e(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:runCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Codec",
          "name": "to",
          "package": "monad-codec",
          "signature": "(Map a Int)",
          "source": "src/Control-Monad-Codec.html#AtomCodec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Codec",
          "module": "Control.Monad.Codec",
          "name": "to",
          "package": "monad-codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-codec/docs/Control-Monad-Codec.html#v:to"
      }
    }
  ]
]