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
        "word": "th-fold"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is \"very old\" code and I'd like to clean it up, but it more or less\n  works so it's a pretty low priority right now.\n\u003c/p\u003e\u003cp\u003eMy apologies for inflicting this code upon the world ( ;-) ), but I\n did not see anything else \"out there\", so I figured I'd provide\n a seed crystal around which something better might form.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Fold",
          "name": "Fold",
          "package": "th-fold",
          "source": "src/Language-Haskell-TH-Fold.html",
          "type": "module"
        },
        "index": {
          "description": "This is very old code and like to clean it up but it more or less works so it pretty low priority right now My apologies for inflicting this code upon the world but did not see anything else out there so figured provide seed crystal around which something better might form",
          "hierarchy": "Language Haskell TH Fold",
          "module": "Language.Haskell.TH.Fold",
          "name": "Fold",
          "package": "th-fold",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-fold/docs/Language-Haskell-TH-Fold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a very basic fold operation given the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e of a type\n constructor.  Data constructors of the specified type become function\n parameters to the fold, in the same order the type defines them.  Simple\n recursive references in the type's constructors become recursive calls to\n the fold.\n\u003c/p\u003e\u003cp\u003eAt present this only properly handles very simple types.\n Basically, that means types that have no parameters, types with one parameter\n where the only recursion is via field slots with types of the form 'T a'\n where \u003ccode\u003ea\u003c/code\u003e is the type of the parameter, and more complicated types without\n recursion.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Fold",
          "name": "fold",
          "package": "th-fold",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Language-Haskell-TH-Fold.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Generate very basic fold operation given the Name of type constructor Data constructors of the specified type become function parameters to the fold in the same order the type defines them Simple recursive references in the type constructors become recursive calls to the fold At present this only properly handles very simple types Basically that means types that have no parameters types with one parameter where the only recursion is via field slots with types of the form where is the type of the parameter and more complicated types without recursion",
          "hierarchy": "Language Haskell TH Fold",
          "module": "Language.Haskell.TH.Fold",
          "name": "fold",
          "normalized": "Name-\u003eExpQ",
          "package": "th-fold",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-fold/docs/Language-Haskell-TH-Fold.html#v:fold"
      }
    }
  ]
]