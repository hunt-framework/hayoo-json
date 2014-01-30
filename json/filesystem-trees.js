[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "module",
        "fct-source": "src/System-File-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#t:FSForest",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "type",
        "fct-source": "src/System-File-Tree.html#FSForest",
        "fct-type": "type",
        "title": "FSForest"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "FSForest",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "FSForest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#t:FSTree",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of a filesystem tree. The root label contains the\n path context, and every child node is a single file/directory name.\n\u003c/p\u003e\u003cp\u003eFor example, say we have the following directory structure on our\n filesystem:\n\u003c/p\u003e\u003cpre\u003e \n   /example$ tree foo --charset ASCII\n   foo\n   `-- bar\n       `-- test\n           |-- a\n           |-- A\n           |   |-- x\n           |   `-- y\n           |-- b\n           `-- B\n\u003c/pre\u003e\u003cp\u003ethen calling \u003ccode\u003e\u003ca\u003egetDirectory\u003c/a\u003e\u003c/code\u003e \"/example/foo/bar/test\" will yield a FSTree with\n the following structure:\n\u003c/p\u003e\u003cpre\u003e  /example$ ghci\n  Prelude Data.Tree System.Directory.Tree\u003e putStrLn . drawTree . toTree =\u003c\u003c getDirectory \"/example/foo/bar/test\"\n  /example/foo/bar/test\n  |\n  +- A\n  |  |\n  |  +- x\n  |  |\n  |  `- y\n  |\n  +- B\n  |\n  +- a\n  |\n  `- b\n\u003c/pre\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "newtype",
        "fct-source": "src/System-File-Tree.html#FSTree",
        "fct-type": "newtype",
        "title": "FSTree"
      },
      "index": {
        "description": "representation of filesystem tree The root label contains the path context and every child node is single file directory name For example say we have the following directory structure on our filesystem example tree foo charset ASCII foo bar test then calling getDirectory example foo bar test will yield FSTree with the following structure example ghci Prelude Data.Tree System.Directory.Tree putStrLn drawTree toTree getDirectory example foo bar test example foo bar test",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "FSTree",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "FSTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#t:Forest",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Forest"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "Forest",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Forest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eMulti-way trees, also known as \u003cem\u003erose trees\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "Multi-way trees also known as rose trees",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#t:TreeLens",
      "description": {
        "fct-descr": "\u003cp\u003eOverloaded lenses for \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "class",
        "fct-source": "src/System-File-Tree.html#TreeLens",
        "fct-type": "class",
        "title": "TreeLens"
      },
      "index": {
        "description": "Overloaded lenses for Tree and FSTree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "TreeLens",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Tree Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:FSTree",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree",
        "fct-source": "src/System-File-Tree.html#FSTree",
        "fct-type": "function",
        "title": "FSTree"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "FSTree",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "FSTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:Node",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "Node",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eLens for a list of children nodes\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Lens t [t]",
        "fct-source": "src/System-File-Tree.html#children",
        "fct-type": "method",
        "title": "children"
      },
      "index": {
        "description": "Lens for list of children nodes",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "children",
        "normalized": "Lens a[a]",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "Lens t[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:copyTo",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a filesystem tree to a new location, creating directories as necessary.\n The resulting \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e represents all of the copied directories/files in their \n new home.\n\u003c/p\u003e\u003cp\u003eNote that an single exception will halt the entire operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO FSTree",
        "fct-source": "src/System-File-Tree.html#copyTo",
        "fct-type": "function",
        "title": "copyTo"
      },
      "index": {
        "description": "Copy filesystem tree to new location creating directories as necessary The resulting FSTree represents all of the copied directories files in their new home Note that an single exception will halt the entire operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "copyTo",
        "normalized": "FilePath-\u003eFSTree-\u003eIO FSTree",
        "package": "filesystem-trees",
        "partial": "To",
        "signature": "FilePath-\u003eFSTree-\u003eIO FSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:copyTo_",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO ()",
        "fct-source": "src/System-File-Tree.html#copyTo_",
        "fct-type": "function",
        "title": "copyTo_"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "copyTo_",
        "normalized": "FilePath-\u003eFSTree-\u003eIO()",
        "package": "filesystem-trees",
        "partial": "To",
        "signature": "FilePath-\u003eFSTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eThe first element of the result represents the forest after removing all \n subtrees that match the given predicate, and the second element is a list of \n trees that matched. This could be useful if you want to handle certain \n directories specially from others within a sub-filesystem.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e FSForest -\u003e (FSForest, FSForest)",
        "fct-source": "src/System-File-Tree.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "The first element of the result represents the forest after removing all subtrees that match the given predicate and the second element is list of trees that matched This could be useful if you want to handle certain directories specially from others within sub-filesystem",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "extract",
        "normalized": "(FilePath-\u003eBool)-\u003eFSForest-\u003e(FSForest,FSForest)",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003eBool)-\u003eFSForest-\u003e(FSForest,FSForest)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:extractM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e m Bool) -\u003e FSForest -\u003e m (FSForest, FSForest)",
        "fct-source": "src/System-File-Tree.html#extractM",
        "fct-type": "function",
        "title": "extractM"
      },
      "index": {
        "description": "Monadic extract",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "extractM",
        "normalized": "(FilePath-\u003ea Bool)-\u003eFSForest-\u003ea(FSForest,FSForest)",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003em Bool)-\u003eFSForest-\u003em(FSForest,FSForest)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a predicate to each path name in a filesystem forest, and removes\n all unsuccessful paths from the result. If a directory fails the predicate test, \n then it will only be removed if all of its children also fail the test\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e FSForest -\u003e FSForest",
        "fct-source": "src/System-File-Tree.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Applies predicate to each path name in filesystem forest and removes all unsuccessful paths from the result If directory fails the predicate test then it will only be removed if all of its children also fail the test",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "filter",
        "normalized": "(FilePath-\u003eBool)-\u003eFSForest-\u003eFSForest",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003eBool)-\u003eFSForest-\u003eFSForest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e m Bool) -\u003e FSForest -\u003e m FSForest",
        "fct-source": "src/System-File-Tree.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Monadic filter",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "filterM",
        "normalized": "(FilePath-\u003ea Bool)-\u003eFSForest-\u003ea FSForest",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003em Bool)-\u003eFSForest-\u003em FSForest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFind all sub-forests within a forest that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e FSForest -\u003e FSForest",
        "fct-source": "src/System-File-Tree.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Find all sub-forests within forest that match the given predicate",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "find",
        "normalized": "(FilePath-\u003eBool)-\u003eFSForest-\u003eFSForest",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003eBool)-\u003eFSForest-\u003eFSForest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:findM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e m Bool) -\u003e FSForest -\u003e m FSForest",
        "fct-source": "src/System-File-Tree.html#findM",
        "fct-type": "function",
        "title": "findM"
      },
      "index": {
        "description": "Monadic find",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "findM",
        "normalized": "(FilePath-\u003ea Bool)-\u003eFSForest-\u003ea FSForest",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003em Bool)-\u003eFSForest-\u003em FSForest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlattens a filesystem tree into a list of its contents. This is a pre-order \n traversal of the tree.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e [FilePath]",
        "fct-source": "src/System-File-Tree.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Flattens filesystem tree into list of its contents This is pre-order traversal of the tree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "flatten",
        "normalized": "FSTree-\u003e[FilePath]",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "FSTree-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:flattenPostOrder",
      "description": {
        "fct-descr": "\u003cp\u003eA post-order traversal of the filesystem tree.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e [FilePath]",
        "fct-source": "src/System-File-Tree.html#flattenPostOrder",
        "fct-type": "function",
        "title": "flattenPostOrder"
      },
      "index": {
        "description": "post-order traversal of the filesystem tree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "flattenPostOrder",
        "normalized": "FSTree-\u003e[FilePath]",
        "package": "filesystem-trees",
        "partial": "Post Order",
        "signature": "FSTree-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:getDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eLazily retrieves a representation of a directory and its contents recursively.\n\u003c/p\u003e\u003cp\u003eRelative paths are not converted to absolute. Thus, a FSTree formed from a \n relative path will contain a \"relative tree\", and the usual caveats of\n current directories and relative paths apply to the tree as a whole.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO FSTree",
        "fct-source": "src/System-File-Tree.html#getDirectory",
        "fct-type": "function",
        "title": "getDirectory"
      },
      "index": {
        "description": "Lazily retrieves representation of directory and its contents recursively Relative paths are not converted to absolute Thus FSTree formed from relative path will contain relative tree and the usual caveats of current directories and relative paths apply to the tree as whole",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "getDirectory",
        "normalized": "FilePath-\u003eIO FSTree",
        "package": "filesystem-trees",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO FSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:getDirectory-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003egetDirectory\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThough race conditionals are still a possibility, this function will avoid some \n race conditions that could be caused from the use of lazy IO. For large \n directories, this function can easily cause memory leaks.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO FSTree",
        "fct-source": "src/System-File-Tree.html#getDirectory%27",
        "fct-type": "function",
        "title": "getDirectory'"
      },
      "index": {
        "description": "strict variant of getDirectory Though race conditionals are still possibility this function will avoid some race conditions that could be caused from the use of lazy IO For large directories this function can easily cause memory leaks",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "getDirectory'",
        "normalized": "FilePath-\u003eIO FSTree",
        "package": "filesystem-trees",
        "partial": "Directory'",
        "signature": "FilePath-\u003eIO FSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isDir",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a directory.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isDir",
        "fct-type": "function",
        "title": "isDir"
      },
      "index": {
        "description": "Checks if path refers to directory",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isDir",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isFile",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a file.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isFile",
        "fct-type": "function",
        "title": "isFile"
      },
      "index": {
        "description": "Checks if path refers to file",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isFile",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "File",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isRealDir",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a real directory (not a symbolic link)\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isRealDir",
        "fct-type": "function",
        "title": "isRealDir"
      },
      "index": {
        "description": "Checks if path refers to real directory not symbolic link",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isRealDir",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Real Dir",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isRealFile",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a real file (not a symbolic link)\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isRealFile",
        "fct-type": "function",
        "title": "isRealFile"
      },
      "index": {
        "description": "Checks if path refers to real file not symbolic link",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isRealFile",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Real File",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isSymDir",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a symbolically linked directory \n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isSymDir",
        "fct-type": "function",
        "title": "isSymDir"
      },
      "index": {
        "description": "Checks if path refers to symbolically linked directory",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isSymDir",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Sym Dir",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isSymFile",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a symbolically linked file\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isSymFile",
        "fct-type": "function",
        "title": "isSymFile"
      },
      "index": {
        "description": "Checks if path refers to symbolically linked file",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isSymFile",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Sym File",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:isSymLink",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a path refers to a symbolic link.\n NOTE: always returns False on Windows\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-File-Tree.html#isSymLink",
        "fct-type": "function",
        "title": "isSymLink"
      },
      "index": {
        "description": "Checks if path refers to symbolic link NOTE always returns False on Windows",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "isSymLink",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "filesystem-trees",
        "partial": "Sym Link",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eLens for the value at a tree node\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Lens t a",
        "fct-source": "src/System-File-Tree.html#label",
        "fct-type": "method",
        "title": "label"
      },
      "index": {
        "description": "Lens for the value at tree node",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "label",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:levels",
      "description": {
        "fct-descr": "\u003cp\u003eList of file paths at each level of the tree.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e [[FilePath]]",
        "fct-source": "src/System-File-Tree.html#levels",
        "fct-type": "function",
        "title": "levels"
      },
      "index": {
        "description": "List of file paths at each level of the tree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "levels",
        "normalized": "FSTree-\u003e[[FilePath]]",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "FSTree-\u003e[[FilePath]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function over the filepaths of a directory tree. \n\u003c/p\u003e\u003cp\u003eBecause we can't guarantee that the internal \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e representation is preserved \n in any way, the result is a regular \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e b) -\u003e FSTree -\u003e Tree b",
        "fct-source": "src/System-File-Tree.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Applies function over the filepaths of directory tree Because we can guarantee that the internal FSTree representation is preserved in any way the result is regular Tree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "map",
        "normalized": "(FilePath-\u003ea)-\u003eFSTree-\u003eTree a",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003eb)-\u003eFSTree-\u003eTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic action to every filepath in a filesystem tree.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e m b) -\u003e FSTree -\u003e m (Tree b)",
        "fct-source": "src/System-File-Tree.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Applies monadic action to every filepath in filesystem tree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "mapM",
        "normalized": "(FilePath-\u003ea b)-\u003eFSTree-\u003ea(Tree b)",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003em b)-\u003eFSTree-\u003em(Tree b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with the result discarded.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e m b) -\u003e FSTree -\u003e m ()",
        "fct-source": "src/System-File-Tree.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM with the result discarded",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "mapM_",
        "normalized": "(FilePath-\u003ea b)-\u003eFSTree-\u003ea()",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "(FilePath-\u003em b)-\u003eFSTree-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:mergeInto",
      "description": {
        "fct-descr": "\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003emoveTo\u003c/a\u003e\u003c/code\u003e, except that whatever was present at the destination\n path isn't deleted before the move operation commences.\n\u003c/p\u003e\u003cp\u003eNote that an single exception will halt the entire operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO FSTree",
        "fct-source": "src/System-File-Tree.html#mergeInto",
        "fct-type": "function",
        "title": "mergeInto"
      },
      "index": {
        "description": "This is similar to moveTo except that whatever was present at the destination path isn deleted before the move operation commences Note that an single exception will halt the entire operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "mergeInto",
        "normalized": "FilePath-\u003eFSTree-\u003eIO FSTree",
        "package": "filesystem-trees",
        "partial": "Into",
        "signature": "FilePath-\u003eFSTree-\u003eIO FSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:mergeInto_",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO ()",
        "fct-source": "src/System-File-Tree.html#mergeInto_",
        "fct-type": "function",
        "title": "mergeInto_"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "mergeInto_",
        "normalized": "FilePath-\u003eFSTree-\u003eIO()",
        "package": "filesystem-trees",
        "partial": "Into",
        "signature": "FilePath-\u003eFSTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:mkFSTree",
      "description": {
        "fct-descr": "\u003cp\u003eA pseudo-constructor for \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSForest -\u003e FSTree",
        "fct-source": "src/System-File-Tree.html#mkFSTree",
        "fct-type": "function",
        "title": "mkFSTree"
      },
      "index": {
        "description": "pseudo-constructor for FSTree",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "mkFSTree",
        "normalized": "FilePath-\u003eFSForest-\u003eFSTree",
        "package": "filesystem-trees",
        "partial": "FSTree",
        "signature": "FilePath-\u003eFSForest-\u003eFSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:moveTo",
      "description": {
        "fct-descr": "\u003cp\u003eMove a filesystem tree to a new location, deleting any file/directory that\n was present at the given destination path.\n\u003c/p\u003e\u003cp\u003eDirectories listed in the source filesystem tree are removed from disk if the move\n operation empties their contents completely. The resulting \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e represents \n all the moved directories/files in their new home.\n\u003c/p\u003e\u003cp\u003eNote that an single exception will halt the entire operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO FSTree",
        "fct-source": "src/System-File-Tree.html#moveTo",
        "fct-type": "function",
        "title": "moveTo"
      },
      "index": {
        "description": "Move filesystem tree to new location deleting any file directory that was present at the given destination path Directories listed in the source filesystem tree are removed from disk if the move operation empties their contents completely The resulting FSTree represents all the moved directories files in their new home Note that an single exception will halt the entire operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "moveTo",
        "normalized": "FilePath-\u003eFSTree-\u003eIO FSTree",
        "package": "filesystem-trees",
        "partial": "To",
        "signature": "FilePath-\u003eFSTree-\u003eIO FSTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:moveTo_",
      "description": {
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FilePath -\u003e FSTree -\u003e IO ()",
        "fct-source": "src/System-File-Tree.html#moveTo_",
        "fct-type": "function",
        "title": "moveTo_"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "moveTo_",
        "normalized": "FilePath-\u003eFSTree-\u003eIO()",
        "package": "filesystem-trees",
        "partial": "To",
        "signature": "FilePath-\u003eFSTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the root node of a filesystem tree, while preserving the paths of\n its children. In other words, this function does not alter where any paths point \n to.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e (FilePath, FSForest)",
        "fct-source": "src/System-File-Tree.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Remove the root node of filesystem tree while preserving the paths of its children In other words this function does not alter where any paths point to",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "pop",
        "normalized": "FSTree-\u003e(FilePath,FSForest)",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "FSTree-\u003e(FilePath,FSForest)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:pop_",
      "description": {
        "fct-descr": "\u003cpre\u003e pop_ = snd . pop\n\u003c/pre\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e FSForest",
        "fct-source": "src/System-File-Tree.html#pop_",
        "fct-type": "function",
        "title": "pop_"
      },
      "index": {
        "description": "pop snd pop",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "pop_",
        "normalized": "FSTree-\u003eFSForest",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "FSTree-\u003eFSForest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:remove",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a given filesystem tree. Directories are only removed\n if the remove operation empties its contents.\n\u003c/p\u003e\u003cp\u003eNote that an single exception will halt the entire operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e IO ()",
        "fct-source": "src/System-File-Tree.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "Remove given filesystem tree Directories are only removed if the remove operation empties its contents Note that an single exception will halt the entire operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "remove",
        "normalized": "FSTree-\u003eIO()",
        "package": "filesystem-trees",
        "partial": "",
        "signature": "FSTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:rootLabel",
      "description": {
        "fct-descr": "\u003cp\u003elabel value\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "rootLabel"
      },
      "index": {
        "description": "label value",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "rootLabel",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:subForest",
      "description": {
        "fct-descr": "\u003cp\u003ezero or more child trees\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Forest a",
        "fct-type": "function",
        "title": "subForest"
      },
      "index": {
        "description": "zero or more child trees",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "subForest",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Forest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:toTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Tree FilePath",
        "fct-source": "src/System-File-Tree.html#FSTree",
        "fct-type": "function",
        "title": "toTree"
      },
      "index": {
        "description": "",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "toTree",
        "normalized": "",
        "package": "filesystem-trees",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:truncateAt",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a tree to a given maximum level, where root is level 0.  \n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "Word -\u003e t -\u003e t",
        "fct-source": "src/System-File-Tree.html#truncateAt",
        "fct-type": "function",
        "title": "truncateAt"
      },
      "index": {
        "description": "Truncate tree to given maximum level where root is level",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "truncateAt",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "filesystem-trees",
        "partial": "At",
        "signature": "Word-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:tryRemove",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eIOExceptions\u003c/code\u003e do not stop the removal\n process, and all \u003ccode\u003eIOExceptions\u003c/code\u003e are accumulated into a list as the result of\n the operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "FSTree -\u003e IO [IOException]",
        "fct-source": "src/System-File-Tree.html#tryRemove",
        "fct-type": "function",
        "title": "tryRemove"
      },
      "index": {
        "description": "variant of remove IOExceptions do not stop the removal process and all IOExceptions are accumulated into list as the result of the operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "tryRemove",
        "normalized": "FSTree-\u003eIO[IOException]",
        "package": "filesystem-trees",
        "partial": "Remove",
        "signature": "FSTree-\u003eIO[IOException]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:tryRemoveWith",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e. Allows you to specify your own exception handler to handle\n exceptions for each removal operation.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(IOException -\u003e IO a) -\u003e FSTree -\u003e IO [a]",
        "fct-source": "src/System-File-Tree.html#tryRemoveWith",
        "fct-type": "function",
        "title": "tryRemoveWith"
      },
      "index": {
        "description": "variant of remove Allows you to specify your own exception handler to handle exceptions for each removal operation",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "tryRemoveWith",
        "normalized": "(IOException-\u003eIO a)-\u003eFSTree-\u003eIO[a]",
        "package": "filesystem-trees",
        "partial": "Remove With",
        "signature": "(IOException-\u003eIO a)-\u003eFSTree-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:zipWithDest",
      "description": {
        "fct-descr": "\u003cp\u003eA generalization of the various move, copy, and remove operations. This\n operation pairs each node of a \u003ccode\u003e\u003ca\u003eFSTree\u003c/a\u003e\u003c/code\u003e with a second path formed by rerooting\n the filesystem tree to the given destination path.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e FilePath -\u003e a) -\u003e FilePath -\u003e FSTree -\u003e [a]",
        "fct-source": "src/System-File-Tree.html#zipWithDest",
        "fct-type": "function",
        "title": "zipWithDest"
      },
      "index": {
        "description": "generalization of the various move copy and remove operations This operation pairs each node of FSTree with second path formed by rerooting the filesystem tree to the given destination path",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "zipWithDest",
        "normalized": "(FilePath-\u003eFilePath-\u003ea)-\u003eFilePath-\u003eFSTree-\u003e[a]",
        "package": "filesystem-trees",
        "partial": "With Dest",
        "signature": "(FilePath-\u003eFilePath-\u003ea)-\u003eFilePath-\u003eFSTree-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:zipWithDestM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003ezipWithDest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e FilePath -\u003e m a) -\u003e FilePath -\u003e FSTree -\u003e m [a]",
        "fct-source": "src/System-File-Tree.html#zipWithDestM",
        "fct-type": "function",
        "title": "zipWithDestM"
      },
      "index": {
        "description": "Monadic zipWithDest",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "zipWithDestM",
        "normalized": "(FilePath-\u003eFilePath-\u003ea b)-\u003eFilePath-\u003eFSTree-\u003ea[b]",
        "package": "filesystem-trees",
        "partial": "With Dest",
        "signature": "(FilePath-\u003eFilePath-\u003em a)-\u003eFilePath-\u003eFSTree-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-trees/docs/System-File-Tree.html#v:zipWithDestM_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ezipWithDestM\u003c/a\u003e\u003c/code\u003e where the result is discarded and instead the \n rerooted filesystem tree is returned.\n\u003c/p\u003e",
        "fct-module": "System.File.Tree",
        "fct-package": "filesystem-trees",
        "fct-signature": "(FilePath -\u003e FilePath -\u003e m a) -\u003e FilePath -\u003e FSTree -\u003e m FSTree",
        "fct-source": "src/System-File-Tree.html#zipWithDestM_",
        "fct-type": "function",
        "title": "zipWithDestM_"
      },
      "index": {
        "description": "variant of zipWithDestM where the result is discarded and instead the rerooted filesystem tree is returned",
        "hierarchy": "System File Tree",
        "module": "System.File.Tree",
        "name": "zipWithDestM_",
        "normalized": "(FilePath-\u003eFilePath-\u003ea b)-\u003eFilePath-\u003eFSTree-\u003ea FSTree",
        "package": "filesystem-trees",
        "partial": "With Dest",
        "signature": "(FilePath-\u003eFilePath-\u003em a)-\u003eFilePath-\u003eFSTree-\u003em FSTree"
      }
    }
  }
]