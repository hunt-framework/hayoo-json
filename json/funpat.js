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
        "word": "funpat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e instances for built-in Haskell types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.FunPat.Instances",
          "name": "Instances",
          "package": "funpat",
          "source": "src/Language-FunPat-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Matchable instances for built-in Haskell types",
          "hierarchy": "Language FunPat Instances",
          "module": "Language.FunPat.Instances",
          "name": "Instances",
          "package": "funpat",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Interface",
          "name": "Interface",
          "package": "funpat",
          "source": "src/Language-FunPat-Interface.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language FunPat Interface",
          "module": "Language.FunPat.Interface",
          "name": "Interface",
          "package": "funpat",
          "partial": "Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyntactic sugar to compose \u003ccode\u003e(pattern,result)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Language.FunPat.Interface",
          "name": "(~\u003e)",
          "package": "funpat",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Language-FunPat-Interface.html#~%3E",
          "type": "function"
        },
        "index": {
          "description": "Syntactic sugar to compose pattern result pairs",
          "hierarchy": "Language FunPat Interface",
          "module": "Language.FunPat.Interface",
          "name": "(~\u003e) ~\u003e",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "funpat",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a value with cases.\n\u003c/p\u003e",
          "module": "Language.FunPat.Interface",
          "name": "match",
          "package": "funpat",
          "signature": "pat -\u003e State [SomeCase (pat, res)] () -\u003e res",
          "source": "src/Language-FunPat-Interface.html#match",
          "type": "function"
        },
        "index": {
          "description": "Matches value with cases",
          "hierarchy": "Language FunPat Interface",
          "module": "Language.FunPat.Interface",
          "name": "match",
          "normalized": "a-\u003eState[SomeCase(a,b)]()-\u003eb",
          "package": "funpat",
          "signature": "pat-\u003eState[SomeCase(pat,res)]()-\u003eres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates one \u003cem\u003ecase\u003c/em\u003e of the match.\n\u003c/p\u003e",
          "module": "Language.FunPat.Interface",
          "name": "with",
          "package": "funpat",
          "signature": "a -\u003e State [SomeCase (PatternType a, ResultType a)] ()",
          "source": "src/Language-FunPat-Interface.html#with",
          "type": "function"
        },
        "index": {
          "description": "Creates one case of the match",
          "hierarchy": "Language FunPat Interface",
          "module": "Language.FunPat.Interface",
          "name": "with",
          "normalized": "a-\u003eState[SomeCase(PatternType a,ResultType a)]()",
          "package": "funpat",
          "signature": "a-\u003eState[SomeCase(PatternType a,ResultType a)]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "Match",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Match",
          "package": "funpat",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCase\u003c/code\u003e instances are allowed to form cases of a pattern match. (Normally, there is no need to implement more instances of this class.)\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "Case",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html#Case",
          "type": "class"
        },
        "index": {
          "description": "Case instances are allowed to form cases of pattern match Normally there is no need to implement more instances of this class",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Case",
          "package": "funpat",
          "partial": "Case",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type to be used in \u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "Match",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html#Match",
          "type": "data"
        },
        "index": {
          "description": "data type to be used in Matchable instances",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Match",
          "package": "funpat",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e data types can be used in patterns.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "Matchable",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html#Matchable",
          "type": "class"
        },
        "index": {
          "description": "Matchable data types can be used in patterns",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Matchable",
          "package": "funpat",
          "partial": "Matchable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Matchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "Param",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html#Param",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Param",
          "package": "funpat",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "SomeCase",
          "package": "funpat",
          "source": "src/Language-FunPat-Match.html#SomeCase",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "SomeCase",
          "package": "funpat",
          "partial": "Some Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:SomeCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conditions of a match. In most cases, this is the only function in this class to implement.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003eNothing\u003c/code\u003e, there is no match.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003eJust [x :=: x', y :=: y', ... ]\u003c/code\u003e, condition of the match is\n that \u003ccode\u003ex\u003c/code\u003e matches \u003ccode\u003ex'\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e matches \u003ccode\u003ey'\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "(.=.)",
          "package": "funpat",
          "signature": "a -\u003e a -\u003e Maybe [Match]",
          "source": "src/Language-FunPat-Match.html#.%3D.",
          "type": "method"
        },
        "index": {
          "description": "The conditions of match In most cases this is the only function in this class to implement If the result is Nothing there is no match If the result is Just condition of the match is that matches matches etc",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "(.=.) .=.",
          "normalized": "a-\u003ea-\u003eMaybe[Match]",
          "package": "funpat",
          "signature": "a-\u003ea-\u003eMaybe[Match]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:.-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": ":=:",
          "package": "funpat",
          "signature": "a -\u003e a -\u003e Match",
          "source": "src/Language-FunPat-Match.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": ":=:",
          "normalized": "a-\u003ea-\u003eMatch",
          "package": "funpat",
          "signature": "a-\u003ea-\u003eMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "Param",
          "package": "funpat",
          "signature": "Param",
          "source": "src/Language-FunPat-Match.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "Param",
          "package": "funpat",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "SomeCase",
          "package": "funpat",
          "signature": "a -\u003e SomeCase (PatternType a, ResultType a)",
          "source": "src/Language-FunPat-Match.html#SomeCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "SomeCase",
          "normalized": "a-\u003eSomeCase(PatternType a,ResultType a)",
          "package": "funpat",
          "partial": "Some Case",
          "signature": "a-\u003eSomeCase(PatternType a,ResultType a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:SomeCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "continue",
          "package": "funpat",
          "signature": "PatternType t -\u003e t -\u003e p -\u003e Maybe [p]",
          "source": "src/Language-FunPat-Match.html#continue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "continue",
          "normalized": "PatternType a-\u003ea-\u003eb-\u003eMaybe[b]",
          "package": "funpat",
          "signature": "PatternType t-\u003et-\u003ep-\u003eMaybe[p]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "fromParam",
          "package": "funpat",
          "signature": "Bool",
          "source": "src/Language-FunPat-Match.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "fromParam",
          "package": "funpat",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:fromParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the argument is an extra value created by \u003ccode\u003e\u003ca\u003emakeParam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default implementation evaluates the argument and catches the\n exception thrown.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "isParam",
          "package": "funpat",
          "signature": "a -\u003e Maybe Bool",
          "source": "src/Language-FunPat-Match.html#isParam",
          "type": "method"
        },
        "index": {
          "description": "Checks if the argument is an extra value created by makeParam The default implementation evaluates the argument and catches the exception thrown",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "isParam",
          "normalized": "a-\u003eMaybe Bool",
          "package": "funpat",
          "partial": "Param",
          "signature": "a-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:isParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an extra value of type \u003ccode\u003ea\u003c/code\u003e with a \u003ccode\u003eBool\u003c/code\u003e inside.\n\u003c/p\u003e\u003cp\u003eThe default implementation throws an exception.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "makeParam",
          "package": "funpat",
          "signature": "Bool -\u003e a",
          "source": "src/Language-FunPat-Match.html#makeParam",
          "type": "method"
        },
        "index": {
          "description": "Creates an extra value of type with Bool inside The default implementation throws an exception",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "makeParam",
          "normalized": "Bool-\u003ea",
          "package": "funpat",
          "partial": "Param",
          "signature": "Bool-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:makeParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "matchCase",
          "package": "funpat",
          "signature": "PatternType t -\u003e t -\u003e Maybe (ResultType t)",
          "source": "src/Language-FunPat-Match.html#matchCase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchCase",
          "normalized": "PatternType a-\u003ea-\u003eMaybe(ResultType a)",
          "package": "funpat",
          "partial": "Case",
          "signature": "PatternType t-\u003et-\u003eMaybe(ResultType t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses multiple cases.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "matchCases",
          "package": "funpat",
          "signature": "pat -\u003e [SomeCase (pat, res)] -\u003e res",
          "source": "src/Language-FunPat-Match.html#matchCases",
          "type": "function"
        },
        "index": {
          "description": "Processes multiple cases",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchCases",
          "normalized": "a-\u003e[SomeCase(a,b)]-\u003eb",
          "package": "funpat",
          "partial": "Cases",
          "signature": "pat-\u003e[SomeCase(pat,res)]-\u003eres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchCases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "matchError",
          "package": "funpat",
          "signature": "String -\u003e a",
          "source": "src/Language-FunPat-Match.html#matchError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchError",
          "normalized": "String-\u003ea",
          "package": "funpat",
          "partial": "Error",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "matchFold",
          "package": "funpat",
          "signature": "p -\u003e [Match] -\u003e Maybe [p]",
          "source": "src/Language-FunPat-Match.html#matchFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchFold",
          "normalized": "a-\u003e[Match]-\u003eMaybe[a]",
          "package": "funpat",
          "partial": "Fold",
          "signature": "p-\u003e[Match]-\u003eMaybe[p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "matchHelp",
          "package": "funpat",
          "signature": "Match -\u003e p -\u003e Maybe [p]",
          "source": "src/Language-FunPat-Match.html#matchHelp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchHelp",
          "normalized": "Match-\u003ea-\u003eMaybe[a]",
          "package": "funpat",
          "partial": "Help",
          "signature": "Match-\u003ep-\u003eMaybe[p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses one case.\n\u003c/p\u003e",
          "module": "Language.FunPat.Match",
          "name": "matchSomeCase",
          "package": "funpat",
          "signature": "pat -\u003e SomeCase (pat, res) -\u003e Maybe res",
          "source": "src/Language-FunPat-Match.html#matchSomeCase",
          "type": "function"
        },
        "index": {
          "description": "Processes one case",
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "matchSomeCase",
          "normalized": "a-\u003eSomeCase(a,b)-\u003eMaybe b",
          "package": "funpat",
          "partial": "Some Case",
          "signature": "pat-\u003eSomeCase(pat,res)-\u003eMaybe res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchSomeCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "nonlinear",
          "package": "funpat",
          "signature": "String",
          "source": "src/Language-FunPat-Match.html#nonlinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "nonlinear",
          "package": "funpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:nonlinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "nonparametric",
          "package": "funpat",
          "signature": "String",
          "source": "src/Language-FunPat-Match.html#nonparametric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "nonparametric",
          "package": "funpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:nonparametric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "package",
          "package": "funpat",
          "signature": "String",
          "source": "src/Language-FunPat-Match.html#package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "package",
          "package": "funpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "start",
          "package": "funpat",
          "signature": "PatternType t -\u003e t -\u003e Maybe (ParameterType t)",
          "source": "src/Language-FunPat-Match.html#start",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "start",
          "normalized": "PatternType a-\u003ea-\u003eMaybe(ParameterType a)",
          "package": "funpat",
          "signature": "PatternType t-\u003et-\u003eMaybe(ParameterType t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat.Match",
          "name": "unbound",
          "package": "funpat",
          "signature": "String",
          "source": "src/Language-FunPat-Match.html#unbound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FunPat Match",
          "module": "Language.FunPat.Match",
          "name": "unbound",
          "package": "funpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:unbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FunPat",
          "name": "FunPat",
          "package": "funpat",
          "source": "src/Language-FunPat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language FunPat",
          "module": "Language.FunPat",
          "name": "FunPat",
          "package": "funpat",
          "partial": "Fun Pat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat.html#"
      }
    }
  ]
]