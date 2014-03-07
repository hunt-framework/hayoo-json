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
        "word": "ord-adhoc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreating Ord instance by a key function\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Ala.html",
          "type": "module"
        },
        "index": {
          "description": "Creating Ord instance by key function",
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "package": "ord-adhoc",
          "partial": "Ala",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlso known as store comonad\n\u003c/p\u003e",
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Ala.html#Ala",
          "type": "newtype"
        },
        "index": {
          "description": "Also known as store comonad",
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "package": "ord-adhoc",
          "partial": "Ala",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#t:Ala"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "package": "ord-adhoc",
          "signature": "Ala (a -\u003e k, a)",
          "source": "src/Data-Ord-Ala.html#Ala",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "Ala",
          "normalized": "Ala(a-\u003eb,a)",
          "package": "ord-adhoc",
          "partial": "Ala",
          "signature": "Ala(a-\u003ek,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#v:Ala"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the key from \u003ccode\u003e\u003ca\u003eAla\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ord.Ala",
          "name": "keyAla",
          "package": "ord-adhoc",
          "signature": "Ala k a -\u003e k",
          "source": "src/Data-Ord-Ala.html#keyAla",
          "type": "function"
        },
        "index": {
          "description": "Extract the key from Ala",
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "keyAla",
          "normalized": "Ala a b-\u003ea",
          "package": "ord-adhoc",
          "partial": "Ala",
          "signature": "Ala k a-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#v:keyAla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ord.Ala",
          "name": "mapAla",
          "package": "ord-adhoc",
          "signature": "(j -\u003e k) -\u003e Ala j a -\u003e Ala k a",
          "source": "src/Data-Ord-Ala.html#mapAla",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "mapAla",
          "normalized": "(a-\u003eb)-\u003eAla a c-\u003eAla b c",
          "package": "ord-adhoc",
          "partial": "Ala",
          "signature": "(j-\u003ek)-\u003eAla j a-\u003eAla k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#v:mapAla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance from the key function.\n\u003c/p\u003e",
          "module": "Data.Ord.Ala",
          "name": "ordBy",
          "package": "ord-adhoc",
          "signature": "(a -\u003e k) -\u003e a -\u003e Ala k a",
          "source": "src/Data-Ord-Ala.html#ordBy",
          "type": "function"
        },
        "index": {
          "description": "Make Ord instance from the key function",
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "ordBy",
          "normalized": "(a-\u003eb)-\u003ea-\u003eAla b a",
          "package": "ord-adhoc",
          "partial": "By",
          "signature": "(a-\u003ek)-\u003ea-\u003eAla k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#v:ordBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the original value from \u003ccode\u003e\u003ca\u003eAla\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ord.Ala",
          "name": "unAla",
          "package": "ord-adhoc",
          "signature": "Ala k a -\u003e a",
          "source": "src/Data-Ord-Ala.html#unAla",
          "type": "function"
        },
        "index": {
          "description": "Extract the original value from Ala",
          "hierarchy": "Data Ord Ala",
          "module": "Data.Ord.Ala",
          "name": "unAla",
          "normalized": "Ala a b-\u003eb",
          "package": "ord-adhoc",
          "partial": "Ala",
          "signature": "Ala k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Ala.html#v:unAla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreating bounded value from any Ord instance\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Ord.Bounded",
          "name": "Bounded",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Bounded.html",
          "type": "module"
        },
        "index": {
          "description": "Creating bounded value from any Ord instance",
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "Bounded",
          "package": "ord-adhoc",
          "partial": "Bounded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ord.Bounded",
          "name": "BoundedBoth",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Bounded.html#BoundedBoth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "BoundedBoth",
          "package": "ord-adhoc",
          "partial": "Bounded Both",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#t:BoundedBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ord.Bounded",
          "name": "BoundedMax",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Bounded.html#BoundedMax",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "BoundedMax",
          "package": "ord-adhoc",
          "partial": "Bounded Max",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#t:BoundedMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ord.Bounded",
          "name": "BoundedMin",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Bounded.html#BoundedMin",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "BoundedMin",
          "package": "ord-adhoc",
          "partial": "Bounded Min",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#t:BoundedMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure that provides minimum/maximum to any value.\n\u003c/p\u003e",
          "module": "Data.Ord.Bounded",
          "name": "GBounded",
          "package": "ord-adhoc",
          "source": "src/Data-Ord-Bounded.html#GBounded",
          "type": "data"
        },
        "index": {
          "description": "structure that provides minimum maximum to any value",
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "GBounded",
          "package": "ord-adhoc",
          "partial": "GBounded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#t:GBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvided maximum value.\n\u003c/p\u003e",
          "module": "Data.Ord.Bounded",
          "name": "maximumBound",
          "package": "ord-adhoc",
          "signature": "GBounded min () a",
          "source": "src/Data-Ord-Bounded.html#maximumBound",
          "type": "function"
        },
        "index": {
          "description": "Provided maximum value",
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "maximumBound",
          "normalized": "GBounded a()b",
          "package": "ord-adhoc",
          "partial": "Bound",
          "signature": "GBounded min()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#v:maximumBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvided minimum value.\n\u003c/p\u003e",
          "module": "Data.Ord.Bounded",
          "name": "minimumBound",
          "package": "ord-adhoc",
          "signature": "GBounded () max a",
          "source": "src/Data-Ord-Bounded.html#minimumBound",
          "type": "function"
        },
        "index": {
          "description": "Provided minimum value",
          "hierarchy": "Data Ord Bounded",
          "module": "Data.Ord.Bounded",
          "name": "minimumBound",
          "normalized": "GBounded()a b",
          "package": "ord-adhoc",
          "partial": "Bound",
          "signature": "GBounded()max a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ord-adhoc/docs/Data-Ord-Bounded.html#v:minimumBound"
      }
    }
  ]
]