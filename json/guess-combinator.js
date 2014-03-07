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
        "word": "guess-combinator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGuess a value for a combinator\n\u003c/p\u003e\u003cp\u003eBased on De-typechecker: converting from a type to a term\n by \u003ca\u003eoleg at pobox.com\u003c/a\u003e\n http:\u003cem/\u003ewww.haskell.org\u003cem\u003epipermail\u003c/em\u003ehaskell\u003cem\u003e2005-March\u003c/em\u003e015423.html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Guess.Combinator",
          "name": "Combinator",
          "package": "guess-combinator",
          "source": "src/Guess-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Guess value for combinator Based on De-typechecker converting from type to term by oleg at pobox.com http www.haskell.org pipermail haskell March html",
          "hierarchy": "Guess Combinator",
          "module": "Guess.Combinator",
          "name": "Combinator",
          "package": "guess-combinator",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/guess-combinator/docs/Guess-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess a combinator given its type\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f = combinator :: (b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ef (:[]) ((,) True) 10\n\u003c/code\u003e\u003c/strong\u003e[(True, 10)]\n\u003c/pre\u003e",
          "module": "Guess.Combinator",
          "name": "combinator",
          "package": "guess-combinator",
          "signature": "t",
          "source": "src/Guess-Combinator.html#combinator",
          "type": "function"
        },
        "index": {
          "description": "Guess combinator given its type Example let combinator True True",
          "hierarchy": "Guess Combinator",
          "module": "Guess.Combinator",
          "name": "combinator",
          "package": "guess-combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/guess-combinator/docs/Guess-Combinator.html#v:combinator"
      }
    }
  ]
]