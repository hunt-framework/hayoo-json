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
        "word": "texts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnglish-focused text operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Texts.English",
          "name": "English",
          "package": "texts",
          "source": "src/Texts-English.html",
          "type": "module"
        },
        "index": {
          "description": "English-focused text operations",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "English",
          "package": "texts",
          "partial": "English",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an integral number, give it a vague English description\n which makes it seem better than it is. Examples: \u003c3 -\u003e a couple,\n \u003c1000 -\u003e hundreds, etc.\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "bigUp",
          "package": "texts",
          "signature": "a -\u003e SText",
          "source": "src/Texts-English.html#bigUp",
          "type": "function"
        },
        "index": {
          "description": "Given an integral number give it vague English description which makes it seem better than it is Examples couple hundreds etc",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "bigUp",
          "normalized": "a-\u003eSText",
          "package": "texts",
          "partial": "Up",
          "signature": "a-\u003eSText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:bigUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the length of the string and ellipsize it.\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "ellipsize",
          "package": "texts",
          "signature": "Int -\u003e SText -\u003e SText",
          "source": "src/Texts-English.html#ellipsize",
          "type": "function"
        },
        "index": {
          "description": "Limit the length of the string and ellipsize it",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "ellipsize",
          "normalized": "Int-\u003eSText-\u003eSText",
          "package": "texts",
          "signature": "Int-\u003eSText-\u003eSText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:ellipsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indefinite article to be used before a word, e.g. \"An\"\n elephant, \"a\" car, etc.\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "indefinite",
          "package": "texts",
          "signature": "SText -\u003e SText",
          "source": "src/Texts-English.html#indefinite",
          "type": "function"
        },
        "index": {
          "description": "The indefinite article to be used before word e.g An elephant car etc",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "indefinite",
          "normalized": "SText-\u003eSText",
          "package": "texts",
          "signature": "SText-\u003eSText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:indefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a character a consonant?\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "isConsonant",
          "package": "texts",
          "signature": "Char -\u003e Bool",
          "source": "src/Texts-English.html#isConsonant",
          "type": "function"
        },
        "index": {
          "description": "Is character consonant",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "isConsonant",
          "normalized": "Char-\u003eBool",
          "package": "texts",
          "partial": "Consonant",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:isConsonant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a character a vowel?\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "isVowel",
          "package": "texts",
          "signature": "Char -\u003e Bool",
          "source": "src/Texts-English.html#isVowel",
          "type": "function"
        },
        "index": {
          "description": "Is character vowel",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "isVowel",
          "normalized": "Char-\u003eBool",
          "package": "texts",
          "partial": "Vowel",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:isVowel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a suffix to an integral, e.g. 1st, 2nd, 3rd, 21st.\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "ordSuffix",
          "package": "texts",
          "signature": "n -\u003e SText",
          "source": "src/Texts-English.html#ordSuffix",
          "type": "function"
        },
        "index": {
          "description": "Add suffix to an integral e.g st nd rd st",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "ordSuffix",
          "normalized": "a-\u003eSText",
          "package": "texts",
          "partial": "Suffix",
          "signature": "n-\u003eSText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:ordSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a time span as one time relative to another.\n\u003c/p\u003e",
          "module": "Texts.English",
          "name": "relativeTimes",
          "package": "texts",
          "signature": "UTCTime-\u003e UTCTime-\u003e Bool-\u003e SText",
          "type": "function"
        },
        "index": {
          "description": "Display time span as one time relative to another",
          "hierarchy": "Texts English",
          "module": "Texts.English",
          "name": "relativeTimes",
          "normalized": "UTCTime-\u003eUTCTime-\u003eBool-\u003eSText",
          "package": "texts",
          "partial": "Times",
          "signature": "UTCTime-\u003eUTCTime-\u003eBool-\u003eSText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-English.html#v:relativeTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandy data types for strict and lazy texts, with conversion\n functions to/from each.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Texts.Types",
          "name": "Types",
          "package": "texts",
          "source": "src/Texts-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Handy data types for strict and lazy texts with conversion functions to from each",
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "Types",
          "package": "texts",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for converting from Text.\n\u003c/p\u003e",
          "module": "Texts.Types",
          "name": "FromText",
          "package": "texts",
          "source": "src/Texts-Types.html#FromText",
          "type": "class"
        },
        "index": {
          "description": "class for converting from Text",
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "FromText",
          "package": "texts",
          "partial": "From Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#t:FromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy text.\n\u003c/p\u003e",
          "module": "Texts.Types",
          "name": "LText",
          "package": "texts",
          "source": "src/Texts-Types.html#LText",
          "type": "type"
        },
        "index": {
          "description": "Lazy text",
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "LText",
          "package": "texts",
          "partial": "LText",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#t:LText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict text.\n\u003c/p\u003e",
          "module": "Texts.Types",
          "name": "SText",
          "package": "texts",
          "source": "src/Texts-Types.html#SText",
          "type": "type"
        },
        "index": {
          "description": "Strict text",
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "SText",
          "package": "texts",
          "partial": "SText",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#t:SText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for converting to Text.\n\u003c/p\u003e",
          "module": "Texts.Types",
          "name": "ToText",
          "package": "texts",
          "source": "src/Texts-Types.html#ToText",
          "type": "class"
        },
        "index": {
          "description": "class for converting to Text",
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "ToText",
          "package": "texts",
          "partial": "To Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#t:ToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Texts.Types",
          "name": "fromLazyText",
          "package": "texts",
          "signature": "LText -\u003e Maybe a",
          "source": "src/Texts-Types.html#fromLazyText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "fromLazyText",
          "normalized": "LText-\u003eMaybe a",
          "package": "texts",
          "partial": "Lazy Text",
          "signature": "LText-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#v:fromLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Texts.Types",
          "name": "fromText",
          "package": "texts",
          "signature": "SText -\u003e Maybe a",
          "source": "src/Texts-Types.html#fromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "fromText",
          "normalized": "SText-\u003eMaybe a",
          "package": "texts",
          "partial": "Text",
          "signature": "SText-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Texts.Types",
          "name": "toLazyText",
          "package": "texts",
          "signature": "a -\u003e LText",
          "source": "src/Texts-Types.html#toLazyText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "toLazyText",
          "normalized": "a-\u003eLText",
          "package": "texts",
          "partial": "Lazy Text",
          "signature": "a-\u003eLText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#v:toLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Texts.Types",
          "name": "toText",
          "package": "texts",
          "signature": "a -\u003e SText",
          "source": "src/Texts-Types.html#toText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Texts Types",
          "module": "Texts.Types",
          "name": "toText",
          "normalized": "a-\u003eSText",
          "package": "texts",
          "partial": "Text",
          "signature": "a-\u003eSText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Types.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText operations for web programming.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Texts.Web",
          "name": "Web",
          "package": "texts",
          "source": "src/Texts-Web.html",
          "type": "module"
        },
        "index": {
          "description": "Text operations for web programming",
          "hierarchy": "Texts Web",
          "module": "Texts.Web",
          "name": "Web",
          "package": "texts",
          "partial": "Web",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Web.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode a text into its constituent links.\n\u003c/p\u003e",
          "module": "Texts.Web",
          "name": "explodeLinks",
          "package": "texts",
          "signature": "SText -\u003e [Either URI SText]",
          "source": "src/Texts-Web.html#explodeLinks",
          "type": "function"
        },
        "index": {
          "description": "Explode text into its constituent links",
          "hierarchy": "Texts Web",
          "module": "Texts.Web",
          "name": "explodeLinks",
          "normalized": "SText-\u003e[Either URI SText]",
          "package": "texts",
          "partial": "Links",
          "signature": "SText-\u003e[Either URI SText]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts-Web.html#v:explodeLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports operations for dealing with texts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Texts",
          "name": "Texts",
          "package": "texts",
          "source": "src/Texts.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports operations for dealing with texts",
          "hierarchy": "Texts",
          "module": "Texts",
          "name": "Texts",
          "package": "texts",
          "partial": "Texts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texts/docs/Texts.html#"
      }
    }
  ]
]