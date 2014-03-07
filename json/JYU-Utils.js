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
        "word": "JYU-Utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.BinaryInstances",
          "name": "BinaryInstances",
          "package": "JYU-Utils",
          "source": "src/Utils-BinaryInstances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils BinaryInstances",
          "module": "Utils.BinaryInstances",
          "name": "BinaryInstances",
          "package": "JYU-Utils",
          "partial": "Binary Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-BinaryInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Darcs",
          "name": "Darcs",
          "package": "JYU-Utils",
          "source": "src/Utils-Darcs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Darcs",
          "module": "Utils.Darcs",
          "name": "Darcs",
          "package": "JYU-Utils",
          "partial": "Darcs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Darcs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DynMap",
          "name": "DynMap",
          "package": "JYU-Utils",
          "source": "src/Utils-DynMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils DynMap",
          "module": "Utils.DynMap",
          "name": "DynMap",
          "package": "JYU-Utils",
          "partial": "Dyn Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-DynMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DynMap",
          "name": "PropertyMap",
          "package": "JYU-Utils",
          "source": "src/Utils-DynMap.html#PropertyMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Utils DynMap",
          "module": "Utils.DynMap",
          "name": "PropertyMap",
          "package": "JYU-Utils",
          "partial": "Property Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-DynMap.html#t:PropertyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DynMap",
          "name": "(=:)",
          "package": "JYU-Utils",
          "signature": "String -\u003e a -\u003e State PropertyMap ()",
          "source": "src/Utils-DynMap.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils DynMap",
          "module": "Utils.DynMap",
          "name": "(=:) =:",
          "normalized": "String-\u003ea-\u003eState PropertyMap()",
          "package": "JYU-Utils",
          "signature": "String-\u003ea-\u003eState PropertyMap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-DynMap.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DynMap",
          "name": "PM",
          "package": "JYU-Utils",
          "signature": "PM (Map String (String, Dynamic))",
          "source": "src/Utils-DynMap.html#PropertyMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils DynMap",
          "module": "Utils.DynMap",
          "name": "PM",
          "normalized": "PM(Map String(String,Dynamic))",
          "package": "JYU-Utils",
          "partial": "PM",
          "signature": "PM(Map String(String,Dynamic))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-DynMap.html#v:PM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DynMap",
          "name": "emptyD",
          "package": "JYU-Utils",
          "signature": "PropertyMap",
          "source": "src/Utils-DynMap.html#emptyD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils DynMap",
          "module": "Utils.DynMap",
          "name": "emptyD",
          "package": "JYU-Utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-DynMap.html#v:emptyD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Exception",
          "name": "Exception",
          "package": "JYU-Utils",
          "source": "src/Utils-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Exception",
          "module": "Utils.Exception",
          "name": "Exception",
          "package": "JYU-Utils",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.File",
          "name": "File",
          "package": "JYU-Utils",
          "source": "src/Utils-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "File",
          "package": "JYU-Utils",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache results of operation op under name \u003ccode\u003efn\u003c/code\u003e. \n   if correct file is found, its contents are used, otherwise \u003ccode\u003eop\u003c/code\u003e is performed and it's results\n   are saved to the filed and returned from the call. \n\u003c/p\u003e",
          "module": "Utils.File",
          "name": "Cacheable",
          "package": "JYU-Utils",
          "source": "src/Utils-File.html#Cacheable",
          "type": "class"
        },
        "index": {
          "description": "Cache results of operation op under name fn if correct file is found its contents are used otherwise op is performed and it results are saved to the filed and returned from the call",
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "Cacheable",
          "package": "JYU-Utils",
          "partial": "Cacheable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#t:Cacheable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.File",
          "name": "cached",
          "package": "JYU-Utils",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Utils-File.html#cached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "cached",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "JYU-Utils",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#v:cached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.File",
          "name": "inDirectory",
          "package": "JYU-Utils",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Utils-File.html#inDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "inDirectory",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "JYU-Utils",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#v:inDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.File",
          "name": "readCache",
          "package": "JYU-Utils",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Utils-File.html#readCache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "readCache",
          "normalized": "FilePath-\u003eIO a",
          "package": "JYU-Utils",
          "partial": "Cache",
          "signature": "FilePath-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#v:readCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.File",
          "name": "writeCache",
          "package": "JYU-Utils",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Utils-File.html#writeCache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils File",
          "module": "Utils.File",
          "name": "writeCache",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "JYU-Utils",
          "partial": "Cache",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-File.html#v:writeCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "Function",
          "package": "JYU-Utils",
          "source": "src/Utils-Function.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "Function",
          "package": "JYU-Utils",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "maxBy",
          "package": "JYU-Utils",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e a -\u003e a",
          "source": "src/Utils-Function.html#maxBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "maxBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "package": "JYU-Utils",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Function.html#v:maxBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "minBy",
          "package": "JYU-Utils",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e a -\u003e a",
          "source": "src/Utils-Function.html#minBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "minBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "package": "JYU-Utils",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Function.html#v:minBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "List",
          "package": "JYU-Utils",
          "source": "src/Utils-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "List",
          "package": "JYU-Utils",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "applyMapM",
          "package": "JYU-Utils",
          "signature": "a -\u003e [a -\u003e m b] -\u003e m [b]",
          "source": "src/Utils-List.html#applyMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "applyMapM",
          "normalized": "a-\u003e[a-\u003eb c]-\u003eb[c]",
          "package": "JYU-Utils",
          "partial": "Map",
          "signature": "a-\u003e[a-\u003em b]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#v:applyMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "changesM",
          "package": "JYU-Utils",
          "signature": "[a -\u003e m b] -\u003e a -\u003e m [b]",
          "source": "src/Utils-List.html#changesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "changesM",
          "normalized": "[a-\u003eb c]-\u003ea-\u003eb[c]",
          "package": "JYU-Utils",
          "signature": "[a-\u003em b]-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#v:changesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup list into indevidual pairs: [1,2,3,4] =\u003e [(1,2),(3,4)]. \n   Works only with even number of elements\n\u003c/p\u003e\u003cp\u003eUndo pairs function\n\u003c/p\u003e\u003cp\u003eGroup list into pairs: [1,2,3] =\u003e [(1,2),(2,3)]. \n   Works with non null lists\n\u003c/p\u003e\u003cp\u003eUndo pairs1 function\n\u003c/p\u003e",
          "module": "Utils.List",
          "name": "clusterBy",
          "package": "JYU-Utils",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#clusterBy",
          "type": "function"
        },
        "index": {
          "description": "Group list into indevidual pairs Works only with even number of elements Undo pairs function Group list into pairs Works with non null lists Undo pairs1 function",
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "clusterBy",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[[a]]",
          "package": "JYU-Utils",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#v:clusterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "schwartzianTransform",
          "package": "JYU-Utils",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#schwartzianTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "schwartzianTransform",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "JYU-Utils",
          "partial": "Transform",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#v:schwartzianTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "splitBy",
          "package": "JYU-Utils",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#splitBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "splitBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "JYU-Utils",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-List.html#v:splitBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Monad",
          "name": "Monad",
          "package": "JYU-Utils",
          "source": "src/Utils-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Monad",
          "module": "Utils.Monad",
          "name": "Monad",
          "package": "JYU-Utils",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Monad",
          "name": "doWhile",
          "package": "JYU-Utils",
          "signature": "(a -\u003e m (Maybe a)) -\u003e a -\u003e m a",
          "source": "src/Utils-Monad.html#doWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Monad",
          "module": "Utils.Monad",
          "name": "doWhile",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "JYU-Utils",
          "partial": "While",
          "signature": "(a-\u003em(Maybe a))-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Monad.html#v:doWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Monad",
          "name": "sequenceWithParM",
          "package": "JYU-Utils",
          "signature": "a -\u003e [a -\u003e m a] -\u003e m a",
          "source": "src/Utils-Monad.html#sequenceWithParM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Monad",
          "module": "Utils.Monad",
          "name": "sequenceWithParM",
          "normalized": "a-\u003e[a-\u003eb a]-\u003eb a",
          "package": "JYU-Utils",
          "partial": "With Par",
          "signature": "a-\u003e[a-\u003em a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Monad.html#v:sequenceWithParM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Monad",
          "name": "untilM",
          "package": "JYU-Utils",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Utils-Monad.html#untilM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Monad",
          "module": "Utils.Monad",
          "name": "untilM",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "JYU-Utils",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Monad.html#v:untilM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "MonadRandom",
          "package": "JYU-Utils",
          "source": "src/Utils-MonadRandom.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "MonadRandom",
          "package": "JYU-Utils",
          "partial": "Monad Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "MonadRandom",
          "package": "JYU-Utils",
          "source": "src/Utils-MonadRandom.html#MonadRandom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "MonadRandom",
          "package": "JYU-Utils",
          "partial": "Monad Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#t:MonadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "Rand",
          "package": "JYU-Utils",
          "source": "src/Utils-MonadRandom.html#Rand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "Rand",
          "package": "JYU-Utils",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "RandomT",
          "package": "JYU-Utils",
          "source": "src/Utils-MonadRandom.html#RandomT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "RandomT",
          "package": "JYU-Utils",
          "partial": "Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#t:RandomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "cauchyR",
          "package": "JYU-Utils",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Utils-MonadRandom.html#cauchyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "cauchyR",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "JYU-Utils",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:cauchyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "chooseAtRandom",
          "package": "JYU-Utils",
          "signature": "(b, b) -\u003e m b",
          "source": "src/Utils-MonadRandom.html#chooseAtRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "chooseAtRandom",
          "normalized": "(a,a)-\u003eb a",
          "package": "JYU-Utils",
          "partial": "At Random",
          "signature": "(b,b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:chooseAtRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "evalRand",
          "package": "JYU-Utils",
          "signature": "Rand g a -\u003e g -\u003e a",
          "source": "src/Utils-MonadRandom.html#evalRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "evalRand",
          "normalized": "Rand a b-\u003ea-\u003eb",
          "package": "JYU-Utils",
          "partial": "Rand",
          "signature": "Rand g a-\u003eg-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:evalRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "evalRandomIO",
          "package": "JYU-Utils",
          "signature": "RandomT StdGen m b -\u003e m b",
          "source": "src/Utils-MonadRandom.html#evalRandomIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "evalRandomIO",
          "normalized": "RandomT StdGen a b-\u003ea b",
          "package": "JYU-Utils",
          "partial": "Random IO",
          "signature": "RandomT StdGen m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:evalRandomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "evalRandomT",
          "package": "JYU-Utils",
          "signature": "RandomT g m a -\u003e g -\u003e m a",
          "source": "src/Utils-MonadRandom.html#evalRandomT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "evalRandomT",
          "normalized": "RandomT a b c-\u003ea-\u003eb c",
          "package": "JYU-Utils",
          "partial": "Random",
          "signature": "RandomT g m a-\u003eg-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:evalRandomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "fromList",
          "package": "JYU-Utils",
          "signature": "[(a, Rational)] -\u003e m a",
          "source": "src/Utils-MonadRandom.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "fromList",
          "normalized": "[(a,Rational)]-\u003eb a",
          "package": "JYU-Utils",
          "partial": "List",
          "signature": "[(a,Rational)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "fromNonWeightedList",
          "package": "JYU-Utils",
          "signature": "[b] -\u003e m b",
          "source": "src/Utils-MonadRandom.html#fromNonWeightedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "fromNonWeightedList",
          "normalized": "[a]-\u003eb a",
          "package": "JYU-Utils",
          "partial": "Non Weighted List",
          "signature": "[b]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:fromNonWeightedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "gaussianPerturbation",
          "package": "JYU-Utils",
          "signature": "c -\u003e [c] -\u003e m [c]",
          "source": "src/Utils-MonadRandom.html#gaussianPerturbation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "gaussianPerturbation",
          "normalized": "a-\u003e[a]-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Perturbation",
          "signature": "c-\u003e[c]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:gaussianPerturbation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "gaussianPerturbationR",
          "package": "JYU-Utils",
          "signature": "[c] -\u003e [c] -\u003e m [c]",
          "source": "src/Utils-MonadRandom.html#gaussianPerturbationR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "gaussianPerturbationR",
          "normalized": "[a]-\u003e[a]-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Perturbation",
          "signature": "[c]-\u003e[c]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:gaussianPerturbationR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "gaussianRand",
          "package": "JYU-Utils",
          "signature": "m [a]",
          "source": "src/Utils-MonadRandom.html#gaussianRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "gaussianRand",
          "normalized": "a[b]",
          "package": "JYU-Utils",
          "partial": "Rand",
          "signature": "m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:gaussianRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "gaussianVector",
          "package": "JYU-Utils",
          "signature": "b -\u003e Int -\u003e m [b]",
          "source": "src/Utils-MonadRandom.html#gaussianVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "gaussianVector",
          "normalized": "a-\u003eInt-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Vector",
          "signature": "b-\u003eInt-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:gaussianVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "getRandom",
          "package": "JYU-Utils",
          "signature": "m a",
          "source": "src/Utils-MonadRandom.html#getRandom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "getRandom",
          "package": "JYU-Utils",
          "partial": "Random",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:getRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "getRandomR",
          "package": "JYU-Utils",
          "signature": "(a, a) -\u003e m a",
          "source": "src/Utils-MonadRandom.html#getRandomR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "getRandomR",
          "normalized": "(a,a)-\u003eb a",
          "package": "JYU-Utils",
          "partial": "Random",
          "signature": "(a,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:getRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "normRand",
          "package": "JYU-Utils",
          "signature": "b -\u003e b -\u003e m b",
          "source": "src/Utils-MonadRandom.html#normRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "normRand",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "JYU-Utils",
          "partial": "Rand",
          "signature": "b-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:normRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "randomList",
          "package": "JYU-Utils",
          "signature": "[a] -\u003e Int -\u003e m [a]",
          "source": "src/Utils-MonadRandom.html#randomList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "randomList",
          "normalized": "[a]-\u003eInt-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "List",
          "signature": "[a]-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:randomList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "randomRoll",
          "package": "JYU-Utils",
          "signature": "[a] -\u003e m [a]",
          "source": "src/Utils-MonadRandom.html#randomRoll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "randomRoll",
          "normalized": "[a]-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Roll",
          "signature": "[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:randomRoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "runRandomT",
          "package": "JYU-Utils",
          "signature": "RandomT s m a -\u003e s -\u003e m (a, s)",
          "source": "src/Utils-MonadRandom.html#runRandomT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "runRandomT",
          "normalized": "RandomT a b c-\u003ea-\u003eb(c,a)",
          "package": "JYU-Utils",
          "partial": "Random",
          "signature": "RandomT s m a-\u003es-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:runRandomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "uniformRandomVector",
          "package": "JYU-Utils",
          "signature": "Int -\u003e m [a]",
          "source": "src/Utils-MonadRandom.html#uniformRandomVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "uniformRandomVector",
          "normalized": "Int-\u003ea[b]",
          "package": "JYU-Utils",
          "partial": "Random Vector",
          "signature": "Int-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:uniformRandomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "uniformRandomVectorRS",
          "package": "JYU-Utils",
          "signature": "[(b, b)] -\u003e m [b]",
          "source": "src/Utils-MonadRandom.html#uniformRandomVectorRS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "uniformRandomVectorRS",
          "normalized": "[(a,a)]-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Random Vector RS",
          "signature": "[(b,b)]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:uniformRandomVectorRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "withProbability",
          "package": "JYU-Utils",
          "signature": "Double -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Utils-MonadRandom.html#withProbability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "withProbability",
          "normalized": "Double-\u003ea b-\u003ea b-\u003ea b",
          "package": "JYU-Utils",
          "partial": "Probability",
          "signature": "Double-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:withProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "withRandomPair",
          "package": "JYU-Utils",
          "signature": "(t -\u003e t -\u003e m b) -\u003e [t] -\u003e m b",
          "source": "src/Utils-MonadRandom.html#withRandomPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "withRandomPair",
          "normalized": "(a-\u003ea-\u003eb c)-\u003e[a]-\u003eb c",
          "package": "JYU-Utils",
          "partial": "Random Pair",
          "signature": "(t-\u003et-\u003em b)-\u003e[t]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:withRandomPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.MonadRandom",
          "name": "withRandomThree",
          "package": "JYU-Utils",
          "signature": "(t -\u003e t -\u003e t -\u003e m b) -\u003e [t] -\u003e m b",
          "source": "src/Utils-MonadRandom.html#withRandomThree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils MonadRandom",
          "module": "Utils.MonadRandom",
          "name": "withRandomThree",
          "normalized": "(a-\u003ea-\u003ea-\u003eb c)-\u003e[a]-\u003eb c",
          "package": "JYU-Utils",
          "partial": "Random Three",
          "signature": "(t-\u003et-\u003et-\u003em b)-\u003e[t]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-MonadRandom.html#v:withRandomThree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Numeric",
          "name": "Numeric",
          "package": "JYU-Utils",
          "source": "src/Utils-Numeric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Numeric",
          "module": "Utils.Numeric",
          "name": "Numeric",
          "package": "JYU-Utils",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Numeric",
          "name": "widths",
          "package": "JYU-Utils",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Utils-Numeric.html#widths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Numeric",
          "module": "Utils.Numeric",
          "name": "widths",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "JYU-Utils",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Numeric.html#v:widths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "Parallel",
          "package": "JYU-Utils",
          "source": "src/Utils-Parallel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "Parallel",
          "package": "JYU-Utils",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "TaskRunnerStrategy",
          "package": "JYU-Utils",
          "source": "src/Utils-Parallel.html#TaskRunnerStrategy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "TaskRunnerStrategy",
          "package": "JYU-Utils",
          "partial": "Task Runner Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#t:TaskRunnerStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "Failing",
          "package": "JYU-Utils",
          "signature": "Failing",
          "source": "src/Utils-Parallel.html#TaskRunnerStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "Failing",
          "package": "JYU-Utils",
          "partial": "Failing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:Failing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "Persistent",
          "package": "JYU-Utils",
          "signature": "Persistent",
          "source": "src/Utils-Parallel.html#TaskRunnerStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "Persistent",
          "package": "JYU-Utils",
          "partial": "Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "fork",
          "package": "JYU-Utils",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [MVar b]",
          "source": "src/Utils-Parallel.html#fork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "fork",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[MVar b]",
          "package": "JYU-Utils",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[MVar b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "fork1",
          "package": "JYU-Utils",
          "signature": "(a -\u003e IO b) -\u003e a -\u003e IO (MVar b)",
          "source": "src/Utils-Parallel.html#fork1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "fork1",
          "normalized": "(a-\u003eIO b)-\u003ea-\u003eIO(MVar b)",
          "package": "JYU-Utils",
          "signature": "(a-\u003eIO b)-\u003ea-\u003eIO(MVar b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:fork1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "forkAndJoin",
          "package": "JYU-Utils",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
          "source": "src/Utils-Parallel.html#forkAndJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "forkAndJoin",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "package": "JYU-Utils",
          "partial": "And Join",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:forkAndJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "joinMVars",
          "package": "JYU-Utils",
          "signature": "[MVar b] -\u003e IO [b]",
          "source": "src/Utils-Parallel.html#joinMVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "joinMVars",
          "normalized": "[MVar a]-\u003eIO[a]",
          "package": "JYU-Utils",
          "partial": "MVars",
          "signature": "[MVar b]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:joinMVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "parRun",
          "package": "JYU-Utils",
          "signature": "TaskRunnerStrategy -\u003e Int -\u003e [IO ()] -\u003e IO ()",
          "source": "src/Utils-Parallel.html#parRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "parRun",
          "normalized": "TaskRunnerStrategy-\u003eInt-\u003e[IO()]-\u003eIO()",
          "package": "JYU-Utils",
          "partial": "Run",
          "signature": "TaskRunnerStrategy-\u003eInt-\u003e[IO()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:parRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "parRunWithMonitor",
          "package": "JYU-Utils",
          "signature": "TaskRunnerStrategy -\u003e Int -\u003e (TVar [IO ()] -\u003e [TVar Bool] -\u003e IO ()) -\u003e [IO ()] -\u003e IO ()",
          "source": "src/Utils-Parallel.html#parRunWithMonitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "parRunWithMonitor",
          "normalized": "TaskRunnerStrategy-\u003eInt-\u003e(TVar[IO()]-\u003e[TVar Bool]-\u003eIO())-\u003e[IO()]-\u003eIO()",
          "package": "JYU-Utils",
          "partial": "Run With Monitor",
          "signature": "TaskRunnerStrategy-\u003eInt-\u003e(TVar[IO()]-\u003e[TVar Bool]-\u003eIO())-\u003e[IO()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:parRunWithMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Parallel",
          "name": "taskRunner",
          "package": "JYU-Utils",
          "signature": "TaskRunnerStrategy -\u003e TVar Bool -\u003e TVar [IO ()] -\u003e IO ()",
          "source": "src/Utils-Parallel.html#taskRunner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Parallel",
          "module": "Utils.Parallel",
          "name": "taskRunner",
          "normalized": "TaskRunnerStrategy-\u003eTVar Bool-\u003eTVar[IO()]-\u003eIO()",
          "package": "JYU-Utils",
          "partial": "Runner",
          "signature": "TaskRunnerStrategy-\u003eTVar Bool-\u003eTVar[IO()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Parallel.html#v:taskRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "Point",
          "package": "JYU-Utils",
          "source": "src/Utils-Point.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "Point",
          "package": "JYU-Utils",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "Pt",
          "package": "JYU-Utils",
          "source": "src/Utils-Point.html#Pt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "Pt",
          "package": "JYU-Utils",
          "partial": "Pt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Point.html#t:Pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "norm2",
          "package": "JYU-Utils",
          "signature": "Pt a -\u003e a",
          "source": "src/Utils-Point.html#norm2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "norm2",
          "normalized": "Pt a-\u003ea",
          "package": "JYU-Utils",
          "signature": "Pt a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Point.html#v:norm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "JYU-Utils",
          "source": "src/Utils-Rectangle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "JYU-Utils",
          "partial": "Rectangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Rectangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "JYU-Utils",
          "source": "src/Utils-Rectangle.html#Rectangle",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "JYU-Utils",
          "partial": "Rectangle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Rectangle.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "JYU-Utils",
          "signature": "Rectangle ((a, a), (a, a))",
          "source": "src/Utils-Rectangle.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "normalized": "Rectangle((a,a),(a,a))",
          "package": "JYU-Utils",
          "partial": "Rectangle",
          "signature": "Rectangle((a,a),(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Rectangle.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate rectangle around point (x,y)\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "prop_Corners",
          "package": "JYU-Utils",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Bool",
          "source": "src/Utils-Rectangle.html#prop_Corners",
          "type": "function"
        },
        "index": {
          "description": "Create rectangle around point",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "prop_Corners",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eBool",
          "package": "JYU-Utils",
          "partial": "Corners",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Rectangle.html#v:prop_Corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Sampling",
          "name": "Sampling",
          "package": "JYU-Utils",
          "source": "src/Utils-Sampling.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Sampling",
          "module": "Utils.Sampling",
          "name": "Sampling",
          "package": "JYU-Utils",
          "partial": "Sampling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Sampling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Sampling",
          "name": "sus",
          "package": "JYU-Utils",
          "signature": "[(Double, a)] -\u003e Int -\u003e Double -\u003e [a]",
          "source": "src/Utils-Sampling.html#sus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Sampling",
          "module": "Utils.Sampling",
          "name": "sus",
          "normalized": "[(Double,a)]-\u003eInt-\u003eDouble-\u003e[a]",
          "package": "JYU-Utils",
          "signature": "[(Double,a)]-\u003eInt-\u003eDouble-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Sampling.html#v:sus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.SemanticEditors",
          "name": "SemanticEditors",
          "package": "JYU-Utils",
          "source": "src/Utils-SemanticEditors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils SemanticEditors",
          "module": "Utils.SemanticEditors",
          "name": "SemanticEditors",
          "package": "JYU-Utils",
          "partial": "Semantic Editors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-SemanticEditors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Shuffle",
          "name": "Shuffle",
          "package": "JYU-Utils",
          "source": "src/Utils-Shuffle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Shuffle",
          "module": "Utils.Shuffle",
          "name": "Shuffle",
          "package": "JYU-Utils",
          "partial": "Shuffle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Shuffle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Shuffle",
          "name": "doShuffle",
          "package": "JYU-Utils",
          "signature": "[t] -\u003e m [t]",
          "source": "src/Utils-Shuffle.html#doShuffle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Shuffle",
          "module": "Utils.Shuffle",
          "name": "doShuffle",
          "normalized": "[a]-\u003eb[a]",
          "package": "JYU-Utils",
          "partial": "Shuffle",
          "signature": "[t]-\u003em[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Shuffle.html#v:doShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Shuffle",
          "name": "shuffle",
          "package": "JYU-Utils",
          "signature": "[t] -\u003e [Int] -\u003e [t]",
          "source": "src/Utils-Shuffle.html#shuffle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Shuffle",
          "module": "Utils.Shuffle",
          "name": "shuffle",
          "normalized": "[a]-\u003e[Int]-\u003e[a]",
          "package": "JYU-Utils",
          "signature": "[t]-\u003e[Int]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Shuffle.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.ShuffleMWC",
          "name": "ShuffleMWC",
          "package": "JYU-Utils",
          "source": "src/Utils-ShuffleMWC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils ShuffleMWC",
          "module": "Utils.ShuffleMWC",
          "name": "ShuffleMWC",
          "package": "JYU-Utils",
          "partial": "Shuffle MWC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-ShuffleMWC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.ShuffleMWC",
          "name": "doShuffle",
          "package": "JYU-Utils",
          "signature": "Gen (PrimState m) -\u003e [t] -\u003e m [t]",
          "source": "src/Utils-ShuffleMWC.html#doShuffle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils ShuffleMWC",
          "module": "Utils.ShuffleMWC",
          "name": "doShuffle",
          "normalized": "Gen(PrimState a)-\u003e[b]-\u003ea[b]",
          "package": "JYU-Utils",
          "partial": "Shuffle",
          "signature": "Gen(PrimState m)-\u003e[t]-\u003em[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-ShuffleMWC.html#v:doShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.ShuffleMWC",
          "name": "shuffle",
          "package": "JYU-Utils",
          "signature": "[t] -\u003e [Int] -\u003e [t]",
          "source": "src/Utils-ShuffleMWC.html#shuffle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils ShuffleMWC",
          "module": "Utils.ShuffleMWC",
          "name": "shuffle",
          "normalized": "[a]-\u003e[Int]-\u003e[a]",
          "package": "JYU-Utils",
          "signature": "[t]-\u003e[Int]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-ShuffleMWC.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "JYU-Utils",
          "source": "src/Utils-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "JYU-Utils",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeating stream\n\u003c/p\u003e\u003cp\u003eCreate a stream by iterating a monadic action\n\u003c/p\u003e\u003cp\u003ePure and monadic left fold over a stream\n\u003c/p\u003e\u003cp\u003eMerge two (time)streams\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "LRB",
          "package": "JYU-Utils",
          "source": "src/Utils-Stream.html#LRB",
          "type": "data"
        },
        "index": {
          "description": "Repeating stream Create stream by iterating monadic action Pure and monadic left fold over stream Merge two time streams",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "LRB",
          "package": "JYU-Utils",
          "partial": "LRB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#t:LRB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream of monadic values\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "JYU-Utils",
          "source": "src/Utils-Stream.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "Stream of monadic values",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "JYU-Utils",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "B",
          "package": "JYU-Utils",
          "signature": "B b",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "B",
          "package": "JYU-Utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "L",
          "package": "JYU-Utils",
          "signature": "L a",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "L",
          "package": "JYU-Utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "R",
          "package": "JYU-Utils",
          "signature": "R c",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "R",
          "package": "JYU-Utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Terminated",
          "package": "JYU-Utils",
          "signature": "Terminated",
          "source": "src/Utils-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Terminated",
          "package": "JYU-Utils",
          "partial": "Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:Terminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Value",
          "package": "JYU-Utils",
          "signature": "Value (m (a, Stream m a))",
          "source": "src/Utils-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Value",
          "normalized": "Value(a(b,Stream a b))",
          "package": "JYU-Utils",
          "partial": "Value",
          "signature": "Value(m(a,Stream m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop elements from the stream. Due to stream structure, this operation cannot\n  fail gracefully when dropping more elements than what is found in the stream\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "dropS",
          "package": "JYU-Utils",
          "signature": "Int -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#dropS",
          "type": "function"
        },
        "index": {
          "description": "Drop elements from the stream Due to stream structure this operation cannot fail gracefully when dropping more elements than what is found in the stream",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "dropS",
          "normalized": "Int-\u003eStream a b-\u003eStream a b",
          "package": "JYU-Utils",
          "signature": "Int-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:dropS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mapMS",
          "package": "JYU-Utils",
          "signature": "(a -\u003e m b) -\u003e Stream m a -\u003e Stream m b",
          "source": "src/Utils-Stream.html#mapMS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mapMS",
          "normalized": "(a-\u003eb c)-\u003eStream b a-\u003eStream b c",
          "package": "JYU-Utils",
          "partial": "MS",
          "signature": "(a-\u003em b)-\u003eStream m a-\u003eStream m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:mapMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "pairS",
          "package": "JYU-Utils",
          "signature": "Stream m a -\u003e Stream m (a, a)",
          "source": "src/Utils-Stream.html#pairS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "pairS",
          "normalized": "Stream a b-\u003eStream a(b,b)",
          "package": "JYU-Utils",
          "signature": "Stream m a-\u003eStream m(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:pairS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "sequenceS",
          "package": "JYU-Utils",
          "signature": "Stream m (m a) -\u003e Stream m a",
          "source": "src/Utils-Stream.html#sequenceS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "sequenceS",
          "normalized": "Stream a(a b)-\u003eStream a b",
          "package": "JYU-Utils",
          "signature": "Stream m(m a)-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:sequenceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaching side effects\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "sideEffect",
          "package": "JYU-Utils",
          "signature": "(a -\u003e m ()) -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#sideEffect",
          "type": "function"
        },
        "index": {
          "description": "Attaching side effects",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "sideEffect",
          "normalized": "(a-\u003eb())-\u003eStream b a-\u003eStream b a",
          "package": "JYU-Utils",
          "partial": "Effect",
          "signature": "(a-\u003em())-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:sideEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "takeS",
          "package": "JYU-Utils",
          "signature": "Int -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#takeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "takeS",
          "normalized": "Int-\u003eStream a b-\u003eStream a b",
          "package": "JYU-Utils",
          "signature": "Int-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:takeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "terminateOn",
          "package": "JYU-Utils",
          "signature": "(a -\u003e Bool) -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#terminateOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "terminateOn",
          "normalized": "(a-\u003eBool)-\u003eStream b a-\u003eStream b a",
          "package": "JYU-Utils",
          "partial": "On",
          "signature": "(a-\u003eBool)-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Stream.html#v:terminateOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.String",
          "name": "String",
          "package": "JYU-Utils",
          "source": "src/Utils-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils String",
          "module": "Utils.String",
          "name": "String",
          "package": "JYU-Utils",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.String",
          "name": "columnS",
          "package": "JYU-Utils",
          "signature": "[(String, a)] -\u003e String",
          "source": "src/Utils-String.html#columnS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils String",
          "module": "Utils.String",
          "name": "columnS",
          "normalized": "[(String,a)]-\u003eString",
          "package": "JYU-Utils",
          "signature": "[(String,a)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-String.html#v:columnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.String",
          "name": "columns",
          "package": "JYU-Utils",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Utils-String.html#columns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils String",
          "module": "Utils.String",
          "name": "columns",
          "normalized": "[(String,String)]-\u003eString",
          "package": "JYU-Utils",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-String.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "Table",
          "package": "JYU-Utils",
          "source": "src/Utils-Table.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "Table",
          "package": "JYU-Utils",
          "partial": "Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "Stripe",
          "package": "JYU-Utils",
          "source": "src/Utils-Table.html#Stripe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "Stripe",
          "package": "JYU-Utils",
          "partial": "Stripe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#t:Stripe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "Table",
          "package": "JYU-Utils",
          "source": "src/Utils-Table.html#Table",
          "type": "type"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "Table",
          "package": "JYU-Utils",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "colNames",
          "package": "JYU-Utils",
          "signature": "Table a b c -\u003e [b]",
          "source": "src/Utils-Table.html#colNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "colNames",
          "normalized": "Table a b c-\u003e[b]",
          "package": "JYU-Utils",
          "partial": "Names",
          "signature": "Table a b c-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:colNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "column",
          "package": "JYU-Utils",
          "signature": "b -\u003e Table a b c -\u003e Stripe a c",
          "source": "src/Utils-Table.html#column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "column",
          "normalized": "a-\u003eTable b a c-\u003eStripe b c",
          "package": "JYU-Utils",
          "signature": "b-\u003eTable a b c-\u003eStripe a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "columns",
          "package": "JYU-Utils",
          "signature": "Table a b c -\u003e Map b (Stripe a c)",
          "source": "src/Utils-Table.html#columns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "columns",
          "normalized": "Table a b c-\u003eMap b(Stripe a c)",
          "package": "JYU-Utils",
          "signature": "Table a b c-\u003eMap b(Stripe a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "fromCols",
          "package": "JYU-Utils",
          "signature": "Map a (Stripe b c) -\u003e Table b a c",
          "source": "src/Utils-Table.html#fromCols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "fromCols",
          "normalized": "Map a(Stripe b c)-\u003eTable b a c",
          "package": "JYU-Utils",
          "partial": "Cols",
          "signature": "Map a(Stripe b c)-\u003eTable b a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:fromCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "fromRows",
          "package": "JYU-Utils",
          "signature": "Map a (Stripe b c) -\u003e Table a b c",
          "source": "src/Utils-Table.html#fromRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "fromRows",
          "normalized": "Map a(Stripe b c)-\u003eTable a b c",
          "package": "JYU-Utils",
          "partial": "Rows",
          "signature": "Map a(Stripe b c)-\u003eTable a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:fromRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "intersectionWith",
          "package": "JYU-Utils",
          "signature": "(a -\u003e b -\u003e c) -\u003e Table row col a -\u003e Table row col b -\u003e Table row col c",
          "source": "src/Utils-Table.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTable d e a-\u003eTable d e b-\u003eTable d e c",
          "package": "JYU-Utils",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eTable row col a-\u003eTable row col b-\u003eTable row col c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "row",
          "package": "JYU-Utils",
          "signature": "a -\u003e Table a b c -\u003e Stripe b c",
          "source": "src/Utils-Table.html#row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "row",
          "normalized": "a-\u003eTable a b c-\u003eStripe b c",
          "package": "JYU-Utils",
          "signature": "a-\u003eTable a b c-\u003eStripe b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "rowNames",
          "package": "JYU-Utils",
          "signature": "Table a b c -\u003e [a]",
          "source": "src/Utils-Table.html#rowNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "rowNames",
          "normalized": "Table a b c-\u003e[a]",
          "package": "JYU-Utils",
          "partial": "Names",
          "signature": "Table a b c-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:rowNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Table",
          "name": "rows",
          "package": "JYU-Utils",
          "signature": "Table a b c -\u003e Map a (Stripe b c)",
          "source": "src/Utils-Table.html#rows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Table",
          "module": "Utils.Table",
          "name": "rows",
          "normalized": "Table a b c-\u003eMap a(Stripe b c)",
          "package": "JYU-Utils",
          "signature": "Table a b c-\u003eMap a(Stripe b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Table.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "Vector",
          "package": "JYU-Utils",
          "source": "src/Utils-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "Vector",
          "package": "JYU-Utils",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "Vector",
          "package": "JYU-Utils",
          "source": "src/Utils-Vector.html#Vector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "Vector",
          "package": "JYU-Utils",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "showMatrix",
          "package": "JYU-Utils",
          "signature": "Int -\u003e [Vector] -\u003e String",
          "source": "src/Utils-Vector.html#showMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "showMatrix",
          "normalized": "Int-\u003e[Vector]-\u003eString",
          "package": "JYU-Utils",
          "partial": "Matrix",
          "signature": "Int-\u003e[Vector]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#v:showMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "showMatrix1",
          "package": "JYU-Utils",
          "signature": "Int -\u003e [Vector] -\u003e String",
          "source": "src/Utils-Vector.html#showMatrix1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "showMatrix1",
          "normalized": "Int-\u003e[Vector]-\u003eString",
          "package": "JYU-Utils",
          "partial": "Matrix",
          "signature": "Int-\u003e[Vector]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#v:showMatrix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "showVector",
          "package": "JYU-Utils",
          "signature": "Int -\u003e Vector -\u003e String",
          "source": "src/Utils-Vector.html#showVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "showVector",
          "normalized": "Int-\u003eVector-\u003eString",
          "package": "JYU-Utils",
          "partial": "Vector",
          "signature": "Int-\u003eVector-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#v:showVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "snap",
          "package": "JYU-Utils",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Utils-Vector.html#snap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "snap",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "JYU-Utils",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#v:snap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Vector",
          "name": "stdDev",
          "package": "JYU-Utils",
          "signature": "[Vector] -\u003e Double",
          "source": "src/Utils-Vector.html#stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Vector",
          "module": "Utils.Vector",
          "name": "stdDev",
          "normalized": "[Vector]-\u003eDouble",
          "package": "JYU-Utils",
          "partial": "Dev",
          "signature": "[Vector]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JYU-Utils/docs/Utils-Vector.html#v:stdDev"
      }
    }
  ]
]