[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eGHC.Syb.Utils\u003c/a\u003e provides common utilities for the Ghc Api,\n     either based on Data/Typeable or for use with Data.Generics\n     over Ghc Api types.\n\u003c/p\u003e\u003cp\u003eexample output of \u003ccode\u003e\u003ca\u003eshowData\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eparsedSource\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erenamedSource\u003c/a\u003e\u003c/code\u003e, and\n\u003ccode\u003e\u003ca\u003etypecheckedSource\u003c/a\u003e\u003c/code\u003e for a trivial \u003ccode\u003eHelloWorld\u003c/code\u003e module, compared with\n\u003ccode\u003e\u003ca\u003eppr\u003c/a\u003e\u003c/code\u003e output:\n\u003c/p\u003e\u003cpre\u003e\n------------------------- pretty-printed parsedSource\nmodule HelloWorld where\nmain = putStrLn \u003ca\u003eHello, World!\u003c/a\u003e\n------------------------- pretty-printed renamedSource\nJust (HelloWorld.main = System.IO.putStrLn \u003ca\u003eHello, World!\u003c/a\u003e,\n      [import Prelude],\n      Nothing,\n      Nothing,\n\n(HaddockModInfo\n (Nothing)\n (Nothing)\n (Nothing)\n (Nothing)))\n------------------------- pretty-printed typecheckedSource\nJust \u003cAbsBinds [] [] [HelloWorld.main \u003c= [] main]\n        HelloWorld.main :: GHC.IOBase.IO ()\n        []\n        { main = System.IO.putStrLn \u003ca\u003eHello, World!\u003c/a\u003e }\u003e\n------------------------- shown parsedSource\n\n(L {HelloWorld.hs:1:0}\n (HsModule\n  (Just\n   (L {HelloWorld.hs:1:7-16} {ModuleName: HelloWorld}))\n  (Nothing)\n  []\n  [\n   (L {HelloWorld.hs:2:0-30}\n    (ValD\n     (FunBind\n      (L {HelloWorld.hs:2:0-3}\n       (Unqual {OccName: main}))\n      (False)\n      (MatchGroup\n       [\n        (L {HelloWorld.hs:2:0-30}\n         (Match\n          []\n          (Nothing)\n          (GRHSs\n           [\n            (L {HelloWorld.hs:2:7-30}\n             (GRHS\n              []\n              (L {HelloWorld.hs:2:7-30}\n               (HsApp\n                (L {HelloWorld.hs:2:7-14}\n                 (HsVar\n                  (Unqual {OccName: putStrLn})))\n                (L {HelloWorld.hs:2:16-30}\n                 (HsLit\n                  (HsString {FastString: \u003ca\u003eHello, World!\u003c/a\u003e})))))))]\n           (EmptyLocalBinds))))] {!type placeholder here?!})\n      (WpHole) {!NameSet placeholder here!}\n      (Nothing))))]\n  (Nothing)\n  (HaddockModInfo\n   (Nothing)\n   (Nothing)\n   (Nothing)\n   (Nothing))\n  (Nothing)))\n------------------------- shown renamedSource\n\n((,,,,)\n (HsGroup\n  (ValBindsOut\n   [\n    ((,)\n     (NonRecursive) {Bag(Located (HsBind Name)):\n     [\n      (L {HelloWorld.hs:2:0-30}\n       (FunBind\n        (L {HelloWorld.hs:2:0-3} {Name: HelloWorld.main})\n        (False)\n        (MatchGroup\n         [\n          (L {HelloWorld.hs:2:0-30}\n           (Match\n            []\n            (Nothing)\n            (GRHSs\n             [\n              (L {HelloWorld.hs:2:7-30}\n               (GRHS\n                []\n                (L {HelloWorld.hs:2:7-30}\n                 (HsApp\n                  (L {HelloWorld.hs:2:7-14}\n                   (HsVar {Name: System.IO.putStrLn}))\n                  (L {HelloWorld.hs:2:16-30}\n                   (HsLit\n                    (HsString {FastString: \u003ca\u003eHello, World!\u003c/a\u003e})))))))]\n             (EmptyLocalBinds))))] {!type placeholder here?!})\n        (WpHole) {NameSet:\n        [{Name: System.IO.putStrLn}]}\n        (Nothing)))]})]\n   [])\n  []\n  []\n  []\n  []\n  []\n  []\n  []\n  []\n  [])\n [\n  (L {Implicit import declaration}\n   (ImportDecl\n    (L {Implicit import declaration} {ModuleName: Prelude})\n    (False)\n    (False)\n    (Nothing)\n    (Nothing)))]\n (Nothing)\n (Nothing)\n (HaddockModInfo\n  (Nothing)\n  (Nothing)\n  (Nothing)\n  (Nothing)))\n------------------------- shown typecheckedSource\n{Bag(Located (HsBind Var)):\n[\n (L {HelloWorld.hs:2:0-30}\n  (AbsBinds\n   []\n   []\n   [\n    ((,,,)\n     [] {Var: HelloWorld.main} {Var: main}\n     [])] {Bag(Located (HsBind Var)):\n   [\n    (L {HelloWorld.hs:2:0-30}\n     (FunBind\n      (L {HelloWorld.hs:2:0-3} {Var: main})\n      (False)\n      (MatchGroup\n       [\n        (L {HelloWorld.hs:2:0-30}\n         (Match\n          []\n          (Nothing)\n          (GRHSs\n           [\n            (L {HelloWorld.hs:2:7-30}\n             (GRHS\n              []\n              (L {HelloWorld.hs:2:7-30}\n               (HsApp\n                (L {HelloWorld.hs:2:7-14}\n                 (HsVar {Var: System.IO.putStrLn}))\n                (L {HelloWorld.hs:2:16-30}\n                 (HsLit\n                  (HsString {FastString: \u003ca\u003eHello, World!\u003c/a\u003e})))))))]\n           (EmptyLocalBinds))))] GHC.IOBase.IO ())\n      (WpHole) {!NameSet placeholder here!}\n      (Nothing)))]}))]}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "module",
        "fct-source": "src/GHC-SYB-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "GHC.Syb.Utils provides common utilities for the Ghc Api either based on Data Typeable or for use with Data.Generics over Ghc Api types example output of showData on parsedSource renamedSource and typecheckedSource for trivial HelloWorld module compared with ppr output pretty-printed parsedSource module HelloWorld where main putStrLn Hello World pretty-printed renamedSource Just HelloWorld.main System.IO.putStrLn Hello World import Prelude Nothing Nothing HaddockModInfo Nothing Nothing Nothing Nothing pretty-printed typecheckedSource Just AbsBinds HelloWorld.main main HelloWorld.main GHC.IOBase.IO main System.IO.putStrLn Hello World shown parsedSource HelloWorld.hs HsModule Just HelloWorld.hs ModuleName HelloWorld Nothing HelloWorld.hs ValD FunBind HelloWorld.hs Unqual OccName main False MatchGroup HelloWorld.hs Match Nothing GRHSs HelloWorld.hs GRHS HelloWorld.hs HsApp HelloWorld.hs HsVar Unqual OccName putStrLn HelloWorld.hs HsLit HsString FastString Hello World EmptyLocalBinds type placeholder here WpHole NameSet placeholder here Nothing Nothing HaddockModInfo Nothing Nothing Nothing Nothing Nothing shown renamedSource HsGroup ValBindsOut NonRecursive Bag Located HsBind Name HelloWorld.hs FunBind HelloWorld.hs Name HelloWorld.main False MatchGroup HelloWorld.hs Match Nothing GRHSs HelloWorld.hs GRHS HelloWorld.hs HsApp HelloWorld.hs HsVar Name System.IO.putStrLn HelloWorld.hs HsLit HsString FastString Hello World EmptyLocalBinds type placeholder here WpHole NameSet Name System.IO.putStrLn Nothing Implicit import declaration ImportDecl Implicit import declaration ModuleName Prelude False False Nothing Nothing Nothing Nothing HaddockModInfo Nothing Nothing Nothing Nothing shown typecheckedSource Bag Located HsBind Var HelloWorld.hs AbsBinds Var HelloWorld.main Var main Bag Located HsBind Var HelloWorld.hs FunBind HelloWorld.hs Var main False MatchGroup HelloWorld.hs Match Nothing GRHSs HelloWorld.hs GRHS HelloWorld.hs HsApp HelloWorld.hs HsVar Var System.IO.putStrLn HelloWorld.hs HsLit HsString FastString Hello World EmptyLocalBinds GHC.IOBase.IO WpHole NameSet placeholder here Nothing",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "ghc-syb-utils",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#t:Stage",
      "description": {
        "fct-descr": "\u003cp\u003eGhc Ast types tend to have undefined holes, to be filled\n   by later compiler phases. We tag Asts with their source,\n   so that we can avoid such holes based on who generated the Asts.\n\u003c/p\u003e",
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "data",
        "fct-source": "src/GHC-SYB-Utils.html#Stage",
        "fct-type": "data",
        "title": "Stage"
      },
      "index": {
        "description": "Ghc Ast types tend to have undefined holes to be filled by later compiler phases We tag Asts with their source so that we can avoid such holes based on who generated the Asts",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "Stage",
        "normalized": "",
        "package": "ghc-syb-utils",
        "partial": "Stage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:Parser",
      "description": {
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "Parser",
        "fct-source": "src/GHC-SYB-Utils.html#Stage",
        "fct-type": "function",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "Parser",
        "normalized": "",
        "package": "ghc-syb-utils",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:Renamer",
      "description": {
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "Renamer",
        "fct-source": "src/GHC-SYB-Utils.html#Stage",
        "fct-type": "function",
        "title": "Renamer"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "Renamer",
        "normalized": "",
        "package": "ghc-syb-utils",
        "partial": "Renamer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:TypeChecker",
      "description": {
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "TypeChecker",
        "fct-source": "src/GHC-SYB-Utils.html#Stage",
        "fct-type": "function",
        "title": "TypeChecker"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "TypeChecker",
        "normalized": "",
        "package": "ghc-syb-utils",
        "partial": "Type Checker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:everythingStaged",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeverything\u003c/a\u003e\u003c/code\u003e, but avoid known potholes, based on the \u003ccode\u003e\u003ca\u003eStage\u003c/a\u003e\u003c/code\u003e that\n   generated the Ast.\n\u003c/p\u003e",
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "Stage -\u003e (r -\u003e r -\u003e r) -\u003e r -\u003e GenericQ r -\u003e GenericQ r",
        "fct-source": "src/GHC-SYB-Utils.html#everythingStaged",
        "fct-type": "function",
        "title": "everythingStaged"
      },
      "index": {
        "description": "Like everything but avoid known potholes based on the Stage that generated the Ast",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "everythingStaged",
        "normalized": "Stage-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eGenericQ a-\u003eGenericQ a",
        "package": "ghc-syb-utils",
        "partial": "Staged",
        "signature": "Stage-\u003e(r-\u003er-\u003er)-\u003er-\u003eGenericQ r-\u003eGenericQ r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:showData",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Data-based show, with special cases for GHC Ast types,\n   and simplistic indentation-based layout (the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e parameter); \n   showing abstract types abstractly and avoiding known potholes \n   (based on the \u003ccode\u003e\u003ca\u003eStage\u003c/a\u003e\u003c/code\u003e that generated the Ast)\n\u003c/p\u003e",
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "Stage -\u003e Int -\u003e a -\u003e String",
        "fct-source": "src/GHC-SYB-Utils.html#showData",
        "fct-type": "function",
        "title": "showData"
      },
      "index": {
        "description": "Generic Data-based show with special cases for GHC Ast types and simplistic indentation-based layout the Int parameter showing abstract types abstractly and avoiding known potholes based on the Stage that generated the Ast",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "showData",
        "normalized": "Stage-\u003eInt-\u003ea-\u003eString",
        "package": "ghc-syb-utils",
        "partial": "Data",
        "signature": "Stage-\u003eInt-\u003ea-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb-utils/docs/GHC-SYB-Utils.html#v:showSDoc_",
      "description": {
        "fct-module": "GHC.SYB.Utils",
        "fct-package": "ghc-syb-utils",
        "fct-signature": "SDoc -\u003e String",
        "fct-source": "src/GHC-SYB-Utils.html#showSDoc_",
        "fct-type": "function",
        "title": "showSDoc_"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Utils",
        "module": "GHC.SYB.Utils",
        "name": "showSDoc_",
        "normalized": "SDoc-\u003eString",
        "package": "ghc-syb-utils",
        "partial": "SDoc",
        "signature": "SDoc-\u003eString"
      }
    }
  }
]