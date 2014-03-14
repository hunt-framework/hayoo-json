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
        "word": "InfixApplicative"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful functions for bracketing infix operators -- providing\n essentially infix liftA2.\n \u003ccode\u003eliftA2 (*) x y\u003c/code\u003e becomes \u003ccode\u003ex \u003ca\u003e^(*)^\u003c/a\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Infix",
          "name": "Infix",
          "package": "InfixApplicative",
          "source": "src/Control-Applicative-Infix.html",
          "type": "module"
        },
        "index": {
          "description": "Useful functions for bracketing infix operators providing essentially infix liftA2 liftA2 becomes",
          "hierarchy": "Control Applicative Infix",
          "module": "Control.Applicative.Infix",
          "name": "Infix",
          "package": "InfixApplicative",
          "partial": "Infix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/InfixApplicative/docs/Control-Applicative-Infix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Infix",
          "name": "(\u003c^)",
          "package": "InfixApplicative",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Control-Applicative-Infix.html#%3C%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Infix",
          "module": "Control.Applicative.Infix",
          "name": "(\u003c^) \u003c^",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "InfixApplicative",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/InfixApplicative/docs/Control-Applicative-Infix.html#v:-60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenaming of \u003ccode\u003e(\u003ca\u003e*\u003c/a\u003e)\u003c/code\u003e.  Should be used in combination with \u003ccode\u003e(\u003c^)\u003c/code\u003e to give \n   infix \u003ccode\u003eliftA2\u003c/code\u003e:\n   \u003ccode\u003e[1,2] \u003ca\u003e^(+)^\u003c/a\u003e [2,3]\u003c/code\u003e == \u003ccode\u003e[3,4,4,5]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Infix",
          "name": "(↾)",
          "package": "InfixApplicative",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-Applicative-Infix.html#%21BE",
          "type": "function"
        },
        "index": {
          "description": "Renaming of Should be used in combination with to give infix liftA2",
          "hierarchy": "Control Applicative Infix",
          "module": "Control.Applicative.Infix",
          "name": "(↾) ↾",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "InfixApplicative",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/InfixApplicative/docs/Control-Applicative-Infix.html#v:-8638-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenaming of \u003ccode\u003eflip fmap\u003c/code\u003e.  Should be used in combination with \u003ccode\u003e(^\u003e)\u003c/code\u003e to\n   give infix \u003ccode\u003eliftA2\u003c/code\u003e:\n   \u003ccode\u003e[1,2] \u003ca\u003e^(+)^\u003c/a\u003e [2,3]\u003c/code\u003e == \u003ccode\u003e[3,4,4,5]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Infix",
          "name": "(↿)",
          "package": "InfixApplicative",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Control-Applicative-Infix.html#%21BF",
          "type": "function"
        },
        "index": {
          "description": "Renaming of flip fmap Should be used in combination with to give infix liftA2",
          "hierarchy": "Control Applicative Infix",
          "module": "Control.Applicative.Infix",
          "name": "(↿) ↿",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "InfixApplicative",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/InfixApplicative/docs/Control-Applicative-Infix.html#v:-8639-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Infix",
          "name": "(^\u003e)",
          "package": "InfixApplicative",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-Applicative-Infix.html#%5E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Infix",
          "module": "Control.Applicative.Infix",
          "name": "(^\u003e) ^\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "InfixApplicative",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/InfixApplicative/docs/Control-Applicative-Infix.html#v:-94--62-"
      }
    }
  ]
]