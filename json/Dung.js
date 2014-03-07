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
        "word": "Dung"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements Dung's argumentation frameworks. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Dung.AF",
          "name": "AF",
          "package": "Dung",
          "source": "src/Language-Dung-AF.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Dung argumentation frameworks",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "AF",
          "package": "Dung",
          "partial": "AF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract argumentation framework is a set of arguments \n (represented as a list) and an attack relation on these arguments. \n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "DungAF",
          "package": "Dung",
          "source": "src/Language-Dung-AF.html#DungAF",
          "type": "data"
        },
        "index": {
          "description": "An abstract argumentation framework is set of arguments represented as list and an attack relation on these arguments",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "DungAF",
          "package": "Dung",
          "partial": "Dung AF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#t:DungAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabelling of arguments.\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "Status",
          "package": "Dung",
          "source": "src/Language-Dung-AF.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Labelling of arguments",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "Status",
          "package": "Dung",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Dung.AF",
          "name": "AF",
          "package": "Dung",
          "signature": "AF [arg] [(arg, arg)]",
          "source": "src/Language-Dung-AF.html#DungAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "AF",
          "normalized": "AF[a][(a,a)]",
          "package": "Dung",
          "partial": "AF",
          "signature": "AF[arg][(arg,arg)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:AF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Dung.AF",
          "name": "In",
          "package": "Dung",
          "signature": "In",
          "source": "src/Language-Dung-AF.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "In",
          "package": "Dung",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Dung.AF",
          "name": "Out",
          "package": "Dung",
          "signature": "Out",
          "source": "src/Language-Dung-AF.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "Out",
          "package": "Dung",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Dung.AF",
          "name": "Undecided",
          "package": "Dung",
          "signature": "Undecided",
          "source": "src/Language-Dung-AF.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "Undecided",
          "package": "Dung",
          "partial": "Undecided",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:Undecided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an argumentation framework, determines whether an  \n argument is acceptable with respect to a list of \u003ccode\u003eargs\u003c/code\u003e (subset of the arguments in the AF). \n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "acceptable",
          "package": "Dung",
          "signature": "DungAF arg -\u003e arg -\u003e [arg] -\u003e Bool",
          "source": "src/Language-Dung-AF.html#acceptable",
          "type": "function"
        },
        "index": {
          "description": "Given an argumentation framework determines whether an argument is acceptable with respect to list of args subset of the arguments in the AF",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "acceptable",
          "normalized": "DungAF a-\u003ea-\u003e[a]-\u003eBool",
          "package": "Dung",
          "signature": "DungAF arg-\u003earg-\u003e[arg]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:acceptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an argumentation framework, determines whether \n the set of arguments \u003ccode\u003eargs\u003c/code\u003e (subset of the arguments in the AF) is admissible,\n i.e. if \u003ccode\u003eargs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003econflictFree\u003c/a\u003e\u003c/code\u003e and args is a subset of \u003ccode\u003ef af args\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "admissible",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [arg] -\u003e Bool",
          "source": "src/Language-Dung-AF.html#admissible",
          "type": "function"
        },
        "index": {
          "description": "Given an argumentation framework determines whether the set of arguments args subset of the arguments in the AF is admissible i.e if args is conflictFree and args is subset of af args",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "admissible",
          "normalized": "DungAF a-\u003e[a]-\u003eBool",
          "package": "Dung",
          "signature": "DungAF arg-\u003e[arg]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:admissible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of arguments that are \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e in an argumentation framework af, \n an argument \u003ccode\u003earg\u003c/code\u003e is attacked if there exists an attacker that is \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "attacked",
          "package": "Dung",
          "signature": "[arg] -\u003e DungAF arg -\u003e arg -\u003e Bool",
          "source": "src/Language-Dung-AF.html#attacked",
          "type": "function"
        },
        "index": {
          "description": "Given list of arguments that are In in an argumentation framework af an argument arg is attacked if there exists an attacker that is In",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "attacked",
          "normalized": "[a]-\u003eDungAF a-\u003ea-\u003eBool",
          "package": "Dung",
          "signature": "[arg]-\u003eDungAF arg-\u003earg-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:attacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an argumentation framework, determines whether args \n (subset of the arguments in the AF) is conflict-free.\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "conflictFree",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [arg] -\u003e Bool",
          "source": "src/Language-Dung-AF.html#conflictFree",
          "type": "function"
        },
        "index": {
          "description": "Given an argumentation framework determines whether args subset of the arguments in the AF is conflict-free",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "conflictFree",
          "normalized": "DungAF a-\u003e[a]-\u003eBool",
          "package": "Dung",
          "partial": "Free",
          "signature": "DungAF arg-\u003e[arg]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:conflictFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an argumentation framework, determines whether an  \n argument is acceptable with respect to \u003ccode\u003eargs\u003c/code\u003e (subset of the arguments in the AF). \n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "f",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [arg] -\u003e [arg]",
          "source": "src/Language-Dung-AF.html#f",
          "type": "function"
        },
        "index": {
          "description": "Given an argumentation framework determines whether an argument is acceptable with respect to args subset of the arguments in the AF",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "f",
          "normalized": "DungAF a-\u003e[a]-\u003e[a]",
          "package": "Dung",
          "signature": "DungAF arg-\u003e[arg]-\u003e[arg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the grounded labelling for a Dung argumentation framework,\n returning a list of arguments with statuses.\n\u003c/p\u003e\u003cp\u003eBased on section 4.1 of Proof Theories and Algorithms for Abstract Argumentation Frameworks\n by Modgil and Caminada\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "grounded",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [(arg, Status)]",
          "source": "src/Language-Dung-AF.html#grounded",
          "type": "function"
        },
        "index": {
          "description": "Computes the grounded labelling for Dung argumentation framework returning list of arguments with statuses Based on section of Proof Theories and Algorithms for Abstract Argumentation Frameworks by Modgil and Caminada",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "grounded",
          "normalized": "DungAF a-\u003e[(a,Status)]",
          "package": "Dung",
          "signature": "DungAF arg-\u003e[(arg,Status)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:grounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe grounded extension of an argumentation framework is just the grounded labelling, \n keeping only those arguments that were labelled \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "groundedExt",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [arg]",
          "source": "src/Language-Dung-AF.html#groundedExt",
          "type": "function"
        },
        "index": {
          "description": "The grounded extension of an argumentation framework is just the grounded labelling keeping only those arguments that were labelled In",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "groundedExt",
          "normalized": "DungAF a-\u003e[a]",
          "package": "Dung",
          "partial": "Ext",
          "signature": "DungAF arg-\u003e[arg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:groundedExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a characteristic function f, computes the grounded extension\n by iterating on the empty set (list) until it reaches a fixpoint.\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "groundedF",
          "package": "Dung",
          "signature": "([arg] -\u003e [arg]) -\u003e [arg]",
          "source": "src/Language-Dung-AF.html#groundedF",
          "type": "function"
        },
        "index": {
          "description": "Given characteristic function computes the grounded extension by iterating on the empty set list until it reaches fixpoint",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "groundedF",
          "normalized": "([a]-\u003e[a])-\u003e[a]",
          "package": "Dung",
          "signature": "([arg]-\u003e[arg])-\u003e[arg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:groundedF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an argumentation framework, determines whether args \n (subset of the arguments in the AF), attacks an argument arg (in the AF).\n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "setAttacks",
          "package": "Dung",
          "signature": "DungAF arg -\u003e [arg] -\u003e arg -\u003e Bool",
          "source": "src/Language-Dung-AF.html#setAttacks",
          "type": "function"
        },
        "index": {
          "description": "Given an argumentation framework determines whether args subset of the arguments in the AF attacks an argument arg in the AF",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "setAttacks",
          "normalized": "DungAF a-\u003e[a]-\u003ea-\u003eBool",
          "package": "Dung",
          "partial": "Attacks",
          "signature": "DungAF arg-\u003e[arg]-\u003earg-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:setAttacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of arguments that are \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e in an argumentation framework af, \n an argument \u003ccode\u003earg\u003c/code\u003e is unattacked if the list of its attackers, ignoring the outs, is empty. \n\u003c/p\u003e",
          "module": "Language.Dung.AF",
          "name": "unattacked",
          "package": "Dung",
          "signature": "[arg] -\u003e DungAF arg -\u003e arg -\u003e Bool",
          "source": "src/Language-Dung-AF.html#unattacked",
          "type": "function"
        },
        "index": {
          "description": "Given list of arguments that are Out in an argumentation framework af an argument arg is unattacked if the list of its attackers ignoring the outs is empty",
          "hierarchy": "Language Dung AF",
          "module": "Language.Dung.AF",
          "name": "unattacked",
          "normalized": "[a]-\u003eDungAF a-\u003ea-\u003eBool",
          "package": "Dung",
          "signature": "[arg]-\u003eDungAF arg-\u003earg-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-AF.html#v:unattacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the examples module accompanying the implementation of Dung's \n argumentation frameworks. \n\u003c/p\u003e\u003cp\u003eThis module contains a collection of examples, showing how to define \n arguments, argumentation frameworks and how to use the standard definitions.\n\u003c/p\u003e\u003cp\u003eTo run these examples, or your own: start GHCi and do the following:\n\u003c/p\u003e\u003cpre\u003e:l Language.Dung.Examples\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.Dung.Examples",
          "name": "Examples",
          "package": "Dung",
          "source": "src/Language-Dung-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "This is the examples module accompanying the implementation of Dung argumentation frameworks This module contains collection of examples showing how to define arguments argumentation frameworks and how to use the standard definitions To run these examples or your own start GHCi and do the following Language.Dung.Examples",
          "hierarchy": "Language Dung Examples",
          "module": "Language.Dung.Examples",
          "name": "Examples",
          "package": "Dung",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest abstract argument is an argument identifiable by its name\n\u003c/p\u003e",
          "module": "Language.Dung.Examples",
          "name": "AbsArg",
          "package": "Dung",
          "source": "src/Language-Dung-Examples.html#AbsArg",
          "type": "type"
        },
        "index": {
          "description": "The simplest abstract argument is an argument identifiable by its name",
          "hierarchy": "Language Dung Examples",
          "module": "Language.Dung.Examples",
          "name": "AbsArg",
          "package": "Dung",
          "partial": "Abs Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-Examples.html#t:AbsArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample AF: A -\u003e B -\u003e C \n\u003c/p\u003e",
          "module": "Language.Dung.Examples",
          "name": "exampleAF",
          "package": "Dung",
          "signature": "DungAF AbsArg",
          "source": "src/Language-Dung-Examples.html#exampleAF",
          "type": "function"
        },
        "index": {
          "description": "Example AF",
          "hierarchy": "Language Dung Examples",
          "module": "Language.Dung.Examples",
          "name": "exampleAF",
          "package": "Dung",
          "partial": "AF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-Examples.html#v:exampleAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample AF: A \u003c-\u003e B\n\u003c/p\u003e\u003cp\u003eNow follow a few example outputs using the above argumentation frameworks.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003esetAttacks:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003ccode\u003e[a,b]\u003c/code\u003e \u003ccode\u003e\u003ca\u003esetAttacks\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e in the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetAttacks exampleAF [a,b] c\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetAttacks exampleAF [b,c] a\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetAttacks exampleAF2 [] b\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003econflictFree:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003ccode\u003e[a,c]\u003c/code\u003e is \u003ccode\u003e\u003ca\u003econflictFree\u003c/a\u003e\u003c/code\u003e in the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econflictFree exampleAF [a,c]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econflictFree exampleAF [a,b,c]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econflictFree exampleAF2 [a,b]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eacceptable:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e is acceptable w.r.t. \u003ccode\u003e[a,b]\u003c/code\u003e in the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eacceptable exampleAF c [a,b]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eacceptable exampleAF c []\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eacceptable exampleAF b [a,b,c]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eadmissible:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003ccode\u003e[a,b,c]\u003c/code\u003e is admissible in the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eadmissible exampleAF [a,b,c]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eadmissible exampleAF [a,c]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eadmissible exampleAF [a]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003egrounded:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe grounded labelling of the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrounded exampleAF\n\u003c/code\u003e\u003c/strong\u003e[(\"A\",In),(\"C\",In),(\"B\",Out)]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrounded exampleAF2\n\u003c/code\u003e\u003c/strong\u003e[(\"A\",Undecided),(\"B\",Undecided)]\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003egroundedExt:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe grounded extension of the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroundedExt exampleAF\n\u003c/code\u003e\u003c/strong\u003e[\"A\", \"C\"]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroundedExt exampleAF2\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Language.Dung.Examples",
          "name": "exampleAF2",
          "package": "Dung",
          "signature": "DungAF AbsArg",
          "source": "src/Language-Dung-Examples.html#exampleAF2",
          "type": "function"
        },
        "index": {
          "description": "Example AF Now follow few example outputs using the above argumentation frameworks setAttacks setAttacks in the argumentation framework exampleAF setAttacks exampleAF True setAttacks exampleAF False setAttacks exampleAF2 False conflictFree is conflictFree in the argumentation framework exampleAF conflictFree exampleAF True conflictFree exampleAF False conflictFree exampleAF2 False acceptable is acceptable w.r.t in the argumentation framework exampleAF acceptable exampleAF True acceptable exampleAF False acceptable exampleAF False admissible is admissible in the argumentation framework exampleAF admissible exampleAF False admissible exampleAF True admissible exampleAF True grounded The grounded labelling of the argumentation framework exampleAF grounded exampleAF In In Out grounded exampleAF2 Undecided Undecided groundedExt The grounded extension of the argumentation framework exampleAF groundedExt exampleAF groundedExt exampleAF2",
          "hierarchy": "Language Dung Examples",
          "module": "Language.Dung.Examples",
          "name": "exampleAF2",
          "package": "Dung",
          "partial": "AF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-Examples.html#v:exampleAF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efixed point function for a specific argumentation framework,\n \u003ccode\u003efaf = f exampleAF\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003egroundedF:\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe grounded extension of the argumentation framework \u003ccode\u003e\u003ca\u003eexampleAF\u003c/a\u003e\u003c/code\u003e using the fixpoint definition:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroundedF faf\n\u003c/code\u003e\u003c/strong\u003e[\"A\",\"C\"]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroundedF (f exampleAF2)\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Language.Dung.Examples",
          "name": "faf",
          "package": "Dung",
          "signature": "[AbsArg] -\u003e [AbsArg]",
          "source": "src/Language-Dung-Examples.html#faf",
          "type": "function"
        },
        "index": {
          "description": "fixed point function for specific argumentation framework faf exampleAF groundedF The grounded extension of the argumentation framework exampleAF using the fixpoint definition groundedF faf groundedF exampleAF2",
          "hierarchy": "Language Dung Examples",
          "module": "Language.Dung.Examples",
          "name": "faf",
          "normalized": "[AbsArg]-\u003e[AbsArg]",
          "package": "Dung",
          "signature": "[AbsArg]-\u003e[AbsArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dung/docs/Language-Dung-Examples.html#v:faf"
      }
    }
  ]
]