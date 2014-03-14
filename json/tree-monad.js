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
        "word": "tree-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell library provides an implementation of the MonadPlus\n type class that represents the search space as a tree whose\n constructors represent mzero, return, and mplus.\n\u003c/p\u003e\u003cp\u003eSuch a tree can be used to implement different search strategies,\n e.g., by using a queue. It can also be used as a basis for parallel\n search strategies that evaluate different parts of the search space\n concurrently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.SearchTree",
          "name": "SearchTree",
          "package": "tree-monad",
          "source": "src/Control-Monad-SearchTree.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell library provides an implementation of the MonadPlus type class that represents the search space as tree whose constructors represent mzero return and mplus Such tree can be used to implement different search strategies e.g by using queue It can also be used as basis for parallel search strategies that evaluate different parts of the search space concurrently",
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "SearchTree",
          "package": "tree-monad",
          "partial": "Search Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother search monad based on continuations that produce search\n trees.\n\u003c/p\u003e",
          "module": "Control.Monad.SearchTree",
          "name": "Search",
          "package": "tree-monad",
          "source": "src/Control-Monad-SearchTree.html#Search",
          "type": "data"
        },
        "index": {
          "description": "Another search monad based on continuations that produce search trees",
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "Search",
          "package": "tree-monad",
          "partial": "Search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#t:Search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eSearchTree a\u003c/code\u003e represents non-deterministic computations\n as a tree structure.\n\u003c/p\u003e",
          "module": "Control.Monad.SearchTree",
          "name": "SearchTree",
          "package": "tree-monad",
          "source": "src/Control-Monad-SearchTree.html#SearchTree",
          "type": "data"
        },
        "index": {
          "description": "The type SearchTree represents non-deterministic computations as tree structure",
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "SearchTree",
          "package": "tree-monad",
          "partial": "Search Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#t:SearchTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.SearchTree",
          "name": "Choice",
          "package": "tree-monad",
          "signature": "Choice (SearchTree a) (SearchTree a)",
          "source": "src/Control-Monad-SearchTree.html#SearchTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "Choice",
          "package": "tree-monad",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#v:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.SearchTree",
          "name": "None",
          "package": "tree-monad",
          "signature": "None",
          "source": "src/Control-Monad-SearchTree.html#SearchTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "None",
          "package": "tree-monad",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.SearchTree",
          "name": "One",
          "package": "tree-monad",
          "signature": "One a",
          "source": "src/Control-Monad-SearchTree.html#SearchTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "One",
          "package": "tree-monad",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the \u003ccode\u003eSearchTree\u003c/code\u003e representation of a \u003ccode\u003eSearch\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Control.Monad.SearchTree",
          "name": "searchTree",
          "package": "tree-monad",
          "signature": "Search a -\u003e SearchTree a",
          "source": "src/Control-Monad-SearchTree.html#searchTree",
          "type": "function"
        },
        "index": {
          "description": "Computes the SearchTree representation of Search action",
          "hierarchy": "Control Monad SearchTree",
          "module": "Control.Monad.SearchTree",
          "name": "searchTree",
          "normalized": "Search a-\u003eSearchTree a",
          "package": "tree-monad",
          "partial": "Tree",
          "signature": "Search a-\u003eSearchTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-monad/docs/Control-Monad-SearchTree.html#v:searchTree"
      }
    }
  ]
]