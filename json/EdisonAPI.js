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
        "word": "EdisonAPI"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003cem\u003eassociative collection\u003c/em\u003e abstraction includes finite maps, finite\n   relations, and priority queues where the priority is separate from the\n   element.  Associative collections are defined in Edison as a set of eight\n   classes.\n\u003c/p\u003e\u003cp\u003eNote that this\n   hierarchy mirrors the hierarchy for collections, but with the addition\n   of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e as a superclass of every associative collection. See \n   \u003ca\u003eData.Edison.Coll\u003c/a\u003e for a description of the class hierarchy.\n\u003c/p\u003e\u003cp\u003eIn almost all cases, associative collections make no guarantees about\n   behavior with respect to the actual keys stored and (in the case of\n   observable maps) which keys can be retrieved.  We adopt the convention\n   that methods which create associative collections are \u003cem\u003eunambiguous\u003c/em\u003e\n   with respect to the key storage behavior, but that methods which can\n   observe keys are \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual keys returned.\n\u003c/p\u003e\u003cp\u003eIn all cases where an operation is ambiguous with respect to the key,\n   the operation is rendered \u003cem\u003eunambiguous\u003c/em\u003e if the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   corresponds to indistinguisability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Assoc",
          "name": "Assoc",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html",
          "type": "module"
        },
        "index": {
          "description": "The associative collection abstraction includes finite maps finite relations and priority queues where the priority is separate from the element Associative collections are defined in Edison as set of eight classes Note that this hierarchy mirrors the hierarchy for collections but with the addition of Functor as superclass of every associative collection See Data.Edison.Coll for description of the class hierarchy In almost all cases associative collections make no guarantees about behavior with respect to the actual keys stored and in the case of observable maps which keys can be retrieved We adopt the convention that methods which create associative collections are unambiguous with respect to the key storage behavior but that methods which can observe keys are ambiguous with respect to the actual keys returned In all cases where an operation is ambiguous with respect to the key the operation is rendered unambiguous if the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "Assoc",
          "package": "EdisonAPI",
          "partial": "Assoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociative collections where the keys are observable.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "Assoc",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#Assoc",
          "type": "class"
        },
        "index": {
          "description": "Associative collections where the keys are observable",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "Assoc",
          "package": "EdisonAPI",
          "partial": "Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe root class of the associative collection hierarchy.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "AssocX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#AssocX",
          "type": "class"
        },
        "index": {
          "description": "The root class of the associative collection hierarchy",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "AssocX",
          "package": "EdisonAPI",
          "partial": "Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:AssocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps with observable keys.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "FiniteMap",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#FiniteMap",
          "type": "class"
        },
        "index": {
          "description": "Finite maps with observable keys",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "FiniteMap",
          "package": "EdisonAPI",
          "partial": "Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:FiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection where the keys form a set; that is, each key\n   appears in the associative collection at most once.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "FiniteMapX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#FiniteMapX",
          "type": "class"
        },
        "index": {
          "description": "An associative collection where the keys form set that is each key appears in the associative collection at most once",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "FiniteMapX",
          "package": "EdisonAPI",
          "partial": "Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:FiniteMapX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection with observable keys where the keys additionally\n   have an ordering relation.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "OrdAssoc",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdAssoc",
          "type": "class"
        },
        "index": {
          "description": "An associative collection with observable keys where the keys additionally have an ordering relation",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "OrdAssoc",
          "package": "EdisonAPI",
          "partial": "Ord Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:OrdAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection where the keys additionally have an ordering\n   relation.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "OrdAssocX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdAssocX",
          "type": "class"
        },
        "index": {
          "description": "An associative collection where the keys additionally have an ordering relation",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "OrdAssocX",
          "package": "EdisonAPI",
          "partial": "Ord Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:OrdAssocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps with observable keys where the keys additionally\n   have an ordering relation.  This class introduces no new methods.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "OrdFiniteMap",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdFiniteMap",
          "type": "class"
        },
        "index": {
          "description": "Finite maps with observable keys where the keys additionally have an ordering relation This class introduces no new methods",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "OrdFiniteMap",
          "package": "EdisonAPI",
          "partial": "Ord Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:OrdFiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps where the keys additionally have an ordering relation.\n   This class introduces no new methods.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "OrdFiniteMapX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdFiniteMapX",
          "type": "class"
        },
        "index": {
          "description": "Finite maps where the keys additionally have an ordering relation This class introduces no new methods",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "OrdFiniteMapX",
          "package": "EdisonAPI",
          "partial": "Ord Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#t:OrdFiniteMapX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a single binding for the given key by applying a function to its\n   element.  If the key binds more than one element, it is unspecified which\n   will be modified.  If the key is not found in the collection, it is returned\n   unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjust",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjust",
          "type": "method"
        },
        "index": {
          "description": "Change single binding for the given key by applying function to its element If the key binds more than one element it is unspecified which will be modified If the key is not found in the collection it is returned unchanged This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea)-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange all bindings for the given key by applying a function to its\n   elements.  If the key is not found in the collection, it is returned\n   unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjustAll",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjustAll",
          "type": "method"
        },
        "index": {
          "description": "Change all bindings for the given key by applying function to its elements If the key is not found in the collection it is returned unchanged This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjustAll",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "All",
          "signature": "(a-\u003ea)-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjustAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for all matching keys in the collection.  If the key is found,\n   the given function is applied to all its elements to adjust their values.\n   If the key is not found, a new binding is inserted with the given element.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjustAllOrInsert",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e a -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjustAllOrInsert",
          "type": "method"
        },
        "index": {
          "description": "Searches for all matching keys in the collection If the key is found the given function is applied to all its elements to adjust their values If the key is not found new binding is inserted with the given element This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjustAllOrInsert",
          "normalized": "(a-\u003ea)-\u003ea-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "All Or Insert",
          "signature": "(a-\u003ea)-\u003ea-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjustAllOrInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange or delete a single binding for the given key by applying a function\n   to its element.  If the function returns \u003ccode\u003eNothing\u003c/code\u003e, then the binding\n   will be deleted.  If the key binds more than one element, it is unspecified which\n   will be modified.  If the key is not found in the collection, it is returned\n   unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrDelete",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjustOrDelete",
          "type": "method"
        },
        "index": {
          "description": "Change or delete single binding for the given key by applying function to its element If the function returns Nothing then the binding will be deleted If the key binds more than one element it is unspecified which will be modified If the key is not found in the collection it is returned unchanged This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrDelete",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "Or Delete",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjustOrDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange or delete all bindings for the given key by applying a function to\n   its elements.  For any element where the function returns \u003ccode\u003eNothing\u003c/code\u003e, the\n   corresponding binding is deleted.  If the key is not found in the collection,\n   it is returned unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrDeleteAll",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjustOrDeleteAll",
          "type": "method"
        },
        "index": {
          "description": "Change or delete all bindings for the given key by applying function to its elements For any element where the function returns Nothing the corresponding binding is deleted If the key is not found in the collection it is returned unchanged This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrDeleteAll",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "Or Delete All",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjustOrDeleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for a matching key in the collection.  If the key is found,\n   the given function is called to adjust the value.  If the key is not\n   found, a new binding is inserted with the given element. If the given\n   key is bound more than once in the collection, it is unspecified\n   which element is adjusted.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrInsert",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e a -\u003e k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#adjustOrInsert",
          "type": "method"
        },
        "index": {
          "description": "Searches for matching key in the collection If the key is found the given function is called to adjust the value If the key is not found new binding is inserted with the given element If the given key is bound more than once in the collection it is unspecified which element is adjusted This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "adjustOrInsert",
          "normalized": "(a-\u003ea)-\u003ea-\u003eb-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "Or Insert",
          "signature": "(a-\u003ea)-\u003ea-\u003ek-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:adjustOrInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of bindings with the given key.  For finite maps\n   this will always return 0 or 1.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "count",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e Int",
          "source": "src/Data-Edison-Assoc.html#count",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of bindings with the given key For finite maps this will always return or This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "count",
          "normalized": "a-\u003eb c-\u003eInt",
          "package": "EdisonAPI",
          "signature": "k-\u003em a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete one binding with the given key, or leave the associative collection\n   unchanged if it does not contain the key.  For bag-like associative\n   collections, it is unspecified which binding will be removed.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears more\n   than once in the relation.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "delete",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Delete one binding with the given key or leave the associative collection unchanged if it does not contain the key For bag-like associative collections it is unspecified which binding will be removed This function is ambiguous at finite relation types if the key appears more than once in the relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "delete",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all bindings with the given key, or leave the associative collection\n   unchanged if it does not contain the key.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "deleteAll",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#deleteAll",
          "type": "method"
        },
        "index": {
          "description": "Delete all bindings with the given key or leave the associative collection unchanged if it does not contain the key This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "deleteAll",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "All",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "deleteList",
          "package": "EdisonAPI",
          "signature": "[k] -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#deleteList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "deleteList",
          "normalized": "[a]-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[k]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:deleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the binding with the maximum key and return the remaining\n   associative collection, or return empty if it is already empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "deleteMax",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#deleteMax",
          "type": "method"
        },
        "index": {
          "description": "Remove the binding with the maximum key and return the remaining associative collection or return empty if it is already empty This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "deleteMax",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "partial": "Max",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the binding with the minimum key and return the remaining\n   associative collection, or return empty if it is already empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "deleteMin",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#deleteMin",
          "type": "method"
        },
        "index": {
          "description": "Remove the binding with the minimum key and return the remaining associative collection or return empty if it is already empty This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "deleteMin",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "partial": "Min",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a single occurrence of each of the given keys from an associative\n   collection.  For bag-like associative collections containing duplicate keys,\n   it is unspecified which bindings will be removed.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if any key appears both\n   in the sequence and in the finite relation AND the number of occurrences in\n   the sequence is less than the number of occurrences in the finite relation.\n   Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "deleteSeq",
          "package": "EdisonAPI",
          "signature": "seq k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#deleteSeq",
          "type": "method"
        },
        "index": {
          "description": "Delete single occurrence of each of the given keys from an associative collection For bag-like associative collections containing duplicate keys it is unspecified which bindings will be removed This function is ambiguous at finite relation types if any key appears both in the sequence and in the finite relation AND the number of occurrences in the sequence is less than the number of occurrences in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "deleteSeq",
          "normalized": "a b-\u003ec d-\u003ec d",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:deleteSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the difference of two finite maps; that is, all bindings\n   in the first finite map whose keys to not appear in the second.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "difference",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#difference",
          "type": "method"
        },
        "index": {
          "description": "Computes the difference of two finite maps that is all bindings in the first finite map whose keys to not appear in the second This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "difference",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "EdisonAPI",
          "signature": "m a-\u003em b-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all the elements in an associative collection, in an unspecified\n   order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e iff the associative collection contains\n   more than one element.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "elements",
          "package": "EdisonAPI",
          "signature": "m a -\u003e seq a",
          "source": "src/Data-Edison-Assoc.html#elements",
          "type": "method"
        },
        "index": {
          "description": "Returns all the elements in an associative collection in an unspecified order This function is ambiguous iff the associative collection contains more than one element",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "elements",
          "normalized": "a b-\u003ec b",
          "package": "EdisonAPI",
          "signature": "m a-\u003eseq a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "elementsList",
          "package": "EdisonAPI",
          "signature": "m a -\u003e [a]",
          "source": "src/Data-Edison-Assoc.html#elementsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "elementsList",
          "normalized": "a b-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "m a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:elementsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty associative collection.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "empty",
          "package": "EdisonAPI",
          "signature": "m a",
          "source": "src/Data-Edison-Assoc.html#empty",
          "type": "method"
        },
        "index": {
          "description": "The empty associative collection This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "empty",
          "package": "EdisonAPI",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings whose elements satisfy the given predicate.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filter",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings whose elements satisfy the given predicate This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings whose keys are \u003ccode\u003e\u003e=\u003c/code\u003e the given key.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filterGE",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filterGE",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings whose keys are the given key This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filterGE",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "GE",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filterGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings whose keys are \u003ccode\u003e\u003e\u003c/code\u003e the given key.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filterGT",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filterGT",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings whose keys are the given key This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filterGT",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "GT",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filterGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings whose keys are \u003ccode\u003e\u003c=\u003c/code\u003e the given key.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filterLE",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filterLE",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings whose keys are the given key This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filterLE",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "LE",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filterLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings whose keys are \u003ccode\u003e\u003c\u003c/code\u003e the given key.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filterLT",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filterLT",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings whose keys are the given key This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filterLT",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "EdisonAPI",
          "partial": "LT",
          "signature": "k-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filterLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all bindings from an associative collection which satisfy the\n   given predicate.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual keys\n   observed, unless the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to\n   indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "filterWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#filterWithKey",
          "type": "method"
        },
        "index": {
          "description": "Extract all bindings from an associative collection which satisfy the given predicate This function is ambiguous with respect to the actual keys observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements in the associative collection, given a combining\n   function and an initial value.  The elements are processed in an\n   unspecified order.  \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e ignores the keys.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fold",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#fold",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements in the associative collection given combining function and an initial value The elements are processed in an unspecified order Note that fold ignores the keys fold is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fold'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#fold%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold fold is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fold'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements in a non-empty associative collection using the\n   given combining function.  Signals an error if the associative collection\n   is empty.  The elements are processed in an unspecified order.  An\n   implementation may choose to process the elements linearly or in a\n   balanced fashion (like \u003ccode\u003ereduce1\u003c/code\u003e on sequences).  \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e\n   ignores the keys.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold1 f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fold1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#fold1",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements in non-empty associative collection using the given combining function Signals an error if the associative collection is empty The elements are processed in an unspecified order An implementation may choose to process the elements linearly or in balanced fashion like reduce1 on sequences Note that fold1 ignores the keys fold1 is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold1' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fold1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#fold1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold1 fold1 is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fold1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fold1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements in the associative collection, given a combining\n   function and an initial value.  The elements are processed in an\n   unspecified order.  The combining function additionally takes the\n   value of the key.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldWithKey f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative and\n   the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldWithKey",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements in the associative collection given combining function and an initial value The elements are processed in an unspecified order The combining function additionally takes the value of the key foldWithKey is unambiguous iff is fold-commutative and the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003ed b-\u003ec",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldWithKey' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative and\n   the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldWithKey'",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldWithKey%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldWithKey foldWithKey is unambiguous iff is fold-commutative and the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003ed b-\u003ec",
          "package": "EdisonAPI",
          "partial": "With Key'",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements of an associative collection in non-decreasing\n   order by key with left associativity.  For finite maps, the order\n   is increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldl f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldl",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements of an associative collection in non-decreasing order by key with left associativity For finite maps the order is increasing foldl is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldl' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldl'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldl foldl is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements of an associative collection in non-decreasing\n   order by key with left associativity.  Signals an error if the\n   associative collection is empty.  For finite maps, the order is\n   increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldl1 f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldl1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements of an associative collection in non-decreasing order by key with left associativity Signals an error if the associative collection is empty For finite maps the order is increasing foldl1 is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldl1' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldl1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#foldl1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldl1 foldl1 is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over all bindings in an associative collection in non-decreasing\n   order by key with left associativity, given a combining function\n   and an initial value.  For finite maps, the order is increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldlWithKey f\u003c/code\u003e is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if\n   the relation contains more than one equivalent key and\n   \u003ccode\u003ef\u003c/code\u003e is not fold-commutative OR if the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   does not correspond to indistingusihability. Otherwise it\n   is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldlWithKey",
          "package": "EdisonAPI",
          "signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldlWithKey",
          "type": "method"
        },
        "index": {
          "description": "Fold over all bindings in an associative collection in non-decreasing order by key with left associativity given combining function and an initial value For finite maps the order is increasing foldlWithKey is ambiguous at finite relation types if the relation contains more than one equivalent key and is not fold-commutative OR if the Eq instance on keys does not correspond to indistingusihability Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldlWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003ed c-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldlWithKey' f\u003c/code\u003e is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if\n   the relation contains more than one equivalent key and\n   \u003ccode\u003ef\u003c/code\u003e is not fold-commutative OR if the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   does not correspond to indistinguishability.  Otherwise it\n   is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldlWithKey'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldlWithKey%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldlWithKey foldlWithKey is ambiguous at finite relation types if the relation contains more than one equivalent key and is not fold-commutative OR if the Eq instance on keys does not correspond to indistinguishability Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldlWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003ed c-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Key'",
          "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldlWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements of an associative collection in non-decreasing\n   order by key with right associativity.  For finite maps, the order\n   is increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldr f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldr",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements of an associative collection in non-decreasing order by key with right associativity For finite maps the order is increasing foldr is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldr' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldr'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldr foldr is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements of an associative collection in non-decreasing\n   order by key with right associativity.  Signals an error if the\n   associative collection is empty.  For finite maps, the order is\n   increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldr1 f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldr1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements of an associative collection in non-decreasing order by key with right associativity Signals an error if the associative collection is empty For finite maps the order is increasing foldr1 is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldr1' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e if \u003ccode\u003ef\u003c/code\u003e is fold-commutative, at finite\n   map types, or at finite relation types if the relation contains no\n   duplicate keys.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldr1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#foldr1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldr1 foldr1 is unambiguous if is fold-commutative at finite map types or at finite relation types if the relation contains no duplicate keys Otherwise it is ambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over all bindings in an associative collection in non-decreasing\n   order by key with right associativity, given a combining function\n   and an initial value.  For finite maps, the order is increasing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldrWithKey f\u003c/code\u003e is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if\n   the relation contains more than one equivalent key and\n   \u003ccode\u003ef\u003c/code\u003e is not fold-commutative OR if the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   does not correspond to indistingusihability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldrWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldrWithKey",
          "type": "method"
        },
        "index": {
          "description": "Fold over all bindings in an associative collection in non-decreasing order by key with right associativity given combining function and an initial value For finite maps the order is increasing foldrWithKey is ambiguous at finite relation types if the relation contains more than one equivalent key and is not fold-commutative OR if the Eq instance on keys does not correspond to indistingusihability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldrWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003ed b-\u003ec",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efoldrWithKey' f\u003c/code\u003e is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if\n   the relation contains more than one equivalent key and\n   \u003ccode\u003ef\u003c/code\u003e is not fold-commutative OR if the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   does not correspond to indistingusihability.  Otherwise it\n   is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "foldrWithKey'",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e m a -\u003e b",
          "source": "src/Data-Edison-Assoc.html#foldrWithKey%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldrWithKey foldrWithKey is ambiguous at finite relation types if the relation contains more than one equivalent key and is not fold-commutative OR if the Eq instance on keys does not correspond to indistingusihability Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "foldrWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003ed b-\u003ec",
          "package": "EdisonAPI",
          "partial": "With Key'",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:foldrWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "fromList",
          "package": "EdisonAPI",
          "signature": "[(k, a)] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003ec b",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[(k,a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "fromListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003ec a",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "fromListWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003ec b",
          "package": "EdisonAPI",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an associative collection from a  list of bindings. Which element\n   and key are kept in the case of duplicate keys is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite map types if the sequence\n   contains more than one equivalent key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fromSeq",
          "package": "EdisonAPI",
          "signature": "seq (k, a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromSeq",
          "type": "method"
        },
        "index": {
          "description": "Create an associative collection from list of bindings Which element and key are kept in the case of duplicate keys is unspecified This function is ambiguous at finite map types if the sequence contains more than one equivalent key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromSeq",
          "normalized": "a(b,c)-\u003ed c",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq(k,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efromSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fromSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq (k, a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as fromSeq but with combining function to resolve duplicates This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb(c,a)-\u003ed a",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq(k,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efromSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates;\n   the combining function takes the key in addition to the two elements.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "fromSeqWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e seq (k, a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#fromSeqWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as fromSeq but with combining function to resolve duplicates the combining function takes the key in addition to the two elements This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "fromSeqWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec(a,b)-\u003ed b",
          "package": "EdisonAPI",
          "partial": "Seq With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eseq(k,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:fromSeqWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a binding to an associative collection.  For finite maps, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n   keeps the new element in the case of duplicate keys.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insert",
          "package": "EdisonAPI",
          "signature": "k -\u003e a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Add binding to an associative collection For finite maps insert keeps the new element in the case of duplicate keys This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "signature": "k-\u003ea-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "insertList",
          "package": "EdisonAPI",
          "signature": "[(k, a)] -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertList",
          "normalized": "[(a,b)]-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[(k,a)]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "insertListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "insertListWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a sequence of bindings to a collection.  For finite maps, which key\n   and which element are kept in the case of duplicates is unspecified.\n   However, if a key appears in the sequence and in the map, (one of) the\n   elements in the list will be given preference.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite map types if the sequence contains\n   more than one equivalent key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insertSeq",
          "package": "EdisonAPI",
          "signature": "seq (k, a) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertSeq",
          "type": "method"
        },
        "index": {
          "description": "Add sequence of bindings to collection For finite maps which key and which element are kept in the case of duplicates is unspecified However if key appears in the sequence and in the map one of the elements in the list will be given preference This function is ambiguous at finite map types if the sequence contains more than one equivalent key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertSeq",
          "normalized": "a(b,c)-\u003ed c-\u003ed c",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq(k,a)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insertSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq (k, a) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as insertSeq but with combining function to resolve duplicates This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb(c,a)-\u003ed a-\u003ed a",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq(k,a)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates;\n   the combining function takes the key in addition to the two elements.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insertSeqWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e seq (k, a) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertSeqWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as insertSeq but with combining function to resolve duplicates the combining function takes the key in addition to the two elements This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertSeqWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec(a,b)-\u003ed b-\u003ed b",
          "package": "EdisonAPI",
          "partial": "Seq With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eseq(k,a)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertSeqWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insertWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertWith",
          "type": "method"
        },
        "index": {
          "description": "Same as insert but with combining function to resolve duplicates This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates;\n   the combining function takes the key in addition to the two elements.\n   The key passed to the combining function is always the same as the\n   given key.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "insertWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#insertWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as insert but with combining function to resolve duplicates the combining function takes the key in addition to the two elements The key passed to the combining function is always the same as the given key This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the name of the module implementing this associative collection.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "instanceName",
          "package": "EdisonAPI",
          "signature": "m a -\u003e String",
          "source": "src/Data-Edison-Assoc.html#instanceName",
          "type": "method"
        },
        "index": {
          "description": "Returns the name of the module implementing this associative collection",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "instanceName",
          "normalized": "a b-\u003eString",
          "package": "EdisonAPI",
          "partial": "Name",
          "signature": "m a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:instanceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection of two finite maps.  The resulting finite map\n   will contain bindings where the keys are the set intersection of the\n   keys in the argument finite maps.  The combining function computes\n   the value of the element given the bound elements from the argument\n   finite maps.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "intersectionWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e m b -\u003e m c",
          "source": "src/Data-Edison-Assoc.html#intersectionWith",
          "type": "method"
        },
        "index": {
          "description": "Compute the intersection of two finite maps The resulting finite map will contain bindings where the keys are the set intersection of the keys in the argument finite maps The combining function computes the value of the element given the bound elements from the argument finite maps This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003em b-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, except that the combining function\n   additionally takes the key value for each binding.  Which key is\n   kept and passed into the combining function is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e provided the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   corresponds to indistinguishability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "intersectionWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e m a -\u003e m b -\u003e m c",
          "source": "src/Data-Edison-Assoc.html#intersectionWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as intersectionWith except that the combining function additionally takes the key value for each binding Which key is kept and passed into the combining function is unspecified This function is unambiguous provided the Eq instance on keys corresponds to indistinguishability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "intersectionWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee b-\u003ee c-\u003ee d",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003em a-\u003em b-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the keys of an associative collection into a sequence.\n   The keys are emitted in an unspecified order.  For finite relations,\n   keys which appear multiple times in the relation will appear as many\n   times in the extracted sequence.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e with respect to the sequence order\n   iff the associative collection contains more than one binding.\n   Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual key\n   returned, unless the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to\n   indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "keys",
          "package": "EdisonAPI",
          "signature": "m a -\u003e seq k",
          "source": "src/Data-Edison-Assoc.html#keys",
          "type": "method"
        },
        "index": {
          "description": "Extract the keys of an associative collection into sequence The keys are emitted in an unspecified order For finite relations keys which appear multiple times in the relation will appear as many times in the extracted sequence This function is ambiguous with respect to the sequence order iff the associative collection contains more than one binding Furthermore it is ambiguous with respect to the actual key returned unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "keys",
          "normalized": "a b-\u003ec d",
          "package": "EdisonAPI",
          "signature": "m a-\u003eseq k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "keysList",
          "package": "EdisonAPI",
          "signature": "m a -\u003e [k]",
          "source": "src/Data-Edison-Assoc.html#keysList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "keysList",
          "normalized": "a b-\u003e[c]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "m a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:keysList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the element associated with the given key.  Signals an error if\n   the given key is not bound.  If more than one element is bound by the\n   given key, it is unspecified which is returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookup",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Find the element associated with the given key Signals an error if the given key is not bound If more than one element is bound by the given key it is unspecified which is returned This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookup",
          "normalized": "a-\u003eb c-\u003ec",
          "package": "EdisonAPI",
          "signature": "k-\u003em a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements bound by the given key in an unspecified order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupAll",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e seq a",
          "source": "src/Data-Edison-Assoc.html#lookupAll",
          "type": "method"
        },
        "index": {
          "description": "Return all elements bound by the given key in an unspecified order This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupAll",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "EdisonAPI",
          "partial": "All",
          "signature": "k-\u003em a-\u003eseq a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the element associated with the given key; return the element\n   and the collection with that element deleted.  Signals an error if\n   the given key is not bound.  If more than one element is bound by the\n   given key, it is unspecified which is deleted and returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDelete",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e (a, m a)",
          "source": "src/Data-Edison-Assoc.html#lookupAndDelete",
          "type": "method"
        },
        "index": {
          "description": "Find the element associated with the given key return the element and the collection with that element deleted Signals an error if the given key is not bound If more than one element is bound by the given key it is unspecified which is deleted and returned This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDelete",
          "normalized": "a-\u003eb c-\u003e(c,b c)",
          "package": "EdisonAPI",
          "partial": "And Delete",
          "signature": "k-\u003em a-\u003e(a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupAndDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all elements bound by the given key; return a sequence containing\n   all such bound elements in an unspecified order and the collection\n   with all such elements deleted.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDeleteAll",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e (seq a, m a)",
          "source": "src/Data-Edison-Assoc.html#lookupAndDeleteAll",
          "type": "method"
        },
        "index": {
          "description": "Find all elements bound by the given key return sequence containing all such bound elements in an unspecified order and the collection with all such elements deleted This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDeleteAll",
          "normalized": "a-\u003eb c-\u003e(d c,b c)",
          "package": "EdisonAPI",
          "partial": "And Delete All",
          "signature": "k-\u003em a-\u003e(seq a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupAndDeleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the element associated with the given key; return the element\n   and the collection with that element deleted.  Calls \u003ccode\u003efail\u003c/code\u003e if\n   the given key is not bound.  If more than one element is bound by the\n   given key, it is unspecified which is deleted and returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDeleteM",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e rm (a, m a)",
          "source": "src/Data-Edison-Assoc.html#lookupAndDeleteM",
          "type": "method"
        },
        "index": {
          "description": "Find the element associated with the given key return the element and the collection with that element deleted Calls fail if the given key is not bound If more than one element is bound by the given key it is unspecified which is deleted and returned This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupAndDeleteM",
          "normalized": "a-\u003eb c-\u003ed(c,b c)",
          "package": "EdisonAPI",
          "partial": "And Delete",
          "signature": "k-\u003em a-\u003erm(a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupAndDeleteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "lookupList",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e [a]",
          "source": "src/Data-Edison-Assoc.html#lookupList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupList",
          "normalized": "a-\u003eb c-\u003e[c]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "k-\u003em a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the element associated with the given key.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the\n   given key is not bound.  If more than one element is bound by the given\n   key, it is unspecified which is returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupM",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e rm a",
          "source": "src/Data-Edison-Assoc.html#lookupM",
          "type": "method"
        },
        "index": {
          "description": "Find the element associated with the given key Calls fail if the given key is not bound If more than one element is bound by the given key it is unspecified which is returned This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupM",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "EdisonAPI",
          "signature": "k-\u003em a-\u003erm a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element associated with the given key.  If no such element\n   is found, return the default.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the key appears\n   more than once in the finite relation.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "signature": "lookupWithDefault",
          "source": "src/Data-Edison-Assoc.html#lookupWithDefault",
          "type": "method"
        },
        "index": {
          "description": "Return the element associated with the given key If no such element is found return the default This function is ambiguous at finite relation types if the key appears more than once in the finite relation Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "partial": "With Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the elements of every binding in the associative\n   collection.  Identical to \u003ccode\u003efmap\u003c/code\u003e from \u003ccode\u003eFunctor\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "map",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e m a -\u003e m b",
          "source": "src/Data-Edison-Assoc.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the elements of every binding in the associative collection Identical to fmap from Functor This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every element in an associative collection.  The\n   mapped function additionally takes the value of the key.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual keys\n   observed, unless the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to\n   indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "mapWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e b) -\u003e m a -\u003e m b",
          "source": "src/Data-Edison-Assoc.html#mapWithKey",
          "type": "method"
        },
        "index": {
          "description": "Apply function to every element in an associative collection The mapped function additionally takes the value of the key This function is ambiguous with respect to the actual keys observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed b-\u003ed c",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003em a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the binding with the maximum key and return its element.  Signals\n   an error if the associative collection is empty.  Which element is chosen\n   if there is more than one maximum is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "maxElem",
          "package": "EdisonAPI",
          "signature": "m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#maxElem",
          "type": "method"
        },
        "index": {
          "description": "Find the binding with the maximum key and return its element Signals an error if the associative collection is empty Which element is chosen if there is more than one maximum is unspecified This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "maxElem",
          "normalized": "a b-\u003eb",
          "package": "EdisonAPI",
          "partial": "Elem",
          "signature": "m a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:maxElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the binding with the maximum key in an associative collection and\n   return the key and the element.  Signals an error if the associative\n   collection is empty.  Which binding is chosen if there are multiple\n   maximum keys is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if more than one\n   maximum key exists in the relation.  Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e\n   with respect to the actual key observed unless the \u003ccode\u003eEq\u003c/code\u003e instance on\n   keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "maxElemWithKey",
          "package": "EdisonAPI",
          "signature": "m a -\u003e (k, a)",
          "source": "src/Data-Edison-Assoc.html#maxElemWithKey",
          "type": "method"
        },
        "index": {
          "description": "Find the binding with the maximum key in an associative collection and return the key and the element Signals an error if the associative collection is empty Which binding is chosen if there are multiple maximum keys is unspecified This function is ambiguous at finite relation types if more than one maximum key exists in the relation Furthermore it is ambiguous with respect to the actual key observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "maxElemWithKey",
          "normalized": "a b-\u003e(c,b)",
          "package": "EdisonAPI",
          "partial": "Elem With Key",
          "signature": "m a-\u003e(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:maxElemWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the binding with the maximum key, and return its element together\n   with the remaining associative collection.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the\n   associative collection is empty.  Which binding is removed if there\n   is more than one maximum is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "maxView",
          "package": "EdisonAPI",
          "signature": "m a -\u003e rm (a, m a)",
          "source": "src/Data-Edison-Assoc.html#maxView",
          "type": "method"
        },
        "index": {
          "description": "Remove the binding with the maximum key and return its element together with the remaining associative collection Calls fail if the associative collection is empty Which binding is removed if there is more than one maximum is unspecified This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "maxView",
          "normalized": "a b-\u003ec(b,a b)",
          "package": "EdisonAPI",
          "partial": "View",
          "signature": "m a-\u003erm(a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the binding with the maximum key from an associative\n   collection and return the key, the element and the remaining\n   associative collection.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the associative collection\n   is empty.  Which binding is chosen if there are multiple maximum keys\n   is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if more than one\n   maximum key exists in the relation.  Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e\n   with respect to the actual key observed unless the \u003ccode\u003eEq\u003c/code\u003e instance on\n   keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "maxViewWithKey",
          "package": "EdisonAPI",
          "signature": "m a -\u003e rm ((k, a), m a)",
          "source": "src/Data-Edison-Assoc.html#maxViewWithKey",
          "type": "method"
        },
        "index": {
          "description": "Delete the binding with the maximum key from an associative collection and return the key the element and the remaining associative collection Calls fail if the associative collection is empty Which binding is chosen if there are multiple maximum keys is unspecified This function is ambiguous at finite relation types if more than one maximum key exists in the relation Furthermore it is ambiguous with respect to the actual key observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "maxViewWithKey",
          "normalized": "a b-\u003ec((d,b),a b)",
          "package": "EdisonAPI",
          "partial": "View With Key",
          "signature": "m a-\u003erm((k,a),m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the given key is bound in the associative collection.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "member",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#member",
          "type": "method"
        },
        "index": {
          "description": "Test whether the given key is bound in the associative collection This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "member",
          "normalized": "a-\u003eb c-\u003eBool",
          "package": "EdisonAPI",
          "signature": "k-\u003em a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the binding with the minimum key and return its element. Signals\n   an error if the associative collection is empty.  Which element is chosen\n   if there is more than one minimum is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "minElem",
          "package": "EdisonAPI",
          "signature": "m a -\u003e a",
          "source": "src/Data-Edison-Assoc.html#minElem",
          "type": "method"
        },
        "index": {
          "description": "Find the binding with the minimum key and return its element Signals an error if the associative collection is empty Which element is chosen if there is more than one minimum is unspecified This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "minElem",
          "normalized": "a b-\u003eb",
          "package": "EdisonAPI",
          "partial": "Elem",
          "signature": "m a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:minElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the binding with the minimum key in an associative collection and\n   return the key and the element.  Signals an error if the associative\n   collection is empty.  Which binding is chosen if there are multiple\n   minimum keys is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if more than one\n   minimum key exists in the relation.  Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e\n   with respect to the actual key observed unless the \u003ccode\u003eEq\u003c/code\u003e instance on\n   keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "minElemWithKey",
          "package": "EdisonAPI",
          "signature": "m a -\u003e (k, a)",
          "source": "src/Data-Edison-Assoc.html#minElemWithKey",
          "type": "method"
        },
        "index": {
          "description": "Find the binding with the minimum key in an associative collection and return the key and the element Signals an error if the associative collection is empty Which binding is chosen if there are multiple minimum keys is unspecified This function is ambiguous at finite relation types if more than one minimum key exists in the relation Furthermore it is ambiguous with respect to the actual key observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "minElemWithKey",
          "normalized": "a b-\u003e(c,b)",
          "package": "EdisonAPI",
          "partial": "Elem With Key",
          "signature": "m a-\u003e(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:minElemWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the binding with the minimum key, and return its element together\n   with the remaining associative collection.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the\n   associative collection is empty.  Which binding is removed if there\n   is more than one minimum is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the finite relation\n   contains more than one minimum key.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "minView",
          "package": "EdisonAPI",
          "signature": "m a -\u003e rm (a, m a)",
          "source": "src/Data-Edison-Assoc.html#minView",
          "type": "method"
        },
        "index": {
          "description": "Remove the binding with the minimum key and return its element together with the remaining associative collection Calls fail if the associative collection is empty Which binding is removed if there is more than one minimum is unspecified This function is ambiguous at finite relation types if the finite relation contains more than one minimum key Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "minView",
          "normalized": "a b-\u003ec(b,a b)",
          "package": "EdisonAPI",
          "partial": "View",
          "signature": "m a-\u003erm(a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the binding with the minimum key from an associative\n   collection and return the key, the element and the remaining\n   associative collection.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the associative collection\n   is empty.  Which binding is chosen if there are multiple minimum keys\n   is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if more than one\n   minimum key exists in the relation.  Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e\n   with respect to the actual key observed unless the \u003ccode\u003eEq\u003c/code\u003e instance on\n   keys corresponds to indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "minViewWithKey",
          "package": "EdisonAPI",
          "signature": "m a -\u003e rm ((k, a), m a)",
          "source": "src/Data-Edison-Assoc.html#minViewWithKey",
          "type": "method"
        },
        "index": {
          "description": "Delete the binding with the minimum key from an associative collection and return the key the element and the remaining associative collection Calls fail if the associative collection is empty Which binding is chosen if there are multiple minimum keys is unspecified This function is ambiguous at finite relation types if more than one minimum key exists in the relation Furthermore it is ambiguous with respect to the actual key observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "minViewWithKey",
          "normalized": "a b-\u003ec((d,b),a b)",
          "package": "EdisonAPI",
          "partial": "View With Key",
          "signature": "m a-\u003erm((k,a),m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the associative collection is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enull m = (size m == 0)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "null",
          "package": "EdisonAPI",
          "signature": "m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#null",
          "type": "method"
        },
        "index": {
          "description": "Test whether the associative collection is empty Axioms null size This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "null",
          "normalized": "a b-\u003eBool",
          "package": "EdisonAPI",
          "signature": "m a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit an associative collection into those bindings which satisfy the\n   given predicate, and those which do not.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "partition",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e (m a, m a)",
          "source": "src/Data-Edison-Assoc.html#partition",
          "type": "method"
        },
        "index": {
          "description": "Split an associative collection into those bindings which satisfy the given predicate and those which do not This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(b a,b a)",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003em a-\u003e(m a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit an associative collection into two sub-collections, containing\n   those bindings whose keys are \u003ccode\u003e\u003c=\u003c/code\u003e the given key and those which are \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "partitionLE_GT",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e (m a, m a)",
          "source": "src/Data-Edison-Assoc.html#partitionLE_GT",
          "type": "method"
        },
        "index": {
          "description": "Split an associative collection into two sub-collections containing those bindings whose keys are the given key and those which are This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "partitionLE_GT",
          "normalized": "a-\u003eb c-\u003e(b c,b c)",
          "package": "EdisonAPI",
          "partial": "LE GT",
          "signature": "k-\u003em a-\u003e(m a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:partitionLE_GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit an associative collection into two sub-collections, containing\n   those bindings whose keys are \u003ccode\u003e\u003c\u003c/code\u003e the given key and those which are \u003ccode\u003e\u003e=\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "partitionLT_GE",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e (m a, m a)",
          "source": "src/Data-Edison-Assoc.html#partitionLT_GE",
          "type": "method"
        },
        "index": {
          "description": "Split an associative collection into two sub-collections containing those bindings whose keys are the given key and those which are This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "partitionLT_GE",
          "normalized": "a-\u003eb c-\u003e(b c,b c)",
          "package": "EdisonAPI",
          "partial": "LT GE",
          "signature": "k-\u003em a-\u003e(m a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:partitionLT_GE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit an associative collection into two sub-collections, containing\n   those bindings whose keys are \u003ccode\u003e\u003c\u003c/code\u003e the given key and those which are \u003ccode\u003e\u003e\u003c/code\u003e.\n   All bindings with keys equal to the given key are discarded.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "partitionLT_GT",
          "package": "EdisonAPI",
          "signature": "k -\u003e m a -\u003e (m a, m a)",
          "source": "src/Data-Edison-Assoc.html#partitionLT_GT",
          "type": "method"
        },
        "index": {
          "description": "Split an associative collection into two sub-collections containing those bindings whose keys are the given key and those which are All bindings with keys equal to the given key are discarded This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "partitionLT_GT",
          "normalized": "a-\u003eb c-\u003e(b c,b c)",
          "package": "EdisonAPI",
          "partial": "LT GT",
          "signature": "k-\u003em a-\u003e(m a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:partitionLT_GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit an associative collection into two sub-collections containing those\n   bindings which satisfy the given predicate and those which do not.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual keys\n   observed, unless the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to\n   indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "partitionWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e m a -\u003e (m a, m a)",
          "source": "src/Data-Edison-Assoc.html#partitionWithKey",
          "type": "method"
        },
        "index": {
          "description": "Split an associative collection into two sub-collections containing those bindings which satisfy the given predicate and those which do not This function is ambiguous with respect to the actual keys observed unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "partitionWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003ec b-\u003e(c b,c b)",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003em a-\u003e(m a,m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003eproperSubmapBy\u003c/a\u003e\u003c/code\u003e where the comparison function\n   is given by \u003ccode\u003e(==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "properSubmap",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#properSubmap",
          "type": "function"
        },
        "index": {
          "description": "Specialization of properSubmapBy where the comparison function is given by",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "properSubmap",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Submap",
          "signature": "m a-\u003em a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:properSubmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the first map is a proper submap of the second map given a comparison\n   function on elements; that is, if every key present in the first map is also\n   present in the second map and the comparison function returns true when applied\n   two the bound elements AND there exiss some key in the second finite map which\n   is not present in the first.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "properSubmapBy",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#properSubmapBy",
          "type": "method"
        },
        "index": {
          "description": "Test whether the first map is proper submap of the second map given comparison function on elements that is if every key present in the first map is also present in the second map and the comparison function returns true when applied two the bound elements AND there exiss some key in the second finite map which is not present in the first This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "properSubmapBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003eb a-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Submap By",
          "signature": "(a-\u003ea-\u003eBool)-\u003em a-\u003em a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:properSubmapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the set of keys in the first finite map is a proper subset\n   of the set of keys of the second; that is, every key present in\n   the first finite map is also a member of the second finite map AND\n   there exists some key in the second finite map which is not present\n   in the first.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "properSubset",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m b -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#properSubset",
          "type": "method"
        },
        "index": {
          "description": "Test whether the set of keys in the first finite map is proper subset of the set of keys of the second that is every key present in the first finite map is also member of the second finite map AND there exists some key in the second finite map which is not present in the first This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "properSubset",
          "normalized": "a b-\u003ea c-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Subset",
          "signature": "m a-\u003em b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:properSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003esameMapBy\u003c/a\u003e\u003c/code\u003e where the comparison function is\n   given by \u003ccode\u003e(==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "sameMap",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#sameMap",
          "type": "function"
        },
        "index": {
          "description": "Specialization of sameMapBy where the comparison function is given by",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "sameMap",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Map",
          "signature": "m a-\u003em a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:sameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the first map is the \"same\" map as the second map given a comparison\n   function on elements; that is, if the first and second maps have the same set of keys\n   and the comparison function returns true when applied to corresponding elements.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "sameMapBy",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#sameMapBy",
          "type": "method"
        },
        "index": {
          "description": "Test whether the first map is the same map as the second map given comparison function on elements that is if the first and second maps have the same set of keys and the comparison function returns true when applied to corresponding elements This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "sameMapBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003eb a-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Map By",
          "signature": "(a-\u003ea-\u003eBool)-\u003em a-\u003em a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:sameMapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an associative collection with a single binding.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "singleton",
          "package": "EdisonAPI",
          "signature": "k -\u003e a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Create an associative collection with single binding This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "EdisonAPI",
          "signature": "k-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of bindings in the associative collection.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "size",
          "package": "EdisonAPI",
          "signature": "m a -\u003e Int",
          "source": "src/Data-Edison-Assoc.html#size",
          "type": "method"
        },
        "index": {
          "description": "Return the number of bindings in the associative collection This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "size",
          "normalized": "a b-\u003eInt",
          "package": "EdisonAPI",
          "signature": "m a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemanticly, this function is a partial identity function.  If the\n   datastructure is infinite in size or contains exceptions or non-termination\n   in the structure itself, then \u003ccode\u003estrict\u003c/code\u003e will result in bottom.  Operationally,\n   this function walks the datastructure forcing any closures.  Elements contained\n   in the map are \u003cem\u003enot\u003c/em\u003e forced.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "strict",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#strict",
          "type": "method"
        },
        "index": {
          "description": "Semanticly this function is partial identity function If the datastructure is infinite in size or contains exceptions or non-termination in the structure itself then strict will result in bottom Operationally this function walks the datastructure forcing any closures Elements contained in the map are not forced This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "strict",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estrict\u003c/a\u003e\u003c/code\u003e, this function walks the datastructure forcing closures.\n   However, \u003ccode\u003estrictWith\u003c/code\u003e will additionally apply the given function to the\n   map elements, force the result using \u003ccode\u003eseq\u003c/code\u003e, and then ignore it.\n   This function can be used to perform various levels of forcing on the\n   sequence elements.  In particular:\n\u003c/p\u003e\u003cpre\u003e strictWith id xs\n\u003c/pre\u003e\u003cp\u003ewill force the spine of the datastructure and reduce each element to WHNF.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "strictWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#strictWith",
          "type": "method"
        },
        "index": {
          "description": "Similar to strict this function walks the datastructure forcing closures However strictWith will additionally apply the given function to the map elements force the result using seq and then ignore it This function can be used to perform various levels of forcing on the sequence elements In particular strictWith id xs will force the spine of the datastructure and reduce each element to WHNF This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "strictWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:strictWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method to facilitate unit testing.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the structural\n   invariants of the implementation hold for the given associative\n   collection.  If this function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, it represents a bug;\n   generally, either the implementation itself is flawed, or an unsafe\n   operation has been used while violating the preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "structuralInvariant",
          "package": "EdisonAPI",
          "signature": "m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#structuralInvariant",
          "type": "method"
        },
        "index": {
          "description": "method to facilitate unit testing Returns True if the structural invariants of the implementation hold for the given associative collection If this function returns False it represents bug generally either the implementation itself is flawed or an unsafe operation has been used while violating the preconditions",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "structuralInvariant",
          "normalized": "a b-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Invariant",
          "signature": "m a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:structuralInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003esubmapBy\u003c/a\u003e\u003c/code\u003e where the comparison function is\n   given by \u003ccode\u003e(==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "submap",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#submap",
          "type": "function"
        },
        "index": {
          "description": "Specialization of submapBy where the comparison function is given by",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "submap",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "EdisonAPI",
          "signature": "m a-\u003em a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:submap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the first map is a submap of the second map given a comparison\n   function on elements; that is, if every key present in the first map is also\n   present in the second map and the comparison function returns true when applied\n   two the bound elements.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "submapBy",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e m a -\u003e m a -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#submapBy",
          "type": "method"
        },
        "index": {
          "description": "Test whether the first map is submap of the second map given comparison function on elements that is if every key present in the first map is also present in the second map and the comparison function returns true when applied two the bound elements This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "submapBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003eb a-\u003eBool",
          "package": "EdisonAPI",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003em a-\u003em a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:submapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the set of keys in the first finite map is a subset of\n   the set of keys of the second; that is, if every key present in the first\n   finite map is also present in the second.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "subset",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m b -\u003e Bool",
          "source": "src/Data-Edison-Assoc.html#subset",
          "type": "method"
        },
        "index": {
          "description": "Test whether the set of keys in the first finite map is subset of the set of keys of the second that is if every key present in the first finite map is also present in the second This function is always unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "subset",
          "normalized": "a b-\u003ea c-\u003eBool",
          "package": "EdisonAPI",
          "signature": "m a-\u003em b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "toList",
          "package": "EdisonAPI",
          "signature": "m a -\u003e [(k, a)]",
          "source": "src/Data-Edison-Assoc.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "toList",
          "normalized": "a b-\u003e[(c,b)]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "m a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "toOrdList",
          "package": "EdisonAPI",
          "signature": "m a -\u003e [(k, a)]",
          "source": "src/Data-Edison-Assoc.html#toOrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "toOrdList",
          "normalized": "a b-\u003e[(c,b)]",
          "package": "EdisonAPI",
          "partial": "Ord List",
          "signature": "m a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:toOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the bindings of an associative collection into a sequence, where\n   the bindings are in non-decreasing order by key.  For finite maps, this\n   is increasing order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite relation types if the relation\n   contains more than one equivalent key, or if the \u003ccode\u003eEq\u003c/code\u003e instance on\n   keys does not correspond to indistinguishability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "toOrdSeq",
          "package": "EdisonAPI",
          "signature": "m a -\u003e seq (k, a)",
          "source": "src/Data-Edison-Assoc.html#toOrdSeq",
          "type": "method"
        },
        "index": {
          "description": "Extract the bindings of an associative collection into sequence where the bindings are in non-decreasing order by key For finite maps this is increasing order This function is ambiguous at finite relation types if the relation contains more than one equivalent key or if the Eq instance on keys does not correspond to indistinguishability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "toOrdSeq",
          "normalized": "a b-\u003ec(d,b)",
          "package": "EdisonAPI",
          "partial": "Ord Seq",
          "signature": "m a-\u003eseq(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:toOrdSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the bindings of an associative collection into a\n   sequence. The bindings are emitted in an unspecified order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e with respect to the sequence order\n   iff the associative collection contains more than one binding.\n   Furthermore, it is \u003cem\u003eambiguous\u003c/em\u003e with respect to the actual key\n   returned, unless the \u003ccode\u003eEq\u003c/code\u003e instance on keys corresponds to\n   indistinguisability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "toSeq",
          "package": "EdisonAPI",
          "signature": "m a -\u003e seq (k, a)",
          "source": "src/Data-Edison-Assoc.html#toSeq",
          "type": "method"
        },
        "index": {
          "description": "Extract the bindings of an associative collection into sequence The bindings are emitted in an unspecified order This function is ambiguous with respect to the sequence order iff the associative collection contains more than one binding Furthermore it is ambiguous with respect to the actual key returned unless the Eq instance on keys corresponds to indistinguisability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "toSeq",
          "normalized": "a b-\u003ec(d,b)",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "m a-\u003eseq(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:toSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two associative collections.  For finite maps, which element\n   to keep in the case of duplicate keys is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite map types if the map keys are not\n   disjoint.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "union",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#union",
          "type": "method"
        },
        "index": {
          "description": "Merge two associative collections For finite maps which element to keep in the case of duplicate keys is unspecified This function is ambiguous at finite map types if the map keys are not disjoint Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "union",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "unionList",
          "package": "EdisonAPI",
          "signature": "[m a] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionList",
          "normalized": "[a b]-\u003ea b",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "unionListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [m a] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b a]-\u003eb a",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "unionListWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [m a] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[c b]-\u003ec b",
          "package": "EdisonAPI",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge a sequence of associative collections.  Which element\n   to keep in the case of duplicate keys is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at finite map types if the map keys are not\n   mutually disjoint.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionSeq",
          "package": "EdisonAPI",
          "signature": "seq (m a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionSeq",
          "type": "method"
        },
        "index": {
          "description": "Merge sequence of associative collections Which element to keep in the case of duplicate keys is unspecified This function is ambiguous at finite map types if the map keys are not mutually disjoint Otherwise it is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionSeq",
          "normalized": "a(b c)-\u003eb c",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunionSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq (m a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as unionSeq but with combining function to resolve duplicates This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb(c a)-\u003ec a",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunionSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n   The combining function additionally takes the key.  Which key is\n   kept and passed into the combining function is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e provided that the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   corresponds to indistinguishability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionSeqWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e seq (m a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionSeqWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as unionSeq but with combining function to resolve duplicates The combining function additionally takes the key Which key is kept and passed into the combining function is unspecified This function is unambiguous provided that the Eq instance on keys corresponds to indistinguishability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionSeqWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec(d b)-\u003ed b",
          "package": "EdisonAPI",
          "partial": "Seq With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eseq(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionSeqWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionWith",
          "type": "method"
        },
        "index": {
          "description": "Same as union but with combining function to resolve duplicates This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003em a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n   The combining function additionally takes the key.  Which key is kept\n   and passed into the combining function is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e provided that the \u003ccode\u003eEq\u003c/code\u003e instance on keys\n   corresponds to indistinguishability.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionWithKey",
          "package": "EdisonAPI",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionWithKey",
          "type": "method"
        },
        "index": {
          "description": "Same as union but with combining function to resolve duplicates The combining function additionally takes the key Which key is kept and passed into the combining function is unspecified This function is unambiguous provided that the Eq instance on keys corresponds to indistinguishability",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec b-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003em a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft biased union.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunionl = unionwith (\\x y -\u003e x)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionl",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionl",
          "type": "method"
        },
        "index": {
          "description": "Left biased union Axioms unionl unionwith This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionl",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight biased union.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunionr = unionWith (\\x y -\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unionr",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unionr",
          "type": "method"
        },
        "index": {
          "description": "Right biased union Axioms unionr unionWith This function is unambiguous",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unionr",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unionr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two associative collections with the precondition that every key\n   in the first associative collection is \u003ccode\u003e\u003c=\u003c/code\u003e every key in the second\n   associative collection.  For finite maps, this precondition is\n   strengthened to \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unsafeAppend",
          "package": "EdisonAPI",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unsafeAppend",
          "type": "method"
        },
        "index": {
          "description": "Merge two associative collections with the precondition that every key in the first associative collection is every key in the second associative collection For finite maps this precondition is strengthened to This function is unambiguous under the precondition",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unsafeAppend",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "partial": "Append",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unsafeAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Assoc",
          "name": "unsafeFromOrdList",
          "package": "EdisonAPI",
          "signature": "[(k, a)] -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unsafeFromOrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unsafeFromOrdList",
          "normalized": "[(a,b)]-\u003ec b",
          "package": "EdisonAPI",
          "partial": "From Ord List",
          "signature": "[(k,a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unsafeFromOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence of bindings into an associative collection with the\n   precondition that the sequence is sorted into non-decreasing order by\n   key.  For finite maps, this precondition is strengthened to increasing\n   order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unsafeFromOrdSeq",
          "package": "EdisonAPI",
          "signature": "seq (k, a) -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unsafeFromOrdSeq",
          "type": "method"
        },
        "index": {
          "description": "Convert sequence of bindings into an associative collection with the precondition that the sequence is sorted into non-decreasing order by key For finite maps this precondition is strengthened to increasing order This function is unambiguous under the precondition",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unsafeFromOrdSeq",
          "normalized": "a(b,c)-\u003ed c",
          "package": "EdisonAPI",
          "partial": "From Ord Seq",
          "signature": "seq(k,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unsafeFromOrdSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a binding into an associative collection with the precondition\n   that the given key is \u003ccode\u003e\u003e=\u003c/code\u003e any existing keys already in the collection.\n   For finite maps, this precondition is strengthened to \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unsafeInsertMax",
          "package": "EdisonAPI",
          "signature": "k -\u003e a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unsafeInsertMax",
          "type": "method"
        },
        "index": {
          "description": "Insert binding into an associative collection with the precondition that the given key is any existing keys already in the collection For finite maps this precondition is strengthened to This function is unambiguous under the precondition",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unsafeInsertMax",
          "normalized": "a-\u003eb-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "Insert Max",
          "signature": "k-\u003ea-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unsafeInsertMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a binding into an associative collection with the precondition\n   that the given key is \u003ccode\u003e\u003c=\u003c/code\u003e any existing keys already in the collection.\n   For finite maps, this precondition is strengthened to \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Assoc",
          "name": "unsafeInsertMin",
          "package": "EdisonAPI",
          "signature": "k -\u003e a -\u003e m a -\u003e m a",
          "source": "src/Data-Edison-Assoc.html#unsafeInsertMin",
          "type": "method"
        },
        "index": {
          "description": "Insert binding into an associative collection with the precondition that the given key is any existing keys already in the collection For finite maps this precondition is strengthened to This function is unambiguous under the preconditions",
          "hierarchy": "Data Edison Assoc",
          "module": "Data.Edison.Assoc",
          "name": "unsafeInsertMin",
          "normalized": "a-\u003eb-\u003ec b-\u003ec b",
          "package": "EdisonAPI",
          "partial": "Insert Min",
          "signature": "k-\u003ea-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Assoc.html#v:unsafeInsertMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides implementations of several useful operations\n   that are not included in the collection classes themselves.  This is\n   usually because the operation involves transforming a collection into a\n   different type of collection; such operations cannot be typed using\n   the collection classes without significantly complicating them.\n\u003c/p\u003e\u003cp\u003eBe aware that these functions are defined using the external class\n   interfaces and may be less efficient than corresponding, but more\n   restrictively typed, functions in the collection classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Coll.Utils",
          "name": "Utils",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides implementations of several useful operations that are not included in the collection classes themselves This is usually because the operation involves transforming collection into different type of collection such operations cannot be typed using the collection classes without significantly complicating them Be aware that these functions are defined using the external class interfaces and may be less efficient than corresponding but more restrictively typed functions in the collection classes",
          "hierarchy": "Data Edison Coll Utils",
          "module": "Data.Edison.Coll.Utils",
          "name": "Utils",
          "package": "EdisonAPI",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function across all the elements in a collection and transform\n   the collection type.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll.Utils",
          "name": "map",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e cin -\u003e cout",
          "source": "src/Data-Edison-Coll-Utils.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply function across all the elements in collection and transform the collection type",
          "hierarchy": "Data Edison Coll Utils",
          "module": "Data.Edison.Coll.Utils",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb)-\u003ecin-\u003ecout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll-Utils.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a partial function across all elements of a collection and transform\n   the collection type.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll.Utils",
          "name": "mapPartial",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Maybe b) -\u003e cin -\u003e cout",
          "source": "src/Data-Edison-Coll-Utils.html#mapPartial",
          "type": "function"
        },
        "index": {
          "description": "Map partial function across all elements of collection and transform the collection type",
          "hierarchy": "Data Edison Coll Utils",
          "module": "Data.Edison.Coll.Utils",
          "name": "mapPartial",
          "normalized": "(a-\u003eMaybe b)-\u003ec-\u003ed",
          "package": "EdisonAPI",
          "partial": "Partial",
          "signature": "(a-\u003eMaybe b)-\u003ecin-\u003ecout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll-Utils.html#v:mapPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a collection-producing function across all elements of a collection\n   and collect the results together using \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll.Utils",
          "name": "unionMap",
          "package": "EdisonAPI",
          "signature": "(a -\u003e cout) -\u003e cin -\u003e cout",
          "source": "src/Data-Edison-Coll-Utils.html#unionMap",
          "type": "function"
        },
        "index": {
          "description": "Map collection-producing function across all elements of collection and collect the results together using union",
          "hierarchy": "Data Edison Coll Utils",
          "module": "Data.Edison.Coll.Utils",
          "name": "unionMap",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "EdisonAPI",
          "partial": "Map",
          "signature": "(a-\u003ecout)-\u003ecin-\u003ecout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll-Utils.html#v:unionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a monotonic function across all the elements of a collection and\n   transform the collection type.   The function is required to satisfy\n   the following precondition:\n\u003c/p\u003e\u003cpre\u003e forall x y. x \u003c y ==\u003e f x \u003c f y\n\u003c/pre\u003e",
          "module": "Data.Edison.Coll.Utils",
          "name": "unsafeMapMonotonic",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e cin -\u003e cout",
          "source": "src/Data-Edison-Coll-Utils.html#unsafeMapMonotonic",
          "type": "function"
        },
        "index": {
          "description": "Map monotonic function across all the elements of collection and transform the collection type The function is required to satisfy the following precondition forall",
          "hierarchy": "Data Edison Coll Utils",
          "module": "Data.Edison.Coll.Utils",
          "name": "unsafeMapMonotonic",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "EdisonAPI",
          "partial": "Map Monotonic",
          "signature": "(a-\u003eb)-\u003ecin-\u003ecout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll-Utils.html#v:unsafeMapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003cem\u003ecollection\u003c/em\u003e abstraction includes sets, bags and priority queues\n   (heaps).  Collections are defined in Edison as a set of eight classes.\n\u003c/p\u003e\u003cp\u003eAll collections assume at least an equality relation of elements, and\n   may also assume an ordering relation.\n\u003c/p\u003e\u003cp\u003eThe hierarchy contains a root class \u003ccode\u003e\u003ca\u003eCollX\u003c/a\u003e\u003c/code\u003e together with seven\n   subclasses satisfying one or more of three common sub-properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eUniqueness\u003c/em\u003e Each element in the collection is unique (no two\n   elements in the collection are equal).  These subclasses, indicated\n   by the name \u003ccode\u003eSet\u003c/code\u003e, represent sets rather than bags (multi-sets).\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eOrdering\u003c/em\u003e The elements have a total ordering and it is possible to\n   process the elements in non-decreasing order. These subclasses,\n   indicates by the \u003ccode\u003eOrd\u003c/code\u003e prefix, typically represent either priority\n   queues (heaps) or sets/bags implemented as binary search trees.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eObservability\u003c/em\u003e An observable collection is one in which it is\n   possible to view the elements in a collection.  The \u003ccode\u003eX\u003c/code\u003e suffix\n   indicates a lack of observability.  This property is discussed is\n   greater detail below.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBecause collections encompass a wide range of abstractions, there is no\n   single name that is suitable for all collection type constructors.\n   However, most modules implementing collections will define a type\n   constructor named either \u003ccode\u003eBag\u003c/code\u003e, \u003ccode\u003eSet\u003c/code\u003e, or \u003ccode\u003eHeap\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on observability\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that the equality relation defined by the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class is not\n   necessarily true equality.  Very often it is merely an equivalence\n   relation, where two equivalent values may be distinguishable by other\n   means.  For example, we might consider two binary trees to be equal\n   if they contain the same elements, even if their shapes are different.\n\u003c/p\u003e\u003cp\u003eBecause of this phenomenon, implementations of observable collections\n   (ie, collections where it is possible to inspect the elements) are rather\n   constrained.  Such an implementation must retain the actual elements that\n   were inserted.  For example, it is not possible in general to represent an\n   observable bag as a finite map from elements to counts, because even if we\n   know that a given bag contains, say, three elements from some equivalence\n   class, we do not necessarily know \u003cem\u003ewhich\u003c/em\u003e three.\n\u003c/p\u003e\u003cp\u003eOn the other hand, implementations of \u003cem\u003enon-observable\u003c/em\u003e collections have\n   much greater freedom to choose abstract representations of each\n   equivalence class.  For example, representing a bag as a finite map from\n   elements to counts works fine if we never need to know \u003cem\u003ewhich\u003c/em\u003e\n   representatives from an equivalence class are actually present.  As\n   another example, consider the \u003ccode\u003e\u003ca\u003eUniqueHash\u003c/a\u003e\u003c/code\u003e class defined in\n   \u003ca\u003eData.Edison.Prelude\u003c/a\u003e.  If we know that the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e function yields a \n   unique integer for each equivalence class, then we can represent a\n   collection of hashable elements simply as a collection of integers.  With\n   such a representation, we can still do many useful things like testing for\n   membership; we just can't support functions like \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e that\n   require the elements themselves, rather than the hashed values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Coll",
          "name": "Coll",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html",
          "type": "module"
        },
        "index": {
          "description": "The collection abstraction includes sets bags and priority queues heaps Collections are defined in Edison as set of eight classes All collections assume at least an equality relation of elements and may also assume an ordering relation The hierarchy contains root class CollX together with seven subclasses satisfying one or more of three common sub-properties Uniqueness Each element in the collection is unique no two elements in the collection are equal These subclasses indicated by the name Set represent sets rather than bags multi-sets Ordering The elements have total ordering and it is possible to process the elements in non-decreasing order These subclasses indicates by the Ord prefix typically represent either priority queues heaps or sets bags implemented as binary search trees Observability An observable collection is one in which it is possible to view the elements in collection The suffix indicates lack of observability This property is discussed is greater detail below Because collections encompass wide range of abstractions there is no single name that is suitable for all collection type constructors However most modules implementing collections will define type constructor named either Bag Set or Heap Notes on observability Note that the equality relation defined by the Eq class is not necessarily true equality Very often it is merely an equivalence relation where two equivalent values may be distinguishable by other means For example we might consider two binary trees to be equal if they contain the same elements even if their shapes are different Because of this phenomenon implementations of observable collections ie collections where it is possible to inspect the elements are rather constrained Such an implementation must retain the actual elements that were inserted For example it is not possible in general to represent an observable bag as finite map from elements to counts because even if we know that given bag contains say three elements from some equivalence class we do not necessarily know which three On the other hand implementations of non-observable collections have much greater freedom to choose abstract representations of each equivalence class For example representing bag as finite map from elements to counts works fine if we never need to know which representatives from an equivalence class are actually present As another example consider the UniqueHash class defined in Data.Edison.Prelude If we know that the hash function yields unique integer for each equivalence class then we can represent collection of hashable elements simply as collection of integers With such representation we can still do many useful things like testing for membership we just can support functions like fold or filter that require the elements themselves rather than the hashed values",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "Coll",
          "package": "EdisonAPI",
          "partial": "Coll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements.  See the module documentation for\n   comments on observability.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "Coll",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#Coll",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements See the module documentation for comments on observability",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "Coll",
          "package": "EdisonAPI",
          "partial": "Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:Coll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the root class of the collection hierarchy.  However, it\n   is perfectly adequate for many applications that use sets or bags.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "CollX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#CollX",
          "type": "class"
        },
        "index": {
          "description": "This is the root class of the collection hierarchy However it is perfectly adequate for many applications that use sets or bags",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "CollX",
          "package": "EdisonAPI",
          "partial": "Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:CollX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the elements additionally\n   have an ordering relation.  See the module documentation for comments\n   on observability.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "OrdColl",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdColl",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the elements additionally have an ordering relation See the module documentation for comments on observability",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "OrdColl",
          "package": "EdisonAPI",
          "partial": "Ord Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:OrdColl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections for which the elements have an ordering relation.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "OrdCollX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdCollX",
          "type": "class"
        },
        "index": {
          "description": "Collections for which the elements have an ordering relation",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "OrdCollX",
          "package": "EdisonAPI",
          "partial": "Ord Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:OrdCollX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the set property is maintained\n   and where additionally, there is an ordering relation on the elements.\n   This class introduces no new methods, and is simply an abbreviation \n   for the context:\n\u003c/p\u003e\u003cpre\u003e(OrdColl c a,Set c a)\u003c/pre\u003e",
          "module": "Data.Edison.Coll",
          "name": "OrdSet",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdSet",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the set property is maintained and where additionally there is an ordering relation on the elements This class introduces no new methods and is simply an abbreviation for the context OrdColl Set",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "OrdSet",
          "package": "EdisonAPI",
          "partial": "Ord Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:OrdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets where the elements also have an ordering relation.\n   This class contains no methods; it is only an abbreviation for\n   the context \u003ccode\u003e(OrdCollX c a,SetX c a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "OrdSetX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdSetX",
          "type": "class"
        },
        "index": {
          "description": "Sets where the elements also have an ordering relation This class contains no methods it is only an abbreviation for the context OrdCollX SetX",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "OrdSetX",
          "package": "EdisonAPI",
          "partial": "Ord Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:OrdSetX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the set property is maintained;\n   that is, a set contains at most one element of the equivalence class\n   formed by the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance on the elements.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING: Each of the following \\\"With\\\" functions is unsafe.\u003c/em\u003e \n   The passed in combining functions are used to choose which element is kept\n   in the case of duplicates. They are required to satisfy the precondition\n   that, given two equal elements, they return a third element equal to the\n   other two.  Usually, the combining function just returns its first or\n   second argument, but it can combine elements in non-trivial ways.\n\u003c/p\u003e\u003cp\u003eThe combining function should usually be associative.  Where the function\n   involves a sequence of elements, the elements will be combined from\n   left-to-right, but with an unspecified associativity.\n\u003c/p\u003e\u003cp\u003eFor example, if \u003ccode\u003ex == y == z\u003c/code\u003e,\n   then \u003ccode\u003efromSeqWith (+) [x,y,z]\u003c/code\u003e equals either\n     \u003ccode\u003esingle (x + (y + z))\u003c/code\u003e\n   or\n     \u003ccode\u003esingle ((x + y) + z)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "Set",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#Set",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the set property is maintained that is set contains at most one element of the equivalence class formed by the Eq instance on the elements WARNING Each of the following With functions is unsafe The passed in combining functions are used to choose which element is kept in the case of duplicates They are required to satisfy the precondition that given two equal elements they return third element equal to the other two Usually the combining function just returns its first or second argument but it can combine elements in non-trivial ways The combining function should usually be associative Where the function involves sequence of elements the elements will be combined from left-to-right but with an unspecified associativity For example if then fromSeqWith equals either single or single",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "Set",
          "package": "EdisonAPI",
          "partial": "Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection where the set property is maintained; that is, a set\n   contains at most one element of the equivalence class formed by the\n   \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance on the elements.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "SetX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#SetX",
          "type": "class"
        },
        "index": {
          "description": "collection where the set property is maintained that is set contains at most one element of the equivalence class formed by the Eq instance on the elements",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "SetX",
          "package": "EdisonAPI",
          "partial": "Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#t:SetX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount how many copies of the given element are in the collection.\n   For sets, this will always return 0 or 1.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "count",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e Int",
          "source": "src/Data-Edison-Coll.html#count",
          "type": "method"
        },
        "index": {
          "description": "Count how many copies of the given element are in the collection For sets this will always return or This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "count",
          "normalized": "a-\u003eb-\u003eInt",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a single occurrence of the given element from a collection.\n   For bags, it is unspecified which element will be deleted.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types if more than one item exists\n   in the bag equivalent to the given item.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "delete",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Delete single occurrence of the given element from collection For bags it is unspecified which element will be deleted This function is ambiguous at bag types if more than one item exists in the bag equivalent to the given item Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all occurrences of an element from a collection.  For sets\n   this operation is identical to \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "deleteAll",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#deleteAll",
          "type": "method"
        },
        "index": {
          "description": "Delete all occurrences of an element from collection For sets this operation is identical to delete This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "deleteAll",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "All",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "deleteList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#deleteList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "deleteList",
          "normalized": "[a]-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:deleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the maximum element from the collection.  If there is more\n   than one maximum, it is unspecified which is deleted.  If the collection\n   is empty, it will be returned unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types if more than one maximum\n   element exists in the bag.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "deleteMax",
          "package": "EdisonAPI",
          "signature": "c -\u003e c",
          "source": "src/Data-Edison-Coll.html#deleteMax",
          "type": "method"
        },
        "index": {
          "description": "Delete the maximum element from the collection If there is more than one maximum it is unspecified which is deleted If the collection is empty it will be returned unchanged This function is ambiguous at bag types if more than one maximum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "deleteMax",
          "normalized": "a-\u003ea",
          "package": "EdisonAPI",
          "partial": "Max",
          "signature": "c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the minimum element from the collection.  If there is more\n   than one minimum, it is unspecified which is deleted.  If the collection\n   is empty, it will be returned unchanged.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types if more than one minimum\n   element exists in the bag.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "deleteMin",
          "package": "EdisonAPI",
          "signature": "c -\u003e c",
          "source": "src/Data-Edison-Coll.html#deleteMin",
          "type": "method"
        },
        "index": {
          "description": "Delete the minimum element from the collection If there is more than one minimum it is unspecified which is deleted If the collection is empty it will be returned unchanged This function is ambiguous at bag types if more than one minimum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "deleteMin",
          "normalized": "a-\u003ea",
          "package": "EdisonAPI",
          "partial": "Min",
          "signature": "c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a single occurrence of each of the given elements from\n   a collection.  For bags, there may be multiple occurrences of a\n   given element in the collection, in which case it is unspecified\n   which is deleted.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types if more than one item\n   exists in the bag equivalent to any item in the list and the number\n   of equivalent occurrences of that item in the sequence is less than\n   the number of occurrences in the bag.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "deleteSeq",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#deleteSeq",
          "type": "method"
        },
        "index": {
          "description": "Delete single occurrence of each of the given elements from collection For bags there may be multiple occurrences of given element in the collection in which case it is unspecified which is deleted This function is ambiguous at bag types if more than one item exists in the bag equivalent to any item in the list and the number of equivalent occurrences of that item in the sequence is less than the number of occurrences in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "deleteSeq",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:deleteSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the difference of two sets; that is, all elements in\n   the first set which are not in the second set.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "difference",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#difference",
          "type": "method"
        },
        "index": {
          "description": "Computes the difference of two sets that is all elements in the first set which are not in the second set This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "difference",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty collection.  Equivalant to \u003ccode\u003emempty\u003c/code\u003e from\n   the \u003ccode\u003eMonoid\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "empty",
          "package": "EdisonAPI",
          "signature": "c",
          "source": "src/Data-Edison-Coll.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty collection Equivalant to mempty from the Monoid instance This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "empty",
          "package": "EdisonAPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all elements not satisfying the predicate.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "filter",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Remove all elements not satisfying the predicate This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sub-collection of elements \u003ccode\u003e\u003e=\u003c/code\u003e the given element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efilterGE x xs = filter (\u003e= x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "filterGE",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#filterGE",
          "type": "method"
        },
        "index": {
          "description": "Extract the sub-collection of elements the given element Axioms filterGE xs filter xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "filterGE",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "GE",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:filterGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sub-collection of elements \u003ccode\u003e\u003e\u003c/code\u003e the given element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efilterGT x xs = filter (\u003e x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "filterGT",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#filterGT",
          "type": "method"
        },
        "index": {
          "description": "Extract the sub-collection of elements the given element Axioms filterGT xs filter xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "filterGT",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "GT",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:filterGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sub-collection of elements \u003ccode\u003e\u003c=\u003c/code\u003e the given element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efilterLE x xs = filter (\u003c= x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "filterLE",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#filterLE",
          "type": "method"
        },
        "index": {
          "description": "Extract the sub-collection of elements the given element Axioms filterLE xs filter xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "filterLE",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "LE",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:filterLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sub-collection of elements \u003ccode\u003e\u003c\u003c/code\u003e the given element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efilterLT x xs = filter (\u003c x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "filterLT",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#filterLT",
          "type": "method"
        },
        "index": {
          "description": "Extract the sub-collection of elements the given element Axioms filterLT xs filter xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "filterLT",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "LT",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:filterLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over all the elements in a collection in an unspecified order.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fold",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#fold",
          "type": "method"
        },
        "index": {
          "description": "Fold over all the elements in collection in an unspecified order fold is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fold'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#fold%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold fold is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fold'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over all the elements in a collection in an unspecified order.\n   An error is signaled if the collection is empty.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold1 f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fold1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#fold1",
          "type": "method"
        },
        "index": {
          "description": "Fold over all the elements in collection in an unspecified order An error is signaled if the collection is empty fold1 is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efold1' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fold1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#fold1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold1 fold1 is unambiguous iff is fold-commutative",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fold1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fold1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements in non-decreasing order with left\n   associativity. (For sets, this will always be increasing order)\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldl",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements in non-decreasing order with left associativity For sets this will always be increasing order This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldl'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldl This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements in non-decreasing order with left\n   associativity, or signal an error if the collection is empty.\n   (For sets, this will always be increasing order)\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldl1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements in non-decreasing order with left associativity or signal an error if the collection is empty For sets this will always be increasing order This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldl1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#foldl1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldl1 This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements in non-decreasing order with right\n   associativity. (For sets, this will always be increasing order)\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldr",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements in non-decreasing order with right associativity For sets this will always be increasing order This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldr'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e c -\u003e b",
          "source": "src/Data-Edison-Coll.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldr This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold across the elements in non-decreasing order with right\n   associativity, or signal an error if the collection is empty.\n   (For sets, this will always be increasing order)\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldr1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Fold across the elements in non-decreasing order with right associativity or signal an error if the collection is empty For sets this will always be increasing order This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e if the combining function is\n   fold-commutative, at all set types, and at bag types\n   where no two equivalent elements exist in the bag.  Otherwise\n   it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "foldr1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#foldr1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of foldr1 This function is unambiguous if the combining function is fold-commutative at all set types and at bag types where no two equivalent elements exist in the bag Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "fromList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e c",
          "source": "src/Data-Edison-Coll.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "fromListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e c",
          "source": "src/Data-Edison-Coll.html#fromListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence to a collection.  For sets, it is unspecified\n   which element is kept in case of duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at set types if more than one\n   equivalent item is in the sequence.  Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fromSeq",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e c",
          "source": "src/Data-Edison-Coll.html#fromSeq",
          "type": "method"
        },
        "index": {
          "description": "Convert sequence to collection For sets it is unspecified which element is kept in case of duplicates This function is ambiguous at set types if more than one equivalent item is in the sequence Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fromSeq",
          "normalized": "a b-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq a-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fromSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efromSeq\u003c/a\u003e\u003c/code\u003e but with a combining function to resolve duplicates.  \n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition\n   if the combining function is associative.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "fromSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq a -\u003e c",
          "source": "src/Data-Edison-Coll.html#fromSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as fromSeq but with combining function to resolve duplicates This function is unambiguous under the with precondition if the combining function is associative Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "fromSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq a-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:fromSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a collection.  For sets, if an equal element\n   is already in the set, the newly inserted element is kept, and the\n   old element is discarded.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "insert",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Insert an element into collection For sets if an equal element is already in the set the newly inserted element is kept and the old element is discarded This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "insertList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insertList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insertList",
          "normalized": "[a]-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "insertListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insertListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insertListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insertListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a sequence of elements into a collection.  For sets,\n   the behavior with regard to multiple equal elements is unspecified.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at set types if the sequence contains\n   more than one equivalent item or an item which is already in the set.\n   Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "insertSeq",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insertSeq",
          "type": "method"
        },
        "index": {
          "description": "Insert sequence of elements into collection For sets the behavior with regard to multiple equal elements is unspecified This function is ambiguous at set types if the sequence contains more than one equivalent item or an item which is already in the set Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insertSeq",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insertSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertSeq\u003c/a\u003e\u003c/code\u003e but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition\n   if the combining function is associative.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "insertSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insertSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as insertSeq but with combining function to resolve duplicates This function is unambiguous under the with precondition if the combining function is associative Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insertSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ec-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insertSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "insertWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#insertWith",
          "type": "method"
        },
        "index": {
          "description": "Same as insert but with combining function to resolve duplicates This function is unambiguous under the with precondition",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the module implementing \u003ccode\u003ec\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "instanceName",
          "package": "EdisonAPI",
          "signature": "c -\u003e String",
          "source": "src/Data-Edison-Coll.html#instanceName",
          "type": "method"
        },
        "index": {
          "description": "The name of the module implementing",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "instanceName",
          "normalized": "a-\u003eString",
          "package": "EdisonAPI",
          "partial": "Name",
          "signature": "c-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:instanceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the intersection of two sets.  It is unspecified which \n   element is kept when equal elements appear in each set.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e, except when the sets are disjoint.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "intersection",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#intersection",
          "type": "method"
        },
        "index": {
          "description": "Computes the intersection of two sets It is unspecified which element is kept when equal elements appear in each set This function is ambiguous except when the sets are disjoint",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "intersection",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "intersectionWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#intersectionWith",
          "type": "method"
        },
        "index": {
          "description": "Same as intersection but with combining function to resolve duplicates This function is unambiguous under the with precondition",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "intersectionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup one element equal to the given element.  If no elements\n   exist in the collection equal to the given element, an error is\n   signaled.  If multiple copies of the given element exist in the\n   collection, it is unspecified which is returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, when more than one\n   element equivalent to the given item is in the bag.  Otherwise\n   it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "lookup",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e a",
          "source": "src/Data-Edison-Coll.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Lookup one element equal to the given element If no elements exist in the collection equal to the given element an error is signaled If multiple copies of the given element exist in the collection it is unspecified which is returned This function is ambiguous at bag types when more than one element equivalent to the given item is in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "lookup",
          "normalized": "a-\u003eb-\u003ea",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a sequence containing all elements in the collection equal to\n   the given element in an unspecified order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, when more than one\n   element equivalent to the given item is in the bag.  Otherwise\n   it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "lookupAll",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e seq a",
          "source": "src/Data-Edison-Coll.html#lookupAll",
          "type": "method"
        },
        "index": {
          "description": "Return sequence containing all elements in the collection equal to the given element in an unspecified order This function is ambiguous at bag types when more than one element equivalent to the given item is in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "lookupAll",
          "normalized": "a-\u003eb-\u003ec a",
          "package": "EdisonAPI",
          "partial": "All",
          "signature": "a-\u003ec-\u003eseq a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:lookupAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "lookupList",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e [a]",
          "source": "src/Data-Edison-Coll.html#lookupList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "lookupList",
          "normalized": "a-\u003eb-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "a-\u003ec-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:lookupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup one element equal to the given element.  If no elements\n   exist in the collection equal to the given element, \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e is called.\n   If multiple copies of the given element exist in the collection, it\n   is unspecified which is returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, when more than one\n   element equivalent to the given item is in the bag.  Otherwise\n   it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "lookupM",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e m a",
          "source": "src/Data-Edison-Coll.html#lookupM",
          "type": "method"
        },
        "index": {
          "description": "Lookup one element equal to the given element If no elements exist in the collection equal to the given element fail is called If multiple copies of the given element exist in the collection it is unspecified which is returned This function is ambiguous at bag types when more than one element equivalent to the given item is in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "lookupM",
          "normalized": "a-\u003eb-\u003ec a",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:lookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup one element equal to the (second) given element in the collection.\n   If no elements exist in the collection equal to the given element, then\n   the default element is returned.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, when more than one\n   element equivalent to the given item is in the bag.  Otherwise\n   it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "signature": "lookupWithDefault",
          "source": "src/Data-Edison-Coll.html#lookupWithDefault",
          "type": "method"
        },
        "index": {
          "description": "Lookup one element equal to the second given element in the collection If no elements exist in the collection equal to the given element then the default element is returned This function is ambiguous at bag types when more than one element equivalent to the given item is in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "partial": "With Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum element in the collection.  If there are multiple\n   copies of the maximum element, it is unspecified which is chosen.\n   \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaxElem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edeleteMax\u003c/a\u003e\u003c/code\u003e may make different\n   choices.  Signals an error if the collection is empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, if more than one maximum\n   element exists in the bag.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "maxElem",
          "package": "EdisonAPI",
          "signature": "c -\u003e a",
          "source": "src/Data-Edison-Coll.html#maxElem",
          "type": "method"
        },
        "index": {
          "description": "Return the maximum element in the collection If there are multiple copies of the maximum element it is unspecified which is chosen Note that maxView maxElem and deleteMax may make different choices Signals an error if the collection is empty This function is ambiguous at bag types if more than one maximum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "maxElem",
          "normalized": "a-\u003eb",
          "package": "EdisonAPI",
          "partial": "Elem",
          "signature": "c-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:maxElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum element in the collection, together with \n   the collection without that element.  If there are multiple\n   copies of the maximum element, it is unspecified which is chosen.\n   \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaxElem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edeleteMax\u003c/a\u003e\u003c/code\u003e may make different\n   choices.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the collection is empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, if more than one maximum\n   element exists in the bag.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "maxView",
          "package": "EdisonAPI",
          "signature": "c -\u003e m (a, c)",
          "source": "src/Data-Edison-Coll.html#maxView",
          "type": "method"
        },
        "index": {
          "description": "Return the maximum element in the collection together with the collection without that element If there are multiple copies of the maximum element it is unspecified which is chosen Note that maxView maxElem and deleteMax may make different choices Calls fail if the collection is empty This function is ambiguous at bag types if more than one maximum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "maxView",
          "normalized": "a-\u003eb(c,a)",
          "package": "EdisonAPI",
          "partial": "View",
          "signature": "c-\u003em(a,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the given element is in the collection.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emember x xs = (count x xs \u003e 0)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "member",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e Bool",
          "source": "src/Data-Edison-Coll.html#member",
          "type": "method"
        },
        "index": {
          "description": "Test whether the given element is in the collection Axioms member xs count xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "member",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "EdisonAPI",
          "signature": "a-\u003ec-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum element in the collection.  If there are multiple\n   copies of the minimum element, it is unspecified which is chosen.\n   \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminElem\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edeleteMin\u003c/a\u003e\u003c/code\u003e may make different\n   choices.  Signals an error if the collection is empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, if more than one minimum\n   element exists in the bag.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "minElem",
          "package": "EdisonAPI",
          "signature": "c -\u003e a",
          "source": "src/Data-Edison-Coll.html#minElem",
          "type": "method"
        },
        "index": {
          "description": "Return the minimum element in the collection If there are multiple copies of the minimum element it is unspecified which is chosen Note that minView minElem and deleteMin may make different choices Signals an error if the collection is empty This function is ambiguous at bag types if more than one minimum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "minElem",
          "normalized": "a-\u003eb",
          "package": "EdisonAPI",
          "partial": "Elem",
          "signature": "c-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:minElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum element in the collection, together with\n   the collection without that element.  If there are multiple\n   copies of the minimum element, it is unspecified which is chosen.\n   \u003cem\u003eNote\u003c/em\u003e that \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminElem\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edeleteMin\u003c/a\u003e\u003c/code\u003e may make different\n   choices.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the collection is empty.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at bag types, if more than one minimum\n   element exists in the bag.  Otherwise, it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "minView",
          "package": "EdisonAPI",
          "signature": "c -\u003e m (a, c)",
          "source": "src/Data-Edison-Coll.html#minView",
          "type": "method"
        },
        "index": {
          "description": "Return the minimum element in the collection together with the collection without that element If there are multiple copies of the minimum element it is unspecified which is chosen Note that minView minElem and deleteMin may make different choices Calls fail if the collection is empty This function is ambiguous at bag types if more than one minimum element exists in the bag Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "minView",
          "normalized": "a-\u003eb(c,a)",
          "package": "EdisonAPI",
          "partial": "View",
          "signature": "c-\u003em(a,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the collection is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enull xs = (size xs == 0)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "null",
          "package": "EdisonAPI",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Edison-Coll.html#null",
          "type": "method"
        },
        "index": {
          "description": "Test whether the collection is empty Axioms null xs size xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "EdisonAPI",
          "signature": "c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns two collections, the first containing all the elements\n   satisfying the predicate, and the second containing all the\n   elements not satisfying the predicate.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "partition",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e c -\u003e (c, c)",
          "source": "src/Data-Edison-Coll.html#partition",
          "type": "method"
        },
        "index": {
          "description": "Returns two collections the first containing all the elements satisfying the predicate and the second containing all the elements not satisfying the predicate This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003ec-\u003e(c,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a collection into those elements \u003ccode\u003e\u003c=\u003c/code\u003e a given element and\n   those \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003epartitionLE_GT xs = partition (\u003c=) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "partitionLE_GT",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e (c, c)",
          "source": "src/Data-Edison-Coll.html#partitionLE_GT",
          "type": "method"
        },
        "index": {
          "description": "Split collection into those elements given element and those Axioms partitionLE GT xs partition xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "partitionLE_GT",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "EdisonAPI",
          "partial": "LE GT",
          "signature": "a-\u003ec-\u003e(c,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:partitionLE_GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a collection into those elements \u003ccode\u003e\u003c\u003c/code\u003e a given element and\n   those \u003ccode\u003e\u003e=\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003epartitionLT_GE xs = partition (\u003c) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "partitionLT_GE",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e (c, c)",
          "source": "src/Data-Edison-Coll.html#partitionLT_GE",
          "type": "method"
        },
        "index": {
          "description": "Split collection into those elements given element and those Axioms partitionLT GE xs partition xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "partitionLT_GE",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "EdisonAPI",
          "partial": "LT GE",
          "signature": "a-\u003ec-\u003e(c,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:partitionLT_GE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a collection into those elements \u003ccode\u003e\u003c\u003c/code\u003e a given element and\n   those \u003ccode\u003e\u003e\u003c/code\u003e.  All elements equal to the given element are discarded.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003epartitionLT_GT x xs = (filterLT x xs,filterGT x xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "partitionLT_GT",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e (c, c)",
          "source": "src/Data-Edison-Coll.html#partitionLT_GT",
          "type": "method"
        },
        "index": {
          "description": "Split collection into those elements given element and those All elements equal to the given element are discarded Axioms partitionLT GT xs filterLT xs filterGT xs This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "partitionLT_GT",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "EdisonAPI",
          "partial": "LT GT",
          "signature": "a-\u003ec-\u003e(c,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:partitionLT_GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the first set is a proper subset of the second set;\n   that is, if every element in the first set is also a member of the\n   second set AND there exists some element in the second set which\n   is not present in the first.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "properSubset",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e Bool",
          "source": "src/Data-Edison-Coll.html#properSubset",
          "type": "method"
        },
        "index": {
          "description": "Test whether the first set is proper subset of the second set that is if every element in the first set is also member of the second set AND there exists some element in the second set which is not present in the first This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "properSubset",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Subset",
          "signature": "c-\u003ec-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:properSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a singleton collection\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "singleton",
          "package": "EdisonAPI",
          "signature": "a -\u003e c",
          "source": "src/Data-Edison-Coll.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "create singleton collection This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "singleton",
          "normalized": "a-\u003eb",
          "package": "EdisonAPI",
          "signature": "a-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in the collection.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "size",
          "package": "EdisonAPI",
          "signature": "c -\u003e Int",
          "source": "src/Data-Edison-Coll.html#size",
          "type": "method"
        },
        "index": {
          "description": "Return the number of elements in the collection This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "EdisonAPI",
          "signature": "c-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemanticly, this function is a partial identity function.  If the\n   datastructure is infinite in size or contains exceptions or non-termination\n   in the structure itself, then \u003ccode\u003estrict\u003c/code\u003e will result in bottom.  Operationally,\n   this function walks the datastructure forcing any closures.  In many\n   collections, the collction \"shape\" depends on the value of the elemnts;\n   in such cases, the values of the elements will be forced to the extent\n   necessary to force the structure of the collection, but no further.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "strict",
          "package": "EdisonAPI",
          "signature": "c -\u003e c",
          "source": "src/Data-Edison-Coll.html#strict",
          "type": "method"
        },
        "index": {
          "description": "Semanticly this function is partial identity function If the datastructure is infinite in size or contains exceptions or non-termination in the structure itself then strict will result in bottom Operationally this function walks the datastructure forcing any closures In many collections the collction shape depends on the value of the elemnts in such cases the values of the elements will be forced to the extent necessary to force the structure of the collection but no further This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "strict",
          "normalized": "a-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estrict\u003c/a\u003e\u003c/code\u003e, this function walks the datastructure forcing closures.\n   However, \u003ccode\u003estrictWith\u003c/code\u003e will additionally apply the given function to the\n   collection elements, force the result using \u003ccode\u003eseq\u003c/code\u003e, and then ignore it.\n   This function can be used to perform various levels of forcing on the\n   sequence elements.  In particular:\n\u003c/p\u003e\u003cpre\u003e strictWith id xs\n\u003c/pre\u003e\u003cp\u003ewill force the spine of the datastructure and reduce each element to WHNF.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "strictWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#strictWith",
          "type": "method"
        },
        "index": {
          "description": "Similar to strict this function walks the datastructure forcing closures However strictWith will additionally apply the given function to the collection elements force the result using seq and then ignore it This function can be used to perform various levels of forcing on the sequence elements In particular strictWith id xs will force the spine of the datastructure and reduce each element to WHNF This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "strictWith",
          "normalized": "(a-\u003eb)-\u003ec-\u003ec",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:strictWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method to facilitate unit testing.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the structural\n   invariants of the implementation hold for the given collection.  If\n   this function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, it represents a bug; generally, either\n   the implementation itself is flawed, or an unsafe operation has been\n   used while violating the preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "structuralInvariant",
          "package": "EdisonAPI",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Edison-Coll.html#structuralInvariant",
          "type": "method"
        },
        "index": {
          "description": "method to facilitate unit testing Returns True if the structural invariants of the implementation hold for the given collection If this function returns False it represents bug generally either the implementation itself is flawed or an unsafe operation has been used while violating the preconditions",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "structuralInvariant",
          "normalized": "a-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Invariant",
          "signature": "c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:structuralInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the first set is a subset of the second set; that is, if\n   every element in the first set is also a member of the second set.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "subset",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e Bool",
          "source": "src/Data-Edison-Coll.html#subset",
          "type": "method"
        },
        "index": {
          "description": "Test whether the first set is subset of the second set that is if every element in the first set is also member of the second set This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "subset",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the symmetric difference of two sets; that is, all elements\n   which appear in exactily one of the two sets.\n\u003c/p\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "symmetricDifference",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#symmetricDifference",
          "type": "method"
        },
        "index": {
          "description": "Computes the symmetric difference of two sets that is all elements which appear in exactily one of the two sets This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "symmetricDifference",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "partial": "Difference",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:symmetricDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "toList",
          "package": "EdisonAPI",
          "signature": "c -\u003e [a]",
          "source": "src/Data-Edison-Coll.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "toList",
          "normalized": "a-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "c-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "toOrdList",
          "package": "EdisonAPI",
          "signature": "c -\u003e [a]",
          "source": "src/Data-Edison-Coll.html#toOrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "toOrdList",
          "normalized": "a-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "Ord List",
          "signature": "c-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:toOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the elements in non-decreasing order. (For sets, this will always\n   be increasing order)\n\u003c/p\u003e\u003cp\u003eAt set types, this function is \u003cem\u003eunambiguous\u003c/em\u003e.  At bag types, it\n   is \u003cem\u003eunambiguous\u003c/em\u003e if no two equivalent elements exist in the bag;\n   otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "toOrdSeq",
          "package": "EdisonAPI",
          "signature": "c -\u003e seq a",
          "source": "src/Data-Edison-Coll.html#toOrdSeq",
          "type": "method"
        },
        "index": {
          "description": "List the elements in non-decreasing order For sets this will always be increasing order At set types this function is unambiguous At bag types it is unambiguous if no two equivalent elements exist in the bag otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "toOrdSeq",
          "normalized": "a-\u003eb c",
          "package": "EdisonAPI",
          "partial": "Ord Seq",
          "signature": "c-\u003eseq a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:toOrdSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the elements of the collection in an unspecified order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e iff the collection contains more\n   than one element.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "toSeq",
          "package": "EdisonAPI",
          "signature": "c -\u003e seq a",
          "source": "src/Data-Edison-Coll.html#toSeq",
          "type": "method"
        },
        "index": {
          "description": "List the elements of the collection in an unspecified order This function is ambiguous iff the collection contains more than one element",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "toSeq",
          "normalized": "a-\u003eb c",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "c-\u003eseq a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:toSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two collections.  For sets, it is unspecified which element is\n   kept in the case of duplicates.  Equivalant to \u003ccode\u003emappend\u003c/code\u003e from the\n   \u003ccode\u003eMonoid\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at set types if the sets are not disjoint.\n   Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "union",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merge two collections For sets it is unspecified which element is kept in the case of duplicates Equivalant to mappend from the Monoid instance This function is ambiguous at set types if the sets are not disjoint Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "unionList",
          "package": "EdisonAPI",
          "signature": "[c] -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionList",
          "normalized": "[a]-\u003ea",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[c]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "unionListWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [c] -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003eb",
          "package": "EdisonAPI",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[c]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge a sequence of collections.  For sets, it is unspecified which\n   element is kept in the case of duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eambiguous\u003c/em\u003e at set types if the sets in the sequence\n   are not mutually disjoint. Otherwise it is \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unionSeq",
          "package": "EdisonAPI",
          "signature": "seq c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionSeq",
          "type": "method"
        },
        "index": {
          "description": "Merge sequence of collections For sets it is unspecified which element is kept in the case of duplicates This function is ambiguous at set types if the sets in the sequence are not mutually disjoint Otherwise it is unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionSeq",
          "normalized": "a b-\u003eb",
          "package": "EdisonAPI",
          "partial": "Seq",
          "signature": "seq c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunionSeq\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition\n   if the combining function is associative.  Otherwise it is \u003cem\u003eambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unionSeqWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e seq c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionSeqWith",
          "type": "method"
        },
        "index": {
          "description": "Same as unionSeq but with combining function to resolve duplicates This function is unambiguous under the with precondition if the combining function is associative Otherwise it is ambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionSeqWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb c-\u003ec",
          "package": "EdisonAPI",
          "partial": "Seq With",
          "signature": "(a-\u003ea-\u003ea)-\u003eseq c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionSeqWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but with a combining function to resolve duplicates.    \n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e under the \"with\" precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unionWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionWith",
          "type": "method"
        },
        "index": {
          "description": "Same as union but with combining function to resolve duplicates This function is unambiguous under the with precondition",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft biased union.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunionl = unionWith (\\x y -\u003e x)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unionl",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionl",
          "type": "method"
        },
        "index": {
          "description": "Left biased union Axioms unionl unionWith This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionl",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight biased union.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunionr = unionWith (\\x y -\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unionr",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unionr",
          "type": "method"
        },
        "index": {
          "description": "Right biased union Axioms unionr unionWith This function is always unambiguous",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unionr",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unionr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion two collections where every element in the first\n   collection is \u003ccode\u003e\u003c=\u003c/code\u003e every element in the second collection.\n   For sets, this precondition is strengthened to \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e, under the above preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unsafeAppend",
          "package": "EdisonAPI",
          "signature": "c -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeAppend",
          "type": "method"
        },
        "index": {
          "description": "Union two collections where every element in the first collection is every element in the second collection For sets this precondition is strengthened to This function is unambiguous under the above preconditions",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeAppend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "partial": "Append",
          "signature": "c-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Coll",
          "name": "unsafeFromOrdList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeFromOrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeFromOrdList",
          "normalized": "[a]-\u003eb",
          "package": "EdisonAPI",
          "partial": "From Ord List",
          "signature": "[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeFromOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence in non-decreasing order into a collection.\n   For sets, the sequence must be in increasing order.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e, under the above preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unsafeFromOrdSeq",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeFromOrdSeq",
          "type": "method"
        },
        "index": {
          "description": "Convert sequence in non-decreasing order into collection For sets the sequence must be in increasing order This function is unambiguous under the above preconditions",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeFromOrdSeq",
          "normalized": "a b-\u003ec",
          "package": "EdisonAPI",
          "partial": "From Ord Seq",
          "signature": "seq a-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeFromOrdSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a collection which is guaranteed to be\n   \u003ccode\u003e\u003e=\u003c/code\u003e any existing elements in the collection.  For sets, the \n   precondition is strengthened to \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e, under the above preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unsafeInsertMax",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeInsertMax",
          "type": "method"
        },
        "index": {
          "description": "Insert an element into collection which is guaranteed to be any existing elements in the collection For sets the precondition is strengthened to This function is unambiguous under the above preconditions",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeInsertMax",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "Insert Max",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeInsertMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a collection which is guaranteed to be\n   \u003ccode\u003e\u003c=\u003c/code\u003e any existing elements in the collection.  For sets, the\n   precondition is strengthened to \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e, under the above preconditions.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unsafeInsertMin",
          "package": "EdisonAPI",
          "signature": "a -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeInsertMin",
          "type": "method"
        },
        "index": {
          "description": "Insert an element into collection which is guaranteed to be any existing elements in the collection For sets the precondition is strengthened to This function is unambiguous under the above preconditions",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeInsertMin",
          "normalized": "a-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "Insert Min",
          "signature": "a-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeInsertMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a monotonic function across all elements of a collection.  The \n   function is required to satisfy the following precondition:\n\u003c/p\u003e\u003cpre\u003e forall x y. x \u003c y ==\u003e f x \u003c f y\n\u003c/pre\u003e\u003cp\u003eThis function is \u003cem\u003eunambiguous\u003c/em\u003e, under the precondition.\n\u003c/p\u003e",
          "module": "Data.Edison.Coll",
          "name": "unsafeMapMonotonic",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e c -\u003e c",
          "source": "src/Data-Edison-Coll.html#unsafeMapMonotonic",
          "type": "method"
        },
        "index": {
          "description": "Map monotonic function across all elements of collection The function is required to satisfy the following precondition forall This function is unambiguous under the precondition",
          "hierarchy": "Data Edison Coll",
          "module": "Data.Edison.Coll",
          "name": "unsafeMapMonotonic",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "EdisonAPI",
          "partial": "Map Monotonic",
          "signature": "(a-\u003ea)-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Coll.html#v:unsafeMapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a central depository of common definitions\n   used throughout Edison.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Prelude",
          "name": "Prelude",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "This module is central depository of common definitions used throughout Edison",
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "Prelude",
          "package": "EdisonAPI",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents hashable objects. If obeys the \n   following invariant:\n\u003c/p\u003e\u003cpre\u003eforall x,y :: a. (x == y) implies (hash x == hash y)\u003c/pre\u003e",
          "module": "Data.Edison.Prelude",
          "name": "Hash",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Prelude.html#Hash",
          "type": "class"
        },
        "index": {
          "description": "This class represents hashable objects If obeys the following invariant forall implies hash hash",
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "Hash",
          "package": "EdisonAPI",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents a quantity that can be measured.  It is\n   calculated by an associative function with a unit (hence the\n   \u003ccode\u003eMonoid\u003c/code\u003e superclass, and by a function which gives the measurement\n   for an individual item.  Some datastructures are able to speed up\n   the calculation of a measure by caching intermediate values of\n   the computation.\n\u003c/p\u003e",
          "module": "Data.Edison.Prelude",
          "name": "Measured",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Prelude.html#Measured",
          "type": "class"
        },
        "index": {
          "description": "This class represents quantity that can be measured It is calculated by an associative function with unit hence the Monoid superclass and by function which gives the measurement for an individual item Some datastructures are able to speed up the calculation of measure by caching intermediate values of the computation",
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "Measured",
          "package": "EdisonAPI",
          "partial": "Measured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#t:Measured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents hashable objects where the hash is\n   reversible.\n\u003c/p\u003e\u003cpre\u003eforall x :: a. unhash (hash x) == x\u003c/pre\u003e\u003cp\u003eNote that:\n\u003c/p\u003e\u003cpre\u003ehash (unhash i) == i\u003c/pre\u003e\u003cp\u003edoes not necessarily hold because \u003ccode\u003e\u003ca\u003eunhash\u003c/a\u003e\u003c/code\u003e is not necessarily\n defined for all \u003ccode\u003ei\u003c/code\u003e, only for all \u003ccode\u003ei\u003c/code\u003e in the range of hash.\n\u003c/p\u003e",
          "module": "Data.Edison.Prelude",
          "name": "ReversibleHash",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Prelude.html#ReversibleHash",
          "type": "class"
        },
        "index": {
          "description": "This class represents hashable objects where the hash is reversible forall unhash hash Note that hash unhash does not necessarily hold because unhash is not necessarily defined for all only for all in the range of hash",
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "ReversibleHash",
          "package": "EdisonAPI",
          "partial": "Reversible Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#t:ReversibleHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents hashable objects where the hash function\n   is \u003cem\u003eunique\u003c/em\u003e (injective).  There are no new methods, just a \n   stronger invariant:\n\u003c/p\u003e\u003cpre\u003eforall x,y :: a. (x == y) iff (hash x == hash y)\u003c/pre\u003e",
          "module": "Data.Edison.Prelude",
          "name": "UniqueHash",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Prelude.html#UniqueHash",
          "type": "class"
        },
        "index": {
          "description": "This class represents hashable objects where the hash function is unique injective There are no new methods just stronger invariant forall iff hash hash",
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "UniqueHash",
          "package": "EdisonAPI",
          "partial": "Unique Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#t:UniqueHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Prelude",
          "name": "hash",
          "package": "EdisonAPI",
          "signature": "a -\u003e Int",
          "source": "src/Data-Edison-Prelude.html#hash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "hash",
          "normalized": "a-\u003eInt",
          "package": "EdisonAPI",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Prelude",
          "name": "measure",
          "package": "EdisonAPI",
          "signature": "a -\u003e v",
          "source": "src/Data-Edison-Prelude.html#measure",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "measure",
          "normalized": "a-\u003eb",
          "package": "EdisonAPI",
          "signature": "a-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Prelude",
          "name": "unhash",
          "package": "EdisonAPI",
          "signature": "Int -\u003e a",
          "source": "src/Data-Edison-Prelude.html#unhash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Edison Prelude",
          "module": "Data.Edison.Prelude",
          "name": "unhash",
          "normalized": "Int-\u003ea",
          "package": "EdisonAPI",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Prelude.html#v:unhash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module packages the standard prelude list type as a\n   sequence.  This is the baseline sequence implementation and\n   all methods have the default running times listed in\n   \u003ca\u003eData.Edison.Seq\u003c/a\u003e, except for the following two trivial operations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e toList, fromList     \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ListSeq",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Seq-ListSeq.html",
          "type": "module"
        },
        "index": {
          "description": "This module packages the standard prelude list type as sequence This is the baseline sequence implementation and all methods have the default running times listed in Data.Edison.Seq except for the following two trivial operations toList fromList",
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ListSeq",
          "package": "EdisonAPI",
          "partial": "List Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "Seq",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Seq-ListSeq.html#Seq",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "Seq",
          "package": "EdisonAPI",
          "partial": "Seq",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "adjust",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "append",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "append",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "concat",
          "package": "EdisonAPI",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "concatMap",
          "package": "EdisonAPI",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Edison-Seq-ListSeq.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "copy",
          "package": "EdisonAPI",
          "signature": "Int -\u003e a -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "copy",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "drop",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "dropWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "empty",
          "package": "EdisonAPI",
          "signature": "[a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "empty",
          "normalized": "[a]",
          "package": "EdisonAPI",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "filter",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#fold%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#fold1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#fold1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fold1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:fold1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldlWithIndex",
          "package": "EdisonAPI",
          "signature": "(b -\u003e Int -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldlWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldlWithIndex",
          "normalized": "(a-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(b-\u003eInt-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldlWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldlWithIndex'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e Int -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldlWithIndex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldlWithIndex'",
          "normalized": "(a-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Index'",
          "signature": "(b-\u003eInt-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldlWithIndex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr'",
          "package": "EdisonAPI",
          "signature": "(t -\u003e a -\u003e a) -\u003e a -\u003e [t] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "signature": "(t-\u003ea-\u003ea)-\u003ea-\u003e[t]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldrWithIndex",
          "package": "EdisonAPI",
          "signature": "(Int -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldrWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldrWithIndex",
          "normalized": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldrWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldrWithIndex'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e t -\u003e b -\u003e b) -\u003e b -\u003e [t] -\u003e b",
          "source": "src/Data-Edison-Seq-ListSeq.html#foldrWithIndex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "foldrWithIndex'",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003e[b]-\u003ec",
          "package": "EdisonAPI",
          "partial": "With Index'",
          "signature": "(a-\u003et-\u003eb-\u003eb)-\u003eb-\u003e[t]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:foldrWithIndex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fromList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "fromList",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "inBounds",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e Bool",
          "source": "src/Data-Edison-Seq-ListSeq.html#inBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "inBounds",
          "normalized": "Int-\u003e[a]-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Bounds",
          "signature": "Int-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:inBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lcons",
          "package": "EdisonAPI",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#lcons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lcons",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lhead",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#lhead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lhead",
          "normalized": "[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lheadM",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm a",
          "source": "src/Data-Edison-Seq-ListSeq.html#lheadM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lheadM",
          "normalized": "[a]-\u003eb a",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookup",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookup",
          "normalized": "Int-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "Int-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookupM",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e m a",
          "source": "src/Data-Edison-Seq-ListSeq.html#lookupM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookupM",
          "normalized": "Int-\u003e[a]-\u003eb a",
          "package": "EdisonAPI",
          "signature": "Int-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "signature": "a -\u003e Int -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#lookupWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lookupWithDefault",
          "normalized": "a-\u003eInt-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Default",
          "signature": "a-\u003eInt-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ltail",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#ltail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ltail",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:ltail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ltailM",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#ltailM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "ltailM",
          "normalized": "[a]-\u003eb[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:ltailM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lview",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm (a, [a])",
          "source": "src/Data-Edison-Seq-ListSeq.html#lview",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "lview",
          "normalized": "[a]-\u003eb(a,[a])",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:lview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "map",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Edison-Seq-ListSeq.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "mapWithIndex",
          "package": "EdisonAPI",
          "signature": "(Int -\u003e a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Edison-Seq-ListSeq.html#mapWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "mapWithIndex",
          "normalized": "(Int-\u003ea-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(Int-\u003ea-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:mapWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "moduleName",
          "package": "EdisonAPI",
          "signature": "String",
          "source": "src/Data-Edison-Seq-ListSeq.html#moduleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "moduleName",
          "package": "EdisonAPI",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:moduleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "null",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e Bool",
          "source": "src/Data-Edison-Seq-ListSeq.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "EdisonAPI",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "partition",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-Edison-Seq-ListSeq.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rcons",
          "package": "EdisonAPI",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#rcons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rcons",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reduce1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reduce1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reduce1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reduce1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reduce1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reduce1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reduce1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducel",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reducel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducel",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reducel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducel'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reducel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducel'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reducel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducer",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reducer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducer",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducer'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#reducer%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reducer'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reducer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reverse",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reverseOnto",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#reverseOnto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "reverseOnto",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "Onto",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:reverseOnto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rhead",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Edison-Seq-ListSeq.html#rhead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rhead",
          "normalized": "[a]-\u003ea",
          "package": "EdisonAPI",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rheadM",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm a",
          "source": "src/Data-Edison-Seq-ListSeq.html#rheadM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rheadM",
          "normalized": "[a]-\u003eb a",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rtail",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#rtail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rtail",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rtail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rtailM",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#rtailM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rtailM",
          "normalized": "[a]-\u003eb[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rtailM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rview",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e rm (a, [a])",
          "source": "src/Data-Edison-Seq-ListSeq.html#rview",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "rview",
          "normalized": "[a]-\u003eb(a,[a])",
          "package": "EdisonAPI",
          "signature": "[a]-\u003erm(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:rview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "singleton",
          "package": "EdisonAPI",
          "signature": "a -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "singleton",
          "normalized": "a-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "size",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e Int",
          "source": "src/Data-Edison-Seq-ListSeq.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "size",
          "normalized": "[a]-\u003eInt",
          "package": "EdisonAPI",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "splitAt",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-Edison-Seq-ListSeq.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "EdisonAPI",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "splitWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-Edison-Seq-ListSeq.html#splitWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "splitWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:splitWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "strict",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#strict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "strict",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "strictWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#strictWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "strictWith",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:strictWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "structuralInvariant",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e Bool",
          "source": "src/Data-Edison-Seq-ListSeq.html#structuralInvariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "structuralInvariant",
          "normalized": "[a]-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Invariant",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:structuralInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "subseq",
          "package": "EdisonAPI",
          "signature": "Int -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#subseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "subseq",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "Int-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:subseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "take",
          "package": "EdisonAPI",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "takeWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "toList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "toList",
          "normalized": "[a]-\u003e[a]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzip",
          "package": "EdisonAPI",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "source": "src/Data-Edison-Seq-ListSeq.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "EdisonAPI",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzip3",
          "package": "EdisonAPI",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "source": "src/Data-Edison-Seq-ListSeq.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "EdisonAPI",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzipWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e [a] -\u003e ([b], [c])",
          "source": "src/Data-Edison-Seq-ListSeq.html#unzipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzipWith",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e[a]-\u003e([b],[c])",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e[a]-\u003e([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:unzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzipWith3",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (a -\u003e d) -\u003e [a] -\u003e ([b], [c], [d])",
          "source": "src/Data-Edison-Seq-ListSeq.html#unzipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "unzipWith3",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e[a]-\u003e([b],[c],[d])",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e[a]-\u003e([b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:unzipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "update",
          "package": "EdisonAPI",
          "signature": "Int -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-Edison-Seq-ListSeq.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "update",
          "normalized": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "package": "EdisonAPI",
          "signature": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zip",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Data-Edison-Seq-ListSeq.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zip3",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "source": "src/Data-Edison-Seq-ListSeq.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "EdisonAPI",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zipWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Data-Edison-Seq-ListSeq.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zipWith3",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "source": "src/Data-Edison-Seq-ListSeq.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Edison Seq ListSeq",
          "module": "Data.Edison.Seq.ListSeq",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq-ListSeq.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe sequence abstraction is usually viewed as a hierarchy of ADTs\n   including lists, queues, deques, catenable lists, etc. However, such\n   a hierarchy is based on efficiency rather than functionality. For example,\n   a list supports all the operations that a deque supports, even though\n   some of the operations may be inefficient. Hence, in Edison, all sequence\n   data structures are defined as instances of the single Sequence class:\n\u003c/p\u003e\u003cpre\u003e   class (Functor s, MonadPlus s) =\u003e Sequence s\u003c/pre\u003e\u003cp\u003eAll sequences are also instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n   In addition, all sequences are expected to be instances of \u003ccode\u003eEq\u003c/code\u003e, \u003ccode\u003eShow\u003c/code\u003e,\n   and \u003ccode\u003eRead\u003c/code\u003e, although this is not enforced.\n\u003c/p\u003e\u003cp\u003eWe follow the naming convention that every module implementing sequences\n   defines a type constructor named \u003ccode\u003eSeq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor each method the \"default\" complexity is listed.  Individual\n   implementations may differ for some methods.  The documentation for\n   each implementation will list those methods for which the running time\n   differs from these.\n\u003c/p\u003e\u003cp\u003eA description of each Sequence function appears below.  In most cases\n   psudeocode is also provided. Obviously, the psudeocode is illustrative only.\n\u003c/p\u003e\u003cp\u003eSequences are represented in psudecode between angle brackets:\n\u003c/p\u003e\u003cpre\u003e \u003cx0,x1,x2...,xn-1\u003e\n\u003c/pre\u003e\u003cp\u003eSuch that \u003ccode\u003ex0\u003c/code\u003e is at the left (front) of the sequence and\n   \u003ccode\u003exn-1\u003c/code\u003e is at the right (rear) of the sequence.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Seq",
          "name": "Seq",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Seq.html",
          "type": "module"
        },
        "index": {
          "description": "The sequence abstraction is usually viewed as hierarchy of ADTs including lists queues deques catenable lists etc However such hierarchy is based on efficiency rather than functionality For example list supports all the operations that deque supports even though some of the operations may be inefficient Hence in Edison all sequence data structures are defined as instances of the single Sequence class class Functor MonadPlus Sequence All sequences are also instances of Functor Monad and MonadPlus In addition all sequences are expected to be instances of Eq Show and Read although this is not enforced We follow the naming convention that every module implementing sequences defines type constructor named Seq For each method the default complexity is listed Individual implementations may differ for some methods The documentation for each implementation will list those methods for which the running time differs from these description of each Sequence function appears below In most cases psudeocode is also provided Obviously the psudeocode is illustrative only Sequences are represented in psudecode between angle brackets x0 x1 x2 xn-1 Such that x0 is at the left front of the sequence and xn-1 is at the right rear of the sequence",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "Seq",
          "package": "EdisonAPI",
          "partial": "Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e class defines an interface for datatypes which\n   implement sequences.  A description for each function is\n   given below.  \n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "Sequence",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Seq.html#Sequence",
          "type": "class"
        },
        "index": {
          "description": "The Sequence class defines an interface for datatypes which implement sequences description for each function is given below",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "Sequence",
          "package": "EdisonAPI",
          "partial": "Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the element at the given index, or\n   return the original sequence if the index is out of bounds.\n   All indexes are 0 based.\n\u003c/p\u003e\u003cpre\u003e adjust f i xs@\u003cx0,...,xn-1\u003e\n   | inBounds i xs = \u003cx0,...xi-1,f xi,xi+1,...,xn-1\u003e\n   | otherwise = xs\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enot (inBounds i xs) ==\u003e adjust f i xs = xs\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e adjust f i (append xs (lcons x ys)) =\n      append xs (cons (f x) ys)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i + t )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "adjust",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a) -\u003e Int -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#adjust",
          "type": "method"
        },
        "index": {
          "description": "Apply function to the element at the given index or return the original sequence if the index is out of bounds All indexes are based adjust xs x0 xn-1 inBounds xs x0 xi-1 xi xi xn-1 otherwise xs Axioms not inBounds xs adjust xs xs size xs adjust append xs lcons ys append xs cons ys This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInt-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea)-\u003eInt-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two sequence, with the first argument on the left\n   and the second argument on the right.  Identical to \u003ccode\u003emplus\u003c/code\u003e\n   from \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e append \u003cx0,...,xn-1\u003e \u003cy0,...,ym-1\u003e = \u003cx0,...,xn-1,y0,...,ym-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eappend xs ys = foldr lcons ys xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "append",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two sequence with the first argument on the left and the second argument on the right Identical to mplus from MonadPlus append x0 xn-1 y0 ym-1 x0 xn-1 y0 ym-1 Axioms append xs ys foldr lcons ys xs This function is always unambiguous Default running time n1",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "append",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s a-\u003es a-\u003es a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a sequence of sequences into a simple sequence.\n\u003c/p\u003e\u003cpre\u003e concat xss = foldr append empty xss\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003econcat xss = foldr append empty xss\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n + m )\u003c/code\u003e\n    where \u003ccode\u003en\u003c/code\u003e is the length of the input sequence and \u003ccode\u003em\u003c/code\u003e is\n    length of the output sequence.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "concat",
          "package": "EdisonAPI",
          "signature": "s (s a) -\u003e s a",
          "source": "src/Data-Edison-Seq.html#concat",
          "type": "method"
        },
        "index": {
          "description": "Flatten sequence of sequences into simple sequence concat xss foldr append empty xss Axioms concat xss foldr append empty xss This function is always unambiguous Default running time where is the length of the input sequence and is length of the output sequence",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "concat",
          "normalized": "a(a b)-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s(s a)-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a sequence-producing function to every element\n   of a sequence and flatten the result. \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e\n   is the bind \u003ccode\u003e(\u003e\u003e=)\u003c/code\u003e operation of from \u003ccode\u003eMonad\u003c/code\u003e with the\n   arguments in the reverse order.\n\u003c/p\u003e\u003cpre\u003e concatMap f xs = concat (map f xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003econcatMap f xs = concat (map f xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n + m )\u003c/code\u003e\n     where \u003ccode\u003en\u003c/code\u003e is the length of the input sequence, \u003ccode\u003em\u003c/code\u003e is the\n     length of the output sequence, and \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "concatMap",
          "package": "EdisonAPI",
          "signature": "(a -\u003e s b) -\u003e s a -\u003e s b",
          "source": "src/Data-Edison-Seq.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Apply sequence-producing function to every element of sequence and flatten the result concatMap is the bind operation of from Monad with the arguments in the reverse order concatMap xs concat map xs Axioms concatMap xs concat map xs This function is always unambiguous Default running time where is the length of the input sequence is the length of the output sequence and is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "concatMap",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "EdisonAPI",
          "partial": "Map",
          "signature": "(a-\u003es b)-\u003es a-\u003es b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence containing \u003ccode\u003en\u003c/code\u003e copies of the given element.\n   Return \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en\u003c0\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ecopy n x = \u003cx,...,x\u003e\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003en \u003e 0    ==\u003e copy n x = cons x (copy (n-1) x)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003en \u003c= 0   ==\u003e copy n x = empty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "copy",
          "package": "EdisonAPI",
          "signature": "Int -\u003e a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#copy",
          "type": "method"
        },
        "index": {
          "description": "Create sequence containing copies of the given element Return empty if copy Axioms copy cons copy n-1 copy empty This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "copy",
          "normalized": "Int-\u003ea-\u003eb a",
          "package": "EdisonAPI",
          "signature": "Int-\u003ea-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a prefix of length \u003ccode\u003ei\u003c/code\u003e from a sequence.  Return\n   the entire sequence if \u003ccode\u003ei\u003c/code\u003e is negative, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n   \u003ccode\u003ei\u003c/code\u003e is too large.\n\u003c/p\u003e\u003cpre\u003e drop i xs = snd (splitAt i xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ei \u003c 0        ==\u003e drop i xs = xs\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ei \u003e size xs  ==\u003e drop i xs = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e drop i (append xs ys) = ys\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "drop",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#drop",
          "type": "method"
        },
        "index": {
          "description": "Delete prefix of length from sequence Return the entire sequence if is negative or empty if is too large drop xs snd splitAt xs Axioms drop xs xs size xs drop xs empty size xs drop append xs ys ys This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "drop",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "Int-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the maximal prefix of elements satisfying the\n   given predicate.\n\u003c/p\u003e\u003cpre\u003e dropWhile p xs = snd (splitWhile p xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003edropWhile p empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003edropWhile p (lcons x xs) = if p x\n      then dropWhile p xs\n      else lcons x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "dropWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#dropWhile",
          "type": "method"
        },
        "index": {
          "description": "Delete the maximal prefix of elements satisfying the given predicate dropWhile xs snd splitWhile xs Axioms dropWhile empty empty dropWhile lcons xs if then dropWhile xs else lcons xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty sequence.  Identical to \u003ccode\u003emzero\u003c/code\u003e\n   from \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e empty = \u003c\u003e\n\u003c/pre\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "empty",
          "package": "EdisonAPI",
          "signature": "s a",
          "source": "src/Data-Edison-Seq.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty sequence Identical to mzero from MonadPlus empty This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "empty",
          "package": "EdisonAPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements of a sequence that satisfy the\n   given predicate, retaining the relative ordering of\n   elements from the original sequence.\n\u003c/p\u003e\u003cpre\u003e filter p xs = foldr pcons empty xs\n      where pcons x xs = if p x then cons x xs else xs\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efilter p empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efilter p (lcons x xs) = if p x \n       then lcons x (filter p xs)\n       else filter p xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "filter",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Extract the elements of sequence that satisfy the given predicate retaining the relative ordering of elements from the original sequence filter xs foldr pcons empty xs where pcons xs if then cons xs else xs Axioms filter empty empty filter lcons xs if then lcons filter xs else filter xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a sequence into a single value,\n   given a combining function and an initial value.  The order\n   in which the elements are applied to the combining function\n   is unspecified.  \u003ccode\u003efold\u003c/code\u003e is one of the few ambiguous sequence\n   functions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efold f c empty = c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ef is fold-commutative ==\u003e fold f = foldr f = foldl f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003efold f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e\u003cp\u003eDefault running type: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running tome of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "fold",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#fold",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of sequence into single value given combining function and an initial value The order in which the elements are applied to the combining function is unspecified fold is one of the few ambiguous sequence functions Axioms fold empty is fold-commutative fold foldr foldl fold is unambiguous iff is fold-commutative Default running type where is the running tome of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003efold'\u003c/code\u003e is one of the few ambiguous\n   sequence functions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ ==\u003e fold f x xs = fold' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003efold f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e\u003cp\u003eDefault running type: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running tome of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "fold'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#fold%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold fold is one of the few ambiguous sequence functions Axioms forall fold xs fold xs fold is unambiguous iff is fold-commutative Default running type where is the running tome of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "fold'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a non-empty sequence into a\n   single value, given a combining function. Signals an error\n   if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ef is fold-commutative ==\u003e fold1 f = foldr1 f = foldl1 f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003efold1 f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e\u003cp\u003eDefault running type: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running tome of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "fold1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#fold1",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of non-empty sequence into single value given combining function Signals an error if the sequence is empty Axioms is fold-commutative fold1 foldr1 foldl1 fold1 is unambiguous iff is fold-commutative Default running type where is the running tome of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ ==\u003e fold1' f xs = fold1 f xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003efold1' f\u003c/code\u003e is \u003cem\u003eunambiguous\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "fold1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#fold1%27",
          "type": "method"
        },
        "index": {
          "description": "strict variant of fold1 Axioms forall fold1 xs fold1 xs fold1 is unambiguous iff is fold-commutative Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "fold1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:fold1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a sequence into a single value,\n   given a combining function and an initial value.  The function\n   is applied with left nesting.\n\u003c/p\u003e\u003cpre\u003e foldl (%) c \u003cx0,...,xn-1\u003e = (((c % x0) % x1) % ... ) % xn-1\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldl f c empty = c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldl f c (lcons x xs) = foldl f (f c x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldl",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of sequence into single value given combining function and an initial value The function is applied with left nesting foldl x0 xn-1 x0 x1 xn-1 Axioms foldl empty foldl lcons xs foldl xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e forall a. f _|_ a = _|_ ==\u003e foldl f z xs = foldl' f z xs\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldl'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldl Axioms forall foldl xs foldl xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a non-empty sequence into\n   a single value, given a combining function.  The function\n   is applied with left nesting. Signals an error if the\n   sequence is empty.\n\u003c/p\u003e\u003cpre\u003e foldl1 (+) \u003cx0,...,xn-1\u003e\n  | n==0 = error \"ModuleName.foldl1: empty sequence\"\n  | n\u003e0  = (x0 + x1) + ... + xn-1\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldl1 f empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldl1 f (lcons x xs) = foldl f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldl1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of non-empty sequence into single value given combining function The function is applied with left nesting Signals an error if the sequence is empty foldl1 x0 xn-1 error ModuleName.foldl1 empty sequence x0 x1 xn-1 Axioms foldl1 empty undefined foldl1 lcons xs foldl xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e forall a. f _|_ a = _|_ ==\u003e foldl1 f xs = foldl1' f xs\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldl1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#foldl1%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldl1 Axioms forall foldl1 xs foldl1 xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but include the index with each element.\n   All indexes are 0 based.\n\u003c/p\u003e\u003cpre\u003e foldlWithIndex f c \u003cx0,...,xn-1\u003e =\n     f (...(f (f c 0 x0) 1 x1)...) (n-1) xn-1)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldlWithIndex f c empty = c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldlWithIndex f c (rcons x xs) =\n      f (foldlWithIndex f c xs) (size xs) x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldlWithIndex",
          "package": "EdisonAPI",
          "signature": "(b -\u003e Int -\u003e a -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldlWithIndex",
          "type": "method"
        },
        "index": {
          "description": "Like foldl but include the index with each element All indexes are based foldlWithIndex x0 xn-1 x0 x1 n-1 xn-1 Axioms foldlWithIndex empty foldlWithIndex rcons xs foldlWithIndex xs size xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldlWithIndex",
          "normalized": "(a-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(b-\u003eInt-\u003ea-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldlWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldlWithIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall i a. f _|_ i a = _|_ ==\u003e foldlWithIndex f x xs = \n       foldlWithIndex' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldlWithIndex'",
          "package": "EdisonAPI",
          "signature": "(b -\u003e Int -\u003e a -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldlWithIndex%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldlWithIndex Axioms forall foldlWithIndex xs foldlWithIndex xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldlWithIndex'",
          "normalized": "(a-\u003eInt-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Index'",
          "signature": "(b-\u003eInt-\u003ea-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldlWithIndex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a sequence into a single value,\n   given a combining function and an initial value.  The function\n   is applied with right nesting.\n\u003c/p\u003e\u003cpre\u003e foldr (%) c \u003cx0,...,xn-1\u003e = x0 % (x1 % ( ... % (xn-1 % c)))\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldr f c empty = c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldr f c (lcons x xs) = f x (foldr f c xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldr",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of sequence into single value given combining function and an initial value The function is applied with right nesting foldr x0 xn-1 x0 x1 xn-1 Axioms foldr empty foldr lcons xs foldr xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ ==\u003e foldr f x xs = foldr' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldr'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldr Axioms forall foldr xs foldr xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all the elements of a non-empty sequence into a\n   single value, given a combining function.  The function\n   is applied with right nesting. Signals an error if the\n   sequence is empty.\n\u003c/p\u003e\u003cpre\u003e foldr1 (+) \u003cx0,...,xn-1\u003e\n   | n==0 = error \"ModuleName.foldr1: empty sequence\"\n   | n\u003e0  = x0 + (x1 + ... + xn-1)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldr1 f empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldr1 f (rcons x xs) = foldr f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldr1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Combine all the elements of non-empty sequence into single value given combining function The function is applied with right nesting Signals an error if the sequence is empty foldr1 x0 xn-1 error ModuleName.foldr1 empty sequence x0 x1 xn-1 Axioms foldr1 empty undefined foldr1 rcons xs foldr xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e forall a. f a _|_ = _|_ ==\u003e foldr1 f xs = foldr1' f xs\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldr1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#foldr1%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldr1 Axioms forall foldr1 xs foldr1 xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but include the index with each element.\n   All indexes are 0 based.\n\u003c/p\u003e\u003cpre\u003e foldrWithIndex f c \u003cx0,...,xn-1\u003e = \n     f 0 x0 (f 1 x1 (... (f (n-1) xn-1 c)))\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efoldrWithIndex f c empty = c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efoldrWithIndex f c (rcons x xs) =\n      foldrWithIndex f (f (size xs) x c) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldrWithIndex",
          "package": "EdisonAPI",
          "signature": "(Int -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldrWithIndex",
          "type": "method"
        },
        "index": {
          "description": "Like foldr but include the index with each element All indexes are based foldrWithIndex x0 xn-1 x0 x1 n-1 xn-1 Axioms foldrWithIndex empty foldrWithIndex rcons xs foldrWithIndex size xs xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldrWithIndex",
          "normalized": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldrWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldrWithIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall i a. f i a _|_ = _|_ ==\u003e foldrWithIndex f x xs = \n       foldrWithIndex' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "foldrWithIndex'",
          "package": "EdisonAPI",
          "signature": "(Int -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e s a -\u003e b",
          "source": "src/Data-Edison-Seq.html#foldrWithIndex%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of foldrWithIndex Axioms forall foldrWithIndex xs foldrWithIndex xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "foldrWithIndex'",
          "normalized": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "EdisonAPI",
          "partial": "With Index'",
          "signature": "(Int-\u003ea-\u003eb-\u003eb)-\u003eb-\u003es a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:foldrWithIndex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list into a sequence\n\u003c/p\u003e\u003cpre\u003e fromList [x0,...,xn-1] = \u003cx0,...,xn-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003efromList xs = foldr lcons empty xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "fromList",
          "package": "EdisonAPI",
          "signature": "[a] -\u003e s a",
          "source": "src/Data-Edison-Seq.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Convert list into sequence fromList x0 xn-1 x0 xn-1 Axioms fromList xs foldr lcons empty xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "fromList",
          "normalized": "[a]-\u003eb a",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "[a]-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an index is valid for the given sequence. All indexes\n   are 0 based.\n\u003c/p\u003e\u003cpre\u003e inBounds i \u003cx0,...,xn-1\u003e = (0 \u003c= i && i \u003c n)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einBounds i xs = (0 \u003c= i && i \u003c size xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "inBounds",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e Bool",
          "source": "src/Data-Edison-Seq.html#inBounds",
          "type": "method"
        },
        "index": {
          "description": "Test whether an index is valid for the given sequence All indexes are based inBounds x0 xn-1 Axioms inBounds xs size xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "inBounds",
          "normalized": "Int-\u003ea b-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Bounds",
          "signature": "Int-\u003es a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:inBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the module implementing s.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "instanceName",
          "package": "EdisonAPI",
          "signature": "s a -\u003e String",
          "source": "src/Data-Edison-Seq.html#instanceName",
          "type": "method"
        },
        "index": {
          "description": "The name of the module implementing",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "instanceName",
          "normalized": "a b-\u003eString",
          "package": "EdisonAPI",
          "partial": "Name",
          "signature": "s a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:instanceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new element to the front/left of a sequence\n\u003c/p\u003e\u003cpre\u003e lcons x \u003cx0,...,xn-1\u003e = \u003cx,x0,...,xn-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003elcons x xs = append (singleton x) xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lcons",
          "package": "EdisonAPI",
          "signature": "a -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#lcons",
          "type": "method"
        },
        "index": {
          "description": "Add new element to the front left of sequence lcons x0 xn-1 x0 xn-1 Axioms lcons xs append singleton xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lcons",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "a-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first element of a sequence.\n   Signals an error if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003elhead empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elhead (lcons x xs) = x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lhead",
          "package": "EdisonAPI",
          "signature": "s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#lhead",
          "type": "method"
        },
        "index": {
          "description": "Return the first element of sequence Signals an error if the sequence is empty Axioms lhead empty undefined lhead lcons xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lhead",
          "normalized": "a b-\u003eb",
          "package": "EdisonAPI",
          "signature": "s a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first element of a sequence. \n   Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003elheadM empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elheadM (lcons x xs) = return x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lheadM",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m a",
          "source": "src/Data-Edison-Seq.html#lheadM",
          "type": "method"
        },
        "index": {
          "description": "Returns the first element of sequence Calls fail if the sequence is empty Axioms lheadM empty fail lheadM lcons xs return This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lheadM",
          "normalized": "a b-\u003ec b",
          "package": "EdisonAPI",
          "signature": "s a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element at the given index.  All indexes are 0 based.\n   Signals error if the index out of bounds.\n\u003c/p\u003e\u003cpre\u003e lookup i xs@\u003cx0,...,xn-1\u003e\n   | inBounds i xs = xi\n   | otherwise = error \"ModuleName.lookup: index out of bounds\"\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enot (inBounds i xs)  ==\u003e lookup i xs = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e lookup i (append xs (lcons x ys)) = x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lookup",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Return the element at the given index All indexes are based Signals error if the index out of bounds lookup xs x0 xn-1 inBounds xs xi otherwise error ModuleName.lookup index out of bounds Axioms not inBounds xs lookup xs undefined size xs lookup append xs lcons ys This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lookup",
          "normalized": "Int-\u003ea b-\u003eb",
          "package": "EdisonAPI",
          "signature": "Int-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element at the given index.  All indexes are 0 based.\n   Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the index is out of bounds.\n\u003c/p\u003e\u003cpre\u003e lookupM i xs@\u003cx0,...,xn-1\u003e\n   | inBounds i xs = Just xi\n   | otherwise = Nothing\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enot (inBounds i xs) ==\u003e lookupM i xs = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e lookupM i (append xs (lcons x ys)) = return x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lookupM",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e m a",
          "source": "src/Data-Edison-Seq.html#lookupM",
          "type": "method"
        },
        "index": {
          "description": "Return the element at the given index All indexes are based Calls fail if the index is out of bounds lookupM xs x0 xn-1 inBounds xs Just xi otherwise Nothing Axioms not inBounds xs lookupM xs fail size xs lookupM append xs lcons ys return This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lookupM",
          "normalized": "Int-\u003ea b-\u003ec b",
          "package": "EdisonAPI",
          "signature": "Int-\u003es a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element at the given index, or the\n   default argument if the index is out of bounds.  All indexes are\n   0 based.\n\u003c/p\u003e\u003cpre\u003e lookupWithDefault d i xs@\u003cx0,...,xn-1\u003e\n   | inBounds i xs = xi\n   | otherwise = d\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enot (inBounds i xs) ==\u003e lookupWithDefault d i xs = d\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e lookupWithDefault d i (append xs (lcons x ys)) = x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lookupWithDefault",
          "package": "EdisonAPI",
          "signature": "a -\u003e Int -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#lookupWithDefault",
          "type": "method"
        },
        "index": {
          "description": "Return the element at the given index or the default argument if the index is out of bounds All indexes are based lookupWithDefault xs x0 xn-1 inBounds xs xi otherwise Axioms not inBounds xs lookupWithDefault xs size xs lookupWithDefault append xs lcons ys This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lookupWithDefault",
          "normalized": "a-\u003eInt-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "partial": "With Default",
          "signature": "a-\u003eInt-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the first element of the sequence.\n   Signals error if sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eltail empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eltail (lcons x xs) = xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "ltail",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#ltail",
          "type": "method"
        },
        "index": {
          "description": "Delete the first element of the sequence Signals error if sequence is empty Axioms ltail empty undefined ltail lcons xs xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "ltail",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:ltail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the first element of the sequence.\n   Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eltailM empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eltailM (lcons x xs) = return xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "ltailM",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m (s a)",
          "source": "src/Data-Edison-Seq.html#ltailM",
          "type": "method"
        },
        "index": {
          "description": "Delete the first element of the sequence Calls fail if the sequence is empty Axioms ltailM empty fail ltailM lcons xs return xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "ltailM",
          "normalized": "a b-\u003ec(a b)",
          "package": "EdisonAPI",
          "signature": "s a-\u003em(s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:ltailM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate a sequence into its first (leftmost) element and the\n   remaining sequence.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003elview empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elview (lcons x xs) = return (x,xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "lview",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m (a, s a)",
          "source": "src/Data-Edison-Seq.html#lview",
          "type": "method"
        },
        "index": {
          "description": "Separate sequence into its first leftmost element and the remaining sequence Calls fail if the sequence is empty Axioms lview empty fail lview lcons xs return xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "lview",
          "normalized": "a b-\u003ec(b,a b)",
          "package": "EdisonAPI",
          "signature": "s a-\u003em(a,s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:lview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the result of applying a function to\n   every element of a sequence.  Identical\n   to \u003ccode\u003efmap\u003c/code\u003e from \u003ccode\u003eFunctor\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e map f \u003cx0,...,xn-1\u003e = \u003cf x0,...,f xn-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emap f empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emap f (lcons x xs) = lcons (f x) (map f xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "map",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e s a -\u003e s b",
          "source": "src/Data-Edison-Seq.html#map",
          "type": "function"
        },
        "index": {
          "description": "Return the result of applying function to every element of sequence Identical to fmap from Functor map x0 xn-1 x0 xn-1 Axioms map empty empty map lcons xs lcons map xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "EdisonAPI",
          "signature": "(a-\u003eb)-\u003es a-\u003es b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but include the index with each element.\n   All indexes are 0 based.\n\u003c/p\u003e\u003cpre\u003e mapWithIndex f \u003cx0,...,xn-1\u003e = \u003cf 0 x0,...,f (n-1) xn-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emapWithIndex f empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emapWithIndex f (rcons x xs) = rcons (f (size xs) x) (mapWithIndex f xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "mapWithIndex",
          "package": "EdisonAPI",
          "signature": "(Int -\u003e a -\u003e b) -\u003e s a -\u003e s b",
          "source": "src/Data-Edison-Seq.html#mapWithIndex",
          "type": "method"
        },
        "index": {
          "description": "Like map but include the index with each element All indexes are based mapWithIndex x0 xn-1 x0 n-1 xn-1 Axioms mapWithIndex empty empty mapWithIndex rcons xs rcons size xs mapWithIndex xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "mapWithIndex",
          "normalized": "(Int-\u003ea-\u003eb)-\u003ec a-\u003ec b",
          "package": "EdisonAPI",
          "partial": "With Index",
          "signature": "(Int-\u003ea-\u003eb)-\u003es a-\u003es b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:mapWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the sequence is empty and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cpre\u003e null \u003cx0,...,xn-1\u003e = (n==0)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enull xs = (size xs == 0)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "null",
          "package": "EdisonAPI",
          "signature": "s a -\u003e Bool",
          "source": "src/Data-Edison-Seq.html#null",
          "type": "method"
        },
        "index": {
          "description": "Returns True if the sequence is empty and False otherwise null x0 xn-1 Axioms null xs size xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "null",
          "normalized": "a b-\u003eBool",
          "package": "EdisonAPI",
          "signature": "s a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate the elements of a sequence into those that\n   satisfy the given predicate and those that do not,\n   retaining the relative ordering of elements from the\n   original sequence.\n\u003c/p\u003e\u003cpre\u003e partition p xs = (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003epartition p xs = (filter p xs, filter (not . p) xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "partition",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e (s a, s a)",
          "source": "src/Data-Edison-Seq.html#partition",
          "type": "method"
        },
        "index": {
          "description": "Separate the elements of sequence into those that satisfy the given predicate and those that do not retaining the relative ordering of elements from the original sequence partition xs filter xs filter not xs Axioms partition xs filter xs filter not xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(b a,b a)",
          "package": "EdisonAPI",
          "signature": "(a-\u003eBool)-\u003es a-\u003e(s a,s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new element to the right/rear of a sequence\n\u003c/p\u003e\u003cpre\u003e rcons x \u003cx0,...,xn-1\u003e = \u003cx0,...,xn-1,x\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ercons x xs = append xs (singleton x)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rcons",
          "package": "EdisonAPI",
          "signature": "a -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#rcons",
          "type": "method"
        },
        "index": {
          "description": "Add new element to the right rear of sequence rcons x0 xn-1 x0 xn-1 Axioms rcons xs append xs singleton This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rcons",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "a-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reduce is similar to a fold, but combines elements in a balanced fashion.\n   The combining function should usually be associative.  If the combining\n   function is associative, the various reduce functions yield the same\n   results as the corresponding folds.\n\u003c/p\u003e\u003cp\u003eWhat is meant by \"in a balanced fashion\"?  We mean that\n   \u003ccode\u003ereduce1 (%) \u003cx0,x1,...,xn-1\u003e\u003c/code\u003e equals some complete parenthesization of\n   \u003ccode\u003ex0 % x1 % ... % xn-1\u003c/code\u003e such that the nesting depth of parentheses\n   is \u003ccode\u003eO( log n )\u003c/code\u003e.  The precise shape of this parenthesization is\n   unspecified.\n\u003c/p\u003e\u003cpre\u003e reduce1 f \u003cx\u003e = x\n reduce1 f \u003cx0,...,xn-1\u003e =\n     f (reduce1 f \u003cx0,...,xi\u003e) (reduce1 f \u003cxi+1,...,xn-1\u003e)\n\u003c/pre\u003e\u003cp\u003efor some \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003e 0 \u003c= i && i \u003c n-1 \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAlthough the exact value of i is unspecified it tends toward \u003ccode\u003en/2\u003c/code\u003e\n   so that the depth of calls to \u003ccode\u003ef\u003c/code\u003e is at most logarithmic.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ereduce\u003c/code\u003e* are some of the only sequence operations for which\n   different implementations are permitted to yield different answers.  Also\n   note that a single implementation may choose different parenthisizations\n   for different sequences, even if they are the same length.  This will\n   typically happen when the sequences were constructed differently.\n\u003c/p\u003e\u003cp\u003eThe canonical applications of the reduce functions are algorithms like\n   merge sort where:\n\u003c/p\u003e\u003cpre\u003e mergesort xs = reducer merge empty (map singleton xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ereduce1 f empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ereduce1 f xs = foldr1 f xs = foldl1 f xs\u003c/code\u003e for associative \u003ccode\u003ef\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereduce1 f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reduce1",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reduce1",
          "type": "method"
        },
        "index": {
          "description": "reduce is similar to fold but combines elements in balanced fashion The combining function should usually be associative If the combining function is associative the various reduce functions yield the same results as the corresponding folds What is meant by in balanced fashion We mean that reduce1 x0 x1 xn-1 equals some complete parenthesization of x0 x1 xn-1 such that the nesting depth of parentheses is log The precise shape of this parenthesization is unspecified reduce1 reduce1 x0 xn-1 reduce1 x0 xi reduce1 xi xn-1 for some such that n-1 Although the exact value of is unspecified it tends toward so that the depth of calls to is at most logarithmic Note that reduce are some of the only sequence operations for which different implementations are permitted to yield different answers Also note that single implementation may choose different parenthisizations for different sequences even if they are the same length This will typically happen when the sequences were constructed differently The canonical applications of the reduce functions are algorithms like merge sort where mergesort xs reducer merge empty map singleton xs Axioms reduce1 empty undefined reduce1 xs foldr1 xs foldl1 xs for associative reduce1 is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reduce1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003ereduce1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ && forall a. f _|_ a = _|_ ==\u003e\n          reduce1 f xs = reduce1' f xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereduce1' f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reduce1'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reduce1%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of reduce1 Axioms forall forall reduce1 xs reduce1 xs reduce1 is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reduce1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reduce1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereduce1\u003c/a\u003e\u003c/code\u003e for additional notes.\n\u003c/p\u003e\u003cpre\u003e reducel f x xs = reduce1 f (rcons x xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ereducel f c xs = foldl f c xs\u003c/code\u003e for associative \u003ccode\u003ef\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereducel f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reducel",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reducel",
          "type": "method"
        },
        "index": {
          "description": "See reduce1 for additional notes reducel xs reduce1 rcons xs Axioms reducel xs foldl xs for associative reducel is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reducel",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reducel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003ereducel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereduce1\u003c/a\u003e\u003c/code\u003e for additional notes.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ && forall a. f _|_ a = _|_ ==\u003e\n          reducel f x xs = reducel' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereducel' f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reducel'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reducel%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of reducel See reduce1 for additional notes Axioms forall forall reducel xs reducel xs reducel is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reducel'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reducel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereduce1\u003c/a\u003e\u003c/code\u003e for additional notes.\n\u003c/p\u003e\u003cpre\u003e reducer f x xs = reduce1 f (cons x xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ereducer f c xs = foldr f c xs\u003c/code\u003e for associative \u003ccode\u003ef\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereducer f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reducer",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reducer",
          "type": "method"
        },
        "index": {
          "description": "See reduce1 for additional notes reducer xs reduce1 cons xs Axioms reducer xs foldr xs for associative reducer is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reducer",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003ereducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereduce1\u003c/a\u003e\u003c/code\u003e for additional notes.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eforall a. f a _|_ = _|_ && forall a. f _|_ a = _|_ ==\u003e\n          reducer f x xs = reducer' f x xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ereducer' f\u003c/code\u003e is unambiguous iff \u003ccode\u003ef\u003c/code\u003e is an associative function.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reducer'",
          "package": "EdisonAPI",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#reducer%27",
          "type": "method"
        },
        "index": {
          "description": "Strict variant of reducer See reduce1 for additional notes Axioms forall forall reducer xs reducer xs reducer is unambiguous iff is an associative function Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reducer'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "EdisonAPI",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003es a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reducer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the order of a sequence\n\u003c/p\u003e\u003cpre\u003e reverse \u003cx0,...,xn-1\u003e = \u003cxn-1,...,x0\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ereverse empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ereverse (lcons x xs) = rcons x (reverse xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reverse",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#reverse",
          "type": "method"
        },
        "index": {
          "description": "Reverse the order of sequence reverse x0 xn-1 xn-1 x0 Axioms reverse empty empty reverse lcons xs rcons reverse xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reverse",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a sequence onto the front of another sequence.\n\u003c/p\u003e\u003cpre\u003e reverseOnto \u003cx0,...,xn-1\u003e \u003cy0,...,ym-1\u003e = \u003cxn-1,...,x0,y0,...,ym-1\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ereverseOnto xs ys = append (reverse xs) ys\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "reverseOnto",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#reverseOnto",
          "type": "method"
        },
        "index": {
          "description": "Reverse sequence onto the front of another sequence reverseOnto x0 xn-1 y0 ym-1 xn-1 x0 y0 ym-1 Axioms reverseOnto xs ys append reverse xs ys This function is always unambiguous Default running time n1",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "reverseOnto",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "partial": "Onto",
          "signature": "s a-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:reverseOnto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the last (rightmost) element of the sequence.\n   Signals error if sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003erhead empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003erhead (rcons x xs) = x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rhead",
          "package": "EdisonAPI",
          "signature": "s a -\u003e a",
          "source": "src/Data-Edison-Seq.html#rhead",
          "type": "method"
        },
        "index": {
          "description": "Return the last rightmost element of the sequence Signals error if sequence is empty Axioms rhead empty undefined rhead rcons xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rhead",
          "normalized": "a b-\u003eb",
          "package": "EdisonAPI",
          "signature": "s a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the last element of the sequence.\n    Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003erheadM empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003erheadM (rcons x xs) = return x\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rheadM",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m a",
          "source": "src/Data-Edison-Seq.html#rheadM",
          "type": "method"
        },
        "index": {
          "description": "Returns the last element of the sequence Calls fail if the sequence is empty Axioms rheadM empty fail rheadM rcons xs return This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rheadM",
          "normalized": "a b-\u003ec b",
          "package": "EdisonAPI",
          "signature": "s a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the last (rightmost) element of the sequence.\n   Signals an error if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ertail empty = undefined\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ertail (rcons x xs) = xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rtail",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#rtail",
          "type": "method"
        },
        "index": {
          "description": "Delete the last rightmost element of the sequence Signals an error if the sequence is empty Axioms rtail empty undefined rtail rcons xs xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rtail",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rtail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the last (rightmost) element of the sequence.\n   Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e of the sequence is empty\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ertailM empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ertailM (rcons x xs) = return xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rtailM",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m (s a)",
          "source": "src/Data-Edison-Seq.html#rtailM",
          "type": "method"
        },
        "index": {
          "description": "Delete the last rightmost element of the sequence Calls fail of the sequence is empty Axioms rtailM empty fail rtailM rcons xs return xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rtailM",
          "normalized": "a b-\u003ec(a b)",
          "package": "EdisonAPI",
          "signature": "s a-\u003em(s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rtailM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate a sequence into its last (rightmost) element and the\n   remaining sequence.  Calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e if the sequence is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003erview empty = fail\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003erview (rcons x xs) = return (x,xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "rview",
          "package": "EdisonAPI",
          "signature": "s a -\u003e m (a, s a)",
          "source": "src/Data-Edison-Seq.html#rview",
          "type": "method"
        },
        "index": {
          "description": "Separate sequence into its last rightmost element and the remaining sequence Calls fail if the sequence is empty Axioms rview empty fail rview rcons xs return xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "rview",
          "normalized": "a b-\u003ec(b,a b)",
          "package": "EdisonAPI",
          "signature": "s a-\u003em(a,s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:rview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a singleton sequence.  Identical to \u003ccode\u003ereturn\u003c/code\u003e\n   from \u003ccode\u003eMonad\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e singleton x = \u003cx\u003e\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esingleton x = lcons x empty = rcons x empty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( 1 )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "singleton",
          "package": "EdisonAPI",
          "signature": "a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton sequence Identical to return from Monad singleton Axioms singleton lcons empty rcons empty This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "singleton",
          "normalized": "a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "a-\u003es a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of a sequence.\n\u003c/p\u003e\u003cpre\u003e size \u003cx0,...,xn-1\u003e = n\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esize empty = 0\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize (lcons x xs) = 1 + size xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "size",
          "package": "EdisonAPI",
          "signature": "s a -\u003e Int",
          "source": "src/Data-Edison-Seq.html#size",
          "type": "method"
        },
        "index": {
          "description": "Returns the length of sequence size x0 xn-1 Axioms size empty size lcons xs size xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "size",
          "normalized": "a b-\u003eInt",
          "package": "EdisonAPI",
          "signature": "s a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a sequence into a prefix of length \u003ccode\u003ei\u003c/code\u003e\n   and the remaining sequence.  Behaves the same\n   as the corresponding calls to \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e\n   if \u003ccode\u003ei\u003c/code\u003e is negative or too large.\n\u003c/p\u003e\u003cpre\u003e splitAt i xs\n  | i \u003c 0  = (\u003c\u003e           , \u003cx0,...,xn-1\u003e)\n  | i \u003c n  = (\u003cx0,...,xi-1\u003e, \u003cxi,...,xn-1\u003e)\n  | i \u003e= n = (\u003cx0,...,xn-1\u003e, \u003c\u003e           )\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esplitAt i xs = (take i xs,drop i xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "splitAt",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e (s a, s a)",
          "source": "src/Data-Edison-Seq.html#splitAt",
          "type": "method"
        },
        "index": {
          "description": "Split sequence into prefix of length and the remaining sequence Behaves the same as the corresponding calls to take and drop if is negative or too large splitAt xs x0 xn-1 x0 xi-1 xi xn-1 x0 xn-1 Axioms splitAt xs take xs drop xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "splitAt",
          "normalized": "Int-\u003ea b-\u003e(a b,a b)",
          "package": "EdisonAPI",
          "partial": "At",
          "signature": "Int-\u003es a-\u003e(s a,s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a sequence into the maximal prefix of elements\n   satisfying the given predicate, and the remaining sequence.\n\u003c/p\u003e\u003cpre\u003e splitWhile p \u003cx0,...,xn-1\u003e = (\u003cx0,...,xi-1\u003e, \u003cxi,...,xn-1\u003e)\n   where i = min j such that p xj (or n if no such j)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esplitWhile p xs = (takeWhile p xs,dropWhile p xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "splitWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e (s a, s a)",
          "source": "src/Data-Edison-Seq.html#splitWhile",
          "type": "method"
        },
        "index": {
          "description": "Split sequence into the maximal prefix of elements satisfying the given predicate and the remaining sequence splitWhile x0 xn-1 x0 xi-1 xi xn-1 where min such that xj or if no such Axioms splitWhile xs takeWhile xs dropWhile xs This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "splitWhile",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(b a,b a)",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003es a-\u003e(s a,s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:splitWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemanticly, this function is a partial identity function.  If the\n   datastructure is infinite in size or contains exceptions or non-termination\n   in the structure itself, then \u003ccode\u003estrict\u003c/code\u003e will result in bottom.  Operationally,\n   this function walks the datastructure forcing any closures.  Elements contained\n   in the sequence are \u003cem\u003enot\u003c/em\u003e forced.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003estrict xs = xs\u003c/code\u003e OR \u003ccode\u003estrict xs = _|_\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "strict",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#strict",
          "type": "method"
        },
        "index": {
          "description": "Semanticly this function is partial identity function If the datastructure is infinite in size or contains exceptions or non-termination in the structure itself then strict will result in bottom Operationally this function walks the datastructure forcing any closures Elements contained in the sequence are not forced Axioms strict xs xs OR strict xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "strict",
          "normalized": "a b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "s a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estrict\u003c/a\u003e\u003c/code\u003e, this function walks the datastructure forcing closures.\n   However, \u003ccode\u003estrictWith\u003c/code\u003e will additionally apply the given function to the\n   sequence elements, force the result using \u003ccode\u003eseq\u003c/code\u003e, and then ignore it.\n   This function can be used to perform various levels of forcing on the\n   sequence elements.  In particular:\n\u003c/p\u003e\u003cpre\u003e strictWith id xs\n\u003c/pre\u003e\u003cp\u003ewill force the spine of the datastructure and reduce each element to WHNF.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e forall \u003ccode\u003ef :: a -\u003e b\u003c/code\u003e, \u003ccode\u003estrictWith f xs = xs\u003c/code\u003e OR \u003ccode\u003estrictWith f xs = _|_\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: unbounded (forcing element closures can take arbitrairly long)\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "strictWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#strictWith",
          "type": "method"
        },
        "index": {
          "description": "Similar to strict this function walks the datastructure forcing closures However strictWith will additionally apply the given function to the sequence elements force the result using seq and then ignore it This function can be used to perform various levels of forcing on the sequence elements In particular strictWith id xs will force the spine of the datastructure and reduce each element to WHNF Axioms forall strictWith xs xs OR strictWith xs This function is always unambiguous Default running time unbounded forcing element closures can take arbitrairly long",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "strictWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec a",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:strictWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method to facilitate unit testing.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the structural\n   invariants of the implementation hold for the given sequence.  If\n   this function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, it represents a bug in the implementation.\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "structuralInvariant",
          "package": "EdisonAPI",
          "signature": "s a -\u003e Bool",
          "source": "src/Data-Edison-Seq.html#structuralInvariant",
          "type": "method"
        },
        "index": {
          "description": "method to facilitate unit testing Returns True if the structural invariants of the implementation hold for the given sequence If this function returns False it represents bug in the implementation",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "structuralInvariant",
          "normalized": "a b-\u003eBool",
          "package": "EdisonAPI",
          "partial": "Invariant",
          "signature": "s a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:structuralInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a subsequence from a sequence.  The integer\n   arguments are \"start index\" and \"length\" NOT\n   \"start index\" and \"end index\".  Behaves the same\n   as the corresponding calls to \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e if the\n   start index or length are negative or too large.\n\u003c/p\u003e\u003cpre\u003e subseq i len xs = take len (drop i xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esubseq i len xs = take len (drop i xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i + len )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "subseq",
          "package": "EdisonAPI",
          "signature": "Int -\u003e Int -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#subseq",
          "type": "method"
        },
        "index": {
          "description": "Extract subsequence from sequence The integer arguments are start index and length NOT start index and end index Behaves the same as the corresponding calls to take and drop if the start index or length are negative or too large subseq len xs take len drop xs Axioms subseq len xs take len drop xs This function is always unambiguous Default running time len",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "subseq",
          "normalized": "Int-\u003eInt-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "Int-\u003eInt-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:subseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a prefix of length \u003ccode\u003ei\u003c/code\u003e from the sequence.  Return\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ei\u003c/code\u003e is negative, or the entire sequence if \u003ccode\u003ei\u003c/code\u003e\n   is too large.\n\u003c/p\u003e\u003cpre\u003e take i xs = fst (splitAt i xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ei \u003c 0        ==\u003e take i xs = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ei \u003e size xs  ==\u003e take i xs = xs\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e take i (append xs ys) = xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "take",
          "package": "EdisonAPI",
          "signature": "Int -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#take",
          "type": "method"
        },
        "index": {
          "description": "Extract prefix of length from the sequence Return empty if is negative or the entire sequence if is too large take xs fst splitAt xs Axioms take xs empty size xs take xs xs size xs take append xs ys xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "take",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "Int-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the maximal prefix of elements satisfying the\n   given predicate.\n\u003c/p\u003e\u003cpre\u003e takeWhile p xs = fst (splitWhile p xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003etakeWhile p empty = empty\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etakeWhile p (lcons x xs) = if p x\n       then lcons x (takeWhile p xs)\n       else empty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "takeWhile",
          "package": "EdisonAPI",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#takeWhile",
          "type": "method"
        },
        "index": {
          "description": "Extract the maximal prefix of elements satisfying the given predicate takeWhile xs fst splitWhile xs Axioms takeWhile empty empty takeWhile lcons xs if then lcons takeWhile xs else empty This function is always unambiguous Default running time where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence to a list.\n\u003c/p\u003e\u003cpre\u003e toList \u003cx0,...,xn-1\u003e = [x0,...,xn-1]\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003etoList empty = []\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etoList (lcons x xs) = x : toList xs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "toList",
          "package": "EdisonAPI",
          "signature": "s a -\u003e [a]",
          "source": "src/Data-Edison-Seq.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Convert sequence to list toList x0 xn-1 x0 xn-1 Axioms toList empty toList lcons xs toList xs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "EdisonAPI",
          "partial": "List",
          "signature": "s a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a sequence of pairs into a pair of sequences.\n\u003c/p\u003e\u003cpre\u003e unzip xs = (map fst xs, map snd xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunzip xys = unzipWith fst snd xys\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "unzip",
          "package": "EdisonAPI",
          "signature": "s (a, b) -\u003e (s a, s b)",
          "source": "src/Data-Edison-Seq.html#unzip",
          "type": "method"
        },
        "index": {
          "description": "Transpose sequence of pairs into pair of sequences unzip xs map fst xs map snd xs Axioms unzip xys unzipWith fst snd xys This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "unzip",
          "normalized": "a(b,c)-\u003e(a b,a c)",
          "package": "EdisonAPI",
          "signature": "s(a,b)-\u003e(s a,s b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a sequence of triples into a triple of sequences\n\u003c/p\u003e\u003cpre\u003e unzip3 xs = (map fst3 xs, map snd3 xs, map thd3 xs)\n    where fst3 (x,y,z) = x\n          snd3 (x,y,z) = y\n          thd3 (x,y,z) = z\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunzip3 xyzs = unzipWith3 fst3 snd3 thd3 xyzs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( n )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "unzip3",
          "package": "EdisonAPI",
          "signature": "s (a, b, c) -\u003e (s a, s b, s c)",
          "source": "src/Data-Edison-Seq.html#unzip3",
          "type": "method"
        },
        "index": {
          "description": "Transpose sequence of triples into triple of sequences unzip3 xs map fst3 xs map snd3 xs map thd3 xs where fst3 snd3 thd3 Axioms unzip3 xyzs unzipWith3 fst3 snd3 thd3 xyzs This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "unzip3",
          "normalized": "a(b,c,d)-\u003e(a b,a c,a d)",
          "package": "EdisonAPI",
          "signature": "s(a,b,c)-\u003e(s a,s b,s c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap two functions across every element of a sequence,\n   yielding a pair of sequences\n\u003c/p\u003e\u003cpre\u003e unzipWith f g xs = (map f xs, map g xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunzipWith f g xs = (map f xs, map g xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the maximum running time\n     of \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "unzipWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e s a -\u003e (s b, s c)",
          "source": "src/Data-Edison-Seq.html#unzipWith",
          "type": "method"
        },
        "index": {
          "description": "Map two functions across every element of sequence yielding pair of sequences unzipWith xs map xs map xs Axioms unzipWith xs map xs map xs This function is always unambiguous Default running time where is the maximum running time of and",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "unzipWith",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ed a-\u003e(d b,d c)",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003es a-\u003e(s b,s c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:unzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap three functions across every element of a sequence,\n   yielding a triple of sequences.\n\u003c/p\u003e\u003cpre\u003e unzipWith3 f g h xs = (map f xs, map g xs, map h xs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eunzipWith3 f g h xs = (map f xs,map g xs,map h xs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * n )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the maximum running time\n     of \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003eg\u003c/code\u003e, and \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "unzipWith3",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (a -\u003e d) -\u003e s a -\u003e (s b, s c, s d)",
          "source": "src/Data-Edison-Seq.html#unzipWith3",
          "type": "method"
        },
        "index": {
          "description": "Map three functions across every element of sequence yielding triple of sequences unzipWith3 xs map xs map xs map xs Axioms unzipWith3 xs map xs map xs map xs This function is always unambiguous Default running time where is the maximum running time of and",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "unzipWith3",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003ee a-\u003e(e b,e c,e d)",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003es a-\u003e(s b,s c,s d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:unzipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the element at the given index, or return\n   the original sequence if the index is out of bounds.\n   All indexes are 0 based.\n\u003c/p\u003e\u003cpre\u003e update i y xs@\u003cx0,...,xn-1\u003e\n   | inBounds i xs = \u003cx0,...xi-1,y,xi+1,...,xn-1\u003e\n   | otherwise = xs\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003enot (inBounds i xs) ==\u003e update i y xs = xs\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esize xs == i ==\u003e update i y (append xs (lcons x ys)) =\n      append xs (lcons y ys)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( i )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "update",
          "package": "EdisonAPI",
          "signature": "Int -\u003e a -\u003e s a -\u003e s a",
          "source": "src/Data-Edison-Seq.html#update",
          "type": "method"
        },
        "index": {
          "description": "Replace the element at the given index or return the original sequence if the index is out of bounds All indexes are based update xs x0 xn-1 inBounds xs x0 xi-1 xi xn-1 otherwise xs Axioms not inBounds xs update xs xs size xs update append xs lcons ys append xs lcons ys This function is always unambiguous Default running time",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "update",
          "normalized": "Int-\u003ea-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "Int-\u003ea-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two sequences into a sequence of pairs.  If the\n   sequences are different lengths, the excess elements of the\n   longer sequence is discarded.\n\u003c/p\u003e\u003cpre\u003e zip \u003cx0,...,xn-1\u003e \u003cy0,...,ym-1\u003e = \u003c(x0,y0),...,(xj-1,yj-1)\u003e\n     where j = min {n,m}\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ezip xs ys = zipWith (,) xs ys\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( min( n1, n2 ) )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "zip",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s b -\u003e s (a, b)",
          "source": "src/Data-Edison-Seq.html#zip",
          "type": "method"
        },
        "index": {
          "description": "Combine two sequences into sequence of pairs If the sequences are different lengths the excess elements of the longer sequence is discarded zip x0 xn-1 y0 ym-1 x0 y0 xj-1 yj-1 where min Axioms zip xs ys zipWith xs ys This function is always unambiguous Default running time min n1 n2",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "zip",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "EdisonAPI",
          "signature": "s a-\u003es b-\u003es(a,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, but combines three sequences into triples.\n\u003c/p\u003e\u003cpre\u003e zip3 \u003cx0,...,xn-1\u003e \u003cy0,...,ym-1\u003e \u003cz0,...,zk-1\u003e = \n      \u003c(x0,y0,z0),...,(xj-1,yj-1,zj-1)\u003e\n    where j = min {n,m,k}\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ezip3 xs ys zs = zipWith3 (,,) xs ys zs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( min( n1, n2, n3 ) )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "zip3",
          "package": "EdisonAPI",
          "signature": "s a -\u003e s b -\u003e s c -\u003e s (a, b, c)",
          "source": "src/Data-Edison-Seq.html#zip3",
          "type": "method"
        },
        "index": {
          "description": "Like zip but combines three sequences into triples zip3 x0 xn-1 y0 ym-1 z0 zk-1 x0 y0 z0 xj-1 yj-1 zj-1 where min Axioms zip3 xs ys zs zipWith3 xs ys zs This function is always unambiguous Default running time min n1 n2 n3",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "zip3",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea(b,c,d)",
          "package": "EdisonAPI",
          "signature": "s a-\u003es b-\u003es c-\u003es(a,b,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two sequences into a single sequence by mapping\n   a combining function across corresponding elements.  If\n   the sequences are of different lengths, the excess elements\n   of the longer sequence are discarded.\n\u003c/p\u003e\u003cpre\u003e zipWith f xs ys = map (uncurry f) (zip xs ys)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ezipWith f (lcons x xs) (lcons y ys) =\n     lcons (f x y) (zipWith f xs ys)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(null xs || null ys) ==\u003e zipWith xs ys = empty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * min( n1, n2 ) )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "zipWith",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e c) -\u003e s a -\u003e s b -\u003e s c",
          "source": "src/Data-Edison-Seq.html#zipWith",
          "type": "method"
        },
        "index": {
          "description": "Combine two sequences into single sequence by mapping combining function across corresponding elements If the sequences are of different lengths the excess elements of the longer sequence are discarded zipWith xs ys map uncurry zip xs ys Axioms zipWith lcons xs lcons ys lcons zipWith xs ys null xs null ys zipWith xs ys empty This function is always unambiguous Default running time min n1 n2 where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003es a-\u003es b-\u003es c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e but for a three-place function and three\n   sequences.\n\u003c/p\u003e\u003cpre\u003e zipWith3 f xs ys zs = map (uncurry f) (zip3 xs ys zs)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAxioms:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ezipWith3 (lcons x xs) (lcons y ys) (lcons z zs) =\n      lcons (f x y z) (zipWith3 f xs ys zs)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is always \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eDefault running time: \u003ccode\u003eO( t * min( n1, n2, n3 ) )\u003c/code\u003e\n     where \u003ccode\u003et\u003c/code\u003e is the running time of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison.Seq",
          "name": "zipWith3",
          "package": "EdisonAPI",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e s a -\u003e s b -\u003e s c -\u003e s d",
          "source": "src/Data-Edison-Seq.html#zipWith3",
          "type": "method"
        },
        "index": {
          "description": "Like zipWith but for three-place function and three sequences zipWith3 xs ys zs map uncurry zip3 xs ys zs Axioms zipWith3 lcons xs lcons ys lcons zs lcons zipWith3 xs ys zs This function is always unambiguous Default running time min n1 n2 n3 where is the running time of",
          "hierarchy": "Data Edison Seq",
          "module": "Data.Edison.Seq",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "EdisonAPI",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003es a-\u003es b-\u003es c-\u003es d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Seq.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module introduces a number of infix symbols which are aliases\n   for some of the operations in the sequence and set abstractions.\n   For several, the argument orders are reversed to more closely\n   match usual symbolic usage.\n\u003c/p\u003e\u003cp\u003eThe symbols are intended to evoke the the operations they\n   represent.  Unfortunately, ASCII is pretty limited, and Haskell 98\n   only allocates a few symbols to the operator lexical class.\n   Thus, some of the operators are less evocative than one would\n   like.  A future version of Edison may introduce unicode operators, which\n   will allow a wider range of operations to be represented symbolicly.\n\u003c/p\u003e\u003cp\u003eUnlike most of the modules in Edison, this module is intended to be\n   imported unqualified.  However, the definition of \u003ccode\u003e(++)\u003c/code\u003e will conflict\n   with the Prelude definition.  Either this definition or the Prelude\n   definition will need to be imported \u003ccode\u003ehiding ( (++) )\u003c/code\u003e.  This definition\n   subsumes the Prelude definition, and can be safely used in place of it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison.Sym",
          "name": "Sym",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Sym.html",
          "type": "module"
        },
        "index": {
          "description": "This module introduces number of infix symbols which are aliases for some of the operations in the sequence and set abstractions For several the argument orders are reversed to more closely match usual symbolic usage The symbols are intended to evoke the the operations they represent Unfortunately ASCII is pretty limited and Haskell only allocates few symbols to the operator lexical class Thus some of the operators are less evocative than one would like future version of Edison may introduce unicode operators which will allow wider range of operations to be represented symbolicly Unlike most of the modules in Edison this module is intended to be imported unqualified However the definition of will conflict with the Prelude definition Either this definition or the Prelude definition will need to be imported hiding This definition subsumes the Prelude definition and can be safely used in place of it",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "Sym",
          "package": "EdisonAPI",
          "partial": "Sym",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubset test operation.  Identical to \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(|=)",
          "package": "EdisonAPI",
          "signature": "set -\u003e set -\u003e Bool",
          "source": "src/Data-Edison-Sym.html#%7C%3D",
          "type": "function"
        },
        "index": {
          "description": "Subset test operation Identical to subset",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(|=) |=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "EdisonAPI",
          "signature": "set-\u003eset-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight (rear) cons on a sequence.  The new element appears on the right.\n   Identical to \u003ccode\u003e\u003ca\u003ercons\u003c/a\u003e\u003c/code\u003e with reversed arguments.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(|\u003e)",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e a -\u003e seq a",
          "source": "src/Data-Edison-Sym.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Right rear cons on sequence The new element appears on the right Identical to rcons with reversed arguments",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(|\u003e) |\u003e",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "EdisonAPI",
          "signature": "seq a-\u003ea-\u003eseq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an element in a sequence.  Identical to \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e with\n   reversed arguments.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(!)",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e Int -\u003e a",
          "source": "src/Data-Edison-Sym.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Lookup an element in sequence Identical to lookup with reversed arguments",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(!) !",
          "normalized": "a b-\u003eInt-\u003eb",
          "package": "EdisonAPI",
          "signature": "seq a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two sequences.  Identical to \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.  Subsumes the Prelude\n   definition.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(++)",
          "package": "EdisonAPI",
          "signature": "seq a -\u003e seq a -\u003e seq a",
          "source": "src/Data-Edison-Sym.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two sequences Identical to append Subsumes the Prelude definition",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(++) ++",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "EdisonAPI",
          "signature": "seq a-\u003eseq a-\u003eseq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet intersection.  Identical to \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(/\\)",
          "package": "EdisonAPI",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Edison-Sym.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "Set intersection Identical to intersection",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(/\\) /\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "set-\u003eset-\u003eset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft (front) cons on a sequence.  The new element appears on the left.\n   Identical to \u003ccode\u003e\u003ca\u003elcons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(\u003c|)",
          "package": "EdisonAPI",
          "signature": "a -\u003e seq a -\u003e seq a",
          "source": "src/Data-Edison-Sym.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Left front cons on sequence The new element appears on the left Identical to lcons",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "EdisonAPI",
          "signature": "a-\u003eseq a-\u003eseq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet union.  Identical to \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(\\/)",
          "package": "EdisonAPI",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Edison-Sym.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Set union Identical to union",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(\\/) \\/",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "set-\u003eset-\u003eset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet difference.  Identical to \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison.Sym",
          "name": "(\\\\)",
          "package": "EdisonAPI",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Edison-Sym.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Set difference Identical to difference",
          "hierarchy": "Data Edison Sym",
          "module": "Data.Edison.Sym",
          "name": "(\\\\) \\\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "EdisonAPI",
          "signature": "set-\u003eset-\u003eset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison-Sym.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEdison is a library of purely functional data structures written by\n   Chris Okasaki.  It is named after Thomas Alva Edison and for the\n   mnemonic value \u003cem\u003eED\u003c/em\u003ei\u003cem\u003eS\u003c/em\u003eon (\u003cem\u003eE\u003c/em\u003efficent \u003cem\u003eD\u003c/em\u003eata \u003cem\u003eS\u003c/em\u003etructures).\n\u003c/p\u003e\u003cp\u003eEdison provides several families of abstractions, each with\n   multiple implementations.  The main abstractions provided by Edison are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eSequences\u003c/em\u003e such as stacks, queues, and dequeues,\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eCollections\u003c/em\u003e such as sets, bags and heaps, and\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eAssociative Collections\u003c/em\u003e such as finite maps and priority queues\n     where the priority and element are distinct.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eConventions:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEach data structure is implemented as a separate module.  These modules\n   should always be imported \u003ccode\u003equalified\u003c/code\u003e to prevent a flood of name clashes,\n   and it is recommended to rename the module using the \u003ccode\u003eas\u003c/code\u003e keyword to reduce\n   the overhead of qualified names and to make substituting one implementation\n   for another as painless as possible.\n\u003c/p\u003e\u003cp\u003eNames have been chosen to match standard usage as much as possible.  This\n   means that operations for abstractions frequently share the same name\n   (for example, \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003enull\u003c/code\u003e, \u003ccode\u003esize\u003c/code\u003e, etc).  It also means that in many\n   cases names have been reused from the Prelude.  However, the use of\n   \u003ccode\u003equalified\u003c/code\u003e imports will prevent name reuse from becoming name clashes.  If\n   for some reason you chose to import an Edison data structure unqualified,\n   you will likely need to import the Prelude \u003ccode\u003ehiding\u003c/code\u003e the relevant names.\n\u003c/p\u003e\u003cp\u003eEdison modules also frequently share type names.  For example, most sequence\n   type constructors are named \u003ccode\u003eSeq\u003c/code\u003e.  This additionally aids substituting\n   implementations by simply importing a different module.\n\u003c/p\u003e\u003cp\u003eArgument orders are selected with the following points in mind:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003ePartial application:\u003c/em\u003e arguments more likely to be static usually\n     appear before other arguments in order to facilitate partial\n     application.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eCollection appears last:\u003c/em\u003e in all cases where an operation queries a\n     single collection or modifies an existing collection, the collection\n     argument will appear last.  This is something of a de facto standard\n     for Haskell datastructure libraries\n     and lends a degree of consistency to the API.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eMost usual order:\u003c/em\u003e where an operation represents a well-known\n     mathematical function on more than one datastructure, the arguments\n     are chosen to match the most usual argument order for the function.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eType classes:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEach family of abstractions is defined as a set of classes: a main class\n   that every implementation of that abstraction should support and several\n   auxiliary subclasses that an implementation may or may not support. However,\n   not all applications require the power of type classes, so each method\n   is also directly accessible from the implementation module.  Thus you can\n   choose to use overloading or not, as appropriate for your particular\n   application.\n\u003c/p\u003e\u003cp\u003eDocumentation about the behavior of data structure operations is defined\n   in the modules \u003ca\u003eData.Edison.Seq\u003c/a\u003e, \u003ca\u003eData.Edison.Coll\u003c/a\u003e and\n   \u003ca\u003eData.Edison.Assoc\u003c/a\u003e.  Implementations are required to respect\n   the descriptions and axioms found in these modules.  In some cases time\n   complexity is also given.  Implementations may differ from these time\n   complexities; if so, the differences will be given in the documentation for\n   the individual implementation module.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on Eq and Ord instances:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eMany Edison data structures require \u003ccode\u003eEq\u003c/code\u003e or \u003ccode\u003eOrd\u003c/code\u003e contexts to define equivalence\n   and total ordering on elements or keys.  Edison makes the following assumptions\n   about all such required instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An \u003ccode\u003eEq\u003c/code\u003e instance correctly defines an equivalence relation (but not necessarily\n     structural equality); that is, we assume \u003ccode\u003e(==)\u003c/code\u003e (considered as a\n     relation) is reflexive, symmetric and transitive, but allow that equivalent\n     items may be distinguishable by other means.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003eOrd\u003c/code\u003e instance correctly defines a total order which is consistent with\n     the \u003ccode\u003eEq\u003c/code\u003e instance for that type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese assumptions correspond to the usual meanings assigned to these classes.  If\n   an Edison data structure is used with an \u003ccode\u003eEq\u003c/code\u003e or \u003ccode\u003eOrd\u003c/code\u003e instance which violates these\n   assumptions, then the behavior of that data structure is undefined.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on Read and Show instances:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe usual Haskell convention for \u003ccode\u003eRead\u003c/code\u003e and \u003ccode\u003eShow\u003c/code\u003e instances (as championed by the\n   Haskell \"deriving\" mechanism), is that \u003ccode\u003eshow\u003c/code\u003e generates a string which is a\n   valid Haskell expression built up\n   using the data type's data constructors such that, if interpreted as Haskell code, the\n   string would generate an identical data item.  Furthermore, the derived  \u003ccode\u003eRead\u003c/code\u003e\n   instances are able to parse such strings, such that \u003ccode\u003e(read . show) === id\u003c/code\u003e.\n   So, derived instances of \u003ccode\u003eRead\u003c/code\u003e and \u003ccode\u003eShow\u003c/code\u003e exhibit\n   the following useful properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eread\u003c/code\u003e and \u003ccode\u003eshow\u003c/code\u003e are complementary; that is, \u003ccode\u003eread\u003c/code\u003e is a useful inverse for \u003ccode\u003eshow\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eshow\u003c/code\u003e generates a string which is legal Haskell code representing the data item\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor concrete data types, the deriving mechanism is usually quite sufficient.\n   However, for abstract types the derived \u003ccode\u003eRead\u003c/code\u003e instance may allow users to create data\n   which violates invariants. Furthermore, the strings resulting from \u003ccode\u003eshow\u003c/code\u003e reference hidden\n   data constructors which violates good software engineering principles and also\n   cannot be compiled because the constructors are not available outside the defining module.\n\u003c/p\u003e\u003cp\u003eEdison avoids most of these problems and still maintains the above useful properties by\n   doing conversions to and from lists and inserting explicit calls to the list conversion\n   operations.  The corresponding \u003ccode\u003eRead\u003c/code\u003e instance strips the list conversion call before\n   parsing the list.  In this way, private data constructors are not revealed and \u003ccode\u003eshow\u003c/code\u003e strings\n   are still legal, compilable Haskell code.  Furthermore, the showed strings gain a degree of\n   independence from the underlying datastructure implementation.\n\u003c/p\u003e\u003cp\u003eFor example, calling \u003ccode\u003eshow\u003c/code\u003e on an empty Banker's queue will result in the following string:\n\u003c/p\u003e\u003cpre\u003e Data.Edison.Seq.BankersQueue.fromList []\n\u003c/pre\u003e\u003cp\u003eDatatypes which are not native Edison data structures (such as StandardSet and StandardMap)\n   may or may not provide \u003ccode\u003eRead\u003c/code\u003e or \u003ccode\u003eShow\u003c/code\u003e instances and, if they exist, they may or may\n   not also provide the properties that Edison native \u003ccode\u003eRead\u003c/code\u003e and \u003ccode\u003eShow\u003c/code\u003e instances do.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on time complexities:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSome Edison data structures (only the sequences currently) have detailed time complexity\n   information.  Unless otherwise stated, these are amortized time complexities, assuming\n   persistent usage of the datastructure.  Much of this data comes from:\n\u003c/p\u003e\u003cp\u003eMartin Holters. \u003cem\u003eEfficent Data Structures in a Lazy Functional Language\u003c/em\u003e.  Master's Thesis.\n   Chalmers University of Technology, Sweden. 2003.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on unsafe functions:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere are a number of different notions of what constitutes an unsafe function.\n   In Haskell, a function is generally called \"unsafe\" if it can subvert\n   type safety or referential integrity, such as \u003ccode\u003eunsafePerformIO\u003c/code\u003e or \u003ccode\u003eunsafeCoerce#\u003c/code\u003e.\n   In Edison, however, we downgrade the meaning of \"unsafe\" somewhat.  An\n   \"unsafe\" Edison function is one which, if misused, can violate the structural\n   invariants of a data structure.  Misusing an Edison \"unsafe\" function should\n   never cause your runtime to crash or break referential integrity, but it may cause\n   later uses of a data structure to behave in undefined ways.  Almost all unsafe functions\n   in Edison are labeled with the \u003ccode\u003eunsafe\u003c/code\u003e prefix.  An exception to this rule is the\n   \u003ccode\u003eWith\u003c/code\u003e functions in the \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e class, which are also unsafe but do not have\n   the prefix.  Unsafe functions will have explicit preconditions listed in their\n   documentation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes on ambiguous functions:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEdison also contains some functions which are labeled \"ambiguous\".  These\n   functions cannot violate the structural invariants of a data structure, but, under\n   some conditions, the result of applying an ambiguous function is not well defined.\n   For ambiguous functions, the result of applying the function may depend on otherwise\n   unobservable internal state of the data structure, such as the actual shape of a\n   balanced tree.  For example, the \u003ccode\u003e\u003ca\u003eAssocX\u003c/a\u003e\u003c/code\u003e class contains the \u003ccode\u003efold\u003c/code\u003e function, which\n   folds over the elements in the collection in an arbitrary order.  If the combining\n   function passed to \u003ccode\u003efold\u003c/code\u003e is not fold-commutative (see below), then the result of\n   the fold will depend on the actual order that elements are presented to the\n   combining function, which is not defined.\n\u003c/p\u003e\u003cp\u003eTo aid programmers, each API function is labeled \u003cem\u003eambiguous\u003c/em\u003e or \u003cem\u003eunambiguous\u003c/em\u003e in its\n   documentation.  If a function is unambiguous only under some circumstances,\n   that will also be explicitly stated.\n\u003c/p\u003e\u003cp\u003eAn \"unambiguous\" operation is one where all correct implementations of the operation\n   will return \"indistinguishable\" results.  For concrete data types, \"indistinguishable\"\n   means structural equality.  An instance of an abstract data type is considered\n   indistinguishable from another if all possible applications of unambiguous\n   operations to both yield indistinguishable results.  (Note: this definition is\n   impredicative and rather imprecise.  Should it become an issue, I will attempt to\n   develop a better definition.  I hope the intent is sufficiently clear).\n\u003c/p\u003e\u003cp\u003eA higher-order unambiguous operation may be rendered ambiguous if passed a \"function\" which\n   does not respect referential integrity (one containing \u003ccode\u003eunsafePerformIO\u003c/code\u003e for example).\n   Only do something like this if you are 110% sure you know what you are doing, and even then\n   think it over two or three times.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHow to choose a fold:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFolds\u003c/em\u003e are an important class of operations on data structures in a functional\n   language; they perform essentially the same role that iterators perform in\n   imperative languages.  Edison provides a dizzying array of folds which (hopefully)\n   correspond to all the various ways a programmer might want to fold over a data\n   structure.  However, it can be difficult to know which fold to choose for a\n   particular application.  In general, you should choose a fold which provides\n   the \u003cem\u003efewest\u003c/em\u003e guarantees necessary for correctness.  The folds which have fewer\n   guarantees give data structure implementers more leeway to provide efficient\n   implementations.  For example, if you which to fold a commutative, associative\n   function, you should chose \u003ccode\u003efold\u003c/code\u003e (which does not guarantee an order) over \u003ccode\u003efoldl\u003c/code\u003e\n   or \u003ccode\u003efoldr\u003c/code\u003e, which specify particular orders.\n\u003c/p\u003e\u003cp\u003eAlso, if your function is strict in\n   the accumulating argument, you should prefer the strict folds (eg, \u003ccode\u003efold'\u003c/code\u003e); they will\n   often provide better space behavior.  \u003cem\u003eBe aware\u003c/em\u003e, however, that the \"strict\" folds\n   are not \u003cem\u003enecessarily\u003c/em\u003e more strict than the \"non-strict\" folds; they merely give\n   implementers the option to provide additional strictness if it improves performance.\n\u003c/p\u003e\u003cp\u003eFor associative collections, only use with \u003ccode\u003eWithKey\u003c/code\u003e folds if you actually need the\n   value of the key.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePainfully detailed information about ambiguous folds:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAll of the folds that are listed ambiguous are ambiguous because they do not or cannot\n   guarantee a stable order with which the folding function will be applied.  However,\n   some functions are order insensitive, and the result will be unambiguous regardless\n   of the fold order chosen.  Here we formalize this property, which we call\n   \"fold commutativity\".\n\u003c/p\u003e\u003cp\u003eWe say \u003ccode\u003ef :: a -\u003e b -\u003e b\u003c/code\u003e is \u003cem\u003efold-commutative\u003c/em\u003e iff \u003ccode\u003ef\u003c/code\u003e is unambiguous and\n\u003c/p\u003e\u003cpre\u003e    forall w, z :: b; m, n :: a\n\n       w = z ==\u003e f m (f n w) = f n (f m z)\n\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003e=\u003c/code\u003e means indistinguishability.\n\u003c/p\u003e\u003cp\u003eThis property is sufficient (but not necessary) to ensure that, for any\n   collection of elements to\n   fold over, folds over all permutations of those elements will generate\n   indistinguishable results.  In other words, an ambiguous fold applied to a\n   fold-commutative combining function becomes \u003cem\u003eunambiguous\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSome fold combining functions take their arguments in the reverse order.  We\n   straightforwardly extend the notion of fold commutativity to such functions\n   by reversing the arguments.  More formally, we say \u003ccode\u003eg :: b -\u003e a -\u003e b\u003c/code\u003e is fold\n   commutative iff \u003ccode\u003eflip g :: a -\u003e b -\u003e b\u003c/code\u003e is fold commutative.\n\u003c/p\u003e\u003cp\u003eFor folds which take both a key and an element value, we extend the notion of fold\n   commutativity by considering the key and element to be a single, uncurried argument.\n   More formally, we say \u003ccode\u003eg :: k -\u003e a -\u003e b -\u003e b\u003c/code\u003e is fold commutative iff\n\u003c/p\u003e\u003cpre\u003e    \\(k,x) z -\u003e g k x z :: (k,a) -\u003e b -\u003e b\n\u003c/pre\u003e\u003cp\u003eis fold commutative according to the above definition.\n\u003c/p\u003e\u003cp\u003eNote that for \u003ccode\u003eg :: a -\u003e a -\u003e a\u003c/code\u003e, if \u003ccode\u003eg\u003c/code\u003e is unambiguous,\n   commutative, and associative, then \u003ccode\u003eg\u003c/code\u003e is fold-commutative.\n\u003c/p\u003e\u003cp\u003eProof:\n\u003c/p\u003e\u003cpre\u003e    let w = z, then\n    g m (g n w) = g m (g n z)     g is unambiguous\n                = g (g n z) m     commutative property of g\n                = g n (g z m)     associative property of g\n                = g n (g m z)     commutative property of g\n\u003c/pre\u003e\u003cp\u003eQed.\n\u003c/p\u003e\u003cp\u003eThus, many common numeric combining functions, including \u003ccode\u003e(+)\u003c/code\u003e and \u003ccode\u003e(*)\u003c/code\u003e at\n   integral types, are fold commutative and can be safely used with ambiguous\n   folds.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBe aware\u003c/em\u003e however, that \u003ccode\u003e(+)\u003c/code\u003e and \u003ccode\u003e(*)\u003c/code\u003e at floating point types are only\n   \u003cem\u003eapproximately\u003c/em\u003e commutative and associative due to rounding errors; using\n   ambiguous folds with these operations may result in subtle differences in\n   the results.  As always, be aware of the limitations and numeric\n   properties of floating point representations.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAbout this module:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis module re-exports the various data structure abstraction classes, but\n   not their methods. This allows you to write type signatures which have\n   contexts that mention Edison type classes without having to import the\n   appropriate modules \u003ccode\u003equalified\u003c/code\u003e.  The class methods are not exported to\n   avoid name clashes.  Obviously, to use the methods of these classes, you\n   will have to import the appropriate modules.  This module additionally\n   re-exports the entire \u003ca\u003eData.Edison.Prelude\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMiscellaneous points:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSome implementations export a few extra functions beyond those included\n   in the relevant classes.  These are typically operations that are\n   particularly efficient for that implementation, but are not general enough\n   to warrant inclusion in a class.\n\u003c/p\u003e\u003cp\u003eSince qualified infix symbols are fairly ugly, they have been largely avoided.\n   However, the \u003ca\u003eData.Edison.Sym\u003c/a\u003e module defines a number of infix operators\n   which alias the prefix operators; this module is intended to be imported\n   unqualified.\n\u003c/p\u003e\u003cp\u003eMost of the operations on most of the data structures are strict.  This is\n   inevitable for data structures with non-trivial invariants. Even given\n   that, however, many of the operations are stricter than necessary.  In\n   fact, operations are never deliberately made lazy unless the laziness is\n   required by the algorithm, as can happen with amortized data structures.\n\u003c/p\u003e\u003cp\u003eNote, however, that the various sequence implementations are always lazy\n   in their elements.  Similarly, associative collections are always lazy in\n   their elements (but usually strict in their keys).  Non-associative\n   collections are usually strict in their elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Edison",
          "name": "Edison",
          "package": "EdisonAPI",
          "source": "src/Data-Edison.html",
          "type": "module"
        },
        "index": {
          "description": "Edison is library of purely functional data structures written by Chris Okasaki It is named after Thomas Alva Edison and for the mnemonic value ED on fficent ata tructures Edison provides several families of abstractions each with multiple implementations The main abstractions provided by Edison are Sequences such as stacks queues and dequeues Collections such as sets bags and heaps and Associative Collections such as finite maps and priority queues where the priority and element are distinct Conventions Each data structure is implemented as separate module These modules should always be imported qualified to prevent flood of name clashes and it is recommended to rename the module using the as keyword to reduce the overhead of qualified names and to make substituting one implementation for another as painless as possible Names have been chosen to match standard usage as much as possible This means that operations for abstractions frequently share the same name for example empty null size etc It also means that in many cases names have been reused from the Prelude However the use of qualified imports will prevent name reuse from becoming name clashes If for some reason you chose to import an Edison data structure unqualified you will likely need to import the Prelude hiding the relevant names Edison modules also frequently share type names For example most sequence type constructors are named Seq This additionally aids substituting implementations by simply importing different module Argument orders are selected with the following points in mind Partial application arguments more likely to be static usually appear before other arguments in order to facilitate partial application Collection appears last in all cases where an operation queries single collection or modifies an existing collection the collection argument will appear last This is something of de facto standard for Haskell datastructure libraries and lends degree of consistency to the API Most usual order where an operation represents well-known mathematical function on more than one datastructure the arguments are chosen to match the most usual argument order for the function Type classes Each family of abstractions is defined as set of classes main class that every implementation of that abstraction should support and several auxiliary subclasses that an implementation may or may not support However not all applications require the power of type classes so each method is also directly accessible from the implementation module Thus you can choose to use overloading or not as appropriate for your particular application Documentation about the behavior of data structure operations is defined in the modules Data.Edison.Seq Data.Edison.Coll and Data.Edison.Assoc Implementations are required to respect the descriptions and axioms found in these modules In some cases time complexity is also given Implementations may differ from these time complexities if so the differences will be given in the documentation for the individual implementation module Notes on Eq and Ord instances Many Edison data structures require Eq or Ord contexts to define equivalence and total ordering on elements or keys Edison makes the following assumptions about all such required instances An Eq instance correctly defines an equivalence relation but not necessarily structural equality that is we assume considered as relation is reflexive symmetric and transitive but allow that equivalent items may be distinguishable by other means An Ord instance correctly defines total order which is consistent with the Eq instance for that type These assumptions correspond to the usual meanings assigned to these classes If an Edison data structure is used with an Eq or Ord instance which violates these assumptions then the behavior of that data structure is undefined Notes on Read and Show instances The usual Haskell convention for Read and Show instances as championed by the Haskell deriving mechanism is that show generates string which is valid Haskell expression built up using the data type data constructors such that if interpreted as Haskell code the string would generate an identical data item Furthermore the derived Read instances are able to parse such strings such that read show id So derived instances of Read and Show exhibit the following useful properties read and show are complementary that is read is useful inverse for show show generates string which is legal Haskell code representing the data item For concrete data types the deriving mechanism is usually quite sufficient However for abstract types the derived Read instance may allow users to create data which violates invariants Furthermore the strings resulting from show reference hidden data constructors which violates good software engineering principles and also cannot be compiled because the constructors are not available outside the defining module Edison avoids most of these problems and still maintains the above useful properties by doing conversions to and from lists and inserting explicit calls to the list conversion operations The corresponding Read instance strips the list conversion call before parsing the list In this way private data constructors are not revealed and show strings are still legal compilable Haskell code Furthermore the showed strings gain degree of independence from the underlying datastructure implementation For example calling show on an empty Banker queue will result in the following string Data.Edison.Seq.BankersQueue.fromList Datatypes which are not native Edison data structures such as StandardSet and StandardMap may or may not provide Read or Show instances and if they exist they may or may not also provide the properties that Edison native Read and Show instances do Notes on time complexities Some Edison data structures only the sequences currently have detailed time complexity information Unless otherwise stated these are amortized time complexities assuming persistent usage of the datastructure Much of this data comes from Martin Holters Efficent Data Structures in Lazy Functional Language Master Thesis Chalmers University of Technology Sweden Notes on unsafe functions There are number of different notions of what constitutes an unsafe function In Haskell function is generally called unsafe if it can subvert type safety or referential integrity such as unsafePerformIO or unsafeCoerce In Edison however we downgrade the meaning of unsafe somewhat An unsafe Edison function is one which if misused can violate the structural invariants of data structure Misusing an Edison unsafe function should never cause your runtime to crash or break referential integrity but it may cause later uses of data structure to behave in undefined ways Almost all unsafe functions in Edison are labeled with the unsafe prefix An exception to this rule is the With functions in the Set class which are also unsafe but do not have the prefix Unsafe functions will have explicit preconditions listed in their documentation Notes on ambiguous functions Edison also contains some functions which are labeled ambiguous These functions cannot violate the structural invariants of data structure but under some conditions the result of applying an ambiguous function is not well defined For ambiguous functions the result of applying the function may depend on otherwise unobservable internal state of the data structure such as the actual shape of balanced tree For example the AssocX class contains the fold function which folds over the elements in the collection in an arbitrary order If the combining function passed to fold is not fold-commutative see below then the result of the fold will depend on the actual order that elements are presented to the combining function which is not defined To aid programmers each API function is labeled ambiguous or unambiguous in its documentation If function is unambiguous only under some circumstances that will also be explicitly stated An unambiguous operation is one where all correct implementations of the operation will return indistinguishable results For concrete data types indistinguishable means structural equality An instance of an abstract data type is considered indistinguishable from another if all possible applications of unambiguous operations to both yield indistinguishable results Note this definition is impredicative and rather imprecise Should it become an issue will attempt to develop better definition hope the intent is sufficiently clear higher-order unambiguous operation may be rendered ambiguous if passed function which does not respect referential integrity one containing unsafePerformIO for example Only do something like this if you are sure you know what you are doing and even then think it over two or three times How to choose fold Folds are an important class of operations on data structures in functional language they perform essentially the same role that iterators perform in imperative languages Edison provides dizzying array of folds which hopefully correspond to all the various ways programmer might want to fold over data structure However it can be difficult to know which fold to choose for particular application In general you should choose fold which provides the fewest guarantees necessary for correctness The folds which have fewer guarantees give data structure implementers more leeway to provide efficient implementations For example if you which to fold commutative associative function you should chose fold which does not guarantee an order over foldl or foldr which specify particular orders Also if your function is strict in the accumulating argument you should prefer the strict folds eg fold they will often provide better space behavior Be aware however that the strict folds are not necessarily more strict than the non-strict folds they merely give implementers the option to provide additional strictness if it improves performance For associative collections only use with WithKey folds if you actually need the value of the key Painfully detailed information about ambiguous folds All of the folds that are listed ambiguous are ambiguous because they do not or cannot guarantee stable order with which the folding function will be applied However some functions are order insensitive and the result will be unambiguous regardless of the fold order chosen Here we formalize this property which we call fold commutativity We say is fold-commutative iff is unambiguous and forall where means indistinguishability This property is sufficient but not necessary to ensure that for any collection of elements to fold over folds over all permutations of those elements will generate indistinguishable results In other words an ambiguous fold applied to fold-commutative combining function becomes unambiguous Some fold combining functions take their arguments in the reverse order We straightforwardly extend the notion of fold commutativity to such functions by reversing the arguments More formally we say is fold commutative iff flip is fold commutative For folds which take both key and an element value we extend the notion of fold commutativity by considering the key and element to be single uncurried argument More formally we say is fold commutative iff is fold commutative according to the above definition Note that for if is unambiguous commutative and associative then is fold-commutative Proof let then is unambiguous commutative property of associative property of commutative property of Qed Thus many common numeric combining functions including and at integral types are fold commutative and can be safely used with ambiguous folds Be aware however that and at floating point types are only approximately commutative and associative due to rounding errors using ambiguous folds with these operations may result in subtle differences in the results As always be aware of the limitations and numeric properties of floating point representations About this module This module re-exports the various data structure abstraction classes but not their methods This allows you to write type signatures which have contexts that mention Edison type classes without having to import the appropriate modules qualified The class methods are not exported to avoid name clashes Obviously to use the methods of these classes you will have to import the appropriate modules This module additionally re-exports the entire Data.Edison.Prelude module Miscellaneous points Some implementations export few extra functions beyond those included in the relevant classes These are typically operations that are particularly efficient for that implementation but are not general enough to warrant inclusion in class Since qualified infix symbols are fairly ugly they have been largely avoided However the Data.Edison.Sym module defines number of infix operators which alias the prefix operators this module is intended to be imported unqualified Most of the operations on most of the data structures are strict This is inevitable for data structures with non-trivial invariants Even given that however many of the operations are stricter than necessary In fact operations are never deliberately made lazy unless the laziness is required by the algorithm as can happen with amortized data structures Note however that the various sequence implementations are always lazy in their elements Similarly associative collections are always lazy in their elements but usually strict in their keys Non-associative collections are usually strict in their elements",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "Edison",
          "package": "EdisonAPI",
          "partial": "Edison",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociative collections where the keys are observable.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "Assoc",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#Assoc",
          "type": "class"
        },
        "index": {
          "description": "Associative collections where the keys are observable",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "Assoc",
          "package": "EdisonAPI",
          "partial": "Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe root class of the associative collection hierarchy.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "AssocX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#AssocX",
          "type": "class"
        },
        "index": {
          "description": "The root class of the associative collection hierarchy",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "AssocX",
          "package": "EdisonAPI",
          "partial": "Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:AssocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements.  See the module documentation for\n   comments on observability.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "Coll",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#Coll",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements See the module documentation for comments on observability",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "Coll",
          "package": "EdisonAPI",
          "partial": "Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:Coll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the root class of the collection hierarchy.  However, it\n   is perfectly adequate for many applications that use sets or bags.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "CollX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#CollX",
          "type": "class"
        },
        "index": {
          "description": "This is the root class of the collection hierarchy However it is perfectly adequate for many applications that use sets or bags",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "CollX",
          "package": "EdisonAPI",
          "partial": "Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:CollX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps with observable keys.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "FiniteMap",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#FiniteMap",
          "type": "class"
        },
        "index": {
          "description": "Finite maps with observable keys",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "FiniteMap",
          "package": "EdisonAPI",
          "partial": "Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:FiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection where the keys form a set; that is, each key\n   appears in the associative collection at most once.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "FiniteMapX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#FiniteMapX",
          "type": "class"
        },
        "index": {
          "description": "An associative collection where the keys form set that is each key appears in the associative collection at most once",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "FiniteMapX",
          "package": "EdisonAPI",
          "partial": "Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:FiniteMapX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection with observable keys where the keys additionally\n   have an ordering relation.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdAssoc",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdAssoc",
          "type": "class"
        },
        "index": {
          "description": "An associative collection with observable keys where the keys additionally have an ordering relation",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdAssoc",
          "package": "EdisonAPI",
          "partial": "Ord Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative collection where the keys additionally have an ordering\n   relation.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdAssocX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdAssocX",
          "type": "class"
        },
        "index": {
          "description": "An associative collection where the keys additionally have an ordering relation",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdAssocX",
          "package": "EdisonAPI",
          "partial": "Ord Assoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdAssocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the elements additionally\n   have an ordering relation.  See the module documentation for comments\n   on observability.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdColl",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdColl",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the elements additionally have an ordering relation See the module documentation for comments on observability",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdColl",
          "package": "EdisonAPI",
          "partial": "Ord Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdColl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections for which the elements have an ordering relation.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdCollX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdCollX",
          "type": "class"
        },
        "index": {
          "description": "Collections for which the elements have an ordering relation",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdCollX",
          "package": "EdisonAPI",
          "partial": "Ord Coll",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdCollX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps with observable keys where the keys additionally\n   have an ordering relation.  This class introduces no new methods.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdFiniteMap",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdFiniteMap",
          "type": "class"
        },
        "index": {
          "description": "Finite maps with observable keys where the keys additionally have an ordering relation This class introduces no new methods",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdFiniteMap",
          "package": "EdisonAPI",
          "partial": "Ord Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdFiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite maps where the keys additionally have an ordering relation.\n   This class introduces no new methods.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdFiniteMapX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Assoc.html#OrdFiniteMapX",
          "type": "class"
        },
        "index": {
          "description": "Finite maps where the keys additionally have an ordering relation This class introduces no new methods",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdFiniteMapX",
          "package": "EdisonAPI",
          "partial": "Ord Finite Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdFiniteMapX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the set property is maintained\n   and where additionally, there is an ordering relation on the elements.\n   This class introduces no new methods, and is simply an abbreviation \n   for the context:\n\u003c/p\u003e\u003cpre\u003e(OrdColl c a,Set c a)\u003c/pre\u003e",
          "module": "Data.Edison",
          "name": "OrdSet",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdSet",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the set property is maintained and where additionally there is an ordering relation on the elements This class introduces no new methods and is simply an abbreviation for the context OrdColl Set",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdSet",
          "package": "EdisonAPI",
          "partial": "Ord Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets where the elements also have an ordering relation.\n   This class contains no methods; it is only an abbreviation for\n   the context \u003ccode\u003e(OrdCollX c a,SetX c a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "OrdSetX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#OrdSetX",
          "type": "class"
        },
        "index": {
          "description": "Sets where the elements also have an ordering relation This class contains no methods it is only an abbreviation for the context OrdCollX SetX",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "OrdSetX",
          "package": "EdisonAPI",
          "partial": "Ord Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:OrdSetX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e class defines an interface for datatypes which\n   implement sequences.  A description for each function is\n   given below.  \n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "Sequence",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Seq.html#Sequence",
          "type": "class"
        },
        "index": {
          "description": "The Sequence class defines an interface for datatypes which implement sequences description for each function is given below",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "Sequence",
          "package": "EdisonAPI",
          "partial": "Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollections with observable elements where the set property is maintained;\n   that is, a set contains at most one element of the equivalence class\n   formed by the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance on the elements.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING: Each of the following \\\"With\\\" functions is unsafe.\u003c/em\u003e \n   The passed in combining functions are used to choose which element is kept\n   in the case of duplicates. They are required to satisfy the precondition\n   that, given two equal elements, they return a third element equal to the\n   other two.  Usually, the combining function just returns its first or\n   second argument, but it can combine elements in non-trivial ways.\n\u003c/p\u003e\u003cp\u003eThe combining function should usually be associative.  Where the function\n   involves a sequence of elements, the elements will be combined from\n   left-to-right, but with an unspecified associativity.\n\u003c/p\u003e\u003cp\u003eFor example, if \u003ccode\u003ex == y == z\u003c/code\u003e,\n   then \u003ccode\u003efromSeqWith (+) [x,y,z]\u003c/code\u003e equals either\n     \u003ccode\u003esingle (x + (y + z))\u003c/code\u003e\n   or\n     \u003ccode\u003esingle ((x + y) + z)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "Set",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#Set",
          "type": "class"
        },
        "index": {
          "description": "Collections with observable elements where the set property is maintained that is set contains at most one element of the equivalence class formed by the Eq instance on the elements WARNING Each of the following With functions is unsafe The passed in combining functions are used to choose which element is kept in the case of duplicates They are required to satisfy the precondition that given two equal elements they return third element equal to the other two Usually the combining function just returns its first or second argument but it can combine elements in non-trivial ways The combining function should usually be associative Where the function involves sequence of elements the elements will be combined from left-to-right but with an unspecified associativity For example if then fromSeqWith equals either single or single",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "Set",
          "package": "EdisonAPI",
          "partial": "Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection where the set property is maintained; that is, a set\n   contains at most one element of the equivalence class formed by the\n   \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance on the elements.\n\u003c/p\u003e",
          "module": "Data.Edison",
          "name": "SetX",
          "package": "EdisonAPI",
          "source": "src/Data-Edison-Coll.html#SetX",
          "type": "class"
        },
        "index": {
          "description": "collection where the set property is maintained that is set contains at most one element of the equivalence class formed by the Eq instance on the elements",
          "hierarchy": "Data Edison",
          "module": "Data.Edison",
          "name": "SetX",
          "package": "EdisonAPI",
          "partial": "Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EdisonAPI/docs/Data-Edison.html#t:SetX"
      }
    }
  ]
]