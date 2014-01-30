[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA data type for non-exclusive disjunction. This is helpful for\n things like a generic merge function on sets/maps which could\n be union, mutual difference, etc. based on which \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e value a\n function argument returns. Also useful for non-truncating zips\n (cf. \u003ccode\u003e\u003ca\u003ezipOr\u003c/a\u003e\u003c/code\u003e) and other cases where you sometimes want an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n and sometimes want a pair.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "module",
        "fct-source": "src/Data-Or.html",
        "fct-type": "module",
        "title": "Or"
      },
      "index": {
        "description": "data type for non-exclusive disjunction This is helpful for things like generic merge function on sets maps which could be union mutual difference etc based on which Or value function argument returns Also useful for non-truncating zips cf zipOr and other cases where you sometimes want an Either and sometimes want pair",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "Or",
        "normalized": "",
        "package": "data-or",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#t:Or",
      "description": {
        "fct-descr": "\u003cp\u003eA data type for non-exclusive disjunction.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "data",
        "fct-source": "src/Data-Or.html#Or",
        "fct-type": "data",
        "title": "Or"
      },
      "index": {
        "description": "data type for non-exclusive disjunction",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "Or",
        "normalized": "",
        "package": "data-or",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:Both",
      "description": {
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "Both a b",
        "fct-source": "src/Data-Or.html#Or",
        "fct-type": "function",
        "title": "Both"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "Both",
        "normalized": "",
        "package": "data-or",
        "partial": "Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:Fst",
      "description": {
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "Fst a",
        "fct-source": "src/Data-Or.html#Or",
        "fct-type": "function",
        "title": "Fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "Fst",
        "normalized": "",
        "package": "data-or",
        "partial": "Fst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:Snd",
      "description": {
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "Snd b",
        "fct-source": "src/Data-Or.html#Or",
        "fct-type": "function",
        "title": "Snd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "Snd",
        "normalized": "",
        "package": "data-or",
        "partial": "Snd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:eitherOr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "Either a b -\u003e Or a b",
        "fct-source": "src/Data-Or.html#eitherOr",
        "fct-type": "function",
        "title": "eitherOr"
      },
      "index": {
        "description": "Convert an Either into an Or",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "eitherOr",
        "normalized": "Either a b-\u003eOr a b",
        "package": "data-or",
        "partial": "Or",
        "signature": "Either a b-\u003eOr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:elimOr",
      "description": {
        "fct-descr": "\u003cp\u003eFunctional eliminator for \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "(a -\u003e c) -\u003e (a -\u003e b -\u003e c) -\u003e (b -\u003e c) -\u003e Or a b -\u003e c",
        "fct-source": "src/Data-Or.html#elimOr",
        "fct-type": "function",
        "title": "elimOr"
      },
      "index": {
        "description": "Functional eliminator for Or",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "elimOr",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003e(c-\u003eb)-\u003eOr a c-\u003eb",
        "package": "data-or",
        "partial": "Or",
        "signature": "(a-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003e(b-\u003ec)-\u003eOr a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:zipOr",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e which exhausts both lists, annotating which\n list the elements came from. It will return zero or more \u003ccode\u003eBoth\u003c/code\u003e,\n followed by either zero or more \u003ccode\u003eFst\u003c/code\u003e or else zero or more \u003ccode\u003eSnd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn GHC this is a \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "[a] -\u003e [b] -\u003e [Or a b]",
        "fct-source": "src/Data-Or.html#zipOr",
        "fct-type": "function",
        "title": "zipOr"
      },
      "index": {
        "description": "variant of zip which exhausts both lists annotating which list the elements came from It will return zero or more Both followed by either zero or more Fst or else zero or more Snd On GHC this is good producer for list fusion",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "zipOr",
        "normalized": "[a]-\u003e[b]-\u003e[Or a b]",
        "package": "data-or",
        "partial": "Or",
        "signature": "[a]-\u003e[b]-\u003e[Or a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:zipOrBy",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ezipOr\u003c/a\u003e\u003c/code\u003e with a custom list-homomorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "(Or a b -\u003e c -\u003e c) -\u003e c -\u003e [a] -\u003e [b] -\u003e c",
        "fct-source": "src/Data-Or.html#zipOrBy",
        "fct-type": "function",
        "title": "zipOrBy"
      },
      "index": {
        "description": "variant of zipOr with custom list-homomorphism",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "zipOrBy",
        "normalized": "(Or a b-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003ec",
        "package": "data-or",
        "partial": "Or By",
        "signature": "(Or a b-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:zipOrWith",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ezipOr\u003c/a\u003e\u003c/code\u003e with a custom \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e-homomorphism.\n\u003c/p\u003e\u003cp\u003eOn GHC this is a \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "(Or a b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Data-Or.html#zipOrWith",
        "fct-type": "function",
        "title": "zipOrWith"
      },
      "index": {
        "description": "variant of zipOr with custom Or homomorphism On GHC this is good producer for list fusion",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "zipOrWith",
        "normalized": "(Or a b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "data-or",
        "partial": "Or With",
        "signature": "(Or a b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-or/docs/Data-Or.html#v:zipOrWithBy",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ezipOr\u003c/a\u003e\u003c/code\u003e with both a custom \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e-homomorphism and\n a custom list-homomorphism. This is no more powerful than\n \u003ccode\u003e\u003ca\u003ezipOrBy\u003c/a\u003e\u003c/code\u003e, but it may be more convenient to separate the handling\n of \u003ccode\u003e\u003ca\u003eOr\u003c/a\u003e\u003c/code\u003e from the handling of \u003ccode\u003e(:)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Or",
        "fct-package": "data-or",
        "fct-signature": "(Or a b -\u003e c)-\u003e (c -\u003e d -\u003e d)-\u003e d-\u003e [a]-\u003e [b]-\u003e d",
        "fct-type": "function",
        "title": "zipOrWithBy"
      },
      "index": {
        "description": "variant of zipOr with both custom Or homomorphism and custom list-homomorphism This is no more powerful than zipOrBy but it may be more convenient to separate the handling of Or from the handling of",
        "hierarchy": "Data Or",
        "module": "Data.Or",
        "name": "zipOrWithBy",
        "normalized": "(Or a b-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003ed",
        "package": "data-or",
        "partial": "Or With By",
        "signature": "(Or a b-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003ed"
      }
    }
  }
]