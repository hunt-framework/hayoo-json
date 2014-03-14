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
        "word": "CarneadesIntoDung"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the examples module accompanying the implementation of the \n translation from the Carneades argumentation model into Dung's \n argumentation frameworks. \n\u003c/p\u003e\u003cp\u003eThis module contains a collection of examples, showing how to translate\n an existing Carneades Argument Evaluation Structure (CAES) into an argumentation\n framework. \n\u003c/p\u003e\u003cp\u003eTo run these examples, or your own: start GHCi and do the following:\n\u003c/p\u003e\u003cpre\u003e:l Language.CarneadesIntoDung.Examples\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "Examples",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "This is the examples module accompanying the implementation of the translation from the Carneades argumentation model into Dung argumentation frameworks This module contains collection of examples showing how to translate an existing Carneades Argument Evaluation Structure CAES into an argumentation framework To run these examples or your own start GHCi and do the following Language.CarneadesIntoDung.Examples",
          "hierarchy": "Language CarneadesIntoDung Examples",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "Examples",
          "package": "CarneadesIntoDung",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "caes",
          "package": "CarneadesIntoDung",
          "signature": "CAES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CarneadesIntoDung Examples",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "caes",
          "package": "CarneadesIntoDung",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Examples.html#v:caes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombining the correspondence properties.\n\u003c/p\u003e\u003cp\u003eAnd as expected:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecorApp caes && corAcc caes\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "corProp",
          "package": "CarneadesIntoDung",
          "signature": "CAES -\u003e Bool",
          "source": "src/Language-CarneadesIntoDung-Examples.html#corProp",
          "type": "function"
        },
        "index": {
          "description": "Combining the correspondence properties And as expected corApp caes corAcc caes True",
          "hierarchy": "Language CarneadesIntoDung Examples",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "corProp",
          "normalized": "CAES-\u003eBool",
          "package": "CarneadesIntoDung",
          "partial": "Prop",
          "signature": "CAES-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Examples.html#v:corProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation of the example CAES \u003ccode\u003e\u003ca\u003ecaes\u003c/a\u003e\u003c/code\u003e.\n The following is the prettified output of the translation, where\n the five propositions in the middle are the assumptions and \u003ccode\u003edefeater\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etranslate caes\n\u003c/code\u003e\u003c/strong\u003eAF [\nLeft (True,\"murder\"),\nLeft (False,\"murder\"),\nRight [\"kill\",\"intent\"] ~[]=\u003e\"murder\",\nLeft (False,\"intent\"),\nLeft (True,\"intent\"),\nRight [\"witness2\"] ~[\"unreliable2\"]=\u003e\"-intent\",\nRight [\"witness\"] ~[\"unreliable\"]=\u003e\"intent\",\nLeft (True,\"unreliable\"),\nLeft (False,\"unreliable\")\n,\nLeft (True,\"defeater\"),\nLeft (True,\"kill\"),\nLeft (True,\"witness\"),\nLeft (True,\"witness2\"),\nLeft (True,\"unreliable2\")] \n[\n(Left (True,\"defeater\"), Left (True,\"murder\")),\n(Left (True,\"defeater\"), Left (False,\"murder\")),\n(Left (True,\"defeater\"), Right [\"kill\",\"intent\"] ~[]=\u003e\"murder\"),\n(Left (True,\"defeater\"), Left (False,\"intent\")),\n(Left (True,\"defeater\"),Left (True,\"intent\")),\n(Left (True,\"unreliable2\"),Right [\"witness2\"] ~[\"unreliable2\"]=\u003e\"-intent\"),\n(Left (True,\"defeater\"),Left (True,\"unreliable\")),\n(Left (True,\"defeater\"),Left (False,\"unreliable\"))\n]\n\u003c/pre\u003e",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "exTrans",
          "package": "CarneadesIntoDung",
          "signature": "ConcreteAF",
          "source": "src/Language-CarneadesIntoDung-Examples.html#exTrans",
          "type": "function"
        },
        "index": {
          "description": "Translation of the example CAES caes The following is the prettified output of the translation where the five propositions in the middle are the assumptions and defeater translate caes AF Left True murder Left False murder Right kill intent murder Left False intent Left True intent Right witness2 unreliable2 intent Right witness unreliable intent Left True unreliable Left False unreliable Left True defeater Left True kill Left True witness Left True witness2 Left True unreliable2 Left True defeater Left True murder Left True defeater Left False murder Left True defeater Right kill intent murder Left True defeater Left False intent Left True defeater Left True intent Left True unreliable2 Right witness2 unreliable2 intent Left True defeater Left True unreliable Left True defeater Left False unreliable",
          "hierarchy": "Language CarneadesIntoDung Examples",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "exTrans",
          "package": "CarneadesIntoDung",
          "partial": "Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Examples.html#v:exTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation of the example CAES \u003ccode\u003e\u003ca\u003ecaes\u003c/a\u003e\u003c/code\u003e, keeping labels.\n The following is the prettified output of the translation, where \n the five propositions in the middle are the assumptions and \u003ccode\u003edefeater\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etranslate' caes\n\u003c/code\u003e\u003c/strong\u003eAF [\n(False,Left (True,\"murder\")),\n(False,Left (False,\"murder\")),\n(False,Right [\"kill\",\"intent\"] ~[]=\u003e\"murder\"),\n(False,Left (False,\"intent\")),\n(False,Left (True,\"intent\")),\n(False,Right [\"witness2\"] ~[\"unreliable2\"]=\u003e\"-intent\"),\n(True,Right [\"witness\"] ~[\"unreliable\"]=\u003e\"intent\"),\n(False,Left (True,\"unreliable\")),\n(False,Left (False,\"unreliable\"))\n,\n(True,Left (True,\"defeater\")),\n(True,Left (True,\"kill\")),\n(True,Left (True,\"witness\")),\n(True,Left (True,\"witness2\")),\n(True,Left (True,\"unreliable2\"))]\n[\n((True,Left (True,\"defeater\")),(False,Left (True,\"murder\"))),\n((True,Left (True,\"defeater\")),(False,Left (False,\"murder\"))),\n((True,Left (True,\"defeater\")), (False,Right [\"kill\",\"intent\"] ~[]=\u003e\"murder\")),\n((True,Left (True,\"defeater\")),(False,Left (False,\"intent\"))),\n((True,Left (True,\"defeater\")),(False,Left (True,\"intent\"))),\n((True,Left (True,\"unreliable2\")),(False,Right [\"witness2\"] ~[\"unreliable2\"]=\u003e\"-intent\")),\n((True,Left (True,\"defeater\")),(False,Left (True,\"unreliable\"))),\n((True,Left (True,\"defeater\")),(False,Left (False,\"unreliable\")))\n\u003c/pre\u003e",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "exTrans'",
          "package": "CarneadesIntoDung",
          "signature": "LConcreteAF",
          "source": "src/Language-CarneadesIntoDung-Examples.html#exTrans%27",
          "type": "function"
        },
        "index": {
          "description": "Translation of the example CAES caes keeping labels The following is the prettified output of the translation where the five propositions in the middle are the assumptions and defeater translate caes AF False Left True murder False Left False murder False Right kill intent murder False Left False intent False Left True intent False Right witness2 unreliable2 intent True Right witness unreliable intent False Left True unreliable False Left False unreliable True Left True defeater True Left True kill True Left True witness True Left True witness2 True Left True unreliable2 True Left True defeater False Left True murder True Left True defeater False Left False murder True Left True defeater False Right kill intent murder True Left True defeater False Left False intent True Left True defeater False Left True intent True Left True unreliable2 False Right witness2 unreliable2 intent True Left True defeater False Left True unreliable True Left True defeater False Left False unreliable",
          "hierarchy": "Language CarneadesIntoDung Examples",
          "module": "Language.CarneadesIntoDung.Examples",
          "name": "exTrans'",
          "package": "CarneadesIntoDung",
          "partial": "Trans'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Examples.html#v:exTrans-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a translation from the Carneades argumentation model\n into Dung's argumentation frameworks. Any cycle-free Carneades Argument\n Evaluation Structure (CAES) is handled. We also give a Haskell implementation of \n correspondence properties. \n\u003c/p\u003e\u003cp\u003eTranslation is done according to the following algorithm (see also \"Towards a\n framework for the implementation and verification of translations between \n argumentation models\" by Bas van Gijzel and Henrik Nilsson)\n\u003c/p\u003e\u003col\u003e\u003cli\u003e generatedArgs = \u003cem\u003eemptyset\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e sortedArgs = Topological sort of arguments on its dependency graph.\n\u003c/li\u003e\u003cli\u003e while sortedArgs != \u003cem\u003eemptyset\u003c/em\u003e: \n\u003c/li\u003e\u003c/ol\u003e\u003cul\u003e\u003cli\u003e Pick the first argument in sortedArgs.\n     Remove all arguments from sortedArgs that have the same conclusion,\n     c, and put them in argSet. \n\u003c/li\u003e\u003cli\u003e Translate applicability part of arguments argSet, building on previously\n     generatedArgs and put the generated arguments in tempArgs.\n\u003c/li\u003e\u003cli\u003e argSet = \u003cem\u003eemptyset\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e Repeat the above three steps for the arguments for the opposite conclusion. \n\u003c/li\u003e\u003cli\u003e Translate the acceptability part of c and the opposite conclusion based on \n     arguments in tempArgs. Add the results and tempArgs to generatedArgs.\n\u003c/li\u003e\u003cli\u003e tempArgs = \u003cem\u003eemptyset\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "Translation",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Translation.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements translation from the Carneades argumentation model into Dung argumentation frameworks Any cycle-free Carneades Argument Evaluation Structure CAES is handled We also give Haskell implementation of correspondence properties Translation is done according to the following algorithm see also Towards framework for the implementation and verification of translations between argumentation models by Bas van Gijzel and Henrik Nilsson generatedArgs emptyset sortedArgs Topological sort of arguments on its dependency graph while sortedArgs emptyset Pick the first argument in sortedArgs Remove all arguments from sortedArgs that have the same conclusion and put them in argSet Translate applicability part of arguments argSet building on previously generatedArgs and put the generated arguments in tempArgs argSet emptyset Repeat the above three steps for the arguments for the opposite conclusion Translate the acceptability part of and the opposite conclusion based on arguments in tempArgs Add the results and tempArgs to generatedArgs tempArgs emptyset",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "Translation",
          "package": "CarneadesIntoDung",
          "partial": "Translation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn argumentation framework (AF) instantiated with \u003ccode\u003e\u003ca\u003eConcreteArg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "ConcreteAF",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Translation.html#ConcreteAF",
          "type": "type"
        },
        "index": {
          "description": "An argumentation framework AF instantiated with ConcreteArg",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "ConcreteAF",
          "package": "CarneadesIntoDung",
          "partial": "Concrete AF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#t:ConcreteAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete argument (in an argumentation framework) is either a Carneades \n propositional literal, or a Carneades argument.\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "ConcreteArg",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Translation.html#ConcreteArg",
          "type": "type"
        },
        "index": {
          "description": "concrete argument in an argumentation framework is either Carneades propositional literal or Carneades argument",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "ConcreteArg",
          "package": "CarneadesIntoDung",
          "partial": "Concrete Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#t:ConcreteArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn argumentation framework (AF) instantiated with \u003ccode\u003e\u003ca\u003eLConcreteArg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "LConcreteAF",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Translation.html#LConcreteAF",
          "type": "type"
        },
        "index": {
          "description": "An argumentation framework AF instantiated with LConcreteArg",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "LConcreteAF",
          "package": "CarneadesIntoDung",
          "partial": "LConcrete AF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#t:LConcreteAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA labelled version of the concrete argument allowing a more efficient \n translation by keeping track of the translation status.\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "LConcreteArg",
          "package": "CarneadesIntoDung",
          "source": "src/Language-CarneadesIntoDung-Translation.html#LConcreteArg",
          "type": "type"
        },
        "index": {
          "description": "labelled version of the concrete argument allowing more efficient translation by keeping track of the translation status",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "LConcreteArg",
          "package": "CarneadesIntoDung",
          "partial": "LConcrete Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#t:LConcreteArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespondence of the acceptability of propositional literals, including \n assumptions.\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "corAcc",
          "package": "CarneadesIntoDung",
          "signature": "CAES -\u003e Bool",
          "source": "src/Language-CarneadesIntoDung-Translation.html#corAcc",
          "type": "function"
        },
        "index": {
          "description": "Correspondence of the acceptability of propositional literals including assumptions",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "corAcc",
          "normalized": "CAES-\u003eBool",
          "package": "CarneadesIntoDung",
          "partial": "Acc",
          "signature": "CAES-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#v:corAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespondence of the applicability of arguments. \n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "corApp",
          "package": "CarneadesIntoDung",
          "signature": "CAES -\u003e Bool",
          "source": "src/Language-CarneadesIntoDung-Translation.html#corApp",
          "type": "function"
        },
        "index": {
          "description": "Correspondence of the applicability of arguments",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "corApp",
          "normalized": "CAES-\u003eBool",
          "package": "CarneadesIntoDung",
          "partial": "App",
          "signature": "CAES-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#v:corApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation function. It translate an arbitrary \u003cem\u003ecycle-free\u003c/em\u003e Carneades argument\n Evaluation Structure (CAES) into a Dung argumentation framework (instantiated\n with a ConcreteArg)\n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "translate",
          "package": "CarneadesIntoDung",
          "signature": "CAES -\u003e ConcreteAF",
          "source": "src/Language-CarneadesIntoDung-Translation.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Translation function It translate an arbitrary cycle-free Carneades argument Evaluation Structure CAES into Dung argumentation framework instantiated with ConcreteArg",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "translate",
          "normalized": "CAES-\u003eConcreteAF",
          "package": "CarneadesIntoDung",
          "signature": "CAES-\u003eConcreteAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly, for testing purposes. This function behaves exactly like \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e, \n but retains the labels. \n\u003c/p\u003e",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "translate'",
          "package": "CarneadesIntoDung",
          "signature": "CAES -\u003e LConcreteAF",
          "source": "src/Language-CarneadesIntoDung-Translation.html#translate%27",
          "type": "function"
        },
        "index": {
          "description": "Mainly for testing purposes This function behaves exactly like translate but retains the labels",
          "hierarchy": "Language CarneadesIntoDung Translation",
          "module": "Language.CarneadesIntoDung.Translation",
          "name": "translate'",
          "normalized": "CAES-\u003eLConcreteAF",
          "package": "CarneadesIntoDung",
          "signature": "CAES-\u003eLConcreteAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CarneadesIntoDung/docs/Language-CarneadesIntoDung-Translation.html#v:translate-39-"
      }
    }
  ]
]