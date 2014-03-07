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
        "word": "chp-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious (orphan) instances for monads from the chp and chp-plus libraries\n for classes from the transformers library.\n\u003c/p\u003e\u003cp\u003eThere are \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instances for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCHP\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCHPTest\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are \u003ccode\u003e\u003ca\u003eMonadCHP\u003c/a\u003e\u003c/code\u003e instances of the form \u003ccode\u003einstance MonadCHP m =\u003e MonadCHP\n (t m)\u003c/code\u003e, where t is one of the monad transformers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WriterT (lazy and strict)\n\u003c/li\u003e\u003cli\u003e StateT (lazy and strict)\n\u003c/li\u003e\u003cli\u003e RWST (lazy and strict)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIdentityT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHP.Transformers",
          "name": "Transformers",
          "package": "chp-transformers",
          "source": "src/Control-Concurrent-CHP-Transformers.html",
          "type": "module"
        },
        "index": {
          "description": "Various orphan instances for monads from the chp and chp-plus libraries for classes from the transformers library There are MonadIO instances for CHP CHPTest Composed There are MonadCHP instances of the form instance MonadCHP MonadCHP where is one of the monad transformers WriterT lazy and strict StateT lazy and strict RWST lazy and strict ReaderT ErrorT ContT IdentityT",
          "hierarchy": "Control Concurrent CHP Transformers",
          "module": "Control.Concurrent.CHP.Transformers",
          "name": "Transformers",
          "package": "chp-transformers",
          "partial": "Transformers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-transformers/docs/Control-Concurrent-CHP-Transformers.html#"
      }
    }
  ]
]