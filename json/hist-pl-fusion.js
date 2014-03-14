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
        "word": "hist-pl-fusion"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.Fusion",
          "name": "Fusion",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Fusion",
          "package": "hist-pl-fusion",
          "partial": "Fusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Base",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Base",
          "type": "type"
        },
        "index": {
          "description": "Base form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Base",
          "package": "hist-pl-fusion",
          "partial": "Base",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary keys represent base forms and rules transform base forms to\n their corresponding word forms.  Info \u003ccode\u003ea\u003c/code\u003e is assigned to every lexeme\n and info \u003ccode\u003eb\u003c/code\u003e to every word form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "BaseDAWG",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#BaseDAWG",
          "type": "type"
        },
        "index": {
          "description": "Dictionary keys represent base forms and rules transform base forms to their corresponding word forms Info is assigned to every lexeme and info to every word form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "BaseDAWG",
          "package": "hist-pl-fusion",
          "partial": "Base DAWG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:BaseDAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBilateral dictionary.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Bila",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Bila",
          "type": "data"
        },
        "index": {
          "description": "Bilateral dictionary",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Bila",
          "package": "hist-pl-fusion",
          "partial": "Bila",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Bila"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe final choice of lexemes.  Many different strategies can be used\n here sum of the sets, intersection, or voting.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Choice",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Choice",
          "type": "type"
        },
        "index": {
          "description": "The final choice of lexemes Many different strategies can be used here sum of the sets intersection or voting",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Choice",
          "package": "hist-pl-fusion",
          "partial": "Choice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe provide three component types, \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFilter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChoice\u003c/a\u003e\u003c/code\u003e, which\n can be combined together using the \u003ccode\u003e\u003ca\u003ebuildCorresp\u003c/a\u003e\u003c/code\u003e function to construct\n a \u003ccode\u003e\u003ca\u003eCorresp\u003c/a\u003e\u003c/code\u003e function.  The first one, \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e, is used to identify a list\n of potential sets of lexemes.  It is natural to define the core function\n in such a way because the task of determining corresponding lexemes can\n be usually divided into a set of smaller tasks of the same purpose.\n For example, we may want to identify \u003ccode\u003e\u003ca\u003eLexSet\u003c/a\u003e\u003c/code\u003es corresponding to individual\n word forms of the historical lexeme.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Core",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Core",
          "type": "type"
        },
        "index": {
          "description": "We provide three component types Core Filter and Choice which can be combined together using the buildCorresp function to construct Corresp function The first one Core is used to identify list of potential sets of lexemes It is natural to define the core function in such way because the task of determining corresponding lexemes can be usually divided into set of smaller tasks of the same purpose For example we may want to identify LexSet corresponding to individual word forms of the historical lexeme",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Core",
          "package": "hist-pl-fusion",
          "partial": "Core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function which determines entries from a bilateral\n dictionary corresponing to a given historical lexeme.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Corresp",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Corresp",
          "type": "type"
        },
        "index": {
          "description": "function which determines entries from bilateral dictionary corresponing to given historical lexeme",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Corresp",
          "package": "hist-pl-fusion",
          "partial": "Corresp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Corresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction which can be used to filter out lexemes which do not\n satisfy a particular predicate.  For example, we may want to filter\n out lexemes with incompatible POS value.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Filter",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Filter",
          "type": "type"
        },
        "index": {
          "description": "Function which can be used to filter out lexemes which do not satisfy particular predicate For example we may want to filter out lexemes with incompatible POS value",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Filter",
          "package": "hist-pl-fusion",
          "partial": "Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary keys represent word forms and rules transform word forms to\n their corresponding base forms.  Info \u003ccode\u003ea\u003c/code\u003e is assigned to every lexeme\n and info \u003ccode\u003eb\u003c/code\u003e to every word form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "FormDAWG",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#FormDAWG",
          "type": "type"
        },
        "index": {
          "description": "Dictionary keys represent word forms and rules transform word forms to their corresponding base forms Info is assigned to every lexeme and info to every word form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "FormDAWG",
          "package": "hist-pl-fusion",
          "partial": "Form DAWG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:FormDAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the word form a base form?\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "IsBase",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#IsBase",
          "type": "type"
        },
        "index": {
          "description": "Is the word form base form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "IsBase",
          "package": "hist-pl-fusion",
          "partial": "Is Base",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:IsBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoliMorf dictionary entry.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "PLex",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#PLex",
          "type": "type"
        },
        "index": {
          "description": "PoliMorf dictionary entry",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "PLex",
          "package": "hist-pl-fusion",
          "partial": "PLex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:PLex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of PoliMorf dictionary entries.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "PLexSet",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#PLexSet",
          "type": "type"
        },
        "index": {
          "description": "Set of PoliMorf dictionary entries",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "PLexSet",
          "package": "hist-pl-fusion",
          "partial": "PLex Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:PLexSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePart of speech.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "POS",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#POS",
          "type": "type"
        },
        "index": {
          "description": "Part of speech",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "POS",
          "package": "hist-pl-fusion",
          "partial": "POS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:POS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoliMorf dictionary in a bilateral form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Poli",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Poli",
          "type": "type"
        },
        "index": {
          "description": "PoliMorf dictionary in bilateral form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Poli",
          "package": "hist-pl-fusion",
          "partial": "Poli",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Poli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique identifier among entries with the same \u003ccode\u003ekeyForm\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "UID",
          "package": "hist-pl-fusion",
          "type": "type"
        },
        "index": {
          "description": "unique identifier among entries with the same keyForm",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "UID",
          "package": "hist-pl-fusion",
          "partial": "UID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "Word",
          "package": "hist-pl-fusion",
          "source": "src/NLP-HistPL-Fusion.html#Word",
          "type": "type"
        },
        "index": {
          "description": "Word form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Word",
          "package": "hist-pl-fusion",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.Fusion",
          "name": "Bila",
          "package": "hist-pl-fusion",
          "signature": "Bila",
          "source": "src/NLP-HistPL-Fusion.html#Bila",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "Bila",
          "package": "hist-pl-fusion",
          "partial": "Bila",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:Bila"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.Fusion",
          "name": "baseDAWG",
          "package": "hist-pl-fusion",
          "signature": "BaseDAWG i a b",
          "source": "src/NLP-HistPL-Fusion.html#Bila",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "baseDAWG",
          "package": "hist-pl-fusion",
          "partial": "DAWG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:baseDAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild \u003ccode\u003e\u003ca\u003eCorresp\u003c/a\u003e\u003c/code\u003e function form individual components.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "buildCorresp",
          "package": "hist-pl-fusion",
          "signature": "Core -\u003e Filter -\u003e Choice -\u003e Corresp",
          "source": "src/NLP-HistPL-Fusion.html#buildCorresp",
          "type": "function"
        },
        "index": {
          "description": "Build Corresp function form individual components",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "buildCorresp",
          "normalized": "Core-\u003eFilter-\u003eChoice-\u003eCorresp",
          "package": "hist-pl-fusion",
          "partial": "Corresp",
          "signature": "Core-\u003eFilter-\u003eChoice-\u003eCorresp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:buildCorresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify \u003ccode\u003e\u003ca\u003eLexSet\u003c/a\u003e\u003c/code\u003es corresponding to individual word forms of the\n historical lexeme using the \u003ccode\u003e\u003ca\u003ewithForm\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "byForms",
          "package": "hist-pl-fusion",
          "signature": "Core",
          "source": "src/NLP-HistPL-Fusion.html#byForms",
          "type": "function"
        },
        "index": {
          "description": "Identify LexSet corresponding to individual word forms of the historical lexeme using the withForm function",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "byForms",
          "package": "hist-pl-fusion",
          "partial": "Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:byForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.Fusion",
          "name": "formDAWG",
          "package": "hist-pl-fusion",
          "signature": "FormDAWG i a b",
          "source": "src/NLP-HistPL-Fusion.html#Bila",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "formDAWG",
          "package": "hist-pl-fusion",
          "partial": "DAWG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:formDAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake bilateral dictionary from a list of (base form, ID, additional\n lexeme info, word form, additional word form info) tuples.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "mkBila",
          "package": "hist-pl-fusion",
          "signature": "[(Base, i, a, Word, b)] -\u003e Bila i a b",
          "source": "src/NLP-HistPL-Fusion.html#mkBila",
          "type": "function"
        },
        "index": {
          "description": "Make bilateral dictionary from list of base form ID additional lexeme info word form additional word form info tuples",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "mkBila",
          "normalized": "[(Base,a,b,Word,c)]-\u003eBila a b c",
          "package": "hist-pl-fusion",
          "partial": "Bila",
          "signature": "[(Base,i,a,Word,b)]-\u003eBila i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:mkBila"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake bilateral dictionary from PoliMorf.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "mkPoli",
          "package": "hist-pl-fusion",
          "signature": "[Entry] -\u003e Poli",
          "source": "src/NLP-HistPL-Fusion.html#mkPoli",
          "type": "function"
        },
        "index": {
          "description": "Make bilateral dictionary from PoliMorf",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "mkPoli",
          "normalized": "[Entry]-\u003ePoli",
          "package": "hist-pl-fusion",
          "partial": "Poli",
          "signature": "[Entry]-\u003ePoli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:mkPoli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out lexemes with POS value incompatible with the\n set of POS values assigned to the historical lexeme.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "posFilter",
          "package": "hist-pl-fusion",
          "signature": "Filter",
          "source": "src/NLP-HistPL-Fusion.html#posFilter",
          "type": "function"
        },
        "index": {
          "description": "Filter out lexemes with POS value incompatible with the set of POS values assigned to the historical lexeme",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "posFilter",
          "package": "hist-pl-fusion",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:posFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of sets of lexemes.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "sumChoice",
          "package": "hist-pl-fusion",
          "signature": "Choice",
          "source": "src/NLP-HistPL-Fusion.html#sumChoice",
          "type": "function"
        },
        "index": {
          "description": "Sum of sets of lexemes",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "sumChoice",
          "package": "hist-pl-fusion",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:sumChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify entries which contain given word form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Fusion",
          "name": "withForm",
          "package": "hist-pl-fusion",
          "signature": "Bila i a b -\u003e Word -\u003e LexSet i a b",
          "source": "src/NLP-HistPL-Fusion.html#withForm",
          "type": "function"
        },
        "index": {
          "description": "Identify entries which contain given word form",
          "hierarchy": "NLP HistPL Fusion",
          "module": "NLP.HistPL.Fusion",
          "name": "withForm",
          "normalized": "Bila a b c-\u003eWord-\u003eLexSet a b c",
          "package": "hist-pl-fusion",
          "partial": "Form",
          "signature": "Bila i a b-\u003eWord-\u003eLexSet i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-fusion/docs/NLP-HistPL-Fusion.html#v:withForm"
      }
    }
  ]
]