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
        "word": "repr-tree-syb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ReprTree",
          "name": "ReprTree",
          "package": "repr-tree-syb",
          "source": "src/ReprTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ReprTree",
          "module": "ReprTree",
          "name": "ReprTree",
          "package": "repr-tree-syb",
          "partial": "Repr Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a representation tree of a generic data structure using SYB. Can be \n used to implement a custom converter to textual representation.\n\u003c/p\u003e",
          "module": "ReprTree",
          "name": "reprTree",
          "package": "repr-tree-syb",
          "signature": "a -\u003e Tree String",
          "source": "src/ReprTree.html#reprTree",
          "type": "function"
        },
        "index": {
          "description": "Get representation tree of generic data structure using SYB Can be used to implement custom converter to textual representation",
          "hierarchy": "ReprTree",
          "module": "ReprTree",
          "name": "reprTree",
          "normalized": "a-\u003eTree String",
          "package": "repr-tree-syb",
          "partial": "Tree",
          "signature": "a-\u003eTree String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#v:reprTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data representation in form of a formatted multiline string, such as\n the following:\n\u003c/p\u003e\u003cpre\u003e\n :\n - A\n | - :\n | | - a\n | | - b\n | | - c\n | - 9\n - C\n | - 3\n - B\n - D\n   - :\n     - :\n     | - asdf\n     | - 123\n     | - ldskfjkl\n     - :\n       - f\n\u003c/pre\u003e\u003cp\u003eWhich is a result of running the following code:\n\u003c/p\u003e\u003cpre\u003e import Data.Generics (Data, Typeable)\n\n data SomeType = \n   A [String] Int | \n   B | \n   C Int | \n   D [[String]]\n   deriving (Typeable, Data)\n \n xxx = A [\"a\", \"b\", \"c\"] 9 \n     : C 3 \n     : B \n     : D [[\"asdf\", \"123\", \"ldskfjkl\"], [\"f\"]]\n     : []\n \n main = putStrLn $ reprTreeString xxx\n\u003c/pre\u003e",
          "module": "ReprTree",
          "name": "reprTreeString",
          "package": "repr-tree-syb",
          "signature": "a -\u003e String",
          "source": "src/ReprTree.html#reprTreeString",
          "type": "function"
        },
        "index": {
          "description": "data representation in form of formatted multiline string such as the following asdf ldskfjkl Which is result of running the following code import Data.Generics Data Typeable data SomeType String Int Int String deriving Typeable Data xxx asdf ldskfjkl main putStrLn reprTreeString xxx",
          "hierarchy": "ReprTree",
          "module": "ReprTree",
          "name": "reprTreeString",
          "normalized": "a-\u003eString",
          "package": "repr-tree-syb",
          "partial": "Tree String",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repr-tree-syb/docs/ReprTree.html#v:reprTreeString"
      }
    }
  ]
]