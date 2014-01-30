[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eIf the Haddock documentation is unreadable, look the source.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis module adds unicode notation for some definitions in Prelude.\n\u003c/p\u003e\u003cp\u003eThe following notations are built in GHC (enabled with the \u003ccode\u003eUnicodeSyntax\u003c/code\u003e language extension):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e '' ('\\x2192') is equivalent to '-\u003e'.\n\u003c/li\u003e\u003cli\u003e '' ('\\x2190') is equivalent to '\u003c-'.\n\u003c/li\u003e\u003cli\u003e '' ('\\x2237') is equivalent to '::'.\n\u003c/li\u003e\u003cli\u003e '' ('\\x21d2') is equivalent to '=\u003e'.\n\u003c/li\u003e\u003cli\u003e '' ('\\x2200') is equivalent to \u003ccode\u003eforall\u003c/code\u003e (use the \u003ccode\u003eRank2Types\u003c/code\u003e language extension).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe following notations are \u003cem\u003enot\u003c/em\u003e built in GHC\n (see also \u003ca\u003ehttp://hackage.haskell.org/trac/haskell-prime/wiki/UnicodeInHaskellSource\u003c/a\u003e):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e '' ('\\x2025') is equivalent to '..'.\n\u003c/li\u003e\u003cli\u003e '' ('\\x2203') is equivalent to \u003ccode\u003eexists\u003c/code\u003e (with \u003ccode\u003eExistentialQuantification\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUsage examples\n\u003c/p\u003e\u003cpre\u003e even  succ    Integral a  a  Bool \n\u003c/pre\u003e\u003cpre\u003e 25  [xx | x[1..10], x2]    Bool\n\u003c/pre\u003e\u003cpre\u003e foldl (flip (:)) ()    [a]  [a]\n\u003c/pre\u003e\u003cpre\u003e (\\a  a  a  a)    a  a : a : a\n\u003c/pre\u003e\u003cpre\u003e (\\a b  ()(a  b)  ()a  ()b)    Bool  Bool  Bool\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "module",
        "fct-source": "src/Prelude-Unicode.html",
        "fct-type": "module",
        "title": "Unicode"
      },
      "index": {
        "description": "If the Haddock documentation is unreadable look the source This module adds unicode notation for some definitions in Prelude The following notations are built in GHC enabled with the UnicodeSyntax language extension x2192 is equivalent to x2190 is equivalent to x2237 is equivalent to x21d2 is equivalent to x2200 is equivalent to forall use the Rank2Types language extension The following notations are not built in GHC see also http hackage.haskell.org trac haskell-prime wiki UnicodeInHaskellSource x2025 is equivalent to x2203 is equivalent to exists with ExistentialQuantification Usage examples even succ Integral Bool xx x2 Bool foldl flip Bool Bool Bool",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "Unicode",
        "normalized": "",
        "package": "unicode-prelude",
        "partial": "Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#t::-215-",
      "description": {
        "fct-descr": "\u003cp\u003ePair.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "type",
        "fct-source": "src/Prelude-Unicode.html#%3A%D7",
        "fct-type": "type",
        "title": ":×"
      },
      "index": {
        "description": "Pair",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": ":×",
        "normalized": "",
        "package": "unicode-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-172-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \u003ca\u003enot\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "Bool -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%AC",
        "fct-type": "function",
        "title": "(¬)"
      },
      "index": {
        "description": "Boolean not",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(¬) ¬",
        "normalized": "Bool-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-215-",
      "description": {
        "fct-descr": "\u003cp\u003ePair creation. It is not a constructor so can not be used in patterns.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e b -\u003e a :× b",
        "fct-source": "src/Prelude-Unicode.html#%D7",
        "fct-type": "function",
        "title": "(×)"
      },
      "index": {
        "description": "Pair creation It is not constructor so can not be used in patterns",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(×) ×",
        "normalized": "a-\u003eb-\u003ea b",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003eb-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-247-",
      "description": {
        "fct-descr": "\u003cp\u003eDivision.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-Unicode.html#%F7",
        "fct-type": "function",
        "title": "(÷)"
      },
      "index": {
        "description": "Division",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(÷) ÷",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8660-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean equality check.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%21D4",
        "fct-type": "function",
        "title": "(⇔)"
      },
      "index": {
        "description": "Boolean equality check",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(⇔) ⇔",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8709-",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty list.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "[a]",
        "fct-source": "src/Prelude-Unicode.html#%2205",
        "fct-type": "function",
        "title": "(∅)"
      },
      "index": {
        "description": "The empty list",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(∅) ∅",
        "normalized": "[a]",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8712-",
      "description": {
        "fct-descr": "\u003cp\u003eThe list membership predicate.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2208",
        "fct-type": "function",
        "title": "(∈)"
      },
      "index": {
        "description": "The list membership predicate",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(∈) ∈",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8713-",
      "description": {
        "fct-descr": "\u003cp\u003eThe negation of the list membership predicate.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2209",
        "fct-type": "function",
        "title": "(∉)"
      },
      "index": {
        "description": "The negation of the list membership predicate",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(∉) ∉",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8743-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \u003ca\u003eand\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2227",
        "fct-type": "function",
        "title": "(∧)"
      },
      "index": {
        "description": "Boolean and",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(∧) ∧",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8744-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \u003ca\u003eor\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2228",
        "fct-type": "function",
        "title": "(∨)"
      },
      "index": {
        "description": "Boolean or",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(∨) ∨",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8800-",
      "description": {
        "fct-descr": "\u003cp\u003eNot equal.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2260",
        "fct-type": "function",
        "title": "(≠)"
      },
      "index": {
        "description": "Not equal",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≠) ≠",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8801-",
      "description": {
        "fct-descr": "\u003cp\u003eEqual.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2261",
        "fct-type": "function",
        "title": "(≡)"
      },
      "index": {
        "description": "Equal",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≡) ≡",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8802-",
      "description": {
        "fct-descr": "\u003cp\u003eNot equal.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2262",
        "fct-type": "function",
        "title": "(≢)"
      },
      "index": {
        "description": "Not equal",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≢) ≢",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8804-",
      "description": {
        "fct-descr": "\u003cp\u003eLess or equal.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2264",
        "fct-type": "function",
        "title": "(≤)"
      },
      "index": {
        "description": "Less or equal",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≤) ≤",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8805-",
      "description": {
        "fct-descr": "\u003cp\u003eGreater or equal.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%2265",
        "fct-type": "function",
        "title": "(≥)"
      },
      "index": {
        "description": "Greater or equal",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≥) ≥",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8814-",
      "description": {
        "fct-descr": "\u003cp\u003eNot less.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%226E",
        "fct-type": "function",
        "title": "(≮)"
      },
      "index": {
        "description": "Not less",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≮) ≮",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8815-",
      "description": {
        "fct-descr": "\u003cp\u003eNot greater.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-Unicode.html#%226F",
        "fct-type": "function",
        "title": "(≯)"
      },
      "index": {
        "description": "Not greater",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(≯) ≯",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8869-",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined value.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a",
        "fct-source": "src/Prelude-Unicode.html#%22A5",
        "fct-type": "function",
        "title": "(⊥)"
      },
      "index": {
        "description": "Undefined value",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(⊥) ⊥",
        "normalized": "",
        "package": "unicode-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-8901-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude-Unicode.html#%22C5",
        "fct-type": "function",
        "title": "(⋅)"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(⋅) ⋅",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-960-",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e1415..\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "a",
        "fct-source": "src/Prelude-Unicode.html#%3C0",
        "fct-type": "function",
        "title": "π"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "π",
        "normalized": "",
        "package": "unicode-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-prelude/docs/Prelude-Unicode.html#v:-9702-",
      "description": {
        "fct-descr": "\u003cp\u003eFunction composition.\n\u003c/p\u003e",
        "fct-module": "Prelude.Unicode",
        "fct-package": "unicode-prelude",
        "fct-signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
        "fct-source": "src/Prelude-Unicode.html#%25E6",
        "fct-type": "function",
        "title": "(◦)"
      },
      "index": {
        "description": "Function composition",
        "hierarchy": "Prelude Unicode",
        "module": "Prelude.Unicode",
        "name": "(◦) ◦",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
        "package": "unicode-prelude",
        "partial": "",
        "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec"
      }
    }
  }
]