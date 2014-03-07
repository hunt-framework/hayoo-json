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
        "word": "logic-TPTP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Base",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Base",
          "package": "logic-TPTP",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotations about the formulas origin                   \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Annotations",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Annotations",
          "type": "data"
        },
        "index": {
          "description": "Annotations about the formulas origin",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Annotations",
          "package": "logic-TPTP",
          "partial": "Annotations",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Annotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTPTP constant symbol/predicate symbol/function symbol identifiers (they are output in single quotes unless they are \u003cem\u003elower_word\u003c/em\u003es). \n\u003c/p\u003e\u003cp\u003eTip: Use the \u003ccode\u003e-XOverloadedStrings\u003c/code\u003e compiler flag if you don't want to have to type \u003cem\u003eAtomicWord\u003c/em\u003e to construct an \u003ccode\u003e\u003ca\u003eAtomicWord\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "AtomicWord",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#AtomicWord",
          "type": "newtype"
        },
        "index": {
          "description": "TPTP constant symbol predicate symbol function symbol identifiers they are output in single quotes unless they are lower word Tip Use the XOverloadedStrings compiler flag if you don want to have to type AtomicWord to construct an AtomicWord",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "AtomicWord",
          "package": "logic-TPTP",
          "partial": "Atomic Word",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:AtomicWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary formula connectives \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "BinOp",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "data"
        },
        "index": {
          "description": "Binary formula connectives",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "BinOp",
          "package": "logic-TPTP",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormulae whose subexpressions are wrapped in the given type constructor \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ec = \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e: Plain formulae\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ec = \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e: Formulae that may contain \"holes\"\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ec = \u003ccode\u003eIORef\u003c/code\u003e\u003c/code\u003e: (Mutable) formulae with mutable subexpressions \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.TPTP.Base",
          "name": "F",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#F",
          "type": "newtype"
        },
        "index": {
          "description": "Formulae whose subexpressions are wrapped in the given type constructor For example Identity Plain formulae Maybe Formulae that may contain holes IORef Mutable formulae with mutable subexpressions",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "F",
          "package": "logic-TPTP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic (undecorated) first-order formulae                   \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Formula",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Formula",
          "type": "type"
        },
        "index": {
          "description": "Basic undecorated first-order formulae",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Formula",
          "package": "logic-TPTP",
          "partial": "Formula",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://haskell.org/haskellwiki/Indirect_composite\u003c/a\u003e for the point of the type parameters (they allow for future decorations, e.g. monadic subformulae). If you don't need decorations, you can just use \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e and the wrapped constructors above.\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Formula0",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "data"
        },
        "index": {
          "description": "See http haskell.org haskellwiki Indirect composite for the point of the type parameters they allow for future decorations e.g monadic subformulae If you don need decorations you can just use Formula and the wrapped constructors above",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Formula0",
          "package": "logic-TPTP",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Formula0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst-order formulae decorated with comments\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "FormulaC",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#FormulaC",
          "type": "type"
        },
        "index": {
          "description": "First-order formulae decorated with comments",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "FormulaC",
          "package": "logic-TPTP",
          "partial": "Formula",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:FormulaC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst-order formulae decorated with state\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "FormulaST",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#FormulaST",
          "type": "type"
        },
        "index": {
          "description": "First-order formulae decorated with state",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "FormulaST",
          "package": "logic-TPTP",
          "partial": "Formula ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:FormulaST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "FreeVars",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#FreeVars",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "FreeVars",
          "package": "logic-TPTP",
          "partial": "Free Vars",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:FreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata (the \u003cem\u003egeneral_data\u003c/em\u003e rule in TPTP's grammar)\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "GData",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "data"
        },
        "index": {
          "description": "Metadata the general data rule in TPTP grammar",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GData",
          "package": "logic-TPTP",
          "partial": "GData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:GData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata (the \u003cem\u003egeneral_term\u003c/em\u003e rule in TPTP's grammar)\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "GTerm",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#GTerm",
          "type": "data"
        },
        "index": {
          "description": "Metadata the general term rule in TPTP grammar",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GTerm",
          "package": "logic-TPTP",
          "partial": "GTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:GTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eTerm -\u003e Term -\u003e Formula\u003c/em\u003e infix connectives\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "InfixPred",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#InfixPred",
          "type": "data"
        },
        "index": {
          "description": "Term Term Formula infix connectives",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "InfixPred",
          "package": "logic-TPTP",
          "partial": "Infix Pred",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:InfixPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier specification\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Quant",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Quant",
          "type": "data"
        },
        "index": {
          "description": "Quantifier specification",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Quant",
          "package": "logic-TPTP",
          "partial": "Quant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Quant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormula roles\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Role",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Role",
          "type": "newtype"
        },
        "index": {
          "description": "Formula roles",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Role",
          "package": "logic-TPTP",
          "partial": "Role",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerms whose subterms are wrapped in the given type constructor \u003ccode\u003ec\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "T",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "Terms whose subterms are wrapped in the given type constructor",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "T",
          "package": "logic-TPTP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line of a TPTP file: Annotated formula, comment or include statement.\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input",
          "type": "type"
        },
        "index": {
          "description": "line of TPTP file Annotated formula comment or include statement",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input",
          "package": "logic-TPTP",
          "partial": "TPTP Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:TPTP_Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized TPTP_Input\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input_",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "data"
        },
        "index": {
          "description": "Generalized TPTP Input",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input_",
          "package": "logic-TPTP",
          "partial": "TPTP Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:TPTP_Input_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line of a TPTP file: Annotated formula (with the comment string embbeded in the State monad ), comment or include statement\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input_C",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_C",
          "type": "type"
        },
        "index": {
          "description": "line of TPTP file Annotated formula with the comment string embbeded in the State monad comment or include statement",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "TPTP_Input_C",
          "package": "logic-TPTP",
          "partial": "TPTP Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:TPTP_Input_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic (undecorated) terms\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Term",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Term",
          "type": "type"
        },
        "index": {
          "description": "Basic undecorated terms",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Term",
          "package": "logic-TPTP",
          "partial": "Term",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://haskell.org/haskellwiki/Indirect_composite\u003c/a\u003e for the point of the type parameters (they allow for future decorations). If you don't need decorations, you can just use \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e and the wrapped constructors above.\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Term0",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#Term0",
          "type": "data"
        },
        "index": {
          "description": "See http haskell.org haskellwiki Indirect composite for the point of the type parameters they allow for future decorations If you don need decorations you can just use Term and the wrapped constructors above",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Term0",
          "package": "logic-TPTP",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:Term0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerms decorated with comments\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "TermC",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#TermC",
          "type": "type"
        },
        "index": {
          "description": "Terms decorated with comments",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "TermC",
          "package": "logic-TPTP",
          "partial": "Term",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:TermC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerms decorated with state\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "TermST",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#TermST",
          "type": "type"
        },
        "index": {
          "description": "Terms decorated with state",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "TermST",
          "package": "logic-TPTP",
          "partial": "Term ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:TermST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMisc annotations\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "UsefulInfo",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#UsefulInfo",
          "type": "data"
        },
        "index": {
          "description": "Misc annotations",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "UsefulInfo",
          "package": "logic-TPTP",
          "partial": "Useful Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:UsefulInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable names\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "V",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Base.html#V",
          "type": "newtype"
        },
        "index": {
          "description": "Variable names",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "V",
          "package": "logic-TPTP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction/OR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.|.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%7C.",
          "type": "function"
        },
        "index": {
          "description": "Disjunction OR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.|.) .|.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.~|.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.~%7C.",
          "type": "function"
        },
        "index": {
          "description": "NOR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.~|.) .~|.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-126--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNAND\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.~&.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.~%26.",
          "type": "function"
        },
        "index": {
          "description": "NAND",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.~&.) .~&.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-126--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.~.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.~.",
          "type": "function"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.~.) .~.",
          "normalized": "F a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-126-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInequality\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.!=.)",
          "package": "logic-TPTP",
          "signature": "T c -\u003e T c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%21%3D.",
          "type": "function"
        },
        "index": {
          "description": "Inequality",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.!=.) .!=.",
          "normalized": "T a-\u003eT a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "T c-\u003eT c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-33--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction/AND\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.&.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%26.",
          "type": "function"
        },
        "index": {
          "description": "Conjunction AND",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.&.) .&.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXOR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c~\u003e.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%3C~%3E.",
          "type": "function"
        },
        "index": {
          "description": "XOR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c~\u003e.) .\u003c~\u003e.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-60--126--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalence\n\u003c/p\u003e\u003cp\u003eImportant special case:\n\u003c/p\u003e\u003cpre\u003e(.\u003c=\u003e.) :: \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c=\u003e.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%3C%3D%3E.",
          "type": "function"
        },
        "index": {
          "description": "Equivalence Important special case Formula Formula Formula",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c=\u003e.) .\u003c=\u003e.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-60--61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse implication\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c=.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "description": "Reverse implication",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.=\u003e.)",
          "package": "logic-TPTP",
          "signature": "F c -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%3D%3E.",
          "type": "function"
        },
        "index": {
          "description": "Implication",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.=\u003e.) .=\u003e.",
          "normalized": "F a-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "F c-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "(.=.)",
          "package": "logic-TPTP",
          "signature": "T c -\u003e T c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#.%3D.",
          "type": "function"
        },
        "index": {
          "description": "Equality",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "(.=.) .=.",
          "normalized": "T a-\u003eT a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "T c-\u003eT c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:.-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":|:",
          "package": "logic-TPTP",
          "signature": ":|:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "OR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":|:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":~|:",
          "package": "logic-TPTP",
          "signature": ":~|:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "NOR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":~|:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-126--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNAND\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":~&:",
          "package": "logic-TPTP",
          "signature": ":~&:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "NAND",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":~&:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-126--38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":~:",
          "package": "logic-TPTP",
          "signature": ":~: formula",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "function"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":~:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": ":!=:",
          "package": "logic-TPTP",
          "signature": ":!=:",
          "source": "src/Codec-TPTP-Base.html#InfixPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":!=:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-33--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAND\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":&:",
          "package": "logic-TPTP",
          "signature": ":&:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "AND",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":&:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXOR\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c~\u003e:",
          "package": "logic-TPTP",
          "signature": ":\u003c~\u003e:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "XOR",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c~\u003e:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-60--126--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalence\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c=\u003e:",
          "package": "logic-TPTP",
          "signature": ":",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Equivalence",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c=\u003e:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-60--61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse Implication\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c=:",
          "package": "logic-TPTP",
          "signature": ":\u003c=:",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Reverse Implication",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":\u003c=:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-60--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": ":=\u003e:",
          "package": "logic-TPTP",
          "signature": ":",
          "source": "src/Codec-TPTP-Base.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Implication",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":=\u003e:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": ":=:",
          "package": "logic-TPTP",
          "signature": ":=:",
          "source": "src/Codec-TPTP-Base.html#InfixPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": ":=:",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotated formulae\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "AFormula",
          "package": "logic-TPTP",
          "signature": "AFormula",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "description": "Annotated formulae",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "AFormula",
          "package": "logic-TPTP",
          "partial": "AFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:AFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "All",
          "package": "logic-TPTP",
          "signature": "All",
          "source": "src/Codec-TPTP-Base.html#Quant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "All",
          "package": "logic-TPTP",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Annotations",
          "package": "logic-TPTP",
          "signature": "Annotations GTerm UsefulInfo",
          "source": "src/Codec-TPTP-Base.html#Annotations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Annotations",
          "package": "logic-TPTP",
          "partial": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Annotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "AtomicWord",
          "package": "logic-TPTP",
          "signature": "AtomicWord String",
          "source": "src/Codec-TPTP-Base.html#AtomicWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "AtomicWord",
          "package": "logic-TPTP",
          "partial": "Atomic Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:AtomicWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary connective application\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "BinOp",
          "package": "logic-TPTP",
          "signature": "BinOp formula BinOp formula",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "function"
        },
        "index": {
          "description": "Binary connective application",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "BinOp",
          "package": "logic-TPTP",
          "partial": "Bin Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "ColonSep",
          "package": "logic-TPTP",
          "signature": "ColonSep GData GTerm",
          "source": "src/Codec-TPTP-Base.html#GTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "ColonSep",
          "package": "logic-TPTP",
          "partial": "Colon Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:ColonSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Comment",
          "package": "logic-TPTP",
          "signature": "Comment String",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Comment",
          "package": "logic-TPTP",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-quoted item\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "DistinctObjectTerm",
          "package": "logic-TPTP",
          "signature": "DistinctObjectTerm String",
          "source": "src/Codec-TPTP-Base.html#Term0",
          "type": "function"
        },
        "index": {
          "description": "Double-quoted item",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "DistinctObjectTerm",
          "package": "logic-TPTP",
          "partial": "Distinct Object Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:DistinctObjectTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Exists",
          "package": "logic-TPTP",
          "signature": "Exists",
          "source": "src/Codec-TPTP-Base.html#Quant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Exists",
          "package": "logic-TPTP",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "F",
          "package": "logic-TPTP",
          "signature": "F",
          "source": "src/Codec-TPTP-Base.html#F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "F",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction symbol application (constants are encoded as nullary functions) \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "FunApp",
          "package": "logic-TPTP",
          "signature": "FunApp AtomicWord [term]",
          "source": "src/Codec-TPTP-Base.html#Term0",
          "type": "function"
        },
        "index": {
          "description": "Function symbol application constants are encoded as nullary functions",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "FunApp",
          "normalized": "FunApp AtomicWord[a]",
          "package": "logic-TPTP",
          "partial": "Fun App",
          "signature": "FunApp AtomicWord[term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:FunApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GApp",
          "package": "logic-TPTP",
          "signature": "GApp AtomicWord [GTerm]",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GApp",
          "normalized": "GApp AtomicWord[GTerm]",
          "package": "logic-TPTP",
          "partial": "GApp",
          "signature": "GApp AtomicWord[GTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GDistinctObject",
          "package": "logic-TPTP",
          "signature": "GDistinctObject String",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GDistinctObject",
          "package": "logic-TPTP",
          "partial": "GDistinct Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GDistinctObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GFormulaData",
          "package": "logic-TPTP",
          "signature": "GFormulaData String Formula",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GFormulaData",
          "package": "logic-TPTP",
          "partial": "GFormula Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GFormulaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GList",
          "package": "logic-TPTP",
          "signature": "GList [GTerm]",
          "source": "src/Codec-TPTP-Base.html#GTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GList",
          "normalized": "GList[GTerm]",
          "package": "logic-TPTP",
          "partial": "GList",
          "signature": "GList[GTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GNumber",
          "package": "logic-TPTP",
          "signature": "GNumber Rational",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GNumber",
          "package": "logic-TPTP",
          "partial": "GNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GTerm",
          "package": "logic-TPTP",
          "signature": "GTerm GData",
          "source": "src/Codec-TPTP-Base.html#GTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GTerm",
          "package": "logic-TPTP",
          "partial": "GTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GVar",
          "package": "logic-TPTP",
          "signature": "GVar V",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GVar",
          "package": "logic-TPTP",
          "partial": "GVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "GWord",
          "package": "logic-TPTP",
          "signature": "GWord AtomicWord",
          "source": "src/Codec-TPTP-Base.html#GData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "GWord",
          "package": "logic-TPTP",
          "partial": "GWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:GWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Include",
          "package": "logic-TPTP",
          "signature": "Include FilePath [AtomicWord]",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Include",
          "normalized": "Include FilePath[AtomicWord]",
          "package": "logic-TPTP",
          "partial": "Include",
          "signature": "Include FilePath[AtomicWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Include"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix predicate application (equalities, inequalities)\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "InfixPred",
          "package": "logic-TPTP",
          "signature": "InfixPred term InfixPred term",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "function"
        },
        "index": {
          "description": "Infix predicate application equalities inequalities",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "InfixPred",
          "package": "logic-TPTP",
          "partial": "Infix Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:InfixPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "NoAnnotations",
          "package": "logic-TPTP",
          "signature": "NoAnnotations",
          "source": "src/Codec-TPTP-Base.html#Annotations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "NoAnnotations",
          "package": "logic-TPTP",
          "partial": "No Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:NoAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "NoUsefulInfo",
          "package": "logic-TPTP",
          "signature": "NoUsefulInfo",
          "source": "src/Codec-TPTP-Base.html#UsefulInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "NoUsefulInfo",
          "package": "logic-TPTP",
          "partial": "No Useful Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:NoUsefulInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber literal\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "NumberLitTerm",
          "package": "logic-TPTP",
          "signature": "NumberLitTerm Rational",
          "source": "src/Codec-TPTP-Base.html#Term0",
          "type": "function"
        },
        "index": {
          "description": "Number literal",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "NumberLitTerm",
          "package": "logic-TPTP",
          "partial": "Number Lit Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:NumberLitTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate application\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "PredApp",
          "package": "logic-TPTP",
          "signature": "PredApp AtomicWord [term]",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "function"
        },
        "index": {
          "description": "Predicate application",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "PredApp",
          "normalized": "PredApp AtomicWord[a]",
          "package": "logic-TPTP",
          "partial": "Pred App",
          "signature": "PredApp AtomicWord[term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:PredApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantified formula\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Quant",
          "package": "logic-TPTP",
          "signature": "Quant Quant [V] formula",
          "source": "src/Codec-TPTP-Base.html#Formula0",
          "type": "function"
        },
        "index": {
          "description": "Quantified formula",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Quant",
          "normalized": "Quant Quant[V]a",
          "package": "logic-TPTP",
          "partial": "Quant",
          "signature": "Quant Quant[V]formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Quant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "Role",
          "package": "logic-TPTP",
          "signature": "Role",
          "source": "src/Codec-TPTP-Base.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Role",
          "package": "logic-TPTP",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "T",
          "package": "logic-TPTP",
          "signature": "T",
          "source": "src/Codec-TPTP-Base.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "T",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "UsefulInfo",
          "package": "logic-TPTP",
          "signature": "UsefulInfo [GTerm]",
          "source": "src/Codec-TPTP-Base.html#UsefulInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "UsefulInfo",
          "normalized": "UsefulInfo[GTerm]",
          "package": "logic-TPTP",
          "partial": "Useful Info",
          "signature": "UsefulInfo[GTerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:UsefulInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "V",
          "package": "logic-TPTP",
          "signature": "V String",
          "source": "src/Codec-TPTP-Base.html#V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "V",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "Var",
          "package": "logic-TPTP",
          "signature": "Var V",
          "source": "src/Codec-TPTP-Base.html#Term0",
          "type": "function"
        },
        "index": {
          "description": "Variable",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "Var",
          "package": "logic-TPTP",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "annotations",
          "package": "logic-TPTP",
          "signature": "Annotations",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "annotations",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:annotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-quoted string literal, called \u003cem\u003eDistinct Object\u003c/em\u003e in TPTP's grammar \n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "distinctObjectTerm",
          "package": "logic-TPTP",
          "signature": "String -\u003e T c",
          "source": "src/Codec-TPTP-Base.html#distinctObjectTerm",
          "type": "function"
        },
        "index": {
          "description": "Double-quoted string literal called Distinct Object in TPTP grammar",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "distinctObjectTerm",
          "normalized": "String-\u003eT a",
          "package": "logic-TPTP",
          "partial": "Object Term",
          "signature": "String-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:distinctObjectTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential quantification\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "exists",
          "package": "logic-TPTP",
          "signature": "[V] -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#exists",
          "type": "function"
        },
        "index": {
          "description": "Existential quantification",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "exists",
          "normalized": "[V]-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "[V]-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction symbol application (constants are encoded as nullary functions)\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "fApp",
          "package": "logic-TPTP",
          "signature": "AtomicWord -\u003e [T c] -\u003e T c",
          "source": "src/Codec-TPTP-Base.html#fApp",
          "type": "function"
        },
        "index": {
          "description": "Function symbol application constants are encoded as nullary functions",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "fApp",
          "normalized": "AtomicWord-\u003e[T a]-\u003eT a",
          "package": "logic-TPTP",
          "partial": "App",
          "signature": "AtomicWord-\u003e[T c]-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:fApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminate formulae\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "foldF",
          "package": "logic-TPTP",
          "signature": "(F t -\u003e r)-\u003e (Quant -\u003e [V] -\u003e F t -\u003e r)-\u003e (F t -\u003e BinOp -\u003e F t -\u003e r)-\u003e (T t -\u003e InfixPred -\u003e T t -\u003e r)-\u003e (AtomicWord -\u003e [T t] -\u003e r)-\u003e F t -\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Eliminate formulae",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "foldF",
          "normalized": "(F a-\u003eb)-\u003e(Quant-\u003e[V]-\u003eF a-\u003eb)-\u003e(F a-\u003eBinOp-\u003eF a-\u003eb)-\u003e(T a-\u003eInfixPred-\u003eT a-\u003eb)-\u003e(AtomicWord-\u003e[T a]-\u003eb)-\u003eF a-\u003eb",
          "package": "logic-TPTP",
          "signature": "(F t-\u003er)-\u003e(Quant-\u003e[V]-\u003eF t-\u003er)-\u003e(F t-\u003eBinOp-\u003eF t-\u003er)-\u003e(T t-\u003eInfixPred-\u003eT t-\u003er)-\u003e(AtomicWord-\u003e[T t]-\u003er)-\u003eF t-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:foldF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "foldFormula0",
          "package": "logic-TPTP",
          "signature": "(f -\u003e r) -\u003e (Quant -\u003e [V] -\u003e f -\u003e r) -\u003e (f -\u003e BinOp -\u003e f -\u003e r) -\u003e (t -\u003e InfixPred -\u003e t -\u003e r) -\u003e (AtomicWord -\u003e [t] -\u003e r) -\u003e Formula0 t f -\u003e r",
          "source": "src/Codec-TPTP-Base.html#foldFormula0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "foldFormula0",
          "normalized": "(a-\u003eb)-\u003e(Quant-\u003e[V]-\u003ea-\u003eb)-\u003e(a-\u003eBinOp-\u003ea-\u003eb)-\u003e(c-\u003eInfixPred-\u003ec-\u003eb)-\u003e(AtomicWord-\u003e[c]-\u003eb)-\u003eFormula c a-\u003eb",
          "package": "logic-TPTP",
          "partial": "Formula",
          "signature": "(f-\u003er)-\u003e(Quant-\u003e[V]-\u003ef-\u003er)-\u003e(f-\u003eBinOp-\u003ef-\u003er)-\u003e(t-\u003eInfixPred-\u003et-\u003er)-\u003e(AtomicWord-\u003e[t]-\u003er)-\u003eFormula t f-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:foldFormula0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminate terms\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "foldT",
          "package": "logic-TPTP",
          "signature": "(String -\u003e r)-\u003e (Rational -\u003e r)-\u003e (V -\u003e r)-\u003e (AtomicWord -\u003e [T t] -\u003e r)-\u003e T t -\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Eliminate terms",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "foldT",
          "normalized": "(String-\u003ea)-\u003e(Rational-\u003ea)-\u003e(V-\u003ea)-\u003e(AtomicWord-\u003e[T b]-\u003ea)-\u003eT b-\u003ea",
          "package": "logic-TPTP",
          "signature": "(String-\u003er)-\u003e(Rational-\u003er)-\u003e(V-\u003er)-\u003e(AtomicWord-\u003e[T t]-\u003er)-\u003eT t-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:foldT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "foldTerm0",
          "package": "logic-TPTP",
          "signature": "(String -\u003e r) -\u003e (Rational -\u003e r) -\u003e (V -\u003e r) -\u003e (AtomicWord -\u003e [t] -\u003e r) -\u003e Term0 t -\u003e r",
          "source": "src/Codec-TPTP-Base.html#foldTerm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "foldTerm0",
          "normalized": "(String-\u003ea)-\u003e(Rational-\u003ea)-\u003e(V-\u003ea)-\u003e(AtomicWord-\u003e[b]-\u003ea)-\u003eTerm b-\u003ea",
          "package": "logic-TPTP",
          "partial": "Term",
          "signature": "(String-\u003er)-\u003e(Rational-\u003er)-\u003e(V-\u003er)-\u003e(AtomicWord-\u003e[t]-\u003er)-\u003eTerm t-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:foldTerm0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal quantification\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "for_all",
          "package": "logic-TPTP",
          "signature": "[V] -\u003e F c -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#for_all",
          "type": "function"
        },
        "index": {
          "description": "Universal quantification",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "for_all",
          "normalized": "[V]-\u003eF a-\u003eF a",
          "package": "logic-TPTP",
          "signature": "[V]-\u003eF c-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:for_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget comments in formulae decorated with comments\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "forgetFC",
          "package": "logic-TPTP",
          "signature": "FormulaC -\u003e Formula",
          "source": "src/Codec-TPTP-Base.html#forgetFC",
          "type": "function"
        },
        "index": {
          "description": "Forget comments in formulae decorated with comments",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "forgetFC",
          "normalized": "FormulaC-\u003eFormula",
          "package": "logic-TPTP",
          "partial": "FC",
          "signature": "FormulaC-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:forgetFC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget comments in terms decorated with comments\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "forgetTC",
          "package": "logic-TPTP",
          "signature": "TermC -\u003e Term",
          "source": "src/Codec-TPTP-Base.html#forgetTC",
          "type": "function"
        },
        "index": {
          "description": "Forget comments in terms decorated with comments",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "forgetTC",
          "normalized": "TermC-\u003eTerm",
          "package": "logic-TPTP",
          "partial": "TC",
          "signature": "TermC-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:forgetTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget comments in a line of a TPTP file decorated with comments\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "forgetTIC",
          "package": "logic-TPTP",
          "signature": "TPTP_Input_C -\u003e TPTP_Input",
          "source": "src/Codec-TPTP-Base.html#forgetTIC",
          "type": "function"
        },
        "index": {
          "description": "Forget comments in line of TPTP file decorated with comments",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "forgetTIC",
          "normalized": "TPTP_Input_C-\u003eTPTP_Input",
          "package": "logic-TPTP",
          "partial": "TIC",
          "signature": "TPTP_Input_C-\u003eTPTP_Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:forgetTIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "formula",
          "package": "logic-TPTP",
          "signature": "F c",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "formula",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the free variables from a formula or term\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "freeVars",
          "package": "logic-TPTP",
          "signature": "a -\u003e Set V",
          "source": "src/Codec-TPTP-Base.html#freeVars",
          "type": "method"
        },
        "index": {
          "description": "Obtain the free variables from formula or term",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "freeVars",
          "normalized": "a-\u003eSet V",
          "package": "logic-TPTP",
          "partial": "Vars",
          "signature": "a-\u003eSet V",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:freeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "name",
          "package": "logic-TPTP",
          "signature": "AtomicWord",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "name",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber literal\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "numberLitTerm",
          "package": "logic-TPTP",
          "signature": "Rational -\u003e T c",
          "source": "src/Codec-TPTP-Base.html#numberLitTerm",
          "type": "function"
        },
        "index": {
          "description": "Number literal",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "numberLitTerm",
          "normalized": "Rational-\u003eT a",
          "package": "logic-TPTP",
          "partial": "Lit Term",
          "signature": "Rational-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:numberLitTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate symbol application\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "pApp",
          "package": "logic-TPTP",
          "signature": "AtomicWord -\u003e [T c] -\u003e F c",
          "source": "src/Codec-TPTP-Base.html#pApp",
          "type": "function"
        },
        "index": {
          "description": "Predicate symbol application",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "pApp",
          "normalized": "AtomicWord-\u003e[T a]-\u003eF a",
          "package": "logic-TPTP",
          "partial": "App",
          "signature": "AtomicWord-\u003e[T c]-\u003eF c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:pApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "role",
          "package": "logic-TPTP",
          "signature": "Role",
          "source": "src/Codec-TPTP-Base.html#TPTP_Input_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "role",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "runF",
          "package": "logic-TPTP",
          "signature": "c (Formula0 (T c) (F c))",
          "source": "src/Codec-TPTP-Base.html#F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "runF",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:runF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "runT",
          "package": "logic-TPTP",
          "signature": "c (Term0 (T c))",
          "source": "src/Codec-TPTP-Base.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "runT",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:runT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversally quantify all free variables in the formula\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "univquant_free_vars",
          "package": "logic-TPTP",
          "signature": "Formula -\u003e Formula",
          "source": "src/Codec-TPTP-Base.html#univquant_free_vars",
          "type": "function"
        },
        "index": {
          "description": "Universally quantify all free variables in the formula",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "univquant_free_vars",
          "normalized": "Formula-\u003eFormula",
          "package": "logic-TPTP",
          "signature": "Formula-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:univquant_free_vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "unrole",
          "package": "logic-TPTP",
          "signature": "String",
          "source": "src/Codec-TPTP-Base.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "unrole",
          "package": "logic-TPTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:unrole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "unwrapF",
          "package": "logic-TPTP",
          "signature": "F t -\u003e Formula0 (T t) (F t)",
          "source": "src/Codec-TPTP-Base.html#unwrapF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "unwrapF",
          "normalized": "F a-\u003eFormula(T a)(F a)",
          "package": "logic-TPTP",
          "signature": "F t-\u003eFormula(T t)(F t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:unwrapF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Base",
          "name": "unwrapT",
          "package": "logic-TPTP",
          "signature": "T t -\u003e Term0 (T t)",
          "source": "src/Codec-TPTP-Base.html#unwrapT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "unwrapT",
          "normalized": "T a-\u003eTerm(T a)",
          "package": "logic-TPTP",
          "signature": "T t-\u003eTerm(T t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:unwrapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable\n\u003c/p\u003e",
          "module": "Codec.TPTP.Base",
          "name": "var",
          "package": "logic-TPTP",
          "signature": "V -\u003e T c",
          "source": "src/Codec-TPTP-Base.html#var",
          "type": "function"
        },
        "index": {
          "description": "Variable",
          "hierarchy": "Codec TPTP Base",
          "module": "Codec.TPTP.Base",
          "name": "var",
          "normalized": "V-\u003eT a",
          "package": "logic-TPTP",
          "signature": "V-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Base.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "Diff",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Diff.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "Diff",
          "package": "logic-TPTP",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "DiffResult",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Diff.html#DiffResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "DiffResult",
          "package": "logic-TPTP",
          "partial": "Diff Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#t:DiffResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "Diffable",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Diff.html#Diffable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "Diffable",
          "package": "logic-TPTP",
          "partial": "Diffable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#t:Diffable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "F0Diff",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Diff.html#F0Diff",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "F0Diff",
          "package": "logic-TPTP",
          "partial": "Diff",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#t:F0Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "T0Diff",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Diff.html#T0Diff",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "T0Diff",
          "package": "logic-TPTP",
          "partial": "Diff",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#t:T0Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments differ and are not of similar form (don't recurse)\n\u003c/p\u003e",
          "module": "Codec.TPTP.Diff",
          "name": "Differ",
          "package": "logic-TPTP",
          "signature": "Differ d d",
          "source": "src/Codec-TPTP-Diff.html#DiffResult",
          "type": "function"
        },
        "index": {
          "description": "The arguments differ and are not of similar form don recurse",
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "Differ",
          "package": "logic-TPTP",
          "partial": "Differ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:Differ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "DontCare",
          "package": "logic-TPTP",
          "signature": "DontCare",
          "source": "src/Codec-TPTP-Diff.html#DiffResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "DontCare",
          "package": "logic-TPTP",
          "partial": "Dont Care",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:DontCare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth arguments are the same. \n\u003c/p\u003e",
          "module": "Codec.TPTP.Diff",
          "name": "Same",
          "package": "logic-TPTP",
          "signature": "Same",
          "source": "src/Codec-TPTP-Diff.html#DiffResult",
          "type": "function"
        },
        "index": {
          "description": "Both arguments are the same",
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "Same",
          "package": "logic-TPTP",
          "partial": "Same",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:Same"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments are recursive expressions of the same form, but their subterms differ. Return a \"decorated\" term that shows where the differences are \n\u003c/p\u003e",
          "module": "Codec.TPTP.Diff",
          "name": "SameHead",
          "package": "logic-TPTP",
          "signature": "SameHead d",
          "source": "src/Codec-TPTP-Diff.html#DiffResult",
          "type": "function"
        },
        "index": {
          "description": "The arguments are recursive expressions of the same form but their subterms differ Return decorated term that shows where the differences are",
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "SameHead",
          "package": "logic-TPTP",
          "partial": "Same Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:SameHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "diff",
          "package": "logic-TPTP",
          "signature": "a -\u003e a -\u003e b",
          "source": "src/Codec-TPTP-Diff.html#diff",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "diff",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-TPTP",
          "signature": "a-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess random generator for generating formulae suitable for testing diff\n\u003c/p\u003e",
          "module": "Codec.TPTP.Diff",
          "name": "diffGenF",
          "package": "logic-TPTP",
          "signature": "Gen Formula",
          "source": "src/Codec-TPTP-Diff.html#diffGenF",
          "type": "function"
        },
        "index": {
          "description": "Less random generator for generating formulae suitable for testing diff",
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "diffGenF",
          "package": "logic-TPTP",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:diffGenF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "diffGenT",
          "package": "logic-TPTP",
          "signature": "Gen Term",
          "source": "src/Codec-TPTP-Diff.html#diffGenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "diffGenT",
          "package": "logic-TPTP",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:diffGenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "isSame",
          "package": "logic-TPTP",
          "signature": "forall t.  DiffResult t -\u003e Bool",
          "source": "src/Codec-TPTP-Diff.html#isSame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "isSame",
          "normalized": "a b DiffResult c-\u003eBool",
          "package": "logic-TPTP",
          "partial": "Same",
          "signature": "forall t. DiffResult t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:isSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Diff",
          "name": "printSampleDiffs",
          "package": "logic-TPTP",
          "signature": "IO ()",
          "source": "src/Codec-TPTP-Diff.html#printSampleDiffs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Diff",
          "module": "Codec.TPTP.Diff",
          "name": "printSampleDiffs",
          "normalized": "IO()",
          "package": "logic-TPTP",
          "partial": "Sample Diffs",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Diff.html#v:printSampleDiffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Export",
          "name": "Export",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Export.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec TPTP Export",
          "module": "Codec.TPTP.Export",
          "name": "Export",
          "package": "logic-TPTP",
          "partial": "Export",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Export.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Export",
          "name": "ToTPTP",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Export.html#ToTPTP",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec TPTP Export",
          "module": "Codec.TPTP.Export",
          "name": "ToTPTP",
          "package": "logic-TPTP",
          "partial": "To TPTP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Export.html#t:ToTPTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Export",
          "name": "isLowerWord",
          "package": "logic-TPTP",
          "signature": "[Char] -\u003e Bool",
          "source": "src/Codec-TPTP-Export.html#isLowerWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Export",
          "module": "Codec.TPTP.Export",
          "name": "isLowerWord",
          "normalized": "[Char]-\u003eBool",
          "package": "logic-TPTP",
          "partial": "Lower Word",
          "signature": "[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Export.html#v:isLowerWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to TPTP\n\u003c/p\u003e",
          "module": "Codec.TPTP.Export",
          "name": "toTPTP",
          "package": "logic-TPTP",
          "signature": "a -\u003e ShowS",
          "source": "src/Codec-TPTP-Export.html#toTPTP",
          "type": "method"
        },
        "index": {
          "description": "Convert to TPTP",
          "hierarchy": "Codec TPTP Export",
          "module": "Codec.TPTP.Export",
          "name": "toTPTP",
          "normalized": "a-\u003eShowS",
          "package": "logic-TPTP",
          "partial": "TPTP",
          "signature": "a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Export.html#v:toTPTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient wrapper for \u003ccode\u003e\u003ca\u003etoTPTP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.TPTP.Export",
          "name": "toTPTP'",
          "package": "logic-TPTP",
          "signature": "a -\u003e String",
          "source": "src/Codec-TPTP-Export.html#toTPTP%27",
          "type": "function"
        },
        "index": {
          "description": "Convenient wrapper for toTPTP",
          "hierarchy": "Codec TPTP Export",
          "module": "Codec.TPTP.Export",
          "name": "toTPTP'",
          "normalized": "a-\u003eString",
          "package": "logic-TPTP",
          "partial": "TPTP'",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Export.html#v:toTPTP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Import",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Import",
          "package": "logic-TPTP",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Token",
          "package": "logic-TPTP",
          "source": "src/Lexer.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Token",
          "package": "logic-TPTP",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Comma",
          "package": "logic-TPTP",
          "signature": "Comma",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Comma",
          "package": "logic-TPTP",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "CommentToken",
          "package": "logic-TPTP",
          "signature": "CommentToken String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "CommentToken",
          "package": "logic-TPTP",
          "partial": "Comment Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:CommentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "DollarDollarWord",
          "package": "logic-TPTP",
          "signature": "DollarDollarWord String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "DollarDollarWord",
          "package": "logic-TPTP",
          "partial": "Dollar Dollar Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:DollarDollarWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "DollarWord",
          "package": "logic-TPTP",
          "signature": "DollarWord String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "DollarWord",
          "package": "logic-TPTP",
          "partial": "Dollar Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:DollarWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Dot",
          "package": "logic-TPTP",
          "signature": "Dot",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Dot",
          "package": "logic-TPTP",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "DoubleQuoted",
          "package": "logic-TPTP",
          "signature": "DoubleQuoted String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "DoubleQuoted",
          "package": "logic-TPTP",
          "partial": "Double Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:DoubleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "LP",
          "package": "logic-TPTP",
          "signature": "LP",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "LP",
          "package": "logic-TPTP",
          "partial": "LP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:LP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Lbrack",
          "package": "logic-TPTP",
          "signature": "Lbrack",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Lbrack",
          "package": "logic-TPTP",
          "partial": "Lbrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Lbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "LowerWord",
          "package": "logic-TPTP",
          "signature": "LowerWord String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "LowerWord",
          "package": "logic-TPTP",
          "partial": "Lower Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:LowerWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Oper",
          "package": "logic-TPTP",
          "signature": "Oper String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Oper",
          "package": "logic-TPTP",
          "partial": "Oper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Oper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Plus",
          "package": "logic-TPTP",
          "signature": "Plus",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Plus",
          "package": "logic-TPTP",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "RP",
          "package": "logic-TPTP",
          "signature": "RP",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "RP",
          "package": "logic-TPTP",
          "partial": "RP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:RP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Rangle",
          "package": "logic-TPTP",
          "signature": "Rangle",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Rangle",
          "package": "logic-TPTP",
          "partial": "Rangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Rbrack",
          "package": "logic-TPTP",
          "signature": "Rbrack",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Rbrack",
          "package": "logic-TPTP",
          "partial": "Rbrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Rbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Real",
          "package": "logic-TPTP",
          "signature": "Real Rational",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Real",
          "package": "logic-TPTP",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "SignedInt",
          "package": "logic-TPTP",
          "signature": "SignedInt Integer",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "SignedInt",
          "package": "logic-TPTP",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:SignedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "SingleQuoted",
          "package": "logic-TPTP",
          "signature": "SingleQuoted String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "SingleQuoted",
          "package": "logic-TPTP",
          "partial": "Single Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:SingleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Slash",
          "package": "logic-TPTP",
          "signature": "Slash",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Slash",
          "package": "logic-TPTP",
          "partial": "Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "Star",
          "package": "logic-TPTP",
          "signature": "Star",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "Star",
          "package": "logic-TPTP",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "UnsignedInt",
          "package": "logic-TPTP",
          "signature": "UnsignedInt Integer",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "UnsignedInt",
          "package": "logic-TPTP",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:UnsignedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "UpperWord",
          "package": "logic-TPTP",
          "signature": "UpperWord String",
          "source": "src/Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "UpperWord",
          "package": "logic-TPTP",
          "partial": "Upper Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:UpperWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "parse",
          "package": "logic-TPTP",
          "signature": "String -\u003e [TPTP_Input]",
          "source": "src/Codec-TPTP-Import.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "parse",
          "normalized": "String-\u003e[TPTP_Input]",
          "package": "logic-TPTP",
          "signature": "String-\u003e[TPTP_Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "parseFile",
          "package": "logic-TPTP",
          "signature": "FilePath -\u003e IO [TPTP_Input]",
          "source": "src/Codec-TPTP-Import.html#parseFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "parseFile",
          "normalized": "FilePath-\u003eIO[TPTP_Input]",
          "package": "logic-TPTP",
          "partial": "File",
          "signature": "FilePath-\u003eIO[TPTP_Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "parseWithComment",
          "package": "logic-TPTP",
          "signature": "String -\u003e [TPTP_Input_C]",
          "source": "src/Codec-TPTP-Import.html#parseWithComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "parseWithComment",
          "normalized": "String-\u003e[TPTP_Input_C]",
          "package": "logic-TPTP",
          "partial": "With Comment",
          "signature": "String-\u003e[TPTP_Input_C]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:parseWithComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Import",
          "name": "parseWithCommentFile",
          "package": "logic-TPTP",
          "signature": "FilePath -\u003e IO [TPTP_Input_C]",
          "source": "src/Codec-TPTP-Import.html#parseWithCommentFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Import",
          "module": "Codec.TPTP.Import",
          "name": "parseWithCommentFile",
          "normalized": "FilePath-\u003eIO[TPTP_Input_C]",
          "package": "logic-TPTP",
          "partial": "With Comment File",
          "signature": "FilePath-\u003eIO[TPTP_Input_C]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Import.html#v:parseWithCommentFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMainly just \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.TPTP.Pretty",
          "name": "Pretty",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Mainly just Pretty instances",
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "Pretty",
          "package": "logic-TPTP",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "Enclosing",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "Enclosing",
          "package": "logic-TPTP",
          "partial": "Enclosing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#t:Enclosing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCarries information about the enclosing operation (for the purpose of printing stuff without parentheses if possible).\n\u003c/p\u003e",
          "module": "Codec.TPTP.Pretty",
          "name": "WithEnclosing",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP-Pretty.html#WithEnclosing",
          "type": "data"
        },
        "index": {
          "description": "Carries information about the enclosing operation for the purpose of printing stuff without parentheses if possible",
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "WithEnclosing",
          "package": "logic-TPTP",
          "partial": "With Enclosing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#t:WithEnclosing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "EnclBinOp",
          "package": "logic-TPTP",
          "signature": "EnclBinOp BinOp",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "EnclBinOp",
          "package": "logic-TPTP",
          "partial": "Encl Bin Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:EnclBinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "EnclInfixPred",
          "package": "logic-TPTP",
          "signature": "EnclInfixPred InfixPred",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "EnclInfixPred",
          "package": "logic-TPTP",
          "partial": "Encl Infix Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:EnclInfixPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "EnclNeg",
          "package": "logic-TPTP",
          "signature": "EnclNeg",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "EnclNeg",
          "package": "logic-TPTP",
          "partial": "Encl Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:EnclNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "EnclNothing",
          "package": "logic-TPTP",
          "signature": "EnclNothing",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "EnclNothing",
          "package": "logic-TPTP",
          "partial": "Encl Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:EnclNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "EnclQuant",
          "package": "logic-TPTP",
          "signature": "EnclQuant",
          "source": "src/Codec-TPTP-Pretty.html#Enclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "EnclQuant",
          "package": "logic-TPTP",
          "partial": "Encl Quant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:EnclQuant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "WithEnclosing",
          "package": "logic-TPTP",
          "signature": "WithEnclosing Enclosing a",
          "source": "src/Codec-TPTP-Pretty.html#WithEnclosing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "WithEnclosing",
          "package": "logic-TPTP",
          "partial": "With Enclosing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:WithEnclosing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP.Pretty",
          "name": "prettySimple",
          "package": "logic-TPTP",
          "signature": "a -\u003e String",
          "source": "src/Codec-TPTP-Pretty.html#prettySimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec TPTP Pretty",
          "module": "Codec.TPTP.Pretty",
          "name": "prettySimple",
          "normalized": "a-\u003eString",
          "package": "logic-TPTP",
          "partial": "Simple",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP-Pretty.html#v:prettySimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.TPTP",
          "name": "TPTP",
          "package": "logic-TPTP",
          "source": "src/Codec-TPTP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec TPTP",
          "module": "Codec.TPTP",
          "name": "TPTP",
          "package": "logic-TPTP",
          "partial": "TPTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-TPTP/docs/Codec-TPTP.html#"
      }
    }
  ]
]