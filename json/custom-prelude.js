[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#",
      "description": {
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "module",
        "fct-source": "src/CustomPrelude.html",
        "fct-type": "module",
        "title": "CustomPrelude"
      },
      "index": {
        "description": "",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "CustomPrelude",
        "normalized": "",
        "package": "custom-prelude",
        "partial": "Custom Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:-60--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ca\u003e*\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/CustomPrelude.html#%3C%26%3E",
        "fct-type": "function",
        "title": "(\u003c&\u003e)"
      },
      "index": {
        "description": "Equivalent to",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "(\u003c&\u003e) \u003c&\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "custom-prelude",
        "partial": "",
        "signature": "m(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:-60--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ca\u003e$\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/CustomPrelude.html#%3C%40%3E",
        "fct-type": "function",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "Equivalent to",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "custom-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eSeamless composition of a one and a two arg function\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
        "fct-source": "src/CustomPrelude.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Seamless composition of one and two arg function",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "(.:) .:",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
        "package": "custom-prelude",
        "partial": "",
        "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:bool",
      "description": {
        "fct-descr": "\u003cp\u003eBool deconstructor in the spirit of \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e\n   Similar to the lambda-if proposal\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool -\u003e a",
        "fct-source": "src/CustomPrelude.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "Bool deconstructor in the spirit of either and maybe Similar to the lambda-if proposal",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "bool",
        "normalized": "a-\u003ea-\u003eBool-\u003ea",
        "package": "custom-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialised foldl' with short circuit evaluation\n   A Nothing stops processing for the rest of the list\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e a -\u003e [b] -\u003e a",
        "fct-source": "src/CustomPrelude.html#foldlMaybe",
        "fct-type": "function",
        "title": "foldlMaybe"
      },
      "index": {
        "description": "Specialised foldl with short circuit evaluation Nothing stops processing for the rest of the list",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "foldlMaybe",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
        "package": "custom-prelude",
        "partial": "Maybe",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlStrict",
      "description": {
        "fct-descr": "\u003cp\u003eA Standard strict version of foldl\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
        "fct-source": "src/CustomPrelude.html#foldlStrict",
        "fct-type": "function",
        "title": "foldlStrict"
      },
      "index": {
        "description": "Standard strict version of foldl",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "foldlStrict",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
        "package": "custom-prelude",
        "partial": "Strict",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlStrictMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of specialised foldl' with short circuit evaluation\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e a -\u003e [b] -\u003e a",
        "fct-source": "src/CustomPrelude.html#foldlStrictMaybe",
        "fct-type": "function",
        "title": "foldlStrictMaybe"
      },
      "index": {
        "description": "Strict version of specialised foldl with short circuit evaluation",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "foldlStrictMaybe",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
        "package": "custom-prelude",
        "partial": "Strict Maybe",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of the if condition\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/CustomPrelude.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "Monadic version of the if condition",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "ifM",
        "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
        "package": "custom-prelude",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:nextPowerOf2",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the next power of two for integers\n   Works only on a 32/64 bit machine (is there any other kind?)\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/CustomPrelude.html#nextPowerOf2",
        "fct-type": "function",
        "title": "nextPowerOf2"
      },
      "index": {
        "description": "Computes the next power of two for integers Works only on bit machine is there any other kind",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "nextPowerOf2",
        "normalized": "Int-\u003eInt",
        "package": "custom-prelude",
        "partial": "Power Of",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:oo",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for (.:)\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
        "fct-source": "src/CustomPrelude.html#oo",
        "fct-type": "function",
        "title": "oo"
      },
      "index": {
        "description": "An alias for",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "oo",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
        "package": "custom-prelude",
        "partial": "",
        "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:ooo",
      "description": {
        "fct-descr": "\u003cp\u003eSeamless composition of a one and a three arg function\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
        "fct-source": "src/CustomPrelude.html#ooo",
        "fct-type": "function",
        "title": "ooo"
      },
      "index": {
        "description": "Seamless composition of one and three arg function",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "ooo",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
        "package": "custom-prelude",
        "partial": "",
        "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:oooo",
      "description": {
        "fct-descr": "\u003cp\u003eSeamless composition of a one and a four arg function\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(e -\u003e f) -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e f",
        "fct-source": "src/CustomPrelude.html#oooo",
        "fct-type": "function",
        "title": "oooo"
      },
      "index": {
        "description": "Seamless composition of one and four arg function",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "oooo",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ef-\u003ea)-\u003ec-\u003ed-\u003ee-\u003ef-\u003eb",
        "package": "custom-prelude",
        "partial": "",
        "signature": "(e-\u003ef)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:splitOn",
      "description": {
        "fct-descr": "\u003cp\u003eSplit lists at the specified delimiter\n   Drops empty groups (similar to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "a -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/CustomPrelude.html#splitOn",
        "fct-type": "function",
        "title": "splitOn"
      },
      "index": {
        "description": "Split lists at the specified delimiter Drops empty groups similar to words",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "splitOn",
        "normalized": "a-\u003e[a]-\u003e[[a]]",
        "package": "custom-prelude",
        "partial": "On",
        "signature": "a-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:splitWhen",
      "description": {
        "fct-descr": "\u003cp\u003eSplit lists at delimiter specified by a condition\n   Drops empty groups (similar to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/CustomPrelude.html#splitWhen",
        "fct-type": "function",
        "title": "splitWhen"
      },
      "index": {
        "description": "Split lists at delimiter specified by condition Drops empty groups similar to words",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "splitWhen",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "custom-prelude",
        "partial": "When",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:whileIterateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003ewhileIterateM b f a\u003c/a\u003e will execute action (f a) while (b a) is true\n   and also feed the results back to the next iteration.\n   NOTE: Suggestions for a better name are welcome!\n\u003c/p\u003e",
        "fct-module": "CustomPrelude",
        "fct-package": "custom-prelude",
        "fct-signature": "(a -\u003e m Bool) -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/CustomPrelude.html#whileIterateM",
        "fct-type": "function",
        "title": "whileIterateM"
      },
      "index": {
        "description": "whileIterateM will execute action while is true and also feed the results back to the next iteration NOTE Suggestions for better name are welcome",
        "hierarchy": "CustomPrelude",
        "module": "CustomPrelude",
        "name": "whileIterateM",
        "normalized": "(a-\u003eb Bool)-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "custom-prelude",
        "partial": "Iterate",
        "signature": "(a-\u003em Bool)-\u003e(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  }
]