[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#",
      "description": {
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "effects-parser",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:item",
      "description": {
        "fct-descr": "\u003cp\u003eReturns and consumes the next item from the input.\n Fails if there is no more input to be consumed.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n c",
        "fct-source": "src/Control-Effects-Parser.html#item",
        "fct-type": "function",
        "title": "item"
      },
      "index": {
        "description": "Returns and consumes the next item from the input Fails if there is no more input to be consumed",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "item",
        "normalized": "Effect(Parser a b c)b-\u003ed a",
        "package": "effects-parser",
        "partial": "",
        "signature": "Effect(Parser c m a)m-\u003en c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:itemIf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns and consumes the next item from the input, provided it satisfies a predicate.\n Fails if there is no more input, or if the predicate function evaluates to False.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e (c -\u003e Bool) -\u003e n c",
        "fct-source": "src/Control-Effects-Parser.html#itemIf",
        "fct-type": "function",
        "title": "itemIf"
      },
      "index": {
        "description": "Returns and consumes the next item from the input provided it satisfies predicate Fails if there is no more input or if the predicate function evaluates to False",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "itemIf",
        "normalized": "Effect(Parser a b c)b-\u003e(a-\u003eBool)-\u003ed a",
        "package": "effects-parser",
        "partial": "If",
        "signature": "Effect(Parser c m a)m-\u003e(c-\u003eBool)-\u003en c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:lookahead",
      "description": {
        "fct-descr": "\u003cp\u003eZero-width positive lookahead assertion. Runs the given action against the\n current input without consuming it. A parse failure in the action causes the\n lookahead to fail; otherwise, the result of the action is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n b",
        "fct-source": "src/Control-Effects-Parser.html#lookahead",
        "fct-type": "function",
        "title": "lookahead"
      },
      "index": {
        "description": "Zero-width positive lookahead assertion Runs the given action against the current input without consuming it parse failure in the action causes the lookahead to fail otherwise the result of the action is returned",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "lookahead",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed e",
        "package": "effects-parser",
        "partial": "",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:noBacktrack",
      "description": {
        "fct-descr": "\u003cp\u003ePrevents backtracking into the middle of the given action. This can be used to\n create actions which always consume as much or as little of the input as possible,\n even if that would cause a later match to fail. Note that backtracking is still\n possible within the action, or across the entire noBacktrack action.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e  noBacktrack p $ oneOf [return (), item p \u003e\u003e return ()]  -- never consumes any input\n  noBacktrack p $ parseMany p $ itemIf p (=='a')          -- always consumes all the 'a's\n\u003c/pre\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n b",
        "fct-source": "src/Control-Effects-Parser.html#noBacktrack",
        "fct-type": "function",
        "title": "noBacktrack"
      },
      "index": {
        "description": "Prevents backtracking into the middle of the given action This can be used to create actions which always consume as much or as little of the input as possible even if that would cause later match to fail Note that backtracking is still possible within the action or across the entire noBacktrack action Examples noBacktrack oneOf return item return never consumes any input noBacktrack parseMany itemIf always consumes all the",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "noBacktrack",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed e",
        "package": "effects-parser",
        "partial": "Backtrack",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:noMatch",
      "description": {
        "fct-descr": "\u003cp\u003eZero-width negative lookahead assertion. Runs the given action against the\n current input without consuming it. A parse failure in the action causes the\n lookahead to succeed; otherwise, the lookahead fails.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n ()",
        "fct-source": "src/Control-Effects-Parser.html#noMatch",
        "fct-type": "function",
        "title": "noMatch"
      },
      "index": {
        "description": "Zero-width negative lookahead assertion Runs the given action against the current input without consuming it parse failure in the action causes the lookahead to succeed otherwise the lookahead fails",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "noMatch",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed()",
        "package": "effects-parser",
        "partial": "Match",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:oneOf",
      "description": {
        "fct-descr": "\u003cp\u003eTries each action from the given list in turn, stopping with the first one\n which successfully parses the input. A parse failure in the action or the\n continuation results in backtracking to the original location in the input,\n and reverts the state of any more deeply nested effects.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e [n b] -\u003e n b",
        "fct-source": "src/Control-Effects-Parser.html#oneOf",
        "fct-type": "function",
        "title": "oneOf"
      },
      "index": {
        "description": "Tries each action from the given list in turn stopping with the first one which successfully parses the input parse failure in the action or the continuation results in backtracking to the original location in the input and reverts the state of any more deeply nested effects",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "oneOf",
        "normalized": "Effect(Parser a b c)b-\u003e[d e]-\u003ed e",
        "package": "effects-parser",
        "partial": "Of",
        "signature": "Effect(Parser c m a)m-\u003e[n b]-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a Handler to parse input from the given list of items.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "[c] -\u003e Handler (Parser c m a) (Maybe a) m a",
        "fct-source": "src/Control-Effects-Parser.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Generates Handler to parse input from the given list of items",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parse",
        "normalized": "[a]-\u003eHandler(Parser a b c)(Maybe c)b c",
        "package": "effects-parser",
        "partial": "",
        "signature": "[c]-\u003eHandler(Parser c m a)(Maybe a)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseEnd",
      "description": {
        "fct-descr": "\u003cp\u003eA parser which succeeds only when there is no more input.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n ()",
        "fct-source": "src/Control-Effects-Parser.html#parseEnd",
        "fct-type": "function",
        "title": "parseEnd"
      },
      "index": {
        "description": "parser which succeeds only when there is no more input",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseEnd",
        "normalized": "Effect(Parser a b c)b-\u003ed()",
        "package": "effects-parser",
        "partial": "End",
        "signature": "Effect(Parser c m a)m-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseFail",
      "description": {
        "fct-descr": "\u003cp\u003eA parser which always fails.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b",
        "fct-source": "src/Control-Effects-Parser.html#parseFail",
        "fct-type": "function",
        "title": "parseFail"
      },
      "index": {
        "description": "parser which always fails",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseFail",
        "normalized": "Effect(Parser a b c)b-\u003ed e",
        "package": "effects-parser",
        "partial": "Fail",
        "signature": "Effect(Parser c m a)m-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given parser zero or more times, and return a list of the results.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
        "fct-source": "src/Control-Effects-Parser.html#parseMany",
        "fct-type": "function",
        "title": "parseMany"
      },
      "index": {
        "description": "Apply the given parser zero or more times and return list of the results",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseMany",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
        "package": "effects-parser",
        "partial": "Many",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA non-greedy version of parseMany which matches as few times as possible. \n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
        "fct-source": "src/Control-Effects-Parser.html#parseMany%27",
        "fct-type": "function",
        "title": "parseMany'"
      },
      "index": {
        "description": "non-greedy version of parseMany which matches as few times as possible",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseMany'",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
        "package": "effects-parser",
        "partial": "Many'",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany1",
      "description": {
        "fct-descr": "\u003cp\u003eLike parseMany, but fails if there isn't at least one match.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
        "fct-source": "src/Control-Effects-Parser.html#parseMany1",
        "fct-type": "function",
        "title": "parseMany1"
      },
      "index": {
        "description": "Like parseMany but fails if there isn at least one match",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseMany1",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
        "package": "effects-parser",
        "partial": "Many",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseMany1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA non-greedy version of parseMany1 which matches as few times as possible (but at least once).\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n [b]",
        "fct-source": "src/Control-Effects-Parser.html#parseMany1%27",
        "fct-type": "function",
        "title": "parseMany1'"
      },
      "index": {
        "description": "non-greedy version of parseMany1 which matches as few times as possible but at least once",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseMany1'",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed[e]",
        "package": "effects-parser",
        "partial": "Many",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseOpt",
      "description": {
        "fct-descr": "\u003cp\u003eTry the given parser; returns Just the result on success, or Nothing otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n (Maybe b)",
        "fct-source": "src/Control-Effects-Parser.html#parseOpt",
        "fct-type": "function",
        "title": "parseOpt"
      },
      "index": {
        "description": "Try the given parser returns Just the result on success or Nothing otherwise",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseOpt",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed(Maybe e)",
        "package": "effects-parser",
        "partial": "Opt",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects-parser/docs/Control-Effects-Parser.html#v:parseOpt-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA non-greedy version of parseOpt which prefers to match Nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Effects.Parser",
        "fct-package": "effects-parser",
        "fct-signature": "Effect (Parser c m a) m -\u003e n b -\u003e n (Maybe b)",
        "fct-source": "src/Control-Effects-Parser.html#parseOpt%27",
        "fct-type": "function",
        "title": "parseOpt'"
      },
      "index": {
        "description": "non-greedy version of parseOpt which prefers to match Nothing",
        "hierarchy": "Control Effects Parser",
        "module": "Control.Effects.Parser",
        "name": "parseOpt'",
        "normalized": "Effect(Parser a b c)b-\u003ed e-\u003ed(Maybe e)",
        "package": "effects-parser",
        "partial": "Opt'",
        "signature": "Effect(Parser c m a)m-\u003en b-\u003en(Maybe b)"
      }
    }
  }
]