[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\nimport Generics.MultiRec\nimport Generics.MultiRec.TH.Alt\nimport Data.Tree\n\ndata TheFam :: (* -\u003e *) where\n              TreeIntPrf   :: TheFam   (\u003ccode\u003eTree\u003c/code\u003e Int)\n              ForestIntPrf :: TheFam (\u003ccode\u003eForest\u003c/code\u003e Int)\n\n$(\u003ccode\u003e\u003ca\u003ederiveEverything\u003c/a\u003e\u003c/code\u003e\n  (\u003ccode\u003e\u003ca\u003eDerivOptions\u003c/a\u003e\u003c/code\u003e {\n   \u003ccode\u003e\u003ca\u003efamilyTypes\u003c/a\u003e\u003c/code\u003e = [ \n        ( [t| \u003ccode\u003eTree\u003c/code\u003e   Int |], \"TreeIntPrf\"   ),\n        ( [t| \u003ccode\u003eForest\u003c/code\u003e Int |], \"ForestIntPrf\" ) ],\n   \u003ccode\u003e\u003ca\u003eindexGadtName\u003c/a\u003e\u003c/code\u003e = \"TheFam\",\n   \u003ccode\u003e\u003ca\u003econstructorNameModifier\u003c/a\u003e\u003c/code\u003e = defaultConstructorNameModifier,\n   \u003ccode\u003e\u003ca\u003epatternFunctorName\u003c/a\u003e\u003c/code\u003e = \"ThePF\",\n   \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e = True,\n   \u003ccode\u003e\u003ca\u003esumMode\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eBalanced\u003c/a\u003e\u003c/code\u003e\n  )\n )\n\ntype instance \u003ccode\u003e\u003ca\u003ePF\u003c/a\u003e\u003c/code\u003e TheFam = ThePF\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "module",
        "fct-source": "src/Generics-MultiRec-TH-Alt.html",
        "fct-type": "module",
        "title": "Alt"
      },
      "index": {
        "description": "Example usage import Generics.MultiRec import Generics.MultiRec.TH.Alt import Data.Tree data TheFam where TreeIntPrf TheFam Tree Int ForestIntPrf TheFam Forest Int deriveEverything DerivOptions familyTypes Tree Int TreeIntPrf Forest Int ForestIntPrf indexGadtName TheFam constructorNameModifier defaultConstructorNameModifier patternFunctorName ThePF verbose True sumMode Balanced type instance PF TheFam ThePF",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#t:DerivOptions",
      "description": {
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "data",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "data",
        "title": "DerivOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "DerivOptions",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Deriv Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#t:SumMode",
      "description": {
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "data",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
        "fct-type": "data",
        "title": "SumMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "SumMode",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Sum Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:Balanced",
      "description": {
        "fct-descr": "\u003cp\u003ee.g. \u003ccode\u003e (a \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e b) \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (c \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e d)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "Balanced",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
        "fct-type": "function",
        "title": "Balanced"
      },
      "index": {
        "description": "e.g",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "Balanced",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Balanced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:DerivOptions",
      "description": {
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "DerivOptions",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "DerivOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "DerivOptions",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Deriv Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:RightNested",
      "description": {
        "fct-descr": "\u003cp\u003ee.g. \u003ccode\u003e a \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (b \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (c \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e d))\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "RightNested",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
        "fct-type": "function",
        "title": "RightNested"
      },
      "index": {
        "description": "e.g",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "RightNested",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Right Nested",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:constructorNameModifier",
      "description": {
        "fct-descr": "\u003cp\u003eScheme for producing names for the\n empty types corresponding to constructors. The first arg is the name\n of the type (as given in \u003ccode\u003e\u003ca\u003efamilyTypes\u003c/a\u003e\u003c/code\u003e), the second arg is the name\n of the constructor (builtins will be called: \u003ccode\u003eNIL\u003c/code\u003e, \u003ccode\u003eCONS\u003c/code\u003e, \u003ccode\u003eTUPLE2\u003c/code\u003e, \u003ccode\u003eTUPLE3\u003c/code\u003e ...)\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "constructorNameModifier"
      },
      "index": {
        "description": "Scheme for producing names for the empty types corresponding to constructors The first arg is the name of the type as given in familyTypes the second arg is the name of the constructor builtins will be called NIL CONS TUPLE2 TUPLE3",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "constructorNameModifier",
        "normalized": "String-\u003eString-\u003eString",
        "package": "multirec-alt-deriver",
        "partial": "Name Modifier",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:defaultConstructorNameModifier",
      "description": {
        "fct-descr": "\u003cp\u003eMakes names like \u003ccode\u003eCTOR_Either_Left\u003c/code\u003e, \u003ccode\u003eCTOR_Either_Right\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#defaultConstructorNameModifier",
        "fct-type": "function",
        "title": "defaultConstructorNameModifier"
      },
      "index": {
        "description": "Makes names like CTOR Either Left CTOR Either Right etc",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "defaultConstructorNameModifier",
        "normalized": "String-\u003eString-\u003eString",
        "package": "multirec-alt-deriver",
        "partial": "Constructor Name Modifier",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:deriveEverything",
      "description": {
        "fct-descr": "\u003cp\u003eMain function.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "DerivOptions -\u003e Q [Dec]",
        "fct-source": "src/Generics-MultiRec-TH-Alt.html#deriveEverything",
        "fct-type": "function",
        "title": "deriveEverything"
      },
      "index": {
        "description": "Main function",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "deriveEverything",
        "normalized": "DerivOptions-\u003eQ[Dec]",
        "package": "multirec-alt-deriver",
        "partial": "Everything",
        "signature": "DerivOptions-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:familyTypes",
      "description": {
        "fct-descr": "\u003cp\u003eA list of:\n\u003c/p\u003e\u003cpre\u003e (type (quoted), name of the proof for this type (i.e. the name of the constructor of the family GADT))\n\u003c/pre\u003e\u003cp\u003eE.g. \n\u003c/p\u003e\u003cpre\u003e data FooFam a where\n      FooPrf    :: FooFam Foo\n      BarStrPrf :: FooFam (Bar String)\n\n ... DerivOptions { \n       familyTypes = \n        [ ( [t| Foo        |], \"FooPrf\"   ) ], \n          ( [t| Bar String |], \"BarStrPrf\") ] ] \n ... \n }  \n\u003c/pre\u003e\u003cp\u003eThis defines our mutually recursive family. The types must resolve to\n \u003ccode\u003edata\u003c/code\u003etypes or \u003ccode\u003enewtype\u003c/code\u003es of kind \u003ccode\u003e*\u003c/code\u003e (type synonyms will be expanded).\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "[(TypeQ, String)]",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "familyTypes"
      },
      "index": {
        "description": "list of type quoted name of the proof for this type i.e the name of the constructor of the family GADT E.g data FooFam where FooPrf FooFam Foo BarStrPrf FooFam Bar String DerivOptions familyTypes Foo FooPrf Bar String BarStrPrf This defines our mutually recursive family The types must resolve to data types or newtype of kind type synonyms will be expanded",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "familyTypes",
        "normalized": "[(TypeQ,String)]",
        "package": "multirec-alt-deriver",
        "partial": "Types",
        "signature": "[(TypeQ,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:indexGadtName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the family GADT (this type has to be generated\n manually because TH doesn't support GADTs yet)\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "String",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "indexGadtName"
      },
      "index": {
        "description": "Name of the family GADT this type has to be generated manually because TH doesn support GADTs yet",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "indexGadtName",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Gadt Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:patternFunctorName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the pattern functor (\u003ccode\u003ePF\u003c/code\u003e) to generate\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "String",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "patternFunctorName"
      },
      "index": {
        "description": "Name of the pattern functor PF to generate",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "patternFunctorName",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Functor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:sumMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe shape for trees of \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "SumMode",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "sumMode"
      },
      "index": {
        "description": "The shape for trees of",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "sumMode",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:verbose",
      "description": {
        "fct-descr": "\u003cp\u003ePrint various informational messges?\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.TH.Alt",
        "fct-package": "multirec-alt-deriver",
        "fct-signature": "Bool",
        "fct-source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "Print various informational messges",
        "hierarchy": "Generics MultiRec TH Alt",
        "module": "Generics.MultiRec.TH.Alt",
        "name": "verbose",
        "normalized": "",
        "package": "multirec-alt-deriver",
        "partial": "",
        "signature": ""
      }
    }
  }
]