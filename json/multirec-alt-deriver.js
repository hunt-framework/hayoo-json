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
        "word": "multirec-alt-deriver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\nimport Generics.MultiRec\nimport Generics.MultiRec.TH.Alt\nimport Data.Tree\n\ndata TheFam :: (* -\u003e *) where\n              TreeIntPrf   :: TheFam   (\u003ccode\u003eTree\u003c/code\u003e Int)\n              ForestIntPrf :: TheFam (\u003ccode\u003eForest\u003c/code\u003e Int)\n\n$(\u003ccode\u003e\u003ca\u003ederiveEverything\u003c/a\u003e\u003c/code\u003e\n  (\u003ccode\u003e\u003ca\u003eDerivOptions\u003c/a\u003e\u003c/code\u003e {\n   \u003ccode\u003e\u003ca\u003efamilyTypes\u003c/a\u003e\u003c/code\u003e = [ \n        ( [t| \u003ccode\u003eTree\u003c/code\u003e   Int |], \"TreeIntPrf\"   ),\n        ( [t| \u003ccode\u003eForest\u003c/code\u003e Int |], \"ForestIntPrf\" ) ],\n   \u003ccode\u003e\u003ca\u003eindexGadtName\u003c/a\u003e\u003c/code\u003e = \"TheFam\",\n   \u003ccode\u003e\u003ca\u003econstructorNameModifier\u003c/a\u003e\u003c/code\u003e = defaultConstructorNameModifier,\n   \u003ccode\u003e\u003ca\u003epatternFunctorName\u003c/a\u003e\u003c/code\u003e = \"ThePF\",\n   \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e = True,\n   \u003ccode\u003e\u003ca\u003esumMode\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eBalanced\u003c/a\u003e\u003c/code\u003e\n  )\n )\n\ntype instance \u003ccode\u003e\u003ca\u003ePF\u003c/a\u003e\u003c/code\u003e TheFam = ThePF\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "Alt",
          "package": "multirec-alt-deriver",
          "source": "src/Generics-MultiRec-TH-Alt.html",
          "type": "module"
        },
        "index": {
          "description": "Example usage import Generics.MultiRec import Generics.MultiRec.TH.Alt import Data.Tree data TheFam where TreeIntPrf TheFam Tree Int ForestIntPrf TheFam Forest Int deriveEverything DerivOptions familyTypes Tree Int TreeIntPrf Forest Int ForestIntPrf indexGadtName TheFam constructorNameModifier defaultConstructorNameModifier patternFunctorName ThePF verbose True sumMode Balanced type instance PF TheFam ThePF",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "Alt",
          "package": "multirec-alt-deriver",
          "partial": "Alt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TH.Alt",
          "name": "DerivOptions",
          "package": "multirec-alt-deriver",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "DerivOptions",
          "package": "multirec-alt-deriver",
          "partial": "Deriv Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#t:DerivOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TH.Alt",
          "name": "SumMode",
          "package": "multirec-alt-deriver",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "SumMode",
          "package": "multirec-alt-deriver",
          "partial": "Sum Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#t:SumMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee.g. \u003ccode\u003e (a \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e b) \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (c \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e d)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "Balanced",
          "package": "multirec-alt-deriver",
          "signature": "Balanced",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
          "type": "function"
        },
        "index": {
          "description": "e.g",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "Balanced",
          "package": "multirec-alt-deriver",
          "partial": "Balanced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:Balanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TH.Alt",
          "name": "DerivOptions",
          "package": "multirec-alt-deriver",
          "signature": "DerivOptions",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "DerivOptions",
          "package": "multirec-alt-deriver",
          "partial": "Deriv Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:DerivOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee.g. \u003ccode\u003e a \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (b \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e (c \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e d))\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "RightNested",
          "package": "multirec-alt-deriver",
          "signature": "RightNested",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#SumMode",
          "type": "function"
        },
        "index": {
          "description": "e.g",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "RightNested",
          "package": "multirec-alt-deriver",
          "partial": "Right Nested",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:RightNested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScheme for producing names for the\n empty types corresponding to constructors. The first arg is the name\n of the type (as given in \u003ccode\u003e\u003ca\u003efamilyTypes\u003c/a\u003e\u003c/code\u003e), the second arg is the name\n of the constructor (builtins will be called: \u003ccode\u003eNIL\u003c/code\u003e, \u003ccode\u003eCONS\u003c/code\u003e, \u003ccode\u003eTUPLE2\u003c/code\u003e, \u003ccode\u003eTUPLE3\u003c/code\u003e ...)\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "constructorNameModifier",
          "package": "multirec-alt-deriver",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "Scheme for producing names for the empty types corresponding to constructors The first arg is the name of the type as given in familyTypes the second arg is the name of the constructor builtins will be called NIL CONS TUPLE2 TUPLE3",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "constructorNameModifier",
          "normalized": "String-\u003eString-\u003eString",
          "package": "multirec-alt-deriver",
          "partial": "Name Modifier",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:constructorNameModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes names like \u003ccode\u003eCTOR_Either_Left\u003c/code\u003e, \u003ccode\u003eCTOR_Either_Right\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "defaultConstructorNameModifier",
          "package": "multirec-alt-deriver",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#defaultConstructorNameModifier",
          "type": "function"
        },
        "index": {
          "description": "Makes names like CTOR Either Left CTOR Either Right etc",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "defaultConstructorNameModifier",
          "normalized": "String-\u003eString-\u003eString",
          "package": "multirec-alt-deriver",
          "partial": "Constructor Name Modifier",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:defaultConstructorNameModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain function.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "deriveEverything",
          "package": "multirec-alt-deriver",
          "signature": "DerivOptions -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH-Alt.html#deriveEverything",
          "type": "function"
        },
        "index": {
          "description": "Main function",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "deriveEverything",
          "normalized": "DerivOptions-\u003eQ[Dec]",
          "package": "multirec-alt-deriver",
          "partial": "Everything",
          "signature": "DerivOptions-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:deriveEverything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of:\n\u003c/p\u003e\u003cpre\u003e (type (quoted), name of the proof for this type (i.e. the name of the constructor of the family GADT))\n\u003c/pre\u003e\u003cp\u003eE.g. \n\u003c/p\u003e\u003cpre\u003e data FooFam a where\n      FooPrf    :: FooFam Foo\n      BarStrPrf :: FooFam (Bar String)\n\n ... DerivOptions { \n       familyTypes = \n        [ ( [t| Foo        |], \"FooPrf\"   ) ], \n          ( [t| Bar String |], \"BarStrPrf\") ] ] \n ... \n }  \n\u003c/pre\u003e\u003cp\u003eThis defines our mutually recursive family. The types must resolve to\n \u003ccode\u003edata\u003c/code\u003etypes or \u003ccode\u003enewtype\u003c/code\u003es of kind \u003ccode\u003e*\u003c/code\u003e (type synonyms will be expanded).\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "familyTypes",
          "package": "multirec-alt-deriver",
          "signature": "[(TypeQ, String)]",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "list of type quoted name of the proof for this type i.e the name of the constructor of the family GADT E.g data FooFam where FooPrf FooFam Foo BarStrPrf FooFam Bar String DerivOptions familyTypes Foo FooPrf Bar String BarStrPrf This defines our mutually recursive family The types must resolve to data types or newtype of kind type synonyms will be expanded",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "familyTypes",
          "normalized": "[(TypeQ,String)]",
          "package": "multirec-alt-deriver",
          "partial": "Types",
          "signature": "[(TypeQ,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:familyTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the family GADT (this type has to be generated\n manually because TH doesn't support GADTs yet)\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "indexGadtName",
          "package": "multirec-alt-deriver",
          "signature": "String",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "Name of the family GADT this type has to be generated manually because TH doesn support GADTs yet",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "indexGadtName",
          "package": "multirec-alt-deriver",
          "partial": "Gadt Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:indexGadtName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the pattern functor (\u003ccode\u003ePF\u003c/code\u003e) to generate\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "patternFunctorName",
          "package": "multirec-alt-deriver",
          "signature": "String",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "Name of the pattern functor PF to generate",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "patternFunctorName",
          "package": "multirec-alt-deriver",
          "partial": "Functor Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:patternFunctorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape for trees of \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "sumMode",
          "package": "multirec-alt-deriver",
          "signature": "SumMode",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "The shape for trees of",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "sumMode",
          "package": "multirec-alt-deriver",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:sumMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint various informational messges?\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "verbose",
          "package": "multirec-alt-deriver",
          "signature": "Bool",
          "source": "src/Generics-MultiRec-TH-Alt-DerivOptions.html#DerivOptions",
          "type": "function"
        },
        "index": {
          "description": "Print various informational messges",
          "hierarchy": "Generics MultiRec TH Alt",
          "module": "Generics.MultiRec.TH.Alt",
          "name": "verbose",
          "package": "multirec-alt-deriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-alt-deriver/docs/Generics-MultiRec-TH-Alt.html#v:verbose"
      }
    }
  ]
]