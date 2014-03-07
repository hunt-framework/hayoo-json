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
        "word": "perdure"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "Map",
          "package": "perdure",
          "source": "src/Database-Perdure-Data-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "Map",
          "package": "perdure",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlike Data.Map, this Map does not support constant time size computation\n\u003c/p\u003e",
          "module": "Database.Perdure.Data.Map",
          "name": "Map",
          "package": "perdure",
          "source": "src/Database-Perdure-Data-Map.html#Map",
          "type": "data"
        },
        "index": {
          "description": "Unlike Data.Map this Map does not support constant time size computation",
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "Map",
          "package": "perdure",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "assocs",
          "package": "perdure",
          "signature": "Map k a -\u003e [(k, a)]",
          "source": "src/Database-Perdure-Data-Map.html#assocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "assocs",
          "normalized": "Map a b-\u003e[(a,b)]",
          "package": "perdure",
          "signature": "Map k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "delete",
          "package": "perdure",
          "signature": "k -\u003e Map k a -\u003e Map k a",
          "source": "src/Database-Perdure-Data-Map.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "delete",
          "normalized": "a-\u003eMap a b-\u003eMap a b",
          "package": "perdure",
          "signature": "k-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "elems",
          "package": "perdure",
          "signature": "Map k a -\u003e [a]",
          "source": "src/Database-Perdure-Data-Map.html#elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "elems",
          "normalized": "Map a b-\u003e[b]",
          "package": "perdure",
          "signature": "Map k a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "empty",
          "package": "perdure",
          "signature": "Map k a",
          "source": "src/Database-Perdure-Data-Map.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "empty",
          "package": "perdure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "foldlWithKey",
          "package": "perdure",
          "signature": "forall z k a.  (z -\u003e k -\u003e a -\u003e z) -\u003e z -\u003e Map k a -\u003e z",
          "source": "src/Database-Perdure-Data-Map.html#foldlWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "foldlWithKey",
          "normalized": "a b c d(b-\u003ec-\u003ee-\u003eb)-\u003eb-\u003eMap c e-\u003eb",
          "package": "perdure",
          "partial": "With Key",
          "signature": "forall z k a.(z-\u003ek-\u003ea-\u003ez)-\u003ez-\u003eMap k a-\u003ez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "foldrWithKey",
          "package": "perdure",
          "signature": "forall z k a.  (k -\u003e a -\u003e z -\u003e z) -\u003e z -\u003e Map k a -\u003e z",
          "source": "src/Database-Perdure-Data-Map.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "foldrWithKey",
          "normalized": "a b c d(c-\u003ee-\u003eb-\u003eb)-\u003eb-\u003eMap c e-\u003eb",
          "package": "perdure",
          "partial": "With Key",
          "signature": "forall z k a.(k-\u003ea-\u003ez-\u003ez)-\u003ez-\u003eMap k a-\u003ez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "fromList",
          "package": "perdure",
          "signature": "[(k, a)] -\u003e Map k a",
          "source": "src/Database-Perdure-Data-Map.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eMap a b",
          "package": "perdure",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "insert",
          "package": "perdure",
          "signature": "k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "src/Database-Perdure-Data-Map.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMap a b-\u003eMap a b",
          "package": "perdure",
          "signature": "k-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "insertWith",
          "package": "perdure",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "src/Database-Perdure-Data-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eMap b a-\u003eMap b a",
          "package": "perdure",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "lookup",
          "package": "perdure",
          "signature": "k -\u003e Map k a -\u003e Maybe a",
          "source": "src/Database-Perdure-Data-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "lookup",
          "normalized": "a-\u003eMap a b-\u003eMaybe b",
          "package": "perdure",
          "signature": "k-\u003eMap k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "mapLens",
          "package": "perdure",
          "signature": "k -\u003e Lens (Map k a) (Maybe a)",
          "source": "src/Database-Perdure-Data-Map.html#mapLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "mapLens",
          "normalized": "a-\u003eLens(Map a b)(Maybe b)",
          "package": "perdure",
          "partial": "Lens",
          "signature": "k-\u003eLens(Map k a)(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:mapLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "maxKey",
          "package": "perdure",
          "signature": "Map k a -\u003e Maybe k",
          "source": "src/Database-Perdure-Data-Map.html#maxKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "maxKey",
          "normalized": "Map a b-\u003eMaybe a",
          "package": "perdure",
          "partial": "Key",
          "signature": "Map k a-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:maxKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "null",
          "package": "perdure",
          "signature": "Map k a -\u003e Bool",
          "source": "src/Database-Perdure-Data-Map.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "null",
          "normalized": "Map a b-\u003eBool",
          "package": "perdure",
          "signature": "Map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "scan",
          "package": "perdure",
          "signature": "forall k a z.  (k -\u003e a -\u003e z) -\u003e (k -\u003e z -\u003e z -\u003e z) -\u003e Map k a -\u003e Maybe z",
          "source": "src/Database-Perdure-Data-Map.html#scan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "scan",
          "normalized": "a b c d(b-\u003ec-\u003ee)-\u003e(b-\u003ee-\u003ee-\u003ee)-\u003eMap b c-\u003eMaybe e",
          "package": "perdure",
          "signature": "forall k a z.(k-\u003ea-\u003ez)-\u003e(k-\u003ez-\u003ez-\u003ez)-\u003eMap k a-\u003eMaybe z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Data.Map",
          "name": "toList",
          "package": "perdure",
          "signature": "Map k a -\u003e [(k, a)]",
          "source": "src/Database-Perdure-Data-Map.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "toList",
          "normalized": "Map a b-\u003e[(a,b)]",
          "package": "perdure",
          "partial": "List",
          "signature": "Map k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral update/lookup at a single key. The State monad used supports\n non-modification. Nothing denotes the absence of a value.\n\u003c/p\u003e",
          "module": "Database.Perdure.Data.Map",
          "name": "updateM",
          "package": "perdure",
          "signature": "k -\u003e State (Maybe a) b -\u003e State (Map k a) b",
          "source": "src/Database-Perdure-Data-Map.html#updateM",
          "type": "function"
        },
        "index": {
          "description": "General update lookup at single key The State monad used supports non-modification Nothing denotes the absence of value",
          "hierarchy": "Database Perdure Data Map",
          "module": "Database.Perdure.Data.Map",
          "name": "updateM",
          "normalized": "a-\u003eState(Maybe b)c-\u003eState(Map a b)c",
          "package": "perdure",
          "signature": "k-\u003eState(Maybe a)b-\u003eState(Map k a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Data-Map.html#v:updateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Deref",
          "name": "Deref",
          "package": "perdure",
          "source": "src/Database-Perdure-Deref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Deref",
          "module": "Database.Perdure.Deref",
          "name": "Deref",
          "package": "perdure",
          "partial": "Deref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Deref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Deref",
          "name": "Deref",
          "package": "perdure",
          "source": "src/Database-Perdure-Deref.html#Deref",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Deref",
          "module": "Database.Perdure.Deref",
          "name": "Deref",
          "package": "perdure",
          "partial": "Deref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Deref.html#t:Deref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Deref",
          "name": "deref",
          "package": "perdure",
          "signature": "r a -\u003e a",
          "source": "src/Database-Perdure-Deref.html#deref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Deref",
          "module": "Database.Perdure.Deref",
          "name": "deref",
          "normalized": "a b-\u003eb",
          "package": "perdure",
          "signature": "r a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Deref.html#v:deref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Deref",
          "name": "derefEq",
          "package": "perdure",
          "signature": "r a -\u003e r a -\u003e Bool",
          "source": "src/Database-Perdure-Deref.html#derefEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Deref",
          "module": "Database.Perdure.Deref",
          "name": "derefEq",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "perdure",
          "partial": "Eq",
          "signature": "r a-\u003er a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Deref.html#v:derefEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Deref",
          "name": "derefIO",
          "package": "perdure",
          "signature": "r a -\u003e IO a",
          "source": "src/Database-Perdure-Deref.html#derefIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Deref",
          "module": "Database.Perdure.Deref",
          "name": "derefIO",
          "normalized": "a b-\u003eIO b",
          "package": "perdure",
          "partial": "IO",
          "signature": "r a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Deref.html#v:derefIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.History",
          "name": "History",
          "package": "perdure",
          "source": "src/Database-Perdure-History.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "History",
          "package": "perdure",
          "partial": "History",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe History type is used as the state type so as to keep some snapshots of the past, in case data is lost due to a programming error\n by the application developer. It is an homogenous collection so the argument type has to take care of versionning.\n To avoid needless reserialization of the past states, the argument type should be a Ref type.\n\u003c/p\u003e\u003cp\u003eWe keep the last n samples inserted, then n samples keeping one out of every two, \n then n samples keeping one out of every four... Currently n is hard coded to 2.\n\u003c/p\u003e",
          "module": "Database.Perdure.History",
          "name": "History",
          "package": "perdure",
          "source": "src/Database-Perdure-History.html#History",
          "type": "data"
        },
        "index": {
          "description": "The History type is used as the state type so as to keep some snapshots of the past in case data is lost due to programming error by the application developer It is an homogenous collection so the argument type has to take care of versionning To avoid needless reserialization of the past states the argument type should be Ref type We keep the last samples inserted then samples keeping one out of every two then samples keeping one out of every four Currently is hard coded to",
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "History",
          "package": "perdure",
          "partial": "History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#t:History"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe history is never empty, so it is safe to get the current sample.\n\u003c/p\u003e",
          "module": "Database.Perdure.History",
          "name": "current",
          "package": "perdure",
          "signature": "History a -\u003e a",
          "source": "src/Database-Perdure-History.html#current",
          "type": "function"
        },
        "index": {
          "description": "The history is never empty so it is safe to get the current sample",
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "current",
          "normalized": "History a-\u003ea",
          "package": "perdure",
          "signature": "History a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.History",
          "name": "initial",
          "package": "perdure",
          "signature": "a -\u003e History a",
          "source": "src/Database-Perdure-History.html#initial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "initial",
          "normalized": "a-\u003eHistory a",
          "package": "perdure",
          "signature": "a-\u003eHistory a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a newer state to the history\n\u003c/p\u003e",
          "module": "Database.Perdure.History",
          "name": "insert",
          "package": "perdure",
          "signature": "a -\u003e History a -\u003e History a",
          "source": "src/Database-Perdure-History.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Add newer state to the history",
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "insert",
          "normalized": "a-\u003eHistory a-\u003eHistory a",
          "package": "perdure",
          "signature": "a-\u003eHistory a-\u003eHistory a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a transformation on \u003ccode\u003ea\u003c/code\u003e into a transformation on 'History a'. Adds a new state into the \u003ccode\u003e\u003ca\u003eHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Perdure.History",
          "name": "updateHistory",
          "package": "perdure",
          "signature": "StateT a m b -\u003e StateT (History a) m b",
          "source": "src/Database-Perdure-History.html#updateHistory",
          "type": "function"
        },
        "index": {
          "description": "Changes transformation on into transformation on History Adds new state into the History",
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "updateHistory",
          "normalized": "StateT a b c-\u003eStateT(History a)b c",
          "package": "perdure",
          "partial": "History",
          "signature": "StateT a m b-\u003eStateT(History a)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#v:updateHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a transformation on \u003ccode\u003ea\u003c/code\u003e into a transformation on 'History a'. Adds a new state into the \u003ccode\u003e\u003ca\u003eHistory\u003c/a\u003e\u003c/code\u003e,\n unless the state has not changed. Uses \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Perdure.History",
          "name": "updateHistoryM",
          "package": "perdure",
          "signature": "StateT a m b -\u003e StateT (History a) m b",
          "source": "src/Database-Perdure-History.html#updateHistoryM",
          "type": "function"
        },
        "index": {
          "description": "Changes transformation on into transformation on History Adds new state into the History unless the state has not changed Uses State",
          "hierarchy": "Database Perdure History",
          "module": "Database.Perdure.History",
          "name": "updateHistoryM",
          "normalized": "StateT a b c-\u003eStateT(History a)b c",
          "package": "perdure",
          "partial": "History",
          "signature": "StateT a m b-\u003eStateT(History a)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-History.html#v:updateHistoryM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Internal",
          "package": "perdure",
          "source": "src/Database-Perdure-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Internal",
          "package": "perdure",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Address",
          "package": "perdure",
          "source": "src/Database-Perdure-Count.html#Address",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Address",
          "package": "perdure",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "BasicRef",
          "package": "perdure",
          "source": "src/Database-Perdure-StoreFile.html#BasicRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "BasicRef",
          "package": "perdure",
          "partial": "Basic Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:BasicRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "CRef",
          "package": "perdure",
          "source": "src/Database-Perdure-CRef.html#CRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "CRef",
          "package": "perdure",
          "partial": "CRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:CRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "CachedFile",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#CachedFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "CachedFile",
          "package": "perdure",
          "partial": "Cached File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:CachedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "DeserOut",
          "package": "perdure",
          "source": "src/Database-Perdure-CDeserializer.html#DeserOut",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "DeserOut",
          "package": "perdure",
          "partial": "Deser Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:DeserOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Deserializable",
          "package": "perdure",
          "source": "src/Database-Perdure-CDeserializer.html#Deserializable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Deserializable",
          "package": "perdure",
          "partial": "Deserializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Deserializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Deserializer",
          "package": "perdure",
          "source": "src/Database-Perdure-CDeserializer.html#Deserializer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Deserializer",
          "package": "perdure",
          "partial": "Deserializer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Deserializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "MapMultiset",
          "package": "perdure",
          "source": "src/Database-Perdure-Data-MapMultiset.html#MapMultiset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "MapMultiset",
          "package": "perdure",
          "partial": "Map Multiset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:MapMultiset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PState represents the whole state of the database. It is needed to perform updates.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "PState",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#PState",
          "type": "data"
        },
        "index": {
          "description": "The PState represents the whole state of the database It is needed to perform updates",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "PState",
          "package": "perdure",
          "partial": "PState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:PState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot persisted data. The \u003ccode\u003ea\u003c/code\u003e type parameter is the user persisted data type.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "Root",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#Root",
          "type": "data"
        },
        "index": {
          "description": "Root persisted data The type parameter is the user persisted data type",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Root",
          "package": "perdure",
          "partial": "Root",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "RootAddress",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#RootAddress",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootAddress",
          "package": "perdure",
          "partial": "Root Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:RootAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RootLocation specifies where roots are written, and provides a cache.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "RootLocation",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#RootLocation",
          "type": "data"
        },
        "index": {
          "description": "The RootLocation specifies where roots are written and provides cache",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootLocation",
          "package": "perdure",
          "partial": "Root Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:RootLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "RootValues",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#RootValues",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootValues",
          "package": "perdure",
          "partial": "Root Values",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:RootValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "SerializerContext",
          "package": "perdure",
          "source": "src/Database-Perdure-CSerializer.html#SerializerContext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "SerializerContext",
          "package": "perdure",
          "partial": "Serializer Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:SerializerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Space",
          "package": "perdure",
          "source": "src/Database-Perdure-Space.html#Space",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Space",
          "package": "perdure",
          "partial": "Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "SpaceBook",
          "package": "perdure",
          "source": "src/Database-Perdure-SpaceBook.html#SpaceBook",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "SpaceBook",
          "package": "perdure",
          "partial": "Space Book",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:SpaceBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Span",
          "package": "perdure",
          "source": "src/Database-Perdure-Space.html#Span",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Span",
          "package": "perdure",
          "partial": "Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "StoreFile",
          "package": "perdure",
          "source": "src/Database-Perdure-StoreFile.html#StoreFile",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "StoreFile",
          "package": "perdure",
          "partial": "Store File",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:StoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "SyncableStoreFile",
          "package": "perdure",
          "source": "src/Database-Perdure-StoreFile.html#SyncableStoreFile",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "SyncableStoreFile",
          "package": "perdure",
          "partial": "Syncable Store File",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:SyncableStoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "Word64",
          "package": "perdure",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Word64",
          "package": "perdure",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#t:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "BasicRef",
          "package": "perdure",
          "signature": "BasicRef",
          "source": "src/Database-Perdure-StoreFile.html#BasicRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "BasicRef",
          "package": "perdure",
          "partial": "Basic Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:BasicRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "CachedFile",
          "package": "perdure",
          "signature": "CachedFile ReplicatedFile (MVar Cache)",
          "source": "src/Database-Perdure-State.html#CachedFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "CachedFile",
          "package": "perdure",
          "partial": "Cached File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:CachedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "DeserOut",
          "package": "perdure",
          "signature": "DeserOut",
          "source": "src/Database-Perdure-CDeserializer.html#DeserOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "DeserOut",
          "package": "perdure",
          "partial": "Deser Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:DeserOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Deserializer",
          "package": "perdure",
          "signature": "Deserializer",
          "source": "src/Database-Perdure-CDeserializer.html#Deserializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Deserializer",
          "package": "perdure",
          "partial": "Deserializer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:Deserializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Perdure.Internal\",\"Database.Perdure.Persistent\"]",
          "name": "Refed",
          "package": "perdure",
          "signature": "Refed !(r a)",
          "source": "src/Database-Perdure-CRef.html#CRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:Refed\",\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:Refed\"]"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Refed",
          "package": "perdure",
          "partial": "Refed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:Refed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "Root",
          "package": "perdure",
          "signature": "Root",
          "source": "src/Database-Perdure-State.html#Root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "Root",
          "package": "perdure",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "RootAddress",
          "package": "perdure",
          "signature": "RootAddress",
          "source": "src/Database-Perdure-State.html#RootAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootAddress",
          "package": "perdure",
          "partial": "Root Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:RootAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "RootLocation",
          "package": "perdure",
          "signature": "RootLocation CachedFile [RootAddress]",
          "source": "src/Database-Perdure-State.html#RootLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootLocation",
          "normalized": "RootLocation CachedFile[RootAddress]",
          "package": "perdure",
          "partial": "Root Location",
          "signature": "RootLocation CachedFile[RootAddress]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:RootLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "RootValues",
          "package": "perdure",
          "signature": "RootValues",
          "source": "src/Database-Perdure-State.html#RootValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "RootValues",
          "package": "perdure",
          "partial": "Root Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:RootValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "SpaceBook",
          "package": "perdure",
          "signature": "SpaceBook",
          "source": "src/Database-Perdure-SpaceBook.html#SpaceBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "SpaceBook",
          "package": "perdure",
          "partial": "Space Book",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:SpaceBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Perdure.Internal\",\"Database.Perdure.Persistent\"]",
          "name": "ToRef",
          "package": "perdure",
          "signature": "ToRef !a",
          "source": "src/Database-Perdure-CRef.html#CRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:ToRef\",\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:ToRef\"]"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "ToRef",
          "package": "perdure",
          "partial": "To Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:ToRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "addSpan",
          "package": "perdure",
          "signature": "Span -\u003e a -\u003e a",
          "source": "src/Database-Perdure-Space.html#addSpan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "addSpan",
          "normalized": "Span-\u003ea-\u003ea",
          "package": "perdure",
          "partial": "Span",
          "signature": "Span-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:addSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "await0",
          "package": "perdure",
          "signature": "(IO () -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "await0",
          "normalized": "(IO()-\u003eIO a)-\u003eIO a",
          "package": "perdure",
          "signature": "(IO()-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:await0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "await1",
          "package": "perdure",
          "signature": "Async a () -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "await1",
          "normalized": "Async a()-\u003eIO a",
          "package": "perdure",
          "signature": "Async a()-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:await1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "bookCount",
          "package": "perdure",
          "signature": "(MapMultiset Address)",
          "source": "src/Database-Perdure-SpaceBook.html#SpaceBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "bookCount",
          "package": "perdure",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:bookCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "bookSpace",
          "package": "perdure",
          "signature": "SpaceTree",
          "source": "src/Database-Perdure-SpaceBook.html#SpaceBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "bookSpace",
          "package": "perdure",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:bookSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "cDeser",
          "package": "perdure",
          "signature": "Persister a -\u003e DeserializerContext -\u003e Deserializer Free a",
          "source": "src/Database-Perdure-CDeserializer.html#cDeser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "cDeser",
          "normalized": "Persister a-\u003eDeserializerContext-\u003eDeserializer Free a",
          "package": "perdure",
          "partial": "Deser",
          "signature": "Persister a-\u003eDeserializerContext-\u003eDeserializer Free a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:cDeser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "cSer",
          "package": "perdure",
          "signature": "Persister a -\u003e SerializerContext l c -\u003e (a -\u003e Dest -\u003e IO z) -\u003e a -\u003e Dest -\u003e IO z",
          "source": "src/Database-Perdure-CSerializer.html#cSer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "cSer",
          "normalized": "Persister a-\u003eSerializerContext b c-\u003e(a-\u003eDest-\u003eIO d)-\u003ea-\u003eDest-\u003eIO d",
          "package": "perdure",
          "partial": "Ser",
          "signature": "Persister a-\u003eSerializerContext l c-\u003e(a-\u003eDest-\u003eIO z)-\u003ea-\u003eDest-\u003eIO z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:cSer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects the garbage accumulated by the calls to writeState. Uses reference counting: first does an increment pass on\n the current value, and then does a decrement pass on the value that was present at the last collection. Only new allocations are\n scanned in the increment pass, not what was already allocated at the last collection. The decrement pass only traverses\n the allocations that need to be deallocated.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "collectState",
          "package": "perdure",
          "signature": "PState a -\u003e IO (PState a)",
          "source": "src/Database-Perdure-State.html#collectState",
          "type": "function"
        },
        "index": {
          "description": "Collects the garbage accumulated by the calls to writeState Uses reference counting first does an increment pass on the current value and then does decrement pass on the value that was present at the last collection Only new allocations are scanned in the increment pass not what was already allocated at the last collection The decrement pass only traverses the allocations that need to be deallocated",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "collectState",
          "normalized": "PState a-\u003eIO(PState a)",
          "package": "perdure",
          "partial": "State",
          "signature": "PState a-\u003eIO(PState a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:collectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "collectStateM",
          "package": "perdure",
          "signature": "StateT (PState a) IO ()",
          "source": "src/Database-Perdure-State.html#collectStateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "collectStateM",
          "normalized": "StateT(PState a)IO()",
          "package": "perdure",
          "partial": "State",
          "signature": "StateT(PState a)IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:collectStateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas effects through unsafePerformIO on the caches stored in the DRefs (removes any cache entries for the deallocated allocations).\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "decr",
          "package": "perdure",
          "signature": "Persister a -\u003e a -\u003e SpaceBook -\u003e SpaceBook",
          "source": "src/Database-Perdure-Decrementer.html#decr",
          "type": "function"
        },
        "index": {
          "description": "Has effects through unsafePerformIO on the caches stored in the DRefs removes any cache entries for the deallocated allocations",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "decr",
          "normalized": "Persister a-\u003ea-\u003eSpaceBook-\u003eSpaceBook",
          "package": "perdure",
          "signature": "Persister a-\u003ea-\u003eSpaceBook-\u003eSpaceBook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserInput",
          "package": "perdure",
          "signature": "ArrayRange (PrimArray f a) -\u003e ArrayRange (PrimArray f' Word)",
          "source": "src/Database-Perdure-CDeserializer.html#deserInput",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserInput",
          "normalized": "ArrayRange(PrimArray a b)-\u003eArrayRange(PrimArray c Word)",
          "package": "perdure",
          "partial": "Input",
          "signature": "ArrayRange(PrimArray f a)-\u003eArrayRange(PrimArray f' Word)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserPos",
          "package": "perdure",
          "signature": "(Len Bool Word)",
          "source": "src/Database-Perdure-CDeserializer.html#DeserOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserPos",
          "package": "perdure",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserValue",
          "package": "perdure",
          "signature": "a",
          "source": "src/Database-Perdure-CDeserializer.html#DeserOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserValue",
          "package": "perdure",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserialize",
          "package": "perdure",
          "signature": "Len Bool Word -\u003e PrimArray f Word -\u003e DeserOut a",
          "source": "src/Database-Perdure-CDeserializer.html#Deserializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserialize",
          "normalized": "Len Bool Word-\u003ePrimArray a Word-\u003eDeserOut b",
          "package": "perdure",
          "signature": "Len Bool Word-\u003ePrimArray f Word-\u003eDeserOut a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserializeFromArray",
          "package": "perdure",
          "signature": "Deserializer df a -\u003e ArrayRange (PrimArray f w) -\u003e DeserOut a",
          "source": "src/Database-Perdure-CDeserializer.html#deserializeFromArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserializeFromArray",
          "normalized": "Deserializer a b-\u003eArrayRange(PrimArray c d)-\u003eDeserOut b",
          "package": "perdure",
          "partial": "From Array",
          "signature": "Deserializer df a-\u003eArrayRange(PrimArray f w)-\u003eDeserOut a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserializeFromArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "deserializeFromFullArray",
          "package": "perdure",
          "signature": "Deserializer df a -\u003e ArrayRange (PrimArray f w) -\u003e a",
          "source": "src/Database-Perdure-CDeserializer.html#deserializeFromFullArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "deserializeFromFullArray",
          "normalized": "Deserializer a b-\u003eArrayRange(PrimArray c d)-\u003eb",
          "package": "perdure",
          "partial": "From Full Array",
          "signature": "Deserializer df a-\u003eArrayRange(PrimArray f w)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:deserializeFromFullArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "emptySpace",
          "package": "perdure",
          "signature": "a",
          "source": "src/Database-Perdure-Space.html#emptySpace",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "emptySpace",
          "package": "perdure",
          "partial": "Space",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:emptySpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "findSpan",
          "package": "perdure",
          "signature": "Word64 -\u003e a -\u003e [Span]",
          "source": "src/Database-Perdure-Space.html#findSpan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "findSpan",
          "normalized": "Word-\u003ea-\u003e[Span]",
          "package": "perdure",
          "partial": "Span",
          "signature": "Word-\u003ea-\u003e[Span]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:findSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "getRootAddress",
          "package": "perdure",
          "signature": "Address",
          "source": "src/Database-Perdure-State.html#RootAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "getRootAddress",
          "package": "perdure",
          "partial": "Root Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:getRootAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "incr",
          "package": "perdure",
          "signature": "Persister a -\u003e a -\u003e SpaceBook -\u003e SpaceBook",
          "source": "src/Database-Perdure-Incrementer.html#incr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "incr",
          "normalized": "Persister a-\u003ea-\u003eSpaceBook-\u003eSpaceBook",
          "package": "perdure",
          "signature": "Persister a-\u003ea-\u003eSpaceBook-\u003eSpaceBook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites an initial state (creates a new database).\n Most often the passed \u003ccode\u003ea\u003c/code\u003e will be a fresh unpersisted value. This is always safe.\n However it is legal for parts of \u003ccode\u003ea\u003c/code\u003e to be already persisted, but they must only use allocations within the passed SpaceTree.\n To read the state of an existing database use readState.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "initState",
          "package": "perdure",
          "signature": "RootLocation -\u003e SpaceTree -\u003e a -\u003e IO (PState a)",
          "source": "src/Database-Perdure-State.html#initState",
          "type": "function"
        },
        "index": {
          "description": "Writes an initial state creates new database Most often the passed will be fresh unpersisted value This is always safe However it is legal for parts of to be already persisted but they must only use allocations within the passed SpaceTree To read the state of an existing database use readState",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "initState",
          "normalized": "RootLocation-\u003eSpaceTree-\u003ea-\u003eIO(PState a)",
          "package": "perdure",
          "partial": "State",
          "signature": "RootLocation-\u003eSpaceTree-\u003ea-\u003eIO(PState a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:initState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "isFreeSpace",
          "package": "perdure",
          "signature": "Word64 -\u003e a -\u003e Bool",
          "source": "src/Database-Perdure-Space.html#isFreeSpace",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "isFreeSpace",
          "normalized": "Word-\u003ea-\u003eBool",
          "package": "perdure",
          "partial": "Free Space",
          "signature": "Word-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:isFreeSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Perdure.Internal\",\"Database.Perdure.Persistent\"]",
          "name": "onCRef",
          "package": "perdure",
          "signature": "(r a -\u003e b) -\u003e (a -\u003e b) -\u003e CRef r a -\u003e b",
          "source": "src/Database-Perdure-CRef.html#onCRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:onCRef\",\"http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:onCRef\"]"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "onCRef",
          "normalized": "(a b-\u003ec)-\u003e(b-\u003ec)-\u003eCRef a b-\u003ec",
          "package": "perdure",
          "partial": "CRef",
          "signature": "(r a-\u003eb)-\u003e(a-\u003eb)-\u003eCRef r a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:onCRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "prnf",
          "package": "perdure",
          "signature": "Persister a -\u003e a -\u003e ()",
          "source": "src/Database-Perdure-RNF.html#prnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "prnf",
          "normalized": "Persister a-\u003ea-\u003e()",
          "package": "perdure",
          "signature": "Persister a-\u003ea-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:prnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the state of an existing database. It only reads the root, and the rest is lazy loaded.\n The RootLocation must match the one use when writing. On failure it returns Nothing.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "readState",
          "package": "perdure",
          "signature": "RootLocation -\u003e IO (Maybe (PState a))",
          "source": "src/Database-Perdure-State.html#readState",
          "type": "function"
        },
        "index": {
          "description": "Reads the state of an existing database It only reads the root and the rest is lazy loaded The RootLocation must match the one use when writing On failure it returns Nothing",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "readState",
          "normalized": "RootLocation-\u003eIO(Maybe(PState a))",
          "package": "perdure",
          "partial": "State",
          "signature": "RootLocation-\u003eIO(Maybe(PState a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:readState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "refSize",
          "package": "perdure",
          "signature": "(Len w Word32)",
          "source": "src/Database-Perdure-StoreFile.html#BasicRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "refSize",
          "package": "perdure",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:refSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "refSpan",
          "package": "perdure",
          "signature": "BasicRef w -\u003e Span",
          "source": "src/Database-Perdure-StoreFile.html#refSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "refSpan",
          "normalized": "BasicRef a-\u003eSpan",
          "package": "perdure",
          "partial": "Span",
          "signature": "BasicRef w-\u003eSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:refSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "refStart",
          "package": "perdure",
          "signature": "(Len Word64 Word64)",
          "source": "src/Database-Perdure-StoreFile.html#BasicRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "refStart",
          "package": "perdure",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:refStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "removeSpan",
          "package": "perdure",
          "signature": "Span -\u003e a -\u003e a",
          "source": "src/Database-Perdure-Space.html#removeSpan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "removeSpan",
          "normalized": "Span-\u003ea-\u003ea",
          "package": "perdure",
          "partial": "Span",
          "signature": "Span-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:removeSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe reserve the option of growing roots to 1MB, so use this as a minimum distance between the various RootAddress in RootLocation\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "rootAllocSize",
          "package": "perdure",
          "signature": "Len Word64 Word32",
          "source": "src/Database-Perdure-State.html#rootAllocSize",
          "type": "function"
        },
        "index": {
          "description": "We reserve the option of growing roots to MB so use this as minimum distance between the various RootAddress in RootLocation",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootAllocSize",
          "package": "perdure",
          "partial": "Alloc Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootAllocSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "rootCS",
          "package": "perdure",
          "signature": "CDRef SpaceBook",
          "source": "src/Database-Perdure-State.html#RootValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootCS",
          "package": "perdure",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "rootDecr",
          "package": "perdure",
          "signature": "Maybe (RootValues a)",
          "source": "src/Database-Perdure-State.html#Root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootDecr",
          "package": "perdure",
          "partial": "Decr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootDecr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "rootId",
          "package": "perdure",
          "signature": "StateId",
          "source": "src/Database-Perdure-State.html#Root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootId",
          "package": "perdure",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "rootScan",
          "package": "perdure",
          "signature": "RootValues a",
          "source": "src/Database-Perdure-State.html#Root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootScan",
          "package": "perdure",
          "partial": "Scan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "rootValue",
          "package": "perdure",
          "signature": "CDRef a",
          "source": "src/Database-Perdure-State.html#RootValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "rootValue",
          "package": "perdure",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:rootValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe passed Persister must hace no references\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "serializeToArray",
          "package": "perdure",
          "signature": "Persister a -\u003e a -\u003e PrimArray Pinned w",
          "source": "src/Database-Perdure-CSerializer.html#serializeToArray",
          "type": "function"
        },
        "index": {
          "description": "The passed Persister must hace no references",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "serializeToArray",
          "normalized": "Persister a-\u003ea-\u003ePrimArray Pinned b",
          "package": "perdure",
          "partial": "To Array",
          "signature": "Persister a-\u003ea-\u003ePrimArray Pinned w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:serializeToArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "stateValue",
          "package": "perdure",
          "signature": "PState a -\u003e a",
          "source": "src/Database-Perdure-State.html#stateValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "stateValue",
          "normalized": "PState a-\u003ea",
          "package": "perdure",
          "partial": "Value",
          "signature": "PState a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:stateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevent the reordering of preceeding and subsequent read and write operations\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "storeFileFullBarrier",
          "package": "perdure",
          "signature": "f -\u003e IO ()",
          "source": "src/Database-Perdure-StoreFile.html#storeFileFullBarrier",
          "type": "method"
        },
        "index": {
          "description": "Prevent the reordering of preceeding and subsequent read and write operations",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "storeFileFullBarrier",
          "normalized": "a-\u003eIO()",
          "package": "perdure",
          "partial": "File Full Barrier",
          "signature": "f-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:storeFileFullBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "storeFileRead",
          "package": "perdure",
          "signature": "f -\u003e StoreRef f w -\u003e Endianness -\u003e v -\u003e Async (Maybe (ArrayRange (PrimArray Pinned w))) ()",
          "source": "src/Database-Perdure-StoreFile.html#storeFileRead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "storeFileRead",
          "normalized": "a-\u003eStoreRef a b-\u003eEndianness-\u003ec-\u003eAsync(Maybe(ArrayRange(PrimArray Pinned b)))()",
          "package": "perdure",
          "partial": "File Read",
          "signature": "f-\u003eStoreRef f w-\u003eEndianness-\u003ev-\u003eAsync(Maybe(ArrayRange(PrimArray Pinned w)))()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:storeFileRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotify when all preceeding writes have completed, implies no barrier\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "storeFileSync",
          "package": "perdure",
          "signature": "f -\u003e IO () -\u003e IO ()",
          "source": "src/Database-Perdure-StoreFile.html#storeFileSync",
          "type": "method"
        },
        "index": {
          "description": "Notify when all preceeding writes have completed implies no barrier",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "storeFileSync",
          "normalized": "a-\u003eIO()-\u003eIO()",
          "package": "perdure",
          "partial": "File Sync",
          "signature": "f-\u003eIO()-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:storeFileSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Internal",
          "name": "storeFileWrite",
          "package": "perdure",
          "signature": "f -\u003e Len Word64 Word64 -\u003e Endianness -\u003e [PrimArray Pinned w] -\u003e IO (StoreRef f w)",
          "source": "src/Database-Perdure-StoreFile.html#storeFileWrite",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "storeFileWrite",
          "normalized": "a-\u003eLen Word Word-\u003eEndianness-\u003e[PrimArray Pinned b]-\u003eIO(StoreRef a b)",
          "package": "perdure",
          "partial": "File Write",
          "signature": "f-\u003eLen Word Word-\u003eEndianness-\u003e[PrimArray Pinned w]-\u003eIO(StoreRef f w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:storeFileWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe passed persister must have no references\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "unsafeSeqDeserializer",
          "package": "perdure",
          "signature": "Persister a -\u003e Deserializer Free a",
          "source": "src/Database-Perdure-CDeserializer.html#unsafeSeqDeserializer",
          "type": "function"
        },
        "index": {
          "description": "The passed persister must have no references",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "unsafeSeqDeserializer",
          "normalized": "Persister a-\u003eDeserializer Free a",
          "package": "perdure",
          "partial": "Seq Deserializer",
          "signature": "Persister a-\u003eDeserializer Free a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:unsafeSeqDeserializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a new state if the passed state change requires it. The StateT monad used here is like the usual StateT monad but\n it has an additional \u003ccode\u003eunchanged\u003c/code\u003e case which allow us to avoid needless writes.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "updateState",
          "package": "perdure",
          "signature": "StateT a m b -\u003e StateT (PState a) m b",
          "source": "src/Database-Perdure-State.html#updateState",
          "type": "function"
        },
        "index": {
          "description": "Writes new state if the passed state change requires it The StateT monad used here is like the usual StateT monad but it has an additional unchanged case which allow us to avoid needless writes",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "updateState",
          "normalized": "StateT a b c-\u003eStateT(PState a)b c",
          "package": "perdure",
          "partial": "State",
          "signature": "StateT a m b-\u003eStateT(PState a)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:updateState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike updateState but the updater has access to the input PState throught an additional ReaderT\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "updateStateRead",
          "package": "perdure",
          "signature": "StateT a (ReaderT (PState a) m) b -\u003e StateT (PState a) m b",
          "source": "src/Database-Perdure-State.html#updateStateRead",
          "type": "function"
        },
        "index": {
          "description": "Like updateState but the updater has access to the input PState throught an additional ReaderT",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "updateStateRead",
          "normalized": "StateT a(ReaderT(PState a)b)c-\u003eStateT(PState a)b c",
          "package": "perdure",
          "partial": "State Read",
          "signature": "StateT a(ReaderT(PState a)m)b-\u003eStateT(PState a)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:updateStateRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the current state and the new value to be written, and writes and returns a new state. Writing is strict so make sure you do\n not have cycles in the value to be written. After writing, you should no longer use the value you passed in, but instead use the\n equivalent value present in the in the returned state. That new equivalent value knows where it is stored and will be lazily loadable.\n The value just written will be partially or totally in the cache. IMPORTANT: This call overwrites the value that was in the state\n passed as input, so you should not use it after this call returns. However it is safe for this call to use it implicitly, because often\n the new value will be a function of the old one, and the strict write process will force parts of the old value to be read. If\n by accident you do use a value which was overwritten, its digests will be incorrect (with very high probability) and deref will return error.\n This calls collectState implicity once every 1000 calls. We will make this optional in future revisions.\n\u003c/p\u003e",
          "module": "Database.Perdure.Internal",
          "name": "writeState",
          "package": "perdure",
          "signature": "a -\u003e PState a -\u003e IO (PState a)",
          "source": "src/Database-Perdure-State.html#writeState",
          "type": "function"
        },
        "index": {
          "description": "Takes the current state and the new value to be written and writes and returns new state Writing is strict so make sure you do not have cycles in the value to be written After writing you should no longer use the value you passed in but instead use the equivalent value present in the in the returned state That new equivalent value knows where it is stored and will be lazily loadable The value just written will be partially or totally in the cache IMPORTANT This call overwrites the value that was in the state passed as input so you should not use it after this call returns However it is safe for this call to use it implicitly because often the new value will be function of the old one and the strict write process will force parts of the old value to be read If by accident you do use value which was overwritten its digests will be incorrect with very high probability and deref will return error This calls collectState implicity once every calls We will make this optional in future revisions",
          "hierarchy": "Database Perdure Internal",
          "module": "Database.Perdure.Internal",
          "name": "writeState",
          "normalized": "a-\u003ePState a-\u003eIO(PState a)",
          "package": "perdure",
          "partial": "State",
          "signature": "a-\u003ePState a-\u003eIO(PState a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Internal.html#v:writeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Persistent",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Persistent",
          "package": "perdure",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "CDRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#CDRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "CDRef",
          "package": "perdure",
          "partial": "CDRef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:CDRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "CRef",
          "package": "perdure",
          "source": "src/Database-Perdure-CRef.html#CRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "CRef",
          "package": "perdure",
          "partial": "CRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:CRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Cache",
          "package": "perdure",
          "source": "src/Database-Perdure-Cache.html#Cache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Cache",
          "package": "perdure",
          "partial": "Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#DRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DRef",
          "package": "perdure",
          "partial": "DRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:DRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DeserializerContext",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#DeserializerContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DeserializerContext",
          "package": "perdure",
          "partial": "Deserializer Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:DeserializerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "IRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#IRef",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "IRef",
          "package": "perdure",
          "partial": "IRef",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:IRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "LgPersistent1_",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#LgPersistent1_",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "LgPersistent1_",
          "package": "perdure",
          "partial": "Lg Persistent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:LgPersistent1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Persistent",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#Persistent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Persistent",
          "package": "perdure",
          "partial": "Persistent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Persistent1",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#Persistent1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Persistent1",
          "package": "perdure",
          "partial": "Persistent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Persistent1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Persistent1_",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#Persistent1_",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Persistent1_",
          "package": "perdure",
          "partial": "Persistent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Persistent1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Persister",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Persister",
          "package": "perdure",
          "partial": "Persister",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Persister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Ref0",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#Ref0",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Ref0",
          "package": "perdure",
          "partial": "Ref",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:Ref0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "RefPersistent",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#RefPersistent",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "RefPersistent",
          "package": "perdure",
          "partial": "Ref Persistent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:RefPersistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "RefPersister",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "RefPersister",
          "package": "perdure",
          "partial": "Ref Persister",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:RefPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ccode\u003e\u003ca\u003eLocalStoreFile\u003c/a\u003e\u003c/code\u003e to be used as replicates. We write to all replicates and read from the first one that reports no error.\n\u003c/p\u003e",
          "module": "Database.Perdure.Persistent",
          "name": "ReplicatedFile",
          "package": "perdure",
          "source": "src/Database-Perdure-ReplicatedFile.html#ReplicatedFile",
          "type": "data"
        },
        "index": {
          "description": "list of LocalStoreFile to be used as replicates We write to all replicates and read from the first one that reports no error",
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "ReplicatedFile",
          "package": "perdure",
          "partial": "Replicated File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:ReplicatedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "WArrayRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#WArrayRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "WArrayRef",
          "package": "perdure",
          "partial": "WArray Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:WArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "WordArrayRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#WordArrayRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "WordArrayRef",
          "package": "perdure",
          "partial": "Word Array Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:WordArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "WordNArrayRef",
          "package": "perdure",
          "source": "src/Database-Perdure-Persistent.html#WordNArrayRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "WordNArrayRef",
          "package": "perdure",
          "partial": "Word NArray Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#t:WordNArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "(|.)",
          "package": "perdure",
          "signature": "Persister a -\u003e Persister b -\u003e Persister (Either a b)",
          "source": "src/Database-Perdure-Persistent.html#%7C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "(|.) |.",
          "normalized": "Persister a-\u003ePersister b-\u003ePersister(Either a b)",
          "package": "perdure",
          "signature": "Persister a-\u003ePersister b-\u003ePersister(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "(&.)",
          "package": "perdure",
          "signature": "Persister a -\u003e Persister b -\u003e Persister (a, b)",
          "source": "src/Database-Perdure-Persistent.html#%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "(&.) &.",
          "normalized": "Persister a-\u003ePersister b-\u003ePersister(a,b)",
          "package": "perdure",
          "signature": "Persister a-\u003ePersister b-\u003ePersister(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of shortcutPersister with the \u003ccode\u003e\u003ca\u003esuper\u003c/a\u003e\u003c/code\u003e injection.\n\u003c/p\u003e",
          "module": "Database.Perdure.Persistent",
          "name": "(\u003e.)",
          "package": "perdure",
          "signature": "Persister b -\u003e Persister a -\u003e Persister b",
          "source": "src/Database-Perdure-Persistent.html#%3E.",
          "type": "function"
        },
        "index": {
          "description": "Specialization of shortcutPersister with the super injection",
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "(\u003e.) \u003e.",
          "normalized": "Persister a-\u003ePersister b-\u003ePersister a",
          "package": "perdure",
          "signature": "Persister b-\u003ePersister a-\u003ePersister b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "CRefPersister",
          "package": "perdure",
          "signature": "RefPersister r -\u003e RefPersister (CRef r)",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "CRefPersister",
          "normalized": "RefPersister a-\u003eRefPersister(CRef a)",
          "package": "perdure",
          "partial": "CRef Persister",
          "signature": "RefPersister r-\u003eRefPersister(CRef r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:CRefPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "CRefPersister'",
          "package": "perdure",
          "signature": "(RefPersister r) -\u003e !(Persister (r a)) -\u003e Persister (CRef r a)",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "CRefPersister'",
          "normalized": "(RefPersister a)-\u003e(Persister(a b))-\u003ePersister(CRef a b)",
          "package": "perdure",
          "partial": "CRef Persister'",
          "signature": "(RefPersister r)-\u003e(Persister(r a))-\u003ePersister(CRef r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:CRefPersister-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DRef",
          "package": "perdure",
          "signature": "(Persister a) -\u003e !DeserializerContext -\u003e !(WArrayRef BasicRef) -\u003e DRef a",
          "source": "src/Database-Perdure-Persistent.html#DRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DRef",
          "normalized": "(Persister a)-\u003eDeserializerContext-\u003e(WArrayRef BasicRef)-\u003eDRef a",
          "package": "perdure",
          "partial": "DRef",
          "signature": "(Persister a)-\u003eDeserializerContext-\u003e(WArrayRef BasicRef)-\u003eDRef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:DRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DRefPersister",
          "package": "perdure",
          "signature": "RefPersister DRef",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DRefPersister",
          "package": "perdure",
          "partial": "DRef Persister",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:DRefPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DRefPersister'",
          "package": "perdure",
          "signature": "Persister (DRef a)",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DRefPersister'",
          "package": "perdure",
          "partial": "DRef Persister'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:DRefPersister-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "DeserializerContext",
          "package": "perdure",
          "signature": "DeserializerContext",
          "source": "src/Database-Perdure-Persistent.html#DeserializerContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "DeserializerContext",
          "package": "perdure",
          "partial": "Deserializer Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:DeserializerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "EitherPersister",
          "package": "perdure",
          "signature": "(Persister a) -\u003e !(Persister b) -\u003e Persister (Either a b)",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "EitherPersister",
          "normalized": "(Persister a)-\u003e(Persister b)-\u003ePersister(Either a b)",
          "package": "perdure",
          "partial": "Either Persister",
          "signature": "(Persister a)-\u003e(Persister b)-\u003ePersister(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:EitherPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "IRef",
          "package": "perdure",
          "signature": "IRef",
          "source": "src/Database-Perdure-Persistent.html#IRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "IRef",
          "package": "perdure",
          "partial": "IRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:IRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "IRefPersister",
          "package": "perdure",
          "signature": "RefPersister r -\u003e RefPersister (IRef r)",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "IRefPersister",
          "normalized": "RefPersister a-\u003eRefPersister(IRef a)",
          "package": "perdure",
          "partial": "IRef Persister",
          "signature": "RefPersister r-\u003eRefPersister(IRef r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:IRefPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "PairPersister",
          "package": "perdure",
          "signature": "(Persister a) -\u003e !(Persister b) -\u003e Persister (a, b)",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "PairPersister",
          "normalized": "(Persister a)-\u003e(Persister b)-\u003ePersister(a,b)",
          "package": "perdure",
          "partial": "Pair Persister",
          "signature": "(Persister a)-\u003e(Persister b)-\u003ePersister(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:PairPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "PartialWordPersister",
          "package": "perdure",
          "signature": "(Len Bool Word) -\u003e Persister Word",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "PartialWordPersister",
          "normalized": "(Len Bool Word)-\u003ePersister Word",
          "package": "perdure",
          "partial": "Partial Word Persister",
          "signature": "(Len Bool Word)-\u003ePersister Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:PartialWordPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Ref0",
          "package": "perdure",
          "signature": "Ref0 a",
          "source": "src/Database-Perdure-Persistent.html#Ref0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Ref0",
          "package": "perdure",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:Ref0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Ref0Persister",
          "package": "perdure",
          "signature": "RefPersister Ref0",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Ref0Persister",
          "package": "perdure",
          "partial": "Ref Persister",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:Ref0Persister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "RefView",
          "package": "perdure",
          "signature": "(forall a.  rb a -\u003e ra a) -\u003e RefPersister rb -\u003e RefPersister ra",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "RefView",
          "normalized": "(a b c d-\u003ee d)-\u003eRefPersister c-\u003eRefPersister e",
          "package": "perdure",
          "partial": "Ref View",
          "signature": "(forall a. rb a-\u003era a)-\u003eRefPersister rb-\u003eRefPersister ra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:RefView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "SizeRefPersister",
          "package": "perdure",
          "signature": "Len Bool Word -\u003e RefPersister (Sum Ref0 DRef)",
          "source": "src/Database-Perdure-Persistent.html#RefPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "SizeRefPersister",
          "normalized": "Len Bool Word-\u003eRefPersister(Sum Ref DRef)",
          "package": "perdure",
          "partial": "Size Ref Persister",
          "signature": "Len Bool Word-\u003eRefPersister(Sum Ref DRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:SizeRefPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "SummationPersister",
          "package": "perdure",
          "signature": "(Persister i) -\u003e !(forall z.  (forall b.  Persister b -\u003e (b -\u003e a) -\u003e z) -\u003e i -\u003e z) -\u003e !(forall z.  (forall b.  i -\u003e Persister b -\u003e (b -\u003e a) -\u003e b -\u003e z) -\u003e a -\u003e z) -\u003e Persister a",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "SummationPersister",
          "normalized": "(Persister a)-\u003e(b c(b d Persister e-\u003e(e-\u003ef)-\u003eg)-\u003ea-\u003eg)-\u003e(b c(b d a-\u003ePersister e-\u003e(e-\u003ef)-\u003ee-\u003eg)-\u003ef-\u003eg)-\u003ePersister f",
          "package": "perdure",
          "partial": "Summation Persister",
          "signature": "(Persister i)-\u003e(forall z.(forall b. Persister b-\u003e(b-\u003ea)-\u003ez)-\u003ei-\u003ez)-\u003e(forall z.(forall b. i-\u003ePersister b-\u003e(b-\u003ea)-\u003eb-\u003ez)-\u003ea-\u003ez)-\u003ePersister a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:SummationPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "ViewPersister",
          "package": "perdure",
          "signature": "(InjectionA' a b) -\u003e Persister b -\u003e Persister a",
          "source": "src/Database-Perdure-Persistent.html#Persister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "ViewPersister",
          "normalized": "(InjectionA' a b)-\u003ePersister b-\u003ePersister a",
          "package": "perdure",
          "partial": "View Persister",
          "signature": "(InjectionA' a b)-\u003ePersister b-\u003ePersister a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:ViewPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Word32ArrayRef",
          "package": "perdure",
          "signature": "Word32ArrayRef !(r32 r)",
          "source": "src/Database-Perdure-Persistent.html#WordArrayRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Word32ArrayRef",
          "package": "perdure",
          "partial": "Word Array Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:Word32ArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "Word64ArrayRef",
          "package": "perdure",
          "signature": "Word64ArrayRef !(r64 r)",
          "source": "src/Database-Perdure-Persistent.html#WordArrayRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "Word64ArrayRef",
          "package": "perdure",
          "partial": "Word Array Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:Word64ArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "WordNArrayRef",
          "package": "perdure",
          "signature": "WordNArrayRef !v !(r (ValidatedElem v)) !Endianness",
          "source": "src/Database-Perdure-Persistent.html#WordNArrayRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "WordNArrayRef",
          "package": "perdure",
          "partial": "Word NArray Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:WordNArrayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "dcCache",
          "package": "perdure",
          "signature": "MVar Cache",
          "source": "src/Database-Perdure-Persistent.html#DeserializerContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "dcCache",
          "package": "perdure",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:dcCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "dcFile",
          "package": "perdure",
          "signature": "f",
          "source": "src/Database-Perdure-Persistent.html#DeserializerContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "dcFile",
          "package": "perdure",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:dcFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "getIRef",
          "package": "perdure",
          "signature": "r t",
          "source": "src/Database-Perdure-Persistent.html#IRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "getIRef",
          "package": "perdure",
          "partial": "IRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:getIRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "lenPersister",
          "package": "perdure",
          "signature": "Persister a -\u003e Persister (Len u a)",
          "source": "src/Database-Perdure-Persistent.html#lenPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "lenPersister",
          "normalized": "Persister a-\u003ePersister(Len b a)",
          "package": "perdure",
          "partial": "Persister",
          "signature": "Persister a-\u003ePersister(Len u a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:lenPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "lgPersister1_",
          "package": "perdure",
          "signature": "Persister (r w)",
          "source": "src/Database-Perdure-Persistent.html#lgPersister1_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "lgPersister1_",
          "package": "perdure",
          "partial": "Persister",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:lgPersister1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersister for lists built from a specified element persister.\n\u003c/p\u003e",
          "module": "Database.Perdure.Persistent",
          "name": "listPersister",
          "package": "perdure",
          "signature": "Persister (Listed a) -\u003e Persister a",
          "source": "src/Database-Perdure-Persistent.html#listPersister",
          "type": "function"
        },
        "index": {
          "description": "Persister for lists built from specified element persister",
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "listPersister",
          "normalized": "Persister(Listed a)-\u003ePersister a",
          "package": "perdure",
          "partial": "Persister",
          "signature": "Persister(Listed a)-\u003ePersister a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:listPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersister for 'Maybe a' built from a specified \u003ccode\u003ea\u003c/code\u003e persister. Uses a single bit to represent \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Perdure.Persistent",
          "name": "maybePersister",
          "package": "perdure",
          "signature": "Persister a -\u003e Persister (Maybe a)",
          "source": "src/Database-Perdure-Persistent.html#maybePersister",
          "type": "function"
        },
        "index": {
          "description": "Persister for Maybe built from specified persister Uses single bit to represent Nothing",
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "maybePersister",
          "normalized": "Persister a-\u003ePersister(Maybe a)",
          "package": "perdure",
          "partial": "Persister",
          "signature": "Persister a-\u003ePersister(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:maybePersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "persister",
          "package": "perdure",
          "signature": "Persister a",
          "source": "src/Database-Perdure-Persistent.html#persister",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "persister",
          "package": "perdure",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:persister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "persister1",
          "package": "perdure",
          "signature": "Persister (r a)",
          "source": "src/Database-Perdure-Persistent.html#persister1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "persister1",
          "package": "perdure",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:persister1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "persister1_",
          "package": "perdure",
          "signature": "Persister (r a)",
          "source": "src/Database-Perdure-Persistent.html#persister1_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "persister1_",
          "package": "perdure",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:persister1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "ratioPersister",
          "package": "perdure",
          "signature": "Persister a -\u003e Persister (Ratio a)",
          "source": "src/Database-Perdure-Persistent.html#ratioPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "ratioPersister",
          "normalized": "Persister a-\u003ePersister(Ratio a)",
          "package": "perdure",
          "partial": "Persister",
          "signature": "Persister a-\u003ePersister(Ratio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:ratioPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "refPersister",
          "package": "perdure",
          "signature": "RefPersister r",
          "source": "src/Database-Perdure-Persistent.html#refPersister",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "refPersister",
          "package": "perdure",
          "partial": "Persister",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:refPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes persisters for 2 types, and an injection from the smaller type \u003ccode\u003ea\u003c/code\u003e to the larger type \u003ccode\u003eb\u003c/code\u003e, and gives a\n persister for the larger type which uses the smaller type representation when possible, plus one bit to identify\n which representation is used.\n\u003c/p\u003e",
          "module": "Database.Perdure.Persistent",
          "name": "shortcutPersister",
          "package": "perdure",
          "signature": "i a b -\u003e Persister b -\u003e Persister a -\u003e Persister b",
          "source": "src/Database-Perdure-Persistent.html#shortcutPersister",
          "type": "function"
        },
        "index": {
          "description": "Takes persisters for types and an injection from the smaller type to the larger type and gives persister for the larger type which uses the smaller type representation when possible plus one bit to identify which representation is used",
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "shortcutPersister",
          "normalized": "a b c-\u003ePersister c-\u003ePersister b-\u003ePersister c",
          "package": "perdure",
          "partial": "Persister",
          "signature": "i a b-\u003ePersister b-\u003ePersister a-\u003ePersister b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:shortcutPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Persistent",
          "name": "summationPersister",
          "package": "perdure",
          "signature": "Persister i -\u003e (forall z.  (forall b.  Persister b -\u003e (b -\u003e a) -\u003e z) -\u003e i -\u003e z) -\u003e (forall z.  (forall b.  i -\u003e Persister b -\u003e (b -\u003e a) -\u003e b -\u003e z) -\u003e a -\u003e z) -\u003e Persister a",
          "source": "src/Database-Perdure-Persistent.html#summationPersister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Persistent",
          "module": "Database.Perdure.Persistent",
          "name": "summationPersister",
          "normalized": "Persister a-\u003e(b c(b d Persister e-\u003e(e-\u003ef)-\u003eg)-\u003ea-\u003eg)-\u003e(b c(b d a-\u003ePersister e-\u003e(e-\u003ef)-\u003ee-\u003eg)-\u003ef-\u003eg)-\u003ePersister f",
          "package": "perdure",
          "partial": "Persister",
          "signature": "Persister i-\u003e(forall z.(forall b. Persister b-\u003e(b-\u003ea)-\u003ez)-\u003ei-\u003ez)-\u003e(forall z.(forall b. i-\u003ePersister b-\u003e(b-\u003ea)-\u003eb-\u003ez)-\u003ea-\u003ez)-\u003ePersister a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Persistent.html#v:summationPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Ref",
          "name": "Ref",
          "package": "perdure",
          "source": "src/Database-Perdure-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Ref",
          "module": "Database.Perdure.Ref",
          "name": "Ref",
          "package": "perdure",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Ref",
          "name": "Ref",
          "package": "perdure",
          "source": "src/Database-Perdure-Ref.html#Ref",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Perdure Ref",
          "module": "Database.Perdure.Ref",
          "name": "Ref",
          "package": "perdure",
          "partial": "Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Ref.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Ref",
          "name": "ref",
          "package": "perdure",
          "signature": "a -\u003e r a",
          "source": "src/Database-Perdure-Ref.html#ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Ref",
          "module": "Database.Perdure.Ref",
          "name": "ref",
          "normalized": "a-\u003eb a",
          "package": "perdure",
          "signature": "a-\u003er a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Ref.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Ref",
          "name": "refIO",
          "package": "perdure",
          "signature": "a -\u003e IO (r a)",
          "source": "src/Database-Perdure-Ref.html#refIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Perdure Ref",
          "module": "Database.Perdure.Ref",
          "name": "refIO",
          "normalized": "a-\u003eIO(b a)",
          "package": "perdure",
          "partial": "IO",
          "signature": "a-\u003eIO(r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Ref.html#v:refIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Ref",
          "name": "refLens",
          "package": "perdure",
          "signature": "Lens (r a) a",
          "source": "src/Database-Perdure-Ref.html#refLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Ref",
          "module": "Database.Perdure.Ref",
          "name": "refLens",
          "package": "perdure",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Ref.html#v:refLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "Rev",
          "package": "perdure",
          "source": "src/Database-Perdure-Rev.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "Rev",
          "package": "perdure",
          "partial": "Rev",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type which is equivalent to Either, but which is persisted in an open manner which allows us to chain new\n variants on the left. As more variants are added (going from NoRev to V1 :\u003e NoRev and then to V2 :\u003e V1 :\u003e NoRev), the\n persisted representation gets expanded without breaking the representation of previous variants.\n We do not use Either because of the risk of persisting it in the standard manner and therefore losing upgradability.\n\u003c/p\u003e",
          "module": "Database.Perdure.Rev",
          "name": ":\u003e",
          "package": "perdure",
          "source": "src/Database-Perdure-Rev.html#%3A%3E",
          "type": "data"
        },
        "index": {
          "description": "data type which is equivalent to Either but which is persisted in an open manner which allows us to chain new variants on the left As more variants are added going from NoRev to V1 NoRev and then to V2 V1 NoRev the persisted representation gets expanded without breaking the representation of previous variants We do not use Either because of the risk of persisting it in the standard manner and therefore losing upgradability",
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": ":\u003e",
          "package": "perdure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#t::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uninhabited type used as the last (rightmost) type in chains of '(:\u003e)'\n\u003c/p\u003e",
          "module": "Database.Perdure.Rev",
          "name": "NoRev",
          "package": "perdure",
          "source": "src/Database-Perdure-Rev.html#NoRev",
          "type": "data"
        },
        "index": {
          "description": "An uninhabited type used as the last rightmost type in chains of",
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "NoRev",
          "package": "perdure",
          "partial": "No Rev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#t:NoRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "Current",
          "package": "perdure",
          "signature": "Current a",
          "source": "src/Database-Perdure-Rev.html#%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "Current",
          "package": "perdure",
          "partial": "Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:Current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "Previous",
          "package": "perdure",
          "signature": "Previous b",
          "source": "src/Database-Perdure-Rev.html#%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "Previous",
          "package": "perdure",
          "partial": "Previous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:Previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a legal lens since it violates the law which says that setting back what you got must have no effect.\n Here it is almost true since the only effect it has is to upgrade to the current representation, an idempotent change\n for a semantically equivalent value.                                                             \n\u003c/p\u003e",
          "module": "Database.Perdure.Rev",
          "name": "latestLens",
          "package": "perdure",
          "signature": "(b -\u003e a) -\u003e Lens (a :\u003e b) a",
          "source": "src/Database-Perdure-Rev.html#latestLens",
          "type": "function"
        },
        "index": {
          "description": "This is not legal lens since it violates the law which says that setting back what you got must have no effect Here it is almost true since the only effect it has is to upgrade to the current representation an idempotent change for semantically equivalent value",
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "latestLens",
          "normalized": "(a-\u003eb)-\u003eLens(b a)b",
          "package": "perdure",
          "partial": "Lens",
          "signature": "(b-\u003ea)-\u003eLens(a b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:latestLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "onNoRev",
          "package": "perdure",
          "signature": "NoRev -\u003e z",
          "source": "src/Database-Perdure-Rev.html#onNoRev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "onNoRev",
          "normalized": "NoRev-\u003ea",
          "package": "perdure",
          "partial": "No Rev",
          "signature": "NoRev-\u003ez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:onNoRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "onRev",
          "package": "perdure",
          "signature": "(a -\u003e z) -\u003e (b -\u003e z) -\u003e (a :\u003e b) -\u003e z",
          "source": "src/Database-Perdure-Rev.html#onRev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "onRev",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a c)-\u003eb",
          "package": "perdure",
          "partial": "Rev",
          "signature": "(a-\u003ez)-\u003e(b-\u003ez)-\u003e(a b)-\u003ez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:onRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe persister for '(:\u003e)' first writes out the numeric index, from the right, in the chain of revisions. This way the chain of alternative\n revisions can lengthen without changing the indices of past revisions.\n\u003c/p\u003e",
          "module": "Database.Perdure.Rev",
          "name": "revPersister",
          "package": "perdure",
          "signature": "Persister a",
          "source": "src/Database-Perdure-Rev.html#revPersister",
          "type": "function"
        },
        "index": {
          "description": "The persister for first writes out the numeric index from the right in the chain of revisions This way the chain of alternative revisions can lengthen without changing the indices of past revisions",
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "revPersister",
          "package": "perdure",
          "partial": "Persister",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:revPersister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a chain of revisions to the \u003ccode\u003e\u003ca\u003eCurrent\u003c/a\u003e\u003c/code\u003e type, given a way to convert the \u003ccode\u003e\u003ca\u003ePrevious\u003c/a\u003e\u003c/code\u003e type to the \u003ccode\u003e\u003ca\u003eCurrent\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.Perdure.Rev",
          "name": "toCurrent",
          "package": "perdure",
          "signature": "(b -\u003e a) -\u003e (a :\u003e b) -\u003e a",
          "source": "src/Database-Perdure-Rev.html#toCurrent",
          "type": "function"
        },
        "index": {
          "description": "Converts chain of revisions to the Current type given way to convert the Previous type to the Current type",
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "toCurrent",
          "normalized": "(a-\u003eb)-\u003e(b a)-\u003eb",
          "package": "perdure",
          "partial": "Current",
          "signature": "(b-\u003ea)-\u003e(a b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:toCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.Rev",
          "name": "toOnlyRev",
          "package": "perdure",
          "signature": "(a :\u003e NoRev) -\u003e a",
          "source": "src/Database-Perdure-Rev.html#toOnlyRev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure Rev",
          "module": "Database.Perdure.Rev",
          "name": "toOnlyRev",
          "normalized": "(a NoRev)-\u003ea",
          "package": "perdure",
          "partial": "Only Rev",
          "signature": "(a NoRev)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-Rev.html#v:toOnlyRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure.SizeRef",
          "name": "SizeRef",
          "package": "perdure",
          "source": "src/Database-Perdure-SizeRef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure SizeRef",
          "module": "Database.Perdure.SizeRef",
          "name": "SizeRef",
          "package": "perdure",
          "partial": "Size Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-SizeRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference type which automatically puts its referent is a separately loadable allocation when that\n allocation's size is greater than 2^n bytes.\n\u003c/p\u003e",
          "module": "Database.Perdure.SizeRef",
          "name": "SizeRef",
          "package": "perdure",
          "source": "src/Database-Perdure-SizeRef.html#SizeRef",
          "type": "data"
        },
        "index": {
          "description": "reference type which automatically puts its referent is separately loadable allocation when that allocation size is greater than bytes",
          "hierarchy": "Database Perdure SizeRef",
          "module": "Database.Perdure.SizeRef",
          "name": "SizeRef",
          "package": "perdure",
          "partial": "Size Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure-SizeRef.html#t:SizeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure",
          "name": "Perdure",
          "package": "perdure",
          "source": "src/Database-Perdure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "Perdure",
          "package": "perdure",
          "partial": "Perdure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file or raw device where we can persist bytes.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "LocalStoreFile",
          "package": "perdure",
          "source": "src/Database-Perdure-LocalStoreFile.html#LocalStoreFile",
          "type": "data"
        },
        "index": {
          "description": "file or raw device where we can persist bytes",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "LocalStoreFile",
          "package": "perdure",
          "partial": "Local Store File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#t:LocalStoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a persisted database. Contains a (ram-only) lock to sequence multithreaded operations,\n so only one \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e must be created per \u003ccode\u003e\u003ca\u003eRootLocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "PVar",
          "package": "perdure",
          "source": "src/Database-Perdure.html#PVar",
          "type": "data"
        },
        "index": {
          "description": "Represents persisted database Contains ram-only lock to sequence multithreaded operations so only one PVar must be created per RootLocation",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "PVar",
          "package": "perdure",
          "partial": "PVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#t:PVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ccode\u003e\u003ca\u003eLocalStoreFile\u003c/a\u003e\u003c/code\u003e to be used as replicates. We write to all replicates and read from the first one that reports no error.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "ReplicatedFile",
          "package": "perdure",
          "source": "src/Database-Perdure-ReplicatedFile.html#ReplicatedFile",
          "type": "newtype"
        },
        "index": {
          "description": "list of LocalStoreFile to be used as replicates We write to all replicates and read from the first one that reports no error",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "ReplicatedFile",
          "package": "perdure",
          "partial": "Replicated File",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#t:ReplicatedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RootLocation specifies where roots are written, and provides a cache.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "RootLocation",
          "package": "perdure",
          "source": "src/Database-Perdure-State.html#RootLocation",
          "type": "data"
        },
        "index": {
          "description": "The RootLocation specifies where roots are written and provides cache",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "RootLocation",
          "package": "perdure",
          "partial": "Root Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#t:RootLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Perdure",
          "name": "ReplicatedFile",
          "package": "perdure",
          "signature": "ReplicatedFile [LocalStoreFile]",
          "source": "src/Database-Perdure-ReplicatedFile.html#ReplicatedFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "ReplicatedFile",
          "normalized": "ReplicatedFile[LocalStoreFile]",
          "package": "perdure",
          "partial": "Replicated File",
          "signature": "ReplicatedFile[LocalStoreFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:ReplicatedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a PVar with the specified initial state. Writes at the specified location, using the given maximum usable space (in bytes).\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "createPVar",
          "package": "perdure",
          "signature": "s -\u003e Word64 -\u003e RootLocation -\u003e IO (PVar s)",
          "source": "src/Database-Perdure.html#createPVar",
          "type": "function"
        },
        "index": {
          "description": "Creates PVar with the specified initial state Writes at the specified location using the given maximum usable space in bytes",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "createPVar",
          "normalized": "a-\u003eWord-\u003eRootLocation-\u003eIO(PVar a)",
          "package": "perdure",
          "partial": "PVar",
          "signature": "s-\u003eWord-\u003eRootLocation-\u003eIO(PVar s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:createPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the moment this is the only way to create a rootLocation.\n The root of the database will be located in one of two reserved locations at the start of the specified files.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "defaultRootLocation",
          "package": "perdure",
          "signature": "CachedFile -\u003e RootLocation",
          "source": "src/Database-Perdure.html#defaultRootLocation",
          "type": "function"
        },
        "index": {
          "description": "At the moment this is the only way to create rootLocation The root of the database will be located in one of two reserved locations at the start of the specified files",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "defaultRootLocation",
          "normalized": "CachedFile-\u003eRootLocation",
          "package": "perdure",
          "partial": "Root Location",
          "signature": "CachedFile-\u003eRootLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:defaultRootLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a ReplicatedFile with a cache of a given size. The size is specified in bytes of serialized data, but the actual consumed\n size may be a few times larger since the cache contains the deserialized data, which is often less compact than its serialized\n representation.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "newCachedFile",
          "package": "perdure",
          "signature": "Integer -\u003e ReplicatedFile -\u003e IO CachedFile",
          "source": "src/Database-Perdure.html#newCachedFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps ReplicatedFile with cache of given size The size is specified in bytes of serialized data but the actual consumed size may be few times larger since the cache contains the deserialized data which is often less compact than its serialized representation",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "newCachedFile",
          "normalized": "Integer-\u003eReplicatedFile-\u003eIO CachedFile",
          "package": "perdure",
          "partial": "Cached File",
          "signature": "Integer-\u003eReplicatedFile-\u003eIO CachedFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:newCachedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to open a PVar by reading at the given \u003ccode\u003e\u003ca\u003eRootLocation\u003c/a\u003e\u003c/code\u003e. Do not open the same location multiple times, share\n the PVar instead.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "openPVar",
          "package": "perdure",
          "signature": "RootLocation -\u003e IO (Maybe (PVar s))",
          "source": "src/Database-Perdure.html#openPVar",
          "type": "function"
        },
        "index": {
          "description": "Attempts to open PVar by reading at the given RootLocation Do not open the same location multiple times share the PVar instead",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "openPVar",
          "normalized": "RootLocation-\u003eIO(Maybe(PVar a))",
          "package": "perdure",
          "partial": "PVar",
          "signature": "RootLocation-\u003eIO(Maybe(PVar s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:openPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function allows read access to the bookkeeping structures of the database. The \u003ccode\u003e\u003ca\u003ePState\u003c/a\u003e\u003c/code\u003e type is subject to change.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "updateInspectPVar",
          "package": "perdure",
          "signature": "PVar s -\u003e StateT s (ReaderT (PState s) IO) a -\u003e IO a",
          "source": "src/Database-Perdure.html#updateInspectPVar",
          "type": "function"
        },
        "index": {
          "description": "This function allows read access to the bookkeeping structures of the database The PState type is subject to change",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "updateInspectPVar",
          "normalized": "PVar a-\u003eStateT a(ReaderT(PState a)IO)b-\u003eIO b",
          "package": "perdure",
          "partial": "Inspect PVar",
          "signature": "PVar s-\u003eStateT s(ReaderT(PState s)IO)a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:updateInspectPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersist a state change\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "updatePVar",
          "package": "perdure",
          "signature": "PVar s -\u003e StateT s IO a -\u003e IO a",
          "source": "src/Database-Perdure.html#updatePVar",
          "type": "function"
        },
        "index": {
          "description": "Persist state change",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "updatePVar",
          "normalized": "PVar a-\u003eStateT a IO b-\u003eIO b",
          "package": "perdure",
          "partial": "PVar",
          "signature": "PVar s-\u003eStateT s IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:updatePVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens the specified file as a LocalStoreFile, runs the provided function and closes the file.\n Do not make concurrent calls on the same file, place concurrency in the passed function.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "withFileStoreFile",
          "package": "perdure",
          "signature": "FilePath -\u003e (LocalStoreFile -\u003e IO a) -\u003e ErrorT String IO a",
          "source": "src/Database-Perdure-LocalStoreFile.html#withFileStoreFile",
          "type": "function"
        },
        "index": {
          "description": "Opens the specified file as LocalStoreFile runs the provided function and closes the file Do not make concurrent calls on the same file place concurrency in the passed function",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "withFileStoreFile",
          "normalized": "FilePath-\u003e(LocalStoreFile-\u003eIO a)-\u003eErrorT String IO a",
          "package": "perdure",
          "partial": "File Store File",
          "signature": "FilePath-\u003e(LocalStoreFile-\u003eIO a)-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:withFileStoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens the specified raw device as a LocalStoreFile, runs the provided function and closes the device.\n Do not make concurrent calls on the same device, place concurrency in the passed function.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "withRawDeviceStoreFile",
          "package": "perdure",
          "signature": "FilePath -\u003e (LocalStoreFile -\u003e IO a) -\u003e ErrorT String IO a",
          "source": "src/Database-Perdure-LocalStoreFile.html#withRawDeviceStoreFile",
          "type": "function"
        },
        "index": {
          "description": "Opens the specified raw device as LocalStoreFile runs the provided function and closes the device Do not make concurrent calls on the same device place concurrency in the passed function",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "withRawDeviceStoreFile",
          "normalized": "FilePath-\u003e(LocalStoreFile-\u003eIO a)-\u003eErrorT String IO a",
          "package": "perdure",
          "partial": "Raw Device Store File",
          "signature": "FilePath-\u003e(LocalStoreFile-\u003eIO a)-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:withRawDeviceStoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike nesting multiple calls to \u003ccode\u003e\u003ca\u003ewithRawDeviceStoreFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Perdure",
          "name": "withRawDeviceStoreFiles",
          "package": "perdure",
          "signature": "[FilePath] -\u003e ([LocalStoreFile] -\u003e IO a) -\u003e ErrorT String IO a",
          "source": "src/Database-Perdure-LocalStoreFile.html#withRawDeviceStoreFiles",
          "type": "function"
        },
        "index": {
          "description": "Like nesting multiple calls to withRawDeviceStoreFile",
          "hierarchy": "Database Perdure",
          "module": "Database.Perdure",
          "name": "withRawDeviceStoreFiles",
          "normalized": "[FilePath]-\u003e([LocalStoreFile]-\u003eIO a)-\u003eErrorT String IO a",
          "package": "perdure",
          "partial": "Raw Device Store Files",
          "signature": "[FilePath]-\u003e([LocalStoreFile]-\u003eIO a)-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perdure/docs/Database-Perdure.html#v:withRawDeviceStoreFiles"
      }
    }
  ]
]