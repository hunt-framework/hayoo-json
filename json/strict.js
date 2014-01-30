[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict \u003ccode\u003eEither\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSame as the standard Haskell \u003ccode\u003eEither\u003c/code\u003e, but \u003ccode\u003eLeft _|_ = Right _|_ = _|_\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Strict-Either.html",
        "fct-type": "module",
        "title": "Either"
      },
      "index": {
        "description": "Strict Either Same as the standard Haskell Either but Left Right",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "Either",
        "normalized": "",
        "package": "strict",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#t:Either",
      "description": {
        "fct-descr": "\u003cp\u003eThe strict choice type.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Strict-Either.html#Either",
        "fct-type": "data",
        "title": "Either"
      },
      "index": {
        "description": "The strict choice type",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "Either",
        "normalized": "",
        "package": "strict",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:Left",
      "description": {
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Left !a",
        "fct-source": "src/Data-Strict-Either.html#Either",
        "fct-type": "function",
        "title": "Left"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "Left",
        "normalized": "",
        "package": "strict",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:Right",
      "description": {
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Right !b",
        "fct-source": "src/Data-Strict-Either.html#Either",
        "fct-type": "function",
        "title": "Right"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "Right",
        "normalized": "",
        "package": "strict",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:either",
      "description": {
        "fct-descr": "\u003cp\u003eCase analysis: if the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
        "fct-source": "src/Data-Strict-Either.html#either",
        "fct-type": "function",
        "title": "either"
      },
      "index": {
        "description": "Case analysis if the value is Left apply the first function to if it is Right apply the second function to",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "either",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
        "package": "strict",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and throws an error if the argument\n is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Either a b -\u003e a",
        "fct-source": "src/Data-Strict-Either.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "Extracts the element out of Left and throws an error if the argument is Right",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "fromLeft",
        "normalized": "Either a b-\u003ea",
        "package": "strict",
        "partial": "Left",
        "signature": "Either a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and throws an error if the argument\n is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Either a b -\u003e b",
        "fct-source": "src/Data-Strict-Either.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "Extracts the element out of Right and throws an error if the argument is Left",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "fromRight",
        "normalized": "Either a b-\u003eb",
        "package": "strict",
        "partial": "Right",
        "signature": "Either a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Strict-Either.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "Yields True iff the argument is of the form Left",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "strict",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Either.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Either",
        "fct-package": "strict",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Data-Strict-Either.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Yields True iff the argument is of the form Right",
        "hierarchy": "Data Strict Either",
        "module": "Data.Strict.Either",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "strict",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict \u003ccode\u003eMaybe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSame as the standard Haskell \u003ccode\u003eMaybe\u003c/code\u003e, but \u003ccode\u003eJust _|_ = _|_\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that strict \u003ccode\u003eMaybe\u003c/code\u003e is not a monad since\n \u003ccode\u003e return _|_ \u003e\u003e= f = _|_ \u003c/code\u003e\n which is not necessarily the same as \u003ccode\u003ef _|_\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Strict-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "Strict Maybe Same as the standard Haskell Maybe but Just Note that strict Maybe is not monad since return which is not necessarily the same as",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "strict",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#t:Maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of strict optional values.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Strict-Maybe.html#Maybe",
        "fct-type": "data",
        "title": "Maybe"
      },
      "index": {
        "description": "The type of strict optional values",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "strict",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:Just",
      "description": {
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "Just !a",
        "fct-source": "src/Data-Strict-Maybe.html#Maybe",
        "fct-type": "function",
        "title": "Just"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "Just",
        "normalized": "",
        "package": "strict",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:Nothing",
      "description": {
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "Nothing",
        "fct-source": "src/Data-Strict-Maybe.html#Maybe",
        "fct-type": "function",
        "title": "Nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "Nothing",
        "normalized": "",
        "package": "strict",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:fromJust",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and throws an error if the argument\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "Maybe a -\u003e a",
        "fct-source": "src/Data-Strict-Maybe.html#fromJust",
        "fct-type": "function",
        "title": "fromJust"
      },
      "index": {
        "description": "Extracts the element out of Just and throws an error if the argument is Nothing",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "fromJust",
        "normalized": "Maybe a-\u003ea",
        "package": "strict",
        "partial": "Just",
        "signature": "Maybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:fromMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a default value and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, yield the default value if the\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and extract the value out of the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-source": "src/Data-Strict-Maybe.html#fromMaybe",
        "fct-type": "function",
        "title": "fromMaybe"
      },
      "index": {
        "description": "Given default value and Maybe yield the default value if the Maybe argument is Nothing and extract the value out of the Just otherwise",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "fromMaybe",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "strict",
        "partial": "Maybe",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:isJust",
      "description": {
        "fct-descr": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "Maybe a -\u003e Bool",
        "fct-source": "src/Data-Strict-Maybe.html#isJust",
        "fct-type": "function",
        "title": "isJust"
      },
      "index": {
        "description": "Yields True iff the argument is of the form Just",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "isJust",
        "normalized": "Maybe a-\u003eBool",
        "package": "strict",
        "partial": "Just",
        "signature": "Maybe a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:isNothing",
      "description": {
        "fct-descr": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "Maybe a -\u003e Bool",
        "fct-source": "src/Data-Strict-Maybe.html#isNothing",
        "fct-type": "function",
        "title": "isNothing"
      },
      "index": {
        "description": "Yields True iff the argument is Nothing",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "isNothing",
        "normalized": "Maybe a-\u003eBool",
        "package": "strict",
        "partial": "Nothing",
        "signature": "Maybe a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Maybe.html#v:maybe",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a default value, a function and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value, yields the default\n value if the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and applies the function to the\n value stored in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Maybe",
        "fct-package": "strict",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
        "fct-source": "src/Data-Strict-Maybe.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "Given default value function and Maybe value yields the default value if the Maybe value is Nothing and applies the function to the value stored in the Just otherwise",
        "hierarchy": "Data Strict Maybe",
        "module": "Data.Strict.Maybe",
        "name": "maybe",
        "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
        "package": "strict",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict pairs.\n\u003c/p\u003e\u003cp\u003eSame as regular Haskell pairs, but \u003ccode\u003e(x :*: _|_) = (_|_ :*: y) = _|_\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Strict-Tuple.html",
        "fct-type": "module",
        "title": "Tuple"
      },
      "index": {
        "description": "Strict pairs Same as regular Haskell pairs but",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "strict",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#t::-33-:",
      "description": {
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "type",
        "fct-source": "src/Data-Strict-Tuple.html#%3A%21%3A",
        "fct-type": "type",
        "title": ":!:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": ":!:",
        "normalized": "",
        "package": "strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of strict pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "data",
        "fct-source": "src/Data-Strict-Tuple.html#Pair",
        "fct-type": "data",
        "title": "Pair"
      },
      "index": {
        "description": "The type of strict pairs",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "Pair",
        "normalized": "",
        "package": "strict",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#v::-33-:",
      "description": {
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "!a :!: !b",
        "fct-source": "src/Data-Strict-Tuple.html#Pair",
        "fct-type": "function",
        "title": ":!:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": ":!:",
        "normalized": "",
        "package": "strict",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#v:curry",
      "description": {
        "fct-descr": "\u003cp\u003eCurry a function on strict pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "(Pair a b -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Data-Strict-Tuple.html#curry",
        "fct-type": "function",
        "title": "curry"
      },
      "index": {
        "description": "Curry function on strict pairs",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "curry",
        "normalized": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "strict",
        "partial": "",
        "signature": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#v:fst",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first component of a strict pair.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "Pair a b -\u003e a",
        "fct-source": "src/Data-Strict-Tuple.html#fst",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "Extract the first component of strict pair",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "fst",
        "normalized": "Pair a b-\u003ea",
        "package": "strict",
        "partial": "",
        "signature": "Pair a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#v:snd",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second component of a strict pair.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "Pair a b -\u003e b",
        "fct-source": "src/Data-Strict-Tuple.html#snd",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "Extract the second component of strict pair",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "snd",
        "normalized": "Pair a b-\u003eb",
        "package": "strict",
        "partial": "",
        "signature": "Pair a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict-Tuple.html#v:uncurry",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a curried function to a function on strict pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Strict.Tuple",
        "fct-package": "strict",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Pair a b -\u003e c",
        "fct-source": "src/Data-Strict-Tuple.html#uncurry",
        "fct-type": "function",
        "title": "uncurry"
      },
      "index": {
        "description": "Convert curried function to function on strict pairs",
        "hierarchy": "Data Strict Tuple",
        "module": "Data.Strict.Tuple",
        "name": "uncurry",
        "normalized": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec",
        "package": "strict",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/Data-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict versions of some standard Haskell types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Strict",
        "fct-package": "strict",
        "fct-signature": "module",
        "fct-source": "src/Data-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict versions of some standard Haskell types",
        "hierarchy": "Data Strict",
        "module": "Data.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "strict",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/System-IO-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe standard IO input functions using strict IO.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "The standard IO input functions using strict IO",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "strict",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/System-IO-Strict.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read stirctly (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003estdin\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict",
        "fct-signature": "IO String",
        "fct-source": "src/System-IO-Strict.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "The getContents operation returns all user input as single string which is read stirctly same as hGetContents stdin",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "getContents",
        "normalized": "",
        "package": "strict",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/System-IO-Strict.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is immediate closed.\n\u003c/p\u003e\u003cp\u003eItems are read strictly from the input Handle.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisEOFError\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-Strict.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is immediate closed Items are read strictly from the input Handle This operation may fail with isEOFError if the end of file has been reached",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO String",
        "package": "strict",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/System-IO-Strict.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict",
        "fct-signature": "(String -\u003e String) -\u003e IO ()",
        "fct-source": "src/System-IO-Strict.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "interact",
        "normalized": "(String-\u003eString)-\u003eIO()",
        "package": "strict",
        "partial": "",
        "signature": "(String-\u003eString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict/docs/System-IO-Strict.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read strictly, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Strict",
        "fct-package": "strict",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/System-IO-Strict.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "The readFile function reads file and returns the contents of the file as string The file is read strictly as with getContents",
        "hierarchy": "System IO Strict",
        "module": "System.IO.Strict",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "strict",
        "partial": "File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  }
]