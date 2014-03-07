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
        "word": "coroutine-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a bridge between the Control.Monad.Coroutine and the Data.Enumerator monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "Enumerator",
          "package": "coroutine-enumerator",
          "source": "src/Control-Monad-Coroutine-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides bridge between the Control.Monad.Coroutine and the Data.Enumerator monad transformers",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "Enumerator",
          "package": "coroutine-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "coroutineEnumerator",
          "package": "coroutine-enumerator",
          "signature": "Coroutine (Yield [a]) m b -\u003e Enumerator a m c",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#coroutineEnumerator",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Yield functor into an Enumerator",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "coroutineEnumerator",
          "normalized": "Coroutine(Yield[a])b c-\u003eEnumerator a b d",
          "package": "coroutine-enumerator",
          "partial": "Enumerator",
          "signature": "Coroutine(Yield[a])m b-\u003eEnumerator a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:coroutineEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor, treating an empty input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e, into an\n \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "coroutineIteratee",
          "package": "coroutine-enumerator",
          "signature": "Coroutine (Await [a]) m (Either SomeException (b, [a])) -\u003e Iteratee a m b",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#coroutineIteratee",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Await functor treating an empty input chunk as EOF into an Iteratee",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "coroutineIteratee",
          "normalized": "Coroutine(Await[a])b(Either SomeException(c,[a]))-\u003eIteratee a b c",
          "package": "coroutine-enumerator",
          "partial": "Iteratee",
          "signature": "Coroutine(Await[a])m(Either SomeException(b,[a]))-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:coroutineIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "enumeratorCoroutine",
          "package": "coroutine-enumerator",
          "signature": "Enumerator a (Coroutine (Yield [a]) m) () -\u003e Coroutine (Yield [a]) m ()",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#enumeratorCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Enumerator into Coroutine parameterized with the Yield functor",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "enumeratorCoroutine",
          "normalized": "Enumerator a(Coroutine(Yield[a])b)()-\u003eCoroutine(Yield[a])b()",
          "package": "coroutine-enumerator",
          "partial": "Coroutine",
          "signature": "Enumerator a(Coroutine(Yield[a])m)()-\u003eCoroutine(Yield[a])m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:enumeratorCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor. The coroutine treats an empty\n input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "iterateeCoroutine",
          "package": "coroutine-enumerator",
          "signature": "Iteratee a m b -\u003e Coroutine (Await [a]) m (Either SomeException (b, [a]))",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#iterateeCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Iteratee into Coroutine parameterized with the Await functor The coroutine treats an empty input chunk as EOF",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "iterateeCoroutine",
          "normalized": "Iteratee a b c-\u003eCoroutine(Await[a])b(Either SomeException(c,[a]))",
          "package": "coroutine-enumerator",
          "partial": "Coroutine",
          "signature": "Iteratee a m b-\u003eCoroutine(Await[a])m(Either SomeException(b,[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:iterateeCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e x) functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "iterateeStreamCoroutine",
          "package": "coroutine-enumerator",
          "signature": "Iteratee a m b -\u003e Coroutine (Await (Stream a)) m (Either SomeException (b, Stream a))",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#iterateeStreamCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Iteratee into Coroutine parameterized with the Await Stream functor",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "iterateeStreamCoroutine",
          "normalized": "Iteratee a b c-\u003eCoroutine(Await(Stream a))b(Either SomeException(c,Stream a))",
          "package": "coroutine-enumerator",
          "partial": "Stream Coroutine",
          "signature": "Iteratee a m b-\u003eCoroutine(Await(Stream a))m(Either SomeException(b,Stream a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:iterateeStreamCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "streamCoroutineIteratee",
          "package": "coroutine-enumerator",
          "signature": "Coroutine (Await (Stream a)) m (Either SomeException (b, Stream a)) -\u003e Iteratee a m b",
          "source": "src/Control-Monad-Coroutine-Enumerator.html#streamCoroutineIteratee",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Await functor into an Iteratee",
          "hierarchy": "Control Monad Coroutine Enumerator",
          "module": "Control.Monad.Coroutine.Enumerator",
          "name": "streamCoroutineIteratee",
          "normalized": "Coroutine(Await(Stream a))b(Either SomeException(c,Stream a))-\u003eIteratee a b c",
          "package": "coroutine-enumerator",
          "partial": "Coroutine Iteratee",
          "signature": "Coroutine(Await(Stream a))m(Either SomeException(b,Stream a))-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:streamCoroutineIteratee"
      }
    }
  ]
]