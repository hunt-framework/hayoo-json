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
        "word": "custom-prelude"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CustomPrelude",
          "name": "CustomPrelude",
          "package": "custom-prelude",
          "source": "src/CustomPrelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "CustomPrelude",
          "package": "custom-prelude",
          "partial": "Custom Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ca\u003e*\u003c/a\u003e\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "(\u003c&\u003e)",
          "package": "custom-prelude",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "source": "src/CustomPrelude.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "custom-prelude",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ca\u003e$\u003c/a\u003e\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "(\u003c@\u003e)",
          "package": "custom-prelude",
          "signature": "(a -\u003e b) -\u003e m a -\u003e m b",
          "source": "src/CustomPrelude.html#%3C%40%3E",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "(\u003c@\u003e) \u003c@\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "custom-prelude",
          "signature": "(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:-60--64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeamless composition of a one and a two arg function\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "(.:)",
          "package": "custom-prelude",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/CustomPrelude.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Seamless composition of one and two arg function",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "(.:) .:",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "custom-prelude",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBool deconstructor in the spirit of \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e\n   Similar to the lambda-if proposal\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "bool",
          "package": "custom-prelude",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/CustomPrelude.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Bool deconstructor in the spirit of either and maybe Similar to the lambda-if proposal",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "custom-prelude",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialised foldl' with short circuit evaluation\n   A Nothing stops processing for the rest of the list\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "foldlMaybe",
          "package": "custom-prelude",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e a -\u003e [b] -\u003e a",
          "source": "src/CustomPrelude.html#foldlMaybe",
          "type": "function"
        },
        "index": {
          "description": "Specialised foldl with short circuit evaluation Nothing stops processing for the rest of the list",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "foldlMaybe",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
          "package": "custom-prelude",
          "partial": "Maybe",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Standard strict version of foldl\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "foldlStrict",
          "package": "custom-prelude",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "source": "src/CustomPrelude.html#foldlStrict",
          "type": "function"
        },
        "index": {
          "description": "Standard strict version of foldl",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "foldlStrict",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "custom-prelude",
          "partial": "Strict",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of specialised foldl' with short circuit evaluation\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "foldlStrictMaybe",
          "package": "custom-prelude",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e a -\u003e [b] -\u003e a",
          "source": "src/CustomPrelude.html#foldlStrictMaybe",
          "type": "function"
        },
        "index": {
          "description": "Strict version of specialised foldl with short circuit evaluation",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "foldlStrictMaybe",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
          "package": "custom-prelude",
          "partial": "Strict Maybe",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:foldlStrictMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of the if condition\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "ifM",
          "package": "custom-prelude",
          "signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/CustomPrelude.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of the if condition",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "ifM",
          "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
          "package": "custom-prelude",
          "signature": "m Bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the next power of two for integers\n   Works only on a 32/64 bit machine (is there any other kind?)\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "nextPowerOf2",
          "package": "custom-prelude",
          "signature": "Int -\u003e Int",
          "source": "src/CustomPrelude.html#nextPowerOf2",
          "type": "function"
        },
        "index": {
          "description": "Computes the next power of two for integers Works only on bit machine is there any other kind",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "nextPowerOf2",
          "normalized": "Int-\u003eInt",
          "package": "custom-prelude",
          "partial": "Power Of",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:nextPowerOf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for (.:)\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "oo",
          "package": "custom-prelude",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/CustomPrelude.html#oo",
          "type": "function"
        },
        "index": {
          "description": "An alias for",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "oo",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "custom-prelude",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:oo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeamless composition of a one and a three arg function\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "ooo",
          "package": "custom-prelude",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/CustomPrelude.html#ooo",
          "type": "function"
        },
        "index": {
          "description": "Seamless composition of one and three arg function",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "ooo",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "custom-prelude",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:ooo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeamless composition of a one and a four arg function\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "oooo",
          "package": "custom-prelude",
          "signature": "(e -\u003e f) -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e f",
          "source": "src/CustomPrelude.html#oooo",
          "type": "function"
        },
        "index": {
          "description": "Seamless composition of one and four arg function",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "oooo",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ef-\u003ea)-\u003ec-\u003ed-\u003ee-\u003ef-\u003eb",
          "package": "custom-prelude",
          "signature": "(e-\u003ef)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:oooo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit lists at the specified delimiter\n   Drops empty groups (similar to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "splitOn",
          "package": "custom-prelude",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/CustomPrelude.html#splitOn",
          "type": "function"
        },
        "index": {
          "description": "Split lists at the specified delimiter Drops empty groups similar to words",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "splitOn",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "custom-prelude",
          "partial": "On",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:splitOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit lists at delimiter specified by a condition\n   Drops empty groups (similar to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "splitWhen",
          "package": "custom-prelude",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/CustomPrelude.html#splitWhen",
          "type": "function"
        },
        "index": {
          "description": "Split lists at delimiter specified by condition Drops empty groups similar to words",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "splitWhen",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "custom-prelude",
          "partial": "When",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:splitWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ewhileIterateM b f a\u003c/a\u003e will execute action (f a) while (b a) is true\n   and also feed the results back to the next iteration.\n   NOTE: Suggestions for a better name are welcome!\n\u003c/p\u003e",
          "module": "CustomPrelude",
          "name": "whileIterateM",
          "package": "custom-prelude",
          "signature": "(a -\u003e m Bool) -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/CustomPrelude.html#whileIterateM",
          "type": "function"
        },
        "index": {
          "description": "whileIterateM will execute action while is true and also feed the results back to the next iteration NOTE Suggestions for better name are welcome",
          "hierarchy": "CustomPrelude",
          "module": "CustomPrelude",
          "name": "whileIterateM",
          "normalized": "(a-\u003eb Bool)-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "custom-prelude",
          "partial": "Iterate",
          "signature": "(a-\u003em Bool)-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/custom-prelude/docs/CustomPrelude.html#v:whileIterateM"
      }
    }
  ]
]