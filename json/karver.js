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
        "word": "karver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es are defined here, including the one used by the top\n level module \u003ca\u003eText.Karver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Karver.Parse",
          "name": "Parse",
          "package": "karver",
          "source": "src/Text-Karver-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "All the Parser are defined here including the one used by the top level module Text.Karver",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "Parse",
          "package": "karver",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for if statements, that will result in the \u003ccode\u003e\u003ca\u003eConditionTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "conditionParser",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#conditionParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for if statements that will result in the ConditionTok",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "conditionParser",
          "package": "karver",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:conditionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for includes, that will result in \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "includeParser",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#includeParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for includes that will result in IncludeTok",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "includeParser",
          "package": "karver",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:includeParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes everything until it reaches a \u003ccode\u003e{\u003c/code\u003e, resulting in the \u003ccode\u003e\u003ca\u003eLiteralTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "literalParser",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#literalParser",
          "type": "function"
        },
        "index": {
          "description": "Takes everything until it reaches resulting in the LiteralTok",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "literalParser",
          "package": "karver",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:literalParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for for loops, that will result in the \u003ccode\u003e\u003ca\u003eLoopTok\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "loopParser",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#loopParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for for loops that will result in the LoopTok",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "loopParser",
          "package": "karver",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:loopParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop level \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e that will translate \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into [\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e]\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "templateParser",
          "package": "karver",
          "signature": "Parser [Token]",
          "source": "src/Text-Karver-Parse.html#templateParser",
          "type": "function"
        },
        "index": {
          "description": "Top level Parser that will translate Text into Token",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "templateParser",
          "normalized": "Parser[Token]",
          "package": "karver",
          "partial": "Parser",
          "signature": "Parser[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:templateParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for all the variable types. Returning on of the following\n \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eListTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eObjectTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Karver.Parse",
          "name": "variableParser",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#variableParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for all the variable types Returning on of the following Token IncludeTok ListTok ObjectTok",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "variableParser",
          "package": "karver",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:variableParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for all the variable types. Returning on of the following\n \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIncludeTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eListTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eObjectTok\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis is without the delimiter\n\u003c/p\u003e",
          "module": "Text.Karver.Parse",
          "name": "variableParser'",
          "package": "karver",
          "signature": "Parser Token",
          "source": "src/Text-Karver-Parse.html#variableParser%27",
          "type": "function"
        },
        "index": {
          "description": "Parser for all the variable types Returning on of the following Token IncludeTok ListTok ObjectTok This is without the delimiter",
          "hierarchy": "Text Karver Parse",
          "module": "Text.Karver.Parse",
          "name": "variableParser'",
          "package": "karver",
          "partial": "Parser'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Parse.html#v:variableParser-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase types used throughout Karver.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Karver.Types",
          "name": "Types",
          "package": "karver",
          "source": "src/Text-Karver-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Base types used throughout Karver",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "Types",
          "package": "karver",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen dealing with the syntax of karver, we first translate the given\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es for easier manipulation. Each \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e type is\n a representation of a certain type of data.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "Token",
          "package": "karver",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "data"
        },
        "index": {
          "description": "When dealing with the syntax of karver we first translate the given Text into Token for easier manipulation Each Token type is representation of certain type of data",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "Token",
          "package": "karver",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFairly basic work around for using different types inside a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e type also make it possible for \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e to contain more than\n one type.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "Value",
          "package": "karver",
          "source": "src/Text-Karver-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "Fairly basic work around for using different types inside HashMap The Value type also make it possible for List to contain more than one type",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "Value",
          "package": "karver",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf statement token. The first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e will be the check if\n   a identity is available or not. Second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the body\n   of the if statement. And the third \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the else body\n   &#8212; if their isn't one, it will be empty.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "ConditionTok",
          "package": "karver",
          "signature": "ConditionTok Text Text Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "If statement token The first Text will be the check if identity is available or not Second Text is the body of the if statement And the third Text is the else body if their isn one it will be empty",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "ConditionTok",
          "package": "karver",
          "partial": "Condition Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ConditionTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity token. This is for a regular variable with no\n   sign of it being an object or list. eg. {{ ident }}\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "IdentityTok",
          "package": "karver",
          "signature": "IdentityTok Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Identity token This is for regular variable with no sign of it being an object or list eg ident",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "IdentityTok",
          "package": "karver",
          "partial": "Identity Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:IdentityTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude token. The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value store a file name, which\n   includes its relative path, based on the current working\n   directory.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "IncludeTok",
          "package": "karver",
          "signature": "IncludeTok Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Include token The Text value store file name which includes its relative path based on the current working directory",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "IncludeTok",
          "package": "karver",
          "partial": "Include Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:IncludeTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, that can hold all three \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n   &#8212; which isn't desirable, because their can be nested\n   \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "List",
          "package": "karver",
          "signature": "List (Vector Value)",
          "source": "src/Text-Karver-Types.html#Value",
          "type": "function"
        },
        "index": {
          "description": "An alias for Vector that can hold all three Value which isn desirable because their can be nested List",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "List",
          "package": "karver",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList token. This is also similar to the \u003ccode\u003e\u003ca\u003eIdentityTok\u003c/a\u003e\u003c/code\u003e, but\n   if there is an opening square bracket, it gets place in\n   the second value. \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the list name, while \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is\n   the index. eg {{ ident[4] }}\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "ListTok",
          "package": "karver",
          "signature": "ListTok Text Int",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "List token This is also similar to the IdentityTok but if there is an opening square bracket it gets place in the second value Text is the list name while Int is the index eg ident",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "ListTok",
          "package": "karver",
          "partial": "List Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ListTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base value for the storing of variable.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "Literal",
          "package": "karver",
          "signature": "Literal Text",
          "source": "src/Text-Karver-Types.html#Value",
          "type": "function"
        },
        "index": {
          "description": "The base value for the storing of variable",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "Literal",
          "package": "karver",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral token. This is the default \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e that gets\n   matched only if it isn't any of the others.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "LiteralTok",
          "package": "karver",
          "signature": "LiteralTok Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal token This is the default Token that gets matched only if it isn any of the others",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "LiteralTok",
          "package": "karver",
          "partial": "Literal Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:LiteralTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor loop token. The first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the list that will be\n   iterated over. Second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the variable name a single\n   element of the list will be placed into. Third \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is\n   the body of the loop that will be repeatedly translated\n   from.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "LoopTok",
          "package": "karver",
          "signature": "LoopTok Text Text Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "For loop token The first Text is the list that will be iterated over Second Text is the variable name single element of the list will be placed into Third Text is the body of the loop that will be repeatedly translated from",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "LoopTok",
          "package": "karver",
          "partial": "Loop Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:LoopTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e, that will only hold \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with\n   \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e as a key as well.\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "Object",
          "package": "karver",
          "signature": "Object (HashMap Text Text)",
          "source": "src/Text-Karver-Types.html#Value",
          "type": "function"
        },
        "index": {
          "description": "An alias for HashMap that will only hold Text with Text as key as well",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "Object",
          "package": "karver",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject token. This is similar to \u003ccode\u003e\u003ca\u003eIdentityTok\u003c/a\u003e\u003c/code\u003e, but if\n   there is a dot, it gets placed in the second value. The\n   first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the object name, while the second \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n   is the key to the object. eg. {{ ident.key }}\n\u003c/p\u003e",
          "module": "Text.Karver.Types",
          "name": "ObjectTok",
          "package": "karver",
          "signature": "ObjectTok Text Text",
          "source": "src/Text-Karver-Types.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Object token This is similar to IdentityTok but if there is dot it gets placed in the second value The first Text is the object name while the second Text is the key to the object eg ident.key",
          "hierarchy": "Text Karver Types",
          "module": "Text.Karver.Types",
          "name": "ObjectTok",
          "package": "karver",
          "partial": "Object Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver-Types.html#v:ObjectTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eText.Karver\u003c/a\u003e interface for translation \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from it's template\n syntax, to a generated value &#8212; based on the data that was given.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Karver",
          "name": "Karver",
          "package": "karver",
          "source": "src/Text-Karver.html",
          "type": "module"
        },
        "index": {
          "description": "The Text.Karver interface for translation Text from it template syntax to generated value based on the data that was given",
          "hierarchy": "Text Karver",
          "module": "Text.Karver",
          "name": "Karver",
          "package": "karver",
          "partial": "Karver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template\n\u003c/p\u003e",
          "module": "Text.Karver",
          "name": "renderTemplate",
          "package": "karver",
          "signature": "HashMap Text Value-\u003e Text-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "Renders template",
          "hierarchy": "Text Karver",
          "module": "Text.Karver",
          "name": "renderTemplate",
          "normalized": "HashMap Text Value-\u003eText-\u003eText",
          "package": "karver",
          "partial": "Template",
          "signature": "HashMap Text Value-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#v:renderTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to renderTemplate, only it takes JSON \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e instead of\n a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Karver",
          "name": "renderTemplate'",
          "package": "karver",
          "signature": "Text-\u003e Text-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "Similar to renderTemplate only it takes JSON Text instead of HashMap",
          "hierarchy": "Text Karver",
          "module": "Text.Karver",
          "name": "renderTemplate'",
          "normalized": "Text-\u003eText-\u003eText",
          "package": "karver",
          "partial": "Template'",
          "signature": "Text-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/karver/docs/Text-Karver.html#v:renderTemplate-39-"
      }
    }
  ]
]