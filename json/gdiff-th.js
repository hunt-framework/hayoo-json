[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the Template Haskell functions necessary \n   deriving gdiff GADTs and associated instances. Usage is pretty \n   straightforward.\n\u003c/p\u003e\u003cpre\u003e\nmodule Example where\nimport \u003ca\u003eData.Generic.Diff\u003c/a\u003e  \nimport \u003ca\u003eData.Generic.Diff.TH\u003c/a\u003e  \nimport \u003ca\u003eSystem.Console.Terminfo.Color\u003c/a\u003e\nimport \u003ca\u003eText.PrettyPrint.Free\u003c/a\u003e\nimport \u003ca\u003eSystem.Console.Terminfo.PrettyPrint\u003c/a\u003e\n\ndata Exp = Exp :+: Exp\n         | Exp :*: Exp\n         | B Integer\n         deriving(Show, Eq, Typeable)\n\n{- Make the GDiff apparatus -}\nmakeGDiff ''Exp\n\ntestA :: Exp\ntestA = foldl1 (:+:) . map B $ [0..20]\n\ntestB :: Exp\ntestB = foldl1 (:+:) . map B $ [0..8] ++ [42] ++ [10..20]\n\n{- Make a type signature to help inference -}\ndiffExp :: Type ExpFamily Exp =\u003e Exp -\u003e Exp -\u003e EditScript ExpFamily Exp Exp\ndiffExp = diff\n\ndiffAandB = showCompressed $ diffExp testA testB  \n\nmain = diffAandB\n\n{- Utility functions to show colored diffs -}\nshowEdits :: forall (f :: * -\u003e * -\u003e *) txs tys.\n                   EditScriptL f txs tys -\u003e IO ()\nshowEdits      = display . pprEdits \n\nshowCompressed :: Family f =\u003e EditScriptL f txs tys -\u003e IO ()\nshowCompressed = display . pprEdits . compress\n\npprEdits :: EditScriptL f txs tys -\u003e TermDoc\npprEdits x = case x of \n    Cpy c d   -\u003e (text $ string c) \u003ca\u003e+\u003c/a\u003e pprEdits d\n    CpyTree d -\u003e text \" ... \"      \u003ca\u003e+\u003c/a\u003e pprEdits d\n    Del c d   -\u003e (with (Foreground Red)   . text $ \"- \" ++ string c) \u003ca\u003e+\u003c/a\u003e pprEdits d\n    Ins c d   -\u003e (with (Foreground Green) . text $ \"+ \" ++ string c) \u003ca\u003e+\u003c/a\u003e pprEdits d\n    End       -\u003e line\n\u003c/pre\u003e\u003cp\u003eRunning the main function above would result in the following output\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emain\n\u003c/code\u003e\u003c/strong\u003e:+: :+: :+: :+: :+: :+: :+: :+: :+: :+: :+: :+:  ...  B + 42 - 9  ...   ...   ...   ...   ...   ...   ...   ...   ...   ...   ... \n\u003c/pre\u003e\u003cp\u003eExcept with pretty colors :).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "module",
        "fct-source": "src/Data-Generic-Diff-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This module exports the Template Haskell functions necessary deriving gdiff GADTs and associated instances Usage is pretty straightforward module Example where import Data.Generic.Diff import Data.Generic.Diff.TH import System.Console.Terminfo.Color import Text.PrettyPrint.Free import System.Console.Terminfo.PrettyPrint data Exp Exp Exp Exp Exp Integer deriving Show Eq Typeable Make the GDiff apparatus makeGDiff Exp testA Exp testA foldl1 map testB Exp testB foldl1 map Make type signature to help inference diffExp Type ExpFamily Exp Exp Exp EditScript ExpFamily Exp Exp diffExp diff diffAandB showCompressed diffExp testA testB main diffAandB Utility functions to show colored diffs showEdits forall txs tys EditScriptL txs tys IO showEdits display pprEdits showCompressed Family EditScriptL txs tys IO showCompressed display pprEdits compress pprEdits EditScriptL txs tys TermDoc pprEdits case of Cpy text string pprEdits CpyTree text pprEdits Del with Foreground Red text string pprEdits Ins with Foreground Green text string pprEdits End line Running the main function above would result in the following output main Except with pretty colors",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "TH",
        "normalized": "",
        "package": "gdiff-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#t:ConstructorRenamer",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of function used for naming the GADTs constructors\n\u003c/p\u003e\u003cp\u003eArg0 : The family suffix\n\u003c/p\u003e\u003cp\u003eArg1 : The name of the constructor \n\u003c/p\u003e\u003cp\u003eArg2 : The specialized type the constructor is from\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "type",
        "fct-source": "src/Data-Generic-Diff-TH-Internal.html#ConstructorRenamer",
        "fct-type": "type",
        "title": "ConstructorRenamer"
      },
      "index": {
        "description": "The type of function used for naming the GADTs constructors Arg0 The family suffix Arg1 The name of the constructor Arg2 The specialized type the constructor is from",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "ConstructorRenamer",
        "normalized": "",
        "package": "gdiff-th",
        "partial": "Constructor Renamer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#v:defaultConstructorRenamer",
      "description": {
        "fct-descr": "\u003cp\u003eDefault constructor renamer. Using the family suffix, the \n   name of the constructor and the specialized type of constructor\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "String -\u003e Name -\u003e Type -\u003e Q Name",
        "fct-source": "src/Data-Generic-Diff-TH-Internal.html#defaultConstructorRenamer",
        "fct-type": "function",
        "title": "defaultConstructorRenamer"
      },
      "index": {
        "description": "Default constructor renamer Using the family suffix the name of the constructor and the specialized type of constructor",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "defaultConstructorRenamer",
        "normalized": "String-\u003eName-\u003eType-\u003eQ Name",
        "package": "gdiff-th",
        "partial": "Constructor Renamer",
        "signature": "String-\u003eName-\u003eType-\u003eQ Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#v:defaultFamSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eDefault suffix for the family \u003ca\u003eFamily\u003c/a\u003e           \n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "String",
        "fct-source": "src/Data-Generic-Diff-TH-Internal.html#defaultFamSuffix",
        "fct-type": "function",
        "title": "defaultFamSuffix"
      },
      "index": {
        "description": "Default suffix for the family Family",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "defaultFamSuffix",
        "normalized": "",
        "package": "gdiff-th",
        "partial": "Fam Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#v:defaultPrimitives",
      "description": {
        "fct-descr": "\u003cp\u003eDefault primitives and expressions for showing them\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "[(Name, Exp)]",
        "fct-source": "src/Data-Generic-Diff-TH-Internal.html#defaultPrimitives",
        "fct-type": "function",
        "title": "defaultPrimitives"
      },
      "index": {
        "description": "Default primitives and expressions for showing them",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "defaultPrimitives",
        "normalized": "[(Name,Exp)]",
        "package": "gdiff-th",
        "partial": "Primitives",
        "signature": "[(Name,Exp)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#v:makeGDiff",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the GADT and instances for GDiff with the defaults    \n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Generic-Diff-TH-Internal.html#makeGDiff",
        "fct-type": "function",
        "title": "makeGDiff"
      },
      "index": {
        "description": "Create the GADT and instances for GDiff with the defaults",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "makeGDiff",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "gdiff-th",
        "partial": "GDiff",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gdiff-th/docs/Data-Generic-Diff-TH.html#v:makeGDiffWith",
      "description": {
        "fct-descr": "\u003cp\u003eCustomizable creation.\n\u003c/p\u003e",
        "fct-module": "Data.Generic.Diff.TH",
        "fct-package": "gdiff-th",
        "fct-signature": "String-\u003e ConstructorRenamer-\u003e [(Name, Exp)]-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "makeGDiffWith"
      },
      "index": {
        "description": "Customizable creation",
        "hierarchy": "Data Generic Diff TH",
        "module": "Data.Generic.Diff.TH",
        "name": "makeGDiffWith",
        "normalized": "String-\u003eConstructorRenamer-\u003e[(Name,Exp)]-\u003eName-\u003eQ[Dec]",
        "package": "gdiff-th",
        "partial": "GDiff With",
        "signature": "String-\u003eConstructorRenamer-\u003e[(Name,Exp)]-\u003eName-\u003eQ[Dec]"
      }
    }
  }
]