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
        "word": "treeviz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "source": "src/Data-Newtypes-PrettyDouble.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Newtypes PrettyDouble",
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "partial": "Pretty Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Newtypes-PrettyDouble.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "source": "src/Data-Newtypes-PrettyDouble.html#PrettyDouble",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Newtypes PrettyDouble",
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "partial": "Pretty Double",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Newtypes-PrettyDouble.html#t:PrettyDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "signature": "PrettyDouble",
          "source": "src/Data-Newtypes-PrettyDouble.html#PrettyDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Newtypes PrettyDouble",
          "module": "Data.Newtypes.PrettyDouble",
          "name": "PrettyDouble",
          "package": "treeviz",
          "partial": "Pretty Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Newtypes-PrettyDouble.html#v:PrettyDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtypes.PrettyDouble",
          "name": "uglyDouble",
          "package": "treeviz",
          "signature": "Double",
          "source": "src/Data-Newtypes-PrettyDouble.html#PrettyDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Newtypes PrettyDouble",
          "module": "Data.Newtypes.PrettyDouble",
          "name": "uglyDouble",
          "package": "treeviz",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Newtypes-PrettyDouble.html#v:uglyDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "LogTree",
          "package": "treeviz",
          "source": "src/Data-Tree-LogTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "LogTree",
          "package": "treeviz",
          "partial": "Log Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree builder\n\u003c/p\u003e\u003cp\u003eExample:\n   tree  = buildTree newFFTTree tData\n\u003c/p\u003e",
          "module": "Data.Tree.LogTree",
          "name": "buildTree",
          "package": "treeviz",
          "signature": "TreeData a -\u003e Either String t",
          "source": "src/Data-Tree-LogTree.html#buildTree",
          "type": "function"
        },
        "index": {
          "description": "Tree builder Example tree buildTree newFFTTree tData",
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "buildTree",
          "normalized": "TreeData a-\u003eEither String b",
          "package": "treeviz",
          "partial": "Tree",
          "signature": "TreeData a-\u003eEither String t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:buildTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "coProd",
          "package": "treeviz",
          "signature": "[a] -\u003e t -\u003e ([a], t)",
          "source": "src/Data-Tree-LogTree.html#coProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "coProd",
          "normalized": "[a]-\u003eb-\u003e([a],b)",
          "package": "treeviz",
          "partial": "Prod",
          "signature": "[a]-\u003et-\u003e([a],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:coProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a GenericLogTree to a GraphViz dot diagram.\n\u003c/p\u003e",
          "module": "Data.Tree.LogTree",
          "name": "dotLogTree",
          "package": "treeviz",
          "signature": "Either String t -\u003e (String, String)",
          "source": "src/Data-Tree-LogTree.html#dotLogTree",
          "type": "function"
        },
        "index": {
          "description": "Converts GenericLogTree to GraphViz dot diagram",
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "dotLogTree",
          "normalized": "Either String a-\u003e(String,String)",
          "package": "treeviz",
          "partial": "Log Tree",
          "signature": "Either String t-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:dotLogTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "getEval",
          "package": "treeviz",
          "signature": "Either t (GenericLogTree a) -\u003e [a]",
          "source": "src/Data-Tree-LogTree.html#getEval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "getEval",
          "normalized": "Either a(GenericLogTree b)-\u003e[b]",
          "package": "treeviz",
          "partial": "Eval",
          "signature": "Either t(GenericLogTree a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:getEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "getFlatten",
          "package": "treeviz",
          "signature": "Either t (Tree a) -\u003e [a]",
          "source": "src/Data-Tree-LogTree.html#getFlatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "getFlatten",
          "normalized": "Either a(Tree b)-\u003e[b]",
          "package": "treeviz",
          "partial": "Flatten",
          "signature": "Either t(Tree a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:getFlatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "getLevels",
          "package": "treeviz",
          "signature": "Either t (Tree a) -\u003e [[a]]",
          "source": "src/Data-Tree-LogTree.html#getLevels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "getLevels",
          "normalized": "Either a(Tree b)-\u003e[[b]]",
          "package": "treeviz",
          "partial": "Levels",
          "signature": "Either t(Tree a)-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:getLevels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "modes",
          "package": "treeviz",
          "signature": "TreeData a -\u003e [(Int, Bool)]",
          "source": "src/Data-Tree-LogTree.html#modes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "modes",
          "normalized": "TreeData a-\u003e[(Int,Bool)]",
          "package": "treeviz",
          "signature": "TreeData a-\u003e[(Int,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:modes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a tree builder suitable for constructing Fast Fourier Transform\n   (FFT) decomposition trees of arbitrary radices and either decimation\n   style (i.e. - DIT or DIF).\n\u003c/p\u003e",
          "module": "Data.Tree.LogTree",
          "name": "newFFTTree",
          "package": "treeviz",
          "signature": "TreeBuilder FFTTree",
          "source": "src/Data-Tree-LogTree.html#newFFTTree",
          "type": "function"
        },
        "index": {
          "description": "Returns tree builder suitable for constructing Fast Fourier Transform FFT decomposition trees of arbitrary radices and either decimation style i.e DIT or DIF",
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "newFFTTree",
          "package": "treeviz",
          "partial": "FFTTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:newFFTTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a data structure suitable for passing to a tree constructor.\n\u003c/p\u003e\u003cp\u003eExample:\n    tData = newTreeData [(2, False), (2, False)] [1.0, 0.0, 0.0, 0.0]\n\u003c/p\u003e\u003cp\u003eNote) For now, all booleans in the list should contain\n      the same value, either True or False.\n\u003c/p\u003e",
          "module": "Data.Tree.LogTree",
          "name": "newTreeData",
          "package": "treeviz",
          "signature": "[(Int, Bool)]-\u003e [a]-\u003e TreeData a",
          "type": "function"
        },
        "index": {
          "description": "Build data structure suitable for passing to tree constructor Example tData newTreeData False False Note For now all booleans in the list should contain the same value either True or False",
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "newTreeData",
          "normalized": "[(Int,Bool)]-\u003e[a]-\u003eTreeData a",
          "package": "treeviz",
          "partial": "Tree Data",
          "signature": "[(Int,Bool)]-\u003e[a]-\u003eTreeData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:newTreeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.LogTree",
          "name": "values",
          "package": "treeviz",
          "signature": "TreeData a -\u003e [a]",
          "source": "src/Data-Tree-LogTree.html#values",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree LogTree",
          "module": "Data.Tree.LogTree",
          "name": "values",
          "normalized": "TreeData a-\u003e[a]",
          "package": "treeviz",
          "signature": "TreeData a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/treeviz/docs/Data-Tree-LogTree.html#v:values"
      }
    }
  ]
]