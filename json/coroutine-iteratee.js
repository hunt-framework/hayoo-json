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
        "word": "coroutine-iteratee"
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
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "Iteratee",
          "package": "coroutine-iteratee",
          "source": "src/Control-Monad-Coroutine-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides bridge between the Control.Monad.Coroutine and the Data.Enumerator monad transformers",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "Iteratee",
          "package": "coroutine-iteratee",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "coroutineEnumerator",
          "package": "coroutine-iteratee",
          "signature": "Coroutine (Yield [s]) m b -\u003e Enumerator s m c",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#coroutineEnumerator",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Yield functor into an Enumerator",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "coroutineEnumerator",
          "normalized": "Coroutine(Yield[a])b c-\u003eEnumerator a b d",
          "package": "coroutine-iteratee",
          "partial": "Enumerator",
          "signature": "Coroutine(Yield[s])m b-\u003eEnumerator s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:coroutineEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor, treating an empty input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e, into an\n \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "coroutineIteratee",
          "package": "coroutine-iteratee",
          "signature": "Coroutine (Await [s]) m (Either SomeException (b, [s])) -\u003e Iteratee s m b",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#coroutineIteratee",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Await functor treating an empty input chunk as EOF into an Iteratee",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "coroutineIteratee",
          "normalized": "Coroutine(Await[a])b(Either SomeException(c,[a]))-\u003eIteratee a b c",
          "package": "coroutine-iteratee",
          "partial": "Iteratee",
          "signature": "Coroutine(Await[s])m(Either SomeException(b,[s]))-\u003eIteratee s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:coroutineIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "enumeratorCoroutine",
          "package": "coroutine-iteratee",
          "signature": "Enumerator s (Coroutine (Yield [s]) m) () -\u003e Coroutine (Yield [s]) m ()",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#enumeratorCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Enumerator into Coroutine parameterized with the Yield functor",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "enumeratorCoroutine",
          "normalized": "Enumerator a(Coroutine(Yield[a])b)()-\u003eCoroutine(Yield[a])b()",
          "package": "coroutine-iteratee",
          "partial": "Coroutine",
          "signature": "Enumerator s(Coroutine(Yield[s])m)()-\u003eCoroutine(Yield[s])m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:enumeratorCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor. The coroutine treats an empty\n input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "iterateeCoroutine",
          "package": "coroutine-iteratee",
          "signature": "Iteratee s m b -\u003e Coroutine (Await [s]) m (Either SomeException (b, [s]))",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#iterateeCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Iteratee into Coroutine parameterized with the Await functor The coroutine treats an empty input chunk as EOF",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "iterateeCoroutine",
          "normalized": "Iteratee a b c-\u003eCoroutine(Await[a])b(Either SomeException(c,[a]))",
          "package": "coroutine-iteratee",
          "partial": "Coroutine",
          "signature": "Iteratee s m b-\u003eCoroutine(Await[s])m(Either SomeException(b,[s]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:iterateeCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e x) functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "iterateeStreamCoroutine",
          "package": "coroutine-iteratee",
          "signature": "Iteratee s m b -\u003e Coroutine (Await (Stream s)) m (Either SomeException (b, Stream s))",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#iterateeStreamCoroutine",
          "type": "function"
        },
        "index": {
          "description": "Converts an Iteratee into Coroutine parameterized with the Await Stream functor",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "iterateeStreamCoroutine",
          "normalized": "Iteratee a b c-\u003eCoroutine(Await(Stream a))b(Either SomeException(c,Stream a))",
          "package": "coroutine-iteratee",
          "partial": "Stream Coroutine",
          "signature": "Iteratee s m b-\u003eCoroutine(Await(Stream s))m(Either SomeException(b,Stream s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:iterateeStreamCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "streamCoroutineIteratee",
          "package": "coroutine-iteratee",
          "signature": "Coroutine (Await (Stream s)) m (Either SomeException (b, Stream s)) -\u003e Iteratee s m b",
          "source": "src/Control-Monad-Coroutine-Iteratee.html#streamCoroutineIteratee",
          "type": "function"
        },
        "index": {
          "description": "Converts Coroutine parameterized with the Await functor into an Iteratee",
          "hierarchy": "Control Monad Coroutine Iteratee",
          "module": "Control.Monad.Coroutine.Iteratee",
          "name": "streamCoroutineIteratee",
          "normalized": "Coroutine(Await(Stream a))b(Either SomeException(c,Stream a))-\u003eIteratee a b c",
          "package": "coroutine-iteratee",
          "partial": "Coroutine Iteratee",
          "signature": "Coroutine(Await(Stream s))m(Either SomeException(b,Stream s))-\u003eIteratee s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-iteratee/docs/Control-Monad-Coroutine-Iteratee.html#v:streamCoroutineIteratee"
      }
    }
  ]
]