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
        "word": "monadloc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe TH macro \u003ccode\u003e\u003ca\u003ewithLocTH\u003c/a\u003e\u003c/code\u003e to manually annotate program points,\n   but you should always use the preprocessor if possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Loc.TH",
          "name": "TH",
          "package": "monadloc",
          "source": "src/Control-Monad-Loc-TH.html",
          "type": "module"
        },
        "index": {
          "description": "The TH macro withLocTH to manually annotate program points but you should always use the preprocessor if possible",
          "hierarchy": "Control Monad Loc TH",
          "module": "Control.Monad.Loc.TH",
          "name": "TH",
          "package": "monadloc",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithLocTH\u003c/a\u003e\u003c/code\u003e is a convenient TH macro which expands to \u003ccode\u003e\u003ca\u003ewithLoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003csource location\u003e\u003c/code\u003e\n    It should only be used when the MonadLoc preprocessor is not available.\n    Usage:\n\u003c/p\u003e\u003cpre\u003e f x = $withLocTH $ do\n          $withLocTH $ something\n          x \u003c -$withLocTH $ something-else\n          ...\n\u003c/pre\u003e\u003cp\u003eNOTE: unfortunately type signatures are necessary when using withLocTH\n\u003c/p\u003e",
          "module": "Control.Monad.Loc.TH",
          "name": "withLocTH",
          "package": "monadloc",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Loc-TH.html#withLocTH",
          "type": "function"
        },
        "index": {
          "description": "withLocTH is convenient TH macro which expands to withLoc source location It should only be used when the MonadLoc preprocessor is not available Usage withLocTH do withLocTH something withLocTH something-else NOTE unfortunately type signatures are necessary when using withLocTH",
          "hierarchy": "Control Monad Loc TH",
          "module": "Control.Monad.Loc.TH",
          "name": "withLocTH",
          "package": "monadloc",
          "partial": "Loc TH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc-TH.html#v:withLocTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package contains MonadLoc instance declarations for the monad\n  transformer type constructors in the \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Loc.Transformers",
          "name": "Transformers",
          "package": "monadloc",
          "source": "src/Control-Monad-Loc-Transformers.html",
          "type": "module"
        },
        "index": {
          "description": "This package contains MonadLoc instance declarations for the monad transformer type constructors in the transformers package",
          "hierarchy": "Control Monad Loc Transformers",
          "module": "Control.Monad.Loc.Transformers",
          "name": "Transformers",
          "package": "monadloc",
          "partial": "Transformers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc-Transformers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package defines a MonadLoc class for monads which support Monadic Call Traces.\n See http:\u003cem/\u003epepeiborra.posterous.com/monadic-stack-traces-that-make-a-lot-of-sense\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Traces are only provided for explicitly annotated program points.\n\u003c/li\u003e\u003cli\u003e This package installs the MonadLoc preprocessor for this purpose.\n   To enable it include the following pragma at the top of your haskell source files:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n     { -# OPTIONS_GHC -F -pgmF MonadLoc #- }\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e There is also the TH macro \u003ccode\u003ewithLocTH\u003c/code\u003e exported by \u003ca\u003eControl.Monad.Loc.TH\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Monad.Loc",
          "name": "Loc",
          "package": "monadloc",
          "source": "src/Control-Monad-Loc.html",
          "type": "module"
        },
        "index": {
          "description": "This package defines MonadLoc class for monads which support Monadic Call Traces See http pepeiborra.posterous.com monadic-stack-traces-that-make-a-lot-of-sense Traces are only provided for explicitly annotated program points This package installs the MonadLoc preprocessor for this purpose To enable it include the following pragma at the top of your haskell source files OPTIONS GHC pgmF MonadLoc There is also the TH macro withLocTH exported by Control.Monad.Loc.TH",
          "hierarchy": "Control Monad Loc",
          "module": "Control.Monad.Loc",
          "name": "Loc",
          "package": "monadloc",
          "partial": "Loc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerating stack traces for failures\n\u003c/p\u003e",
          "module": "Control.Monad.Loc",
          "name": "MonadLoc",
          "package": "monadloc",
          "source": "src/Control-Monad-Loc.html#MonadLoc",
          "type": "class"
        },
        "index": {
          "description": "Generating stack traces for failures",
          "hierarchy": "Control Monad Loc",
          "module": "Control.Monad.Loc",
          "name": "MonadLoc",
          "package": "monadloc",
          "partial": "Monad Loc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc.html#t:MonadLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithLoc\u003c/a\u003e\u003c/code\u003e records the given source location in the failure trace\n   if the underlying monad supports recording location traces\n\u003c/p\u003e",
          "module": "Control.Monad.Loc",
          "name": "withLoc",
          "package": "monadloc",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Loc.html#withLoc",
          "type": "method"
        },
        "index": {
          "description": "withLoc records the given source location in the failure trace if the underlying monad supports recording location traces",
          "hierarchy": "Control Monad Loc",
          "module": "Control.Monad.Loc",
          "name": "withLoc",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "monadloc",
          "partial": "Loc",
          "signature": "String-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadloc/docs/Control-Monad-Loc.html#v:withLoc"
      }
    }
  ]
]