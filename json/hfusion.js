[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-CHANGELOG.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 0.0.6\n\u003c/p\u003e\u003cp\u003eThis version contains several tweaks and fixes as a result of fusing the\n  example of game trees in John Hughes's paper Why Functional Programming Matters.\n\u003c/p\u003e\u003cp\u003eVersion 0.0.5.1\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Lists missing file in hfusion.cabal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eVersion 0.0.5\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Implements searching and fusing explicit compositions of hylomorphisms in expressions. E.g. \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e ... map f (filter p (map g xs)) ...\n\u003c/pre\u003e\u003cp\u003ebut not\n\u003c/p\u003e\u003cpre\u003e ... map f . filter p . map g ...\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e h = map f\n k = filter p\n ... h (k (map g xs)) ...\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Fixes fusion of \u003ccode\u003etails . map\u003c/code\u003e with \u003ccode\u003etails\u003c/code\u003e defined as:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e   tails :: [a] -\u003e [[a]]\n   tails [] = []\n   tails xs@(_:xss) = xs : tails xss\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Fixed derivation of mutual hylos from definitions where each one \n     uses a different set of names for the constant arguments.  \n\u003c/li\u003e\u003cli\u003e Fixed pretty printing of terms in the presence of infix constructors.\n     HFusion doesn't support specifying precedences and associativity for infix operators really.\n     I've tried to have the common infix operators (\u003ccode\u003e(:),(+),(*),(-),(^),(++)\u003c/code\u003e) printed resonably, however.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eVersion 0.0.4\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fuses spoon-feeded compositions.  \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "HFusion.CHANGELOG",
        "fct-package": "hfusion",
        "fct-signature": "module",
        "fct-source": "src/HFusion-CHANGELOG.html",
        "fct-type": "module",
        "title": "CHANGELOG"
      },
      "index": {
        "description": "Version This version contains several tweaks and fixes as result of fusing the example of game trees in John Hughes paper Why Functional Programming Matters Version Lists missing file in hfusion.cabal Version Implements searching and fusing explicit compositions of hylomorphisms in expressions E.g map filter map xs but not map filter map or map filter map xs Fixes fusion of tails map with tails defined as tails tails tails xs xss xs tails xss Fixed derivation of mutual hylos from definitions where each one uses different set of names for the constant arguments Fixed pretty printing of terms in the presence of infix constructors HFusion doesn support specifying precedences and associativity for infix operators really ve tried to have the common infix operators printed resonably however Version Fuses spoon-feeded compositions",
        "hierarchy": "HFusion CHANGELOG",
        "module": "HFusion.CHANGELOG",
        "name": "CHANGELOG",
        "normalized": "",
        "package": "hfusion",
        "partial": "CHANGELOG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions exported by this module can be used to fuse programs as shown below.\n The following program reads some Haskell definitions from the standard input\n and prints the transformed definitions to the standard output.\n\u003c/p\u003e\u003cpre\u003e import HFusion.HFusion\n import Control.Monad.Trans(lift)\n import Language.Haskell.Parser(parseModule)\n\u003c/pre\u003e\u003cpre\u003e fuseProgram :: String -\u003e Either FusionError String\n fuseProgram sourceCode = runFusionState newVarGen$\n    -- Parse input with a Haskell parser.\n    parseResult2FusionState (Language.Haskell.Parser.parseModule sourceCode) \n    -- Convert the haskell AST to the AST used by HFusion.\n    \u003e\u003e= hsModule2HsSyn \n    -- Fuse compositions in the program.\n    \u003e\u003e= \\dfs -\u003e lift (fuseDefinitions dfs dfs) \n    -- Pretty print the result.\n    \u003e\u003e= return . hsSyn2HsSourceCode . uncurry (++)\n\n    main = do cs \u003c- getContents\n              putStr$ either ((\"There was an error: \"++) . show) id$ fuseProgram cs\n\u003c/pre\u003e\u003cp\u003eFor more information on HFusion please visit \u003ca\u003ehttp://www.fing.edu.uy/inco/proyectos/fusion\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "module",
        "fct-source": "src/HFusion-HFusion.html",
        "fct-type": "module",
        "title": "HFusion"
      },
      "index": {
        "description": "Functions exported by this module can be used to fuse programs as shown below The following program reads some Haskell definitions from the standard input and prints the transformed definitions to the standard output import HFusion.HFusion import Control.Monad.Trans lift import Language.Haskell.Parser parseModule fuseProgram String Either FusionError String fuseProgram sourceCode runFusionState newVarGen Parse input with Haskell parser parseResult2FusionState Language.Haskell.Parser.parseModule sourceCode Convert the haskell AST to the AST used by HFusion hsModule2HsSyn Fuse compositions in the program dfs lift fuseDefinitions dfs dfs Pretty print the result return hsSyn2HsSourceCode uncurry main do cs getContents putStr either There was an error show id fuseProgram cs For more information on HFusion please visit http www.fing.edu.uy inco proyectos fusion",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "HFusion",
        "normalized": "",
        "package": "hfusion",
        "partial": "HFusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Boundvar",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of bound variables in lambda expressions.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Boundvar",
        "fct-type": "data",
        "title": "Boundvar"
      },
      "index": {
        "description": "Representation of bound variables in lambda expressions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Boundvar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Boundvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Constructor",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for constructors.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "type",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Constructor",
        "fct-type": "type",
        "title": "Constructor"
      },
      "index": {
        "description": "Representation for constructors",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Constructor",
        "normalized": "",
        "package": "hfusion",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Def",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for function definitions.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Def",
        "fct-type": "data",
        "title": "Def"
      },
      "index": {
        "description": "Representation for function definitions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Def",
        "normalized": "",
        "package": "hfusion",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:FusionError",
      "description": {
        "fct-descr": "\u003cp\u003eErrors that the algorithms in \u003ca\u003eHFusion\u003c/a\u003e can produce.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "data",
        "title": "FusionError"
      },
      "index": {
        "description": "Errors that the algorithms in HFusion can produce",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "FusionError",
        "normalized": "",
        "package": "hfusion",
        "partial": "Fusion Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:FusionState",
      "description": {
        "fct-descr": "\u003cp\u003eAn error monad with \u003ccode\u003e\u003ca\u003eFusionError\u003c/a\u003e\u003c/code\u003e errors and a state\n monad carrying a generator of fresh variables. \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "type",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionState",
        "fct-type": "type",
        "title": "FusionState"
      },
      "index": {
        "description": "An error monad with FusionError errors and state monad carrying generator of fresh variables",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "FusionState",
        "normalized": "",
        "package": "hfusion",
        "partial": "Fusion State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Literal",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for Literals.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Literal",
        "fct-type": "data",
        "title": "Literal"
      },
      "index": {
        "description": "Representation for Literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Literal",
        "normalized": "",
        "package": "hfusion",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Pattern",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of patterns\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "Representation of patterns",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Pattern",
        "normalized": "",
        "package": "hfusion",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Term",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for terms in programs handled by \u003ca\u003eHFusion\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "Representation for terms in programs handled by HFusion",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Term",
        "normalized": "",
        "package": "hfusion",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:VarGen",
      "description": {
        "fct-descr": "\u003cp\u003eData used to generate variables.\n The map stores for each variable name generated so far\n which was the index last used to generate a fresh variable\n with such a name as prefix.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "type",
        "fct-source": "src/HFusion-Internal-Utils.html#VarGen",
        "fct-type": "type",
        "title": "VarGen"
      },
      "index": {
        "description": "Data used to generate variables The map stores for each variable name generated so far which was the index last used to generate fresh variable with such name as prefix",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "VarGen",
        "normalized": "",
        "package": "hfusion",
        "partial": "Var Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Variable",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of variables.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "data",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Variable",
        "fct-type": "data",
        "title": "Variable"
      },
      "index": {
        "description": "Representation of variables",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Variable",
        "normalized": "",
        "package": "hfusion",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Bvar",
      "description": {
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Bvar Variable",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Boundvar",
        "fct-type": "function",
        "title": "Bvar"
      },
      "index": {
        "description": "",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Bvar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Bvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Bvtuple",
      "description": {
        "fct-descr": "\u003cp\u003eBound variable tuples. Uses the boolean value like in \u003ccode\u003e\u003ca\u003eTtuple\u003c/a\u003e\u003c/code\u003e.\n   but when bounding input variables of hylomorphisms.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Bvtuple Bool [Boundvar]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Boundvar",
        "fct-type": "function",
        "title": "Bvtuple"
      },
      "index": {
        "description": "Bound variable tuples Uses the boolean value like in Ttuple but when bounding input variables of hylomorphisms",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Bvtuple",
        "normalized": "Bvtuple Bool[Boundvar]",
        "package": "hfusion",
        "partial": "Bvtuple",
        "signature": "Bvtuple Bool[Boundvar]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Defvalue",
      "description": {
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Defvalue Variable Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Def",
        "fct-type": "function",
        "title": "Defvalue"
      },
      "index": {
        "description": "",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Defvalue",
        "normalized": "",
        "package": "hfusion",
        "partial": "Defvalue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lchar",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter literals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Lchar Char",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Literal",
        "fct-type": "function",
        "title": "Lchar"
      },
      "index": {
        "description": "Character literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Lchar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Lchar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lint",
      "description": {
        "fct-descr": "\u003cp\u003eInteger literals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Lint String",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Literal",
        "fct-type": "function",
        "title": "Lint"
      },
      "index": {
        "description": "Integer literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Lint",
        "normalized": "",
        "package": "hfusion",
        "partial": "Lint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lrat",
      "description": {
        "fct-descr": "\u003cp\u003eRational literals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Lrat String",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Literal",
        "fct-type": "function",
        "title": "Lrat"
      },
      "index": {
        "description": "Rational literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Lrat",
        "normalized": "",
        "package": "hfusion",
        "partial": "Lrat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lstring",
      "description": {
        "fct-descr": "\u003cp\u003eString literals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Lstring String",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Literal",
        "fct-type": "function",
        "title": "Lstring"
      },
      "index": {
        "description": "String literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Lstring",
        "normalized": "",
        "package": "hfusion",
        "partial": "Lstring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Msg",
      "description": {
        "fct-descr": "\u003cp\u003eA generic error message.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Msg String",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "Msg"
      },
      "index": {
        "description": "generic error message",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Msg",
        "normalized": "",
        "package": "hfusion",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotExpected",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when hylomorphism derivation fails due to encountering a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ca\u003eThyloapp\u003c/a\u003e\u003c/code\u003e which is not expected in the input. \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotExpected Term",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotExpected"
      },
      "index": {
        "description": "Thrown when hylomorphism derivation fails due to encountering Term like Thyloapp which is not expected in the input",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotExpected",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Expected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotFound",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a definition which was requested to be fused is not found among the derived hylomorphisms.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotFound String",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotFound"
      },
      "index": {
        "description": "When definition which was requested to be fused is not found among the derived hylomorphisms",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotFound",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotInF",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive an unfold from the definition at the right of the composition.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotInF",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotInF"
      },
      "index": {
        "description": "Thrown when fusion fails due to the inability of the implementation to derive an unfold from the definition at the right of the composition",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotInF",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotOutF",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a fold from the definition at the left of the composition. \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotOutF",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotOutF"
      },
      "index": {
        "description": "Thrown when fusion fails due to the inability of the implementation to derive fold from the definition at the left of the composition",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotOutF",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotSaturated",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when hylomorphism derivation fails due to the existence of a non-saturated application of the recursive function in its definition.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotSaturated Term",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotSaturated"
      },
      "index": {
        "description": "Thrown when hylomorphism derivation fails due to the existence of non-saturated application of the recursive function in its definition",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotSaturated",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Saturated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotSigma",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a \u003cem\u003esigma\u003c/em\u003e transformer from the coalgebra of the definition at the left of the composition. \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotSigma",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotSigma"
      },
      "index": {
        "description": "Thrown when fusion fails due to the inability of the implementation to derive sigma transformer from the coalgebra of the definition at the left of the composition",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotSigma",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Sigma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotTau",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a \u003cem\u003etau\u003c/em\u003e transformer from the algebra of the definition at the right of the composition.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "NotTau",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "NotTau"
      },
      "index": {
        "description": "Thrown when fusion fails due to the inability of the implementation to derive tau transformer from the algebra of the definition at the right of the composition",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "NotTau",
        "normalized": "",
        "package": "hfusion",
        "partial": "Not Tau",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:ParserError",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when translation of a program to a \u003ccode\u003e\u003ca\u003eDef\u003c/a\u003e\u003c/code\u003e values fails.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "ParserError SrcLoc String",
        "fct-source": "src/HFusion-Internal-HyloFace.html#FusionError",
        "fct-type": "function",
        "title": "ParserError"
      },
      "index": {
        "description": "Thrown when translation of program to Def values fails",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "ParserError",
        "normalized": "",
        "package": "hfusion",
        "partial": "Parser Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pas",
      "description": {
        "fct-descr": "\u003cp\u003e@-pattern\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Pas Variable Pattern",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "function",
        "title": "Pas"
      },
      "index": {
        "description": "pattern",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Pas",
        "normalized": "",
        "package": "hfusion",
        "partial": "Pas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pcons",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor application patterns\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Pcons Constructor [Pattern]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "function",
        "title": "Pcons"
      },
      "index": {
        "description": "Constructor application patterns",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Pcons",
        "normalized": "Pcons Constructor[Pattern]",
        "package": "hfusion",
        "partial": "Pcons",
        "signature": "Pcons Constructor[Pattern]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Plit",
      "description": {
        "fct-descr": "\u003cp\u003eLiterals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Plit Literal",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "function",
        "title": "Plit"
      },
      "index": {
        "description": "Literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Plit",
        "normalized": "",
        "package": "hfusion",
        "partial": "Plit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Ptuple",
      "description": {
        "fct-descr": "\u003cp\u003eTuple patterns\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Ptuple [Pattern]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "function",
        "title": "Ptuple"
      },
      "index": {
        "description": "Tuple patterns",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Ptuple",
        "normalized": "Ptuple[Pattern]",
        "package": "hfusion",
        "partial": "Ptuple",
        "signature": "Ptuple[Pattern]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pvar",
      "description": {
        "fct-descr": "\u003cp\u003eVariables\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Pvar Variable",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Pattern",
        "fct-type": "function",
        "title": "Pvar"
      },
      "index": {
        "description": "Variables",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Pvar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Pvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tapp",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral term application\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tapp Term Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tapp"
      },
      "index": {
        "description": "General term application",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tapp",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tapp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tbottom",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined computation\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tbottom",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tbottom"
      },
      "index": {
        "description": "Undefined computation",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tbottom",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tbottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tcapp",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor application\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tcapp Constructor [Term]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tcapp"
      },
      "index": {
        "description": "Constructor application",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tcapp",
        "normalized": "Tcapp Constructor[Term]",
        "package": "hfusion",
        "partial": "Tcapp",
        "signature": "Tcapp Constructor[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tcase",
      "description": {
        "fct-descr": "\u003cp\u003eCase expressions\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tcase Term [Pattern] [Term]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tcase"
      },
      "index": {
        "description": "Case expressions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tcase",
        "normalized": "Tcase Term[Pattern][Term]",
        "package": "hfusion",
        "partial": "Tcase",
        "signature": "Tcase Term[Pattern][Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tfapp",
      "description": {
        "fct-descr": "\u003cp\u003eFunction application (saturated)\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tfapp Variable [Term]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tfapp"
      },
      "index": {
        "description": "Function application saturated",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tfapp",
        "normalized": "Tfapp Variable[Term]",
        "package": "hfusion",
        "partial": "Tfapp",
        "signature": "Tfapp Variable[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Thyloapp",
      "description": {
        "fct-descr": "\u003cp\u003eHylo application, only used for inlining. In\n \u003ccode\u003eThyloapp name recargsCount non-recargs recarg\u003c/code\u003e the argument\n \u003ccode\u003erecarg\u003c/code\u003e may be a tuple.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Thyloapp Variable Int [Term] (Maybe [Int]) Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Thyloapp"
      },
      "index": {
        "description": "Hylo application only used for inlining In Thyloapp name recargsCount non-recargs recarg the argument recarg may be tuple",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Thyloapp",
        "normalized": "Thyloapp Variable Int[Term](Maybe[Int])Term",
        "package": "hfusion",
        "partial": "Thyloapp",
        "signature": "Thyloapp Variable Int[Term](Maybe[Int])Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tif",
      "description": {
        "fct-descr": "\u003cp\u003eIf expressions, only used for pretty printing\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tif Term Term Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tif"
      },
      "index": {
        "description": "If expressions only used for pretty printing",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tif",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tif",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlamb",
      "description": {
        "fct-descr": "\u003cp\u003eLambda expressions\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tlamb Boundvar Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tlamb"
      },
      "index": {
        "description": "Lambda expressions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tlamb",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tlamb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlet",
      "description": {
        "fct-descr": "\u003cp\u003eLet expressions\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tlet Variable Term Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tlet"
      },
      "index": {
        "description": "Let expressions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tlet",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tlet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlit",
      "description": {
        "fct-descr": "\u003cp\u003eLiterals\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tlit Literal",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tlit"
      },
      "index": {
        "description": "Literals",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tlit",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tlit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tpar",
      "description": {
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tpar Term",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tpar"
      },
      "index": {
        "description": "",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tpar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tpar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Ttuple",
      "description": {
        "fct-descr": "\u003cp\u003eTuples. The boolean argument tells if the tuple must be flattened\n   when nested with others under an hylo application.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Ttuple Bool [Term]",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Ttuple"
      },
      "index": {
        "description": "Tuples The boolean argument tells if the tuple must be flattened when nested with others under an hylo application",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Ttuple",
        "normalized": "Ttuple Bool[Term]",
        "package": "hfusion",
        "partial": "Ttuple",
        "signature": "Ttuple Bool[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tvar",
      "description": {
        "fct-descr": "\u003cp\u003eVariables\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Tvar Variable",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Term",
        "fct-type": "function",
        "title": "Tvar"
      },
      "index": {
        "description": "Variables",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Tvar",
        "normalized": "",
        "package": "hfusion",
        "partial": "Tvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Vgen",
      "description": {
        "fct-descr": "\u003cp\u003eGenerated identifier containing a prefix and an index.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Vgen String Int",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Variable",
        "fct-type": "function",
        "title": "Vgen"
      },
      "index": {
        "description": "Generated identifier containing prefix and an index",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Vgen",
        "normalized": "",
        "package": "hfusion",
        "partial": "Vgen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Vuserdef",
      "description": {
        "fct-descr": "\u003cp\u003eName found in the original program.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "Vuserdef String",
        "fct-source": "src/HFusion-Internal-HsSyn.html#Variable",
        "fct-type": "function",
        "title": "Vuserdef"
      },
      "index": {
        "description": "Name found in the original program",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "Vuserdef",
        "normalized": "",
        "package": "hfusion",
        "partial": "Vuserdef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:deriveHylos",
      "description": {
        "fct-descr": "\u003cp\u003eObtains hylomorphisms representing functions in the original program.\n\u003c/p\u003e\u003cp\u003eThe hylomorphisms are returned in the second component of the output. \n If a hylomorphism cannot be derived for some (possibly) mutually recursive \n function definitions, then they are returned in the first component of the \n output together with the error obtained when attempting derivation.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "[Def] -\u003e VarGenState ([([Def], FusionError)], [([Def], HyloT)])",
        "fct-source": "src/HFusion-Internal-Parsing-HyloParser.html#deriveHylos",
        "fct-type": "function",
        "title": "deriveHylos"
      },
      "index": {
        "description": "Obtains hylomorphisms representing functions in the original program The hylomorphisms are returned in the second component of the output If hylomorphism cannot be derived for some possibly mutually recursive function definitions then they are returned in the first component of the output together with the error obtained when attempting derivation",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "deriveHylos",
        "normalized": "[Def]-\u003eVarGenState([([Def],FusionError)],[([Def],HyloT)])",
        "package": "hfusion",
        "partial": "Hylos",
        "signature": "[Def]-\u003eVarGenState([([Def],FusionError)],[([Def],HyloT)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuse",
      "description": {
        "fct-descr": "\u003cp\u003eFuses the composition of two recursive functions producing an equivalent \n new recursive function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 1 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a set of mutually recursive functions named \u003ccode\u003eh_1 .. h_n\u003c/code\u003e which are equivalent to \u003ccode\u003ef . g\u003c/code\u003e. \n Functions \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e must be hylomorphisms defined in \u003ccode\u003edfns\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 2 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a recursive function equivalent to \u003ccode\u003e\\x y -\u003e f x (g y)\u003c/code\u003e,\n \u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 3 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a recursive function equivalent to \u003ccode\u003e\\x y z -\u003e f x y (g z)\u003c/code\u003e,\n and so on ...\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "String -\u003e Int -\u003e String -\u003e [String] -\u003e [HyloT] -\u003e FusionState [Def]",
        "fct-source": "src/HFusion-HFusion.html#fuse",
        "fct-type": "function",
        "title": "fuse"
      },
      "index": {
        "description": "Fuses the composition of two recursive functions producing an equivalent new recursive function fuse dfns yields set of mutually recursive functions named which are equivalent to Functions and must be hylomorphisms defined in dfns fuse dfns yields recursive function equivalent to fuse dfns yields recursive function equivalent to and so on",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "fuse",
        "normalized": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState[Def]",
        "package": "hfusion",
        "partial": "",
        "signature": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState[Def]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuse-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e but returns also a string resembling the hylomorphism which represents\n the result of fusion.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "String -\u003e Int -\u003e String -\u003e [String] -\u003e [HyloT] -\u003e FusionState ([Def], String)",
        "fct-source": "src/HFusion-HFusion.html#fuse%27",
        "fct-type": "function",
        "title": "fuse'"
      },
      "index": {
        "description": "Works like fuse but returns also string resembling the hylomorphism which represents the result of fusion",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "fuse'",
        "normalized": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState([Def],String)",
        "package": "hfusion",
        "partial": "",
        "signature": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState([Def],String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuseDefinitions",
      "description": {
        "fct-descr": "\u003cp\u003eEliminates compositions of recursive functions from definitions.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "[Def]-\u003e [Def]-\u003e VarGenState ([Def], [Def])",
        "fct-type": "function",
        "title": "fuseDefinitions"
      },
      "index": {
        "description": "Eliminates compositions of recursive functions from definitions",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "fuseDefinitions",
        "normalized": "[Def]-\u003e[Def]-\u003eVarGenState([Def],[Def])",
        "package": "hfusion",
        "partial": "Definitions",
        "signature": "[Def]-\u003e[Def]-\u003eVarGenState([Def],[Def])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:hsModule2HsSyn",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eHsModule\u003c/a\u003e\u003c/code\u003e into the abstract syntax tree used by HFusion.\n The HsModule can be obtained by parsing a Haskell program with \n \u003ccode\u003eLanguage.Haskell.Parser.parseModule\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "HsModule -\u003e FusionState [Def]",
        "fct-source": "src/HFusion-Internal-Parsing-Translator.html#hsModule2HsSyn",
        "fct-type": "function",
        "title": "hsModule2HsSyn"
      },
      "index": {
        "description": "Converts an HsModule into the abstract syntax tree used by HFusion The HsModule can be obtained by parsing Haskell program with Language.Haskell.Parser.parseModule",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "hsModule2HsSyn",
        "normalized": "HsModule-\u003eFusionState[Def]",
        "package": "hfusion",
        "partial": "Module Hs Syn",
        "signature": "HsModule-\u003eFusionState[Def]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:hsSyn2HsSourceCode",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a set of definitions into Haskell source code. \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "[Def] -\u003e String",
        "fct-source": "src/HFusion-HFusion.html#hsSyn2HsSourceCode",
        "fct-type": "function",
        "title": "hsSyn2HsSourceCode"
      },
      "index": {
        "description": "Pretty prints set of definitions into Haskell source code",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "hsSyn2HsSourceCode",
        "normalized": "[Def]-\u003eString",
        "package": "hfusion",
        "partial": "Syn Hs Source Code",
        "signature": "[Def]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:newVarGen",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a variable generator \n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "VarGen",
        "fct-source": "src/HFusion-Internal-Utils.html#newVarGen",
        "fct-type": "function",
        "title": "newVarGen"
      },
      "index": {
        "description": "Creates variable generator",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "newVarGen",
        "normalized": "",
        "package": "hfusion",
        "partial": "Var Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:parseResult2FusionState",
      "description": {
        "fct-descr": "\u003cp\u003eAllows to handle parsing of an \u003ccode\u003e\u003ca\u003eHsModule\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eFusionState\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cpre\u003eparseResult2FusionState (Language.Haskell.Parser.parseModule sourceCode)\u003c/pre\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "ParseResult HsModule -\u003e FusionState HsModule",
        "fct-source": "src/HFusion-Internal-Parsing-HyloParser.html#parseResult2FusionState",
        "fct-type": "function",
        "title": "parseResult2FusionState"
      },
      "index": {
        "description": "Allows to handle parsing of an HsModule as FusionState computation parseResult2FusionState Language.Haskell.Parser.parseModule sourceCode",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "parseResult2FusionState",
        "normalized": "ParseResult HsModule-\u003eFusionState HsModule",
        "package": "hfusion",
        "partial": "Result Fusion State",
        "signature": "ParseResult HsModule-\u003eFusionState HsModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:runFusionState",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eFusionState\u003c/a\u003e\u003c/code\u003e computation using the given\n variable generator. The result is either\n the promised value or a \u003ccode\u003e\u003ca\u003eFusionError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFusion.HFusion",
        "fct-package": "hfusion",
        "fct-signature": "VarGen -\u003e FusionState a -\u003e Either FusionError a",
        "fct-source": "src/HFusion-Internal-HyloFace.html#runFusionState",
        "fct-type": "function",
        "title": "runFusionState"
      },
      "index": {
        "description": "Runs FusionState computation using the given variable generator The result is either the promised value or FusionError",
        "hierarchy": "HFusion HFusion",
        "module": "HFusion.HFusion",
        "name": "runFusionState",
        "normalized": "VarGen-\u003eFusionState a-\u003eEither FusionError a",
        "package": "hfusion",
        "partial": "Fusion State",
        "signature": "VarGen-\u003eFusionState a-\u003eEither FusionError a"
      }
    }
  }
]