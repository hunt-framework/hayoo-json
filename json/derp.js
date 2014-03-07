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
        "word": "derp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "Derp",
          "package": "derp",
          "source": "src/Text-Derp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "Derp",
          "package": "derp",
          "partial": "Derp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents both a formal context-free language and the\n   reduction of a member of that language to a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "Parser",
          "package": "derp",
          "source": "src/Text-Derp.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Represents both formal context-free language and the reduction of member of that language to value of type",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "Parser",
          "package": "derp",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "Token",
          "package": "derp",
          "source": "src/Text-Derp.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "Token",
          "package": "derp",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternation.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "(\u003c|\u003e)",
          "package": "derp",
          "signature": "Parser t a -\u003e Parser t a -\u003e Parser t a",
          "source": "src/Text-Derp.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Alternation",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Parser a b-\u003eParser a b-\u003eParser a b",
          "package": "derp",
          "signature": "Parser t a-\u003eParser t a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "(\u003c~\u003e)",
          "package": "derp",
          "signature": "Parser t a -\u003e Parser t b -\u003e Parser t (a, b)",
          "source": "src/Text-Derp.html#%3C~%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenation",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "(\u003c~\u003e) \u003c~\u003e",
          "normalized": "Parser a b-\u003eParser a c-\u003eParser a(b,c)",
          "package": "derp",
          "signature": "Parser t a-\u003eParser t b-\u003eParser t(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:-60--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduction.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "(==\u003e)",
          "package": "derp",
          "signature": "Parser t a -\u003e (a -\u003e b) -\u003e Parser t b",
          "source": "src/Text-Derp.html#%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Reduction",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "(==\u003e) ==\u003e",
          "normalized": "Parser a b-\u003e(b-\u003ec)-\u003eParser a c",
          "package": "derp",
          "signature": "Parser t a-\u003e(a-\u003eb)-\u003eParser t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "Token",
          "package": "derp",
          "signature": "Token",
          "source": "src/Text-Derp.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "Token",
          "package": "derp",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "amb",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#amb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "amb",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:amb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "ambIn",
          "package": "derp",
          "signature": "[Token String]",
          "source": "src/Text-Derp.html#ambIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "ambIn",
          "normalized": "[Token String]",
          "package": "derp",
          "partial": "In",
          "signature": "[Token String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:ambIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe optimization step of the algorithm.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "compact",
          "package": "derp",
          "signature": "Parser t a -\u003e Parser t a",
          "source": "src/Text-Derp.html#compact",
          "type": "function"
        },
        "index": {
          "description": "The optimization step of the algorithm",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "compact",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "derp",
          "signature": "Parser t a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specified number of compactions.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "compactNum",
          "package": "derp",
          "signature": "Int -\u003e Parser t a -\u003e Parser t a",
          "source": "src/Text-Derp.html#compactNum",
          "type": "function"
        },
        "index": {
          "description": "specified number of compactions",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "compactNum",
          "normalized": "Int-\u003eParser a b-\u003eParser a b",
          "package": "derp",
          "partial": "Num",
          "signature": "Int-\u003eParser t a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:compactNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of compact steps that usually keeps a parser constant in size\n   while parsing.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "defaultCompactSteps",
          "package": "derp",
          "signature": "Int",
          "source": "src/Text-Derp.html#defaultCompactSteps",
          "type": "function"
        },
        "index": {
          "description": "The number of compact steps that usually keeps parser constant in size while parsing",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "defaultCompactSteps",
          "package": "derp",
          "partial": "Compact Steps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:defaultCompactSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main derivative function.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "derive",
          "package": "derp",
          "signature": "Parser t a -\u003e Token t -\u003e Parser t a",
          "source": "src/Text-Derp.html#derive",
          "type": "function"
        },
        "index": {
          "description": "The main derivative function",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "derive",
          "normalized": "Parser a b-\u003eToken a-\u003eParser a b",
          "package": "derp",
          "signature": "Parser t a-\u003eToken t-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:derive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerivation followed by the default number of compactions.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "deriveStep",
          "package": "derp",
          "signature": "Parser t a -\u003e Token t -\u003e Parser t a",
          "source": "src/Text-Derp.html#deriveStep",
          "type": "function"
        },
        "index": {
          "description": "Derivation followed by the default number of compactions",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "deriveStep",
          "normalized": "Parser a b-\u003eToken a-\u003eParser a b",
          "package": "derp",
          "partial": "Step",
          "signature": "Parser t a-\u003eToken t-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:deriveStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerivation followed by a specified number of compactions.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "deriveStepNum",
          "package": "derp",
          "signature": "Int -\u003e Parser t a -\u003e Token t -\u003e Parser t a",
          "source": "src/Text-Derp.html#deriveStepNum",
          "type": "function"
        },
        "index": {
          "description": "Derivation followed by specified number of compactions",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "deriveStepNum",
          "normalized": "Int-\u003eParser a b-\u003eToken a-\u003eParser a b",
          "package": "derp",
          "partial": "Step Num",
          "signature": "Int-\u003eParser t a-\u003eToken t-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:deriveStepNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty language.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "emp",
          "package": "derp",
          "signature": "Parser t a",
          "source": "src/Text-Derp.html#emp",
          "type": "function"
        },
        "index": {
          "description": "The empty language",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "emp",
          "package": "derp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:emp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEpsilon/empty-string.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "eps",
          "package": "derp",
          "signature": "a -\u003e Parser t a",
          "source": "src/Text-Derp.html#eps",
          "type": "function"
        },
        "index": {
          "description": "Epsilon empty-string",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "eps",
          "normalized": "a-\u003eParser b a",
          "package": "derp",
          "signature": "a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNull-parse extraction.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "nul",
          "package": "derp",
          "signature": "Parser t a -\u003e Parser t a",
          "source": "src/Text-Derp.html#nul",
          "type": "function"
        },
        "index": {
          "description": "Null-parse extraction",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "nul",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "derp",
          "signature": "Parser t a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:nul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "parens",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#parens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "parens",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "parensIn",
          "package": "derp",
          "signature": "[Token String]",
          "source": "src/Text-Derp.html#parensIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "parensIn",
          "normalized": "[Token String]",
          "package": "derp",
          "partial": "In",
          "signature": "[Token String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:parensIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the parse-null set of a parser.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "parseNull",
          "package": "derp",
          "signature": "Parser t a -\u003e Set a",
          "source": "src/Text-Derp.html#parseNull",
          "type": "function"
        },
        "index": {
          "description": "Extract the parse-null set of parser",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "parseNull",
          "normalized": "Parser a b-\u003eSet b",
          "package": "derp",
          "partial": "Null",
          "signature": "Parser t a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:parseNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse using the default number of intermediate compactions.  This is the\n   main parsing function.  Examples:\n\u003c/p\u003e\u003cpre\u003e let e =     ter \"num\"\n         \u003c|\u003e e \u003c~\u003e ter \"+\" \u003c~\u003e e ==\u003e (\\(x1,(o,x2)) -\u003e \"(\" ++ x1 ++ o ++ x2 ++ \")\")\n in runParse e [Token \"num\" \"1\", Token \"+\" \"+\", Token \"num\" 3\", Token \"+\" \"+\", Token \"num\" \"5\"]\n\u003c/pre\u003e\u003cp\u003eevaluates to:\n\u003c/p\u003e\u003cpre\u003e Set.fromList [\"((1+3)+5)\", \"(1+(3+5))\"]\n\u003c/pre\u003e\u003cpre\u003e let e =     ter \"num\" ==\u003e read \n         \u003c|\u003e e \u003c~\u003e ter \"+\" \u003c~\u003e e ==\u003e (\\(x1,(_,x2)) -\u003e x1 + x2)\n in runParse e [Token \"num\" \"1\", Token \"+\" \"+\", Token \"num\" 3\", Token \"+\" \"+\", Token \"num\" \"5\"]\n\u003c/pre\u003e\u003cp\u003eevaluates to:\n\u003c/p\u003e\u003cpre\u003e Set.fromList [9]\n\u003c/pre\u003e",
          "module": "Text.Derp",
          "name": "runParse",
          "package": "derp",
          "signature": "Parser t a -\u003e [Token t] -\u003e Set a",
          "source": "src/Text-Derp.html#runParse",
          "type": "function"
        },
        "index": {
          "description": "Parse using the default number of intermediate compactions This is the main parsing function Examples let ter num ter x1 x2 x1 x2 in runParse Token num Token Token num Token Token num evaluates to Set.fromList let ter num read ter x1 x2 x1 x2 in runParse Token num Token Token num Token Token num evaluates to Set.fromList",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParse",
          "normalized": "Parser a b-\u003e[Token a]-\u003eSet b",
          "package": "derp",
          "partial": "Parse",
          "signature": "Parser t a-\u003e[Token t]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "runParseLongestMatch",
          "package": "derp",
          "signature": "Parser t a -\u003e [Token t] -\u003e Maybe (Int, Set a, [Token t])",
          "source": "src/Text-Derp.html#runParseLongestMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParseLongestMatch",
          "normalized": "Parser a b-\u003e[Token a]-\u003eMaybe(Int,Set b,[Token a])",
          "package": "derp",
          "partial": "Parse Longest Match",
          "signature": "Parser t a-\u003e[Token t]-\u003eMaybe(Int,Set a,[Token t])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParseLongestMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "runParseLongestMatchNum",
          "package": "derp",
          "signature": "Int -\u003e Parser t a -\u003e [Token t] -\u003e Maybe (Int, Set a, [Token t])",
          "source": "src/Text-Derp.html#runParseLongestMatchNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParseLongestMatchNum",
          "normalized": "Int-\u003eParser a b-\u003e[Token a]-\u003eMaybe(Int,Set b,[Token a])",
          "package": "derp",
          "partial": "Parse Longest Match Num",
          "signature": "Int-\u003eParser t a-\u003e[Token t]-\u003eMaybe(Int,Set a,[Token t])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParseLongestMatchNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse using a specified number of intermediate compactions.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "runParseNum",
          "package": "derp",
          "signature": "Int -\u003e Parser t a -\u003e [Token t] -\u003e Set a",
          "source": "src/Text-Derp.html#runParseNum",
          "type": "function"
        },
        "index": {
          "description": "Parse using specified number of intermediate compactions",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParseNum",
          "normalized": "Int-\u003eParser a b-\u003e[Token a]-\u003eSet b",
          "package": "derp",
          "partial": "Parse Num",
          "signature": "Int-\u003eParser t a-\u003e[Token t]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParseNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "runParseStages",
          "package": "derp",
          "signature": "Parser t a -\u003e [Token t] -\u003e [(Parser t a, Set a, [Token t])]",
          "source": "src/Text-Derp.html#runParseStages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParseStages",
          "normalized": "Parser a b-\u003e[Token a]-\u003e[(Parser a b,Set b,[Token a])]",
          "package": "derp",
          "partial": "Parse Stages",
          "signature": "Parser t a-\u003e[Token t]-\u003e[(Parser t a,Set a,[Token t])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParseStages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "runParseStagesNum",
          "package": "derp",
          "signature": "Int -\u003e Parser t a -\u003e [Token t] -\u003e [(Parser t a, Set a, [Token t])]",
          "source": "src/Text-Derp.html#runParseStagesNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "runParseStagesNum",
          "normalized": "Int-\u003eParser a b-\u003e[Token a]-\u003e[(Parser a b,Set b,[Token a])]",
          "package": "derp",
          "partial": "Parse Stages Num",
          "signature": "Int-\u003eParser t a-\u003e[Token t]-\u003e[(Parser t a,Set a,[Token t])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:runParseStagesNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "sexp",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#sexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "sexp",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:sexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "sexpIn",
          "package": "derp",
          "signature": "[Token String]",
          "source": "src/Text-Derp.html#sexpIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "sexpIn",
          "normalized": "[Token String]",
          "package": "derp",
          "partial": "In",
          "signature": "[Token String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:sexpIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "someStuff",
          "package": "derp",
          "signature": "[Token String]",
          "source": "src/Text-Derp.html#someStuff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "someStuff",
          "normalized": "[Token String]",
          "package": "derp",
          "partial": "Stuff",
          "signature": "[Token String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:someStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "someStuffG",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#someStuffG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "someStuffG",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "partial": "Stuff",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:someStuffG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal.\n\u003c/p\u003e",
          "module": "Text.Derp",
          "name": "ter",
          "package": "derp",
          "signature": "t -\u003e Parser t String",
          "source": "src/Text-Derp.html#ter",
          "type": "function"
        },
        "index": {
          "description": "Terminal",
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "ter",
          "normalized": "a-\u003eParser a String",
          "package": "derp",
          "signature": "t-\u003eParser t String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:ter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "tokenClass",
          "package": "derp",
          "signature": "t",
          "source": "src/Text-Derp.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "tokenClass",
          "package": "derp",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:tokenClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "tokenValue",
          "package": "derp",
          "signature": "String",
          "source": "src/Text-Derp.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "tokenValue",
          "package": "derp",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:tokenValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "xsIn",
          "package": "derp",
          "signature": "[Token String]",
          "source": "src/Text-Derp.html#xsIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "xsIn",
          "normalized": "[Token String]",
          "package": "derp",
          "partial": "In",
          "signature": "[Token String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:xsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "xsL",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#xsL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "xsL",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:xsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Derp",
          "name": "xsR",
          "package": "derp",
          "signature": "() -\u003e Parser String String",
          "source": "src/Text-Derp.html#xsR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Derp",
          "module": "Text.Derp",
          "name": "xsR",
          "normalized": "()-\u003eParser String String",
          "package": "derp",
          "signature": "()-\u003eParser String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derp/docs/Text-Derp.html#v:xsR"
      }
    }
  ]
]