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
        "word": "monadLib-compose"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Arrow-like monad composition for monadLib. To be more precise, it is \u003ca\u003eCategory-like\u003c/a\u003e,\ni.e. the parallels are to \u003ccode\u003eControl.Category.Category\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eControl.Category.Category\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e to arrows and categories. One such arrow is \u003ccode\u003eKleisli\u003c/code\u003e,\nwhich represents functions returning monadic values. Incidentally, that's equivalent to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e! So it\nturns out that it is possible to generalise \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is just \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e), as well as to\nmany monad transformer stacks that embed a \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e inside.\n\u003c/p\u003e\u003cp\u003eThe motivation to create this module was a nagging feeling when reading the documentation for \u003ccode\u003ehxt\u003c/code\u003e and \u003ccode\u003eHaXml\u003c/code\u003e:\ncomposing filters is very nice, but the abundance of constant arrows, and the lack of access to the very extensive\nset of monad combinators, leads to duplicated effort and unwieldy code (in my humble opinion). I think it is\npossible to gain similar functionality with a stack of monad transformers including \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eComposeM\u003c/a\u003e\u003c/code\u003e,\npresented here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MonadLib.Compose",
          "name": "Compose",
          "package": "monadLib-compose",
          "source": "src/MonadLib-Compose.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Arrow-like monad composition for monadLib To be more precise it is Category-like i.e the parallels are to Control.Category.Category Control.Category.Category generalises and id to arrows and categories One such arrow is Kleisli which represents functions returning monadic values Incidentally that equivalent to ReaderT So it turns out that it is possible to generalise and id to ReaderT id is just ask as well as to many monad transformer stacks that embed ReaderT inside The motivation to create this module was nagging feeling when reading the documentation for hxt and HaXml composing filters is very nice but the abundance of constant arrows and the lack of access to the very extensive set of monad combinators leads to duplicated effort and unwieldy code in my humble opinion think it is possible to gain similar functionality with stack of monad transformers including ReaderT and ComposeM presented here",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "Compose",
          "package": "monadLib-compose",
          "partial": "Compose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposable monads. Compare with \u003ccode\u003eControl.Category.Category\u003c/code\u003e.\n Note that there are two different monad types involved in each instance.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "ComposeM",
          "package": "monadLib-compose",
          "source": "src/MonadLib-Compose.html#ComposeM",
          "type": "class"
        },
        "index": {
          "description": "Composable monads Compare with Control.Category.Category Note that there are two different monad types involved in each instance",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "ComposeM",
          "package": "monadLib-compose",
          "partial": "Compose",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#t:ComposeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from right to left. Compare with \u003ccode\u003eControl.Category.\u003c\u003c\u003c\u003c/code\u003e.\n \u003ccode\u003ef \u003c\u003c\u003c g\u003c/code\u003e is equivalent to \u003ccode\u003emcompose f g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "(\u003c\u003c\u003c)",
          "package": "monadLib-compose",
          "signature": "m a -\u003e n s -\u003e n a",
          "source": "src/MonadLib-Compose.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "Compose two monadic values from right to left Compare with Control.Category is equivalent to mcompose",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b-\u003ec d-\u003ec b",
          "package": "monadLib-compose",
          "signature": "m a-\u003en s-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from left to right. Compare with \u003ccode\u003eControl.Category.\u003e\u003e\u003e\u003c/code\u003e.\n \u003ccode\u003eg \u003e\u003e\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003emcompose f g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "(\u003e\u003e\u003e)",
          "package": "monadLib-compose",
          "signature": "n s -\u003e m a -\u003e n a",
          "source": "src/MonadLib-Compose.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Compose two monadic values from left to right Compare with Control.Category is equivalent to mcompose",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b-\u003ec d-\u003ea d",
          "package": "monadLib-compose",
          "signature": "n s-\u003em a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Compose",
          "name": "derive_mapply",
          "package": "monadLib-compose",
          "signature": "Iso m o -\u003e Iso n p -\u003e o a -\u003e s -\u003e p a",
          "source": "src/MonadLib-Compose.html#derive_mapply",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "derive_mapply",
          "normalized": "Iso a b-\u003eIso c d-\u003eb e-\u003ef-\u003ed e",
          "package": "monadLib-compose",
          "signature": "Iso m o-\u003eIso n p-\u003eo a-\u003es-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:derive_mapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Compose",
          "name": "derive_mcompose",
          "package": "monadLib-compose",
          "signature": "Iso m o -\u003e Iso n p -\u003e o a -\u003e p s -\u003e p a",
          "source": "src/MonadLib-Compose.html#derive_mcompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "derive_mcompose",
          "normalized": "Iso a b-\u003eIso c d-\u003eb e-\u003ed f-\u003ed e",
          "package": "monadLib-compose",
          "signature": "Iso m o-\u003eIso n p-\u003eo a-\u003ep s-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:derive_mcompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a constant value to a composable monad.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "mapply",
          "package": "monadLib-compose",
          "signature": "m a -\u003e s -\u003e n a",
          "source": "src/MonadLib-Compose.html#mapply",
          "type": "method"
        },
        "index": {
          "description": "Apply constant value to composable monad",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "mapply",
          "normalized": "a b-\u003ec-\u003ed b",
          "package": "monadLib-compose",
          "signature": "m a-\u003es-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:mapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from right to left. \u003ccode\u003emcompose f g\u003c/code\u003e is \n comparable to \u003ccode\u003ef . g\u003c/code\u003e but for monadic values. Compare with \u003ccode\u003eControl.Category..\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "mcompose",
          "package": "monadLib-compose",
          "signature": "m a -\u003e n s -\u003e n a",
          "source": "src/MonadLib-Compose.html#mcompose",
          "type": "method"
        },
        "index": {
          "description": "Compose two monadic values from right to left mcompose is comparable to but for monadic values Compare with Control.Category",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "mcompose",
          "normalized": "a b-\u003ec d-\u003ec b",
          "package": "monadLib-compose",
          "signature": "m a-\u003en s-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:mcompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e. Compare with \u003ccode\u003eControl.Category.id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Compose",
          "name": "mid",
          "package": "monadLib-compose",
          "signature": "m s",
          "source": "src/MonadLib-Compose.html#mid",
          "type": "function"
        },
        "index": {
          "description": "Alias for ask Compare with Control.Category.id",
          "hierarchy": "MonadLib Compose",
          "module": "MonadLib.Compose",
          "name": "mid",
          "package": "monadLib-compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib-compose/docs/MonadLib-Compose.html#v:mid"
      }
    }
  ]
]