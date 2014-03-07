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
        "word": "either-unwrap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for probing and unwrapping values inside of Either.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Either.Unwrap",
          "name": "Unwrap",
          "package": "either-unwrap",
          "source": "src/Data-Either-Unwrap.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for probing and unwrapping values inside of Either",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "Unwrap",
          "package": "either-unwrap",
          "partial": "Unwrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eeitherM\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and two functions which return monads.\n If the argument takes the form \u003ccode\u003eLeft _\u003c/code\u003e then the element within is passed to the first\n function, otherwise the element within is passed to the second function. \n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "eitherM",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e (a -\u003e m c) -\u003e (b -\u003e m c) -\u003e m c",
          "source": "src/Data-Either-Unwrap.html#eitherM",
          "type": "function"
        },
        "index": {
          "description": "The eitherM function takes an Either value and two functions which return monads If the argument takes the form Left then the element within is passed to the first function otherwise the element within is passed to the second function",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "eitherM",
          "normalized": "Either a b-\u003e(a-\u003ec d)-\u003e(b-\u003ec d)-\u003ec d",
          "package": "either-unwrap",
          "signature": "Either a b-\u003e(a-\u003em c)-\u003e(b-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:eitherM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromLeft\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "fromLeft",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e a",
          "source": "src/Data-Either-Unwrap.html#fromLeft",
          "type": "function"
        },
        "index": {
          "description": "The fromLeft function extracts the element out of Left and throws an error if its argument take the form Right",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "fromLeft",
          "normalized": "Either a b-\u003ea",
          "package": "either-unwrap",
          "partial": "Left",
          "signature": "Either a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:fromLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromRight\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "fromRight",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e b",
          "source": "src/Data-Either-Unwrap.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "The fromRight function extracts the element out of Right and throws an error if its argument take the form Left",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "fromRight",
          "normalized": "Either a b-\u003eb",
          "package": "either-unwrap",
          "partial": "Right",
          "signature": "Either a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisLeft\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "isLeft",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Data-Either-Unwrap.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "The isLeft function returns True iff its argument is of the form Left",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "either-unwrap",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisRight\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "isRight",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Data-Either-Unwrap.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "The isRight function returns True iff its argument is of the form Right",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "either-unwrap",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapBoth\u003c/a\u003e\u003c/code\u003e function takes two functions and applies the first if iff the value\n takes the form 'Left _' and the second if the value takes the form 'Right _'.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "mapBoth",
          "package": "either-unwrap",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
          "source": "src/Data-Either-Unwrap.html#mapBoth",
          "type": "function"
        },
        "index": {
          "description": "The mapBoth function takes two functions and applies the first if iff the value takes the form Left and the second if the value takes the form Right",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "mapBoth",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "either-unwrap",
          "partial": "Both",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "mapLeft",
          "package": "either-unwrap",
          "signature": "(a -\u003e c) -\u003e Either a b -\u003e Either c b",
          "source": "src/Data-Either-Unwrap.html#mapLeft",
          "type": "function"
        },
        "index": {
          "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "mapLeft",
          "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "package": "either-unwrap",
          "partial": "Left",
          "signature": "(a-\u003ec)-\u003eEither a b-\u003eEither c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "mapRight",
          "package": "either-unwrap",
          "signature": "(b -\u003e c) -\u003e Either a b -\u003e Either a c",
          "source": "src/Data-Either-Unwrap.html#mapRight",
          "type": "function"
        },
        "index": {
          "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "mapRight",
          "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "package": "either-unwrap",
          "partial": "Right",
          "signature": "(b-\u003ec)-\u003eEither a b-\u003eEither a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "unlessLeft",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Either-Unwrap.html#unlessLeft",
          "type": "function"
        },
        "index": {
          "description": "synonym of whenRight",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "unlessLeft",
          "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
          "package": "either-unwrap",
          "partial": "Left",
          "signature": "Either a b-\u003e(b-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:unlessLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "unlessRight",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Either-Unwrap.html#unlessRight",
          "type": "function"
        },
        "index": {
          "description": "synonym of whenLeft",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "unlessRight",
          "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
          "package": "either-unwrap",
          "partial": "Right",
          "signature": "Either a b-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:unlessRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eLeft _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "whenLeft",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Either-Unwrap.html#whenLeft",
          "type": "function"
        },
        "index": {
          "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Left otherwise it does nothing",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "whenLeft",
          "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
          "package": "either-unwrap",
          "partial": "Left",
          "signature": "Either a b-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:whenLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eRight _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e",
          "module": "Data.Either.Unwrap",
          "name": "whenRight",
          "package": "either-unwrap",
          "signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Either-Unwrap.html#whenRight",
          "type": "function"
        },
        "index": {
          "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Right otherwise it does nothing",
          "hierarchy": "Data Either Unwrap",
          "module": "Data.Either.Unwrap",
          "name": "whenRight",
          "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
          "package": "either-unwrap",
          "partial": "Right",
          "signature": "Either a b-\u003e(b-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:whenRight"
      }
    }
  ]
]