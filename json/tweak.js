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
        "word": "tweak"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "Internal",
          "package": "tweak",
          "source": "src/Control-Tweak-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "Internal",
          "package": "tweak",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "Comply",
          "package": "tweak",
          "source": "src/Control-Tweak-Internal.html#Comply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "Comply",
          "package": "tweak",
          "partial": "Comply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#t:Comply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "Funktor",
          "package": "tweak",
          "source": "src/Control-Tweak-Internal.html#Funktor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "Funktor",
          "package": "tweak",
          "partial": "Funktor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#t:Funktor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e used to create \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e expressions\n  Use the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e interface or the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e helpers\n \u003ccode\u003e\u003ca\u003e.$.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Tweak.Internal",
          "name": "Maker",
          "package": "tweak",
          "source": "src/Control-Tweak-Internal.html#Maker",
          "type": "data"
        },
        "index": {
          "description": "Maker is the Applicative used to create Tweakable expressions Use the Applicative interface or the Applicative helpers and",
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "Maker",
          "package": "tweak",
          "partial": "Maker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#t:Maker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is slight variation on \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003e.$.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e avoid explicit \n  calls to \u003ccode\u003e\u003ca\u003emake\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eUnlike Functor the input and output * -\u003e * type can change. There is no reasoning\n or laws behind it, it is just sugar.\n\u003c/p\u003e\u003cp\u003eThe Funktor type class is closed and private. There are only instances\n for \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e.   \n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Internal\",\"Control.Tweak\"]",
          "name": "(.$.)",
          "package": "tweak",
          "signature": "(a -\u003e b) -\u003e f a -\u003e g b",
          "source": "src/Control-Tweak-Internal.html#.%24.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:.-36-.\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:.-36-.\"]"
        },
        "index": {
          "description": "This is slight variation on Use and avoid explicit calls to make and Pure Unlike Functor the input and output type can change There is no reasoning or laws behind it it is just sugar The Funktor type class is closed and private There are only instances for Maker Tweakable and Var",
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "(.$.) .$.",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed b",
          "package": "tweak",
          "signature": "(a-\u003eb)-\u003ef a-\u003eg b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:.-36-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is slight variation on \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003e.$.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e avoid explicit \n  calls to \u003ccode\u003e\u003ca\u003emake\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eUnlike Apply, with Comply the input and output * -\u003e * type can change. \n Like Funktor, there is no reasoning or laws behind it, it is just sugar.\n\u003c/p\u003e\u003cp\u003eThe Comply type class is closed and private. There are only instances\n for \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e.   \n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Internal\",\"Control.Tweak\"]",
          "name": "(.*.)",
          "package": "tweak",
          "signature": "g (a -\u003e b) -\u003e h a -\u003e g b",
          "source": "src/Control-Tweak-Internal.html#.%2A.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:.-42-.\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:.-42-.\"]"
        },
        "index": {
          "description": "This is slight variation on Use and avoid explicit calls to make and Pure Unlike Apply with Comply the input and output type can change Like Funktor there is no reasoning or laws behind it it is just sugar The Comply type class is closed and private There are only instances for Maker Tweakable and Var",
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "(.*.) .*.",
          "normalized": "a(b-\u003ec)-\u003ed b-\u003ea c",
          "package": "tweak",
          "signature": "g(a-\u003eb)-\u003eh a-\u003eg b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "Maker",
          "package": "tweak",
          "signature": "Maker",
          "source": "src/Control-Tweak-Internal.html#Maker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "Maker",
          "package": "tweak",
          "partial": "Maker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:Maker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "apply",
          "package": "tweak",
          "signature": "IO (Tweakable (a -\u003e b)) -\u003e IO (Tweakable a) -\u003e IO (Tweakable b)",
          "source": "src/Control-Tweak-Internal.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "apply",
          "normalized": "IO(Tweakable(a-\u003eb))-\u003eIO(Tweakable a)-\u003eIO(Tweakable b)",
          "package": "tweak",
          "signature": "IO(Tweakable(a-\u003eb))-\u003eIO(Tweakable a)-\u003eIO(Tweakable b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "connect",
          "package": "tweak",
          "signature": "g (a -\u003e b) -\u003e h a -\u003e g b",
          "source": "src/Control-Tweak-Internal.html#connect",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "connect",
          "normalized": "a(b-\u003ec)-\u003ed b-\u003ea c",
          "package": "tweak",
          "signature": "g(a-\u003eb)-\u003eh a-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "fcrap",
          "package": "tweak",
          "signature": "(a -\u003e b) -\u003e f a -\u003e g b",
          "source": "src/Control-Tweak-Internal.html#fcrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "fcrap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed b",
          "package": "tweak",
          "signature": "(a-\u003eb)-\u003ef a-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:fcrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e so it can be combined\n   with other \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Internal\",\"Control.Tweak\"]",
          "name": "make",
          "package": "tweak",
          "signature": "Tweakable a -\u003e Maker a",
          "source": "src/Control-Tweak-Internal.html#make",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:make\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:make\"]"
        },
        "index": {
          "description": "Turn Tweakable into Maker so it can be combined with other Maker",
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "make",
          "normalized": "Tweakable a-\u003eMaker a",
          "package": "tweak",
          "signature": "Tweakable a-\u003eMaker a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Internal",
          "name": "runmaker",
          "package": "tweak",
          "signature": "IO (Tweakable a)",
          "source": "src/Control-Tweak-Internal.html#Maker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak Internal",
          "module": "Control.Tweak.Internal",
          "name": "runmaker",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Internal.html#v:runmaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTweakable expressions can be updated incrementally. This module\n    exports the central expression type for incremental computations.\n    However, the \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e expressions are meant to be created with \n    \u003ccode\u003eMaker\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ereadCache\u003c/a\u003e\u003c/code\u003e to retrieve the value of an \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e at anytime.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Tweak.Tweakable",
          "name": "Tweakable",
          "package": "tweak",
          "source": "src/Control-Tweak-Tweakable.html",
          "type": "module"
        },
        "index": {
          "description": "Tweakable expressions can be updated incrementally This module exports the central expression type for incremental computations However the Tweakable expressions are meant to be created with Maker Use readCache to retrieve the value of an Tweakable at anytime",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "Tweakable",
          "package": "tweak",
          "partial": "Tweakable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression that can be incrementally updated. \n   \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e is basically an simple \u003ccode\u003eApplicative\u003c/code\u003e\n   with a cached value.  \n\u003c/p\u003e",
          "module": "Control.Tweak.Tweakable",
          "name": "Tweakable",
          "package": "tweak",
          "source": "src/Control-Tweak-Tweakable.html#Tweakable",
          "type": "data"
        },
        "index": {
          "description": "An expression that can be incrementally updated Tweakable is basically an simple Applicative with cached value",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "Tweakable",
          "package": "tweak",
          "partial": "Tweakable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#t:Tweakable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Tweak.Tweakable\",\"Control.Tweak\"]",
          "name": "App",
          "package": "tweak",
          "signature": "Var b -\u003e Tweakable (a -\u003e b) -\u003e Tweakable a -\u003e Tweakable b",
          "source": "src/Control-Tweak-Tweakable.html#Tweakable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:App\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:App\"]"
        },
        "index": {
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "App",
          "normalized": "Var a-\u003eTweakable(b-\u003ea)-\u003eTweakable b-\u003eTweakable a",
          "package": "tweak",
          "partial": "App",
          "signature": "Var b-\u003eTweakable(a-\u003eb)-\u003eTweakable a-\u003eTweakable b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Tweak.Tweakable\",\"Control.Tweak\"]",
          "name": "Pure",
          "package": "tweak",
          "signature": "Var a -\u003e Tweakable a",
          "source": "src/Control-Tweak-Tweakable.html#Tweakable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:Pure\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:Pure\"]"
        },
        "index": {
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "Pure",
          "normalized": "Var a-\u003eTweakable a",
          "package": "tweak",
          "partial": "Pure",
          "signature": "Var a-\u003eTweakable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the cache and put in an \u003ccode\u003e\u003ca\u003eAnyVar\u003c/a\u003e\u003c/code\u003e existential wrapper\n\u003c/p\u003e",
          "module": "Control.Tweak.Tweakable",
          "name": "getAnyVar",
          "package": "tweak",
          "signature": "Tweakable a -\u003e AnyVar",
          "source": "src/Control-Tweak-Tweakable.html#getAnyVar",
          "type": "function"
        },
        "index": {
          "description": "Get the cache and put in an AnyVar existential wrapper",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "getAnyVar",
          "normalized": "Tweakable a-\u003eAnyVar",
          "package": "tweak",
          "partial": "Any Var",
          "signature": "Tweakable a-\u003eAnyVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:getAnyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the cache i.e. the \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e from the Tweakable\n\u003c/p\u003e",
          "module": "Control.Tweak.Tweakable",
          "name": "getVar",
          "package": "tweak",
          "signature": "Tweakable a -\u003e Var a",
          "source": "src/Control-Tweak-Tweakable.html#getVar",
          "type": "function"
        },
        "index": {
          "description": "Get the cache i.e the Var from the Tweakable",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "getVar",
          "normalized": "Tweakable a-\u003eVar a",
          "package": "tweak",
          "partial": "Var",
          "signature": "Tweakable a-\u003eVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:getVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the cache of a \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e. This is nothing more than \n\u003c/p\u003e\u003cpre\u003e \n   readCache = atomically . readCacheSTM  \n\u003c/pre\u003e",
          "module": "[\"Control.Tweak.Tweakable\",\"Control.Tweak\"]",
          "name": "readCache",
          "package": "tweak",
          "signature": "Tweakable a -\u003e IO a",
          "source": "src/Control-Tweak-Tweakable.html#readCache",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:readCache\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:readCache\"]"
        },
        "index": {
          "description": "Read the cache of Tweakable This is nothing more than readCache atomically readCacheSTM",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "readCache",
          "normalized": "Tweakable a-\u003eIO a",
          "package": "tweak",
          "partial": "Cache",
          "signature": "Tweakable a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:readCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the cache of a \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ereadCache\u003c/a\u003e\u003c/code\u003e for an IO version.\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Tweakable\",\"Control.Tweak\"]",
          "name": "readCacheSTM",
          "package": "tweak",
          "signature": "Tweakable a -\u003e STM a",
          "source": "src/Control-Tweak-Tweakable.html#readCacheSTM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:readCacheSTM\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:readCacheSTM\"]"
        },
        "index": {
          "description": "Read the cache of Tweakable See readCache for an IO version",
          "hierarchy": "Control Tweak Tweakable",
          "module": "Control.Tweak.Tweakable",
          "name": "readCacheSTM",
          "normalized": "Tweakable a-\u003eSTM a",
          "package": "tweak",
          "partial": "Cache STM",
          "signature": "Tweakable a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Tweakable.html#v:readCacheSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e is the reference type used for incremental computing. It has a cached value \n     and a list of dependent children to update when it changes.\n\u003c/p\u003e\u003cp\u003eThe update propogation happens automatically when using either \u003ccode\u003e\u003ca\u003emodifyVar\u003c/a\u003e\u003c/code\u003e or \n     \u003ccode\u003e\u003ca\u003ewriteVar\u003c/a\u003e\u003c/code\u003e. Same with the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e variants. \n\u003c/p\u003e\u003cp\u003eAdditionally updates can be triggered manually with \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e is low level and is used by \u003ccode\u003eTweakable\u003c/code\u003e and to create incremental expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html",
          "type": "module"
        },
        "index": {
          "description": "Var is the reference type used for incremental computing It has cached value and list of dependent children to update when it changes The update propogation happens automatically when using either modifyVar or writeVar Same with the STM variants Additionally updates can be triggered manually with update Var is low level and is used by Tweakable and to create incremental expressions",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "partial": "Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Var",
          "name": "AnyVar",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#AnyVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "AnyVar",
          "package": "tweak",
          "partial": "Any Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#t:AnyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Var",
          "name": "Cacheable",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#Cacheable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Cacheable",
          "package": "tweak",
          "partial": "Cacheable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#t:Cacheable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe container for a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es dependent \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "Children",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#Children",
          "type": "type"
        },
        "index": {
          "description": "The container for Var dependent Var",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Children",
          "package": "tweak",
          "partial": "Children",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#t:Children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of update actions\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "Update",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#Update",
          "type": "type"
        },
        "index": {
          "description": "The type of update actions",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Update",
          "package": "tweak",
          "partial": "Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis a reference for incremental computation. Not only does it include a value,\n   But is also has a list of actions to execute when it is updated.\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "data"
        },
        "index": {
          "description": "This reference for incremental computation Not only does it include value But is also has list of actions to execute when it is updated",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Var",
          "name": "AnyVar",
          "package": "tweak",
          "signature": "forall a . AnyVar (Var a)",
          "source": "src/Control-Tweak-Var.html#AnyVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "AnyVar",
          "package": "tweak",
          "partial": "Any Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:AnyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "signature": "Var",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "Var",
          "package": "tweak",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of actions to execute when the value of the \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e is updated\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "_children",
          "package": "tweak",
          "signature": "TVar Children",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "function"
        },
        "index": {
          "description": "collection of actions to execute when the value of the Var is updated",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "_children",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:_children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is so to references to the same \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e are not added to \u003ccode\u003e\u003ca\u003e_children\u003c/a\u003e\u003c/code\u003e\n   collection\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "_identifier",
          "package": "tweak",
          "signature": "Unique",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "function"
        },
        "index": {
          "description": "This is so to references to the same Var are not added to children collection",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "_identifier",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:_identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cached value of the the \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "_output",
          "package": "tweak",
          "signature": "TVar a",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "function"
        },
        "index": {
          "description": "The cached value of the the Var",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "_output",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:_output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a dependent child to the \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es children, or any type that has \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e like\n   Children\n   See \u003ccode\u003e\u003ca\u003eaddChildSTM\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "addChild",
          "package": "tweak",
          "signature": "a-\u003e AnyVar-\u003e Update-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Add dependent child to the Var children or any type that has Var like Children See addChildSTM for the STM version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "addChild",
          "normalized": "a-\u003eAnyVar-\u003eUpdate-\u003eIO()",
          "package": "tweak",
          "partial": "Child",
          "signature": "a-\u003eAnyVar-\u003eUpdate-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:addChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a dependent child to the \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es children, or any type that has \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e like\n   Children\n   See \u003ccode\u003e\u003ca\u003eaddChild\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "addChildSTM",
          "package": "tweak",
          "signature": "a-\u003e AnyVar-\u003e Update-\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "Add dependent child to the Var children or any type that has Var like Children See addChild for the IO version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "addChildSTM",
          "normalized": "a-\u003eAnyVar-\u003eUpdate-\u003eSTM()",
          "package": "tweak",
          "partial": "Child STM",
          "signature": "a-\u003eAnyVar-\u003eUpdate-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:addChildSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak.Var",
          "name": "children",
          "package": "tweak",
          "signature": "Lens' a (TVar Children)",
          "source": "src/Control-Tweak-Var.html#children",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "children",
          "package": "tweak",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e for the unique identifier associated with this \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "identifier",
          "package": "tweak",
          "signature": "Lens (Var a) (Var a) Unique Unique",
          "source": "src/Control-Tweak-Var.html#identifier",
          "type": "function"
        },
        "index": {
          "description": "Lens for the unique identifier associated with this Var",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "identifier",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and update the children. \n   See \u003ccode\u003e\u003ca\u003emodifyVarSTM\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "modifyVar",
          "package": "tweak",
          "signature": "Var a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Control-Tweak-Var.html#modifyVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:modifyVar\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:modifyVar\"]"
        },
        "index": {
          "description": "Modify Var and update the children See modifyVarSTM for the STM version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "modifyVar",
          "normalized": "Var a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "tweak",
          "partial": "Var",
          "signature": "Var a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and update the children. \n   See \u003ccode\u003e\u003ca\u003emodifyVar\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "modifyVarSTM",
          "package": "tweak",
          "signature": "Var a -\u003e (a -\u003e a) -\u003e STM ()",
          "source": "src/Control-Tweak-Var.html#modifyVarSTM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:modifyVarSTM\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:modifyVarSTM\"]"
        },
        "index": {
          "description": "Modify Var and update the children See modifyVar for the IO version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "modifyVarSTM",
          "normalized": "Var a-\u003e(a-\u003ea)-\u003eSTM()",
          "package": "tweak",
          "partial": "Var STM",
          "signature": "Var a-\u003e(a-\u003ea)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:modifyVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003enewVarSTM\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "newVar",
          "package": "tweak",
          "signature": "a -\u003e IO (Var a)",
          "source": "src/Control-Tweak-Var.html#newVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:newVar\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:newVar\"]"
        },
        "index": {
          "description": "Create new Var See newVarSTM for the STM version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "newVar",
          "normalized": "a-\u003eIO(Var a)",
          "package": "tweak",
          "partial": "Var",
          "signature": "a-\u003eIO(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003enewVar\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "newVarSTM",
          "package": "tweak",
          "signature": "a -\u003e STM (Var a)",
          "source": "src/Control-Tweak-Var.html#newVarSTM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:newVarSTM\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:newVarSTM\"]"
        },
        "index": {
          "description": "Create new Var See newVar for the IO version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "newVarSTM",
          "normalized": "a-\u003eSTM(Var a)",
          "package": "tweak",
          "partial": "Var STM",
          "signature": "a-\u003eSTM(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:newVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e for the cached ref\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "output",
          "package": "tweak",
          "signature": "Lens (Var a) (Var b) (TVar a) (TVar b)",
          "source": "src/Control-Tweak-Var.html#output",
          "type": "function"
        },
        "index": {
          "description": "Lens for the cached ref",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "output",
          "package": "tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the cached value of a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ereadVarSTM\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "readVar",
          "package": "tweak",
          "signature": "Var a -\u003e IO a",
          "source": "src/Control-Tweak-Var.html#readVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:readVar\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:readVar\"]"
        },
        "index": {
          "description": "Read the cached value of Var See readVarSTM for an STM version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "readVar",
          "normalized": "Var a-\u003eIO a",
          "package": "tweak",
          "partial": "Var",
          "signature": "Var a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the cached value of a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ereadVar\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "readVarSTM",
          "package": "tweak",
          "signature": "Var a -\u003e STM a",
          "source": "src/Control-Tweak-Var.html#readVarSTM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:readVarSTM\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:readVarSTM\"]"
        },
        "index": {
          "description": "Read the cached value of Var See readVar for an IO version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "readVarSTM",
          "normalized": "Var a-\u003eSTM a",
          "package": "tweak",
          "partial": "Var STM",
          "signature": "Var a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:readVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively call update on the children of a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e like thing\n\u003c/p\u003e",
          "module": "Control.Tweak.Var",
          "name": "update",
          "package": "tweak",
          "signature": "a -\u003e STM ()",
          "source": "src/Control-Tweak-Var.html#update",
          "type": "function"
        },
        "index": {
          "description": "Recursively call update on the children of Var like thing",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "update",
          "normalized": "a-\u003eSTM()",
          "package": "tweak",
          "signature": "a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and update all of the children. \n   See \u003ccode\u003e\u003ca\u003ewriteVarSTM\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "writeVar",
          "package": "tweak",
          "signature": "Var a -\u003e a -\u003e IO ()",
          "source": "src/Control-Tweak-Var.html#writeVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:writeVar\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:writeVar\"]"
        },
        "index": {
          "description": "Write new value into Var and update all of the children See writeVarSTM for the STM version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "writeVar",
          "normalized": "Var a-\u003ea-\u003eIO()",
          "package": "tweak",
          "partial": "Var",
          "signature": "Var a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:writeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and update all of the children. \n   See \u003ccode\u003e\u003ca\u003ewriteVar\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e",
          "module": "[\"Control.Tweak.Var\",\"Control.Tweak\"]",
          "name": "writeVarSTM",
          "package": "tweak",
          "signature": "Var a -\u003e a -\u003e STM ()",
          "source": "src/Control-Tweak-Var.html#writeVarSTM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:writeVarSTM\",\"http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:writeVarSTM\"]"
        },
        "index": {
          "description": "Write new value into Var and update all of the children See writeVar for the IO version",
          "hierarchy": "Control Tweak Var",
          "module": "Control.Tweak.Var",
          "name": "writeVarSTM",
          "normalized": "Var a-\u003ea-\u003eSTM()",
          "package": "tweak",
          "partial": "Var STM",
          "signature": "Var a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak-Var.html#v:writeVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTweak exposes an interface for incremental computation. \n\u003c/p\u003e\u003cp\u003eThere are three main types that work together to build expressions that can \n   updated incrementally: \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e exposes a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e interface for building \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e \n   expressions\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e constructs expressions that can be re-evaluated incrementally by calling\n   \u003ccode\u003e\u003ca\u003ereadCache\u003c/a\u003e\u003c/code\u003e. In contains caches of \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e is a mututable reference with dependency information, which propagates changes\n   through a graph of \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eUnder the hood everything is done using \u003ccode\u003eTVar\u003c/code\u003es and the system is meant to be used\n   in a concurrent environment. There are \u003ccode\u003eSTM\u003c/code\u003e versions of functions that occur in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \n   to help build more complex \u003ccode\u003eSTM\u003c/code\u003e transactions.\n\u003c/p\u003e\u003cp\u003eHere is a simple example.\n\u003c/p\u003e\u003cpre\u003e Import Control.Tweak\n \n test = do\n      foo \u003c- newVar 1\n      baz \u003c- newVar 2\n \n      quux \u003c- runMaker $ (*) \u003c$\u003e make baz \u003c*\u003e make baz\n      bar  \u003c- runMaker $ (+) \u003c$\u003e make foo \u003c*\u003e make quux\n      \n      -- prints 5\n      print =\u003c\u003c readCache bar\n\n      writeVar foo 10\n      --\n      print =\u003c\u003c readCache bar        \n\u003c/pre\u003e\u003cp\u003eIt is a little inconvient to explictly convert \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003es so there is some \n   \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e like sugar for \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e, that also does the \n   proper wrapping of \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsing the sugar the example above looks like. \n\u003c/p\u003e\u003cpre\u003e Import Control.Tweak\n \n test = do\n      foo \u003c- newVar 1\n      baz \u003c- newVar 2\n \n      quux \u003c- runMaker $ (*) .$. baz .*. baz\n      bar  \u003c- runMaker $ (+) .$. foo .*. quux\n      \n      -- prints 5\n      print =\u003c\u003c readCache bar\n\n      writeVar foo 10\n      --\n      print =\u003c\u003c readCache bar\n\u003c/pre\u003e\u003cp\u003eThe important people of the example above, is when the \u003ccode\u003efoo\u003c/code\u003e is updated, only \u003ccode\u003ebar\u003c/code\u003e\n   is updated, not \u003ccode\u003equux\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Tweak",
          "name": "Tweak",
          "package": "tweak",
          "source": "src/Control-Tweak.html",
          "type": "module"
        },
        "index": {
          "description": "Tweak exposes an interface for incremental computation There are three main types that work together to build expressions that can updated incrementally Maker Tweakable and Var Maker exposes Functor and Applicative interface for building Tweakable expressions Tweakable constructs expressions that can be re-evaluated incrementally by calling readCache In contains caches of Var Var is mututable reference with dependency information which propagates changes through graph of Var Under the hood everything is done using TVar and the system is meant to be used in concurrent environment There are STM versions of functions that occur in IO to help build more complex STM transactions Here is simple example Import Control.Tweak test do foo newVar baz newVar quux runMaker make baz make baz bar runMaker make foo make quux prints print readCache bar writeVar foo print readCache bar It is little inconvient to explictly convert Var into Maker so there is some Applicative and Functor like sugar for and that also does the proper wrapping of Var and Tweakable Using the sugar the example above looks like Import Control.Tweak test do foo newVar baz newVar quux runMaker baz baz bar runMaker foo quux prints print readCache bar writeVar foo print readCache bar The important people of the example above is when the foo is updated only bar is updated not quux",
          "hierarchy": "Control Tweak",
          "module": "Control.Tweak",
          "name": "Tweak",
          "package": "tweak",
          "partial": "Tweak",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaker\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e used to create \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e expressions\n  Use the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e interface or the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e helpers\n \u003ccode\u003e\u003ca\u003e.$.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Tweak",
          "name": "Maker",
          "package": "tweak",
          "source": "src/Control-Tweak-Internal.html#Maker",
          "type": "data"
        },
        "index": {
          "description": "Maker is the Applicative used to create Tweakable expressions Use the Applicative interface or the Applicative helpers and",
          "hierarchy": "Control Tweak",
          "module": "Control.Tweak",
          "name": "Maker",
          "package": "tweak",
          "partial": "Maker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#t:Maker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression that can be incrementally updated. \n   \u003ccode\u003e\u003ca\u003eTweakable\u003c/a\u003e\u003c/code\u003e is basically an simple \u003ccode\u003eApplicative\u003c/code\u003e\n   with a cached value.  \n\u003c/p\u003e",
          "module": "Control.Tweak",
          "name": "Tweakable",
          "package": "tweak",
          "source": "src/Control-Tweak-Tweakable.html#Tweakable",
          "type": "data"
        },
        "index": {
          "description": "An expression that can be incrementally updated Tweakable is basically an simple Applicative with cached value",
          "hierarchy": "Control Tweak",
          "module": "Control.Tweak",
          "name": "Tweakable",
          "package": "tweak",
          "partial": "Tweakable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#t:Tweakable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis a reference for incremental computation. Not only does it include a value,\n   But is also has a list of actions to execute when it is updated.\n\u003c/p\u003e",
          "module": "Control.Tweak",
          "name": "Var",
          "package": "tweak",
          "source": "src/Control-Tweak-Var.html#Var",
          "type": "data"
        },
        "index": {
          "description": "This reference for incremental computation Not only does it include value But is also has list of actions to execute when it is updated",
          "hierarchy": "Control Tweak",
          "module": "Control.Tweak",
          "name": "Var",
          "package": "tweak",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Tweak",
          "name": "runmaker",
          "package": "tweak",
          "signature": "Maker a -\u003e IO (Tweakable a)",
          "source": "src/Control-Tweak-Internal.html#runmaker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Tweak",
          "module": "Control.Tweak",
          "name": "runmaker",
          "normalized": "Maker a-\u003eIO(Tweakable a)",
          "package": "tweak",
          "signature": "Maker a-\u003eIO(Tweakable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tweak/docs/Control-Tweak.html#v:runmaker"
      }
    }
  ]
]