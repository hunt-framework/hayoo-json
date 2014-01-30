[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#",
      "description": {
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "module",
        "fct-source": "src/NLP-HistPL-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Base",
      "description": {
        "fct-descr": "\u003cp\u003eBase form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Base",
        "fct-type": "type",
        "title": "Base"
      },
      "index": {
        "description": "Base form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Base",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:BaseDAWG",
      "description": {
        "fct-descr": "\u003cp\u003eDictionary keys represent base forms and rules transform base forms to\n their corresponding word forms.  Info \u003ccode\u003ea\u003c/code\u003e is assigned to every lexeme\n and info \u003ccode\u003eb\u003c/code\u003e to every word form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#BaseDAWG",
        "fct-type": "type",
        "title": "BaseDAWG"
      },
      "index": {
        "description": "Dictionary keys represent base forms and rules transform base forms to their corresponding word forms Info is assigned to every lexeme and info to every word form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "BaseDAWG",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Base DAWG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Bila",
      "description": {
        "fct-descr": "\u003cp\u003eBilateral dictionary.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "data",
        "fct-source": "src/NLP-HistPL-Fusion.html#Bila",
        "fct-type": "data",
        "title": "Bila"
      },
      "index": {
        "description": "Bilateral dictionary",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Bila",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Bila",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Choice",
      "description": {
        "fct-descr": "\u003cp\u003eThe final choice of lexemes.  Many different strategies can be used\n here sum of the sets, intersection, or voting.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Choice",
        "fct-type": "type",
        "title": "Choice"
      },
      "index": {
        "description": "The final choice of lexemes Many different strategies can be used here sum of the sets intersection or voting",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Choice",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Core",
      "description": {
        "fct-descr": "\u003cp\u003eWe provide three component types, \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFilter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChoice\u003c/a\u003e\u003c/code\u003e, which\n can be combined together using the \u003ccode\u003e\u003ca\u003ebuildCorresp\u003c/a\u003e\u003c/code\u003e function to construct\n a \u003ccode\u003e\u003ca\u003eCorresp\u003c/a\u003e\u003c/code\u003e function.  The first one, \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e, is used to identify a list\n of potential sets of lexemes.  It is natural to define the core function\n in such a way because the task of determining corresponding lexemes can\n be usually divided into a set of smaller tasks of the same purpose.\n For example, we may want to identify \u003ccode\u003e\u003ca\u003eLexSet\u003c/a\u003e\u003c/code\u003es corresponding to individual\n word forms of the historical lexeme.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Core",
        "fct-type": "type",
        "title": "Core"
      },
      "index": {
        "description": "We provide three component types Core Filter and Choice which can be combined together using the buildCorresp function to construct Corresp function The first one Core is used to identify list of potential sets of lexemes It is natural to define the core function in such way because the task of determining corresponding lexemes can be usually divided into set of smaller tasks of the same purpose For example we may want to identify LexSet corresponding to individual word forms of the historical lexeme",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Core",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Corresp",
      "description": {
        "fct-descr": "\u003cp\u003eA function which determines entries from a bilateral\n dictionary corresponing to a given historical lexeme.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Corresp",
        "fct-type": "type",
        "title": "Corresp"
      },
      "index": {
        "description": "function which determines entries from bilateral dictionary corresponing to given historical lexeme",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Corresp",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Corresp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Filter",
      "description": {
        "fct-descr": "\u003cp\u003eFunction which can be used to filter out lexemes which do not\n satisfy a particular predicate.  For example, we may want to filter\n out lexemes with incompatible POS value.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Filter",
        "fct-type": "type",
        "title": "Filter"
      },
      "index": {
        "description": "Function which can be used to filter out lexemes which do not satisfy particular predicate For example we may want to filter out lexemes with incompatible POS value",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Filter",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:FormDAWG",
      "description": {
        "fct-descr": "\u003cp\u003eDictionary keys represent word forms and rules transform word forms to\n their corresponding base forms.  Info \u003ccode\u003ea\u003c/code\u003e is assigned to every lexeme\n and info \u003ccode\u003eb\u003c/code\u003e to every word form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#FormDAWG",
        "fct-type": "type",
        "title": "FormDAWG"
      },
      "index": {
        "description": "Dictionary keys represent word forms and rules transform word forms to their corresponding base forms Info is assigned to every lexeme and info to every word form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "FormDAWG",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Form DAWG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:IsBase",
      "description": {
        "fct-descr": "\u003cp\u003eIs the word form a base form?\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#IsBase",
        "fct-type": "type",
        "title": "IsBase"
      },
      "index": {
        "description": "Is the word form base form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "IsBase",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Is Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:PLex",
      "description": {
        "fct-descr": "\u003cp\u003ePoliMorf dictionary entry.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#PLex",
        "fct-type": "type",
        "title": "PLex"
      },
      "index": {
        "description": "PoliMorf dictionary entry",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "PLex",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "PLex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:PLexSet",
      "description": {
        "fct-descr": "\u003cp\u003eSet of PoliMorf dictionary entries.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#PLexSet",
        "fct-type": "type",
        "title": "PLexSet"
      },
      "index": {
        "description": "Set of PoliMorf dictionary entries",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "PLexSet",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "PLex Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:POS",
      "description": {
        "fct-descr": "\u003cp\u003ePart of speech.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#POS",
        "fct-type": "type",
        "title": "POS"
      },
      "index": {
        "description": "Part of speech",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "POS",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "POS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Poli",
      "description": {
        "fct-descr": "\u003cp\u003ePoliMorf dictionary in a bilateral form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Poli",
        "fct-type": "type",
        "title": "Poli"
      },
      "index": {
        "description": "PoliMorf dictionary in bilateral form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Poli",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Poli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:UID",
      "description": {
        "fct-descr": "\u003cp\u003eA unique identifier among entries with the same \u003ccode\u003ekeyForm\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "UID"
      },
      "index": {
        "description": "unique identifier among entries with the same keyForm",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "UID",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "UID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eWord form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Fusion.html#Word",
        "fct-type": "type",
        "title": "Word"
      },
      "index": {
        "description": "Word form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Word",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:Bila",
      "description": {
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Bila",
        "fct-source": "src/NLP-HistPL-Fusion.html#Bila",
        "fct-type": "function",
        "title": "Bila"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "Bila",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Bila",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:baseDAWG",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "BaseDAWG i a b",
        "fct-source": "src/NLP-HistPL-Fusion.html#Bila",
        "fct-type": "function",
        "title": "baseDAWG"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "baseDAWG",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "DAWG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:buildCorresp",
      "description": {
        "fct-descr": "\u003cp\u003eBuild \u003ccode\u003e\u003ca\u003eCorresp\u003c/a\u003e\u003c/code\u003e function form individual components.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Core -\u003e Filter -\u003e Choice -\u003e Corresp",
        "fct-source": "src/NLP-HistPL-Fusion.html#buildCorresp",
        "fct-type": "function",
        "title": "buildCorresp"
      },
      "index": {
        "description": "Build Corresp function form individual components",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "buildCorresp",
        "normalized": "Core-\u003eFilter-\u003eChoice-\u003eCorresp",
        "package": "hist-pl-fusion",
        "partial": "Corresp",
        "signature": "Core-\u003eFilter-\u003eChoice-\u003eCorresp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:byForms",
      "description": {
        "fct-descr": "\u003cp\u003eIdentify \u003ccode\u003e\u003ca\u003eLexSet\u003c/a\u003e\u003c/code\u003es corresponding to individual word forms of the\n historical lexeme using the \u003ccode\u003e\u003ca\u003ewithForm\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Core",
        "fct-source": "src/NLP-HistPL-Fusion.html#byForms",
        "fct-type": "function",
        "title": "byForms"
      },
      "index": {
        "description": "Identify LexSet corresponding to individual word forms of the historical lexeme using the withForm function",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "byForms",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Forms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:formDAWG",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "FormDAWG i a b",
        "fct-source": "src/NLP-HistPL-Fusion.html#Bila",
        "fct-type": "function",
        "title": "formDAWG"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "formDAWG",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "DAWG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:mkBila",
      "description": {
        "fct-descr": "\u003cp\u003eMake bilateral dictionary from a list of (base form, ID, additional\n lexeme info, word form, additional word form info) tuples.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "[(Base, i, a, Word, b)] -\u003e Bila i a b",
        "fct-source": "src/NLP-HistPL-Fusion.html#mkBila",
        "fct-type": "function",
        "title": "mkBila"
      },
      "index": {
        "description": "Make bilateral dictionary from list of base form ID additional lexeme info word form additional word form info tuples",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "mkBila",
        "normalized": "[(Base,a,b,Word,c)]-\u003eBila a b c",
        "package": "hist-pl-fusion",
        "partial": "Bila",
        "signature": "[(Base,i,a,Word,b)]-\u003eBila i a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:mkPoli",
      "description": {
        "fct-descr": "\u003cp\u003eMake bilateral dictionary from PoliMorf.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "[Entry] -\u003e Poli",
        "fct-source": "src/NLP-HistPL-Fusion.html#mkPoli",
        "fct-type": "function",
        "title": "mkPoli"
      },
      "index": {
        "description": "Make bilateral dictionary from PoliMorf",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "mkPoli",
        "normalized": "[Entry]-\u003ePoli",
        "package": "hist-pl-fusion",
        "partial": "Poli",
        "signature": "[Entry]-\u003ePoli"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:posFilter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter out lexemes with POS value incompatible with the\n set of POS values assigned to the historical lexeme.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Filter",
        "fct-source": "src/NLP-HistPL-Fusion.html#posFilter",
        "fct-type": "function",
        "title": "posFilter"
      },
      "index": {
        "description": "Filter out lexemes with POS value incompatible with the set of POS values assigned to the historical lexeme",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "posFilter",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:sumChoice",
      "description": {
        "fct-descr": "\u003cp\u003eSum of sets of lexemes.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Choice",
        "fct-source": "src/NLP-HistPL-Fusion.html#sumChoice",
        "fct-type": "function",
        "title": "sumChoice"
      },
      "index": {
        "description": "Sum of sets of lexemes",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "sumChoice",
        "normalized": "",
        "package": "hist-pl-fusion",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:withForm",
      "description": {
        "fct-descr": "\u003cp\u003eIdentify entries which contain given word form.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Fusion",
        "fct-package": "hist-pl-fusion",
        "fct-signature": "Bila i a b -\u003e Word -\u003e LexSet i a b",
        "fct-source": "src/NLP-HistPL-Fusion.html#withForm",
        "fct-type": "function",
        "title": "withForm"
      },
      "index": {
        "description": "Identify entries which contain given word form",
        "hierarchy": "NLP HistPL Fusion",
        "module": "NLP.HistPL.Fusion",
        "name": "withForm",
        "normalized": "Bila a b c-\u003eWord-\u003eLexSet a b c",
        "package": "hist-pl-fusion",
        "partial": "Form",
        "signature": "Bila i a b-\u003eWord-\u003eLexSet i a b"
      }
    }
  }
]