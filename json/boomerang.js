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
        "word": "boomerang"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea collection of generic parsing combinators that can work with any token and error type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "Combinators",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "collection of generic parsing combinators that can work with any token and error type",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "Combinators",
          "package": "boomerang",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "(\u003c\u003e)",
          "package": "boomerang",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "boomerang",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e zero or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a left associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "chainl",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "chainl1 op repeats zero or more times separated by op The result is left associative fold of the results of with the results of op",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "chainl",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e one or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a left associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "chainl1",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok (a :- (a :- r)) (a :- r) -\u003e Boomerang e tok r (a :- r)",
          "source": "src/Text-Boomerang-Combinators.html#chainl1",
          "type": "function"
        },
        "index": {
          "description": "chainl1 op repeats one or more times separated by op The result is left associative fold of the results of with the results of op",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "chainl1",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(d(d c))(d c)-\u003eBoomerang a b c(d c)",
          "package": "boomerang",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(a(a r))(a r)-\u003eBoomerang e tok r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e zero or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a right associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "chainr",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "chainr op repeats zero or more times separated by op The result is right associative fold of the results of with the results of op",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "chainr",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr1 p op\u003c/code\u003e repeats \u003ccode\u003ep\u003c/code\u003e one or more times, separated by \u003ccode\u003eop\u003c/code\u003e.\n   The result is a right associative fold of the results of \u003ccode\u003ep\u003c/code\u003e with the results of \u003ccode\u003eop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "chainr1",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok (a :- (a :- r)) (a :- r) -\u003e Boomerang e tok r (a :- r)",
          "source": "src/Text-Boomerang-Combinators.html#chainr1",
          "type": "function"
        },
        "index": {
          "description": "chainr1 op repeats one or more times separated by op The result is right associative fold of the results of with the results of op",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "chainr1",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(d(d c))(d c)-\u003eBoomerang a b c(d c)",
          "package": "boomerang",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(a(a r))(a r)-\u003eBoomerang e tok r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a router to do what it does on the tail of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "duck",
          "package": "boomerang",
          "signature": "Boomerang e tok r1 r2 -\u003e Boomerang e tok (h :- r1) (h :- r2)",
          "source": "src/Text-Boomerang-Combinators.html#duck",
          "type": "function"
        },
        "index": {
          "description": "Convert router to do what it does on the tail of the stack",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "duck",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b(d c)(d c)",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok(h r)(h r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:duck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a router to do what it does on the tail of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "duck1",
          "package": "boomerang",
          "signature": "Boomerang e tok r1 (a :- r2) -\u003e Boomerang e tok (h :- r1) (a :- (h :- r2))",
          "source": "src/Text-Boomerang-Combinators.html#duck1",
          "type": "function"
        },
        "index": {
          "description": "Convert router to do what it does on the tail of the stack",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "duck1",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b(e c)(d(e c))",
          "package": "boomerang",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok(h r)(a(h r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:duck1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a router zero or more times, combining the results from right to left.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "manyl",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#manyl",
          "type": "function"
        },
        "index": {
          "description": "Repeat router zero or more times combining the results from right to left",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "manyl",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:manyl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a router zero or more times, combining the results from left to right.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "manyr",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#manyr",
          "type": "function"
        },
        "index": {
          "description": "Repeat router zero or more times combining the results from left to right",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "manyr",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:manyr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a router optional.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "opt",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#opt",
          "type": "function"
        },
        "index": {
          "description": "Make router optional",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "opt",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003er `printAs` s\u003c/code\u003e uses ther serializer of \u003ccode\u003er\u003c/code\u003e to test if serializing succeeds,\n   and if it does, instead serializes as \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: can this be more general so that it can work on \u003ccode\u003etok\u003c/code\u003e instead of \u003ccode\u003e[tok]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "printAs",
          "package": "boomerang",
          "signature": "Boomerang e [tok] a b -\u003e tok -\u003e Boomerang e [tok] a b",
          "source": "src/Text-Boomerang-Combinators.html#printAs",
          "type": "function"
        },
        "index": {
          "description": "printAs uses ther serializer of to test if serializing succeeds and if it does instead serializes as TODO can this be more general so that it can work on tok instead of tok",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "printAs",
          "normalized": "Boomerang a[b]c d-\u003eb-\u003eBoomerang a[b]c d",
          "package": "boomerang",
          "partial": "As",
          "signature": "Boomerang e[tok]a b-\u003etok-\u003eBoomerang e[tok]a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:printAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a value on the stack (during parsing, pop it from the stack when serializing).\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "push",
          "package": "boomerang",
          "signature": "a -\u003e Boomerang e tok r (a :- r)",
          "source": "src/Text-Boomerang-Combinators.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push value on the stack during parsing pop it from the stack when serializing",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "push",
          "normalized": "a-\u003eBoomerang b c d(a d)",
          "package": "boomerang",
          "signature": "a-\u003eBoomerang e tok r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rBool",
          "package": "boomerang",
          "signature": "Boomerang e tok a r-\u003e Boomerang e tok a r-\u003e Boomerang e tok a (Bool :- r)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rBool",
          "normalized": "Boomerang a b c d-\u003eBoomerang a b c d-\u003eBoomerang a b c(Bool d)",
          "package": "boomerang",
          "partial": "Bool",
          "signature": "Boomerang e tok a r-\u003eBoomerang e tok a r-\u003eBoomerang e tok a(Bool r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rCons",
          "package": "boomerang",
          "signature": "Boomerang e tok (a :- ([a] :- r)) ([a] :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rCons",
          "normalized": "Boomerang a b(c([c]d))([c]d)",
          "package": "boomerang",
          "partial": "Cons",
          "signature": "Boomerang e tok(a([a]r))([a]r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a router for a value \u003ccode\u003ea\u003c/code\u003e and a router for a value \u003ccode\u003eb\u003c/code\u003e into a router for \u003ccode\u003eEither a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rEither",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r (b :- r) -\u003e Boomerang e tok r (Either a b :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rEither",
          "type": "function"
        },
        "index": {
          "description": "Combines router for value and router for value into router for Either",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rEither",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c(e c)-\u003eBoomerang a b c(Either d e c)",
          "package": "boomerang",
          "partial": "Either",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r(b r)-\u003eBoomerang e tok r(Either a b r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rFalse",
          "package": "boomerang",
          "signature": "forall tok e r.  Boomerang e tok r (:- Bool r)",
          "source": "src/Text-Boomerang-Combinators.html#rFalse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rFalse",
          "package": "boomerang",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiltering on routers.\n\u003c/p\u003e\u003cp\u003eTODO: We remove any parse errors, not sure if the should be preserved. Also, if the predicate fails we silently remove the element, but perhaps we should replace the value with an error message?\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rFilter",
          "package": "boomerang",
          "signature": "(a -\u003e Bool) -\u003e Boomerang e tok () (a :- ()) -\u003e Boomerang e tok r (a :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rFilter",
          "type": "function"
        },
        "index": {
          "description": "Filtering on routers TODO We remove any parse errors not sure if the should be preserved Also if the predicate fails we silently remove the element but perhaps we should replace the value with an error message",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rFilter",
          "normalized": "(a-\u003eBool)-\u003eBoomerang b c()(a())-\u003eBoomerang b c d(a d)",
          "package": "boomerang",
          "partial": "Filter",
          "signature": "(a-\u003eBool)-\u003eBoomerang e tok()(a())-\u003eBoomerang e tok r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rJust",
          "package": "boomerang",
          "signature": "forall tok e r a.  Boomerang e tok (:- a r) (:- (Maybe a) r)",
          "source": "src/Text-Boomerang-Combinators.html#rJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rJust",
          "package": "boomerang",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rLeft",
          "package": "boomerang",
          "signature": "forall tok e r a b.  Boomerang e tok (:- a r) (:- (Either a b) r)",
          "source": "src/Text-Boomerang-Combinators.html#rLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rLeft",
          "package": "boomerang",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rList",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r ([a] :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rList",
          "type": "function"
        },
        "index": {
          "description": "Converts router for value to router for list of",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rList",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c([d]c)",
          "package": "boomerang",
          "partial": "List",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r([a]r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rList1",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r ([a] :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rList1",
          "type": "function"
        },
        "index": {
          "description": "Converts router for value to router for list of",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rList1",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c([d]c)",
          "package": "boomerang",
          "partial": "List",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r([a]r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rList1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a list of \u003ccode\u003ea\u003c/code\u003e, with a separator.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rListSep",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok ([a] :- r) ([a] :- r) -\u003e Boomerang e tok r ([a] :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rListSep",
          "type": "function"
        },
        "index": {
          "description": "Converts router for value to router for list of with separator",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rListSep",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b([d]c)([d]c)-\u003eBoomerang a b c([d]c)",
          "package": "boomerang",
          "partial": "List Sep",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok([a]r)([a]r)-\u003eBoomerang e tok r([a]r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rListSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a router for a value \u003ccode\u003ea\u003c/code\u003e to a router for a \u003ccode\u003eMaybe a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "rMaybe",
          "package": "boomerang",
          "signature": "Boomerang e tok r (a :- r) -\u003e Boomerang e tok r (Maybe a :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rMaybe",
          "type": "function"
        },
        "index": {
          "description": "Converts router for value to router for Maybe",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rMaybe",
          "normalized": "Boomerang a b c(d c)-\u003eBoomerang a b c(Maybe d c)",
          "package": "boomerang",
          "partial": "Maybe",
          "signature": "Boomerang e tok r(a r)-\u003eBoomerang e tok r(Maybe a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rNil",
          "package": "boomerang",
          "signature": "Boomerang e tok r ([a] :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rNil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rNil",
          "normalized": "Boomerang a b c([d]c)",
          "package": "boomerang",
          "partial": "Nil",
          "signature": "Boomerang e tok r([a]r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rNothing",
          "package": "boomerang",
          "signature": "forall tok e r a.  Boomerang e tok r (:- (Maybe a) r)",
          "source": "src/Text-Boomerang-Combinators.html#rNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rNothing",
          "package": "boomerang",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rPair",
          "package": "boomerang",
          "signature": "Boomerang e tok (f :- (s :- r)) ((f, s) :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rPair",
          "normalized": "Boomerang a b(c(d e))((c,d)e)",
          "package": "boomerang",
          "partial": "Pair",
          "signature": "Boomerang e tok(f(s r))((f,s)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rRight",
          "package": "boomerang",
          "signature": "forall tok e r a b.  Boomerang e tok (:- b r) (:- (Either a b) r)",
          "source": "src/Text-Boomerang-Combinators.html#rRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rRight",
          "package": "boomerang",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rTrue",
          "package": "boomerang",
          "signature": "forall tok e r.  Boomerang e tok r (:- Bool r)",
          "source": "src/Text-Boomerang-Combinators.html#rTrue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rTrue",
          "package": "boomerang",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Combinators",
          "name": "rUnit",
          "package": "boomerang",
          "signature": "Boomerang e tok r (() :- r)",
          "source": "src/Text-Boomerang-Combinators.html#rUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "rUnit",
          "normalized": "Boomerang a b c(()c)",
          "package": "boomerang",
          "partial": "Unit",
          "signature": "Boomerang e tok r(()r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:rUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a router one or more times, combining the results from right to left.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "somel",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#somel",
          "type": "function"
        },
        "index": {
          "description": "Repeat router one or more times combining the results from right to left",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "somel",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:somel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a router one or more times, combining the results from left to right.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Combinators",
          "name": "somer",
          "package": "boomerang",
          "signature": "Boomerang e tok r r -\u003e Boomerang e tok r r",
          "source": "src/Text-Boomerang-Combinators.html#somer",
          "type": "function"
        },
        "index": {
          "description": "Repeat router one or more times combining the results from left to right",
          "hierarchy": "Text Boomerang Combinators",
          "module": "Text.Boomerang.Combinators",
          "name": "somer",
          "normalized": "Boomerang a b c c-\u003eBoomerang a b c c",
          "package": "boomerang",
          "signature": "Boomerang e tok r r-\u003eBoomerang e tok r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Combinators.html#v:somer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn Error handling scheme that can be used with \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.Error",
          "name": "Error",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Error.html",
          "type": "module"
        },
        "index": {
          "description": "An Error handling scheme that can be used with Boomerang",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "Error",
          "package": "boomerang",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "ErrorMsg",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "ErrorMsg",
          "package": "boomerang",
          "partial": "Error Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#t:ErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "ParserError",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Error.html#ParserError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "ParserError",
          "package": "boomerang",
          "partial": "Parser Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#t:ParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eannotate a parse error with an additional \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cpre\u003e satisfy isUpper \u003c?\u003e 'an uppercase character'\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Error",
          "name": "(\u003c?\u003e)",
          "package": "boomerang",
          "signature": "Boomerang (ParserError p) tok a b -\u003e String -\u003e Boomerang (ParserError p) tok a b",
          "source": "src/Text-Boomerang-Error.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "annotate parse error with an additional Expect message satisfy isUpper an uppercase character",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Boomerang(ParserError a)b c d-\u003eString-\u003eBoomerang(ParserError a)b c d",
          "package": "boomerang",
          "signature": "Boomerang(ParserError p)tok a b-\u003eString-\u003eBoomerang(ParserError p)tok a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "EOI",
          "package": "boomerang",
          "signature": "EOI String",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "EOI",
          "package": "boomerang",
          "partial": "EOI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:EOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "Expect",
          "package": "boomerang",
          "signature": "Expect String",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "Expect",
          "package": "boomerang",
          "partial": "Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:Expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "Message",
          "package": "boomerang",
          "signature": "Message String",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "Message",
          "package": "boomerang",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "ParserError",
          "package": "boomerang",
          "signature": "ParserError (Maybe pos) [ErrorMsg]",
          "source": "src/Text-Boomerang-Error.html#ParserError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "ParserError",
          "normalized": "ParserError(Maybe a)[ErrorMsg]",
          "package": "boomerang",
          "partial": "Parser Error",
          "signature": "ParserError(Maybe pos)[ErrorMsg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:ParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "SysUnExpect",
          "package": "boomerang",
          "signature": "SysUnExpect String",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "SysUnExpect",
          "package": "boomerang",
          "partial": "Sys Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:SysUnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Error",
          "name": "UnExpect",
          "package": "boomerang",
          "signature": "UnExpect String",
          "source": "src/Text-Boomerang-Error.html#ErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "UnExpect",
          "package": "boomerang",
          "partial": "Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:UnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econdense the \u003ccode\u003e\u003ca\u003eParserError\u003c/a\u003e\u003c/code\u003es with the highest parse position into a single \u003ccode\u003e\u003ca\u003eParserError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Error",
          "name": "condenseErrors",
          "package": "boomerang",
          "signature": "[ParserError pos] -\u003e ParserError pos",
          "source": "src/Text-Boomerang-Error.html#condenseErrors",
          "type": "function"
        },
        "index": {
          "description": "condense the ParserError with the highest parse position into single ParserError",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "condenseErrors",
          "normalized": "[ParserError a]-\u003eParserError a",
          "package": "boomerang",
          "partial": "Errors",
          "signature": "[ParserError pos]-\u003eParserError pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:condenseErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eErrorMsg\u003c/a\u003e\u003c/code\u003e.\n Note: the resulting \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e will not include any information about what constructor it came from.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Error",
          "name": "messageString",
          "package": "boomerang",
          "signature": "ErrorMsg -\u003e String",
          "source": "src/Text-Boomerang-Error.html#messageString",
          "type": "function"
        },
        "index": {
          "description": "extract the String from an ErrorMsg Note the resulting String will not include any information about what constructor it came from",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "messageString",
          "normalized": "ErrorMsg-\u003eString",
          "package": "boomerang",
          "partial": "String",
          "signature": "ErrorMsg-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:messageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a \u003ccode\u003epos\u003c/code\u003e and '[ErrorMsg]' into a parse error\n\u003c/p\u003e\u003cp\u003eThis is intended to be used inside a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e Parser $ \\tok pos -\u003e mkParserError pos [Message \"just some error...\"]\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Error",
          "name": "mkParserError",
          "package": "boomerang",
          "signature": "pos -\u003e [ErrorMsg] -\u003e [Either (ParserError pos) a]",
          "source": "src/Text-Boomerang-Error.html#mkParserError",
          "type": "function"
        },
        "index": {
          "description": "lift pos and ErrorMsg into parse error This is intended to be used inside Parser like this Parser tok pos mkParserError pos Message just some error",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "mkParserError",
          "normalized": "a-\u003e[ErrorMsg]-\u003e[Either(ParserError a)b]",
          "package": "boomerang",
          "partial": "Parser Error",
          "signature": "pos-\u003e[ErrorMsg]-\u003e[Either(ParserError pos)a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:mkParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for turning '[ErrorMsg]' into a user-friendly \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Error",
          "name": "showErrorMessages",
          "package": "boomerang",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [ErrorMsg] -\u003e String",
          "source": "src/Text-Boomerang-Error.html#showErrorMessages",
          "type": "function"
        },
        "index": {
          "description": "Helper function for turning ErrorMsg into user-friendly String",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "showErrorMessages",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[ErrorMsg]-\u003eString",
          "package": "boomerang",
          "partial": "Error Messages",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[ErrorMsg]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:showErrorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn a parse error into a user-friendly error message\n\u003c/p\u003e",
          "module": "Text.Boomerang.Error",
          "name": "showParserError",
          "package": "boomerang",
          "signature": "(pos -\u003e String)-\u003e ParserError pos-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "turn parse error into user-friendly error message",
          "hierarchy": "Text Boomerang Error",
          "module": "Text.Boomerang.Error",
          "name": "showParserError",
          "normalized": "(a-\u003eString)-\u003eParserError a-\u003eString",
          "package": "boomerang",
          "partial": "Parser Error",
          "signature": "(pos-\u003eString)-\u003eParserError pos-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Error.html#v:showParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea simple heteregenous stack library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "HStack",
          "package": "boomerang",
          "source": "src/Text-Boomerang-HStack.html",
          "type": "module"
        },
        "index": {
          "description": "simple heteregenous stack library",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "HStack",
          "package": "boomerang",
          "partial": "HStack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack datatype. Just a better looking tuple.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": ":-",
          "package": "boomerang",
          "source": "src/Text-Boomerang-HStack.html#%3A-",
          "type": "data"
        },
        "index": {
          "description": "stack datatype Just better looking tuple",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": ":-",
          "package": "boomerang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#t::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.HStack",
          "name": ":-",
          "package": "boomerang",
          "signature": "a :- b",
          "source": "src/Text-Boomerang-HStack.html#%3A-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": ":-",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.HStack",
          "name": "arg",
          "package": "boomerang",
          "signature": "(ty -\u003e r -\u003e s) -\u003e (a -\u003e ty) -\u003e (a :- r) -\u003e s",
          "source": "src/Text-Boomerang-HStack.html#arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "arg",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d b)-\u003ec",
          "package": "boomerang",
          "signature": "(ty-\u003er-\u003es)-\u003e(a-\u003ety)-\u003e(a r)-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the top of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "hdMap",
          "package": "boomerang",
          "signature": "(a1 -\u003e a2) -\u003e (a1 :- b) -\u003e a2 :- b",
          "source": "src/Text-Boomerang-HStack.html#hdMap",
          "type": "function"
        },
        "index": {
          "description": "Map over the top of the stack",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "hdMap",
          "normalized": "(a-\u003ea)-\u003e(a b)-\u003ea b",
          "package": "boomerang",
          "partial": "Map",
          "signature": "(a-\u003ea)-\u003e(a b)-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative traversal over the top of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "hdTraverse",
          "package": "boomerang",
          "signature": "(a -\u003e f b) -\u003e (a :- t) -\u003e f (b :- t)",
          "source": "src/Text-Boomerang-HStack.html#hdTraverse",
          "type": "function"
        },
        "index": {
          "description": "Applicative traversal over the top of the stack",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "hdTraverse",
          "normalized": "(a-\u003eb c)-\u003e(a d)-\u003eb(c d)",
          "package": "boomerang",
          "partial": "Traverse",
          "signature": "(a-\u003ef b)-\u003e(a t)-\u003ef(b t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hdTraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "hhead",
          "package": "boomerang",
          "signature": "(a :- b) -\u003e a",
          "source": "src/Text-Boomerang-HStack.html#hhead",
          "type": "function"
        },
        "index": {
          "description": "Get the top of the stack",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "hhead",
          "normalized": "(a b)-\u003ea",
          "package": "boomerang",
          "signature": "(a b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:hhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the stack with the top popped.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "htail",
          "package": "boomerang",
          "signature": "(a :- b) -\u003e b",
          "source": "src/Text-Boomerang-HStack.html#htail",
          "type": "function"
        },
        "index": {
          "description": "Get the stack with the top popped",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "htail",
          "normalized": "(a b)-\u003eb",
          "package": "boomerang",
          "signature": "(a b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:htail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack destructor.\n\u003c/p\u003e",
          "module": "Text.Boomerang.HStack",
          "name": "pop",
          "package": "boomerang",
          "signature": "(a -\u003e b -\u003e r) -\u003e (a :- b) -\u003e r",
          "source": "src/Text-Boomerang-HStack.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Stack destructor",
          "hierarchy": "Text Boomerang HStack",
          "module": "Text.Boomerang.HStack",
          "name": "pop",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a b)-\u003ec",
          "package": "boomerang",
          "signature": "(a-\u003eb-\u003er)-\u003e(a b)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-HStack.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "Pos",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Pos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "Pos",
          "package": "boomerang",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract the position information from an error\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "ErrorPosition",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Pos.html#ErrorPosition",
          "type": "class"
        },
        "index": {
          "description": "extract the position information from an error",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "ErrorPosition",
          "package": "boomerang",
          "partial": "Error Position",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:ErrorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe initial position for a position type\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "InitialPosition",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Pos.html#InitialPosition",
          "type": "class"
        },
        "index": {
          "description": "the initial position for position type",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "InitialPosition",
          "package": "boomerang",
          "partial": "Initial Position",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:InitialPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic 2-axis position type (e.g. line, character)\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "MajorMinorPos",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
          "type": "data"
        },
        "index": {
          "description": "basic axis position type e.g line character",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "MajorMinorPos",
          "package": "boomerang",
          "partial": "Major Minor Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:MajorMinorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype synonym family that maps an error type to its position type\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "Pos",
          "package": "boomerang",
          "signature": "Pos",
          "type": "function"
        },
        "index": {
          "description": "type synonym family that maps an error type to its position type",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "Pos",
          "package": "boomerang",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "MajorMinorPos",
          "package": "boomerang",
          "signature": "MajorMinorPos",
          "source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "MajorMinorPos",
          "package": "boomerang",
          "partial": "Major Minor Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:MajorMinorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "getPosition",
          "package": "boomerang",
          "signature": "err -\u003e Maybe (Pos err)",
          "source": "src/Text-Boomerang-Pos.html#getPosition",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "getPosition",
          "normalized": "a-\u003eMaybe(Pos a)",
          "package": "boomerang",
          "partial": "Position",
          "signature": "err-\u003eMaybe(Pos err)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:getPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincrement major position by \u003ccode\u003ei\u003c/code\u003e, reset minor position to 0..\n if you wanted something else.. too bad.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "incMajor",
          "package": "boomerang",
          "signature": "i -\u003e MajorMinorPos -\u003e MajorMinorPos",
          "source": "src/Text-Boomerang-Pos.html#incMajor",
          "type": "function"
        },
        "index": {
          "description": "increment major position by reset minor position to if you wanted something else too bad",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "incMajor",
          "normalized": "a-\u003eMajorMinorPos-\u003eMajorMinorPos",
          "package": "boomerang",
          "partial": "Major",
          "signature": "i-\u003eMajorMinorPos-\u003eMajorMinorPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:incMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincrement minor position by \u003ccode\u003ei\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Pos",
          "name": "incMinor",
          "package": "boomerang",
          "signature": "i -\u003e MajorMinorPos -\u003e MajorMinorPos",
          "source": "src/Text-Boomerang-Pos.html#incMinor",
          "type": "function"
        },
        "index": {
          "description": "increment minor position by",
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "incMinor",
          "normalized": "a-\u003eMajorMinorPos-\u003eMajorMinorPos",
          "package": "boomerang",
          "partial": "Minor",
          "signature": "i-\u003eMajorMinorPos-\u003eMajorMinorPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:incMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "initialPos",
          "package": "boomerang",
          "signature": "Maybe e -\u003e Pos e",
          "source": "src/Text-Boomerang-Pos.html#initialPos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "initialPos",
          "normalized": "Maybe a-\u003ePos a",
          "package": "boomerang",
          "partial": "Pos",
          "signature": "Maybe e-\u003ePos e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:initialPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "major",
          "package": "boomerang",
          "signature": "Integer",
          "source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "major",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Pos",
          "name": "minor",
          "package": "boomerang",
          "signature": "Integer",
          "source": "src/Text-Boomerang-Pos.html#MajorMinorPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Pos",
          "module": "Text.Boomerang.Pos",
          "name": "minor",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Pos.html#v:minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "Prim",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Prim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "Prim",
          "package": "boomerang",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eBoomerang a b\u003c/code\u003e takes an \u003ccode\u003ea\u003c/code\u003e to parse a URL and results in \u003ccode\u003eb\u003c/code\u003e if parsing succeeds.\n   And it takes a \u003ccode\u003eb\u003c/code\u003e to serialize to a URL and results in \u003ccode\u003ea\u003c/code\u003e if serializing succeeds.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "Boomerang",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Prim.html#Boomerang",
          "type": "data"
        },
        "index": {
          "description": "Boomerang takes an to parse URL and results in if parsing succeeds And it takes to serialize to URL and results in if serializing succeeds",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "Boomerang",
          "package": "boomerang",
          "partial": "Boomerang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:Boomerang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYet another parser.\n\u003c/p\u003e\u003cp\u003eReturns all possible parses and parse errors\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "Parser",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Prim.html#Parser",
          "type": "newtype"
        },
        "index": {
          "description": "Yet another parser Returns all possible parses and parse errors",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "Parser",
          "package": "boomerang",
          "partial": "Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Boomerang instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "PrinterParser",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Prim.html#PrinterParser",
          "type": "type"
        },
        "index": {
          "description": "Deprecated Use Boomerang instead",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "PrinterParser",
          "package": "boomerang",
          "partial": "Printer Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#t:PrinterParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse composition, but with the side effects still in left-to-right order.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "(.~)",
          "package": "boomerang",
          "signature": "Boomerang e tok a b -\u003e Boomerang e tok b c -\u003e Boomerang e tok a c",
          "source": "src/Text-Boomerang-Prim.html#.~",
          "type": "function"
        },
        "index": {
          "description": "Reverse composition but with the side effects still in left-to-right order",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "(.~) .~",
          "normalized": "Boomerang a b c d-\u003eBoomerang a b d e-\u003eBoomerang a b c e",
          "package": "boomerang",
          "signature": "Boomerang e tok a b-\u003eBoomerang e tok b c-\u003eBoomerang e tok a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:.-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "Boomerang",
          "package": "boomerang",
          "signature": "Boomerang",
          "source": "src/Text-Boomerang-Prim.html#Boomerang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "Boomerang",
          "package": "boomerang",
          "partial": "Boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:Boomerang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "Parser",
          "package": "boomerang",
          "signature": "Parser",
          "source": "src/Text-Boomerang-Prim.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "Parser",
          "package": "boomerang",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to extract the most relevant errors from a list of parse errors.\n\u003c/p\u003e\u003cp\u003eThe current heuristic is to find error (or errors) where the error position is highest.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "bestErrors",
          "package": "boomerang",
          "signature": "[e] -\u003e [e]",
          "source": "src/Text-Boomerang-Prim.html#bestErrors",
          "type": "function"
        },
        "index": {
          "description": "Attempt to extract the most relevant errors from list of parse errors The current heuristic is to find error or errors where the error position is highest",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "bestErrors",
          "normalized": "[a]-\u003e[a]",
          "package": "boomerang",
          "partial": "Errors",
          "signature": "[e]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:bestErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive all possible parses or errors.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "parse",
          "package": "boomerang",
          "signature": "Boomerang e tok () a -\u003e tok -\u003e [Either e (a, tok)]",
          "source": "src/Text-Boomerang-Prim.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Give all possible parses or errors",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "parse",
          "normalized": "Boomerang a b()c-\u003eb-\u003e[Either a(c,b)]",
          "package": "boomerang",
          "signature": "Boomerang e tok()a-\u003etok-\u003e[Either e(a,tok)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the first parse, for Boomerangs with a parser that yields just one value.\n Otherwise return the error (or errors) with the highest error position.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "parse1",
          "package": "boomerang",
          "signature": "(tok -\u003e Bool) -\u003e Boomerang e tok () (a :- ()) -\u003e tok -\u003e Either [e] a",
          "source": "src/Text-Boomerang-Prim.html#parse1",
          "type": "function"
        },
        "index": {
          "description": "Give the first parse for Boomerangs with parser that yields just one value Otherwise return the error or errors with the highest error position",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "parse1",
          "normalized": "(a-\u003eBool)-\u003eBoomerang b a()(c())-\u003ea-\u003eEither[b]c",
          "package": "boomerang",
          "signature": "(tok-\u003eBool)-\u003eBoomerang e tok()(a())-\u003etok-\u003eEither[e]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:parse1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "prs",
          "package": "boomerang",
          "signature": "Parser e tok (a -\u003e b)",
          "source": "src/Text-Boomerang-Prim.html#Boomerang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "prs",
          "normalized": "Parser a b(c-\u003ed)",
          "package": "boomerang",
          "signature": "Parser e tok(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:prs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "runParser",
          "package": "boomerang",
          "signature": "tok -\u003e Pos e -\u003e [Either e ((a, tok), Pos e)]",
          "source": "src/Text-Boomerang-Prim.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "runParser",
          "normalized": "a-\u003ePos b-\u003e[Either b((c,a),Pos b)]",
          "package": "boomerang",
          "partial": "Parser",
          "signature": "tok-\u003ePos e-\u003e[Either e((a,tok),Pos e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Prim",
          "name": "ser",
          "package": "boomerang",
          "signature": "b -\u003e [(tok -\u003e tok, a)]",
          "source": "src/Text-Boomerang-Prim.html#Boomerang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "ser",
          "normalized": "a-\u003e[(b-\u003eb,c)]",
          "package": "boomerang",
          "signature": "b-\u003e[(tok-\u003etok,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:ser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive all possible serializations.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "unparse",
          "package": "boomerang",
          "signature": "tok -\u003e Boomerang e tok () url -\u003e url -\u003e [tok]",
          "source": "src/Text-Boomerang-Prim.html#unparse",
          "type": "function"
        },
        "index": {
          "description": "Give all possible serializations",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "unparse",
          "normalized": "a-\u003eBoomerang b a()c-\u003ec-\u003e[a]",
          "package": "boomerang",
          "signature": "tok-\u003eBoomerang e tok()url-\u003eurl-\u003e[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the first serialization, for Boomerangs with a serializer that needs just one value.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "unparse1",
          "package": "boomerang",
          "signature": "tok -\u003e Boomerang e tok () (a :- ()) -\u003e a -\u003e Maybe tok",
          "source": "src/Text-Boomerang-Prim.html#unparse1",
          "type": "function"
        },
        "index": {
          "description": "Give the first serialization for Boomerangs with serializer that needs just one value",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "unparse1",
          "normalized": "a-\u003eBoomerang b a()(c())-\u003ec-\u003eMaybe a",
          "package": "boomerang",
          "signature": "tok-\u003eBoomerang e tok()(a())-\u003ea-\u003eMaybe tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:unparse1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and a printer into a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "val",
          "package": "boomerang",
          "signature": "forall e tok a r.  Parser e tok a -\u003e (a -\u003e [tok -\u003e tok]) -\u003e Boomerang e tok r (a :- r)",
          "source": "src/Text-Boomerang-Prim.html#val",
          "type": "function"
        },
        "index": {
          "description": "lift Parser and printer into Boomerang",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "val",
          "normalized": "a b c d e Parser b c d-\u003e(d-\u003e[c-\u003ec])-\u003eBoomerang b c f(d f)",
          "package": "boomerang",
          "signature": "forall e tok a r. Parser e tok a-\u003e(a-\u003e[tok-\u003etok])-\u003eBoomerang e tok r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over routers.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "xmap",
          "package": "boomerang",
          "signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok r a -\u003e Boomerang e tok r b",
          "source": "src/Text-Boomerang-Prim.html#xmap",
          "type": "function"
        },
        "index": {
          "description": "Map over routers",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "xmap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d e a-\u003eBoomerang c d e b",
          "package": "boomerang",
          "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok r a-\u003eBoomerang e tok r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ca\u003exmap\u003c/a\u003e, but only maps over the top of the stack.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "xmaph",
          "package": "boomerang",
          "signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok i (a :- o) -\u003e Boomerang e tok i (b :- o)",
          "source": "src/Text-Boomerang-Prim.html#xmaph",
          "type": "function"
        },
        "index": {
          "description": "Like xmap but only maps over the top of the stack",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "xmaph",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d e(a f)-\u003eBoomerang c d e(b f)",
          "package": "boomerang",
          "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok i(a o)-\u003eBoomerang e tok i(b o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xmaph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a constructor-destructor pair to a pure router.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Prim",
          "name": "xpure",
          "package": "boomerang",
          "signature": "(a -\u003e b) -\u003e (b -\u003e Maybe a) -\u003e Boomerang e tok a b",
          "source": "src/Text-Boomerang-Prim.html#xpure",
          "type": "function"
        },
        "index": {
          "description": "Lift constructor-destructor pair to pure router",
          "hierarchy": "Text Boomerang Prim",
          "module": "Text.Boomerang.Prim",
          "name": "xpure",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang c d a b",
          "package": "boomerang",
          "signature": "(a-\u003eb)-\u003e(b-\u003eMaybe a)-\u003eBoomerang e tok a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Prim.html#v:xpure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.String",
          "name": "String",
          "package": "boomerang",
          "source": "src/Text-Boomerang-String.html",
          "type": "module"
        },
        "index": {
          "description": "Boomerang library for working with String",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "String",
          "package": "boomerang",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.String",
          "name": "StringBoomerang",
          "package": "boomerang",
          "source": "src/Text-Boomerang-String.html#StringBoomerang",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "StringBoomerang",
          "package": "boomerang",
          "partial": "String Boomerang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringBoomerang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.String",
          "name": "StringError",
          "package": "boomerang",
          "source": "src/Text-Boomerang-String.html#StringError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "StringError",
          "package": "boomerang",
          "partial": "String Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use StringBoomerang instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.String",
          "name": "StringPrinterParser",
          "package": "boomerang",
          "source": "src/Text-Boomerang-String.html#StringPrinterParser",
          "type": "type"
        },
        "index": {
          "description": "Deprecated Use StringBoomerang instead",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "StringPrinterParser",
          "package": "boomerang",
          "partial": "String Printer Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#t:StringPrinterParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "alpha",
          "package": "boomerang",
          "signature": "StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "alpha",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany character\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "anyChar",
          "package": "boomerang",
          "signature": "StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "any character",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "anyChar",
          "package": "boomerang",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "char",
          "package": "boomerang",
          "signature": "Char -\u003e StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#char",
          "type": "function"
        },
        "index": {
          "description": "matches the specified character",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "char",
          "normalized": "Char-\u003eStringBoomerang a(Char a)",
          "package": "boomerang",
          "signature": "Char-\u003eStringBoomerang r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "digit",
          "package": "boomerang",
          "signature": "StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#digit",
          "type": "function"
        },
        "index": {
          "description": "ascii digits",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "digit",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "int",
          "package": "boomerang",
          "signature": "StringBoomerang r (Int :- r)",
          "source": "src/Text-Boomerang-String.html#int",
          "type": "function"
        },
        "index": {
          "description": "matches an Int",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "int",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "integer",
          "package": "boomerang",
          "signature": "StringBoomerang r (Integer :- r)",
          "source": "src/Text-Boomerang-String.html#integer",
          "type": "function"
        },
        "index": {
          "description": "matches an Integer",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "integer",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to test if we have parsed all the strings.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003eparseStrings\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "isComplete",
          "package": "boomerang",
          "signature": "String -\u003e Bool",
          "source": "src/Text-Boomerang-String.html#isComplete",
          "type": "function"
        },
        "index": {
          "description": "Predicate to test if we have parsed all the strings Typically used as argument to parse1 see also parseStrings",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "isComplete",
          "normalized": "String-\u003eBool",
          "package": "boomerang",
          "partial": "Complete",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:isComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant string\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "lit",
          "package": "boomerang",
          "signature": "String -\u003e StringBoomerang r r",
          "source": "src/Text-Boomerang-String.html#lit",
          "type": "function"
        },
        "index": {
          "description": "constant string",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "lit",
          "normalized": "String-\u003eStringBoomerang a a",
          "package": "boomerang",
          "signature": "String-\u003eStringBoomerang r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseString (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
          "module": "Text.Boomerang.String",
          "name": "parseString",
          "package": "boomerang",
          "signature": "StringBoomerang () (r :- ()) -\u003e String -\u003e Either StringError r",
          "source": "src/Text-Boomerang-String.html#parseString",
          "type": "function"
        },
        "index": {
          "description": "run the parser Returns the first complete parse or parse error parseString rUnit lit foo foo",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "parseString",
          "normalized": "StringBoomerang()(a())-\u003eString-\u003eEither StringError a",
          "package": "boomerang",
          "partial": "String",
          "signature": "StringBoomerang()(r())-\u003eString-\u003eEither StringError r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "satisfy",
          "package": "boomerang",
          "signature": "(Char -\u003e Bool) -\u003e StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "statisfy Char predicate",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eStringBoomerang a(Char a)",
          "package": "boomerang",
          "signature": "(Char-\u003eBool)-\u003eStringBoomerang r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.String",
          "name": "space",
          "package": "boomerang",
          "signature": "StringBoomerang r (Char :- r)",
          "source": "src/Text-Boomerang-String.html#space",
          "type": "function"
        },
        "index": {
          "description": "matches white-space characters in the Latin-1 range Uses isSpace",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "space",
          "package": "boomerang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseString (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
          "module": "Text.Boomerang.String",
          "name": "unparseString",
          "package": "boomerang",
          "signature": "StringBoomerang () (r :- ()) -\u003e r -\u003e Maybe String",
          "source": "src/Text-Boomerang-String.html#unparseString",
          "type": "function"
        },
        "index": {
          "description": "run the printer unparseString rUnit lit foo",
          "hierarchy": "Text Boomerang String",
          "module": "Text.Boomerang.String",
          "name": "unparseString",
          "normalized": "StringBoomerang()(a())-\u003ea-\u003eMaybe String",
          "package": "boomerang",
          "partial": "String",
          "signature": "StringBoomerang()(r())-\u003er-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-String.html#v:unparseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with '[String]'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "Strings",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Strings.html",
          "type": "module"
        },
        "index": {
          "description": "Boomerang library for working with String",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "Strings",
          "package": "boomerang",
          "partial": "Strings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Strings",
          "name": "StringsError",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Strings.html#StringsError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "StringsError",
          "package": "boomerang",
          "partial": "Strings Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#t:StringsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003ef . eos . g\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "(\u003c/\u003e)",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] b c -\u003e Boomerang StringsError [String] a b -\u003e Boomerang StringsError [String] a c",
          "source": "src/Text-Boomerang-Strings.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "equivalent to eos",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Boomerang StringsError[String]a b-\u003eBoomerang StringsError[String]c a-\u003eBoomerang StringsError[String]c b",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]b c-\u003eBoomerang StringsError[String]a b-\u003eBoomerang StringsError[String]a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "alpha",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "alpha",
          "normalized": "Boomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany character\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "anyChar",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "any character",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "anyChar",
          "normalized": "Boomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "partial": "Char",
          "signature": "Boomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Strings",
          "name": "anyString",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (String :- r)",
          "source": "src/Text-Boomerang-Strings.html#anyString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "anyString",
          "normalized": "Boomerang StringsError[String]a(String a)",
          "package": "boomerang",
          "partial": "String",
          "signature": "Boomerang StringsError[String]r(String r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:anyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "char",
          "package": "boomerang",
          "signature": "Char -\u003e Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#char",
          "type": "function"
        },
        "index": {
          "description": "matches the specified character",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "char",
          "normalized": "Char-\u003eBoomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "signature": "Char-\u003eBoomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "digit",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#digit",
          "type": "function"
        },
        "index": {
          "description": "ascii digits",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "digit",
          "normalized": "Boomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend of string\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "eos",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r r",
          "source": "src/Text-Boomerang-Strings.html#eos",
          "type": "function"
        },
        "index": {
          "description": "end of string",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "eos",
          "normalized": "Boomerang StringsError[String]a a",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:eos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . int . int)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "int",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Int :- r)",
          "source": "src/Text-Boomerang-Strings.html#int",
          "type": "function"
        },
        "index": {
          "description": "matches an Int Note that the combinator rPair int int is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "int",
          "normalized": "Boomerang StringsError[String]a(Int a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(Int r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integer . integer)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "integer",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Integer :- r)",
          "source": "src/Text-Boomerang-Strings.html#integer",
          "type": "function"
        },
        "index": {
          "description": "matches an Integer Note that the combinator rPair integer integer is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "integer",
          "normalized": "Boomerang StringsError[String]a(Integer a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(Integer r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to test if we have parsed all the strings.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eparseStrings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "isComplete",
          "package": "boomerang",
          "signature": "[String] -\u003e Bool",
          "source": "src/Text-Boomerang-Strings.html#isComplete",
          "type": "function"
        },
        "index": {
          "description": "Predicate to test if we have parsed all the strings Typically used as argument to parse1 see also parseStrings",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "isComplete",
          "normalized": "[String]-\u003eBool",
          "package": "boomerang",
          "partial": "Complete",
          "signature": "[String]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:isComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant string\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "lit",
          "package": "boomerang",
          "signature": "String -\u003e Boomerang StringsError [String] r r",
          "source": "src/Text-Boomerang-Strings.html#lit",
          "type": "function"
        },
        "index": {
          "description": "constant string",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "lit",
          "normalized": "String-\u003eBoomerang StringsError[String]a a",
          "package": "boomerang",
          "signature": "String-\u003eBoomerang StringsError[String]r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseStrings (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "parseStrings",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] () (r :- ()) -\u003e [String] -\u003e Either StringsError r",
          "source": "src/Text-Boomerang-Strings.html#parseStrings",
          "type": "function"
        },
        "index": {
          "description": "run the parser Returns the first complete parse or parse error parseStrings rUnit lit foo foo",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "parseStrings",
          "normalized": "Boomerang StringsError[String]()(a())-\u003e[String]-\u003eEither StringsError a",
          "package": "boomerang",
          "partial": "Strings",
          "signature": "Boomerang StringsError[String]()(r())-\u003e[String]-\u003eEither StringsError r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:parseStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift 'Read'/'Show' to a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThere are a few restrictions here:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Error messages are a bit fuzzy. \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e does not tell us where\n  or why a parse failed. So all we can do it use the the position\n  that we were at when we called read and say that it failed.\n\u003c/li\u003e\u003cli\u003e it is (currently) not safe to use \u003ccode\u003e\u003ca\u003ereadshow\u003c/a\u003e\u003c/code\u003e on integral values\n  because the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, etc,\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "readshow",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (a :- r)",
          "source": "src/Text-Boomerang-Strings.html#readshow",
          "type": "function"
        },
        "index": {
          "description": "lift Read Show to Boomerang There are few restrictions here Error messages are bit fuzzy Read does not tell us where or why parse failed So all we can do it use the the position that we were at when we called read and say that it failed it is currently not safe to use readshow on integral values because the Read instance for Int Integer etc",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "readshow",
          "normalized": "Boomerang StringsError[String]a(b a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:readshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "satisfy",
          "package": "boomerang",
          "signature": "(Char -\u003e Bool) -\u003e Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "statisfy Char predicate",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eBoomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "signature": "(Char-\u003eBool)-\u003eBoomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esatisfy a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e\u003cp\u003eNote: must match the entire remainder of the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in this segment\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "satisfyStr",
          "package": "boomerang",
          "signature": "(String -\u003e Bool) -\u003e Boomerang StringsError [String] r (String :- r)",
          "source": "src/Text-Boomerang-Strings.html#satisfyStr",
          "type": "function"
        },
        "index": {
          "description": "satisfy String predicate Note must match the entire remainder of the String in this segment",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "satisfyStr",
          "normalized": "(String-\u003eBool)-\u003eBoomerang StringsError[String]a(String a)",
          "package": "boomerang",
          "partial": "Str",
          "signature": "(String-\u003eBool)-\u003eBoomerang StringsError[String]r(String r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:satisfyStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "space",
          "package": "boomerang",
          "signature": "Boomerang StringsError [String] r (Char :- r)",
          "source": "src/Text-Boomerang-Strings.html#space",
          "type": "function"
        },
        "index": {
          "description": "matches white-space characters in the Latin-1 range Uses isSpace",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "space",
          "normalized": "Boomerang StringsError[String]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang StringsError[String]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseStrings (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Strings",
          "name": "unparseStrings",
          "package": "boomerang",
          "signature": "Boomerang e [String] () (r :- ()) -\u003e r -\u003e Maybe [String]",
          "source": "src/Text-Boomerang-Strings.html#unparseStrings",
          "type": "function"
        },
        "index": {
          "description": "run the printer unparseStrings rUnit lit foo",
          "hierarchy": "Text Boomerang Strings",
          "module": "Text.Boomerang.Strings",
          "name": "unparseStrings",
          "normalized": "Boomerang a[String]()(b())-\u003eb-\u003eMaybe[String]",
          "package": "boomerang",
          "partial": "Strings",
          "signature": "Boomerang e[String]()(r())-\u003er-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Strings.html#v:unparseStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.TH",
          "name": "TH",
          "package": "boomerang",
          "source": "src/Text-Boomerang-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Boomerang TH",
          "module": "Text.Boomerang.TH",
          "name": "TH",
          "package": "boomerang",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use makeBoomerangs instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eOld name for \u003ccode\u003e\u003ca\u003emakeBoomerangs\u003c/a\u003e\u003c/code\u003e, since renamed to reflect the fact\n that it's not actually deriving instances for any type class, but rather\n generates top-level definitions for routers of type \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Boomerang.TH",
          "name": "derivePrinterParsers",
          "package": "boomerang",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Text-Boomerang-TH.html#derivePrinterParsers",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use makeBoomerangs instead Old name for makeBoomerangs since renamed to reflect the fact that it not actually deriving instances for any type class but rather generates top-level definitions for routers of type Boomerang",
          "hierarchy": "Text Boomerang TH",
          "module": "Text.Boomerang.TH",
          "name": "derivePrinterParsers",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "boomerang",
          "partial": "Printer Parsers",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#v:derivePrinterParsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e router for each constructor in a datatype. For\n example:\n\u003c/p\u003e\u003cpre\u003e$(makeBoomerangs ''Sitemap)\u003c/pre\u003e",
          "module": "Text.Boomerang.TH",
          "name": "makeBoomerangs",
          "package": "boomerang",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Text-Boomerang-TH.html#makeBoomerangs",
          "type": "function"
        },
        "index": {
          "description": "Make Boomerang router for each constructor in datatype For example makeBoomerangs Sitemap",
          "hierarchy": "Text Boomerang TH",
          "module": "Text.Boomerang.TH",
          "name": "makeBoomerangs",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "boomerang",
          "partial": "Boomerangs",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-TH.html#v:makeBoomerangs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ea \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e library for working with '[Text]'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "Texts",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Texts.html",
          "type": "module"
        },
        "index": {
          "description": "Boomerang library for working with Text",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "Texts",
          "package": "boomerang",
          "partial": "Texts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Texts",
          "name": "TextsError",
          "package": "boomerang",
          "source": "src/Text-Boomerang-Texts.html#TextsError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "TextsError",
          "package": "boomerang",
          "partial": "Texts Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#t:TextsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003ef . eos . g\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "(\u003c/\u003e)",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] b c -\u003e Boomerang TextsError [Text] a b -\u003e Boomerang TextsError [Text] a c",
          "source": "src/Text-Boomerang-Texts.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "equivalent to eos",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Boomerang TextsError[Text]a b-\u003eBoomerang TextsError[Text]c a-\u003eBoomerang TextsError[Text]c b",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]b c-\u003eBoomerang TextsError[Text]a b-\u003eBoomerang TextsError[Text]a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches alphabetic Unicode characters (lower-case, upper-case and title-case letters,\n plus letters of caseless scripts and modifiers letters).  (Uses \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "alpha",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "matches alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters Uses isAlpha",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "alpha",
          "normalized": "Boomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany character\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "anyChar",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "any character",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "anyChar",
          "normalized": "Boomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "partial": "Char",
          "signature": "Boomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Boomerang.Texts",
          "name": "anyText",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#anyText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "anyText",
          "normalized": "Boomerang TextsError[Text]a(Text a)",
          "package": "boomerang",
          "partial": "Text",
          "signature": "Boomerang TextsError[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:anyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches the specified character\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "char",
          "package": "boomerang",
          "signature": "Char -\u003e Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#char",
          "type": "function"
        },
        "index": {
          "description": "matches the specified character",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "char",
          "normalized": "Char-\u003eBoomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "signature": "Char-\u003eBoomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eascii digits \u003ccode\u003e'0'..'9'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "digit",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#digit",
          "type": "function"
        },
        "index": {
          "description": "ascii digits",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "digit",
          "normalized": "Boomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea sequence of one or more digits\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "digits",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#digits",
          "type": "function"
        },
        "index": {
          "description": "sequence of one or more digits",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "digits",
          "normalized": "Boomerang TextsError[Text]a(Text a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:digits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend of string\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "eos",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r r",
          "source": "src/Text-Boomerang-Texts.html#eos",
          "type": "function"
        },
        "index": {
          "description": "end of string",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "eos",
          "normalized": "Boomerang TextsError[Text]a a",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:eos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n Note that the combinator \u003ccode\u003e(rPair . int . int)\u003c/code\u003e is ill-defined because the parse canwell. not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "int",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Int :- r)",
          "source": "src/Text-Boomerang-Texts.html#int",
          "type": "function"
        },
        "index": {
          "description": "matches an Int Note that the combinator rPair int int is ill-defined because the parse canwell not tell where it is supposed to split the sequence of digits to produced two ints",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "int",
          "normalized": "Boomerang TextsError[Text]a(Int a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Int r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integer . integer)\u003c/code\u003e is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "integer",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Integer :- r)",
          "source": "src/Text-Boomerang-Texts.html#integer",
          "type": "function"
        },
        "index": {
          "description": "matches an Integer Note that the combinator rPair integer integer is ill-defined because the parse can not tell where it is supposed to split the sequence of digits to produced two ints",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "integer",
          "normalized": "Boomerang TextsError[Text]a(Integer a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Integer r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value\n\u003c/p\u003e\u003cp\u003eNote that the combinator \u003ccode\u003e(rPair . integral . integral)\u003c/code\u003e is ill-defined because the parse canwell. not tell where it is supposed to split the sequence of digits to produced two ints.\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "integral",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (a :- r)",
          "source": "src/Text-Boomerang-Texts.html#integral",
          "type": "function"
        },
        "index": {
          "description": "matches an Integral value Note that the combinator rPair integral integral is ill-defined because the parse canwell not tell where it is supposed to split the sequence of digits to produced two ints",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "integral",
          "normalized": "Boomerang TextsError[Text]a(b a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to test if we have parsed all the Texts.\n Typically used as argument to \u003ccode\u003e\u003ca\u003eparse1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eparseTexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "isComplete",
          "package": "boomerang",
          "signature": "[Text] -\u003e Bool",
          "source": "src/Text-Boomerang-Texts.html#isComplete",
          "type": "function"
        },
        "index": {
          "description": "Predicate to test if we have parsed all the Texts Typically used as argument to parse1 see also parseTexts",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "isComplete",
          "normalized": "[Text]-\u003eBool",
          "package": "boomerang",
          "partial": "Complete",
          "signature": "[Text]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:isComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant string\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "lit",
          "package": "boomerang",
          "signature": "Text -\u003e Boomerang TextsError [Text] r r",
          "source": "src/Text-Boomerang-Texts.html#lit",
          "type": "function"
        },
        "index": {
          "description": "constant string",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "lit",
          "normalized": "Text-\u003eBoomerang TextsError[Text]a a",
          "package": "boomerang",
          "signature": "Text-\u003eBoomerang TextsError[Text]r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parser\n\u003c/p\u003e\u003cp\u003eReturns the first complete parse or a parse error.\n\u003c/p\u003e\u003cpre\u003e parseTexts (rUnit . lit \"foo\") [\"foo\"]\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "parseTexts",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] () (r :- ()) -\u003e [Text] -\u003e Either TextsError r",
          "source": "src/Text-Boomerang-Texts.html#parseTexts",
          "type": "function"
        },
        "index": {
          "description": "run the parser Returns the first complete parse or parse error parseTexts rUnit lit foo foo",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "parseTexts",
          "normalized": "Boomerang TextsError[Text]()(a())-\u003e[Text]-\u003eEither TextsError a",
          "package": "boomerang",
          "partial": "Texts",
          "signature": "Boomerang TextsError[Text]()(r())-\u003e[Text]-\u003eEither TextsError r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:parseTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe empty string\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "rEmpty",
          "package": "boomerang",
          "signature": "Boomerang e [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#rEmpty",
          "type": "function"
        },
        "index": {
          "description": "the empty string",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "rEmpty",
          "normalized": "Boomerang a[Text]b(Text b)",
          "package": "boomerang",
          "partial": "Empty",
          "signature": "Boomerang e[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct/parse some \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by repeatedly apply a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e 0 or more times parser\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "rText",
          "package": "boomerang",
          "signature": "Boomerang e [Text] r (Char :- r) -\u003e Boomerang e [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#rText",
          "type": "function"
        },
        "index": {
          "description": "construct parse some Text by repeatedly apply Char or more times parser",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "rText",
          "normalized": "Boomerang a[Text]b(Char b)-\u003eBoomerang a[Text]b(Text b)",
          "package": "boomerang",
          "partial": "Text",
          "signature": "Boomerang e[Text]r(Char r)-\u003eBoomerang e[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct/parse some \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by repeatedly apply a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e 1 or more times parser\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "rText1",
          "package": "boomerang",
          "signature": "Boomerang e [Text] r (Char :- r) -\u003e Boomerang e [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#rText1",
          "type": "function"
        },
        "index": {
          "description": "construct parse some Text by repeatedly apply Char or more times parser",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "rText1",
          "normalized": "Boomerang a[Text]b(Char b)-\u003eBoomerang a[Text]b(Text b)",
          "package": "boomerang",
          "partial": "Text",
          "signature": "Boomerang e[Text]r(Char r)-\u003eBoomerang e[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rText1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe first character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "rTextCons",
          "package": "boomerang",
          "signature": "Boomerang e tok (Char :- (Text :- r)) (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#rTextCons",
          "type": "function"
        },
        "index": {
          "description": "the first character of Text",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "rTextCons",
          "package": "boomerang",
          "partial": "Text Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:rTextCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift 'Read'/'Show' to a \u003ccode\u003e\u003ca\u003eBoomerang\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThere are a few restrictions here:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Error messages are a bit fuzzy. \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e does not tell us where\n  or why a parse failed. So all we can do it use the the position\n  that we were at when we called read and say that it failed.\n\u003c/li\u003e\u003cli\u003e it is (currently) not safe to use \u003ccode\u003e\u003ca\u003ereadshow\u003c/a\u003e\u003c/code\u003e on integral values\n  because the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, etc,\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "readshow",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (a :- r)",
          "source": "src/Text-Boomerang-Texts.html#readshow",
          "type": "function"
        },
        "index": {
          "description": "lift Read Show to Boomerang There are few restrictions here Error messages are bit fuzzy Read does not tell us where or why parse failed So all we can do it use the the position that we were at when we called read and say that it failed it is currently not safe to use readshow on integral values because the Read instance for Int Integer etc",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "readshow",
          "normalized": "Boomerang TextsError[Text]a(b a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:readshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatisfy a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e predicate\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "satisfy",
          "package": "boomerang",
          "signature": "(Char -\u003e Bool) -\u003e Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "statisfy Char predicate",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eBoomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "signature": "(Char-\u003eBool)-\u003eBoomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esatisfy a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e\u003cp\u003eNote: must match the entire remainder of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in this segment\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "satisfyStr",
          "package": "boomerang",
          "signature": "(Text -\u003e Bool) -\u003e Boomerang TextsError [Text] r (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#satisfyStr",
          "type": "function"
        },
        "index": {
          "description": "satisfy Text predicate Note must match the entire remainder of the Text in this segment",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "satisfyStr",
          "normalized": "(Text-\u003eBool)-\u003eBoomerang TextsError[Text]a(Text a)",
          "package": "boomerang",
          "partial": "Str",
          "signature": "(Text-\u003eBool)-\u003eBoomerang TextsError[Text]r(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:satisfyStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean optional - character\n\u003c/p\u003e\u003cp\u003eTypically used with \u003ccode\u003e\u003ca\u003edigits\u003c/a\u003e\u003c/code\u003e to support signed numbers\n\u003c/p\u003e\u003cpre\u003e signed digits\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "signed",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] a (Text :- r) -\u003e Boomerang TextsError [Text] a (Text :- r)",
          "source": "src/Text-Boomerang-Texts.html#signed",
          "type": "function"
        },
        "index": {
          "description": "an optional character Typically used with digits to support signed numbers signed digits",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "signed",
          "normalized": "Boomerang TextsError[Text]a(Text b)-\u003eBoomerang TextsError[Text]a(Text b)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]a(Text r)-\u003eBoomerang TextsError[Text]a(Text r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematches white-space characters in the Latin-1 range. (Uses \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "space",
          "package": "boomerang",
          "signature": "Boomerang TextsError [Text] r (Char :- r)",
          "source": "src/Text-Boomerang-Texts.html#space",
          "type": "function"
        },
        "index": {
          "description": "matches white-space characters in the Latin-1 range Uses isSpace",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "space",
          "normalized": "Boomerang TextsError[Text]a(Char a)",
          "package": "boomerang",
          "signature": "Boomerang TextsError[Text]r(Char r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the printer\n\u003c/p\u003e\u003cpre\u003e unparseTexts (rUnit . lit \"foo\") ()\n\u003c/pre\u003e",
          "module": "Text.Boomerang.Texts",
          "name": "unparseTexts",
          "package": "boomerang",
          "signature": "Boomerang e [Text] () (r :- ()) -\u003e r -\u003e Maybe [Text]",
          "source": "src/Text-Boomerang-Texts.html#unparseTexts",
          "type": "function"
        },
        "index": {
          "description": "run the printer unparseTexts rUnit lit foo",
          "hierarchy": "Text Boomerang Texts",
          "module": "Text.Boomerang.Texts",
          "name": "unparseTexts",
          "normalized": "Boomerang a[Text]()(b())-\u003eb-\u003eMaybe[Text]",
          "package": "boomerang",
          "partial": "Texts",
          "signature": "Boomerang e[Text]()(r())-\u003er-\u003eMaybe[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang-Texts.html#v:unparseTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoomerang is a DSL for creating parsers and pretty-printers using a\nsingle specification. Instead of writing a parser, and then writing a\nseparate pretty-printer, both are created at once. This saves time,\nand ensures that the parser and pretty-printer are inverses and stay\nin-sync with each other.\n\u003c/p\u003e\u003cp\u003eBoomerang is a generalized derivative of the Zwaluw library created by\nSjoerd Visscher and Martijn van Steenbergen:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/Zwaluw\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBoomerang is similar in purpose, but different in implementation to:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/invertible-syntax\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHere is a simple example. First we enable three language extensions:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, TypeOperators, OverloadedStrings #-}\u003c/pre\u003e\u003cp\u003eIn the imports, note that we hide \u003ccode\u003e((.), id)\u003c/code\u003e from \u003ccode\u003ePrelude\u003c/code\u003e and use\n\u003ccode\u003e((.), id)\u003c/code\u003e from \u003ca\u003eControl.Category\u003c/a\u003e instead.\n\u003c/p\u003e\u003cpre\u003e \n module Main where\n\n import Prelude hiding ((.), id)\n import Control.Category ((.), id)\n import Control.Monad (forever)\n import Text.Boomerang\n import Text.Boomerang.String\n import Text.Boomerang.TH\n import System.IO (hFlush, stdout)\n\u003c/pre\u003e\u003cp\u003eNext we define a type that we want to be able to pretty-print and define parsers for:\n\u003c/p\u003e\u003cpre\u003e data Foo\n     = Bar\n     | Baz Int Char\n       deriving (Eq, Show)\n\u003c/pre\u003e\u003cp\u003eThen we generate some combinators for the type:\n\u003c/p\u003e\u003cpre\u003e $(makeBoomerangs ''Foo)\n\u003c/pre\u003e\u003cp\u003eThe combinators will be named after the constructors, but with an r prefixed to them. In this case, \u003ccode\u003erBar\u003c/code\u003e and \u003ccode\u003erBaz\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNow we can define a grammar:\n\u003c/p\u003e\u003cpre\u003e foo :: StringBoomerang () (Foo :- ())\n foo =\n     (  rBar\n     \u003c\u003e rBaz . \"baz-\" . int . \"-\" . alpha\n     )\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e.\u003c/code\u003e is used to compose parsers together. \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is used for choice.\n\u003c/p\u003e\u003cp\u003eNow we can use \u003ccode\u003efoo\u003c/code\u003e as a printer or a parser.\n\u003c/p\u003e\u003cp\u003eHere is an example of a successful parse:\n\u003c/p\u003e\u003cpre\u003e test1 = parseString foo \"baz-2-c\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test1\nRight (Baz 2 \u003ccode\u003ec\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eAnd another example:\n\u003c/p\u003e\u003cpre\u003e test2 = parseString foo \"\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test2\nRight Bar\n\u003c/pre\u003e\u003cp\u003eHere is an example of a parse error:\n\u003c/p\u003e\u003cpre\u003e test3 = parseString foo \"baz-2-3\"\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test3\nLeft parse error at (0, 6): unexpected '3'; expecting an alphabetic Unicode character\n\u003c/pre\u003e\u003cp\u003ewe can also use \u003ccode\u003efoo\u003c/code\u003e to pretty-print a value:\n\u003c/p\u003e\u003cpre\u003e test4 = unparseString foo (Baz 1 'z')\n\u003c/pre\u003e\u003cpre\u003e\n*Main\u003e test4\nJust \u003ca\u003ebaz-1-z\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eHere is a little app that allows you to interactively test \u003ccode\u003efoo\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e testInvert :: String -\u003e IO ()\n testInvert str =\n     case parseString foo str of\n       (Left e) -\u003e print e\n       (Right f') -\u003e\n           do putStrLn $ \"Parsed: \" ++ show f'\n              case unparseString foo f' of\n                Nothing  -\u003e putStrLn \"unparseString failed to produce a value.\"\n                (Just s) -\u003e putStrLn $ \"Pretty: \" ++ s\n\u003c/pre\u003e\u003cpre\u003e main = forever $\n     do putStr \"Enter a string to parse: \"\n        hFlush stdout\n        l \u003c- getLine\n        testInvert l\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Boomerang",
          "name": "Boomerang",
          "package": "boomerang",
          "source": "src/Text-Boomerang.html",
          "type": "module"
        },
        "index": {
          "description": "Boomerang is DSL for creating parsers and pretty-printers using single specification Instead of writing parser and then writing separate pretty-printer both are created at once This saves time and ensures that the parser and pretty-printer are inverses and stay in-sync with each other Boomerang is generalized derivative of the Zwaluw library created by Sjoerd Visscher and Martijn van Steenbergen http hackage.haskell.org package Zwaluw Boomerang is similar in purpose but different in implementation to http hackage.haskell.org package invertible-syntax Here is simple example First we enable three language extensions LANGUAGE TemplateHaskell TypeOperators OverloadedStrings In the imports note that we hide id from Prelude and use id from Control.Category instead module Main where import Prelude hiding id import Control.Category id import Control.Monad forever import Text.Boomerang import Text.Boomerang.String import Text.Boomerang.TH import System.IO hFlush stdout Next we define type that we want to be able to pretty-print and define parsers for data Foo Bar Baz Int Char deriving Eq Show Then we generate some combinators for the type makeBoomerangs Foo The combinators will be named after the constructors but with an prefixed to them In this case rBar and rBaz Now we can define grammar foo StringBoomerang Foo foo rBar rBaz baz int alpha is used to compose parsers together is used for choice Now we can use foo as printer or parser Here is an example of successful parse test1 parseString foo baz-2-c Main test1 Right Baz And another example test2 parseString foo Main test2 Right Bar Here is an example of parse error test3 parseString foo baz-2-3 Main test3 Left parse error at unexpected expecting an alphabetic Unicode character we can also use foo to pretty-print value test4 unparseString foo Baz Main test4 Just baz-1-z Here is little app that allows you to interactively test foo testInvert String IO testInvert str case parseString foo str of Left print Right do putStrLn Parsed show case unparseString foo of Nothing putStrLn unparseString failed to produce value Just putStrLn Pretty main forever do putStr Enter string to parse hFlush stdout getLine testInvert",
          "hierarchy": "Text Boomerang",
          "module": "Text.Boomerang",
          "name": "Boomerang",
          "package": "boomerang",
          "partial": "Boomerang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boomerang/docs/Text-Boomerang.html#"
      }
    }
  ]
]