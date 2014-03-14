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
        "word": "effects-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Parser",
          "name": "Parser",
          "package": "effects-parser",
          "source": "src/Control-Effects-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "Parser",
          "package": "effects-parser",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns and consumes the next item from the input.\n Fails if there is no more input to be consumed.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "item",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n c",
          "source": "src/Control-Effects-Parser.html#item",
          "type": "function"
        },
        "index": {
          "description": "Returns and consumes the next item from the input Fails if there is no more input to be consumed",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "item",
          "normalized": "Effect(Parser a b c)b-\u003ed a",
          "package": "effects-parser",
          "signature": "Effect(Parser c m a)m-\u003en c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns and consumes the next item from the input, provided it satisfies a predicate.\n Fails if there is no more input, or if the predicate function evaluates to False.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "itemIf",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e (c -\u003e Bool) -\u003e n c",
          "source": "src/Control-Effects-Parser.html#itemIf",
          "type": "function"
        },
        "index": {
          "description": "Returns and consumes the next item from the input provided it satisfies predicate Fails if there is no more input or if the predicate function evaluates to False",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "itemIf",
          "normalized": "Effect(Parser a b c)b-\u003e(a-\u003eBool)-\u003ed a",
          "package": "effects-parser",
          "partial": "If",
          "signature": "Effect(Parser c m a)m-\u003e(c-\u003eBool)-\u003en c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:itemIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-width positive lookahead assertion. Runs the given action against the\n current input without consuming it. A parse failure in the action causes the\n lookahead to fail; otherwise, the result of the action is returned.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "lookahead",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n b",
          "source": "src/Control-Effects-Parser.html#lookahead",
          "type": "function"
        },
        "index": {
          "description": "Zero-width positive lookahead assertion Runs the given action against the current input without consuming it parse failure in the action causes the lookahead to fail otherwise the result of the action is returned",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "lookahead",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed e",
          "package": "effects-parser",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:lookahead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevents backtracking into the middle of the given action. This can be used to\n create actions which always consume as much or as little of the input as possible,\n even if that would cause a later match to fail. Note that backtracking is still\n possible within the action, or across the entire noBacktrack action.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e  noBacktrack p $ oneOf [return (), item p \u003e\u003e return ()]  -- never consumes any input\n  noBacktrack p $ parseMany p $ itemIf p (=='a')          -- always consumes all the 'a's\n\u003c/pre\u003e",
          "module": "Control.Effects.Parser",
          "name": "noBacktrack",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n b",
          "source": "src/Control-Effects-Parser.html#noBacktrack",
          "type": "function"
        },
        "index": {
          "description": "Prevents backtracking into the middle of the given action This can be used to create actions which always consume as much or as little of the input as possible even if that would cause later match to fail Note that backtracking is still possible within the action or across the entire noBacktrack action Examples noBacktrack oneOf return item return never consumes any input noBacktrack parseMany itemIf always consumes all the",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "noBacktrack",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed e",
          "package": "effects-parser",
          "partial": "Backtrack",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:noBacktrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-width negative lookahead assertion. Runs the given action against the\n current input without consuming it. A parse failure in the action causes the\n lookahead to succeed; otherwise, the lookahead fails.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "noMatch",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n ()",
          "source": "src/Control-Effects-Parser.html#noMatch",
          "type": "function"
        },
        "index": {
          "description": "Zero-width negative lookahead assertion Runs the given action against the current input without consuming it parse failure in the action causes the lookahead to succeed otherwise the lookahead fails",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "noMatch",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed()",
          "package": "effects-parser",
          "partial": "Match",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:noMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries each action from the given list in turn, stopping with the first one\n which successfully parses the input. A parse failure in the action or the\n continuation results in backtracking to the original location in the input,\n and reverts the state of any more deeply nested effects.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "oneOf",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e [n b] -\u003e n b",
          "source": "src/Control-Effects-Parser.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Tries each action from the given list in turn stopping with the first one which successfully parses the input parse failure in the action or the continuation results in backtracking to the original location in the input and reverts the state of any more deeply nested effects",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "oneOf",
          "normalized": "Effect(Parser a b c)b-\u003e[d e]-\u003ed e",
          "package": "effects-parser",
          "partial": "Of",
          "signature": "Effect(Parser c m a)m-\u003e[n b]-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a Handler to parse input from the given list of items.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parse",
          "package": "effects-parser",
          "signature": "[c] -\u003e Handler (Parser c m a) (Maybe a) m a",
          "source": "src/Control-Effects-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Generates Handler to parse input from the given list of items",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parse",
          "normalized": "[a]-\u003eHandler(Parser a b c)(Maybe c)b c",
          "package": "effects-parser",
          "signature": "[c]-\u003eHandler(Parser c m a)(Maybe a)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser which succeeds only when there is no more input.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseEnd",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n ()",
          "source": "src/Control-Effects-Parser.html#parseEnd",
          "type": "function"
        },
        "index": {
          "description": "parser which succeeds only when there is no more input",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseEnd",
          "normalized": "Effect(Parser a b c)b-\u003ed()",
          "package": "effects-parser",
          "partial": "End",
          "signature": "Effect(Parser c m a)m-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser which always fails.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseFail",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b",
          "source": "src/Control-Effects-Parser.html#parseFail",
          "type": "function"
        },
        "index": {
          "description": "parser which always fails",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseFail",
          "normalized": "Effect(Parser a b c)b-\u003ed e",
          "package": "effects-parser",
          "partial": "Fail",
          "signature": "Effect(Parser c m a)m-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given parser zero or more times, and return a list of the results.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseMany",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
          "source": "src/Control-Effects-Parser.html#parseMany",
          "type": "function"
        },
        "index": {
          "description": "Apply the given parser zero or more times and return list of the results",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseMany",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
          "package": "effects-parser",
          "partial": "Many",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-greedy version of parseMany which matches as few times as possible. \n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseMany'",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
          "source": "src/Control-Effects-Parser.html#parseMany%27",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of parseMany which matches as few times as possible",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseMany'",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
          "package": "effects-parser",
          "partial": "Many'",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike parseMany, but fails if there isn't at least one match.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseMany1",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
          "source": "src/Control-Effects-Parser.html#parseMany1",
          "type": "function"
        },
        "index": {
          "description": "Like parseMany but fails if there isn at least one match",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseMany1",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
          "package": "effects-parser",
          "partial": "Many",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-greedy version of parseMany1 which matches as few times as possible (but at least once).\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseMany1'",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
          "source": "src/Control-Effects-Parser.html#parseMany1%27",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of parseMany1 which matches as few times as possible but at least once",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseMany1'",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
          "package": "effects-parser",
          "partial": "Many",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry the given parser; returns Just the result on success, or Nothing otherwise.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseOpt",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n (Maybe b)",
          "source": "src/Control-Effects-Parser.html#parseOpt",
          "type": "function"
        },
        "index": {
          "description": "Try the given parser returns Just the result on success or Nothing otherwise",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseOpt",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed(Maybe e)",
          "package": "effects-parser",
          "partial": "Opt",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-greedy version of parseOpt which prefers to match Nothing.\n\u003c/p\u003e",
          "module": "Control.Effects.Parser",
          "name": "parseOpt'",
          "package": "effects-parser",
          "signature": "Effect (Parser c m a) m -\u003e n b -\u003e n (Maybe b)",
          "source": "src/Control-Effects-Parser.html#parseOpt%27",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of parseOpt which prefers to match Nothing",
          "hierarchy": "Control Effects Parser",
          "module": "Control.Effects.Parser",
          "name": "parseOpt'",
          "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed(Maybe e)",
          "package": "effects-parser",
          "partial": "Opt'",
          "signature": "Effect(Parser c m a)m-\u003en b-\u003en(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseOpt-39-"
      }
    }
  ]
]