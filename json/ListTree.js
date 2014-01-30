[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for iterating trees.\n A \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e whose underlying monad is also a \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e is a tree.\n\u003c/p\u003e\u003cp\u003eIt's nodes are accessible, in contrast to the list monad,\n which can also be seen as a tree, except only its leafs\n are accessible and only in \u003ca\u003edfs order\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans.List.Funcs (repeatM)\n import Data.List.Class (genericTake, scanl, takeWhile, toList, lastL)\n import Prelude hiding (scanl, takeWhile)\n\n appendToEnd xs x = xs ++ [x]\n bits = scanl appendToEnd [] (repeatM \"01\")\n\n \u003e take 3 (bfsLayers bits)\n [[\"\"],[\"0\",\"1\"],[\"00\",\"01\",\"10\",\"11\"]]\n\n \u003e take 10 (bfs bits)\n [\"\",\"0\",\"1\",\"00\",\"01\",\"10\",\"11\",\"000\",\"001\",\"010\"]\n\n \u003e dfs (genericTake 4 bits)\n [\"\",\"0\",\"00\",\"000\",\"001\",\"01\",\"010\",\"011\",\"1\",\"10\",\"100\",\"101\",\"11\",\"110\",\"111\"]\n\n \u003e toList $ genericTake 3 bits\n [[\"\",\"0\",\"00\"],[\"\",\"0\",\"01\"],[\"\",\"1\",\"10\"],[\"\",\"1\",\"11\"]]\n\u003c/pre\u003e\u003cp\u003eExamples of pruning with \u003ccode\u003e\u003ca\u003eprune\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003e dfs . takeWhile (not . isSuffixOf \"11\") $ genericTake 4 bits\n [\"\",\"0\",\"00\",\"000\",\"001\",\"01\",\"010\",\"1\",\"10\",\"100\",\"101\"]\n\n \u003e lastL . takeWhile (not . isSuffixOf \"11\") $ genericTake 4 bits\n [\"000\",\"001\",\"010\",\"01\",\"100\",\"101\",\"1\"]\n\n \u003e lastL . prune (not . isSuffixOf \"11\") $ genericTake 4 bits\n [\"000\",\"001\",\"010\",\"100\",\"101\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "module",
        "fct-source": "src/Data-List-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "Functions for iterating trees List whose underlying monad is also List is tree It nodes are accessible in contrast to the list monad which can also be seen as tree except only its leafs are accessible and only in dfs order import Control.Monad.Trans.List.Funcs repeatM import Data.List.Class genericTake scanl takeWhile toList lastL import Prelude hiding scanl takeWhile appendToEnd xs xs bits scanl appendToEnd repeatM take bfsLayers bits take bfs bits dfs genericTake bits toList genericTake bits Examples of pruning with prune and takeWhile dfs takeWhile not isSuffixOf genericTake bits lastL takeWhile not isSuffixOf genericTake bits lastL prune not isSuffixOf genericTake bits",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "ListTree",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eA 'type-class synonym' for Trees.\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "class",
        "fct-source": "src/Data-List-Tree.html#Tree",
        "fct-type": "class",
        "title": "Tree"
      },
      "index": {
        "description": "type-class synonym for Trees",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "ListTree",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#t:TreeItemM",
      "description": {
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "type",
        "fct-source": "src/Data-List-Tree.html#TreeItemM",
        "fct-type": "type",
        "title": "TreeItemM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "TreeItemM",
        "normalized": "",
        "package": "ListTree",
        "partial": "Tree Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#t:TreeT",
      "description": {
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "type",
        "fct-source": "src/Data-List-Tree.html#TreeT",
        "fct-type": "type",
        "title": "TreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "TreeT",
        "normalized": "",
        "package": "ListTree",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:bestFirstSearchOn",
      "description": {
        "fct-descr": "\u003cp\u003eBest First Search given a scoring function.\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e b) -\u003e t a -\u003e ItemM t a",
        "fct-source": "src/Data-List-Tree.html#bestFirstSearchOn",
        "fct-type": "function",
        "title": "bestFirstSearchOn"
      },
      "index": {
        "description": "Best First Search given scoring function",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "bestFirstSearchOn",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eItemM c a",
        "package": "ListTree",
        "partial": "First Search On",
        "signature": "(a-\u003eb)-\u003et a-\u003eItemM t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:bestFirstSearchSortedChildrenOn",
      "description": {
        "fct-descr": "\u003cp\u003eBest-First-Search given that a node's children are in sorted order (best first) and given a scoring function.\n Especially useful for trees where nodes have an infinite amount of children, where \u003ccode\u003e\u003ca\u003ebestFirstSearchOn\u003c/a\u003e\u003c/code\u003e will get stuck.\n\u003c/p\u003e\u003cp\u003eExample: Find smallest Pythagorian Triplets\n\u003c/p\u003e\u003cpre\u003e import Control.Monad\n import Control.Monad.Generator\n import Control.Monad.Trans.Class\n import Data.List.Tree\n import Data.Maybe\n\n pythagorianTriplets =\n   catMaybes .\n   fmap fst .\n   bestFirstSearchSortedChildrenOn snd .\n   generate $ do\n     x \u003c- lift [1..]\n     yield (Nothing, x)\n     y \u003c- lift [1..]\n     yield (Nothing, x + y)\n     z \u003c- lift [1..]\n     yield (Nothing, x + y + z)\n     lift . guard $ x^2 + y^2 == z^2\n     yield (Just (x, y, z), 0)\n\n \u003e print $ take 10 pythagorianTriplets\n [(3,4,5),(4,3,5),(6,8,10),(8,6,10),(5,12,13),(12,5,13),(9,12,15),(12,9,15),(15,8,17),(8,15,17)]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e b) -\u003e t a -\u003e ItemM t a",
        "fct-source": "src/Data-List-Tree.html#bestFirstSearchSortedChildrenOn",
        "fct-type": "function",
        "title": "bestFirstSearchSortedChildrenOn"
      },
      "index": {
        "description": "Best-First-Search given that node children are in sorted order best first and given scoring function Especially useful for trees where nodes have an infinite amount of children where bestFirstSearchOn will get stuck Example Find smallest Pythagorian Triplets import Control.Monad import Control.Monad.Generator import Control.Monad.Trans.Class import Data.List.Tree import Data.Maybe pythagorianTriplets catMaybes fmap fst bestFirstSearchSortedChildrenOn snd generate do lift yield Nothing lift yield Nothing lift yield Nothing lift guard yield Just print take pythagorianTriplets",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "bestFirstSearchSortedChildrenOn",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eItemM c a",
        "package": "ListTree",
        "partial": "First Search Sorted Children On",
        "signature": "(a-\u003eb)-\u003et a-\u003eItemM t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:bfs",
      "description": {
        "fct-descr": "\u003cp\u003eIterate a tree in BFS order. (Breadth First Search)\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "t a -\u003e ItemM t a",
        "fct-source": "src/Data-List-Tree.html#bfs",
        "fct-type": "function",
        "title": "bfs"
      },
      "index": {
        "description": "Iterate tree in BFS order Breadth First Search",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "bfs",
        "normalized": "a b-\u003eItemM a b",
        "package": "ListTree",
        "partial": "",
        "signature": "t a-\u003eItemM t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:bfsLayers",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a tree into lists of the items in its different layers\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "t a -\u003e ItemM t (ItemM t a)",
        "fct-source": "src/Data-List-Tree.html#bfsLayers",
        "fct-type": "function",
        "title": "bfsLayers"
      },
      "index": {
        "description": "Transform tree into lists of the items in its different layers",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "bfsLayers",
        "normalized": "a b-\u003eItemM a(ItemM a b)",
        "package": "ListTree",
        "partial": "Layers",
        "signature": "t a-\u003eItemM t(ItemM t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:branchAndBound",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ca\u003eBranch and Bound\u003c/a\u003e. A method for pruning.\n\u003c/p\u003e\u003cp\u003eThe result of this function\n would usually be given to another search algorithm,\n such as \u003ccode\u003e\u003ca\u003edfs\u003c/a\u003e\u003c/code\u003e, in order to find the node with lowest value.\n\u003c/p\u003e\u003cp\u003eThis augments the regular search by pruning the tree.\n Given a function to calculate a lower and upper bound for a subtree,\n we keep the lowest upper bound (hence the State monad) encountered so far,\n and we prune any subtree whose lower bound is over the known upper bound.\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e (Maybe b, Maybe b)) -\u003e t a -\u003e TreeT (StateT (Maybe b) (TreeItemM t)) a",
        "fct-source": "src/Data-List-Tree.html#branchAndBound",
        "fct-type": "function",
        "title": "branchAndBound"
      },
      "index": {
        "description": "Generalized Branch and Bound method for pruning The result of this function would usually be given to another search algorithm such as dfs in order to find the node with lowest value This augments the regular search by pruning the tree Given function to calculate lower and upper bound for subtree we keep the lowest upper bound hence the State monad encountered so far and we prune any subtree whose lower bound is over the known upper bound",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "branchAndBound",
        "normalized": "(a-\u003e(Maybe b,Maybe b))-\u003ec a-\u003eTreeT(StateT(Maybe b)(TreeItemM c))a",
        "package": "ListTree",
        "partial": "And Bound",
        "signature": "(a-\u003e(Maybe b,Maybe b))-\u003et a-\u003eTreeT(StateT(Maybe b)(TreeItemM t))a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:dfs",
      "description": {
        "fct-descr": "\u003cp\u003eIterate a tree in DFS pre-order. (Depth First Search)\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "t a -\u003e ItemM t a",
        "fct-source": "src/Data-List-Tree.html#dfs",
        "fct-type": "function",
        "title": "dfs"
      },
      "index": {
        "description": "Iterate tree in DFS pre-order Depth First Search",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "dfs",
        "normalized": "a b-\u003eItemM a b",
        "package": "ListTree",
        "partial": "",
        "signature": "t a-\u003eItemM t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:prune",
      "description": {
        "fct-descr": "\u003cp\u003ePrune a tree or list given a predicate.\n Unlike \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e which stops a branch where the condition doesn't hold,\n prune \u003ca\u003ecuts\u003c/a\u003e the whole branch (the underlying MonadPlus's mzero).\n\u003c/p\u003e",
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e Bool) -\u003e ListT m a -\u003e ListT m a",
        "fct-source": "src/Data-List-Tree.html#prune",
        "fct-type": "function",
        "title": "prune"
      },
      "index": {
        "description": "Prune tree or list given predicate Unlike takeWhile which stops branch where the condition doesn hold prune cuts the whole branch the underlying MonadPlus mzero",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "prune",
        "normalized": "(a-\u003eBool)-\u003eListT b a-\u003eListT b a",
        "package": "ListTree",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eListT m a-\u003eListT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:pruneM",
      "description": {
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e m Bool) -\u003e ListT m a -\u003e ListT m a",
        "fct-source": "src/Data-List-Tree.html#pruneM",
        "fct-type": "function",
        "title": "pruneM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "pruneM",
        "normalized": "(a-\u003eb Bool)-\u003eListT b a-\u003eListT b a",
        "package": "ListTree",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003eListT m a-\u003eListT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/Data-List-Tree.html#v:sortChildrenOn",
      "description": {
        "fct-module": "Data.List.Tree",
        "fct-package": "ListTree",
        "fct-signature": "(a -\u003e b) -\u003e t a -\u003e ListT (ItemM t) a",
        "fct-source": "src/Data-List-Tree.html#sortChildrenOn",
        "fct-type": "function",
        "title": "sortChildrenOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Tree",
        "module": "Data.List.Tree",
        "name": "sortChildrenOn",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eListT(ItemM c)a",
        "package": "ListTree",
        "partial": "Children On",
        "signature": "(a-\u003eb)-\u003et a-\u003eListT(ItemM t)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/System-Directory-ListTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic directory tree.\n\u003c/p\u003e\u003cpre\u003e -- List of files under \".\" or subfolders with \".markdown\" extension,\n -- except for those with a name starting with \"_\" somewhere in their path. (like \"_cache/index.markdown\")\n markdownFiles :: ListT IO FilePath\n markdownFiles\n     = filter ((== \".markdown\") . takeExtension) -- only take files with a \".markdown\" extension\n     . lastL                                     -- get the leaves of the tree (files, not directories)\n     . scanl1 appendPath                         -- transform tree nodes to filenames including path\n     . prune (not . isPrefixOf \"_\")              -- ignore directories or files whose name starts with \"_\"\n     $ directoryTree \".\"                         -- directory tree starting at \".\"\n\u003c/pre\u003e\u003cp\u003eModule name System.Directory.Tree is a better fit but it is taken by \u003ca\u003edirectory-tree\u003c/a\u003e, a read-directory-tree-in-bulk module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Directory.ListTree",
        "fct-package": "ListTree",
        "fct-signature": "module",
        "fct-source": "src/System-Directory-ListTree.html",
        "fct-type": "module",
        "title": "ListTree"
      },
      "index": {
        "description": "Monadic directory tree List of files under or subfolders with markdown extension except for those with name starting with somewhere in their path like cache index.markdown markdownFiles ListT IO FilePath markdownFiles filter markdown takeExtension only take files with markdown extension lastL get the leaves of the tree files not directories scanl1 appendPath transform tree nodes to filenames including path prune not isPrefixOf ignore directories or files whose name starts with directoryTree directory tree starting at Module name System.Directory.Tree is better fit but it is taken by directory-tree read-directory-tree-in-bulk module",
        "hierarchy": "System Directory ListTree",
        "module": "System.Directory.ListTree",
        "name": "ListTree",
        "normalized": "",
        "package": "ListTree",
        "partial": "List Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/System-Directory-ListTree.html#v:appendPath",
      "description": {
        "fct-descr": "\u003cp\u003eWhen used with \u003ccode\u003escanl\u003c/code\u003e or \u003ccode\u003escanl1\u003c/code\u003e, transforms tree of filenames to tree of filenames with the paths\n\u003c/p\u003e",
        "fct-module": "System.Directory.ListTree",
        "fct-package": "ListTree",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/System-Directory-ListTree.html#appendPath",
        "fct-type": "function",
        "title": "appendPath"
      },
      "index": {
        "description": "When used with scanl or scanl1 transforms tree of filenames to tree of filenames with the paths",
        "hierarchy": "System Directory ListTree",
        "module": "System.Directory.ListTree",
        "name": "appendPath",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "ListTree",
        "partial": "Path",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListTree/docs/System-Directory-ListTree.html#v:directoryTree",
      "description": {
        "fct-module": "System.Directory.ListTree",
        "fct-package": "ListTree",
        "fct-signature": "FilePath -\u003e ListT (ListT m) FilePath",
        "fct-source": "src/System-Directory-ListTree.html#directoryTree",
        "fct-type": "function",
        "title": "directoryTree"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory ListTree",
        "module": "System.Directory.ListTree",
        "name": "directoryTree",
        "normalized": "FilePath-\u003eListT(ListT a)FilePath",
        "package": "ListTree",
        "partial": "Tree",
        "signature": "FilePath-\u003eListT(ListT m)FilePath"
      }
    }
  }
]