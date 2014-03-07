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
        "word": "kure"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA bi-directional translation is a translation that can be applied in either direction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "BiTranslate",
          "package": "kure",
          "source": "src/Language-KURE-BiTranslate.html",
          "type": "module"
        },
        "index": {
          "description": "bi-directional translation is translation that can be applied in either direction",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "BiTranslate",
          "package": "kure",
          "partial": "Bi Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e that shares the same source and target type.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "BiRewrite",
          "package": "kure",
          "source": "src/Language-KURE-BiTranslate.html#BiRewrite",
          "type": "type"
        },
        "index": {
          "description": "BiTranslate that shares the same source and target type",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "BiRewrite",
          "package": "kure",
          "partial": "Bi Rewrite",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#t:BiRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn undirected \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "BiTranslate",
          "package": "kure",
          "source": "src/Language-KURE-BiTranslate.html#BiTranslate",
          "type": "data"
        },
        "index": {
          "description": "An undirected Translate",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "BiTranslate",
          "package": "kure",
          "partial": "Bi Translate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#t:BiTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the backward \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "backwardT",
          "package": "kure",
          "signature": "BiTranslate c m a b -\u003e Translate c m b a",
          "source": "src/Language-KURE-BiTranslate.html#backwardT",
          "type": "function"
        },
        "index": {
          "description": "Extract the backward Translate from BiTranslate",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "backwardT",
          "normalized": "BiTranslate a b c d-\u003eTranslate a b d c",
          "package": "kure",
          "signature": "BiTranslate c m a b-\u003eTranslate c m b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:backwardT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the argument translation before \u003cem\u003eeither\u003c/em\u003e direction of the bidirectional rewrite.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "beforeBiR",
          "package": "kure",
          "signature": "Translate c m a b -\u003e (b -\u003e BiRewrite c m a) -\u003e BiRewrite c m a",
          "source": "src/Language-KURE-BiTranslate.html#beforeBiR",
          "type": "function"
        },
        "index": {
          "description": "Perform the argument translation before either direction of the bidirectional rewrite",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "beforeBiR",
          "normalized": "Translate a b c d-\u003e(d-\u003eBiRewrite a b c)-\u003eBiRewrite a b c",
          "package": "kure",
          "partial": "Bi",
          "signature": "Translate c m a b-\u003e(b-\u003eBiRewrite c m a)-\u003eBiRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:beforeBiR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e from two opposite \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "bidirectional",
          "package": "kure",
          "signature": "Translate c m a b -\u003e Translate c m b a -\u003e BiTranslate c m a b",
          "source": "src/Language-KURE-BiTranslate.html#bidirectional",
          "type": "function"
        },
        "index": {
          "description": "Construct BiTranslate from two opposite Translate",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "bidirectional",
          "normalized": "Translate a b c d-\u003eTranslate a b d c-\u003eBiTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m a b-\u003eTranslate c m b a-\u003eBiTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:bidirectional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the forward \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "forwardT",
          "package": "kure",
          "signature": "BiTranslate c m a b -\u003e Translate c m a b",
          "source": "src/Language-KURE-BiTranslate.html#forwardT",
          "type": "function"
        },
        "index": {
          "description": "Extract the forward Translate from BiTranslate",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "forwardT",
          "normalized": "BiTranslate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "BiTranslate c m a b-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:forwardT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the forwards and backwards directions of a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "invertBiT",
          "package": "kure",
          "signature": "BiTranslate c m a b -\u003e BiTranslate c m b a",
          "source": "src/Language-KURE-BiTranslate.html#invertBiT",
          "type": "function"
        },
        "index": {
          "description": "Invert the forwards and backwards directions of BiTranslate",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "invertBiT",
          "normalized": "BiTranslate a b c d-\u003eBiTranslate a b d c",
          "package": "kure",
          "partial": "Bi",
          "signature": "BiTranslate c m a b-\u003eBiTranslate c m b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:invertBiT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry the \u003ccode\u003e\u003ca\u003eBiRewrite\u003c/a\u003e\u003c/code\u003e forwards, then backwards if that fails.\n   Useful when you know which rule you want to apply, but not which direction to apply it in.\n\u003c/p\u003e",
          "module": "Language.KURE.BiTranslate",
          "name": "whicheverR",
          "package": "kure",
          "signature": "BiRewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-BiTranslate.html#whicheverR",
          "type": "function"
        },
        "index": {
          "description": "Try the BiRewrite forwards then backwards if that fails Useful when you know which rule you want to apply but not which direction to apply it in",
          "hierarchy": "Language KURE BiTranslate",
          "module": "Language.KURE.BiTranslate",
          "name": "whicheverR",
          "normalized": "BiRewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "BiRewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:whicheverR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some utility arrow routing combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "Arrow",
          "package": "kure",
          "source": "src/Language-KURE-Combinators-Arrow.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some utility arrow routing combinators",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "Arrow",
          "package": "kure",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a pure function to the argument to an arrow.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "argument",
          "package": "kure",
          "signature": "(a -\u003e b) -\u003e bi b c -\u003e bi a c",
          "source": "src/Language-KURE-Combinators-Arrow.html#argument",
          "type": "function"
        },
        "index": {
          "description": "Apply pure function to the argument to an arrow",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "argument",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "kure",
          "signature": "(a-\u003eb)-\u003ebi b c-\u003ebi a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:argument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arrow with a constant result.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "constant",
          "package": "kure",
          "signature": "b -\u003e bi a b",
          "source": "src/Language-KURE-Combinators-Arrow.html#constant",
          "type": "function"
        },
        "index": {
          "description": "An arrow with constant result",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "constant",
          "normalized": "a-\u003eb c a",
          "package": "kure",
          "signature": "b-\u003ebi a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure arrow that duplicates its argument.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "fork",
          "package": "kure",
          "signature": "bi a (a, a)",
          "source": "src/Language-KURE-Combinators-Arrow.html#fork",
          "type": "function"
        },
        "index": {
          "description": "pure arrow that duplicates its argument",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "fork",
          "normalized": "a b(b,b)",
          "package": "kure",
          "signature": "bi a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag the result of an arrow with its argument.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "forkFirst",
          "package": "kure",
          "signature": "bi a b -\u003e bi a (b, a)",
          "source": "src/Language-KURE-Combinators-Arrow.html#forkFirst",
          "type": "function"
        },
        "index": {
          "description": "Tag the result of an arrow with its argument",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "forkFirst",
          "normalized": "a b c-\u003ea b(c,b)",
          "package": "kure",
          "partial": "First",
          "signature": "bi a b-\u003ebi a(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:forkFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag the result of an arrow with its argument.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "forkSecond",
          "package": "kure",
          "signature": "bi a b -\u003e bi a (a, b)",
          "source": "src/Language-KURE-Combinators-Arrow.html#forkSecond",
          "type": "function"
        },
        "index": {
          "description": "Tag the result of an arrow with its argument",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "forkSecond",
          "normalized": "a b c-\u003ea b(b,c)",
          "package": "kure",
          "partial": "Second",
          "signature": "bi a b-\u003ebi a(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:forkSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a collection of arrows to the same input, combining their results in a monoid.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "parallelise",
          "package": "kure",
          "signature": "f (bi a b) -\u003e bi a b",
          "source": "src/Language-KURE-Combinators-Arrow.html#parallelise",
          "type": "function"
        },
        "index": {
          "description": "Apply collection of arrows to the same input combining their results in monoid",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "parallelise",
          "normalized": "a(b c d)-\u003eb c d",
          "package": "kure",
          "signature": "f(bi a b)-\u003ebi a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:parallelise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a pure function to the result of an arrow.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "result",
          "package": "kure",
          "signature": "(b -\u003e c) -\u003e bi a b -\u003e bi a c",
          "source": "src/Language-KURE-Combinators-Arrow.html#result",
          "type": "function"
        },
        "index": {
          "description": "Apply pure function to the result of an arrow",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "result",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "kure",
          "signature": "(b-\u003ec)-\u003ebi a b-\u003ebi a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence (from left to right) a collection of \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "serialise",
          "package": "kure",
          "signature": "f (bi a a) -\u003e bi a a",
          "source": "src/Language-KURE-Combinators-Arrow.html#serialise",
          "type": "function"
        },
        "index": {
          "description": "Sequence from left to right collection of Category",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "serialise",
          "normalized": "a(b c c)-\u003eb c c",
          "package": "kure",
          "signature": "f(bi a a)-\u003ebi a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:serialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure arrow that swaps the elements of a pair.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "swap",
          "package": "kure",
          "signature": "bi (a, b) (b, a)",
          "source": "src/Language-KURE-Combinators-Arrow.html#swap",
          "type": "function"
        },
        "index": {
          "description": "pure arrow that swaps the elements of pair",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "swap",
          "normalized": "a(b,c)(c,b)",
          "package": "kure",
          "signature": "bi(a,b)(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an arrow to the first element of a pair, discarding the second element.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "toFst",
          "package": "kure",
          "signature": "bi a b -\u003e bi (a, x) b",
          "source": "src/Language-KURE-Combinators-Arrow.html#toFst",
          "type": "function"
        },
        "index": {
          "description": "Apply an arrow to the first element of pair discarding the second element",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "toFst",
          "normalized": "a b c-\u003ea(b,d)c",
          "package": "kure",
          "partial": "Fst",
          "signature": "bi a b-\u003ebi(a,x)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:toFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an arrow to the second element of a pair, discarding the first element.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "toSnd",
          "package": "kure",
          "signature": "bi a b -\u003e bi (x, a) b",
          "source": "src/Language-KURE-Combinators-Arrow.html#toSnd",
          "type": "function"
        },
        "index": {
          "description": "Apply an arrow to the second element of pair discarding the first element",
          "hierarchy": "Language KURE Combinators Arrow",
          "module": "Language.KURE.Combinators.Arrow",
          "name": "toSnd",
          "normalized": "a b c-\u003ea(d,b)c",
          "package": "kure",
          "partial": "Snd",
          "signature": "bi a b-\u003ebi(x,a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:toSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides conditional monadic combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "Monad",
          "package": "kure",
          "source": "src/Language-KURE-Combinators-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides conditional monadic combinators",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "Monad",
          "package": "kure",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eguardMsg\u003c/a\u003e\u003c/code\u003e, but with a default error message.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardM",
          "package": "kure",
          "signature": "Bool -\u003e m ()",
          "source": "src/Language-KURE-Combinators-Monad.html#guardM",
          "type": "function"
        },
        "index": {
          "description": "As guardMsg but with default error message",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardM",
          "normalized": "Bool-\u003ea()",
          "package": "kure",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003eguard\u003c/code\u003e, but invokes \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003emzero\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardMsg",
          "package": "kure",
          "signature": "Bool -\u003e String -\u003e m ()",
          "source": "src/Language-KURE-Combinators-Monad.html#guardMsg",
          "type": "function"
        },
        "index": {
          "description": "Similar to guard but invokes fail rather than mzero",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardMsg",
          "normalized": "Bool-\u003eString-\u003ea()",
          "package": "kure",
          "partial": "Msg",
          "signature": "Bool-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eguardMsg\u003c/a\u003e\u003c/code\u003e, but with an \u003ccode\u003em Bool\u003c/code\u003e as argument.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardMsgM",
          "package": "kure",
          "signature": "m Bool -\u003e String -\u003e m ()",
          "source": "src/Language-KURE-Combinators-Monad.html#guardMsgM",
          "type": "function"
        },
        "index": {
          "description": "As guardMsg but with an Bool as argument",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "guardMsgM",
          "normalized": "a Bool-\u003eString-\u003ea()",
          "package": "kure",
          "partial": "Msg",
          "signature": "m Bool-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardMsgM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif-then-else lifted over a monadic predicate.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "ifM",
          "package": "kure",
          "signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-Combinators-Monad.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "if-then-else lifted over monadic predicate",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "ifM",
          "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
          "package": "kure",
          "signature": "m Bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the monadic predicate holds then fail, else perform the monadic action.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "unlessM",
          "package": "kure",
          "signature": "m Bool -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-Combinators-Monad.html#unlessM",
          "type": "function"
        },
        "index": {
          "description": "If the monadic predicate holds then fail else perform the monadic action",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "unlessM",
          "normalized": "a Bool-\u003ea b-\u003ea b",
          "package": "kure",
          "signature": "m Bool-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:unlessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the monadic predicate holds then perform the monadic action, else fail.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Monad",
          "name": "whenM",
          "package": "kure",
          "signature": "m Bool -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-Combinators-Monad.html#whenM",
          "type": "function"
        },
        "index": {
          "description": "If the monadic predicate holds then perform the monadic action else fail",
          "hierarchy": "Language KURE Combinators Monad",
          "module": "Language.KURE.Combinators.Monad",
          "name": "whenM",
          "normalized": "a Bool-\u003ea b-\u003ea b",
          "package": "kure",
          "signature": "m Bool-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a variety of combinators over \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "Translate",
          "package": "kure",
          "source": "src/Language-KURE-Combinators-Translate.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides variety of combinators over Translate and Rewrite",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "Translate",
          "package": "kure",
          "partial": "Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e transformer, in combination with \u003ccode\u003e\u003ca\u003ewrapAnyR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunwrapAnyR\u003c/a\u003e\u003c/code\u003e,\n   causes a sequence of rewrites to succeed if at least one succeeds, converting failures to\n   identity rewrites.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "AnyR",
          "package": "kure",
          "source": "src/Language-KURE-Combinators-Translate.html#AnyR",
          "type": "data"
        },
        "index": {
          "description": "The AnyR transformer in combination with wrapAnyR and unwrapAnyR causes sequence of rewrites to succeed if at least one succeeds converting failures to identity rewrites",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "AnyR",
          "package": "kure",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#t:AnyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e transformer, in combination with \u003ccode\u003e\u003ca\u003ewrapOneR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunwrapOneR\u003c/a\u003e\u003c/code\u003e,\n   causes a sequence of rewrites to only apply the first success, converting the remainder (and failures) to identity rewrites.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "OneR",
          "package": "kure",
          "source": "src/Language-KURE-Combinators-Translate.html#OneR",
          "type": "data"
        },
        "index": {
          "description": "The OneR transformer in combination with wrapOneR and unwrapOneR causes sequence of rewrites to only apply the first success converting the remainder and failures to identity rewrites",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "OneR",
          "package": "kure",
          "partial": "One",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#t:OneR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform two rewrites in sequence, succeeding if one or both succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "(\u003e+\u003e)",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#%3E%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Perform two rewrites in sequence succeeding if one or both succeed",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "(\u003e+\u003e) \u003e+\u003e",
          "normalized": "Rewrite a b c-\u003eRewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m a-\u003eRewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:-62--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook at the argument to a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, and choose to be either \u003ccode\u003e\u003ca\u003eidR\u003c/a\u003e\u003c/code\u003e or a failure.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "acceptR",
          "package": "kure",
          "signature": "(a -\u003e Bool) -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#acceptR",
          "type": "function"
        },
        "index": {
          "description": "Look at the argument to Rewrite and choose to be either idR or failure",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "acceptR",
          "normalized": "(a-\u003eBool)-\u003eRewrite b c a",
          "package": "kure",
          "signature": "(a-\u003eBool)-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:acceptR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eacceptR\u003c/a\u003e\u003c/code\u003e, but takes a custom failure message.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "acceptWithFailMsgR",
          "package": "kure",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#acceptWithFailMsgR",
          "type": "function"
        },
        "index": {
          "description": "As acceptR but takes custom failure message",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "acceptWithFailMsgR",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eRewrite b c a",
          "package": "kure",
          "partial": "With Fail Msg",
          "signature": "(a-\u003eBool)-\u003eString-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:acceptWithFailMsgR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalisation of \u003ccode\u003e\u003ca\u003eacceptR\u003c/a\u003e\u003c/code\u003e where the predicate is a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "accepterR",
          "package": "kure",
          "signature": "Translate c m a Bool -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#accepterR",
          "type": "function"
        },
        "index": {
          "description": "generalisation of acceptR where the predicate is Translate",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "accepterR",
          "normalized": "Translate a b c Bool-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Translate c m a Bool-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:accepterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a collection of rewrites in sequence, requiring all to succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "andR",
          "package": "kure",
          "signature": "f (Rewrite c m a) -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#andR",
          "type": "function"
        },
        "index": {
          "description": "Perform collection of rewrites in sequence requiring all to succeed",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "andR",
          "normalized": "a(Rewrite b c d)-\u003eRewrite b c d",
          "package": "kure",
          "signature": "f(Rewrite c m a)-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:andR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt each \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e until one succeeds, then return that result and discard the rest of the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "catchesT",
          "package": "kure",
          "signature": "[Translate c m a b] -\u003e Translate c m a b",
          "source": "src/Language-KURE-Combinators-Translate.html#catchesT",
          "type": "function"
        },
        "index": {
          "description": "Attempt each Translate until one succeeds then return that result and discard the rest of the Translate",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "catchesT",
          "normalized": "[Translate a b c d]-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "[Translate c m a b]-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:catchesT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e fail if the result value and the argument value satisfy the equality predicate.\n   This is a generalisation of \u003ccode\u003e\u003ca\u003echangedR\u003c/a\u003e\u003c/code\u003e.\n   \u003ccode\u003echangedR = changedByR (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "changedByR",
          "package": "kure",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Rewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#changedByR",
          "type": "function"
        },
        "index": {
          "description": "Makes Rewrite fail if the result value and the argument value satisfy the equality predicate This is generalisation of changedR changedR changedByR",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "changedByR",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eRewrite b c a-\u003eRewrite b c a",
          "package": "kure",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eRewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:changedByR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e fail if the result value equals the argument value.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "changedR",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#changedR",
          "type": "function"
        },
        "index": {
          "description": "Makes an Rewrite fail if the result value equals the argument value",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "changedR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:changedR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the current context.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "contextT",
          "package": "kure",
          "signature": "Translate c m a c",
          "source": "src/Language-KURE-Combinators-Translate.html#contextT",
          "type": "function"
        },
        "index": {
          "description": "Extract the current context",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "contextT",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:contextT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpose the current context and value.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "exposeT",
          "package": "kure",
          "signature": "Translate c m a (c, a)",
          "source": "src/Language-KURE-Combinators-Translate.html#exposeT",
          "type": "function"
        },
        "index": {
          "description": "Expose the current context and value",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "exposeT",
          "normalized": "Translate a b c(a,c)",
          "package": "kure",
          "signature": "Translate c m a(c,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:exposeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail if the Boolean is False, succeed if the Boolean is True.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "guardT",
          "package": "kure",
          "signature": "Translate c m Bool ()",
          "source": "src/Language-KURE-Combinators-Translate.html#guardT",
          "type": "function"
        },
        "index": {
          "description": "Fail if the Boolean is False succeed if the Boolean is True",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "guardT",
          "normalized": "Translate a b Bool()",
          "package": "kure",
          "signature": "Translate c m Bool()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:guardT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "idR",
          "package": "kure",
          "signature": "Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#idR",
          "type": "function"
        },
        "index": {
          "description": "The identity Rewrite",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "idR",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:idR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity translation that resembles a monadic \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "joinT",
          "package": "kure",
          "signature": "Translate c m (m a) a",
          "source": "src/Language-KURE-Combinators-Translate.html#joinT",
          "type": "function"
        },
        "index": {
          "description": "An identity translation that resembles monadic join",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "joinT",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:joinT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to operate on a derived context.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "liftContext",
          "package": "kure",
          "signature": "(c -\u003e c') -\u003e Translate c' m a b -\u003e Translate c m a b",
          "source": "src/Language-KURE-Combinators-Translate.html#liftContext",
          "type": "function"
        },
        "index": {
          "description": "Lift Translate to operate on derived context",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "liftContext",
          "normalized": "(a-\u003eb)-\u003eTranslate b c d e-\u003eTranslate a c d e",
          "package": "kure",
          "partial": "Context",
          "signature": "(c-\u003ec')-\u003eTranslate c' m a b-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:liftContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a list.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "mapT",
          "package": "kure",
          "signature": "Translate c m a b -\u003e Translate c m (t a) (t b)",
          "source": "src/Language-KURE-Combinators-Translate.html#mapT",
          "type": "function"
        },
        "index": {
          "description": "Map Translate over list",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "mapT",
          "normalized": "Translate a b c d-\u003eTranslate a b(e c)(e d)",
          "package": "kure",
          "signature": "Translate c m a b-\u003eTranslate c m(t a)(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:mapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a collection of rewrites in sequence, succeeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "orR",
          "package": "kure",
          "signature": "f (Rewrite c m a) -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#orR",
          "type": "function"
        },
        "index": {
          "description": "Perform collection of rewrites in sequence succeeding if any succeed",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "orR",
          "normalized": "a(Rewrite b c d)-\u003eRewrite b c d",
          "package": "kure",
          "signature": "f(Rewrite c m a)-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:orR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook at the argument to the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e before choosing which \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to use.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "readerT",
          "package": "kure",
          "signature": "(a -\u003e Translate c m a b) -\u003e Translate c m a b",
          "source": "src/Language-KURE-Combinators-Translate.html#readerT",
          "type": "function"
        },
        "index": {
          "description": "Look at the argument to the Translate before choosing which Translate to use",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "readerT",
          "normalized": "(a-\u003eTranslate b c a d)-\u003eTranslate b c a d",
          "package": "kure",
          "signature": "(a-\u003eTranslate c m a b)-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:readerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e until it fails, then return the result before the failure.\n   Requires at least the first attempt to succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "repeatR",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#repeatR",
          "type": "function"
        },
        "index": {
          "description": "Repeat Rewrite until it fails then return the result before the failure Requires at least the first attempt to succeed",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "repeatR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:repeatR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the monadic result of a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e into a result in another monad.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "resultT",
          "package": "kure",
          "signature": "(m b -\u003e n d) -\u003e Translate c m a b -\u003e Translate c n a d",
          "source": "src/Language-KURE-Combinators-Translate.html#resultT",
          "type": "function"
        },
        "index": {
          "description": "Convert the monadic result of Translate into result in another monad",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "resultT",
          "normalized": "(a b-\u003ec d)-\u003eTranslate e a f b-\u003eTranslate e c f d",
          "package": "kure",
          "signature": "(m b-\u003en d)-\u003eTranslate c m a b-\u003eTranslate c n a d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:resultT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e with side-effects.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "sideEffectR",
          "package": "kure",
          "signature": "(c -\u003e a -\u003e m ()) -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#sideEffectR",
          "type": "function"
        },
        "index": {
          "description": "An identity Rewrite with side-effects",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "sideEffectR",
          "normalized": "(a-\u003eb-\u003ec())-\u003eRewrite a c b",
          "package": "kure",
          "partial": "Effect",
          "signature": "(c-\u003ea-\u003em())-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:sideEffectR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn always successful \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "successT",
          "package": "kure",
          "signature": "Translate c m a ()",
          "source": "src/Language-KURE-Combinators-Translate.html#successT",
          "type": "function"
        },
        "index": {
          "description": "An always successful Translate",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "successT",
          "normalized": "Translate a b c()",
          "package": "kure",
          "signature": "Translate c m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:successT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch a failing \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, making it into an identity.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "tryR",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#tryR",
          "type": "function"
        },
        "index": {
          "description": "Catch failing Rewrite making it into an identity",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "tryR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:tryR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "unwrapAnyR",
          "package": "kure",
          "signature": "Rewrite c (AnyR m) a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#unwrapAnyR",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Rewrite from the AnyR monad transformer",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "unwrapAnyR",
          "normalized": "Rewrite a(AnyR b)c-\u003eRewrite a b c",
          "package": "kure",
          "partial": "Any",
          "signature": "Rewrite c(AnyR m)a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:unwrapAnyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "unwrapOneR",
          "package": "kure",
          "signature": "Rewrite c (OneR m) a -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Combinators-Translate.html#unwrapOneR",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Rewrite from the OneR monad transformer",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "unwrapOneR",
          "normalized": "Rewrite a(OneR b)c-\u003eRewrite a b c",
          "package": "kure",
          "partial": "One",
          "signature": "Rewrite c(OneR m)a-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:unwrapOneR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "wrapAnyR",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c (AnyR m) a",
          "source": "src/Language-KURE-Combinators-Translate.html#wrapAnyR",
          "type": "function"
        },
        "index": {
          "description": "Wrap Rewrite using the AnyR monad transformer",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "wrapAnyR",
          "normalized": "Rewrite a b c-\u003eRewrite a(AnyR b)c",
          "package": "kure",
          "partial": "Any",
          "signature": "Rewrite c m a-\u003eRewrite c(AnyR m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:wrapAnyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
          "module": "Language.KURE.Combinators.Translate",
          "name": "wrapOneR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c (OneR m) g",
          "source": "src/Language-KURE-Combinators-Translate.html#wrapOneR",
          "type": "function"
        },
        "index": {
          "description": "Wrap Rewrite using the OneR monad transformer",
          "hierarchy": "Language KURE Combinators Translate",
          "module": "Language.KURE.Combinators.Translate",
          "name": "wrapOneR",
          "normalized": "Rewrite a b c-\u003eRewrite a(OneR b)c",
          "package": "kure",
          "partial": "One",
          "signature": "Rewrite c m g-\u003eRewrite c(OneR m)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:wrapOneR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various monadic and arrow combinators that are useful when\n working with \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Combinators",
          "name": "Combinators",
          "package": "kure",
          "source": "src/Language-KURE-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides various monadic and arrow combinators that are useful when working with Translate and Rewrite",
          "hierarchy": "Language KURE Combinators",
          "module": "Language.KURE.Combinators",
          "name": "Combinators",
          "package": "kure",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides (unsafe) debugging/tracing combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Debug",
          "name": "Debug",
          "package": "kure",
          "source": "src/Language-KURE-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides unsafe debugging tracing combinators",
          "hierarchy": "Language KURE Debug",
          "module": "Language.KURE.Debug",
          "name": "Debug",
          "package": "kure",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace output of the value being rewritten; use for debugging only.\n\u003c/p\u003e",
          "module": "Language.KURE.Debug",
          "name": "debugR",
          "package": "kure",
          "signature": "Int -\u003e String -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Debug.html#debugR",
          "type": "function"
        },
        "index": {
          "description": "trace output of the value being rewritten use for debugging only",
          "hierarchy": "Language KURE Debug",
          "module": "Language.KURE.Debug",
          "name": "debugR",
          "normalized": "Int-\u003eString-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Int-\u003eString-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Debug.html#v:debugR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a utility data type for extending an existing context with extra information.\n The idea is that, after defining class instances for any user-specific contextual operations, it can be used for any ad-hoc context extensions.\n See the treatment of \u003ccode\u003e\u003ca\u003eExtendPath\u003c/a\u003e\u003c/code\u003e as an example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.ExtendableContext",
          "name": "ExtendableContext",
          "package": "kure",
          "source": "src/Language-KURE-ExtendableContext.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utility data type for extending an existing context with extra information The idea is that after defining class instances for any user-specific contextual operations it can be used for any ad-hoc context extensions See the treatment of ExtendPath as an example",
          "hierarchy": "Language KURE ExtendableContext",
          "module": "Language.KURE.ExtendableContext",
          "name": "ExtendableContext",
          "package": "kure",
          "partial": "Extendable Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context transformer, for augmenting a context with additional information.\n\u003c/p\u003e",
          "module": "Language.KURE.ExtendableContext",
          "name": "ExtendContext",
          "package": "kure",
          "source": "src/Language-KURE-ExtendableContext.html#ExtendContext",
          "type": "data"
        },
        "index": {
          "description": "context transformer for augmenting context with additional information",
          "hierarchy": "Language KURE ExtendableContext",
          "module": "Language.KURE.ExtendableContext",
          "name": "ExtendContext",
          "package": "kure",
          "partial": "Extend Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#t:ExtendContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the base context (without the extra information).\n\u003c/p\u003e",
          "module": "Language.KURE.ExtendableContext",
          "name": "baseContext",
          "package": "kure",
          "signature": "ExtendContext c e -\u003e c",
          "source": "src/Language-KURE-ExtendableContext.html#baseContext",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the base context without the extra information",
          "hierarchy": "Language KURE ExtendableContext",
          "module": "Language.KURE.ExtendableContext",
          "name": "baseContext",
          "normalized": "ExtendContext a b-\u003ea",
          "package": "kure",
          "partial": "Context",
          "signature": "ExtendContext c e-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:baseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a context with some additional information.\n\u003c/p\u003e",
          "module": "Language.KURE.ExtendableContext",
          "name": "extendContext",
          "package": "kure",
          "signature": "e -\u003e c -\u003e ExtendContext c e",
          "source": "src/Language-KURE-ExtendableContext.html#extendContext",
          "type": "function"
        },
        "index": {
          "description": "Extend context with some additional information",
          "hierarchy": "Language KURE ExtendableContext",
          "module": "Language.KURE.ExtendableContext",
          "name": "extendContext",
          "normalized": "a-\u003eb-\u003eExtendContext b a",
          "package": "kure",
          "partial": "Context",
          "signature": "e-\u003ec-\u003eExtendContext c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:extendContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the extra contextual information.\n\u003c/p\u003e",
          "module": "Language.KURE.ExtendableContext",
          "name": "extraContext",
          "package": "kure",
          "signature": "ExtendContext c e -\u003e e",
          "source": "src/Language-KURE-ExtendableContext.html#extraContext",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the extra contextual information",
          "hierarchy": "Language KURE ExtendableContext",
          "module": "Language.KURE.ExtendableContext",
          "name": "extraContext",
          "normalized": "ExtendContext a b-\u003eb",
          "package": "kure",
          "partial": "Context",
          "signature": "ExtendContext c e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:extraContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type class for injective functions (and their projections),\n and some useful interactions with \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Injection",
          "name": "Injection",
          "package": "kure",
          "source": "src/Language-KURE-Injection.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides type class for injective functions and their projections and some useful interactions with Translate",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "Injection",
          "package": "kure",
          "partial": "Injection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of injective functions from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e, and their projections.\n   The following law is expected to hold:\n\u003c/p\u003e\u003cpre\u003e project (inject a) == Just a\n\u003c/pre\u003e",
          "module": "Language.KURE.Injection",
          "name": "Injection",
          "package": "kure",
          "source": "src/Language-KURE-Injection.html#Injection",
          "type": "class"
        },
        "index": {
          "description": "class of injective functions from to and their projections The following law is expected to hold project inject Just",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "Injection",
          "package": "kure",
          "partial": "Injection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#t:Injection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over an injected value into a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over a projection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "extractR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Injection.html#extractR",
          "type": "function"
        },
        "index": {
          "description": "Convert Rewrite over an injected value into Rewrite over projection of that value failing if that injected value cannot be projected",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "extractR",
          "normalized": "Rewrite a b c-\u003eRewrite a b d",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over an injected value into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a non-injected value.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "extractT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m a b",
          "source": "src/Language-KURE-Injection.html#extractT",
          "type": "function"
        },
        "index": {
          "description": "Convert Translate over an injected value into Translate over non-injected value",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "extractT",
          "normalized": "Translate a b c d-\u003eTranslate a b e d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eextractR\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if extraction fails.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "extractWithFailMsgR",
          "package": "kure",
          "signature": "String -\u003e Rewrite c m g -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Injection.html#extractWithFailMsgR",
          "type": "function"
        },
        "index": {
          "description": "As extractR but takes custom error message to use if extraction fails",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "extractWithFailMsgR",
          "normalized": "String-\u003eRewrite a b c-\u003eRewrite a b d",
          "package": "kure",
          "partial": "With Fail Msg",
          "signature": "String-\u003eRewrite c m g-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractWithFailMsgR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.KURE.Injection",
          "name": "inject",
          "package": "kure",
          "signature": "a -\u003e b",
          "source": "src/Language-KURE-Injection.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "inject",
          "normalized": "a-\u003eb",
          "package": "kure",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects a value and lifts it into a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "injectM",
          "package": "kure",
          "signature": "a -\u003e m g",
          "source": "src/Language-KURE-Injection.html#injectM",
          "type": "function"
        },
        "index": {
          "description": "Injects value and lifts it into Monad",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "injectM",
          "normalized": "a-\u003eb c",
          "package": "kure",
          "signature": "a-\u003em g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:injectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003einject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "injectT",
          "package": "kure",
          "signature": "Translate c m a g",
          "source": "src/Language-KURE-Injection.html#injectT",
          "type": "function"
        },
        "index": {
          "description": "Lifted inject",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "injectT",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:injectT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.KURE.Injection",
          "name": "project",
          "package": "kure",
          "signature": "b -\u003e Maybe a",
          "source": "src/Language-KURE-Injection.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "project",
          "normalized": "a-\u003eMaybe b",
          "package": "kure",
          "signature": "b-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjects a value and lifts it into a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, with the possibility of failure.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "projectM",
          "package": "kure",
          "signature": "g -\u003e m a",
          "source": "src/Language-KURE-Injection.html#projectM",
          "type": "function"
        },
        "index": {
          "description": "Projects value and lifts it into Monad with the possibility of failure",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "projectM",
          "normalized": "a-\u003eb c",
          "package": "kure",
          "signature": "g-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e fails if the projection fails.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "projectT",
          "package": "kure",
          "signature": "Translate c m g a",
          "source": "src/Language-KURE-Injection.html#projectT",
          "type": "function"
        },
        "index": {
          "description": "Lifted project the Translate fails if the projection fails",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "projectT",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eprojectM\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if projection fails.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "projectWithFailMsgM",
          "package": "kure",
          "signature": "String -\u003e g -\u003e m a",
          "source": "src/Language-KURE-Injection.html#projectWithFailMsgM",
          "type": "function"
        },
        "index": {
          "description": "As projectM but takes custom error message to use if projection fails",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "projectWithFailMsgM",
          "normalized": "String-\u003ea-\u003eb c",
          "package": "kure",
          "partial": "With Fail Msg",
          "signature": "String-\u003eg-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectWithFailMsgM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e into over a value into a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over an injection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "promoteR",
          "package": "kure",
          "signature": "Rewrite c m a -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Injection.html#promoteR",
          "type": "function"
        },
        "index": {
          "description": "Promote Rewrite into over value into Rewrite over an injection of that value failing if that injected value cannot be projected",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "promoteR",
          "normalized": "Rewrite a b c-\u003eRewrite a b d",
          "package": "kure",
          "signature": "Rewrite c m a-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a value into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over an injection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "promoteT",
          "package": "kure",
          "signature": "Translate c m a b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Injection.html#promoteT",
          "type": "function"
        },
        "index": {
          "description": "Promote Translate over value into Translate over an injection of that value failing if that injected value cannot be projected",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "promoteT",
          "normalized": "Translate a b c d-\u003eTranslate a b e d",
          "package": "kure",
          "signature": "Translate c m a b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003epromoteR\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if promotion fails.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "promoteWithFailMsgR",
          "package": "kure",
          "signature": "String -\u003e Rewrite c m a -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Injection.html#promoteWithFailMsgR",
          "type": "function"
        },
        "index": {
          "description": "As promoteR but takes custom error message to use if promotion fails",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "promoteWithFailMsgR",
          "normalized": "String-\u003eRewrite a b c-\u003eRewrite a b d",
          "package": "kure",
          "partial": "With Fail Msg",
          "signature": "String-\u003eRewrite c m a-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteWithFailMsgR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003epromoteT\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if promotion fails.\n\u003c/p\u003e",
          "module": "Language.KURE.Injection",
          "name": "promoteWithFailMsgT",
          "package": "kure",
          "signature": "String -\u003e Translate c m a b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Injection.html#promoteWithFailMsgT",
          "type": "function"
        },
        "index": {
          "description": "As promoteT but takes custom error message to use if promotion fails",
          "hierarchy": "Language KURE Injection",
          "module": "Language.KURE.Injection",
          "name": "promoteWithFailMsgT",
          "normalized": "String-\u003eTranslate a b c d-\u003eTranslate a b e d",
          "package": "kure",
          "partial": "With Fail Msg",
          "signature": "String-\u003eTranslate c m a b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteWithFailMsgT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the KURE \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e type, along with some useful operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Lens",
          "name": "Lens",
          "package": "kure",
          "source": "src/Language-KURE-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the KURE Lens type along with some useful operations",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "Lens",
          "package": "kure",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e is a way to focus on a sub-structure of type \u003ccode\u003eb\u003c/code\u003e from a structure of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "Lens",
          "package": "kure",
          "source": "src/Language-KURE-Lens.html#Lens",
          "type": "data"
        },
        "index": {
          "description": "Lens is way to focus on sub-structure of type from structure of type",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "Lens",
          "package": "kure",
          "partial": "Lens",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "bidirectionalL",
          "package": "kure",
          "signature": "BiTranslate c m a b -\u003e Lens c m a b",
          "source": "src/Language-KURE-Lens.html#bidirectionalL",
          "type": "function"
        },
        "index": {
          "description": "Construct Lens from BiTranslate",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "bidirectionalL",
          "normalized": "BiTranslate a b c d-\u003eLens a b c d",
          "package": "kure",
          "signature": "BiTranslate c m a b-\u003eLens c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:bidirectionalL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e is deemed to have failed (and thus can be caught) if either it fails on the way down, or,\n   crucially, if it would fail on the way up for an unmodified value.  However, actual failure on the way up is not caught\n   (as by then it is too late to use an alternative \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e).  This means that, in theory, a use of \u003ccode\u003e\u003ca\u003ecatchL\u003c/a\u003e\u003c/code\u003e could cause a succeeding \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e application to fail.\n   But provided \u003ccode\u003e\u003ca\u003elens\u003c/a\u003e\u003c/code\u003e is used correctly, this should never happen.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "catchL",
          "package": "kure",
          "signature": "Lens c m a b -\u003e (String -\u003e Lens c m a b) -\u003e Lens c m a b",
          "source": "src/Language-KURE-Lens.html#catchL",
          "type": "function"
        },
        "index": {
          "description": "Lens is deemed to have failed and thus can be caught if either it fails on the way down or crucially if it would fail on the way up for an unmodified value However actual failure on the way up is not caught as by then it is too late to use an alternative Lens This means that in theory use of catchL could cause succeeding Lens application to fail But provided lens is used correctly this should never happen",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "catchL",
          "normalized": "Lens a b c d-\u003e(String-\u003eLens a b c d)-\u003eLens a b c d",
          "package": "kure",
          "signature": "Lens c m a b-\u003e(String-\u003eLens c m a b)-\u003eLens c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:catchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe failing \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "failL",
          "package": "kure",
          "signature": "String -\u003e Lens c m a b",
          "source": "src/Language-KURE-Lens.html#failL",
          "type": "function"
        },
        "index": {
          "description": "The failing Lens",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "failL",
          "normalized": "String-\u003eLens a b c d",
          "package": "kure",
          "signature": "String-\u003eLens c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:failL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "focusR",
          "package": "kure",
          "signature": "Lens c m a b -\u003e Rewrite c m b -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Lens.html#focusR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite at point specified by Lens",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "focusR",
          "normalized": "Lens a b c d-\u003eRewrite a b d-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Lens c m a b-\u003eRewrite c m b-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:focusR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "focusT",
          "package": "kure",
          "signature": "Lens c m a b -\u003e Translate c m b d -\u003e Translate c m a d",
          "source": "src/Language-KURE-Lens.html#focusT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate at point specified by Lens",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "focusT",
          "normalized": "Lens a b c d-\u003eTranslate a b d e-\u003eTranslate a b c e",
          "package": "kure",
          "signature": "Lens c m a b-\u003eTranslate c m b d-\u003eTranslate c m a d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:focusT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the injection of a value.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "injectL",
          "package": "kure",
          "signature": "Lens c m a g",
          "source": "src/Language-KURE-Lens.html#injectL",
          "type": "function"
        },
        "index": {
          "description": "Lens to the injection of value",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "injectL",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:injectL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n   If the unfocussing function is applied to the value focussed on then it should succeed,\n   and produce the same value as the original argument (of type \u003ccode\u003ea\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "lens",
          "package": "kure",
          "signature": "Translate c m a ((c, b), b -\u003e m a) -\u003e Lens c m a b",
          "source": "src/Language-KURE-Lens.html#lens",
          "type": "function"
        },
        "index": {
          "description": "The primitive way of building Lens If the unfocussing function is applied to the value focussed on then it should succeed and produce the same value as the original argument of type",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "lens",
          "normalized": "Translate a b c((a,d),d-\u003eb c)-\u003eLens a b c d",
          "package": "kure",
          "signature": "Translate c m a((c,b),b-\u003em a)-\u003eLens c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that produces a sub-structure (and its context) and an unfocussing function.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "lensT",
          "package": "kure",
          "signature": "Lens c m a b -\u003e Translate c m a ((c, b), b -\u003e m a)",
          "source": "src/Language-KURE-Lens.html#lensT",
          "type": "function"
        },
        "index": {
          "description": "Convert Lens into Translate that produces sub-structure and its context and an unfocussing function",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "lensT",
          "normalized": "Lens a b c d-\u003eTranslate a b c((a,d),d-\u003eb c)",
          "package": "kure",
          "signature": "Lens c m a b-\u003eTranslate c m a((c,b),b-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:lensT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the projection of a value.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "projectL",
          "package": "kure",
          "signature": "Lens c m g a",
          "source": "src/Language-KURE-Lens.html#projectL",
          "type": "function"
        },
        "index": {
          "description": "Lens to the projection of value",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "projectL",
          "package": "kure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:projectL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from two pure functions.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "pureL",
          "package": "kure",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Lens c m a b",
          "source": "src/Language-KURE-Lens.html#pureL",
          "type": "function"
        },
        "index": {
          "description": "Construct Lens from two pure functions",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "pureL",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens c d a b",
          "package": "kure",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:pureL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the focusing succeeds, and additionally whether unfocussing from an unchanged value would succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Lens",
          "name": "testLensT",
          "package": "kure",
          "signature": "Lens c m a b -\u003e Translate c m a Bool",
          "source": "src/Language-KURE-Lens.html#testLensT",
          "type": "function"
        },
        "index": {
          "description": "Check if the focusing succeeds and additionally whether unfocussing from an unchanged value would succeed",
          "hierarchy": "Language KURE Lens",
          "module": "Language.KURE.Lens",
          "name": "testLensT",
          "normalized": "Lens a b c d-\u003eTranslate a b c Bool",
          "package": "kure",
          "partial": "Lens",
          "signature": "Lens c m a b-\u003eTranslate c m a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:testLensT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides classes for catch-like operations on \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "MonadCatch",
          "package": "kure",
          "source": "src/Language-KURE-MonadCatch.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides classes for catch-like operations on Monad",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "MonadCatch",
          "package": "kure",
          "partial": "Monad Catch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e is the minimal structure that can be an instance of \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e.\n   The KURE user is free to either use \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e or provide their own monad.\n   \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e is essentially the same as \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, except that it supports a \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e instance which \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e does not (because its \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e)\n   A major advantage of this is that monadic pattern match failures are caught safely.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "KureM",
          "package": "kure",
          "source": "src/Language-KURE-MonadCatch.html#KureM",
          "type": "data"
        },
        "index": {
          "description": "KureM is the minimal structure that can be an instance of MonadCatch The KURE user is free to either use KureM or provide their own monad KureM is essentially the same as Either String except that it supports MonadCatch instance which Either String does not because its fail method calls error major advantage of this is that monadic pattern match failures are caught safely",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "KureM",
          "package": "kure",
          "partial": "Kure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#t:KureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es with a catch for \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n   The following laws are expected to hold:\n\u003c/p\u003e\u003cpre\u003e fail msg `catchM` f == f msg\n return a `catchM` f == return a\n\u003c/pre\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "MonadCatch",
          "package": "kure",
          "source": "src/Language-KURE-MonadCatch.html#MonadCatch",
          "type": "class"
        },
        "index": {
          "description": "Monad with catch for fail The following laws are expected to hold fail msg catchM msg return catchM return",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "MonadCatch",
          "package": "kure",
          "partial": "Monad Catch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#t:MonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic catch that ignores the error message.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "(\u003c+)",
          "package": "kure",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#%3C%2B",
          "type": "function"
        },
        "index": {
          "description": "monadic catch that ignores the error message",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "(\u003c+) \u003c+",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "kure",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:-60--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch a failing monadic computation, making it succeed with an error message.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "attemptM",
          "package": "kure",
          "signature": "m a -\u003e m (Either String a)",
          "source": "src/Language-KURE-MonadCatch.html#attemptM",
          "type": "function"
        },
        "index": {
          "description": "Catch failing monadic computation making it succeed with an error message",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "attemptM",
          "normalized": "a b-\u003ea(Either String b)",
          "package": "kure",
          "signature": "m a-\u003em(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:attemptM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch a failing monadic computation.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "catchM",
          "package": "kure",
          "signature": "m a -\u003e (String -\u003e m a) -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#catchM",
          "type": "method"
        },
        "index": {
          "description": "Catch failing monadic computation",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "catchM",
          "normalized": "a b-\u003e(String-\u003ea b)-\u003ea b",
          "package": "kure",
          "signature": "m a-\u003e(String-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:catchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the first monadic computation that succeeds, discarding any thereafter.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "catchesM",
          "package": "kure",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#catchesM",
          "type": "function"
        },
        "index": {
          "description": "Select the first monadic computation that succeeds discarding any thereafter",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "catchesM",
          "normalized": "a(b c)-\u003eb c",
          "package": "kure",
          "signature": "f(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:catchesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value from a \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e, providing a function to handle the error case.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "fromKureM",
          "package": "kure",
          "signature": "(String -\u003e a) -\u003e KureM a -\u003e a",
          "source": "src/Language-KURE-MonadCatch.html#fromKureM",
          "type": "function"
        },
        "index": {
          "description": "Get the value from KureM providing function to handle the error case",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "fromKureM",
          "normalized": "(String-\u003ea)-\u003eKureM a-\u003ea",
          "package": "kure",
          "partial": "Kure",
          "signature": "(String-\u003ea)-\u003eKureM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:fromKureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, catching failures in the target monad.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "liftAndCatchIO",
          "package": "kure",
          "signature": "IO a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#liftAndCatchIO",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad catching failures in the target monad",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "liftAndCatchIO",
          "normalized": "IO a-\u003eb a",
          "package": "kure",
          "partial": "And Catch IO",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:liftAndCatchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e computation to any other monad.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "liftKureM",
          "package": "kure",
          "signature": "KureM a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#liftKureM",
          "type": "function"
        },
        "index": {
          "description": "Lift KureM computation to any other monad",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "liftKureM",
          "normalized": "KureM a-\u003eb a",
          "package": "kure",
          "partial": "Kure",
          "signature": "KureM a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:liftKureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "modFailMsg",
          "package": "kure",
          "signature": "(String -\u003e String) -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#modFailMsg",
          "type": "function"
        },
        "index": {
          "description": "Modify the error message of failing monadic computation Successful computations are unaffected",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "modFailMsg",
          "normalized": "(String-\u003eString)-\u003ea b-\u003ea b",
          "package": "kure",
          "partial": "Fail Msg",
          "signature": "(String-\u003eString)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:modFailMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch a failing monadic computation, making it succeed with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "mtryM",
          "package": "kure",
          "signature": "m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#mtryM",
          "type": "function"
        },
        "index": {
          "description": "Catch failing monadic computation making it succeed with mempty",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "mtryM",
          "normalized": "a b-\u003ea b",
          "package": "kure",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:mtryM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail if the monadic computation succeeds; succeed with \u003ccode\u003e()\u003c/code\u003e if it fails.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "notM",
          "package": "kure",
          "signature": "m a -\u003e m ()",
          "source": "src/Language-KURE-MonadCatch.html#notM",
          "type": "function"
        },
        "index": {
          "description": "Fail if the monadic computation succeeds succeed with if it fails",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "notM",
          "normalized": "a b-\u003ea()",
          "package": "kure",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:notM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a prefix to the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "prefixFailMsg",
          "package": "kure",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#prefixFailMsg",
          "type": "function"
        },
        "index": {
          "description": "Add prefix to the error message of failing monadic computation Successful computations are unaffected",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "prefixFailMsg",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "kure",
          "partial": "Fail Msg",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:prefixFailMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminator for \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "runKureM",
          "package": "kure",
          "signature": "(a -\u003e b) -\u003e (String -\u003e b) -\u003e KureM a -\u003e b",
          "source": "src/Language-KURE-MonadCatch.html#runKureM",
          "type": "function"
        },
        "index": {
          "description": "Eliminator for KureM",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "runKureM",
          "normalized": "(a-\u003eb)-\u003e(String-\u003eb)-\u003eKureM a-\u003eb",
          "package": "kure",
          "partial": "Kure",
          "signature": "(a-\u003eb)-\u003e(String-\u003eb)-\u003eKureM a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:runKureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "setFailMsg",
          "package": "kure",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#setFailMsg",
          "type": "function"
        },
        "index": {
          "description": "Set the error message of failing monadic computation Successful computations are unaffected",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "setFailMsg",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "kure",
          "partial": "Fail Msg",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:setFailMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a monadic computation succeeds.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "testM",
          "package": "kure",
          "signature": "m a -\u003e m Bool",
          "source": "src/Language-KURE-MonadCatch.html#testM",
          "type": "function"
        },
        "index": {
          "description": "Determine if monadic computation succeeds",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "testM",
          "normalized": "a b-\u003ea Bool",
          "package": "kure",
          "signature": "m a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:testM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch a failing monadic computation, making it succeed with a constant value.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "tryM",
          "package": "kure",
          "signature": "a -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#tryM",
          "type": "function"
        },
        "index": {
          "description": "Catch failing monadic computation making it succeed with constant value",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "tryM",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "kure",
          "signature": "a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:tryM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the given error message whenever a monadic pattern match failure occurs.\n\u003c/p\u003e",
          "module": "Language.KURE.MonadCatch",
          "name": "withPatFailMsg",
          "package": "kure",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Language-KURE-MonadCatch.html#withPatFailMsg",
          "type": "function"
        },
        "index": {
          "description": "Use the given error message whenever monadic pattern match failure occurs",
          "hierarchy": "Language KURE MonadCatch",
          "module": "Language.KURE.MonadCatch",
          "name": "withPatFailMsg",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "kure",
          "partial": "Pat Fail Msg",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:withPatFailMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides several Path abstractions, used for denoting a path through the tree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Path",
          "name": "Path",
          "package": "kure",
          "source": "src/Language-KURE-Path.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides several Path abstractions used for denoting path through the tree",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "Path",
          "package": "kure",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e from the root.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "AbsolutePath",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#AbsolutePath",
          "type": "type"
        },
        "index": {
          "description": "SnocPath from the root",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "AbsolutePath",
          "package": "kure",
          "partial": "Absolute Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:AbsolutePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of things that can be extended by crumbs.\n   Typically, \u003ccode\u003ec\u003c/code\u003e is a context type.\n   The typical use is to extend an \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e stored in the context (during tree traversal).\n   Note however, that if an \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e is not stored in the context, an instance can still be declared with \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e crumb)\u003c/code\u003e as an identity operation.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "ExtendPath",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#ExtendPath",
          "type": "class"
        },
        "index": {
          "description": "class of things that can be extended by crumbs Typically is context type The typical use is to extend an AbsolutePath stored in the context during tree traversal Note however that if an AbsolutePath is not stored in the context an instance can still be declared with crumb as an identity operation",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "ExtendPath",
          "package": "kure",
          "partial": "Extend Path",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:ExtendPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e from a local origin.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "LocalPath",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#LocalPath",
          "type": "type"
        },
        "index": {
          "description": "SnocPath from local origin",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "LocalPath",
          "package": "kure",
          "partial": "Local Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:LocalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e is just a list.\n   The intent is that a path represents a route through the tree from an arbitrary node.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "Path",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#Path",
          "type": "type"
        },
        "index": {
          "description": "Path is just list The intent is that path represents route through the tree from an arbitrary node",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "Path",
          "package": "kure",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for contexts that store the current \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e, allowing transformations to depend upon it.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "ReadPath",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#ReadPath",
          "type": "class"
        },
        "index": {
          "description": "class for contexts that store the current AbsolutePath allowing transformations to depend upon it",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "ReadPath",
          "package": "kure",
          "partial": "Read Path",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:ReadPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e is a list stored in reverse order.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "SnocPath",
          "package": "kure",
          "source": "src/Language-KURE-Path.html#SnocPath",
          "type": "newtype"
        },
        "index": {
          "description": "SnocPath is list stored in reverse order",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "SnocPath",
          "package": "kure",
          "partial": "Snoc Path",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:SnocPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the current \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e by one crumb.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "(@@)",
          "package": "kure",
          "signature": "c -\u003e crumb -\u003e c",
          "source": "src/Language-KURE-Path.html#%40%40",
          "type": "method"
        },
        "index": {
          "description": "Extend the current AbsolutePath by one crumb",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "(@@) @@",
          "normalized": "a-\u003eb-\u003ea",
          "package": "kure",
          "signature": "c-\u003ecrumb-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:-64--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.KURE.Path",
          "name": "SnocPath",
          "package": "kure",
          "signature": "SnocPath [crumb]",
          "source": "src/Language-KURE-Path.html#SnocPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "SnocPath",
          "normalized": "SnocPath[a]",
          "package": "kure",
          "partial": "Snoc Path",
          "signature": "SnocPath[crumb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:SnocPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the current absolute path.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "absPath",
          "package": "kure",
          "signature": "c -\u003e AbsolutePath crumb",
          "source": "src/Language-KURE-Path.html#absPath",
          "type": "method"
        },
        "index": {
          "description": "Read the current absolute path",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "absPath",
          "normalized": "a-\u003eAbsolutePath b",
          "package": "kure",
          "partial": "Path",
          "signature": "c-\u003eAbsolutePath crumb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:absPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "absPathT",
          "package": "kure",
          "signature": "Translate c m a (AbsolutePath crumb)",
          "source": "src/Language-KURE-Path.html#absPathT",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of absPath",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "absPathT",
          "package": "kure",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:absPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last crumb from a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e.  O(1).\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "lastCrumb",
          "package": "kure",
          "signature": "SnocPath crumb -\u003e Maybe crumb",
          "source": "src/Language-KURE-Path.html#lastCrumb",
          "type": "function"
        },
        "index": {
          "description": "Get the last crumb from SnocPath",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "lastCrumb",
          "normalized": "SnocPath a-\u003eMaybe a",
          "package": "kure",
          "partial": "Crumb",
          "signature": "SnocPath crumb-\u003eMaybe crumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:lastCrumb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003e\u003ca\u003elastCrumb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "lastCrumbT",
          "package": "kure",
          "signature": "Translate c m a crumb",
          "source": "src/Language-KURE-Path.html#lastCrumbT",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lastCrumb",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "lastCrumbT",
          "package": "kure",
          "partial": "Crumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:lastCrumbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e.  O(n).\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "pathToSnocPath",
          "package": "kure",
          "signature": "Path crumb -\u003e SnocPath crumb",
          "source": "src/Language-KURE-Path.html#pathToSnocPath",
          "type": "function"
        },
        "index": {
          "description": "Convert Path to SnocPath",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "pathToSnocPath",
          "normalized": "Path a-\u003eSnocPath a",
          "package": "kure",
          "partial": "To Snoc Path",
          "signature": "Path crumb-\u003eSnocPath crumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:pathToSnocPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.  O(n).\n\u003c/p\u003e",
          "module": "Language.KURE.Path",
          "name": "snocPathToPath",
          "package": "kure",
          "signature": "SnocPath crumb -\u003e Path crumb",
          "source": "src/Language-KURE-Path.html#snocPathToPath",
          "type": "function"
        },
        "index": {
          "description": "Convert SnocPath to Path",
          "hierarchy": "Language KURE Path",
          "module": "Language.KURE.Path",
          "name": "snocPathToPath",
          "normalized": "SnocPath a-\u003ePath a",
          "package": "kure",
          "partial": "Path To Path",
          "signature": "SnocPath crumb-\u003ePath crumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:snocPathToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators to find \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es sub-nodes specified by a predicate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "Pathfinder",
          "package": "kure",
          "source": "src/Language-KURE-Pathfinder.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides combinators to find LocalPath sub-nodes specified by predicate",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "Pathfinder",
          "package": "kure",
          "partial": "Pathfinder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context transformer that adds a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e (from the current node) to the context.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "WithLocalPath",
          "package": "kure",
          "source": "src/Language-KURE-Pathfinder.html#WithLocalPath",
          "type": "type"
        },
        "index": {
          "description": "context transformer that adds LocalPath from the current node to the context",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "WithLocalPath",
          "package": "kure",
          "partial": "With Local Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#t:WithLocalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e if the predicate translation succeeds.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "acceptLocalPathT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate (WithLocalPath c crumb) m g (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#acceptLocalPathT",
          "type": "function"
        },
        "index": {
          "description": "Return the current LocalPath if the predicate translation succeeds",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "acceptLocalPathT",
          "normalized": "Translate a b c Bool-\u003eTranslate(WithLocalPath a d)b c(LocalPath d)",
          "package": "kure",
          "partial": "Local Path",
          "signature": "Translate c m g Bool-\u003eTranslate(WithLocalPath c crumb)m g(LocalPath crumb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:acceptLocalPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the current \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e from the context.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "exposeLocalPathT",
          "package": "kure",
          "signature": "Translate (WithLocalPath c crumb) m a (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#exposeLocalPathT",
          "type": "function"
        },
        "index": {
          "description": "Extract the current LocalPath from the context",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "exposeLocalPathT",
          "package": "kure",
          "partial": "Local Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:exposeLocalPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the first descendent node that satisfies the predicate (in a pre-order traversal).\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "oneNonEmptyPathToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#oneNonEmptyPathToT",
          "type": "function"
        },
        "index": {
          "description": "Find the LocalPath to the first descendent node that satisfies the predicate in pre-order traversal",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "oneNonEmptyPathToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
          "package": "kure",
          "partial": "Non Empty Path To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:oneNonEmptyPathToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the first node that satisfies the predicate (in a pre-order traversal).\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "onePathToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#onePathToT",
          "type": "function"
        },
        "index": {
          "description": "Find the LocalPath to the first node that satisfies the predicate in pre-order traversal",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "onePathToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
          "package": "kure",
          "partial": "Path To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:onePathToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es to every node that satisfies the predicate.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "pathsToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g [LocalPath crumb]",
          "source": "src/Language-KURE-Pathfinder.html#pathsToT",
          "type": "function"
        },
        "index": {
          "description": "Find the LocalPath to every node that satisfies the predicate",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "pathsToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c[LocalPath d]",
          "package": "kure",
          "partial": "To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g[LocalPath crumb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:pathsToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es to every node that satisfies the predicate, ignoring nodes below successes.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "prunePathsToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g [LocalPath crumb]",
          "source": "src/Language-KURE-Pathfinder.html#prunePathsToT",
          "type": "function"
        },
        "index": {
          "description": "Find the LocalPath to every node that satisfies the predicate ignoring nodes below successes",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "prunePathsToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c[LocalPath d]",
          "package": "kure",
          "partial": "Paths To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g[LocalPath crumb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:prunePathsToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the node that satisfies the predicate, failing if that does not uniquely identify a node.\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "uniquePathToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#uniquePathToT",
          "type": "function"
        },
        "index": {
          "description": "Find the LocalPath to the node that satisfies the predicate failing if that does not uniquely identify node",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "uniquePathToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
          "package": "kure",
          "partial": "Path To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:uniquePathToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the node that satisfies the predicate, failing if that does not uniquely identify a node (ignoring nodes below successes).\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "uniquePrunePathToT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
          "source": "src/Language-KURE-Pathfinder.html#uniquePrunePathToT",
          "type": "function"
        },
        "index": {
          "description": "Build LocalPath to the node that satisfies the predicate failing if that does not uniquely identify node ignoring nodes below successes",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "uniquePrunePathToT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
          "package": "kure",
          "partial": "Prune Path To",
          "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:uniquePrunePathToT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a translation that stores a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e in the context (starting at the current node).\n\u003c/p\u003e",
          "module": "Language.KURE.Pathfinder",
          "name": "withLocalPathT",
          "package": "kure",
          "signature": "Translate (WithLocalPath c crumb) m a b -\u003e Translate c m a b",
          "source": "src/Language-KURE-Pathfinder.html#withLocalPathT",
          "type": "function"
        },
        "index": {
          "description": "Apply translation that stores LocalPath in the context starting at the current node",
          "hierarchy": "Language KURE Pathfinder",
          "module": "Language.KURE.Pathfinder",
          "name": "withLocalPathT",
          "normalized": "Translate(WithLocalPath a b)c d e-\u003eTranslate a c d e",
          "package": "kure",
          "partial": "Local Path",
          "signature": "Translate(WithLocalPath c crumb)m a b-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:withLocalPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, the main KURE types.\n \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e is just a special case of \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e, and so any function that operates on \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e is also\n applicable to \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e type-class families, and consequently\n many of the desirable combinators over \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e are special cases\n of existing monadic or arrow combinators.\n \u003ca\u003eLanguage.KURE.Combinators\u003c/a\u003e provides some additional combinators that aren't in the standard libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Translate",
          "name": "Translate",
          "package": "kure",
          "source": "src/Language-KURE-Translate.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines Translate and Rewrite the main KURE types Rewrite is just special case of Translate and so any function that operates on Translate is also applicable to Rewrite Translate is an instance of the Monad and Arrow type-class families and consequently many of the desirable combinators over Translate and Rewrite are special cases of existing monadic or arrow combinators Language.KURE.Combinators provides some additional combinators that aren in the standard libraries",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "Translate",
          "package": "kure",
          "partial": "Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that shares the same source and target type.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "Rewrite",
          "package": "kure",
          "source": "src/Language-KURE-Translate.html#Rewrite",
          "type": "type"
        },
        "index": {
          "description": "Translate that shares the same source and target type",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "Rewrite",
          "package": "kure",
          "partial": "Rewrite",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#t:Rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a transformation from a value of type \u003ccode\u003ea\u003c/code\u003e in a context \u003ccode\u003ec\u003c/code\u003e to a monadic value of type \u003ccode\u003em b\u003c/code\u003e.\n   The \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e type is the basis of the entire KURE library.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "Translate",
          "package": "kure",
          "source": "src/Language-KURE-Translate.html#Translate",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of transformation from value of type in context to monadic value of type The Translate type is the basis of the entire KURE library",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "Translate",
          "package": "kure",
          "partial": "Translate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#t:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to a value and its context.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "apply",
          "package": "kure",
          "signature": "Translate c m a b -\u003e c -\u003e a -\u003e m b",
          "source": "src/Language-KURE-Translate.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to value and its context",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "apply",
          "normalized": "Translate a b c d-\u003ea-\u003ec-\u003eb d",
          "package": "kure",
          "signature": "Translate c m a b-\u003ec-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a constant \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a monadic computation.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "constT",
          "package": "kure",
          "signature": "m b -\u003e Translate c m a b",
          "source": "src/Language-KURE-Translate.html#constT",
          "type": "function"
        },
        "index": {
          "description": "Build constant Translate from monadic computation",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "constT",
          "normalized": "a b-\u003eTranslate c a d b",
          "package": "kure",
          "signature": "m b-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:constT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that doesn't depend on the context.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "contextfreeT",
          "package": "kure",
          "signature": "(a -\u003e m b) -\u003e Translate c m a b",
          "source": "src/Language-KURE-Translate.html#contextfreeT",
          "type": "function"
        },
        "index": {
          "description": "Build Translate that doesn depend on the context",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "contextfreeT",
          "normalized": "(a-\u003eb c)-\u003eTranslate d b a c",
          "package": "kure",
          "signature": "(a-\u003em b)-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:contextfreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that doesn't depend on the value.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "contextonlyT",
          "package": "kure",
          "signature": "(c -\u003e m b) -\u003e Translate c m a b",
          "source": "src/Language-KURE-Translate.html#contextonlyT",
          "type": "function"
        },
        "index": {
          "description": "Build Translate that doesn depend on the value",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "contextonlyT",
          "normalized": "(a-\u003eb c)-\u003eTranslate a b d c",
          "package": "kure",
          "signature": "(c-\u003em b)-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:contextonlyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "rewrite",
          "package": "kure",
          "signature": "(c -\u003e a -\u003e m a) -\u003e Rewrite c m a",
          "source": "src/Language-KURE-Translate.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "The primitive way of building Rewrite",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "rewrite",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eRewrite a c b",
          "package": "kure",
          "signature": "(c-\u003ea-\u003em a)-\u003eRewrite c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Translate",
          "name": "translate",
          "package": "kure",
          "signature": "(c -\u003e a -\u003e m b) -\u003e Translate c m a b",
          "source": "src/Language-KURE-Translate.html#translate",
          "type": "function"
        },
        "index": {
          "description": "The primitive way of building Translate",
          "hierarchy": "Language KURE Translate",
          "module": "Language.KURE.Translate",
          "name": "translate",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eTranslate a c b d",
          "package": "kure",
          "signature": "(c-\u003ea-\u003em b)-\u003eTranslate c m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators that traverse a tree.\n\u003c/p\u003e\u003cp\u003eNote that all traversals take place on the node, its children, or its descendents.\n Deliberately, there is no mechanism for \"ascending\" the tree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Walker",
          "name": "Walker",
          "package": "kure",
          "source": "src/Language-KURE-Walker.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides combinators that traverse tree Note that all traversals take place on the node its children or its descendents Deliberately there is no mechanism for ascending the tree",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "Walker",
          "package": "kure",
          "partial": "Walker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWalker\u003c/a\u003e\u003c/code\u003e captures the ability to walk over a tree containing nodes of type \u003ccode\u003eg\u003c/code\u003e,\n   using a specific context \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eallR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault definitions are provided for \u003ccode\u003e\u003ca\u003eanyR\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoneR\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eallT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoneT\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echildL\u003c/a\u003e\u003c/code\u003e,\n   but they may be overridden for efficiency.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "Walker",
          "package": "kure",
          "source": "src/Language-KURE-Walker.html#Walker",
          "type": "class"
        },
        "index": {
          "description": "Walker captures the ability to walk over tree containing nodes of type using specific context Minimal complete definition allR Default definitions are provided for anyR oneR allT oneT and childL but they may be overridden for efficiency",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "Walker",
          "package": "kure",
          "partial": "Walker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#t:Walker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, requiring all to succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allLargestR",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#allLargestR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to the largest node that satisfy the predicate requiring all to succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allLargestR",
          "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "partial": "Largest",
          "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allLargestR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, combining the results in a monoid.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allLargestT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#allLargestT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to the largest node that satisfy the predicate combining the results in monoid",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allLargestT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "partial": "Largest",
          "signature": "Translate c m g Bool-\u003eTranslate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allLargestT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to all immediate children, succeeding if they all succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#allR",
          "type": "method"
        },
        "index": {
          "description": "Apply Rewrite to all immediate children succeeding if they all succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to all immediate children, succeeding if they all succeed.\n   The results are combined in a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#allT",
          "type": "method"
        },
        "index": {
          "description": "Apply Translate to all immediate children succeeding if they all succeed The results are combined in Monoid",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a bottom-up manner, succeeding if they all succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allbuR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#allbuR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite in bottom-up manner succeeding if they all succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allbuR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allbuR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e twice, in a top-down and bottom-up way, using one single tree traversal,\n   succeeding if they all succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "allduR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#allduR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite twice in top-down and bottom-up way using one single tree traversal succeeding if they all succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "allduR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allduR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, succeeding if they all succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "alltdR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#alltdR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite in top-down manner succeeding if they all succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "alltdR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:alltdR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, succeeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "anyLargestR",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#anyLargestR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to the largest node that satisfy the predicate succeeding if any succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "anyLargestR",
          "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "partial": "Largest",
          "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyLargestR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to all immediate children, suceeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "anyR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#anyR",
          "type": "method"
        },
        "index": {
          "description": "Apply Rewrite to all immediate children suceeding if any succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "anyR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a bottom-up manner, succeeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "anybuR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#anybuR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite in bottom-up manner succeeding if any succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "anybuR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anybuR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e twice, in a top-down and bottom-up way, using one single tree traversal,\n   succeeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "anyduR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#anyduR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite twice in top-down and bottom-up way using one single tree traversal succeeding if any succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "anyduR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyduR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, succeeding if any succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "anytdR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#anytdR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite in top-down manner succeeding if any succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "anytdR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anytdR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the n-th child node.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "childL",
          "package": "kure",
          "signature": "crumb -\u003e Lens c m g g",
          "source": "src/Language-KURE-Walker.html#childL",
          "type": "method"
        },
        "index": {
          "description": "Construct Lens to the n-th child node",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "childL",
          "normalized": "a-\u003eLens b c d d",
          "package": "kure",
          "signature": "crumb-\u003eLens c m g g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to a specified child.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "childR",
          "package": "kure",
          "signature": "crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#childR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to specified child",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "childR",
          "normalized": "a-\u003eRewrite b c d-\u003eRewrite b c d",
          "package": "kure",
          "signature": "crumb-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to a specified child.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "childT",
          "package": "kure",
          "signature": "crumb -\u003e Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#childT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to specified child",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "childT",
          "normalized": "a-\u003eTranslate b c d e-\u003eTranslate b c d e",
          "package": "kure",
          "signature": "crumb-\u003eTranslate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the children of the current node.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "childrenT",
          "package": "kure",
          "signature": "Translate c m g [crumb]",
          "source": "src/Language-KURE-Walker.html#childrenT",
          "type": "function"
        },
        "index": {
          "description": "List the children of the current node",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "childrenT",
          "normalized": "Translate a b c[d]",
          "package": "kure",
          "signature": "Translate c m g[crumb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childrenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecollectT\u003c/a\u003e\u003c/code\u003e, but does not traverse below successes.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "collectPruneT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g [b]",
          "source": "src/Language-KURE-Walker.html#collectPruneT",
          "type": "function"
        },
        "index": {
          "description": "Like collectT but does not traverse below successes",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "collectPruneT",
          "normalized": "Translate a b c d-\u003eTranslate a b c[d]",
          "package": "kure",
          "partial": "Prune",
          "signature": "Translate c m g b-\u003eTranslate c m g[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:collectPruneT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn always successful traversal that collects the results of all successful applications of a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e in a list.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "collectT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g [b]",
          "source": "src/Language-KURE-Walker.html#collectT",
          "type": "function"
        },
        "index": {
          "description": "An always successful traversal that collects the results of all successful applications of Translate in list",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "collectT",
          "normalized": "Translate a b c d-\u003eTranslate a b c[d]",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:collectT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn always successful bottom-up fold, replacing failures with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "crushbuT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#crushbuT",
          "type": "function"
        },
        "index": {
          "description": "An always successful bottom-up fold replacing failures with mempty",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "crushbuT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:crushbuT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn always successful top-down fold, replacing failures with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "crushtdT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#crushtdT",
          "type": "function"
        },
        "index": {
          "description": "An always successful top-down fold replacing failures with mempty",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "crushtdT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:crushtdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e that points to the last node at which the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e can be followed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "exhaustPathL",
          "package": "kure",
          "signature": "Path crumb -\u003e Lens c m g g",
          "source": "src/Language-KURE-Walker.html#exhaustPathL",
          "type": "function"
        },
        "index": {
          "description": "Construct Lens that points to the last node at which the Path can be followed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "exhaustPathL",
          "normalized": "Path a-\u003eLens b c d d",
          "package": "kure",
          "partial": "Path",
          "signature": "Path crumb-\u003eLens c m g g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:exhaustPathL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a tree in a bottom-up manner, using a single \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e for each node.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "foldbuT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#foldbuT",
          "type": "function"
        },
        "index": {
          "description": "Fold tree in bottom-up manner using single Translate for each node",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "foldbuT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:foldbuT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a tree in a top-down manner, using a single \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e for each node.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "foldtdT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#foldtdT",
          "type": "function"
        },
        "index": {
          "description": "Fold tree in top-down manner using single Translate for each node",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "foldtdT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:foldtdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-point traveral, starting with the innermost term.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "innermostR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#innermostR",
          "type": "function"
        },
        "index": {
          "description": "fixed-point traveral starting with the innermost term",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "innermostR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:innermostR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from the root to a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "localPathL",
          "package": "kure",
          "signature": "LocalPath crumb -\u003e Lens c m g g",
          "source": "src/Language-KURE-Walker.html#localPathL",
          "type": "function"
        },
        "index": {
          "description": "Build Lens from the root to point specified by LocalPath",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "localPathL",
          "normalized": "LocalPath a-\u003eLens b c d d",
          "package": "kure",
          "partial": "Path",
          "signature": "LocalPath crumb-\u003eLens c m g g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "localPathR",
          "package": "kure",
          "signature": "LocalPath crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#localPathR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite at point specified by LocalPath",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "localPathR",
          "normalized": "LocalPath a-\u003eRewrite b c d-\u003eRewrite b c d",
          "package": "kure",
          "partial": "Path",
          "signature": "LocalPath crumb-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "localPathT",
          "package": "kure",
          "signature": "LocalPath crumb -\u003e Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#localPathT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate at point specified by LocalPath",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "localPathT",
          "normalized": "LocalPath a-\u003eTranslate b c d e-\u003eTranslate b c d e",
          "package": "kure",
          "partial": "Path",
          "signature": "LocalPath crumb-\u003eTranslate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed among the largest node(s) that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "oneLargestR",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#oneLargestR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to the first node for which it can succeed among the largest node that satisfy the predicate",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "oneLargestR",
          "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "partial": "Largest",
          "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneLargestR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed among the largest node(s) that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "oneLargestT",
          "package": "kure",
          "signature": "Translate c m g Bool -\u003e Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#oneLargestT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to the first node for which it can succeed among the largest node that satisfy the predicate",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "oneLargestT",
          "normalized": "Translate a b c Bool-\u003eTranslate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "partial": "Largest",
          "signature": "Translate c m g Bool-\u003eTranslate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneLargestT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first immediate child for which it can succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "oneR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#oneR",
          "type": "method"
        },
        "index": {
          "description": "Apply Rewrite to the first immediate child for which it can succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "oneR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first immediate child for which it can succeed.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "oneT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#oneT",
          "type": "method"
        },
        "index": {
          "description": "Apply Translate to the first immediate child for which it can succeed",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "oneT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a bottom-up traversal.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "onebuR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#onebuR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to the first node for which it can succeed in bottom-up traversal",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "onebuR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onebuR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a bottom-up traversal.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "onebuT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#onebuT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to the first node for which it can succeed in bottom-up traversal",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "onebuT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onebuT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a top-down traversal.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "onetdR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#onetdR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite to the first node for which it can succeed in top-down traversal",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "onetdR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onetdR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a top-down traversal.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "onetdT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#onetdT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate to the first node for which it can succeed in top-down traversal",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "onetdT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onetdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e by following a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "pathL",
          "package": "kure",
          "signature": "Path crumb -\u003e Lens c m g g",
          "source": "src/Language-KURE-Walker.html#pathL",
          "type": "function"
        },
        "index": {
          "description": "Construct Lens by following Path",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "pathL",
          "normalized": "Path a-\u003eLens b c d d",
          "package": "kure",
          "signature": "Path crumb-\u003eLens c m g g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "pathR",
          "package": "kure",
          "signature": "Path crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#pathR",
          "type": "function"
        },
        "index": {
          "description": "Apply Rewrite at point specified by Path",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "pathR",
          "normalized": "Path a-\u003eRewrite b c d-\u003eRewrite b c d",
          "package": "kure",
          "signature": "Path crumb-\u003eRewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "pathT",
          "package": "kure",
          "signature": "Path crumb -\u003e Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#pathT",
          "type": "function"
        },
        "index": {
          "description": "Apply Translate at point specified by Path",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "pathT",
          "normalized": "Path a-\u003eTranslate b c d e-\u003eTranslate b c d e",
          "package": "kure",
          "signature": "Path crumb-\u003eTranslate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to apply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, pruning at successful rewrites.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "prunetdR",
          "package": "kure",
          "signature": "Rewrite c m g -\u003e Rewrite c m g",
          "source": "src/Language-KURE-Walker.html#prunetdR",
          "type": "function"
        },
        "index": {
          "description": "Attempt to apply Rewrite in top-down manner pruning at successful rewrites",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "prunetdR",
          "normalized": "Rewrite a b c-\u003eRewrite a b c",
          "package": "kure",
          "signature": "Rewrite c m g-\u003eRewrite c m g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:prunetdR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to apply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e in a top-down manner, pruning at successes.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "prunetdT",
          "package": "kure",
          "signature": "Translate c m g b -\u003e Translate c m g b",
          "source": "src/Language-KURE-Walker.html#prunetdT",
          "type": "function"
        },
        "index": {
          "description": "Attempt to apply Translate in top-down manner pruning at successes",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "prunetdT",
          "normalized": "Translate a b c d-\u003eTranslate a b c d",
          "package": "kure",
          "signature": "Translate c m g b-\u003eTranslate c m g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:prunetdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat as many iterations of the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e as possible.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "repeatPathL",
          "package": "kure",
          "signature": "Path crumb -\u003e Lens c m g g",
          "source": "src/Language-KURE-Walker.html#repeatPathL",
          "type": "function"
        },
        "index": {
          "description": "Repeat as many iterations of the Path as possible",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "repeatPathL",
          "normalized": "Path a-\u003eLens b c d d",
          "package": "kure",
          "partial": "Path",
          "signature": "Path crumb-\u003eLens c m g g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:repeatPathL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the type of the current node summand matches the type of the argument.\n   Note that the argument \u003cem\u003evalue\u003c/em\u003e is never inspected, it is merely a proxy for a type argument.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "summandIsTypeT",
          "package": "kure",
          "signature": "a -\u003e Translate c m g Bool",
          "source": "src/Language-KURE-Walker.html#summandIsTypeT",
          "type": "function"
        },
        "index": {
          "description": "Test if the type of the current node summand matches the type of the argument Note that the argument value is never inspected it is merely proxy for type argument",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "summandIsTypeT",
          "normalized": "a-\u003eTranslate b c d Bool",
          "package": "kure",
          "partial": "Is Type",
          "signature": "a-\u003eTranslate c m g Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:summandIsTypeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if it is possible to construct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e along this path from the current node.\n\u003c/p\u003e",
          "module": "Language.KURE.Walker",
          "name": "testPathT",
          "package": "kure",
          "signature": "Path crumb -\u003e Translate c m g Bool",
          "source": "src/Language-KURE-Walker.html#testPathT",
          "type": "function"
        },
        "index": {
          "description": "Check if it is possible to construct Lens along this path from the current node",
          "hierarchy": "Language KURE Walker",
          "module": "Language.KURE.Walker",
          "name": "testPathT",
          "normalized": "Path a-\u003eTranslate b c d Bool",
          "package": "kure",
          "partial": "Path",
          "signature": "Path crumb-\u003eTranslate c m g Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:testPathT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main import module for KURE, which exports all the major components.\n The basic transformation functionality can be found in \u003ca\u003eLanguage.KURE.Translate\u003c/a\u003e,\n and the traversal functionality can be found in \u003ca\u003eLanguage.KURE.Walker\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE",
          "name": "KURE",
          "package": "kure",
          "source": "src/Language-KURE.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main import module for KURE which exports all the major components The basic transformation functionality can be found in Language.KURE.Translate and the traversal functionality can be found in Language.KURE.Walker",
          "hierarchy": "Language KURE",
          "module": "Language.KURE",
          "name": "KURE",
          "package": "kure",
          "partial": "KURE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE.html#"
      }
    }
  ]
]