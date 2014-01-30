[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the \u003ccode\u003eGenProg.GenExpr\u003c/code\u003e interface for members of\n the \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e typeclass. The implementation is based on SYB and SYZ\n generic programming frameworks (see\n \u003ca\u003ehttp://hackage.haskell.org/package/syb\u003c/a\u003e and\n \u003ca\u003ehttp://hackage.haskell.org/package/syz\u003c/a\u003e for details).\n\u003c/p\u003e\u003cp\u003eNB: Subexpressions that are candidates for crossover points or\n mutation must be of the same type as the expression itself, and\n must be reachable from the root node by type-preserving traversal.\n See below for an example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "module",
        "fct-source": "src/GenProg-GenExpr-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "Implementation of the GenProg.GenExpr interface for members of the Data typeclass The implementation is based on SYB and SYZ generic programming frameworks see http hackage.haskell.org package syb and http hackage.haskell.org package syz for details NB Subexpressions that are candidates for crossover points or mutation must be of the same type as the expression itself and must be reachable from the root node by type-preserving traversal See below for an example",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "Data",
        "normalized": "",
        "package": "genprog",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#t:GenExpr",
      "description": {
        "fct-descr": "\u003cp\u003eThis typeclass defines an interface to expressions\n that can be genetically programmed.  The operations that must be\n provided by instances of this class are used for the generation\n of random individuals as well as crossover and mutation operations.\n (An instance for members of the \u003ccode\u003eData\u003c/code\u003e typeclass is provided in\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eexchange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapQ\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003enodeIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "class",
        "fct-source": "src/GenProg-GenExpr.html#GenExpr",
        "fct-type": "class",
        "title": "GenExpr"
      },
      "index": {
        "description": "This typeclass defines an interface to expressions that can be genetically programmed The operations that must be provided by instances of this class are used for the generation of random individuals as well as crossover and mutation operations An instance for members of the Data typeclass is provided in GenProg.GenExpr.Data Minimal complete definition exchange nodeMapM nodeMapQ and nodeIndices",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "GenExpr",
        "normalized": "",
        "package": "genprog",
        "partial": "Gen Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:adjustM",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts a subexpression rooted at the given node by applying a\n monadic transformation function.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e m e) -\u003e e -\u003e Int -\u003e m e",
        "fct-source": "src/GenProg-GenExpr.html#adjustM",
        "fct-type": "method",
        "title": "adjustM"
      },
      "index": {
        "description": "Adjusts subexpression rooted at the given node by applying monadic transformation function",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "adjustM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eInt-\u003eb a",
        "package": "genprog",
        "partial": "",
        "signature": "(e-\u003em e)-\u003ee-\u003eInt-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:depth",
      "description": {
        "fct-descr": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#depth",
        "fct-type": "method",
        "title": "depth"
      },
      "index": {
        "description": "The depth of an expression Equals for single-node expressions",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "depth",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:exchange",
      "description": {
        "fct-descr": "\u003cp\u003eExchanges subtrees of two expressions:\n \u003ccode\u003eexchange e1 n1 e2 n2\u003c/code\u003e replaces the subexpression of \u003ccode\u003ee1\u003c/code\u003e rooted in node\n \u003ccode\u003en1\u003c/code\u003e with the subexpression of \u003ccode\u003ee2\u003c/code\u003e rooted in \u003ccode\u003en2\u003c/code\u003e, and vice versa.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int -\u003e e -\u003e Int -\u003e (e, e)",
        "fct-source": "src/GenProg-GenExpr.html#exchange",
        "fct-type": "method",
        "title": "exchange"
      },
      "index": {
        "description": "Exchanges subtrees of two expressions exchange e1 n1 e2 n2 replaces the subexpression of e1 rooted in node n1 with the subexpression of e2 rooted in n2 and vice versa",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "exchange",
        "normalized": "a-\u003eInt-\u003ea-\u003eInt-\u003e(a,a)",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt-\u003ee-\u003eInt-\u003e(e,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeIndices",
      "description": {
        "fct-descr": "\u003cp\u003eA list of indices of internal (functional) and external\n (terminal) nodes of an expression.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e ([Int], [Int])",
        "fct-source": "src/GenProg-GenExpr.html#nodeIndices",
        "fct-type": "method",
        "title": "nodeIndices"
      },
      "index": {
        "description": "list of indices of internal functional and external terminal nodes of an expression",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "nodeIndices",
        "normalized": "a-\u003e([Int],[Int])",
        "package": "genprog",
        "partial": "Indices",
        "signature": "e-\u003e([Int],[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeMapM",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a monadic transformation function over the immediate\n children of the given node.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e m e) -\u003e e -\u003e m e",
        "fct-source": "src/GenProg-GenExpr.html#nodeMapM",
        "fct-type": "method",
        "title": "nodeMapM"
      },
      "index": {
        "description": "Maps monadic transformation function over the immediate children of the given node",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "nodeMapM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "genprog",
        "partial": "Map",
        "signature": "(e-\u003em e)-\u003ee-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodeMapQ",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a query function over the immediate children of the given\n node and returns a list of results.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e a) -\u003e e -\u003e [a]",
        "fct-source": "src/GenProg-GenExpr.html#nodeMapQ",
        "fct-type": "method",
        "title": "nodeMapQ"
      },
      "index": {
        "description": "Maps query function over the immediate children of the given node and returns list of results",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "nodeMapQ",
        "normalized": "(a-\u003eb)-\u003ea-\u003e[b]",
        "package": "genprog",
        "partial": "Map",
        "signature": "(e-\u003ea)-\u003ee-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr-Data.html#v:nodes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr.Data",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#nodes",
        "fct-type": "method",
        "title": "nodes"
      },
      "index": {
        "description": "Number of nodes an expression has",
        "hierarchy": "GenProg GenExpr Data",
        "module": "GenProg.GenExpr.Data",
        "name": "nodes",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to genetically programmable expressions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "module",
        "fct-source": "src/GenProg-GenExpr.html",
        "fct-type": "module",
        "title": "GenExpr"
      },
      "index": {
        "description": "An interface to genetically programmable expressions",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "GenExpr",
        "normalized": "",
        "package": "genprog",
        "partial": "Gen Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#t:GenExpr",
      "description": {
        "fct-descr": "\u003cp\u003eThis typeclass defines an interface to expressions\n that can be genetically programmed.  The operations that must be\n provided by instances of this class are used for the generation\n of random individuals as well as crossover and mutation operations.\n (An instance for members of the \u003ccode\u003eData\u003c/code\u003e typeclass is provided in\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eexchange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enodeMapQ\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003enodeIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "class",
        "fct-source": "src/GenProg-GenExpr.html#GenExpr",
        "fct-type": "class",
        "title": "GenExpr"
      },
      "index": {
        "description": "This typeclass defines an interface to expressions that can be genetically programmed The operations that must be provided by instances of this class are used for the generation of random individuals as well as crossover and mutation operations An instance for members of the Data typeclass is provided in GenProg.GenExpr.Data Minimal complete definition exchange nodeMapM nodeMapQ and nodeIndices",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "GenExpr",
        "normalized": "",
        "package": "genprog",
        "partial": "Gen Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:adjustM",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts a subexpression rooted at the given node by applying a\n monadic transformation function.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e m e) -\u003e e -\u003e Int -\u003e m e",
        "fct-source": "src/GenProg-GenExpr.html#adjustM",
        "fct-type": "method",
        "title": "adjustM"
      },
      "index": {
        "description": "Adjusts subexpression rooted at the given node by applying monadic transformation function",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "adjustM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eInt-\u003eb a",
        "package": "genprog",
        "partial": "",
        "signature": "(e-\u003em e)-\u003ee-\u003eInt-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:depth",
      "description": {
        "fct-descr": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#depth",
        "fct-type": "method",
        "title": "depth"
      },
      "index": {
        "description": "The depth of an expression Equals for single-node expressions",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "depth",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:exchange",
      "description": {
        "fct-descr": "\u003cp\u003eExchanges subtrees of two expressions:\n \u003ccode\u003eexchange e1 n1 e2 n2\u003c/code\u003e replaces the subexpression of \u003ccode\u003ee1\u003c/code\u003e rooted in node\n \u003ccode\u003en1\u003c/code\u003e with the subexpression of \u003ccode\u003ee2\u003c/code\u003e rooted in \u003ccode\u003en2\u003c/code\u003e, and vice versa.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int -\u003e e -\u003e Int -\u003e (e, e)",
        "fct-source": "src/GenProg-GenExpr.html#exchange",
        "fct-type": "method",
        "title": "exchange"
      },
      "index": {
        "description": "Exchanges subtrees of two expressions exchange e1 n1 e2 n2 replaces the subexpression of e1 rooted in node n1 with the subexpression of e2 rooted in n2 and vice versa",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "exchange",
        "normalized": "a-\u003eInt-\u003ea-\u003eInt-\u003e(a,a)",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt-\u003ee-\u003eInt-\u003e(e,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeIndices",
      "description": {
        "fct-descr": "\u003cp\u003eA list of indices of internal (functional) and external\n (terminal) nodes of an expression.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e ([Int], [Int])",
        "fct-source": "src/GenProg-GenExpr.html#nodeIndices",
        "fct-type": "method",
        "title": "nodeIndices"
      },
      "index": {
        "description": "list of indices of internal functional and external terminal nodes of an expression",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "nodeIndices",
        "normalized": "a-\u003e([Int],[Int])",
        "package": "genprog",
        "partial": "Indices",
        "signature": "e-\u003e([Int],[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeMapM",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a monadic transformation function over the immediate\n children of the given node.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e m e) -\u003e e -\u003e m e",
        "fct-source": "src/GenProg-GenExpr.html#nodeMapM",
        "fct-type": "method",
        "title": "nodeMapM"
      },
      "index": {
        "description": "Maps monadic transformation function over the immediate children of the given node",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "nodeMapM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "genprog",
        "partial": "Map",
        "signature": "(e-\u003em e)-\u003ee-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodeMapQ",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a query function over the immediate children of the given\n node and returns a list of results.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e a) -\u003e e -\u003e [a]",
        "fct-source": "src/GenProg-GenExpr.html#nodeMapQ",
        "fct-type": "method",
        "title": "nodeMapQ"
      },
      "index": {
        "description": "Maps query function over the immediate children of the given node and returns list of results",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "nodeMapQ",
        "normalized": "(a-\u003eb)-\u003ea-\u003e[b]",
        "package": "genprog",
        "partial": "Map",
        "signature": "(e-\u003ea)-\u003ee-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg-GenExpr.html#v:nodes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
        "fct-module": "GenProg.GenExpr",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#nodes",
        "fct-type": "method",
        "title": "nodes"
      },
      "index": {
        "description": "Number of nodes an expression has",
        "hierarchy": "GenProg GenExpr",
        "module": "GenProg.GenExpr",
        "name": "nodes",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Genetic Programming Library.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGenetic programming\u003c/em\u003e is an evolutionary optimization technique\n inspired by biological evolution. It is similar to \u003cem\u003egenetic algorithms\u003c/em\u003e\n except that the individual solutions are programs (or, more generally, \n \u003cem\u003eexpressions\u003c/em\u003e) representing a solution to a given problem. A genetic \n program is represented as an \u003cem\u003eabstract syntax tree\u003c/em\u003e and associated \n with a custom-defined \u003cem\u003efitness\u003c/em\u003e value indicating the quality of the \n solution. Starting from a randomly generated initial population of \n genetic programs, the genetic operators of \u003cem\u003eselection\u003c/em\u003e, \u003cem\u003ecrossover\u003c/em\u003e, \n and (occasionally) \u003cem\u003emutation\u003c/em\u003e are used to evolve programs of \n increasingly better quality.\n\u003c/p\u003e\u003cp\u003eStandard reference is: John Koza. \u003cem\u003eGenetic programming:\u003c/em\u003e\n \u003cem\u003eOn the Programming of Computers by Means of Natural Selection\u003c/em\u003e.\n MIT Press, 1992.\n\u003c/p\u003e\u003cp\u003eIn GenProg, a genetic program is represented by a value of an\n algebraic datatype. To use a datatype as a genetic program, it\n suffices to define it as an instance of the \u003ccode\u003e\u003ca\u003eGenProg\u003c/a\u003e\u003c/code\u003e typeclass.\n A custom datatype can be made an instance of the \u003ccode\u003e\u003ca\u003eGenProg\u003c/a\u003e\u003c/code\u003e\n typeclass, provided it is an instance of the \u003ccode\u003eData\u003c/code\u003e typeclass (see\n \u003ca\u003eGenProg.GenExpr.Data\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAn example of how to use this library is given below.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "module",
        "fct-source": "src/GenProg.html",
        "fct-type": "module",
        "title": "GenProg"
      },
      "index": {
        "description": "The Genetic Programming Library Genetic programming is an evolutionary optimization technique inspired by biological evolution It is similar to genetic algorithms except that the individual solutions are programs or more generally expressions representing solution to given problem genetic program is represented as an abstract syntax tree and associated with custom-defined fitness value indicating the quality of the solution Starting from randomly generated initial population of genetic programs the genetic operators of selection crossover and occasionally mutation are used to evolve programs of increasingly better quality Standard reference is John Koza Genetic programming On the Programming of Computers by Means of Natural Selection MIT Press In GenProg genetic program is represented by value of an algebraic datatype To use datatype as genetic program it suffices to define it as an instance of the GenProg typeclass custom datatype can be made an instance of the GenProg typeclass provided it is an instance of the Data typeclass see GenProg.GenExpr.Data An example of how to use this library is given below",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "GenProg",
        "normalized": "",
        "package": "genprog",
        "partial": "Gen Prog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:EvolParams",
      "description": {
        "fct-descr": "\u003cp\u003eParameters governing the evolution.\n\u003c/p\u003e\u003cp\u003eDefault evolution parameters,\n as used in (Koza, 1992), are defined by \u003ccode\u003e\u003ca\u003edefaultEvolParams\u003c/a\u003e\u003c/code\u003e\n and indicated below. At least the fitness function \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e should\n be overriden.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "data",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "data",
        "title": "EvolParams"
      },
      "index": {
        "description": "Parameters governing the evolution Default evolution parameters as used in Koza are defined by defaultEvolParams and indicated below At least the fitness function fitness should be overriden",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "EvolParams",
        "normalized": "",
        "package": "genprog",
        "partial": "Evol Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:EvolState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of the evolution.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "data",
        "fct-source": "src/GenProg.html#EvolState",
        "fct-type": "data",
        "title": "EvolState"
      },
      "index": {
        "description": "The state of the evolution",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "EvolState",
        "normalized": "",
        "package": "genprog",
        "partial": "Evol State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Fitness",
      "description": {
        "fct-descr": "\u003cp\u003eStandardized fitness. It takes on values from 0 (best fitness) to\n +infinity (worst fitness).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "type",
        "fct-source": "src/GenProg.html#Fitness",
        "fct-type": "type",
        "title": "Fitness"
      },
      "index": {
        "description": "Standardized fitness It takes on values from best fitness to infinity worst fitness",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "Fitness",
        "normalized": "",
        "package": "genprog",
        "partial": "Fitness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:GenProg",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass defining a genetic program interface. Datatypes \u003ccode\u003ee\u003c/code\u003e\n that are to be used as genetic programs must be instances of the\n \u003ccode\u003e\u003ca\u003eGenExpr\u003c/a\u003e\u003c/code\u003e typeclass and must implement this interface. \n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "class",
        "fct-source": "src/GenProg.html#GenProg",
        "fct-type": "class",
        "title": "GenProg"
      },
      "index": {
        "description": "typeclass defining genetic program interface Datatypes that are to be used as genetic programs must be instances of the GenExpr typeclass and must implement this interface",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "GenProg",
        "normalized": "",
        "package": "genprog",
        "partial": "Gen Prog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Ind",
      "description": {
        "fct-descr": "\u003cp\u003eA genetically programmed individual, representing a basic unit\n of evolution. (Basically a wrapper around a genetically programmable\n expression.)\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "data",
        "fct-source": "src/GenProg.html#Ind",
        "fct-type": "data",
        "title": "Ind"
      },
      "index": {
        "description": "genetically programmed individual representing basic unit of evolution Basically wrapper around genetically programmable expression",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "Ind",
        "normalized": "",
        "package": "genprog",
        "partial": "Ind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Mutate",
      "description": {
        "fct-descr": "\u003cp\u003eA function to mutate a chosen expression node.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "type",
        "fct-source": "src/GenProg.html#Mutate",
        "fct-type": "type",
        "title": "Mutate"
      },
      "index": {
        "description": "function to mutate chosen expression node",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "Mutate",
        "normalized": "",
        "package": "genprog",
        "partial": "Mutate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Pop",
      "description": {
        "fct-descr": "\u003cp\u003eA population of individuals. (Basically a wrapper around a list of\n individuals.)\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "data",
        "fct-source": "src/GenProg.html#Pop",
        "fct-type": "data",
        "title": "Pop"
      },
      "index": {
        "description": "population of individuals Basically wrapper around list of individuals",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "Pop",
        "normalized": "",
        "package": "genprog",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#t:Terminate",
      "description": {
        "fct-descr": "\u003cp\u003eTermination predicate.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "type",
        "fct-source": "src/GenProg.html#Terminate",
        "fct-type": "type",
        "title": "Terminate"
      },
      "index": {
        "description": "Termination predicate",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "Terminate",
        "normalized": "",
        "package": "genprog",
        "partial": "Terminate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:EvolParams",
      "description": {
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "EvolParams"
      },
      "index": {
        "description": "",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "EvolParams",
        "normalized": "",
        "package": "genprog",
        "partial": "Evol Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:EvolState",
      "description": {
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolState",
        "fct-source": "src/GenProg.html#EvolState",
        "fct-type": "function",
        "title": "EvolState"
      },
      "index": {
        "description": "",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "EvolState",
        "normalized": "",
        "package": "genprog",
        "partial": "Evol State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:aFitness",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusted fitness of an individual. Adjusted fitness equals\n \u003ccode\u003e1/(1+s)\u003c/code\u003e, where \u003ccode\u003es\u003c/code\u003e is the standardized fitness as computed by\n \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e. To reduce computational costs, this value is computed\n only once and then cached.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Ind e -\u003e Double",
        "fct-source": "src/GenProg.html#aFitness",
        "fct-type": "function",
        "title": "aFitness"
      },
      "index": {
        "description": "Adjusted fitness of an individual Adjusted fitness equals where is the standardized fitness as computed by fitness To reduce computational costs this value is computed only once and then cached",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "aFitness",
        "normalized": "Ind a-\u003eDouble",
        "package": "genprog",
        "partial": "Fitness",
        "signature": "Ind e-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgDepth",
      "description": {
        "fct-descr": "\u003cp\u003eAverage depth of expressions in the population.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e -\u003e Double",
        "fct-source": "src/GenProg.html#avgDepth",
        "fct-type": "function",
        "title": "avgDepth"
      },
      "index": {
        "description": "Average depth of expressions in the population",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "avgDepth",
        "normalized": "Pop a-\u003eDouble",
        "package": "genprog",
        "partial": "Depth",
        "signature": "Pop e-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgFitness",
      "description": {
        "fct-descr": "\u003cp\u003ePopulation's average standardized fitness.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e -\u003e Double",
        "fct-source": "src/GenProg.html#avgFitness",
        "fct-type": "function",
        "title": "avgFitness"
      },
      "index": {
        "description": "Population average standardized fitness",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "avgFitness",
        "normalized": "Pop a-\u003eDouble",
        "package": "genprog",
        "partial": "Fitness",
        "signature": "Pop e-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:avgNodes",
      "description": {
        "fct-descr": "\u003cp\u003eAverage number of expression nodes in the population.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e -\u003e Double",
        "fct-source": "src/GenProg.html#avgNodes",
        "fct-type": "function",
        "title": "avgNodes"
      },
      "index": {
        "description": "Average number of expression nodes in the population",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "avgNodes",
        "normalized": "Pop a-\u003eDouble",
        "package": "genprog",
        "partial": "Nodes",
        "signature": "Pop e-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:best",
      "description": {
        "fct-descr": "\u003cp\u003ePopulation's best-fitted individual.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e -\u003e Ind e",
        "fct-source": "src/GenProg.html#best",
        "fct-type": "function",
        "title": "best"
      },
      "index": {
        "description": "Population best-fitted individual",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "best",
        "normalized": "Pop a-\u003eInd a",
        "package": "genprog",
        "partial": "",
        "signature": "Pop e-\u003eInd e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cDepth",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum depth of expressions created during the evolution.\n Default is \u003ccode\u003e17\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "cDepth"
      },
      "index": {
        "description": "Maximum depth of expressions created during the evolution Default is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "cDepth",
        "normalized": "",
        "package": "genprog",
        "partial": "Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cProb",
      "description": {
        "fct-descr": "\u003cp\u003eProbability of crossover. Default is \u003ccode\u003e0.9\u003c/code\u003e. If crossover is not\n chosen, an individual is simply reproduced (copied as-is) into\n the next generation.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Double",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "cProb"
      },
      "index": {
        "description": "Probability of crossover Default is If crossover is not chosen an individual is simply reproduced copied as-is into the next generation",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "cProb",
        "normalized": "",
        "package": "genprog",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:cachedBest",
      "description": {
        "fct-descr": "\u003cp\u003eBest individual evolved so far.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Ind e",
        "fct-source": "src/GenProg.html#EvolState",
        "fct-type": "function",
        "title": "cachedBest"
      },
      "index": {
        "description": "Best individual evolved so far",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "cachedBest",
        "normalized": "",
        "package": "genprog",
        "partial": "Best",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:ciProb",
      "description": {
        "fct-descr": "\u003cp\u003eProbability that an internal (functional) node is chosen as a\n crossover point. Default is \u003ccode\u003e0.9\u003c/code\u003e. If an internal node is not\n chosen, an external (terminal) node is\n chosen.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Double",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "ciProb"
      },
      "index": {
        "description": "Probability that an internal functional node is chosen as crossover point Default is If an internal node is not chosen an external terminal node is chosen",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "ciProb",
        "normalized": "",
        "package": "genprog",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:crossoverInd",
      "description": {
        "fct-descr": "\u003cp\u003eCrossover operation of two individuals, resulting in two\n offsprings. Crossover is performed by choosing at random two nodes\n in each expressions, and then by exchanging the subexpressions\n rooted at these nodes between the two individuals. The probability\n that an internal (functional) node is chosen as crossover point is\n set by the \u003ccode\u003e\u003ca\u003eciProb\u003c/a\u003e\u003c/code\u003e parameter in \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, whereas the\n probability that an external (terminal) node is chosen equals\n \u003ccode\u003e1-ciProb\u003c/code\u003e. Among internal and external nodes, nodes are chosen\n uniformly at random. If the depth of a created offspring exceeds\n the depth limit \u003ccode\u003e\u003ca\u003ecDepth\u003c/a\u003e\u003c/code\u003e specified by evolution parameters\n \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, that offspring is discarded and a parent is\n reproduced (i.e., copied as-is).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Ind e -\u003e Ind e -\u003e m (Ind e, Ind e)",
        "fct-source": "src/GenProg.html#crossoverInd",
        "fct-type": "function",
        "title": "crossoverInd"
      },
      "index": {
        "description": "Crossover operation of two individuals resulting in two offsprings Crossover is performed by choosing at random two nodes in each expressions and then by exchanging the subexpressions rooted at these nodes between the two individuals The probability that an internal functional node is chosen as crossover point is set by the ciProb parameter in EvolParams whereas the probability that an external terminal node is chosen equals ciProb Among internal and external nodes nodes are chosen uniformly at random If the depth of created offspring exceeds the depth limit cDepth specified by evolution parameters EvolParams that offspring is discarded and parent is reproduced i.e copied as-is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "crossoverInd",
        "normalized": "EvolParams a b-\u003eInd b-\u003eInd b-\u003ea(Ind b,Ind b)",
        "package": "genprog",
        "partial": "Ind",
        "signature": "EvolParams m e-\u003eInd e-\u003eInd e-\u003em(Ind e,Ind e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:crossoverPop",
      "description": {
        "fct-descr": "\u003cp\u003eApplies crossover to two randomly chosen individuals from a\n population. The probability of an individual being chosen as parent\n is fitness-proportionate (individuals with better fitness have\n better chanches of being chosen for crossover).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e m (Ind e, Ind e)",
        "fct-source": "src/GenProg.html#crossoverPop",
        "fct-type": "function",
        "title": "crossoverPop"
      },
      "index": {
        "description": "Applies crossover to two randomly chosen individuals from population The probability of an individual being chosen as parent is fitness-proportionate individuals with better fitness have better chanches of being chosen for crossover",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "crossoverPop",
        "normalized": "EvolParams a b-\u003ePop b-\u003ea(Ind b,Ind b)",
        "package": "genprog",
        "partial": "Pop",
        "signature": "EvolParams m e-\u003ePop e-\u003em(Ind e,Ind e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:defaultEvolParams",
      "description": {
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e",
        "fct-source": "src/GenProg.html#defaultEvolParams",
        "fct-type": "function",
        "title": "defaultEvolParams"
      },
      "index": {
        "description": "",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "defaultEvolParams",
        "normalized": "",
        "package": "genprog",
        "partial": "Evol Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:defaultMutation",
      "description": {
        "fct-descr": "\u003cp\u003eDefault mutation. Replaces a node, irrespective of its value,\n with a randomly generated subexpression whose depth is limited to\n \u003ccode\u003e\u003ca\u003eiDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Mutate m e",
        "fct-source": "src/GenProg.html#defaultMutation",
        "fct-type": "function",
        "title": "defaultMutation"
      },
      "index": {
        "description": "Default mutation Replaces node irrespective of its value with randomly generated subexpression whose depth is limited to iDepth",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "defaultMutation",
        "normalized": "EvolParams a b-\u003eMutate a b",
        "package": "genprog",
        "partial": "Mutation",
        "signature": "EvolParams m e-\u003eMutate m e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:depth",
      "description": {
        "fct-descr": "\u003cp\u003eThe depth of an expression. Equals 1 for single-node expressions.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#depth",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "The depth of an expression Equals for single-node expressions",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "depth",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:elitists",
      "description": {
        "fct-descr": "\u003cp\u003eElitist factor: number of best-fitted individuals that are preserved\n from each generation (reproduced as-is into next evolution state).\n Default is \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "elitists"
      },
      "index": {
        "description": "Elitist factor number of best-fitted individuals that are preserved from each generation reproduced as-is into next evolution state Default is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "elitists",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolve",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an initial population and evolves it until termination\n predicate is satisfied, returning the last evolution state.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e m (EvolState e)",
        "fct-source": "src/GenProg.html#evolve",
        "fct-type": "function",
        "title": "evolve"
      },
      "index": {
        "description": "Creates an initial population and evolves it until termination predicate is satisfied returning the last evolution state",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "evolve",
        "normalized": "EvolParams a b-\u003ea(EvolState b)",
        "package": "genprog",
        "partial": "",
        "signature": "EvolParams m e-\u003em(EvolState e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveFrom",
      "description": {
        "fct-descr": "\u003cp\u003eEvolves a given initial population until termination\n predicate is satisfied, returning the last evolution state.\n If the size of the initial population is less than\n \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e, the population will be replenished (see \u003ccode\u003e\u003ca\u003ereplenishPop\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e m (EvolState e)",
        "fct-source": "src/GenProg.html#evolveFrom",
        "fct-type": "function",
        "title": "evolveFrom"
      },
      "index": {
        "description": "Evolves given initial population until termination predicate is satisfied returning the last evolution state If the size of the initial population is less than popSize the population will be replenished see replenishPop",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "evolveFrom",
        "normalized": "EvolParams a b-\u003ePop b-\u003ea(EvolState b)",
        "package": "genprog",
        "partial": "From",
        "signature": "EvolParams m e-\u003ePop e-\u003em(EvolState e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveTrace",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an initial population and runs evolution until\n termination predicate is satisfied. Returns a list of successive\n evolution states.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e m [EvolState e]",
        "fct-source": "src/GenProg.html#evolveTrace",
        "fct-type": "function",
        "title": "evolveTrace"
      },
      "index": {
        "description": "Creates an initial population and runs evolution until termination predicate is satisfied Returns list of successive evolution states",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "evolveTrace",
        "normalized": "EvolParams a b-\u003ea[EvolState b]",
        "package": "genprog",
        "partial": "Trace",
        "signature": "EvolParams m e-\u003em[EvolState e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:evolveTraceFrom",
      "description": {
        "fct-descr": "\u003cp\u003eRuns evolution on a given initial population until termination\n predicate is satisfied and returns a list of successive evolution\n states. If the size of the initial population is less than\n \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e, the population will be replenished (see \u003ccode\u003e\u003ca\u003ereplenishPop\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e m [EvolState e]",
        "fct-source": "src/GenProg.html#evolveTraceFrom",
        "fct-type": "function",
        "title": "evolveTraceFrom"
      },
      "index": {
        "description": "Runs evolution on given initial population until termination predicate is satisfied and returns list of successive evolution states If the size of the initial population is less than popSize the population will be replenished see replenishPop",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "evolveTraceFrom",
        "normalized": "EvolParams a b-\u003ePop b-\u003ea[EvolState b]",
        "package": "genprog",
        "partial": "Trace From",
        "signature": "EvolParams m e-\u003ePop e-\u003em[EvolState e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:fitness",
      "description": {
        "fct-descr": "\u003cp\u003eStandardized fitness function. Default value is \u003ccode\u003eundefined\u003c/code\u003e\n (must be overriden).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Fitness e",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "fitness"
      },
      "index": {
        "description": "Standardized fitness function Default value is undefined must be overriden",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "fitness",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generateFullExpr",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random expression fully expanded to the specified depth.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int -\u003e m e",
        "fct-source": "src/GenProg.html#generateFullExpr",
        "fct-type": "function",
        "title": "generateFullExpr"
      },
      "index": {
        "description": "Generates random expression fully expanded to the specified depth",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "generateFullExpr",
        "normalized": "Int-\u003ea b",
        "package": "genprog",
        "partial": "Full Expr",
        "signature": "Int-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generateGrownExpr",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random expression of limited depth. The maximum depth of\n the resulting expression may be less than the specified depth\n limit, and paths may be of different length.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int -\u003e m e",
        "fct-source": "src/GenProg.html#generateGrownExpr",
        "fct-type": "function",
        "title": "generateGrownExpr"
      },
      "index": {
        "description": "Generates random expression of limited depth The maximum depth of the resulting expression may be less than the specified depth limit and paths may be of different length",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "generateGrownExpr",
        "normalized": "Int-\u003ea b",
        "package": "genprog",
        "partial": "Grown Expr",
        "signature": "Int-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:generatePop",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate population of given size and given depth limit using\n \u003cem\u003eramped half-and-half\u003c/em\u003e method (Koza, 1992): for each depth value from 0 to\n the initial depth limit \u003ccode\u003e\u003ca\u003eiDepth\u003c/a\u003e\u003c/code\u003e, 50% of individuals are generated using\n \u003ccode\u003e\u003ca\u003egenerateFullExpr\u003c/a\u003e\u003c/code\u003e and 50% are generated using\n \u003ccode\u003e\u003ca\u003egenerateGrownExpr\u003c/a\u003e\u003c/code\u003e. Afterwards, duplicates are removed, thus the\n size of the resulting population may actually be less than the\n specified size.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e m (Pop e)",
        "fct-source": "src/GenProg.html#generatePop",
        "fct-type": "function",
        "title": "generatePop"
      },
      "index": {
        "description": "Generate population of given size and given depth limit using ramped half-and-half method Koza for each depth value from to the initial depth limit iDepth of individuals are generated using generateFullExpr and are generated using generateGrownExpr Afterwards duplicates are removed thus the size of the resulting population may actually be less than the specified size",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "generatePop",
        "normalized": "EvolParams a b-\u003ea(Pop b)",
        "package": "genprog",
        "partial": "Pop",
        "signature": "EvolParams m e-\u003em(Pop e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:iDepth",
      "description": {
        "fct-descr": "\u003cp\u003eDepth of expressions in initial population. Default is \u003ccode\u003e6\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "iDepth"
      },
      "index": {
        "description": "Depth of expressions in initial population Default is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "iDepth",
        "normalized": "",
        "package": "genprog",
        "partial": "Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003eIteration (current generation number).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int",
        "fct-source": "src/GenProg.html#EvolState",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "Iteration current generation number",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "iter",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mProb",
      "description": {
        "fct-descr": "\u003cp\u003eProbability that an individual gets mutated. Default is \u003ccode\u003e0\u003c/code\u003e\n (no mutation).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Double",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "mProb"
      },
      "index": {
        "description": "Probability that an individual gets mutated Default is no mutation",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mProb",
        "normalized": "",
        "package": "genprog",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mergePop",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two populations by taking \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e best-fitted individuals\n from the union of the two populations.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e Pop e -\u003e Pop e",
        "fct-source": "src/GenProg.html#mergePop",
        "fct-type": "function",
        "title": "mergePop"
      },
      "index": {
        "description": "Merges two populations by taking popSize best-fitted individuals from the union of the two populations",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mergePop",
        "normalized": "EvolParams a b-\u003ePop b-\u003ePop b-\u003ePop b",
        "package": "genprog",
        "partial": "Pop",
        "signature": "EvolParams m e-\u003ePop e-\u003ePop e-\u003ePop e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:miProb",
      "description": {
        "fct-descr": "\u003cp\u003eProbability that an internal (functional) node is chosen for\n mutation. Default is \u003ccode\u003e0.1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Double",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "miProb"
      },
      "index": {
        "description": "Probability that an internal functional node is chosen for mutation Default is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "miProb",
        "normalized": "",
        "package": "genprog",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mkInd",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an expression into an individual.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Fitness e -\u003e e -\u003e Ind e",
        "fct-source": "src/GenProg.html#mkInd",
        "fct-type": "function",
        "title": "mkInd"
      },
      "index": {
        "description": "Wraps an expression into an individual",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mkInd",
        "normalized": "Fitness a-\u003ea-\u003eInd a",
        "package": "genprog",
        "partial": "Ind",
        "signature": "Fitness e-\u003ee-\u003eInd e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mkPop",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a list of individuals into a population.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "[Ind e] -\u003e Pop e",
        "fct-source": "src/GenProg.html#mkPop",
        "fct-type": "function",
        "title": "mkPop"
      },
      "index": {
        "description": "Wraps list of individuals into population",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mkPop",
        "normalized": "[Ind a]-\u003ePop a",
        "package": "genprog",
        "partial": "Pop",
        "signature": "[Ind e]-\u003ePop e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutate",
      "description": {
        "fct-descr": "\u003cp\u003eMutation function. Defines how to change a randomly chosen\n node. Default is \u003ccode\u003edefaultMutation defaultEvolParams\u003c/code\u003e\n (replacement of a chosen node with a randomly generated subexpression).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Mutate m e",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "mutate"
      },
      "index": {
        "description": "Mutation function Defines how to change randomly chosen node Default is defaultMutation defaultEvolParams replacement of chosen node with randomly generated subexpression",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mutate",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutateInd",
      "description": {
        "fct-descr": "\u003cp\u003eMutates an individual by applying the mutation function \u003ccode\u003emutate\u003c/code\u003e\n to a randomly selected node. The probability that an internal\n (functional) node is chosen for muration is set by the \u003ccode\u003e\u003ca\u003emiProb\u003c/a\u003e\u003c/code\u003e\n parameter in \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, whereas the probability that an external\n (terminal) node is chosen equals \u003ccode\u003e1-miProb\u003c/code\u003e. Among internal and\n external nodes, nodes are chosen uniformly at random. If the depth\n of the mutated expression exceeds the depth limit \u003ccode\u003e\u003ca\u003ecDepth\u003c/a\u003e\u003c/code\u003e\n specified by evolution parameters \u003ccode\u003e\u003ca\u003eEvolParams\u003c/a\u003e\u003c/code\u003e, the individual is\n left unaltered.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Ind e -\u003e m (Ind e)",
        "fct-source": "src/GenProg.html#mutateInd",
        "fct-type": "function",
        "title": "mutateInd"
      },
      "index": {
        "description": "Mutates an individual by applying the mutation function mutate to randomly selected node The probability that an internal functional node is chosen for muration is set by the miProb parameter in EvolParams whereas the probability that an external terminal node is chosen equals miProb Among internal and external nodes nodes are chosen uniformly at random If the depth of the mutated expression exceeds the depth limit cDepth specified by evolution parameters EvolParams the individual is left unaltered",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mutateInd",
        "normalized": "EvolParams a b-\u003eInd b-\u003ea(Ind b)",
        "package": "genprog",
        "partial": "Ind",
        "signature": "EvolParams m e-\u003eInd e-\u003em(Ind e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:mutatePop",
      "description": {
        "fct-descr": "\u003cp\u003eApplies mutation operation to individuals from a population. The\n probability of mutating each individual is determined by \u003ccode\u003e\u003ca\u003emProb\u003c/a\u003e\u003c/code\u003e parameter\n from \u003ccode\u003eEvalParams\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e m (Pop e)",
        "fct-source": "src/GenProg.html#mutatePop",
        "fct-type": "function",
        "title": "mutatePop"
      },
      "index": {
        "description": "Applies mutation operation to individuals from population The probability of mutating each individual is determined by mProb parameter from EvalParams",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "mutatePop",
        "normalized": "EvolParams a b-\u003ePop b-\u003ea(Pop b)",
        "package": "genprog",
        "partial": "Pop",
        "signature": "EvolParams m e-\u003ePop e-\u003em(Pop e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:nodes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of nodes an expression has.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/GenProg-GenExpr.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "Number of nodes an expression has",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "nodes",
        "normalized": "a-\u003eInt",
        "package": "genprog",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:nonterminal",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random nonterminal (functional) node \u003ccode\u003eF(T,...,T)\u003c/code\u003e whose\n arguments are again terminals (this condition is not verified).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "m e",
        "fct-source": "src/GenProg.html#nonterminal",
        "fct-type": "method",
        "title": "nonterminal"
      },
      "index": {
        "description": "Generates random nonterminal functional node whose arguments are again terminals this condition is not verified",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "nonterminal",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent population.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e",
        "fct-source": "src/GenProg.html#EvolState",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Current population",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "pop",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:popSize",
      "description": {
        "fct-descr": "\u003cp\u003ePopulation size (number of individuals). Default is \u003ccode\u003e500\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "popSize"
      },
      "index": {
        "description": "Population size number of individuals Default is",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "popSize",
        "normalized": "",
        "package": "genprog",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:replenishPop",
      "description": {
        "fct-descr": "\u003cp\u003eReplenishes a population up to \u003ccode\u003e\u003ca\u003epopSize\u003c/a\u003e\u003c/code\u003e by randomly\n generating new individuals.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "EvolParams m e -\u003e Pop e -\u003e m (Pop e)",
        "fct-source": "src/GenProg.html#replenishPop",
        "fct-type": "function",
        "title": "replenishPop"
      },
      "index": {
        "description": "Replenishes population up to popSize by randomly generating new individuals",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "replenishPop",
        "normalized": "EvolParams a b-\u003ePop b-\u003ea(Pop b)",
        "package": "genprog",
        "partial": "Pop",
        "signature": "EvolParams m e-\u003ePop e-\u003em(Pop e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:sFitness",
      "description": {
        "fct-descr": "\u003cp\u003eStandardized fitness of an individual as computed by \u003ccode\u003e\u003ca\u003efitness\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Ind e -\u003e Double",
        "fct-source": "src/GenProg.html#sFitness",
        "fct-type": "function",
        "title": "sFitness"
      },
      "index": {
        "description": "Standardized fitness of an individual as computed by fitness",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "sFitness",
        "normalized": "Ind a-\u003eDouble",
        "package": "genprog",
        "partial": "Fitness",
        "signature": "Ind e-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tFitness",
      "description": {
        "fct-descr": "\u003cp\u003eTermination predicate: terminate if best individual's\n standardized fitness is greater than or equal to the specified value.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Double -\u003e Terminate e",
        "fct-source": "src/GenProg.html#tFitness",
        "fct-type": "function",
        "title": "tFitness"
      },
      "index": {
        "description": "Termination predicate terminate if best individual standardized fitness is greater than or equal to the specified value",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "tFitness",
        "normalized": "Double-\u003eTerminate a",
        "package": "genprog",
        "partial": "Fitness",
        "signature": "Double-\u003eTerminate e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tGeneration",
      "description": {
        "fct-descr": "\u003cp\u003eTermination predicate: terminate after running for the specified\n number of iterations.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Int -\u003e Terminate e",
        "fct-source": "src/GenProg.html#tGeneration",
        "fct-type": "function",
        "title": "tGeneration"
      },
      "index": {
        "description": "Termination predicate terminate after running for the specified number of iterations",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "tGeneration",
        "normalized": "Int-\u003eTerminate a",
        "package": "genprog",
        "partial": "Generation",
        "signature": "Int-\u003eTerminate e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:tSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eTermination predicate: terminate if any individual satisfies the\n specified predicate.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "(e -\u003e Bool) -\u003e Terminate e",
        "fct-source": "src/GenProg.html#tSuccess",
        "fct-type": "function",
        "title": "tSuccess"
      },
      "index": {
        "description": "Termination predicate terminate if any individual satisfies the specified predicate",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "tSuccess",
        "normalized": "(a-\u003eBool)-\u003eTerminate a",
        "package": "genprog",
        "partial": "Success",
        "signature": "(e-\u003eBool)-\u003eTerminate e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:terminal",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random terminal \u003ccode\u003eT\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "m e",
        "fct-source": "src/GenProg.html#terminal",
        "fct-type": "method",
        "title": "terminal"
      },
      "index": {
        "description": "Generates random terminal",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "terminal",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eTermination predicate. Default is \u003ccode\u003e50\u003c/code\u003e (terminate after 50 generations).\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Terminate e",
        "fct-source": "src/GenProg.html#EvolParams",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "Termination predicate Default is terminate after generations",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "terminate",
        "normalized": "",
        "package": "genprog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:unInd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the expression wrapped by an individual.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Ind e -\u003e e",
        "fct-source": "src/GenProg.html#unInd",
        "fct-type": "function",
        "title": "unInd"
      },
      "index": {
        "description": "Returns the expression wrapped by an individual",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "unInd",
        "normalized": "Ind a-\u003ea",
        "package": "genprog",
        "partial": "Ind",
        "signature": "Ind e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/genprog/docs/GenProg.html#v:unPop",
      "description": {
        "fct-descr": "\u003cp\u003eUnwraps a population.\n\u003c/p\u003e",
        "fct-module": "GenProg",
        "fct-package": "genprog",
        "fct-signature": "Pop e -\u003e [Ind e]",
        "fct-source": "src/GenProg.html#unPop",
        "fct-type": "function",
        "title": "unPop"
      },
      "index": {
        "description": "Unwraps population",
        "hierarchy": "GenProg",
        "module": "GenProg",
        "name": "unPop",
        "normalized": "Pop a-\u003e[Ind a]",
        "package": "genprog",
        "partial": "Pop",
        "signature": "Pop e-\u003e[Ind e]"
      }
    }
  }
]