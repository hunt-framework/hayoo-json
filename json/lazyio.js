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
        "word": "lazyio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCaution:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Although this module calls \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e for you,\n  it cannot take the responsibility from you.\n  Using this module is still as unsafe as calling \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e manually.\n  Thus we recommend to wrap the lazy I/O monad\n  into a custom \u003ccode\u003enewtype\u003c/code\u003e with a restricted set of operations\n  which is considered safe for interleaving I/O actions.\n\u003c/li\u003e\u003cli\u003e Operations like \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e are usually not safe within this monad,\n  since they will only get executed, if their result is consumed.\n  Since this result is often \u003ccode\u003e()\u003c/code\u003e this is quite unusual.\n  It will also often be the case, that not the complete output is read,\n  and thus the closing action is never reached.\n  It is certainly best to call a closing action after you wrote\n  the complete result of the lazy I/O monad somewhere.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ereturn a :: LazyIO a\u003c/code\u003e is very different\n  from \u003ccode\u003einterleave (return a) :: LazyIO a\u003c/code\u003e.\n  The first one does not trigger previous IO actions,\n  whereas the second one does.\n  This is the reason why we do not instantiate \u003ccode\u003eMonadIO\u003c/code\u003e\n  with \u003ccode\u003eliftIO = LazyIO.interleave\u003c/code\u003e,\n  despite the matching type signatures.\n  One of the \u003ccode\u003eMonadIO\u003c/code\u003e laws explicitly requires \u003ccode\u003ereturn a = liftIO (return a)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e We advise to lift strict IO functions into the lazy IO monad.\n  Lifting a function like \u003ccode\u003ereadFile\u003c/code\u003e may lead to unintended interleaving.\n  In the future we may enforce that using the \u003ccode\u003edeepseq\u003c/code\u003e package.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse it like\n\u003c/p\u003e\u003cpre\u003e import qualified System.IO.Lazy as LazyIO\n\n LazyIO.run $ do\n    LazyIO.interleave $ putStr \"enter first line:\"\n    x \u003c- LazyIO.interleave getLine\n    LazyIO.interleave $ putStr \"enter second line:\"\n    y \u003c- LazyIO.interleave getLine\n    return x\n\u003c/pre\u003e\u003cp\u003eBecause only the first entered line is needed,\nonly the first prompt and the first \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e is executed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Lazy",
          "name": "Lazy",
          "package": "lazyio",
          "source": "src/System-IO-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Caution Although this module calls unsafeInterleaveIO for you it cannot take the responsibility from you Using this module is still as unsafe as calling unsafeInterleaveIO manually Thus we recommend to wrap the lazy monad into custom newtype with restricted set of operations which is considered safe for interleaving actions Operations like hClose are usually not safe within this monad since they will only get executed if their result is consumed Since this result is often this is quite unusual It will also often be the case that not the complete output is read and thus the closing action is never reached It is certainly best to call closing action after you wrote the complete result of the lazy monad somewhere return LazyIO is very different from interleave return LazyIO The first one does not trigger previous IO actions whereas the second one does This is the reason why we do not instantiate MonadIO with liftIO LazyIO.interleave despite the matching type signatures One of the MonadIO laws explicitly requires return liftIO return We advise to lift strict IO functions into the lazy IO monad Lifting function like readFile may lead to unintended interleaving In the future we may enforce that using the deepseq package Use it like import qualified System.IO.Lazy as LazyIO LazyIO.run do LazyIO.interleave putStr enter first line LazyIO.interleave getLine LazyIO.interleave putStr enter second line LazyIO.interleave getLine return Because only the first entered line is needed only the first prompt and the first getLine is executed",
          "hierarchy": "System IO Lazy",
          "module": "System.IO.Lazy",
          "name": "Lazy",
          "package": "lazyio",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lazyio/docs/System-IO-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy",
          "name": "T",
          "package": "lazyio",
          "source": "src/System-IO-Lazy.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Lazy",
          "module": "System.IO.Lazy",
          "name": "T",
          "package": "lazyio",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lazyio/docs/System-IO-Lazy.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy",
          "name": "interleave",
          "package": "lazyio",
          "signature": "IO a -\u003e T a",
          "source": "src/System-IO-Lazy.html#interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Lazy",
          "module": "System.IO.Lazy",
          "name": "interleave",
          "normalized": "IO a-\u003eT a",
          "package": "lazyio",
          "signature": "IO a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazyio/docs/System-IO-Lazy.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy",
          "name": "run",
          "package": "lazyio",
          "signature": "T a -\u003e IO a",
          "source": "src/System-IO-Lazy.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Lazy",
          "module": "System.IO.Lazy",
          "name": "run",
          "normalized": "T a-\u003eIO a",
          "package": "lazyio",
          "signature": "T a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazyio/docs/System-IO-Lazy.html#v:run"
      }
    }
  ]
]