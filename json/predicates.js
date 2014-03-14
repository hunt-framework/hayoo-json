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
        "word": "predicates"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a couple of convenience functions to be used for forming predicates. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Function.Predicate",
          "name": "Predicate",
          "package": "predicates",
          "source": "src/Data-Function-Predicate.html",
          "type": "module"
        },
        "index": {
          "description": "Provides couple of convenience functions to be used for forming predicates",
          "hierarchy": "Data Function Predicate",
          "module": "Data.Function.Predicate",
          "name": "Predicate",
          "package": "predicates",
          "partial": "Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/predicates/docs/Data-Function-Predicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003eis\u003c/a\u003e\u003c/code\u003e with a fixed equality condition.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e data Color = White | Black deriving (Eq)\n data ChessPiece = { color :: Color, name :: String }\n whitePieces = filter (color `equals` White)\n\u003c/pre\u003e",
          "module": "Data.Function.Predicate",
          "name": "equals",
          "package": "predicates",
          "signature": "(a -\u003e b) -\u003e b -\u003e a -\u003e Bool",
          "source": "src/Data-Function-Predicate.html#equals",
          "type": "function"
        },
        "index": {
          "description": "This is is with fixed equality condition Example data Color White Black deriving Eq data ChessPiece color Color name String whitePieces filter color equals White",
          "hierarchy": "Data Function Predicate",
          "module": "Data.Function.Predicate",
          "name": "equals",
          "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003eBool",
          "package": "predicates",
          "signature": "(a-\u003eb)-\u003eb-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/predicates/docs/Data-Function-Predicate.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example will explain this more than anything:\n\u003c/p\u003e\u003cpre\u003e listsLongerThan3Elements :: [[a]] -\u003e [[a]]\n listsLongerThan3Elements = filter (length `is` (\u003e3))\n\u003c/pre\u003e",
          "module": "Data.Function.Predicate",
          "name": "is",
          "package": "predicates",
          "signature": "(a -\u003e b) -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Data-Function-Predicate.html#is",
          "type": "function"
        },
        "index": {
          "description": "An example will explain this more than anything listsLongerThan3Elements listsLongerThan3Elements filter length is",
          "hierarchy": "Data Function Predicate",
          "module": "Data.Function.Predicate",
          "name": "is",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "package": "predicates",
          "signature": "(a-\u003eb)-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/predicates/docs/Data-Function-Predicate.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e listsShorterThanFourElements = filter (length `isn't` (\u003e3))\n\u003c/pre\u003e",
          "module": "Data.Function.Predicate",
          "name": "isn't",
          "package": "predicates",
          "signature": "(a -\u003e b) -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Data-Function-Predicate.html#isn%27t",
          "type": "function"
        },
        "index": {
          "description": "The inverse of is listsShorterThanFourElements filter length isn",
          "hierarchy": "Data Function Predicate",
          "module": "Data.Function.Predicate",
          "name": "isn't",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "package": "predicates",
          "signature": "(a-\u003eb)-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/predicates/docs/Data-Function-Predicate.html#v:isn-39-t"
      }
    }
  ]
]