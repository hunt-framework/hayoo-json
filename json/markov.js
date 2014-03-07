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
        "word": "markov"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MarkovAlgo",
          "name": "MarkovAlgo",
          "package": "markov",
          "source": "src/Data-MarkovAlgo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "MarkovAlgo",
          "package": "markov",
          "partial": "Markov Algo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarkov's algorithm itself\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "Algo",
          "package": "markov",
          "source": "src/Data-MarkovAlgo.html#Algo",
          "type": "type"
        },
        "index": {
          "description": "Markov algorithm itself",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "Algo",
          "package": "markov",
          "partial": "Algo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#t:Algo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne rule in algorithm\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "Rule",
          "package": "markov",
          "source": "src/Data-MarkovAlgo.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "One rule in algorithm",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "Rule",
          "package": "markov",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable for rules\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "Var",
          "package": "markov",
          "source": "src/Data-MarkovAlgo.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Variable for rules",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "Var",
          "package": "markov",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-terminating rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": ":-\u003e",
          "package": "markov",
          "signature": "[c] :-\u003e [c]",
          "source": "src/Data-MarkovAlgo.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Non-terminating rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": ":-\u003e",
          "normalized": "[a]-\u003e[a]",
          "package": "markov",
          "signature": "[c]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminating rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": ":-\u003e.",
          "package": "markov",
          "signature": "[c] :-\u003e. [c]",
          "source": "src/Data-MarkovAlgo.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Terminating rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": ":-\u003e.",
          "normalized": "[a]-\u003e[a]",
          "package": "markov",
          "signature": "[c]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v::-45--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral char\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "L",
          "package": "markov",
          "signature": "L α",
          "source": "src/Data-MarkovAlgo.html#Var",
          "type": "function"
        },
        "index": {
          "description": "Literal char",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "L",
          "package": "markov",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable with given number\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "V",
          "package": "markov",
          "signature": "V Int",
          "source": "src/Data-MarkovAlgo.html#Var",
          "type": "function"
        },
        "index": {
          "description": "Variable with given number",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "V",
          "package": "markov",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet antecedent of rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "antecedent",
          "package": "markov",
          "signature": "Rule c -\u003e [c]",
          "source": "src/Data-MarkovAlgo.html#antecedent",
          "type": "function"
        },
        "index": {
          "description": "Get antecedent of rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "antecedent",
          "normalized": "Rule a-\u003e[a]",
          "package": "markov",
          "signature": "Rule c-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:antecedent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild concrete algo from simple text description with variables\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "buildAlgo",
          "package": "markov",
          "signature": "[α]-\u003e [α]-\u003e Algo α-\u003e Algo α",
          "type": "function"
        },
        "index": {
          "description": "Build concrete algo from simple text description with variables",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "buildAlgo",
          "normalized": "[a]-\u003e[a]-\u003eAlgo a-\u003eAlgo a",
          "package": "markov",
          "partial": "Algo",
          "signature": "[α]-\u003e[α]-\u003eAlgo α-\u003eAlgo α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:buildAlgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet consequent of rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "consequent",
          "package": "markov",
          "signature": "Rule c -\u003e [c]",
          "source": "src/Data-MarkovAlgo.html#consequent",
          "type": "function"
        },
        "index": {
          "description": "Get consequent of rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "consequent",
          "normalized": "Rule a-\u003e[a]",
          "package": "markov",
          "signature": "Rule c-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:consequent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet data constructor of Rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "constructor",
          "package": "markov",
          "signature": "Rule c -\u003e [d] -\u003e [d] -\u003e Rule d",
          "source": "src/Data-MarkovAlgo.html#constructor",
          "type": "function"
        },
        "index": {
          "description": "Get data constructor of Rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "constructor",
          "normalized": "Rule a-\u003e[b]-\u003e[b]-\u003eRule b",
          "package": "markov",
          "signature": "Rule c-\u003e[d]-\u003e[d]-\u003eRule d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand algorithm with variables into algorithm without variables\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "expand",
          "package": "markov",
          "signature": "[α]-\u003e Algo (Var α)-\u003e Algo α",
          "type": "function"
        },
        "index": {
          "description": "Expand algorithm with variables into algorithm without variables",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "expand",
          "normalized": "[a]-\u003eAlgo(Var a)-\u003eAlgo a",
          "package": "markov",
          "signature": "[α]-\u003eAlgo(Var α)-\u003eAlgo α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate generic Rule from concrete Rule\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "parseRule",
          "package": "markov",
          "signature": "[α]-\u003e Rule α-\u003e Rule (Var α)",
          "type": "function"
        },
        "index": {
          "description": "Create generic Rule from concrete Rule",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "parseRule",
          "normalized": "[a]-\u003eRule a-\u003eRule(Var a)",
          "package": "markov",
          "partial": "Rule",
          "signature": "[α]-\u003eRule α-\u003eRule(Var α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:parseRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun concrete (without variables) Markov's algorithm\n\u003c/p\u003e",
          "module": "Data.MarkovAlgo",
          "name": "runMarkov",
          "package": "markov",
          "signature": "Algo α-\u003e [α]-\u003e [α]",
          "type": "function"
        },
        "index": {
          "description": "Run concrete without variables Markov algorithm",
          "hierarchy": "Data MarkovAlgo",
          "module": "Data.MarkovAlgo",
          "name": "runMarkov",
          "normalized": "Algo a-\u003e[a]-\u003e[a]",
          "package": "markov",
          "partial": "Markov",
          "signature": "Algo α-\u003e[α]-\u003e[α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov/docs/Data-MarkovAlgo.html#v:runMarkov"
      }
    }
  ]
]