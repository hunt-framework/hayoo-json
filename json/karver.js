[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es are defined here, including the one used by the top\n level module \u003ca\u003eText.Karver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "module",
        "fct-source": "src/Text-Karver-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "All the Parser are defined here including the one used by the top level module Text.Karver",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "karver",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:conditionParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for if statements, that will result in the \u003ccode\u003e\u003ca\u003eConditionTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#conditionParser",
        "fct-type": "function",
        "title": "conditionParser"
      },
      "index": {
        "description": "Parser for if statements that will result in the ConditionTok",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "conditionParser",
        "normalized": "",
        "package": "karver",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:includeParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for includes, that will result in \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#includeParser",
        "fct-type": "function",
        "title": "includeParser"
      },
      "index": {
        "description": "Parser for includes that will result in IncludeTok",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "includeParser",
        "normalized": "",
        "package": "karver",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:literalParser",
      "description": {
        "fct-descr": "\u003cp\u003eTakes everything until it reaches a \u003ccode\u003e{\u003c/code\u003e, resulting in the \u003ccode\u003e\u003ca\u003eLiteralTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#literalParser",
        "fct-type": "function",
        "title": "literalParser"
      },
      "index": {
        "description": "Takes everything until it reaches resulting in the LiteralTok",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "literalParser",
        "normalized": "",
        "package": "karver",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:loopParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for for loops, that will result in the \u003ccode\u003e\u003ca\u003eLoopTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#loopParser",
        "fct-type": "function",
        "title": "loopParser"
      },
      "index": {
        "description": "Parser for for loops that will result in the LoopTok",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "loopParser",
        "normalized": "",
        "package": "karver",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:templateParser",
      "description": {
        "fct-descr": "\u003cp\u003eTop level \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e that will translate \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into [\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e]\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser [Token]",
        "fct-source": "src/Text-Karver-Parse.html#templateParser",
        "fct-type": "function",
        "title": "templateParser"
      },
      "index": {
        "description": "Top level Parser that will translate Text into Token",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "templateParser",
        "normalized": "Parser[Token]",
        "package": "karver",
        "partial": "Parser",
        "signature": "Parser[Token]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:variableParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for all the variable types. Returning on of the following\n \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eListTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eObjectTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#variableParser",
        "fct-type": "function",
        "title": "variableParser"
      },
      "index": {
        "description": "Parser for all the variable types Returning on of the following Token IncludeTok ListTok ObjectTok",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "variableParser",
        "normalized": "",
        "package": "karver",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:variableParser-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for all the variable types. Returning on of the following\n \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eListTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eObjectTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis is without the delimiter\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Parse",
        "fct-package": "karver",
        "fct-signature": "Parser Token",
        "fct-source": "src/Text-Karver-Parse.html#variableParser%27",
        "fct-type": "function",
        "title": "variableParser'"
      },
      "index": {
        "description": "Parser for all the variable types Returning on of the following Token IncludeTok ListTok ObjectTok This is without the delimiter",
        "hierarchy": "Text Karver Parse",
        "module": "Text.Karver.Parse",
        "name": "variableParser'",
        "normalized": "",
        "package": "karver",
        "partial": "Parser'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase types used throughout Karver.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "module",
        "fct-source": "src/Text-Karver-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Base types used throughout Karver",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "Types",
        "normalized": "",
        "package": "karver",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eWhen dealing with the syntax of karver, we first translate the given\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es for easier manipulation. Each \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e type is\n a representation of a certain type of data.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "data",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "When dealing with the syntax of karver we first translate the given Text into Token for easier manipulation Each Token type is representation of certain type of data",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "Token",
        "normalized": "",
        "package": "karver",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eFairly basic work around for using different types inside a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e type also make it possible for \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e to contain more than\n one type.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "data",
        "fct-source": "src/Text-Karver-Types.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "Fairly basic work around for using different types inside HashMap The Value type also make it possible for List to contain more than one type",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "Value",
        "normalized": "",
        "package": "karver",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ConditionTok",
      "description": {
        "fct-descr": "\u003cp\u003eIf statement token. The first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e will be the check if\n   a identity is available or not. Second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the body\n   of the if statement. And the third \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the else body\n   &#8212; if their isn't one, it will be empty.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "ConditionTok Text Text Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "ConditionTok"
      },
      "index": {
        "description": "If statement token The first Text will be the check if identity is available or not Second Text is the body of the if statement And the third Text is the else body if their isn one it will be empty",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "ConditionTok",
        "normalized": "",
        "package": "karver",
        "partial": "Condition Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:IdentityTok",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity token. This is for a regular variable with no\n   sign of it being an object or list. eg. {{ ident }}\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "IdentityTok Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "IdentityTok"
      },
      "index": {
        "description": "Identity token This is for regular variable with no sign of it being an object or list eg ident",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "IdentityTok",
        "normalized": "",
        "package": "karver",
        "partial": "Identity Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:IncludeTok",
      "description": {
        "fct-descr": "\u003cp\u003eInclude token. The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value store a file name, which\n   includes its relative path, based on the current working\n   directory.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "IncludeTok Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "IncludeTok"
      },
      "index": {
        "description": "Include token The Text value store file name which includes its relative path based on the current working directory",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "IncludeTok",
        "normalized": "",
        "package": "karver",
        "partial": "Include Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:List",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, that can hold all three \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n   &#8212; which isn't desirable, because their can be nested\n   \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "List (Vector Value)",
        "fct-source": "src/Text-Karver-Types.html#Value",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "An alias for Vector that can hold all three Value which isn desirable because their can be nested List",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "List",
        "normalized": "",
        "package": "karver",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ListTok",
      "description": {
        "fct-descr": "\u003cp\u003eList token. This is also similar to the \u003ccode\u003e\u003ca\u003eIdentityTok\u003c/a\u003e\u003c/code\u003e, but\n   if there is an opening square bracket, it gets place in\n   the second value. \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the list name, while \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is\n   the index. eg {{ ident[4] }}\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "ListTok Text Int",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "ListTok"
      },
      "index": {
        "description": "List token This is also similar to the IdentityTok but if there is an opening square bracket it gets place in the second value Text is the list name while Int is the index eg ident",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "ListTok",
        "normalized": "",
        "package": "karver",
        "partial": "List Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:Literal",
      "description": {
        "fct-descr": "\u003cp\u003eThe base value for the storing of variable.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "Literal Text",
        "fct-source": "src/Text-Karver-Types.html#Value",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "The base value for the storing of variable",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "Literal",
        "normalized": "",
        "package": "karver",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:LiteralTok",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral token. This is the default \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e that gets\n   matched only if it isn't any of the others.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "LiteralTok Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "LiteralTok"
      },
      "index": {
        "description": "Literal token This is the default Token that gets matched only if it isn any of the others",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "LiteralTok",
        "normalized": "",
        "package": "karver",
        "partial": "Literal Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:LoopTok",
      "description": {
        "fct-descr": "\u003cp\u003eFor loop token. The first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the list that will be\n   iterated over. Second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the variable name a single\n   element of the list will be placed into. Third \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is\n   the body of the loop that will be repeatedly translated\n   from.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "LoopTok Text Text Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "LoopTok"
      },
      "index": {
        "description": "For loop token The first Text is the list that will be iterated over Second Text is the variable name single element of the list will be placed into Third Text is the body of the loop that will be repeatedly translated from",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "LoopTok",
        "normalized": "",
        "package": "karver",
        "partial": "Loop Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:Object",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e, that will only hold \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with\n   \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e as a key as well.\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "Object (HashMap Text Text)",
        "fct-source": "src/Text-Karver-Types.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "An alias for HashMap that will only hold Text with Text as key as well",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "Object",
        "normalized": "",
        "package": "karver",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ObjectTok",
      "description": {
        "fct-descr": "\u003cp\u003eObject token. This is similar to \u003ccode\u003e\u003ca\u003eIdentityTok\u003c/a\u003e\u003c/code\u003e, but if\n   there is a dot, it gets placed in the second value. The\n   first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the object name, while the second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n   is the key to the object. eg. {{ ident.key }}\n\u003c/p\u003e",
        "fct-module": "Text.Karver.Types",
        "fct-package": "karver",
        "fct-signature": "ObjectTok Text Text",
        "fct-source": "src/Text-Karver-Types.html#Token",
        "fct-type": "function",
        "title": "ObjectTok"
      },
      "index": {
        "description": "Object token This is similar to IdentityTok but if there is dot it gets placed in the second value The first Text is the object name while the second Text is the key to the object eg ident.key",
        "hierarchy": "Text Karver Types",
        "module": "Text.Karver.Types",
        "name": "ObjectTok",
        "normalized": "",
        "package": "karver",
        "partial": "Object Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eText.Karver\u003c/a\u003e interface for translation \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from it's template\n syntax, to a generated value &#8212; based on the data that was given.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Karver",
        "fct-package": "karver",
        "fct-signature": "module",
        "fct-source": "src/Text-Karver.html",
        "fct-type": "module",
        "title": "Karver"
      },
      "index": {
        "description": "The Text.Karver interface for translation Text from it template syntax to generated value based on the data that was given",
        "hierarchy": "Text Karver",
        "module": "Text.Karver",
        "name": "Karver",
        "normalized": "",
        "package": "karver",
        "partial": "Karver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#v:renderTemplate",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template\n\u003c/p\u003e",
        "fct-module": "Text.Karver",
        "fct-package": "karver",
        "fct-signature": "HashMap Text Value-\u003e Text-\u003e Text",
        "fct-type": "function",
        "title": "renderTemplate"
      },
      "index": {
        "description": "Renders template",
        "hierarchy": "Text Karver",
        "module": "Text.Karver",
        "name": "renderTemplate",
        "normalized": "HashMap Text Value-\u003eText-\u003eText",
        "package": "karver",
        "partial": "Template",
        "signature": "HashMap Text Value-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#v:renderTemplate-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to renderTemplate, only it takes JSON \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e instead of\n a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Karver",
        "fct-package": "karver",
        "fct-signature": "Text-\u003e Text-\u003e Text",
        "fct-type": "function",
        "title": "renderTemplate'"
      },
      "index": {
        "description": "Similar to renderTemplate only it takes JSON Text instead of HashMap",
        "hierarchy": "Text Karver",
        "module": "Text.Karver",
        "name": "renderTemplate'",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "karver",
        "partial": "Template'",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  }
]