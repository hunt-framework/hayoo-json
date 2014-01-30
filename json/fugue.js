[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fugue/docs/Fugue.html#",
      "description": {
        "fct-module": "Fugue",
        "fct-package": "fugue",
        "fct-signature": "module",
        "fct-source": "src/Fugue.html",
        "fct-type": "module",
        "title": "Fugue"
      },
      "index": {
        "description": "",
        "hierarchy": "Fugue",
        "module": "Fugue",
        "name": "Fugue",
        "normalized": "",
        "package": "fugue",
        "partial": "Fugue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fugue/docs/Fugue.html#t:IsString",
      "description": {
        "fct-descr": "\u003cp\u003eClass for string-like datastructures; used by the overloaded string\n   extension (-foverloaded-strings in GHC).\n\u003c/p\u003e",
        "fct-module": "Fugue",
        "fct-package": "fugue",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "IsString"
      },
      "index": {
        "description": "Class for string-like datastructures used by the overloaded string extension foverloaded-strings in GHC",
        "hierarchy": "Fugue",
        "module": "Fugue",
        "name": "IsString",
        "normalized": "",
        "package": "fugue",
        "partial": "Is String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fugue/docs/Fugue.html#v:fromString",
      "description": {
        "fct-module": "Fugue",
        "fct-package": "fugue",
        "fct-signature": "String -\u003e a",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Fugue",
        "module": "Fugue",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "fugue",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fugue/docs/Fugue.html#v:on",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(*) `on` f = \\x y -\u003e f x * f y\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTypical usage: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e `on` \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlgebraic properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(*) `on` \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = (*)\u003c/code\u003e (if \u003ccode\u003e(*) &#8713; {&#8869;, \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e &#8869;}\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e((*) `on` f) `on` g = (*) `on` (f . g)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on f . \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on g = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on (g . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Fugue",
        "fct-package": "fugue",
        "fct-signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "on Typical usage sortBy compare on fst Algebraic properties on id if const on on on flip on flip on flip on",
        "hierarchy": "Fugue",
        "module": "Fugue",
        "name": "on",
        "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
        "package": "fugue",
        "partial": "",
        "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec"
      }
    }
  }
]