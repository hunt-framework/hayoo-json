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
        "word": "transformers-compose"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Arrow-like monad composition for transformers. To be more precise, it is \u003ca\u003eCategory-like\u003c/a\u003e,\ni.e. the parallels are to \u003ccode\u003eControl.Category.Category\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis version has been adapted from monadLib-compose, to work with the transformers package.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eControl.Category.Category\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e to arrows and categories. One such arrow is \u003ccode\u003eKleisli\u003c/code\u003e,\nwhich represents functions returning monadic values. Incidentally, that's equivalent to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e! So it\nturns out that it is possible to generalise \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is just \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e), as well as to\nmany monad transformer stacks that embed a \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e inside.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "Class",
          "package": "transformers-compose",
          "source": "src/Control-Monad-Compose-Class.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Arrow-like monad composition for transformers To be more precise it is Category-like i.e the parallels are to Control.Category.Category This version has been adapted from monadLib-compose to work with the transformers package Control.Category.Category generalises and id to arrows and categories One such arrow is Kleisli which represents functions returning monadic values Incidentally that equivalent to ReaderT So it turns out that it is possible to generalise and id to ReaderT id is just ask as well as to many monad transformer stacks that embed ReaderT inside",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "Class",
          "package": "transformers-compose",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposable monads. Compare with \u003ccode\u003eControl.Category.Category\u003c/code\u003e.\n Note that there are two different monad types involved in each instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "MonadCompose",
          "package": "transformers-compose",
          "source": "src/Control-Monad-Compose-Class.html#MonadCompose",
          "type": "class"
        },
        "index": {
          "description": "Composable monads Compare with Control.Category.Category Note that there are two different monad types involved in each instance",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "MonadCompose",
          "package": "transformers-compose",
          "partial": "Monad Compose",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#t:MonadCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from right to left. Compare with \u003ccode\u003eControl.Category.\u003c\u003c\u003c\u003c/code\u003e.\n \u003ccode\u003ef \u003c\u003c\u003c g\u003c/code\u003e is equivalent to \u003ccode\u003emcompose f g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "(\u003c\u003c\u003c)",
          "package": "transformers-compose",
          "signature": "m a -\u003e n s -\u003e n a",
          "source": "src/Control-Monad-Compose-Class.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "Compose two monadic values from right to left Compare with Control.Category is equivalent to mcompose",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b-\u003ec d-\u003ec b",
          "package": "transformers-compose",
          "signature": "m a-\u003en s-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from left to right. Compare with \u003ccode\u003eControl.Category.\u003e\u003e\u003e\u003c/code\u003e.\n \u003ccode\u003eg \u003e\u003e\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003emcompose f g\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "(\u003e\u003e\u003e)",
          "package": "transformers-compose",
          "signature": "n s -\u003e m a -\u003e n a",
          "source": "src/Control-Monad-Compose-Class.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Compose two monadic values from left to right Compare with Control.Category is equivalent to mcompose",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b-\u003ec d-\u003ea d",
          "package": "transformers-compose",
          "signature": "n s-\u003em a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a constant value to a composable monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "mapply",
          "package": "transformers-compose",
          "signature": "m a -\u003e s -\u003e n a",
          "source": "src/Control-Monad-Compose-Class.html#mapply",
          "type": "method"
        },
        "index": {
          "description": "Apply constant value to composable monad",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "mapply",
          "normalized": "a b-\u003ec-\u003ed b",
          "package": "transformers-compose",
          "signature": "m a-\u003es-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#v:mapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two monadic values from right to left. \u003ccode\u003emcompose f g\u003c/code\u003e is \n comparable to \u003ccode\u003ef . g\u003c/code\u003e but for monadic values. Compare with \u003ccode\u003eControl.Category..\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Compose.Class",
          "name": "mcompose",
          "package": "transformers-compose",
          "signature": "m a -\u003e n s -\u003e n a",
          "source": "src/Control-Monad-Compose-Class.html#mcompose",
          "type": "method"
        },
        "index": {
          "description": "Compose two monadic values from right to left mcompose is comparable to but for monadic values Compare with Control.Category",
          "hierarchy": "Control Monad Compose Class",
          "module": "Control.Monad.Compose.Class",
          "name": "mcompose",
          "normalized": "a b-\u003ec d-\u003ec b",
          "package": "transformers-compose",
          "signature": "m a-\u003en s-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-compose/docs/Control-Monad-Compose-Class.html#v:mcompose"
      }
    }
  ]
]