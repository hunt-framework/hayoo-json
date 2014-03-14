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
        "word": "acme-schoenfinkel"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library generalizes \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e and also gives them\n more appropriate names.\n\u003c/p\u003e\u003cpre\u003e import Control.Category.Schoenfinkel\n\n main :: IO ()\n main = print (unschoen atan2 (2, 3))\n\u003c/pre\u003e\u003cp\u003eFor your convenience there are also Unicode variants of both the\n \u003ccode\u003e\u003ca\u003eSchoenfinkel\u003c/a\u003e\u003c/code\u003e class and its two functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schoenfinkel",
          "package": "acme-schoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html",
          "type": "module"
        },
        "index": {
          "description": "This library generalizes curry and uncurry and also gives them more appropriate names import Control.Category.Schoenfinkel main IO main print unschoen atan2 For your convenience there are also Unicode variants of both the Schoenfinkel class and its two functions",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schoenfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Schoenfinkel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode version of \u003ccode\u003e\u003ca\u003eSchoenfinkel\u003c/a\u003e\u003c/code\u003e if you prefer.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schönfinkel",
          "package": "acme-schoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html#Sch%F6nfinkel",
          "type": "type"
        },
        "index": {
          "description": "Unicode version of Schoenfinkel if you prefer",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schönfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Schönfinkel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#t:Sch-246-nfinkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategories that support Sch&#246;nfinkelization.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schoenfinkel",
          "package": "acme-schoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html#Schoenfinkel",
          "type": "class"
        },
        "index": {
          "description": "Categories that support Sch nfinkelization",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "Schoenfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Schoenfinkel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#t:Schoenfinkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode version of \u003ccode\u003e\u003ca\u003eWrappedSchoenfinkel\u003c/a\u003e\u003c/code\u003e if you prefer.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchönfinkel",
          "package": "acme-schoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html#WrappedSch%F6nfinkel",
          "type": "type"
        },
        "index": {
          "description": "Unicode version of WrappedSchoenfinkel if you prefer",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchönfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Wrapped Schönfinkel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#t:WrappedSch-246-nfinkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e gives rise to a \u003ccode\u003e\u003ca\u003eSchoenfinkel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchoenfinkel",
          "package": "acme-schoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html#WrappedSchoenfinkel",
          "type": "newtype"
        },
        "index": {
          "description": "Every ArrowApply gives rise to Schoenfinkel",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchoenfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Wrapped Schoenfinkel",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#t:WrappedSchoenfinkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchoenfinkel",
          "package": "acme-schoenfinkel",
          "signature": "WrappedSchoenfinkel",
          "source": "src/Control-Category-Schoenfinkel.html#WrappedSchoenfinkel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "WrappedSchoenfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Wrapped Schoenfinkel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:WrappedSchoenfinkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother appropriate name for 'uncurry'/'unschoen'.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "hässlich",
          "package": "acme-schoenfinkel",
          "signature": "cat a (cat b c) -\u003e cat (a, b) c",
          "source": "src/Control-Category-Schoenfinkel.html#h%E4sslich",
          "type": "function"
        },
        "index": {
          "description": "Another appropriate name for uncurry unschoen",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "hässlich",
          "normalized": "a b(a c d)-\u003ea(b,c)d",
          "package": "acme-schoenfinkel",
          "signature": "cat a(cat b c)-\u003ecat(a,b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:h-228-sslich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode version of \u003ccode\u003e\u003ca\u003eschoen\u003c/a\u003e\u003c/code\u003e if you prefer.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "schön",
          "package": "acme-schoenfinkel",
          "signature": "cat (a, b) c -\u003e cat a (cat b c)",
          "source": "src/Control-Category-Schoenfinkel.html#sch%F6n",
          "type": "function"
        },
        "index": {
          "description": "Unicode version of schoen if you prefer",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "schön",
          "normalized": "a(b,c)d-\u003ea b(a c d)",
          "package": "acme-schoenfinkel",
          "signature": "cat(a,b)c-\u003ecat a(cat b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:sch-246-n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Schoenfinkel",
          "name": "schoen",
          "package": "acme-schoenfinkel",
          "signature": "cat (a, b) c -\u003e cat a (cat b c)",
          "source": "src/Control-Category-Schoenfinkel.html#schoen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "schoen",
          "normalized": "a(b,c)d-\u003ea b(a c d)",
          "package": "acme-schoenfinkel",
          "signature": "cat(a,b)c-\u003ecat a(cat b c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:schoen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode version of \u003ccode\u003e\u003ca\u003eunschoen\u003c/a\u003e\u003c/code\u003e if you prefer.\n\u003c/p\u003e",
          "module": "Control.Category.Schoenfinkel",
          "name": "unschön",
          "package": "acme-schoenfinkel",
          "signature": "cat a (cat b c) -\u003e cat (a, b) c",
          "source": "src/Control-Category-Schoenfinkel.html#unsch%F6n",
          "type": "function"
        },
        "index": {
          "description": "Unicode version of unschoen if you prefer",
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "unschön",
          "normalized": "a b(a c d)-\u003ea(b,c)d",
          "package": "acme-schoenfinkel",
          "signature": "cat a(cat b c)-\u003ecat(a,b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:unsch-246-n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Schoenfinkel",
          "name": "unschoen",
          "package": "acme-schoenfinkel",
          "signature": "cat a (cat b c) -\u003e cat (a, b) c",
          "source": "src/Control-Category-Schoenfinkel.html#unschoen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "unschoen",
          "normalized": "a b(a c d)-\u003ea(b,c)d",
          "package": "acme-schoenfinkel",
          "signature": "cat a(cat b c)-\u003ecat(a,b)c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:unschoen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Schoenfinkel",
          "name": "unwrapSchoenfinkel",
          "package": "acme-schoenfinkel",
          "signature": "cat a b",
          "source": "src/Control-Category-Schoenfinkel.html#WrappedSchoenfinkel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Schoenfinkel",
          "module": "Control.Category.Schoenfinkel",
          "name": "unwrapSchoenfinkel",
          "package": "acme-schoenfinkel",
          "partial": "Schoenfinkel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-schoenfinkel/docs/Control-Category-Schoenfinkel.html#v:unwrapSchoenfinkel"
      }
    }
  ]
]