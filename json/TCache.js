[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent, transactional collection with Queue interface as well as\n indexed access by key.\n\u003c/p\u003e\u003cp\u003eUses default persistence. See \u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-Persistent-Collection.html",
        "fct-type": "module",
        "title": "Collection"
      },
      "index": {
        "description": "persistent transactional collection with Queue interface as well as indexed access by key Uses default persistence See Data.TCache.DefaultPersistence",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "Collection",
        "normalized": "",
        "package": "TCache",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#t:RefQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA queue reference\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-Persistent-Collection.html#RefQueue",
        "fct-type": "type",
        "title": "RefQueue"
      },
      "index": {
        "description": "queue reference",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "RefQueue",
        "normalized": "",
        "package": "TCache",
        "partial": "Ref Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:deleteElem",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all the elements of the queue that has the key of the parameter passed\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Persistent-Collection.html#deleteElem",
        "fct-type": "function",
        "title": "deleteElem"
      },
      "index": {
        "description": "Delete all the elements of the queue that has the key of the parameter passed",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "deleteElem",
        "normalized": "RefQueue a-\u003ea-\u003eIO()",
        "package": "TCache",
        "partial": "Elem",
        "signature": "RefQueue a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:deleteElemSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVerison in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-Persistent-Collection.html#deleteElemSTM",
        "fct-type": "function",
        "title": "deleteElemSTM"
      },
      "index": {
        "description": "Verison in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "deleteElemSTM",
        "normalized": "RefQueue a-\u003ea-\u003eSTM()",
        "package": "TCache",
        "partial": "Elem STM",
        "signature": "RefQueue a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty the queue (factually, it is deleted)\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e IO ()",
        "fct-source": "src/Data-Persistent-Collection.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Empty the queue factually it is deleted",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "flush",
        "normalized": "RefQueue a-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "RefQueue a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:flushSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e STM ()",
        "fct-source": "src/Data-Persistent-Collection.html#flushSTM",
        "fct-type": "function",
        "title": "flushSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "flushSTM",
        "normalized": "RefQueue a-\u003eSTM()",
        "package": "TCache",
        "partial": "STM",
        "signature": "RefQueue a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:getQRef",
      "description": {
        "fct-descr": "\u003cp\u003eGet the reference to new or existing queue trough its name\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e RefQueue a",
        "fct-source": "src/Data-Persistent-Collection.html#getQRef",
        "fct-type": "function",
        "title": "getQRef"
      },
      "index": {
        "description": "Get the reference to new or existing queue trough its name",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "getQRef",
        "normalized": "String-\u003eRefQueue a",
        "package": "TCache",
        "partial": "QRef",
        "signature": "String-\u003eRefQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the queue is empty\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e IO Bool",
        "fct-source": "src/Data-Persistent-Collection.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Check if the queue is empty",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "isEmpty",
        "normalized": "RefQueue a-\u003eIO Bool",
        "package": "TCache",
        "partial": "Empty",
        "signature": "RefQueue a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:isEmptySTM",
      "description": {
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e STM Bool",
        "fct-source": "src/Data-Persistent-Collection.html#isEmptySTM",
        "fct-type": "function",
        "title": "isEmptySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "isEmptySTM",
        "normalized": "RefQueue a-\u003eSTM Bool",
        "package": "TCache",
        "partial": "Empty STM",
        "signature": "RefQueue a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pick",
      "description": {
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a-\u003e IO a",
        "fct-type": "function",
        "title": "pick"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pick",
        "normalized": "RefQueue a-\u003eIO a",
        "package": "TCache",
        "partial": "",
        "signature": "RefQueue a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickAll",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the list of all elements in the queue. The queue remains unchanged\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e IO [a]",
        "fct-source": "src/Data-Persistent-Collection.html#pickAll",
        "fct-type": "function",
        "title": "pickAll"
      },
      "index": {
        "description": "Return the list of all elements in the queue The queue remains unchanged",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pickAll",
        "normalized": "RefQueue a-\u003eIO[a]",
        "package": "TCache",
        "partial": "All",
        "signature": "RefQueue a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickAllSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e STM [a]",
        "fct-source": "src/Data-Persistent-Collection.html#pickAllSTM",
        "fct-type": "function",
        "title": "pickAllSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pickAllSTM",
        "normalized": "RefQueue a-\u003eSTM[a]",
        "package": "TCache",
        "partial": "All STM",
        "signature": "RefQueue a-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickElem",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first element in the queue that has the given key\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e String -\u003e IO (Maybe a)",
        "fct-source": "src/Data-Persistent-Collection.html#pickElem",
        "fct-type": "function",
        "title": "pickElem"
      },
      "index": {
        "description": "Return the first element in the queue that has the given key",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pickElem",
        "normalized": "RefQueue a-\u003eString-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Elem",
        "signature": "RefQueue a-\u003eString-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pickElemSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e String -\u003e STM (Maybe a)",
        "fct-source": "src/Data-Persistent-Collection.html#pickElemSTM",
        "fct-type": "function",
        "title": "pickElemSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pickElemSTM",
        "normalized": "RefQueue a-\u003eString-\u003eSTM(Maybe a)",
        "package": "TCache",
        "partial": "Elem STM",
        "signature": "RefQueue a-\u003eString-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRead  the first element in the queue and delete it (pop)\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a-\u003e IO a",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Read the first element in the queue and delete it pop",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pop",
        "normalized": "RefQueue a-\u003eIO a",
        "package": "TCache",
        "partial": "",
        "signature": "RefQueue a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:popSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e STM a",
        "fct-source": "src/Data-Persistent-Collection.html#popSTM",
        "fct-type": "function",
        "title": "popSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "popSTM",
        "normalized": "RefQueue a-\u003eSTM a",
        "package": "TCache",
        "partial": "STM",
        "signature": "RefQueue a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush an element in the queue\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Persistent-Collection.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push an element in the queue",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "push",
        "normalized": "RefQueue a-\u003ea-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "RefQueue a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:pushSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-Persistent-Collection.html#pushSTM",
        "fct-type": "function",
        "title": "pushSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "pushSTM",
        "normalized": "RefQueue a-\u003ea-\u003eSTM()",
        "package": "TCache",
        "partial": "STM",
        "signature": "RefQueue a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:readAll",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the list of all elements in the queue and empty it\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e IO [a]",
        "fct-source": "src/Data-Persistent-Collection.html#readAll",
        "fct-type": "function",
        "title": "readAll"
      },
      "index": {
        "description": "Return the list of all elements in the queue and empty it",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "readAll",
        "normalized": "RefQueue a-\u003eIO[a]",
        "package": "TCache",
        "partial": "All",
        "signature": "RefQueue a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:readAllSTM",
      "description": {
        "fct-descr": "\u003cp\u003eA version in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e STM [a]",
        "fct-source": "src/Data-Persistent-Collection.html#readAllSTM",
        "fct-type": "function",
        "title": "readAllSTM"
      },
      "index": {
        "description": "version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "readAllSTM",
        "normalized": "RefQueue a-\u003eSTM[a]",
        "package": "TCache",
        "partial": "All STM",
        "signature": "RefQueue a-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:unreadSTM",
      "description": {
        "fct-descr": "\u003cp\u003epush an element at the top of the queue\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-Persistent-Collection.html#unreadSTM",
        "fct-type": "function",
        "title": "unreadSTM"
      },
      "index": {
        "description": "push an element at the top of the queue",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "unreadSTM",
        "normalized": "RefQueue a-\u003ea-\u003eSTM()",
        "package": "TCache",
        "partial": "STM",
        "signature": "RefQueue a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:updateElem",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the first element of the queue with a new element with the same key\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Persistent-Collection.html#updateElem",
        "fct-type": "function",
        "title": "updateElem"
      },
      "index": {
        "description": "Update the first element of the queue with new element with the same key",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "updateElem",
        "normalized": "RefQueue a-\u003ea-\u003eIO()",
        "package": "TCache",
        "partial": "Elem",
        "signature": "RefQueue a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-Collection.html#v:updateElemSTM",
      "description": {
        "fct-descr": "\u003cp\u003eVersion in the STM monad\n\u003c/p\u003e",
        "fct-module": "Data.Persistent.Collection",
        "fct-package": "TCache",
        "fct-signature": "RefQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-Persistent-Collection.html#updateElemSTM",
        "fct-type": "function",
        "title": "updateElemSTM"
      },
      "index": {
        "description": "Version in the STM monad",
        "hierarchy": "Data Persistent Collection",
        "module": "Data.Persistent.Collection",
        "name": "updateElemSTM",
        "normalized": "RefQueue a-\u003ea-\u003eSTM()",
        "package": "TCache",
        "partial": "Elem STM",
        "signature": "RefQueue a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIDynamic is a indexable and serializable version of Dynamic. (See \u003ccode\u003eData.Dynamic\u003c/code\u003e). It is used as containers of objects\nin the cache so any new datatype can be incrementally stored without recompilation.\nIDimamic provices methods for safe casting,  besides serializaton, deserialirezation and retrieval by key.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-Persistent-IDynamic.html",
        "fct-type": "module",
        "title": "IDynamic"
      },
      "index": {
        "description": "IDynamic is indexable and serializable version of Dynamic See Data.Dynamic It is used as containers of objects in the cache so any new datatype can be incrementally stored without recompilation IDimamic provices methods for safe casting besides serializaton deserialirezation and retrieval by key",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "IDynamic",
        "normalized": "",
        "package": "TCache",
        "partial": "IDynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:IDynType",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-Persistent-IDynamic.html#IDynType",
        "fct-type": "data",
        "title": "IDynType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "IDynType",
        "normalized": "",
        "package": "TCache",
        "partial": "IDyn Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:IDynamic",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-Persistent-IDynamic.html#IDynamic",
        "fct-type": "data",
        "title": "IDynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "IDynamic",
        "normalized": "",
        "package": "TCache",
        "partial": "IDynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#t:Save",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Persistent-IDynamic.html#Save",
        "fct-type": "newtype",
        "title": "Save"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "Save",
        "normalized": "",
        "package": "TCache",
        "partial": "Save",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:DLeft",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "DLeft !(ByteString, (Context, ByteString))",
        "fct-source": "src/Data-Persistent-IDynamic.html#IDynType",
        "fct-type": "function",
        "title": "DLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "DLeft",
        "normalized": "DLeft(ByteString,(Context,ByteString))",
        "package": "TCache",
        "partial": "DLeft",
        "signature": "DLeft(ByteString,(Context,ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:DRight",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "DRight !a",
        "fct-source": "src/Data-Persistent-IDynamic.html#IDynType",
        "fct-type": "function",
        "title": "DRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "DRight",
        "normalized": "",
        "package": "TCache",
        "partial": "DRight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:IDyn",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDyn (IORef IDynType)",
        "fct-source": "src/Data-Persistent-IDynamic.html#IDynamic",
        "fct-type": "function",
        "title": "IDyn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "IDyn",
        "normalized": "",
        "package": "TCache",
        "partial": "IDyn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:Save",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "Save ByteString",
        "fct-source": "src/Data-Persistent-IDynamic.html#Save",
        "fct-type": "function",
        "title": "Save"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "Save",
        "normalized": "",
        "package": "TCache",
        "partial": "Save",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:dynPrefix",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "[Char]",
        "fct-source": "src/Data-Persistent-IDynamic.html#dynPrefix",
        "fct-type": "function",
        "title": "dynPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "dynPrefix",
        "normalized": "[Char]",
        "package": "TCache",
        "partial": "Prefix",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:dynPrefixSp",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Persistent-IDynamic.html#dynPrefixSp",
        "fct-type": "function",
        "title": "dynPrefixSp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "dynPrefixSp",
        "normalized": "",
        "package": "TCache",
        "partial": "Prefix Sp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:errorfied",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "[Char] -\u003e [Char] -\u003e t",
        "fct-source": "src/Data-Persistent-IDynamic.html#errorfied",
        "fct-type": "function",
        "title": "errorfied"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "errorfied",
        "normalized": "[Char]-\u003e[Char]-\u003ea",
        "package": "TCache",
        "partial": "",
        "signature": "[Char]-\u003e[Char]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:fromIDyn",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDynamic -\u003e a",
        "fct-source": "src/Data-Persistent-IDynamic.html#fromIDyn",
        "fct-type": "function",
        "title": "fromIDyn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "fromIDyn",
        "normalized": "IDynamic-\u003ea",
        "package": "TCache",
        "partial": "IDyn",
        "signature": "IDynamic-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:notreified",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Persistent-IDynamic.html#notreified",
        "fct-type": "function",
        "title": "notreified"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "notreified",
        "normalized": "",
        "package": "TCache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:reifyM",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDynamic -\u003e a -\u003e IO a",
        "fct-source": "src/Data-Persistent-IDynamic.html#reifyM",
        "fct-type": "function",
        "title": "reifyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "reifyM",
        "normalized": "IDynamic-\u003ea-\u003eIO a",
        "package": "TCache",
        "partial": "",
        "signature": "IDynamic-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:safeFromIDyn",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDynamic -\u003e Either String a",
        "fct-source": "src/Data-Persistent-IDynamic.html#safeFromIDyn",
        "fct-type": "function",
        "title": "safeFromIDyn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "safeFromIDyn",
        "normalized": "IDynamic-\u003eEither String a",
        "package": "TCache",
        "partial": "From IDyn",
        "signature": "IDynamic-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:serializedEqual",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDynamic -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Data-Persistent-IDynamic.html#serializedEqual",
        "fct-type": "function",
        "title": "serializedEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "serializedEqual",
        "normalized": "IDynamic-\u003eByteString-\u003eBool",
        "package": "TCache",
        "partial": "Equal",
        "signature": "IDynamic-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:toIDyn",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IDynamic",
        "fct-source": "src/Data-Persistent-IDynamic.html#toIDyn",
        "fct-type": "function",
        "title": "toIDyn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "toIDyn",
        "normalized": "a-\u003eIDynamic",
        "package": "TCache",
        "partial": "IDyn",
        "signature": "a-\u003eIDynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-Persistent-IDynamic.html#v:tosave",
      "description": {
        "fct-module": "Data.Persistent.IDynamic",
        "fct-package": "TCache",
        "fct-signature": "IDynamic -\u003e IDynamic",
        "fct-source": "src/Data-Persistent-IDynamic.html#tosave",
        "fct-type": "function",
        "title": "tosave"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Persistent IDynamic",
        "module": "Data.Persistent.IDynamic",
        "name": "tosave",
        "normalized": "IDynamic-\u003eIDynamic",
        "package": "TCache",
        "partial": "",
        "signature": "IDynamic-\u003eIDynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-DefaultPersistence.html",
        "fct-type": "module",
        "title": "DefaultPersistence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "DefaultPersistence",
        "normalized": "",
        "package": "TCache",
        "partial": "Default Persistence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Indexable",
      "description": {
        "fct-descr": "\u003cp\u003eIndexable is an utility class used to derive instances of IResource\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003edata Person= Person{ pname :: String, cars :: [DBRef Car]} deriving (Show, Read, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\u003c/pre\u003e\u003cp\u003eSince Person and Car are instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e ans \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, by defining the \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e instance\nwill implicitly define the IResource instance for file persistence:\n\u003c/p\u003e\u003cpre\u003e\ninstance Indexable Person where  key Person{pname=n} = \"Person \" ++ n\ninstance Indexable Car where key Car{cname= n} = \"Car \" ++ n\n\u003c/pre\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Defs.html#Indexable",
        "fct-type": "class",
        "title": "Indexable"
      },
      "index": {
        "description": "Indexable is an utility class used to derive instances of IResource Example data Person Person pname String cars DBRef Car deriving Show Read Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable Since Person and Car are instances of Read ans Show by defining the Indexable instance will implicitly define the IResource instance for file persistence instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "Indexable",
        "normalized": "",
        "package": "TCache",
        "partial": "Indexable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Persist",
      "description": {
        "fct-descr": "\u003cp\u003ea persist mechanism has to implement these three primitives\n \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e is the default file persistence\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "data",
        "title": "Persist"
      },
      "index": {
        "description": "persist mechanism has to implement these three primitives filePersist is the default file persistence",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "Persist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#t:Serializable",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize is an alternative to the IResource class for defining persistence in TCache.\nThe deserialization must be as lazy as possible.\nserialization/deserialization are not performance critical in TCache\n\u003c/p\u003e\u003cp\u003eRead, Show,  instances are implicit instances of Serializable\n\u003c/p\u003e\u003cpre\u003e    serialize  = show\n    deserialize= read\n\u003c/pre\u003e\u003cp\u003eSince write and read to disk of to/from the cache are not be very frequent\nThe performance of serialization is not critical.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Defs.html#Serializable",
        "fct-type": "class",
        "title": "Serializable"
      },
      "index": {
        "description": "Serialize is an alternative to the IResource class for defining persistence in TCache The deserialization must be as lazy as possible serialization deserialization are not performance critical in TCache Read Show instances are implicit instances of Serializable serialize show deserialize read Since write and read to disk of to from the cache are not be very frequent The performance of serialization is not critical",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "Serializable",
        "normalized": "",
        "package": "TCache",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:Persist",
      "description": {
        "fct-descr": "\u003cp\u003edelete\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "Persist"
      },
      "index": {
        "description": "delete",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "Persist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:defPath",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "defPath",
        "fct-source": "src/Data-TCache-Defs.html#defPath",
        "fct-type": "method",
        "title": "defPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "defPath",
        "normalized": "",
        "package": "TCache",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:delete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "delete",
        "normalized": "Key-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "Key-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:deserialKey",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-TCache-Defs.html#deserialKey",
        "fct-type": "method",
        "title": "deserialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "deserialKey",
        "normalized": "String-\u003eByteString-\u003ea",
        "package": "TCache",
        "partial": "Key",
        "signature": "String-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:deserialize",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-TCache-Defs.html#deserialize",
        "fct-type": "method",
        "title": "deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "deserialize",
        "normalized": "ByteString-\u003ea",
        "package": "TCache",
        "partial": "",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:filePersist",
      "description": {
        "fct-descr": "\u003cp\u003eImplements default persistence of objects in files with their keys as filenames\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#filePersist",
        "fct-type": "function",
        "title": "filePersist"
      },
      "index": {
        "description": "Implements default persistence of objects in files with their keys as filenames",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "filePersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:getDefaultPersist",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#getDefaultPersist",
        "fct-type": "function",
        "title": "getDefaultPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "getDefaultPersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Default Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:key",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-TCache-Defs.html#key",
        "fct-type": "method",
        "title": "key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "key",
        "normalized": "a-\u003eString",
        "package": "TCache",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:readByKey",
      "description": {
        "fct-descr": "\u003cp\u003eread by key. It must be strict\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "readByKey"
      },
      "index": {
        "description": "read by key It must be strict",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "readByKey",
        "normalized": "Key-\u003eIO(Maybe ByteString)",
        "package": "TCache",
        "partial": "By Key",
        "signature": "Key-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:serialize",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-TCache-Defs.html#serialize",
        "fct-type": "method",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "serialize",
        "normalized": "a-\u003eByteString",
        "package": "TCache",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:setDefaultPersist",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default persistence mechanism of all \u003ccode\u003eserializable\u003c/code\u003e objetcts. By default it is \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ethis statement must be the first one before any other TCache call\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Persist -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#setDefaultPersist",
        "fct-type": "function",
        "title": "setDefaultPersist"
      },
      "index": {
        "description": "Set the default persistence mechanism of all serializable objetcts By default it is filePersist this statement must be the first one before any other TCache call",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "setDefaultPersist",
        "normalized": "Persist-\u003eIO()",
        "package": "TCache",
        "partial": "Default Persist",
        "signature": "Persist-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:setPersist",
      "description": {
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "setPersist",
        "fct-source": "src/Data-TCache-Defs.html#setPersist",
        "fct-type": "method",
        "title": "setPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "setPersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-DefaultPersistence.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003ewrite. It must be strict\n\u003c/p\u003e",
        "fct-module": "Data.TCache.DefaultPersistence",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "write It must be strict",
        "hierarchy": "Data TCache DefaultPersistence",
        "module": "Data.TCache.DefaultPersistence",
        "name": "write",
        "normalized": "Key-\u003eByteString-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "Key-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esome internal definitions. To use default persistence, import\n\u003ccode\u003eData.TCache.DefaultPersistence\u003c/code\u003e instead \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-Defs.html",
        "fct-type": "module",
        "title": "Defs"
      },
      "index": {
        "description": "some internal definitions To use default persistence import Data.TCache.DefaultPersistence instead",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Defs",
        "normalized": "",
        "package": "TCache",
        "partial": "Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:AccessTime",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-TCache-Defs.html#AccessTime",
        "fct-type": "type",
        "title": "AccessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "AccessTime",
        "normalized": "",
        "package": "TCache",
        "partial": "Access Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:DBRef",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#DBRef",
        "fct-type": "data",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "DBRef",
        "normalized": "",
        "package": "TCache",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Elem",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Elem",
        "fct-type": "data",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Elem",
        "normalized": "",
        "package": "TCache",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Indexable",
      "description": {
        "fct-descr": "\u003cp\u003eIndexable is an utility class used to derive instances of IResource\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003edata Person= Person{ pname :: String, cars :: [DBRef Car]} deriving (Show, Read, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\u003c/pre\u003e\u003cp\u003eSince Person and Car are instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e ans \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, by defining the \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e instance\nwill implicitly define the IResource instance for file persistence:\n\u003c/p\u003e\u003cpre\u003e\ninstance Indexable Person where  key Person{pname=n} = \"Person \" ++ n\ninstance Indexable Car where key Car{cname= n} = \"Car \" ++ n\n\u003c/pre\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Defs.html#Indexable",
        "fct-type": "class",
        "title": "Indexable"
      },
      "index": {
        "description": "Indexable is an utility class used to derive instances of IResource Example data Person Person pname String cars DBRef Car deriving Show Read Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable Since Person and Car are instances of Read ans Show by defining the Indexable instance will implicitly define the IResource instance for file persistence instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Indexable",
        "normalized": "",
        "package": "TCache",
        "partial": "Indexable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Key",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-TCache-Defs.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Key",
        "normalized": "",
        "package": "TCache",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:ModifTime",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-TCache-Defs.html#ModifTime",
        "fct-type": "type",
        "title": "ModifTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "ModifTime",
        "normalized": "",
        "package": "TCache",
        "partial": "Modif Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Persist",
      "description": {
        "fct-descr": "\u003cp\u003ea persist mechanism has to implement these three primitives\n \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e is the default file persistence\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "data",
        "title": "Persist"
      },
      "index": {
        "description": "persist mechanism has to implement these three primitives filePersist is the default file persistence",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Persist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:PersistIndex",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by IndexQuery for index persistence(see \u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Defs.html#PersistIndex",
        "fct-type": "class",
        "title": "PersistIndex"
      },
      "index": {
        "description": "Used by IndexQuery for index persistence see Data.TCache.IndexQuery",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "PersistIndex",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Serializable",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize is an alternative to the IResource class for defining persistence in TCache.\nThe deserialization must be as lazy as possible.\nserialization/deserialization are not performance critical in TCache\n\u003c/p\u003e\u003cp\u003eRead, Show,  instances are implicit instances of Serializable\n\u003c/p\u003e\u003cpre\u003e    serialize  = show\n    deserialize= read\n\u003c/pre\u003e\u003cp\u003eSince write and read to disk of to/from the cache are not be very frequent\nThe performance of serialization is not critical.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Defs.html#Serializable",
        "fct-type": "class",
        "title": "Serializable"
      },
      "index": {
        "description": "Serialize is an alternative to the IResource class for defining persistence in TCache The deserialization must be as lazy as possible serialization deserialization are not performance critical in TCache Read Show instances are implicit instances of Serializable serialize show deserialize read Since write and read to disk of to from the cache are not be very frequent The performance of serialization is not critical",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Serializable",
        "normalized": "",
        "package": "TCache",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:Status",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Status",
        "normalized": "",
        "package": "TCache",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#t:TPVar",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-TCache-Defs.html#TPVar",
        "fct-type": "type",
        "title": "TPVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "TPVar",
        "normalized": "",
        "package": "TCache",
        "partial": "TPVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DBRef",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "DBRef !String !(TPVar a)",
        "fct-source": "src/Data-TCache-Defs.html#DBRef",
        "fct-type": "function",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "DBRef",
        "normalized": "",
        "package": "TCache",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:DoNotExist",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "DoNotExist",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "DoNotExist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "DoNotExist",
        "normalized": "",
        "package": "TCache",
        "partial": "Do Not Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Elem",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Elem !a !AccessTime !ModifTime",
        "fct-source": "src/Data-TCache-Defs.html#Elem",
        "fct-type": "function",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Elem",
        "normalized": "",
        "package": "TCache",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Exist",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Exist a",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "Exist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Exist",
        "normalized": "",
        "package": "TCache",
        "partial": "Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:NotRead",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "NotRead",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "NotRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "NotRead",
        "normalized": "",
        "package": "TCache",
        "partial": "Not Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:Persist",
      "description": {
        "fct-descr": "\u003cp\u003edelete\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "Persist"
      },
      "index": {
        "description": "delete",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "Persist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:castErr",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e a1",
        "fct-source": "src/Data-TCache-Defs.html#castErr",
        "fct-type": "function",
        "title": "castErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "castErr",
        "normalized": "a-\u003ea",
        "package": "TCache",
        "partial": "Err",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defDelResource",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#defDelResource",
        "fct-type": "function",
        "title": "defDelResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defDelResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Del Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defPath",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "defPath",
        "fct-source": "src/Data-TCache-Defs.html#defPath",
        "fct-type": "method",
        "title": "defPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defPath",
        "normalized": "",
        "package": "TCache",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defReadResourceByKey",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "[Char] -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache-Defs.html#defReadResourceByKey",
        "fct-type": "function",
        "title": "defReadResourceByKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defReadResourceByKey",
        "normalized": "[Char]-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Read Resource By Key",
        "signature": "[Char]-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defWriteResource",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#defWriteResource",
        "fct-type": "function",
        "title": "defWriteResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defWriteResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Write Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultDelete",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#defaultDelete",
        "fct-type": "function",
        "title": "defaultDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defaultDelete",
        "normalized": "String-\u003eIO()",
        "package": "TCache",
        "partial": "Delete",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultPersistIORef",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "IORef Persist",
        "fct-source": "src/Data-TCache-Defs.html#defaultPersistIORef",
        "fct-type": "function",
        "title": "defaultPersistIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defaultPersistIORef",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultReadByKey",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Data-TCache-Defs.html#defaultReadByKey",
        "fct-type": "function",
        "title": "defaultReadByKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defaultReadByKey",
        "normalized": "String-\u003eIO(Maybe ByteString)",
        "package": "TCache",
        "partial": "Read By Key",
        "signature": "String-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:defaultWrite",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#defaultWrite",
        "fct-type": "function",
        "title": "defaultWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "defaultWrite",
        "normalized": "String-\u003eByteString-\u003eIO()",
        "package": "TCache",
        "partial": "Write",
        "signature": "String-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:delete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "delete",
        "normalized": "Key-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "Key-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:deserialKey",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-TCache-Defs.html#deserialKey",
        "fct-type": "method",
        "title": "deserialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "deserialKey",
        "normalized": "String-\u003eByteString-\u003ea",
        "package": "TCache",
        "partial": "Key",
        "signature": "String-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:deserialize",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-TCache-Defs.html#deserialize",
        "fct-type": "method",
        "title": "deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "deserialize",
        "normalized": "ByteString-\u003ea",
        "package": "TCache",
        "partial": "",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:filePersist",
      "description": {
        "fct-descr": "\u003cp\u003eImplements default persistence of objects in files with their keys as filenames\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#filePersist",
        "fct-type": "function",
        "title": "filePersist"
      },
      "index": {
        "description": "Implements default persistence of objects in files with their keys as filenames",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "filePersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:getDefaultPersist",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Persist",
        "fct-source": "src/Data-TCache-Defs.html#getDefaultPersist",
        "fct-type": "function",
        "title": "getDefaultPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "getDefaultPersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Default Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:getPersist",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e Persist",
        "fct-source": "src/Data-TCache-Defs.html#getPersist",
        "fct-type": "function",
        "title": "getPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "getPersist",
        "normalized": "a-\u003ePersist",
        "package": "TCache",
        "partial": "Persist",
        "signature": "a-\u003ePersist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:key",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-TCache-Defs.html#key",
        "fct-type": "method",
        "title": "key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "key",
        "normalized": "a-\u003eString",
        "package": "TCache",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:persistIndex",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e Maybe Persist",
        "fct-source": "src/Data-TCache-Defs.html#persistIndex",
        "fct-type": "method",
        "title": "persistIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "persistIndex",
        "normalized": "a-\u003eMaybe Persist",
        "package": "TCache",
        "partial": "Index",
        "signature": "a-\u003eMaybe Persist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:readByKey",
      "description": {
        "fct-descr": "\u003cp\u003eread by key. It must be strict\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "readByKey"
      },
      "index": {
        "description": "read by key It must be strict",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "readByKey",
        "normalized": "Key-\u003eIO(Maybe ByteString)",
        "package": "TCache",
        "partial": "By Key",
        "signature": "Key-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:readFileStrict",
      "description": {
        "fct-descr": "\u003cp\u003eStrict read from file, needed for default file persistence\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/Data-TCache-Defs.html#readFileStrict",
        "fct-type": "function",
        "title": "readFileStrict"
      },
      "index": {
        "description": "Strict read from file needed for default file persistence",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "readFileStrict",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "TCache",
        "partial": "File Strict",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:safeWrite",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "[Char] -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#safeWrite",
        "fct-type": "function",
        "title": "safeWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "safeWrite",
        "normalized": "[Char]-\u003eByteString-\u003eIO()",
        "package": "TCache",
        "partial": "Write",
        "signature": "[Char]-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:serialize",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-TCache-Defs.html#serialize",
        "fct-type": "method",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "serialize",
        "normalized": "a-\u003eByteString",
        "package": "TCache",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:setDefaultPersist",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default persistence mechanism of all \u003ccode\u003eserializable\u003c/code\u003e objetcts. By default it is \u003ccode\u003e\u003ca\u003efilePersist\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ethis statement must be the first one before any other TCache call\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Persist -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#setDefaultPersist",
        "fct-type": "function",
        "title": "setDefaultPersist"
      },
      "index": {
        "description": "Set the default persistence mechanism of all serializable objetcts By default it is filePersist this statement must be the first one before any other TCache call",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "setDefaultPersist",
        "normalized": "Persist-\u003eIO()",
        "package": "TCache",
        "partial": "Default Persist",
        "signature": "Persist-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:setPersist",
      "description": {
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "setPersist",
        "fct-source": "src/Data-TCache-Defs.html#setPersist",
        "fct-type": "method",
        "title": "setPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "setPersist",
        "normalized": "",
        "package": "TCache",
        "partial": "Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Defs.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003ewrite. It must be strict\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Defs",
        "fct-package": "TCache",
        "fct-signature": "Key -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-TCache-Defs.html#Persist",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "write It must be strict",
        "hierarchy": "Data TCache Defs",
        "module": "Data.TCache.Defs",
        "name": "write",
        "normalized": "Key-\u003eByteString-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "Key-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#",
      "description": {
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-IResource.html",
        "fct-type": "module",
        "title": "IResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "IResource",
        "normalized": "",
        "package": "TCache",
        "partial": "IResource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#t:IResource",
      "description": {
        "fct-descr": "\u003cp\u003eMust be defined for every object to be cached.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-IResource.html#IResource",
        "fct-type": "class",
        "title": "IResource"
      },
      "index": {
        "description": "Must be defined for every object to be cached",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "IResource",
        "normalized": "",
        "package": "TCache",
        "partial": "IResource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#t:Resources",
      "description": {
        "fct-descr": "\u003cp\u003eResources data definition used by \u003ccode\u003ewithSTMResources\u003c/code\u003e    \n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "data",
        "title": "Resources"
      },
      "index": {
        "description": "Resources data definition used by withSTMResources",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "Resources",
        "normalized": "",
        "package": "TCache",
        "partial": "Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Resources",
      "description": {
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "Resources",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "Resources"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "Resources",
        "normalized": "",
        "package": "TCache",
        "partial": "Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:Retry",
      "description": {
        "fct-descr": "\u003cp\u003eforces a retry\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "Retry",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "Retry"
      },
      "index": {
        "description": "forces retry",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "Retry",
        "normalized": "",
        "package": "TCache",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:delResource",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the resource. It is called syncronously. So it must commit   \n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#delResource",
        "fct-type": "method",
        "title": "delResource"
      },
      "index": {
        "description": "Delete the resource It is called syncronously So it must commit",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "delResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:delResources",
      "description": {
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#delResources",
        "fct-type": "method",
        "title": "delResources"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "delResources",
        "normalized": "[a]-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:keyResource",
      "description": {
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "keyResource",
        "fct-source": "src/Data-TCache-IResource.html#keyResource",
        "fct-type": "method",
        "title": "keyResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "keyResource",
        "normalized": "",
        "package": "TCache",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResource",
      "description": {
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache-IResource.html#readResource",
        "fct-type": "method",
        "title": "readResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "readResource",
        "normalized": "a-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResourceByKey",
      "description": {
        "fct-descr": "\u003cp\u003eImplements the database access and marshalling of the object.\n        while the database access must be strict, the marshaling must be lazy if, as is often the case,\n        some parts of the object are not really accesed.\n        If the object contains DBRefs, this avoids unnecesary cache lookups.\n        This method is called within \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e blocks.\n        Since STM transactions retry, readResourceByKey may be called twice in strange situations. So it must be idempotent, not only in the result but also in the effect in the database\n        . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache-IResource.html#readResourceByKey",
        "fct-type": "method",
        "title": "readResourceByKey"
      },
      "index": {
        "description": "Implements the database access and marshalling of the object while the database access must be strict the marshaling must be lazy if as is often the case some parts of the object are not really accesed If the object contains DBRefs this avoids unnecesary cache lookups This method is called within atomically blocks Since STM transactions retry readResourceByKey may be called twice in strange situations So it must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "readResourceByKey",
        "normalized": "String-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Resource By Key",
        "signature": "String-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:readResourcesByKey",
      "description": {
        "fct-descr": "\u003cp\u003ehopefully optimized read of many objects by key.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "[String] -\u003e IO [Maybe a]",
        "fct-source": "src/Data-TCache-IResource.html#readResourcesByKey",
        "fct-type": "method",
        "title": "readResourcesByKey"
      },
      "index": {
        "description": "hopefully optimized read of many objects by key",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "readResourcesByKey",
        "normalized": "[String]-\u003eIO[Maybe a]",
        "package": "TCache",
        "partial": "Resources By Key",
        "signature": "[String]-\u003eIO[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:resources",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty resources: \u003ccode\u003eresources= Resources  [] [] ()\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "Resources a ()",
        "fct-source": "src/Data-TCache-IResource.html#resources",
        "fct-type": "function",
        "title": "resources"
      },
      "index": {
        "description": "Empty resources resources Resources",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "resources",
        "normalized": "Resources a()",
        "package": "TCache",
        "partial": "",
        "signature": "Resources a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toAdd",
      "description": {
        "fct-descr": "\u003cp\u003eresources to be inserted back in the cache\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "[a]",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toAdd"
      },
      "index": {
        "description": "resources to be inserted back in the cache",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "toAdd",
        "normalized": "[a]",
        "package": "TCache",
        "partial": "Add",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toDelete",
      "description": {
        "fct-descr": "\u003cp\u003eresources to be deleted from the cache and from permanent storage\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "[a]",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toDelete"
      },
      "index": {
        "description": "resources to be deleted from the cache and from permanent storage",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "toDelete",
        "normalized": "[a]",
        "package": "TCache",
        "partial": "Delete",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:toReturn",
      "description": {
        "fct-descr": "\u003cp\u003eresult to be returned\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "b",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toReturn"
      },
      "index": {
        "description": "result to be returned",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "toReturn",
        "normalized": "",
        "package": "TCache",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:writeResource",
      "description": {
        "fct-descr": "\u003cp\u003eTo write into persistent storage. It must be strict.  \n Since STM transactions may retry, \u003ccode\u003ewriteResource\u003c/code\u003e must be idempotent, not only in the result but also in the effect in the database.\n . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n All the new obbects are writeen to the database on synchromization,\n so writeResource must not autocommit.\n Commit code must be located in the postcondition. (see  \u003ccode\u003esetConditions\u003c/code\u003e)\n Since there is no provision for rollback from failure in writing to\n persistent storage, \u003ccode\u003e\u003ca\u003ewriteResource\u003c/a\u003e\u003c/code\u003e must retry until success.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#writeResource",
        "fct-type": "method",
        "title": "writeResource"
      },
      "index": {
        "description": "To write into persistent storage It must be strict Since STM transactions may retry writeResource must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted All the new obbects are writeen to the database on synchromization so writeResource must not autocommit Commit code must be located in the postcondition see setConditions Since there is no provision for rollback from failure in writing to persistent storage writeResource must retry until success",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "writeResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IResource.html#v:writeResources",
      "description": {
        "fct-descr": "\u003cp\u003emultiple write (hopefully) in a single request. That is up to you and your backend\n . Defined by default as 'mapM_ writeResource'\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IResource",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#writeResources",
        "fct-type": "method",
        "title": "writeResources"
      },
      "index": {
        "description": "multiple write hopefully in single request That is up to you and your backend Defined by default as mapM writeResource",
        "hierarchy": "Data TCache IResource",
        "module": "Data.TCache.IResource",
        "name": "writeResources",
        "normalized": "[a]-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an experimental typed query language for TCache build on pure\nhaskell. It is minimally intrusive (no special data definitions, no special syntax, no template\nhaskell). It uses the same register fields from the data definitions. Both for query conditions\n and selections. It is executed in haskell, no external database support is needed.\n\u003c/p\u003e\u003cp\u003eit includes\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A method for triggering the \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e-ation of the record fields that you want to query\n\u003c/li\u003e\u003cli\u003e A typed query language of these record fields, with:\n\u003c/li\u003e\u003cli\u003e Relational operators:  \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003e=.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c=.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.||.\u003c/a\u003e\u003c/code\u003e to compare fields with\n       values (returning lists of DBRefs) or fields between them, returning joins (lists of pairs of\n       lists of DBRefs that meet the condition).\n\u003c/li\u003e\u003cli\u003e a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e method to extract tuples of field values from the  DBRefs\n\u003c/li\u003e\u003cli\u003e a \u003ccode\u003e\u003ca\u003erecordsWith\u003c/a\u003e\u003c/code\u003e clause to extract entire registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn example that register the owner and name fields fo the Car register and the\nname of the Person register, create the Bruce register, return the Bruce DBRef, create two Car registers with bruce as owner\nand query for the registers with bruce as owner and its name alpabeticaly higuer than \"Bat mobile\"\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.TCache\u003c/a\u003e\nimport \u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e\nimport \u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e\nimport \u003ca\u003eData.Typeable\u003c/a\u003e\n\ndata Person= Person {pname :: String} deriving  (Show, Read, Eq, Typeable)\ndata Car= Car{owner :: DBRef Person , cname:: String} deriving (Show, Read, Eq, Typeable)\n\ninstance \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e Person where key Person{pname= n} = \"Person \" ++ n\ninstance \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e Car where key Car{cname= n} = \"Car \" ++ n\n\nmain =  do\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e owner\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e pname\n   \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e cname\n   bruce \u003c- atomically $ \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e $ Person \"bruce\"\n   atomically $  mapM_ \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e [Car bruce \"Bat Mobile\", Car bruce \"Porsche\"]\n   r \u003c- atomically $ cname \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \"Porsche\"\n   print r\n   r \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e (cname, owner) $  owner \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e bruce \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e cname \u003ccode\u003e\u003ca\u003e.\u003e=.\u003c/a\u003e\u003c/code\u003e \"Bat Mobile\"\n   print r\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e [DBRef \"Car Porsche\"]\n [(\"Porsche\",DBRef \"Person bruce\")]\n\u003c/pre\u003e\u003cp\u003eNOTES:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the index is instance of \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e. This can be used to\npersist in the user-defined storage using DefaultPersistence\n\u003c/li\u003e\u003cli\u003e The Join feature has not been properly tested\n\u003c/li\u003e\u003cli\u003e Record fields are recognized by its type, so if we define two record fields\nwith the same type:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e data Person = Person {name , surname :: String}\n\u003c/pre\u003e\u003cp\u003ethen a query for \u003ccode\u003ename \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ca\u003eBruce\u003c/a\u003e\u003c/code\u003e  is indistinguishable from \u003ccode\u003esurname \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e \u003ca\u003eBruce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWill return indexOf the registers with surname \u003ca\u003eBruce\u003c/a\u003e as well. So if two or more\nfields in a registers are to be indexed, they must have different types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-IndexQuery.html",
        "fct-type": "module",
        "title": "IndexQuery"
      },
      "index": {
        "description": "This module implements an experimental typed query language for TCache build on pure haskell It is minimally intrusive no special data definitions no special syntax no template haskell It uses the same register fields from the data definitions Both for query conditions and selections It is executed in haskell no external database support is needed it includes method for triggering the index ation of the record fields that you want to query typed query language of these record fields with Relational operators to compare fields with values returning lists of DBRefs or fields between them returning joins lists of pairs of lists of DBRefs that meet the condition select method to extract tuples of field values from the DBRefs recordsWith clause to extract entire registers An example that register the owner and name fields fo the Car register and the name of the Person register create the Bruce register return the Bruce DBRef create two Car registers with bruce as owner and query for the registers with bruce as owner and its name alpabeticaly higuer than Bat mobile import Data.TCache import Data.TCache.IndexQuery import Data.TCache.DefaultPersistence import Data.Typeable data Person Person pname String deriving Show Read Eq Typeable data Car Car owner DBRef Person cname String deriving Show Read Eq Typeable instance Indexable Person where key Person pname Person instance Indexable Car where key Car cname Car main do index owner index pname index cname bruce atomically newDBRef Person bruce atomically mapM newDBRef Car bruce Bat Mobile Car bruce Porsche atomically cname Porsche print atomically select cname owner owner bruce cname Bat Mobile print Will produce DBRef Car Porsche Porsche DBRef Person bruce NOTES the index is instance of Indexable and Serializable This can be used to persist in the user-defined storage using DefaultPersistence The Join feature has not been properly tested Record fields are recognized by its type so if we define two record fields with the same type data Person Person name surname String then query for name Bruce is indistinguishable from surname Bruce Will return indexOf the registers with surname Bruce as well So if two or more fields in registers are to be indexed they must have different types",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "IndexQuery",
        "normalized": "",
        "package": "TCache",
        "partial": "Index Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#t:Queriable",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-IndexQuery.html#Queriable",
        "fct-type": "class",
        "title": "Queriable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "Queriable",
        "normalized": "",
        "package": "TCache",
        "partial": "Queriable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-124--124-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "STM set -\u003e STM set' -\u003e STM setResult",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.||.) .||.",
        "normalized": "STM a-\u003eSTM b-\u003eSTM c",
        "package": "TCache",
        "partial": "",
        "signature": "STM set-\u003eSTM set'-\u003eSTM setResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-38--38-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "STM set -\u003e STM set' -\u003e STM setResult",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.&&.) .&&.",
        "normalized": "STM a-\u003eSTM b-\u003eSTM c",
        "package": "TCache",
        "partial": "",
        "signature": "STM set-\u003eSTM set'-\u003eSTM setResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-60--61-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "field1 -\u003e field2 -\u003e STM res",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "a-\u003ea-\u003eSTM b",
        "package": "TCache",
        "partial": "",
        "signature": "field-\u003efield-\u003eSTM res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-60-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "field1 -\u003e field2 -\u003e STM res",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "a-\u003ea-\u003eSTM b",
        "package": "TCache",
        "partial": "",
        "signature": "field-\u003efield-\u003eSTM res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-61--61-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "field1 -\u003e field2 -\u003e STM res",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.==.) .==.",
        "normalized": "a-\u003ea-\u003eSTM b",
        "package": "TCache",
        "partial": "",
        "signature": "field-\u003efield-\u003eSTM res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-62--61-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "field1 -\u003e field2 -\u003e STM res",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "a-\u003ea-\u003eSTM b",
        "package": "TCache",
        "partial": "",
        "signature": "field-\u003efield-\u003eSTM res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:.-62-.",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "field1 -\u003e field2 -\u003e STM res",
        "fct-source": "src/Data-TCache-IndexQuery.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "a-\u003ea-\u003eSTM b",
        "package": "TCache",
        "partial": "",
        "signature": "field-\u003efield-\u003eSTM res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a trigger for indexing the values of the field passed as parameter.\n the indexed field can be used to perform relational-like searches\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "(reg -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-TCache-IndexQuery.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Register trigger for indexing the values of the field passed as parameter the indexed field can be used to perform relational-like searches",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "index",
        "normalized": "(a-\u003eb)-\u003eIO()",
        "package": "TCache",
        "partial": "",
        "signature": "(reg-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:indexOf",
      "description": {
        "fct-descr": "\u003cp\u003ereturn all  the (indexed)  values which this field has and a DBRef pointer to the register\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "(reg -\u003e a) -\u003e STM [(a, [DBRef reg])]",
        "fct-source": "src/Data-TCache-IndexQuery.html#indexOf",
        "fct-type": "function",
        "title": "indexOf"
      },
      "index": {
        "description": "return all the indexed values which this field has and DBRef pointer to the register",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "indexOf",
        "normalized": "(a-\u003eb)-\u003eSTM[(b,[DBRef a])]",
        "package": "TCache",
        "partial": "Of",
        "signature": "(reg-\u003ea)-\u003eSTM[(a,[DBRef reg])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:recordsWith",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "STM [DBRef a] -\u003e STM [a]",
        "fct-source": "src/Data-TCache-IndexQuery.html#recordsWith",
        "fct-type": "function",
        "title": "recordsWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "recordsWith",
        "normalized": "STM[DBRef a]-\u003eSTM[a]",
        "package": "TCache",
        "partial": "With",
        "signature": "STM[DBRef a]-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexQuery.html#v:select",
      "description": {
        "fct-module": "Data.TCache.IndexQuery",
        "fct-package": "TCache",
        "fct-signature": "selector -\u003e a -\u003e res",
        "fct-source": "src/Data-TCache-IndexQuery.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache IndexQuery",
        "module": "Data.TCache.IndexQuery",
        "name": "select",
        "normalized": "a-\u003eb-\u003ec",
        "package": "TCache",
        "partial": "",
        "signature": "selector-\u003ea-\u003eres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements full text indexation (\u003ccode\u003e\u003ca\u003eindexText\u003c/a\u003e\u003c/code\u003e) and text search(\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e), as an addition to\nthe query language implemented in \u003ccode\u003e\u003ca\u003eIndexQuery\u003c/a\u003e\u003c/code\u003e\nit also can index the lists of elements in a field (with \u003ccode\u003e\u003ca\u003eindexList\u003c/a\u003e\u003c/code\u003e)\nso that it is possible to ask for the registers that contains a given element\nin the given field (with \u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eAn example of full text search and element search in a list in combination\nusing the \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e operator defined in \u003ca\u003eindexQuery\u003c/a\u003e.\nbefore and after the update of the register\n\u003c/p\u003e\u003cpre\u003e\ndata Doc= Doc{title :: String , authors :: [String], body :: String} deriving (Read,Show, Typeable)\ninstance Indexable Doc where\n  key Doc{title=t}= t\n\ninstance Serializable Doc  where\n  serialize= pack . show\n  deserialize= read . unpack\n\nmain= do\n  \u003ccode\u003e\u003ca\u003eindexText\u003c/a\u003e\u003c/code\u003e  body T.pack\n  \u003ccode\u003e\u003ca\u003eindexList\u003c/a\u003e\u003c/code\u003e authors  (map T.pack)\n\nlet doc= Doc{title=  \"title\", authors=[\"john\",\"Lewis\"], body=  \"Hi, how are you\"}\n  rdoc \u003c- atomically $ newDBRef doc\n\nr0 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ authors `\u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e` \"Lewis\"\n  print r0\n\nr1 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ body `\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e` \"how are you\"\n  print r1\n\nr2 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e body $ body `\u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e` \"how are you\" .&&. authors \u003ccode\u003e\u003ca\u003econtainsElem\u003c/a\u003e\u003c/code\u003e \u003ca\u003ejohn\u003c/a\u003e\n  print r2\n\natomically $ writeDBRef rdoc  doc{ body=  \"what's up\"}\n\nr3 \u003c- atomically $ \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e title $ body  `'contains'\\` \"how are you\"\n  print r3\n\nif  r0== r1 && r1== [title doc] then print \"OK\" else print \"FAIL\"\n  if  r3== [] then print \"OK\" else print \"FAIL\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-IndexText.html",
        "fct-type": "module",
        "title": "IndexText"
      },
      "index": {
        "description": "Implements full text indexation indexText and text search contains as an addition to the query language implemented in IndexQuery it also can index the lists of elements in field with indexList so that it is possible to ask for the registers that contains given element in the given field with containsElem An example of full text search and element search in list in combination using the operator defined in indexQuery before and after the update of the register data Doc Doc title String authors String body String deriving Read Show Typeable instance Indexable Doc where key Doc title instance Serializable Doc where serialize pack show deserialize read unpack main do indexText body T.pack indexList authors map T.pack let doc Doc title title authors john Lewis body Hi how are you rdoc atomically newDBRef doc r0 atomically select title authors containsElem Lewis print r0 r1 atomically select title body contains how are you print r1 r2 atomically select body body contains how are you authors containsElem john print r2 atomically writeDBRef rdoc doc body what up r3 atomically select title body contains how are you print r3 if r0 r1 r1 title doc then print OK else print FAIL if r3 then print OK else print FAIL",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "IndexText",
        "normalized": "",
        "package": "TCache",
        "partial": "Index Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:allElemsOf",
      "description": {
        "fct-descr": "\u003cp\u003ereturn all the values of a given field (if it has been indexed with \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b) -\u003e STM [Text]",
        "fct-source": "src/Data-TCache-IndexText.html#allElemsOf",
        "fct-type": "function",
        "title": "allElemsOf"
      },
      "index": {
        "description": "return all the values of given field if it has been indexed with index",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "allElemsOf",
        "normalized": "(a-\u003eb)-\u003eSTM[Text]",
        "package": "TCache",
        "partial": "Elems Of",
        "signature": "(a-\u003eb)-\u003eSTM[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the DBRefs whose fields include all the words in the requested text contents.Except the\n words  with less than three characters that are not digits or uppercase, that are filtered out before making the query\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b)-\u003e String-\u003e STM [DBRef a]",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "return the DBRefs whose fields include all the words in the requested text contents.Except the words with less than three characters that are not digits or uppercase that are filtered out before making the query",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "contains",
        "normalized": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
        "package": "TCache",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:containsElem",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the DBRefs of the registers whose field (first parameter, usually a container) contains the requested value.\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b) -\u003e String -\u003e STM [DBRef a]",
        "fct-source": "src/Data-TCache-IndexText.html#containsElem",
        "fct-type": "function",
        "title": "containsElem"
      },
      "index": {
        "description": "return the DBRefs of the registers whose field first parameter usually container contains the requested value",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "containsElem",
        "normalized": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]",
        "package": "TCache",
        "partial": "Elem",
        "signature": "(a-\u003eb)-\u003eString-\u003eSTM[DBRef a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:indexList",
      "description": {
        "fct-descr": "\u003cp\u003etrigger the indexation of list fields with elements convertible to Text\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b)-\u003e (b -\u003e [Text])-\u003e IO ()",
        "fct-type": "function",
        "title": "indexList"
      },
      "index": {
        "description": "trigger the indexation of list fields with elements convertible to Text",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "indexList",
        "normalized": "(a-\u003eb)-\u003e(b-\u003e[Text])-\u003eIO()",
        "package": "TCache",
        "partial": "List",
        "signature": "(a-\u003eb)-\u003e(b-\u003e[Text])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-IndexText.html#v:indexText",
      "description": {
        "fct-descr": "\u003cp\u003estart a trigger to index the contents of a register field\n\u003c/p\u003e",
        "fct-module": "Data.TCache.IndexText",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b)-\u003e (b -\u003e Text)-\u003e IO ()",
        "fct-type": "function",
        "title": "indexText"
      },
      "index": {
        "description": "start trigger to index the contents of register field",
        "hierarchy": "Data TCache IndexText",
        "module": "Data.TCache.IndexText",
        "name": "indexText",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eText)-\u003eIO()",
        "package": "TCache",
        "partial": "Text",
        "signature": "(a-\u003eb)-\u003e(b-\u003eText)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#",
      "description": {
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-Memoization.html",
        "fct-type": "module",
        "title": "Memoization"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "Memoization",
        "normalized": "",
        "package": "TCache",
        "partial": "Memoization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#t:Executable",
      "description": {
        "fct-descr": "\u003cp\u003eto execute a monad for the purpose of memoizing its result\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-Memoization.html#Executable",
        "fct-type": "class",
        "title": "Executable"
      },
      "index": {
        "description": "to execute monad for the purpose of memoizing its result",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "Executable",
        "normalized": "",
        "package": "TCache",
        "partial": "Executable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:addrStr",
      "description": {
        "fct-descr": "\u003cp\u003egiven a string, return a key that can be used in Indexable instances\n  Of non persistent objects, such are cached objects (it changes fron execution to execution)\n . It uses \u003ccode\u003e\u003ca\u003eaddrHash\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e [Char]",
        "fct-source": "src/Data-TCache-Memoization.html#addrStr",
        "fct-type": "function",
        "title": "addrStr"
      },
      "index": {
        "description": "given string return key that can be used in Indexable instances Of non persistent objects such are cached objects it changes fron execution to execution It uses addrHash",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "addrStr",
        "normalized": "a-\u003e[Char]",
        "package": "TCache",
        "partial": "Str",
        "signature": "a-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedByKey",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize the result of a computation for a certain time. A string \u003ccode\u003e\u003ca\u003ekey\u003c/a\u003e\u003c/code\u003e is used to index the result\n\u003c/p\u003e\u003cp\u003eThe Int parameter is the timeout, in second after the last evaluation, after which the cached value will be discarded and the expression will be evaluated again if demanded\n . Time == 0 means no timeout\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e Int -\u003e m a -\u003e m a",
        "fct-source": "src/Data-TCache-Memoization.html#cachedByKey",
        "fct-type": "function",
        "title": "cachedByKey"
      },
      "index": {
        "description": "Memoize the result of computation for certain time string key is used to index the result The Int parameter is the timeout in second after the last evaluation after which the cached value will be discarded and the expression will be evaluated again if demanded Time means no timeout",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "cachedByKey",
        "normalized": "String-\u003eInt-\u003ea b-\u003ea b",
        "package": "TCache",
        "partial": "By Key",
        "signature": "String-\u003eInt-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedByKeySTM",
      "description": {
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e Int -\u003e m a -\u003e STM a",
        "fct-source": "src/Data-TCache-Memoization.html#cachedByKeySTM",
        "fct-type": "function",
        "title": "cachedByKeySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "cachedByKeySTM",
        "normalized": "String-\u003eInt-\u003ea b-\u003eSTM b",
        "package": "TCache",
        "partial": "By Key STM",
        "signature": "String-\u003eInt-\u003em a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:cachedp",
      "description": {
        "fct-descr": "\u003cp\u003ea pure version of cached\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-TCache-Memoization.html#cachedp",
        "fct-type": "function",
        "title": "cachedp"
      },
      "index": {
        "description": "pure version of cached",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "cachedp",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "TCache",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:execute",
      "description": {
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "m a -\u003e a",
        "fct-source": "src/Data-TCache-Memoization.html#execute",
        "fct-type": "method",
        "title": "execute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "execute",
        "normalized": "a b-\u003eb",
        "package": "TCache",
        "partial": "",
        "signature": "m a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:flushCached",
      "description": {
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Data-TCache-Memoization.html#flushCached",
        "fct-type": "function",
        "title": "flushCached"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "flushCached",
        "normalized": "String-\u003eIO()",
        "package": "TCache",
        "partial": "Cached",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Memoization.html#v:writeCached",
      "description": {
        "fct-descr": "\u003cp\u003ememoize the result of a computation for a certain time. This is useful for  caching  costly data\n such  web pages composed on the fly.\n\u003c/p\u003e\u003cp\u003etime == 0 means infinite\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Memoization",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e (a -\u003e m b) -\u003e b -\u003e Integer -\u003e STM ()",
        "fct-source": "src/Data-TCache-Memoization.html#writeCached",
        "fct-type": "function",
        "title": "writeCached"
      },
      "index": {
        "description": "memoize the result of computation for certain time This is useful for caching costly data such web pages composed on the fly time means infinite",
        "hierarchy": "Data TCache Memoization",
        "module": "Data.TCache.Memoization",
        "name": "writeCached",
        "normalized": "a-\u003e(a-\u003eb c)-\u003ec-\u003eInteger-\u003eSTM()",
        "package": "TCache",
        "partial": "Cached",
        "signature": "a-\u003e(a-\u003em b)-\u003eb-\u003eInteger-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache-Triggers.html",
        "fct-type": "module",
        "title": "Triggers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "Triggers",
        "normalized": "",
        "package": "TCache",
        "partial": "Triggers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:DBRef",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#DBRef",
        "fct-type": "data",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "DBRef",
        "normalized": "",
        "package": "TCache",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:Elem",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Elem",
        "fct-type": "data",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "Elem",
        "normalized": "",
        "package": "TCache",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#t:Status",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "Status",
        "normalized": "",
        "package": "TCache",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:DBRef",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "DBRef !String !(TPVar a)",
        "fct-source": "src/Data-TCache-Defs.html#DBRef",
        "fct-type": "function",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "DBRef",
        "normalized": "",
        "package": "TCache",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:DoNotExist",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "DoNotExist",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "DoNotExist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "DoNotExist",
        "normalized": "",
        "package": "TCache",
        "partial": "Do Not Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:Elem",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "Elem !a !AccessTime !ModifTime",
        "fct-source": "src/Data-TCache-Defs.html#Elem",
        "fct-type": "function",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "Elem",
        "normalized": "",
        "package": "TCache",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:Exist",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "Exist a",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "Exist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "Exist",
        "normalized": "",
        "package": "TCache",
        "partial": "Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:NotRead",
      "description": {
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "NotRead",
        "fct-source": "src/Data-TCache-Defs.html#Status",
        "fct-type": "function",
        "title": "NotRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "NotRead",
        "normalized": "",
        "package": "TCache",
        "partial": "Not Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:addTrigger",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an user defined trigger to the list of triggers\nTrriggers are called just before an object of the given type is created, modified or deleted.\nThe DBRef to the object and the new value is passed to the trigger.\nThe called trigger function has two parameters: the DBRef being accesed\n(which still contains the old value), and the new value.\nIf the DBRef is being deleted, the second parameter is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nif the DBRef contains Nothing, then the object is being created\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "(DBRef a -\u003e Maybe a -\u003e STM ()) -\u003e IO ()",
        "fct-source": "src/Data-TCache-Triggers.html#addTrigger",
        "fct-type": "function",
        "title": "addTrigger"
      },
      "index": {
        "description": "Add an user defined trigger to the list of triggers Trriggers are called just before an object of the given type is created modified or deleted The DBRef to the object and the new value is passed to the trigger The called trigger function has two parameters the DBRef being accesed which still contains the old value and the new value If the DBRef is being deleted the second parameter is Nothing if the DBRef contains Nothing then the object is being created",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "addTrigger",
        "normalized": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()",
        "package": "TCache",
        "partial": "Trigger",
        "signature": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache-Triggers.html#v:applyTriggers",
      "description": {
        "fct-descr": "\u003cp\u003einternally called when a DBRef is modified\u003cem\u003edeleted\u003c/em\u003ecreated\n\u003c/p\u003e",
        "fct-module": "Data.TCache.Triggers",
        "fct-package": "TCache",
        "fct-signature": "[DBRef a] -\u003e [Maybe a] -\u003e STM ()",
        "fct-source": "src/Data-TCache-Triggers.html#applyTriggers",
        "fct-type": "function",
        "title": "applyTriggers"
      },
      "index": {
        "description": "internally called when DBRef is modified deleted created",
        "hierarchy": "Data TCache Triggers",
        "module": "Data.TCache.Triggers",
        "name": "applyTriggers",
        "normalized": "[DBRef a]-\u003e[Maybe a]-\u003eSTM()",
        "package": "TCache",
        "partial": "Triggers",
        "signature": "[DBRef a]-\u003e[Maybe a]-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCache is a transactional cache with configurable persitence that permits\nSTM transactions with objects that syncronize sincromous or asyncronously with\ntheir user defined storages. Default persistence in files is provided by default\n\u003c/p\u003e\u003cp\u003eTCache implements ''DBRef' 's . They are persistent STM references  with a typical Haskell interface.\nsimitar to TVars (\u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadDBRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e etc) but with added. persistence\n. DBRefs are serializable, so they can be stored and retrieved.\nBecause they are references,they point to other serializable registers.\nThis permits persistent mutable Inter-object relations\n\u003c/p\u003e\u003cp\u003eFor simple transactions of lists of objects of the same type TCache implements\ninversion of control primitives \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e and variants, that call pure user defined code for registers update. Examples below.\n\u003c/p\u003e\u003cp\u003eTriggers in \u003ca\u003eData.TCache.Triggers\u003c/a\u003e are user defined hooks that are called back on register updates.\n.They are used internally for indexing.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.IndexQuery\u003c/a\u003e implements an straighforwards pure haskell type safe query language  based\n on register field relations. This module must be imported separately.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.IndexText\u003c/a\u003e add full text search and content search to the query language\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.TCache.DefaultPersistence\u003c/a\u003e has instances for key indexation , serialization\n and default file persistence. The file persistence is more reliable, and the embedded IO reads inside STM transactions are safe.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Persistent.Collection\u003c/a\u003e implements a persistent, transactional collection with Queue interface as well as\n indexed access by key\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "module",
        "fct-source": "src/Data-TCache.html",
        "fct-type": "module",
        "title": "TCache"
      },
      "index": {
        "description": "TCache is transactional cache with configurable persitence that permits STM transactions with objects that syncronize sincromous or asyncronously with their user defined storages Default persistence in files is provided by default TCache implements DBRef They are persistent STM references with typical Haskell interface simitar to TVars newDBRef readDBRef writeDBRef etc but with added persistence DBRefs are serializable so they can be stored and retrieved Because they are references they point to other serializable registers This permits persistent mutable Inter-object relations For simple transactions of lists of objects of the same type TCache implements inversion of control primitives withSTMResources and variants that call pure user defined code for registers update Examples below Triggers in Data.TCache.Triggers are user defined hooks that are called back on register updates They are used internally for indexing Data.TCache.IndexQuery implements an straighforwards pure haskell type safe query language based on register field relations This module must be imported separately Data.TCache.IndexText add full text search and content search to the query language Data.TCache.DefaultPersistence has instances for key indexation serialization and default file persistence The file persistence is more reliable and the embedded IO reads inside STM transactions are safe Data.Persistent.Collection implements persistent transactional collection with Queue interface as well as indexed access by key",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "TCache",
        "normalized": "",
        "package": "TCache",
        "partial": "TCache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:Cache",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "type",
        "fct-source": "src/Data-TCache.html#Cache",
        "fct-type": "type",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Cache",
        "normalized": "",
        "package": "TCache",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:DBRef",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-Defs.html#DBRef",
        "fct-type": "data",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "DBRef",
        "normalized": "",
        "package": "TCache",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:IResource",
      "description": {
        "fct-descr": "\u003cp\u003eMust be defined for every object to be cached.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "class",
        "fct-source": "src/Data-TCache-IResource.html#IResource",
        "fct-type": "class",
        "title": "IResource"
      },
      "index": {
        "description": "Must be defined for every object to be cached",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "IResource",
        "normalized": "",
        "package": "TCache",
        "partial": "IResource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:Resources",
      "description": {
        "fct-descr": "\u003cp\u003eResources data definition used by \u003ccode\u003ewithSTMResources\u003c/code\u003e    \n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "data",
        "title": "Resources"
      },
      "index": {
        "description": "Resources data definition used by withSTMResources",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Resources",
        "normalized": "",
        "package": "TCache",
        "partial": "Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:STM",
      "description": {
        "fct-descr": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "STM"
      },
      "index": {
        "description": "monad supporting atomic memory transactions",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "STM",
        "normalized": "",
        "package": "TCache",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#t:SyncMode",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "data",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "data",
        "title": "SyncMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "SyncMode",
        "normalized": "",
        "package": "TCache",
        "partial": "Sync Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Asyncronous",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Asyncronous",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "Asyncronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Asyncronous",
        "normalized": "",
        "package": "TCache",
        "partial": "Asyncronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Resources",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Resources",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "Resources"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Resources",
        "normalized": "",
        "package": "TCache",
        "partial": "Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Retry",
      "description": {
        "fct-descr": "\u003cp\u003eforces a retry\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Retry",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "Retry"
      },
      "index": {
        "description": "forces retry",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Retry",
        "normalized": "",
        "package": "TCache",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:SyncManual",
      "description": {
        "fct-descr": "\u003cp\u003euse \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e to write the state\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "SyncManual",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "SyncManual"
      },
      "index": {
        "description": "use syncCache to write the state",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "SyncManual",
        "normalized": "",
        "package": "TCache",
        "partial": "Sync Manual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:Synchronous",
      "description": {
        "fct-descr": "\u003cp\u003esync state to permanent storage when \u003ccode\u003e\u003ca\u003eatomicallySync\u003c/a\u003e\u003c/code\u003e is invoked\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Synchronous",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "Synchronous"
      },
      "index": {
        "description": "sync state to permanent storage when atomicallySync is invoked",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "Synchronous",
        "normalized": "",
        "package": "TCache",
        "partial": "Synchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:addTrigger",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an user defined trigger to the list of triggers\nTrriggers are called just before an object of the given type is created, modified or deleted.\nThe DBRef to the object and the new value is passed to the trigger.\nThe called trigger function has two parameters: the DBRef being accesed\n(which still contains the old value), and the new value.\nIf the DBRef is being deleted, the second parameter is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nif the DBRef contains Nothing, then the object is being created\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "(DBRef a -\u003e Maybe a -\u003e STM ()) -\u003e IO ()",
        "fct-source": "src/Data-TCache-Triggers.html#addTrigger",
        "fct-type": "function",
        "title": "addTrigger"
      },
      "index": {
        "description": "Add an user defined trigger to the list of triggers Trriggers are called just before an object of the given type is created modified or deleted The DBRef to the object and the new value is passed to the trigger The called trigger function has two parameters the DBRef being accesed which still contains the old value and the new value If the DBRef is being deleted the second parameter is Nothing if the DBRef contains Nothing then the object is being created",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "addTrigger",
        "normalized": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()",
        "package": "TCache",
        "partial": "Trigger",
        "signature": "(DBRef a-\u003eMaybe a-\u003eSTM())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:atomically",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e\u003cp\u003eYou cannot use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Any attempt to do so will result in a runtime error.  (Reason: allowing\n this would effectively allow a transaction inside a transaction, depending\n on exactly when the thunk is evaluated.)\n\u003c/p\u003e\u003cp\u003eHowever, see \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e, which can be called inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e,\n and which allows top-level TVars to be allocated.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "STM a -\u003e IO a",
        "fct-type": "function",
        "title": "atomically"
      },
      "index": {
        "description": "Perform series of STM actions atomically You cannot use atomically inside an unsafePerformIO or unsafeInterleaveIO Any attempt to do so will result in runtime error Reason allowing this would effectively allow transaction inside transaction depending on exactly when the thunk is evaluated However see newTVarIO which can be called inside unsafePerformIO and which allows top-level TVars to be allocated",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "atomically",
        "normalized": "STM a-\u003eIO a",
        "package": "TCache",
        "partial": "",
        "signature": "STM a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:atomicallySync",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a synchronization of the cache with permanent storage once executed the STM transaction\n when \u003ccode\u003e\u003ca\u003esyncWrite\u003c/a\u003e\u003c/code\u003e policy is \u003ccode\u003e\u003ca\u003eSynchronous\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "STM a -\u003e IO a",
        "fct-source": "src/Data-TCache.html#atomicallySync",
        "fct-type": "function",
        "title": "atomicallySync"
      },
      "index": {
        "description": "Perform synchronization of the cache with permanent storage once executed the STM transaction when syncWrite policy is Synchronous",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "atomicallySync",
        "normalized": "STM a-\u003eIO a",
        "package": "TCache",
        "partial": "Sync",
        "signature": "STM a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:cacheSize",
      "description": {
        "fct-descr": "\u003cp\u003esize of the cache when async\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Int",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "size of the cache when async",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "cacheSize",
        "normalized": "",
        "package": "TCache",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eThe user-defined check-for-cleanup-from-cache for each object. \u003ccode\u003e\u003ca\u003edefaultCheck\u003c/a\u003e\u003c/code\u003e is an example\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer -\u003e Bool",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "The user-defined check-for-cleanup-from-cache for each object defaultCheck is an example",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "check",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
        "package": "TCache",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:clearSyncCache",
      "description": {
        "fct-descr": "\u003cp\u003eSaves the unsaved elems of the cache.\n Cache writes allways save a coherent state.\n  Unlike \u003ccode\u003esyncChace\u003c/code\u003e this call deletes some elems of  the cache when the number of elems \u003e \u003ccode\u003esizeObjects\u003c/code\u003e.\n  The deletion depends on the check criteria, expressed by the first parameter.\n  \u003ccode\u003e\u003ca\u003edefaultCheck\u003c/a\u003e\u003c/code\u003e is the one implemented to be passed by default. Look at it to understand the clearing criteria.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "(Integer -\u003e Integer -\u003e Integer -\u003e Bool) -\u003e Int -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#clearSyncCache",
        "fct-type": "function",
        "title": "clearSyncCache"
      },
      "index": {
        "description": "Saves the unsaved elems of the cache Cache writes allways save coherent state Unlike syncChace this call deletes some elems of the cache when the number of elems sizeObjects The deletion depends on the check criteria expressed by the first parameter defaultCheck is the one implemented to be passed by default Look at it to understand the clearing criteria",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "clearSyncCache",
        "normalized": "(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO()",
        "package": "TCache",
        "partial": "Sync Cache",
        "signature": "(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:clearSyncCacheProc",
      "description": {
        "fct-descr": "\u003cp\u003eStart the thread that periodically call \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e to clean and writes on the persistent storage.\n it is indirecly set by means of \u003ccode\u003e\u003ca\u003esyncWrite\u003c/a\u003e\u003c/code\u003e, since it is more higuer level. I recommend to use the latter\n Otherwise, \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eatomicallySync\u003c/a\u003e\u003c/code\u003e must be invoked explicitly or no persistence will exist.\n Cache writes allways save a coherent state\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Int-\u003e (Integer -\u003e Integer -\u003e Integer -\u003e Bool)-\u003e Int-\u003e IO ThreadId",
        "fct-type": "function",
        "title": "clearSyncCacheProc"
      },
      "index": {
        "description": "Start the thread that periodically call clearSyncCache to clean and writes on the persistent storage it is indirecly set by means of syncWrite since it is more higuer level recommend to use the latter Otherwise syncCache or clearSyncCache or atomicallySync must be invoked explicitly or no persistence will exist Cache writes allways save coherent state",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "clearSyncCacheProc",
        "normalized": "Int-\u003e(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO ThreadId",
        "package": "TCache",
        "partial": "Sync Cache Proc",
        "signature": "Int-\u003e(Integer-\u003eInteger-\u003eInteger-\u003eBool)-\u003eInt-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:defaultCheck",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a default cache clearance check. It forces to drop from the cache all the\n elems not accesed since half the time between now and the last sync\n if it returns True, the object will be discarded from the cache\n it is invoked when the cache size exceeds the number of objects configured\n in \u003ccode\u003e\u003ca\u003eclearSyncCacheProc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Integer-\u003e Integer-\u003e Integer-\u003e Bool",
        "fct-type": "function",
        "title": "defaultCheck"
      },
      "index": {
        "description": "This is default cache clearance check It forces to drop from the cache all the elems not accesed since half the time between now and the last sync if it returns True the object will be discarded from the cache it is invoked when the cache size exceeds the number of objects configured in clearSyncCacheProc or clearSyncCache",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "defaultCheck",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eBool",
        "package": "TCache",
        "partial": "Check",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the content of the DBRef form the cache and from permanent storage\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "DBRef a -\u003e STM ()",
        "fct-source": "src/Data-TCache.html#delDBRef",
        "fct-type": "function",
        "title": "delDBRef"
      },
      "index": {
        "description": "Delete the content of the DBRef form the cache and from permanent storage",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "delDBRef",
        "normalized": "DBRef a-\u003eSTM()",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "DBRef a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delResource",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the resource. It is called syncronously. So it must commit   \n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#delResource",
        "fct-type": "method",
        "title": "delResource"
      },
      "index": {
        "description": "Delete the resource It is called syncronously So it must commit",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "delResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:delResources",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#delResources",
        "fct-type": "method",
        "title": "delResources"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "delResources",
        "normalized": "[a]-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:deleteResource",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the   resource from cache and from persistent storage.\n\u003c/p\u003e\u003cpre\u003e deleteResource r= \u003ccode\u003e\u003ca\u003edeleteResources\u003c/a\u003e\u003c/code\u003e [r]\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#deleteResource",
        "fct-type": "function",
        "title": "deleteResource"
      },
      "index": {
        "description": "Delete the resource from cache and from persistent storage deleteResource deleteResources",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "deleteResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:deleteResources",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the list of resources from cache and from persistent storage.\n\u003c/p\u003e\u003cpre\u003e  deleteResources rs= atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 where  f1 mrs = Resources  [] (catMaybes mrs) ()\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#deleteResources",
        "fct-type": "function",
        "title": "deleteResources"
      },
      "index": {
        "description": "Delete the list of resources from cache and from persistent storage deleteResources rs atomically withSTMResources rs f1 where f1 mrs Resources catMaybes mrs",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "deleteResources",
        "normalized": "[a]-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushAll",
      "description": {
        "fct-descr": "\u003cp\u003edrops the entire cache.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "STM ()",
        "fct-source": "src/Data-TCache.html#flushAll",
        "fct-type": "function",
        "title": "flushAll"
      },
      "index": {
        "description": "drops the entire cache",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "flushAll",
        "normalized": "STM()",
        "package": "TCache",
        "partial": "All",
        "signature": "STM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the pointed object from the cache, not the database (see \u003ccode\u003e\u003ca\u003edelDBRef\u003c/a\u003e\u003c/code\u003e)\n useful for cache invalidation when the database is modified by other process\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "DBRef a -\u003e STM ()",
        "fct-source": "src/Data-TCache.html#flushDBRef",
        "fct-type": "function",
        "title": "flushDBRef"
      },
      "index": {
        "description": "Deletes the pointed object from the cache not the database see delDBRef useful for cache invalidation when the database is modified by other process",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "flushDBRef",
        "normalized": "DBRef a-\u003eSTM()",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "DBRef a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:flushKey",
      "description": {
        "fct-descr": "\u003cp\u003eflush the element with the given key\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e STM ()",
        "fct-source": "src/Data-TCache.html#flushKey",
        "fct-type": "function",
        "title": "flushKey"
      },
      "index": {
        "description": "flush the element with the given key",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "flushKey",
        "normalized": "String-\u003eSTM()",
        "package": "TCache",
        "partial": "Key",
        "signature": "String-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:frecuency",
      "description": {
        "fct-descr": "\u003cp\u003enumber of seconds between saves when asyncronous\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Int",
        "fct-source": "src/Data-TCache.html#SyncMode",
        "fct-type": "function",
        "title": "frecuency"
      },
      "index": {
        "description": "number of seconds between saves when asyncronous",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "frecuency",
        "normalized": "",
        "package": "TCache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eGet the reference to the object in the cache. if it does not exist, the reference is created empty.\n Every execution of \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e returns the same unique reference to this key,\n so it can be safely considered pure. This is a property useful because deserialization\n of objects with unused embedded DBRef's  do not need to marshall them eagerly.\n  Tbis also avoid unnecesary cache lookups of the pointed objects.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e DBRef a",
        "fct-source": "src/Data-TCache.html#getDBRef",
        "fct-type": "function",
        "title": "getDBRef"
      },
      "index": {
        "description": "Get the reference to the object in the cache if it does not exist the reference is created empty Every execution of getDBRef returns the same unique reference to this key so it can be safely considered pure This is property useful because deserialization of objects with unused embedded DBRef do not need to marshall them eagerly Tbis also avoid unnecesary cache lookups of the pointed objects",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "getDBRef",
        "normalized": "String-\u003eDBRef a",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "String-\u003eDBRef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getResource",
      "description": {
        "fct-descr": "\u003cp\u003eTo read a resource from the cache.\n\u003c/p\u003e\u003cpre\u003egetResource r= do{mr\u003c- \u003ccode\u003e\u003ca\u003egetResources\u003c/a\u003e\u003c/code\u003e [r];return $! head mr}\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache.html#getResource",
        "fct-type": "function",
        "title": "getResource"
      },
      "index": {
        "description": "To read resource from the cache getResource do mr getResources return head mr",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "getResource",
        "normalized": "a-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:getResources",
      "description": {
        "fct-descr": "\u003cp\u003eTo read a list of resources from the cache if they exist\n\u003c/p\u003e\u003cp\u003e| \u003ccode\u003egetResources rs= atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 where  f1 mrs= Resources  [] [] mrs\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO [Maybe a]",
        "fct-source": "src/Data-TCache.html#getResources",
        "fct-type": "function",
        "title": "getResources"
      },
      "index": {
        "description": "To read list of resources from the cache if they exist getResources rs atomically withSTMResources rs f1 where f1 mrs Resources mrs",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "getResources",
        "normalized": "[a]-\u003eIO[Maybe a]",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:invalidateKey",
      "description": {
        "fct-descr": "\u003cp\u003elabel the object as not existent in database\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e STM ()",
        "fct-source": "src/Data-TCache.html#invalidateKey",
        "fct-type": "function",
        "title": "invalidateKey"
      },
      "index": {
        "description": "label the object as not existent in database",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "invalidateKey",
        "normalized": "String-\u003eSTM()",
        "package": "TCache",
        "partial": "Key",
        "signature": "String-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:keyObjDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the key of the object pointed to by the DBRef\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "DBRef a -\u003e String",
        "fct-source": "src/Data-TCache.html#keyObjDBRef",
        "fct-type": "function",
        "title": "keyObjDBRef"
      },
      "index": {
        "description": "Return the key of the object pointed to by the DBRef",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "keyObjDBRef",
        "normalized": "DBRef a-\u003eString",
        "package": "TCache",
        "partial": "Obj DBRef",
        "signature": "DBRef a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:keyResource",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "keyResource",
        "fct-source": "src/Data-TCache-IResource.html#keyResource",
        "fct-type": "method",
        "title": "keyResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "keyResource",
        "normalized": "",
        "package": "TCache",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:newCache",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new cache. Experimental\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO (Ht, Integer)",
        "fct-source": "src/Data-TCache.html#newCache",
        "fct-type": "function",
        "title": "newCache"
      },
      "index": {
        "description": "Creates new cache Experimental",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "newCache",
        "normalized": "IO(Ht,Integer)",
        "package": "TCache",
        "partial": "Cache",
        "signature": "IO(Ht,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:newDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the object passed as parameter (if it does not exist) and\n-- return its reference in the IO monad.\n-- If an object with the same key already exists, it is returned as is\n-- If not, the reference is created with the new value.\n-- If you like to update in any case, use \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e combined\nnewDBRefIO :: (IResource a,Typeable a) =\u003e a -\u003e IO (DBRef a)\nnewDBRefIO x= do\n let key = keyResource x\n mdbref \u003c- mDBRefIO key\n case mdbref of\n   Right dbref -\u003e return dbref\n\u003c/p\u003e\u003cp\u003eLeft cache -\u003e do\n     tv\u003c- newTVarIO  DoNotExist\n     let dbref= DBRef key  tv\n     w \u003c- mkWeakPtr  dbref . Just $ fixToCache dbref\n     H.insert cache key (CacheElem Nothing w)\n     t \u003c-  timeInteger\n     atomically $ do\n       applyTriggers [dbref] [Just x]      --\u003ccode\u003edebug\u003c/code\u003e (\u003ca\u003ebefore \u003c/a\u003e++key)\n       writeTVar tv  . Exist $ Elem x t t\n       return dbref\n\u003c/p\u003e\u003cp\u003eCreate the object passed as parameter (if it does not exist) and\n return its reference in the STM monad.\n If an object with the same key already exists, it is returned as is\n If not, the reference is created with the new value.\n If you like to update in any case, use \u003ccode\u003e\u003ca\u003egetDBRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteDBRef\u003c/a\u003e\u003c/code\u003e combined\n if you  need to create the reference and the reference content, use \u003ccode\u003e\u003ca\u003enewDBRef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e STM (DBRef a)",
        "fct-source": "src/Data-TCache.html#newDBRef",
        "fct-type": "function",
        "title": "newDBRef"
      },
      "index": {
        "description": "Create the object passed as parameter if it does not exist and return its reference in the IO monad If an object with the same key already exists it is returned as is If not the reference is created with the new value If you like to update in any case use getDBRef and writeDBRef combined newDBRefIO IResource Typeable IO DBRef newDBRefIO do let key keyResource mdbref mDBRefIO key case mdbref of Right dbref return dbref Left cache do tv newTVarIO DoNotExist let dbref DBRef key tv mkWeakPtr dbref Just fixToCache dbref H.insert cache key CacheElem Nothing timeInteger atomically do applyTriggers dbref Just debug before key writeTVar tv Exist Elem return dbref Create the object passed as parameter if it does not exist and return its reference in the STM monad If an object with the same key already exists it is returned as is If not the reference is created with the new value If you like to update in any case use getDBRef and writeDBRef combined if you need to create the reference and the reference content use newDBRef",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "newDBRef",
        "normalized": "a-\u003eSTM(DBRef a)",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "a-\u003eSTM(DBRef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:numElems",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the  total number of DBRefs in the cache. For debug purposes.\n This does not count the number of objects in the cache since many of the DBRef\n may not have the pointed object loaded. It's O(n).\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO Int",
        "fct-source": "src/Data-TCache.html#numElems",
        "fct-type": "function",
        "title": "numElems"
      },
      "index": {
        "description": "Return the total number of DBRefs in the cache For debug purposes This does not count the number of objects in the cache since many of the DBRef may not have the pointed object loaded It",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "numElems",
        "normalized": "",
        "package": "TCache",
        "partial": "Elems",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:onNothing",
      "description": {
        "fct-descr": "\u003cp\u003eHandles Nothing cases in a simpler way than runMaybeT.\n it is used in infix notation. for example:\n\u003c/p\u003e\u003cpre\u003eresult \u003c- readDBRef ref `onNothing` error (\"Not found \"++ keyObjDBRef ref)\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003eresult \u003c- readDBRef ref `onNothing` return someDefaultValue\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "m (Maybe b) -\u003e m b -\u003e m b",
        "fct-source": "src/Data-TCache.html#onNothing",
        "fct-type": "function",
        "title": "onNothing"
      },
      "index": {
        "description": "Handles Nothing cases in simpler way than runMaybeT it is used in infix notation for example result readDBRef ref onNothing error Not found keyObjDBRef ref or result readDBRef ref onNothing return someDefaultValue",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "onNothing",
        "normalized": "a(Maybe b)-\u003ea b-\u003ea b",
        "package": "TCache",
        "partial": "Nothing",
        "signature": "m(Maybe b)-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the reference value. If it is not in the cache, it is fetched\n from the database.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "DBRef a -\u003e STM (Maybe a)",
        "fct-source": "src/Data-TCache.html#readDBRef",
        "fct-type": "function",
        "title": "readDBRef"
      },
      "index": {
        "description": "Return the reference value If it is not in the cache it is fetched from the database",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "readDBRef",
        "normalized": "DBRef a-\u003eSTM(Maybe a)",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "DBRef a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readDBRefs",
      "description": {
        "fct-descr": "\u003cp\u003eRead multiple DBRefs in a single request using the new \u003ccode\u003e\u003ca\u003ereadResourcesByKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[DBRef a] -\u003e STM [Maybe a]",
        "fct-source": "src/Data-TCache.html#readDBRefs",
        "fct-type": "function",
        "title": "readDBRefs"
      },
      "index": {
        "description": "Read multiple DBRefs in single request using the new readResourcesByKey",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "readDBRefs",
        "normalized": "[DBRef a]-\u003eSTM[Maybe a]",
        "package": "TCache",
        "partial": "DBRefs",
        "signature": "[DBRef a]-\u003eSTM[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResource",
      "description": {
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache-IResource.html#readResource",
        "fct-type": "method",
        "title": "readResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "readResource",
        "normalized": "a-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResourceByKey",
      "description": {
        "fct-descr": "\u003cp\u003eImplements the database access and marshalling of the object.\n        while the database access must be strict, the marshaling must be lazy if, as is often the case,\n        some parts of the object are not really accesed.\n        If the object contains DBRefs, this avoids unnecesary cache lookups.\n        This method is called within \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e blocks.\n        Since STM transactions retry, readResourceByKey may be called twice in strange situations. So it must be idempotent, not only in the result but also in the effect in the database\n        . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "String -\u003e IO (Maybe a)",
        "fct-source": "src/Data-TCache-IResource.html#readResourceByKey",
        "fct-type": "method",
        "title": "readResourceByKey"
      },
      "index": {
        "description": "Implements the database access and marshalling of the object while the database access must be strict the marshaling must be lazy if as is often the case some parts of the object are not really accesed If the object contains DBRefs this avoids unnecesary cache lookups This method is called within atomically blocks Since STM transactions retry readResourceByKey may be called twice in strange situations So it must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "readResourceByKey",
        "normalized": "String-\u003eIO(Maybe a)",
        "package": "TCache",
        "partial": "Resource By Key",
        "signature": "String-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:readResourcesByKey",
      "description": {
        "fct-descr": "\u003cp\u003ehopefully optimized read of many objects by key.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[String] -\u003e IO [Maybe a]",
        "fct-source": "src/Data-TCache-IResource.html#readResourcesByKey",
        "fct-type": "method",
        "title": "readResourcesByKey"
      },
      "index": {
        "description": "hopefully optimized read of many objects by key",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "readResourcesByKey",
        "normalized": "[String]-\u003eIO[Maybe a]",
        "package": "TCache",
        "partial": "Resources By Key",
        "signature": "[String]-\u003eIO[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:resources",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty resources: \u003ccode\u003eresources= Resources  [] [] ()\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Resources a ()",
        "fct-source": "src/Data-TCache-IResource.html#resources",
        "fct-type": "function",
        "title": "resources"
      },
      "index": {
        "description": "Empty resources resources Resources",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "resources",
        "normalized": "Resources a()",
        "package": "TCache",
        "partial": "",
        "signature": "Resources a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:safeIOToSTM",
      "description": {
        "fct-descr": "\u003cp\u003eAssures that the IO computation finalizes no matter if the STM transaction\n is aborted or retried. The IO computation run in a different thread.\n The STM transaction wait until the completion of the IO procedure (or retry as usual).\n\u003c/p\u003e\u003cp\u003eIt can be retried if the embedding STM computation is retried\n so the IO computation must be idempotent.\n Exceptions are bubbled up to the STM transaction\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO a -\u003e STM a",
        "fct-source": "src/Data-TCache.html#safeIOToSTM",
        "fct-type": "function",
        "title": "safeIOToSTM"
      },
      "index": {
        "description": "Assures that the IO computation finalizes no matter if the STM transaction is aborted or retried The IO computation run in different thread The STM transaction wait until the completion of the IO procedure or retry as usual It can be retried if the embedding STM computation is retried so the IO computation must be idempotent Exceptions are bubbled up to the STM transaction",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "safeIOToSTM",
        "normalized": "IO a-\u003eSTM a",
        "package": "TCache",
        "partial": "IOTo STM",
        "signature": "IO a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:setCache",
      "description": {
        "fct-descr": "\u003cp\u003eSet the cache. this is useful for hot loaded modules that will update an existing cache. Experimental\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "Cache -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#setCache",
        "fct-type": "function",
        "title": "setCache"
      },
      "index": {
        "description": "Set the cache this is useful for hot loaded modules that will update an existing cache Experimental",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "setCache",
        "normalized": "Cache-\u003eIO()",
        "package": "TCache",
        "partial": "Cache",
        "signature": "Cache-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:setConditions",
      "description": {
        "fct-descr": "\u003cp\u003establishes the procedures to call before and after saving with \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSyncCache\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eclearSyncCacheProc\u003c/a\u003e\u003c/code\u003e. The postcondition of\n database persistence should be a commit.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO () -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#setConditions",
        "fct-type": "function",
        "title": "setConditions"
      },
      "index": {
        "description": "stablishes the procedures to call before and after saving with syncCache clearSyncCache or clearSyncCacheProc The postcondition of database persistence should be commit",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "setConditions",
        "normalized": "IO()-\u003eIO()-\u003eIO()",
        "package": "TCache",
        "partial": "Conditions",
        "signature": "IO()-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:syncCache",
      "description": {
        "fct-descr": "\u003cp\u003eForce the atomic write of all cached objects modified since the last save into permanent storage.\n Cache writes allways save a coherent state. As allways, only the modified objects are written.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-TCache.html#syncCache",
        "fct-type": "function",
        "title": "syncCache"
      },
      "index": {
        "description": "Force the atomic write of all cached objects modified since the last save into permanent storage Cache writes allways save coherent state As allways only the modified objects are written",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "syncCache",
        "normalized": "IO()",
        "package": "TCache",
        "partial": "Cache",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:syncWrite",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the cache synchronization policy with permanent storage. See \u003ccode\u003e\u003ca\u003eSyncMode\u003c/a\u003e\u003c/code\u003e for details\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "SyncMode -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#syncWrite",
        "fct-type": "function",
        "title": "syncWrite"
      },
      "index": {
        "description": "Specify the cache synchronization policy with permanent storage See SyncMode for details",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "syncWrite",
        "normalized": "SyncMode-\u003eIO()",
        "package": "TCache",
        "partial": "Write",
        "signature": "SyncMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toAdd",
      "description": {
        "fct-descr": "\u003cp\u003eresources to be inserted back in the cache\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a]",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toAdd"
      },
      "index": {
        "description": "resources to be inserted back in the cache",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "toAdd",
        "normalized": "[a]",
        "package": "TCache",
        "partial": "Add",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toDelete",
      "description": {
        "fct-descr": "\u003cp\u003eresources to be deleted from the cache and from permanent storage\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a]",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toDelete"
      },
      "index": {
        "description": "resources to be deleted from the cache and from permanent storage",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "toDelete",
        "normalized": "[a]",
        "package": "TCache",
        "partial": "Delete",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:toReturn",
      "description": {
        "fct-descr": "\u003cp\u003eresult to be returned\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "b",
        "fct-source": "src/Data-TCache-IResource.html#Resources",
        "fct-type": "function",
        "title": "toReturn"
      },
      "index": {
        "description": "result to be returned",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "toReturn",
        "normalized": "",
        "package": "TCache",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:unsafeIOToSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely performs IO in the STM monad.  Beware: this is a highly\n dangerous thing to do.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The STM implementation will often run transactions multiple\n     times, so you need to be prepared for this if your IO has any\n     side effects.\n\u003c/li\u003e\u003cli\u003e The STM implementation will abort transactions that are known to\n     be invalid and need to be restarted.  This may happen in the middle\n     of \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e, so make sure you don't acquire any resources\n     that need releasing (exception handlers are ignored when aborting\n     the transaction).  That includes doing any IO using Handles, for\n     example.  Getting this wrong will probably lead to random deadlocks.\n\u003c/li\u003e\u003cli\u003e The transaction may have seen an inconsistent view of memory when\n     the IO runs.  Invariants that you expect to be true throughout\n     your program may not be true inside a transaction, due to the\n     way transactions are implemented.  Normally this wouldn't be visible\n     to the programmer, but using \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e can expose it.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "IO a -\u003e STM a",
        "fct-type": "function",
        "title": "unsafeIOToSTM"
      },
      "index": {
        "description": "Unsafely performs IO in the STM monad Beware this is highly dangerous thing to do The STM implementation will often run transactions multiple times so you need to be prepared for this if your IO has any side effects The STM implementation will abort transactions that are known to be invalid and need to be restarted This may happen in the middle of unsafeIOToSTM so make sure you don acquire any resources that need releasing exception handlers are ignored when aborting the transaction That includes doing any IO using Handles for example Getting this wrong will probably lead to random deadlocks The transaction may have seen an inconsistent view of memory when the IO runs Invariants that you expect to be true throughout your program may not be true inside transaction due to the way transactions are implemented Normally this wouldn be visible to the programmer but using unsafeIOToSTM can expose it",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "unsafeIOToSTM",
        "normalized": "IO a-\u003eSTM a",
        "package": "TCache",
        "partial": "IOTo STM",
        "signature": "IO a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withResource",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate of a single object in the cache\n\u003c/p\u003e\u003cpre\u003ewithResource r f= \u003ccode\u003e\u003ca\u003ewithResources\u003c/a\u003e\u003c/code\u003e [r] ([mr]-\u003e [f mr])\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e (Maybe a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#withResource",
        "fct-type": "function",
        "title": "withResource"
      },
      "index": {
        "description": "Update of single object in the cache withResource withResources mr mr",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "withResource",
        "normalized": "a-\u003e(Maybe a-\u003ea)-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003e(Maybe a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withResources",
      "description": {
        "fct-descr": "\u003cp\u003eTo atomically add/modify many objects in the cache\n\u003c/p\u003e\u003cpre\u003e withResources rs f=  atomically $ \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e rs f1 \u003e\u003e return() where   f1 mrs= let as= f mrs in  Resources  as [] ()\u003c/pre\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e ([Maybe a] -\u003e [a]) -\u003e IO ()",
        "fct-source": "src/Data-TCache.html#withResources",
        "fct-type": "function",
        "title": "withResources"
      },
      "index": {
        "description": "To atomically add modify many objects in the cache withResources rs atomically withSTMResources rs f1 return where f1 mrs let as mrs in Resources as",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "withResources",
        "normalized": "[a]-\u003e([Maybe a]-\u003e[a])-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003e([Maybe a]-\u003e[a])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:withSTMResources",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the main function for the *Resource(s) calls. All the rest derive from it. The results are kept in the STM monad\n so it can be part of a larger STM transaction involving other DBRefs.\n The \u003ccode\u003e\u003ca\u003eResources\u003c/a\u003e\u003c/code\u003e register  returned by the user-defined function  is interpreted as such:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoAdd\u003c/a\u003e\u003c/code\u003e:  the content of this field will be added/updated to the cache\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoDelete\u003c/a\u003e\u003c/code\u003e: the content of this field will be removed from the cache and from permanent storage\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoReturn\u003c/a\u003e\u003c/code\u003e: the content of this field will be returned by \u003ccode\u003e\u003ca\u003ewithSTMResources\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWARNING: To catch evaluations errors at the right place, the values to be written must be fully evaluated.\n Errors in delayed evaluations at serialization time can cause inconsistencies in the database.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a]-\u003e ([Maybe a] -\u003e Resources a x)-\u003e STM x",
        "fct-type": "function",
        "title": "withSTMResources"
      },
      "index": {
        "description": "This is the main function for the Resource calls All the rest derive from it The results are kept in the STM monad so it can be part of larger STM transaction involving other DBRefs The Resources register returned by the user-defined function is interpreted as such toAdd the content of this field will be added updated to the cache toDelete the content of this field will be removed from the cache and from permanent storage toReturn the content of this field will be returned by withSTMResources WARNING To catch evaluations errors at the right place the values to be written must be fully evaluated Errors in delayed evaluations at serialization time can cause inconsistencies in the database",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "withSTMResources",
        "normalized": "[a]-\u003e([Maybe a]-\u003eResources a b)-\u003eSTM b",
        "package": "TCache",
        "partial": "STMResources",
        "signature": "[a]-\u003e([Maybe a]-\u003eResources a x)-\u003eSTM x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite in the reference a value\n The new key must be the same than the old key of the previous object stored\n otherwise, an error \u003ca\u003elaw of key conservation broken\u003c/a\u003e will be raised\n\u003c/p\u003e\u003cp\u003eWARNING: the value to be written in the DBRef must be fully evaluated. Delayed evaluations at\n serialization time can cause inconsistencies in the database.\n In future releases this will be enforced.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "DBRef a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-TCache.html#writeDBRef",
        "fct-type": "function",
        "title": "writeDBRef"
      },
      "index": {
        "description": "Write in the reference value The new key must be the same than the old key of the previous object stored otherwise an error law of key conservation broken will be raised WARNING the value to be written in the DBRef must be fully evaluated Delayed evaluations at serialization time can cause inconsistencies in the database In future releases this will be enforced",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "writeDBRef",
        "normalized": "DBRef a-\u003ea-\u003eSTM()",
        "package": "TCache",
        "partial": "DBRef",
        "signature": "DBRef a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeResource",
      "description": {
        "fct-descr": "\u003cp\u003eTo write into persistent storage. It must be strict.  \n Since STM transactions may retry, \u003ccode\u003ewriteResource\u003c/code\u003e must be idempotent, not only in the result but also in the effect in the database.\n . However, because it is executed by \u003ccode\u003esafeIOToSTM\u003c/code\u003e it is guaranteed that the execution is not interrupted.\n All the new obbects are writeen to the database on synchromization,\n so writeResource must not autocommit.\n Commit code must be located in the postcondition. (see  \u003ccode\u003esetConditions\u003c/code\u003e)\n Since there is no provision for rollback from failure in writing to\n persistent storage, \u003ccode\u003e\u003ca\u003ewriteResource\u003c/a\u003e\u003c/code\u003e must retry until success.\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#writeResource",
        "fct-type": "method",
        "title": "writeResource"
      },
      "index": {
        "description": "To write into persistent storage It must be strict Since STM transactions may retry writeResource must be idempotent not only in the result but also in the effect in the database However because it is executed by safeIOToSTM it is guaranteed that the execution is not interrupted All the new obbects are writeen to the database on synchromization so writeResource must not autocommit Commit code must be located in the postcondition see setConditions Since there is no provision for rollback from failure in writing to persistent storage writeResource must retry until success",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "writeResource",
        "normalized": "a-\u003eIO()",
        "package": "TCache",
        "partial": "Resource",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TCache/docs/Data-TCache.html#v:writeResources",
      "description": {
        "fct-descr": "\u003cp\u003emultiple write (hopefully) in a single request. That is up to you and your backend\n . Defined by default as 'mapM_ writeResource'\n\u003c/p\u003e",
        "fct-module": "Data.TCache",
        "fct-package": "TCache",
        "fct-signature": "[a] -\u003e IO ()",
        "fct-source": "src/Data-TCache-IResource.html#writeResources",
        "fct-type": "method",
        "title": "writeResources"
      },
      "index": {
        "description": "multiple write hopefully in single request That is up to you and your backend Defined by default as mapM writeResource",
        "hierarchy": "Data TCache",
        "module": "Data.TCache",
        "name": "writeResources",
        "normalized": "[a]-\u003eIO()",
        "package": "TCache",
        "partial": "Resources",
        "signature": "[a]-\u003eIO()"
      }
    }
  }
]