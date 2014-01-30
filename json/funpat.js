[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e instances for built-in Haskell types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.FunPat.Instances",
        "fct-package": "funpat",
        "fct-signature": "module",
        "fct-source": "src/Language-FunPat-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "This module provides Matchable instances for built-in Haskell types",
        "hierarchy": "Language FunPat Instances",
        "module": "Language.FunPat.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "funpat",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#",
      "description": {
        "fct-module": "Language.FunPat.Interface",
        "fct-package": "funpat",
        "fct-signature": "module",
        "fct-source": "src/Language-FunPat-Interface.html",
        "fct-type": "module",
        "title": "Interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Interface",
        "module": "Language.FunPat.Interface",
        "name": "Interface",
        "normalized": "",
        "package": "funpat",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSyntactic sugar to compose \u003ccode\u003e(pattern,result)\u003c/code\u003e pairs.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Interface",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e b -\u003e (a, b)",
        "fct-source": "src/Language-FunPat-Interface.html#~%3E",
        "fct-type": "function",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "Syntactic sugar to compose pattern result pairs",
        "hierarchy": "Language FunPat Interface",
        "module": "Language.FunPat.Interface",
        "name": "(~\u003e) ~\u003e",
        "normalized": "a-\u003eb-\u003e(a,b)",
        "package": "funpat",
        "partial": "",
        "signature": "a-\u003eb-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a value with cases.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Interface",
        "fct-package": "funpat",
        "fct-signature": "pat -\u003e State [SomeCase (pat, res)] () -\u003e res",
        "fct-source": "src/Language-FunPat-Interface.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Matches value with cases",
        "hierarchy": "Language FunPat Interface",
        "module": "Language.FunPat.Interface",
        "name": "match",
        "normalized": "a-\u003eState[SomeCase(a,b)]()-\u003eb",
        "package": "funpat",
        "partial": "",
        "signature": "pat-\u003eState[SomeCase(pat,res)]()-\u003eres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Interface.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eCreates one \u003cem\u003ecase\u003c/em\u003e of the match.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Interface",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e State [SomeCase (PatternType a, ResultType a)] ()",
        "fct-source": "src/Language-FunPat-Interface.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "Creates one case of the match",
        "hierarchy": "Language FunPat Interface",
        "module": "Language.FunPat.Interface",
        "name": "with",
        "normalized": "a-\u003eState[SomeCase(PatternType a,ResultType a)]()",
        "package": "funpat",
        "partial": "",
        "signature": "a-\u003eState[SomeCase(PatternType a,ResultType a)]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "module",
        "fct-source": "src/Language-FunPat-Match.html",
        "fct-type": "module",
        "title": "Match"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Match",
        "normalized": "",
        "package": "funpat",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Case",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCase\u003c/code\u003e instances are allowed to form cases of a pattern match. (Normally, there is no need to implement more instances of this class.)\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "class",
        "fct-source": "src/Language-FunPat-Match.html#Case",
        "fct-type": "class",
        "title": "Case"
      },
      "index": {
        "description": "Case instances are allowed to form cases of pattern match Normally there is no need to implement more instances of this class",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Case",
        "normalized": "",
        "package": "funpat",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Match",
      "description": {
        "fct-descr": "\u003cp\u003eA data type to be used in \u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "data",
        "fct-source": "src/Language-FunPat-Match.html#Match",
        "fct-type": "data",
        "title": "Match"
      },
      "index": {
        "description": "data type to be used in Matchable instances",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Match",
        "normalized": "",
        "package": "funpat",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Matchable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMatchable\u003c/a\u003e\u003c/code\u003e data types can be used in patterns.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "class",
        "fct-source": "src/Language-FunPat-Match.html#Matchable",
        "fct-type": "class",
        "title": "Matchable"
      },
      "index": {
        "description": "Matchable data types can be used in patterns",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Matchable",
        "normalized": "",
        "package": "funpat",
        "partial": "Matchable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:Param",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "data",
        "fct-source": "src/Language-FunPat-Match.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Param",
        "normalized": "",
        "package": "funpat",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#t:SomeCase",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "data",
        "fct-source": "src/Language-FunPat-Match.html#SomeCase",
        "fct-type": "data",
        "title": "SomeCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "SomeCase",
        "normalized": "",
        "package": "funpat",
        "partial": "Some Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:.-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eThe conditions of a match. In most cases, this is the only function in this class to implement.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003eNothing\u003c/code\u003e, there is no match.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003eJust [x :=: x', y :=: y', ... ]\u003c/code\u003e, condition of the match is\n that \u003ccode\u003ex\u003c/code\u003e matches \u003ccode\u003ex'\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e matches \u003ccode\u003ey'\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e a -\u003e Maybe [Match]",
        "fct-source": "src/Language-FunPat-Match.html#.%3D.",
        "fct-type": "method",
        "title": "(.=.)"
      },
      "index": {
        "description": "The conditions of match In most cases this is the only function in this class to implement If the result is Nothing there is no match If the result is Just condition of the match is that matches matches etc",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "(.=.) .=.",
        "normalized": "a-\u003ea-\u003eMaybe[Match]",
        "package": "funpat",
        "partial": "",
        "signature": "a-\u003ea-\u003eMaybe[Match]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v::-61-:",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e a -\u003e Match",
        "fct-source": "src/Language-FunPat-Match.html#Match",
        "fct-type": "function",
        "title": ":=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": ":=:",
        "normalized": "a-\u003ea-\u003eMatch",
        "package": "funpat",
        "partial": "",
        "signature": "a-\u003ea-\u003eMatch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:Param",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "Param",
        "fct-source": "src/Language-FunPat-Match.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "Param",
        "normalized": "",
        "package": "funpat",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:SomeCase",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e SomeCase (PatternType a, ResultType a)",
        "fct-source": "src/Language-FunPat-Match.html#SomeCase",
        "fct-type": "function",
        "title": "SomeCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "SomeCase",
        "normalized": "a-\u003eSomeCase(PatternType a,ResultType a)",
        "package": "funpat",
        "partial": "Some Case",
        "signature": "a-\u003eSomeCase(PatternType a,ResultType a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:continue",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "PatternType t -\u003e t -\u003e p -\u003e Maybe [p]",
        "fct-source": "src/Language-FunPat-Match.html#continue",
        "fct-type": "method",
        "title": "continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "continue",
        "normalized": "PatternType a-\u003ea-\u003eb-\u003eMaybe[b]",
        "package": "funpat",
        "partial": "",
        "signature": "PatternType t-\u003et-\u003ep-\u003eMaybe[p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:fromParam",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "Bool",
        "fct-source": "src/Language-FunPat-Match.html#Param",
        "fct-type": "function",
        "title": "fromParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "fromParam",
        "normalized": "",
        "package": "funpat",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:isParam",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if the argument is an extra value created by \u003ccode\u003e\u003ca\u003emakeParam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default implementation evaluates the argument and catches the\n exception thrown.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "a -\u003e Maybe Bool",
        "fct-source": "src/Language-FunPat-Match.html#isParam",
        "fct-type": "method",
        "title": "isParam"
      },
      "index": {
        "description": "Checks if the argument is an extra value created by makeParam The default implementation evaluates the argument and catches the exception thrown",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "isParam",
        "normalized": "a-\u003eMaybe Bool",
        "package": "funpat",
        "partial": "Param",
        "signature": "a-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:makeParam",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an extra value of type \u003ccode\u003ea\u003c/code\u003e with a \u003ccode\u003eBool\u003c/code\u003e inside.\n\u003c/p\u003e\u003cp\u003eThe default implementation throws an exception.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "Bool -\u003e a",
        "fct-source": "src/Language-FunPat-Match.html#makeParam",
        "fct-type": "method",
        "title": "makeParam"
      },
      "index": {
        "description": "Creates an extra value of type with Bool inside The default implementation throws an exception",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "makeParam",
        "normalized": "Bool-\u003ea",
        "package": "funpat",
        "partial": "Param",
        "signature": "Bool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchCase",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "PatternType t -\u003e t -\u003e Maybe (ResultType t)",
        "fct-source": "src/Language-FunPat-Match.html#matchCase",
        "fct-type": "method",
        "title": "matchCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchCase",
        "normalized": "PatternType a-\u003ea-\u003eMaybe(ResultType a)",
        "package": "funpat",
        "partial": "Case",
        "signature": "PatternType t-\u003et-\u003eMaybe(ResultType t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchCases",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses multiple cases.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "pat -\u003e [SomeCase (pat, res)] -\u003e res",
        "fct-source": "src/Language-FunPat-Match.html#matchCases",
        "fct-type": "function",
        "title": "matchCases"
      },
      "index": {
        "description": "Processes multiple cases",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchCases",
        "normalized": "a-\u003e[SomeCase(a,b)]-\u003eb",
        "package": "funpat",
        "partial": "Cases",
        "signature": "pat-\u003e[SomeCase(pat,res)]-\u003eres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchError",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Language-FunPat-Match.html#matchError",
        "fct-type": "function",
        "title": "matchError"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchError",
        "normalized": "String-\u003ea",
        "package": "funpat",
        "partial": "Error",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchFold",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "p -\u003e [Match] -\u003e Maybe [p]",
        "fct-source": "src/Language-FunPat-Match.html#matchFold",
        "fct-type": "function",
        "title": "matchFold"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchFold",
        "normalized": "a-\u003e[Match]-\u003eMaybe[a]",
        "package": "funpat",
        "partial": "Fold",
        "signature": "p-\u003e[Match]-\u003eMaybe[p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchHelp",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "Match -\u003e p -\u003e Maybe [p]",
        "fct-source": "src/Language-FunPat-Match.html#matchHelp",
        "fct-type": "function",
        "title": "matchHelp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchHelp",
        "normalized": "Match-\u003ea-\u003eMaybe[a]",
        "package": "funpat",
        "partial": "Help",
        "signature": "Match-\u003ep-\u003eMaybe[p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:matchSomeCase",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses one case.\n\u003c/p\u003e",
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "pat -\u003e SomeCase (pat, res) -\u003e Maybe res",
        "fct-source": "src/Language-FunPat-Match.html#matchSomeCase",
        "fct-type": "function",
        "title": "matchSomeCase"
      },
      "index": {
        "description": "Processes one case",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "matchSomeCase",
        "normalized": "a-\u003eSomeCase(a,b)-\u003eMaybe b",
        "package": "funpat",
        "partial": "Some Case",
        "signature": "pat-\u003eSomeCase(pat,res)-\u003eMaybe res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:nonlinear",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "String",
        "fct-source": "src/Language-FunPat-Match.html#nonlinear",
        "fct-type": "function",
        "title": "nonlinear"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "nonlinear",
        "normalized": "",
        "package": "funpat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:nonparametric",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "String",
        "fct-source": "src/Language-FunPat-Match.html#nonparametric",
        "fct-type": "function",
        "title": "nonparametric"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "nonparametric",
        "normalized": "",
        "package": "funpat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:package",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "String",
        "fct-source": "src/Language-FunPat-Match.html#package",
        "fct-type": "function",
        "title": "package"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "package",
        "normalized": "",
        "package": "funpat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:start",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "PatternType t -\u003e t -\u003e Maybe (ParameterType t)",
        "fct-source": "src/Language-FunPat-Match.html#start",
        "fct-type": "method",
        "title": "start"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "start",
        "normalized": "PatternType a-\u003ea-\u003eMaybe(ParameterType a)",
        "package": "funpat",
        "partial": "",
        "signature": "PatternType t-\u003et-\u003eMaybe(ParameterType t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat-Match.html#v:unbound",
      "description": {
        "fct-module": "Language.FunPat.Match",
        "fct-package": "funpat",
        "fct-signature": "String",
        "fct-source": "src/Language-FunPat-Match.html#unbound",
        "fct-type": "function",
        "title": "unbound"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat Match",
        "module": "Language.FunPat.Match",
        "name": "unbound",
        "normalized": "",
        "package": "funpat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/funpat/docs/Language-FunPat.html#",
      "description": {
        "fct-module": "Language.FunPat",
        "fct-package": "funpat",
        "fct-signature": "module",
        "fct-source": "src/Language-FunPat.html",
        "fct-type": "module",
        "title": "FunPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language FunPat",
        "module": "Language.FunPat",
        "name": "FunPat",
        "normalized": "",
        "package": "funpat",
        "partial": "Fun Pat",
        "signature": ""
      }
    }
  }
]