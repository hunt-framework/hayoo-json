[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efilesystem, as well as useful functions for reading and writing file\n and directory structures in the IO monad. \n\u003c/p\u003e\u003cp\u003eErrors are caught in a special constructor in the DirTree type.\n\u003c/p\u003e\u003cp\u003eDefined instances of Functor, Traversable and Foldable allow for\n easily operating on a directory of files. For example, you could use\n Foldable.foldr to create a hash of the entire contents of a directory.\n\u003c/p\u003e\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003ereadDirectoryWithL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildL\u003c/a\u003e\u003c/code\u003e allow for doing \n directory-traversing IO lazily as required by the execution of pure\n code. This allows you to treat large directories the same way as you\n would a lazy infinite list.\n\u003c/p\u003e\u003cp\u003eThe AnchoredDirTree type is a simple wrapper for DirTree to keep  \n track of a base directory context for the DirTree. \n\u003c/p\u003e\u003cp\u003ePlease send me any requests, bugs, or other feedback on this module!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "module",
        "fct-source": "src/System-Directory-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "filesystem as well as useful functions for reading and writing file and directory structures in the IO monad Errors are caught in special constructor in the DirTree type Defined instances of Functor Traversable and Foldable allow for easily operating on directory of files For example you could use Foldable.foldr to create hash of the entire contents of directory The functions readDirectoryWithL and buildL allow for doing directory-traversing IO lazily as required by the execution of pure code This allows you to treat large directories the same way as you would lazy infinite list The AnchoredDirTree type is simple wrapper for DirTree to keep track of base directory context for the DirTree Please send me any requests bugs or other feedback on this module",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#t:AnchoredDirTree",
      "description": {
        "fct-descr": "\u003cp\u003ea simple wrapper to hold a base directory name, which can be either an\n absolute or relative path. This lets us give the DirTree a context, while\n still letting us store only directory and file \u003cem\u003enames\u003c/em\u003e (not full paths) in\n the DirTree. (uses an infix constructor; don't be scared)\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "data",
        "fct-source": "src/System-Directory-Tree.html#AnchoredDirTree",
        "fct-type": "data",
        "title": "AnchoredDirTree"
      },
      "index": {
        "description": "simple wrapper to hold base directory name which can be either an absolute or relative path This lets us give the DirTree context while still letting us store only directory and file names not full paths in the DirTree uses an infix constructor don be scared",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "AnchoredDirTree",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Anchored Dir Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#t:DirTree",
      "description": {
        "fct-descr": "\u003cp\u003ethe String in the name field is always a file name, never a full path.\n The free type variable is used in the File constructor and can hold Handles,\n Strings representing a file's contents or anything else you can think of.\n We catch any IO errors in the Failed constructor. an Exception can be \n converted to a String with \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "data",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "data",
        "title": "DirTree"
      },
      "index": {
        "description": "the String in the name field is always file name never full path The free type variable is used in the File constructor and can hold Handles Strings representing file contents or anything else you can think of We catch any IO errors in the Failed constructor an Exception can be converted to String with show",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "DirTree",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Dir Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#t:FileName",
      "description": {
        "fct-descr": "\u003cp\u003ean element in a FilePath:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "type",
        "fct-source": "src/System-Directory-Tree.html#FileName",
        "fct-type": "type",
        "title": "FileName"
      },
      "index": {
        "description": "an element in FilePath",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "FileName",
        "normalized": "",
        "package": "directory-tree",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:-60--47--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAllows for a function on a bare DirTree to be applied to an AnchoredDirTree\n within a Functor. Very similar to and useful in combination with \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e: \n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(DirTree a -\u003e DirTree b) -\u003e f (AnchoredDirTree a) -\u003e f (AnchoredDirTree b)",
        "fct-source": "src/System-Directory-Tree.html#%3C%2F%24%3E",
        "fct-type": "function",
        "title": "(\u003c/$\u003e)"
      },
      "index": {
        "description": "Allows for function on bare DirTree to be applied to an AnchoredDirTree within Functor Very similar to and useful in combination with",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "(\u003c/$\u003e) \u003c/$\u003e",
        "normalized": "(DirTree a-\u003eDirTree b)-\u003ec(AnchoredDirTree a)-\u003ec(AnchoredDirTree b)",
        "package": "directory-tree",
        "partial": "",
        "signature": "(DirTree a-\u003eDirTree b)-\u003ef(AnchoredDirTree a)-\u003ef(AnchoredDirTree b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v::-47-",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": ":/",
        "fct-source": "src/System-Directory-Tree.html#AnchoredDirTree",
        "fct-type": "function",
        "title": ":/"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": ":/",
        "normalized": "",
        "package": "directory-tree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:Dir",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "Dir",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "Dir"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "Dir",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:Failed",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "Failed",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "Failed"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "Failed",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:File",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "File",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "File",
        "normalized": "",
        "package": "directory-tree",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_anchor",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FilePath -\u003e f FilePath) -\u003e AnchoredDirTree a -\u003e f (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_anchor",
        "fct-type": "function",
        "title": "_anchor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_anchor",
        "normalized": "(FilePath-\u003ea FilePath)-\u003eAnchoredDirTree b-\u003ea(AnchoredDirTree b)",
        "package": "directory-tree",
        "partial": "",
        "signature": "(FilePath-\u003ef FilePath)-\u003eAnchoredDirTree a-\u003ef(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_contents",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "([DirTree a] -\u003e f [DirTree a]) -\u003e DirTree a -\u003e f (DirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_contents",
        "fct-type": "function",
        "title": "_contents"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_contents",
        "normalized": "([DirTree a]-\u003eb[DirTree a])-\u003eDirTree a-\u003eb(DirTree a)",
        "package": "directory-tree",
        "partial": "",
        "signature": "([DirTree a]-\u003ef[DirTree a])-\u003eDirTree a-\u003ef(DirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_dirTree",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(DirTree t -\u003e f (DirTree a)) -\u003e AnchoredDirTree t -\u003e f (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_dirTree",
        "fct-type": "function",
        "title": "_dirTree"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_dirTree",
        "normalized": "(DirTree a-\u003eb(DirTree c))-\u003eAnchoredDirTree a-\u003eb(AnchoredDirTree c)",
        "package": "directory-tree",
        "partial": "Tree",
        "signature": "(DirTree t-\u003ef(DirTree a))-\u003eAnchoredDirTree t-\u003ef(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_err",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(IOException -\u003e f IOException) -\u003e DirTree a -\u003e f (DirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_err",
        "fct-type": "function",
        "title": "_err"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_err",
        "normalized": "(IOException-\u003ea IOException)-\u003eDirTree b-\u003ea(DirTree b)",
        "package": "directory-tree",
        "partial": "",
        "signature": "(IOException-\u003ef IOException)-\u003eDirTree a-\u003ef(DirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_file",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(a -\u003e f a) -\u003e DirTree a -\u003e f (DirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_file",
        "fct-type": "function",
        "title": "_file"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_file",
        "normalized": "(a-\u003eb a)-\u003eDirTree a-\u003eb(DirTree a)",
        "package": "directory-tree",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003eDirTree a-\u003ef(DirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:_name",
      "description": {
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FileName -\u003e f FileName) -\u003e DirTree a -\u003e f (DirTree a)",
        "fct-source": "src/System-Directory-Tree.html#_name",
        "fct-type": "function",
        "title": "_name"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "_name",
        "normalized": "(FileName-\u003ea FileName)-\u003eDirTree b-\u003ea(DirTree b)",
        "package": "directory-tree",
        "partial": "",
        "signature": "(FileName-\u003ef FileName)-\u003eDirTree a-\u003ef(DirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:anchor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FilePath",
        "fct-source": "src/System-Directory-Tree.html#AnchoredDirTree",
        "fct-type": "function",
        "title": "anchor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "anchor",
        "normalized": "",
        "package": "directory-tree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:anyFailed",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if any Failed constructors in the tree\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e Bool",
        "fct-source": "src/System-Directory-Tree.html#anyFailed",
        "fct-type": "function",
        "title": "anyFailed"
      },
      "index": {
        "description": "True if any Failed constructors in the tree",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "anyFailed",
        "normalized": "DirTree a-\u003eBool",
        "package": "directory-tree",
        "partial": "Failed",
        "signature": "DirTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003ebuilds a DirTree from the contents of the directory passed to it, saving \n the base directory in the Anchored* wrapper. Errors are caught in the tree in\n the Failed constructor. The \u003ccode\u003e\u003ca\u003efile\u003c/a\u003e\u003c/code\u003e fields initially are populated with full \n paths to the files they are abstracting.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FilePath -\u003e IO (AnchoredDirTree FilePath)",
        "fct-source": "src/System-Directory-Tree.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "builds DirTree from the contents of the directory passed to it saving the base directory in the Anchored wrapper Errors are caught in the tree in the Failed constructor The file fields initially are populated with full paths to the files they are abstracting",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "build",
        "normalized": "FilePath-\u003eIO(AnchoredDirTree FilePath)",
        "package": "directory-tree",
        "partial": "",
        "signature": "FilePath-\u003eIO(AnchoredDirTree FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:buildL",
      "description": {
        "fct-descr": "\u003cp\u003eidentical to \u003ccode\u003e\u003ca\u003ebuild\u003c/a\u003e\u003c/code\u003e but does directory reading IO lazily as needed:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FilePath -\u003e IO (AnchoredDirTree FilePath)",
        "fct-source": "src/System-Directory-Tree.html#buildL",
        "fct-type": "function",
        "title": "buildL"
      },
      "index": {
        "description": "identical to build but does directory reading IO lazily as needed",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "buildL",
        "normalized": "FilePath-\u003eIO(AnchoredDirTree FilePath)",
        "package": "directory-tree",
        "partial": "",
        "signature": "FilePath-\u003eIO(AnchoredDirTree FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:comparingShape",
      "description": {
        "fct-descr": "\u003cp\u003ea compare function that ignores the free \u003ca\u003efile\u003c/a\u003e type variable:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e DirTree b -\u003e Ordering",
        "fct-source": "src/System-Directory-Tree.html#comparingShape",
        "fct-type": "function",
        "title": "comparingShape"
      },
      "index": {
        "description": "compare function that ignores the free file type variable",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "comparingShape",
        "normalized": "DirTree a-\u003eDirTree b-\u003eOrdering",
        "package": "directory-tree",
        "partial": "Shape",
        "signature": "DirTree a-\u003eDirTree b-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:contents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "[DirTree a]",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "contents"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "contents",
        "normalized": "[DirTree a]",
        "package": "directory-tree",
        "partial": "",
        "signature": "[DirTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:dirTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a",
        "fct-source": "src/System-Directory-Tree.html#AnchoredDirTree",
        "fct-type": "function",
        "title": "dirTree"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "dirTree",
        "normalized": "",
        "package": "directory-tree",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:dropTo",
      "description": {
        "fct-descr": "\u003cp\u003eIf the argument is a \u003ccode\u003e\u003ca\u003eDir\u003c/a\u003e\u003c/code\u003e containing a sub-DirTree matching \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e\n then return that subtree, appending the \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e of the old root \u003ccode\u003e\u003ca\u003eDir\u003c/a\u003e\u003c/code\u003e to the\n \u003ccode\u003e\u003ca\u003eanchor\u003c/a\u003e\u003c/code\u003e of the AnchoredDirTree wrapper. Otherwise return \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FileName -\u003e AnchoredDirTree a -\u003e Maybe (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#dropTo",
        "fct-type": "function",
        "title": "dropTo"
      },
      "index": {
        "description": "If the argument is Dir containing sub-DirTree matching FileName then return that subtree appending the name of the old root Dir to the anchor of the AnchoredDirTree wrapper Otherwise return Nothing",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "dropTo",
        "normalized": "FileName-\u003eAnchoredDirTree a-\u003eMaybe(AnchoredDirTree a)",
        "package": "directory-tree",
        "partial": "To",
        "signature": "FileName-\u003eAnchoredDirTree a-\u003eMaybe(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:equalShape",
      "description": {
        "fct-descr": "\u003cp\u003eTests equality of two trees, ignoring their free variable portion. Can be\n used to check if any files have been added or deleted, for instance.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e DirTree b -\u003e Bool",
        "fct-source": "src/System-Directory-Tree.html#equalShape",
        "fct-type": "function",
        "title": "equalShape"
      },
      "index": {
        "description": "Tests equality of two trees ignoring their free variable portion Can be used to check if any files have been added or deleted for instance",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "equalShape",
        "normalized": "DirTree a-\u003eDirTree b-\u003eBool",
        "package": "directory-tree",
        "partial": "Shape",
        "signature": "DirTree a-\u003eDirTree b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:err",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "IOException",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "err",
        "normalized": "",
        "package": "directory-tree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:failed",
      "description": {
        "fct-descr": "\u003cp\u003ereturns true if argument is a \u003ccode\u003e\u003ca\u003eFailed\u003c/a\u003e\u003c/code\u003e constructor:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e Bool",
        "fct-source": "src/System-Directory-Tree.html#failed",
        "fct-type": "function",
        "title": "failed"
      },
      "index": {
        "description": "returns true if argument is Failed constructor",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "failed",
        "normalized": "DirTree a-\u003eBool",
        "package": "directory-tree",
        "partial": "",
        "signature": "DirTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:failedMap",
      "description": {
        "fct-descr": "\u003cp\u003emaps a function to convert Failed DirTrees to Files or Dirs\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FileName -\u003e IOException -\u003e DirTree a) -\u003e DirTree a -\u003e DirTree a",
        "fct-source": "src/System-Directory-Tree.html#failedMap",
        "fct-type": "function",
        "title": "failedMap"
      },
      "index": {
        "description": "maps function to convert Failed DirTrees to Files or Dirs",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "failedMap",
        "normalized": "(FileName-\u003eIOException-\u003eDirTree a)-\u003eDirTree a-\u003eDirTree a",
        "package": "directory-tree",
        "partial": "Map",
        "signature": "(FileName-\u003eIOException-\u003eDirTree a)-\u003eDirTree a-\u003eDirTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:failures",
      "description": {
        "fct-descr": "\u003cp\u003ereturns a list of \u003ccode\u003e\u003ca\u003eFailed\u003c/a\u003e\u003c/code\u003e constructors only:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e [DirTree a]",
        "fct-source": "src/System-Directory-Tree.html#failures",
        "fct-type": "function",
        "title": "failures"
      },
      "index": {
        "description": "returns list of Failed constructors only",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "failures",
        "normalized": "DirTree a-\u003e[DirTree a]",
        "package": "directory-tree",
        "partial": "",
        "signature": "DirTree a-\u003e[DirTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:file",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "a",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "file"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "file",
        "normalized": "",
        "package": "directory-tree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:filterDir",
      "description": {
        "fct-descr": "\u003cp\u003eapplies the predicate to each constructor in the tree, removing it (and\n its children, of course) when the predicate returns False. The topmost \n constructor will always be preserved:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(DirTree a -\u003e Bool) -\u003e DirTree a -\u003e DirTree a",
        "fct-source": "src/System-Directory-Tree.html#filterDir",
        "fct-type": "function",
        "title": "filterDir"
      },
      "index": {
        "description": "applies the predicate to each constructor in the tree removing it and its children of course when the predicate returns False The topmost constructor will always be preserved",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "filterDir",
        "normalized": "(DirTree a-\u003eBool)-\u003eDirTree a-\u003eDirTree a",
        "package": "directory-tree",
        "partial": "Dir",
        "signature": "(DirTree a-\u003eBool)-\u003eDirTree a-\u003eDirTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:flattenDir",
      "description": {
        "fct-descr": "\u003cp\u003eFlattens a \u003ccode\u003e\u003ca\u003eDirTree\u003c/a\u003e\u003c/code\u003e into a (never empty) list of tree constructors. \u003ccode\u003e\u003ca\u003eDir\u003c/a\u003e\u003c/code\u003e\n constructors will have [] as their \u003ccode\u003e\u003ca\u003econtents\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e [DirTree a]",
        "fct-source": "src/System-Directory-Tree.html#flattenDir",
        "fct-type": "function",
        "title": "flattenDir"
      },
      "index": {
        "description": "Flattens DirTree into never empty list of tree constructors Dir constructors will have as their contents",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "flattenDir",
        "normalized": "DirTree a-\u003e[DirTree a]",
        "package": "directory-tree",
        "partial": "Dir",
        "signature": "DirTree a-\u003e[DirTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:free",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use record 'dirTree'\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED. Use record \u003ccode\u003e\u003ca\u003edirTree\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "AnchoredDirTree a -\u003e DirTree a",
        "fct-source": "src/System-Directory-Tree.html#free",
        "fct-type": "function",
        "title": "free"
      },
      "index": {
        "description": "Deprecated Use record dirTree DEPRECATED Use record dirTree instead",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "free",
        "normalized": "AnchoredDirTree a-\u003eDirTree a",
        "package": "directory-tree",
        "partial": "",
        "signature": "AnchoredDirTree a-\u003eDirTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FileName",
        "fct-source": "src/System-Directory-Tree.html#DirTree",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "name",
        "normalized": "",
        "package": "directory-tree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:openDirectory",
      "description": {
        "fct-descr": "\u003cp\u003ea simple application of readDirectoryWith openFile:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO (AnchoredDirTree Handle)",
        "fct-source": "src/System-Directory-Tree.html#openDirectory",
        "fct-type": "function",
        "title": "openDirectory"
      },
      "index": {
        "description": "simple application of readDirectoryWith openFile",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "openDirectory",
        "normalized": "FilePath-\u003eIOMode-\u003eIO(AnchoredDirTree Handle)",
        "package": "directory-tree",
        "partial": "Directory",
        "signature": "FilePath-\u003eIOMode-\u003eIO(AnchoredDirTree Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:readDirectory",
      "description": {
        "fct-descr": "\u003cp\u003ebuild an AnchoredDirTree, given the path to a directory, opening the files\n using readFile. \n Uses \u003ccode\u003e\u003ca\u003ereadDirectoryWith\u003c/a\u003e\u003c/code\u003e internally and has the effect of traversing the\n entire directory structure. See \u003ccode\u003e\u003ca\u003ereadDirectoryWithL\u003c/a\u003e\u003c/code\u003e for lazy production\n of a DirTree structure.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "FilePath -\u003e IO (AnchoredDirTree String)",
        "fct-source": "src/System-Directory-Tree.html#readDirectory",
        "fct-type": "function",
        "title": "readDirectory"
      },
      "index": {
        "description": "build an AnchoredDirTree given the path to directory opening the files using readFile Uses readDirectoryWith internally and has the effect of traversing the entire directory structure See readDirectoryWithL for lazy production of DirTree structure",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "readDirectory",
        "normalized": "FilePath-\u003eIO(AnchoredDirTree String)",
        "package": "directory-tree",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO(AnchoredDirTree String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:readDirectoryWith",
      "description": {
        "fct-descr": "\u003cp\u003esame as readDirectory but allows us to, for example, use \n ByteString.readFile to return a tree of ByteStrings.\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FilePath -\u003e IO a) -\u003e FilePath -\u003e IO (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#readDirectoryWith",
        "fct-type": "function",
        "title": "readDirectoryWith"
      },
      "index": {
        "description": "same as readDirectory but allows us to for example use ByteString.readFile to return tree of ByteStrings",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "readDirectoryWith",
        "normalized": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(AnchoredDirTree a)",
        "package": "directory-tree",
        "partial": "Directory With",
        "signature": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:readDirectoryWithL",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003elazy\u003c/a\u003e version of \u003ccode\u003e\u003ca\u003ereadDirectoryWith\u003c/a\u003e\u003c/code\u003e that does IO operations as needed\n i.e. as the tree is traversed in pure code.\n \u003cem\u003eNOTE:\u003c/em\u003e This function uses unsafePerformIO under the hood. I believe our use\n here is safe, but this function is experimental in this release:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FilePath -\u003e IO a) -\u003e FilePath -\u003e IO (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#readDirectoryWithL",
        "fct-type": "function",
        "title": "readDirectoryWithL"
      },
      "index": {
        "description": "lazy version of readDirectoryWith that does IO operations as needed i.e as the tree is traversed in pure code NOTE This function uses unsafePerformIO under the hood believe our use here is safe but this function is experimental in this release",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "readDirectoryWithL",
        "normalized": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(AnchoredDirTree a)",
        "package": "directory-tree",
        "partial": "Directory With",
        "signature": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:sortDir",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively sort a directory tree according to the Ord instance\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e DirTree a",
        "fct-source": "src/System-Directory-Tree.html#sortDir",
        "fct-type": "function",
        "title": "sortDir"
      },
      "index": {
        "description": "Recursively sort directory tree according to the Ord instance",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "sortDir",
        "normalized": "DirTree a-\u003eDirTree a",
        "package": "directory-tree",
        "partial": "Dir",
        "signature": "DirTree a-\u003eDirTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:sortDirShape",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively sort a tree as in \u003ccode\u003e\u003ca\u003esortDir\u003c/a\u003e\u003c/code\u003e but ignore the file contents of a\n File constructor\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e DirTree a",
        "fct-source": "src/System-Directory-Tree.html#sortDirShape",
        "fct-type": "function",
        "title": "sortDirShape"
      },
      "index": {
        "description": "Recursively sort tree as in sortDir but ignore the file contents of File constructor",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "sortDirShape",
        "normalized": "DirTree a-\u003eDirTree a",
        "package": "directory-tree",
        "partial": "Dir Shape",
        "signature": "DirTree a-\u003eDirTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:successful",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if there are no Failed constructors in the tree\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "DirTree a -\u003e Bool",
        "fct-source": "src/System-Directory-Tree.html#successful",
        "fct-type": "function",
        "title": "successful"
      },
      "index": {
        "description": "True if there are no Failed constructors in the tree",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "successful",
        "normalized": "DirTree a-\u003eBool",
        "package": "directory-tree",
        "partial": "",
        "signature": "DirTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:writeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003ewrite a DirTree of strings to disk. Clobbers files of the same name. \n Doesn't affect files in the directories (if any already exist) with \n different names. Returns a new AnchoredDirTree where failures were\n lifted into a \u003ccode\u003e\u003ca\u003eFailed\u003c/a\u003e\u003c/code\u003e constructor:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "AnchoredDirTree String -\u003e IO (AnchoredDirTree ())",
        "fct-source": "src/System-Directory-Tree.html#writeDirectory",
        "fct-type": "function",
        "title": "writeDirectory"
      },
      "index": {
        "description": "write DirTree of strings to disk Clobbers files of the same name Doesn affect files in the directories if any already exist with different names Returns new AnchoredDirTree where failures were lifted into Failed constructor",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "writeDirectory",
        "normalized": "AnchoredDirTree String-\u003eIO(AnchoredDirTree())",
        "package": "directory-tree",
        "partial": "Directory",
        "signature": "AnchoredDirTree String-\u003eIO(AnchoredDirTree())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:writeDirectoryWith",
      "description": {
        "fct-descr": "\u003cp\u003ewrites the directory structure to disk and uses the provided function to \n write the contents of \u003ccode\u003eFiles\u003c/code\u003e to disk. The return value of the function will\n become the new \u003ccode\u003e\u003ca\u003econtents\u003c/a\u003e\u003c/code\u003e of the returned, where IO errors at each node are\n replaced with \u003ccode\u003e\u003ca\u003eFailed\u003c/a\u003e\u003c/code\u003e constructors. The returned tree can be compared to\n the passed tree to see what operations, if any, failed:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "(FilePath -\u003e a -\u003e IO b) -\u003e AnchoredDirTree a -\u003e IO (AnchoredDirTree b)",
        "fct-source": "src/System-Directory-Tree.html#writeDirectoryWith",
        "fct-type": "function",
        "title": "writeDirectoryWith"
      },
      "index": {
        "description": "writes the directory structure to disk and uses the provided function to write the contents of Files to disk The return value of the function will become the new contents of the returned where IO errors at each node are replaced with Failed constructors The returned tree can be compared to the passed tree to see what operations if any failed",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "writeDirectoryWith",
        "normalized": "(FilePath-\u003ea-\u003eIO b)-\u003eAnchoredDirTree a-\u003eIO(AnchoredDirTree b)",
        "package": "directory-tree",
        "partial": "Directory With",
        "signature": "(FilePath-\u003ea-\u003eIO b)-\u003eAnchoredDirTree a-\u003eIO(AnchoredDirTree b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:writeJustDirs",
      "description": {
        "fct-descr": "\u003cp\u003ewrites the directory structure (not files) of a DirTree to the anchored \n directory. Returns a structure identical to the supplied tree with errors\n replaced by \u003ccode\u003e\u003ca\u003eFailed\u003c/a\u003e\u003c/code\u003e constructors:\n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "AnchoredDirTree a -\u003e IO (AnchoredDirTree a)",
        "fct-source": "src/System-Directory-Tree.html#writeJustDirs",
        "fct-type": "function",
        "title": "writeJustDirs"
      },
      "index": {
        "description": "writes the directory structure not files of DirTree to the anchored directory Returns structure identical to the supplied tree with errors replaced by Failed constructors",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "writeJustDirs",
        "normalized": "AnchoredDirTree a-\u003eIO(AnchoredDirTree a)",
        "package": "directory-tree",
        "partial": "Just Dirs",
        "signature": "AnchoredDirTree a-\u003eIO(AnchoredDirTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory-tree/docs/System-Directory-Tree.html#v:zipPaths",
      "description": {
        "fct-descr": "\u003cp\u003etuple up the complete file path with the \u003ccode\u003e\u003ca\u003efile\u003c/a\u003e\u003c/code\u003e contents, by building up the \n path, trie-style, from the root. The filepath will be relative to \"anchored\"\n directory.\n\u003c/p\u003e\u003cp\u003eThis allows us to, for example, \u003ccode\u003emapM_ uncurry writeFile\u003c/code\u003e over a DirTree of \n strings, although \u003ccode\u003e\u003ca\u003ewriteDirectory\u003c/a\u003e\u003c/code\u003e does a better job of this. \n\u003c/p\u003e",
        "fct-module": "System.Directory.Tree",
        "fct-package": "directory-tree",
        "fct-signature": "AnchoredDirTree a -\u003e DirTree (FilePath, a)",
        "fct-source": "src/System-Directory-Tree.html#zipPaths",
        "fct-type": "function",
        "title": "zipPaths"
      },
      "index": {
        "description": "tuple up the complete file path with the file contents by building up the path trie-style from the root The filepath will be relative to anchored directory This allows us to for example mapM uncurry writeFile over DirTree of strings although writeDirectory does better job of this",
        "hierarchy": "System Directory Tree",
        "module": "System.Directory.Tree",
        "name": "zipPaths",
        "normalized": "AnchoredDirTree a-\u003eDirTree(FilePath,a)",
        "package": "directory-tree",
        "partial": "Paths",
        "signature": "AnchoredDirTree a-\u003eDirTree(FilePath,a)"
      }
    }
  }
]