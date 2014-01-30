[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-NormalForms.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe functions exposed by this module convert expressions of type \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e\n into different normal forms: negation normal form via \u003ccode\u003e\u003ca\u003etoNNF\u003c/a\u003e\u003c/code\u003e, conjunctive\n normal form via \u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e and disjunctive normal form via \u003ccode\u003e\u003ca\u003etoDNF\u003c/a\u003e\u003c/code\u003e. All these\n functions are total.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Logic.Propositional.NormalForms",
        "fct-package": "hatt",
        "fct-signature": "module",
        "fct-source": "src/Data-Logic-Propositional-NormalForms.html",
        "fct-type": "module",
        "title": "NormalForms"
      },
      "index": {
        "description": "The functions exposed by this module convert expressions of type Expr into different normal forms negation normal form via toNNF conjunctive normal form via toCNF and disjunctive normal form via toDNF All these functions are total",
        "hierarchy": "Data Logic Propositional NormalForms",
        "module": "Data.Logic.Propositional.NormalForms",
        "name": "NormalForms",
        "normalized": "",
        "package": "hatt",
        "partial": "Normal Forms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-NormalForms.html#v:toCNF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e function converts expressions to conjunctive normal form: a\n conjunction of clauses, where a clause is a disjunction of literals\n (variables and negated variables).\n\u003c/p\u003e\u003cp\u003eThe conversion is carried out by first converting the expression into\n negation normal form, and then applying the distributive law.\n\u003c/p\u003e\u003cp\u003eBecause it first applies \u003ccode\u003e\u003ca\u003etoNNF\u003c/a\u003e\u003c/code\u003e, it is a total function and can handle\n expressions which include conditionals and biconditionals.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.NormalForms",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Expr",
        "fct-source": "src/Data-Logic-Propositional-NormalForms.html#toCNF",
        "fct-type": "function",
        "title": "toCNF"
      },
      "index": {
        "description": "The toCNF function converts expressions to conjunctive normal form conjunction of clauses where clause is disjunction of literals variables and negated variables The conversion is carried out by first converting the expression into negation normal form and then applying the distributive law Because it first applies toNNF it is total function and can handle expressions which include conditionals and biconditionals",
        "hierarchy": "Data Logic Propositional NormalForms",
        "module": "Data.Logic.Propositional.NormalForms",
        "name": "toCNF",
        "normalized": "Expr-\u003eExpr",
        "package": "hatt",
        "partial": "CNF",
        "signature": "Expr-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-NormalForms.html#v:toDNF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoDNF\u003c/a\u003e\u003c/code\u003e function converts expressions to disjunctive normal form: a\n disjunction of clauses, where a clause is a conjunction of literals\n (variables and negated variables).\n\u003c/p\u003e\u003cp\u003eThe conversion is carried out by first converting the expression into\n negation normal form, and then applying the distributive law.\n\u003c/p\u003e\u003cp\u003eBecause it first applies \u003ccode\u003e\u003ca\u003etoNNF\u003c/a\u003e\u003c/code\u003e, it is a total function and can handle\n expressions which include conditionals and biconditionals.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.NormalForms",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Expr",
        "fct-source": "src/Data-Logic-Propositional-NormalForms.html#toDNF",
        "fct-type": "function",
        "title": "toDNF"
      },
      "index": {
        "description": "The toDNF function converts expressions to disjunctive normal form disjunction of clauses where clause is conjunction of literals variables and negated variables The conversion is carried out by first converting the expression into negation normal form and then applying the distributive law Because it first applies toNNF it is total function and can handle expressions which include conditionals and biconditionals",
        "hierarchy": "Data Logic Propositional NormalForms",
        "module": "Data.Logic.Propositional.NormalForms",
        "name": "toDNF",
        "normalized": "Expr-\u003eExpr",
        "package": "hatt",
        "partial": "DNF",
        "signature": "Expr-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-NormalForms.html#v:toNNF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoNNF\u003c/a\u003e\u003c/code\u003e function converts expressions to negation normal form. This\n function is total: it's defined for all expressions, not just those which\n only use negation, conjunction and disjunction, although all expressions in\n negation normal form do in fact only use those connectives.\n\u003c/p\u003e\u003cp\u003eThe conversion is carried out by replacing any condtitionals or\n biconditionals with equivalent expressions using only negation, conjunction\n and disjunction. Then de Morgan's laws are applied to convert negated\n conjunctions and disjunctions into the conjunction or disjunction of the\n negation of their conjuncts: \u003ccode\u003e&#172;(&#966; &#8743; &#968;)\u003c/code\u003e is converted to \u003ccode\u003e(&#172;&#966; &#8744; &#172;&#968;)\u003c/code\u003e\n while \u003ccode\u003e&#172;(&#966; &#8744; &#968;)\u003c/code\u003e becomes \u003ccode\u003e(&#172;&#966; &#8743; &#172;&#968;)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.NormalForms",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Expr",
        "fct-source": "src/Data-Logic-Propositional-NormalForms.html#toNNF",
        "fct-type": "function",
        "title": "toNNF"
      },
      "index": {
        "description": "The toNNF function converts expressions to negation normal form This function is total it defined for all expressions not just those which only use negation conjunction and disjunction although all expressions in negation normal form do in fact only use those connectives The conversion is carried out by replacing any condtitionals or biconditionals with equivalent expressions using only negation conjunction and disjunction Then de Morgan laws are applied to convert negated conjunctions and disjunctions into the conjunction or disjunction of the negation of their conjuncts is converted to while becomes",
        "hierarchy": "Data Logic Propositional NormalForms",
        "module": "Data.Logic.Propositional.NormalForms",
        "name": "toNNF",
        "normalized": "Expr-\u003eExpr",
        "package": "hatt",
        "partial": "NNF",
        "signature": "Expr-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the truth table generating functionality of Hatt. The\n core function it exports is \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e which prints the truth table of the\n given expression. \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e is a configurable version which allows one to\n select how to print expressions and truth values. This gives one the option\n of, for example, colouring outputs and changing the symbols used to represent\n the logical connectives.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "module",
        "fct-source": "src/Data-Logic-Propositional-Tables.html",
        "fct-type": "module",
        "title": "Tables"
      },
      "index": {
        "description": "This module contains the truth table generating functionality of Hatt The core function it exports is truthTable which prints the truth table of the given expression truthTableP is configurable version which allows one to select how to print expressions and truth values This gives one the option of for example colouring outputs and changing the symbols used to represent the logical connectives",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "Tables",
        "normalized": "",
        "package": "hatt",
        "partial": "Tables",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#t:Printer",
      "description": {
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "type",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#Printer",
        "fct-type": "type",
        "title": "Printer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "Printer",
        "normalized": "",
        "package": "hatt",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#v:colourBool",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a green \u003ccode\u003eT\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e and a red \u003ccode\u003eF\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. This is used when\n producing a string representation of a truth table with \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e. It can\n also be used as (as the second component of a \u003ccode\u003e\u003ca\u003ePrinter\u003c/a\u003e\u003c/code\u003e pair) as an argument\n to the configurable \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "Bool -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#colourBool",
        "fct-type": "function",
        "title": "colourBool"
      },
      "index": {
        "description": "Prints green for True and red for False This is used when producing string representation of truth table with truthTable It can also be used as as the second component of Printer pair as an argument to the configurable truthTableP function",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "colourBool",
        "normalized": "Bool-\u003eString",
        "package": "hatt",
        "partial": "Bool",
        "signature": "Bool-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#v:showBool",
      "description": {
        "fct-descr": "\u003cp\u003ePrints \u003ccode\u003eT\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eF\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "Bool -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#showBool",
        "fct-type": "function",
        "title": "showBool"
      },
      "index": {
        "description": "Prints for True and for False",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "showBool",
        "normalized": "Bool-\u003eString",
        "package": "hatt",
        "partial": "Bool",
        "signature": "Bool-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#v:truthTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e function produces a truth table for the given expression.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#truthTable",
        "fct-type": "function",
        "title": "truthTable"
      },
      "index": {
        "description": "The truthTable function produces truth table for the given expression",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "truthTable",
        "normalized": "Expr-\u003eString",
        "package": "hatt",
        "partial": "Table",
        "signature": "Expr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional-Tables.html#v:truthTableP",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e is a configurable version of \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e which allows a\n printer function to be selected, so for example one can print ASCII truth\n tables by passing \u003ccode\u003e\u003ca\u003eshowAscii\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional.Tables",
        "fct-package": "hatt",
        "fct-signature": "Printer -\u003e Expr -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#truthTableP",
        "fct-type": "function",
        "title": "truthTableP"
      },
      "index": {
        "description": "The truthTableP is configurable version of truthTable which allows printer function to be selected so for example one can print ASCII truth tables by passing showAscii to truthTableP instead of show",
        "hierarchy": "Data Logic Propositional Tables",
        "module": "Data.Logic.Propositional.Tables",
        "name": "truthTableP",
        "normalized": "Printer-\u003eExpr-\u003eString",
        "package": "hatt",
        "partial": "Table",
        "signature": "Printer-\u003eExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eData.Logic.Propositional\u003c/a\u003e module provides a set of functions for\n parsing, manipulating and generating truth tables for expressions in\n classical propositional logic.\n\u003c/p\u003e\u003cp\u003eThe core of the API is the \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e data type, which has constructors for all\n the usual expression forms: variables, standing for atomic propositions;\n negation, the only unary connective; and the binary connectives of\n conjunction, disjunction, material implication and logical equivalence.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "module",
        "fct-source": "src/Data-Logic-Propositional.html",
        "fct-type": "module",
        "title": "Propositional"
      },
      "index": {
        "description": "The Data.Logic.Propositional module provides set of functions for parsing manipulating and generating truth tables for expressions in classical propositional logic The core of the API is the Expr data type which has constructors for all the usual expression forms variables standing for atomic propositions negation the only unary connective and the binary connectives of conjunction disjunction material implication and logical equivalence",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Propositional",
        "normalized": "",
        "package": "hatt",
        "partial": "Propositional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#t:Expr",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "data",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Expr",
        "normalized": "",
        "package": "hatt",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#t:Mapping",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "type",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Mapping",
        "fct-type": "type",
        "title": "Mapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Mapping",
        "normalized": "",
        "package": "hatt",
        "partial": "Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#t:Var",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Var",
        "fct-type": "newtype",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Var",
        "normalized": "",
        "package": "hatt",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Biconditional",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Biconditional Expr Expr",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Biconditional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Biconditional",
        "normalized": "",
        "package": "hatt",
        "partial": "Biconditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Conditional",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Conditional Expr Expr",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Conditional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Conditional",
        "normalized": "",
        "package": "hatt",
        "partial": "Conditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Conjunction",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Conjunction Expr Expr",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Conjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Conjunction",
        "normalized": "",
        "package": "hatt",
        "partial": "Conjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Disjunction",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Disjunction Expr Expr",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Disjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Disjunction",
        "normalized": "",
        "package": "hatt",
        "partial": "Disjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Negation",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Negation Expr",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Negation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Negation",
        "normalized": "",
        "package": "hatt",
        "partial": "Negation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Var",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Var Char",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Var",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Var",
        "normalized": "",
        "package": "hatt",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:Variable",
      "description": {
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Variable Var",
        "fct-source": "src/Data-Logic-Propositional-Core.html#Expr",
        "fct-type": "function",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "Variable",
        "normalized": "",
        "package": "hatt",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:assignments",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the possible assignments of variables in an expression.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e [Mapping]",
        "fct-source": "src/Data-Logic-Propositional-Core.html#assignments",
        "fct-type": "function",
        "title": "assignments"
      },
      "index": {
        "description": "Generates the possible assignments of variables in an expression",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "assignments",
        "normalized": "Expr-\u003e[Mapping]",
        "package": "hatt",
        "partial": "",
        "signature": "Expr-\u003e[Mapping]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:equivalent",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether two expressions are extensionally equivalent (that is,\n have the same values under all interpretations).\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Expr -\u003e Bool",
        "fct-source": "src/Data-Logic-Propositional-Core.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "Determines whether two expressions are extensionally equivalent that is have the same values under all interpretations",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "equivalent",
        "normalized": "Expr-\u003eExpr-\u003eBool",
        "package": "hatt",
        "partial": "",
        "signature": "Expr-\u003eExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to interpret an expression, a mapping from variables to truth\n values needs to be provided. Truth values are compositional; that's to say,\n the value of a composite expression (any expression which is not atomic)\n depends on the truth values of its component parts. For example, the Haskell\n expression below would evaluate to \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e interpret\n     (Conjunction (Variable \"A\") (Variable \"B\"))\n     (fromList [(\"A\", True), (\"B\", False)])\n\u003c/pre\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Mapping -\u003e Bool",
        "fct-source": "src/Data-Logic-Propositional-Core.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "In order to interpret an expression mapping from variables to truth values needs to be provided Truth values are compositional that to say the value of composite expression any expression which is not atomic depends on the truth values of its component parts For example the Haskell expression below would evaluate to False interpret Conjunction Variable Variable fromList True False",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "interpret",
        "normalized": "Expr-\u003eMapping-\u003eBool",
        "package": "hatt",
        "partial": "",
        "signature": "Expr-\u003eMapping-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:isContingent",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether an expression is contingent (that is, true in at least\n one interpretation and false in at least one interpretation).\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Bool",
        "fct-source": "src/Data-Logic-Propositional-Core.html#isContingent",
        "fct-type": "function",
        "title": "isContingent"
      },
      "index": {
        "description": "Determines whether an expression is contingent that is true in at least one interpretation and false in at least one interpretation",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "isContingent",
        "normalized": "Expr-\u003eBool",
        "package": "hatt",
        "partial": "Contingent",
        "signature": "Expr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:isContradiction",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether an expression is contradictory.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Bool",
        "fct-source": "src/Data-Logic-Propositional-Core.html#isContradiction",
        "fct-type": "function",
        "title": "isContradiction"
      },
      "index": {
        "description": "Determines whether an expression is contradictory",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "isContradiction",
        "normalized": "Expr-\u003eBool",
        "package": "hatt",
        "partial": "Contradiction",
        "signature": "Expr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:isTautology",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether an expression is tautological.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e Bool",
        "fct-source": "src/Data-Logic-Propositional-Core.html#isTautology",
        "fct-type": "function",
        "title": "isTautology"
      },
      "index": {
        "description": "Determines whether an expression is tautological",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "isTautology",
        "normalized": "Expr-\u003eBool",
        "package": "hatt",
        "partial": "Tautology",
        "signature": "Expr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:parseExpr",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eparseExpr\u003c/a\u003e\u003c/code\u003e function accepts the name of a source, and a string to be\n parsed, and attempts to parse the string as a logical expression of the\n following forms, where \u003ccode\u003e&#966;\u003c/code\u003e and \u003ccode\u003e&#968;\u003c/code\u003e are metalinguistic variables\n standing for any valid expression.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Variables: \u003ccode\u003e\"P\"\u003c/code\u003e, \u003ccode\u003e\"Q\"\u003c/code\u003e, \u003ccode\u003e\"a\"\u003c/code\u003e, \u003ccode\u003e\"b\"\u003c/code\u003e etc.; basically anything in\n   the character class \u003ccode\u003e[a-zA-Z]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Negation: \u003ccode\u003e\"~&#966;\"\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Conjunction: \u003ccode\u003e\"(&#966; & &#968;)\"\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Disjunction: \u003ccode\u003e\"(&#966; | &#968;)\"\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Conditional: \u003ccode\u003e\"(&#966; -\u003e &#968;)\"\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Biconditional: \u003ccode\u003e\"(&#966; \u003c-\u003e &#968;)\"\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTop-level expressions where the primary connective is a binary one do not\n need to be parenthesised. For example, \u003ccode\u003e\"p -\u003e (q & r)\"\u003c/code\u003e is a valid\n expression, although \u003ccode\u003e\"(p -\u003e (q & r))\"\u003c/code\u003e is also fine.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "SourceName -\u003e String -\u003e Either ParseError Expr",
        "fct-source": "src/Data-Logic-Propositional-Parser.html#parseExpr",
        "fct-type": "function",
        "title": "parseExpr"
      },
      "index": {
        "description": "The parseExpr function accepts the name of source and string to be parsed and attempts to parse the string as logical expression of the following forms where and are metalinguistic variables standing for any valid expression Variables etc basically anything in the character class a-zA-Z Negation Conjunction Disjunction Conditional Biconditional Top-level expressions where the primary connective is binary one do not need to be parenthesised For example is valid expression although is also fine",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "parseExpr",
        "normalized": "SourceName-\u003eString-\u003eEither ParseError Expr",
        "package": "hatt",
        "partial": "Expr",
        "signature": "SourceName-\u003eString-\u003eEither ParseError Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:show",
      "description": {
        "fct-descr": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "a -\u003e String",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "show",
        "normalized": "a-\u003eString",
        "package": "hatt",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:showAscii",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents expressions using only ASCII characters (the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function\n pretty-prints expressions using logical symbols only present in extended\n character sets).\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Core.html#showAscii",
        "fct-type": "function",
        "title": "showAscii"
      },
      "index": {
        "description": "Represents expressions using only ASCII characters the show function pretty-prints expressions using logical symbols only present in extended character sets",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "showAscii",
        "normalized": "Expr-\u003eString",
        "package": "hatt",
        "partial": "Ascii",
        "signature": "Expr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:truthTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e function produces a truth table for the given expression.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#truthTable",
        "fct-type": "function",
        "title": "truthTable"
      },
      "index": {
        "description": "The truthTable function produces truth table for the given expression",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "truthTable",
        "normalized": "Expr-\u003eString",
        "package": "hatt",
        "partial": "Table",
        "signature": "Expr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:truthTableP",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e is a configurable version of \u003ccode\u003e\u003ca\u003etruthTable\u003c/a\u003e\u003c/code\u003e which allows a\n printer function to be selected, so for example one can print ASCII truth\n tables by passing \u003ccode\u003e\u003ca\u003eshowAscii\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003etruthTableP\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Printer -\u003e Expr -\u003e String",
        "fct-source": "src/Data-Logic-Propositional-Tables.html#truthTableP",
        "fct-type": "function",
        "title": "truthTableP"
      },
      "index": {
        "description": "The truthTableP is configurable version of truthTable which allows printer function to be selected so for example one can print ASCII truth tables by passing showAscii to truthTableP instead of show",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "truthTableP",
        "normalized": "Printer-\u003eExpr-\u003eString",
        "package": "hatt",
        "partial": "Table",
        "signature": "Printer-\u003eExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eLists the values of an expression under all interpretations (that is, all\n assignments of values to variables).\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e [Bool]",
        "fct-source": "src/Data-Logic-Propositional-Core.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "Lists the values of an expression under all interpretations that is all assignments of values to variables",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "values",
        "normalized": "Expr-\u003e[Bool]",
        "package": "hatt",
        "partial": "",
        "signature": "Expr-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hatt/docs/Data-Logic-Propositional.html#v:variables",
      "description": {
        "fct-descr": "\u003cp\u003eLists the names of variables present in an expression.\n\u003c/p\u003e",
        "fct-module": "Data.Logic.Propositional",
        "fct-package": "hatt",
        "fct-signature": "Expr -\u003e [Var]",
        "fct-source": "src/Data-Logic-Propositional-Core.html#variables",
        "fct-type": "function",
        "title": "variables"
      },
      "index": {
        "description": "Lists the names of variables present in an expression",
        "hierarchy": "Data Logic Propositional",
        "module": "Data.Logic.Propositional",
        "name": "variables",
        "normalized": "Expr-\u003e[Var]",
        "package": "hatt",
        "partial": "",
        "signature": "Expr-\u003e[Var]"
      }
    }
  }
]