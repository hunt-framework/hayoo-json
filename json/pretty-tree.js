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
        "word": "pretty-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eData.Tree\u003c/a\u003e exports \u003ccode\u003e\u003ca\u003edrawTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrawForest\u003c/a\u003e\u003c/code\u003e, which provide 2D\npretty-printing of rose-trees, but in a left-to-right fashion.\n\u003c/p\u003e\u003cp\u003eThe functions here draw trees more \"naturally\" in a top-down fashion.\n\u003c/p\u003e\u003cp\u003eFor example, consider the following tree:\n\u003c/p\u003e\u003cpre\u003e tree :: Tree String\n tree = Node \"hello\" [ Node \"foo\" []\n                     , Node \"bars\" [ Node \"oi!\" []\n                                   , Node \"baz\" [ Node \"a\" [ Node \"b\" []\n                                                           , Node \"c\" []]\n                                                , Node \"d\" [ Node \"e\" []]]]\n                     , Node \"foobar\" []]\n\u003c/pre\u003e\u003cp\u003eComparing \u003ccode\u003e\u003ca\u003edrawTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrawVerticalTree\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ drawTree tree\n\u003c/code\u003e\u003c/strong\u003ehello\n|\n+- foo\n|\n+- bars\n|  |\n|  +- oi!\n|  |\n|  `- baz\n|     |\n|     +- a\n|     |  |\n|     |  +- b\n|     |  |\n|     |  `- c\n|     |\n|     `- d\n|        |\n|        `- e\n|\n`- foobar\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ drawVerticalTree\n\u003c/code\u003e\u003c/strong\u003e          hello\n            |\n  -------------------\n /        |          \\\nfoo      bars      foobar\n          |\n       ------\n      /      \\\n     oi!    baz\n             |\n            ----\n           /    \\\n           a    d\n           |    |\n           --   e\n          /  \\\n          b  c\n\u003c/pre\u003e\u003cp\u003eAlso consider the \u003ccode\u003eDiagrams.TwoD.Layout.Tree\u003c/code\u003e module from\n\u003cem\u003ediagrams-contrib\u003c/em\u003e for actual image rendering of rose-trees:\n\u003ca\u003ehttp://hackage.haskell.org/package/diagrams-contrib\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tree.Pretty",
          "name": "Pretty",
          "package": "pretty-tree",
          "source": "src/Data-Tree-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Data.Tree exports drawTree and drawForest which provide pretty-printing of rose-trees but in left-to-right fashion The functions here draw trees more naturally in top-down fashion For example consider the following tree tree Tree String tree Node hello Node foo Node bars Node oi Node baz Node Node Node Node Node Node foobar Comparing drawTree and drawVerticalTree putStrLn drawTree tree hello foo bars oi baz foobar putStrLn drawVerticalTree hello foo bars foobar oi baz Also consider the Diagrams.TwoD.Layout.Tree module from diagrams-contrib for actual image rendering of rose-trees http hackage.haskell.org package diagrams-contrib",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "Pretty",
          "package": "pretty-tree",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the gap to use.  It is recommended that you use a\n   value \u003ccode\u003e\u003e=2\u003c/code\u003e for best results (with \u003ccode\u003e2\u003c/code\u003e being the default).\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "Width",
          "package": "pretty-tree",
          "source": "src/Data-Tree-Pretty.html#Width",
          "type": "type"
        },
        "index": {
          "description": "The size of the gap to use It is recommended that you use value for best results with being the default",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "Width",
          "package": "pretty-tree",
          "partial": "Width",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Pretty",
          "name": "defaultGap",
          "package": "pretty-tree",
          "signature": "Width",
          "source": "src/Data-Tree-Pretty.html#defaultGap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "defaultGap",
          "package": "pretty-tree",
          "partial": "Gap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:defaultGap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a forest with each tree being top-down.\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalForest",
          "package": "pretty-tree",
          "signature": "Forest String -\u003e String",
          "source": "src/Data-Tree-Pretty.html#drawVerticalForest",
          "type": "function"
        },
        "index": {
          "description": "Draw forest with each tree being top-down",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalForest",
          "normalized": "Forest String-\u003eString",
          "package": "pretty-tree",
          "partial": "Vertical Forest",
          "signature": "Forest String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a forest with each tree being top-down and the specified\n    horizontal gap between trees.\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalForestWith",
          "package": "pretty-tree",
          "signature": "Width -\u003e Forest String -\u003e String",
          "source": "src/Data-Tree-Pretty.html#drawVerticalForestWith",
          "type": "function"
        },
        "index": {
          "description": "Draw forest with each tree being top-down and the specified horizontal gap between trees",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalForestWith",
          "normalized": "Width-\u003eForest String-\u003eString",
          "package": "pretty-tree",
          "partial": "Vertical Forest With",
          "signature": "Width-\u003eForest String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalForestWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tree top-down.\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalTree",
          "package": "pretty-tree",
          "signature": "Tree String -\u003e String",
          "source": "src/Data-Tree-Pretty.html#drawVerticalTree",
          "type": "function"
        },
        "index": {
          "description": "Draw tree top-down",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalTree",
          "normalized": "Tree String-\u003eString",
          "package": "pretty-tree",
          "partial": "Vertical Tree",
          "signature": "Tree String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tree top-down using the specified gap between sub-trees.\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalTreeWith",
          "package": "pretty-tree",
          "signature": "Width -\u003e Tree String -\u003e String",
          "source": "src/Data-Tree-Pretty.html#drawVerticalTreeWith",
          "type": "function"
        },
        "index": {
          "description": "Draw tree top-down using the specified gap between sub-trees",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "drawVerticalTreeWith",
          "normalized": "Width-\u003eTree String-\u003eString",
          "package": "pretty-tree",
          "partial": "Vertical Tree With",
          "signature": "Width-\u003eTree String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:drawVerticalTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is exported in case you want to do further pretty-printing\n   using \u003ca\u003eText.PrettyPrint.Boxes\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.Pretty",
          "name": "treeToBox",
          "package": "pretty-tree",
          "signature": "Width -\u003e Tree String -\u003e Box",
          "source": "src/Data-Tree-Pretty.html#treeToBox",
          "type": "function"
        },
        "index": {
          "description": "This is exported in case you want to do further pretty-printing using Text.PrettyPrint.Boxes",
          "hierarchy": "Data Tree Pretty",
          "module": "Data.Tree.Pretty",
          "name": "treeToBox",
          "normalized": "Width-\u003eTree String-\u003eBox",
          "package": "pretty-tree",
          "partial": "To Box",
          "signature": "Width-\u003eTree String-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-tree/docs/Data-Tree-Pretty.html#v:treeToBox"
      }
    }
  ]
]