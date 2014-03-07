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
        "word": "makedo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "source": "src/Makedo-Contained.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "partial": "Contained",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust one of the possible \u003ccode\u003ea\u003c/code\u003e used to generate a path component\n   which will then just be chopped off again with takeDirectory\n\u003c/p\u003e",
          "module": "Makedo.Contained",
          "name": "Containable",
          "package": "makedo",
          "source": "src/Makedo-Contained.html#Containable",
          "type": "class"
        },
        "index": {
          "description": "Just one of the possible used to generate path component which will then just be chopped off again with takeDirectory",
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "Containable",
          "package": "makedo",
          "partial": "Containable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#t:Containable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eredo 0.06 and under do not like it if you try to redo something that's\n   in a directory that does not yet exist, so unfortunately, we need some way\n   to create the parent directories before invoking the targets\n\u003c/p\u003e",
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "source": "src/Makedo-Contained.html#Contained",
          "type": "data"
        },
        "index": {
          "description": "redo and under do not like it if you try to redo something that in directory that does not yet exist so unfortunately we need some way to create the parent directories before invoking the targets",
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "partial": "Contained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#t:Contained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "signature": "Contained",
          "source": "src/Makedo-Contained.html#Contained",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "Contained",
          "package": "makedo",
          "partial": "Contained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:Contained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould be superset of targets\n\u003c/p\u003e",
          "module": "Makedo.Contained",
          "name": "allTargets",
          "package": "makedo",
          "signature": "[Target]",
          "source": "src/Makedo-Contained.html#Contained",
          "type": "function"
        },
        "index": {
          "description": "should be superset of targets",
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "allTargets",
          "normalized": "[Target]",
          "package": "makedo",
          "partial": "Targets",
          "signature": "[Target]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:allTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "containers",
          "package": "makedo",
          "signature": "[FilePath]",
          "source": "src/Makedo-Contained.html#Contained",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "containers",
          "normalized": "[FilePath]",
          "package": "makedo",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:containers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "czero",
          "package": "makedo",
          "signature": "a",
          "source": "src/Makedo-Contained.html#czero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "czero",
          "package": "makedo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:czero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "mkContained",
          "package": "makedo",
          "signature": "[b -\u003e ExactTarget]-\u003e [b]-\u003e Contained",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "mkContained",
          "normalized": "[a-\u003eExactTarget]-\u003e[a]-\u003eContained",
          "package": "makedo",
          "partial": "Contained",
          "signature": "[b-\u003eExactTarget]-\u003e[b]-\u003eContained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:mkContained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Contained",
          "name": "targets",
          "package": "makedo",
          "signature": "[ExactTarget]",
          "source": "src/Makedo-Contained.html#Contained",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Contained",
          "module": "Makedo.Contained",
          "name": "targets",
          "normalized": "[ExactTarget]",
          "package": "makedo",
          "signature": "[ExactTarget]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Contained.html#v:targets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "source": "src/Makedo-Target.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "partial": "Target",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTargets that use an exact filename match\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "ExactTarget",
          "package": "makedo",
          "source": "src/Makedo-Target.html#ExactTarget",
          "type": "data"
        },
        "index": {
          "description": "Targets that use an exact filename match",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "ExactTarget",
          "package": "makedo",
          "partial": "Exact Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:ExactTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "RedoArgs",
          "package": "makedo",
          "source": "src/Makedo-Target.html#RedoArgs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "RedoArgs",
          "package": "makedo",
          "partial": "Redo Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:RedoArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for targets that take parameters which you want to\n   convert into path components\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "ShowPC",
          "package": "makedo",
          "source": "src/Makedo-Target.html#ShowPC",
          "type": "class"
        },
        "index": {
          "description": "Useful for targets that take parameters which you want to convert into path components",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "ShowPC",
          "package": "makedo",
          "partial": "Show PC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:ShowPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA makedo script is basically just a list of \u003ccode\u003e\u003ca\u003eTarget\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf a target matches the input file name, its action is run\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "source": "src/Makedo-Target.html#Target",
          "type": "data"
        },
        "index": {
          "description": "makedo script is basically just list of Target If target matches the input file name its action is run",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "partial": "Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "TargetLike",
          "package": "makedo",
          "source": "src/Makedo-Target.html#TargetLike",
          "type": "class"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "TargetLike",
          "package": "makedo",
          "partial": "Target Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:TargetLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "WildcardTarget",
          "package": "makedo",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "data"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "WildcardTarget",
          "package": "makedo",
          "partial": "Wildcard Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#t:WildcardTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "ExactTarget",
          "package": "makedo",
          "signature": "ExactTarget",
          "source": "src/Makedo-Target.html#ExactTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "ExactTarget",
          "package": "makedo",
          "partial": "Exact Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:ExactTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "RedoArgs",
          "package": "makedo",
          "signature": "RedoArgs",
          "source": "src/Makedo-Target.html#RedoArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "RedoArgs",
          "package": "makedo",
          "partial": "Redo Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:RedoArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "signature": "Target",
          "source": "src/Makedo-Target.html#Target",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "Target",
          "package": "makedo",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "WildcardTarget",
          "package": "makedo",
          "signature": "WildcardTarget",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "WildcardTarget",
          "package": "makedo",
          "partial": "Wildcard Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:WildcardTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "action",
          "package": "makedo",
          "signature": "RedoArgs -\u003e IO ()",
          "source": "src/Makedo-Target.html#Target",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "action",
          "normalized": "RedoArgs-\u003eIO()",
          "package": "makedo",
          "signature": "RedoArgs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(name, blurb) for human consumption only\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "description",
          "package": "makedo",
          "signature": "(String, String)",
          "source": "src/Makedo-Target.html#Target",
          "type": "function"
        },
        "index": {
          "description": "name blurb for human consumption only",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "description",
          "normalized": "(String,String)",
          "package": "makedo",
          "signature": "(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "eAction",
          "package": "makedo",
          "signature": "RedoArgs -\u003e IO ()",
          "source": "src/Makedo-Target.html#ExactTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "eAction",
          "normalized": "RedoArgs-\u003eIO()",
          "package": "makedo",
          "partial": "Action",
          "signature": "RedoArgs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:eAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "eBlurb",
          "package": "makedo",
          "signature": "String",
          "source": "src/Makedo-Target.html#ExactTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "eBlurb",
          "package": "makedo",
          "partial": "Blurb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:eBlurb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "ePath",
          "package": "makedo",
          "signature": "FilePath",
          "source": "src/Makedo-Target.html#ExactTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "ePath",
          "package": "makedo",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:ePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial target that prints out the targets you can run\n   Note that makedo automatically includes this\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "listing",
          "package": "makedo",
          "signature": "[Target] -\u003e ExactTarget",
          "source": "src/Makedo-Target.html#listing",
          "type": "function"
        },
        "index": {
          "description": "Special target that prints out the targets you can run Note that makedo automatically includes this",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "listing",
          "normalized": "[Target]-\u003eExactTarget",
          "package": "makedo",
          "signature": "[Target]-\u003eExactTarget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:listing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "match",
          "package": "makedo",
          "signature": "FilePath -\u003e Bool",
          "source": "src/Makedo-Target.html#Target",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "match",
          "normalized": "FilePath-\u003eBool",
          "package": "makedo",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "redo",
          "package": "makedo",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Makedo-Target.html#redo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "redo",
          "normalized": "[String]-\u003eIO()",
          "package": "makedo",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:redo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "redoIfChange",
          "package": "makedo",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Makedo-Target.html#redoIfChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "redoIfChange",
          "normalized": "[String]-\u003eIO()",
          "package": "makedo",
          "partial": "If Change",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:redoIfChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour main function should probably just invoke this and do nothing\n   else\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "redoMain",
          "package": "makedo",
          "signature": "[Target] -\u003e IO ()",
          "source": "src/Makedo-Target.html#redoMain",
          "type": "function"
        },
        "index": {
          "description": "Your main function should probably just invoke this and do nothing else",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "redoMain",
          "normalized": "[Target]-\u003eIO()",
          "package": "makedo",
          "partial": "Main",
          "signature": "[Target]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:redoMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "rext",
          "package": "makedo",
          "signature": "String",
          "source": "src/Makedo-Target.html#RedoArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "rext",
          "package": "makedo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:rext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edesired filename\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "rname",
          "package": "makedo",
          "signature": "FilePath",
          "source": "src/Makedo-Target.html#RedoArgs",
          "type": "function"
        },
        "index": {
          "description": "desired filename",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "rname",
          "package": "makedo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:rname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "runVerbosely",
          "package": "makedo",
          "signature": "a -\u003e IO ()",
          "source": "src/Makedo-Target.html#runVerbosely",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "runVerbosely",
          "normalized": "a-\u003eIO()",
          "package": "makedo",
          "partial": "Verbosely",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:runVerbosely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etemporary file managed by redo; write your output here\n   or to stdout; it will be renamed to \u003ccode\u003e\u003ca\u003ername\u003c/a\u003e\u003c/code\u003e if the rule\n   is successful\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "rwrite",
          "package": "makedo",
          "signature": "FilePath",
          "source": "src/Makedo-Target.html#RedoArgs",
          "type": "function"
        },
        "index": {
          "description": "temporary file managed by redo write your output here or to stdout it will be renamed to rname if the rule is successful",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "rwrite",
          "package": "makedo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:rwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "showPC",
          "package": "makedo",
          "signature": "a -\u003e String",
          "source": "src/Makedo-Target.html#showPC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "showPC",
          "normalized": "a-\u003eString",
          "package": "makedo",
          "partial": "PC",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:showPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "stampAll",
          "package": "makedo",
          "signature": "FilePath -\u003e [String] -\u003e IO ()",
          "source": "src/Makedo-Target.html#stampAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "stampAll",
          "normalized": "FilePath-\u003e[String]-\u003eIO()",
          "package": "makedo",
          "partial": "All",
          "signature": "FilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:stampAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "target",
          "package": "makedo",
          "signature": "t -\u003e Target",
          "source": "src/Makedo-Target.html#target",
          "type": "method"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "target",
          "normalized": "a-\u003eTarget",
          "package": "makedo",
          "signature": "t-\u003eTarget",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "wAction",
          "package": "makedo",
          "signature": "RedoArgs -\u003e IO ()",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "wAction",
          "normalized": "RedoArgs-\u003eIO()",
          "package": "makedo",
          "partial": "Action",
          "signature": "RedoArgs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:wAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "wBlurb",
          "package": "makedo",
          "signature": "String",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "wBlurb",
          "package": "makedo",
          "partial": "Blurb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:wBlurb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas recognised by System.FilePath\n\u003c/p\u003e",
          "module": "Makedo.Target",
          "name": "wExtension",
          "package": "makedo",
          "signature": "String",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "function"
        },
        "index": {
          "description": "as recognised by System.FilePath",
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "wExtension",
          "package": "makedo",
          "partial": "Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:wExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo.Target",
          "name": "wPrefix",
          "package": "makedo",
          "signature": "FilePath",
          "source": "src/Makedo-Target.html#WildcardTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Makedo Target",
          "module": "Makedo.Target",
          "name": "wPrefix",
          "package": "makedo",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo-Target.html#v:wPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Makedo",
          "name": "Makedo",
          "package": "makedo",
          "source": "src/Makedo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Makedo",
          "module": "Makedo",
          "name": "Makedo",
          "package": "makedo",
          "partial": "Makedo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/makedo/docs/Makedo.html#"
      }
    }
  ]
]