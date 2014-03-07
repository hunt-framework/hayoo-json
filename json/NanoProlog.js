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
        "word": "NanoProlog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "Interpreter",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-Interpreter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Interpreter",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "Interpreter",
          "package": "NanoProlog",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e ask for a goal, and enuartes all solutions found, each preceded by\n a trace conatining the rules applied in a tree-like fashion\n\u003c/p\u003e",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "loop",
          "package": "NanoProlog",
          "signature": "[Rule] -\u003e IO ()",
          "source": "src/Language-Prolog-NanoProlog-Interpreter.html#loop",
          "type": "function"
        },
        "index": {
          "description": "loop ask for goal and enuartes all solutions found each preceded by trace conatining the rules applied in tree-like fashion",
          "hierarchy": "Language Prolog NanoProlog Interpreter",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "loop",
          "normalized": "[Rule]-\u003eIO()",
          "package": "NanoProlog",
          "signature": "[Rule]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprintSolutions\u003c/a\u003e\u003c/code\u003e takes the result of a treewalk, which constructs\n all the proofs, and pairs them with their final\n substitutions. Alternative approaches in printing are to print the\n raw proofs, i.e. without applying the final substitution (remove\n the \u003ccode\u003esubst env\u003c/code\u003e ). This nicely shows how the intermediate variables\n come into life. By including the test on the length the facts\n directly stemming from the data base are not printed. This makes\n the proofs much shorter, but a bit less complete.\n\u003c/p\u003e",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "printSolutions",
          "package": "NanoProlog",
          "signature": "Result -\u003e IO ()",
          "source": "src/Language-Prolog-NanoProlog-Interpreter.html#printSolutions",
          "type": "function"
        },
        "index": {
          "description": "printSolutions takes the result of treewalk which constructs all the proofs and pairs them with their final substitutions Alternative approaches in printing are to print the raw proofs i.e without applying the final substitution remove the subst env This nicely shows how the intermediate variables come into life By including the test on the length the facts directly stemming from the data base are not printed This makes the proofs much shorter but bit less complete",
          "hierarchy": "Language Prolog NanoProlog Interpreter",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "printSolutions",
          "normalized": "Result-\u003eIO()",
          "package": "NanoProlog",
          "partial": "Solutions",
          "signature": "Result-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:printSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003emain\u003c/code\u003e program prompt for a file with Prolog rules and call the main\n interpreter loop\n\u003c/p\u003e",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "run",
          "package": "NanoProlog",
          "signature": "IO ()",
          "source": "src/Language-Prolog-NanoProlog-Interpreter.html#run",
          "type": "function"
        },
        "index": {
          "description": "The main program prompt for file with Prolog rules and call the main interpreter loop",
          "hierarchy": "Language Prolog NanoProlog Interpreter",
          "module": "Language.Prolog.NanoProlog.Interpreter",
          "name": "run",
          "normalized": "IO()",
          "package": "NanoProlog",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Interpreter.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "NanoProlog",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "NanoProlog",
          "package": "NanoProlog",
          "partial": "Nano Prolog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Env",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Env",
          "package": "NanoProlog",
          "partial": "Env",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "LowerCase",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#LowerCase",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "LowerCase",
          "package": "NanoProlog",
          "partial": "Lower Case",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:LowerCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Proofs",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Proofs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Proofs",
          "package": "NanoProlog",
          "partial": "Proofs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Proofs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Result",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Result",
          "package": "NanoProlog",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Rule",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Rule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Rule",
          "package": "NanoProlog",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Subst",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Subst",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Subst",
          "package": "NanoProlog",
          "partial": "Subst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Tag",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Tag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Tag",
          "package": "NanoProlog",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Taggable",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Taggable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Taggable",
          "package": "NanoProlog",
          "partial": "Taggable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Taggable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "TaggedTerm",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#TaggedTerm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "TaggedTerm",
          "package": "NanoProlog",
          "partial": "Tagged Term",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:TaggedTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Term",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Term",
          "package": "NanoProlog",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "UpperCase",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#UpperCase",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "UpperCase",
          "package": "NanoProlog",
          "partial": "Upper Case",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#t:UpperCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": ":\u003c-:",
          "package": "NanoProlog",
          "signature": "Term :\u003c-: [Term]",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": ":\u003c-:",
          "normalized": "Term[Term]",
          "package": "NanoProlog",
          "signature": "Term[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v::-60--45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "ApplyRules",
          "package": "NanoProlog",
          "signature": "ApplyRules [(Tag, Rule, Result)]",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "ApplyRules",
          "normalized": "ApplyRules[(Tag,Rule,Result)]",
          "package": "NanoProlog",
          "partial": "Apply Rules",
          "signature": "ApplyRules[(Tag,Rule,Result)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:ApplyRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Done",
          "package": "NanoProlog",
          "signature": "Done Env",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Done",
          "package": "NanoProlog",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Env",
          "package": "NanoProlog",
          "signature": "Env",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Env",
          "package": "NanoProlog",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Fun",
          "package": "NanoProlog",
          "signature": "Fun LowerCase [Term]",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Fun",
          "normalized": "Fun LowerCase[Term]",
          "package": "NanoProlog",
          "partial": "Fun",
          "signature": "Fun LowerCase[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Var",
          "package": "NanoProlog",
          "signature": "Var UpperCase",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "Var",
          "package": "NanoProlog",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "emptyEnv",
          "package": "NanoProlog",
          "signature": "Maybe Env",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#emptyEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "emptyEnv",
          "package": "NanoProlog",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:emptyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "enumerateDepthFirst",
          "package": "NanoProlog",
          "signature": "Proofs -\u003e Result -\u003e [(Proofs, Env)]",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#enumerateDepthFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "enumerateDepthFirst",
          "normalized": "Proofs-\u003eResult-\u003e[(Proofs,Env)]",
          "package": "NanoProlog",
          "partial": "Depth First",
          "signature": "Proofs-\u003eResult-\u003e[(Proofs,Env)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:enumerateDepthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "fromEnv",
          "package": "NanoProlog",
          "signature": "Map UpperCase Term",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "fromEnv",
          "package": "NanoProlog",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:fromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "matches",
          "package": "NanoProlog",
          "signature": "(Term, Term) -\u003e Maybe Env -\u003e Maybe Env",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#matches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "matches",
          "normalized": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
          "package": "NanoProlog",
          "signature": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "solve",
          "package": "NanoProlog",
          "signature": "[Rule] -\u003e Maybe Env -\u003e [TaggedTerm] -\u003e Result",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#solve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "solve",
          "normalized": "[Rule]-\u003eMaybe Env-\u003e[TaggedTerm]-\u003eResult",
          "package": "NanoProlog",
          "signature": "[Rule]-\u003eMaybe Env-\u003e[TaggedTerm]-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "subst",
          "package": "NanoProlog",
          "signature": "Env -\u003e t -\u003e t",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#subst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "subst",
          "normalized": "Env-\u003ea-\u003ea",
          "package": "NanoProlog",
          "signature": "Env-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "tag",
          "package": "NanoProlog",
          "signature": "Tag -\u003e a -\u003e a",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#tag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "tag",
          "normalized": "Tag-\u003ea-\u003ea",
          "package": "NanoProlog",
          "signature": "Tag-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "unify",
          "package": "NanoProlog",
          "signature": "(Term, Term) -\u003e Maybe Env -\u003e Maybe Env",
          "source": "src/Language-Prolog-NanoProlog-NanoProlog.html#unify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog NanoProlog",
          "module": "Language.Prolog.NanoProlog.NanoProlog",
          "name": "unify",
          "normalized": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
          "package": "NanoProlog",
          "signature": "(Term,Term)-\u003eMaybe Env-\u003eMaybe Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-NanoProlog.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "Parser",
          "package": "NanoProlog",
          "source": "src/Language-Prolog-NanoProlog-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "Parser",
          "package": "NanoProlog",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pCons",
          "package": "NanoProlog",
          "signature": "Parser Term",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pCons",
          "package": "NanoProlog",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pFun",
          "package": "NanoProlog",
          "signature": "Parser Term",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pFun",
          "package": "NanoProlog",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pRule",
          "package": "NanoProlog",
          "signature": "Parser Rule",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#pRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pRule",
          "package": "NanoProlog",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pTerm",
          "package": "NanoProlog",
          "signature": "Parser Term",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#pTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pTerm",
          "package": "NanoProlog",
          "partial": "Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pTerms",
          "package": "NanoProlog",
          "signature": "Parser [Term]",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#pTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "pTerms",
          "normalized": "Parser[Term]",
          "package": "NanoProlog",
          "partial": "Terms",
          "signature": "Parser[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:pTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "startParse",
          "package": "NanoProlog",
          "signature": "P (Str b s LineColPos) a -\u003e s -\u003e (a, [Error LineColPos])",
          "source": "src/Language-Prolog-NanoProlog-Parser.html#startParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Prolog NanoProlog Parser",
          "module": "Language.Prolog.NanoProlog.Parser",
          "name": "startParse",
          "normalized": "P(Str a b LineColPos)c-\u003eb-\u003e(c,[Error LineColPos])",
          "package": "NanoProlog",
          "partial": "Parse",
          "signature": "P(Str b s LineColPos)a-\u003es-\u003e(a,[Error LineColPos])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NanoProlog/docs/Language-Prolog-NanoProlog-Parser.html#v:startParse"
      }
    }
  ]
]