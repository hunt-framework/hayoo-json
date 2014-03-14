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
        "word": "genprog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the \u003ccode\u003eGenProg.GenExpr\u003c/code\u003e interface for members of\n the \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e typeclass. The implementation is based on SYB and SYZ\n generic programming frameworks (see\n \u003ca\u003ehttp://hackage.haskell.org/package/syb\u003c/a\u003e and\n \u003ca\u003ehttp://hackage.haskell.org/package/syz\u003c/a\u003e for details).\n\u003c/p\u003e\u003cp\u003eNB: Subexpressions that are candidates for crossover points or\n mutation must be of the same type as the expression itself, and\n must be reachable from the root node by type-preserving traversal.\n See below for an example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "Data",
          "package": "genprog",
          "source": "src/GenProg-GenExpr-Data.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the GenProg.GenExpr interface for members of the Data typeclass The implementation is based on SYB and SYZ generic programming frameworks see http hackage.haskell.org package syb and http hackage.haskell.org package syz for details NB Subexpressions that are candidates for crossover points or mutation must be of the same type as the expression itself and must be reachable from the root node by type-preserving traversal See below for an example",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "Data",
          "package": "genprog",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis typeclass defines an interface to expressions\n that can be genetically programmed.  The operations that must be\n provided by instances of this class are used for the generation\n of random individuals as well as crossover and mutation operations.\n (An instance for members of the \u003ccode\u003eData\u003c/code\u003e typeclass is provided in\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eexchange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapQ\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003enodeIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "GenExpr",
          "package": "genprog",
          "source": "src/GenProg-GenExpr.html#GenExpr",
          "type": "class"
        },
        "index": {
          "description": "This typeclass defines an interface to expressions that can be genetically programmed The operations that must be provided by instances of this class are used for the generation of random individuals as well as crossover and mutation operations An instance for members of the Data typeclass is provided in GenProg.GenExpr.Data Minimal complete definition exchange nodeMapM nodeMapQ and nodeIndices",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "GenExpr",
          "package": "genprog",
          "partial": "Gen Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#t:GenExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjusts a subexpression rooted at the given node by applying a\n monadic transformation function.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "adjustM",
          "package": "genprog",
          "signature": "(e -\u003e m e) -\u003e e -\u003e Int -\u003e m e",
          "source": "src/GenProg-GenExpr.html#adjustM",
          "type": "method"
        },
        "index": {
          "description": "Adjusts subexpression rooted at the given node by applying monadic transformation function",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "adjustM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eInt-\u003eb a",
          "package": "genprog",
          "signature": "(e-\u003em e)-\u003ee-\u003eInt-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:adjustM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "depth",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#depth",
          "type": "method"
        },
        "index": {
          "description": "The depth of an expression Equals for single-node expressions",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "depth",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchanges subtrees of two expressions:\n \u003ccode\u003eexchange e1 n1 e2 n2\u003c/code\u003e replaces the subexpression of \u003ccode\u003ee1\u003c/code\u003e rooted in node\n \u003ccode\u003en1\u003c/code\u003e with the subexpression of \u003ccode\u003ee2\u003c/code\u003e rooted in \u003ccode\u003en2\u003c/code\u003e, and vice versa.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "exchange",
          "package": "genprog",
          "signature": "e -\u003e Int -\u003e e -\u003e Int -\u003e (e, e)",
          "source": "src/GenProg-GenExpr.html#exchange",
          "type": "method"
        },
        "index": {
          "description": "Exchanges subtrees of two expressions exchange e1 n1 e2 n2 replaces the subexpression of e1 rooted in node n1 with the subexpression of e2 rooted in n2 and vice versa",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "exchange",
          "normalized": "a-\u003eInt-\u003ea-\u003eInt-\u003e(a,a)",
          "package": "genprog",
          "signature": "e-\u003eInt-\u003ee-\u003eInt-\u003e(e,e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of indices of internal (functional) and external\n (terminal) nodes of an expression.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeIndices",
          "package": "genprog",
          "signature": "e -\u003e ([Int], [Int])",
          "source": "src/GenProg-GenExpr.html#nodeIndices",
          "type": "method"
        },
        "index": {
          "description": "list of indices of internal functional and external terminal nodes of an expression",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeIndices",
          "normalized": "a-\u003e([Int],[Int])",
          "package": "genprog",
          "partial": "Indices",
          "signature": "e-\u003e([Int],[Int])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a monadic transformation function over the immediate\n children of the given node.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeMapM",
          "package": "genprog",
          "signature": "(e -\u003e m e) -\u003e e -\u003e m e",
          "source": "src/GenProg-GenExpr.html#nodeMapM",
          "type": "method"
        },
        "index": {
          "description": "Maps monadic transformation function over the immediate children of the given node",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeMapM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "genprog",
          "partial": "Map",
          "signature": "(e-\u003em e)-\u003ee-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a query function over the immediate children of the given\n node and returns a list of results.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeMapQ",
          "package": "genprog",
          "signature": "(e -\u003e a) -\u003e e -\u003e [a]",
          "source": "src/GenProg-GenExpr.html#nodeMapQ",
          "type": "method"
        },
        "index": {
          "description": "Maps query function over the immediate children of the given node and returns list of results",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "nodeMapQ",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[b]",
          "package": "genprog",
          "partial": "Map",
          "signature": "(e-\u003ea)-\u003ee-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeMapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr.Data",
          "name": "nodes",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#nodes",
          "type": "method"
        },
        "index": {
          "description": "Number of nodes an expression has",
          "hierarchy": "GenProg GenExpr Data",
          "module": "GenProg.GenExpr.Data",
          "name": "nodes",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to genetically programmable expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GenProg.GenExpr",
          "name": "GenExpr",
          "package": "genprog",
          "source": "src/GenProg-GenExpr.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to genetically programmable expressions",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "GenExpr",
          "package": "genprog",
          "partial": "Gen Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis typeclass defines an interface to expressions\n that can be genetically programmed.  The operations that must be\n provided by instances of this class are used for the generation\n of random individuals as well as crossover and mutation operations.\n (An instance for members of the \u003ccode\u003eData\u003c/code\u003e typeclass is provided in\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eexchange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapQ\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003enodeIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "GenExpr",
          "package": "genprog",
          "source": "src/GenProg-GenExpr.html#GenExpr",
          "type": "class"
        },
        "index": {
          "description": "This typeclass defines an interface to expressions that can be genetically programmed The operations that must be provided by instances of this class are used for the generation of random individuals as well as crossover and mutation operations An instance for members of the Data typeclass is provided in GenProg.GenExpr.Data Minimal complete definition exchange nodeMapM nodeMapQ and nodeIndices",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "GenExpr",
          "package": "genprog",
          "partial": "Gen Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#t:GenExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjusts a subexpression rooted at the given node by applying a\n monadic transformation function.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "adjustM",
          "package": "genprog",
          "signature": "(e -\u003e m e) -\u003e e -\u003e Int -\u003e m e",
          "source": "src/GenProg-GenExpr.html#adjustM",
          "type": "method"
        },
        "index": {
          "description": "Adjusts subexpression rooted at the given node by applying monadic transformation function",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "adjustM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eInt-\u003eb a",
          "package": "genprog",
          "signature": "(e-\u003em e)-\u003ee-\u003eInt-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:adjustM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "depth",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#depth",
          "type": "method"
        },
        "index": {
          "description": "The depth of an expression Equals for single-node expressions",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "depth",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchanges subtrees of two expressions:\n \u003ccode\u003eexchange e1 n1 e2 n2\u003c/code\u003e replaces the subexpression of \u003ccode\u003ee1\u003c/code\u003e rooted in node\n \u003ccode\u003en1\u003c/code\u003e with the subexpression of \u003ccode\u003ee2\u003c/code\u003e rooted in \u003ccode\u003en2\u003c/code\u003e, and vice versa.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "exchange",
          "package": "genprog",
          "signature": "e -\u003e Int -\u003e e -\u003e Int -\u003e (e, e)",
          "source": "src/GenProg-GenExpr.html#exchange",
          "type": "method"
        },
        "index": {
          "description": "Exchanges subtrees of two expressions exchange e1 n1 e2 n2 replaces the subexpression of e1 rooted in node n1 with the subexpression of e2 rooted in n2 and vice versa",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "exchange",
          "normalized": "a-\u003eInt-\u003ea-\u003eInt-\u003e(a,a)",
          "package": "genprog",
          "signature": "e-\u003eInt-\u003ee-\u003eInt-\u003e(e,e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of indices of internal (functional) and external\n (terminal) nodes of an expression.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "nodeIndices",
          "package": "genprog",
          "signature": "e -\u003e ([Int], [Int])",
          "source": "src/GenProg-GenExpr.html#nodeIndices",
          "type": "method"
        },
        "index": {
          "description": "list of indices of internal functional and external terminal nodes of an expression",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "nodeIndices",
          "normalized": "a-\u003e([Int],[Int])",
          "package": "genprog",
          "partial": "Indices",
          "signature": "e-\u003e([Int],[Int])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a monadic transformation function over the immediate\n children of the given node.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "nodeMapM",
          "package": "genprog",
          "signature": "(e -\u003e m e) -\u003e e -\u003e m e",
          "source": "src/GenProg-GenExpr.html#nodeMapM",
          "type": "method"
        },
        "index": {
          "description": "Maps monadic transformation function over the immediate children of the given node",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "nodeMapM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "genprog",
          "partial": "Map",
          "signature": "(e-\u003em e)-\u003ee-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a query function over the immediate children of the given\n node and returns a list of results.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "nodeMapQ",
          "package": "genprog",
          "signature": "(e -\u003e a) -\u003e e -\u003e [a]",
          "source": "src/GenProg-GenExpr.html#nodeMapQ",
          "type": "method"
        },
        "index": {
          "description": "Maps query function over the immediate children of the given node and returns list of results",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "nodeMapQ",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[b]",
          "package": "genprog",
          "partial": "Map",
          "signature": "(e-\u003ea)-\u003ee-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeMapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
          "module": "GenProg.GenExpr",
          "name": "nodes",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#nodes",
          "type": "method"
        },
        "index": {
          "description": "Number of nodes an expression has",
          "hierarchy": "GenProg GenExpr",
          "module": "GenProg.GenExpr",
          "name": "nodes",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Genetic Programming Library.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGenetic programming\u003c/em\u003e is an evolutionary optimization technique\n inspired by biological evolution. It is similar to \u003cem\u003egenetic algorithms\u003c/em\u003e\n except that the individual solutions are programs (or, more generally, \n \u003cem\u003eexpressions\u003c/em\u003e) representing a solution to a given problem. A genetic \n program is represented as an \u003cem\u003eabstract syntax tree\u003c/em\u003e and associated \n with a custom-defined \u003cem\u003efitness\u003c/em\u003e value indicating the quality of the \n solution. Starting from a randomly generated initial population of \n genetic programs, the genetic operators of \u003cem\u003eselection\u003c/em\u003e, \u003cem\u003ecrossover\u003c/em\u003e, \n and (occasionally) \u003cem\u003emutation\u003c/em\u003e are used to evolve programs of \n increasingly better quality.\n\u003c/p\u003e\u003cp\u003eStandard reference is: John Koza. \u003cem\u003eGenetic programming:\u003c/em\u003e\n \u003cem\u003eOn the Programming of Computers by Means of Natural Selection\u003c/em\u003e.\n MIT Press, 1992.\n\u003c/p\u003e\u003cp\u003eIn GenProg, a genetic program is represented by a value of an\n algebraic datatype. To use a datatype as a genetic program, it\n suffices to define it as an instance of the \u003ccode\u003e\u003ca\u003eGenProg\u003c/a\u003e\u003c/code\u003e typeclass.\n A custom datatype can be made an instance of the \u003ccode\u003e\u003ca\u003eGenProg\u003c/a\u003e\u003c/code\u003e\n typeclass, provided it is an instance of the \u003ccode\u003eData\u003c/code\u003e typeclass (see\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAn example of how to use this library is given below.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GenProg",
          "name": "GenProg",
          "package": "genprog",
          "source": "src/GenProg.html",
          "type": "module"
        },
        "index": {
          "description": "The Genetic Programming Library Genetic programming is an evolutionary optimization technique inspired by biological evolution It is similar to genetic algorithms except that the individual solutions are programs or more generally expressions representing solution to given problem genetic program is represented as an abstract syntax tree and associated with custom-defined fitness value indicating the quality of the solution Starting from randomly generated initial population of genetic programs the genetic operators of selection crossover and occasionally mutation are used to evolve programs of increasingly better quality Standard reference is John Koza Genetic programming On the Programming of Computers by Means of Natural Selection MIT Press In GenProg genetic program is represented by value of an algebraic datatype To use datatype as genetic program it suffices to define it as an instance of the GenProg typeclass custom datatype can be made an instance of the GenProg typeclass provided it is an instance of the Data typeclass see GenProg.GenExpr.Data An example of how to use this library is given below",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "GenProg",
          "package": "genprog",
          "partial": "Gen Prog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters governing the evolution.\n\u003c/p\u003e\u003cp\u003eDefault evolution parameters,\n as used in (Koza, 1992), are defined by \u003ccode\u003e\u003ca\u003edefaultEvolParams\u003c/a\u003e\u003c/code\u003e\n and indicated below. At least the fitness function \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e should\n be overriden.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "EvolParams",
          "package": "genprog",
          "source": "src/GenProg.html#EvolParams",
          "type": "data"
        },
        "index": {
          "description": "Parameters governing the evolution Default evolution parameters as used in Koza are defined by defaultEvolParams and indicated below At least the fitness function fitness should be overriden",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "EvolParams",
          "package": "genprog",
          "partial": "Evol Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:EvolParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the evolution.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "EvolState",
          "package": "genprog",
          "source": "src/GenProg.html#EvolState",
          "type": "data"
        },
        "index": {
          "description": "The state of the evolution",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "EvolState",
          "package": "genprog",
          "partial": "Evol State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:EvolState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandardized fitness. It takes on values from 0 (best fitness) to\n +infinity (worst fitness).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "Fitness",
          "package": "genprog",
          "source": "src/GenProg.html#Fitness",
          "type": "type"
        },
        "index": {
          "description": "Standardized fitness It takes on values from best fitness to infinity worst fitness",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "Fitness",
          "package": "genprog",
          "partial": "Fitness",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Fitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass defining a genetic program interface. Datatypes \u003ccode\u003ee\u003c/code\u003e\n that are to be used as genetic programs must be instances of the\n \u003ccode\u003e\u003ca\u003eGenExpr\u003c/a\u003e\u003c/code\u003e typeclass and must implement this interface. \n\u003c/p\u003e",
          "module": "GenProg",
          "name": "GenProg",
          "package": "genprog",
          "source": "src/GenProg.html#GenProg",
          "type": "class"
        },
        "index": {
          "description": "typeclass defining genetic program interface Datatypes that are to be used as genetic programs must be instances of the GenExpr typeclass and must implement this interface",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "GenProg",
          "package": "genprog",
          "partial": "Gen Prog",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:GenProg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA genetically programmed individual, representing a basic unit\n of evolution. (Basically a wrapper around a genetically programmable\n expression.)\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "Ind",
          "package": "genprog",
          "source": "src/GenProg.html#Ind",
          "type": "data"
        },
        "index": {
          "description": "genetically programmed individual representing basic unit of evolution Basically wrapper around genetically programmable expression",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "Ind",
          "package": "genprog",
          "partial": "Ind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Ind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to mutate a chosen expression node.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "Mutate",
          "package": "genprog",
          "source": "src/GenProg.html#Mutate",
          "type": "type"
        },
        "index": {
          "description": "function to mutate chosen expression node",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "Mutate",
          "package": "genprog",
          "partial": "Mutate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Mutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA population of individuals. (Basically a wrapper around a list of\n individuals.)\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "Pop",
          "package": "genprog",
          "source": "src/GenProg.html#Pop",
          "type": "data"
        },
        "index": {
          "description": "population of individuals Basically wrapper around list of individuals",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "Pop",
          "package": "genprog",
          "partial": "Pop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTermination predicate.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "Terminate",
          "package": "genprog",
          "source": "src/GenProg.html#Terminate",
          "type": "type"
        },
        "index": {
          "description": "Termination predicate",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "Terminate",
          "package": "genprog",
          "partial": "Terminate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GenProg",
          "name": "EvolParams",
          "package": "genprog",
          "signature": "EvolParams",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "EvolParams",
          "package": "genprog",
          "partial": "Evol Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:EvolParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GenProg",
          "name": "EvolState",
          "package": "genprog",
          "signature": "EvolState",
          "source": "src/GenProg.html#EvolState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "EvolState",
          "package": "genprog",
          "partial": "Evol State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:EvolState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjusted fitness of an individual. Adjusted fitness equals\n \u003ccode\u003e1/(1+s)\u003c/code\u003e, where \u003ccode\u003es\u003c/code\u003e is the standardized fitness as computed by\n \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e. To reduce computational costs, this value is computed\n only once and then cached.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "aFitness",
          "package": "genprog",
          "signature": "Ind e -\u003e Double",
          "source": "src/GenProg.html#aFitness",
          "type": "function"
        },
        "index": {
          "description": "Adjusted fitness of an individual Adjusted fitness equals where is the standardized fitness as computed by fitness To reduce computational costs this value is computed only once and then cached",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "aFitness",
          "normalized": "Ind a-\u003eDouble",
          "package": "genprog",
          "partial": "Fitness",
          "signature": "Ind e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:aFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage depth of expressions in the population.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "avgDepth",
          "package": "genprog",
          "signature": "Pop e -\u003e Double",
          "source": "src/GenProg.html#avgDepth",
          "type": "function"
        },
        "index": {
          "description": "Average depth of expressions in the population",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "avgDepth",
          "normalized": "Pop a-\u003eDouble",
          "package": "genprog",
          "partial": "Depth",
          "signature": "Pop e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation's average standardized fitness.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "avgFitness",
          "package": "genprog",
          "signature": "Pop e -\u003e Double",
          "source": "src/GenProg.html#avgFitness",
          "type": "function"
        },
        "index": {
          "description": "Population average standardized fitness",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "avgFitness",
          "normalized": "Pop a-\u003eDouble",
          "package": "genprog",
          "partial": "Fitness",
          "signature": "Pop e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage number of expression nodes in the population.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "avgNodes",
          "package": "genprog",
          "signature": "Pop e -\u003e Double",
          "source": "src/GenProg.html#avgNodes",
          "type": "function"
        },
        "index": {
          "description": "Average number of expression nodes in the population",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "avgNodes",
          "normalized": "Pop a-\u003eDouble",
          "package": "genprog",
          "partial": "Nodes",
          "signature": "Pop e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation's best-fitted individual.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "best",
          "package": "genprog",
          "signature": "Pop e -\u003e Ind e",
          "source": "src/GenProg.html#best",
          "type": "function"
        },
        "index": {
          "description": "Population best-fitted individual",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "best",
          "normalized": "Pop a-\u003eInd a",
          "package": "genprog",
          "signature": "Pop e-\u003eInd e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:best"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum depth of expressions created during the evolution.\n Default is \u003ccode\u003e17\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "cDepth",
          "package": "genprog",
          "signature": "Int",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Maximum depth of expressions created during the evolution Default is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "cDepth",
          "package": "genprog",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of crossover. Default is \u003ccode\u003e0.9\u003c/code\u003e. If crossover is not\n chosen, an individual is simply reproduced (copied as-is) into\n the next generation.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "cProb",
          "package": "genprog",
          "signature": "Double",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Probability of crossover Default is If crossover is not chosen an individual is simply reproduced copied as-is into the next generation",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "cProb",
          "package": "genprog",
          "partial": "Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBest individual evolved so far.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "cachedBest",
          "package": "genprog",
          "signature": "Ind e",
          "source": "src/GenProg.html#EvolState",
          "type": "function"
        },
        "index": {
          "description": "Best individual evolved so far",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "cachedBest",
          "package": "genprog",
          "partial": "Best",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cachedBest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability that an internal (functional) node is chosen as a\n crossover point. Default is \u003ccode\u003e0.9\u003c/code\u003e. If an internal node is not\n chosen, an external (terminal) node is\n chosen.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "ciProb",
          "package": "genprog",
          "signature": "Double",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Probability that an internal functional node is chosen as crossover point Default is If an internal node is not chosen an external terminal node is chosen",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "ciProb",
          "package": "genprog",
          "partial": "Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:ciProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrossover operation of two individuals, resulting in two\n offsprings. Crossover is performed by choosing at random two nodes\n in each expressions, and then by exchanging the subexpressions\n rooted at these nodes between the two individuals. The probability\n that an internal (functional) node is chosen as crossover point is\n set by the \u003ccode\u003e\u003ca\u003eciProb\u003c/a\u003e\u003c/code\u003e parameter in \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, whereas the\n probability that an external (terminal) node is chosen equals\n \u003ccode\u003e1-ciProb\u003c/code\u003e. Among internal and external nodes, nodes are chosen\n uniformly at random. If the depth of a created offspring exceeds\n the depth limit \u003ccode\u003e\u003ca\u003ecDepth\u003c/a\u003e\u003c/code\u003e specified by evolution parameters\n \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, that offspring is discarded and a parent is\n reproduced (i.e., copied as-is).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "crossoverInd",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Ind e -\u003e Ind e -\u003e m (Ind e, Ind e)",
          "source": "src/GenProg.html#crossoverInd",
          "type": "function"
        },
        "index": {
          "description": "Crossover operation of two individuals resulting in two offsprings Crossover is performed by choosing at random two nodes in each expressions and then by exchanging the subexpressions rooted at these nodes between the two individuals The probability that an internal functional node is chosen as crossover point is set by the ciProb parameter in EvolParams whereas the probability that an external terminal node is chosen equals ciProb Among internal and external nodes nodes are chosen uniformly at random If the depth of created offspring exceeds the depth limit cDepth specified by evolution parameters EvolParams that offspring is discarded and parent is reproduced i.e copied as-is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "crossoverInd",
          "normalized": "EvolParams a b-\u003eInd b-\u003eInd b-\u003ea(Ind b,Ind b)",
          "package": "genprog",
          "partial": "Ind",
          "signature": "EvolParams m e-\u003eInd e-\u003eInd e-\u003em(Ind e,Ind e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:crossoverInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies crossover to two randomly chosen individuals from a\n population. The probability of an individual being chosen as parent\n is fitness-proportionate (individuals with better fitness have\n better chanches of being chosen for crossover).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "crossoverPop",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e m (Ind e, Ind e)",
          "source": "src/GenProg.html#crossoverPop",
          "type": "function"
        },
        "index": {
          "description": "Applies crossover to two randomly chosen individuals from population The probability of an individual being chosen as parent is fitness-proportionate individuals with better fitness have better chanches of being chosen for crossover",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "crossoverPop",
          "normalized": "EvolParams a b-\u003ePop b-\u003ea(Ind b,Ind b)",
          "package": "genprog",
          "partial": "Pop",
          "signature": "EvolParams m e-\u003ePop e-\u003em(Ind e,Ind e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:crossoverPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GenProg",
          "name": "defaultEvolParams",
          "package": "genprog",
          "signature": "EvolParams m e",
          "source": "src/GenProg.html#defaultEvolParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "defaultEvolParams",
          "package": "genprog",
          "partial": "Evol Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:defaultEvolParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault mutation. Replaces a node, irrespective of its value,\n with a randomly generated subexpression whose depth is limited to\n \u003ccode\u003e\u003ca\u003eiDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "defaultMutation",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Mutate m e",
          "source": "src/GenProg.html#defaultMutation",
          "type": "function"
        },
        "index": {
          "description": "Default mutation Replaces node irrespective of its value with randomly generated subexpression whose depth is limited to iDepth",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "defaultMutation",
          "normalized": "EvolParams a b-\u003eMutate a b",
          "package": "genprog",
          "partial": "Mutation",
          "signature": "EvolParams m e-\u003eMutate m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:defaultMutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "depth",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#depth",
          "type": "function"
        },
        "index": {
          "description": "The depth of an expression Equals for single-node expressions",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "depth",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElitist factor: number of best-fitted individuals that are preserved\n from each generation (reproduced as-is into next evolution state).\n Default is \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "elitists",
          "package": "genprog",
          "signature": "Int",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Elitist factor number of best-fitted individuals that are preserved from each generation reproduced as-is into next evolution state Default is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "elitists",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:elitists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an initial population and evolves it until termination\n predicate is satisfied, returning the last evolution state.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "evolve",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e m (EvolState e)",
          "source": "src/GenProg.html#evolve",
          "type": "function"
        },
        "index": {
          "description": "Creates an initial population and evolves it until termination predicate is satisfied returning the last evolution state",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "evolve",
          "normalized": "EvolParams a b-\u003ea(EvolState b)",
          "package": "genprog",
          "signature": "EvolParams m e-\u003em(EvolState e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvolves a given initial population until termination\n predicate is satisfied, returning the last evolution state.\n If the size of the initial population is less than\n \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e, the population will be replenished (see \u003ccode\u003e\u003ca\u003ereplenishPop\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "evolveFrom",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e m (EvolState e)",
          "source": "src/GenProg.html#evolveFrom",
          "type": "function"
        },
        "index": {
          "description": "Evolves given initial population until termination predicate is satisfied returning the last evolution state If the size of the initial population is less than popSize the population will be replenished see replenishPop",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "evolveFrom",
          "normalized": "EvolParams a b-\u003ePop b-\u003ea(EvolState b)",
          "package": "genprog",
          "partial": "From",
          "signature": "EvolParams m e-\u003ePop e-\u003em(EvolState e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an initial population and runs evolution until\n termination predicate is satisfied. Returns a list of successive\n evolution states.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "evolveTrace",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e m [EvolState e]",
          "source": "src/GenProg.html#evolveTrace",
          "type": "function"
        },
        "index": {
          "description": "Creates an initial population and runs evolution until termination predicate is satisfied Returns list of successive evolution states",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "evolveTrace",
          "normalized": "EvolParams a b-\u003ea[EvolState b]",
          "package": "genprog",
          "partial": "Trace",
          "signature": "EvolParams m e-\u003em[EvolState e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns evolution on a given initial population until termination\n predicate is satisfied and returns a list of successive evolution\n states. If the size of the initial population is less than\n \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e, the population will be replenished (see \u003ccode\u003e\u003ca\u003ereplenishPop\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "evolveTraceFrom",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e m [EvolState e]",
          "source": "src/GenProg.html#evolveTraceFrom",
          "type": "function"
        },
        "index": {
          "description": "Runs evolution on given initial population until termination predicate is satisfied and returns list of successive evolution states If the size of the initial population is less than popSize the population will be replenished see replenishPop",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "evolveTraceFrom",
          "normalized": "EvolParams a b-\u003ePop b-\u003ea[EvolState b]",
          "package": "genprog",
          "partial": "Trace From",
          "signature": "EvolParams m e-\u003ePop e-\u003em[EvolState e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveTraceFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandardized fitness function. Default value is \u003ccode\u003eundefined\u003c/code\u003e\n (must be overriden).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "fitness",
          "package": "genprog",
          "signature": "Fitness e",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Standardized fitness function Default value is undefined must be overriden",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "fitness",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:fitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random expression fully expanded to the specified depth.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "generateFullExpr",
          "package": "genprog",
          "signature": "Int -\u003e m e",
          "source": "src/GenProg.html#generateFullExpr",
          "type": "function"
        },
        "index": {
          "description": "Generates random expression fully expanded to the specified depth",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "generateFullExpr",
          "normalized": "Int-\u003ea b",
          "package": "genprog",
          "partial": "Full Expr",
          "signature": "Int-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generateFullExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random expression of limited depth. The maximum depth of\n the resulting expression may be less than the specified depth\n limit, and paths may be of different length.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "generateGrownExpr",
          "package": "genprog",
          "signature": "Int -\u003e m e",
          "source": "src/GenProg.html#generateGrownExpr",
          "type": "function"
        },
        "index": {
          "description": "Generates random expression of limited depth The maximum depth of the resulting expression may be less than the specified depth limit and paths may be of different length",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "generateGrownExpr",
          "normalized": "Int-\u003ea b",
          "package": "genprog",
          "partial": "Grown Expr",
          "signature": "Int-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generateGrownExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate population of given size and given depth limit using\n \u003cem\u003eramped half-and-half\u003c/em\u003e method (Koza, 1992): for each depth value from 0 to\n the initial depth limit \u003ccode\u003e\u003ca\u003eiDepth\u003c/a\u003e\u003c/code\u003e, 50% of individuals are generated using\n \u003ccode\u003e\u003ca\u003egenerateFullExpr\u003c/a\u003e\u003c/code\u003e and 50% are generated using\n \u003ccode\u003e\u003ca\u003egenerateGrownExpr\u003c/a\u003e\u003c/code\u003e. Afterwards, duplicates are removed, thus the\n size of the resulting population may actually be less than the\n specified size.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "generatePop",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e m (Pop e)",
          "source": "src/GenProg.html#generatePop",
          "type": "function"
        },
        "index": {
          "description": "Generate population of given size and given depth limit using ramped half-and-half method Koza for each depth value from to the initial depth limit iDepth of individuals are generated using generateFullExpr and are generated using generateGrownExpr Afterwards duplicates are removed thus the size of the resulting population may actually be less than the specified size",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "generatePop",
          "normalized": "EvolParams a b-\u003ea(Pop b)",
          "package": "genprog",
          "partial": "Pop",
          "signature": "EvolParams m e-\u003em(Pop e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generatePop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepth of expressions in initial population. Default is \u003ccode\u003e6\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "iDepth",
          "package": "genprog",
          "signature": "Int",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Depth of expressions in initial population Default is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "iDepth",
          "package": "genprog",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:iDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteration (current generation number).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "iter",
          "package": "genprog",
          "signature": "Int",
          "source": "src/GenProg.html#EvolState",
          "type": "function"
        },
        "index": {
          "description": "Iteration current generation number",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "iter",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability that an individual gets mutated. Default is \u003ccode\u003e0\u003c/code\u003e\n (no mutation).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mProb",
          "package": "genprog",
          "signature": "Double",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Probability that an individual gets mutated Default is no mutation",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mProb",
          "package": "genprog",
          "partial": "Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two populations by taking \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e best-fitted individuals\n from the union of the two populations.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mergePop",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e Pop e -\u003e Pop e",
          "source": "src/GenProg.html#mergePop",
          "type": "function"
        },
        "index": {
          "description": "Merges two populations by taking popSize best-fitted individuals from the union of the two populations",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mergePop",
          "normalized": "EvolParams a b-\u003ePop b-\u003ePop b-\u003ePop b",
          "package": "genprog",
          "partial": "Pop",
          "signature": "EvolParams m e-\u003ePop e-\u003ePop e-\u003ePop e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mergePop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability that an internal (functional) node is chosen for\n mutation. Default is \u003ccode\u003e0.1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "miProb",
          "package": "genprog",
          "signature": "Double",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Probability that an internal functional node is chosen for mutation Default is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "miProb",
          "package": "genprog",
          "partial": "Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:miProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps an expression into an individual.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mkInd",
          "package": "genprog",
          "signature": "Fitness e -\u003e e -\u003e Ind e",
          "source": "src/GenProg.html#mkInd",
          "type": "function"
        },
        "index": {
          "description": "Wraps an expression into an individual",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mkInd",
          "normalized": "Fitness a-\u003ea-\u003eInd a",
          "package": "genprog",
          "partial": "Ind",
          "signature": "Fitness e-\u003ee-\u003eInd e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mkInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a list of individuals into a population.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mkPop",
          "package": "genprog",
          "signature": "[Ind e] -\u003e Pop e",
          "source": "src/GenProg.html#mkPop",
          "type": "function"
        },
        "index": {
          "description": "Wraps list of individuals into population",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mkPop",
          "normalized": "[Ind a]-\u003ePop a",
          "package": "genprog",
          "partial": "Pop",
          "signature": "[Ind e]-\u003ePop e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mkPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutation function. Defines how to change a randomly chosen\n node. Default is \u003ccode\u003edefaultMutation defaultEvolParams\u003c/code\u003e\n (replacement of a chosen node with a randomly generated subexpression).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mutate",
          "package": "genprog",
          "signature": "Mutate m e",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Mutation function Defines how to change randomly chosen node Default is defaultMutation defaultEvolParams replacement of chosen node with randomly generated subexpression",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mutate",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutates an individual by applying the mutation function \u003ccode\u003emutate\u003c/code\u003e\n to a randomly selected node. The probability that an internal\n (functional) node is chosen for muration is set by the \u003ccode\u003e\u003ca\u003emiProb\u003c/a\u003e\u003c/code\u003e\n parameter in \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, whereas the probability that an external\n (terminal) node is chosen equals \u003ccode\u003e1-miProb\u003c/code\u003e. Among internal and\n external nodes, nodes are chosen uniformly at random. If the depth\n of the mutated expression exceeds the depth limit \u003ccode\u003e\u003ca\u003ecDepth\u003c/a\u003e\u003c/code\u003e\n specified by evolution parameters \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, the individual is\n left unaltered.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mutateInd",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Ind e -\u003e m (Ind e)",
          "source": "src/GenProg.html#mutateInd",
          "type": "function"
        },
        "index": {
          "description": "Mutates an individual by applying the mutation function mutate to randomly selected node The probability that an internal functional node is chosen for muration is set by the miProb parameter in EvolParams whereas the probability that an external terminal node is chosen equals miProb Among internal and external nodes nodes are chosen uniformly at random If the depth of the mutated expression exceeds the depth limit cDepth specified by evolution parameters EvolParams the individual is left unaltered",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mutateInd",
          "normalized": "EvolParams a b-\u003eInd b-\u003ea(Ind b)",
          "package": "genprog",
          "partial": "Ind",
          "signature": "EvolParams m e-\u003eInd e-\u003em(Ind e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutateInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies mutation operation to individuals from a population. The\n probability of mutating each individual is determined by \u003ccode\u003e\u003ca\u003emProb\u003c/a\u003e\u003c/code\u003e parameter\n from \u003ccode\u003eEvalParams\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "mutatePop",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e m (Pop e)",
          "source": "src/GenProg.html#mutatePop",
          "type": "function"
        },
        "index": {
          "description": "Applies mutation operation to individuals from population The probability of mutating each individual is determined by mProb parameter from EvalParams",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "mutatePop",
          "normalized": "EvolParams a b-\u003ePop b-\u003ea(Pop b)",
          "package": "genprog",
          "partial": "Pop",
          "signature": "EvolParams m e-\u003ePop e-\u003em(Pop e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutatePop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "nodes",
          "package": "genprog",
          "signature": "e -\u003e Int",
          "source": "src/GenProg-GenExpr.html#nodes",
          "type": "function"
        },
        "index": {
          "description": "Number of nodes an expression has",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "nodes",
          "normalized": "a-\u003eInt",
          "package": "genprog",
          "signature": "e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random nonterminal (functional) node \u003ccode\u003eF(T,...,T)\u003c/code\u003e whose\n arguments are again terminals (this condition is not verified).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "nonterminal",
          "package": "genprog",
          "signature": "m e",
          "source": "src/GenProg.html#nonterminal",
          "type": "method"
        },
        "index": {
          "description": "Generates random nonterminal functional node whose arguments are again terminals this condition is not verified",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "nonterminal",
          "package": "genprog",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:nonterminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent population.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "pop",
          "package": "genprog",
          "signature": "Pop e",
          "source": "src/GenProg.html#EvolState",
          "type": "function"
        },
        "index": {
          "description": "Current population",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "pop",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation size (number of individuals). Default is \u003ccode\u003e500\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "popSize",
          "package": "genprog",
          "signature": "Int",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Population size number of individuals Default is",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "popSize",
          "package": "genprog",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:popSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplenishes a population up to \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e by randomly\n generating new individuals.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "replenishPop",
          "package": "genprog",
          "signature": "EvolParams m e -\u003e Pop e -\u003e m (Pop e)",
          "source": "src/GenProg.html#replenishPop",
          "type": "function"
        },
        "index": {
          "description": "Replenishes population up to popSize by randomly generating new individuals",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "replenishPop",
          "normalized": "EvolParams a b-\u003ePop b-\u003ea(Pop b)",
          "package": "genprog",
          "partial": "Pop",
          "signature": "EvolParams m e-\u003ePop e-\u003em(Pop e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:replenishPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandardized fitness of an individual as computed by \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "sFitness",
          "package": "genprog",
          "signature": "Ind e -\u003e Double",
          "source": "src/GenProg.html#sFitness",
          "type": "function"
        },
        "index": {
          "description": "Standardized fitness of an individual as computed by fitness",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "sFitness",
          "normalized": "Ind a-\u003eDouble",
          "package": "genprog",
          "partial": "Fitness",
          "signature": "Ind e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:sFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTermination predicate: terminate if best individual's\n standardized fitness is greater than or equal to the specified value.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "tFitness",
          "package": "genprog",
          "signature": "Double -\u003e Terminate e",
          "source": "src/GenProg.html#tFitness",
          "type": "function"
        },
        "index": {
          "description": "Termination predicate terminate if best individual standardized fitness is greater than or equal to the specified value",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "tFitness",
          "normalized": "Double-\u003eTerminate a",
          "package": "genprog",
          "partial": "Fitness",
          "signature": "Double-\u003eTerminate e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTermination predicate: terminate after running for the specified\n number of iterations.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "tGeneration",
          "package": "genprog",
          "signature": "Int -\u003e Terminate e",
          "source": "src/GenProg.html#tGeneration",
          "type": "function"
        },
        "index": {
          "description": "Termination predicate terminate after running for the specified number of iterations",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "tGeneration",
          "normalized": "Int-\u003eTerminate a",
          "package": "genprog",
          "partial": "Generation",
          "signature": "Int-\u003eTerminate e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tGeneration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTermination predicate: terminate if any individual satisfies the\n specified predicate.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "tSuccess",
          "package": "genprog",
          "signature": "(e -\u003e Bool) -\u003e Terminate e",
          "source": "src/GenProg.html#tSuccess",
          "type": "function"
        },
        "index": {
          "description": "Termination predicate terminate if any individual satisfies the specified predicate",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "tSuccess",
          "normalized": "(a-\u003eBool)-\u003eTerminate a",
          "package": "genprog",
          "partial": "Success",
          "signature": "(e-\u003eBool)-\u003eTerminate e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random terminal \u003ccode\u003eT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "terminal",
          "package": "genprog",
          "signature": "m e",
          "source": "src/GenProg.html#terminal",
          "type": "method"
        },
        "index": {
          "description": "Generates random terminal",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "terminal",
          "package": "genprog",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTermination predicate. Default is \u003ccode\u003e50\u003c/code\u003e (terminate after 50 generations).\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "terminate",
          "package": "genprog",
          "signature": "Terminate e",
          "source": "src/GenProg.html#EvolParams",
          "type": "function"
        },
        "index": {
          "description": "Termination predicate Default is terminate after generations",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "terminate",
          "package": "genprog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the expression wrapped by an individual.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "unInd",
          "package": "genprog",
          "signature": "Ind e -\u003e e",
          "source": "src/GenProg.html#unInd",
          "type": "function"
        },
        "index": {
          "description": "Returns the expression wrapped by an individual",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "unInd",
          "normalized": "Ind a-\u003ea",
          "package": "genprog",
          "partial": "Ind",
          "signature": "Ind e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:unInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps a population.\n\u003c/p\u003e",
          "module": "GenProg",
          "name": "unPop",
          "package": "genprog",
          "signature": "Pop e -\u003e [Ind e]",
          "source": "src/GenProg.html#unPop",
          "type": "function"
        },
        "index": {
          "description": "Unwraps population",
          "hierarchy": "GenProg",
          "module": "GenProg",
          "name": "unPop",
          "normalized": "Pop a-\u003e[Ind a]",
          "package": "genprog",
          "partial": "Pop",
          "signature": "Pop e-\u003e[Ind e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:unPop"
      }
    }
  ]
]