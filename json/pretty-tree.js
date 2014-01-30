[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eData.Tree\u003c/a\u003e exports \u003ccode\u003e\u003ca\u003edrawTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrawForest\u003c/a\u003e\u003c/code\u003e, which provide 2D\npretty-printing of rose-trees, but in a left-to-right fashion.\n\u003c/p\u003e\u003cp\u003eThe functions here draw trees more \"naturally\" in a top-down fashion.\n\u003c/p\u003e\u003cp\u003eFor example, consider the following tree:\n\u003c/p\u003e\u003cpre\u003e tree :: Tree String\n tree = Node \"hello\" [ Node \"foo\" []\n                     , Node \"bars\" [ Node \"oi!\" []\n                                   , Node \"baz\" [ Node \"a\" [ Node \"b\" []\n                                                           , Node \"c\" []]\n                                                , Node \"d\" [ Node \"e\" []]]]\n                     , Node \"foobar\" []]\n\u003c/pre\u003e\u003cp\u003eComparing \u003ccode\u003e\u003ca\u003edrawTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrawVerticalTree\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ drawTree tree\n\u003c/code\u003e\u003c/strong\u003ehello\n|\n+- foo\n|\n+- bars\n|  |\n|  +- oi!\n|  |\n|  `- baz\n|     |\n|     +- a\n|     |  |\n|     |  +- b\n|     |  |\n|     |  `- c\n|     |\n|     `- d\n|        |\n|        `- e\n|\n`- foobar\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ drawVerticalTree\n\u003c/code\u003e\u003c/strong\u003e          hello\n            |\n  -------------------\n /        |          \\\nfoo      bars      foobar\n          |\n       ------\n      /      \\\n     oi!    baz\n             |\n            ----\n           /    \\\n           a    d\n           |    |\n           --   e\n          /  \\\n          b  c\n\u003c/pre\u003e\u003cp\u003eAlso consider the \u003ccode\u003eDiagrams.TwoD.Layout.Tree\u003c/code\u003e module from\n\u003cem\u003ediagrams-contrib\u003c/em\u003e for actual image rendering of rose-trees:\n\u003ca\u003ehttp://hackage.haskell.org/package/diagrams-contrib\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "module",
        "fct-source": "src/Data-Tree-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Data.Tree exports drawTree and drawForest which provide pretty-printing of rose-trees but in left-to-right fashion The functions here draw trees more naturally in top-down fashion For example consider the following tree tree Tree String tree Node hello Node foo Node bars Node oi Node baz Node Node Node Node Node Node foobar Comparing drawTree and drawVerticalTree putStrLn drawTree tree hello foo bars oi baz foobar putStrLn drawVerticalTree hello foo bars foobar oi baz Also consider the Diagrams.TwoD.Layout.Tree module from diagrams-contrib for actual image rendering of rose-trees http hackage.haskell.org package diagrams-contrib",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "pretty-tree",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#t:Width",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the gap to use.  It is recommended that you use a\n   value \u003ccode\u003e\u003e=2\u003c/code\u003e for best results (with \u003ccode\u003e2\u003c/code\u003e being the default).\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "type",
        "fct-source": "src/Data-Tree-Pretty.html#Width",
        "fct-type": "type",
        "title": "Width"
      },
      "index": {
        "description": "The size of the gap to use It is recommended that you use value for best results with being the default",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "Width",
        "normalized": "",
        "package": "pretty-tree",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:defaultGap",
      "description": {
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Width",
        "fct-source": "src/Data-Tree-Pretty.html#defaultGap",
        "fct-type": "function",
        "title": "defaultGap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "defaultGap",
        "normalized": "",
        "package": "pretty-tree",
        "partial": "Gap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalForest",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a forest with each tree being top-down.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Forest String -\u003e String",
        "fct-source": "src/Data-Tree-Pretty.html#drawVerticalForest",
        "fct-type": "function",
        "title": "drawVerticalForest"
      },
      "index": {
        "description": "Draw forest with each tree being top-down",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "drawVerticalForest",
        "normalized": "Forest String-\u003eString",
        "package": "pretty-tree",
        "partial": "Vertical Forest",
        "signature": "Forest String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalForestWith",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a forest with each tree being top-down and the specified\n    horizontal gap between trees.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Width -\u003e Forest String -\u003e String",
        "fct-source": "src/Data-Tree-Pretty.html#drawVerticalForestWith",
        "fct-type": "function",
        "title": "drawVerticalForestWith"
      },
      "index": {
        "description": "Draw forest with each tree being top-down and the specified horizontal gap between trees",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "drawVerticalForestWith",
        "normalized": "Width-\u003eForest String-\u003eString",
        "package": "pretty-tree",
        "partial": "Vertical Forest With",
        "signature": "Width-\u003eForest String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalTree",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tree top-down.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Tree String -\u003e String",
        "fct-source": "src/Data-Tree-Pretty.html#drawVerticalTree",
        "fct-type": "function",
        "title": "drawVerticalTree"
      },
      "index": {
        "description": "Draw tree top-down",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "drawVerticalTree",
        "normalized": "Tree String-\u003eString",
        "package": "pretty-tree",
        "partial": "Vertical Tree",
        "signature": "Tree String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalTreeWith",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tree top-down using the specified gap between sub-trees.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Width -\u003e Tree String -\u003e String",
        "fct-source": "src/Data-Tree-Pretty.html#drawVerticalTreeWith",
        "fct-type": "function",
        "title": "drawVerticalTreeWith"
      },
      "index": {
        "description": "Draw tree top-down using the specified gap between sub-trees",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "drawVerticalTreeWith",
        "normalized": "Width-\u003eTree String-\u003eString",
        "package": "pretty-tree",
        "partial": "Vertical Tree With",
        "signature": "Width-\u003eTree String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:treeToBox",
      "description": {
        "fct-descr": "\u003cp\u003eThis is exported in case you want to do further pretty-printing\n   using \u003ca\u003eText.PrettyPrint.Boxes\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Pretty",
        "fct-package": "pretty-tree",
        "fct-signature": "Width -\u003e Tree String -\u003e Box",
        "fct-source": "src/Data-Tree-Pretty.html#treeToBox",
        "fct-type": "function",
        "title": "treeToBox"
      },
      "index": {
        "description": "This is exported in case you want to do further pretty-printing using Text.PrettyPrint.Boxes",
        "hierarchy": "Data Tree Pretty",
        "module": "Data.Tree.Pretty",
        "name": "treeToBox",
        "normalized": "Width-\u003eTree String-\u003eBox",
        "package": "pretty-tree",
        "partial": "To Box",
        "signature": "Width-\u003eTree String-\u003eBox"
      }
    }
  }
]