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
        "word": "TCache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent, transactional collection with Queue interface as well as\n indexed access by key.\n\u003c/p\u003e\u003cp\u003eUses default persistence. See \u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Persistent.Collection",
          "name": "Collection",
          "package": "TCache",
          "source": "src/Data-Persistent-Collection.html",
          "type": "module"
        },
        "index": {
          "description": "persistent transactional collection with Queue interface as well as indexed access by key Uses default persistence See Data.TCache.DefaultPersistence",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "Collection",
          "package": "TCache",
          "partial": "Collection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue reference\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "RefQueue",
          "package": "TCache",
          "source": "src/Data-Persistent-Collection.html#RefQueue",
          "type": "type"
        },
        "index": {
          "description": "queue reference",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "RefQueue",
          "package": "TCache",
          "partial": "Ref Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#t:RefQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all the elements of the queue that has the key of the parameter passed\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "deleteElem",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e IO ()",
          "source": "src/Data-Persistent-Collection.html#deleteElem",
          "type": "function"
        },
        "index": {
          "description": "Delete all the elements of the queue that has the key of the parameter passed",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "deleteElem",
          "normalized": "RefQueue a-\u003ea-\u003eIO()",
          "package": "TCache",
          "partial": "Elem",
          "signature": "RefQueue a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:deleteElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerison in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "deleteElemSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e STM ()",
          "source": "src/Data-Persistent-Collection.html#deleteElemSTM",
          "type": "function"
        },
        "index": {
          "description": "Verison in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "deleteElemSTM",
          "normalized": "RefQueue a-\u003ea-\u003eSTM()",
          "package": "TCache",
          "partial": "Elem STM",
          "signature": "RefQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:deleteElemSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty the queue (factually, it is deleted)\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "flush",
          "package": "TCache",
          "signature": "RefQueue a -\u003e IO ()",
          "source": "src/Data-Persistent-Collection.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Empty the queue factually it is deleted",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "flush",
          "normalized": "RefQueue a-\u003eIO()",
          "package": "TCache",
          "signature": "RefQueue a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "flushSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e STM ()",
          "source": "src/Data-Persistent-Collection.html#flushSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "flushSTM",
          "normalized": "RefQueue a-\u003eSTM()",
          "package": "TCache",
          "partial": "STM",
          "signature": "RefQueue a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:flushSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the reference to new or existing queue trough its name\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "getQRef",
          "package": "TCache",
          "signature": "String -\u003e RefQueue a",
          "source": "src/Data-Persistent-Collection.html#getQRef",
          "type": "function"
        },
        "index": {
          "description": "Get the reference to new or existing queue trough its name",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "getQRef",
          "normalized": "String-\u003eRefQueue a",
          "package": "TCache",
          "partial": "QRef",
          "signature": "String-\u003eRefQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:getQRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the queue is empty\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "isEmpty",
          "package": "TCache",
          "signature": "RefQueue a -\u003e IO Bool",
          "source": "src/Data-Persistent-Collection.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Check if the queue is empty",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "isEmpty",
          "normalized": "RefQueue a-\u003eIO Bool",
          "package": "TCache",
          "partial": "Empty",
          "signature": "RefQueue a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.Collection",
          "name": "isEmptySTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e STM Bool",
          "source": "src/Data-Persistent-Collection.html#isEmptySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "isEmptySTM",
          "normalized": "RefQueue a-\u003eSTM Bool",
          "package": "TCache",
          "partial": "Empty STM",
          "signature": "RefQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:isEmptySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.Collection",
          "name": "pick",
          "package": "TCache",
          "signature": "RefQueue a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pick",
          "normalized": "RefQueue a-\u003eIO a",
          "package": "TCache",
          "signature": "RefQueue a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of all elements in the queue. The queue remains unchanged\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pickAll",
          "package": "TCache",
          "signature": "RefQueue a -\u003e IO [a]",
          "source": "src/Data-Persistent-Collection.html#pickAll",
          "type": "function"
        },
        "index": {
          "description": "Return the list of all elements in the queue The queue remains unchanged",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pickAll",
          "normalized": "RefQueue a-\u003eIO[a]",
          "package": "TCache",
          "partial": "All",
          "signature": "RefQueue a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pickAllSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e STM [a]",
          "source": "src/Data-Persistent-Collection.html#pickAllSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pickAllSTM",
          "normalized": "RefQueue a-\u003eSTM[a]",
          "package": "TCache",
          "partial": "All STM",
          "signature": "RefQueue a-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickAllSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first element in the queue that has the given key\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pickElem",
          "package": "TCache",
          "signature": "RefQueue a -\u003e String -\u003e IO (Maybe a)",
          "source": "src/Data-Persistent-Collection.html#pickElem",
          "type": "function"
        },
        "index": {
          "description": "Return the first element in the queue that has the given key",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pickElem",
          "normalized": "RefQueue a-\u003eString-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Elem",
          "signature": "RefQueue a-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pickElemSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e String -\u003e STM (Maybe a)",
          "source": "src/Data-Persistent-Collection.html#pickElemSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pickElemSTM",
          "normalized": "RefQueue a-\u003eString-\u003eSTM(Maybe a)",
          "package": "TCache",
          "partial": "Elem STM",
          "signature": "RefQueue a-\u003eString-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickElemSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead  the first element in the queue and delete it (pop)\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pop",
          "package": "TCache",
          "signature": "RefQueue a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Read the first element in the queue and delete it pop",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pop",
          "normalized": "RefQueue a-\u003eIO a",
          "package": "TCache",
          "signature": "RefQueue a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "popSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e STM a",
          "source": "src/Data-Persistent-Collection.html#popSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "popSTM",
          "normalized": "RefQueue a-\u003eSTM a",
          "package": "TCache",
          "partial": "STM",
          "signature": "RefQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:popSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush an element in the queue\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "push",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e IO ()",
          "source": "src/Data-Persistent-Collection.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push an element in the queue",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "push",
          "normalized": "RefQueue a-\u003ea-\u003eIO()",
          "package": "TCache",
          "signature": "RefQueue a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "pushSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e STM ()",
          "source": "src/Data-Persistent-Collection.html#pushSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "pushSTM",
          "normalized": "RefQueue a-\u003ea-\u003eSTM()",
          "package": "TCache",
          "partial": "STM",
          "signature": "RefQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pushSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of all elements in the queue and empty it\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "readAll",
          "package": "TCache",
          "signature": "RefQueue a -\u003e IO [a]",
          "source": "src/Data-Persistent-Collection.html#readAll",
          "type": "function"
        },
        "index": {
          "description": "Return the list of all elements in the queue and empty it",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "readAll",
          "normalized": "RefQueue a-\u003eIO[a]",
          "package": "TCache",
          "partial": "All",
          "signature": "RefQueue a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:readAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "readAllSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e STM [a]",
          "source": "src/Data-Persistent-Collection.html#readAllSTM",
          "type": "function"
        },
        "index": {
          "description": "version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "readAllSTM",
          "normalized": "RefQueue a-\u003eSTM[a]",
          "package": "TCache",
          "partial": "All STM",
          "signature": "RefQueue a-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:readAllSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epush an element at the top of the queue\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "unreadSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e STM ()",
          "source": "src/Data-Persistent-Collection.html#unreadSTM",
          "type": "function"
        },
        "index": {
          "description": "push an element at the top of the queue",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "unreadSTM",
          "normalized": "RefQueue a-\u003ea-\u003eSTM()",
          "package": "TCache",
          "partial": "STM",
          "signature": "RefQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:unreadSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the first element of the queue with a new element with the same key\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "updateElem",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e IO ()",
          "source": "src/Data-Persistent-Collection.html#updateElem",
          "type": "function"
        },
        "index": {
          "description": "Update the first element of the queue with new element with the same key",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "updateElem",
          "normalized": "RefQueue a-\u003ea-\u003eIO()",
          "package": "TCache",
          "partial": "Elem",
          "signature": "RefQueue a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:updateElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
          "module": "Data.Persistent.Collection",
          "name": "updateElemSTM",
          "package": "TCache",
          "signature": "RefQueue a -\u003e a -\u003e STM ()",
          "source": "src/Data-Persistent-Collection.html#updateElemSTM",
          "type": "function"
        },
        "index": {
          "description": "Version in the STM monad",
          "hierarchy": "Data Persistent Collection",
          "module": "Data.Persistent.Collection",
          "name": "updateElemSTM",
          "normalized": "RefQueue a-\u003ea-\u003eSTM()",
          "package": "TCache",
          "partial": "Elem STM",
          "signature": "RefQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:updateElemSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIDynamic is a indexable and serializable version of Dynamic. (See \u003ccode\u003eData.Dynamic\u003c/code\u003e). It is used as containers of objects\nin the cache so any new datatype can be incrementally stored without recompilation.\nIDimamic provices methods for safe casting,  besides serializaton, deserialirezation and retrieval by key.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Persistent.IDynamic",
          "name": "IDynamic",
          "package": "TCache",
          "source": "src/Data-Persistent-IDynamic.html",
          "type": "module"
        },
        "index": {
          "description": "IDynamic is indexable and serializable version of Dynamic See Data.Dynamic It is used as containers of objects in the cache so any new datatype can be incrementally stored without recompilation IDimamic provices methods for safe casting besides serializaton deserialirezation and retrieval by key",
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "IDynamic",
          "package": "TCache",
          "partial": "IDynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "IDynType",
          "package": "TCache",
          "source": "src/Data-Persistent-IDynamic.html#IDynType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "IDynType",
          "package": "TCache",
          "partial": "IDyn Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:IDynType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "IDynamic",
          "package": "TCache",
          "source": "src/Data-Persistent-IDynamic.html#IDynamic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "IDynamic",
          "package": "TCache",
          "partial": "IDynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:IDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "Save",
          "package": "TCache",
          "source": "src/Data-Persistent-IDynamic.html#Save",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "Save",
          "package": "TCache",
          "partial": "Save",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:Save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "DLeft",
          "package": "TCache",
          "signature": "DLeft !(ByteString, (Context, ByteString))",
          "source": "src/Data-Persistent-IDynamic.html#IDynType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "DLeft",
          "normalized": "DLeft(ByteString,(Context,ByteString))",
          "package": "TCache",
          "partial": "DLeft",
          "signature": "DLeft(ByteString,(Context,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:DLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "DRight",
          "package": "TCache",
          "signature": "DRight !a",
          "source": "src/Data-Persistent-IDynamic.html#IDynType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "DRight",
          "package": "TCache",
          "partial": "DRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:DRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "IDyn",
          "package": "TCache",
          "signature": "IDyn (IORef IDynType)",
          "source": "src/Data-Persistent-IDynamic.html#IDynamic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "IDyn",
          "package": "TCache",
          "partial": "IDyn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:IDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "Save",
          "package": "TCache",
          "signature": "Save ByteString",
          "source": "src/Data-Persistent-IDynamic.html#Save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "Save",
          "package": "TCache",
          "partial": "Save",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:Save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "dynPrefix",
          "package": "TCache",
          "signature": "[Char]",
          "source": "src/Data-Persistent-IDynamic.html#dynPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "dynPrefix",
          "normalized": "[Char]",
          "package": "TCache",
          "partial": "Prefix",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:dynPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "dynPrefixSp",
          "package": "TCache",
          "signature": "ByteString",
          "source": "src/Data-Persistent-IDynamic.html#dynPrefixSp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "dynPrefixSp",
          "package": "TCache",
          "partial": "Prefix Sp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:dynPrefixSp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "errorfied",
          "package": "TCache",
          "signature": "[Char] -\u003e [Char] -\u003e t",
          "source": "src/Data-Persistent-IDynamic.html#errorfied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "errorfied",
          "normalized": "[Char]-\u003e[Char]-\u003ea",
          "package": "TCache",
          "signature": "[Char]-\u003e[Char]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:errorfied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "fromIDyn",
          "package": "TCache",
          "signature": "IDynamic -\u003e a",
          "source": "src/Data-Persistent-IDynamic.html#fromIDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "fromIDyn",
          "normalized": "IDynamic-\u003ea",
          "package": "TCache",
          "partial": "IDyn",
          "signature": "IDynamic-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:fromIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "notreified",
          "package": "TCache",
          "signature": "ByteString",
          "source": "src/Data-Persistent-IDynamic.html#notreified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "notreified",
          "package": "TCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:notreified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "reifyM",
          "package": "TCache",
          "signature": "IDynamic -\u003e a -\u003e IO a",
          "source": "src/Data-Persistent-IDynamic.html#reifyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "reifyM",
          "normalized": "IDynamic-\u003ea-\u003eIO a",
          "package": "TCache",
          "signature": "IDynamic-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:reifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "safeFromIDyn",
          "package": "TCache",
          "signature": "IDynamic -\u003e Either String a",
          "source": "src/Data-Persistent-IDynamic.html#safeFromIDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "safeFromIDyn",
          "normalized": "IDynamic-\u003eEither String a",
          "package": "TCache",
          "partial": "From IDyn",
          "signature": "IDynamic-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:safeFromIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "serializedEqual",
          "package": "TCache",
          "signature": "IDynamic -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Persistent-IDynamic.html#serializedEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "serializedEqual",
          "normalized": "IDynamic-\u003eByteString-\u003eBool",
          "package": "TCache",
          "partial": "Equal",
          "signature": "IDynamic-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:serializedEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "toIDyn",
          "package": "TCache",
          "signature": "a -\u003e IDynamic",
          "source": "src/Data-Persistent-IDynamic.html#toIDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "toIDyn",
          "normalized": "a-\u003eIDynamic",
          "package": "TCache",
          "partial": "IDyn",
          "signature": "a-\u003eIDynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:toIDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Persistent.IDynamic",
          "name": "tosave",
          "package": "TCache",
          "signature": "IDynamic -\u003e IDynamic",
          "source": "src/Data-Persistent-IDynamic.html#tosave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Persistent IDynamic",
          "module": "Data.Persistent.IDynamic",
          "name": "tosave",
          "normalized": "IDynamic-\u003eIDynamic",
          "package": "TCache",
          "signature": "IDynamic-\u003eIDynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:tosave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "DefaultPersistence",
          "package": "TCache",
          "source": "src/Data-TCache-DefaultPersistence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "DefaultPersistence",
          "package": "TCache",
          "partial": "Default Persistence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexable is an utility class used to derive instances of IResource\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003edata Person= Person{ pname :: String, cars :: [DBRef Car]} deriving (Show, Read, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\u003c/pre\u003e\u003cp\u003eSince Person and Car are instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e ans \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, by defining the \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e instance\nwill implicitly define the IResource instance for file persistence:\n\u003c/p\u003e\u003cpre\u003e\ninstance Indexable Person where  key Person{pname=n} = \"Person \" ++ n\ninstance Indexable Car where key Car{cname= n} = \"Car \" ++ n\n\u003c/pre\u003e",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Indexable",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Indexable",
          "type": "class"
        },
        "index": {
          "description": "Indexable is an utility class used to derive instances of IResource Example data Person Person pname String cars DBRef Car deriving Show Read Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable Since Person and Car are instances of Read ans Show by defining the Indexable instance will implicitly define the IResource instance for file persistence instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Indexable",
          "package": "TCache",
          "partial": "Indexable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Indexable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea persist mechanism has to implement these three primitives\n \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e is the default file persistence\n\u003c/p\u003e",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Persist",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "data"
        },
        "index": {
          "description": "persist mechanism has to implement these three primitives filePersist is the default file persistence",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Persist",
          "package": "TCache",
          "partial": "Persist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize is an alternative to the IResource class for defining persistence in TCache.\nThe deserialization must be as lazy as possible.\nserialization/deserialization are not performance critical in TCache\n\u003c/p\u003e\u003cp\u003eRead, Show,  instances are implicit instances of Serializable\n\u003c/p\u003e\u003cpre\u003e    serialize  = show\n    deserialize= read\n\u003c/pre\u003e\u003cp\u003eSince write and read to disk of to/from the cache are not be very frequent\nThe performance of serialization is not critical.\n\u003c/p\u003e",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Serializable",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Serialize is an alternative to the IResource class for defining persistence in TCache The deserialization must be as lazy as possible serialization deserialization are not performance critical in TCache Read Show instances are implicit instances of Serializable serialize show deserialize read Since write and read to disk of to from the cache are not be very frequent The performance of serialization is not critical",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Serializable",
          "package": "TCache",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete\n\u003c/p\u003e",
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "Persist",
          "package": "TCache",
          "signature": "Persist",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:Persist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Persist\"]"
        },
        "index": {
          "description": "delete",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "Persist",
          "package": "TCache",
          "partial": "Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "defPath",
          "package": "TCache",
          "signature": "defPath",
          "source": "src/Data-TCache-Defs.html#defPath",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "defPath",
          "package": "TCache",
          "partial": "Path",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:defPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "delete",
          "package": "TCache",
          "signature": "Key -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:delete\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:delete\"]"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "delete",
          "normalized": "Key-\u003eIO()",
          "package": "TCache",
          "signature": "Key-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "deserialKey",
          "package": "TCache",
          "signature": "String -\u003e ByteString -\u003e a",
          "source": "src/Data-TCache-Defs.html#deserialKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "deserialKey",
          "normalized": "String-\u003eByteString-\u003ea",
          "package": "TCache",
          "partial": "Key",
          "signature": "String-\u003eByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:deserialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "deserialize",
          "package": "TCache",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-TCache-Defs.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "deserialize",
          "normalized": "ByteString-\u003ea",
          "package": "TCache",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements default persistence of objects in files with their keys as filenames\n\u003c/p\u003e",
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "filePersist",
          "package": "TCache",
          "signature": "Persist",
          "source": "src/Data-TCache-Defs.html#filePersist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:filePersist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:filePersist\"]"
        },
        "index": {
          "description": "Implements default persistence of objects in files with their keys as filenames",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "filePersist",
          "package": "TCache",
          "partial": "Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:filePersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "getDefaultPersist",
          "package": "TCache",
          "signature": "Persist",
          "source": "src/Data-TCache-Defs.html#getDefaultPersist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:getDefaultPersist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:getDefaultPersist\"]"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "getDefaultPersist",
          "package": "TCache",
          "partial": "Default Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:getDefaultPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "key",
          "package": "TCache",
          "signature": "a -\u003e String",
          "source": "src/Data-TCache-Defs.html#key",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "key",
          "normalized": "a-\u003eString",
          "package": "TCache",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread by key. It must be strict\n\u003c/p\u003e",
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "readByKey",
          "package": "TCache",
          "signature": "Key -\u003e IO (Maybe ByteString)",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:readByKey\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:readByKey\"]"
        },
        "index": {
          "description": "read by key It must be strict",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "readByKey",
          "normalized": "Key-\u003eIO(Maybe ByteString)",
          "package": "TCache",
          "partial": "By Key",
          "signature": "Key-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:readByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "serialize",
          "package": "TCache",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-TCache-Defs.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "serialize",
          "normalized": "a-\u003eByteString",
          "package": "TCache",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default persistence mechanism of all \u003ccode\u003eserializable\u003c/code\u003e objetcts. By default it is \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ethis statement must be the first one before any other TCache call\n\u003c/p\u003e",
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "setDefaultPersist",
          "package": "TCache",
          "signature": "Persist -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#setDefaultPersist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:setDefaultPersist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:setDefaultPersist\"]"
        },
        "index": {
          "description": "Set the default persistence mechanism of all serializable objetcts By default it is filePersist this statement must be the first one before any other TCache call",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "setDefaultPersist",
          "normalized": "Persist-\u003eIO()",
          "package": "TCache",
          "partial": "Default Persist",
          "signature": "Persist-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:setDefaultPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.DefaultPersistence",
          "name": "setPersist",
          "package": "TCache",
          "signature": "setPersist",
          "source": "src/Data-TCache-Defs.html#setPersist",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "setPersist",
          "package": "TCache",
          "partial": "Persist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:setPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite. It must be strict\n\u003c/p\u003e",
          "module": "[\"Data.TCache.DefaultPersistence\",\"Data.TCache.Defs\"]",
          "name": "write",
          "package": "TCache",
          "signature": "Key -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:write\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:write\"]"
        },
        "index": {
          "description": "write It must be strict",
          "hierarchy": "Data TCache DefaultPersistence",
          "module": "Data.TCache.DefaultPersistence",
          "name": "write",
          "normalized": "Key-\u003eByteString-\u003eIO()",
          "package": "TCache",
          "signature": "Key-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esome internal definitions. To use default persistence, import\n\u003ccode\u003eData.TCache.DefaultPersistence\u003c/code\u003e instead \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TCache.Defs",
          "name": "Defs",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html",
          "type": "module"
        },
        "index": {
          "description": "some internal definitions To use default persistence import Data.TCache.DefaultPersistence instead",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Defs",
          "package": "TCache",
          "partial": "Defs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "AccessTime",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#AccessTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "AccessTime",
          "package": "TCache",
          "partial": "Access Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:AccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "DBRef",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#DBRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "DBRef",
          "package": "TCache",
          "partial": "DBRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:DBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "Elem",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Elem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Elem",
          "package": "TCache",
          "partial": "Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexable is an utility class used to derive instances of IResource\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003edata Person= Person{ pname :: String, cars :: [DBRef Car]} deriving (Show, Read, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\u003c/pre\u003e\u003cp\u003eSince Person and Car are instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e ans \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, by defining the \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e instance\nwill implicitly define the IResource instance for file persistence:\n\u003c/p\u003e\u003cpre\u003e\ninstance Indexable Person where  key Person{pname=n} = \"Person \" ++ n\ninstance Indexable Car where key Car{cname= n} = \"Car \" ++ n\n\u003c/pre\u003e",
          "module": "Data.TCache.Defs",
          "name": "Indexable",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Indexable",
          "type": "class"
        },
        "index": {
          "description": "Indexable is an utility class used to derive instances of IResource Example data Person Person pname String cars DBRef Car deriving Show Read Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable Since Person and Car are instances of Read ans Show by defining the Indexable instance will implicitly define the IResource instance for file persistence instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Indexable",
          "package": "TCache",
          "partial": "Indexable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Indexable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "Key",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Key",
          "package": "TCache",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "ModifTime",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#ModifTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "ModifTime",
          "package": "TCache",
          "partial": "Modif Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:ModifTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea persist mechanism has to implement these three primitives\n \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e is the default file persistence\n\u003c/p\u003e",
          "module": "Data.TCache.Defs",
          "name": "Persist",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Persist",
          "type": "data"
        },
        "index": {
          "description": "persist mechanism has to implement these three primitives filePersist is the default file persistence",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Persist",
          "package": "TCache",
          "partial": "Persist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by IndexQuery for index persistence(see \u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.TCache.Defs",
          "name": "PersistIndex",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#PersistIndex",
          "type": "class"
        },
        "index": {
          "description": "Used by IndexQuery for index persistence see Data.TCache.IndexQuery",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "PersistIndex",
          "package": "TCache",
          "partial": "Persist Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:PersistIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize is an alternative to the IResource class for defining persistence in TCache.\nThe deserialization must be as lazy as possible.\nserialization/deserialization are not performance critical in TCache\n\u003c/p\u003e\u003cp\u003eRead, Show,  instances are implicit instances of Serializable\n\u003c/p\u003e\u003cpre\u003e    serialize  = show\n    deserialize= read\n\u003c/pre\u003e\u003cp\u003eSince write and read to disk of to/from the cache are not be very frequent\nThe performance of serialization is not critical.\n\u003c/p\u003e",
          "module": "Data.TCache.Defs",
          "name": "Serializable",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Serialize is an alternative to the IResource class for defining persistence in TCache The deserialization must be as lazy as possible serialization deserialization are not performance critical in TCache Read Show instances are implicit instances of Serializable serialize show deserialize read Since write and read to disk of to from the cache are not be very frequent The performance of serialization is not critical",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Serializable",
          "package": "TCache",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "Status",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Status",
          "package": "TCache",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "TPVar",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#TPVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "TPVar",
          "package": "TCache",
          "partial": "TPVar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:TPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.Defs\",\"Data.TCache.Triggers\"]",
          "name": "DBRef",
          "package": "TCache",
          "signature": "DBRef !String !(TPVar a)",
          "source": "src/Data-TCache-Defs.html#DBRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DBRef\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:DBRef\"]"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "DBRef",
          "package": "TCache",
          "partial": "DBRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.Defs\",\"Data.TCache.Triggers\"]",
          "name": "DoNotExist",
          "package": "TCache",
          "signature": "DoNotExist",
          "source": "src/Data-TCache-Defs.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DoNotExist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:DoNotExist\"]"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "DoNotExist",
          "package": "TCache",
          "partial": "Do Not Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DoNotExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.Defs\",\"Data.TCache.Triggers\"]",
          "name": "Elem",
          "package": "TCache",
          "signature": "Elem !a !AccessTime !ModifTime",
          "source": "src/Data-TCache-Defs.html#Elem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Elem\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:Elem\"]"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Elem",
          "package": "TCache",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.Defs\",\"Data.TCache.Triggers\"]",
          "name": "Exist",
          "package": "TCache",
          "signature": "Exist a",
          "source": "src/Data-TCache-Defs.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Exist\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:Exist\"]"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "Exist",
          "package": "TCache",
          "partial": "Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Exist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.Defs\",\"Data.TCache.Triggers\"]",
          "name": "NotRead",
          "package": "TCache",
          "signature": "NotRead",
          "source": "src/Data-TCache-Defs.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:NotRead\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:NotRead\"]"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "NotRead",
          "package": "TCache",
          "partial": "Not Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:NotRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "castErr",
          "package": "TCache",
          "signature": "a -\u003e a1",
          "source": "src/Data-TCache-Defs.html#castErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "castErr",
          "normalized": "a-\u003ea",
          "package": "TCache",
          "partial": "Err",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:castErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defDelResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#defDelResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defDelResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Del Resource",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defDelResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defPath",
          "package": "TCache",
          "signature": "defPath",
          "source": "src/Data-TCache-Defs.html#defPath",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defPath",
          "package": "TCache",
          "partial": "Path",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defReadResourceByKey",
          "package": "TCache",
          "signature": "[Char] -\u003e IO (Maybe a)",
          "source": "src/Data-TCache-Defs.html#defReadResourceByKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defReadResourceByKey",
          "normalized": "[Char]-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Read Resource By Key",
          "signature": "[Char]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defReadResourceByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defWriteResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#defWriteResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defWriteResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Write Resource",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defWriteResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defaultDelete",
          "package": "TCache",
          "signature": "String -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#defaultDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defaultDelete",
          "normalized": "String-\u003eIO()",
          "package": "TCache",
          "partial": "Delete",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defaultPersistIORef",
          "package": "TCache",
          "signature": "IORef Persist",
          "source": "src/Data-TCache-Defs.html#defaultPersistIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defaultPersistIORef",
          "package": "TCache",
          "partial": "Persist IORef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultPersistIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defaultReadByKey",
          "package": "TCache",
          "signature": "String -\u003e IO (Maybe ByteString)",
          "source": "src/Data-TCache-Defs.html#defaultReadByKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defaultReadByKey",
          "normalized": "String-\u003eIO(Maybe ByteString)",
          "package": "TCache",
          "partial": "Read By Key",
          "signature": "String-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultReadByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "defaultWrite",
          "package": "TCache",
          "signature": "String -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#defaultWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "defaultWrite",
          "normalized": "String-\u003eByteString-\u003eIO()",
          "package": "TCache",
          "partial": "Write",
          "signature": "String-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "deserialKey",
          "package": "TCache",
          "signature": "String -\u003e ByteString -\u003e a",
          "source": "src/Data-TCache-Defs.html#deserialKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "deserialKey",
          "normalized": "String-\u003eByteString-\u003ea",
          "package": "TCache",
          "partial": "Key",
          "signature": "String-\u003eByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:deserialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "deserialize",
          "package": "TCache",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-TCache-Defs.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "deserialize",
          "normalized": "ByteString-\u003ea",
          "package": "TCache",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "getPersist",
          "package": "TCache",
          "signature": "a -\u003e Persist",
          "source": "src/Data-TCache-Defs.html#getPersist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "getPersist",
          "normalized": "a-\u003ePersist",
          "package": "TCache",
          "partial": "Persist",
          "signature": "a-\u003ePersist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:getPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "key",
          "package": "TCache",
          "signature": "a -\u003e String",
          "source": "src/Data-TCache-Defs.html#key",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "key",
          "normalized": "a-\u003eString",
          "package": "TCache",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "persistIndex",
          "package": "TCache",
          "signature": "a -\u003e Maybe Persist",
          "source": "src/Data-TCache-Defs.html#persistIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "persistIndex",
          "normalized": "a-\u003eMaybe Persist",
          "package": "TCache",
          "partial": "Index",
          "signature": "a-\u003eMaybe Persist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:persistIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict read from file, needed for default file persistence\n\u003c/p\u003e",
          "module": "Data.TCache.Defs",
          "name": "readFileStrict",
          "package": "TCache",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-TCache-Defs.html#readFileStrict",
          "type": "function"
        },
        "index": {
          "description": "Strict read from file needed for default file persistence",
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "readFileStrict",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "TCache",
          "partial": "File Strict",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:readFileStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "safeWrite",
          "package": "TCache",
          "signature": "[Char] -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-TCache-Defs.html#safeWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "safeWrite",
          "normalized": "[Char]-\u003eByteString-\u003eIO()",
          "package": "TCache",
          "partial": "Write",
          "signature": "[Char]-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:safeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "serialize",
          "package": "TCache",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-TCache-Defs.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "serialize",
          "normalized": "a-\u003eByteString",
          "package": "TCache",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Defs",
          "name": "setPersist",
          "package": "TCache",
          "signature": "setPersist",
          "source": "src/Data-TCache-Defs.html#setPersist",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Defs",
          "module": "Data.TCache.Defs",
          "name": "setPersist",
          "package": "TCache",
          "partial": "Persist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:setPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IResource",
          "name": "IResource",
          "package": "TCache",
          "source": "src/Data-TCache-IResource.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "IResource",
          "package": "TCache",
          "partial": "IResource",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be defined for every object to be cached.\n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "IResource",
          "package": "TCache",
          "source": "src/Data-TCache-IResource.html#IResource",
          "type": "class"
        },
        "index": {
          "description": "Must be defined for every object to be cached",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "IResource",
          "package": "TCache",
          "partial": "IResource",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#t:IResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResources data definition used by \u003ccode\u003ewithSTMResources\u003c/code\u003e    \n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "Resources",
          "package": "TCache",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "data"
        },
        "index": {
          "description": "Resources data definition used by withSTMResources",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "Resources",
          "package": "TCache",
          "partial": "Resources",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#t:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "Resources",
          "package": "TCache",
          "signature": "Resources",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Resources\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Resources\"]"
        },
        "index": {
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "Resources",
          "package": "TCache",
          "partial": "Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforces a retry\n\u003c/p\u003e",
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "Retry",
          "package": "TCache",
          "signature": "Retry",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Retry\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Retry\"]"
        },
        "index": {
          "description": "forces retry",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "Retry",
          "package": "TCache",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the resource. It is called syncronously. So it must commit   \n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "delResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#delResource",
          "type": "method"
        },
        "index": {
          "description": "Delete the resource It is called syncronously So it must commit",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "delResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:delResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IResource",
          "name": "delResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#delResources",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "delResources",
          "normalized": "[a]-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:delResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IResource",
          "name": "keyResource",
          "package": "TCache",
          "signature": "keyResource",
          "source": "src/Data-TCache-IResource.html#keyResource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "keyResource",
          "package": "TCache",
          "partial": "Resource",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:keyResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IResource",
          "name": "readResource",
          "package": "TCache",
          "signature": "a -\u003e IO (Maybe a)",
          "source": "src/Data-TCache-IResource.html#readResource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "readResource",
          "normalized": "a-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the database access and marshalling of the object.\n        while the database access must be strict, the marshaling must be lazy if, as is often the case,\n        some parts of the object are not really accesed.\n        If the object contains DBRefs, this avoids unnecesary cache lookups.\n        This method is called within \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e blocks.\n        Since STM transactions retry, readResourceByKey may be called twice in strange situations. So it must be idempotent, not only in the result but also in the effect in the database\n        . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "readResourceByKey",
          "package": "TCache",
          "signature": "String -\u003e IO (Maybe a)",
          "source": "src/Data-TCache-IResource.html#readResourceByKey",
          "type": "method"
        },
        "index": {
          "description": "Implements the database access and marshalling of the object while the database access must be strict the marshaling must be lazy if as is often the case some parts of the object are not really accesed If the object contains DBRefs this avoids unnecesary cache lookups This method is called within atomically blocks Since STM transactions retry readResourceByKey may be called twice in strange situations So it must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "readResourceByKey",
          "normalized": "String-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Resource By Key",
          "signature": "String-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResourceByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehopefully optimized read of many objects by key.\n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "readResourcesByKey",
          "package": "TCache",
          "signature": "[String] -\u003e IO [Maybe a]",
          "source": "src/Data-TCache-IResource.html#readResourcesByKey",
          "type": "method"
        },
        "index": {
          "description": "hopefully optimized read of many objects by key",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "readResourcesByKey",
          "normalized": "[String]-\u003eIO[Maybe a]",
          "package": "TCache",
          "partial": "Resources By Key",
          "signature": "[String]-\u003eIO[Maybe a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResourcesByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty resources: \u003ccode\u003eresources= Resources  [] [] ()\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "resources",
          "package": "TCache",
          "signature": "Resources a ()",
          "source": "src/Data-TCache-IResource.html#resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:resources\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:resources\"]"
        },
        "index": {
          "description": "Empty resources resources Resources",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "resources",
          "normalized": "Resources a()",
          "package": "TCache",
          "signature": "Resources a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresources to be inserted back in the cache\n\u003c/p\u003e",
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "toAdd",
          "package": "TCache",
          "signature": "[a]",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toAdd\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toAdd\"]"
        },
        "index": {
          "description": "resources to be inserted back in the cache",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "toAdd",
          "normalized": "[a]",
          "package": "TCache",
          "partial": "Add",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresources to be deleted from the cache and from permanent storage\n\u003c/p\u003e",
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "toDelete",
          "package": "TCache",
          "signature": "[a]",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toDelete\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toDelete\"]"
        },
        "index": {
          "description": "resources to be deleted from the cache and from permanent storage",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "toDelete",
          "normalized": "[a]",
          "package": "TCache",
          "partial": "Delete",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult to be returned\n\u003c/p\u003e",
          "module": "[\"Data.TCache.IResource\",\"Data.TCache\"]",
          "name": "toReturn",
          "package": "TCache",
          "signature": "b",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toReturn\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toReturn\"]"
        },
        "index": {
          "description": "result to be returned",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "toReturn",
          "package": "TCache",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo write into persistent storage. It must be strict.  \n Since STM transactions may retry, \u003ccode\u003ewriteResource\u003c/code\u003e must be idempotent, not only in the result but also in the effect in the database.\n . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n All the new obbects are writeen to the database on synchromization,\n so writeResource must not autocommit.\n Commit code must be located in the postcondition. (see  \u003ccode\u003esetConditions\u003c/code\u003e)\n Since there is no provision for rollback from failure in writing to\n persistent storage, \u003ccode\u003e\u003ca\u003ewriteResource\u003c/a\u003e\u003c/code\u003e must retry until success.\n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "writeResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#writeResource",
          "type": "method"
        },
        "index": {
          "description": "To write into persistent storage It must be strict Since STM transactions may retry writeResource must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted All the new obbects are writeen to the database on synchromization so writeResource must not autocommit Commit code must be located in the postcondition see setConditions Since there is no provision for rollback from failure in writing to persistent storage writeResource must retry until success",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "writeResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:writeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiple write (hopefully) in a single request. That is up to you and your backend\n . Defined by default as 'mapM_ writeResource'\n\u003c/p\u003e",
          "module": "Data.TCache.IResource",
          "name": "writeResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#writeResources",
          "type": "method"
        },
        "index": {
          "description": "multiple write hopefully in single request That is up to you and your backend Defined by default as mapM writeResource",
          "hierarchy": "Data TCache IResource",
          "module": "Data.TCache.IResource",
          "name": "writeResources",
          "normalized": "[a]-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:writeResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an experimental typed query language for TCache build on pure\nhaskell. It is minimally intrusive (no special data definitions, no special syntax, no template\nhaskell). It uses the same register fields from the data definitions. Both for query conditions\n and selections. It is executed in haskell, no external database support is needed.\n\u003c/p\u003e\u003cp\u003eit includes\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A method for triggering the \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e-ation of the record fields that you want to query\n\u003c/li\u003e\u003cli\u003e A typed query language of these record fields, with:\n\u003c/li\u003e\u003cli\u003e Relational operators:  \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003e=.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c=.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.||.\u003c/a\u003e\u003c/code\u003e to compare fields with\n       values (returning lists of DBRefs) or fields between them, returning joins (lists of pairs of\n       lists of DBRefs that meet the condition).\n\u003c/li\u003e\u003cli\u003e a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e method to extract tuples of field values from the  DBRefs\n\u003c/li\u003e\u003cli\u003e a \u003ccode\u003e\u003ca\u003erecordsWith\u003c/a\u003e\u003c/code\u003e clause to extract entire registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn example that register the owner and name fields fo the Car register and the\nname of the Person register, create the Bruce register, return the Bruce DBRef, create two Car registers with bruce as owner\nand query for the registers with bruce as owner and its name alpabeticaly higuer than \"Bat mobile\"\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.TCache\u003c/a\u003e\nimport \u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e\nimport \u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e\nimport \u003ca\u003eData.Typeable\u003c/a\u003e\n\ndata Person= Person {pname :: String} deriving  (Show, Read, Eq, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\ninstance \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e Person where key Person{pname= n} = \"Person \" ++ n\ninstance \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e Car where key Car{cname= n} = \"Car \" ++ n\n\nmain =  do\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e owner\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e pname\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e cname\n   bruce \u003c- atomically $ \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e $ Person \"bruce\"\n   atomically $  mapM_ \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e [Car bruce \"Bat Mobile\", Car bruce \"Porsche\"]\n   r \u003c- atomically $ cname \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \"Porsche\"\n   print r\n   r \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e (cname, owner) $  owner \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e bruce \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e cname \u003ccode\u003e\u003ca\u003e.\u003e=.\u003c/a\u003e\u003c/code\u003e \"Bat Mobile\"\n   print r\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e [DBRef \"Car Porsche\"]\n [(\"Porsche\",DBRef \"Person bruce\")]\n\u003c/pre\u003e\u003cp\u003eNOTES:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the index is instance of \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e. This can be used to\npersist in the user-defined storage using DefaultPersistence\n\u003c/li\u003e\u003cli\u003e The Join feature has not been properly tested\n\u003c/li\u003e\u003cli\u003e Record fields are recognized by its type, so if we define two record fields\nwith the same type:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e data Person = Person {name , surname :: String}\n\u003c/pre\u003e\u003cp\u003ethen a query for \u003ccode\u003ename \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ca\u003eBruce\u003c/a\u003e\u003c/code\u003e  is indistinguishable from \u003ccode\u003esurname \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ca\u003eBruce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWill return indexOf the registers with surname \u003ca\u003eBruce\u003c/a\u003e as well. So if two or more\nfields in a registers are to be indexed, they must have different types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TCache.IndexQuery",
          "name": "IndexQuery",
          "package": "TCache",
          "source": "src/Data-TCache-IndexQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements an experimental typed query language for TCache build on pure haskell It is minimally intrusive no special data definitions no special syntax no template haskell It uses the same register fields from the data definitions Both for query conditions and selections It is executed in haskell no external database support is needed it includes method for triggering the index ation of the record fields that you want to query typed query language of these record fields with Relational operators to compare fields with values returning lists of DBRefs or fields between them returning joins lists of pairs of lists of DBRefs that meet the condition select method to extract tuples of field values from the DBRefs recordsWith clause to extract entire registers An example that register the owner and name fields fo the Car register and the name of the Person register create the Bruce register return the Bruce DBRef create two Car registers with bruce as owner and query for the registers with bruce as owner and its name alpabeticaly higuer than Bat mobile import Data.TCache import Data.TCache.IndexQuery import Data.TCache.DefaultPersistence import Data.Typeable data Person Person pname String deriving Show Read Eq Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car main do index owner index pname index cname bruce atomically newDBRef Person bruce atomically mapM newDBRef Car bruce Bat Mobile Car bruce Porsche atomically cname Porsche print atomically select cname owner owner bruce cname Bat Mobile print Will produce DBRef Car Porsche Porsche DBRef Person bruce NOTES the index is instance of Indexable and Serializable This can be used to persist in the user-defined storage using DefaultPersistence The Join feature has not been properly tested Record fields are recognized by its type so if we define two record fields with the same type data Person Person name surname String then query for name Bruce is indistinguishable from surname Bruce Will return indexOf the registers with surname Bruce as well So if two or more fields in registers are to be indexed they must have different types",
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "IndexQuery",
          "package": "TCache",
          "partial": "Index Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "Queriable",
          "package": "TCache",
          "source": "src/Data-TCache-IndexQuery.html#Queriable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "Queriable",
          "package": "TCache",
          "partial": "Queriable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#t:Queriable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.||.)",
          "package": "TCache",
          "signature": "STM set -\u003e STM set' -\u003e STM setResult",
          "source": "src/Data-TCache-IndexQuery.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.||.) .||.",
          "normalized": "STM a-\u003eSTM b-\u003eSTM c",
          "package": "TCache",
          "signature": "STM set-\u003eSTM set'-\u003eSTM setResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.&&.)",
          "package": "TCache",
          "signature": "STM set -\u003e STM set' -\u003e STM setResult",
          "source": "src/Data-TCache-IndexQuery.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.&&.) .&&.",
          "normalized": "STM a-\u003eSTM b-\u003eSTM c",
          "package": "TCache",
          "signature": "STM set-\u003eSTM set'-\u003eSTM setResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003c=.)",
          "package": "TCache",
          "signature": "field1 -\u003e field2 -\u003e STM res",
          "source": "src/Data-TCache-IndexQuery.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "a-\u003ea-\u003eSTM b",
          "package": "TCache",
          "signature": "field-\u003efield-\u003eSTM res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003c.)",
          "package": "TCache",
          "signature": "field1 -\u003e field2 -\u003e STM res",
          "source": "src/Data-TCache-IndexQuery.html#.%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "a-\u003ea-\u003eSTM b",
          "package": "TCache",
          "signature": "field-\u003efield-\u003eSTM res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.==.)",
          "package": "TCache",
          "signature": "field1 -\u003e field2 -\u003e STM res",
          "source": "src/Data-TCache-IndexQuery.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.==.) .==.",
          "normalized": "a-\u003ea-\u003eSTM b",
          "package": "TCache",
          "signature": "field-\u003efield-\u003eSTM res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003e=.)",
          "package": "TCache",
          "signature": "field1 -\u003e field2 -\u003e STM res",
          "source": "src/Data-TCache-IndexQuery.html#.%3E%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "a-\u003ea-\u003eSTM b",
          "package": "TCache",
          "signature": "field-\u003efield-\u003eSTM res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003e.)",
          "package": "TCache",
          "signature": "field1 -\u003e field2 -\u003e STM res",
          "source": "src/Data-TCache-IndexQuery.html#.%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "a-\u003ea-\u003eSTM b",
          "package": "TCache",
          "signature": "field-\u003efield-\u003eSTM res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a trigger for indexing the values of the field passed as parameter.\n the indexed field can be used to perform relational-like searches\n\u003c/p\u003e",
          "module": "Data.TCache.IndexQuery",
          "name": "index",
          "package": "TCache",
          "signature": "(reg -\u003e a) -\u003e IO ()",
          "source": "src/Data-TCache-IndexQuery.html#index",
          "type": "function"
        },
        "index": {
          "description": "Register trigger for indexing the values of the field passed as parameter the indexed field can be used to perform relational-like searches",
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "index",
          "normalized": "(a-\u003eb)-\u003eIO()",
          "package": "TCache",
          "signature": "(reg-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all  the (indexed)  values which this field has and a DBRef pointer to the register\n\u003c/p\u003e",
          "module": "Data.TCache.IndexQuery",
          "name": "indexOf",
          "package": "TCache",
          "signature": "(reg -\u003e a) -\u003e STM [(a, [DBRef reg])]",
          "source": "src/Data-TCache-IndexQuery.html#indexOf",
          "type": "function"
        },
        "index": {
          "description": "return all the indexed values which this field has and DBRef pointer to the register",
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "indexOf",
          "normalized": "(a-\u003eb)-\u003eSTM[(b,[DBRef a])]",
          "package": "TCache",
          "partial": "Of",
          "signature": "(reg-\u003ea)-\u003eSTM[(a,[DBRef reg])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:indexOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "recordsWith",
          "package": "TCache",
          "signature": "STM [DBRef a] -\u003e STM [a]",
          "source": "src/Data-TCache-IndexQuery.html#recordsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "recordsWith",
          "normalized": "STM[DBRef a]-\u003eSTM[a]",
          "package": "TCache",
          "partial": "With",
          "signature": "STM[DBRef a]-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:recordsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.IndexQuery",
          "name": "select",
          "package": "TCache",
          "signature": "selector -\u003e a -\u003e res",
          "source": "src/Data-TCache-IndexQuery.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache IndexQuery",
          "module": "Data.TCache.IndexQuery",
          "name": "select",
          "normalized": "a-\u003eb-\u003ec",
          "package": "TCache",
          "signature": "selector-\u003ea-\u003eres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements full text indexation (\u003ccode\u003e\u003ca\u003eindexText\u003c/a\u003e\u003c/code\u003e) and text search(\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e), as an addition to\nthe query language implemented in \u003ccode\u003e\u003ca\u003eIndexQuery\u003c/a\u003e\u003c/code\u003e\nit also can index the lists of elements in a field (with \u003ccode\u003e\u003ca\u003eindexList\u003c/a\u003e\u003c/code\u003e)\nso that it is possible to ask for the registers that contains a given element\nin the given field (with \u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eAn example of full text search and element search in a list in combination\nusing the \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e operator defined in \u003ca\u003eindexQuery\u003c/a\u003e.\nbefore and after the update of the register\n\u003c/p\u003e\u003cpre\u003e\ndata Doc= Doc{title :: String , authors :: [String], body :: String} deriving (Read,Show, Typeable)\ninstance Indexable Doc where\n  key Doc{title=t}= t\n\ninstance Serializable Doc  where\n  serialize= pack . show\n  deserialize= read . unpack\n\nmain= do\n  \u003ccode\u003e\u003ca\u003eindexText\u003c/a\u003e\u003c/code\u003e  body T.pack\n  \u003ccode\u003e\u003ca\u003eindexList\u003c/a\u003e\u003c/code\u003e authors  (map T.pack)\n\nlet doc= Doc{title=  \"title\", authors=[\"john\",\"Lewis\"], body=  \"Hi, how are you\"}\n  rdoc \u003c- atomically $ newDBRef doc\n\nr0 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ authors `\u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e` \"Lewis\"\n  print r0\n\nr1 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ body `\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e` \"how are you\"\n  print r1\n\nr2 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e body $ body `\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e` \"how are you\" .&&. authors \u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e \u003ca\u003ejohn\u003c/a\u003e\n  print r2\n\natomically $ writeDBRef rdoc  doc{ body=  \"what's up\"}\n\nr3 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ body  `'contains'\\` \"how are you\"\n  print r3\n\nif  r0== r1 && r1== [title doc] then print \"OK\" else print \"FAIL\"\n  if  r3== [] then print \"OK\" else print \"FAIL\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.TCache.IndexText",
          "name": "IndexText",
          "package": "TCache",
          "source": "src/Data-TCache-IndexText.html",
          "type": "module"
        },
        "index": {
          "description": "Implements full text indexation indexText and text search contains as an addition to the query language implemented in IndexQuery it also can index the lists of elements in field with indexList so that it is possible to ask for the registers that contains given element in the given field with containsElem An example of full text search and element search in list in combination using the operator defined in indexQuery before and after the update of the register data Doc Doc title String authors String body String deriving Read Show Typeable instance Indexable Doc where key Doc title instance Serializable Doc where serialize pack show deserialize read unpack main do indexText body T.pack indexList authors map T.pack let doc Doc title title authors john Lewis body Hi how are you rdoc atomically newDBRef doc r0 atomically select title authors containsElem Lewis print r0 r1 atomically select title body contains how are you print r1 r2 atomically select body body contains how are you authors containsElem john print r2 atomically writeDBRef rdoc doc body what up r3 atomically select title body contains how are you print r3 if r0 r1 r1 title doc then print OK else print FAIL if r3 then print OK else print FAIL",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "IndexText",
          "package": "TCache",
          "partial": "Index Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all the values of a given field (if it has been indexed with \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.TCache.IndexText",
          "name": "allElemsOf",
          "package": "TCache",
          "signature": "(a -\u003e b) -\u003e STM [Text]",
          "source": "src/Data-TCache-IndexText.html#allElemsOf",
          "type": "function"
        },
        "index": {
          "description": "return all the values of given field if it has been indexed with index",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "allElemsOf",
          "normalized": "(a-\u003eb)-\u003eSTM[Text]",
          "package": "TCache",
          "partial": "Elems Of",
          "signature": "(a-\u003eb)-\u003eSTM[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:allElemsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the DBRefs whose fields include all the words in the requested text contents.Except the\n words  with less than three characters that are not digits or uppercase, that are filtered out before making the query\n\u003c/p\u003e",
          "module": "Data.TCache.IndexText",
          "name": "contains",
          "package": "TCache",
          "signature": "(a -\u003e b)-\u003e String-\u003e STM [DBRef a]",
          "type": "function"
        },
        "index": {
          "description": "return the DBRefs whose fields include all the words in the requested text contents.Except the words with less than three characters that are not digits or uppercase that are filtered out before making the query",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "contains",
          "normalized": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
          "package": "TCache",
          "signature": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the DBRefs of the registers whose field (first parameter, usually a container) contains the requested value.\n\u003c/p\u003e",
          "module": "Data.TCache.IndexText",
          "name": "containsElem",
          "package": "TCache",
          "signature": "(a -\u003e b) -\u003e String -\u003e STM [DBRef a]",
          "source": "src/Data-TCache-IndexText.html#containsElem",
          "type": "function"
        },
        "index": {
          "description": "return the DBRefs of the registers whose field first parameter usually container contains the requested value",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "containsElem",
          "normalized": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
          "package": "TCache",
          "partial": "Elem",
          "signature": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:containsElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrigger the indexation of list fields with elements convertible to Text\n\u003c/p\u003e",
          "module": "Data.TCache.IndexText",
          "name": "indexList",
          "package": "TCache",
          "signature": "(a -\u003e b)-\u003e (b -\u003e [Text])-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "trigger the indexation of list fields with elements convertible to Text",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "indexList",
          "normalized": "(a-\u003eb)-\u003e(b-\u003e[Text])-\u003eIO()",
          "package": "TCache",
          "partial": "List",
          "signature": "(a-\u003eb)-\u003e(b-\u003e[Text])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:indexList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart a trigger to index the contents of a register field\n\u003c/p\u003e",
          "module": "Data.TCache.IndexText",
          "name": "indexText",
          "package": "TCache",
          "signature": "(a -\u003e b)-\u003e (b -\u003e Text)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "start trigger to index the contents of register field",
          "hierarchy": "Data TCache IndexText",
          "module": "Data.TCache.IndexText",
          "name": "indexText",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eText)-\u003eIO()",
          "package": "TCache",
          "partial": "Text",
          "signature": "(a-\u003eb)-\u003e(b-\u003eText)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:indexText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Memoization",
          "name": "Memoization",
          "package": "TCache",
          "source": "src/Data-TCache-Memoization.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "Memoization",
          "package": "TCache",
          "partial": "Memoization",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto execute a monad for the purpose of memoizing its result\n\u003c/p\u003e",
          "module": "Data.TCache.Memoization",
          "name": "Executable",
          "package": "TCache",
          "source": "src/Data-TCache-Memoization.html#Executable",
          "type": "class"
        },
        "index": {
          "description": "to execute monad for the purpose of memoizing its result",
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "Executable",
          "package": "TCache",
          "partial": "Executable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#t:Executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egiven a string, return a key that can be used in Indexable instances\n  Of non persistent objects, such are cached objects (it changes fron execution to execution)\n . It uses \u003ccode\u003e\u003ca\u003eaddrHash\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache.Memoization",
          "name": "addrStr",
          "package": "TCache",
          "signature": "a -\u003e [Char]",
          "source": "src/Data-TCache-Memoization.html#addrStr",
          "type": "function"
        },
        "index": {
          "description": "given string return key that can be used in Indexable instances Of non persistent objects such are cached objects it changes fron execution to execution It uses addrHash",
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "addrStr",
          "normalized": "a-\u003e[Char]",
          "package": "TCache",
          "partial": "Str",
          "signature": "a-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:addrStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the result of a computation for a certain time. A string \u003ccode\u003e\u003ca\u003ekey\u003c/a\u003e\u003c/code\u003e is used to index the result\n\u003c/p\u003e\u003cp\u003eThe Int parameter is the timeout, in second after the last evaluation, after which the cached value will be discarded and the expression will be evaluated again if demanded\n . Time == 0 means no timeout\n\u003c/p\u003e",
          "module": "Data.TCache.Memoization",
          "name": "cachedByKey",
          "package": "TCache",
          "signature": "String -\u003e Int -\u003e m a -\u003e m a",
          "source": "src/Data-TCache-Memoization.html#cachedByKey",
          "type": "function"
        },
        "index": {
          "description": "Memoize the result of computation for certain time string key is used to index the result The Int parameter is the timeout in second after the last evaluation after which the cached value will be discarded and the expression will be evaluated again if demanded Time means no timeout",
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "cachedByKey",
          "normalized": "String-\u003eInt-\u003ea b-\u003ea b",
          "package": "TCache",
          "partial": "By Key",
          "signature": "String-\u003eInt-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Memoization",
          "name": "cachedByKeySTM",
          "package": "TCache",
          "signature": "String -\u003e Int -\u003e m a -\u003e STM a",
          "source": "src/Data-TCache-Memoization.html#cachedByKeySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "cachedByKeySTM",
          "normalized": "String-\u003eInt-\u003ea b-\u003eSTM b",
          "package": "TCache",
          "partial": "By Key STM",
          "signature": "String-\u003eInt-\u003em a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedByKeySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea pure version of cached\n\u003c/p\u003e",
          "module": "Data.TCache.Memoization",
          "name": "cachedp",
          "package": "TCache",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-TCache-Memoization.html#cachedp",
          "type": "function"
        },
        "index": {
          "description": "pure version of cached",
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "cachedp",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "TCache",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Memoization",
          "name": "execute",
          "package": "TCache",
          "signature": "m a -\u003e a",
          "source": "src/Data-TCache-Memoization.html#execute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "execute",
          "normalized": "a b-\u003eb",
          "package": "TCache",
          "signature": "m a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Memoization",
          "name": "flushCached",
          "package": "TCache",
          "signature": "String -\u003e IO ()",
          "source": "src/Data-TCache-Memoization.html#flushCached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "flushCached",
          "normalized": "String-\u003eIO()",
          "package": "TCache",
          "partial": "Cached",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:flushCached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ememoize the result of a computation for a certain time. This is useful for  caching  costly data\n such  web pages composed on the fly.\n\u003c/p\u003e\u003cp\u003etime == 0 means infinite\n\u003c/p\u003e",
          "module": "Data.TCache.Memoization",
          "name": "writeCached",
          "package": "TCache",
          "signature": "a -\u003e (a -\u003e m b) -\u003e b -\u003e Integer -\u003e STM ()",
          "source": "src/Data-TCache-Memoization.html#writeCached",
          "type": "function"
        },
        "index": {
          "description": "memoize the result of computation for certain time This is useful for caching costly data such web pages composed on the fly time means infinite",
          "hierarchy": "Data TCache Memoization",
          "module": "Data.TCache.Memoization",
          "name": "writeCached",
          "normalized": "a-\u003e(a-\u003eb c)-\u003ec-\u003eInteger-\u003eSTM()",
          "package": "TCache",
          "partial": "Cached",
          "signature": "a-\u003e(a-\u003em b)-\u003eb-\u003eInteger-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:writeCached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Triggers",
          "name": "Triggers",
          "package": "TCache",
          "source": "src/Data-TCache-Triggers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "Triggers",
          "package": "TCache",
          "partial": "Triggers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Triggers",
          "name": "DBRef",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#DBRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "DBRef",
          "package": "TCache",
          "partial": "DBRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:DBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Triggers",
          "name": "Elem",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Elem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "Elem",
          "package": "TCache",
          "partial": "Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache.Triggers",
          "name": "Status",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "Status",
          "package": "TCache",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an user defined trigger to the list of triggers\nTrriggers are called just before an object of the given type is created, modified or deleted.\nThe DBRef to the object and the new value is passed to the trigger.\nThe called trigger function has two parameters: the DBRef being accesed\n(which still contains the old value), and the new value.\nIf the DBRef is being deleted, the second parameter is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nif the DBRef contains Nothing, then the object is being created\n\u003c/p\u003e",
          "module": "[\"Data.TCache.Triggers\",\"Data.TCache\"]",
          "name": "addTrigger",
          "package": "TCache",
          "signature": "(DBRef a -\u003e Maybe a -\u003e STM ()) -\u003e IO ()",
          "source": "src/Data-TCache-Triggers.html#addTrigger",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:addTrigger\",\"http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:addTrigger\"]"
        },
        "index": {
          "description": "Add an user defined trigger to the list of triggers Trriggers are called just before an object of the given type is created modified or deleted The DBRef to the object and the new value is passed to the trigger The called trigger function has two parameters the DBRef being accesed which still contains the old value and the new value If the DBRef is being deleted the second parameter is Nothing if the DBRef contains Nothing then the object is being created",
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "addTrigger",
          "normalized": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()",
          "package": "TCache",
          "partial": "Trigger",
          "signature": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:addTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einternally called when a DBRef is modified\u003cem\u003edeleted\u003c/em\u003ecreated\n\u003c/p\u003e",
          "module": "Data.TCache.Triggers",
          "name": "applyTriggers",
          "package": "TCache",
          "signature": "[DBRef a] -\u003e [Maybe a] -\u003e STM ()",
          "source": "src/Data-TCache-Triggers.html#applyTriggers",
          "type": "function"
        },
        "index": {
          "description": "internally called when DBRef is modified deleted created",
          "hierarchy": "Data TCache Triggers",
          "module": "Data.TCache.Triggers",
          "name": "applyTriggers",
          "normalized": "[DBRef a]-\u003e[Maybe a]-\u003eSTM()",
          "package": "TCache",
          "partial": "Triggers",
          "signature": "[DBRef a]-\u003e[Maybe a]-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:applyTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCache is a transactional cache with configurable persitence that permits\nSTM transactions with objects that syncronize sincromous or asyncronously with\ntheir user defined storages. Default persistence in files is provided by default\n\u003c/p\u003e\u003cp\u003eTCache implements ''DBRef' 's . They are persistent STM references  with a typical Haskell interface.\nsimitar to TVars (\u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadDBRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e etc) but with added. persistence\n. DBRefs are serializable, so they can be stored and retrieved.\nBecause they are references,they point to other serializable registers.\nThis permits persistent mutable Inter-object relations\n\u003c/p\u003e\u003cp\u003eFor simple transactions of lists of objects of the same type TCache implements\ninversion of control primitives \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e and variants, that call pure user defined code for registers update. Examples below.\n\u003c/p\u003e\u003cp\u003eTriggers in \u003ca\u003eData.TCache.Triggers\u003c/a\u003e are user defined hooks that are called back on register updates.\n.They are used internally for indexing.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e implements an straighforwards pure haskell type safe query language  based\n on register field relations. This module must be imported separately.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.IndexText\u003c/a\u003e add full text search and content search to the query language\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e has instances for key indexation , serialization\n and default file persistence. The file persistence is more reliable, and the embedded IO reads inside STM transactions are safe.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Persistent.Collection\u003c/a\u003e implements a persistent, transactional collection with Queue interface as well as\n indexed access by key\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TCache",
          "name": "TCache",
          "package": "TCache",
          "source": "src/Data-TCache.html",
          "type": "module"
        },
        "index": {
          "description": "TCache is transactional cache with configurable persitence that permits STM transactions with objects that syncronize sincromous or asyncronously with their user defined storages Default persistence in files is provided by default TCache implements DBRef They are persistent STM references with typical Haskell interface simitar to TVars newDBRef readDBRef writeDBRef etc but with added persistence DBRefs are serializable so they can be stored and retrieved Because they are references they point to other serializable registers This permits persistent mutable Inter-object relations For simple transactions of lists of objects of the same type TCache implements inversion of control primitives withSTMResources and variants that call pure user defined code for registers update Examples below Triggers in Data.TCache.Triggers are user defined hooks that are called back on register updates They are used internally for indexing Data.TCache.IndexQuery implements an straighforwards pure haskell type safe query language based on register field relations This module must be imported separately Data.TCache.IndexText add full text search and content search to the query language Data.TCache.DefaultPersistence has instances for key indexation serialization and default file persistence The file persistence is more reliable and the embedded IO reads inside STM transactions are safe Data.Persistent.Collection implements persistent transactional collection with Queue interface as well as indexed access by key",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "TCache",
          "package": "TCache",
          "partial": "TCache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "Cache",
          "package": "TCache",
          "source": "src/Data-TCache.html#Cache",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "Cache",
          "package": "TCache",
          "partial": "Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "DBRef",
          "package": "TCache",
          "source": "src/Data-TCache-Defs.html#DBRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "DBRef",
          "package": "TCache",
          "partial": "DBRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:DBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be defined for every object to be cached.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "IResource",
          "package": "TCache",
          "source": "src/Data-TCache-IResource.html#IResource",
          "type": "class"
        },
        "index": {
          "description": "Must be defined for every object to be cached",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "IResource",
          "package": "TCache",
          "partial": "IResource",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:IResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResources data definition used by \u003ccode\u003ewithSTMResources\u003c/code\u003e    \n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "Resources",
          "package": "TCache",
          "source": "src/Data-TCache-IResource.html#Resources",
          "type": "data"
        },
        "index": {
          "description": "Resources data definition used by withSTMResources",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "Resources",
          "package": "TCache",
          "partial": "Resources",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "STM",
          "package": "TCache",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "STM",
          "package": "TCache",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "SyncMode",
          "package": "TCache",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "SyncMode",
          "package": "TCache",
          "partial": "Sync Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:SyncMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "Asyncronous",
          "package": "TCache",
          "signature": "Asyncronous",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "Asyncronous",
          "package": "TCache",
          "partial": "Asyncronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Asyncronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e to write the state\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "SyncManual",
          "package": "TCache",
          "signature": "SyncManual",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "description": "use syncCache to write the state",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "SyncManual",
          "package": "TCache",
          "partial": "Sync Manual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:SyncManual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esync state to permanent storage when \u003ccode\u003e\u003ca\u003eatomicallySync\u003c/a\u003e\u003c/code\u003e is invoked\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "Synchronous",
          "package": "TCache",
          "signature": "Synchronous",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "description": "sync state to permanent storage when atomicallySync is invoked",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "Synchronous",
          "package": "TCache",
          "partial": "Synchronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Synchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e\u003cp\u003eYou cannot use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Any attempt to do so will result in a runtime error.  (Reason: allowing\n this would effectively allow a transaction inside a transaction, depending\n on exactly when the thunk is evaluated.)\n\u003c/p\u003e\u003cp\u003eHowever, see \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e, which can be called inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e,\n and which allows top-level TVars to be allocated.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "atomically",
          "package": "TCache",
          "signature": "STM a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Perform series of STM actions atomically You cannot use atomically inside an unsafePerformIO or unsafeInterleaveIO Any attempt to do so will result in runtime error Reason allowing this would effectively allow transaction inside transaction depending on exactly when the thunk is evaluated However see newTVarIO which can be called inside unsafePerformIO and which allows top-level TVars to be allocated",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "atomically",
          "normalized": "STM a-\u003eIO a",
          "package": "TCache",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a synchronization of the cache with permanent storage once executed the STM transaction\n when \u003ccode\u003e\u003ca\u003esyncWrite\u003c/a\u003e\u003c/code\u003e policy is \u003ccode\u003e\u003ca\u003eSynchronous\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "atomicallySync",
          "package": "TCache",
          "signature": "STM a -\u003e IO a",
          "source": "src/Data-TCache.html#atomicallySync",
          "type": "function"
        },
        "index": {
          "description": "Perform synchronization of the cache with permanent storage once executed the STM transaction when syncWrite policy is Synchronous",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "atomicallySync",
          "normalized": "STM a-\u003eIO a",
          "package": "TCache",
          "partial": "Sync",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:atomicallySync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of the cache when async\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "cacheSize",
          "package": "TCache",
          "signature": "Int",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "description": "size of the cache when async",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "cacheSize",
          "package": "TCache",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:cacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user-defined check-for-cleanup-from-cache for each object. \u003ccode\u003e\u003ca\u003edefaultCheck\u003c/a\u003e\u003c/code\u003e is an example\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "check",
          "package": "TCache",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Bool",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "description": "The user-defined check-for-cleanup-from-cache for each object defaultCheck is an example",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "check",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
          "package": "TCache",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves the unsaved elems of the cache.\n Cache writes allways save a coherent state.\n  Unlike \u003ccode\u003esyncChace\u003c/code\u003e this call deletes some elems of  the cache when the number of elems \u003e \u003ccode\u003esizeObjects\u003c/code\u003e.\n  The deletion depends on the check criteria, expressed by the first parameter.\n  \u003ccode\u003e\u003ca\u003edefaultCheck\u003c/a\u003e\u003c/code\u003e is the one implemented to be passed by default. Look at it to understand the clearing criteria.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "clearSyncCache",
          "package": "TCache",
          "signature": "(Integer -\u003e Integer -\u003e Integer -\u003e Bool) -\u003e Int -\u003e IO ()",
          "source": "src/Data-TCache.html#clearSyncCache",
          "type": "function"
        },
        "index": {
          "description": "Saves the unsaved elems of the cache Cache writes allways save coherent state Unlike syncChace this call deletes some elems of the cache when the number of elems sizeObjects The deletion depends on the check criteria expressed by the first parameter defaultCheck is the one implemented to be passed by default Look at it to understand the clearing criteria",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "clearSyncCache",
          "normalized": "(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO()",
          "package": "TCache",
          "partial": "Sync Cache",
          "signature": "(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:clearSyncCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart the thread that periodically call \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e to clean and writes on the persistent storage.\n it is indirecly set by means of \u003ccode\u003e\u003ca\u003esyncWrite\u003c/a\u003e\u003c/code\u003e, since it is more higuer level. I recommend to use the latter\n Otherwise, \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eatomicallySync\u003c/a\u003e\u003c/code\u003e must be invoked explicitly or no persistence will exist.\n Cache writes allways save a coherent state\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "clearSyncCacheProc",
          "package": "TCache",
          "signature": "Int-\u003e (Integer -\u003e Integer -\u003e Integer -\u003e Bool)-\u003e Int-\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Start the thread that periodically call clearSyncCache to clean and writes on the persistent storage it is indirecly set by means of syncWrite since it is more higuer level recommend to use the latter Otherwise syncCache or clearSyncCache or atomicallySync must be invoked explicitly or no persistence will exist Cache writes allways save coherent state",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "clearSyncCacheProc",
          "normalized": "Int-\u003e(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO ThreadId",
          "package": "TCache",
          "partial": "Sync Cache Proc",
          "signature": "Int-\u003e(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:clearSyncCacheProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a default cache clearance check. It forces to drop from the cache all the\n elems not accesed since half the time between now and the last sync\n if it returns True, the object will be discarded from the cache\n it is invoked when the cache size exceeds the number of objects configured\n in \u003ccode\u003e\u003ca\u003eclearSyncCacheProc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "defaultCheck",
          "package": "TCache",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "This is default cache clearance check It forces to drop from the cache all the elems not accesed since half the time between now and the last sync if it returns True the object will be discarded from the cache it is invoked when the cache size exceeds the number of objects configured in clearSyncCacheProc or clearSyncCache",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "defaultCheck",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
          "package": "TCache",
          "partial": "Check",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:defaultCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the content of the DBRef form the cache and from permanent storage\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "delDBRef",
          "package": "TCache",
          "signature": "DBRef a -\u003e STM ()",
          "source": "src/Data-TCache.html#delDBRef",
          "type": "function"
        },
        "index": {
          "description": "Delete the content of the DBRef form the cache and from permanent storage",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "delDBRef",
          "normalized": "DBRef a-\u003eSTM()",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "DBRef a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the resource. It is called syncronously. So it must commit   \n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "delResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#delResource",
          "type": "method"
        },
        "index": {
          "description": "Delete the resource It is called syncronously So it must commit",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "delResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "delResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#delResources",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "delResources",
          "normalized": "[a]-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the   resource from cache and from persistent storage.\n\u003c/p\u003e\u003cpre\u003e deleteResource r= \u003ccode\u003e\u003ca\u003edeleteResources\u003c/a\u003e\u003c/code\u003e [r]\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "deleteResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache.html#deleteResource",
          "type": "function"
        },
        "index": {
          "description": "Delete the resource from cache and from persistent storage deleteResource deleteResources",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "deleteResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:deleteResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the list of resources from cache and from persistent storage.\n\u003c/p\u003e\u003cpre\u003e  deleteResources rs= atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 where  f1 mrs = Resources  [] (catMaybes mrs) ()\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "deleteResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO ()",
          "source": "src/Data-TCache.html#deleteResources",
          "type": "function"
        },
        "index": {
          "description": "Delete the list of resources from cache and from persistent storage deleteResources rs atomically withSTMResources rs f1 where f1 mrs Resources catMaybes mrs",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "deleteResources",
          "normalized": "[a]-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:deleteResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrops the entire cache.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "flushAll",
          "package": "TCache",
          "signature": "STM ()",
          "source": "src/Data-TCache.html#flushAll",
          "type": "function"
        },
        "index": {
          "description": "drops the entire cache",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "flushAll",
          "normalized": "STM()",
          "package": "TCache",
          "partial": "All",
          "signature": "STM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the pointed object from the cache, not the database (see \u003ccode\u003e\u003ca\u003edelDBRef\u003c/a\u003e\u003c/code\u003e)\n useful for cache invalidation when the database is modified by other process\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "flushDBRef",
          "package": "TCache",
          "signature": "DBRef a -\u003e STM ()",
          "source": "src/Data-TCache.html#flushDBRef",
          "type": "function"
        },
        "index": {
          "description": "Deletes the pointed object from the cache not the database see delDBRef useful for cache invalidation when the database is modified by other process",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "flushDBRef",
          "normalized": "DBRef a-\u003eSTM()",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "DBRef a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflush the element with the given key\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "flushKey",
          "package": "TCache",
          "signature": "String -\u003e STM ()",
          "source": "src/Data-TCache.html#flushKey",
          "type": "function"
        },
        "index": {
          "description": "flush the element with the given key",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "flushKey",
          "normalized": "String-\u003eSTM()",
          "package": "TCache",
          "partial": "Key",
          "signature": "String-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of seconds between saves when asyncronous\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "frecuency",
          "package": "TCache",
          "signature": "Int",
          "source": "src/Data-TCache.html#SyncMode",
          "type": "function"
        },
        "index": {
          "description": "number of seconds between saves when asyncronous",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "frecuency",
          "package": "TCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:frecuency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the reference to the object in the cache. if it does not exist, the reference is created empty.\n Every execution of \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e returns the same unique reference to this key,\n so it can be safely considered pure. This is a property useful because deserialization\n of objects with unused embedded DBRef's  do not need to marshall them eagerly.\n  Tbis also avoid unnecesary cache lookups of the pointed objects.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "getDBRef",
          "package": "TCache",
          "signature": "String -\u003e DBRef a",
          "source": "src/Data-TCache.html#getDBRef",
          "type": "function"
        },
        "index": {
          "description": "Get the reference to the object in the cache if it does not exist the reference is created empty Every execution of getDBRef returns the same unique reference to this key so it can be safely considered pure This is property useful because deserialization of objects with unused embedded DBRef do not need to marshall them eagerly Tbis also avoid unnecesary cache lookups of the pointed objects",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "getDBRef",
          "normalized": "String-\u003eDBRef a",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "String-\u003eDBRef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo read a resource from the cache.\n\u003c/p\u003e\u003cpre\u003egetResource r= do{mr\u003c- \u003ccode\u003e\u003ca\u003egetResources\u003c/a\u003e\u003c/code\u003e [r];return $! head mr}\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "getResource",
          "package": "TCache",
          "signature": "a -\u003e IO (Maybe a)",
          "source": "src/Data-TCache.html#getResource",
          "type": "function"
        },
        "index": {
          "description": "To read resource from the cache getResource do mr getResources return head mr",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "getResource",
          "normalized": "a-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo read a list of resources from the cache if they exist\n\u003c/p\u003e\u003cp\u003e| \u003ccode\u003egetResources rs= atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 where  f1 mrs= Resources  [] [] mrs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "getResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO [Maybe a]",
          "source": "src/Data-TCache.html#getResources",
          "type": "function"
        },
        "index": {
          "description": "To read list of resources from the cache if they exist getResources rs atomically withSTMResources rs f1 where f1 mrs Resources mrs",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "getResources",
          "normalized": "[a]-\u003eIO[Maybe a]",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elabel the object as not existent in database\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "invalidateKey",
          "package": "TCache",
          "signature": "String -\u003e STM ()",
          "source": "src/Data-TCache.html#invalidateKey",
          "type": "function"
        },
        "index": {
          "description": "label the object as not existent in database",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "invalidateKey",
          "normalized": "String-\u003eSTM()",
          "package": "TCache",
          "partial": "Key",
          "signature": "String-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:invalidateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the key of the object pointed to by the DBRef\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "keyObjDBRef",
          "package": "TCache",
          "signature": "DBRef a -\u003e String",
          "source": "src/Data-TCache.html#keyObjDBRef",
          "type": "function"
        },
        "index": {
          "description": "Return the key of the object pointed to by the DBRef",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "keyObjDBRef",
          "normalized": "DBRef a-\u003eString",
          "package": "TCache",
          "partial": "Obj DBRef",
          "signature": "DBRef a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:keyObjDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "keyResource",
          "package": "TCache",
          "signature": "keyResource",
          "source": "src/Data-TCache-IResource.html#keyResource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "keyResource",
          "package": "TCache",
          "partial": "Resource",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:keyResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new cache. Experimental\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "newCache",
          "package": "TCache",
          "signature": "IO (Ht, Integer)",
          "source": "src/Data-TCache.html#newCache",
          "type": "function"
        },
        "index": {
          "description": "Creates new cache Experimental",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "newCache",
          "normalized": "IO(Ht,Integer)",
          "package": "TCache",
          "partial": "Cache",
          "signature": "IO(Ht,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:newCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the object passed as parameter (if it does not exist) and\n-- return its reference in the IO monad.\n-- If an object with the same key already exists, it is returned as is\n-- If not, the reference is created with the new value.\n-- If you like to update in any case, use \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e combined\nnewDBRefIO :: (IResource a,Typeable a) =\u003e a -\u003e IO (DBRef a)\nnewDBRefIO x= do\n let key = keyResource x\n mdbref \u003c- mDBRefIO key\n case mdbref of\n   Right dbref -\u003e return dbref\n\u003c/p\u003e\u003cp\u003eLeft cache -\u003e do\n     tv\u003c- newTVarIO  DoNotExist\n     let dbref= DBRef key  tv\n     w \u003c- mkWeakPtr  dbref . Just $ fixToCache dbref\n     H.insert cache key (CacheElem Nothing w)\n     t \u003c-  timeInteger\n     atomically $ do\n       applyTriggers [dbref] [Just x]      --\u003ccode\u003edebug\u003c/code\u003e (\u003ca\u003ebefore \u003c/a\u003e++key)\n       writeTVar tv  . Exist $ Elem x t t\n       return dbref\n\u003c/p\u003e\u003cp\u003eCreate the object passed as parameter (if it does not exist) and\n return its reference in the STM monad.\n If an object with the same key already exists, it is returned as is\n If not, the reference is created with the new value.\n If you like to update in any case, use \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e combined\n if you  need to create the reference and the reference content, use \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "newDBRef",
          "package": "TCache",
          "signature": "a -\u003e STM (DBRef a)",
          "source": "src/Data-TCache.html#newDBRef",
          "type": "function"
        },
        "index": {
          "description": "Create the object passed as parameter if it does not exist and return its reference in the IO monad If an object with the same key already exists it is returned as is If not the reference is created with the new value If you like to update in any case use getDBRef and writeDBRef combined newDBRefIO IResource Typeable IO DBRef newDBRefIO do let key keyResource mdbref mDBRefIO key case mdbref of Right dbref return dbref Left cache do tv newTVarIO DoNotExist let dbref DBRef key tv mkWeakPtr dbref Just fixToCache dbref H.insert cache key CacheElem Nothing timeInteger atomically do applyTriggers dbref Just debug before key writeTVar tv Exist Elem return dbref Create the object passed as parameter if it does not exist and return its reference in the STM monad If an object with the same key already exists it is returned as is If not the reference is created with the new value If you like to update in any case use getDBRef and writeDBRef combined if you need to create the reference and the reference content use newDBRef",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "newDBRef",
          "normalized": "a-\u003eSTM(DBRef a)",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "a-\u003eSTM(DBRef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:newDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the  total number of DBRefs in the cache. For debug purposes.\n This does not count the number of objects in the cache since many of the DBRef\n may not have the pointed object loaded. It's O(n).\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "numElems",
          "package": "TCache",
          "signature": "IO Int",
          "source": "src/Data-TCache.html#numElems",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of DBRefs in the cache For debug purposes This does not count the number of objects in the cache since many of the DBRef may not have the pointed object loaded It",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "numElems",
          "package": "TCache",
          "partial": "Elems",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:numElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles Nothing cases in a simpler way than runMaybeT.\n it is used in infix notation. for example:\n\u003c/p\u003e\u003cpre\u003eresult \u003c- readDBRef ref `onNothing` error (\"Not found \"++ keyObjDBRef ref)\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003eresult \u003c- readDBRef ref `onNothing` return someDefaultValue\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "onNothing",
          "package": "TCache",
          "signature": "m (Maybe b) -\u003e m b -\u003e m b",
          "source": "src/Data-TCache.html#onNothing",
          "type": "function"
        },
        "index": {
          "description": "Handles Nothing cases in simpler way than runMaybeT it is used in infix notation for example result readDBRef ref onNothing error Not found keyObjDBRef ref or result readDBRef ref onNothing return someDefaultValue",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "onNothing",
          "normalized": "a(Maybe b)-\u003ea b-\u003ea b",
          "package": "TCache",
          "partial": "Nothing",
          "signature": "m(Maybe b)-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:onNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the reference value. If it is not in the cache, it is fetched\n from the database.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "readDBRef",
          "package": "TCache",
          "signature": "DBRef a -\u003e STM (Maybe a)",
          "source": "src/Data-TCache.html#readDBRef",
          "type": "function"
        },
        "index": {
          "description": "Return the reference value If it is not in the cache it is fetched from the database",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "readDBRef",
          "normalized": "DBRef a-\u003eSTM(Maybe a)",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "DBRef a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead multiple DBRefs in a single request using the new \u003ccode\u003e\u003ca\u003ereadResourcesByKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "readDBRefs",
          "package": "TCache",
          "signature": "[DBRef a] -\u003e STM [Maybe a]",
          "source": "src/Data-TCache.html#readDBRefs",
          "type": "function"
        },
        "index": {
          "description": "Read multiple DBRefs in single request using the new readResourcesByKey",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "readDBRefs",
          "normalized": "[DBRef a]-\u003eSTM[Maybe a]",
          "package": "TCache",
          "partial": "DBRefs",
          "signature": "[DBRef a]-\u003eSTM[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readDBRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TCache",
          "name": "readResource",
          "package": "TCache",
          "signature": "a -\u003e IO (Maybe a)",
          "source": "src/Data-TCache-IResource.html#readResource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "readResource",
          "normalized": "a-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the database access and marshalling of the object.\n        while the database access must be strict, the marshaling must be lazy if, as is often the case,\n        some parts of the object are not really accesed.\n        If the object contains DBRefs, this avoids unnecesary cache lookups.\n        This method is called within \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e blocks.\n        Since STM transactions retry, readResourceByKey may be called twice in strange situations. So it must be idempotent, not only in the result but also in the effect in the database\n        . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "readResourceByKey",
          "package": "TCache",
          "signature": "String -\u003e IO (Maybe a)",
          "source": "src/Data-TCache-IResource.html#readResourceByKey",
          "type": "method"
        },
        "index": {
          "description": "Implements the database access and marshalling of the object while the database access must be strict the marshaling must be lazy if as is often the case some parts of the object are not really accesed If the object contains DBRefs this avoids unnecesary cache lookups This method is called within atomically blocks Since STM transactions retry readResourceByKey may be called twice in strange situations So it must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "readResourceByKey",
          "normalized": "String-\u003eIO(Maybe a)",
          "package": "TCache",
          "partial": "Resource By Key",
          "signature": "String-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResourceByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehopefully optimized read of many objects by key.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "readResourcesByKey",
          "package": "TCache",
          "signature": "[String] -\u003e IO [Maybe a]",
          "source": "src/Data-TCache-IResource.html#readResourcesByKey",
          "type": "method"
        },
        "index": {
          "description": "hopefully optimized read of many objects by key",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "readResourcesByKey",
          "normalized": "[String]-\u003eIO[Maybe a]",
          "package": "TCache",
          "partial": "Resources By Key",
          "signature": "[String]-\u003eIO[Maybe a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResourcesByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssures that the IO computation finalizes no matter if the STM transaction\n is aborted or retried. The IO computation run in a different thread.\n The STM transaction wait until the completion of the IO procedure (or retry as usual).\n\u003c/p\u003e\u003cp\u003eIt can be retried if the embedding STM computation is retried\n so the IO computation must be idempotent.\n Exceptions are bubbled up to the STM transaction\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "safeIOToSTM",
          "package": "TCache",
          "signature": "IO a -\u003e STM a",
          "source": "src/Data-TCache.html#safeIOToSTM",
          "type": "function"
        },
        "index": {
          "description": "Assures that the IO computation finalizes no matter if the STM transaction is aborted or retried The IO computation run in different thread The STM transaction wait until the completion of the IO procedure or retry as usual It can be retried if the embedding STM computation is retried so the IO computation must be idempotent Exceptions are bubbled up to the STM transaction",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "safeIOToSTM",
          "normalized": "IO a-\u003eSTM a",
          "package": "TCache",
          "partial": "IOTo STM",
          "signature": "IO a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:safeIOToSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the cache. this is useful for hot loaded modules that will update an existing cache. Experimental\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "setCache",
          "package": "TCache",
          "signature": "Cache -\u003e IO ()",
          "source": "src/Data-TCache.html#setCache",
          "type": "function"
        },
        "index": {
          "description": "Set the cache this is useful for hot loaded modules that will update an existing cache Experimental",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "setCache",
          "normalized": "Cache-\u003eIO()",
          "package": "TCache",
          "partial": "Cache",
          "signature": "Cache-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:setCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003establishes the procedures to call before and after saving with \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCacheProc\u003c/a\u003e\u003c/code\u003e. The postcondition of\n database persistence should be a commit.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "setConditions",
          "package": "TCache",
          "signature": "IO () -\u003e IO () -\u003e IO ()",
          "source": "src/Data-TCache.html#setConditions",
          "type": "function"
        },
        "index": {
          "description": "stablishes the procedures to call before and after saving with syncCache clearSyncCache or clearSyncCacheProc The postcondition of database persistence should be commit",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "setConditions",
          "normalized": "IO()-\u003eIO()-\u003eIO()",
          "package": "TCache",
          "partial": "Conditions",
          "signature": "IO()-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:setConditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the atomic write of all cached objects modified since the last save into permanent storage.\n Cache writes allways save a coherent state. As allways, only the modified objects are written.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "syncCache",
          "package": "TCache",
          "signature": "IO ()",
          "source": "src/Data-TCache.html#syncCache",
          "type": "function"
        },
        "index": {
          "description": "Force the atomic write of all cached objects modified since the last save into permanent storage Cache writes allways save coherent state As allways only the modified objects are written",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "syncCache",
          "normalized": "IO()",
          "package": "TCache",
          "partial": "Cache",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:syncCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the cache synchronization policy with permanent storage. See \u003ccode\u003e\u003ca\u003eSyncMode\u003c/a\u003e\u003c/code\u003e for details\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "syncWrite",
          "package": "TCache",
          "signature": "SyncMode -\u003e IO ()",
          "source": "src/Data-TCache.html#syncWrite",
          "type": "function"
        },
        "index": {
          "description": "Specify the cache synchronization policy with permanent storage See SyncMode for details",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "syncWrite",
          "normalized": "SyncMode-\u003eIO()",
          "package": "TCache",
          "partial": "Write",
          "signature": "SyncMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:syncWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely performs IO in the STM monad.  Beware: this is a highly\n dangerous thing to do.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The STM implementation will often run transactions multiple\n     times, so you need to be prepared for this if your IO has any\n     side effects.\n\u003c/li\u003e\u003cli\u003e The STM implementation will abort transactions that are known to\n     be invalid and need to be restarted.  This may happen in the middle\n     of \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e, so make sure you don't acquire any resources\n     that need releasing (exception handlers are ignored when aborting\n     the transaction).  That includes doing any IO using Handles, for\n     example.  Getting this wrong will probably lead to random deadlocks.\n\u003c/li\u003e\u003cli\u003e The transaction may have seen an inconsistent view of memory when\n     the IO runs.  Invariants that you expect to be true throughout\n     your program may not be true inside a transaction, due to the\n     way transactions are implemented.  Normally this wouldn't be visible\n     to the programmer, but using \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e can expose it.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.TCache",
          "name": "unsafeIOToSTM",
          "package": "TCache",
          "signature": "IO a -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Unsafely performs IO in the STM monad Beware this is highly dangerous thing to do The STM implementation will often run transactions multiple times so you need to be prepared for this if your IO has any side effects The STM implementation will abort transactions that are known to be invalid and need to be restarted This may happen in the middle of unsafeIOToSTM so make sure you don acquire any resources that need releasing exception handlers are ignored when aborting the transaction That includes doing any IO using Handles for example Getting this wrong will probably lead to random deadlocks The transaction may have seen an inconsistent view of memory when the IO runs Invariants that you expect to be true throughout your program may not be true inside transaction due to the way transactions are implemented Normally this wouldn be visible to the programmer but using unsafeIOToSTM can expose it",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "unsafeIOToSTM",
          "normalized": "IO a-\u003eSTM a",
          "package": "TCache",
          "partial": "IOTo STM",
          "signature": "IO a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:unsafeIOToSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate of a single object in the cache\n\u003c/p\u003e\u003cpre\u003ewithResource r f= \u003ccode\u003e\u003ca\u003ewithResources\u003c/a\u003e\u003c/code\u003e [r] ([mr]-\u003e [f mr])\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "withResource",
          "package": "TCache",
          "signature": "a -\u003e (Maybe a -\u003e a) -\u003e IO ()",
          "source": "src/Data-TCache.html#withResource",
          "type": "function"
        },
        "index": {
          "description": "Update of single object in the cache withResource withResources mr mr",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "withResource",
          "normalized": "a-\u003e(Maybe a-\u003ea)-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003e(Maybe a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo atomically add/modify many objects in the cache\n\u003c/p\u003e\u003cpre\u003e withResources rs f=  atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 \u003e\u003e return() where   f1 mrs= let as= f mrs in  Resources  as [] ()\u003c/pre\u003e",
          "module": "Data.TCache",
          "name": "withResources",
          "package": "TCache",
          "signature": "[a] -\u003e ([Maybe a] -\u003e [a]) -\u003e IO ()",
          "source": "src/Data-TCache.html#withResources",
          "type": "function"
        },
        "index": {
          "description": "To atomically add modify many objects in the cache withResources rs atomically withSTMResources rs f1 return where f1 mrs let as mrs in Resources as",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "withResources",
          "normalized": "[a]-\u003e([Maybe a]-\u003e[a])-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003e([Maybe a]-\u003e[a])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main function for the *Resource(s) calls. All the rest derive from it. The results are kept in the STM monad\n so it can be part of a larger STM transaction involving other DBRefs.\n The \u003ccode\u003e\u003ca\u003eResources\u003c/a\u003e\u003c/code\u003e register  returned by the user-defined function  is interpreted as such:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoAdd\u003c/a\u003e\u003c/code\u003e:  the content of this field will be added/updated to the cache\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoDelete\u003c/a\u003e\u003c/code\u003e: the content of this field will be removed from the cache and from permanent storage\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoReturn\u003c/a\u003e\u003c/code\u003e: the content of this field will be returned by \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWARNING: To catch evaluations errors at the right place, the values to be written must be fully evaluated.\n Errors in delayed evaluations at serialization time can cause inconsistencies in the database.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "withSTMResources",
          "package": "TCache",
          "signature": "[a]-\u003e ([Maybe a] -\u003e Resources a x)-\u003e STM x",
          "type": "function"
        },
        "index": {
          "description": "This is the main function for the Resource calls All the rest derive from it The results are kept in the STM monad so it can be part of larger STM transaction involving other DBRefs The Resources register returned by the user-defined function is interpreted as such toAdd the content of this field will be added updated to the cache toDelete the content of this field will be removed from the cache and from permanent storage toReturn the content of this field will be returned by withSTMResources WARNING To catch evaluations errors at the right place the values to be written must be fully evaluated Errors in delayed evaluations at serialization time can cause inconsistencies in the database",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "withSTMResources",
          "normalized": "[a]-\u003e([Maybe a]-\u003eResources a b)-\u003eSTM b",
          "package": "TCache",
          "partial": "STMResources",
          "signature": "[a]-\u003e([Maybe a]-\u003eResources a x)-\u003eSTM x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withSTMResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite in the reference a value\n The new key must be the same than the old key of the previous object stored\n otherwise, an error \u003ca\u003elaw of key conservation broken\u003c/a\u003e will be raised\n\u003c/p\u003e\u003cp\u003eWARNING: the value to be written in the DBRef must be fully evaluated. Delayed evaluations at\n serialization time can cause inconsistencies in the database.\n In future releases this will be enforced.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "writeDBRef",
          "package": "TCache",
          "signature": "DBRef a -\u003e a -\u003e STM ()",
          "source": "src/Data-TCache.html#writeDBRef",
          "type": "function"
        },
        "index": {
          "description": "Write in the reference value The new key must be the same than the old key of the previous object stored otherwise an error law of key conservation broken will be raised WARNING the value to be written in the DBRef must be fully evaluated Delayed evaluations at serialization time can cause inconsistencies in the database In future releases this will be enforced",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "writeDBRef",
          "normalized": "DBRef a-\u003ea-\u003eSTM()",
          "package": "TCache",
          "partial": "DBRef",
          "signature": "DBRef a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeDBRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo write into persistent storage. It must be strict.  \n Since STM transactions may retry, \u003ccode\u003ewriteResource\u003c/code\u003e must be idempotent, not only in the result but also in the effect in the database.\n . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n All the new obbects are writeen to the database on synchromization,\n so writeResource must not autocommit.\n Commit code must be located in the postcondition. (see  \u003ccode\u003esetConditions\u003c/code\u003e)\n Since there is no provision for rollback from failure in writing to\n persistent storage, \u003ccode\u003e\u003ca\u003ewriteResource\u003c/a\u003e\u003c/code\u003e must retry until success.\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "writeResource",
          "package": "TCache",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#writeResource",
          "type": "method"
        },
        "index": {
          "description": "To write into persistent storage It must be strict Since STM transactions may retry writeResource must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted All the new obbects are writeen to the database on synchromization so writeResource must not autocommit Commit code must be located in the postcondition see setConditions Since there is no provision for rollback from failure in writing to persistent storage writeResource must retry until success",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "writeResource",
          "normalized": "a-\u003eIO()",
          "package": "TCache",
          "partial": "Resource",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiple write (hopefully) in a single request. That is up to you and your backend\n . Defined by default as 'mapM_ writeResource'\n\u003c/p\u003e",
          "module": "Data.TCache",
          "name": "writeResources",
          "package": "TCache",
          "signature": "[a] -\u003e IO ()",
          "source": "src/Data-TCache-IResource.html#writeResources",
          "type": "method"
        },
        "index": {
          "description": "multiple write hopefully in single request That is up to you and your backend Defined by default as mapM writeResource",
          "hierarchy": "Data TCache",
          "module": "Data.TCache",
          "name": "writeResources",
          "normalized": "[a]-\u003eIO()",
          "package": "TCache",
          "partial": "Resources",
          "signature": "[a]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeResources"
      }
    }
  ]
]