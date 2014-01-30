[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for probing and unwrapping values inside of Either.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "module",
        "fct-source": "src/Data-Either-Unwrap.html",
        "fct-type": "module",
        "title": "Unwrap"
      },
      "index": {
        "description": "Functions for probing and unwrapping values inside of Either",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "Unwrap",
        "normalized": "",
        "package": "either-unwrap",
        "partial": "Unwrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:eitherM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eeitherM\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and two functions which return monads.\n If the argument takes the form \u003ccode\u003eLeft _\u003c/code\u003e then the element within is passed to the first\n function, otherwise the element within is passed to the second function. \n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e (a -\u003e m c) -\u003e (b -\u003e m c) -\u003e m c",
        "fct-source": "src/Data-Either-Unwrap.html#eitherM",
        "fct-type": "function",
        "title": "eitherM"
      },
      "index": {
        "description": "The eitherM function takes an Either value and two functions which return monads If the argument takes the form Left then the element within is passed to the first function otherwise the element within is passed to the second function",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "eitherM",
        "normalized": "Either a b-\u003e(a-\u003ec d)-\u003e(b-\u003ec d)-\u003ec d",
        "package": "either-unwrap",
        "partial": "",
        "signature": "Either a b-\u003e(a-\u003em c)-\u003e(b-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromLeft\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e a",
        "fct-source": "src/Data-Either-Unwrap.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "The fromLeft function extracts the element out of Left and throws an error if its argument take the form Right",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "fromLeft",
        "normalized": "Either a b-\u003ea",
        "package": "either-unwrap",
        "partial": "Left",
        "signature": "Either a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromRight\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument take the form  \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e b",
        "fct-source": "src/Data-Either-Unwrap.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "The fromRight function extracts the element out of Right and throws an error if its argument take the form Left",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "fromRight",
        "normalized": "Either a b-\u003eb",
        "package": "either-unwrap",
        "partial": "Right",
        "signature": "Either a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisLeft\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Either-Unwrap.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "The isLeft function returns True iff its argument is of the form Left",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "either-unwrap",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisRight\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the form \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Either-Unwrap.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "The isRight function returns True iff its argument is of the form Right",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "either-unwrap",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapBoth",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapBoth\u003c/a\u003e\u003c/code\u003e function takes two functions and applies the first if iff the value\n takes the form 'Left _' and the second if the value takes the form 'Right _'.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
        "fct-source": "src/Data-Either-Unwrap.html#mapBoth",
        "fct-type": "function",
        "title": "mapBoth"
      },
      "index": {
        "description": "The mapBoth function takes two functions and applies the first if iff the value takes the form Left and the second if the value takes the form Right",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "mapBoth",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
        "package": "either-unwrap",
        "partial": "Both",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "(a -\u003e c) -\u003e Either a b -\u003e Either c b",
        "fct-source": "src/Data-Either-Unwrap.html#mapLeft",
        "fct-type": "function",
        "title": "mapLeft"
      },
      "index": {
        "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "mapLeft",
        "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
        "package": "either-unwrap",
        "partial": "Left",
        "signature": "(a-\u003ec)-\u003eEither a b-\u003eEither c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:mapRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapLeft\u003c/a\u003e\u003c/code\u003e function takes a function and applies it to an Either value\n iff the value takes the form 'Left _'.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "(b -\u003e c) -\u003e Either a b -\u003e Either a c",
        "fct-source": "src/Data-Either-Unwrap.html#mapRight",
        "fct-type": "function",
        "title": "mapRight"
      },
      "index": {
        "description": "The mapLeft function takes function and applies it to an Either value iff the value takes the form Left",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "mapRight",
        "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
        "package": "either-unwrap",
        "partial": "Right",
        "signature": "(b-\u003ec)-\u003eEither a b-\u003eEither a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:unlessLeft",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Unwrap.html#unlessLeft",
        "fct-type": "function",
        "title": "unlessLeft"
      },
      "index": {
        "description": "synonym of whenRight",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "unlessLeft",
        "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
        "package": "either-unwrap",
        "partial": "Left",
        "signature": "Either a b-\u003e(b-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:unlessRight",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym of \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Unwrap.html#unlessRight",
        "fct-type": "function",
        "title": "unlessRight"
      },
      "index": {
        "description": "synonym of whenLeft",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "unlessRight",
        "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
        "package": "either-unwrap",
        "partial": "Right",
        "signature": "Either a b-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:whenLeft",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eLeft _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Unwrap.html#whenLeft",
        "fct-type": "function",
        "title": "whenLeft"
      },
      "index": {
        "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Left otherwise it does nothing",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "whenLeft",
        "normalized": "Either a b-\u003e(a-\u003ec())-\u003ec()",
        "package": "either-unwrap",
        "partial": "Left",
        "signature": "Either a b-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/either-unwrap/docs/Data-Either-Unwrap.html#v:whenRight",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewhenLeft\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value and a function which returns a monad.\n The monad is only executed when the given argument takes the form \u003ccode\u003eRight _\u003c/code\u003e, otherwise\n it does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.Either.Unwrap",
        "fct-package": "either-unwrap",
        "fct-signature": "Either a b -\u003e (b -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Either-Unwrap.html#whenRight",
        "fct-type": "function",
        "title": "whenRight"
      },
      "index": {
        "description": "The whenLeft function takes an Either value and function which returns monad The monad is only executed when the given argument takes the form Right otherwise it does nothing",
        "hierarchy": "Data Either Unwrap",
        "module": "Data.Either.Unwrap",
        "name": "whenRight",
        "normalized": "Either a b-\u003e(b-\u003ec())-\u003ec()",
        "package": "either-unwrap",
        "partial": "Right",
        "signature": "Either a b-\u003e(b-\u003em())-\u003em()"
      }
    }
  }
]