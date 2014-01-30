[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Interpreter",
        "fct-package": "NanoProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-Prolog-NanoProlog-Interpreter.html",
        "fct-type": "module",
        "title": "Interpreter"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Interpreter",
        "module": "Language.Prolog.NanoProlog.Interpreter",
        "name": "Interpreter",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Interpreter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e ask for a goal, and enuartes all solutions found, each preceded by\n a trace conatining the rules applied in a tree-like fashion\n\u003c/p\u003e",
        "fct-module": "Language.Prolog.NanoProlog.Interpreter",
        "fct-package": "NanoProlog",
        "fct-signature": "[Rule] -\u003e IO ()",
        "fct-source": "src/Language-Prolog-NanoProlog-Interpreter.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "loop ask for goal and enuartes all solutions found each preceded by trace conatining the rules applied in tree-like fashion",
        "hierarchy": "Language Prolog NanoProlog Interpreter",
        "module": "Language.Prolog.NanoProlog.Interpreter",
        "name": "loop",
        "normalized": "[Rule]-\u003eIO()",
        "package": "NanoProlog",
        "partial": "",
        "signature": "[Rule]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:printSolutions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprintSolutions\u003c/a\u003e\u003c/code\u003e takes the result of a treewalk, which constructs\n all the proofs, and pairs them with their final\n substitutions. Alternative approaches in printing are to print the\n raw proofs, i.e. without applying the final substitution (remove\n the \u003ccode\u003esubst env\u003c/code\u003e ). This nicely shows how the intermediate variables\n come into life. By including the test on the length the facts\n directly stemming from the data base are not printed. This makes\n the proofs much shorter, but a bit less complete.\n\u003c/p\u003e",
        "fct-module": "Language.Prolog.NanoProlog.Interpreter",
        "fct-package": "NanoProlog",
        "fct-signature": "Result -\u003e IO ()",
        "fct-source": "src/Language-Prolog-NanoProlog-Interpreter.html#printSolutions",
        "fct-type": "function",
        "title": "printSolutions"
      },
      "index": {
        "description": "printSolutions takes the result of treewalk which constructs all the proofs and pairs them with their final substitutions Alternative approaches in printing are to print the raw proofs i.e without applying the final substitution remove the subst env This nicely shows how the intermediate variables come into life By including the test on the length the facts directly stemming from the data base are not printed This makes the proofs much shorter but bit less complete",
        "hierarchy": "Language Prolog NanoProlog Interpreter",
        "module": "Language.Prolog.NanoProlog.Interpreter",
        "name": "printSolutions",
        "normalized": "Result-\u003eIO()",
        "package": "NanoProlog",
        "partial": "Solutions",
        "signature": "Result-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003emain\u003c/code\u003e program prompt for a file with Prolog rules and call the main\n interpreter loop\n\u003c/p\u003e",
        "fct-module": "Language.Prolog.NanoProlog.Interpreter",
        "fct-package": "NanoProlog",
        "fct-signature": "IO ()",
        "fct-source": "src/Language-Prolog-NanoProlog-Interpreter.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "The main program prompt for file with Prolog rules and call the main interpreter loop",
        "hierarchy": "Language Prolog NanoProlog Interpreter",
        "module": "Language.Prolog.NanoProlog.Interpreter",
        "name": "run",
        "normalized": "IO()",
        "package": "NanoProlog",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html",
        "fct-type": "module",
        "title": "NanoProlog"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "NanoProlog",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Nano Prolog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Env",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
        "fct-type": "newtype",
        "title": "Env"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Env",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:LowerCase",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "type",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#LowerCase",
        "fct-type": "type",
        "title": "LowerCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "LowerCase",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Lower Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Proofs",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "type",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Proofs",
        "fct-type": "type",
        "title": "Proofs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Proofs",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Proofs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Result",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "data",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Result",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Rule",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "data",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Rule",
        "fct-type": "data",
        "title": "Rule"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Rule",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Subst",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "class",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Subst",
        "fct-type": "class",
        "title": "Subst"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Subst",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Tag",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "type",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Tag",
        "fct-type": "type",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Tag",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Taggable",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "class",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Taggable",
        "fct-type": "class",
        "title": "Taggable"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Taggable",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Taggable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:TaggedTerm",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "type",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#TaggedTerm",
        "fct-type": "type",
        "title": "TaggedTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "TaggedTerm",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Tagged Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Term",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "data",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Term",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:UpperCase",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "type",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#UpperCase",
        "fct-type": "type",
        "title": "UpperCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "UpperCase",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Upper Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v::-60--45-:",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Term :\u003c-: [Term]",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Rule",
        "fct-type": "function",
        "title": ":\u003c-:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": ":\u003c-:",
        "normalized": "Term[Term]",
        "package": "NanoProlog",
        "partial": "",
        "signature": "Term[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:ApplyRules",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "ApplyRules [(Tag, Rule, Result)]",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
        "fct-type": "function",
        "title": "ApplyRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "ApplyRules",
        "normalized": "ApplyRules[(Tag,Rule,Result)]",
        "package": "NanoProlog",
        "partial": "Apply Rules",
        "signature": "ApplyRules[(Tag,Rule,Result)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Done",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Done Env",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Done",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Env",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Env",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
        "fct-type": "function",
        "title": "Env"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Env",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Fun",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Fun LowerCase [Term]",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
        "fct-type": "function",
        "title": "Fun"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Fun",
        "normalized": "Fun LowerCase[Term]",
        "package": "NanoProlog",
        "partial": "Fun",
        "signature": "Fun LowerCase[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Var",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Var UpperCase",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "Var",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:emptyEnv",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Maybe Env",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#emptyEnv",
        "fct-type": "function",
        "title": "emptyEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "emptyEnv",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:enumerateDepthFirst",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Proofs -\u003e Result -\u003e [(Proofs, Env)]",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#enumerateDepthFirst",
        "fct-type": "function",
        "title": "enumerateDepthFirst"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "enumerateDepthFirst",
        "normalized": "Proofs-\u003eResult-\u003e[(Proofs,Env)]",
        "package": "NanoProlog",
        "partial": "Depth First",
        "signature": "Proofs-\u003eResult-\u003e[(Proofs,Env)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:fromEnv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Map UpperCase Term",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
        "fct-type": "function",
        "title": "fromEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "fromEnv",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:matches",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "(Term, Term) -\u003e Maybe Env -\u003e Maybe Env",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#matches",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "matches",
        "normalized": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
        "package": "NanoProlog",
        "partial": "",
        "signature": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:solve",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "[Rule] -\u003e Maybe Env -\u003e [TaggedTerm] -\u003e Result",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#solve",
        "fct-type": "function",
        "title": "solve"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "solve",
        "normalized": "[Rule]-\u003eMaybe Env-\u003e[TaggedTerm]-\u003eResult",
        "package": "NanoProlog",
        "partial": "",
        "signature": "[Rule]-\u003eMaybe Env-\u003e[TaggedTerm]-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:subst",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Env -\u003e t -\u003e t",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#subst",
        "fct-type": "method",
        "title": "subst"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "subst",
        "normalized": "Env-\u003ea-\u003ea",
        "package": "NanoProlog",
        "partial": "",
        "signature": "Env-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:tag",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "Tag -\u003e a -\u003e a",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#tag",
        "fct-type": "method",
        "title": "tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "tag",
        "normalized": "Tag-\u003ea-\u003ea",
        "package": "NanoProlog",
        "partial": "",
        "signature": "Tag-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:unify",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.NanoProlog",
        "fct-package": "NanoProlog",
        "fct-signature": "(Term, Term) -\u003e Maybe Env -\u003e Maybe Env",
        "fct-source": "src/Language-Prolog-NanoProlog-NanoProlog.html#unify",
        "fct-type": "function",
        "title": "unify"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog NanoProlog",
        "module": "Language.Prolog.NanoProlog.NanoProlog",
        "name": "unify",
        "normalized": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
        "package": "NanoProlog",
        "partial": "",
        "signature": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pCons",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "Parser Term",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
        "fct-type": "function",
        "title": "pCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "pCons",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pFun",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "Parser Term",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
        "fct-type": "function",
        "title": "pFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "pFun",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pRule",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "Parser Rule",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#pRule",
        "fct-type": "function",
        "title": "pRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "pRule",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pTerm",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "Parser Term",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
        "fct-type": "function",
        "title": "pTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "pTerm",
        "normalized": "",
        "package": "NanoProlog",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pTerms",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "Parser [Term]",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#pTerms",
        "fct-type": "function",
        "title": "pTerms"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "pTerms",
        "normalized": "Parser[Term]",
        "package": "NanoProlog",
        "partial": "Terms",
        "signature": "Parser[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:startParse",
      "description": {
        "fct-module": "Language.Prolog.NanoProlog.Parser",
        "fct-package": "NanoProlog",
        "fct-signature": "P (Str b s LineColPos) a -\u003e s -\u003e (a, [Error LineColPos])",
        "fct-source": "src/Language-Prolog-NanoProlog-Parser.html#startParse",
        "fct-type": "function",
        "title": "startParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Prolog NanoProlog Parser",
        "module": "Language.Prolog.NanoProlog.Parser",
        "name": "startParse",
        "normalized": "P(Str a b LineColPos)c-\u003eb-\u003e(c,[Error LineColPos])",
        "package": "NanoProlog",
        "partial": "Parse",
        "signature": "P(Str b s LineColPos)a-\u003es-\u003e(a,[Error LineColPos])"
      }
    }
  }
]