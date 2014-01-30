[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis program compares two Infernal covariance models with each other.\n Based on the Infernal CM scoring mechanism, a Link sequence and Link score\n are calculated. The Link sequence is defined as the sequence scoring highest\n in both models simultanuously.\n\u003c/p\u003e\u003cp\u003eThe complete algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eChristian H&#246;ner zu Siederdissen, and Ivo L. Hofacker. 2010. Discriminatory\n power of RNA family models. Bioinformatics 26, no. 18: 453&#8211;59.\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://bioinformatics.oxfordjournals.org/content/26/18/i453.long\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNOTE always use coverage analysis to find out, if we really used all code\n paths (in long models, if a path is not taken, there is a bug)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "module",
        "fct-source": "src/BioInf-CMCompare.html",
        "fct-type": "module",
        "title": "CMCompare"
      },
      "index": {
        "description": "This program compares two Infernal covariance models with each other Based on the Infernal CM scoring mechanism Link sequence and Link score are calculated The Link sequence is defined as the sequence scoring highest in both models simultanuously The complete algorithm is described in Christian ner zu Siederdissen and Ivo Hofacker Discriminatory power of RNA family models Bioinformatics no http bioinformatics.oxfordjournals.org content i453.long NOTE always use coverage analysis to find out if we really used all code paths in long models if path is not taken there is bug",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "CMCompare",
        "normalized": "",
        "package": "CMCompare",
        "partial": "CMCompare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#t:Opt",
      "description": {
        "fct-descr": "\u003cp\u003eType of the optimization functions.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "type",
        "fct-source": "src/BioInf-CMCompare.html#Opt",
        "fct-type": "type",
        "title": "Opt"
      },
      "index": {
        "description": "Type of the optimization functions",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "Opt",
        "normalized": "",
        "package": "CMCompare",
        "partial": "Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:-60--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAlgebra product operation.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Opt a -\u003e Opt b -\u003e Opt (a, b)",
        "fct-source": "src/BioInf-CMCompare.html#%3C%2A%3E",
        "fct-type": "function",
        "title": "(\u003c*\u003e)"
      },
      "index": {
        "description": "Algebra product operation",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "(\u003c*\u003e) \u003c*\u003e",
        "normalized": "Opt a-\u003eOpt b-\u003eOpt(a,b)",
        "package": "CMCompare",
        "partial": "",
        "signature": "Opt a-\u003eOpt b-\u003eOpt(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:cykMaxiMin",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the cyk optimal score over both models.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Opt BitScore",
        "fct-source": "src/BioInf-CMCompare.html#cykMaxiMin",
        "fct-type": "function",
        "title": "cykMaxiMin"
      },
      "index": {
        "description": "Calculates the cyk optimal score over both models",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "cykMaxiMin",
        "normalized": "",
        "package": "CMCompare",
        "partial": "Maxi Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:dotBracket",
      "description": {
        "fct-descr": "\u003cp\u003eDotbracket notation, again with an endmarker, to see the secondary\n structure corresponding to the rnastring.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Bool -\u003e Opt String",
        "fct-source": "src/BioInf-CMCompare.html#dotBracket",
        "fct-type": "function",
        "title": "dotBracket"
      },
      "index": {
        "description": "Dotbracket notation again with an endmarker to see the secondary structure corresponding to the rnastring",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "dotBracket",
        "normalized": "Bool-\u003eOpt String",
        "package": "CMCompare",
        "partial": "Bracket",
        "signature": "Bool-\u003eOpt String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:extendedOutput",
      "description": {
        "fct-descr": "\u003cp\u003eDetailed output of the different states, that were visited.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Opt String",
        "fct-source": "src/BioInf-CMCompare.html#extendedOutput",
        "fct-type": "function",
        "title": "extendedOutput"
      },
      "index": {
        "description": "Detailed output of the different states that were visited",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "extendedOutput",
        "normalized": "",
        "package": "CMCompare",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:recurse",
      "description": {
        "fct-descr": "\u003cp\u003eRecursion in two CMs simultanously.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Bool -\u003e Opt a -\u003e CM -\u003e CM -\u003e Array (StateID, StateID) [(a, a)]",
        "fct-source": "src/BioInf-CMCompare.html#recurse",
        "fct-type": "function",
        "title": "recurse"
      },
      "index": {
        "description": "Recursion in two CMs simultanously",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "recurse",
        "normalized": "Bool-\u003eOpt a-\u003eCM-\u003eCM-\u003eArray(StateID,StateID)[(a,a)]",
        "package": "CMCompare",
        "partial": "",
        "signature": "Bool-\u003eOpt a-\u003eCM-\u003eCM-\u003eArray(StateID,StateID)[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:rnaString",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the nucleotide sequence leading to the score. uses an optional\n endmarker to denote end states. the string is the same for both models. this\n is the only Opt function, currently, for which this is true.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Bool -\u003e Opt [Char]",
        "fct-source": "src/BioInf-CMCompare.html#rnaString",
        "fct-type": "function",
        "title": "rnaString"
      },
      "index": {
        "description": "Return the nucleotide sequence leading to the score uses an optional endmarker to denote end states the string is the same for both models this is the only Opt function currently for which this is true",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "rnaString",
        "normalized": "Bool-\u003eOpt[Char]",
        "package": "CMCompare",
        "partial": "String",
        "signature": "Bool-\u003eOpt[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMCompare/docs/BioInf-CMCompare.html#v:visitedNodes",
      "description": {
        "fct-descr": "\u003cp\u003eShow the nodes which were visited to get the score. the last node can\n occur multiple times. if it does, local end transitions were used.\n\u003c/p\u003e",
        "fct-module": "BioInf.CMCompare",
        "fct-package": "CMCompare",
        "fct-signature": "Opt [NodeID]",
        "fct-source": "src/BioInf-CMCompare.html#visitedNodes",
        "fct-type": "function",
        "title": "visitedNodes"
      },
      "index": {
        "description": "Show the nodes which were visited to get the score the last node can occur multiple times if it does local end transitions were used",
        "hierarchy": "BioInf CMCompare",
        "module": "BioInf.CMCompare",
        "name": "visitedNodes",
        "normalized": "Opt[NodeID]",
        "package": "CMCompare",
        "partial": "Nodes",
        "signature": "Opt[NodeID]"
      }
    }
  }
]