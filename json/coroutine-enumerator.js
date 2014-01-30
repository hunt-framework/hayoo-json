[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a bridge between the Control.Monad.Coroutine and the Data.Enumerator monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "This module provides bridge between the Control.Monad.Coroutine and the Data.Enumerator monad transformers",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "coroutine-enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:coroutineEnumerator",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Coroutine (Yield [a]) m b -\u003e Enumerator a m c",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#coroutineEnumerator",
        "fct-type": "function",
        "title": "coroutineEnumerator"
      },
      "index": {
        "description": "Converts Coroutine parameterized with the Yield functor into an Enumerator",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "coroutineEnumerator",
        "normalized": "Coroutine(Yield[a])b c-\u003eEnumerator a b d",
        "package": "coroutine-enumerator",
        "partial": "Enumerator",
        "signature": "Coroutine(Yield[a])m b-\u003eEnumerator a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:coroutineIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor, treating an empty input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e, into an\n \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Coroutine (Await [a]) m (Either SomeException (b, [a])) -\u003e Iteratee a m b",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#coroutineIteratee",
        "fct-type": "function",
        "title": "coroutineIteratee"
      },
      "index": {
        "description": "Converts Coroutine parameterized with the Await functor treating an empty input chunk as EOF into an Iteratee",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "coroutineIteratee",
        "normalized": "Coroutine(Await[a])b(Either SomeException(c,[a]))-\u003eIteratee a b c",
        "package": "coroutine-enumerator",
        "partial": "Iteratee",
        "signature": "Coroutine(Await[a])m(Either SomeException(b,[a]))-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:enumeratorCoroutine",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e functor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Enumerator a (Coroutine (Yield [a]) m) () -\u003e Coroutine (Yield [a]) m ()",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#enumeratorCoroutine",
        "fct-type": "function",
        "title": "enumeratorCoroutine"
      },
      "index": {
        "description": "Converts an Enumerator into Coroutine parameterized with the Yield functor",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "enumeratorCoroutine",
        "normalized": "Enumerator a(Coroutine(Yield[a])b)()-\u003eCoroutine(Yield[a])b()",
        "package": "coroutine-enumerator",
        "partial": "Coroutine",
        "signature": "Enumerator a(Coroutine(Yield[a])m)()-\u003eCoroutine(Yield[a])m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:iterateeCoroutine",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e [x] functor. The coroutine treats an empty\n input chunk as \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Iteratee a m b -\u003e Coroutine (Await [a]) m (Either SomeException (b, [a]))",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#iterateeCoroutine",
        "fct-type": "function",
        "title": "iterateeCoroutine"
      },
      "index": {
        "description": "Converts an Iteratee into Coroutine parameterized with the Await functor The coroutine treats an empty input chunk as EOF",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "iterateeCoroutine",
        "normalized": "Iteratee a b c-\u003eCoroutine(Await[a])b(Either SomeException(c,[a]))",
        "package": "coroutine-enumerator",
        "partial": "Coroutine",
        "signature": "Iteratee a m b-\u003eCoroutine(Await[a])m(Either SomeException(b,[a]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:iterateeStreamCoroutine",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e x) functor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Iteratee a m b -\u003e Coroutine (Await (Stream a)) m (Either SomeException (b, Stream a))",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#iterateeStreamCoroutine",
        "fct-type": "function",
        "title": "iterateeStreamCoroutine"
      },
      "index": {
        "description": "Converts an Iteratee into Coroutine parameterized with the Await Stream functor",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "iterateeStreamCoroutine",
        "normalized": "Iteratee a b c-\u003eCoroutine(Await(Stream a))b(Either SomeException(c,Stream a))",
        "package": "coroutine-enumerator",
        "partial": "Stream Coroutine",
        "signature": "Iteratee a m b-\u003eCoroutine(Await(Stream a))m(Either SomeException(b,Stream a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coroutine-enumerator/docs/Control-Monad-Coroutine-Enumerator.html#v:streamCoroutineIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e parameterized with the \u003ccode\u003e\u003ca\u003eAwait\u003c/a\u003e\u003c/code\u003e functor into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Coroutine.Enumerator",
        "fct-package": "coroutine-enumerator",
        "fct-signature": "Coroutine (Await (Stream a)) m (Either SomeException (b, Stream a)) -\u003e Iteratee a m b",
        "fct-source": "src/Control-Monad-Coroutine-Enumerator.html#streamCoroutineIteratee",
        "fct-type": "function",
        "title": "streamCoroutineIteratee"
      },
      "index": {
        "description": "Converts Coroutine parameterized with the Await functor into an Iteratee",
        "hierarchy": "Control Monad Coroutine Enumerator",
        "module": "Control.Monad.Coroutine.Enumerator",
        "name": "streamCoroutineIteratee",
        "normalized": "Coroutine(Await(Stream a))b(Either SomeException(c,Stream a))-\u003eIteratee a b c",
        "package": "coroutine-enumerator",
        "partial": "Coroutine Iteratee",
        "signature": "Coroutine(Await(Stream a))m(Either SomeException(b,Stream a))-\u003eIteratee a m b"
      }
    }
  }
]