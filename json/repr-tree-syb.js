[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#",
      "description": {
        "fct-module": "ReprTree",
        "fct-package": "repr-tree-syb",
        "fct-signature": "module",
        "fct-source": "src/ReprTree.html",
        "fct-type": "module",
        "title": "ReprTree"
      },
      "index": {
        "description": "",
        "hierarchy": "ReprTree",
        "module": "ReprTree",
        "name": "ReprTree",
        "normalized": "",
        "package": "repr-tree-syb",
        "partial": "Repr Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#v:reprTree",
      "description": {
        "fct-descr": "\u003cp\u003eGet a representation tree of a generic data structure using SYB. Can be \n used to implement a custom converter to textual representation.\n\u003c/p\u003e",
        "fct-module": "ReprTree",
        "fct-package": "repr-tree-syb",
        "fct-signature": "a -\u003e Tree String",
        "fct-source": "src/ReprTree.html#reprTree",
        "fct-type": "function",
        "title": "reprTree"
      },
      "index": {
        "description": "Get representation tree of generic data structure using SYB Can be used to implement custom converter to textual representation",
        "hierarchy": "ReprTree",
        "module": "ReprTree",
        "name": "reprTree",
        "normalized": "a-\u003eTree String",
        "package": "repr-tree-syb",
        "partial": "Tree",
        "signature": "a-\u003eTree String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#v:reprTreeString",
      "description": {
        "fct-descr": "\u003cp\u003eA data representation in form of a formatted multiline string, such as\n the following:\n\u003c/p\u003e\u003cpre\u003e\n :\n - A\n | - :\n | | - a\n | | - b\n | | - c\n | - 9\n - C\n | - 3\n - B\n - D\n   - :\n     - :\n     | - asdf\n     | - 123\n     | - ldskfjkl\n     - :\n       - f\n\u003c/pre\u003e\u003cp\u003eWhich is a result of running the following code:\n\u003c/p\u003e\u003cpre\u003e import Data.Generics (Data, Typeable)\n\n data SomeType = \n   A [String] Int | \n   B | \n   C Int | \n   D [[String]]\n   deriving (Typeable, Data)\n \n xxx = A [\"a\", \"b\", \"c\"] 9 \n     : C 3 \n     : B \n     : D [[\"asdf\", \"123\", \"ldskfjkl\"], [\"f\"]]\n     : []\n \n main = putStrLn $ reprTreeString xxx\n\u003c/pre\u003e",
        "fct-module": "ReprTree",
        "fct-package": "repr-tree-syb",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/ReprTree.html#reprTreeString",
        "fct-type": "function",
        "title": "reprTreeString"
      },
      "index": {
        "description": "data representation in form of formatted multiline string such as the following asdf ldskfjkl Which is result of running the following code import Data.Generics Data Typeable data SomeType String Int Int String deriving Typeable Data xxx asdf ldskfjkl main putStrLn reprTreeString xxx",
        "hierarchy": "ReprTree",
        "module": "ReprTree",
        "name": "reprTreeString",
        "normalized": "a-\u003eString",
        "package": "repr-tree-syb",
        "partial": "Tree String",
        "signature": "a-\u003eString"
      }
    }
  }
]