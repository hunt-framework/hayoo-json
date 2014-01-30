[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea collection of generic parsing combinators that can work with any token and error type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "collection of generic parsing combinators that can work with any token and error type",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "boomerang",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "boomerang",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainl1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e zero or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a left associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#chainl",
        "fct-type": "function",
        "title": "chainl"
      },
      "index": {
        "description": "chainl1 op repeats zero or more times separated by op The result is left associative fold of the results of with the results of op",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "chainl",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainl1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e one or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a left associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok (a :- (a :- r)) (a :- r) -\u003e Boomerang e tok r (a :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#chainl1",
        "fct-type": "function",
        "title": "chainl1"
      },
      "index": {
        "description": "chainl1 op repeats one or more times separated by op The result is left associative fold of the results of with the results of op",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "chainl1",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(d(d c))(d c)-\u003eBoomerang a b c(d c)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(a(a r))(a r)-\u003eBoomerang e tok r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainr p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e zero or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a right associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#chainr",
        "fct-type": "function",
        "title": "chainr"
      },
      "index": {
        "description": "chainr op repeats zero or more times separated by op The result is right associative fold of the results of with the results of op",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "chainr",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainr1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e one or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a right associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok (a :- (a :- r)) (a :- r) -\u003e Boomerang e tok r (a :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#chainr1",
        "fct-type": "function",
        "title": "chainr1"
      },
      "index": {
        "description": "chainr1 op repeats one or more times separated by op The result is right associative fold of the results of with the results of op",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "chainr1",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(d(d c))(d c)-\u003eBoomerang a b c(d c)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(a(a r))(a r)-\u003eBoomerang e tok r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:duck",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a router to do what it does on the tail of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r1 r2 -\u003e Boomerang e tok (h :- r1) (h :- r2)",
        "fct-source": "src/Text-Boomerang-Combinators.html#duck",
        "fct-type": "function",
        "title": "duck"
      },
      "index": {
        "description": "Convert router to do what it does on the tail of the stack",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "duck",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b(d c)(d c)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok(h r)(h r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:duck1",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a router to do what it does on the tail of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r1 (a :- r2) -\u003e Boomerang e tok (h :- r1) (a :- (h :- r2))",
        "fct-source": "src/Text-Boomerang-Combinators.html#duck1",
        "fct-type": "function",
        "title": "duck1"
      },
      "index": {
        "description": "Convert router to do what it does on the tail of the stack",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "duck1",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(e c)(d(e c))",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(h r)(a(h r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:manyl",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a router zero or more times, combining the results from right to left.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#manyl",
        "fct-type": "function",
        "title": "manyl"
      },
      "index": {
        "description": "Repeat router zero or more times combining the results from right to left",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "manyl",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:manyr",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a router zero or more times, combining the results from left to right.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#manyr",
        "fct-type": "function",
        "title": "manyr"
      },
      "index": {
        "description": "Repeat router zero or more times combining the results from left to right",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "manyr",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:opt",
      "description": {
        "fct-descr": "\u003cp\u003eMake a router optional.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#opt",
        "fct-type": "function",
        "title": "opt"
      },
      "index": {
        "description": "Make router optional",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "opt",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:printAs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003er `printAs` s\u003c/code\u003e uses ther serializer of \u003ccode\u003er\u003c/code\u003e to test if serializing succeeds,\n   and if it does, instead serializes as \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: can this be more general so that it can work on \u003ccode\u003etok\u003c/code\u003e instead of \u003ccode\u003e[tok]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [tok] a b -\u003e tok -\u003e Boomerang e [tok] a b",
        "fct-source": "src/Text-Boomerang-Combinators.html#printAs",
        "fct-type": "function",
        "title": "printAs"
      },
      "index": {
        "description": "printAs uses ther serializer of to test if serializing succeeds and if it does instead serializes as TODO can this be more general so that it can work on tok instead of tok",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "printAs",
        "normalized": "Boomerang a[b]c d-\u003eb-\u003eBoomerang a[b]c d",
        "package": "boomerang",
        "partial": "As",
        "signature": "Boomerang e[tok]a b-\u003etok-\u003eBoomerang e[tok]a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush a value on the stack (during parsing, pop it from the stack when serializing).\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "a -\u003e Boomerang e tok r (a :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push value on the stack during parsing pop it from the stack when serializing",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "push",
        "normalized": "a-\u003eBoomerang b c d(a d)",
        "package": "boomerang",
        "partial": "",
        "signature": "a-\u003eBoomerang e tok r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rBool",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok a r-\u003e Boomerang e tok a r-\u003e Boomerang e tok a (Bool :- r)",
        "fct-type": "function",
        "title": "rBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rBool",
        "normalized": "Boomerang a b c d-\u003eBoomerang a b c d-\u003eBoomerang a b c(Bool d)",
        "package": "boomerang",
        "partial": "Bool",
        "signature": "Boomerang e tok a r-\u003eBoomerang e tok a r-\u003eBoomerang e tok a(Bool r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rCons",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok (a :- ([a] :- r)) ([a] :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rCons",
        "fct-type": "function",
        "title": "rCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rCons",
        "normalized": "Boomerang a b(c([c]d))([c]d)",
        "package": "boomerang",
        "partial": "Cons",
        "signature": "Boomerang e tok(a([a]r))([a]r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rEither",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a router for a value \u003ccode\u003ea\u003c/code\u003e and a router for a value \u003ccode\u003eb\u003c/code\u003e into a router for \u003ccode\u003eEither a b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r (b :- r) -\u003e Boomerang e tok r (Either a b :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rEither",
        "fct-type": "function",
        "title": "rEither"
      },
      "index": {
        "description": "Combines router for value and router for value into router for Either",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rEither",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c(e c)-\u003eBoomerang a b c(Either d e c)",
        "package": "boomerang",
        "partial": "Either",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r(b r)-\u003eBoomerang e tok r(Either a b r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rFalse",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r.  Boomerang e tok r (:- Bool r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rFalse",
        "fct-type": "function",
        "title": "rFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rFalse",
        "normalized": "",
        "package": "boomerang",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rFilter",
      "description": {
        "fct-descr": "\u003cp\u003eFiltering on routers.\n\u003c/p\u003e\u003cp\u003eTODO: We remove any parse errors, not sure if the should be preserved. Also, if the predicate fails we silently remove the element, but perhaps we should replace the value with an error message?\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e Bool) -\u003e Boomerang e tok () (a :- ()) -\u003e Boomerang e tok r (a :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rFilter",
        "fct-type": "function",
        "title": "rFilter"
      },
      "index": {
        "description": "Filtering on routers TODO We remove any parse errors not sure if the should be preserved Also if the predicate fails we silently remove the element but perhaps we should replace the value with an error message",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rFilter",
        "normalized": "(a-\u003eBool)-\u003eBoomerang b c()(a())-\u003eBoomerang b c d(a d)",
        "package": "boomerang",
        "partial": "Filter",
        "signature": "(a-\u003eBool)-\u003eBoomerang e tok()(a())-\u003eBoomerang e tok r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rJust",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r a.  Boomerang e tok (:- a r) (:- (Maybe a) r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rJust",
        "fct-type": "function",
        "title": "rJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rJust",
        "normalized": "",
        "package": "boomerang",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rLeft",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r a b.  Boomerang e tok (:- a r) (:- (Either a b) r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rLeft",
        "fct-type": "function",
        "title": "rLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rLeft",
        "normalized": "",
        "package": "boomerang",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r ([a] :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rList",
        "fct-type": "function",
        "title": "rList"
      },
      "index": {
        "description": "Converts router for value to router for list of",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rList",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c([d]c)",
        "package": "boomerang",
        "partial": "List",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r([a]r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rList1",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r ([a] :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rList1",
        "fct-type": "function",
        "title": "rList1"
      },
      "index": {
        "description": "Converts router for value to router for list of",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rList1",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c([d]c)",
        "package": "boomerang",
        "partial": "List",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r([a]r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rListSep",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e, with a separator.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok ([a] :- r) ([a] :- r) -\u003e Boomerang e tok r ([a] :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rListSep",
        "fct-type": "function",
        "title": "rListSep"
      },
      "index": {
        "description": "Converts router for value to router for list of with separator",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rListSep",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b([d]c)([d]c)-\u003eBoomerang a b c([d]c)",
        "package": "boomerang",
        "partial": "List Sep",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok([a]r)([a]r)-\u003eBoomerang e tok r([a]r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a \u003ccode\u003eMaybe a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r (Maybe a :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rMaybe",
        "fct-type": "function",
        "title": "rMaybe"
      },
      "index": {
        "description": "Converts router for value to router for Maybe",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rMaybe",
        "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c(Maybe d c)",
        "package": "boomerang",
        "partial": "Maybe",
        "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r(Maybe a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rNil",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r ([a] :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rNil",
        "fct-type": "function",
        "title": "rNil"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rNil",
        "normalized": "Boomerang a b c([d]c)",
        "package": "boomerang",
        "partial": "Nil",
        "signature": "Boomerang e tok r([a]r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rNothing",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r a.  Boomerang e tok r (:- (Maybe a) r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rNothing",
        "fct-type": "function",
        "title": "rNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rNothing",
        "normalized": "",
        "package": "boomerang",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rPair",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok (f :- (s :- r)) ((f, s) :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rPair",
        "fct-type": "function",
        "title": "rPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rPair",
        "normalized": "Boomerang a b(c(d e))((c,d)e)",
        "package": "boomerang",
        "partial": "Pair",
        "signature": "Boomerang e tok(f(s r))((f,s)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rRight",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r a b.  Boomerang e tok (:- b r) (:- (Either a b) r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rRight",
        "fct-type": "function",
        "title": "rRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rRight",
        "normalized": "",
        "package": "boomerang",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rTrue",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "forall tok e r.  Boomerang e tok r (:- Bool r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rTrue",
        "fct-type": "function",
        "title": "rTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rTrue",
        "normalized": "",
        "package": "boomerang",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rUnit",
      "description": {
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r (() :- r)",
        "fct-source": "src/Text-Boomerang-Combinators.html#rUnit",
        "fct-type": "function",
        "title": "rUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "rUnit",
        "normalized": "Boomerang a b c(()c)",
        "package": "boomerang",
        "partial": "Unit",
        "signature": "Boomerang e tok r(()r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:somel",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a router one or more times, combining the results from right to left.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#somel",
        "fct-type": "function",
        "title": "somel"
      },
      "index": {
        "description": "Repeat router one or more times combining the results from right to left",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "somel",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:somer",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a router one or more times, combining the results from left to right.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Combinators",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
        "fct-source": "src/Text-Boomerang-Combinators.html#somer",
        "fct-type": "function",
        "title": "somer"
      },
      "index": {
        "description": "Repeat router one or more times combining the results from left to right",
        "hierarchy": "Text Boomerang Combinators",
        "module": "Text.Boomerang.Combinators",
        "name": "somer",
        "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn Error handling scheme that can be used with \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "An Error handling scheme that can be used with Boomerang",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "Error",
        "normalized": "",
        "package": "boomerang",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#t:ErrorMsg",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "data",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "data",
        "title": "ErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "ErrorMsg",
        "normalized": "",
        "package": "boomerang",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#t:ParserError",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "data",
        "fct-source": "src/Text-Boomerang-Error.html#ParserError",
        "fct-type": "data",
        "title": "ParserError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "ParserError",
        "normalized": "",
        "package": "boomerang",
        "partial": "Parser Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eannotate a parse error with an additional \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cpre\u003e satisfy isUpper \u003c?\u003e 'an uppercase character'\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang (ParserError p) tok a b -\u003e String -\u003e Boomerang (ParserError p) tok a b",
        "fct-source": "src/Text-Boomerang-Error.html#%3C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "annotate parse error with an additional Expect message satisfy isUpper an uppercase character",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "Boomerang(ParserError a)b c d-\u003eString-\u003eBoomerang(ParserError a)b c d",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang(ParserError p)tok a b-\u003eString-\u003eBoomerang(ParserError p)tok a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:EOI",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "EOI String",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "function",
        "title": "EOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "EOI",
        "normalized": "",
        "package": "boomerang",
        "partial": "EOI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:Expect",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "Expect String",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "function",
        "title": "Expect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "Expect",
        "normalized": "",
        "package": "boomerang",
        "partial": "Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:Message",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "Message String",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "Message",
        "normalized": "",
        "package": "boomerang",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:ParserError",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "ParserError (Maybe pos) [ErrorMsg]",
        "fct-source": "src/Text-Boomerang-Error.html#ParserError",
        "fct-type": "function",
        "title": "ParserError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "ParserError",
        "normalized": "ParserError(Maybe a)[ErrorMsg]",
        "package": "boomerang",
        "partial": "Parser Error",
        "signature": "ParserError(Maybe pos)[ErrorMsg]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:SysUnExpect",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "SysUnExpect String",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "function",
        "title": "SysUnExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "SysUnExpect",
        "normalized": "",
        "package": "boomerang",
        "partial": "Sys Un Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:UnExpect",
      "description": {
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "UnExpect String",
        "fct-source": "src/Text-Boomerang-Error.html#ErrorMsg",
        "fct-type": "function",
        "title": "UnExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "UnExpect",
        "normalized": "",
        "package": "boomerang",
        "partial": "Un Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:condenseErrors",
      "description": {
        "fct-descr": "\u003cp\u003econdense the \u003ccode\u003e\u003ca\u003eParserError\u003c/a\u003e\u003c/code\u003es with the highest parse position into a single \u003ccode\u003e\u003ca\u003eParserError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "[ParserError pos] -\u003e ParserError pos",
        "fct-source": "src/Text-Boomerang-Error.html#condenseErrors",
        "fct-type": "function",
        "title": "condenseErrors"
      },
      "index": {
        "description": "condense the ParserError with the highest parse position into single ParserError",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "condenseErrors",
        "normalized": "[ParserError a]-\u003eParserError a",
        "package": "boomerang",
        "partial": "Errors",
        "signature": "[ParserError pos]-\u003eParserError pos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:messageString",
      "description": {
        "fct-descr": "\u003cp\u003eextract the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eErrorMsg\u003c/a\u003e\u003c/code\u003e.\n Note: the resulting \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e will not include any information about what constructor it came from.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "ErrorMsg -\u003e String",
        "fct-source": "src/Text-Boomerang-Error.html#messageString",
        "fct-type": "function",
        "title": "messageString"
      },
      "index": {
        "description": "extract the String from an ErrorMsg Note the resulting String will not include any information about what constructor it came from",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "messageString",
        "normalized": "ErrorMsg-\u003eString",
        "package": "boomerang",
        "partial": "String",
        "signature": "ErrorMsg-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:mkParserError",
      "description": {
        "fct-descr": "\u003cp\u003elift a \u003ccode\u003epos\u003c/code\u003e and '[ErrorMsg]' into a parse error\n\u003c/p\u003e\u003cp\u003eThis is intended to be used inside a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e Parser $ \\tok pos -\u003e mkParserError pos [Message \"just some error...\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "pos -\u003e [ErrorMsg] -\u003e [Either (ParserError pos) a]",
        "fct-source": "src/Text-Boomerang-Error.html#mkParserError",
        "fct-type": "function",
        "title": "mkParserError"
      },
      "index": {
        "description": "lift pos and ErrorMsg into parse error This is intended to be used inside Parser like this Parser tok pos mkParserError pos Message just some error",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "mkParserError",
        "normalized": "a-\u003e[ErrorMsg]-\u003e[Either(ParserError a)b]",
        "package": "boomerang",
        "partial": "Parser Error",
        "signature": "pos-\u003e[ErrorMsg]-\u003e[Either(ParserError pos)a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:showErrorMessages",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function for turning '[ErrorMsg]' into a user-friendly \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [ErrorMsg] -\u003e String",
        "fct-source": "src/Text-Boomerang-Error.html#showErrorMessages",
        "fct-type": "function",
        "title": "showErrorMessages"
      },
      "index": {
        "description": "Helper function for turning ErrorMsg into user-friendly String",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "showErrorMessages",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[ErrorMsg]-\u003eString",
        "package": "boomerang",
        "partial": "Error Messages",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[ErrorMsg]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:showParserError",
      "description": {
        "fct-descr": "\u003cp\u003eturn a parse error into a user-friendly error message\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Error",
        "fct-package": "boomerang",
        "fct-signature": "(pos -\u003e String)-\u003e ParserError pos-\u003e String",
        "fct-type": "function",
        "title": "showParserError"
      },
      "index": {
        "description": "turn parse error into user-friendly error message",
        "hierarchy": "Text Boomerang Error",
        "module": "Text.Boomerang.Error",
        "name": "showParserError",
        "normalized": "(a-\u003eString)-\u003eParserError a-\u003eString",
        "package": "boomerang",
        "partial": "Parser Error",
        "signature": "(pos-\u003eString)-\u003eParserError pos-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea simple heteregenous stack library\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-HStack.html",
        "fct-type": "module",
        "title": "HStack"
      },
      "index": {
        "description": "simple heteregenous stack library",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "HStack",
        "normalized": "",
        "package": "boomerang",
        "partial": "HStack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#t::-45-",
      "description": {
        "fct-descr": "\u003cp\u003eA stack datatype. Just a better looking tuple.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "data",
        "fct-source": "src/Text-Boomerang-HStack.html#%3A-",
        "fct-type": "data",
        "title": ":-"
      },
      "index": {
        "description": "stack datatype Just better looking tuple",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": ":-",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v::-45-",
      "description": {
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "a :- b",
        "fct-source": "src/Text-Boomerang-HStack.html#%3A-",
        "fct-type": "function",
        "title": ":-"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": ":-",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:arg",
      "description": {
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(ty -\u003e r -\u003e s) -\u003e (a -\u003e ty) -\u003e (a :- r) -\u003e s",
        "fct-source": "src/Text-Boomerang-HStack.html#arg",
        "fct-type": "function",
        "title": "arg"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "arg",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d b)-\u003ec",
        "package": "boomerang",
        "partial": "",
        "signature": "(ty-\u003er-\u003es)-\u003e(a-\u003ety)-\u003e(a r)-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hdMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap over the top of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(a1 -\u003e a2) -\u003e (a1 :- b) -\u003e a2 :- b",
        "fct-source": "src/Text-Boomerang-HStack.html#hdMap",
        "fct-type": "function",
        "title": "hdMap"
      },
      "index": {
        "description": "Map over the top of the stack",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "hdMap",
        "normalized": "(a-\u003ea)-\u003e(a b)-\u003ea b",
        "package": "boomerang",
        "partial": "Map",
        "signature": "(a-\u003ea)-\u003e(a b)-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hdTraverse",
      "description": {
        "fct-descr": "\u003cp\u003eApplicative traversal over the top of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e f b) -\u003e (a :- t) -\u003e f (b :- t)",
        "fct-source": "src/Text-Boomerang-HStack.html#hdTraverse",
        "fct-type": "function",
        "title": "hdTraverse"
      },
      "index": {
        "description": "Applicative traversal over the top of the stack",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "hdTraverse",
        "normalized": "(a-\u003eb c)-\u003e(a d)-\u003eb(c d)",
        "package": "boomerang",
        "partial": "Traverse",
        "signature": "(a-\u003ef b)-\u003e(a t)-\u003ef(b t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hhead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(a :- b) -\u003e a",
        "fct-source": "src/Text-Boomerang-HStack.html#hhead",
        "fct-type": "function",
        "title": "hhead"
      },
      "index": {
        "description": "Get the top of the stack",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "hhead",
        "normalized": "(a b)-\u003ea",
        "package": "boomerang",
        "partial": "",
        "signature": "(a b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:htail",
      "description": {
        "fct-descr": "\u003cp\u003eGet the stack with the top popped.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(a :- b) -\u003e b",
        "fct-source": "src/Text-Boomerang-HStack.html#htail",
        "fct-type": "function",
        "title": "htail"
      },
      "index": {
        "description": "Get the stack with the top popped",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "htail",
        "normalized": "(a b)-\u003eb",
        "package": "boomerang",
        "partial": "",
        "signature": "(a b)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eStack destructor.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.HStack",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e b -\u003e r) -\u003e (a :- b) -\u003e r",
        "fct-source": "src/Text-Boomerang-HStack.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Stack destructor",
        "hierarchy": "Text Boomerang HStack",
        "module": "Text.Boomerang.HStack",
        "name": "pop",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a b)-\u003ec",
        "package": "boomerang",
        "partial": "",
        "signature": "(a-\u003eb-\u003er)-\u003e(a b)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#",
      "description": {
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Pos.html",
        "fct-type": "module",
        "title": "Pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "Pos",
        "normalized": "",
        "package": "boomerang",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:ErrorPosition",
      "description": {
        "fct-descr": "\u003cp\u003eextract the position information from an error\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "class",
        "fct-source": "src/Text-Boomerang-Pos.html#ErrorPosition",
        "fct-type": "class",
        "title": "ErrorPosition"
      },
      "index": {
        "description": "extract the position information from an error",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "ErrorPosition",
        "normalized": "",
        "package": "boomerang",
        "partial": "Error Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:InitialPosition",
      "description": {
        "fct-descr": "\u003cp\u003ethe initial position for a position type\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "class",
        "fct-source": "src/Text-Boomerang-Pos.html#InitialPosition",
        "fct-type": "class",
        "title": "InitialPosition"
      },
      "index": {
        "description": "the initial position for position type",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "InitialPosition",
        "normalized": "",
        "package": "boomerang",
        "partial": "Initial Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:MajorMinorPos",
      "description": {
        "fct-descr": "\u003cp\u003eA basic 2-axis position type (e.g. line, character)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "data",
        "fct-source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
        "fct-type": "data",
        "title": "MajorMinorPos"
      },
      "index": {
        "description": "basic axis position type e.g line character",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "MajorMinorPos",
        "normalized": "",
        "package": "boomerang",
        "partial": "Major Minor Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:Pos",
      "description": {
        "fct-descr": "\u003cp\u003etype synonym family that maps an error type to its position type\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "Pos",
        "fct-type": "function",
        "title": "Pos"
      },
      "index": {
        "description": "type synonym family that maps an error type to its position type",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "Pos",
        "normalized": "",
        "package": "boomerang",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:MajorMinorPos",
      "description": {
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "MajorMinorPos",
        "fct-source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
        "fct-type": "function",
        "title": "MajorMinorPos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "MajorMinorPos",
        "normalized": "",
        "package": "boomerang",
        "partial": "Major Minor Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:getPosition",
      "description": {
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "err -\u003e Maybe (Pos err)",
        "fct-source": "src/Text-Boomerang-Pos.html#getPosition",
        "fct-type": "method",
        "title": "getPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "getPosition",
        "normalized": "a-\u003eMaybe(Pos a)",
        "package": "boomerang",
        "partial": "Position",
        "signature": "err-\u003eMaybe(Pos err)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:incMajor",
      "description": {
        "fct-descr": "\u003cp\u003eincrement major position by \u003ccode\u003ei\u003c/code\u003e, reset minor position to 0..\n if you wanted something else.. too bad.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "i -\u003e MajorMinorPos -\u003e MajorMinorPos",
        "fct-source": "src/Text-Boomerang-Pos.html#incMajor",
        "fct-type": "function",
        "title": "incMajor"
      },
      "index": {
        "description": "increment major position by reset minor position to if you wanted something else too bad",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "incMajor",
        "normalized": "a-\u003eMajorMinorPos-\u003eMajorMinorPos",
        "package": "boomerang",
        "partial": "Major",
        "signature": "i-\u003eMajorMinorPos-\u003eMajorMinorPos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:incMinor",
      "description": {
        "fct-descr": "\u003cp\u003eincrement minor position by \u003ccode\u003ei\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "i -\u003e MajorMinorPos -\u003e MajorMinorPos",
        "fct-source": "src/Text-Boomerang-Pos.html#incMinor",
        "fct-type": "function",
        "title": "incMinor"
      },
      "index": {
        "description": "increment minor position by",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "incMinor",
        "normalized": "a-\u003eMajorMinorPos-\u003eMajorMinorPos",
        "package": "boomerang",
        "partial": "Minor",
        "signature": "i-\u003eMajorMinorPos-\u003eMajorMinorPos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:initialPos",
      "description": {
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "Maybe e -\u003e Pos e",
        "fct-source": "src/Text-Boomerang-Pos.html#initialPos",
        "fct-type": "method",
        "title": "initialPos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "initialPos",
        "normalized": "Maybe a-\u003ePos a",
        "package": "boomerang",
        "partial": "Pos",
        "signature": "Maybe e-\u003ePos e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:major",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "Integer",
        "fct-source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
        "fct-type": "function",
        "title": "major"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "major",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:minor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Boomerang.Pos",
        "fct-package": "boomerang",
        "fct-signature": "Integer",
        "fct-source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
        "fct-type": "function",
        "title": "minor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Pos",
        "module": "Text.Boomerang.Pos",
        "name": "minor",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#",
      "description": {
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "boomerang",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:Boomerang",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBoomerang a b\u003c/code\u003e takes an \u003ccode\u003ea\u003c/code\u003e to parse a URL and results in \u003ccode\u003eb\u003c/code\u003e if parsing succeeds.\n   And it takes a \u003ccode\u003eb\u003c/code\u003e to serialize to a URL and results in \u003ccode\u003ea\u003c/code\u003e if serializing succeeds.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "data",
        "fct-source": "src/Text-Boomerang-Prim.html#Boomerang",
        "fct-type": "data",
        "title": "Boomerang"
      },
      "index": {
        "description": "Boomerang takes an to parse URL and results in if parsing succeeds And it takes to serialize to URL and results in if serializing succeeds",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "Boomerang",
        "normalized": "",
        "package": "boomerang",
        "partial": "Boomerang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eYet another parser.\n\u003c/p\u003e\u003cp\u003eReturns all possible parses and parse errors\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Boomerang-Prim.html#Parser",
        "fct-type": "newtype",
        "title": "Parser"
      },
      "index": {
        "description": "Yet another parser Returns all possible parses and parse errors",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "Parser",
        "normalized": "",
        "package": "boomerang",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:PrinterParser",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Boomerang instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-Prim.html#PrinterParser",
        "fct-type": "type",
        "title": "PrinterParser"
      },
      "index": {
        "description": "Deprecated Use Boomerang instead",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "PrinterParser",
        "normalized": "",
        "package": "boomerang",
        "partial": "Printer Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:.-126-",
      "description": {
        "fct-descr": "\u003cp\u003eReverse composition, but with the side effects still in left-to-right order.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok a b -\u003e Boomerang e tok b c -\u003e Boomerang e tok a c",
        "fct-source": "src/Text-Boomerang-Prim.html#.~",
        "fct-type": "function",
        "title": "(.~)"
      },
      "index": {
        "description": "Reverse composition but with the side effects still in left-to-right order",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "(.~) .~",
        "normalized": "Boomerang a b c d-\u003eBoomerang a b d e-\u003eBoomerang a b c e",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok a b-\u003eBoomerang e tok b c-\u003eBoomerang e tok a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:Boomerang",
      "description": {
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang",
        "fct-source": "src/Text-Boomerang-Prim.html#Boomerang",
        "fct-type": "function",
        "title": "Boomerang"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "Boomerang",
        "normalized": "",
        "package": "boomerang",
        "partial": "Boomerang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:Parser",
      "description": {
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "Parser",
        "fct-source": "src/Text-Boomerang-Prim.html#Parser",
        "fct-type": "function",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "Parser",
        "normalized": "",
        "package": "boomerang",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:bestErrors",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to extract the most relevant errors from a list of parse errors.\n\u003c/p\u003e\u003cp\u003eThe current heuristic is to find error (or errors) where the error position is highest.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "[e] -\u003e [e]",
        "fct-source": "src/Text-Boomerang-Prim.html#bestErrors",
        "fct-type": "function",
        "title": "bestErrors"
      },
      "index": {
        "description": "Attempt to extract the most relevant errors from list of parse errors The current heuristic is to find error or errors where the error position is highest",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "bestErrors",
        "normalized": "[a]-\u003e[a]",
        "package": "boomerang",
        "partial": "Errors",
        "signature": "[e]-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eGive all possible parses or errors.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok () a -\u003e tok -\u003e [Either e (a, tok)]",
        "fct-source": "src/Text-Boomerang-Prim.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Give all possible parses or errors",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "parse",
        "normalized": "Boomerang a b()c-\u003eb-\u003e[Either a(c,b)]",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang e tok()a-\u003etok-\u003e[Either e(a,tok)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:parse1",
      "description": {
        "fct-descr": "\u003cp\u003eGive the first parse, for Boomerangs with a parser that yields just one value.\n Otherwise return the error (or errors) with the highest error position.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "(tok -\u003e Bool) -\u003e Boomerang e tok () (a :- ()) -\u003e tok -\u003e Either [e] a",
        "fct-source": "src/Text-Boomerang-Prim.html#parse1",
        "fct-type": "function",
        "title": "parse1"
      },
      "index": {
        "description": "Give the first parse for Boomerangs with parser that yields just one value Otherwise return the error or errors with the highest error position",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "parse1",
        "normalized": "(a-\u003eBool)-\u003eBoomerang b a()(c())-\u003ea-\u003eEither[b]c",
        "package": "boomerang",
        "partial": "",
        "signature": "(tok-\u003eBool)-\u003eBoomerang e tok()(a())-\u003etok-\u003eEither[e]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:prs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "Parser e tok (a -\u003e b)",
        "fct-source": "src/Text-Boomerang-Prim.html#Boomerang",
        "fct-type": "function",
        "title": "prs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "prs",
        "normalized": "Parser a b(c-\u003ed)",
        "package": "boomerang",
        "partial": "",
        "signature": "Parser e tok(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:runParser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "tok -\u003e Pos e -\u003e [Either e ((a, tok), Pos e)]",
        "fct-source": "src/Text-Boomerang-Prim.html#Parser",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "runParser",
        "normalized": "a-\u003ePos b-\u003e[Either b((c,a),Pos b)]",
        "package": "boomerang",
        "partial": "Parser",
        "signature": "tok-\u003ePos e-\u003e[Either e((a,tok),Pos e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:ser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "b -\u003e [(tok -\u003e tok, a)]",
        "fct-source": "src/Text-Boomerang-Prim.html#Boomerang",
        "fct-type": "function",
        "title": "ser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "ser",
        "normalized": "a-\u003e[(b-\u003eb,c)]",
        "package": "boomerang",
        "partial": "",
        "signature": "b-\u003e[(tok-\u003etok,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:unparse",
      "description": {
        "fct-descr": "\u003cp\u003eGive all possible serializations.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "tok -\u003e Boomerang e tok () url -\u003e url -\u003e [tok]",
        "fct-source": "src/Text-Boomerang-Prim.html#unparse",
        "fct-type": "function",
        "title": "unparse"
      },
      "index": {
        "description": "Give all possible serializations",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "unparse",
        "normalized": "a-\u003eBoomerang b a()c-\u003ec-\u003e[a]",
        "package": "boomerang",
        "partial": "",
        "signature": "tok-\u003eBoomerang e tok()url-\u003eurl-\u003e[tok]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:unparse1",
      "description": {
        "fct-descr": "\u003cp\u003eGive the first serialization, for Boomerangs with a serializer that needs just one value.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "tok -\u003e Boomerang e tok () (a :- ()) -\u003e a -\u003e Maybe tok",
        "fct-source": "src/Text-Boomerang-Prim.html#unparse1",
        "fct-type": "function",
        "title": "unparse1"
      },
      "index": {
        "description": "Give the first serialization for Boomerangs with serializer that needs just one value",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "unparse1",
        "normalized": "a-\u003eBoomerang b a()(c())-\u003ec-\u003eMaybe a",
        "package": "boomerang",
        "partial": "",
        "signature": "tok-\u003eBoomerang e tok()(a())-\u003ea-\u003eMaybe tok"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:val",
      "description": {
        "fct-descr": "\u003cp\u003elift a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and a printer into a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "forall e tok a r.  Parser e tok a -\u003e (a -\u003e [tok -\u003e tok]) -\u003e Boomerang e tok r (a :- r)",
        "fct-source": "src/Text-Boomerang-Prim.html#val",
        "fct-type": "function",
        "title": "val"
      },
      "index": {
        "description": "lift Parser and printer into Boomerang",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "val",
        "normalized": "a b c d e Parser b c d-\u003e(d-\u003e[c-\u003ec])-\u003eBoomerang b c f(d f)",
        "package": "boomerang",
        "partial": "",
        "signature": "forall e tok a r. Parser e tok a-\u003e(a-\u003e[tok-\u003etok])-\u003eBoomerang e tok r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xmap",
      "description": {
        "fct-descr": "\u003cp\u003eMap over routers.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok r a -\u003e Boomerang e tok r b",
        "fct-source": "src/Text-Boomerang-Prim.html#xmap",
        "fct-type": "function",
        "title": "xmap"
      },
      "index": {
        "description": "Map over routers",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "xmap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d e a-\u003eBoomerang c d e b",
        "package": "boomerang",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok r a-\u003eBoomerang e tok r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xmaph",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003exmap\u003c/a\u003e, but only maps over the top of the stack.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok i (a :- o) -\u003e Boomerang e tok i (b :- o)",
        "fct-source": "src/Text-Boomerang-Prim.html#xmaph",
        "fct-type": "function",
        "title": "xmaph"
      },
      "index": {
        "description": "Like xmap but only maps over the top of the stack",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "xmaph",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d e(a f)-\u003eBoomerang c d e(b f)",
        "package": "boomerang",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok i(a o)-\u003eBoomerang e tok i(b o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xpure",
      "description": {
        "fct-descr": "\u003cp\u003eLift a constructor-destructor pair to a pure router.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Prim",
        "fct-package": "boomerang",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok a b",
        "fct-source": "src/Text-Boomerang-Prim.html#xpure",
        "fct-type": "function",
        "title": "xpure"
      },
      "index": {
        "description": "Lift constructor-destructor pair to pure router",
        "hierarchy": "Text Boomerang Prim",
        "module": "Text.Boomerang.Prim",
        "name": "xpure",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d a b",
        "package": "boomerang",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "Boomerang library for working with String",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "String",
        "normalized": "",
        "package": "boomerang",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringBoomerang",
      "description": {
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-String.html#StringBoomerang",
        "fct-type": "type",
        "title": "StringBoomerang"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "StringBoomerang",
        "normalized": "",
        "package": "boomerang",
        "partial": "String Boomerang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringError",
      "description": {
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-String.html#StringError",
        "fct-type": "type",
        "title": "StringError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "StringError",
        "normalized": "",
        "package": "boomerang",
        "partial": "String Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringPrinterParser",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use StringBoomerang instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-String.html#StringPrinterParser",
        "fct-type": "type",
        "title": "StringPrinterParser"
      },
      "index": {
        "description": "Deprecated Use StringBoomerang instead",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "StringPrinterParser",
        "normalized": "",
        "package": "boomerang",
        "partial": "String Printer Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "alpha",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:anyChar",
      "description": {
        "fct-descr": "\u003cp\u003eany character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#anyChar",
        "fct-type": "function",
        "title": "anyChar"
      },
      "index": {
        "description": "any character",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "anyChar",
        "normalized": "",
        "package": "boomerang",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "Char -\u003e StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "matches the specified character",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "char",
        "normalized": "Char-\u003eStringBoomerang a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Char-\u003eStringBoomerang r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:digit",
      "description": {
        "fct-descr": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#digit",
        "fct-type": "function",
        "title": "digit"
      },
      "index": {
        "description": "ascii digits",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "digit",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Int :- r)",
        "fct-source": "src/Text-Boomerang-String.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "matches an Int",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "int",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Integer :- r)",
        "fct-source": "src/Text-Boomerang-String.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "matches an Integer",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "integer",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:isComplete",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to test if we have parsed all the strings.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003eparseStrings\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Text-Boomerang-String.html#isComplete",
        "fct-type": "function",
        "title": "isComplete"
      },
      "index": {
        "description": "Predicate to test if we have parsed all the strings Typically used as argument to parse1 see also parseStrings",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "isComplete",
        "normalized": "String-\u003eBool",
        "package": "boomerang",
        "partial": "Complete",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:lit",
      "description": {
        "fct-descr": "\u003cp\u003ea constant string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "String -\u003e StringBoomerang r r",
        "fct-source": "src/Text-Boomerang-String.html#lit",
        "fct-type": "function",
        "title": "lit"
      },
      "index": {
        "description": "constant string",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "lit",
        "normalized": "String-\u003eStringBoomerang a a",
        "package": "boomerang",
        "partial": "",
        "signature": "String-\u003eStringBoomerang r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:parseString",
      "description": {
        "fct-descr": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseString (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang () (r :- ()) -\u003e String -\u003e Either StringError r",
        "fct-source": "src/Text-Boomerang-String.html#parseString",
        "fct-type": "function",
        "title": "parseString"
      },
      "index": {
        "description": "run the parser Returns the first complete parse or parse error parseString rUnit lit foo foo",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "parseString",
        "normalized": "StringBoomerang()(a())-\u003eString-\u003eEither StringError a",
        "package": "boomerang",
        "partial": "String",
        "signature": "StringBoomerang()(r())-\u003eString-\u003eEither StringError r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:satisfy",
      "description": {
        "fct-descr": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "(Char -\u003e Bool) -\u003e StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#satisfy",
        "fct-type": "function",
        "title": "satisfy"
      },
      "index": {
        "description": "statisfy Char predicate",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "satisfy",
        "normalized": "(Char-\u003eBool)-\u003eStringBoomerang a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eStringBoomerang r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang r (Char :- r)",
        "fct-source": "src/Text-Boomerang-String.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "matches white-space characters in the Latin-1 range Uses isSpace",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "space",
        "normalized": "",
        "package": "boomerang",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:unparseString",
      "description": {
        "fct-descr": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseString (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.String",
        "fct-package": "boomerang",
        "fct-signature": "StringBoomerang () (r :- ()) -\u003e r -\u003e Maybe String",
        "fct-source": "src/Text-Boomerang-String.html#unparseString",
        "fct-type": "function",
        "title": "unparseString"
      },
      "index": {
        "description": "run the printer unparseString rUnit lit foo",
        "hierarchy": "Text Boomerang String",
        "module": "Text.Boomerang.String",
        "name": "unparseString",
        "normalized": "StringBoomerang()(a())-\u003ea-\u003eMaybe String",
        "package": "boomerang",
        "partial": "String",
        "signature": "StringBoomerang()(r())-\u003er-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with '[String]'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Strings.html",
        "fct-type": "module",
        "title": "Strings"
      },
      "index": {
        "description": "Boomerang library for working with String",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "Strings",
        "normalized": "",
        "package": "boomerang",
        "partial": "Strings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#t:StringsError",
      "description": {
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-Strings.html#StringsError",
        "fct-type": "type",
        "title": "StringsError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "StringsError",
        "normalized": "",
        "package": "boomerang",
        "partial": "Strings Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eequivalent to \u003ccode\u003ef . eos . g\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] b c -\u003e Boomerang StringsError [String] a b -\u003e Boomerang StringsError [String] a c",
        "fct-source": "src/Text-Boomerang-Strings.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "equivalent to eos",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Boomerang StringsError[String]a b-\u003eBoomerang StringsError[String]c a-\u003eBoomerang StringsError[String]c b",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]b c-\u003eBoomerang StringsError[String]a b-\u003eBoomerang StringsError[String]a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "alpha",
        "normalized": "Boomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:anyChar",
      "description": {
        "fct-descr": "\u003cp\u003eany character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#anyChar",
        "fct-type": "function",
        "title": "anyChar"
      },
      "index": {
        "description": "any character",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "anyChar",
        "normalized": "Boomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "Char",
        "signature": "Boomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:anyString",
      "description": {
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (String :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#anyString",
        "fct-type": "function",
        "title": "anyString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "anyString",
        "normalized": "Boomerang StringsError[String]a(String a)",
        "package": "boomerang",
        "partial": "String",
        "signature": "Boomerang StringsError[String]r(String r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Char -\u003e Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "matches the specified character",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "char",
        "normalized": "Char-\u003eBoomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Char-\u003eBoomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:digit",
      "description": {
        "fct-descr": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#digit",
        "fct-type": "function",
        "title": "digit"
      },
      "index": {
        "description": "ascii digits",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "digit",
        "normalized": "Boomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:eos",
      "description": {
        "fct-descr": "\u003cp\u003eend of string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r r",
        "fct-source": "src/Text-Boomerang-Strings.html#eos",
        "fct-type": "function",
        "title": "eos"
      },
      "index": {
        "description": "end of string",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "eos",
        "normalized": "Boomerang StringsError[String]a a",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . int . int)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Int :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "matches an Int Note that the combinator rPair int int is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "int",
        "normalized": "Boomerang StringsError[String]a(Int a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(Int r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integer . integer)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Integer :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "matches an Integer Note that the combinator rPair integer integer is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "integer",
        "normalized": "Boomerang StringsError[String]a(Integer a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(Integer r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:isComplete",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to test if we have parsed all the strings.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eparseStrings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "[String] -\u003e Bool",
        "fct-source": "src/Text-Boomerang-Strings.html#isComplete",
        "fct-type": "function",
        "title": "isComplete"
      },
      "index": {
        "description": "Predicate to test if we have parsed all the strings Typically used as argument to parse1 see also parseStrings",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "isComplete",
        "normalized": "[String]-\u003eBool",
        "package": "boomerang",
        "partial": "Complete",
        "signature": "[String]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:lit",
      "description": {
        "fct-descr": "\u003cp\u003ea constant string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "String -\u003e Boomerang StringsError [String] r r",
        "fct-source": "src/Text-Boomerang-Strings.html#lit",
        "fct-type": "function",
        "title": "lit"
      },
      "index": {
        "description": "constant string",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "lit",
        "normalized": "String-\u003eBoomerang StringsError[String]a a",
        "package": "boomerang",
        "partial": "",
        "signature": "String-\u003eBoomerang StringsError[String]r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:parseStrings",
      "description": {
        "fct-descr": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseStrings (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] () (r :- ()) -\u003e [String] -\u003e Either StringsError r",
        "fct-source": "src/Text-Boomerang-Strings.html#parseStrings",
        "fct-type": "function",
        "title": "parseStrings"
      },
      "index": {
        "description": "run the parser Returns the first complete parse or parse error parseStrings rUnit lit foo foo",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "parseStrings",
        "normalized": "Boomerang StringsError[String]()(a())-\u003e[String]-\u003eEither StringsError a",
        "package": "boomerang",
        "partial": "Strings",
        "signature": "Boomerang StringsError[String]()(r())-\u003e[String]-\u003eEither StringsError r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:readshow",
      "description": {
        "fct-descr": "\u003cp\u003elift 'Read'/'Show' to a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThere are a few restrictions here:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Error messages are a bit fuzzy. \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e does not tell us where\n  or why a parse failed. So all we can do it use the the position\n  that we were at when we called read and say that it failed.\n\u003c/li\u003e\u003cli\u003e it is (currently) not safe to use \u003ccode\u003e\u003ca\u003ereadshow\u003c/a\u003e\u003c/code\u003e on integral values\n  because the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, etc,\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (a :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#readshow",
        "fct-type": "function",
        "title": "readshow"
      },
      "index": {
        "description": "lift Read Show to Boomerang There are few restrictions here Error messages are bit fuzzy Read does not tell us where or why parse failed So all we can do it use the the position that we were at when we called read and say that it failed it is currently not safe to use readshow on integral values because the Read instance for Int Integer etc",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "readshow",
        "normalized": "Boomerang StringsError[String]a(b a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:satisfy",
      "description": {
        "fct-descr": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "(Char -\u003e Bool) -\u003e Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#satisfy",
        "fct-type": "function",
        "title": "satisfy"
      },
      "index": {
        "description": "statisfy Char predicate",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "satisfy",
        "normalized": "(Char-\u003eBool)-\u003eBoomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eBoomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:satisfyStr",
      "description": {
        "fct-descr": "\u003cp\u003esatisfy a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e\u003cp\u003eNote: must match the entire remainder of the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in this segment\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "(String -\u003e Bool) -\u003e Boomerang StringsError [String] r (String :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#satisfyStr",
        "fct-type": "function",
        "title": "satisfyStr"
      },
      "index": {
        "description": "satisfy String predicate Note must match the entire remainder of the String in this segment",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "satisfyStr",
        "normalized": "(String-\u003eBool)-\u003eBoomerang StringsError[String]a(String a)",
        "package": "boomerang",
        "partial": "Str",
        "signature": "(String-\u003eBool)-\u003eBoomerang StringsError[String]r(String r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang StringsError [String] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Strings.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "matches white-space characters in the Latin-1 range Uses isSpace",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "space",
        "normalized": "Boomerang StringsError[String]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang StringsError[String]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:unparseStrings",
      "description": {
        "fct-descr": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseStrings (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Strings",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [String] () (r :- ()) -\u003e r -\u003e Maybe [String]",
        "fct-source": "src/Text-Boomerang-Strings.html#unparseStrings",
        "fct-type": "function",
        "title": "unparseStrings"
      },
      "index": {
        "description": "run the printer unparseStrings rUnit lit foo",
        "hierarchy": "Text Boomerang Strings",
        "module": "Text.Boomerang.Strings",
        "name": "unparseStrings",
        "normalized": "Boomerang a[String]()(b())-\u003eb-\u003eMaybe[String]",
        "package": "boomerang",
        "partial": "Strings",
        "signature": "Boomerang e[String]()(r())-\u003er-\u003eMaybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#",
      "description": {
        "fct-module": "Text.Boomerang.TH",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang TH",
        "module": "Text.Boomerang.TH",
        "name": "TH",
        "normalized": "",
        "package": "boomerang",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#v:derivePrinterParsers",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use makeBoomerangs instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eOld name for \u003ccode\u003e\u003ca\u003emakeBoomerangs\u003c/a\u003e\u003c/code\u003e, since renamed to reflect the fact\n that it's not actually deriving instances for any type class, but rather\n generates top-level definitions for routers of type \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.TH",
        "fct-package": "boomerang",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Text-Boomerang-TH.html#derivePrinterParsers",
        "fct-type": "function",
        "title": "derivePrinterParsers"
      },
      "index": {
        "description": "Deprecated Use makeBoomerangs instead Old name for makeBoomerangs since renamed to reflect the fact that it not actually deriving instances for any type class but rather generates top-level definitions for routers of type Boomerang",
        "hierarchy": "Text Boomerang TH",
        "module": "Text.Boomerang.TH",
        "name": "derivePrinterParsers",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "boomerang",
        "partial": "Printer Parsers",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#v:makeBoomerangs",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e router for each constructor in a datatype. For\n example:\n\u003c/p\u003e\u003cpre\u003e$(makeBoomerangs ''Sitemap)\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.TH",
        "fct-package": "boomerang",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Text-Boomerang-TH.html#makeBoomerangs",
        "fct-type": "function",
        "title": "makeBoomerangs"
      },
      "index": {
        "description": "Make Boomerang router for each constructor in datatype For example makeBoomerangs Sitemap",
        "hierarchy": "Text Boomerang TH",
        "module": "Text.Boomerang.TH",
        "name": "makeBoomerangs",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "boomerang",
        "partial": "Boomerangs",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with '[Text]'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang-Texts.html",
        "fct-type": "module",
        "title": "Texts"
      },
      "index": {
        "description": "Boomerang library for working with Text",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "Texts",
        "normalized": "",
        "package": "boomerang",
        "partial": "Texts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#t:TextsError",
      "description": {
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "type",
        "fct-source": "src/Text-Boomerang-Texts.html#TextsError",
        "fct-type": "type",
        "title": "TextsError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "TextsError",
        "normalized": "",
        "package": "boomerang",
        "partial": "Texts Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eequivalent to \u003ccode\u003ef . eos . g\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] b c -\u003e Boomerang TextsError [Text] a b -\u003e Boomerang TextsError [Text] a c",
        "fct-source": "src/Text-Boomerang-Texts.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "equivalent to eos",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Boomerang TextsError[Text]a b-\u003eBoomerang TextsError[Text]c a-\u003eBoomerang TextsError[Text]c b",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]b c-\u003eBoomerang TextsError[Text]a b-\u003eBoomerang TextsError[Text]a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "alpha",
        "normalized": "Boomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:anyChar",
      "description": {
        "fct-descr": "\u003cp\u003eany character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#anyChar",
        "fct-type": "function",
        "title": "anyChar"
      },
      "index": {
        "description": "any character",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "anyChar",
        "normalized": "Boomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "Char",
        "signature": "Boomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:anyText",
      "description": {
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#anyText",
        "fct-type": "function",
        "title": "anyText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "anyText",
        "normalized": "Boomerang TextsError[Text]a(Text a)",
        "package": "boomerang",
        "partial": "Text",
        "signature": "Boomerang TextsError[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Char -\u003e Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "matches the specified character",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "char",
        "normalized": "Char-\u003eBoomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Char-\u003eBoomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:digit",
      "description": {
        "fct-descr": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#digit",
        "fct-type": "function",
        "title": "digit"
      },
      "index": {
        "description": "ascii digits",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "digit",
        "normalized": "Boomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:digits",
      "description": {
        "fct-descr": "\u003cp\u003ea sequence of one or more digits\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "sequence of one or more digits",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "digits",
        "normalized": "Boomerang TextsError[Text]a(Text a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:eos",
      "description": {
        "fct-descr": "\u003cp\u003eend of string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r r",
        "fct-source": "src/Text-Boomerang-Texts.html#eos",
        "fct-type": "function",
        "title": "eos"
      },
      "index": {
        "description": "end of string",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "eos",
        "normalized": "Boomerang TextsError[Text]a a",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n Note that the combinator \u003ccode\u003e(rPair . int . int)\u003c/code\u003e is ill-defined because the parse canwell. not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Int :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "matches an Int Note that the combinator rPair int int is ill-defined because the parse canwell not tell where it is supposed to split the sequence of digits to produced two ints",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "int",
        "normalized": "Boomerang TextsError[Text]a(Int a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Int r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integer . integer)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Integer :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "matches an Integer Note that the combinator rPair integer integer is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "integer",
        "normalized": "Boomerang TextsError[Text]a(Integer a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Integer r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:integral",
      "description": {
        "fct-descr": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integral . integral)\u003c/code\u003e is ill-defined because the parse canwell. not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (a :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#integral",
        "fct-type": "function",
        "title": "integral"
      },
      "index": {
        "description": "matches an Integral value Note that the combinator rPair integral integral is ill-defined because the parse canwell not tell where it is supposed to split the sequence of digits to produced two ints",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "integral",
        "normalized": "Boomerang TextsError[Text]a(b a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:isComplete",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to test if we have parsed all the Texts.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eparseTexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "[Text] -\u003e Bool",
        "fct-source": "src/Text-Boomerang-Texts.html#isComplete",
        "fct-type": "function",
        "title": "isComplete"
      },
      "index": {
        "description": "Predicate to test if we have parsed all the Texts Typically used as argument to parse1 see also parseTexts",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "isComplete",
        "normalized": "[Text]-\u003eBool",
        "package": "boomerang",
        "partial": "Complete",
        "signature": "[Text]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:lit",
      "description": {
        "fct-descr": "\u003cp\u003ea constant string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Text -\u003e Boomerang TextsError [Text] r r",
        "fct-source": "src/Text-Boomerang-Texts.html#lit",
        "fct-type": "function",
        "title": "lit"
      },
      "index": {
        "description": "constant string",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "lit",
        "normalized": "Text-\u003eBoomerang TextsError[Text]a a",
        "package": "boomerang",
        "partial": "",
        "signature": "Text-\u003eBoomerang TextsError[Text]r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:parseTexts",
      "description": {
        "fct-descr": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseTexts (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] () (r :- ()) -\u003e [Text] -\u003e Either TextsError r",
        "fct-source": "src/Text-Boomerang-Texts.html#parseTexts",
        "fct-type": "function",
        "title": "parseTexts"
      },
      "index": {
        "description": "run the parser Returns the first complete parse or parse error parseTexts rUnit lit foo foo",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "parseTexts",
        "normalized": "Boomerang TextsError[Text]()(a())-\u003e[Text]-\u003eEither TextsError a",
        "package": "boomerang",
        "partial": "Texts",
        "signature": "Boomerang TextsError[Text]()(r())-\u003e[Text]-\u003eEither TextsError r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rEmpty",
      "description": {
        "fct-descr": "\u003cp\u003ethe empty string\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#rEmpty",
        "fct-type": "function",
        "title": "rEmpty"
      },
      "index": {
        "description": "the empty string",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "rEmpty",
        "normalized": "Boomerang a[Text]b(Text b)",
        "package": "boomerang",
        "partial": "Empty",
        "signature": "Boomerang e[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rText",
      "description": {
        "fct-descr": "\u003cp\u003econstruct/parse some \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by repeatedly apply a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e 0 or more times parser\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [Text] r (Char :- r) -\u003e Boomerang e [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#rText",
        "fct-type": "function",
        "title": "rText"
      },
      "index": {
        "description": "construct parse some Text by repeatedly apply Char or more times parser",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "rText",
        "normalized": "Boomerang a[Text]b(Char b)-\u003eBoomerang a[Text]b(Text b)",
        "package": "boomerang",
        "partial": "Text",
        "signature": "Boomerang e[Text]r(Char r)-\u003eBoomerang e[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rText1",
      "description": {
        "fct-descr": "\u003cp\u003econstruct/parse some \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by repeatedly apply a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e 1 or more times parser\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [Text] r (Char :- r) -\u003e Boomerang e [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#rText1",
        "fct-type": "function",
        "title": "rText1"
      },
      "index": {
        "description": "construct parse some Text by repeatedly apply Char or more times parser",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "rText1",
        "normalized": "Boomerang a[Text]b(Char b)-\u003eBoomerang a[Text]b(Text b)",
        "package": "boomerang",
        "partial": "Text",
        "signature": "Boomerang e[Text]r(Char r)-\u003eBoomerang e[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rTextCons",
      "description": {
        "fct-descr": "\u003cp\u003ethe first character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e tok (Char :- (Text :- r)) (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#rTextCons",
        "fct-type": "function",
        "title": "rTextCons"
      },
      "index": {
        "description": "the first character of Text",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "rTextCons",
        "normalized": "",
        "package": "boomerang",
        "partial": "Text Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:readshow",
      "description": {
        "fct-descr": "\u003cp\u003elift 'Read'/'Show' to a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThere are a few restrictions here:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Error messages are a bit fuzzy. \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e does not tell us where\n  or why a parse failed. So all we can do it use the the position\n  that we were at when we called read and say that it failed.\n\u003c/li\u003e\u003cli\u003e it is (currently) not safe to use \u003ccode\u003e\u003ca\u003ereadshow\u003c/a\u003e\u003c/code\u003e on integral values\n  because the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, etc,\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (a :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#readshow",
        "fct-type": "function",
        "title": "readshow"
      },
      "index": {
        "description": "lift Read Show to Boomerang There are few restrictions here Error messages are bit fuzzy Read does not tell us where or why parse failed So all we can do it use the the position that we were at when we called read and say that it failed it is currently not safe to use readshow on integral values because the Read instance for Int Integer etc",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "readshow",
        "normalized": "Boomerang TextsError[Text]a(b a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:satisfy",
      "description": {
        "fct-descr": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "(Char -\u003e Bool) -\u003e Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#satisfy",
        "fct-type": "function",
        "title": "satisfy"
      },
      "index": {
        "description": "statisfy Char predicate",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "satisfy",
        "normalized": "(Char-\u003eBool)-\u003eBoomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eBoomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:satisfyStr",
      "description": {
        "fct-descr": "\u003cp\u003esatisfy a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e\u003cp\u003eNote: must match the entire remainder of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in this segment\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "(Text -\u003e Bool) -\u003e Boomerang TextsError [Text] r (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#satisfyStr",
        "fct-type": "function",
        "title": "satisfyStr"
      },
      "index": {
        "description": "satisfy Text predicate Note must match the entire remainder of the Text in this segment",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "satisfyStr",
        "normalized": "(Text-\u003eBool)-\u003eBoomerang TextsError[Text]a(Text a)",
        "package": "boomerang",
        "partial": "Str",
        "signature": "(Text-\u003eBool)-\u003eBoomerang TextsError[Text]r(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:signed",
      "description": {
        "fct-descr": "\u003cp\u003ean optional - character\n\u003c/p\u003e\u003cp\u003eTypically used with \u003ccode\u003e\u003ca\u003edigits\u003c/a\u003e\u003c/code\u003e to support signed numbers\n\u003c/p\u003e\u003cpre\u003e signed digits\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] a (Text :- r) -\u003e Boomerang TextsError [Text] a (Text :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#signed",
        "fct-type": "function",
        "title": "signed"
      },
      "index": {
        "description": "an optional character Typically used with digits to support signed numbers signed digits",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "signed",
        "normalized": "Boomerang TextsError[Text]a(Text b)-\u003eBoomerang TextsError[Text]a(Text b)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]a(Text r)-\u003eBoomerang TextsError[Text]a(Text r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang TextsError [Text] r (Char :- r)",
        "fct-source": "src/Text-Boomerang-Texts.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "matches white-space characters in the Latin-1 range Uses isSpace",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "space",
        "normalized": "Boomerang TextsError[Text]a(Char a)",
        "package": "boomerang",
        "partial": "",
        "signature": "Boomerang TextsError[Text]r(Char r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:unparseTexts",
      "description": {
        "fct-descr": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseTexts (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
        "fct-module": "Text.Boomerang.Texts",
        "fct-package": "boomerang",
        "fct-signature": "Boomerang e [Text] () (r :- ()) -\u003e r -\u003e Maybe [Text]",
        "fct-source": "src/Text-Boomerang-Texts.html#unparseTexts",
        "fct-type": "function",
        "title": "unparseTexts"
      },
      "index": {
        "description": "run the printer unparseTexts rUnit lit foo",
        "hierarchy": "Text Boomerang Texts",
        "module": "Text.Boomerang.Texts",
        "name": "unparseTexts",
        "normalized": "Boomerang a[Text]()(b())-\u003eb-\u003eMaybe[Text]",
        "package": "boomerang",
        "partial": "Texts",
        "signature": "Boomerang e[Text]()(r())-\u003er-\u003eMaybe[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoomerang is a DSL for creating parsers and pretty-printers using a\nsingle specification. Instead of writing a parser, and then writing a\nseparate pretty-printer, both are created at once. This saves time,\nand ensures that the parser and pretty-printer are inverses and stay\nin-sync with each other.\n\u003c/p\u003e\u003cp\u003eBoomerang is a generalized derivative of the Zwaluw library created by\nSjoerd Visscher and Martijn van Steenbergen:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/Zwaluw\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBoomerang is similar in purpose, but different in implementation to:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/invertible-syntax\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHere is a simple example. First we enable three language extensions:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, TypeOperators, OverloadedStrings #-}\u003c/pre\u003e\u003cp\u003eIn the imports, note that we hide \u003ccode\u003e((.), id)\u003c/code\u003e from \u003ccode\u003ePrelude\u003c/code\u003e and use\n\u003ccode\u003e((.), id)\u003c/code\u003e from \u003ca\u003eControl.Category\u003c/a\u003e instead.\n\u003c/p\u003e\u003cpre\u003e \n module Main where\n\n import Prelude hiding ((.), id)\n import Control.Category ((.), id)\n import Control.Monad (forever)\n import Text.Boomerang\n import Text.Boomerang.String\n import Text.Boomerang.TH\n import System.IO (hFlush, stdout)\n\u003c/pre\u003e\u003cp\u003eNext we define a type that we want to be able to pretty-print and define parsers for:\n\u003c/p\u003e\u003cpre\u003e data Foo\n     = Bar\n     | Baz Int Char\n       deriving (Eq, Show)\n\u003c/pre\u003e\u003cp\u003eThen we generate some combinators for the type:\n\u003c/p\u003e\u003cpre\u003e $(makeBoomerangs ''Foo)\n\u003c/pre\u003e\u003cp\u003eThe combinators will be named after the constructors, but with an r prefixed to them. In this case, \u003ccode\u003erBar\u003c/code\u003e and \u003ccode\u003erBaz\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNow we can define a grammar:\n\u003c/p\u003e\u003cpre\u003e foo :: StringBoomerang () (Foo :- ())\n foo =\n     (  rBar\n     \u003c\u003e rBaz . \"baz-\" . int . \"-\" . alpha\n     )\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e.\u003c/code\u003e is used to compose parsers together. \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is used for choice.\n\u003c/p\u003e\u003cp\u003eNow we can use \u003ccode\u003efoo\u003c/code\u003e as a printer or a parser.\n\u003c/p\u003e\u003cp\u003eHere is an example of a successful parse:\n\u003c/p\u003e\u003cpre\u003e test1 = parseString foo \"baz-2-c\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test1\nRight (Baz 2 \u003ccode\u003ec\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eAnd another example:\n\u003c/p\u003e\u003cpre\u003e test2 = parseString foo \"\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test2\nRight Bar\n\u003c/pre\u003e\u003cp\u003eHere is an example of a parse error:\n\u003c/p\u003e\u003cpre\u003e test3 = parseString foo \"baz-2-3\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test3\nLeft parse error at (0, 6): unexpected '3'; expecting an alphabetic Unicode character\n\u003c/pre\u003e\u003cp\u003ewe can also use \u003ccode\u003efoo\u003c/code\u003e to pretty-print a value:\n\u003c/p\u003e\u003cpre\u003e test4 = unparseString foo (Baz 1 'z')\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test4\nJust \u003ca\u003ebaz-1-z\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eHere is a little app that allows you to interactively test \u003ccode\u003efoo\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e testInvert :: String -\u003e IO ()\n testInvert str =\n     case parseString foo str of\n       (Left e) -\u003e print e\n       (Right f') -\u003e\n           do putStrLn $ \"Parsed: \" ++ show f'\n              case unparseString foo f' of\n                Nothing  -\u003e putStrLn \"unparseString failed to produce a value.\"\n                (Just s) -\u003e putStrLn $ \"Pretty: \" ++ s\n\u003c/pre\u003e\u003cpre\u003e main = forever $\n     do putStr \"Enter a string to parse: \"\n        hFlush stdout\n        l \u003c- getLine\n        testInvert l\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Boomerang",
        "fct-package": "boomerang",
        "fct-signature": "module",
        "fct-source": "src/Text-Boomerang.html",
        "fct-type": "module",
        "title": "Boomerang"
      },
      "index": {
        "description": "Boomerang is DSL for creating parsers and pretty-printers using single specification Instead of writing parser and then writing separate pretty-printer both are created at once This saves time and ensures that the parser and pretty-printer are inverses and stay in-sync with each other Boomerang is generalized derivative of the Zwaluw library created by Sjoerd Visscher and Martijn van Steenbergen http hackage.haskell.org package Zwaluw Boomerang is similar in purpose but different in implementation to http hackage.haskell.org package invertible-syntax Here is simple example First we enable three language extensions LANGUAGE TemplateHaskell TypeOperators OverloadedStrings In the imports note that we hide id from Prelude and use id from Control.Category instead module Main where import Prelude hiding id import Control.Category id import Control.Monad forever import Text.Boomerang import Text.Boomerang.String import Text.Boomerang.TH import System.IO hFlush stdout Next we define type that we want to be able to pretty-print and define parsers for data Foo Bar Baz Int Char deriving Eq Show Then we generate some combinators for the type makeBoomerangs Foo The combinators will be named after the constructors but with an prefixed to them In this case rBar and rBaz Now we can define grammar foo StringBoomerang Foo foo rBar rBaz baz int alpha is used to compose parsers together is used for choice Now we can use foo as printer or parser Here is an example of successful parse test1 parseString foo baz-2-c Main test1 Right Baz And another example test2 parseString foo Main test2 Right Bar Here is an example of parse error test3 parseString foo baz-2-3 Main test3 Left parse error at unexpected expecting an alphabetic Unicode character we can also use foo to pretty-print value test4 unparseString foo Baz Main test4 Just baz-1-z Here is little app that allows you to interactively test foo testInvert String IO testInvert str case parseString foo str of Left print Right do putStrLn Parsed show case unparseString foo of Nothing putStrLn unparseString failed to produce value Just putStrLn Pretty main forever do putStr Enter string to parse hFlush stdout getLine testInvert",
        "hierarchy": "Text Boomerang",
        "module": "Text.Boomerang",
        "name": "Boomerang",
        "normalized": "",
        "package": "boomerang",
        "partial": "Boomerang",
        "signature": ""
      }
    }
  }
]