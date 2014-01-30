[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFix-point type. It allows to define generic recurion schemes.\n\u003c/p\u003e\u003cpre\u003e Fix f = f (Fix f)\n\u003c/pre\u003e\u003cp\u003eType \u003ccode\u003ef\u003c/code\u003e should be a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e if you want to use\n simple recursion schemes or \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e if you want to\n use monadic recursion schemes. This style allows you to express\n recursive functions in non-recursive manner. \n You can imagine that a non-recursive function \n holds values of the previous iteration.\n\u003c/p\u003e\u003cp\u003eLittle example:\n\u003c/p\u003e\u003cpre\u003e type List a = Fix (L a)\n\n data L a b = Nil | Cons a b\n\n instance Functor (L a) where\n    fmap f x = case x of\n        Nil      -\u003e Nil\n        Cons a b -\u003e Cons a (f b)\n \n length :: List a -\u003e Int\n length = cata $ \\x -\u003e case x of\n    Nil      -\u003e 0\n    Cons _ n -\u003e n + 1\n\n sum :: Num a =\u003e List a -\u003e a\n sum = cata $ \\x -\u003e case x of\n    Nil      -\u003e 0\n    Cons a s -\u003e a + s\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "module",
        "fct-source": "src/Data-Fix.html",
        "fct-type": "module",
        "title": "Fix"
      },
      "index": {
        "description": "Fix-point type It allows to define generic recurion schemes Fix Fix Type should be Functor if you want to use simple recursion schemes or Traversable if you want to use monadic recursion schemes This style allows you to express recursive functions in non-recursive manner You can imagine that non-recursive function holds values of the previous iteration Little example type List Fix data Nil Cons instance Functor where fmap case of Nil Nil Cons Cons length List Int length cata case of Nil Cons sum Num List sum cata case of Nil Cons",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "Fix",
        "normalized": "",
        "package": "data-fix",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#t:Fix",
      "description": {
        "fct-descr": "\u003cp\u003eA fix-point type. \n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Fix.html#Fix",
        "fct-type": "newtype",
        "title": "Fix"
      },
      "index": {
        "description": "fix-point type",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "Fix",
        "normalized": "",
        "package": "data-fix",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003ehylo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(a -\u003e f a) -\u003e (f b -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Fix.html#~%3E",
        "fct-type": "function",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "Infix version of hylo",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "(~\u003e) ~\u003e",
        "normalized": "(a-\u003eb a)-\u003e(b c-\u003ec)-\u003ea-\u003ec",
        "package": "data-fix",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003e(f b-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:Fix",
      "description": {
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "Fix",
        "fct-source": "src/Data-Fix.html#Fix",
        "fct-type": "function",
        "title": "Fix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "Fix",
        "normalized": "",
        "package": "data-fix",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:ana",
      "description": {
        "fct-descr": "\u003cp\u003eAnamorphism or generic function unfold. \n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(a -\u003e f a) -\u003e a -\u003e Fix f",
        "fct-source": "src/Data-Fix.html#ana",
        "fct-type": "function",
        "title": "ana"
      },
      "index": {
        "description": "Anamorphism or generic function unfold",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "ana",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eFix b",
        "package": "data-fix",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003ea-\u003eFix f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:anaM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic anamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(a -\u003e m (t a)) -\u003e a -\u003e m (Fix t)",
        "fct-source": "src/Data-Fix.html#anaM",
        "fct-type": "function",
        "title": "anaM"
      },
      "index": {
        "description": "Monadic anamorphism",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "anaM",
        "normalized": "(a-\u003eb(c a))-\u003ea-\u003eb(Fix c)",
        "package": "data-fix",
        "partial": "",
        "signature": "(a-\u003em(t a))-\u003ea-\u003em(Fix t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:cata",
      "description": {
        "fct-descr": "\u003cp\u003eCatamorphism or generic function fold. \n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(f a -\u003e a) -\u003e Fix f -\u003e a",
        "fct-source": "src/Data-Fix.html#cata",
        "fct-type": "function",
        "title": "cata"
      },
      "index": {
        "description": "Catamorphism or generic function fold",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "cata",
        "normalized": "(a b-\u003eb)-\u003eFix a-\u003eb",
        "package": "data-fix",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003eFix f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:cataM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic catamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(t a -\u003e m a) -\u003e Fix t -\u003e m a",
        "fct-source": "src/Data-Fix.html#cataM",
        "fct-type": "function",
        "title": "cataM"
      },
      "index": {
        "description": "Monadic catamorphism",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "cataM",
        "normalized": "(a b-\u003ec b)-\u003eFix a-\u003ec b",
        "package": "data-fix",
        "partial": "",
        "signature": "(t a-\u003em a)-\u003eFix t-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:hylo",
      "description": {
        "fct-descr": "\u003cp\u003eHylomorphism is anamorphism followed by catamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(f b -\u003e b) -\u003e (a -\u003e f a) -\u003e a -\u003e b",
        "fct-source": "src/Data-Fix.html#hylo",
        "fct-type": "function",
        "title": "hylo"
      },
      "index": {
        "description": "Hylomorphism is anamorphism followed by catamorphism",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "hylo",
        "normalized": "(a b-\u003eb)-\u003e(c-\u003ea c)-\u003ec-\u003eb",
        "package": "data-fix",
        "partial": "",
        "signature": "(f b-\u003eb)-\u003e(a-\u003ef a)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:hyloM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic hylomorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "(t b -\u003e m b) -\u003e (a -\u003e m (t a)) -\u003e a -\u003e m b",
        "fct-source": "src/Data-Fix.html#hyloM",
        "fct-type": "function",
        "title": "hyloM"
      },
      "index": {
        "description": "Monadic hylomorphism",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "hyloM",
        "normalized": "(a b-\u003ec b)-\u003e(d-\u003ec(a d))-\u003ed-\u003ec b",
        "package": "data-fix",
        "partial": "",
        "signature": "(t b-\u003em b)-\u003e(a-\u003em(t a))-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-fix/docs/Data-Fix.html#v:unFix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Fix",
        "fct-package": "data-fix",
        "fct-signature": "f (Fix f)",
        "fct-source": "src/Data-Fix.html#Fix",
        "fct-type": "function",
        "title": "unFix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fix",
        "module": "Data.Fix",
        "name": "unFix",
        "normalized": "",
        "package": "data-fix",
        "partial": "Fix",
        "signature": ""
      }
    }
  }
]