[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA bi-directional translation is a translation that can be applied in either direction.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-BiTranslate.html",
        "fct-type": "module",
        "title": "BiTranslate"
      },
      "index": {
        "description": "bi-directional translation is translation that can be applied in either direction",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "BiTranslate",
        "normalized": "",
        "package": "kure",
        "partial": "Bi Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#t:BiRewrite",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e that shares the same source and target type.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-BiTranslate.html#BiRewrite",
        "fct-type": "type",
        "title": "BiRewrite"
      },
      "index": {
        "description": "BiTranslate that shares the same source and target type",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "BiRewrite",
        "normalized": "",
        "package": "kure",
        "partial": "Bi Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#t:BiTranslate",
      "description": {
        "fct-descr": "\u003cp\u003eAn undirected \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-BiTranslate.html#BiTranslate",
        "fct-type": "data",
        "title": "BiTranslate"
      },
      "index": {
        "description": "An undirected Translate",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "BiTranslate",
        "normalized": "",
        "package": "kure",
        "partial": "Bi Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:backwardT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the backward \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "BiTranslate c m a b -\u003e Translate c m b a",
        "fct-source": "src/Language-KURE-BiTranslate.html#backwardT",
        "fct-type": "function",
        "title": "backwardT"
      },
      "index": {
        "description": "Extract the backward Translate from BiTranslate",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "backwardT",
        "normalized": "BiTranslate a b c d-\u003eTranslate a b d c",
        "package": "kure",
        "partial": "",
        "signature": "BiTranslate c m a b-\u003eTranslate c m b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:beforeBiR",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the argument translation before \u003cem\u003eeither\u003c/em\u003e direction of the bidirectional rewrite.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a b -\u003e (b -\u003e BiRewrite c m a) -\u003e BiRewrite c m a",
        "fct-source": "src/Language-KURE-BiTranslate.html#beforeBiR",
        "fct-type": "function",
        "title": "beforeBiR"
      },
      "index": {
        "description": "Perform the argument translation before either direction of the bidirectional rewrite",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "beforeBiR",
        "normalized": "Translate a b c d-\u003e(d-\u003eBiRewrite a b c)-\u003eBiRewrite a b c",
        "package": "kure",
        "partial": "Bi",
        "signature": "Translate c m a b-\u003e(b-\u003eBiRewrite c m a)-\u003eBiRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:bidirectional",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e from two opposite \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a b -\u003e Translate c m b a -\u003e BiTranslate c m a b",
        "fct-source": "src/Language-KURE-BiTranslate.html#bidirectional",
        "fct-type": "function",
        "title": "bidirectional"
      },
      "index": {
        "description": "Construct BiTranslate from two opposite Translate",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "bidirectional",
        "normalized": "Translate a b c d-\u003eTranslate a b d c-\u003eBiTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a b-\u003eTranslate c m b a-\u003eBiTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:forwardT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the forward \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "BiTranslate c m a b -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-BiTranslate.html#forwardT",
        "fct-type": "function",
        "title": "forwardT"
      },
      "index": {
        "description": "Extract the forward Translate from BiTranslate",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "forwardT",
        "normalized": "BiTranslate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "BiTranslate c m a b-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:invertBiT",
      "description": {
        "fct-descr": "\u003cp\u003eInvert the forwards and backwards directions of a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "BiTranslate c m a b -\u003e BiTranslate c m b a",
        "fct-source": "src/Language-KURE-BiTranslate.html#invertBiT",
        "fct-type": "function",
        "title": "invertBiT"
      },
      "index": {
        "description": "Invert the forwards and backwards directions of BiTranslate",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "invertBiT",
        "normalized": "BiTranslate a b c d-\u003eBiTranslate a b d c",
        "package": "kure",
        "partial": "Bi",
        "signature": "BiTranslate c m a b-\u003eBiTranslate c m b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-BiTranslate.html#v:whicheverR",
      "description": {
        "fct-descr": "\u003cp\u003eTry the \u003ccode\u003e\u003ca\u003eBiRewrite\u003c/a\u003e\u003c/code\u003e forwards, then backwards if that fails.\n   Useful when you know which rule you want to apply, but not which direction to apply it in.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.BiTranslate",
        "fct-package": "kure",
        "fct-signature": "BiRewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-BiTranslate.html#whicheverR",
        "fct-type": "function",
        "title": "whicheverR"
      },
      "index": {
        "description": "Try the BiRewrite forwards then backwards if that fails Useful when you know which rule you want to apply but not which direction to apply it in",
        "hierarchy": "Language KURE BiTranslate",
        "module": "Language.KURE.BiTranslate",
        "name": "whicheverR",
        "normalized": "BiRewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "BiRewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some utility arrow routing combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html",
        "fct-type": "module",
        "title": "Arrow"
      },
      "index": {
        "description": "This module provides some utility arrow routing combinators",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "Arrow",
        "normalized": "",
        "package": "kure",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:argument",
      "description": {
        "fct-descr": "\u003cp\u003eApply a pure function to the argument to an arrow.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e b) -\u003e bi b c -\u003e bi a c",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#argument",
        "fct-type": "function",
        "title": "argument"
      },
      "index": {
        "description": "Apply pure function to the argument to an arrow",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "argument",
        "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
        "package": "kure",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ebi b c-\u003ebi a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow with a constant result.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "b -\u003e bi a b",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "An arrow with constant result",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "constant",
        "normalized": "a-\u003eb c a",
        "package": "kure",
        "partial": "",
        "signature": "b-\u003ebi a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eA pure arrow that duplicates its argument.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi a (a, a)",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "pure arrow that duplicates its argument",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "fork",
        "normalized": "a b(b,b)",
        "package": "kure",
        "partial": "",
        "signature": "bi a(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:forkFirst",
      "description": {
        "fct-descr": "\u003cp\u003eTag the result of an arrow with its argument.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi a b -\u003e bi a (b, a)",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#forkFirst",
        "fct-type": "function",
        "title": "forkFirst"
      },
      "index": {
        "description": "Tag the result of an arrow with its argument",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "forkFirst",
        "normalized": "a b c-\u003ea b(c,b)",
        "package": "kure",
        "partial": "First",
        "signature": "bi a b-\u003ebi a(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:forkSecond",
      "description": {
        "fct-descr": "\u003cp\u003eTag the result of an arrow with its argument.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi a b -\u003e bi a (a, b)",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#forkSecond",
        "fct-type": "function",
        "title": "forkSecond"
      },
      "index": {
        "description": "Tag the result of an arrow with its argument",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "forkSecond",
        "normalized": "a b c-\u003ea b(b,c)",
        "package": "kure",
        "partial": "Second",
        "signature": "bi a b-\u003ebi a(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:parallelise",
      "description": {
        "fct-descr": "\u003cp\u003eApply a collection of arrows to the same input, combining their results in a monoid.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "f (bi a b) -\u003e bi a b",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#parallelise",
        "fct-type": "function",
        "title": "parallelise"
      },
      "index": {
        "description": "Apply collection of arrows to the same input combining their results in monoid",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "parallelise",
        "normalized": "a(b c d)-\u003eb c d",
        "package": "kure",
        "partial": "",
        "signature": "f(bi a b)-\u003ebi a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eApply a pure function to the result of an arrow.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "(b -\u003e c) -\u003e bi a b -\u003e bi a c",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Apply pure function to the result of an arrow",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "result",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "kure",
        "partial": "",
        "signature": "(b-\u003ec)-\u003ebi a b-\u003ebi a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:serialise",
      "description": {
        "fct-descr": "\u003cp\u003eSequence (from left to right) a collection of \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "f (bi a a) -\u003e bi a a",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#serialise",
        "fct-type": "function",
        "title": "serialise"
      },
      "index": {
        "description": "Sequence from left to right collection of Category",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "serialise",
        "normalized": "a(b c c)-\u003eb c c",
        "package": "kure",
        "partial": "",
        "signature": "f(bi a a)-\u003ebi a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eA pure arrow that swaps the elements of a pair.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi (a, b) (b, a)",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "pure arrow that swaps the elements of pair",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "swap",
        "normalized": "a(b,c)(c,b)",
        "package": "kure",
        "partial": "",
        "signature": "bi(a,b)(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:toFst",
      "description": {
        "fct-descr": "\u003cp\u003eApply an arrow to the first element of a pair, discarding the second element.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi a b -\u003e bi (a, x) b",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#toFst",
        "fct-type": "function",
        "title": "toFst"
      },
      "index": {
        "description": "Apply an arrow to the first element of pair discarding the second element",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "toFst",
        "normalized": "a b c-\u003ea(b,d)c",
        "package": "kure",
        "partial": "Fst",
        "signature": "bi a b-\u003ebi(a,x)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Arrow.html#v:toSnd",
      "description": {
        "fct-descr": "\u003cp\u003eApply an arrow to the second element of a pair, discarding the first element.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Arrow",
        "fct-package": "kure",
        "fct-signature": "bi a b -\u003e bi (x, a) b",
        "fct-source": "src/Language-KURE-Combinators-Arrow.html#toSnd",
        "fct-type": "function",
        "title": "toSnd"
      },
      "index": {
        "description": "Apply an arrow to the second element of pair discarding the first element",
        "hierarchy": "Language KURE Combinators Arrow",
        "module": "Language.KURE.Combinators.Arrow",
        "name": "toSnd",
        "normalized": "a b c-\u003ea(d,b)c",
        "package": "kure",
        "partial": "Snd",
        "signature": "bi a b-\u003ebi(x,a)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides conditional monadic combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Combinators-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "This module provides conditional monadic combinators",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "kure",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardM",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eguardMsg\u003c/a\u003e\u003c/code\u003e, but with a default error message.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#guardM",
        "fct-type": "function",
        "title": "guardM"
      },
      "index": {
        "description": "As guardMsg but with default error message",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "guardM",
        "normalized": "Bool-\u003ea()",
        "package": "kure",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardMsg",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003eguard\u003c/code\u003e, but invokes \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003emzero\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "Bool -\u003e String -\u003e m ()",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#guardMsg",
        "fct-type": "function",
        "title": "guardMsg"
      },
      "index": {
        "description": "Similar to guard but invokes fail rather than mzero",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "guardMsg",
        "normalized": "Bool-\u003eString-\u003ea()",
        "package": "kure",
        "partial": "Msg",
        "signature": "Bool-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:guardMsgM",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eguardMsg\u003c/a\u003e\u003c/code\u003e, but with an \u003ccode\u003em Bool\u003c/code\u003e as argument.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "m Bool -\u003e String -\u003e m ()",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#guardMsgM",
        "fct-type": "function",
        "title": "guardMsgM"
      },
      "index": {
        "description": "As guardMsg but with an Bool as argument",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "guardMsgM",
        "normalized": "a Bool-\u003eString-\u003ea()",
        "package": "kure",
        "partial": "Msg",
        "signature": "m Bool-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003eif-then-else lifted over a monadic predicate.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "if-then-else lifted over monadic predicate",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "ifM",
        "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:unlessM",
      "description": {
        "fct-descr": "\u003cp\u003eIf the monadic predicate holds then fail, else perform the monadic action.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "m Bool -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#unlessM",
        "fct-type": "function",
        "title": "unlessM"
      },
      "index": {
        "description": "If the monadic predicate holds then fail else perform the monadic action",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "unlessM",
        "normalized": "a Bool-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Monad.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003eIf the monadic predicate holds then perform the monadic action, else fail.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Monad",
        "fct-package": "kure",
        "fct-signature": "m Bool -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-Combinators-Monad.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "If the monadic predicate holds then perform the monadic action else fail",
        "hierarchy": "Language KURE Combinators Monad",
        "module": "Language.KURE.Combinators.Monad",
        "name": "whenM",
        "normalized": "a Bool-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a variety of combinators over \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Combinators-Translate.html",
        "fct-type": "module",
        "title": "Translate"
      },
      "index": {
        "description": "This module provides variety of combinators over Translate and Rewrite",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "Translate",
        "normalized": "",
        "package": "kure",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#t:AnyR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e transformer, in combination with \u003ccode\u003e\u003ca\u003ewrapAnyR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunwrapAnyR\u003c/a\u003e\u003c/code\u003e,\n   causes a sequence of rewrites to succeed if at least one succeeds, converting failures to\n   identity rewrites.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#AnyR",
        "fct-type": "data",
        "title": "AnyR"
      },
      "index": {
        "description": "The AnyR transformer in combination with wrapAnyR and unwrapAnyR causes sequence of rewrites to succeed if at least one succeeds converting failures to identity rewrites",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "AnyR",
        "normalized": "",
        "package": "kure",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#t:OneR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e transformer, in combination with \u003ccode\u003e\u003ca\u003ewrapOneR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunwrapOneR\u003c/a\u003e\u003c/code\u003e,\n   causes a sequence of rewrites to only apply the first success, converting the remainder (and failures) to identity rewrites.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#OneR",
        "fct-type": "data",
        "title": "OneR"
      },
      "index": {
        "description": "The OneR transformer in combination with wrapOneR and unwrapOneR causes sequence of rewrites to only apply the first success converting the remainder and failures to identity rewrites",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "OneR",
        "normalized": "",
        "package": "kure",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:-62--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003ePerform two rewrites in sequence, succeeding if one or both succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#%3E%2B%3E",
        "fct-type": "function",
        "title": "(\u003e+\u003e)"
      },
      "index": {
        "description": "Perform two rewrites in sequence succeeding if one or both succeed",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "(\u003e+\u003e) \u003e+\u003e",
        "normalized": "Rewrite a b c-\u003eRewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m a-\u003eRewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:acceptR",
      "description": {
        "fct-descr": "\u003cp\u003eLook at the argument to a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, and choose to be either \u003ccode\u003e\u003ca\u003eidR\u003c/a\u003e\u003c/code\u003e or a failure.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e Bool) -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#acceptR",
        "fct-type": "function",
        "title": "acceptR"
      },
      "index": {
        "description": "Look at the argument to Rewrite and choose to be either idR or failure",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "acceptR",
        "normalized": "(a-\u003eBool)-\u003eRewrite b c a",
        "package": "kure",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:acceptWithFailMsgR",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eacceptR\u003c/a\u003e\u003c/code\u003e, but takes a custom failure message.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e Bool) -\u003e String -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#acceptWithFailMsgR",
        "fct-type": "function",
        "title": "acceptWithFailMsgR"
      },
      "index": {
        "description": "As acceptR but takes custom failure message",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "acceptWithFailMsgR",
        "normalized": "(a-\u003eBool)-\u003eString-\u003eRewrite b c a",
        "package": "kure",
        "partial": "With Fail Msg",
        "signature": "(a-\u003eBool)-\u003eString-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:accepterR",
      "description": {
        "fct-descr": "\u003cp\u003eA generalisation of \u003ccode\u003e\u003ca\u003eacceptR\u003c/a\u003e\u003c/code\u003e where the predicate is a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a Bool -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#accepterR",
        "fct-type": "function",
        "title": "accepterR"
      },
      "index": {
        "description": "generalisation of acceptR where the predicate is Translate",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "accepterR",
        "normalized": "Translate a b c Bool-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a Bool-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:andR",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a collection of rewrites in sequence, requiring all to succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "f (Rewrite c m a) -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#andR",
        "fct-type": "function",
        "title": "andR"
      },
      "index": {
        "description": "Perform collection of rewrites in sequence requiring all to succeed",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "andR",
        "normalized": "a(Rewrite b c d)-\u003eRewrite b c d",
        "package": "kure",
        "partial": "",
        "signature": "f(Rewrite c m a)-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:catchesT",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt each \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e until one succeeds, then return that result and discard the rest of the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "[Translate c m a b] -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#catchesT",
        "fct-type": "function",
        "title": "catchesT"
      },
      "index": {
        "description": "Attempt each Translate until one succeeds then return that result and discard the rest of the Translate",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "catchesT",
        "normalized": "[Translate a b c d]-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "[Translate c m a b]-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:changedByR",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e fail if the result value and the argument value satisfy the equality predicate.\n   This is a generalisation of \u003ccode\u003e\u003ca\u003echangedR\u003c/a\u003e\u003c/code\u003e.\n   \u003ccode\u003echangedR = changedByR (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Rewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#changedByR",
        "fct-type": "function",
        "title": "changedByR"
      },
      "index": {
        "description": "Makes Rewrite fail if the result value and the argument value satisfy the equality predicate This is generalisation of changedR changedR changedByR",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "changedByR",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eRewrite b c a-\u003eRewrite b c a",
        "package": "kure",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eRewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:changedR",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e fail if the result value equals the argument value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#changedR",
        "fct-type": "function",
        "title": "changedR"
      },
      "index": {
        "description": "Makes an Rewrite fail if the result value equals the argument value",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "changedR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:contextT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the current context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a c",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#contextT",
        "fct-type": "function",
        "title": "contextT"
      },
      "index": {
        "description": "Extract the current context",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "contextT",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:exposeT",
      "description": {
        "fct-descr": "\u003cp\u003eExpose the current context and value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a (c, a)",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#exposeT",
        "fct-type": "function",
        "title": "exposeT"
      },
      "index": {
        "description": "Expose the current context and value",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "exposeT",
        "normalized": "Translate a b c(a,c)",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a(c,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:guardT",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the Boolean is False, succeed if the Boolean is True.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m Bool ()",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#guardT",
        "fct-type": "function",
        "title": "guardT"
      },
      "index": {
        "description": "Fail if the Boolean is False succeed if the Boolean is True",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "guardT",
        "normalized": "Translate a b Bool()",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m Bool()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:idR",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#idR",
        "fct-type": "function",
        "title": "idR"
      },
      "index": {
        "description": "The identity Rewrite",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "idR",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:joinT",
      "description": {
        "fct-descr": "\u003cp\u003eAn identity translation that resembles a monadic \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m (m a) a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#joinT",
        "fct-type": "function",
        "title": "joinT"
      },
      "index": {
        "description": "An identity translation that resembles monadic join",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "joinT",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:liftContext",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to operate on a derived context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(c -\u003e c') -\u003e Translate c' m a b -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#liftContext",
        "fct-type": "function",
        "title": "liftContext"
      },
      "index": {
        "description": "Lift Translate to operate on derived context",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "liftContext",
        "normalized": "(a-\u003eb)-\u003eTranslate b c d e-\u003eTranslate a c d e",
        "package": "kure",
        "partial": "Context",
        "signature": "(c-\u003ec')-\u003eTranslate c' m a b-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:mapT",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a list.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a b -\u003e Translate c m (t a) (t b)",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#mapT",
        "fct-type": "function",
        "title": "mapT"
      },
      "index": {
        "description": "Map Translate over list",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "mapT",
        "normalized": "Translate a b c d-\u003eTranslate a b(e c)(e d)",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a b-\u003eTranslate c m(t a)(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:orR",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a collection of rewrites in sequence, succeeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "f (Rewrite c m a) -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#orR",
        "fct-type": "function",
        "title": "orR"
      },
      "index": {
        "description": "Perform collection of rewrites in sequence succeeding if any succeed",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "orR",
        "normalized": "a(Rewrite b c d)-\u003eRewrite b c d",
        "package": "kure",
        "partial": "",
        "signature": "f(Rewrite c m a)-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:readerT",
      "description": {
        "fct-descr": "\u003cp\u003eLook at the argument to the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e before choosing which \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to use.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e Translate c m a b) -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#readerT",
        "fct-type": "function",
        "title": "readerT"
      },
      "index": {
        "description": "Look at the argument to the Translate before choosing which Translate to use",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "readerT",
        "normalized": "(a-\u003eTranslate b c a d)-\u003eTranslate b c a d",
        "package": "kure",
        "partial": "",
        "signature": "(a-\u003eTranslate c m a b)-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:repeatR",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e until it fails, then return the result before the failure.\n   Requires at least the first attempt to succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#repeatR",
        "fct-type": "function",
        "title": "repeatR"
      },
      "index": {
        "description": "Repeat Rewrite until it fails then return the result before the failure Requires at least the first attempt to succeed",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "repeatR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:resultT",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the monadic result of a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e into a result in another monad.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(m b -\u003e n d) -\u003e Translate c m a b -\u003e Translate c n a d",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#resultT",
        "fct-type": "function",
        "title": "resultT"
      },
      "index": {
        "description": "Convert the monadic result of Translate into result in another monad",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "resultT",
        "normalized": "(a b-\u003ec d)-\u003eTranslate e a f b-\u003eTranslate e c f d",
        "package": "kure",
        "partial": "",
        "signature": "(m b-\u003en d)-\u003eTranslate c m a b-\u003eTranslate c n a d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:sideEffectR",
      "description": {
        "fct-descr": "\u003cp\u003eAn identity \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e with side-effects.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "(c -\u003e a -\u003e m ()) -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#sideEffectR",
        "fct-type": "function",
        "title": "sideEffectR"
      },
      "index": {
        "description": "An identity Rewrite with side-effects",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "sideEffectR",
        "normalized": "(a-\u003eb-\u003ec())-\u003eRewrite a c b",
        "package": "kure",
        "partial": "Effect",
        "signature": "(c-\u003ea-\u003em())-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:successT",
      "description": {
        "fct-descr": "\u003cp\u003eAn always successful \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a ()",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#successT",
        "fct-type": "function",
        "title": "successT"
      },
      "index": {
        "description": "An always successful Translate",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "successT",
        "normalized": "Translate a b c()",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:tryR",
      "description": {
        "fct-descr": "\u003cp\u003eCatch a failing \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, making it into an identity.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#tryR",
        "fct-type": "function",
        "title": "tryR"
      },
      "index": {
        "description": "Catch failing Rewrite making it into an identity",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "tryR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:unwrapAnyR",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c (AnyR m) a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#unwrapAnyR",
        "fct-type": "function",
        "title": "unwrapAnyR"
      },
      "index": {
        "description": "Unwrap Rewrite from the AnyR monad transformer",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "unwrapAnyR",
        "normalized": "Rewrite a(AnyR b)c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "Any",
        "signature": "Rewrite c(AnyR m)a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:unwrapOneR",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c (OneR m) a -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#unwrapOneR",
        "fct-type": "function",
        "title": "unwrapOneR"
      },
      "index": {
        "description": "Unwrap Rewrite from the OneR monad transformer",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "unwrapOneR",
        "normalized": "Rewrite a(OneR b)c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "One",
        "signature": "Rewrite c(OneR m)a-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:wrapAnyR",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAnyR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c (AnyR m) a",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#wrapAnyR",
        "fct-type": "function",
        "title": "wrapAnyR"
      },
      "index": {
        "description": "Wrap Rewrite using the AnyR monad transformer",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "wrapAnyR",
        "normalized": "Rewrite a b c-\u003eRewrite a(AnyR b)c",
        "package": "kure",
        "partial": "Any",
        "signature": "Rewrite c m a-\u003eRewrite c(AnyR m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators-Translate.html#v:wrapOneR",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eOneR\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Combinators.Translate",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c (OneR m) g",
        "fct-source": "src/Language-KURE-Combinators-Translate.html#wrapOneR",
        "fct-type": "function",
        "title": "wrapOneR"
      },
      "index": {
        "description": "Wrap Rewrite using the OneR monad transformer",
        "hierarchy": "Language KURE Combinators Translate",
        "module": "Language.KURE.Combinators.Translate",
        "name": "wrapOneR",
        "normalized": "Rewrite a b c-\u003eRewrite a(OneR b)c",
        "package": "kure",
        "partial": "One",
        "signature": "Rewrite c m g-\u003eRewrite c(OneR m)g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides various monadic and arrow combinators that are useful when\n working with \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Combinators",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "This module provides various monadic and arrow combinators that are useful when working with Translate and Rewrite",
        "hierarchy": "Language KURE Combinators",
        "module": "Language.KURE.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "kure",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Debug.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides (unsafe) debugging/tracing combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Debug",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Debug.html",
        "fct-type": "module",
        "title": "Debug"
      },
      "index": {
        "description": "This module provides unsafe debugging tracing combinators",
        "hierarchy": "Language KURE Debug",
        "module": "Language.KURE.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "kure",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Debug.html#v:debugR",
      "description": {
        "fct-descr": "\u003cp\u003etrace output of the value being rewritten; use for debugging only.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Debug",
        "fct-package": "kure",
        "fct-signature": "Int -\u003e String -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Debug.html#debugR",
        "fct-type": "function",
        "title": "debugR"
      },
      "index": {
        "description": "trace output of the value being rewritten use for debugging only",
        "hierarchy": "Language KURE Debug",
        "module": "Language.KURE.Debug",
        "name": "debugR",
        "normalized": "Int-\u003eString-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Int-\u003eString-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a utility data type for extending an existing context with extra information.\n The idea is that, after defining class instances for any user-specific contextual operations, it can be used for any ad-hoc context extensions.\n See the treatment of \u003ccode\u003e\u003ca\u003eExtendPath\u003c/a\u003e\u003c/code\u003e as an example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.ExtendableContext",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-ExtendableContext.html",
        "fct-type": "module",
        "title": "ExtendableContext"
      },
      "index": {
        "description": "This module provides utility data type for extending an existing context with extra information The idea is that after defining class instances for any user-specific contextual operations it can be used for any ad-hoc context extensions See the treatment of ExtendPath as an example",
        "hierarchy": "Language KURE ExtendableContext",
        "module": "Language.KURE.ExtendableContext",
        "name": "ExtendableContext",
        "normalized": "",
        "package": "kure",
        "partial": "Extendable Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#t:ExtendContext",
      "description": {
        "fct-descr": "\u003cp\u003eA context transformer, for augmenting a context with additional information.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.ExtendableContext",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-ExtendableContext.html#ExtendContext",
        "fct-type": "data",
        "title": "ExtendContext"
      },
      "index": {
        "description": "context transformer for augmenting context with additional information",
        "hierarchy": "Language KURE ExtendableContext",
        "module": "Language.KURE.ExtendableContext",
        "name": "ExtendContext",
        "normalized": "",
        "package": "kure",
        "partial": "Extend Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:baseContext",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the base context (without the extra information).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.ExtendableContext",
        "fct-package": "kure",
        "fct-signature": "ExtendContext c e -\u003e c",
        "fct-source": "src/Language-KURE-ExtendableContext.html#baseContext",
        "fct-type": "function",
        "title": "baseContext"
      },
      "index": {
        "description": "Retrieve the base context without the extra information",
        "hierarchy": "Language KURE ExtendableContext",
        "module": "Language.KURE.ExtendableContext",
        "name": "baseContext",
        "normalized": "ExtendContext a b-\u003ea",
        "package": "kure",
        "partial": "Context",
        "signature": "ExtendContext c e-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:extendContext",
      "description": {
        "fct-descr": "\u003cp\u003eExtend a context with some additional information.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.ExtendableContext",
        "fct-package": "kure",
        "fct-signature": "e -\u003e c -\u003e ExtendContext c e",
        "fct-source": "src/Language-KURE-ExtendableContext.html#extendContext",
        "fct-type": "function",
        "title": "extendContext"
      },
      "index": {
        "description": "Extend context with some additional information",
        "hierarchy": "Language KURE ExtendableContext",
        "module": "Language.KURE.ExtendableContext",
        "name": "extendContext",
        "normalized": "a-\u003eb-\u003eExtendContext b a",
        "package": "kure",
        "partial": "Context",
        "signature": "e-\u003ec-\u003eExtendContext c e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-ExtendableContext.html#v:extraContext",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the extra contextual information.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.ExtendableContext",
        "fct-package": "kure",
        "fct-signature": "ExtendContext c e -\u003e e",
        "fct-source": "src/Language-KURE-ExtendableContext.html#extraContext",
        "fct-type": "function",
        "title": "extraContext"
      },
      "index": {
        "description": "Retrieve the extra contextual information",
        "hierarchy": "Language KURE ExtendableContext",
        "module": "Language.KURE.ExtendableContext",
        "name": "extraContext",
        "normalized": "ExtendContext a b-\u003eb",
        "package": "kure",
        "partial": "Context",
        "signature": "ExtendContext c e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type class for injective functions (and their projections),\n and some useful interactions with \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Injection.html",
        "fct-type": "module",
        "title": "Injection"
      },
      "index": {
        "description": "This module provides type class for injective functions and their projections and some useful interactions with Translate",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "Injection",
        "normalized": "",
        "package": "kure",
        "partial": "Injection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#t:Injection",
      "description": {
        "fct-descr": "\u003cp\u003eA class of injective functions from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e, and their projections.\n   The following law is expected to hold:\n\u003c/p\u003e\u003cpre\u003e project (inject a) == Just a\n\u003c/pre\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "class",
        "fct-source": "src/Language-KURE-Injection.html#Injection",
        "fct-type": "class",
        "title": "Injection"
      },
      "index": {
        "description": "class of injective functions from to and their projections The following law is expected to hold project inject Just",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "Injection",
        "normalized": "",
        "package": "kure",
        "partial": "Injection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractR",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over an injected value into a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over a projection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Injection.html#extractR",
        "fct-type": "function",
        "title": "extractR"
      },
      "index": {
        "description": "Convert Rewrite over an injected value into Rewrite over projection of that value failing if that injected value cannot be projected",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "extractR",
        "normalized": "Rewrite a b c-\u003eRewrite a b d",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractT",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over an injected value into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a non-injected value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Injection.html#extractT",
        "fct-type": "function",
        "title": "extractT"
      },
      "index": {
        "description": "Convert Translate over an injected value into Translate over non-injected value",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "extractT",
        "normalized": "Translate a b c d-\u003eTranslate a b e d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:extractWithFailMsgR",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eextractR\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if extraction fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "String -\u003e Rewrite c m g -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Injection.html#extractWithFailMsgR",
        "fct-type": "function",
        "title": "extractWithFailMsgR"
      },
      "index": {
        "description": "As extractR but takes custom error message to use if extraction fails",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "extractWithFailMsgR",
        "normalized": "String-\u003eRewrite a b c-\u003eRewrite a b d",
        "package": "kure",
        "partial": "With Fail Msg",
        "signature": "String-\u003eRewrite c m g-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:inject",
      "description": {
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Language-KURE-Injection.html#inject",
        "fct-type": "method",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "inject",
        "normalized": "a-\u003eb",
        "package": "kure",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:injectM",
      "description": {
        "fct-descr": "\u003cp\u003eInjects a value and lifts it into a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "a -\u003e m g",
        "fct-source": "src/Language-KURE-Injection.html#injectM",
        "fct-type": "function",
        "title": "injectM"
      },
      "index": {
        "description": "Injects value and lifts it into Monad",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "injectM",
        "normalized": "a-\u003eb c",
        "package": "kure",
        "partial": "",
        "signature": "a-\u003em g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:injectT",
      "description": {
        "fct-descr": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003einject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Translate c m a g",
        "fct-source": "src/Language-KURE-Injection.html#injectT",
        "fct-type": "function",
        "title": "injectT"
      },
      "index": {
        "description": "Lifted inject",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "injectT",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:project",
      "description": {
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "b -\u003e Maybe a",
        "fct-source": "src/Language-KURE-Injection.html#project",
        "fct-type": "method",
        "title": "project"
      },
      "index": {
        "description": "",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "project",
        "normalized": "a-\u003eMaybe b",
        "package": "kure",
        "partial": "",
        "signature": "b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectM",
      "description": {
        "fct-descr": "\u003cp\u003eProjects a value and lifts it into a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, with the possibility of failure.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "g -\u003e m a",
        "fct-source": "src/Language-KURE-Injection.html#projectM",
        "fct-type": "function",
        "title": "projectM"
      },
      "index": {
        "description": "Projects value and lifts it into Monad with the possibility of failure",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "projectM",
        "normalized": "a-\u003eb c",
        "package": "kure",
        "partial": "",
        "signature": "g-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectT",
      "description": {
        "fct-descr": "\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e fails if the projection fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Translate c m g a",
        "fct-source": "src/Language-KURE-Injection.html#projectT",
        "fct-type": "function",
        "title": "projectT"
      },
      "index": {
        "description": "Lifted project the Translate fails if the projection fails",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "projectT",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:projectWithFailMsgM",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eprojectM\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if projection fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "String -\u003e g -\u003e m a",
        "fct-source": "src/Language-KURE-Injection.html#projectWithFailMsgM",
        "fct-type": "function",
        "title": "projectWithFailMsgM"
      },
      "index": {
        "description": "As projectM but takes custom error message to use if projection fails",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "projectWithFailMsgM",
        "normalized": "String-\u003ea-\u003eb c",
        "package": "kure",
        "partial": "With Fail Msg",
        "signature": "String-\u003eg-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteR",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e into over a value into a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e over an injection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m a -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Injection.html#promoteR",
        "fct-type": "function",
        "title": "promoteR"
      },
      "index": {
        "description": "Promote Rewrite into over value into Rewrite over an injection of that value failing if that injected value cannot be projected",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "promoteR",
        "normalized": "Rewrite a b c-\u003eRewrite a b d",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m a-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteT",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over a value into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e over an injection of that value,\n   (failing if that injected value cannot be projected).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "Translate c m a b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Injection.html#promoteT",
        "fct-type": "function",
        "title": "promoteT"
      },
      "index": {
        "description": "Promote Translate over value into Translate over an injection of that value failing if that injected value cannot be projected",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "promoteT",
        "normalized": "Translate a b c d-\u003eTranslate a b e d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteWithFailMsgR",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003epromoteR\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if promotion fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "String -\u003e Rewrite c m a -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Injection.html#promoteWithFailMsgR",
        "fct-type": "function",
        "title": "promoteWithFailMsgR"
      },
      "index": {
        "description": "As promoteR but takes custom error message to use if promotion fails",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "promoteWithFailMsgR",
        "normalized": "String-\u003eRewrite a b c-\u003eRewrite a b d",
        "package": "kure",
        "partial": "With Fail Msg",
        "signature": "String-\u003eRewrite c m a-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Injection.html#v:promoteWithFailMsgT",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003epromoteT\u003c/a\u003e\u003c/code\u003e, but takes a custom error message to use if promotion fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Injection",
        "fct-package": "kure",
        "fct-signature": "String -\u003e Translate c m a b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Injection.html#promoteWithFailMsgT",
        "fct-type": "function",
        "title": "promoteWithFailMsgT"
      },
      "index": {
        "description": "As promoteT but takes custom error message to use if promotion fails",
        "hierarchy": "Language KURE Injection",
        "module": "Language.KURE.Injection",
        "name": "promoteWithFailMsgT",
        "normalized": "String-\u003eTranslate a b c d-\u003eTranslate a b e d",
        "package": "kure",
        "partial": "With Fail Msg",
        "signature": "String-\u003eTranslate c m a b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the KURE \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e type, along with some useful operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "This module defines the KURE Lens type along with some useful operations",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "kure",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#t:Lens",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e is a way to focus on a sub-structure of type \u003ccode\u003eb\u003c/code\u003e from a structure of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-Lens.html#Lens",
        "fct-type": "data",
        "title": "Lens"
      },
      "index": {
        "description": "Lens is way to focus on sub-structure of type from structure of type",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "kure",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:bidirectionalL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBiTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "BiTranslate c m a b -\u003e Lens c m a b",
        "fct-source": "src/Language-KURE-Lens.html#bidirectionalL",
        "fct-type": "function",
        "title": "bidirectionalL"
      },
      "index": {
        "description": "Construct Lens from BiTranslate",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "bidirectionalL",
        "normalized": "BiTranslate a b c d-\u003eLens a b c d",
        "package": "kure",
        "partial": "",
        "signature": "BiTranslate c m a b-\u003eLens c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:catchL",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e is deemed to have failed (and thus can be caught) if either it fails on the way down, or,\n   crucially, if it would fail on the way up for an unmodified value.  However, actual failure on the way up is not caught\n   (as by then it is too late to use an alternative \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e).  This means that, in theory, a use of \u003ccode\u003e\u003ca\u003ecatchL\u003c/a\u003e\u003c/code\u003e could cause a succeeding \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e application to fail.\n   But provided \u003ccode\u003e\u003ca\u003elens\u003c/a\u003e\u003c/code\u003e is used correctly, this should never happen.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a b -\u003e (String -\u003e Lens c m a b) -\u003e Lens c m a b",
        "fct-source": "src/Language-KURE-Lens.html#catchL",
        "fct-type": "function",
        "title": "catchL"
      },
      "index": {
        "description": "Lens is deemed to have failed and thus can be caught if either it fails on the way down or crucially if it would fail on the way up for an unmodified value However actual failure on the way up is not caught as by then it is too late to use an alternative Lens This means that in theory use of catchL could cause succeeding Lens application to fail But provided lens is used correctly this should never happen",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "catchL",
        "normalized": "Lens a b c d-\u003e(String-\u003eLens a b c d)-\u003eLens a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Lens c m a b-\u003e(String-\u003eLens c m a b)-\u003eLens c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:failL",
      "description": {
        "fct-descr": "\u003cp\u003eThe failing \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "String -\u003e Lens c m a b",
        "fct-source": "src/Language-KURE-Lens.html#failL",
        "fct-type": "function",
        "title": "failL"
      },
      "index": {
        "description": "The failing Lens",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "failL",
        "normalized": "String-\u003eLens a b c d",
        "package": "kure",
        "partial": "",
        "signature": "String-\u003eLens c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:focusR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a b -\u003e Rewrite c m b -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Lens.html#focusR",
        "fct-type": "function",
        "title": "focusR"
      },
      "index": {
        "description": "Apply Rewrite at point specified by Lens",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "focusR",
        "normalized": "Lens a b c d-\u003eRewrite a b d-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Lens c m a b-\u003eRewrite c m b-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:focusT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a b -\u003e Translate c m b d -\u003e Translate c m a d",
        "fct-source": "src/Language-KURE-Lens.html#focusT",
        "fct-type": "function",
        "title": "focusT"
      },
      "index": {
        "description": "Apply Translate at point specified by Lens",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "focusT",
        "normalized": "Lens a b c d-\u003eTranslate a b d e-\u003eTranslate a b c e",
        "package": "kure",
        "partial": "",
        "signature": "Lens c m a b-\u003eTranslate c m b d-\u003eTranslate c m a d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:injectL",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the injection of a value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a g",
        "fct-source": "src/Language-KURE-Lens.html#injectL",
        "fct-type": "function",
        "title": "injectL"
      },
      "index": {
        "description": "Lens to the injection of value",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "injectL",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n   If the unfocussing function is applied to the value focussed on then it should succeed,\n   and produce the same value as the original argument (of type \u003ccode\u003ea\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Translate c m a ((c, b), b -\u003e m a) -\u003e Lens c m a b",
        "fct-source": "src/Language-KURE-Lens.html#lens",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "The primitive way of building Lens If the unfocussing function is applied to the value focussed on then it should succeed and produce the same value as the original argument of type",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "lens",
        "normalized": "Translate a b c((a,d),d-\u003eb c)-\u003eLens a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a((c,b),b-\u003em a)-\u003eLens c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:lensT",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that produces a sub-structure (and its context) and an unfocussing function.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a b -\u003e Translate c m a ((c, b), b -\u003e m a)",
        "fct-source": "src/Language-KURE-Lens.html#lensT",
        "fct-type": "function",
        "title": "lensT"
      },
      "index": {
        "description": "Convert Lens into Translate that produces sub-structure and its context and an unfocussing function",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "lensT",
        "normalized": "Lens a b c d-\u003eTranslate a b c((a,d),d-\u003eb c)",
        "package": "kure",
        "partial": "",
        "signature": "Lens c m a b-\u003eTranslate c m a((c,b),b-\u003em a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:projectL",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the projection of a value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m g a",
        "fct-source": "src/Language-KURE-Lens.html#projectL",
        "fct-type": "function",
        "title": "projectL"
      },
      "index": {
        "description": "Lens to the projection of value",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "projectL",
        "normalized": "",
        "package": "kure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:pureL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from two pure functions.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Lens c m a b",
        "fct-source": "src/Language-KURE-Lens.html#pureL",
        "fct-type": "function",
        "title": "pureL"
      },
      "index": {
        "description": "Construct Lens from two pure functions",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "pureL",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens c d a b",
        "package": "kure",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Lens.html#v:testLensT",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the focusing succeeds, and additionally whether unfocussing from an unchanged value would succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Lens",
        "fct-package": "kure",
        "fct-signature": "Lens c m a b -\u003e Translate c m a Bool",
        "fct-source": "src/Language-KURE-Lens.html#testLensT",
        "fct-type": "function",
        "title": "testLensT"
      },
      "index": {
        "description": "Check if the focusing succeeds and additionally whether unfocussing from an unchanged value would succeed",
        "hierarchy": "Language KURE Lens",
        "module": "Language.KURE.Lens",
        "name": "testLensT",
        "normalized": "Lens a b c d-\u003eTranslate a b c Bool",
        "package": "kure",
        "partial": "Lens",
        "signature": "Lens c m a b-\u003eTranslate c m a Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides classes for catch-like operations on \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-MonadCatch.html",
        "fct-type": "module",
        "title": "MonadCatch"
      },
      "index": {
        "description": "This module provides classes for catch-like operations on Monad",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "kure",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#t:KureM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e is the minimal structure that can be an instance of \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e.\n   The KURE user is free to either use \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e or provide their own monad.\n   \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e is essentially the same as \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, except that it supports a \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e instance which \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e does not (because its \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e)\n   A major advantage of this is that monadic pattern match failures are caught safely.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-MonadCatch.html#KureM",
        "fct-type": "data",
        "title": "KureM"
      },
      "index": {
        "description": "KureM is the minimal structure that can be an instance of MonadCatch The KURE user is free to either use KureM or provide their own monad KureM is essentially the same as Either String except that it supports MonadCatch instance which Either String does not because its fail method calls error major advantage of this is that monadic pattern match failures are caught safely",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "KureM",
        "normalized": "",
        "package": "kure",
        "partial": "Kure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#t:MonadCatch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es with a catch for \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n   The following laws are expected to hold:\n\u003c/p\u003e\u003cpre\u003e fail msg `catchM` f == f msg\n return a `catchM` f == return a\n\u003c/pre\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "class",
        "fct-source": "src/Language-KURE-MonadCatch.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "Monad with catch for fail The following laws are expected to hold fail msg catchM msg return catchM return",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "kure",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:-60--43-",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic catch that ignores the error message.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#%3C%2B",
        "fct-type": "function",
        "title": "(\u003c+)"
      },
      "index": {
        "description": "monadic catch that ignores the error message",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "(\u003c+) \u003c+",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:attemptM",
      "description": {
        "fct-descr": "\u003cp\u003eCatch a failing monadic computation, making it succeed with an error message.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e m (Either String a)",
        "fct-source": "src/Language-KURE-MonadCatch.html#attemptM",
        "fct-type": "function",
        "title": "attemptM"
      },
      "index": {
        "description": "Catch failing monadic computation making it succeed with an error message",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "attemptM",
        "normalized": "a b-\u003ea(Either String b)",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003em(Either String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:catchM",
      "description": {
        "fct-descr": "\u003cp\u003eCatch a failing monadic computation.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e (String -\u003e m a) -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#catchM",
        "fct-type": "method",
        "title": "catchM"
      },
      "index": {
        "description": "Catch failing monadic computation",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "catchM",
        "normalized": "a b-\u003e(String-\u003ea b)-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003e(String-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:catchesM",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the first monadic computation that succeeds, discarding any thereafter.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "f (m a) -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#catchesM",
        "fct-type": "function",
        "title": "catchesM"
      },
      "index": {
        "description": "Select the first monadic computation that succeeds discarding any thereafter",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "catchesM",
        "normalized": "a(b c)-\u003eb c",
        "package": "kure",
        "partial": "",
        "signature": "f(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:fromKureM",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value from a \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e, providing a function to handle the error case.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "(String -\u003e a) -\u003e KureM a -\u003e a",
        "fct-source": "src/Language-KURE-MonadCatch.html#fromKureM",
        "fct-type": "function",
        "title": "fromKureM"
      },
      "index": {
        "description": "Get the value from KureM providing function to handle the error case",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "fromKureM",
        "normalized": "(String-\u003ea)-\u003eKureM a-\u003ea",
        "package": "kure",
        "partial": "Kure",
        "signature": "(String-\u003ea)-\u003eKureM a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:liftAndCatchIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, catching failures in the target monad.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#liftAndCatchIO",
        "fct-type": "function",
        "title": "liftAndCatchIO"
      },
      "index": {
        "description": "Lift computation from the IO monad catching failures in the target monad",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "liftAndCatchIO",
        "normalized": "IO a-\u003eb a",
        "package": "kure",
        "partial": "And Catch IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:liftKureM",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e computation to any other monad.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "KureM a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#liftKureM",
        "fct-type": "function",
        "title": "liftKureM"
      },
      "index": {
        "description": "Lift KureM computation to any other monad",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "liftKureM",
        "normalized": "KureM a-\u003eb a",
        "package": "kure",
        "partial": "Kure",
        "signature": "KureM a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:modFailMsg",
      "description": {
        "fct-descr": "\u003cp\u003eModify the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "(String -\u003e String) -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#modFailMsg",
        "fct-type": "function",
        "title": "modFailMsg"
      },
      "index": {
        "description": "Modify the error message of failing monadic computation Successful computations are unaffected",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "modFailMsg",
        "normalized": "(String-\u003eString)-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "Fail Msg",
        "signature": "(String-\u003eString)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:mtryM",
      "description": {
        "fct-descr": "\u003cp\u003eCatch a failing monadic computation, making it succeed with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#mtryM",
        "fct-type": "function",
        "title": "mtryM"
      },
      "index": {
        "description": "Catch failing monadic computation making it succeed with mempty",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "mtryM",
        "normalized": "a b-\u003ea b",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:notM",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the monadic computation succeeds; succeed with \u003ccode\u003e()\u003c/code\u003e if it fails.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Language-KURE-MonadCatch.html#notM",
        "fct-type": "function",
        "title": "notM"
      },
      "index": {
        "description": "Fail if the monadic computation succeeds succeed with if it fails",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "notM",
        "normalized": "a b-\u003ea()",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:prefixFailMsg",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a prefix to the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#prefixFailMsg",
        "fct-type": "function",
        "title": "prefixFailMsg"
      },
      "index": {
        "description": "Add prefix to the error message of failing monadic computation Successful computations are unaffected",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "prefixFailMsg",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "Fail Msg",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:runKureM",
      "description": {
        "fct-descr": "\u003cp\u003eEliminator for \u003ccode\u003e\u003ca\u003eKureM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e b) -\u003e (String -\u003e b) -\u003e KureM a -\u003e b",
        "fct-source": "src/Language-KURE-MonadCatch.html#runKureM",
        "fct-type": "function",
        "title": "runKureM"
      },
      "index": {
        "description": "Eliminator for KureM",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "runKureM",
        "normalized": "(a-\u003eb)-\u003e(String-\u003eb)-\u003eKureM a-\u003eb",
        "package": "kure",
        "partial": "Kure",
        "signature": "(a-\u003eb)-\u003e(String-\u003eb)-\u003eKureM a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:setFailMsg",
      "description": {
        "fct-descr": "\u003cp\u003eSet the error message of a failing monadic computation.\n   Successful computations are unaffected.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#setFailMsg",
        "fct-type": "function",
        "title": "setFailMsg"
      },
      "index": {
        "description": "Set the error message of failing monadic computation Successful computations are unaffected",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "setFailMsg",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "Fail Msg",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:testM",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a monadic computation succeeds.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "m a -\u003e m Bool",
        "fct-source": "src/Language-KURE-MonadCatch.html#testM",
        "fct-type": "function",
        "title": "testM"
      },
      "index": {
        "description": "Determine if monadic computation succeeds",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "testM",
        "normalized": "a b-\u003ea Bool",
        "package": "kure",
        "partial": "",
        "signature": "m a-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:tryM",
      "description": {
        "fct-descr": "\u003cp\u003eCatch a failing monadic computation, making it succeed with a constant value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "a -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#tryM",
        "fct-type": "function",
        "title": "tryM"
      },
      "index": {
        "description": "Catch failing monadic computation making it succeed with constant value",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "tryM",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "kure",
        "partial": "",
        "signature": "a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-MonadCatch.html#v:withPatFailMsg",
      "description": {
        "fct-descr": "\u003cp\u003eUse the given error message whenever a monadic pattern match failure occurs.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.MonadCatch",
        "fct-package": "kure",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Language-KURE-MonadCatch.html#withPatFailMsg",
        "fct-type": "function",
        "title": "withPatFailMsg"
      },
      "index": {
        "description": "Use the given error message whenever monadic pattern match failure occurs",
        "hierarchy": "Language KURE MonadCatch",
        "module": "Language.KURE.MonadCatch",
        "name": "withPatFailMsg",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "kure",
        "partial": "Pat Fail Msg",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides several Path abstractions, used for denoting a path through the tree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "This module provides several Path abstractions used for denoting path through the tree",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "Path",
        "normalized": "",
        "package": "kure",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:AbsolutePath",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e from the root.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-Path.html#AbsolutePath",
        "fct-type": "type",
        "title": "AbsolutePath"
      },
      "index": {
        "description": "SnocPath from the root",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "AbsolutePath",
        "normalized": "",
        "package": "kure",
        "partial": "Absolute Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:ExtendPath",
      "description": {
        "fct-descr": "\u003cp\u003eA class of things that can be extended by crumbs.\n   Typically, \u003ccode\u003ec\u003c/code\u003e is a context type.\n   The typical use is to extend an \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e stored in the context (during tree traversal).\n   Note however, that if an \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e is not stored in the context, an instance can still be declared with \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e crumb)\u003c/code\u003e as an identity operation.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "class",
        "fct-source": "src/Language-KURE-Path.html#ExtendPath",
        "fct-type": "class",
        "title": "ExtendPath"
      },
      "index": {
        "description": "class of things that can be extended by crumbs Typically is context type The typical use is to extend an AbsolutePath stored in the context during tree traversal Note however that if an AbsolutePath is not stored in the context an instance can still be declared with crumb as an identity operation",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "ExtendPath",
        "normalized": "",
        "package": "kure",
        "partial": "Extend Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:LocalPath",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e from a local origin.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-Path.html#LocalPath",
        "fct-type": "type",
        "title": "LocalPath"
      },
      "index": {
        "description": "SnocPath from local origin",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "LocalPath",
        "normalized": "",
        "package": "kure",
        "partial": "Local Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e is just a list.\n   The intent is that a path represents a route through the tree from an arbitrary node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-Path.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "Path is just list The intent is that path represents route through the tree from an arbitrary node",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "Path",
        "normalized": "",
        "package": "kure",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:ReadPath",
      "description": {
        "fct-descr": "\u003cp\u003eA class for contexts that store the current \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e, allowing transformations to depend upon it.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "class",
        "fct-source": "src/Language-KURE-Path.html#ReadPath",
        "fct-type": "class",
        "title": "ReadPath"
      },
      "index": {
        "description": "class for contexts that store the current AbsolutePath allowing transformations to depend upon it",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "ReadPath",
        "normalized": "",
        "package": "kure",
        "partial": "Read Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#t:SnocPath",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e is a list stored in reverse order.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "newtype",
        "fct-source": "src/Language-KURE-Path.html#SnocPath",
        "fct-type": "newtype",
        "title": "SnocPath"
      },
      "index": {
        "description": "SnocPath is list stored in reverse order",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "SnocPath",
        "normalized": "",
        "package": "kure",
        "partial": "Snoc Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the current \u003ccode\u003e\u003ca\u003eAbsolutePath\u003c/a\u003e\u003c/code\u003e by one crumb.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "c -\u003e crumb -\u003e c",
        "fct-source": "src/Language-KURE-Path.html#%40%40",
        "fct-type": "method",
        "title": "(@@)"
      },
      "index": {
        "description": "Extend the current AbsolutePath by one crumb",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "(@@) @@",
        "normalized": "a-\u003eb-\u003ea",
        "package": "kure",
        "partial": "",
        "signature": "c-\u003ecrumb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:SnocPath",
      "description": {
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "SnocPath [crumb]",
        "fct-source": "src/Language-KURE-Path.html#SnocPath",
        "fct-type": "function",
        "title": "SnocPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "SnocPath",
        "normalized": "SnocPath[a]",
        "package": "kure",
        "partial": "Snoc Path",
        "signature": "SnocPath[crumb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:absPath",
      "description": {
        "fct-descr": "\u003cp\u003eRead the current absolute path.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "c -\u003e AbsolutePath crumb",
        "fct-source": "src/Language-KURE-Path.html#absPath",
        "fct-type": "method",
        "title": "absPath"
      },
      "index": {
        "description": "Read the current absolute path",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "absPath",
        "normalized": "a-\u003eAbsolutePath b",
        "package": "kure",
        "partial": "Path",
        "signature": "c-\u003eAbsolutePath crumb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:absPathT",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "Translate c m a (AbsolutePath crumb)",
        "fct-source": "src/Language-KURE-Path.html#absPathT",
        "fct-type": "function",
        "title": "absPathT"
      },
      "index": {
        "description": "Lifted version of absPath",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "absPathT",
        "normalized": "",
        "package": "kure",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:lastCrumb",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last crumb from a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e.  O(1).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "SnocPath crumb -\u003e Maybe crumb",
        "fct-source": "src/Language-KURE-Path.html#lastCrumb",
        "fct-type": "function",
        "title": "lastCrumb"
      },
      "index": {
        "description": "Get the last crumb from SnocPath",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "lastCrumb",
        "normalized": "SnocPath a-\u003eMaybe a",
        "package": "kure",
        "partial": "Crumb",
        "signature": "SnocPath crumb-\u003eMaybe crumb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:lastCrumbT",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003e\u003ca\u003elastCrumb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "Translate c m a crumb",
        "fct-source": "src/Language-KURE-Path.html#lastCrumbT",
        "fct-type": "function",
        "title": "lastCrumbT"
      },
      "index": {
        "description": "Lifted version of lastCrumb",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "lastCrumbT",
        "normalized": "",
        "package": "kure",
        "partial": "Crumb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:pathToSnocPath",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e.  O(n).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e SnocPath crumb",
        "fct-source": "src/Language-KURE-Path.html#pathToSnocPath",
        "fct-type": "function",
        "title": "pathToSnocPath"
      },
      "index": {
        "description": "Convert Path to SnocPath",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "pathToSnocPath",
        "normalized": "Path a-\u003eSnocPath a",
        "package": "kure",
        "partial": "To Snoc Path",
        "signature": "Path crumb-\u003eSnocPath crumb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Path.html#v:snocPathToPath",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSnocPath\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.  O(n).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Path",
        "fct-package": "kure",
        "fct-signature": "SnocPath crumb -\u003e Path crumb",
        "fct-source": "src/Language-KURE-Path.html#snocPathToPath",
        "fct-type": "function",
        "title": "snocPathToPath"
      },
      "index": {
        "description": "Convert SnocPath to Path",
        "hierarchy": "Language KURE Path",
        "module": "Language.KURE.Path",
        "name": "snocPathToPath",
        "normalized": "SnocPath a-\u003ePath a",
        "package": "kure",
        "partial": "Path To Path",
        "signature": "SnocPath crumb-\u003ePath crumb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators to find \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es sub-nodes specified by a predicate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Pathfinder.html",
        "fct-type": "module",
        "title": "Pathfinder"
      },
      "index": {
        "description": "This module provides combinators to find LocalPath sub-nodes specified by predicate",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "Pathfinder",
        "normalized": "",
        "package": "kure",
        "partial": "Pathfinder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#t:WithLocalPath",
      "description": {
        "fct-descr": "\u003cp\u003eA context transformer that adds a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e (from the current node) to the context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-Pathfinder.html#WithLocalPath",
        "fct-type": "type",
        "title": "WithLocalPath"
      },
      "index": {
        "description": "context transformer that adds LocalPath from the current node to the context",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "WithLocalPath",
        "normalized": "",
        "package": "kure",
        "partial": "With Local Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:acceptLocalPathT",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e if the predicate translation succeeds.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate (WithLocalPath c crumb) m g (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#acceptLocalPathT",
        "fct-type": "function",
        "title": "acceptLocalPathT"
      },
      "index": {
        "description": "Return the current LocalPath if the predicate translation succeeds",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "acceptLocalPathT",
        "normalized": "Translate a b c Bool-\u003eTranslate(WithLocalPath a d)b c(LocalPath d)",
        "package": "kure",
        "partial": "Local Path",
        "signature": "Translate c m g Bool-\u003eTranslate(WithLocalPath c crumb)m g(LocalPath crumb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:exposeLocalPathT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the current \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e from the context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate (WithLocalPath c crumb) m a (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#exposeLocalPathT",
        "fct-type": "function",
        "title": "exposeLocalPathT"
      },
      "index": {
        "description": "Extract the current LocalPath from the context",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "exposeLocalPathT",
        "normalized": "",
        "package": "kure",
        "partial": "Local Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:oneNonEmptyPathToT",
      "description": {
        "fct-descr": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the first descendent node that satisfies the predicate (in a pre-order traversal).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#oneNonEmptyPathToT",
        "fct-type": "function",
        "title": "oneNonEmptyPathToT"
      },
      "index": {
        "description": "Find the LocalPath to the first descendent node that satisfies the predicate in pre-order traversal",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "oneNonEmptyPathToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
        "package": "kure",
        "partial": "Non Empty Path To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:onePathToT",
      "description": {
        "fct-descr": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the first node that satisfies the predicate (in a pre-order traversal).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#onePathToT",
        "fct-type": "function",
        "title": "onePathToT"
      },
      "index": {
        "description": "Find the LocalPath to the first node that satisfies the predicate in pre-order traversal",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "onePathToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
        "package": "kure",
        "partial": "Path To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:pathsToT",
      "description": {
        "fct-descr": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es to every node that satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g [LocalPath crumb]",
        "fct-source": "src/Language-KURE-Pathfinder.html#pathsToT",
        "fct-type": "function",
        "title": "pathsToT"
      },
      "index": {
        "description": "Find the LocalPath to every node that satisfies the predicate",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "pathsToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c[LocalPath d]",
        "package": "kure",
        "partial": "To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g[LocalPath crumb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:prunePathsToT",
      "description": {
        "fct-descr": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003es to every node that satisfies the predicate, ignoring nodes below successes.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g [LocalPath crumb]",
        "fct-source": "src/Language-KURE-Pathfinder.html#prunePathsToT",
        "fct-type": "function",
        "title": "prunePathsToT"
      },
      "index": {
        "description": "Find the LocalPath to every node that satisfies the predicate ignoring nodes below successes",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "prunePathsToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c[LocalPath d]",
        "package": "kure",
        "partial": "Paths To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g[LocalPath crumb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:uniquePathToT",
      "description": {
        "fct-descr": "\u003cp\u003eFind the \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the node that satisfies the predicate, failing if that does not uniquely identify a node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#uniquePathToT",
        "fct-type": "function",
        "title": "uniquePathToT"
      },
      "index": {
        "description": "Find the LocalPath to the node that satisfies the predicate failing if that does not uniquely identify node",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "uniquePathToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
        "package": "kure",
        "partial": "Path To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:uniquePrunePathToT",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e to the node that satisfies the predicate, failing if that does not uniquely identify a node (ignoring nodes below successes).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g (LocalPath crumb)",
        "fct-source": "src/Language-KURE-Pathfinder.html#uniquePrunePathToT",
        "fct-type": "function",
        "title": "uniquePrunePathToT"
      },
      "index": {
        "description": "Build LocalPath to the node that satisfies the predicate failing if that does not uniquely identify node ignoring nodes below successes",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "uniquePrunePathToT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c(LocalPath d)",
        "package": "kure",
        "partial": "Prune Path To",
        "signature": "Translate c m g Bool-\u003eTranslate c m g(LocalPath crumb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Pathfinder.html#v:withLocalPathT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a translation that stores a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e in the context (starting at the current node).\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Pathfinder",
        "fct-package": "kure",
        "fct-signature": "Translate (WithLocalPath c crumb) m a b -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Pathfinder.html#withLocalPathT",
        "fct-type": "function",
        "title": "withLocalPathT"
      },
      "index": {
        "description": "Apply translation that stores LocalPath in the context starting at the current node",
        "hierarchy": "Language KURE Pathfinder",
        "module": "Language.KURE.Pathfinder",
        "name": "withLocalPathT",
        "normalized": "Translate(WithLocalPath a b)c d e-\u003eTranslate a c d e",
        "package": "kure",
        "partial": "Local Path",
        "signature": "Translate(WithLocalPath c crumb)m a b-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e, the main KURE types.\n \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e is just a special case of \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e, and so any function that operates on \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e is also\n applicable to \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e type-class families, and consequently\n many of the desirable combinators over \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e are special cases\n of existing monadic or arrow combinators.\n \u003ca\u003eLanguage.KURE.Combinators\u003c/a\u003e provides some additional combinators that aren't in the standard libraries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Translate.html",
        "fct-type": "module",
        "title": "Translate"
      },
      "index": {
        "description": "This module defines Translate and Rewrite the main KURE types Rewrite is just special case of Translate and so any function that operates on Translate is also applicable to Rewrite Translate is an instance of the Monad and Arrow type-class families and consequently many of the desirable combinators over Translate and Rewrite are special cases of existing monadic or arrow combinators Language.KURE.Combinators provides some additional combinators that aren in the standard libraries",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "Translate",
        "normalized": "",
        "package": "kure",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#t:Rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that shares the same source and target type.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "type",
        "fct-source": "src/Language-KURE-Translate.html#Rewrite",
        "fct-type": "type",
        "title": "Rewrite"
      },
      "index": {
        "description": "Translate that shares the same source and target type",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "Rewrite",
        "normalized": "",
        "package": "kure",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#t:Translate",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract representation of a transformation from a value of type \u003ccode\u003ea\u003c/code\u003e in a context \u003ccode\u003ec\u003c/code\u003e to a monadic value of type \u003ccode\u003em b\u003c/code\u003e.\n   The \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e type is the basis of the entire KURE library.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "data",
        "fct-source": "src/Language-KURE-Translate.html#Translate",
        "fct-type": "data",
        "title": "Translate"
      },
      "index": {
        "description": "An abstract representation of transformation from value of type in context to monadic value of type The Translate type is the basis of the entire KURE library",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "Translate",
        "normalized": "",
        "package": "kure",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to a value and its context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "Translate c m a b -\u003e c -\u003e a -\u003e m b",
        "fct-source": "src/Language-KURE-Translate.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply Translate to value and its context",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "apply",
        "normalized": "Translate a b c d-\u003ea-\u003ec-\u003eb d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m a b-\u003ec-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:constT",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a constant \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e from a monadic computation.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "m b -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Translate.html#constT",
        "fct-type": "function",
        "title": "constT"
      },
      "index": {
        "description": "Build constant Translate from monadic computation",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "constT",
        "normalized": "a b-\u003eTranslate c a d b",
        "package": "kure",
        "partial": "",
        "signature": "m b-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:contextfreeT",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that doesn't depend on the context.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "(a -\u003e m b) -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Translate.html#contextfreeT",
        "fct-type": "function",
        "title": "contextfreeT"
      },
      "index": {
        "description": "Build Translate that doesn depend on the context",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "contextfreeT",
        "normalized": "(a-\u003eb c)-\u003eTranslate d b a c",
        "package": "kure",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:contextonlyT",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e that doesn't depend on the value.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "(c -\u003e m b) -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Translate.html#contextonlyT",
        "fct-type": "function",
        "title": "contextonlyT"
      },
      "index": {
        "description": "Build Translate that doesn depend on the value",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "contextonlyT",
        "normalized": "(a-\u003eb c)-\u003eTranslate a b d c",
        "package": "kure",
        "partial": "",
        "signature": "(c-\u003em b)-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "(c -\u003e a -\u003e m a) -\u003e Rewrite c m a",
        "fct-source": "src/Language-KURE-Translate.html#rewrite",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "The primitive way of building Rewrite",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "rewrite",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eRewrite a c b",
        "package": "kure",
        "partial": "",
        "signature": "(c-\u003ea-\u003em a)-\u003eRewrite c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Translate.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eThe primitive way of building a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Translate",
        "fct-package": "kure",
        "fct-signature": "(c -\u003e a -\u003e m b) -\u003e Translate c m a b",
        "fct-source": "src/Language-KURE-Translate.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "The primitive way of building Translate",
        "hierarchy": "Language KURE Translate",
        "module": "Language.KURE.Translate",
        "name": "translate",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eTranslate a c b d",
        "package": "kure",
        "partial": "",
        "signature": "(c-\u003ea-\u003em b)-\u003eTranslate c m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators that traverse a tree.\n\u003c/p\u003e\u003cp\u003eNote that all traversals take place on the node, its children, or its descendents.\n Deliberately, there is no mechanism for \"ascending\" the tree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE-Walker.html",
        "fct-type": "module",
        "title": "Walker"
      },
      "index": {
        "description": "This module provides combinators that traverse tree Note that all traversals take place on the node its children or its descendents Deliberately there is no mechanism for ascending the tree",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "Walker",
        "normalized": "",
        "package": "kure",
        "partial": "Walker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#t:Walker",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWalker\u003c/a\u003e\u003c/code\u003e captures the ability to walk over a tree containing nodes of type \u003ccode\u003eg\u003c/code\u003e,\n   using a specific context \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eallR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault definitions are provided for \u003ccode\u003e\u003ca\u003eanyR\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoneR\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eallT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoneT\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003echildL\u003c/a\u003e\u003c/code\u003e,\n   but they may be overridden for efficiency.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "class",
        "fct-source": "src/Language-KURE-Walker.html#Walker",
        "fct-type": "class",
        "title": "Walker"
      },
      "index": {
        "description": "Walker captures the ability to walk over tree containing nodes of type using specific context Minimal complete definition allR Default definitions are provided for anyR oneR allT oneT and childL but they may be overridden for efficiency",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "Walker",
        "normalized": "",
        "package": "kure",
        "partial": "Walker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allLargestR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, requiring all to succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#allLargestR",
        "fct-type": "function",
        "title": "allLargestR"
      },
      "index": {
        "description": "Apply Rewrite to the largest node that satisfy the predicate requiring all to succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allLargestR",
        "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "Largest",
        "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allLargestT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, combining the results in a monoid.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#allLargestT",
        "fct-type": "function",
        "title": "allLargestT"
      },
      "index": {
        "description": "Apply Translate to the largest node that satisfy the predicate combining the results in monoid",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allLargestT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "Largest",
        "signature": "Translate c m g Bool-\u003eTranslate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to all immediate children, succeeding if they all succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#allR",
        "fct-type": "method",
        "title": "allR"
      },
      "index": {
        "description": "Apply Rewrite to all immediate children succeeding if they all succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to all immediate children, succeeding if they all succeed.\n   The results are combined in a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#allT",
        "fct-type": "method",
        "title": "allT"
      },
      "index": {
        "description": "Apply Translate to all immediate children succeeding if they all succeed The results are combined in Monoid",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allbuR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a bottom-up manner, succeeding if they all succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#allbuR",
        "fct-type": "function",
        "title": "allbuR"
      },
      "index": {
        "description": "Apply Rewrite in bottom-up manner succeeding if they all succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allbuR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:allduR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e twice, in a top-down and bottom-up way, using one single tree traversal,\n   succeeding if they all succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#allduR",
        "fct-type": "function",
        "title": "allduR"
      },
      "index": {
        "description": "Apply Rewrite twice in top-down and bottom-up way using one single tree traversal succeeding if they all succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "allduR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:alltdR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, succeeding if they all succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#alltdR",
        "fct-type": "function",
        "title": "alltdR"
      },
      "index": {
        "description": "Apply Rewrite in top-down manner succeeding if they all succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "alltdR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyLargestR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the largest node(s) that satisfy the predicate, succeeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#anyLargestR",
        "fct-type": "function",
        "title": "anyLargestR"
      },
      "index": {
        "description": "Apply Rewrite to the largest node that satisfy the predicate succeeding if any succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "anyLargestR",
        "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "Largest",
        "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to all immediate children, suceeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#anyR",
        "fct-type": "method",
        "title": "anyR"
      },
      "index": {
        "description": "Apply Rewrite to all immediate children suceeding if any succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "anyR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anybuR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a bottom-up manner, succeeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#anybuR",
        "fct-type": "function",
        "title": "anybuR"
      },
      "index": {
        "description": "Apply Rewrite in bottom-up manner succeeding if any succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "anybuR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anyduR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e twice, in a top-down and bottom-up way, using one single tree traversal,\n   succeeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#anyduR",
        "fct-type": "function",
        "title": "anyduR"
      },
      "index": {
        "description": "Apply Rewrite twice in top-down and bottom-up way using one single tree traversal succeeding if any succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "anyduR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:anytdR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, succeeding if any succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#anytdR",
        "fct-type": "function",
        "title": "anytdR"
      },
      "index": {
        "description": "Apply Rewrite in top-down manner succeeding if any succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "anytdR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e to the n-th child node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "crumb -\u003e Lens c m g g",
        "fct-source": "src/Language-KURE-Walker.html#childL",
        "fct-type": "method",
        "title": "childL"
      },
      "index": {
        "description": "Construct Lens to the n-th child node",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "childL",
        "normalized": "a-\u003eLens b c d d",
        "package": "kure",
        "partial": "",
        "signature": "crumb-\u003eLens c m g g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to a specified child.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#childR",
        "fct-type": "function",
        "title": "childR"
      },
      "index": {
        "description": "Apply Rewrite to specified child",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "childR",
        "normalized": "a-\u003eRewrite b c d-\u003eRewrite b c d",
        "package": "kure",
        "partial": "",
        "signature": "crumb-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to a specified child.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "crumb -\u003e Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#childT",
        "fct-type": "function",
        "title": "childT"
      },
      "index": {
        "description": "Apply Translate to specified child",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "childT",
        "normalized": "a-\u003eTranslate b c d e-\u003eTranslate b c d e",
        "package": "kure",
        "partial": "",
        "signature": "crumb-\u003eTranslate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:childrenT",
      "description": {
        "fct-descr": "\u003cp\u003eList the children of the current node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g [crumb]",
        "fct-source": "src/Language-KURE-Walker.html#childrenT",
        "fct-type": "function",
        "title": "childrenT"
      },
      "index": {
        "description": "List the children of the current node",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "childrenT",
        "normalized": "Translate a b c[d]",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g[crumb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:collectPruneT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecollectT\u003c/a\u003e\u003c/code\u003e, but does not traverse below successes.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g [b]",
        "fct-source": "src/Language-KURE-Walker.html#collectPruneT",
        "fct-type": "function",
        "title": "collectPruneT"
      },
      "index": {
        "description": "Like collectT but does not traverse below successes",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "collectPruneT",
        "normalized": "Translate a b c d-\u003eTranslate a b c[d]",
        "package": "kure",
        "partial": "Prune",
        "signature": "Translate c m g b-\u003eTranslate c m g[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:collectT",
      "description": {
        "fct-descr": "\u003cp\u003eAn always successful traversal that collects the results of all successful applications of a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e in a list.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g [b]",
        "fct-source": "src/Language-KURE-Walker.html#collectT",
        "fct-type": "function",
        "title": "collectT"
      },
      "index": {
        "description": "An always successful traversal that collects the results of all successful applications of Translate in list",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "collectT",
        "normalized": "Translate a b c d-\u003eTranslate a b c[d]",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:crushbuT",
      "description": {
        "fct-descr": "\u003cp\u003eAn always successful bottom-up fold, replacing failures with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#crushbuT",
        "fct-type": "function",
        "title": "crushbuT"
      },
      "index": {
        "description": "An always successful bottom-up fold replacing failures with mempty",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "crushbuT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:crushtdT",
      "description": {
        "fct-descr": "\u003cp\u003eAn always successful top-down fold, replacing failures with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#crushtdT",
        "fct-type": "function",
        "title": "crushtdT"
      },
      "index": {
        "description": "An always successful top-down fold replacing failures with mempty",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "crushtdT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:exhaustPathL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e that points to the last node at which the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e can be followed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Lens c m g g",
        "fct-source": "src/Language-KURE-Walker.html#exhaustPathL",
        "fct-type": "function",
        "title": "exhaustPathL"
      },
      "index": {
        "description": "Construct Lens that points to the last node at which the Path can be followed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "exhaustPathL",
        "normalized": "Path a-\u003eLens b c d d",
        "package": "kure",
        "partial": "Path",
        "signature": "Path crumb-\u003eLens c m g g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:foldbuT",
      "description": {
        "fct-descr": "\u003cp\u003eFold a tree in a bottom-up manner, using a single \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e for each node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#foldbuT",
        "fct-type": "function",
        "title": "foldbuT"
      },
      "index": {
        "description": "Fold tree in bottom-up manner using single Translate for each node",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "foldbuT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:foldtdT",
      "description": {
        "fct-descr": "\u003cp\u003eFold a tree in a top-down manner, using a single \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e for each node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#foldtdT",
        "fct-type": "function",
        "title": "foldtdT"
      },
      "index": {
        "description": "Fold tree in top-down manner using single Translate for each node",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "foldtdT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:innermostR",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-point traveral, starting with the innermost term.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#innermostR",
        "fct-type": "function",
        "title": "innermostR"
      },
      "index": {
        "description": "fixed-point traveral starting with the innermost term",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "innermostR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathL",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from the root to a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "LocalPath crumb -\u003e Lens c m g g",
        "fct-source": "src/Language-KURE-Walker.html#localPathL",
        "fct-type": "function",
        "title": "localPathL"
      },
      "index": {
        "description": "Build Lens from the root to point specified by LocalPath",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "localPathL",
        "normalized": "LocalPath a-\u003eLens b c d d",
        "package": "kure",
        "partial": "Path",
        "signature": "LocalPath crumb-\u003eLens c m g g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "LocalPath crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#localPathR",
        "fct-type": "function",
        "title": "localPathR"
      },
      "index": {
        "description": "Apply Rewrite at point specified by LocalPath",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "localPathR",
        "normalized": "LocalPath a-\u003eRewrite b c d-\u003eRewrite b c d",
        "package": "kure",
        "partial": "Path",
        "signature": "LocalPath crumb-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:localPathT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003eLocalPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "LocalPath crumb -\u003e Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#localPathT",
        "fct-type": "function",
        "title": "localPathT"
      },
      "index": {
        "description": "Apply Translate at point specified by LocalPath",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "localPathT",
        "normalized": "LocalPath a-\u003eTranslate b c d e-\u003eTranslate b c d e",
        "package": "kure",
        "partial": "Path",
        "signature": "LocalPath crumb-\u003eTranslate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneLargestR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed among the largest node(s) that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#oneLargestR",
        "fct-type": "function",
        "title": "oneLargestR"
      },
      "index": {
        "description": "Apply Rewrite to the first node for which it can succeed among the largest node that satisfy the predicate",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "oneLargestR",
        "normalized": "Translate a b c Bool-\u003eRewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "Largest",
        "signature": "Translate c m g Bool-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneLargestT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed among the largest node(s) that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g Bool -\u003e Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#oneLargestT",
        "fct-type": "function",
        "title": "oneLargestT"
      },
      "index": {
        "description": "Apply Translate to the first node for which it can succeed among the largest node that satisfy the predicate",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "oneLargestT",
        "normalized": "Translate a b c Bool-\u003eTranslate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "Largest",
        "signature": "Translate c m g Bool-\u003eTranslate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first immediate child for which it can succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#oneR",
        "fct-type": "method",
        "title": "oneR"
      },
      "index": {
        "description": "Apply Rewrite to the first immediate child for which it can succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "oneR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:oneT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first immediate child for which it can succeed.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#oneT",
        "fct-type": "method",
        "title": "oneT"
      },
      "index": {
        "description": "Apply Translate to the first immediate child for which it can succeed",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "oneT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onebuR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a bottom-up traversal.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#onebuR",
        "fct-type": "function",
        "title": "onebuR"
      },
      "index": {
        "description": "Apply Rewrite to the first node for which it can succeed in bottom-up traversal",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "onebuR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onebuT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a bottom-up traversal.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#onebuT",
        "fct-type": "function",
        "title": "onebuT"
      },
      "index": {
        "description": "Apply Translate to the first node for which it can succeed in bottom-up traversal",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "onebuT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onetdR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a top-down traversal.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#onetdR",
        "fct-type": "function",
        "title": "onetdR"
      },
      "index": {
        "description": "Apply Rewrite to the first node for which it can succeed in top-down traversal",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "onetdR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:onetdT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e to the first node for which it can succeed, in a top-down traversal.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#onetdT",
        "fct-type": "function",
        "title": "onetdT"
      },
      "index": {
        "description": "Apply Translate to the first node for which it can succeed in top-down traversal",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "onetdT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e by following a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Lens c m g g",
        "fct-source": "src/Language-KURE-Walker.html#pathL",
        "fct-type": "function",
        "title": "pathL"
      },
      "index": {
        "description": "Construct Lens by following Path",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "pathL",
        "normalized": "Path a-\u003eLens b c d d",
        "package": "kure",
        "partial": "",
        "signature": "Path crumb-\u003eLens c m g g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathR",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#pathR",
        "fct-type": "function",
        "title": "pathR"
      },
      "index": {
        "description": "Apply Rewrite at point specified by Path",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "pathR",
        "normalized": "Path a-\u003eRewrite b c d-\u003eRewrite b c d",
        "package": "kure",
        "partial": "",
        "signature": "Path crumb-\u003eRewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:pathT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e at a point specified by a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#pathT",
        "fct-type": "function",
        "title": "pathT"
      },
      "index": {
        "description": "Apply Translate at point specified by Path",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "pathT",
        "normalized": "Path a-\u003eTranslate b c d e-\u003eTranslate b c d e",
        "package": "kure",
        "partial": "",
        "signature": "Path crumb-\u003eTranslate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:prunetdR",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to apply a \u003ccode\u003e\u003ca\u003eRewrite\u003c/a\u003e\u003c/code\u003e in a top-down manner, pruning at successful rewrites.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Rewrite c m g -\u003e Rewrite c m g",
        "fct-source": "src/Language-KURE-Walker.html#prunetdR",
        "fct-type": "function",
        "title": "prunetdR"
      },
      "index": {
        "description": "Attempt to apply Rewrite in top-down manner pruning at successful rewrites",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "prunetdR",
        "normalized": "Rewrite a b c-\u003eRewrite a b c",
        "package": "kure",
        "partial": "",
        "signature": "Rewrite c m g-\u003eRewrite c m g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:prunetdT",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to apply a \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e in a top-down manner, pruning at successes.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Translate c m g b -\u003e Translate c m g b",
        "fct-source": "src/Language-KURE-Walker.html#prunetdT",
        "fct-type": "function",
        "title": "prunetdT"
      },
      "index": {
        "description": "Attempt to apply Translate in top-down manner pruning at successes",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "prunetdT",
        "normalized": "Translate a b c d-\u003eTranslate a b c d",
        "package": "kure",
        "partial": "",
        "signature": "Translate c m g b-\u003eTranslate c m g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:repeatPathL",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat as many iterations of the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e as possible.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Lens c m g g",
        "fct-source": "src/Language-KURE-Walker.html#repeatPathL",
        "fct-type": "function",
        "title": "repeatPathL"
      },
      "index": {
        "description": "Repeat as many iterations of the Path as possible",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "repeatPathL",
        "normalized": "Path a-\u003eLens b c d d",
        "package": "kure",
        "partial": "Path",
        "signature": "Path crumb-\u003eLens c m g g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:summandIsTypeT",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the type of the current node summand matches the type of the argument.\n   Note that the argument \u003cem\u003evalue\u003c/em\u003e is never inspected, it is merely a proxy for a type argument.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "a -\u003e Translate c m g Bool",
        "fct-source": "src/Language-KURE-Walker.html#summandIsTypeT",
        "fct-type": "function",
        "title": "summandIsTypeT"
      },
      "index": {
        "description": "Test if the type of the current node summand matches the type of the argument Note that the argument value is never inspected it is merely proxy for type argument",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "summandIsTypeT",
        "normalized": "a-\u003eTranslate b c d Bool",
        "package": "kure",
        "partial": "Is Type",
        "signature": "a-\u003eTranslate c m g Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE-Walker.html#v:testPathT",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if it is possible to construct a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e along this path from the current node.\n\u003c/p\u003e",
        "fct-module": "Language.KURE.Walker",
        "fct-package": "kure",
        "fct-signature": "Path crumb -\u003e Translate c m g Bool",
        "fct-source": "src/Language-KURE-Walker.html#testPathT",
        "fct-type": "function",
        "title": "testPathT"
      },
      "index": {
        "description": "Check if it is possible to construct Lens along this path from the current node",
        "hierarchy": "Language KURE Walker",
        "module": "Language.KURE.Walker",
        "name": "testPathT",
        "normalized": "Path a-\u003eTranslate b c d Bool",
        "package": "kure",
        "partial": "Path",
        "signature": "Path crumb-\u003eTranslate c m g Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/kure/docs/Language-KURE.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main import module for KURE, which exports all the major components.\n The basic transformation functionality can be found in \u003ca\u003eLanguage.KURE.Translate\u003c/a\u003e,\n and the traversal functionality can be found in \u003ca\u003eLanguage.KURE.Walker\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.KURE",
        "fct-package": "kure",
        "fct-signature": "module",
        "fct-source": "src/Language-KURE.html",
        "fct-type": "module",
        "title": "KURE"
      },
      "index": {
        "description": "This is the main import module for KURE which exports all the major components The basic transformation functionality can be found in Language.KURE.Translate and the traversal functionality can be found in Language.KURE.Walker",
        "hierarchy": "Language KURE",
        "module": "Language.KURE",
        "name": "KURE",
        "normalized": "",
        "package": "kure",
        "partial": "KURE",
        "signature": ""
      }
    }
  }
]