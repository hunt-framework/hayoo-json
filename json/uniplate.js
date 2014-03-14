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
        "word": "uniplate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eRequires multi-parameter type classes, so is no longer Haskell 98. These operations\n    are easier to use and construct than the equivalent \u003ca\u003eData.Generics.UniplateStrOn\u003c/a\u003e methods,\n    but perform the same operation.\n\u003c/p\u003e\u003cp\u003eIt is recommended that instead of importing this module, you import one of the following\n    modules, to construct instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Generics.PlateDirect\u003c/a\u003e - does not require overlapping instances, highest performance\n    but requires \u003cem\u003eO(n^2)\u003c/em\u003e instances in the worst case.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.PlateTypeable\u003c/a\u003e - requires the \u003ca\u003eData.Typeable\u003c/a\u003e class for all data structures.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.PlateData\u003c/a\u003e - requires \u003ca\u003eData.Generics\u003c/a\u003e and the \u003ccode\u003eData\u003c/code\u003e class, which is only\n    available on GHC, but automatically infers instances.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Generics.Biplate",
          "name": "Biplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Biplate.html",
          "type": "module"
        },
        "index": {
          "description": "DEPRECATED Use Data.Generics.Uniplate.Operations instead Requires multi-parameter type classes so is no longer Haskell These operations are easier to use and construct than the equivalent Data.Generics.UniplateStrOn methods but perform the same operation It is recommended that instead of importing this module you import one of the following modules to construct instances Data.Generics.PlateDirect does not require overlapping instances highest performance but requires instances in the worst case Data.Generics.PlateTypeable requires the Data.Typeable class for all data structures Data.Generics.PlateData requires Data.Generics and the Data class which is only available on GHC but automatically infers instances",
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "Biplate",
          "package": "uniplate",
          "partial": "Biplate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChildren are defined as the top-most items of type to\n   \u003cem\u003estarting at the root\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Biplate",
          "name": "Biplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Biplate.html#Biplate",
          "type": "class"
        },
        "index": {
          "description": "Children are defined as the top-most items of type to starting at the root",
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "Biplate",
          "package": "uniplate",
          "partial": "Biplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#t:Biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "biplate",
          "package": "uniplate",
          "signature": "BiplateType from to",
          "source": "src/Data-Generics-Biplate.html#biplate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "biplate",
          "package": "uniplate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility method, for direct users of the \u003ccode\u003e\u003ca\u003ebiplate\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Data.Generics.Biplate",
          "name": "biplateList",
          "package": "uniplate",
          "signature": "from -\u003e ([to], [to] -\u003e from)",
          "source": "src/Data-Generics-Biplate.html#biplateList",
          "type": "function"
        },
        "index": {
          "description": "Compatibility method for direct users of the biplate function",
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "biplateList",
          "normalized": "a-\u003e([b],[b]-\u003ea)",
          "package": "uniplate",
          "partial": "List",
          "signature": "from-\u003e([to],[to]-\u003efrom)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:biplateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "childrenBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Biplate.html#childrenBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "childrenBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:childrenBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "contextsBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Biplate.html#contextsBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "contextsBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:contextsBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "descendBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Biplate.html#descendBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "descendBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:descendBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "descendBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Biplate.html#descendBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "descendBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:descendBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "holesBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Biplate.html#holesBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "holesBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:holesBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "rewriteBi",
          "package": "uniplate",
          "signature": "(to -\u003e Maybe to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Biplate.html#rewriteBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "rewriteBi",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eMaybe to)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:rewriteBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "rewriteBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m (Maybe to)) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Biplate.html#rewriteBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "rewriteBiM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em(Maybe to))-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:rewriteBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "transformBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Biplate.html#transformBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "transformBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:transformBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "transformBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Biplate.html#transformBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "transformBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:transformBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Biplate",
          "name": "universeBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Biplate.html#universeBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Biplate",
          "module": "Data.Generics.Biplate",
          "name": "universeBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Biplate.html#v:universeBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompos compatibility layer. This module serves as a drop-in\n    replacement in some situations for some of the Compos operations.\n    Only the single-type traversals are supported, on normal\n    algebraic data types. Users should also import either \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e\n    or \u003ca\u003eData.Generics.Uniplate.Direct\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCompos is described in the paper: \"A Pattern for Almost Compositional Functions\"\n    by Bjorn Bringert and Aarne Ranta.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://doi.acm.org/10.1145/1159803.1159834\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.cs.chalmers.se/~bringert/publ/composOp/composOp.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Generics.Compos",
          "name": "Compos",
          "package": "uniplate",
          "source": "src/Data-Generics-Compos.html",
          "type": "module"
        },
        "index": {
          "description": "Compos compatibility layer This module serves as drop-in replacement in some situations for some of the Compos operations Only the single-type traversals are supported on normal algebraic data types Users should also import either Data.Generics.Uniplate.Data or Data.Generics.Uniplate.Direct Compos is described in the paper Pattern for Almost Compositional Functions by Bjorn Bringert and Aarne Ranta http doi.acm.org http www.cs.chalmers.se bringert publ composOp composOp.pdf",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "Compos",
          "package": "uniplate",
          "partial": "Compos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to keep an existing type class\n\u003c/p\u003e",
          "module": "Data.Generics.Compos",
          "name": "Compos",
          "package": "uniplate",
          "source": "src/Data-Generics-Compos.html#Compos",
          "type": "class"
        },
        "index": {
          "description": "If you want to keep an existing type class",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "Compos",
          "package": "uniplate",
          "partial": "Compos",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#t:Compos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecomposOp == \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOp",
          "package": "uniplate",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Generics-Compos.html#composOp",
          "type": "function"
        },
        "index": {
          "description": "composOp descend",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOp",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "Op",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbably replace with \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e, perhaps \u003ccode\u003e\u003ca\u003epara\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOpFold",
          "package": "uniplate",
          "signature": "b -\u003e (b -\u003e b -\u003e b) -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Generics-Compos.html#composOpFold",
          "type": "function"
        },
        "index": {
          "description": "Probably replace with universe perhaps para",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOpFold",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003eb-\u003ea",
          "package": "uniplate",
          "partial": "Op Fold",
          "signature": "b-\u003e(b-\u003eb-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOpFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecomposOpM == \u003ccode\u003e\u003ca\u003edescendM\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOpM",
          "package": "uniplate",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Data-Generics-Compos.html#composOpM",
          "type": "function"
        },
        "index": {
          "description": "composOpM descendM",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOpM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "partial": "Op",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecomposOpMPlus = \u003ccode\u003e\u003ca\u003ecomposOpFold\u003c/a\u003e\u003c/code\u003e mzero mplus\u003c/pre\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOpMPlus",
          "package": "uniplate",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/Data-Generics-Compos.html#composOpMPlus",
          "type": "function"
        },
        "index": {
          "description": "composOpMPlus composOpFold mzero mplus",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOpMPlus",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "uniplate",
          "partial": "Op MPlus",
          "signature": "(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOpMPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecomposOpM_ == \u003ccode\u003e\u003ca\u003ecomposOpFold\u003c/a\u003e\u003c/code\u003e (return ()) (\u003e\u003e)\u003c/pre\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOpM_",
          "package": "uniplate",
          "signature": "(a -\u003e m ()) -\u003e a -\u003e m ()",
          "source": "src/Data-Generics-Compos.html#composOpM_",
          "type": "function"
        },
        "index": {
          "description": "composOpM composOpFold return",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOpM_",
          "normalized": "(a-\u003eb())-\u003ea-\u003eb()",
          "package": "uniplate",
          "partial": "Op",
          "signature": "(a-\u003em())-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOpM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecomposOpMonoid = \u003ccode\u003e\u003ca\u003ecomposOpFold\u003c/a\u003e\u003c/code\u003e mempty mappend\u003c/pre\u003e",
          "module": "Data.Generics.Compos",
          "name": "composOpMonoid",
          "package": "uniplate",
          "signature": "(a -\u003e m) -\u003e a -\u003e m",
          "source": "src/Data-Generics-Compos.html#composOpMonoid",
          "type": "function"
        },
        "index": {
          "description": "composOpMonoid composOpFold mempty mappend",
          "hierarchy": "Data Generics Compos",
          "module": "Data.Generics.Compos",
          "name": "composOpMonoid",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "partial": "Op Monoid",
          "signature": "(a-\u003em)-\u003ea-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Compos.html#v:composOpMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Generics.Uniplate.Data instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis module exports \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances for everything with \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e defined.\n    Using GHC the \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances can be constructed with \u003ccode\u003ederiving Data\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.PlateData",
          "name": "PlateData",
          "package": "uniplate",
          "source": "src/Data-Generics-PlateData.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Data.Generics.Uniplate.Data instead DEPRECATED Use Data.Generics.Uniplate.Data instead This module exports Biplate instances for everything with Data defined Using GHC the Data instances can be constructed with deriving Data",
          "hierarchy": "Data Generics PlateData",
          "module": "Data.Generics.PlateData",
          "name": "PlateData",
          "package": "uniplate",
          "partial": "Plate Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Generics.Uniplate.Direct instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Direct\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis module supplies a method for writing \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances more easily.\n    This module requires fewest extensions, highest performance, and most instance\n    definitions.\n\u003c/p\u003e\u003cp\u003eTo take an example:\n\u003c/p\u003e\u003cpre\u003e data Expr = Var Int | Pos Expr String | Neg Expr | Add Expr Expr\n data Stmt = Seq [Stmt] | Sel [Expr] | Let String Expr\n\n instance Uniplate Expr where\n     uniplate (Var x  ) = plate Var |- x\n     uniplate (Pos x y) = plate Pos |* x |- y\n     uniplate (Neg x  ) = plate Neg |* x\n     uniplate (Add x y) = plate Add |* x |* y\n\n instance Biplate Expr Expr where\n     biplate = plateSelf\n\n instance Uniplate Stmt where\n     uniplate (Seq x  ) = plate Seq ||* x\n     uniplate (Sel x  ) = plate Sel ||+ x\n     uniplate (Let x y) = plate Let |-  x |- y\n\n instance Biplate Stmt Stmt where\n     biplate = plateSelf\n\n instance Biplate Stmt Expr where\n     biplate (Seq x  ) = plate Seq ||+ x\n     biplate (Sel x  ) = plate Sel ||* x\n     biplate (Let x y) = plate Let |-  x |* y\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "PlateDirect",
          "package": "uniplate",
          "source": "src/Data-Generics-PlateDirect.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Data.Generics.Uniplate.Direct instead DEPRECATED Use Data.Generics.Uniplate.Direct instead This module supplies method for writing Biplate instances more easily This module requires fewest extensions highest performance and most instance definitions To take an example data Expr Var Int Pos Expr String Neg Expr Add Expr Expr data Stmt Seq Stmt Sel Expr Let String Expr instance Uniplate Expr where uniplate Var plate Var uniplate Pos plate Pos uniplate Neg plate Neg uniplate Add plate Add instance Biplate Expr Expr where biplate plateSelf instance Uniplate Stmt where uniplate Seq plate Seq uniplate Sel plate Sel uniplate Let plate Let instance Biplate Stmt Stmt where biplate plateSelf instance Biplate Stmt Expr where biplate Seq plate Seq biplate Sel plate Sel biplate Let plate Let",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "PlateDirect",
          "package": "uniplate",
          "partial": "Plate Direct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is a list of the type of the target\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "(||*)",
          "package": "uniplate",
          "signature": "Type ([to] -\u003e from) to -\u003e [to] -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#%7C%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is list of the type of the target",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "(||*) ||*",
          "normalized": "Type([a]-\u003eb)a-\u003e[a]-\u003eType b a",
          "package": "uniplate",
          "signature": "Type([to]-\u003efrom)to-\u003e[to]-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:-124--124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is a list of types which may contain the target\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "(||+)",
          "package": "uniplate",
          "signature": "Type ([item] -\u003e from) to -\u003e [item] -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#%7C%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is list of types which may contain the target",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "(||+) ||+",
          "normalized": "Type([a]-\u003eb)c-\u003e[a]-\u003eType b c",
          "package": "uniplate",
          "signature": "Type([item]-\u003efrom)to-\u003e[item]-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:-124--124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is the target.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "(|*)",
          "package": "uniplate",
          "signature": "Type (to -\u003e from) to -\u003e to -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is the target",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "(|*) |*",
          "normalized": "Type(a-\u003eb)a-\u003ea-\u003eType b a",
          "package": "uniplate",
          "signature": "Type(to-\u003efrom)to-\u003eto-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:-124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right may contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "(|+)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "The field to the right may contain the target",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "(|+) |+",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:-124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right \u003cem\u003edoes not\u003c/em\u003e contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "(|-)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#%7C-",
          "type": "function"
        },
        "index": {
          "description": "The field to the right does not contain the target",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "(|-) |-",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:-124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main combinator used to start the chain.\n\u003c/p\u003e\u003cp\u003eThe following rule can be used for optimisation:\n\u003c/p\u003e\u003cpre\u003e plate Ctor |- x == plate (Ctor x)\n\u003c/pre\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "plate",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-PlateDirect.html#plate",
          "type": "function"
        },
        "index": {
          "description": "The main combinator used to start the chain The following rule can be used for optimisation plate Ctor plate Ctor",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "plate",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "signature": "from-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:plate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for \u003ccode\u003ePlayAll\u003c/code\u003e definitions where both types are the same.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateDirect",
          "name": "plateSelf",
          "package": "uniplate",
          "signature": "to -\u003e Type to to",
          "source": "src/Data-Generics-PlateDirect.html#plateSelf",
          "type": "function"
        },
        "index": {
          "description": "Used for PlayAll definitions where both types are the same",
          "hierarchy": "Data Generics PlateDirect",
          "module": "Data.Generics.PlateDirect",
          "name": "plateSelf",
          "normalized": "a-\u003eType a a",
          "package": "uniplate",
          "partial": "Self",
          "signature": "to-\u003eType to to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateDirect.html#v:plateSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Generics.Uniplate.Typeable instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Typeable\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis module supplies a method for writing \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances more easily.\n\u003c/p\u003e\u003cp\u003eTo take an example:\n\u003c/p\u003e\u003cpre\u003e data Expr = Var Int | Neg Expr | Add Expr Expr\n\n instance Typeable Expr where ...\n\n instance (Typeable a, Uniplate a) =\u003e PlateAll Expr a where\n   plateAll (Var x  ) = plate Var |- x\n   plateAll (Neg x  ) = plate Neg |+ x\n   plateAll (Add x y) = plate Add |+ x |+ y\n\n instance Uniplate Expr where\n   uniplate = uniplateAll\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "PlateTypeable",
          "package": "uniplate",
          "source": "src/Data-Generics-PlateTypeable.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Data.Generics.Uniplate.Typeable instead DEPRECATED Use Data.Generics.Uniplate.Typeable instead This module supplies method for writing Biplate instances more easily To take an example data Expr Var Int Neg Expr Add Expr Expr instance Typeable Expr where instance Typeable Uniplate PlateAll Expr where plateAll Var plate Var plateAll Neg plate Neg plateAll Add plate Add instance Uniplate Expr where uniplate uniplateAll",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "PlateTypeable",
          "package": "uniplate",
          "partial": "Plate Typeable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents going from the container type to the target.\n\u003c/p\u003e\u003cp\u003eThis class should only be constructed with \u003ccode\u003e\u003ca\u003eplate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e|+\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e|-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "PlateAll",
          "package": "uniplate",
          "source": "src/Data-Generics-PlateTypeable.html#PlateAll",
          "type": "class"
        },
        "index": {
          "description": "This class represents going from the container type to the target This class should only be constructed with plate and",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "PlateAll",
          "package": "uniplate",
          "partial": "Plate All",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#t:PlateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe field to the right may contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "(|+)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-PlateTypeable.html#%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "the field to the right may contain the target",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "(|+) |+",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#v:-124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right \u003cem\u003edoes not\u003c/em\u003e contain the target.\n This can be used as either an optimisation, or more commonly for excluding\n primitives such as Int.\n\u003c/p\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "(|-)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-PlateTypeable.html#%7C-",
          "type": "function"
        },
        "index": {
          "description": "The field to the right does not contain the target This can be used as either an optimisation or more commonly for excluding primitives such as Int",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "(|-) |-",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#v:-124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main combinator used to start the chain.\n\u003c/p\u003e\u003cp\u003eThe following rule can be used for optimisation:\n\u003c/p\u003e\u003cpre\u003e plate Ctor |- x == plate (Ctor x)\n\u003c/pre\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "plate",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-PlateTypeable.html#plate",
          "type": "function"
        },
        "index": {
          "description": "The main combinator used to start the chain The following rule can be used for optimisation plate Ctor plate Ctor",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "plate",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "signature": "from-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#v:plate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.PlateTypeable",
          "name": "plateAll",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-PlateTypeable.html#plateAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "plateAll",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "partial": "All",
          "signature": "from-\u003eType from to",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#v:plateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used to write a \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e instance from a \u003ccode\u003e\u003ca\u003ePlateAll\u003c/a\u003e\u003c/code\u003e one\n\u003c/p\u003e",
          "module": "Data.Generics.PlateTypeable",
          "name": "uniplateAll",
          "package": "uniplate",
          "signature": "a -\u003e (Str b, Str b -\u003e a)",
          "source": "src/Data-Generics-PlateTypeable.html#uniplateAll",
          "type": "function"
        },
        "index": {
          "description": "This function is used to write Uniplate instance from PlateAll one",
          "hierarchy": "Data Generics PlateTypeable",
          "module": "Data.Generics.PlateTypeable",
          "name": "uniplateAll",
          "normalized": "a-\u003e(Str b,Str b-\u003ea)",
          "package": "uniplate",
          "partial": "All",
          "signature": "a-\u003e(Str b,Str b-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-PlateTypeable.html#v:uniplateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSYB compatibility layer. This module serves as a drop-in\n    replacement in some situations for some of the SYB operations.\n    Users should also import \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSYB is described in the paper: \"Scrap your boilerplate: a practical design\n    pattern for generic programming\" by Ralf Lammel and Simon\n    Peyton Jones.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.cs.vu.nl/boilerplate/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://doi.acm.org/10.1145/604174.604179\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.cs.vu.nl/boilerplate/tldi03.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Generics.SYB",
          "name": "SYB",
          "package": "uniplate",
          "source": "src/Data-Generics-SYB.html",
          "type": "module"
        },
        "index": {
          "description": "SYB compatibility layer This module serves as drop-in replacement in some situations for some of the SYB operations Users should also import Data.Generics.Uniplate.Data SYB is described in the paper Scrap your boilerplate practical design pattern for generic programming by Ralf Lammel and Simon Peyton Jones http www.cs.vu.nl boilerplate http doi.acm.org http www.cs.vu.nl boilerplate tldi03.pdf",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "SYB",
          "package": "uniplate",
          "partial": "SYB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euniverseBi\u003c/a\u003e\u003c/code\u003e, perhaps followed by a fold.\n\u003c/p\u003e\u003cp\u003eNot an exact equivalent to the SYB \u003ccode\u003eeverything\u003c/code\u003e, as the\n   operators may be applied in different orders.\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "everything",
          "package": "uniplate",
          "signature": "(r -\u003e r -\u003e r) -\u003e (r, a -\u003e r) -\u003e b -\u003e r",
          "source": "src/Data-Generics-SYB.html#everything",
          "type": "function"
        },
        "index": {
          "description": "Use universe or universeBi perhaps followed by fold Not an exact equivalent to the SYB everything as the operators may be applied in different orders",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "everything",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a,b-\u003ea)-\u003ec-\u003ea",
          "package": "uniplate",
          "signature": "(r-\u003er-\u003er)-\u003e(r,a-\u003er)-\u003eb-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:everything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eeverywhere == \u003ccode\u003e\u003ca\u003etransformBi\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "everywhere",
          "package": "uniplate",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Data-Generics-SYB.html#everywhere",
          "type": "function"
        },
        "index": {
          "description": "everywhere transformBi",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "everywhere",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eeverywhereM == \u003ccode\u003e\u003ca\u003etransformBiM\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "everywhereM",
          "package": "uniplate",
          "signature": "(a -\u003e m a) -\u003e b -\u003e m b",
          "source": "src/Data-Generics-SYB.html#everywhereM",
          "type": "function"
        },
        "index": {
          "description": "everywhereM transformBiM",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "everywhereM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "signature": "(a-\u003em a)-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:everywhereM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003egmapM == \u003ccode\u003e\u003ca\u003edescendM\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapM",
          "package": "uniplate",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Data-Generics-SYB.html#gmapM",
          "type": "function"
        },
        "index": {
          "description": "gmapM descendM",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapQ",
          "package": "uniplate",
          "signature": "(a -\u003e u) -\u003e a -\u003e [u]",
          "source": "src/Data-Generics-SYB.html#gmapQ",
          "type": "function"
        },
        "index": {
          "description": "Use children",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapQ",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[b]",
          "package": "uniplate",
          "signature": "(a-\u003eu)-\u003ea-\u003e[u]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapQi",
          "package": "uniplate",
          "signature": "Int -\u003e (a -\u003e u) -\u003e a -\u003e u",
          "source": "src/Data-Generics-SYB.html#gmapQi",
          "type": "function"
        },
        "index": {
          "description": "Use children and",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapQi",
          "normalized": "Int-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "partial": "Qi",
          "signature": "Int-\u003e(a-\u003eu)-\u003ea-\u003eu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapQi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapQl",
          "package": "uniplate",
          "signature": "(r -\u003e r' -\u003e r) -\u003e r -\u003e (a -\u003e r') -\u003e a -\u003e r",
          "source": "src/Data-Generics-SYB.html#gmapQl",
          "type": "function"
        },
        "index": {
          "description": "Use children and foldl",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapQl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c-\u003eb)-\u003ec-\u003ea",
          "package": "uniplate",
          "partial": "Ql",
          "signature": "(r-\u003er'-\u003er)-\u003er-\u003e(a-\u003er')-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapQl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapQr",
          "package": "uniplate",
          "signature": "(r' -\u003e r -\u003e r) -\u003e r -\u003e (a -\u003e r') -\u003e a -\u003e r",
          "source": "src/Data-Generics-SYB.html#gmapQr",
          "type": "function"
        },
        "index": {
          "description": "Use children and foldr",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapQr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "uniplate",
          "partial": "Qr",
          "signature": "(r'-\u003er-\u003er)-\u003er-\u003e(a-\u003er')-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapQr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003egmapT == \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "gmapT",
          "package": "uniplate",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Generics-SYB.html#gmapT",
          "type": "function"
        },
        "index": {
          "description": "gmapT descend",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "gmapT",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:gmapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emkM == id\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "mkM",
          "package": "uniplate",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Data-Generics-SYB.html#mkM",
          "type": "function"
        },
        "index": {
          "description": "mkM id",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "mkM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:mkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly for use with \u003ccode\u003e\u003ca\u003eeverything\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.SYB",
          "name": "mkQ",
          "package": "uniplate",
          "signature": "r -\u003e (a -\u003e r) -\u003e (r, a -\u003e r)",
          "source": "src/Data-Generics-SYB.html#mkQ",
          "type": "function"
        },
        "index": {
          "description": "Only for use with everything",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "mkQ",
          "normalized": "a-\u003e(b-\u003ea)-\u003e(a,b-\u003ea)",
          "package": "uniplate",
          "signature": "r-\u003e(a-\u003er)-\u003e(r,a-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:mkQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emkT == \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.SYB",
          "name": "mkT",
          "package": "uniplate",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Generics-SYB.html#mkT",
          "type": "function"
        },
        "index": {
          "description": "mkT id",
          "hierarchy": "Data Generics SYB",
          "module": "Data.Generics.SYB",
          "name": "mkT",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-SYB.html#v:mkT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e data type, which is used by the\n    underlying \u003ccode\u003euniplate\u003c/code\u003e and \u003ccode\u003ebiplate\u003c/code\u003e methods. It should not\n    be used directly under normal circumstances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Str",
          "name": "Str",
          "package": "uniplate",
          "source": "src/Data-Generics-Str.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Str data type which is used by the underlying uniplate and biplate methods It should not be used directly under normal circumstances",
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "Str",
          "package": "uniplate",
          "partial": "Str",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "Str",
          "package": "uniplate",
          "source": "src/Data-Generics-Str.html#Str",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "Str",
          "package": "uniplate",
          "partial": "Str",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "One",
          "package": "uniplate",
          "signature": "One a",
          "source": "src/Data-Generics-Str.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "One",
          "package": "uniplate",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "Two",
          "package": "uniplate",
          "signature": "Two (Str a) (Str a)",
          "source": "src/Data-Generics-Str.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "Two",
          "package": "uniplate",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "Zero",
          "package": "uniplate",
          "signature": "Zero",
          "source": "src/Data-Generics-Str.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "Zero",
          "package": "uniplate",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Str",
          "name": "listStr",
          "package": "uniplate",
          "signature": "[a] -\u003e Str a",
          "source": "src/Data-Generics-Str.html#listStr",
          "type": "function"
        },
        "index": {
          "description": "Convert list to Str",
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "listStr",
          "normalized": "[a]-\u003eStr a",
          "package": "uniplate",
          "partial": "Str",
          "signature": "[a]-\u003eStr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:listStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e to a list, assumes the value was created\n   with \u003ccode\u003e\u003ca\u003elistStr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Str",
          "name": "strList",
          "package": "uniplate",
          "signature": "Str a -\u003e [a]",
          "source": "src/Data-Generics-Str.html#strList",
          "type": "function"
        },
        "index": {
          "description": "Convert Str to list assumes the value was created with listStr",
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "strList",
          "normalized": "Str a-\u003e[a]",
          "package": "uniplate",
          "partial": "List",
          "signature": "Str a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:strList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "strMap",
          "package": "uniplate",
          "signature": "(a -\u003e b) -\u003e Str a -\u003e Str b",
          "source": "src/Data-Generics-Str.html#strMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "strMap",
          "normalized": "(a-\u003eb)-\u003eStr a-\u003eStr b",
          "package": "uniplate",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003eStr a-\u003eStr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:strMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Str",
          "name": "strMapM",
          "package": "uniplate",
          "signature": "(a -\u003e m b) -\u003e Str a -\u003e m (Str b)",
          "source": "src/Data-Generics-Str.html#strMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "strMapM",
          "normalized": "(a-\u003eb c)-\u003eStr a-\u003eb(Str c)",
          "package": "uniplate",
          "partial": "Map",
          "signature": "(a-\u003em b)-\u003eStr a-\u003em(Str b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:strMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a \u003ccode\u003e\u003ca\u003eStr\u003c/a\u003e\u003c/code\u003e to a list, and back again, in a structure\n   preserving way. The output and input lists must be equal in\n   length.\n\u003c/p\u003e",
          "module": "Data.Generics.Str",
          "name": "strStructure",
          "package": "uniplate",
          "signature": "Str a -\u003e ([a], [a] -\u003e Str a)",
          "source": "src/Data-Generics-Str.html#strStructure",
          "type": "function"
        },
        "index": {
          "description": "Transform Str to list and back again in structure preserving way The output and input lists must be equal in length",
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "strStructure",
          "normalized": "Str a-\u003e([a],[a]-\u003eStr a)",
          "package": "uniplate",
          "partial": "Structure",
          "signature": "Str a-\u003e([a],[a]-\u003eStr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:strStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the type of the method, will crash if called\n\u003c/p\u003e",
          "module": "Data.Generics.Str",
          "name": "strType",
          "package": "uniplate",
          "signature": "Str a -\u003e a",
          "source": "src/Data-Generics-Str.html#strType",
          "type": "function"
        },
        "index": {
          "description": "Take the type of the method will crash if called",
          "hierarchy": "Data Generics Str",
          "module": "Data.Generics.Str",
          "name": "strType",
          "normalized": "Str a-\u003ea",
          "package": "uniplate",
          "partial": "Type",
          "signature": "Str a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Str.html#v:strType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances for abstract types are incorrect,\n   and fail to work correctly with Uniplate. This module defines three helper\n   types (\u003ccode\u003e\u003ca\u003eHide\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e) to assist when writing instances\n   for abstract types. The \u003ccode\u003e\u003ca\u003eHide\u003c/a\u003e\u003c/code\u003e type is useful when you want to mark some part\n   of your data type as being ignored by \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e\n   (and any other \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e based generics libraries, such as \u003ccode\u003esyb\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUsing the helper types, this module defines wrappers for types in\n   the \u003ccode\u003econtainers\u003c/code\u003e package, namely \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n   The standard \u003ccode\u003econtainers\u003c/code\u003e \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances all treat the types as abstract,\n   but the wrapper types allow you to traverse within the data types, ensuring\n   the necessary invariants are maintained. In particular, if you do not modify\n   the keys reconstruct will be \u003cem\u003eO(n)\u003c/em\u003e instead of \u003cem\u003eO(n log n)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example of how to implement your own abstract type wrappers, the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e data\n   type is defined as:\n\u003c/p\u003e\u003cpre\u003e\n   newtype Map k v = Map (\u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e [k], \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e [v], Hide (Map.Map k v)))\n      deriving (Data, Typeable)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type is defined as an \u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e of three components - the keys, the values, and\n   the underlying \u003ccode\u003eMap\u003c/code\u003e. We use \u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e to ensure that the keys\u003cem\u003evalues\u003c/em\u003emap always remain in sync.\n   We use \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e on the keys and values to ensure that whenever the keys or values change we\n   rebuild the \u003ccode\u003eMap\u003c/code\u003e, but if they don't, we reuse the previous \u003ccode\u003eMap\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003efromMap\u003c/a\u003e\u003c/code\u003e function is\n   implemented by pattern matching on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003efromMap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e _ (_,_,\u003ccode\u003e\u003ca\u003eHide\u003c/a\u003e\u003c/code\u003e x))) = x\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoMap\u003c/a\u003e\u003c/code\u003e function is slightly harder, as we need to come up with an invariant restoring function:\n\u003c/p\u003e\u003cpre\u003e toMap :: Ord k =\u003e Map.Map k v -\u003e Map k v\n toMap x = Map $ Invariant inv $ create x\n     where\n         create x = (Trigger False ks, Trigger False vs, Hide x)\n             where (ks,vs) = unzip $ Map.toAscList x\n \n         inv (ks,vs,x)\n             | trigger ks = create $ Map.fromList $ zip (fromTrigger ks) (fromTrigger vs)\n             | trigger vs = create $ Map.fromDistinctAscList $ zip (fromTrigger ks) (fromTrigger vs)\n             | otherwise = (ks,vs,x)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ecreate\u003c/code\u003e function creates a value from a \u003ccode\u003eMap\u003c/code\u003e, getting the correct keys and values. The \u003ccode\u003einv\u003c/code\u003e\n   function looks at the triggers on the keys/values. If the keys trigger has been tripped, then we\n   reconstruct the \u003ccode\u003eMap\u003c/code\u003e using \u003ccode\u003efromList\u003c/code\u003e. If the values trigger has been tripped, but they keys trigger\n   has not, we can use \u003ccode\u003efromDistinctAscList\u003c/code\u003e, reducing the complexity of constructing the \u003ccode\u003eMap\u003c/code\u003e. If nothing\n   has changed we can reuse the previous value.\n\u003c/p\u003e\u003cp\u003eThe end result is that all Uniplate (or \u003ccode\u003esyb\u003c/code\u003e) traversals over \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e result in a valid value, which has\n   had all appropriate transformations applied.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Instances",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "In some cases Data instances for abstract types are incorrect and fail to work correctly with Uniplate This module defines three helper types Hide Trigger and Invariant to assist when writing instances for abstract types The Hide type is useful when you want to mark some part of your data type as being ignored by Data.Generics.Uniplate.Data and any other Data based generics libraries such as syb Using the helper types this module defines wrappers for types in the containers package namely Map Set IntMap and IntSet The standard containers Data instances all treat the types as abstract but the wrapper types allow you to traverse within the data types ensuring the necessary invariants are maintained In particular if you do not modify the keys reconstruct will be instead of log As an example of how to implement your own abstract type wrappers the Map data type is defined as newtype Map Map Invariant Trigger Trigger Hide Map.Map deriving Data Typeable The Map type is defined as an Invariant of three components the keys the values and the underlying Map We use Invariant to ensure that the keys values map always remain in sync We use Trigger on the keys and values to ensure that whenever the keys or values change we rebuild the Map but if they don we reuse the previous Map The fromMap function is implemented by pattern matching on the Map type fromMap Map Invariant Hide The toMap function is slightly harder as we need to come up with an invariant restoring function toMap Ord Map.Map Map toMap Map Invariant inv create where create Trigger False ks Trigger False vs Hide where ks vs unzip Map.toAscList inv ks vs trigger ks create Map.fromList zip fromTrigger ks fromTrigger vs trigger vs create Map.fromDistinctAscList zip fromTrigger ks fromTrigger vs otherwise ks vs The create function creates value from Map getting the correct keys and values The inv function looks at the triggers on the keys values If the keys trigger has been tripped then we reconstruct the Map using fromList If the values trigger has been tripped but they keys trigger has not we can use fromDistinctAscList reducing the complexity of constructing the Map If nothing has changed we can reuse the previous value The end result is that all Uniplate or syb traversals over Map result in valid value which has had all appropriate transformations applied",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Instances",
          "package": "uniplate",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHide\u003c/a\u003e\u003c/code\u003e data type has a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance which reports having no constructors,\n   as though the type was defined as using the extension \u003ccode\u003eEmptyDataDecls\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e data Hide a\n\u003c/pre\u003e\u003cp\u003eThis type is suitable for defining regions that are avoided by Uniplate traversals.\n   As an example:\n\u003c/p\u003e\u003cpre\u003e transformBi (+1) (1, 2, Hide 3, Just 4) == (2, 3, Hide 3, Just 4)\n\u003c/pre\u003e\u003cp\u003eAs a result of having no constructors, any calls to the methods \u003ccode\u003e\u003ca\u003etoConstr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egunfold\u003c/a\u003e\u003c/code\u003e\n   will raise an error.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Hide",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Hide",
          "type": "newtype"
        },
        "index": {
          "description": "The Hide data type has Data instance which reports having no constructors as though the type was defined as using the extension EmptyDataDecls data Hide This type is suitable for defining regions that are avoided by Uniplate traversals As an example transformBi Hide Just Hide Just As result of having no constructors any calls to the methods toConstr or gunfold will raise an error",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Hide",
          "package": "uniplate",
          "partial": "Hide",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:Hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvariant preserving version of \u003ccode\u003eIntMap\u003c/code\u003e from the \u003ccode\u003econtainers\u003c/code\u003e packages, suitable for use with \u003ccode\u003eUniplate\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003etoIntMap\u003c/a\u003e\u003c/code\u003e to construct values, and \u003ccode\u003e\u003ca\u003efromIntMap\u003c/a\u003e\u003c/code\u003e to deconstruct values.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "IntMap",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#IntMap",
          "type": "data"
        },
        "index": {
          "description": "Invariant preserving version of IntMap from the containers packages suitable for use with Uniplate Use toIntMap to construct values and fromIntMap to deconstruct values",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "IntMap",
          "package": "uniplate",
          "partial": "Int Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:IntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvariant preserving version of \u003ccode\u003eIntSet\u003c/code\u003e from the \u003ccode\u003econtainers\u003c/code\u003e packages, suitable for use with \u003ccode\u003eUniplate\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003etoIntSet\u003c/a\u003e\u003c/code\u003e to construct values, and \u003ccode\u003e\u003ca\u003efromIntSet\u003c/a\u003e\u003c/code\u003e to deconstruct values.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "IntSet",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#IntSet",
          "type": "data"
        },
        "index": {
          "description": "Invariant preserving version of IntSet from the containers packages suitable for use with Uniplate Use toIntSet to construct values and fromIntSet to deconstruct values",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "IntSet",
          "package": "uniplate",
          "partial": "Int Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:IntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e data type as a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance which reports as being defined:\n\u003c/p\u003e\u003cpre\u003e data Invariant a = Invariant a\n\u003c/pre\u003e\u003cp\u003eHowever, whenever a \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e constructs a new value, it will have the function in\n   the \u003ccode\u003e\u003ca\u003einvariant\u003c/a\u003e\u003c/code\u003e field applied to it. As an example:\n\u003c/p\u003e\u003cpre\u003e data SortedList a = SortedList (Invariant [a]) deriving (Data,Typeable)\n toSortedList xs = SortedList $ Invariant sort (sort xs)\n fromSortedList (SortedList (Invariant _ xs)) = xs\n\u003c/pre\u003e\u003cp\u003eAny time an operation such as \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e is applied to the data type, the \u003ccode\u003e\u003ca\u003einvariant\u003c/a\u003e\u003c/code\u003e function\n   is applied to the result. The \u003ccode\u003efromSortedList\u003c/code\u003e function can then rely on this invariant.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egunfold\u003c/a\u003e\u003c/code\u003e method is partially implemented - all constructed values will have an undefined\n   value for all fields, regardless of which function is passed to \u003ccode\u003e\u003ca\u003efromConstrB\u003c/a\u003e\u003c/code\u003e. If you only use\n   \u003ccode\u003e\u003ca\u003efromConstr\u003c/a\u003e\u003c/code\u003e (as Uniplate does) then the \u003ccode\u003e\u003ca\u003egunfold\u003c/a\u003e\u003c/code\u003e method is sufficient.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Invariant",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Invariant",
          "type": "data"
        },
        "index": {
          "description": "The Invariant data type as Data instance which reports as being defined data Invariant Invariant However whenever gfoldl constructs new value it will have the function in the invariant field applied to it As an example data SortedList SortedList Invariant deriving Data Typeable toSortedList xs SortedList Invariant sort sort xs fromSortedList SortedList Invariant xs xs Any time an operation such as gmapT is applied to the data type the invariant function is applied to the result The fromSortedList function can then rely on this invariant The gunfold method is partially implemented all constructed values will have an undefined value for all fields regardless of which function is passed to fromConstrB If you only use fromConstr as Uniplate does then the gunfold method is sufficient",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Invariant",
          "package": "uniplate",
          "partial": "Invariant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:Invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvariant preserving version of \u003ccode\u003eMap\u003c/code\u003e from the \u003ccode\u003econtainers\u003c/code\u003e packages, suitable for use with \u003ccode\u003eUniplate\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003etoMap\u003c/a\u003e\u003c/code\u003e to construct values, and \u003ccode\u003e\u003ca\u003efromMap\u003c/a\u003e\u003c/code\u003e to deconstruct values.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Map",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Map",
          "type": "data"
        },
        "index": {
          "description": "Invariant preserving version of Map from the containers packages suitable for use with Uniplate Use toMap to construct values and fromMap to deconstruct values",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Map",
          "package": "uniplate",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvariant preserving version of \u003ccode\u003eSet\u003c/code\u003e from the \u003ccode\u003econtainers\u003c/code\u003e packages, suitable for use with \u003ccode\u003eUniplate\u003c/code\u003e.\n   Use \u003ccode\u003e\u003ca\u003etoSet\u003c/a\u003e\u003c/code\u003e to construct values, and \u003ccode\u003e\u003ca\u003efromSet\u003c/a\u003e\u003c/code\u003e to deconstruct values.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Set",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Set",
          "type": "data"
        },
        "index": {
          "description": "Invariant preserving version of Set from the containers packages suitable for use with Uniplate Use toSet to construct values and fromSet to deconstruct values",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Set",
          "package": "uniplate",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e data type has a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance which reports as being defined:\n\u003c/p\u003e\u003cpre\u003e data Trigger a = Trigger a\n\u003c/pre\u003e\u003cp\u003eHowever, whenever a \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egunfold\u003c/a\u003e\u003c/code\u003e constructs a new value, it will have the\n   \u003ccode\u003e\u003ca\u003etrigger\u003c/a\u003e\u003c/code\u003e field set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. The trigger information is useful to indicate whether\n   any invariants have been broken, and thus need fixing. As an example:\n\u003c/p\u003e\u003cpre\u003e data SortedList a = SortedList (Trigger [a]) deriving (Data,Typeable)\n toSortedList xs = SortedList $ Trigger False $ sort xs\n fromSortedList (SortedList (Trigger t xs)) = if t then sort xs else xs\n\u003c/pre\u003e\u003cp\u003eThis data type represents a sorted list. When constructed the items are initially sorted,\n   but operations such as \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e could break that invariant. The \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e type is used to\n   detect when the Data operations have been performed, and resort the list.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTrigger\u003c/a\u003e\u003c/code\u003e type is often used in conjunction with \u003ccode\u003e\u003ca\u003eInvariant\u003c/a\u003e\u003c/code\u003e, which fixes the invariants.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Trigger",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Trigger",
          "type": "data"
        },
        "index": {
          "description": "The Trigger data type has Data instance which reports as being defined data Trigger Trigger However whenever gfoldl or gunfold constructs new value it will have the trigger field set to True The trigger information is useful to indicate whether any invariants have been broken and thus need fixing As an example data SortedList SortedList Trigger deriving Data Typeable toSortedList xs SortedList Trigger False sort xs fromSortedList SortedList Trigger xs if then sort xs else xs This data type represents sorted list When constructed the items are initially sorted but operations such as gmapT could break that invariant The Trigger type is used to detect when the Data operations have been performed and resort the list The Trigger type is often used in conjunction with Invariant which fixes the invariants",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Trigger",
          "package": "uniplate",
          "partial": "Trigger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#t:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Hide",
          "package": "uniplate",
          "signature": "Hide",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Hide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Hide",
          "package": "uniplate",
          "partial": "Hide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:Hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Invariant",
          "package": "uniplate",
          "signature": "Invariant",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Invariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Invariant",
          "package": "uniplate",
          "partial": "Invariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:Invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Trigger",
          "package": "uniplate",
          "signature": "Trigger",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "Trigger",
          "package": "uniplate",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromHide",
          "package": "uniplate",
          "signature": "a",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Hide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromHide",
          "package": "uniplate",
          "partial": "Hide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromHide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a value of type \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromIntMap",
          "package": "uniplate",
          "signature": "IntMap v -\u003e IntMap v",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#fromIntMap",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct value of type IntMap",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromIntMap",
          "normalized": "IntMap a-\u003eIntMap a",
          "package": "uniplate",
          "partial": "Int Map",
          "signature": "IntMap v-\u003eIntMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a value of type \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromIntSet",
          "package": "uniplate",
          "signature": "IntSet -\u003e IntSet",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#fromIntSet",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct value of type IntSet",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromIntSet",
          "normalized": "IntSet-\u003eIntSet",
          "package": "uniplate",
          "partial": "Int Set",
          "signature": "IntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromIntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromInvariant",
          "package": "uniplate",
          "signature": "a",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Invariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromInvariant",
          "package": "uniplate",
          "partial": "Invariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a value of type \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromMap",
          "package": "uniplate",
          "signature": "Map k v -\u003e Map k v",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#fromMap",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct value of type Map",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromMap",
          "normalized": "Map a b-\u003eMap a b",
          "package": "uniplate",
          "partial": "Map",
          "signature": "Map k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a value of type \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromSet",
          "package": "uniplate",
          "signature": "Set k -\u003e Set k",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#fromSet",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct value of type Set",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromSet",
          "normalized": "Set a-\u003eSet a",
          "package": "uniplate",
          "partial": "Set",
          "signature": "Set k-\u003eSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromTrigger",
          "package": "uniplate",
          "signature": "a",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "fromTrigger",
          "package": "uniplate",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:fromTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "invariant",
          "package": "uniplate",
          "signature": "a -\u003e a",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Invariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "invariant",
          "normalized": "a-\u003ea",
          "package": "uniplate",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a value of type \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toIntMap",
          "package": "uniplate",
          "signature": "IntMap v -\u003e IntMap v",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#toIntMap",
          "type": "function"
        },
        "index": {
          "description": "Construct value of type IntMap",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toIntMap",
          "normalized": "IntMap a-\u003eIntMap a",
          "package": "uniplate",
          "partial": "Int Map",
          "signature": "IntMap v-\u003eIntMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:toIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a value of type \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toIntSet",
          "package": "uniplate",
          "signature": "IntSet -\u003e IntSet",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#toIntSet",
          "type": "function"
        },
        "index": {
          "description": "Construct value of type IntSet",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toIntSet",
          "normalized": "IntSet-\u003eIntSet",
          "package": "uniplate",
          "partial": "Int Set",
          "signature": "IntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:toIntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a value of type \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toMap",
          "package": "uniplate",
          "signature": "Map k v -\u003e Map k v",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Construct value of type Map",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toMap",
          "normalized": "Map a b-\u003eMap a b",
          "package": "uniplate",
          "partial": "Map",
          "signature": "Map k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a value of type \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toSet",
          "package": "uniplate",
          "signature": "Set k -\u003e Set k",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#toSet",
          "type": "function"
        },
        "index": {
          "description": "Construct value of type Set",
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "toSet",
          "normalized": "Set a-\u003eSet a",
          "package": "uniplate",
          "partial": "Set",
          "signature": "Set k-\u003eSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:toSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "trigger",
          "package": "uniplate",
          "signature": "Bool",
          "source": "src/Data-Generics-Uniplate-Data-Instances.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data Instances",
          "module": "Data.Generics.Uniplate.Data.Instances",
          "name": "trigger",
          "package": "uniplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data-Instances.html#v:trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances for every type with a\n    \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance. Using GHC, Data can be derived automatically with:\n\u003c/p\u003e\u003cpre\u003e data Expr = Var Int | Neg Expr | Add Expr Expr\n             deriving (Data,Typeable)\n\u003c/pre\u003e\u003cp\u003eAll the Uniplate operations defined in \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e\n    can be used. If you are working with abstract data types, such as \u003ccode\u003eMap\u003c/code\u003e or \u003ccode\u003eSet\u003c/code\u003e\n    from the \u003ccode\u003econtainers\u003c/code\u003e package, you  may also need to use the data types defined\n    in \u003ca\u003eData.Generics.Uniplate.Data.Instances\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFor faster performance (5x faster, but requires writing instances) switch to\n    \u003ca\u003eData.Generics.Uniplate.Direct\u003c/a\u003e. If you get instance conflicts\n    when using both \u003ccode\u003eData\u003c/code\u003e and \u003ccode\u003eDirect\u003c/code\u003e, switch to \u003ca\u003eData.Generics.Uniplate.DataOnly\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe instances are faster than GHC because they precompute a table of useful information,\n    then use this information when performing the traversals. Sometimes it is not possible\n    to compute the table, in which case this library will perform about the same speed as\n    SYB.\n\u003c/p\u003e\u003cp\u003eSetting the environment variable \u003ccode\u003e$UNIPLATE_VERBOSE\u003c/code\u003e has the following effects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e-1\u003c/code\u003e - raise a program error every time construction of the table fails\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0\u003c/code\u003e (or unset) - never print any messages or raise any errors\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e1\u003c/code\u003e - give a message every time a table is computed\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e2\u003c/code\u003e - give a message when table computation fails\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e$UNIPLATE_VERBOSE\u003c/code\u003e environment variable must be set before the first call to uniplate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Data",
          "name": "Data",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Data.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines Uniplate Biplate instances for every type with Data instance Using GHC Data can be derived automatically with data Expr Var Int Neg Expr Add Expr Expr deriving Data Typeable All the Uniplate operations defined in Data.Generics.Uniplate.Operations can be used If you are working with abstract data types such as Map or Set from the containers package you may also need to use the data types defined in Data.Generics.Uniplate.Data.Instances For faster performance faster but requires writing instances switch to Data.Generics.Uniplate.Direct If you get instance conflicts when using both Data and Direct switch to Data.Generics.Uniplate.DataOnly The instances are faster than GHC because they precompute table of useful information then use this information when performing the traversals Sometimes it is not possible to compute the table in which case this library will perform about the same speed as SYB Setting the environment variable UNIPLATE VERBOSE has the following effects raise program error every time construction of the table fails or unset never print any messages or raise any errors give message every time table is computed give message when table computation fails The UNIPLATE VERBOSE environment variable must be set before the first call to uniplate",
          "hierarchy": "Data Generics Uniplate Data",
          "module": "Data.Generics.Uniplate.Data",
          "name": "Data",
          "package": "uniplate",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Data",
          "name": "Transformer",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Internal-Data.html#Transformer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Data",
          "module": "Data.Generics.Uniplate.Data",
          "name": "Transformer",
          "package": "uniplate",
          "partial": "Transformer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#t:Transformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a sequence of transformations in order. This function obeys the equivalence:\n\u003c/p\u003e\u003cpre\u003e transformBis [[transformer f],[transformer g],...] == transformBi f . transformBi g . ...\n\u003c/pre\u003e\u003cp\u003eEach item of type \u003ccode\u003e[Transformer]\u003c/code\u003e is applied in turn, right to left. Within each\n   \u003ccode\u003e[Transformer]\u003c/code\u003e, the individual \u003ccode\u003eTransformer\u003c/code\u003e values may be interleaved.\n\u003c/p\u003e\u003cp\u003eThe implementation will attempt to perform fusion, and avoid walking any part of the\n   data structure more than necessary. To further improve performance, you may wish to\n   partially apply the first argument, which will calculate information about the relationship\n   between the transformations.\n\u003c/p\u003e",
          "module": "[\"Data.Generics.Uniplate.Data\",\"Data.Generics.Uniplate.DataOnly\"]",
          "name": "transformBis",
          "package": "uniplate",
          "signature": "[[Transformer]] -\u003e a -\u003e a",
          "source": "src/Data-Generics-Uniplate-Internal-Data.html#transformBis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#v:transformBis\",\"http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transformBis\"]"
        },
        "index": {
          "description": "Apply sequence of transformations in order This function obeys the equivalence transformBis transformer transformer transformBi transformBi Each item of type Transformer is applied in turn right to left Within each Transformer the individual Transformer values may be interleaved The implementation will attempt to perform fusion and avoid walking any part of the data structure more than necessary To further improve performance you may wish to partially apply the first argument which will calculate information about the relationship between the transformations",
          "hierarchy": "Data Generics Uniplate Data",
          "module": "Data.Generics.Uniplate.Data",
          "name": "transformBis",
          "normalized": "[[Transformer]]-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "Bis",
          "signature": "[[Transformer]]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#v:transformBis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a \u003ccode\u003e(a -\u003e a)\u003c/code\u003e transformation function, to use with \u003ccode\u003e\u003ca\u003etransformBis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Generics.Uniplate.Data\",\"Data.Generics.Uniplate.DataOnly\"]",
          "name": "transformer",
          "package": "uniplate",
          "signature": "(a -\u003e a) -\u003e Transformer",
          "source": "src/Data-Generics-Uniplate-Internal-Data.html#transformer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#v:transformer\",\"http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transformer\"]"
        },
        "index": {
          "description": "Wrap up transformation function to use with transformBis",
          "hierarchy": "Data Generics Uniplate Data",
          "module": "Data.Generics.Uniplate.Data",
          "name": "transformer",
          "normalized": "(a-\u003ea)-\u003eTransformer",
          "package": "uniplate",
          "signature": "(a-\u003ea)-\u003eTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Data.html#v:transformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module functions identically to \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e, but instead of\n    using the standard \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e classes defined in\n    \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e it uses a local copy.\n\u003c/p\u003e\u003cp\u003eOnly use this module if you are using both \u003ccode\u003eData\u003c/code\u003e and \u003ccode\u003eDirect\u003c/code\u003e instances in\n    the same project and they are conflicting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "DataOnly",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-DataOnly.html",
          "type": "module"
        },
        "index": {
          "description": "This module functions identically to Data.Generics.Uniplate.Data but instead of using the standard Uniplate Biplate classes defined in Data.Generics.Uniplate.Operations it uses local copy Only use this module if you are using both Data and Direct instances in the same project and they are conflicting",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "DataOnly",
          "package": "uniplate",
          "partial": "Data Only",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChildren are defined as the top-most items of type to\n   \u003cem\u003estarting at the root\u003c/em\u003e. All instances must define \u003ccode\u003e\u003ca\u003ebiplate\u003c/a\u003e\u003c/code\u003e, while\n   \u003ccode\u003e\u003ca\u003edescendBi\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edescendBiM\u003c/a\u003e\u003c/code\u003e are optional.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Biplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#Biplate",
          "type": "class"
        },
        "index": {
          "description": "Children are defined as the top-most items of type to starting at the root All instances must define biplate while descendBi and descendBiM are optional",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Biplate",
          "package": "uniplate",
          "partial": "Biplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#t:Biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Transformer",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Internal-Data.html#Transformer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Transformer",
          "package": "uniplate",
          "partial": "Transformer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#t:Transformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard Uniplate class, all operations require this. All definitions must\n   define \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edescendM\u003c/a\u003e\u003c/code\u003e are optional.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Uniplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#Uniplate",
          "type": "class"
        },
        "index": {
          "description": "The standard Uniplate class all operations require this All definitions must define uniplate while descend and descendM are optional",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "Uniplate",
          "package": "uniplate",
          "partial": "Uniplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#t:Uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the top most children of type \u003ccode\u003eto\u003c/code\u003e within \u003ccode\u003efrom\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003efrom == to\u003c/code\u003e then this function should return the root as the single\n   child.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "biplate",
          "package": "uniplate",
          "signature": "from -\u003e (Str to, Str to -\u003e from)",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#biplate",
          "type": "method"
        },
        "index": {
          "description": "Return all the top most children of type to within from If from to then this function should return the root as the single child",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "biplate",
          "normalized": "a-\u003e(Str b,Str b-\u003ea)",
          "package": "uniplate",
          "signature": "from-\u003e(Str to,Str to-\u003efrom)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the direct children of a node. Usually using \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is more appropriate.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "children",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#children",
          "type": "function"
        },
        "index": {
          "description": "Get the direct children of node Usually using universe is more appropriate",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "children",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the children of a type. If \u003ccode\u003eto == from\u003c/code\u003e then it returns the\n original element (in contrast to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "childrenBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#childrenBi",
          "type": "function"
        },
        "index": {
          "description": "Return the children of type If to from then it returns the original element in contrast to children",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "childrenBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:childrenBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the contexts and holes.\n\u003c/p\u003e\u003cpre\u003e universe x == map fst (contexts x)\n all (== x) [b a | (a,b) \u003c- contexts x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "contexts",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#contexts",
          "type": "function"
        },
        "index": {
          "description": "Return all the contexts and holes universe map fst contexts all contexts",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "contexts",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "contextsBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#contextsBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "contextsBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:contextsBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a transformation on all the immediate children, then combine them back.\n   This operation allows additional information to be passed downwards, and can be\n   used to provide a top-down transformation. This function can be defined explicitly,\n   or can be provided by automatically in terms of \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, on the sample type, we could write:\n\u003c/p\u003e\u003cpre\u003e descend f (Val i  ) = Val i\n descend f (Neg a  ) = Neg (f a)\n descend f (Add a b) = Add (f a) (f b)\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descend",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#descend",
          "type": "method"
        },
        "index": {
          "description": "Perform transformation on all the immediate children then combine them back This operation allows additional information to be passed downwards and can be used to provide top-down transformation This function can be defined explicitly or can be provided by automatically in terms of uniplate For example on the sample type we could write descend Val Val descend Neg Neg descend Add Add",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descend",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e but with more general types. If \u003ccode\u003efrom == to\u003c/code\u003e then this\n   function \u003cem\u003edoes not\u003c/em\u003e descend. Therefore, when writing definitions it is\n   highly unlikely that this function should be used in the recursive case.\n   A common pattern is to first match the types using \u003ccode\u003e\u003ca\u003edescendBi\u003c/a\u003e\u003c/code\u003e, then continue\n   the recursion with \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#descendBi",
          "type": "method"
        },
        "index": {
          "description": "Like descend but with more general types If from to then this function does not descend Therefore when writing definitions it is highly unlikely that this function should be used in the recursive case common pattern is to first match the types using descendBi then continue the recursion with descend",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:descendBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#descendBiM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:descendBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#descendM",
          "type": "method"
        },
        "index": {
          "description": "Monadic variant of descend",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "descendM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:descendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe one depth version of \u003ccode\u003e\u003ca\u003econtexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e children x == map fst (holes x)\n all (== x) [b a | (a,b) \u003c- holes x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "holes",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#holes",
          "type": "function"
        },
        "index": {
          "description": "The one depth version of contexts children map fst holes all holes",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "holes",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:holes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "holesBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#holesBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "holesBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:holesBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a fold-like computation on each value,\n   technically a paramorphism\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "para",
          "package": "uniplate",
          "signature": "(on -\u003e [r] -\u003e r) -\u003e on -\u003e r",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#para",
          "type": "function"
        },
        "index": {
          "description": "Perform fold-like computation on each value technically paramorphism",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "para",
          "normalized": "(a-\u003e[b]-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "signature": "(on-\u003e[r]-\u003er)-\u003eon-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite by applying a rule everywhere you can. Ensures that the rule cannot\n be applied anywhere in the result:\n\u003c/p\u003e\u003cpre\u003e propRewrite r x = all (isNothing . r) (universe (rewrite r x))\n\u003c/pre\u003e\u003cp\u003eUsually \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e is more appropriate, but \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e can give better\n compositionality. Given two single transformations \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, you can\n construct \u003ccode\u003ef \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e which performs both rewrites until a fixed point.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewrite",
          "package": "uniplate",
          "signature": "(on -\u003e Maybe on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "Rewrite by applying rule everywhere you can Ensures that the rule cannot be applied anywhere in the result propRewrite all isNothing universe rewrite Usually transform is more appropriate but rewrite can give better compositionality Given two single transformations and you can construct mplus which performs both rewrites until fixed point",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewrite",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eMaybe on)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteBi",
          "package": "uniplate",
          "signature": "(to -\u003e Maybe to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#rewriteBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteBi",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eMaybe to)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:rewriteBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m (Maybe to)) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#rewriteBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteBiM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em(Maybe to))-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:rewriteBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteM",
          "package": "uniplate",
          "signature": "(on -\u003e m (Maybe on)) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#rewriteM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of rewrite",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "rewriteM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em(Maybe on))-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:rewriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform every element in the tree, in a bottom-up manner.\n\u003c/p\u003e\u003cp\u003eFor example, replacing negative literals with literals:\n\u003c/p\u003e\u003cpre\u003e negLits = transform f\n    where f (Neg (Lit i)) = Lit (negate i)\n          f x = x\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transform",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform every element in the tree in bottom-up manner For example replacing negative literals with literals negLits transform where Neg Lit Lit negate",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transform",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#transformBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transformBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#transformBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transformBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#transformM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of transform",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "transformM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying method in the class.\n   Taking a value, the function should return all the immediate children\n   of the same type, and a function to replace them.\n\u003c/p\u003e\u003cp\u003eGiven \u003ccode\u003euniplate x = (cs, gen)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecs\u003c/code\u003e should be a \u003ccode\u003eStr on\u003c/code\u003e, constructed of \u003ccode\u003eZero\u003c/code\u003e, \u003ccode\u003eOne\u003c/code\u003e and \u003ccode\u003eTwo\u003c/code\u003e,\n   containing all \u003ccode\u003ex\u003c/code\u003e's direct children of the same type as \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003egen\u003c/code\u003e\n   should take a \u003ccode\u003eStr on\u003c/code\u003e with exactly the same structure as \u003ccode\u003ecs\u003c/code\u003e,\n   and generate a new element with the children replaced.\n\u003c/p\u003e\u003cp\u003eExample instance:\n\u003c/p\u003e\u003cpre\u003e instance Uniplate Expr where\n     uniplate (Val i  ) = (Zero               , \\Zero                  -\u003e Val i  )\n     uniplate (Neg a  ) = (One a              , \\(One a)               -\u003e Neg a  )\n     uniplate (Add a b) = (Two (One a) (One b), \\(Two (One a) (One b)) -\u003e Add a b)\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "uniplate",
          "package": "uniplate",
          "signature": "on -\u003e (Str on, Str on -\u003e on)",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#uniplate",
          "type": "method"
        },
        "index": {
          "description": "The underlying method in the class Taking value the function should return all the immediate children of the same type and function to replace them Given uniplate cs gen cs should be Str on constructed of Zero One and Two containing all direct children of the same type as gen should take Str on with exactly the same structure as cs and generate new element with the children replaced Example instance instance Uniplate Expr where uniplate Val Zero Zero Val uniplate Neg One One Neg uniplate Add Two One One Two One One Add",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "uniplate",
          "normalized": "a-\u003e(Str a,Str a-\u003ea)",
          "package": "uniplate",
          "signature": "on-\u003e(Str on,Str on-\u003eon)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the children of a node, including itself and all children.\n\u003c/p\u003e\u003cpre\u003e universe (Add (Val 1) (Neg (Val 2))) =\n     [Add (Val 1) (Neg (Val 2)), Val 1, Neg (Val 2), Val 2]\n\u003c/pre\u003e\u003cp\u003eThis method is often combined with a list comprehension, for example:\n\u003c/p\u003e\u003cpre\u003e vals x = [i | Val i \u003c- universe x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "universe",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#universe",
          "type": "function"
        },
        "index": {
          "description": "Get all the children of node including itself and all children universe Add Val Neg Val Add Val Neg Val Val Neg Val Val This method is often combined with list comprehension for example vals Val universe",
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "universe",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "universeBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Uniplate-Internal-DataOnlyOperations.html#universeBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate DataOnly",
          "module": "Data.Generics.Uniplate.DataOnly",
          "name": "universeBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-DataOnly.html#v:universeBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies a method for writing \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances.\n    This moulde gives the highest performance, but requires many instance definitions. The\n    instances can be generated using Derive: \u003ca\u003ehttp://community.haskell.org/~ndm/derive/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo take an example:\n\u003c/p\u003e\u003cpre\u003e data Expr = Var Int | Pos Expr String | Neg Expr | Add Expr Expr\n data Stmt = Seq [Stmt] | Sel [Expr] | Let String Expr\n\n instance Uniplate Expr where\n     uniplate (Var x  ) = plate Var |- x\n     uniplate (Pos x y) = plate Pos |* x |- y\n     uniplate (Neg x  ) = plate Neg |* x\n     uniplate (Add x y) = plate Add |* x |* y\n\n instance Biplate Expr Expr where\n     biplate = plateSelf\n\n instance Uniplate Stmt where\n     uniplate (Seq x  ) = plate Seq ||* x\n     uniplate (Sel x  ) = plate Sel ||+ x\n     uniplate (Let x y) = plate Let |-  x |- y\n\n instance Biplate Stmt Stmt where\n     biplate = plateSelf\n\n instance Biplate Stmt Expr where\n     biplate (Seq x  ) = plate Seq ||+ x\n     biplate (Sel x  ) = plate Sel ||* x\n     biplate (Let x y) = plate Let |-  x |* y\n\u003c/pre\u003e\u003cp\u003eTo define instances for abstract data types, such as \u003ccode\u003eMap\u003c/code\u003e or \u003ccode\u003eSet\u003c/code\u003e from the \u003ccode\u003econtainers\u003c/code\u003e package,\n    use \u003ccode\u003e\u003ca\u003eplateProject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module provides a few monomorphic instances of \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e\n    for common types available in the base library, but does not provide any polymorphic\n    instances. Given only monomorphic instances it is trivial to ensure that all instances\n    are disjoint, making it easier to add your own instances.\n\u003c/p\u003e\u003cp\u003eWhen defining polymorphic instances, be carefully to mention all potential children.\n    Consider \u003ccode\u003eBiplate Int (Int, a)\u003c/code\u003e - this instance cannot be correct because it will fail\n    to return both \u003ccode\u003eInt\u003c/code\u003e values on \u003ccode\u003e(Int,Int)\u003c/code\u003e. There are some legitimate polymorphic instances,\n    such as \u003ccode\u003eBiplate a [a]\u003c/code\u003e and \u003ccode\u003eBiplate a a\u003c/code\u003e, but take care to avoid overlapping instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "Direct",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Direct.html",
          "type": "module"
        },
        "index": {
          "description": "This module supplies method for writing Uniplate and Biplate instances This moulde gives the highest performance but requires many instance definitions The instances can be generated using Derive http community.haskell.org ndm derive To take an example data Expr Var Int Pos Expr String Neg Expr Add Expr Expr data Stmt Seq Stmt Sel Expr Let String Expr instance Uniplate Expr where uniplate Var plate Var uniplate Pos plate Pos uniplate Neg plate Neg uniplate Add plate Add instance Biplate Expr Expr where biplate plateSelf instance Uniplate Stmt where uniplate Seq plate Seq uniplate Sel plate Sel uniplate Let plate Let instance Biplate Stmt Stmt where biplate plateSelf instance Biplate Stmt Expr where biplate Seq plate Seq biplate Sel plate Sel biplate Let plate Let To define instances for abstract data types such as Map or Set from the containers package use plateProject This module provides few monomorphic instances of Uniplate Biplate for common types available in the base library but does not provide any polymorphic instances Given only monomorphic instances it is trivial to ensure that all instances are disjoint making it easier to add your own instances When defining polymorphic instances be carefully to mention all potential children Consider Biplate Int Int this instance cannot be correct because it will fail to return both Int values on Int Int There are some legitimate polymorphic instances such as Biplate and Biplate but take care to avoid overlapping instances",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "Direct",
          "package": "uniplate",
          "partial": "Direct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is a list of the type of the target\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(||*)",
          "package": "uniplate",
          "signature": "Type ([to] -\u003e from) to -\u003e [to] -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#%7C%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is list of the type of the target",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(||*) ||*",
          "normalized": "Type([a]-\u003eb)a-\u003e[a]-\u003eType b a",
          "package": "uniplate",
          "signature": "Type([to]-\u003efrom)to-\u003e[to]-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:-124--124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is a list of types which may contain the target\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(||+)",
          "package": "uniplate",
          "signature": "Type ([item] -\u003e from) to -\u003e [item] -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#%7C%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is list of types which may contain the target",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(||+) ||+",
          "normalized": "Type([a]-\u003eb)c-\u003e[a]-\u003eType b c",
          "package": "uniplate",
          "signature": "Type([item]-\u003efrom)to-\u003e[item]-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:-124--124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right is the target.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|*)",
          "package": "uniplate",
          "signature": "Type (to -\u003e from) to -\u003e to -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "The field to the right is the target",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|*) |*",
          "normalized": "Type(a-\u003eb)a-\u003ea-\u003eType b a",
          "package": "uniplate",
          "signature": "Type(to-\u003efrom)to-\u003eto-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:-124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right may contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|+)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "The field to the right may contain the target",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|+) |+",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:-124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right \u003cem\u003edoes not\u003c/em\u003e contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|-)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#%7C-",
          "type": "function"
        },
        "index": {
          "description": "The field to the right does not contain the target",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "(|-) |-",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:-124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main combinator used to start the chain.\n\u003c/p\u003e\u003cp\u003eThe following rule can be used for optimisation:\n\u003c/p\u003e\u003cpre\u003e plate Ctor |- x == plate (Ctor x)\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plate",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#plate",
          "type": "function"
        },
        "index": {
          "description": "The main combinator used to start the chain The following rule can be used for optimisation plate Ctor plate Ctor",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plate",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "signature": "from-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:plate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an instance in terms of a projection/injection pair. Usually used to define instances\n   for abstract containers such as Map:\n\u003c/p\u003e\u003cpre\u003e instance Biplate (Map.Map [Char] Int) Char where\n     biplate = plateProject Map.toList Map.fromList\n\u003c/pre\u003e\u003cp\u003eIf the types ensure that no operations will not change the keys\n   we can use the \u003ccode\u003efromDistictAscList\u003c/code\u003e function to reconstruct the Map:\n\u003c/p\u003e\u003cpre\u003e instance Biplate (Map.Map [Char] Int) Int where\n     biplate = plateProject Map.toAscList Map.fromDistinctAscList\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plateProject",
          "package": "uniplate",
          "signature": "(from -\u003e item) -\u003e (item -\u003e from) -\u003e from -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Direct.html#plateProject",
          "type": "function"
        },
        "index": {
          "description": "Write an instance in terms of projection injection pair Usually used to define instances for abstract containers such as Map instance Biplate Map.Map Char Int Char where biplate plateProject Map.toList Map.fromList If the types ensure that no operations will not change the keys we can use the fromDistictAscList function to reconstruct the Map instance Biplate Map.Map Char Int Int where biplate plateProject Map.toAscList Map.fromDistinctAscList",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plateProject",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ea-\u003eType a c",
          "package": "uniplate",
          "partial": "Project",
          "signature": "(from-\u003eitem)-\u003e(item-\u003efrom)-\u003efrom-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:plateProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e definitions where both types are the same.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plateSelf",
          "package": "uniplate",
          "signature": "to -\u003e Type to to",
          "source": "src/Data-Generics-Uniplate-Direct.html#plateSelf",
          "type": "function"
        },
        "index": {
          "description": "Used for Biplate definitions where both types are the same",
          "hierarchy": "Data Generics Uniplate Direct",
          "module": "Data.Generics.Uniplate.Direct",
          "name": "plateSelf",
          "normalized": "a-\u003eType a a",
          "package": "uniplate",
          "partial": "Self",
          "signature": "to-\u003eType to to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Direct.html#v:plateSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e classes, along with all the standard operations.\n\u003c/p\u003e\u003cp\u003eImport this module directly only if you are defining new Uniplate operations, otherwise\nimport one of \u003ca\u003eData.Generics.Uniplate.Direct\u003c/a\u003e, \u003ca\u003eData.Generics.Uniplate.Typeable\u003c/a\u003e or\n\u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost functions have an example of a possible use for the function.\nTo illustate, I have used the \u003ccode\u003eExpr\u003c/code\u003e type as below:\n\u003c/p\u003e\u003cpre\u003e data Expr = Val Int\n           | Neg Expr\n           | Add Expr Expr\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Operations",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Operations.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions of Uniplate and Biplate classes along with all the standard operations Import this module directly only if you are defining new Uniplate operations otherwise import one of Data.Generics.Uniplate.Direct Data.Generics.Uniplate.Typeable or Data.Generics.Uniplate.Data Most functions have an example of possible use for the function To illustate have used the Expr type as below data Expr Val Int Neg Expr Add Expr Expr",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Operations",
          "package": "uniplate",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChildren are defined as the top-most items of type to\n   \u003cem\u003estarting at the root\u003c/em\u003e. All instances must define \u003ccode\u003e\u003ca\u003ebiplate\u003c/a\u003e\u003c/code\u003e, while\n   \u003ccode\u003e\u003ca\u003edescendBi\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edescendBiM\u003c/a\u003e\u003c/code\u003e are optional.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Biplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Operations.html#Biplate",
          "type": "class"
        },
        "index": {
          "description": "Children are defined as the top-most items of type to starting at the root All instances must define biplate while descendBi and descendBiM are optional",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Biplate",
          "package": "uniplate",
          "partial": "Biplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#t:Biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard Uniplate class, all operations require this. All definitions must\n   define \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edescendM\u003c/a\u003e\u003c/code\u003e are optional.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Uniplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Operations.html#Uniplate",
          "type": "class"
        },
        "index": {
          "description": "The standard Uniplate class all operations require this All definitions must define uniplate while descend and descendM are optional",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "Uniplate",
          "package": "uniplate",
          "partial": "Uniplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#t:Uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the top most children of type \u003ccode\u003eto\u003c/code\u003e within \u003ccode\u003efrom\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003efrom == to\u003c/code\u003e then this function should return the root as the single\n   child.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "biplate",
          "package": "uniplate",
          "signature": "from -\u003e (Str to, Str to -\u003e from)",
          "source": "src/Data-Generics-Uniplate-Operations.html#biplate",
          "type": "method"
        },
        "index": {
          "description": "Return all the top most children of type to within from If from to then this function should return the root as the single child",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "biplate",
          "normalized": "a-\u003e(Str b,Str b-\u003ea)",
          "package": "uniplate",
          "signature": "from-\u003e(Str to,Str to-\u003efrom)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:biplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the direct children of a node. Usually using \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is more appropriate.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "children",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate-Operations.html#children",
          "type": "function"
        },
        "index": {
          "description": "Get the direct children of node Usually using universe is more appropriate",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "children",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the children of a type. If \u003ccode\u003eto == from\u003c/code\u003e then it returns the\n original element (in contrast to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "childrenBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Uniplate-Operations.html#childrenBi",
          "type": "function"
        },
        "index": {
          "description": "Return the children of type If to from then it returns the original element in contrast to children",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "childrenBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:childrenBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the contexts and holes.\n\u003c/p\u003e\u003cpre\u003e universe x == map fst (contexts x)\n all (== x) [b a | (a,b) \u003c- contexts x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "contexts",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate-Operations.html#contexts",
          "type": "function"
        },
        "index": {
          "description": "Return all the contexts and holes universe map fst contexts all contexts",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "contexts",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "contextsBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Uniplate-Operations.html#contextsBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "contextsBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:contextsBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a transformation on all the immediate children, then combine them back.\n   This operation allows additional information to be passed downwards, and can be\n   used to provide a top-down transformation. This function can be defined explicitly,\n   or can be provided by automatically in terms of \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, on the sample type, we could write:\n\u003c/p\u003e\u003cpre\u003e descend f (Val i  ) = Val i\n descend f (Neg a  ) = Neg (f a)\n descend f (Add a b) = Add (f a) (f b)\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descend",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Operations.html#descend",
          "type": "method"
        },
        "index": {
          "description": "Perform transformation on all the immediate children then combine them back This operation allows additional information to be passed downwards and can be used to provide top-down transformation This function can be defined explicitly or can be provided by automatically in terms of uniplate For example on the sample type we could write descend Val Val descend Neg Neg descend Add Add",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descend",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e but with more general types. If \u003ccode\u003efrom == to\u003c/code\u003e then this\n   function \u003cem\u003edoes not\u003c/em\u003e descend. Therefore, when writing definitions it is\n   highly unlikely that this function should be used in the recursive case.\n   A common pattern is to first match the types using \u003ccode\u003e\u003ca\u003edescendBi\u003c/a\u003e\u003c/code\u003e, then continue\n   the recursion with \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Operations.html#descendBi",
          "type": "method"
        },
        "index": {
          "description": "Like descend but with more general types If from to then this function does not descend Therefore when writing definitions it is highly unlikely that this function should be used in the recursive case common pattern is to first match the types using descendBi then continue the recursion with descend",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:descendBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Operations.html#descendBiM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:descendBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Operations.html#descendM",
          "type": "method"
        },
        "index": {
          "description": "Monadic variant of descend",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "descendM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:descendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe one depth version of \u003ccode\u003e\u003ca\u003econtexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e children x == map fst (holes x)\n all (== x) [b a | (a,b) \u003c- holes x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "holes",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate-Operations.html#holes",
          "type": "function"
        },
        "index": {
          "description": "The one depth version of contexts children map fst holes all holes",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "holes",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:holes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "holesBi",
          "package": "uniplate",
          "signature": "from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-Uniplate-Operations.html#holesBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "holesBi",
          "normalized": "a-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:holesBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a fold-like computation on each value,\n   technically a paramorphism\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "para",
          "package": "uniplate",
          "signature": "(on -\u003e [r] -\u003e r) -\u003e on -\u003e r",
          "source": "src/Data-Generics-Uniplate-Operations.html#para",
          "type": "function"
        },
        "index": {
          "description": "Perform fold-like computation on each value technically paramorphism",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "para",
          "normalized": "(a-\u003e[b]-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "signature": "(on-\u003e[r]-\u003er)-\u003eon-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite by applying a rule everywhere you can. Ensures that the rule cannot\n be applied anywhere in the result:\n\u003c/p\u003e\u003cpre\u003e propRewrite r x = all (isNothing . r) (universe (rewrite r x))\n\u003c/pre\u003e\u003cp\u003eUsually \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e is more appropriate, but \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e can give better\n compositionality. Given two single transformations \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, you can\n construct \u003ccode\u003ef \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e which performs both rewrites until a fixed point.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewrite",
          "package": "uniplate",
          "signature": "(on -\u003e Maybe on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Operations.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "Rewrite by applying rule everywhere you can Ensures that the rule cannot be applied anywhere in the result propRewrite all isNothing universe rewrite Usually transform is more appropriate but rewrite can give better compositionality Given two single transformations and you can construct mplus which performs both rewrites until fixed point",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewrite",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eMaybe on)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteBi",
          "package": "uniplate",
          "signature": "(to -\u003e Maybe to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Operations.html#rewriteBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteBi",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eMaybe to)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:rewriteBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m (Maybe to)) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Operations.html#rewriteBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteBiM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em(Maybe to))-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:rewriteBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteM",
          "package": "uniplate",
          "signature": "(on -\u003e m (Maybe on)) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Operations.html#rewriteM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of rewrite",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "rewriteM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em(Maybe on))-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:rewriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform every element in the tree, in a bottom-up manner.\n\u003c/p\u003e\u003cp\u003eFor example, replacing negative literals with literals:\n\u003c/p\u003e\u003cpre\u003e negLits = transform f\n    where f (Neg (Lit i)) = Lit (negate i)\n          f x = x\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transform",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate-Operations.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform every element in the tree in bottom-up manner For example replacing negative literals with literals negLits transform where Neg Lit Lit negate",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transform",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformBi",
          "package": "uniplate",
          "signature": "(to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-Uniplate-Operations.html#transformBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformBi",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:transformBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformBiM",
          "package": "uniplate",
          "signature": "(to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-Uniplate-Operations.html#transformBiM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformBiM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:transformBiM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate-Operations.html#transformM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of transform",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "transformM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying method in the class.\n   Taking a value, the function should return all the immediate children\n   of the same type, and a function to replace them.\n\u003c/p\u003e\u003cp\u003eGiven \u003ccode\u003euniplate x = (cs, gen)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecs\u003c/code\u003e should be a \u003ccode\u003eStr on\u003c/code\u003e, constructed of \u003ccode\u003eZero\u003c/code\u003e, \u003ccode\u003eOne\u003c/code\u003e and \u003ccode\u003eTwo\u003c/code\u003e,\n   containing all \u003ccode\u003ex\u003c/code\u003e's direct children of the same type as \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003egen\u003c/code\u003e\n   should take a \u003ccode\u003eStr on\u003c/code\u003e with exactly the same structure as \u003ccode\u003ecs\u003c/code\u003e,\n   and generate a new element with the children replaced.\n\u003c/p\u003e\u003cp\u003eExample instance:\n\u003c/p\u003e\u003cpre\u003e instance Uniplate Expr where\n     uniplate (Val i  ) = (Zero               , \\Zero                  -\u003e Val i  )\n     uniplate (Neg a  ) = (One a              , \\(One a)               -\u003e Neg a  )\n     uniplate (Add a b) = (Two (One a) (One b), \\(Two (One a) (One b)) -\u003e Add a b)\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "uniplate",
          "package": "uniplate",
          "signature": "on -\u003e (Str on, Str on -\u003e on)",
          "source": "src/Data-Generics-Uniplate-Operations.html#uniplate",
          "type": "method"
        },
        "index": {
          "description": "The underlying method in the class Taking value the function should return all the immediate children of the same type and function to replace them Given uniplate cs gen cs should be Str on constructed of Zero One and Two containing all direct children of the same type as gen should take Str on with exactly the same structure as cs and generate new element with the children replaced Example instance instance Uniplate Expr where uniplate Val Zero Zero Val uniplate Neg One One Neg uniplate Add Two One One Two One One Add",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "uniplate",
          "normalized": "a-\u003e(Str a,Str a-\u003ea)",
          "package": "uniplate",
          "signature": "on-\u003e(Str on,Str on-\u003eon)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the children of a node, including itself and all children.\n\u003c/p\u003e\u003cpre\u003e universe (Add (Val 1) (Neg (Val 2))) =\n     [Add (Val 1) (Neg (Val 2)), Val 1, Neg (Val 2), Val 2]\n\u003c/pre\u003e\u003cp\u003eThis method is often combined with a list comprehension, for example:\n\u003c/p\u003e\u003cpre\u003e vals x = [i | Val i \u003c- universe x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "universe",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate-Operations.html#universe",
          "type": "function"
        },
        "index": {
          "description": "Get all the children of node including itself and all children universe Add Val Neg Val Add Val Neg Val Val Neg Val Val This method is often combined with list comprehension for example vals Val universe",
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "universe",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Uniplate.Operations",
          "name": "universeBi",
          "package": "uniplate",
          "signature": "from -\u003e [to]",
          "source": "src/Data-Generics-Uniplate-Operations.html#universeBi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Uniplate Operations",
          "module": "Data.Generics.Uniplate.Operations",
          "name": "universeBi",
          "normalized": "a-\u003e[b]",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Operations.html#v:universeBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eRECOMMENDATION:\u003c/em\u003e Use \u003ca\u003eData.Generics.Uniplate.Data\u003c/a\u003e instead - it usually performs\n    faster (sometimes significantly so) and requires no special instance declarations.\n\u003c/p\u003e\u003cp\u003eThis module supplies a method for writing \u003ccode\u003e\u003ca\u003eUniplate\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eBiplate\u003c/a\u003e\u003c/code\u003e instances. One\n    instance declaration is required for each data type you wish to work with. The\n    instances can be generated using Derive: \u003ca\u003ehttp://community.haskell.org/~ndm/derive/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo take an example:\n\u003c/p\u003e\u003cpre\u003e data Expr = Var Int | Neg Expr | Add Expr Expr\n             deriving Typeable\n\n instance (Typeable a, Uniplate a) =\u003e PlateAll Expr a where\n     plateAll (Var x  ) = plate Var |+ x\n     plateAll (Neg x  ) = plate Neg |+ x\n     plateAll (Add x y) = plate Add |+ x |+ y\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "Typeable",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Typeable.html",
          "type": "module"
        },
        "index": {
          "description": "RECOMMENDATION Use Data.Generics.Uniplate.Data instead it usually performs faster sometimes significantly so and requires no special instance declarations This module supplies method for writing Uniplate Biplate instances One instance declaration is required for each data type you wish to work with The instances can be generated using Derive http community.haskell.org ndm derive To take an example data Expr Var Int Neg Expr Add Expr Expr deriving Typeable instance Typeable Uniplate PlateAll Expr where plateAll Var plate Var plateAll Neg plate Neg plateAll Add plate Add",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "Typeable",
          "package": "uniplate",
          "partial": "Typeable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class should be defined for each data type of interest.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "PlateAll",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Typeable.html#PlateAll",
          "type": "class"
        },
        "index": {
          "description": "This class should be defined for each data type of interest",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "PlateAll",
          "package": "uniplate",
          "partial": "Plate All",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#t:PlateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right may contain the target.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "(|+)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Typeable.html#%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "The field to the right may contain the target",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "(|+) |+",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#v:-124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field to the right \u003cem\u003edoes not\u003c/em\u003e contain the target.\n   This can be used as either an optimisation, or more commonly for excluding\n   primitives such as Int.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "(|-)",
          "package": "uniplate",
          "signature": "Type (item -\u003e from) to -\u003e item -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Typeable.html#%7C-",
          "type": "function"
        },
        "index": {
          "description": "The field to the right does not contain the target This can be used as either an optimisation or more commonly for excluding primitives such as Int",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "(|-) |-",
          "normalized": "Type(a-\u003eb)c-\u003ea-\u003eType b c",
          "package": "uniplate",
          "signature": "Type(item-\u003efrom)to-\u003eitem-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#v:-124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main combinator used to start the chain.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plate",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Typeable.html#plate",
          "type": "function"
        },
        "index": {
          "description": "The main combinator used to start the chain",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plate",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "signature": "from-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#v:plate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method should be defined using \u003ccode\u003e\u003ca\u003eplate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e|+\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e|-\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plateAll",
          "package": "uniplate",
          "signature": "from -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Typeable.html#plateAll",
          "type": "method"
        },
        "index": {
          "description": "This method should be defined using plate and",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plateAll",
          "normalized": "a-\u003eType a b",
          "package": "uniplate",
          "partial": "All",
          "signature": "from-\u003eType from to",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#v:plateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an instance in terms of a projection/injection pair. Usually used to define instances\n   for abstract containers such as Map:\n\u003c/p\u003e\u003cpre\u003e instance (Ord a, Typeable a, PlateAll a c, Typeable b, PlateAll b c,\n          Typeable c, PlateAll c c) =\u003e PlateAll (Map.Map a b) c where\n     plateAll = plateProject Map.toList Map.fromList\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plateProject",
          "package": "uniplate",
          "signature": "(from -\u003e item) -\u003e (item -\u003e from) -\u003e from -\u003e Type from to",
          "source": "src/Data-Generics-Uniplate-Typeable.html#plateProject",
          "type": "function"
        },
        "index": {
          "description": "Write an instance in terms of projection injection pair Usually used to define instances for abstract containers such as Map instance Ord Typeable PlateAll Typeable PlateAll Typeable PlateAll PlateAll Map.Map where plateAll plateProject Map.toList Map.fromList",
          "hierarchy": "Data Generics Uniplate Typeable",
          "module": "Data.Generics.Uniplate.Typeable",
          "name": "plateProject",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ea-\u003eType a c",
          "package": "uniplate",
          "partial": "Project",
          "signature": "(from-\u003eitem)-\u003e(item-\u003efrom)-\u003efrom-\u003eType from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Typeable.html#v:plateProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA zipper is a structure for walking a value and manipulating it in constant time.\n\u003c/p\u003e\u003cp\u003eThis module was inspired by the paper:\n\u003cem\u003eMichael D. Adams. Scrap Your Zippers: A Generic Zipper for Heterogeneous Types, Workshop on Generic Programming 2010\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "Zipper",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Zipper.html",
          "type": "module"
        },
        "index": {
          "description": "zipper is structure for walking value and manipulating it in constant time This module was inspired by the paper Michael Adams Scrap Your Zippers Generic Zipper for Heterogeneous Types Workshop on Generic Programming",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "Zipper",
          "package": "uniplate",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipper structure, whose root type is the first type argument, and whose\n   focus type is the second type argument.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "Zipper",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "Zipper structure whose root type is the first type argument and whose focus type is the second type argument",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "Zipper",
          "package": "uniplate",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove one step down from the current position.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "down",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e Maybe (Zipper from to)",
          "source": "src/Data-Generics-Uniplate-Zipper.html#down",
          "type": "function"
        },
        "index": {
          "description": "Move one step down from the current position",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "down",
          "normalized": "Zipper a b-\u003eMaybe(Zipper a b)",
          "package": "uniplate",
          "signature": "Zipper from to-\u003eMaybe(Zipper from to)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a zipper take the whole structure, including any modifications.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "fromZipper",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e from",
          "source": "src/Data-Generics-Uniplate-Zipper.html#fromZipper",
          "type": "function"
        },
        "index": {
          "description": "From zipper take the whole structure including any modifications",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "fromZipper",
          "normalized": "Zipper a b-\u003ea",
          "package": "uniplate",
          "partial": "Zipper",
          "signature": "Zipper from to-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:fromZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current focus of the zipper..\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "hole",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e to",
          "source": "src/Data-Generics-Uniplate-Zipper.html#hole",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current focus of the zipper",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "hole",
          "normalized": "Zipper a b-\u003eb",
          "package": "uniplate",
          "signature": "Zipper from to-\u003eto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:hole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove one step left from the current position.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "left",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e Maybe (Zipper from to)",
          "source": "src/Data-Generics-Uniplate-Zipper.html#left",
          "type": "function"
        },
        "index": {
          "description": "Move one step left from the current position",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "left",
          "normalized": "Zipper a b-\u003eMaybe(Zipper a b)",
          "package": "uniplate",
          "signature": "Zipper from to-\u003eMaybe(Zipper from to)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the value currently at the focus of the zipper.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "replaceHole",
          "package": "uniplate",
          "signature": "to -\u003e Zipper from to -\u003e Zipper from to",
          "source": "src/Data-Generics-Uniplate-Zipper.html#replaceHole",
          "type": "function"
        },
        "index": {
          "description": "Replace the value currently at the focus of the zipper",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "replaceHole",
          "normalized": "a-\u003eZipper b a-\u003eZipper b a",
          "package": "uniplate",
          "partial": "Hole",
          "signature": "to-\u003eZipper from to-\u003eZipper from to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:replaceHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove one step right from the current position.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "right",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e Maybe (Zipper from to)",
          "source": "src/Data-Generics-Uniplate-Zipper.html#right",
          "type": "function"
        },
        "index": {
          "description": "Move one step right from the current position",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "right",
          "normalized": "Zipper a b-\u003eMaybe(Zipper a b)",
          "package": "uniplate",
          "signature": "Zipper from to-\u003eMaybe(Zipper from to)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove one step up from the current position.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "up",
          "package": "uniplate",
          "signature": "Zipper from to -\u003e Maybe (Zipper from to)",
          "source": "src/Data-Generics-Uniplate-Zipper.html#up",
          "type": "function"
        },
        "index": {
          "description": "Move one step up from the current position",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "up",
          "normalized": "Zipper a b-\u003eMaybe(Zipper a b)",
          "package": "uniplate",
          "signature": "Zipper from to-\u003eMaybe(Zipper from to)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zipper, focused on the top-left value.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "zipper",
          "package": "uniplate",
          "signature": "to -\u003e Zipper to to",
          "source": "src/Data-Generics-Uniplate-Zipper.html#zipper",
          "type": "function"
        },
        "index": {
          "description": "Create zipper focused on the top-left value",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "zipper",
          "normalized": "a-\u003eZipper a a",
          "package": "uniplate",
          "signature": "to-\u003eZipper to to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zipper with a different focus type from the outer type. Will return\n   \u003ccode\u003eNothing\u003c/code\u003e if there are no instances of the focus type within the original value.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "zipperBi",
          "package": "uniplate",
          "signature": "from -\u003e Maybe (Zipper from to)",
          "source": "src/Data-Generics-Uniplate-Zipper.html#zipperBi",
          "type": "function"
        },
        "index": {
          "description": "Create zipper with different focus type from the outer type Will return Nothing if there are no instances of the focus type within the original value",
          "hierarchy": "Data Generics Uniplate Zipper",
          "module": "Data.Generics.Uniplate.Zipper",
          "name": "zipperBi",
          "normalized": "a-\u003eMaybe(Zipper a b)",
          "package": "uniplate",
          "partial": "Bi",
          "signature": "from-\u003eMaybe(Zipper from to)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate-Zipper.html#v:zipperBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e Use \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis is the main Uniplate module, which defines all the essential operations\nin a Haskell 98 compatible manner.\n\u003c/p\u003e\u003cp\u003eMost functions have an example of a possible use for the function.\nTo illustate, I have used the \u003ccode\u003eExpr\u003c/code\u003e type as below:\n\u003c/p\u003e\u003cpre\u003e data Expr = Val Int\n           | Neg Expr\n           | Add Expr Expr\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "Uniplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate.html",
          "type": "module"
        },
        "index": {
          "description": "DEPRECATED Use Data.Generics.Uniplate.Operations instead This is the main Uniplate module which defines all the essential operations in Haskell compatible manner Most functions have an example of possible use for the function To illustate have used the Expr type as below data Expr Val Int Neg Expr Add Expr Expr",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "Uniplate",
          "package": "uniplate",
          "partial": "Uniplate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard Uniplate class, all operations require this\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "Uniplate",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate.html#Uniplate",
          "type": "class"
        },
        "index": {
          "description": "The standard Uniplate class all operations require this",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "Uniplate",
          "package": "uniplate",
          "partial": "Uniplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#t:Uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of replacing all the children of a node\n\u003c/p\u003e\u003cp\u003eTaking a value, the function should return all the immediate children\n   of the same type, and a function to replace them.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "UniplateType",
          "package": "uniplate",
          "source": "src/Data-Generics-Uniplate.html#UniplateType",
          "type": "type"
        },
        "index": {
          "description": "The type of replacing all the children of node Taking value the function should return all the immediate children of the same type and function to replace them",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "UniplateType",
          "package": "uniplate",
          "partial": "Uniplate Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#t:UniplateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the direct children of a node. Usually using \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is more appropriate.\n\u003c/p\u003e\u003cpre\u003echildren = fst . \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "children",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate.html#children",
          "type": "function"
        },
        "index": {
          "description": "Get the direct children of node Usually using universe is more appropriate children fst uniplate",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "children",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the contexts and holes.\n\u003c/p\u003e\u003cpre\u003e propUniverse x = universe x == map fst (contexts x)\n propId x = all (== x) [b a | (a,b) \u003c- contexts x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "contexts",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate.html#contexts",
          "type": "function"
        },
        "index": {
          "description": "Return all the contexts and holes propUniverse universe map fst contexts propId all contexts",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "contexts",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a transformation on all the immediate children, then combine them back.\n This operation allows additional information to be passed downwards, and can be\n used to provide a top-down transformation.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "descend",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate.html#descend",
          "type": "function"
        },
        "index": {
          "description": "Perform transformation on all the immediate children then combine them back This operation allows additional information to be passed downwards and can be used to provide top-down transformation",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "descend",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e    \n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "descendM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate.html#descendM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of descend",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "descendM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:descendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe one depth version of \u003ccode\u003e\u003ca\u003econtexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e propChildren x = children x == map fst (holes x)\n propId x = all (== x) [b a | (a,b) \u003c- holes x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "holes",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-Uniplate.html#holes",
          "type": "function"
        },
        "index": {
          "description": "The one depth version of contexts propChildren children map fst holes propId all holes",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "holes",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:holes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a fold-like computation on each value,\n   technically a paramorphism\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "para",
          "package": "uniplate",
          "signature": "(on -\u003e [r] -\u003e r) -\u003e on -\u003e r",
          "source": "src/Data-Generics-Uniplate.html#para",
          "type": "function"
        },
        "index": {
          "description": "Perform fold-like computation on each value technically paramorphism",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "para",
          "normalized": "(a-\u003e[b]-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "signature": "(on-\u003e[r]-\u003er)-\u003eon-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite by applying a rule everywhere you can. Ensures that the rule cannot\n be applied anywhere in the result:\n\u003c/p\u003e\u003cpre\u003e propRewrite r x = all (isNothing . r) (universe (rewrite r x))\n\u003c/pre\u003e\u003cp\u003eUsually \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e is more appropriate, but \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e can give better\n compositionality. Given two single transformations \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, you can\n construct \u003ccode\u003ef \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e which performs both rewrites until a fixed point.\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "rewrite",
          "package": "uniplate",
          "signature": "(on -\u003e Maybe on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "Rewrite by applying rule everywhere you can Ensures that the rule cannot be applied anywhere in the result propRewrite all isNothing universe rewrite Usually transform is more appropriate but rewrite can give better compositionality Given two single transformations and you can construct mplus which performs both rewrites until fixed point",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "rewrite",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eMaybe on)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "rewriteM",
          "package": "uniplate",
          "signature": "(on -\u003e m (Maybe on)) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate.html#rewriteM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of rewrite",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "rewriteM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em(Maybe on))-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:rewriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform every element in the tree, in a bottom-up manner.\n\u003c/p\u003e\u003cp\u003eFor example, replacing negative literals with literals:\n\u003c/p\u003e\u003cpre\u003e negLits = transform f\n    where f (Neg (Lit i)) = Lit (negate i)\n          f x = x\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "transform",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-Uniplate.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform every element in the tree in bottom-up manner For example replacing negative literals with literals negLits transform where Neg Lit Lit negate",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "transform",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "transformM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-Uniplate.html#transformM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of transform",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "transformM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying method in the class\n\u003c/p\u003e\u003cpre\u003e uniplate (Add (Val 1) (Neg (Val 2))) = ([Val 1, Neg (Val 2)], \\[a,b] -\u003e Add a b)\n uniplate (Val 1)                     = ([]                  , \\[]    -\u003e Val 1  )\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "uniplate",
          "package": "uniplate",
          "signature": "UniplateType on",
          "source": "src/Data-Generics-Uniplate.html#uniplate",
          "type": "method"
        },
        "index": {
          "description": "The underlying method in the class uniplate Add Val Neg Val Val Neg Val Add uniplate Val Val",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "uniplate",
          "package": "uniplate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the children of a node, including itself and all children.\n\u003c/p\u003e\u003cpre\u003e universe (Add (Val 1) (Neg (Val 2))) =\n     [Add (Val 1) (Neg (Val 2)), Val 1, Neg (Val 2), Val 2]\n\u003c/pre\u003e\u003cp\u003eThis method is often combined with a list comprehension, for example:\n\u003c/p\u003e\u003cpre\u003e vals x = [i | Val i \u003c- universe x]\n\u003c/pre\u003e",
          "module": "Data.Generics.Uniplate",
          "name": "universe",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-Uniplate.html#universe",
          "type": "function"
        },
        "index": {
          "description": "Get all the children of node including itself and all children universe Add Val Neg Val Add Val Neg Val Val Neg Val Val This method is often combined with list comprehension for example vals Val universe",
          "hierarchy": "Data Generics Uniplate",
          "module": "Data.Generics.Uniplate",
          "name": "universe",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-Uniplate.html#v:universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis module retained Haskell 98 compatability, but users who are happy with\nmulti-parameter type classes should look towards \u003ca\u003eData.Generics.Biplate\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe only function missing from \u003ca\u003eData.Generics.Uniplate\u003c/a\u003e is \u003ccode\u003efold\u003c/code\u003e, as it can be\nconstructed from \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e and has little meaning in a multi-typed setting.\n\u003c/p\u003e\u003cp\u003eAll operations, apart from \u003ccode\u003e\u003ca\u003echildrenOn\u003c/a\u003e\u003c/code\u003e should perform identically to their non \u003ccode\u003eOn\u003c/code\u003e\ncounterparts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.UniplateOn",
          "name": "UniplateOn",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateOn.html",
          "type": "module"
        },
        "index": {
          "description": "DEPRECATED Use Data.Generics.Uniplate.Operations instead This module retained Haskell compatability but users who are happy with multi-parameter type classes should look towards Data.Generics.Biplate The only function missing from Data.Generics.Uniplate is fold as it can be constructed from children and has little meaning in multi-typed setting All operations apart from childrenOn should perform identically to their non On counterparts",
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "UniplateOn",
          "package": "uniplate",
          "partial": "Uniplate On",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the top most children of type \u003ccode\u003eto\u003c/code\u003e within \u003ccode\u003efrom\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003efrom == to\u003c/code\u003e then this function should return the root as the single\n child.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateOn",
          "name": "BiplateType",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateOn.html#BiplateType",
          "type": "type"
        },
        "index": {
          "description": "Return all the top most children of type to within from If from to then this function should return the root as the single child",
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "BiplateType",
          "package": "uniplate",
          "partial": "Biplate Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#t:BiplateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the children of a type. If \u003ccode\u003eto == from\u003c/code\u003e then it returns the\n original element (in contrast to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateOn",
          "name": "childrenOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [to]",
          "source": "src/Data-Generics-UniplateOn.html#childrenOn",
          "type": "function"
        },
        "index": {
          "description": "Return the children of type If to from then it returns the original element in contrast to children",
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "childrenOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[b]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:childrenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "contextsOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-UniplateOn.html#contextsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "contextsOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:contextsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "descendOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateOn.html#descendOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "descendOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:descendOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "descendOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateOn.html#descendOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "descendOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:descendOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "holesOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-UniplateOn.html#holesOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "holesOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:holesOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "rewriteOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e Maybe to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateOn.html#rewriteOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "rewriteOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eMaybe b)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eMaybe to)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:rewriteOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "rewriteOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m (Maybe to)) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateOn.html#rewriteOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "rewriteOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec(Maybe b))-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em(Maybe to))-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:rewriteOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "transformOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateOn.html#transformOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "transformOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:transformOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "transformOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateOn.html#transformOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "transformOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:transformOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for defining instances \u003ccode\u003eUniplateFoo a =\u003e UniplateFoo [a]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateOn",
          "name": "uniplateOnList",
          "package": "uniplate",
          "signature": "BiplateType a b -\u003e BiplateType [a] b",
          "source": "src/Data-Generics-UniplateOn.html#uniplateOnList",
          "type": "function"
        },
        "index": {
          "description": "Used for defining instances UniplateFoo UniplateFoo",
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "uniplateOnList",
          "normalized": "BiplateType a b-\u003eBiplateType[a]b",
          "package": "uniplate",
          "partial": "On List",
          "signature": "BiplateType a b-\u003eBiplateType[a]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:uniplateOnList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateOn",
          "name": "universeOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [to]",
          "source": "src/Data-Generics-UniplateOn.html#universeOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateOn",
          "module": "Data.Generics.UniplateOn",
          "name": "universeOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[b]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateOn.html#v:universeOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis is the main Uniplate module, which defines all the essential operations\nin a Haskell 98 compatible manner.\n\u003c/p\u003e\u003cp\u003eMost functions have an example of a possible use for the function.\nTo illustate, I have used the \u003ccode\u003eExpr\u003c/code\u003e type as below:\n\u003c/p\u003e\u003cpre\u003e data Expr = Val Int\n           | Neg Expr\n           | Add Expr Expr\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "UniplateStr",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateStr.html",
          "type": "module"
        },
        "index": {
          "description": "DEPRECATED Use Data.Generics.Uniplate.Operations instead This is the main Uniplate module which defines all the essential operations in Haskell compatible manner Most functions have an example of possible use for the function To illustate have used the Expr type as below data Expr Val Int Neg Expr Add Expr Expr",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "UniplateStr",
          "package": "uniplate",
          "partial": "Uniplate Str",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard Uniplate class, all operations require this.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "Uniplate",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateStr.html#Uniplate",
          "type": "class"
        },
        "index": {
          "description": "The standard Uniplate class all operations require this",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "Uniplate",
          "package": "uniplate",
          "partial": "Uniplate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#t:Uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of replacing all the children of a node\n\u003c/p\u003e\u003cp\u003eTaking a value, the function should return all the immediate children\n   of the same type, and a function to replace them.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "UniplateType",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateStr.html#UniplateType",
          "type": "type"
        },
        "index": {
          "description": "The type of replacing all the children of node Taking value the function should return all the immediate children of the same type and function to replace them",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "UniplateType",
          "package": "uniplate",
          "partial": "Uniplate Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#t:UniplateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the direct children of a node. Usually using \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is more appropriate.\n\u003c/p\u003e\u003cpre\u003echildren = fst . \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "children",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-UniplateStr.html#children",
          "type": "function"
        },
        "index": {
          "description": "Get the direct children of node Usually using universe is more appropriate children fst uniplate",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "children",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the contexts and holes.\n\u003c/p\u003e\u003cpre\u003e propUniverse x = universe x == map fst (contexts x)\n propId x = all (== x) [b a | (a,b) \u003c- contexts x]\n\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "contexts",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-UniplateStr.html#contexts",
          "type": "function"
        },
        "index": {
          "description": "Return all the contexts and holes propUniverse universe map fst contexts propId all contexts",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "contexts",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a transformation on all the immediate children, then combine them back.\n This operation allows additional information to be passed downwards, and can be\n used to provide a top-down transformation.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "descend",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-UniplateStr.html#descend",
          "type": "function"
        },
        "index": {
          "description": "Perform transformation on all the immediate children then combine them back This operation allows additional information to be passed downwards and can be used to provide top-down transformation",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "descend",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003edescend\u003c/a\u003e\u003c/code\u003e    \n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "descendM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-UniplateStr.html#descendM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of descend",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "descendM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:descendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe one depth version of \u003ccode\u003e\u003ca\u003econtexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e propChildren x = children x == map fst (holes x)\n propId x = all (== x) [b a | (a,b) \u003c- holes x]\n\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "holes",
          "package": "uniplate",
          "signature": "on -\u003e [(on, on -\u003e on)]",
          "source": "src/Data-Generics-UniplateStr.html#holes",
          "type": "function"
        },
        "index": {
          "description": "The one depth version of contexts propChildren children map fst holes propId all holes",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "holes",
          "normalized": "a-\u003e[(a,a-\u003ea)]",
          "package": "uniplate",
          "signature": "on-\u003e[(on,on-\u003eon)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:holes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a fold-like computation on each value,\n   technically a paramorphism\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "para",
          "package": "uniplate",
          "signature": "(on -\u003e [r] -\u003e r) -\u003e on -\u003e r",
          "source": "src/Data-Generics-UniplateStr.html#para",
          "type": "function"
        },
        "index": {
          "description": "Perform fold-like computation on each value technically paramorphism",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "para",
          "normalized": "(a-\u003e[b]-\u003eb)-\u003ea-\u003eb",
          "package": "uniplate",
          "signature": "(on-\u003e[r]-\u003er)-\u003eon-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite by applying a rule everywhere you can. Ensures that the rule cannot\n be applied anywhere in the result:\n\u003c/p\u003e\u003cpre\u003e propRewrite r x = all (isNothing . r) (universe (rewrite r x))\n\u003c/pre\u003e\u003cp\u003eUsually \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e is more appropriate, but \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e can give better\n compositionality. Given two single transformations \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, you can\n construct \u003ccode\u003ef \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e which performs both rewrites until a fixed point.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "rewrite",
          "package": "uniplate",
          "signature": "(on -\u003e Maybe on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-UniplateStr.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "Rewrite by applying rule everywhere you can Ensures that the rule cannot be applied anywhere in the result propRewrite all isNothing universe rewrite Usually transform is more appropriate but rewrite can give better compositionality Given two single transformations and you can construct mplus which performs both rewrites until fixed point",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "rewrite",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eMaybe on)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003erewrite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "rewriteM",
          "package": "uniplate",
          "signature": "(on -\u003e m (Maybe on)) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-UniplateStr.html#rewriteM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of rewrite",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "rewriteM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em(Maybe on))-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:rewriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform every element in the tree, in a bottom-up manner.\n\u003c/p\u003e\u003cp\u003eFor example, replacing negative literals with literals:\n\u003c/p\u003e\u003cpre\u003e negLits = transform f\n    where f (Neg (Lit i)) = Lit (negate i)\n          f x = x\n\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "transform",
          "package": "uniplate",
          "signature": "(on -\u003e on) -\u003e on -\u003e on",
          "source": "src/Data-Generics-UniplateStr.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform every element in the tree in bottom-up manner For example replacing negative literals with literals negLits transform where Neg Lit Lit negate",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "transform",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "uniplate",
          "signature": "(on-\u003eon)-\u003eon-\u003eon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "transformM",
          "package": "uniplate",
          "signature": "(on -\u003e m on) -\u003e on -\u003e m on",
          "source": "src/Data-Generics-UniplateStr.html#transformM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of transform",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "transformM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "uniplate",
          "signature": "(on-\u003em on)-\u003eon-\u003em on",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying method in the class.\n\u003c/p\u003e\u003cp\u003eGiven \u003ccode\u003euniplate x = (cs, gen)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecs\u003c/code\u003e should be a \u003ccode\u003eStr on\u003c/code\u003e, constructed of \u003ccode\u003eZero\u003c/code\u003e, \u003ccode\u003eOne\u003c/code\u003e and \u003ccode\u003eTwo\u003c/code\u003e,\n   containing all \u003ccode\u003ex\u003c/code\u003e's direct children of the same type as \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003egen\u003c/code\u003e\n   should take a \u003ccode\u003eStr on\u003c/code\u003e with exactly the same structure as \u003ccode\u003ecs\u003c/code\u003e,\n   and generate a new element with the children replaced.\n\u003c/p\u003e\u003cp\u003eExample instance:\n\u003c/p\u003e\u003cpre\u003e instance Uniplate Expr where\n     uniplate (Val i  ) = (Zero               , \\Zero                  -\u003e Val i  )\n     uniplate (Neg a  ) = (One a              , \\(One a)               -\u003e Neg a  )\n     uniplate (Add a b) = (Two (One a) (One b), \\(Two (One a) (One b)) -\u003e Add a b)\n\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "uniplate",
          "package": "uniplate",
          "signature": "UniplateType on",
          "source": "src/Data-Generics-UniplateStr.html#uniplate",
          "type": "method"
        },
        "index": {
          "description": "The underlying method in the class Given uniplate cs gen cs should be Str on constructed of Zero One and Two containing all direct children of the same type as gen should take Str on with exactly the same structure as cs and generate new element with the children replaced Example instance instance Uniplate Expr where uniplate Val Zero Zero Val uniplate Neg One One Neg uniplate Add Two One One Two One One Add",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "uniplate",
          "package": "uniplate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:uniplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility method, for direct users of the old list-based \u003ccode\u003e\u003ca\u003euniplate\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "uniplateList",
          "package": "uniplate",
          "signature": "on -\u003e ([on], [on] -\u003e on)",
          "source": "src/Data-Generics-UniplateStr.html#uniplateList",
          "type": "function"
        },
        "index": {
          "description": "Compatibility method for direct users of the old list-based uniplate function",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "uniplateList",
          "normalized": "a-\u003e([a],[a]-\u003ea)",
          "package": "uniplate",
          "partial": "List",
          "signature": "on-\u003e([on],[on]-\u003eon)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:uniplateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the children of a node, including itself and all children.\n\u003c/p\u003e\u003cpre\u003e universe (Add (Val 1) (Neg (Val 2))) =\n     [Add (Val 1) (Neg (Val 2)), Val 1, Neg (Val 2), Val 2]\n\u003c/pre\u003e\u003cp\u003eThis method is often combined with a list comprehension, for example:\n\u003c/p\u003e\u003cpre\u003e vals x = [i | Val i \u003c- universe x]\n\u003c/pre\u003e",
          "module": "Data.Generics.UniplateStr",
          "name": "universe",
          "package": "uniplate",
          "signature": "on -\u003e [on]",
          "source": "src/Data-Generics-UniplateStr.html#universe",
          "type": "function"
        },
        "index": {
          "description": "Get all the children of node including itself and all children universe Add Val Neg Val Add Val Neg Val Val Neg Val Val This method is often combined with list comprehension for example vals Val universe",
          "hierarchy": "Data Generics UniplateStr",
          "module": "Data.Generics.UniplateStr",
          "name": "universe",
          "normalized": "a-\u003e[a]",
          "package": "uniplate",
          "signature": "on-\u003e[on]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStr.html#v:universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDEPRECATED\u003c/em\u003e: Use \u003ca\u003eData.Generics.Uniplate.Operations\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis module retained Haskell 98 compatability, but users who are happy with\nmulti-parameter type classes should look towards \u003ca\u003eData.Generics.Biplate\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe only function missing from \u003ca\u003eData.Generics.Uniplate\u003c/a\u003e is \u003ccode\u003efold\u003c/code\u003e, as it can be\nconstructed from \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e and has little meaning in a multi-typed setting.\n\u003c/p\u003e\u003cp\u003eAll operations, apart from \u003ccode\u003e\u003ca\u003echildrenOn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edescendOn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eholesOn\u003c/a\u003e\u003c/code\u003e should perform\nidentically to their non \u003ccode\u003eOn\u003c/code\u003e counterparts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.UniplateStrOn",
          "name": "UniplateStrOn",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateStrOn.html",
          "type": "module"
        },
        "index": {
          "description": "DEPRECATED Use Data.Generics.Uniplate.Operations instead This module retained Haskell compatability but users who are happy with multi-parameter type classes should look towards Data.Generics.Biplate The only function missing from Data.Generics.Uniplate is fold as it can be constructed from children and has little meaning in multi-typed setting All operations apart from childrenOn descendOn and holesOn should perform identically to their non On counterparts",
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "UniplateStrOn",
          "package": "uniplate",
          "partial": "Uniplate Str On",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the top most children of type \u003ccode\u003eto\u003c/code\u003e within \u003ccode\u003efrom\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003efrom == to\u003c/code\u003e then this function should return the root as the single\n child.\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStrOn",
          "name": "BiplateType",
          "package": "uniplate",
          "source": "src/Data-Generics-UniplateStrOn.html#BiplateType",
          "type": "type"
        },
        "index": {
          "description": "Return all the top most children of type to within from If from to then this function should return the root as the single child",
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "BiplateType",
          "package": "uniplate",
          "partial": "Biplate Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#t:BiplateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the children of a type. If \u003ccode\u003eto == from\u003c/code\u003e then it returns the\n original element (in contrast to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStrOn",
          "name": "childrenOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [to]",
          "source": "src/Data-Generics-UniplateStrOn.html#childrenOn",
          "type": "function"
        },
        "index": {
          "description": "Return the children of type If to from then it returns the original element in contrast to children",
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "childrenOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[b]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:childrenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "contextsOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-UniplateStrOn.html#contextsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "contextsOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:contextsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "descendOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateStrOn.html#descendOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "descendOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:descendOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "descendOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateStrOn.html#descendOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "descendOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:descendOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "holesOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [(to, to -\u003e from)]",
          "source": "src/Data-Generics-UniplateStrOn.html#holesOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "holesOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[(b,b-\u003ea)]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[(to,to-\u003efrom)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:holesOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "rewriteOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e Maybe to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateStrOn.html#rewriteOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "rewriteOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eMaybe b)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eMaybe to)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:rewriteOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "rewriteOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m (Maybe to)) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateStrOn.html#rewriteOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "rewriteOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec(Maybe b))-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em(Maybe to))-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:rewriteOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "transformOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e to) -\u003e from -\u003e from",
          "source": "src/Data-Generics-UniplateStrOn.html#transformOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "transformOn",
          "normalized": "BiplateType a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003eto)-\u003efrom-\u003efrom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:transformOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "transformOnM",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e (to -\u003e m to) -\u003e from -\u003e m from",
          "source": "src/Data-Generics-UniplateStrOn.html#transformOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "transformOnM",
          "normalized": "BiplateType a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003e(to-\u003em to)-\u003efrom-\u003em from",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:transformOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for defining instances \u003ccode\u003eUniplateFoo a =\u003e UniplateFoo [a]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.UniplateStrOn",
          "name": "uniplateOnList",
          "package": "uniplate",
          "signature": "BiplateType a b -\u003e BiplateType [a] b",
          "source": "src/Data-Generics-UniplateStrOn.html#uniplateOnList",
          "type": "function"
        },
        "index": {
          "description": "Used for defining instances UniplateFoo UniplateFoo",
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "uniplateOnList",
          "normalized": "BiplateType a b-\u003eBiplateType[a]b",
          "package": "uniplate",
          "partial": "On List",
          "signature": "BiplateType a b-\u003eBiplateType[a]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:uniplateOnList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.UniplateStrOn",
          "name": "universeOn",
          "package": "uniplate",
          "signature": "BiplateType from to -\u003e from -\u003e [to]",
          "source": "src/Data-Generics-UniplateStrOn.html#universeOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics UniplateStrOn",
          "module": "Data.Generics.UniplateStrOn",
          "name": "universeOn",
          "normalized": "BiplateType a b-\u003ea-\u003e[b]",
          "package": "uniplate",
          "partial": "On",
          "signature": "BiplateType from to-\u003efrom-\u003e[to]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniplate/docs/Data-Generics-UniplateStrOn.html#v:universeOn"
      }
    }
  ]
]