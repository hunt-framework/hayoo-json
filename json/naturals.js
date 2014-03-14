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
        "word": "naturals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Natural module attempts to provide a representation of natural numbers\n  (non-positive integers) which behave as much as possible like normal Integers.\n  All calculations which would normally return a negative number result in an\n  Indeterminate value. Once a Natural becomes Indeterminate, it will remain\n  indeterminate in subsequent calculations. Such a calculation has, in effect,\n  been errored-out in a safe manner.\n\u003c/p\u003e\u003cp\u003eThis is not a type-level representation of naturals as in some packages. It is\n  basically a wrapper around the Integer type, using pattern-based rewriting.\n\u003c/p\u003e\u003cp\u003eNaturals are created with the safe constructors natural or indeterm. Note that\n  for practical reasons Indeterminate values are considered equal, which allows\n  easy detection of an errored-out calculation via comparison.\n\u003c/p\u003e\u003cp\u003eFeel free to send me an e-mail if you find the package useful, or if you have\n  any suggestions or code to share.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "naturals",
          "source": "src/Data-Natural.html",
          "type": "module"
        },
        "index": {
          "description": "The Natural module attempts to provide representation of natural numbers non-positive integers which behave as much as possible like normal Integers All calculations which would normally return negative number result in an Indeterminate value Once Natural becomes Indeterminate it will remain indeterminate in subsequent calculations Such calculation has in effect been errored-out in safe manner This is not type-level representation of naturals as in some packages It is basically wrapper around the Integer type using pattern-based rewriting Naturals are created with the safe constructors natural or indeterm Note that for practical reasons Indeterminate values are considered equal which allows easy detection of an errored-out calculation via comparison Feel free to send me an e-mail if you find the package useful or if you have any suggestions or code to share",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "naturals",
          "partial": "Natural",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/naturals/docs/Data-Natural.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Natural",
          "name": "Natural",
          "package": "naturals",
          "source": "src/Data-Natural.html#Natural",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "naturals",
          "partial": "Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/naturals/docs/Data-Natural.html#t:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Natural number with an Indeterminate value. Useful for detecting\n  an Indeterminate value through comparison.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enatural 3 - natural 4 == indeterm\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Natural",
          "name": "indeterm",
          "package": "naturals",
          "signature": "Natural",
          "source": "src/Data-Natural.html#indeterm",
          "type": "function"
        },
        "index": {
          "description": "Constructs Natural number with an Indeterminate value Useful for detecting an Indeterminate value through comparison natural natural indeterm True",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "indeterm",
          "package": "naturals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/naturals/docs/Data-Natural.html#v:indeterm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Natural number, which is defined here as all non-negative\n  integers, including zero. Passing in a negative integer will result in an\n  Indeterminate value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enatural 10\n\u003c/code\u003e\u003c/strong\u003eNatural 10\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enatural 0\n\u003c/code\u003e\u003c/strong\u003eNatural 0\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enatural (-1)\n\u003c/code\u003e\u003c/strong\u003eIndeterminate\n\u003c/pre\u003e",
          "module": "Data.Natural",
          "name": "natural",
          "package": "naturals",
          "signature": "Integer -\u003e Natural",
          "source": "src/Data-Natural.html#natural",
          "type": "function"
        },
        "index": {
          "description": "Constructs Natural number which is defined here as all non-negative integers including zero Passing in negative integer will result in an Indeterminate value natural Natural natural Natural natural Indeterminate",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "natural",
          "normalized": "Integer-\u003eNatural",
          "package": "naturals",
          "signature": "Integer-\u003eNatural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/naturals/docs/Data-Natural.html#v:natural"
      }
    }
  ]
]