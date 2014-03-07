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
        "word": "strict-base-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe strict variant of the standard Haskell \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type and the\n corresponding variants of the functions from \u003ca\u003eData.Either\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the strict \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is not an applicative functor, and\n therefore also no monad. The reasons are the same as the ones for the\n strict \u003ccode\u003eMaybe\u003c/code\u003e type, which are explained in \u003ca\u003eData.Maybe.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Either.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "source": "src/Data-Either-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "The strict variant of the standard Haskell Either type and the corresponding variants of the functions from Data.Either Note that the strict Either type is not an applicative functor and therefore also no monad The reasons are the same as the ones for the strict Maybe type which are explained in Data.Maybe.Strict",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strict choice type.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "Either",
          "package": "strict-base-types",
          "type": "data"
        },
        "index": {
          "description": "The strict choice type",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "Either",
          "package": "strict-base-types",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Either.Strict",
          "name": "Left",
          "package": "strict-base-types",
          "signature": "Left !a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "Left",
          "package": "strict-base-types",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Either.Strict",
          "name": "Right",
          "package": "strict-base-types",
          "signature": "Right !b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "Right",
          "package": "strict-base-types",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003e_Left\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Lens.Prism\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "_Left",
          "package": "strict-base-types",
          "signature": "Prism (Either a c) (Either b c) a b",
          "source": "src/Data-Either-Strict.html#_Left",
          "type": "function"
        },
        "index": {
          "description": "Analogous to Left in Control.Lens.Prism",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "_Left",
          "package": "strict-base-types",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:_Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003e_Right\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Lens.Prism\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "_Right",
          "package": "strict-base-types",
          "signature": "Prism (Either c a) (Either c b) a b",
          "source": "src/Data-Either-Strict.html#_Right",
          "type": "function"
        },
        "index": {
          "description": "Analogous to Right in Control.Lens.Prism",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "_Right",
          "package": "strict-base-types",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:_Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis: if the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "either",
          "package": "strict-base-types",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Case analysis if the value is Left apply the first function to if it is Right apply the second function to",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "strict-base-types",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eLeft _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "isLeft",
          "package": "strict-base-types",
          "signature": "Either a b -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Yields True iff the argument is of the form Left",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "strict-base-types",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eRight _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "isRight",
          "package": "strict-base-types",
          "signature": "Either a b -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Yields True iff the argument is of the form Right",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "strict-base-types",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003elefts\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Either\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "lefts",
          "package": "strict-base-types",
          "signature": "[Either a b] -\u003e [a]",
          "source": "src/Data-Either-Strict.html#lefts",
          "type": "function"
        },
        "index": {
          "description": "Analogous to lefts in Data.Either",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "lefts",
          "normalized": "[Either a b]-\u003e[a]",
          "package": "strict-base-types",
          "signature": "[Either a b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003epartitionEithers\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Either\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "partitionEithers",
          "package": "strict-base-types",
          "signature": "[Either a b] -\u003e ([a], [b])",
          "source": "src/Data-Either-Strict.html#partitionEithers",
          "type": "function"
        },
        "index": {
          "description": "Analogous to partitionEithers in Data.Either",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "partitionEithers",
          "normalized": "[Either a b]-\u003e([a],[b])",
          "package": "strict-base-types",
          "partial": "Eithers",
          "signature": "[Either a b]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:partitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erights\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Either\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Either.Strict",
          "name": "rights",
          "package": "strict-base-types",
          "signature": "[Either a b] -\u003e [b]",
          "source": "src/Data-Either-Strict.html#rights",
          "type": "function"
        },
        "index": {
          "description": "Analogous to rights in Data.Either",
          "hierarchy": "Data Either Strict",
          "module": "Data.Either.Strict",
          "name": "rights",
          "normalized": "[Either a b]-\u003e[b]",
          "package": "strict-base-types",
          "signature": "[Either a b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Either-Strict.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe strict variant of the standard Haskell \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type and the\n corresponding variants of the functions from \u003ca\u003eData.Maybe\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that in contrast to the standard lazy \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type, the strict\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is not an applicative functor, and therefore also not a monad.\n The problem is the \u003cem\u003ehomomorphism\u003c/em\u003e law, which states that\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003epure\u003c/code\u003e f \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003epure\u003c/code\u003e x = \u003ccode\u003epure\u003c/code\u003e (f x)  -- must hold for all f\u003c/pre\u003e\u003cp\u003eThis law does not hold for the expected applicative functor instance of\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, as this instance does not satisfy \u003ccode\u003epure f \u003c*\u003e pure _|_ = pure (f\n _|_)\u003c/code\u003e for \u003ccode\u003ef = const\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Maybe.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "source": "src/Data-Maybe-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "The strict variant of the standard Haskell Maybe type and the corresponding variants of the functions from Data.Maybe Note that in contrast to the standard lazy Maybe type the strict Maybe type is not an applicative functor and therefore also not monad The problem is the homomorphism law which states that pure pure pure must hold for all This law does not hold for the expected applicative functor instance of Maybe as this instance does not satisfy pure pure pure for const",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of strict optional values.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "Maybe",
          "package": "strict-base-types",
          "type": "data"
        },
        "index": {
          "description": "The type of strict optional values",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "Maybe",
          "package": "strict-base-types",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Maybe.Strict",
          "name": "Just",
          "package": "strict-base-types",
          "signature": "Just !a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "Just",
          "package": "strict-base-types",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Maybe.Strict",
          "name": "Nothing",
          "package": "strict-base-types",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "Nothing",
          "package": "strict-base-types",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003e_Just\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Lens.Prism\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "_Just",
          "package": "strict-base-types",
          "signature": "Prism (Maybe a) (Maybe b) a b",
          "source": "src/Data-Maybe-Strict.html#_Just",
          "type": "function"
        },
        "index": {
          "description": "Analogous to Just in Control.Lens.Prism",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "_Just",
          "package": "strict-base-types",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:_Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003e_Nothing\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Lens.Prism\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "_Nothing",
          "package": "strict-base-types",
          "signature": "Prism' (Maybe a) ()",
          "source": "src/Data-Maybe-Strict.html#_Nothing",
          "type": "function"
        },
        "index": {
          "description": "Analogous to Nothing in Control.Lens.Prism",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "_Nothing",
          "normalized": "Prism'(Maybe a)()",
          "package": "strict-base-types",
          "partial": "Nothing",
          "signature": "Prism'(Maybe a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:_Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Maybe\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "catMaybes",
          "package": "strict-base-types",
          "signature": "[Maybe a] -\u003e [a]",
          "source": "src/Data-Maybe-Strict.html#catMaybes",
          "type": "function"
        },
        "index": {
          "description": "Analogous to catMaybes in Data.Maybe",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "strict-base-types",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the element out of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and throws an error if the argument\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "fromJust",
          "package": "strict-base-types",
          "signature": "Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the element out of Just and throws an error if the argument is Nothing",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "strict-base-types",
          "partial": "Just",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a default value and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, yield the default value if the\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and extract the value out of the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n otherwise.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "fromMaybe",
          "package": "strict-base-types",
          "signature": "a -\u003e Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Given default value and Maybe yield the default value if the Maybe argument is Nothing and extract the value out of the Just otherwise",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "strict-base-types",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is of the form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "isJust",
          "package": "strict-base-types",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Yields True iff the argument is of the form Just",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "isJust",
          "normalized": "Maybe a-\u003eBool",
          "package": "strict-base-types",
          "partial": "Just",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "isNothing",
          "package": "strict-base-types",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Yields True iff the argument is Nothing",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "isNothing",
          "normalized": "Maybe a-\u003eBool",
          "package": "strict-base-types",
          "partial": "Nothing",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Maybe\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "listToMaybe",
          "package": "strict-base-types",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Data-Maybe-Strict.html#listToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Analogous to listToMaybe in Data.Maybe",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "strict-base-types",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Maybe\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "mapMaybe",
          "package": "strict-base-types",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Maybe-Strict.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Analogous to mapMaybe in Data.Maybe",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "strict-base-types",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a default value, a function and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value, yields the default\n value if the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and applies the function to the\n value stored in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "maybe",
          "package": "strict-base-types",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Given default value function and Maybe value yields the default value if the Maybe value is Nothing and applies the function to the value stored in the Just otherwise",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "strict-base-types",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eData.Maybe\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe.Strict",
          "name": "maybeToList",
          "package": "strict-base-types",
          "signature": "Maybe a -\u003e [a]",
          "source": "src/Data-Maybe-Strict.html#maybeToList",
          "type": "function"
        },
        "index": {
          "description": "Analogous to maybeToList in Data.Maybe",
          "hierarchy": "Data Maybe Strict",
          "module": "Data.Maybe.Strict",
          "name": "maybeToList",
          "normalized": "Maybe a-\u003e[a]",
          "package": "strict-base-types",
          "partial": "To List",
          "signature": "Maybe a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Maybe-Strict.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe strict variant of the standard Haskell pairs and the corresponding\n variants of the functions from \u003ca\u003eData.Tuple\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tuple.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "source": "src/Data-Tuple-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "The strict variant of the standard Haskell pairs and the corresponding variants of the functions from Data.Tuple",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "Strict",
          "package": "strict-base-types",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of strict pairs.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "Pair",
          "package": "strict-base-types",
          "type": "data"
        },
        "index": {
          "description": "The type of strict pairs",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "Pair",
          "package": "strict-base-types",
          "partial": "Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Strict",
          "name": ":!:",
          "package": "strict-base-types",
          "signature": "a :!: !b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": ":!:",
          "package": "strict-base-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v::-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurry a function on strict pairs.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "curry",
          "package": "strict-base-types",
          "signature": "(Pair a b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Curry function on strict pairs",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "curry",
          "normalized": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "strict-base-types",
          "signature": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a strict pair.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "fst",
          "package": "strict-base-types",
          "signature": "Pair a b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of strict pair",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "fst",
          "normalized": "Pair a b-\u003ea",
          "package": "strict-base-types",
          "signature": "Pair a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a strict pair.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "snd",
          "package": "strict-base-types",
          "signature": "Pair a b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of strict pair",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "snd",
          "normalized": "Pair a b-\u003eb",
          "package": "strict-base-types",
          "signature": "Pair a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalagous to \u003ccode\u003e\u003ca\u003eswap\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Tuple\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "swap",
          "package": "strict-base-types",
          "signature": "Pair a b -\u003e Pair b a",
          "source": "src/Data-Tuple-Strict.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Analagous to swap from Data.Tuple",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "swap",
          "normalized": "Pair a b-\u003ePair b a",
          "package": "strict-base-types",
          "signature": "Pair a b-\u003ePair b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a curried function to a function on strict pairs.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "uncurry",
          "package": "strict-base-types",
          "signature": "(a -\u003e b -\u003e c) -\u003e Pair a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Convert curried function to function on strict pairs",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec",
          "package": "strict-base-types",
          "signature": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip for stict pairs into a (lazy) pair of lists.\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "unzip",
          "package": "strict-base-types",
          "signature": "[Pair a b] -\u003e ([a], [b])",
          "source": "src/Data-Tuple-Strict.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip for stict pairs into lazy pair of lists",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "unzip",
          "normalized": "[Pair a b]-\u003e([a],[b])",
          "package": "strict-base-types",
          "signature": "[Pair a b]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip for strict pairs (defined with zipWith).\n\u003c/p\u003e",
          "module": "Data.Tuple.Strict",
          "name": "zip",
          "package": "strict-base-types",
          "signature": "[a] -\u003e [b] -\u003e [Pair a b]",
          "source": "src/Data-Tuple-Strict.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip for strict pairs defined with zipWith",
          "hierarchy": "Data Tuple Strict",
          "module": "Data.Tuple.Strict",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[Pair a b]",
          "package": "strict-base-types",
          "signature": "[a]-\u003e[b]-\u003e[Pair a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-base-types/docs/Data-Tuple-Strict.html#v:zip"
      }
    }
  ]
]