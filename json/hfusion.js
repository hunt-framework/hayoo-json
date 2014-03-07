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
        "word": "hfusion"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 0.0.6\n\u003c/p\u003e\u003cp\u003eThis version contains several tweaks and fixes as a result of fusing the\n  example of game trees in John Hughes's paper Why Functional Programming Matters.\n\u003c/p\u003e\u003cp\u003eVersion 0.0.5.1\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Lists missing file in hfusion.cabal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eVersion 0.0.5\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Implements searching and fusing explicit compositions of hylomorphisms in expressions. E.g. \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e ... map f (filter p (map g xs)) ...\n\u003c/pre\u003e\u003cp\u003ebut not\n\u003c/p\u003e\u003cpre\u003e ... map f . filter p . map g ...\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e h = map f\n k = filter p\n ... h (k (map g xs)) ...\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Fixes fusion of \u003ccode\u003etails . map\u003c/code\u003e with \u003ccode\u003etails\u003c/code\u003e defined as:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e   tails :: [a] -\u003e [[a]]\n   tails [] = []\n   tails xs@(_:xss) = xs : tails xss\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Fixed derivation of mutual hylos from definitions where each one \n     uses a different set of names for the constant arguments.  \n\u003c/li\u003e\u003cli\u003e Fixed pretty printing of terms in the presence of infix constructors.\n     HFusion doesn't support specifying precedences and associativity for infix operators really.\n     I've tried to have the common infix operators (\u003ccode\u003e(:),(+),(*),(-),(^),(++)\u003c/code\u003e) printed resonably, however.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eVersion 0.0.4\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fuses spoon-feeded compositions.  \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "HFusion.CHANGELOG",
          "name": "CHANGELOG",
          "package": "hfusion",
          "source": "src/HFusion-CHANGELOG.html",
          "type": "module"
        },
        "index": {
          "description": "Version This version contains several tweaks and fixes as result of fusing the example of game trees in John Hughes paper Why Functional Programming Matters Version Lists missing file in hfusion.cabal Version Implements searching and fusing explicit compositions of hylomorphisms in expressions E.g map filter map xs but not map filter map or map filter map xs Fixes fusion of tails map with tails defined as tails tails tails xs xss xs tails xss Fixed derivation of mutual hylos from definitions where each one uses different set of names for the constant arguments Fixed pretty printing of terms in the presence of infix constructors HFusion doesn support specifying precedences and associativity for infix operators really ve tried to have the common infix operators printed resonably however Version Fuses spoon-feeded compositions",
          "hierarchy": "HFusion CHANGELOG",
          "module": "HFusion.CHANGELOG",
          "name": "CHANGELOG",
          "package": "hfusion",
          "partial": "CHANGELOG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-CHANGELOG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions exported by this module can be used to fuse programs as shown below.\n The following program reads some Haskell definitions from the standard input\n and prints the transformed definitions to the standard output.\n\u003c/p\u003e\u003cpre\u003e import HFusion.HFusion\n import Control.Monad.Trans(lift)\n import Language.Haskell.Parser(parseModule)\n\u003c/pre\u003e\u003cpre\u003e fuseProgram :: String -\u003e Either FusionError String\n fuseProgram sourceCode = runFusionState newVarGen$\n    -- Parse input with a Haskell parser.\n    parseResult2FusionState (Language.Haskell.Parser.parseModule sourceCode) \n    -- Convert the haskell AST to the AST used by HFusion.\n    \u003e\u003e= hsModule2HsSyn \n    -- Fuse compositions in the program.\n    \u003e\u003e= \\dfs -\u003e lift (fuseDefinitions dfs dfs) \n    -- Pretty print the result.\n    \u003e\u003e= return . hsSyn2HsSourceCode . uncurry (++)\n\n    main = do cs \u003c- getContents\n              putStr$ either ((\"There was an error: \"++) . show) id$ fuseProgram cs\n\u003c/pre\u003e\u003cp\u003eFor more information on HFusion please visit \u003ca\u003ehttp://www.fing.edu.uy/inco/proyectos/fusion\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFusion.HFusion",
          "name": "HFusion",
          "package": "hfusion",
          "source": "src/HFusion-HFusion.html",
          "type": "module"
        },
        "index": {
          "description": "Functions exported by this module can be used to fuse programs as shown below The following program reads some Haskell definitions from the standard input and prints the transformed definitions to the standard output import HFusion.HFusion import Control.Monad.Trans lift import Language.Haskell.Parser parseModule fuseProgram String Either FusionError String fuseProgram sourceCode runFusionState newVarGen Parse input with Haskell parser parseResult2FusionState Language.Haskell.Parser.parseModule sourceCode Convert the haskell AST to the AST used by HFusion hsModule2HsSyn Fuse compositions in the program dfs lift fuseDefinitions dfs dfs Pretty print the result return hsSyn2HsSourceCode uncurry main do cs getContents putStr either There was an error show id fuseProgram cs For more information on HFusion please visit http www.fing.edu.uy inco proyectos fusion",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "HFusion",
          "package": "hfusion",
          "partial": "HFusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of bound variables in lambda expressions.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Boundvar",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Boundvar",
          "type": "data"
        },
        "index": {
          "description": "Representation of bound variables in lambda expressions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Boundvar",
          "package": "hfusion",
          "partial": "Boundvar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Boundvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for constructors.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Constructor",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Constructor",
          "type": "type"
        },
        "index": {
          "description": "Representation for constructors",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Constructor",
          "package": "hfusion",
          "partial": "Constructor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for function definitions.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Def",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Def",
          "type": "data"
        },
        "index": {
          "description": "Representation for function definitions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Def",
          "package": "hfusion",
          "partial": "Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that the algorithms in \u003ca\u003eHFusion\u003c/a\u003e can produce.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "FusionError",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "data"
        },
        "index": {
          "description": "Errors that the algorithms in HFusion can produce",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "FusionError",
          "package": "hfusion",
          "partial": "Fusion Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:FusionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error monad with \u003ccode\u003e\u003ca\u003eFusionError\u003c/a\u003e\u003c/code\u003e errors and a state\n monad carrying a generator of fresh variables. \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "FusionState",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HyloFace.html#FusionState",
          "type": "type"
        },
        "index": {
          "description": "An error monad with FusionError errors and state monad carrying generator of fresh variables",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "FusionState",
          "package": "hfusion",
          "partial": "Fusion State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:FusionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for Literals.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Literal",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Literal",
          "type": "data"
        },
        "index": {
          "description": "Representation for Literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Literal",
          "package": "hfusion",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of patterns\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Pattern",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "Representation of patterns",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Pattern",
          "package": "hfusion",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for terms in programs handled by \u003ca\u003eHFusion\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Term",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "data"
        },
        "index": {
          "description": "Representation for terms in programs handled by HFusion",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Term",
          "package": "hfusion",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData used to generate variables.\n The map stores for each variable name generated so far\n which was the index last used to generate a fresh variable\n with such a name as prefix.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "VarGen",
          "package": "hfusion",
          "source": "src/HFusion-Internal-Utils.html#VarGen",
          "type": "type"
        },
        "index": {
          "description": "Data used to generate variables The map stores for each variable name generated so far which was the index last used to generate fresh variable with such name as prefix",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "VarGen",
          "package": "hfusion",
          "partial": "Var Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:VarGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of variables.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Variable",
          "package": "hfusion",
          "source": "src/HFusion-Internal-HsSyn.html#Variable",
          "type": "data"
        },
        "index": {
          "description": "Representation of variables",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Variable",
          "package": "hfusion",
          "partial": "Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFusion.HFusion",
          "name": "Bvar",
          "package": "hfusion",
          "signature": "Bvar Variable",
          "source": "src/HFusion-Internal-HsSyn.html#Boundvar",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Bvar",
          "package": "hfusion",
          "partial": "Bvar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Bvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound variable tuples. Uses the boolean value like in \u003ccode\u003e\u003ca\u003eTtuple\u003c/a\u003e\u003c/code\u003e.\n   but when bounding input variables of hylomorphisms.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Bvtuple",
          "package": "hfusion",
          "signature": "Bvtuple Bool [Boundvar]",
          "source": "src/HFusion-Internal-HsSyn.html#Boundvar",
          "type": "function"
        },
        "index": {
          "description": "Bound variable tuples Uses the boolean value like in Ttuple but when bounding input variables of hylomorphisms",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Bvtuple",
          "normalized": "Bvtuple Bool[Boundvar]",
          "package": "hfusion",
          "partial": "Bvtuple",
          "signature": "Bvtuple Bool[Boundvar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Bvtuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFusion.HFusion",
          "name": "Defvalue",
          "package": "hfusion",
          "signature": "Defvalue Variable Term",
          "source": "src/HFusion-Internal-HsSyn.html#Def",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Defvalue",
          "package": "hfusion",
          "partial": "Defvalue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Defvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter literals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Lchar",
          "package": "hfusion",
          "signature": "Lchar Char",
          "source": "src/HFusion-Internal-HsSyn.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "Character literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Lchar",
          "package": "hfusion",
          "partial": "Lchar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger literals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Lint",
          "package": "hfusion",
          "signature": "Lint String",
          "source": "src/HFusion-Internal-HsSyn.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "Integer literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Lint",
          "package": "hfusion",
          "partial": "Lint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational literals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Lrat",
          "package": "hfusion",
          "signature": "Lrat String",
          "source": "src/HFusion-Internal-HsSyn.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "Rational literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Lrat",
          "package": "hfusion",
          "partial": "Lrat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lrat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString literals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Lstring",
          "package": "hfusion",
          "signature": "Lstring String",
          "source": "src/HFusion-Internal-HsSyn.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "String literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Lstring",
          "package": "hfusion",
          "partial": "Lstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Lstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic error message.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Msg",
          "package": "hfusion",
          "signature": "Msg String",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "generic error message",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Msg",
          "package": "hfusion",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when hylomorphism derivation fails due to encountering a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ca\u003eThyloapp\u003c/a\u003e\u003c/code\u003e which is not expected in the input. \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotExpected",
          "package": "hfusion",
          "signature": "NotExpected Term",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when hylomorphism derivation fails due to encountering Term like Thyloapp which is not expected in the input",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotExpected",
          "package": "hfusion",
          "partial": "Not Expected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a definition which was requested to be fused is not found among the derived hylomorphisms.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotFound",
          "package": "hfusion",
          "signature": "NotFound String",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "When definition which was requested to be fused is not found among the derived hylomorphisms",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotFound",
          "package": "hfusion",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive an unfold from the definition at the right of the composition.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotInF",
          "package": "hfusion",
          "signature": "NotInF",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when fusion fails due to the inability of the implementation to derive an unfold from the definition at the right of the composition",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotInF",
          "package": "hfusion",
          "partial": "Not In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotInF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a fold from the definition at the left of the composition. \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotOutF",
          "package": "hfusion",
          "signature": "NotOutF",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when fusion fails due to the inability of the implementation to derive fold from the definition at the left of the composition",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotOutF",
          "package": "hfusion",
          "partial": "Not Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotOutF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when hylomorphism derivation fails due to the existence of a non-saturated application of the recursive function in its definition.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotSaturated",
          "package": "hfusion",
          "signature": "NotSaturated Term",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when hylomorphism derivation fails due to the existence of non-saturated application of the recursive function in its definition",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotSaturated",
          "package": "hfusion",
          "partial": "Not Saturated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotSaturated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a \u003cem\u003esigma\u003c/em\u003e transformer from the coalgebra of the definition at the left of the composition. \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotSigma",
          "package": "hfusion",
          "signature": "NotSigma",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when fusion fails due to the inability of the implementation to derive sigma transformer from the coalgebra of the definition at the left of the composition",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotSigma",
          "package": "hfusion",
          "partial": "Not Sigma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotSigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when fusion fails due to the inability of the implementation to derive a \u003cem\u003etau\u003c/em\u003e transformer from the algebra of the definition at the right of the composition.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "NotTau",
          "package": "hfusion",
          "signature": "NotTau",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when fusion fails due to the inability of the implementation to derive tau transformer from the algebra of the definition at the right of the composition",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "NotTau",
          "package": "hfusion",
          "partial": "Not Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:NotTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when translation of a program to a \u003ccode\u003e\u003ca\u003eDef\u003c/a\u003e\u003c/code\u003e values fails.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "ParserError",
          "package": "hfusion",
          "signature": "ParserError SrcLoc String",
          "source": "src/HFusion-Internal-HyloFace.html#FusionError",
          "type": "function"
        },
        "index": {
          "description": "Thrown when translation of program to Def values fails",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "ParserError",
          "package": "hfusion",
          "partial": "Parser Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:ParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e@-pattern\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Pas",
          "package": "hfusion",
          "signature": "Pas Variable Pattern",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "pattern",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Pas",
          "package": "hfusion",
          "partial": "Pas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor application patterns\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Pcons",
          "package": "hfusion",
          "signature": "Pcons Constructor [Pattern]",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Constructor application patterns",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Pcons",
          "normalized": "Pcons Constructor[Pattern]",
          "package": "hfusion",
          "partial": "Pcons",
          "signature": "Pcons Constructor[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Plit",
          "package": "hfusion",
          "signature": "Plit Literal",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Plit",
          "package": "hfusion",
          "partial": "Plit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Plit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple patterns\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Ptuple",
          "package": "hfusion",
          "signature": "Ptuple [Pattern]",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Tuple patterns",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Ptuple",
          "normalized": "Ptuple[Pattern]",
          "package": "hfusion",
          "partial": "Ptuple",
          "signature": "Ptuple[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Ptuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Pvar",
          "package": "hfusion",
          "signature": "Pvar Variable",
          "source": "src/HFusion-Internal-HsSyn.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Variables",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Pvar",
          "package": "hfusion",
          "partial": "Pvar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Pvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral term application\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tapp",
          "package": "hfusion",
          "signature": "Tapp Term Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "General term application",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tapp",
          "package": "hfusion",
          "partial": "Tapp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tapp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndefined computation\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tbottom",
          "package": "hfusion",
          "signature": "Tbottom",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Undefined computation",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tbottom",
          "package": "hfusion",
          "partial": "Tbottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tbottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor application\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tcapp",
          "package": "hfusion",
          "signature": "Tcapp Constructor [Term]",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Constructor application",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tcapp",
          "normalized": "Tcapp Constructor[Term]",
          "package": "hfusion",
          "partial": "Tcapp",
          "signature": "Tcapp Constructor[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tcapp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase expressions\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tcase",
          "package": "hfusion",
          "signature": "Tcase Term [Pattern] [Term]",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Case expressions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tcase",
          "normalized": "Tcase Term[Pattern][Term]",
          "package": "hfusion",
          "partial": "Tcase",
          "signature": "Tcase Term[Pattern][Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application (saturated)\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tfapp",
          "package": "hfusion",
          "signature": "Tfapp Variable [Term]",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Function application saturated",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tfapp",
          "normalized": "Tfapp Variable[Term]",
          "package": "hfusion",
          "partial": "Tfapp",
          "signature": "Tfapp Variable[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tfapp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHylo application, only used for inlining. In\n \u003ccode\u003eThyloapp name recargsCount non-recargs recarg\u003c/code\u003e the argument\n \u003ccode\u003erecarg\u003c/code\u003e may be a tuple.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Thyloapp",
          "package": "hfusion",
          "signature": "Thyloapp Variable Int [Term] (Maybe [Int]) Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Hylo application only used for inlining In Thyloapp name recargsCount non-recargs recarg the argument recarg may be tuple",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Thyloapp",
          "normalized": "Thyloapp Variable Int[Term](Maybe[Int])Term",
          "package": "hfusion",
          "partial": "Thyloapp",
          "signature": "Thyloapp Variable Int[Term](Maybe[Int])Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Thyloapp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf expressions, only used for pretty printing\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tif",
          "package": "hfusion",
          "signature": "Tif Term Term Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "If expressions only used for pretty printing",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tif",
          "package": "hfusion",
          "partial": "Tif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLambda expressions\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tlamb",
          "package": "hfusion",
          "signature": "Tlamb Boundvar Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Lambda expressions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tlamb",
          "package": "hfusion",
          "partial": "Tlamb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlamb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet expressions\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tlet",
          "package": "hfusion",
          "signature": "Tlet Variable Term Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Let expressions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tlet",
          "package": "hfusion",
          "partial": "Tlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterals\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tlit",
          "package": "hfusion",
          "signature": "Tlit Literal",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Literals",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tlit",
          "package": "hfusion",
          "partial": "Tlit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tlit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFusion.HFusion",
          "name": "Tpar",
          "package": "hfusion",
          "signature": "Tpar Term",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tpar",
          "package": "hfusion",
          "partial": "Tpar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuples. The boolean argument tells if the tuple must be flattened\n   when nested with others under an hylo application.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Ttuple",
          "package": "hfusion",
          "signature": "Ttuple Bool [Term]",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Tuples The boolean argument tells if the tuple must be flattened when nested with others under an hylo application",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Ttuple",
          "normalized": "Ttuple Bool[Term]",
          "package": "hfusion",
          "partial": "Ttuple",
          "signature": "Ttuple Bool[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Ttuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Tvar",
          "package": "hfusion",
          "signature": "Tvar Variable",
          "source": "src/HFusion-Internal-HsSyn.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Variables",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Tvar",
          "package": "hfusion",
          "partial": "Tvar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Tvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerated identifier containing a prefix and an index.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Vgen",
          "package": "hfusion",
          "signature": "Vgen String Int",
          "source": "src/HFusion-Internal-HsSyn.html#Variable",
          "type": "function"
        },
        "index": {
          "description": "Generated identifier containing prefix and an index",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Vgen",
          "package": "hfusion",
          "partial": "Vgen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Vgen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName found in the original program.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "Vuserdef",
          "package": "hfusion",
          "signature": "Vuserdef String",
          "source": "src/HFusion-Internal-HsSyn.html#Variable",
          "type": "function"
        },
        "index": {
          "description": "Name found in the original program",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "Vuserdef",
          "package": "hfusion",
          "partial": "Vuserdef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:Vuserdef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains hylomorphisms representing functions in the original program.\n\u003c/p\u003e\u003cp\u003eThe hylomorphisms are returned in the second component of the output. \n If a hylomorphism cannot be derived for some (possibly) mutually recursive \n function definitions, then they are returned in the first component of the \n output together with the error obtained when attempting derivation.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "deriveHylos",
          "package": "hfusion",
          "signature": "[Def] -\u003e VarGenState ([([Def], FusionError)], [([Def], HyloT)])",
          "source": "src/HFusion-Internal-Parsing-HyloParser.html#deriveHylos",
          "type": "function"
        },
        "index": {
          "description": "Obtains hylomorphisms representing functions in the original program The hylomorphisms are returned in the second component of the output If hylomorphism cannot be derived for some possibly mutually recursive function definitions then they are returned in the first component of the output together with the error obtained when attempting derivation",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "deriveHylos",
          "normalized": "[Def]-\u003eVarGenState([([Def],FusionError)],[([Def],HyloT)])",
          "package": "hfusion",
          "partial": "Hylos",
          "signature": "[Def]-\u003eVarGenState([([Def],FusionError)],[([Def],HyloT)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:deriveHylos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFuses the composition of two recursive functions producing an equivalent \n new recursive function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 1 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a set of mutually recursive functions named \u003ccode\u003eh_1 .. h_n\u003c/code\u003e which are equivalent to \u003ccode\u003ef . g\u003c/code\u003e. \n Functions \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e must be hylomorphisms defined in \u003ccode\u003edfns\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 2 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a recursive function equivalent to \u003ccode\u003e\\x y -\u003e f x (g y)\u003c/code\u003e,\n \u003ccode\u003efuse \u003ca\u003ef\u003c/a\u003e 3 \u003ca\u003eg\u003c/a\u003e [h_1 .. h_n] dfns\u003c/code\u003e yields a recursive function equivalent to \u003ccode\u003e\\x y z -\u003e f x y (g z)\u003c/code\u003e,\n and so on ...\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "fuse",
          "package": "hfusion",
          "signature": "String -\u003e Int -\u003e String -\u003e [String] -\u003e [HyloT] -\u003e FusionState [Def]",
          "source": "src/HFusion-HFusion.html#fuse",
          "type": "function"
        },
        "index": {
          "description": "Fuses the composition of two recursive functions producing an equivalent new recursive function fuse dfns yields set of mutually recursive functions named which are equivalent to Functions and must be hylomorphisms defined in dfns fuse dfns yields recursive function equivalent to fuse dfns yields recursive function equivalent to and so on",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "fuse",
          "normalized": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState[Def]",
          "package": "hfusion",
          "signature": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState[Def]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e but returns also a string resembling the hylomorphism which represents\n the result of fusion.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "fuse'",
          "package": "hfusion",
          "signature": "String -\u003e Int -\u003e String -\u003e [String] -\u003e [HyloT] -\u003e FusionState ([Def], String)",
          "source": "src/HFusion-HFusion.html#fuse%27",
          "type": "function"
        },
        "index": {
          "description": "Works like fuse but returns also string resembling the hylomorphism which represents the result of fusion",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "fuse'",
          "normalized": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState([Def],String)",
          "package": "hfusion",
          "signature": "String-\u003eInt-\u003eString-\u003e[String]-\u003e[HyloT]-\u003eFusionState([Def],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminates compositions of recursive functions from definitions.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "fuseDefinitions",
          "package": "hfusion",
          "signature": "[Def]-\u003e [Def]-\u003e VarGenState ([Def], [Def])",
          "type": "function"
        },
        "index": {
          "description": "Eliminates compositions of recursive functions from definitions",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "fuseDefinitions",
          "normalized": "[Def]-\u003e[Def]-\u003eVarGenState([Def],[Def])",
          "package": "hfusion",
          "partial": "Definitions",
          "signature": "[Def]-\u003e[Def]-\u003eVarGenState([Def],[Def])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:fuseDefinitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eHsModule\u003c/a\u003e\u003c/code\u003e into the abstract syntax tree used by HFusion.\n The HsModule can be obtained by parsing a Haskell program with \n \u003ccode\u003eLanguage.Haskell.Parser.parseModule\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "hsModule2HsSyn",
          "package": "hfusion",
          "signature": "HsModule -\u003e FusionState [Def]",
          "source": "src/HFusion-Internal-Parsing-Translator.html#hsModule2HsSyn",
          "type": "function"
        },
        "index": {
          "description": "Converts an HsModule into the abstract syntax tree used by HFusion The HsModule can be obtained by parsing Haskell program with Language.Haskell.Parser.parseModule",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "hsModule2HsSyn",
          "normalized": "HsModule-\u003eFusionState[Def]",
          "package": "hfusion",
          "partial": "Module Hs Syn",
          "signature": "HsModule-\u003eFusionState[Def]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:hsModule2HsSyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a set of definitions into Haskell source code. \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "hsSyn2HsSourceCode",
          "package": "hfusion",
          "signature": "[Def] -\u003e String",
          "source": "src/HFusion-HFusion.html#hsSyn2HsSourceCode",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints set of definitions into Haskell source code",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "hsSyn2HsSourceCode",
          "normalized": "[Def]-\u003eString",
          "package": "hfusion",
          "partial": "Syn Hs Source Code",
          "signature": "[Def]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:hsSyn2HsSourceCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a variable generator \n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "newVarGen",
          "package": "hfusion",
          "signature": "VarGen",
          "source": "src/HFusion-Internal-Utils.html#newVarGen",
          "type": "function"
        },
        "index": {
          "description": "Creates variable generator",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "newVarGen",
          "package": "hfusion",
          "partial": "Var Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:newVarGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows to handle parsing of an \u003ccode\u003e\u003ca\u003eHsModule\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eFusionState\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cpre\u003eparseResult2FusionState (Language.Haskell.Parser.parseModule sourceCode)\u003c/pre\u003e",
          "module": "HFusion.HFusion",
          "name": "parseResult2FusionState",
          "package": "hfusion",
          "signature": "ParseResult HsModule -\u003e FusionState HsModule",
          "source": "src/HFusion-Internal-Parsing-HyloParser.html#parseResult2FusionState",
          "type": "function"
        },
        "index": {
          "description": "Allows to handle parsing of an HsModule as FusionState computation parseResult2FusionState Language.Haskell.Parser.parseModule sourceCode",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "parseResult2FusionState",
          "normalized": "ParseResult HsModule-\u003eFusionState HsModule",
          "package": "hfusion",
          "partial": "Result Fusion State",
          "signature": "ParseResult HsModule-\u003eFusionState HsModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:parseResult2FusionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eFusionState\u003c/a\u003e\u003c/code\u003e computation using the given\n variable generator. The result is either\n the promised value or a \u003ccode\u003e\u003ca\u003eFusionError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HFusion.HFusion",
          "name": "runFusionState",
          "package": "hfusion",
          "signature": "VarGen -\u003e FusionState a -\u003e Either FusionError a",
          "source": "src/HFusion-Internal-HyloFace.html#runFusionState",
          "type": "function"
        },
        "index": {
          "description": "Runs FusionState computation using the given variable generator The result is either the promised value or FusionError",
          "hierarchy": "HFusion HFusion",
          "module": "HFusion.HFusion",
          "name": "runFusionState",
          "normalized": "VarGen-\u003eFusionState a-\u003eEither FusionError a",
          "package": "hfusion",
          "partial": "Fusion State",
          "signature": "VarGen-\u003eFusionState a-\u003eEither FusionError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfusion/docs/HFusion-HFusion.html#v:runFusionState"
      }
    }
  ]
]