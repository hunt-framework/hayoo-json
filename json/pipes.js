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
        "word": "pipes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core functionality for the \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/p\u003e\u003cp\u003eRead \u003ca\u003ePipes.Tutorial\u003c/a\u003e if you want a beginners tutorial explaining how to use\n    this library.  The documentation in this module targets more advanced users\n    who want to understand the theory behind this library.\n\u003c/p\u003e\u003cp\u003eThis module is not exported by default, and I recommend you use the\n    unidirectional operations exported by the \u003ca\u003ePipes\u003c/a\u003e module if you can.  You\n    should only use this module if you require advanced features like:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e bidirectional communication, or:\n\u003c/li\u003e\u003cli\u003e push-based \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Pipes.Core",
          "name": "Core",
          "package": "pipes",
          "source": "src/Pipes-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The core functionality for the Proxy monad transformer Read Pipes.Tutorial if you want beginners tutorial explaining how to use this library The documentation in this module targets more advanced users who want to understand the theory behind this library This module is not exported by default and recommend you use the unidirectional operations exported by the Pipes module if you can You should only use this module if you require advanced features like bidirectional communication or push-based Pipe",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Core",
          "package": "pipes",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eClient a' a\u003c/code\u003e sends requests of type \u003ccode\u003ea'\u003c/code\u003e and receives responses of\n    type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003es only \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e and never \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Client",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Client",
          "type": "type"
        },
        "index": {
          "description": "Client sends requests of type and receives responses of type Client only request and never respond",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Client",
          "package": "pipes",
          "partial": "Client",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Client'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Client%27",
          "type": "type"
        },
        "index": {
          "description": "Like Client but with polymorphic type",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Client'",
          "package": "pipes",
          "partial": "Client'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Client-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es can only \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Consumer",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Consumer",
          "type": "type"
        },
        "index": {
          "description": "Consumer can only await",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Consumer",
          "package": "pipes",
          "partial": "Consumer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Consumer'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Consumer%27",
          "type": "type"
        },
        "index": {
          "description": "Like Consumer but with polymorphic type",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Consumer'",
          "package": "pipes",
          "partial": "Consumer'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Consumer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn effect in the base monad\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003es neither \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Effect",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Effect",
          "type": "type"
        },
        "index": {
          "description": "An effect in the base monad Effect neither await nor yield",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Effect",
          "package": "pipes",
          "partial": "Effect",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Effect'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Effect%27",
          "type": "type"
        },
        "index": {
          "description": "Like Effect but with polymorphic type",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Effect'",
          "package": "pipes",
          "partial": "Effect'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Effect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es can both \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Pipe",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Pipe",
          "type": "type"
        },
        "index": {
          "description": "Pipe can both await and yield",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Pipe",
          "package": "pipes",
          "partial": "Pipe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es can only \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Producer",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Producer",
          "type": "type"
        },
        "index": {
          "description": "Producer can only yield",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Producer",
          "package": "pipes",
          "partial": "Producer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Producer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Producer'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Producer%27",
          "type": "type"
        },
        "index": {
          "description": "Like Producer but with polymorphic type",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Producer'",
          "package": "pipes",
          "partial": "Producer'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Producer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e is a monad transformer that receives and sends information on both\n    an upstream and downstream interface.\n\u003c/p\u003e\u003cp\u003eThe type variables signify:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea'\u003c/code\u003e and \u003ccode\u003ea\u003c/code\u003e - The upstream interface, where \u003ccode\u003e(a')\u003c/code\u003es go out and \u003ccode\u003e(a)\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eb'\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e - The downstream interface, where \u003ccode\u003e(b)\u003c/code\u003es go out and \u003ccode\u003e(b')\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em \u003c/code\u003e - The base monad\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003er \u003c/code\u003e - The return value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Pipes.Core",
          "name": "Proxy",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Proxy is monad transformer that receives and sends information on both an upstream and downstream interface The type variables signify and The upstream interface where go out and come in and The downstream interface where go out and come in The base monad The return value",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Proxy",
          "package": "pipes",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eServer b' b\u003c/code\u003e receives requests of type \u003ccode\u003eb'\u003c/code\u003e and sends responses of type\n    \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003es only \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e and never \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Server",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Server",
          "type": "type"
        },
        "index": {
          "description": "Server receives requests of type and sends responses of type Server only respond and never request",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Server",
          "package": "pipes",
          "partial": "Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "Server'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Server%27",
          "type": "type"
        },
        "index": {
          "description": "Like Server but with polymorphic type",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "Server'",
          "package": "pipes",
          "partial": "Server'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:Server-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty type, used to close output ends\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eData.Void\u003c/code\u003e is merged into \u003ccode\u003ebase\u003c/code\u003e, this will change to:\n\u003c/p\u003e\u003cpre\u003e type X = Void\n\u003c/pre\u003e",
          "module": "Pipes.Core",
          "name": "X",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#X",
          "type": "data"
        },
        "index": {
          "description": "The empty type used to close output ends When Data.Void is merged into base this will change to type Void",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "X",
          "package": "pipes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(~\u003c\u003c)",
          "package": "pipes",
          "signature": "(b -\u003e Proxy b' b c' c m r)-\u003e Proxy a' a b' b m r-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(~\u003c\u003c) ~\u003c\u003c",
          "normalized": "(a-\u003eProxy b a c d e f)-\u003eProxy g h b a e f-\u003eProxy g h c d e f",
          "package": "pipes",
          "signature": "(b-\u003eProxy b' b c' c m r)-\u003eProxy a' a b' b m r-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-126--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f +\u003e\u003e p)\u003c/code\u003e pairs each \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ep\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePoint-ful version of (\u003ccode\u003e\u003ca\u003e\u003e+\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(+\u003e\u003e)",
          "package": "pipes",
          "signature": "(b' -\u003e Proxy a' a b' b m r)-\u003e Proxy b' b c' c m r-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "pairs each request in with respond in Point-ful version of",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(+\u003e\u003e) +\u003e\u003e",
          "normalized": "(a-\u003eProxy b c a d e f)-\u003eProxy a d g h e f-\u003eProxy b c g h e f",
          "package": "pipes",
          "signature": "(b'-\u003eProxy a' a b' b m r)-\u003eProxy b' b c' c m r-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-43--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\u003e\\\\\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(//\u003c)",
          "package": "pipes",
          "signature": "Proxy b' b y' y m c-\u003e (b' -\u003e Proxy a' a y' y m b)-\u003e Proxy a' a y' y m c",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(//\u003c) //\u003c",
          "normalized": "Proxy a b c d e f-\u003e(a-\u003eProxy g h c d e b)-\u003eProxy g h c d e f",
          "package": "pipes",
          "signature": "Proxy b' b y' y m c-\u003e(b'-\u003eProxy a' a y' y m b)-\u003eProxy a' a y' y m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-47--47--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(p //\u003e f)\u003c/code\u003e replaces each \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ep\u003c/code\u003e with \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePoint-ful version of (\u003ccode\u003e\u003ca\u003e/\u003e/\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(//\u003e)",
          "package": "pipes",
          "signature": "Proxy x' x b' b m a'-\u003e (b -\u003e Proxy x' x c' c m b')-\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "replaces each respond in with Point-ful version of",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(//\u003e) //\u003e",
          "normalized": "Proxy a b c d e f-\u003e(d-\u003eProxy a b g h e c)-\u003eProxy a b g h e f",
          "package": "pipes",
          "signature": "Proxy x' x b' b m a'-\u003e(b-\u003eProxy x' x c' c m b')-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\\\u003e\\\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(/\u003c/)",
          "package": "pipes",
          "signature": "(c' -\u003e Proxy b' b x' x m c)-\u003e (b' -\u003e Proxy a' a x' x m b)-\u003e c' -\u003e Proxy a' a x' x m c",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(/\u003c/) /\u003c/",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(b-\u003eProxy h i d e f c)-\u003ea-\u003eProxy h i d e f g",
          "package": "pipes",
          "signature": "(c'-\u003eProxy b' b x' x m c)-\u003e(b'-\u003eProxy a' a x' x m b)-\u003ec'-\u003eProxy a' a x' x m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-47--60--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two unfolds, creating a new unfold\n\u003c/p\u003e\u003cpre\u003e\n(f \u003ccode\u003e\u003ca\u003e/\u003e/\u003c/a\u003e\u003c/code\u003e g) x = f x \u003ccode\u003e\u003ca\u003e//\u003e\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e/\u003e/\u003c/a\u003e\u003c/code\u003e) is the composition operator of the respond category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(/\u003e/)",
          "package": "pipes",
          "signature": "(a -\u003e Proxy x' x b' b m a')-\u003e (b -\u003e Proxy x' x c' c m b')-\u003e a -\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "Compose two unfolds creating new unfold is the composition operator of the respond category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(/\u003e/) /\u003e/",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(e-\u003eProxy b c h i f d)-\u003ea-\u003eProxy b c h i f g",
          "package": "pipes",
          "signature": "(a-\u003eProxy x' x b' b m a')-\u003e(b-\u003eProxy x' x c' c m b')-\u003ea-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-47--62--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003c~\u003c)",
          "package": "pipes",
          "signature": "(b -\u003e Proxy b' b c' c m r)-\u003e (a -\u003e Proxy a' a b' b m r)-\u003e a -\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003c~\u003c) \u003c~\u003c",
          "normalized": "(a-\u003eProxy b a c d e f)-\u003e(g-\u003eProxy h g b a e f)-\u003eg-\u003eProxy h g c d e f",
          "package": "pipes",
          "signature": "(b-\u003eProxy b' b c' c m r)-\u003e(a-\u003eProxy a' a b' b m r)-\u003ea-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-60--126--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\u003e+\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003c+\u003c)",
          "package": "pipes",
          "signature": "(c' -\u003e Proxy b' b c' c m r)-\u003e (b' -\u003e Proxy a' a b' b m r)-\u003e c' -\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003c+\u003c) \u003c+\u003c",
          "normalized": "(a-\u003eProxy b c a d e f)-\u003e(b-\u003eProxy g h b c e f)-\u003ea-\u003eProxy g h a d e f",
          "package": "pipes",
          "signature": "(c'-\u003eProxy b' b c' c m r)-\u003e(b'-\u003eProxy a' a b' b m r)-\u003ec'-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-60--43--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e+\u003e\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003c\u003c+)",
          "package": "pipes",
          "signature": "Proxy b' b c' c m r-\u003e (b' -\u003e Proxy a' a b' b m r)-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003c\u003c+) \u003c\u003c+",
          "normalized": "Proxy a b c d e f-\u003e(a-\u003eProxy g h a b e f)-\u003eProxy g h c d e f",
          "package": "pipes",
          "signature": "Proxy b' b c' c m r-\u003e(b'-\u003eProxy a' a b' b m r)-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-60--60--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e//\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003c\\\\)",
          "package": "pipes",
          "signature": "(b -\u003e Proxy x' x c' c m b')-\u003e Proxy x' x b' b m a'-\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003c\\\\) \u003c\\\\",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003eProxy b c g a f h-\u003eProxy b c d e f h",
          "package": "pipes",
          "signature": "(b-\u003eProxy x' x c' c m b')-\u003eProxy x' x b' b m a'-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-60--92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two proxies blocked while \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003eing data, creating a new proxy\n    blocked while \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003eing data\n\u003c/p\u003e\u003cpre\u003e\n(f \u003ccode\u003e\u003ca\u003e\u003e~\u003e\u003c/a\u003e\u003c/code\u003e g) x = f x \u003ccode\u003e\u003ca\u003e\u003e\u003e~\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) is the composition operator of the push category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003e~\u003e)",
          "package": "pipes",
          "signature": "(_a -\u003e Proxy a' a b' b m r)-\u003e (b -\u003e Proxy b' b c' c m r)-\u003e _a -\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Compose two proxies blocked while request ing data creating new proxy blocked while request ing data is the composition operator of the push category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003e~\u003e) \u003e~\u003e",
          "normalized": "(a-\u003eProxy b a c d e f)-\u003e(d-\u003eProxy c d g h e f)-\u003ea-\u003eProxy b a g h e f",
          "package": "pipes",
          "signature": "(a-\u003eProxy a' a b' b m r)-\u003e(b-\u003eProxy b' b c' c m r)-\u003ea-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-62--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two proxies blocked in the middle of \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003eing, creating a new\n    proxy blocked in the middle of \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003eing\n\u003c/p\u003e\u003cpre\u003e\n(f \u003ccode\u003e\u003ca\u003e\u003e+\u003e\u003c/a\u003e\u003c/code\u003e g) x = f \u003ccode\u003e\u003ca\u003e+\u003e\u003e\u003c/a\u003e\u003c/code\u003e g x\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e+\u003e\u003c/a\u003e\u003c/code\u003e) is the composition operator of the pull category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003e+\u003e)",
          "package": "pipes",
          "signature": "(b' -\u003e Proxy a' a b' b m r)-\u003e (_c' -\u003e Proxy b' b c' c m r)-\u003e _c' -\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Compose two proxies blocked in the middle of respond ing creating new proxy blocked in the middle of respond ing is the composition operator of the pull category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003e+\u003e) \u003e+\u003e",
          "normalized": "(a-\u003eProxy b c a d e f)-\u003e(g-\u003eProxy a d g h e f)-\u003eg-\u003eProxy b c g h e f",
          "package": "pipes",
          "signature": "(b'-\u003eProxy a' a b' b m r)-\u003e(c'-\u003eProxy b' b c' c m r)-\u003ec'-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-62--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(p \u003e\u003e~ f)\u003c/code\u003e pairs each \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ep\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePoint-ful version of (\u003ccode\u003e\u003ca\u003e\u003e~\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003e\u003e~)",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r-\u003e (b -\u003e Proxy b' b c' c m r)-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "pairs each respond in with an request in Point-ful version of",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003e\u003e~) \u003e\u003e~",
          "normalized": "Proxy a b c d e f-\u003e(d-\u003eProxy c d g h e f)-\u003eProxy a b g h e f",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r-\u003e(b-\u003eProxy b' b c' c m r)-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-62--62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003e\\\\ p)\u003c/code\u003e replaces each \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ep\u003c/code\u003e with \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePoint-ful version of (\u003ccode\u003e\u003ca\u003e\\\u003e\\\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\u003e\\\\)",
          "package": "pipes",
          "signature": "(b' -\u003e Proxy a' a y' y m b)-\u003e Proxy b' b y' y m c-\u003e Proxy a' a y' y m c",
          "type": "function"
        },
        "index": {
          "description": "replaces each request in with Point-ful version of",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\u003e\\\\) \u003e\\\\",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003eProxy a g d e f h-\u003eProxy b c d e f h",
          "package": "pipes",
          "signature": "(b'-\u003eProxy a' a y' y m b)-\u003eProxy b' b y' y m c-\u003eProxy a' a y' y m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-62--92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e/\u003e/\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\\\u003c\\)",
          "package": "pipes",
          "signature": "(b -\u003e Proxy x' x c' c m b')-\u003e (a -\u003e Proxy x' x b' b m a')-\u003e a -\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to with the arguments flipped",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\\\u003c\\) \\\u003c\\",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(h-\u003eProxy b c g a f i)-\u003eh-\u003eProxy b c d e f i",
          "package": "pipes",
          "signature": "(b-\u003eProxy x' x c' c m b')-\u003e(a-\u003eProxy x' x b' b m a')-\u003ea-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-92--60--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two folds, creating a new fold\n\u003c/p\u003e\u003cpre\u003e\n(f \u003ccode\u003e\u003ca\u003e\\\u003e\\\u003c/a\u003e\u003c/code\u003e g) x = f \u003ccode\u003e\u003ca\u003e\u003e\\\\\u003c/a\u003e\u003c/code\u003e g x\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\\\u003e\\\u003c/a\u003e\u003c/code\u003e) is the composition operator of the request category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "(\\\u003e\\)",
          "package": "pipes",
          "signature": "(b' -\u003e Proxy a' a y' y m b)-\u003e (c' -\u003e Proxy b' b y' y m c)-\u003e c' -\u003e Proxy a' a y' y m c",
          "type": "function"
        },
        "index": {
          "description": "Compose two folds creating new fold is the composition operator of the request category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "(\\\u003e\\) \\\u003e\\",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(h-\u003eProxy a g d e f i)-\u003eh-\u003eProxy b c d e f i",
          "package": "pipes",
          "signature": "(b'-\u003eProxy a' a y' y m b)-\u003e(c'-\u003eProxy b' b y' y m c)-\u003ec'-\u003eProxy a' a y' y m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:-92--62--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eclosed\u003c/a\u003e\u003c/code\u003e to \"handle\" impossible outputs\n\u003c/p\u003e",
          "module": "[\"Pipes.Core\",\"Pipes.Internal\"]",
          "name": "closed",
          "package": "pipes",
          "signature": "X -\u003e a",
          "source": "src/Pipes-Internal.html#closed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:closed\",\"http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:closed\"]"
        },
        "index": {
          "description": "Use closed to handle impossible outputs",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "closed",
          "normalized": "X-\u003ea",
          "package": "pipes",
          "signature": "X-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward requests followed by responses:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003epull\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epull\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epull\u003c/a\u003e\u003c/code\u003e is the identity of the pull category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "pull",
          "package": "pipes",
          "signature": "a' -\u003e Proxy a' a a' a m r",
          "source": "src/Pipes-Core.html#pull",
          "type": "function"
        },
        "index": {
          "description": "Forward requests followed by responses pull request respond pull pull is the identity of the pull category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "pull",
          "normalized": "a-\u003eProxy a b a b c d",
          "package": "pipes",
          "signature": "a'-\u003eProxy a' a a' a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward responses followed by requests\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e is the identity of the push category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "push",
          "package": "pipes",
          "signature": "a -\u003e Proxy a' a a' a m r",
          "source": "src/Pipes-Core.html#push",
          "type": "function"
        },
        "index": {
          "description": "Forward responses followed by requests push respond request push push is the identity of the push category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "push",
          "normalized": "a-\u003eProxy b a b a c d",
          "package": "pipes",
          "signature": "a-\u003eProxy a' a a' a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch the upstream and downstream ends\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "reflect",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r -\u003e Proxy b b' a a' m r",
          "source": "src/Pipes-Core.html#reflect",
          "type": "function"
        },
        "index": {
          "description": "Switch the upstream and downstream ends",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "reflect",
          "normalized": "Proxy a b c d e f-\u003eProxy d c b a e f",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r-\u003eProxy b b' a a' m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value of type \u003ccode\u003ea'\u003c/code\u003e upstream and block waiting for a reply of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e is the identity of the request category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "request",
          "package": "pipes",
          "signature": "a' -\u003e Proxy a' a y' y m a",
          "source": "src/Pipes-Core.html#request",
          "type": "function"
        },
        "index": {
          "description": "Send value of type upstream and block waiting for reply of type request is the identity of the request category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "request",
          "normalized": "a-\u003eProxy a b c d e b",
          "package": "pipes",
          "signature": "a'-\u003eProxy a' a y' y m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value of type \u003ccode\u003ea\u003c/code\u003e downstream and block waiting for a reply of type\n    \u003ccode\u003ea'\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e is the identity of the respond category.\n\u003c/p\u003e",
          "module": "Pipes.Core",
          "name": "respond",
          "package": "pipes",
          "signature": "a -\u003e Proxy x' x a' a m a'",
          "source": "src/Pipes-Core.html#respond",
          "type": "function"
        },
        "index": {
          "description": "Send value of type downstream and block waiting for reply of type respond is the identity of the respond category",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "respond",
          "normalized": "a-\u003eProxy b c d a e d",
          "package": "pipes",
          "signature": "a-\u003eProxy x' x a' a m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a self-contained \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e, converting it back to the base monad\n\u003c/p\u003e",
          "module": "[\"Pipes.Core\",\"Pipes\"]",
          "name": "runEffect",
          "package": "pipes",
          "signature": "Effect m r -\u003e m r",
          "source": "src/Pipes-Core.html#runEffect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:runEffect\",\"http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:runEffect\"]"
        },
        "index": {
          "description": "Run self-contained Effect converting it back to the base monad",
          "hierarchy": "Pipes Core",
          "module": "Pipes.Core",
          "name": "runEffect",
          "normalized": "Effect a b-\u003ea b",
          "package": "pipes",
          "partial": "Effect",
          "signature": "Effect m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Core.html#v:runEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an internal module, meaning that it is unsafe to import unless you\n    understand the risks.\n\u003c/p\u003e\u003cp\u003eThis module provides a fast implementation by weakening the monad\n    transformer laws.  These laws do not hold if you can pattern match on the\n    constructors, as the following counter-example illustrates:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e\n\n\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e\n\n\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e /= \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eYou do not need to worry about this if you do not import this module, since\n    the other modules in this library do not export the constructors or export\n    any functions which can violate the monad transformer laws.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Internal",
          "name": "Internal",
          "package": "pipes",
          "source": "src/Pipes-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This is an internal module meaning that it is unsafe to import unless you understand the risks This module provides fast implementation by weakening the monad transformer laws These laws do not hold if you can pattern match on the constructors as the following counter-example illustrates lift return return Pure return Pure lift return return You do not need to worry about this if you do not import this module since the other modules in this library do not export the constructors or export any functions which can violate the monad transformer laws",
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "Internal",
          "package": "pipes",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e is a monad transformer that receives and sends information on both\n    an upstream and downstream interface.\n\u003c/p\u003e\u003cp\u003eThe type variables signify:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea'\u003c/code\u003e and \u003ccode\u003ea\u003c/code\u003e - The upstream interface, where \u003ccode\u003e(a')\u003c/code\u003es go out and \u003ccode\u003e(a)\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eb'\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e - The downstream interface, where \u003ccode\u003e(b)\u003c/code\u003es go out and \u003ccode\u003e(b')\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em \u003c/code\u003e - The base monad\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003er \u003c/code\u003e - The return value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Pipes.Internal",
          "name": "Proxy",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Proxy is monad transformer that receives and sends information on both an upstream and downstream interface The type variables signify and The upstream interface where go out and come in and The downstream interface where go out and come in The base monad The return value",
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "Proxy",
          "package": "pipes",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty type, used to close output ends\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eData.Void\u003c/code\u003e is merged into \u003ccode\u003ebase\u003c/code\u003e, this will change to:\n\u003c/p\u003e\u003cpre\u003e type X = Void\n\u003c/pre\u003e",
          "module": "Pipes.Internal",
          "name": "X",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#X",
          "type": "data"
        },
        "index": {
          "description": "The empty type used to close output ends When Data.Void is merged into base this will change to type Void",
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "X",
          "package": "pipes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Internal",
          "name": "M",
          "package": "pipes",
          "signature": "M (m (Proxy a' a b' b m r))",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "M",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Internal",
          "name": "Pure",
          "package": "pipes",
          "signature": "Pure r",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "Pure",
          "package": "pipes",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Internal",
          "name": "Request",
          "package": "pipes",
          "signature": "Request a' (a -\u003e Proxy a' a b' b m r)",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "Request",
          "normalized": "Request a(b-\u003eProxy a b c d e f)",
          "package": "pipes",
          "partial": "Request",
          "signature": "Request a'(a-\u003eProxy a' a b' b m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Internal",
          "name": "Respond",
          "package": "pipes",
          "signature": "Respond b (b' -\u003e Proxy a' a b' b m r)",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "Respond",
          "normalized": "Respond a(b-\u003eProxy c d b a e f)",
          "package": "pipes",
          "partial": "Respond",
          "signature": "Respond b(b'-\u003eProxy a' a b' b m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:Respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad transformer laws are correct when viewed through the \u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e\n    function:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r)) = \u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e r)\n\n\u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)) = \u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cp\u003eThis correctness comes at a small cost to performance, so use this function\n    sparingly.\n\u003c/p\u003e\u003cp\u003eThis function is a convenience for low-level \u003ccode\u003epipes\u003c/code\u003e implementers.  You do\n    not need to use \u003ccode\u003e\u003ca\u003eobserve\u003c/a\u003e\u003c/code\u003e if you stick to the safe API.\n\u003c/p\u003e",
          "module": "Pipes.Internal",
          "name": "observe",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r -\u003e Proxy a' a b' b m r",
          "source": "src/Pipes-Internal.html#observe",
          "type": "function"
        },
        "index": {
          "description": "The monad transformer laws are correct when viewed through the observe function observe lift return observe return observe lift observe lift lift This correctness comes at small cost to performance so use this function sparingly This function is convenience for low-level pipes implementers You do not need to use observe if you stick to the safe API",
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "observe",
          "normalized": "Proxy a b c d e f-\u003eProxy a b c d e f",
          "package": "pipes",
          "signature": "Proxy a' a b' b m r-\u003eProxy a' a b' b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunsafeHoist\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e, but faster.\n\u003c/p\u003e\u003cp\u003eThis is labeled as unsafe because you will break the monad transformer laws\n    if you do not pass a monad morphism as the first argument.  This function is\n    safe if you pass a monad morphism as the first argument.\n\u003c/p\u003e",
          "module": "Pipes.Internal",
          "name": "unsafeHoist",
          "package": "pipes",
          "signature": "(forall x.  m x -\u003e n x) -\u003e Proxy a' a b' b m r -\u003e Proxy a' a b' b n r",
          "source": "src/Pipes-Internal.html#unsafeHoist",
          "type": "function"
        },
        "index": {
          "description": "unsafeHoist is like hoist but faster This is labeled as unsafe because you will break the monad transformer laws if you do not pass monad morphism as the first argument This function is safe if you pass monad morphism as the first argument",
          "hierarchy": "Pipes Internal",
          "module": "Pipes.Internal",
          "name": "unsafeHoist",
          "normalized": "(a b c d-\u003ee d)-\u003eProxy f g h i c j-\u003eProxy f g h i e j",
          "package": "pipes",
          "partial": "Hoist",
          "signature": "(forall x. m x-\u003en x)-\u003eProxy a' a b' b m r-\u003eProxy a' a b' b n r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Internal.html#v:unsafeHoist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMany actions in base monad transformers cannot be automatically\n    \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003eed.  These functions lift these remaining\n    actions so that they work in the \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eSee the mini-tutorial at the bottom of this module for example code and\n    typical use cases where this module will come in handy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Lift",
          "name": "Lift",
          "package": "pipes",
          "source": "src/Pipes-Lift.html",
          "type": "module"
        },
        "index": {
          "description": "Many actions in base monad transformers cannot be automatically lift ed These functions lift these remaining actions so that they work in the Proxy monad transformer See the mini-tutorial at the bottom of this module for example code and typical use cases where this module will come in handy",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "Lift",
          "package": "pipes",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an error in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "catchError",
          "package": "pipes",
          "signature": "Proxy a' a b' b (ErrorT e m) r-\u003e (e -\u003e Proxy a' a b' b (ErrorT e m) r)-\u003e Proxy a' a b' b (ErrorT e m) r",
          "type": "function"
        },
        "index": {
          "description": "Catch an error in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "catchError",
          "normalized": "Proxy a b c d(ErrorT e f)g-\u003e(e-\u003eProxy a b c d(ErrorT e f)g)-\u003eProxy a b c d(ErrorT e f)g",
          "package": "pipes",
          "partial": "Error",
          "signature": "Proxy a' a b' b(ErrorT e m)r-\u003e(e-\u003eProxy a' a b' b(ErrorT e m)r)-\u003eProxy a' a b' b(ErrorT e m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e over a monad transformer\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "distribute",
          "package": "pipes",
          "signature": "Proxy a' a b' b (t m) r-\u003e t (Proxy a' a b' b m) r",
          "type": "function"
        },
        "index": {
          "description": "Distribute Proxy over monad transformer",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "distribute",
          "normalized": "Proxy a b c d(e f)g-\u003ee(Proxy a b c d f)g",
          "package": "pipes",
          "signature": "Proxy a' a b' b(t m)r-\u003et(Proxy a' a b' b m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "errorP",
          "package": "pipes",
          "signature": "Proxy a' a b' b m (Either e r) -\u003e Proxy a' a b' b (ErrorT e m) r",
          "source": "src/Pipes-Lift.html#errorP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in ErrorT",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "errorP",
          "normalized": "Proxy a b c d e(Either f g)-\u003eProxy a b c d(ErrorT f e)g",
          "package": "pipes",
          "signature": "Proxy a' a b' b m(Either e r)-\u003eProxy a' a b' b(ErrorT e m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:errorP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "evalRWSP",
          "package": "pipes",
          "signature": "r -\u003e s -\u003e Proxy a' a b' b (RWST r w s m) d -\u003e Proxy a' a b' b m (d, w)",
          "source": "src/Pipes-Lift.html#evalRWSP",
          "type": "function"
        },
        "index": {
          "description": "Evaluate RWST in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "evalRWSP",
          "normalized": "a-\u003eb-\u003eProxy c d e f(RWST a g b h)i-\u003eProxy c d e f h(i,g)",
          "package": "pipes",
          "partial": "RWSP",
          "signature": "r-\u003es-\u003eProxy a' a b' b(RWST r w s m)d-\u003eProxy a' a b' b m(d,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:evalRWSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "evalStateP",
          "package": "pipes",
          "signature": "s -\u003e Proxy a' a b' b (StateT s m) r -\u003e Proxy a' a b' b m r",
          "source": "src/Pipes-Lift.html#evalStateP",
          "type": "function"
        },
        "index": {
          "description": "Evaluate StateT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "evalStateP",
          "normalized": "a-\u003eProxy b c d e(StateT a f)g-\u003eProxy b c d e f g",
          "package": "pipes",
          "partial": "State",
          "signature": "s-\u003eProxy a' a b' b(StateT s m)r-\u003eProxy a' a b' b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:evalStateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "execRWSP",
          "package": "pipes",
          "signature": "r -\u003e s -\u003e Proxy a' a b' b (RWST r w s m) d -\u003e Proxy a' a b' b m (s, w)",
          "source": "src/Pipes-Lift.html#execRWSP",
          "type": "function"
        },
        "index": {
          "description": "Execute RWST in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "execRWSP",
          "normalized": "a-\u003eb-\u003eProxy c d e f(RWST a g b h)i-\u003eProxy c d e f h(b,g)",
          "package": "pipes",
          "partial": "RWSP",
          "signature": "r-\u003es-\u003eProxy a' a b' b(RWST r w s m)d-\u003eProxy a' a b' b m(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:execRWSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "execStateP",
          "package": "pipes",
          "signature": "s -\u003e Proxy a' a b' b (StateT s m) r -\u003e Proxy a' a b' b m s",
          "source": "src/Pipes-Lift.html#execStateP",
          "type": "function"
        },
        "index": {
          "description": "Execute StateT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "execStateP",
          "normalized": "a-\u003eProxy b c d e(StateT a f)g-\u003eProxy b c d e f a",
          "package": "pipes",
          "partial": "State",
          "signature": "s-\u003eProxy a' a b' b(StateT s m)r-\u003eProxy a' a b' b m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:execStateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "execWriterP",
          "package": "pipes",
          "signature": "Proxy a' a b' b (WriterT w m) r -\u003e Proxy a' a b' b m w",
          "source": "src/Pipes-Lift.html#execWriterP",
          "type": "function"
        },
        "index": {
          "description": "Execute WriterT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "execWriterP",
          "normalized": "Proxy a b c d(WriterT e f)g-\u003eProxy a b c d f e",
          "package": "pipes",
          "partial": "Writer",
          "signature": "Proxy a' a b' b(WriterT w m)r-\u003eProxy a' a b' b m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:execWriterP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an error using a catch function for the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "liftCatchError",
          "package": "pipes",
          "signature": "(m (Proxy a' a b' b m r) -\u003e (e -\u003e m (Proxy a' a b' b m r)) -\u003e m (Proxy a' a b' b m r))-\u003e Proxy a' a b' b m r -\u003e (e -\u003e Proxy a' a b' b m r) -\u003e Proxy a' a b' b m r",
          "type": "function"
        },
        "index": {
          "description": "Catch an error using catch function for the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "liftCatchError",
          "normalized": "(a(Proxy b c d e a f)-\u003e(g-\u003ea(Proxy b c d e a f))-\u003ea(Proxy b c d e a f))-\u003eProxy b c d e a f-\u003e(g-\u003eProxy b c d e a f)-\u003eProxy b c d e a f",
          "package": "pipes",
          "partial": "Catch Error",
          "signature": "(m(Proxy a' a b' b m r)-\u003e(e-\u003em(Proxy a' a b' b m r))-\u003em(Proxy a' a b' b m r))-\u003eProxy a' a b' b m r-\u003e(e-\u003eProxy a' a b' b m r)-\u003eProxy a' a b' b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:liftCatchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "maybeP",
          "package": "pipes",
          "signature": "Proxy a' a b' b m (Maybe r) -\u003e Proxy a' a b' b (MaybeT m) r",
          "source": "src/Pipes-Lift.html#maybeP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in MaybeT",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "maybeP",
          "normalized": "Proxy a b c d e(Maybe f)-\u003eProxy a b c d(MaybeT e)f",
          "package": "pipes",
          "signature": "Proxy a' a b' b m(Maybe r)-\u003eProxy a' a b' b(MaybeT m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:maybeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "readerP",
          "package": "pipes",
          "signature": "(i -\u003e Proxy a' a b' b m r) -\u003e Proxy a' a b' b (ReaderT i m) r",
          "source": "src/Pipes-Lift.html#readerP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in ReaderT",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "readerP",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003eProxy b c d e(ReaderT a f)g",
          "package": "pipes",
          "signature": "(i-\u003eProxy a' a b' b m r)-\u003eProxy a' a b' b(ReaderT i m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:readerP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runErrorP",
          "package": "pipes",
          "signature": "Proxy a' a b' b (ErrorT e m) r -\u003e Proxy a' a b' b m (Either e r)",
          "source": "src/Pipes-Lift.html#runErrorP",
          "type": "function"
        },
        "index": {
          "description": "Run ErrorT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runErrorP",
          "normalized": "Proxy a b c d(ErrorT e f)g-\u003eProxy a b c d f(Either e g)",
          "package": "pipes",
          "partial": "Error",
          "signature": "Proxy a' a b' b(ErrorT e m)r-\u003eProxy a' a b' b m(Either e r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runErrorP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runMaybeP",
          "package": "pipes",
          "signature": "Proxy a' a b' b (MaybeT m) r -\u003e Proxy a' a b' b m (Maybe r)",
          "source": "src/Pipes-Lift.html#runMaybeP",
          "type": "function"
        },
        "index": {
          "description": "Run MaybeT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runMaybeP",
          "normalized": "Proxy a b c d(MaybeT e)f-\u003eProxy a b c d e(Maybe f)",
          "package": "pipes",
          "partial": "Maybe",
          "signature": "Proxy a' a b' b(MaybeT m)r-\u003eProxy a' a b' b m(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runMaybeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runRWSP",
          "package": "pipes",
          "signature": "r -\u003e s -\u003e Proxy a' a b' b (RWST r w s m) d -\u003e Proxy a' a b' b m (d, s, w)",
          "source": "src/Pipes-Lift.html#runRWSP",
          "type": "function"
        },
        "index": {
          "description": "Run RWST in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runRWSP",
          "normalized": "a-\u003eb-\u003eProxy c d e f(RWST a g b h)i-\u003eProxy c d e f h(i,b,g)",
          "package": "pipes",
          "partial": "RWSP",
          "signature": "r-\u003es-\u003eProxy a' a b' b(RWST r w s m)d-\u003eProxy a' a b' b m(d,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runRWSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runReaderP",
          "package": "pipes",
          "signature": "i -\u003e Proxy a' a b' b (ReaderT i m) r -\u003e Proxy a' a b' b m r",
          "source": "src/Pipes-Lift.html#runReaderP",
          "type": "function"
        },
        "index": {
          "description": "Run ReaderT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runReaderP",
          "normalized": "a-\u003eProxy b c d e(ReaderT a f)g-\u003eProxy b c d e f g",
          "package": "pipes",
          "partial": "Reader",
          "signature": "i-\u003eProxy a' a b' b(ReaderT i m)r-\u003eProxy a' a b' b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runReaderP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runStateP",
          "package": "pipes",
          "signature": "s -\u003e Proxy a' a b' b (StateT s m) r -\u003e Proxy a' a b' b m (r, s)",
          "source": "src/Pipes-Lift.html#runStateP",
          "type": "function"
        },
        "index": {
          "description": "Run StateT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runStateP",
          "normalized": "a-\u003eProxy b c d e(StateT a f)g-\u003eProxy b c d e f(g,a)",
          "package": "pipes",
          "partial": "State",
          "signature": "s-\u003eProxy a' a b' b(StateT s m)r-\u003eProxy a' a b' b m(r,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runStateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "runWriterP",
          "package": "pipes",
          "signature": "Proxy a' a b' b (WriterT w m) r -\u003e Proxy a' a b' b m (r, w)",
          "source": "src/Pipes-Lift.html#runWriterP",
          "type": "function"
        },
        "index": {
          "description": "Run WriterT in the base monad",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "runWriterP",
          "normalized": "Proxy a b c d(WriterT e f)g-\u003eProxy a b c d f(g,e)",
          "package": "pipes",
          "partial": "Writer",
          "signature": "Proxy a' a b' b(WriterT w m)r-\u003eProxy a' a b' b m(r,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:runWriterP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "rwsP",
          "package": "pipes",
          "signature": "(i -\u003e s -\u003e Proxy a' a b' b m (r, s, w)) -\u003e Proxy a' a b' b (RWST i w s m) r",
          "source": "src/Pipes-Lift.html#rwsP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in RWST",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "rwsP",
          "normalized": "(a-\u003eb-\u003eProxy c d e f g(h,b,i))-\u003eProxy c d e f(RWST a i b g)h",
          "package": "pipes",
          "signature": "(i-\u003es-\u003eProxy a' a b' b m(r,s,w))-\u003eProxy a' a b' b(RWST i w s m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:rwsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "stateP",
          "package": "pipes",
          "signature": "(s -\u003e Proxy a' a b' b m (r, s)) -\u003e Proxy a' a b' b (StateT s m) r",
          "source": "src/Pipes-Lift.html#stateP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in StateT",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "stateP",
          "normalized": "(a-\u003eProxy b c d e f(g,a))-\u003eProxy b c d e(StateT a f)g",
          "package": "pipes",
          "signature": "(s-\u003eProxy a' a b' b m(r,s))-\u003eProxy a' a b' b(StateT s m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:stateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Lift",
          "name": "writerP",
          "package": "pipes",
          "signature": "Proxy a' a b' b m (r, w) -\u003e Proxy a' a b' b (WriterT w m) r",
          "source": "src/Pipes-Lift.html#writerP",
          "type": "function"
        },
        "index": {
          "description": "Wrap the base monad in WriterT",
          "hierarchy": "Pipes Lift",
          "module": "Pipes.Lift",
          "name": "writerP",
          "normalized": "Proxy a b c d e(f,g)-\u003eProxy a b c d(WriterT g e)f",
          "package": "pipes",
          "signature": "Proxy a' a b' b m(r,w)-\u003eProxy a' a b' b(WriterT w m)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Lift.html#v:writerP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose utilities\n\u003c/p\u003e\u003cp\u003eThe names in this module clash heavily with the Haskell Prelude, so I\n    recommend the following import scheme:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import qualified Pipes.Prelude as P  -- or use any other qualifier you prefer\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-based \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is inefficient.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-based utilities\n    in this module exist only for simple demonstrations without incurring a\n    dependency on the \u003ccode\u003etext\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eAlso, \u003ccode\u003e\u003ca\u003estdinLn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdoutLn\u003c/a\u003e\u003c/code\u003e remove and add newlines, respectively.  This\n    behavior is intended to simplify examples.  The corresponding \u003ccode\u003estdin\u003c/code\u003e and\n    \u003ccode\u003estdout\u003c/code\u003e utilities from \u003ccode\u003epipes-bytestring\u003c/code\u003e and \u003ccode\u003epipes-text\u003c/code\u003e preserve\n    newlines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Prelude",
          "name": "Prelude",
          "package": "pipes",
          "source": "src/Pipes-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "General purpose utilities The names in this module clash heavily with the Haskell Prelude so recommend the following import scheme import Pipes import qualified Pipes.Prelude as or use any other qualifier you prefer Note that String based IO is inefficient The String based utilities in this module exist only for simple demonstrations without incurring dependency on the text package Also stdinLn and stdoutLn remove and add newlines respectively This behavior is intended to simplify examples The corresponding stdin and stdout utilities from pipes-bytestring and pipes-text preserve newlines",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "Prelude",
          "package": "pipes",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(all predicate p)\u003c/code\u003e determines whether all the elements of \u003ccode\u003ep\u003c/code\u003e satisfy the\n    predicate.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "all",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Producer a m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#all",
          "type": "function"
        },
        "index": {
          "description": "all predicate determines whether all the elements of satisfy the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eProducer a b()-\u003eb Bool",
          "package": "pipes",
          "signature": "(a-\u003eBool)-\u003eProducer a m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether all elements are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "and",
          "package": "pipes",
          "signature": "Producer Bool m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#and",
          "type": "function"
        },
        "index": {
          "description": "Determines whether all elements are True",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "and",
          "normalized": "Producer Bool a()-\u003ea Bool",
          "package": "pipes",
          "signature": "Producer Bool m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(any predicate p)\u003c/code\u003e determines whether any element of \u003ccode\u003ep\u003c/code\u003e satisfies the\n    predicate.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "any",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Producer a m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#any",
          "type": "function"
        },
        "index": {
          "description": "any predicate determines whether any element of satisfies the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eProducer a b()-\u003eb Bool",
          "package": "pipes",
          "signature": "(a-\u003eBool)-\u003eProducer a m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an action to all values flowing downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "chain",
          "package": "pipes",
          "signature": "(a -\u003e m ()) -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#chain",
          "type": "function"
        },
        "index": {
          "description": "Apply an action to all values flowing downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "chain",
          "normalized": "(a-\u003eb())-\u003ePipe a a b c",
          "package": "pipes",
          "signature": "(a-\u003em())-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:chain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten all \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e elements flowing downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "concat",
          "package": "pipes",
          "signature": "Pipe (f a) a m r",
          "source": "src/Pipes-Prelude.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Flatten all Foldable elements flowing downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "concat",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ediscard\u003c/a\u003e\u003c/code\u003e all incoming values\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "drain",
          "package": "pipes",
          "signature": "Consumer' a m r",
          "source": "src/Pipes-Prelude.html#drain",
          "type": "function"
        },
        "index": {
          "description": "discard all incoming values",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "drain",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:drain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(drop n)\u003c/code\u003e discards \u003ccode\u003en\u003c/code\u003e values going downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "drop",
          "package": "pipes",
          "signature": "Int -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop discards values going downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "drop",
          "normalized": "Int-\u003ePipe a a b c",
          "package": "pipes",
          "signature": "Int-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(dropWhile p)\u003c/code\u003e discards values going downstream until one violates the\n    predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "dropWhile",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile discards values going downstream until one violates the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
          "package": "pipes",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elem a p)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ep\u003c/code\u003e has an element equal to \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n    otherwise\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "elem",
          "package": "pipes",
          "signature": "a -\u003e Producer a m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem returns True if has an element equal to False otherwise",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "elem",
          "normalized": "a-\u003eProducer a b()-\u003eb Bool",
          "package": "pipes",
          "signature": "a-\u003eProducer a m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs the indices of all elements that match the given element\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "elemIndices",
          "package": "pipes",
          "signature": "a -\u003e Pipe a Int m r",
          "source": "src/Pipes-Prelude.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "Outputs the indices of all elements that match the given element",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "elemIndices",
          "normalized": "a-\u003ePipe a Int b c",
          "package": "pipes",
          "partial": "Indices",
          "signature": "a-\u003ePipe a Int m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(filter predicate)\u003c/code\u003e only forwards values that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "filter",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter predicate only forwards values that satisfy the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
          "package": "pipes",
          "signature": "(a-\u003eBool)-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(filterM predicate)\u003c/code\u003e only forwards values that satisfy the monadic\n    predicate\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "filterM",
          "package": "pipes",
          "signature": "(a -\u003e m Bool) -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#filterM",
          "type": "function"
        },
        "index": {
          "description": "filterM predicate only forwards values that satisfy the monadic predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003ePipe a a b c",
          "package": "pipes",
          "signature": "(a-\u003em Bool)-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first element of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that satisfies the predicate\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "find",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find the first element of Producer that satisfies the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eProducer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "(a-\u003eBool)-\u003eProducer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the index of the first element of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that satisfies the\n    predicate\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "findIndex",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Producer a m () -\u003e m (Maybe Int)",
          "source": "src/Pipes-Prelude.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "Find the index of the first element of Producer that satisfies the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eProducer a b()-\u003eb(Maybe Int)",
          "package": "pipes",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eProducer a m()-\u003em(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs the indices of all elements that satisfied the predicate\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "findIndices",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Pipe a Int m r",
          "source": "src/Pipes-Prelude.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "Outputs the indices of all elements that satisfied the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003ePipe a Int b c",
          "package": "pipes",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003ePipe a Int m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict fold of the elements of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "fold",
          "package": "pipes",
          "signature": "(x -\u003e a -\u003e x) -\u003e x -\u003e (x -\u003e b) -\u003e Producer a m () -\u003e m b",
          "source": "src/Pipes-Prelude.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Strict fold of the elements of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(a-\u003ec)-\u003eProducer b d()-\u003ed c",
          "package": "pipes",
          "signature": "(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003eProducer a m()-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict, monadic fold of the elements of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "foldM",
          "package": "pipes",
          "signature": "(x -\u003e a -\u003e m x) -\u003e m x -\u003e (x -\u003e m b) -\u003e Producer a m () -\u003e m b",
          "source": "src/Pipes-Prelude.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Strict monadic fold of the elements of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ec a-\u003e(a-\u003ec d)-\u003eProducer b c()-\u003ec d",
          "package": "pipes",
          "signature": "(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003eProducer a m()-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTerminates on end of input\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "fromHandle",
          "package": "pipes",
          "signature": "Handle -\u003e Producer' String m ()",
          "source": "src/Pipes-Prelude.html#fromHandle",
          "type": "function"
        },
        "index": {
          "description": "Read String from Handle using hGetLine Terminates on end of input",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "fromHandle",
          "normalized": "Handle-\u003eProducer' String a()",
          "package": "pipes",
          "partial": "Handle",
          "signature": "Handle-\u003eProducer' String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:fromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a unidirectional \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e to a bidirectional \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e generalize (f \u003e-\u003e g) = generalize f \u003e+\u003e generalize g\n\n generalize cat = pull\n\u003c/pre\u003e",
          "module": "Pipes.Prelude",
          "name": "generalize",
          "package": "pipes",
          "signature": "Pipe a b m r -\u003e x -\u003e Proxy x a x b m r",
          "source": "src/Pipes-Prelude.html#generalize",
          "type": "function"
        },
        "index": {
          "description": "Transform unidirectional Pipe to bidirectional Proxy generalize generalize generalize generalize cat pull",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "generalize",
          "normalized": "Pipe a b c d-\u003ee-\u003eProxy e a e b c d",
          "package": "pipes",
          "signature": "Pipe a b m r-\u003ex-\u003eProxy x a x b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:generalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the first element from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "head",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#head",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the first element from Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "head",
          "normalized": "Producer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "Producer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex into a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "index",
          "package": "pipes",
          "signature": "Int -\u003e Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#index",
          "type": "function"
        },
        "index": {
          "description": "Index into Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "index",
          "normalized": "Int-\u003eProducer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "Int-\u003eProducer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the last element from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "last",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#last",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the last element from Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "last",
          "normalized": "Producer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "Producer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of elements in a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "length",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m Int",
          "source": "src/Pipes-Prelude.html#length",
          "type": "function"
        },
        "index": {
          "description": "Count the number of elements in Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "length",
          "normalized": "Producer a b()-\u003eb Int",
          "package": "pipes",
          "signature": "Producer a m()-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all values flowing downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "map",
          "package": "pipes",
          "signature": "(a -\u003e b) -\u003e Pipe a b m r",
          "source": "src/Pipes-Prelude.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all values flowing downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ePipe a b c d",
          "package": "pipes",
          "signature": "(a-\u003eb)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all values flowing downstream, and\n     forward each element of the result.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "mapFoldable",
          "package": "pipes",
          "signature": "(a -\u003e t b) -\u003e Pipe a b m r",
          "source": "src/Pipes-Prelude.html#mapFoldable",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all values flowing downstream and forward each element of the result",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "mapFoldable",
          "normalized": "(a-\u003eb c)-\u003ePipe a c d e",
          "package": "pipes",
          "partial": "Foldable",
          "signature": "(a-\u003et b)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:mapFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic function to all values flowing downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "mapM",
          "package": "pipes",
          "signature": "(a -\u003e m b) -\u003e Pipe a b m r",
          "source": "src/Pipes-Prelude.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic function to all values flowing downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ePipe a c b d",
          "package": "pipes",
          "signature": "(a-\u003em b)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the maximum element of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "maximum",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Find the maximum element of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "maximum",
          "normalized": "Producer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "Producer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the minimum element of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "minimum",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m (Maybe a)",
          "source": "src/Pipes-Prelude.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Find the minimum element of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "minimum",
          "normalized": "Producer a b()-\u003eb(Maybe a)",
          "package": "pipes",
          "signature": "Producer a m()-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(notElem a)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ep\u003c/code\u003e has an element equal to \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n    otherwise\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "notElem",
          "package": "pipes",
          "signature": "a -\u003e Producer a m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem returns False if has an element equal to True otherwise",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "notElem",
          "normalized": "a-\u003eProducer a b()-\u003eb Bool",
          "package": "pipes",
          "partial": "Elem",
          "signature": "a-\u003eProducer a m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "null",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#null",
          "type": "function"
        },
        "index": {
          "description": "Determine if Producer is empty",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "null",
          "normalized": "Producer a b()-\u003eb Bool",
          "package": "pipes",
          "signature": "Producer a m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether any element is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "or",
          "package": "pipes",
          "signature": "Producer Bool m () -\u003e m Bool",
          "source": "src/Pipes-Prelude.html#or",
          "type": "function"
        },
        "index": {
          "description": "Determines whether any element is True",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "or",
          "normalized": "Producer Bool a()-\u003ea Bool",
          "package": "pipes",
          "signature": "Producer Bool m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e values to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "print",
          "package": "pipes",
          "signature": "Consumer' a m r",
          "source": "src/Pipes-Prelude.html#print",
          "type": "function"
        },
        "index": {
          "description": "print values to stdout",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "print",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the product of the elements of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "product",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m a",
          "source": "src/Pipes-Prelude.html#product",
          "type": "function"
        },
        "index": {
          "description": "Compute the product of the elements of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "product",
          "normalized": "Producer a b()-\u003eb a",
          "package": "pipes",
          "signature": "Producer a m()-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003eable values, only forwarding the value if the parse succeeds\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "read",
          "package": "pipes",
          "signature": "Pipe String a m r",
          "source": "src/Pipes-Prelude.html#read",
          "type": "function"
        },
        "index": {
          "description": "Parse Read able values only forwarding the value if the parse succeeds",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "read",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e values from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e, ignoring failed parses\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "readLn",
          "package": "pipes",
          "signature": "Producer' a m ()",
          "source": "src/Pipes-Prelude.html#readLn",
          "type": "function"
        },
        "index": {
          "description": "read values from stdin ignoring failed parses",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "readLn",
          "normalized": "Producer' a b()",
          "package": "pipes",
          "partial": "Ln",
          "signature": "Producer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a monadic action a fixed number of times, \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003eing each result\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "replicateM",
          "package": "pipes",
          "signature": "Int -\u003e m a -\u003e Producer a m ()",
          "source": "src/Pipes-Prelude.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "Repeat monadic action fixed number of times yield ing each result",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003eProducer b a()",
          "package": "pipes",
          "signature": "Int-\u003em a-\u003eProducer a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left scan\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "scan",
          "package": "pipes",
          "signature": "(x -\u003e a -\u003e x) -\u003e x -\u003e (x -\u003e b) -\u003e Pipe a b m r",
          "source": "src/Pipes-Prelude.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Strict left scan",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(a-\u003ec)-\u003ePipe b c d e",
          "package": "pipes",
          "signature": "(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict, monadic left scan\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "scanM",
          "package": "pipes",
          "signature": "(x -\u003e a -\u003e m x) -\u003e m x -\u003e (x -\u003e m b) -\u003e Pipe a b m r",
          "source": "src/Pipes-Prelude.html#scanM",
          "type": "function"
        },
        "index": {
          "description": "Strict monadic left scan",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "scanM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ec a-\u003e(a-\u003ec d)-\u003ePipe b d c e",
          "package": "pipes",
          "signature": "(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:scanM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a stream of actions to a stream of values\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "sequence",
          "package": "pipes",
          "signature": "Pipe (m a) a m r",
          "source": "src/Pipes-Prelude.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Convert stream of actions to stream of values",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "sequence",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eable values to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "show",
          "package": "pipes",
          "signature": "Pipe a String m r",
          "source": "src/Pipes-Prelude.html#show",
          "type": "function"
        },
        "index": {
          "description": "Convert Show able values to String",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "show",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTerminates on end of input\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "stdinLn",
          "package": "pipes",
          "signature": "Producer' String m ()",
          "source": "src/Pipes-Prelude.html#stdinLn",
          "type": "function"
        },
        "index": {
          "description": "Read String from stdin using getLine Terminates on end of input",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "stdinLn",
          "normalized": "Producer' String a()",
          "package": "pipes",
          "partial": "Ln",
          "signature": "Producer' String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:stdinLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estdoutLn\u003c/a\u003e\u003c/code\u003e gracefully terminates on a broken output pipe\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "stdoutLn",
          "package": "pipes",
          "signature": "Consumer' String m ()",
          "source": "src/Pipes-Prelude.html#stdoutLn",
          "type": "function"
        },
        "index": {
          "description": "Write String to stdout using putStrLn Unlike toHandle stdoutLn gracefully terminates on broken output pipe",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "stdoutLn",
          "normalized": "Consumer' String a()",
          "package": "pipes",
          "partial": "Ln",
          "signature": "Consumer' String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:stdoutLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum of the elements of a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "sum",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m a",
          "source": "src/Pipes-Prelude.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Compute the sum of the elements of Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "sum",
          "normalized": "Producer a b()-\u003eb a",
          "package": "pipes",
          "signature": "Producer a m()-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(take n)\u003c/code\u003e only allows \u003ccode\u003en\u003c/code\u003e values to pass through\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "take",
          "package": "pipes",
          "signature": "Int -\u003e Pipe a a m ()",
          "source": "src/Pipes-Prelude.html#take",
          "type": "function"
        },
        "index": {
          "description": "take only allows values to pass through",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "take",
          "normalized": "Int-\u003ePipe a a b()",
          "package": "pipes",
          "signature": "Int-\u003ePipe a a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(takeWhile p)\u003c/code\u003e allows values to pass downstream so long as they satisfy\n    the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "takeWhile",
          "package": "pipes",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m ()",
          "source": "src/Pipes-Prelude.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile allows values to pass downstream so long as they satisfy the predicate",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b()",
          "package": "pipes",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003ePipe a a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that reforwards all values further\n    downstream\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "tee",
          "package": "pipes",
          "signature": "Consumer a m r -\u003e Pipe a a m r",
          "source": "src/Pipes-Prelude.html#tee",
          "type": "function"
        },
        "index": {
          "description": "Transform Consumer to Pipe that reforwards all values further downstream",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "tee",
          "normalized": "Consumer a b c-\u003ePipe a a b c",
          "package": "pipes",
          "signature": "Consumer a m r-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:tee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "toHandle",
          "package": "pipes",
          "signature": "Handle -\u003e Consumer' String m r",
          "source": "src/Pipes-Prelude.html#toHandle",
          "type": "function"
        },
        "index": {
          "description": "Write String to Handle using hPutStrLn",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "toHandle",
          "normalized": "Handle-\u003eConsumer' String a b",
          "package": "pipes",
          "partial": "Handle",
          "signature": "Handle-\u003eConsumer' String m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:toHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pure \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a list\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "toList",
          "package": "pipes",
          "signature": "Producer a Identity () -\u003e [a]",
          "source": "src/Pipes-Prelude.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert pure Producer into list",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "toList",
          "normalized": "Producer a Identity()-\u003e[a]",
          "package": "pipes",
          "partial": "List",
          "signature": "Producer a Identity()-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an effectful \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a list\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003etoListM\u003c/a\u003e\u003c/code\u003e is not an idiomatic use of \u003ccode\u003epipes\u003c/code\u003e, but I provide it for\n    simple testing purposes.  Idiomatic \u003ccode\u003epipes\u003c/code\u003e style consumes the elements\n    immediately as they are generated instead of loading all elements into\n    memory.\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "toListM",
          "package": "pipes",
          "signature": "Producer a m () -\u003e m [a]",
          "source": "src/Pipes-Prelude.html#toListM",
          "type": "function"
        },
        "index": {
          "description": "Convert an effectful Producer into list Note toListM is not an idiomatic use of pipes but provide it for simple testing purposes Idiomatic pipes style consumes the elements immediately as they are generated instead of loading all elements into memory",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "toListM",
          "normalized": "Producer a b()-\u003eb[a]",
          "package": "pipes",
          "partial": "List",
          "signature": "Producer a m()-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:toListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "zip",
          "package": "pipes",
          "signature": "Producer a m r -\u003e Producer b m r -\u003e Producer' (a, b) m r",
          "source": "src/Pipes-Prelude.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip two Producer",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "zip",
          "normalized": "Producer a b c-\u003eProducer d b c-\u003eProducer'(a,d)b c",
          "package": "pipes",
          "signature": "Producer a m r-\u003eProducer b m r-\u003eProducer'(a,b)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es using the provided combining function\n\u003c/p\u003e",
          "module": "Pipes.Prelude",
          "name": "zipWith",
          "package": "pipes",
          "signature": "(a -\u003e b -\u003e c) -\u003e Producer a m r -\u003e Producer b m r -\u003e Producer' c m r",
          "source": "src/Pipes-Prelude.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Zip two Producer using the provided combining function",
          "hierarchy": "Pipes Prelude",
          "module": "Pipes.Prelude",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eProducer a d e-\u003eProducer b d e-\u003eProducer' c d e",
          "package": "pipes",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eProducer a m r-\u003eProducer b m r-\u003eProducer' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Prelude.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConventional Haskell stream programming forces you to choose only two of the\n    following three features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Effects\n\u003c/li\u003e\u003cli\u003e Streaming\n\u003c/li\u003e\u003cli\u003e Composability\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you sacrifice \u003cem\u003eEffects\u003c/em\u003e you get Haskell's pure and lazy lists, which you\n    can transform using composable functions in constant space, but without\n    interleaving effects.\n\u003c/p\u003e\u003cp\u003eIf you sacrifice \u003cem\u003eStreaming\u003c/em\u003e you get \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e and\n    \"ListT done wrong\", which are composable and effectful, but do not return\n    a single result until the whole list has first been processed and loaded\n    into memory.\n\u003c/p\u003e\u003cp\u003eIf you sacrifice \u003cem\u003eComposability\u003c/em\u003e you write a tightly coupled read,\n    transform, and write loop in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, which is streaming and effectful, but is\n    not modular or separable.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epipes\u003c/code\u003e gives you all three features: effectful, streaming, and composable\n    programming.  \u003ccode\u003epipes\u003c/code\u003e also provides a wide variety of stream programming\n    abstractions which are all subsets of a single unified machinery:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e effectful \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es (like generators),\n\u003c/li\u003e\u003cli\u003e effectful \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es (like iteratees),\n\u003c/li\u003e\u003cli\u003e effectful \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es (like Unix pipes), and:\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e done right.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll of these are connectable and you can combine them together in clever and\n    unexpected ways because they all share the same underlying type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epipes\u003c/code\u003e requires a basic understanding of monad transformers, which you can\n    learn about by reading either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the paper \"Monad Transformers - Step by Step\",\n\u003c/li\u003e\u003cli\u003e chapter 18 of \"Real World Haskell\" on monad transformers, or:\n\u003c/li\u003e\u003cli\u003e the documentation of the \u003ccode\u003etransformers\u003c/code\u003e library.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you want a Quick Start guide to \u003ccode\u003epipes\u003c/code\u003e, read the documentation in\n    \u003ca\u003ePipes.Prelude\u003c/a\u003e from top to bottom.\n\u003c/p\u003e\u003cp\u003eThis tutorial is more extensive and explains the \u003ccode\u003epipes\u003c/code\u003e API in greater\n    detail and illustrates several idioms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Tutorial",
          "name": "Tutorial",
          "package": "pipes",
          "source": "src/Pipes-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "Conventional Haskell stream programming forces you to choose only two of the following three features Effects Streaming Composability If you sacrifice Effects you get Haskell pure and lazy lists which you can transform using composable functions in constant space but without interleaving effects If you sacrifice Streaming you get mapM forM and ListT done wrong which are composable and effectful but do not return single result until the whole list has first been processed and loaded into memory If you sacrifice Composability you write tightly coupled read transform and write loop in IO which is streaming and effectful but is not modular or separable pipes gives you all three features effectful streaming and composable programming pipes also provides wide variety of stream programming abstractions which are all subsets of single unified machinery effectful Producer like generators effectful Consumer like iteratees effectful Pipe like Unix pipes and ListT done right All of these are connectable and you can combine them together in clever and unexpected ways because they all share the same underlying type pipes requires basic understanding of monad transformers which you can learn about by reading either the paper Monad Transformers Step by Step chapter of Real World Haskell on monad transformers or the documentation of the transformers library If you want Quick Start guide to pipes read the documentation in Pipes.Prelude from top to bottom This tutorial is more extensive and explains the pipes API in greater detail and illustrates several idioms",
          "hierarchy": "Pipes Tutorial",
          "module": "Pipes.Tutorial",
          "name": "Tutorial",
          "package": "pipes",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the recommended entry point to the \u003ccode\u003epipes\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eRead \u003ca\u003ePipes.Tutorial\u003c/a\u003e if you want a tutorial explaining how to use this\n    library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes",
          "name": "Pipes",
          "package": "pipes",
          "source": "src/Pipes.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the recommended entry point to the pipes library Read Pipes.Tutorial if you want tutorial explaining how to use this library",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Pipes",
          "package": "pipes",
          "partial": "Pipes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es can only \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Consumer",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Consumer",
          "type": "type"
        },
        "index": {
          "description": "Consumer can only await",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Consumer",
          "package": "pipes",
          "partial": "Consumer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Consumer'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Consumer%27",
          "type": "type"
        },
        "index": {
          "description": "Like Consumer but with polymorphic type",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Consumer'",
          "package": "pipes",
          "partial": "Consumer'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Consumer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn effect in the base monad\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003es neither \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Effect",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Effect",
          "type": "type"
        },
        "index": {
          "description": "An effect in the base monad Effect neither await nor yield",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Effect",
          "package": "pipes",
          "partial": "Effect",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Effect'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Effect%27",
          "type": "type"
        },
        "index": {
          "description": "Like Effect but with polymorphic type",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Effect'",
          "package": "pipes",
          "partial": "Effect'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Effect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e generalizes \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e, converting effectful\n    containers to \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Enumerable",
          "package": "pipes",
          "source": "src/Pipes.html#Enumerable",
          "type": "class"
        },
        "index": {
          "description": "Enumerable generalizes Foldable converting effectful containers to ListT",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Enumerable",
          "package": "pipes",
          "partial": "Enumerable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Enumerable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list monad transformer, which extends a monad with non-determinism\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e corresponds to \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e, yielding a single value\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) corresponds to \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e, calling the second computation once for each\n    time the first computation \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "ListT",
          "package": "pipes",
          "source": "src/Pipes.html#ListT",
          "type": "newtype"
        },
        "index": {
          "description": "The list monad transformer which extends monad with non-determinism return corresponds to yield yielding single value corresponds to for calling the second computation once for each time the first computation yield",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "ListT",
          "package": "pipes",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es can both \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Pipe",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Pipe",
          "type": "type"
        },
        "index": {
          "description": "Pipe can both await and yield",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Pipe",
          "package": "pipes",
          "partial": "Pipe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es can only \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Producer",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Producer",
          "type": "type"
        },
        "index": {
          "description": "Producer can only yield",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Producer",
          "package": "pipes",
          "partial": "Producer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Producer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, but with a polymorphic type\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "Producer'",
          "package": "pipes",
          "source": "src/Pipes-Core.html#Producer%27",
          "type": "type"
        },
        "index": {
          "description": "Like Producer but with polymorphic type",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Producer'",
          "package": "pipes",
          "partial": "Producer'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Producer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e is a monad transformer that receives and sends information on both\n    an upstream and downstream interface.\n\u003c/p\u003e\u003cp\u003eThe type variables signify:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea'\u003c/code\u003e and \u003ccode\u003ea\u003c/code\u003e - The upstream interface, where \u003ccode\u003e(a')\u003c/code\u003es go out and \u003ccode\u003e(a)\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eb'\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e - The downstream interface, where \u003ccode\u003e(b)\u003c/code\u003es go out and \u003ccode\u003e(b')\u003c/code\u003es\n      come in\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em \u003c/code\u003e - The base monad\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003er \u003c/code\u003e - The return value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Pipes",
          "name": "Proxy",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Proxy is monad transformer that receives and sends information on both an upstream and downstream interface The type variables signify and The upstream interface where go out and come in and The downstream interface where go out and come in The base monad The return value",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Proxy",
          "package": "pipes",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty type, used to close output ends\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eData.Void\u003c/code\u003e is merged into \u003ccode\u003ebase\u003c/code\u003e, this will change to:\n\u003c/p\u003e\u003cpre\u003e type X = Void\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "X",
          "package": "pipes",
          "source": "src/Pipes-Internal.html#X",
          "type": "data"
        },
        "index": {
          "description": "The empty type used to close output ends When Data.Void is merged into base this will change to type Void",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "X",
          "package": "pipes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "(~\u003c)",
          "package": "pipes",
          "signature": "Proxy () b y' y m c-\u003e Proxy a' a y' y m b-\u003e Proxy a' a y' y m c",
          "type": "function"
        },
        "index": {
          "description": "with the arguments flipped",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(~\u003c) ~\u003c",
          "normalized": "Proxy()a b c d e-\u003eProxy f g b c d a-\u003eProxy f g b c d e",
          "package": "pipes",
          "signature": "Proxy()b y' y m c-\u003eProxy a' a y' y m b-\u003eProxy a' a y' y m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-126--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose loop bodies\n\u003c/p\u003e\u003cpre\u003e\n(\u003ccode\u003e\u003ca\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r) -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m ()) -\u003e (a -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m r)\n(\u003ccode\u003e\u003ca\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r) -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   c m ()) -\u003e (a -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   c m r)\n(\u003ccode\u003e\u003ca\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   x b m r) -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e x   m ()) -\u003e (a -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e x   m r)\n(\u003ccode\u003e\u003ca\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   x b m r) -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     x c m ()) -\u003e (a -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     x c m r)\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "(~\u003e)",
          "package": "pipes",
          "signature": "(a -\u003e Proxy x' x b' b m a')-\u003e (b -\u003e Proxy x' x c' c m b')-\u003e a -\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "Compose loop bodies Monad Producer Effect Effect Monad Producer Producer Producer Monad Pipe Consumer Consumer Monad Pipe Pipe Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(~\u003e) ~\u003e",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(e-\u003eProxy b c h i f d)-\u003ea-\u003eProxy b c h i f g",
          "package": "pipes",
          "signature": "(a-\u003eProxy x' x b' b m a')-\u003e(b-\u003eProxy x' x c' c m b')-\u003ea-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ccode\u003e\u003ca\u003e~\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "(\u003c~)",
          "package": "pipes",
          "signature": "(b -\u003e Proxy x' x c' c m b')-\u003e (a -\u003e Proxy x' x b' b m a')-\u003e a -\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "with the arguments flipped",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(\u003c~) \u003c~",
          "normalized": "(a-\u003eProxy b c d e f g)-\u003e(h-\u003eProxy b c g a f i)-\u003eh-\u003eProxy b c d e f i",
          "package": "pipes",
          "signature": "(b-\u003eProxy x' x c' c m b')-\u003e(a-\u003eProxy x' x b' b m a')-\u003ea-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "(\u003c-\u003c)",
          "package": "pipes",
          "signature": "Proxy () b c' c m r-\u003e Proxy a' a () b m r-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "with the arguments flipped",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(\u003c-\u003c) \u003c-\u003c",
          "normalized": "Proxy()a b c d e-\u003eProxy f g()a d e-\u003eProxy f g b c d e",
          "package": "pipes",
          "signature": "Proxy()b c' c m r-\u003eProxy a' a()b m r-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-60--45--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(draw \u003e~ p)\u003c/code\u003e loops over \u003ccode\u003ep\u003c/code\u003e replacing each \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003edraw\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n(\u003ccode\u003e\u003ca\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m b -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e b   m c -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m c\n(\u003ccode\u003e\u003ca\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e a   m b -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e b   m c -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e a   m c\n(\u003ccode\u003e\u003ca\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   y m b -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     b y m c -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   y m c\n(\u003ccode\u003e\u003ca\u003e\u003e~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     a y m b -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     b y m c -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     a y m c\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "(\u003e~)",
          "package": "pipes",
          "signature": "Proxy a' a y' y m b-\u003e Proxy () b y' y m c-\u003e Proxy a' a y' y m c",
          "type": "function"
        },
        "index": {
          "description": "draw loops over replacing each await with draw Monad Effect Consumer Effect Monad Consumer Consumer Consumer Monad Producer Pipe Producer Monad Pipe Pipe Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(\u003e~) \u003e~",
          "normalized": "Proxy a b c d e f-\u003eProxy()f c d e g-\u003eProxy a b c d e g",
          "package": "pipes",
          "signature": "Proxy a' a y' y m b-\u003eProxy()b y' y m c-\u003eProxy a' a y' y m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e composition, analogous to the Unix pipe operator\n\u003c/p\u003e\u003cpre\u003e\n(\u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e b   m r -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m r\n(\u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     b c m r -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   c m r\n(\u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   a b m r -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e b   m r -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e a   m r\n(\u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   a b m r -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     b c m r -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     a c m r\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "(\u003e-\u003e)",
          "package": "pipes",
          "signature": "Proxy a' a () b m r-\u003e Proxy () b c' c m r-\u003e Proxy a' a c' c m r",
          "type": "function"
        },
        "index": {
          "description": "Pipe composition analogous to the Unix pipe operator Monad Producer Consumer Effect Monad Producer Pipe Producer Monad Pipe Consumer Consumer Monad Pipe Pipe Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "(\u003e-\u003e) \u003e-\u003e",
          "normalized": "Proxy a b()c d e-\u003eProxy()c f g d e-\u003eProxy a b f g d e",
          "package": "pipes",
          "signature": "Proxy a' a()b m r-\u003eProxy()b c' c m r-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:-62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes",
          "name": "Select",
          "package": "pipes",
          "signature": "Select",
          "source": "src/Pipes.html#ListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "Select",
          "package": "pipes",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a value\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e a y m a\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "await",
          "package": "pipes",
          "signature": "Consumer' a m a",
          "source": "src/Pipes.html#await",
          "type": "function"
        },
        "index": {
          "description": "Consume value await Monad Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "await",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, analogous to the Unix \u003ccode\u003ecat\u003c/code\u003e program\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "cat",
          "package": "pipes",
          "signature": "Pipe a a m r",
          "source": "src/Pipes.html#cat",
          "type": "function"
        },
        "index": {
          "description": "The identity Pipe analogous to the Unix cat program",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "cat",
          "package": "pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscards a value\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "discard",
          "package": "pipes",
          "signature": "a -\u003e m ()",
          "source": "src/Pipes.html#discard",
          "type": "function"
        },
        "index": {
          "description": "Discards value",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "discard",
          "normalized": "a-\u003eb()",
          "package": "pipes",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "each",
          "package": "pipes",
          "signature": "f a -\u003e Producer' a m ()",
          "source": "src/Pipes.html#each",
          "type": "function"
        },
        "index": {
          "description": "Convert Foldable to Producer",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "each",
          "normalized": "a b-\u003eProducer' b c()",
          "package": "pipes",
          "signature": "f a-\u003eProducer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:each"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes",
          "name": "enumerate",
          "package": "pipes",
          "signature": "Producer a m ()",
          "source": "src/Pipes.html#ListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "enumerate",
          "normalized": "Producer a b()",
          "package": "pipes",
          "signature": "Producer a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "every",
          "package": "pipes",
          "signature": "t m a -\u003e Producer' a m ()",
          "source": "src/Pipes.html#every",
          "type": "function"
        },
        "index": {
          "description": "Convert an Enumerable to Producer",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "every",
          "normalized": "a b c-\u003eProducer' c b()",
          "package": "pipes",
          "signature": "t m a-\u003eProducer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(for p body)\u003c/code\u003e loops over \u003ccode\u003ep\u003c/code\u003e replacing each \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003ebody\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m ()) -\u003e \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e       m r\n\u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e b m r -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   c m ()) -\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e   c m r\n\u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   x b m r -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e x   m ()) -\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e x   m r\n\u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e   x b m r -\u003e (b -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     x c m ()) -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e     x c m r\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "for",
          "package": "pipes",
          "signature": "Proxy x' x b' b m a'-\u003e (b -\u003e Proxy x' x c' c m b')-\u003e Proxy x' x c' c m a'",
          "type": "function"
        },
        "index": {
          "description": "for body loops over replacing each yield with body for Monad Producer Effect Effect for Monad Producer Producer Producer for Monad Pipe Consumer Consumer for Monad Pipe Pipe Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "for",
          "normalized": "Proxy a b c d e f-\u003e(d-\u003eProxy a b g h e c)-\u003eProxy a b g h e f",
          "package": "pipes",
          "signature": "Proxy x' x b' b m a'-\u003e(b-\u003eProxy x' x c' c m b')-\u003eProxy x' x c' c m a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the first value from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e either fails with a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e terminates or succeeds\n    with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e providing the next value and the remainder of the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes",
          "name": "next",
          "package": "pipes",
          "signature": "Producer a m r -\u003e m (Either r (a, Producer a m r))",
          "source": "src/Pipes.html#next",
          "type": "function"
        },
        "index": {
          "description": "Consume the first value from Producer next either fails with Left if the Producer terminates or succeeds with Right providing the next value and the remainder of the Producer",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "next",
          "normalized": "Producer a b c-\u003eb(Either c(a,Producer a b c))",
          "package": "pipes",
          "signature": "Producer a m r-\u003em(Either r(a,Producer a m r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes",
          "name": "toListT",
          "package": "pipes",
          "signature": "t m a -\u003e ListT m a",
          "source": "src/Pipes.html#toListT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "toListT",
          "normalized": "a b c-\u003eListT b c",
          "package": "pipes",
          "partial": "List",
          "signature": "t m a-\u003eListT m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:toListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a value\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m =\u003e a -\u003e \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e x a m ()\n\u003c/pre\u003e",
          "module": "Pipes",
          "name": "yield",
          "package": "pipes",
          "signature": "a -\u003e Producer' a m ()",
          "source": "src/Pipes.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Produce value yield Monad Pipe",
          "hierarchy": "Pipes",
          "module": "Pipes",
          "name": "yield",
          "normalized": "a-\u003eProducer' a b()",
          "package": "pipes",
          "signature": "a-\u003eProducer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes/docs/Pipes.html#v:yield"
      }
    }
  ]
]