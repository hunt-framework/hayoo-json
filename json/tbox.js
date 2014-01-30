[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The type class TBox",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "Class",
        "normalized": "",
        "package": "tbox",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#t:TBox",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is a (Adv)STM variable that might contain a value of \n some type \u003ccode\u003ea\u003c/code\u003e. In contrast to a plain 'TVar (Maybe a)', a \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has IO hooks that are executed transparently on writes and reads,\n which makes it particularly suitable for implementing a persistent and thread-safe storage.\n The type variable \u003ccode\u003ek\u003c/code\u003e can be used to provide additional storage information, e.g.,\n a filepath. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e Note that the read/write functions of this type class, i.e.,\n \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSTM\u003c/a\u003e\u003c/code\u003e should \n \u003cem\u003eonly\u003c/em\u003e be used to derive new \n instances and do not serve to modify the state of a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n The interface defined in module \u003ccode\u003eTBox.Operations\u003c/code\u003e provides \n operations on \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es that guarantee consistency.\n\u003c/p\u003e\u003cp\u003eSee the module \u003ccode\u003eControl.Concurrent.TFile\u003c/code\u003e for a sample instance.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#TBox",
        "fct-type": "class",
        "title": "TBox"
      },
      "index": {
        "description": "An instance of TBox is Adv STM variable that might contain value of some type In contrast to plain TVar Maybe TBox has IO hooks that are executed transparently on writes and reads which makes it particularly suitable for implementing persistent and thread-safe storage The type variable can be used to provide additional storage information e.g filepath Important Note that the read write functions of this type class i.e readIO readSTM writeIO writeSTM clearIO clearSTM should only be used to derive new instances and do not serve to modify the state of TBox The interface defined in module TBox.Operations provides operations on TBox that guarantee consistency See the module Control.Concurrent.TFile for sample instance",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "TBox",
        "normalized": "",
        "package": "tbox",
        "partial": "TBox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:clearIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e during the commit phase.\n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#clearIO",
        "fct-type": "method",
        "title": "clearIO"
      },
      "index": {
        "description": "Used in TBox.clear during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "clearIO",
        "normalized": "a b c-\u003eIO()",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:clearSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#clearSTM",
        "fct-type": "method",
        "title": "clearSTM"
      },
      "index": {
        "description": "Used in TBox.clear",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "clearSTM",
        "normalized": "a b c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:isDirty",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisDirty\u003c/a\u003e\u003c/code\u003e yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e hook will be \n run on the next read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#isDirty",
        "fct-type": "method",
        "title": "isDirty"
      },
      "index": {
        "description": "If isDirty yields True the readIO hook will be run on the next read",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "isDirty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Dirty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "Takes key and an initial value",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "new",
        "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
        "fct-type": "method",
        "title": "newEmpty"
      },
      "index": {
        "description": "Takes key and returns an empty",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "newEmpty",
        "normalized": "a-\u003eAdvSTM(b a c)",
        "package": "tbox",
        "partial": "Empty",
        "signature": "k-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newEmptyIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
        "fct-type": "method",
        "title": "newEmptyIO"
      },
      "index": {
        "description": "Takes key and returns an empty Has default implementation",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "newEmptyIO",
        "normalized": "a-\u003eIO(b a c)",
        "package": "tbox",
        "partial": "Empty IO",
        "signature": "k-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
        "fct-type": "method",
        "title": "newIO"
      },
      "index": {
        "description": "Takes key and an initial value Has default implementation",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "newIO",
        "normalized": "a-\u003eb-\u003eIO(c a b)",
        "package": "tbox",
        "partial": "IO",
        "signature": "k-\u003ea-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:readIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e when retrying the transaction, which happens when the \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has been marked \"dirty\".\n Note: Might be executed multiple times for the\n same \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e in a single transaction. See \u003ccode\u003e\u003ca\u003eunsafeRetryWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#readIO",
        "fct-type": "method",
        "title": "readIO"
      },
      "index": {
        "description": "Used in TBox.read when retrying the transaction which happens when the TBox has been marked dirty Note Might be executed multiple times for the same TBox in single transaction See unsafeRetryWith",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "readIO",
        "normalized": "a b c-\u003eIO(Maybe c)",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:readSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#readSTM",
        "fct-type": "method",
        "title": "readSTM"
      },
      "index": {
        "description": "Used in TBox.read",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "readSTM",
        "normalized": "a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:setDirty",
      "description": {
        "fct-descr": "\u003cp\u003eChange the \"dirty\" status of the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e Bool -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#setDirty",
        "fct-type": "method",
        "title": "setDirty"
      },
      "index": {
        "description": "Change the dirty status of the TBox",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "setDirty",
        "normalized": "a b c-\u003eBool-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "Dirty",
        "signature": "t k a-\u003eBool-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:writeIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e during the commit phase. \n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#writeIO",
        "fct-type": "method",
        "title": "writeIO"
      },
      "index": {
        "description": "Used in TBox.write during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "writeIO",
        "normalized": "a b c-\u003ec-\u003eIO()",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:writeSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Class",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#writeSTM",
        "fct-type": "method",
        "title": "writeSTM"
      },
      "index": {
        "description": "Used in TBox.write",
        "hierarchy": "Control Concurrent TBox Internal Class",
        "module": "Control.Concurrent.TBox.Internal.Class",
        "name": "writeSTM",
        "normalized": "a b c-\u003ec-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003ea-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on instances of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html",
        "fct-type": "module",
        "title": "Operations"
      },
      "index": {
        "description": "Operations on instances of TBox",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "Operations",
        "normalized": "",
        "package": "tbox",
        "partial": "Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Deletes the content",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "clear",
        "normalized": "a b c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True iff the TBox is empty",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "isEmpty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Empty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmptyNotDirty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty and not dirty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmptyNotDirty",
        "fct-type": "function",
        "title": "isEmptyNotDirty"
      },
      "index": {
        "description": "Returns True iff the TBox is empty and not dirty",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "isEmptyNotDirty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Empty Not Dirty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eIf the TBox is dirty, this retries the transaction and\n rereads the content using \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e in a separate thread.\n Otherwise it simply returns the result of \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Depending on the instance implementation, careless \n use of \u003ccode\u003e\u003ca\u003esetDirty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in the same transaction might lead\n to nonterminating retry loops.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "If the TBox is dirty this retries the transaction and rereads the content using readIO in separate thread Otherwise it simply returns the result of readSTM Note Depending on the instance implementation careless use of setDirty and read in the same transaction might lead to nonterminating retry loops",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "read",
        "normalized": "a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the new content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.Internal.Operations",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes the new content",
        "hierarchy": "Control Concurrent TBox Internal Operations",
        "module": "Control.Concurrent.TBox.Internal.Operations",
        "name": "write",
        "normalized": "a b c-\u003ec-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003ea-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an implementation of a skip list in the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad.\n A skip list is a probabilistic data structure with map-like operations.\n In contrast to a balanced tree, a skip list does not need any rebalancing,\n which makes it suitable for concurrent programming.\n See: \u003cem\u003eWilliam Pugh. Skip Lists: A Probabilistic Alternative to Balanced Trees.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe elements of the skip list are stored in a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n When an element of the skip list is modified, the operation is relegated\n to the corresponding \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor a concrete instance see module \u003ccode\u003eControl.Concurrent.TFile.TSkipList\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html",
        "fct-type": "module",
        "title": "TSkipList"
      },
      "index": {
        "description": "Provides an implementation of skip list in the AdvSTM monad skip list is probabilistic data structure with map-like operations In contrast to balanced tree skip list does not need any rebalancing which makes it suitable for concurrent programming See William Pugh Skip Lists Probabilistic Alternative to Balanced Trees The elements of the skip list are stored in TBox When an element of the skip list is modified the operation is relegated to the corresponding TBox For concrete instance see module Control.Concurrent.TFile.TSkipList",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tbox",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#t:TSkipList",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#TSkipList",
        "fct-type": "data",
        "title": "TSkipList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tbox",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:chooseLevel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a randomly chosen level. Is used for inserting new elements.\n Note that this function uses \u003ccode\u003e\u003ca\u003eunsafeIOToAdvSTM\u003c/a\u003e\u003c/code\u003e to access the random\n number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "TSkipList t k a -\u003e AdvSTM Int",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#chooseLevel",
        "fct-type": "function",
        "title": "chooseLevel"
      },
      "index": {
        "description": "Returns randomly chosen level Is used for inserting new elements Note that this function uses unsafeIOToAdvSTM to access the random number generator",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "chooseLevel",
        "normalized": "TSkipList a b c-\u003eAdvSTM Int",
        "package": "tbox",
        "partial": "Level",
        "signature": "TSkipList t k a-\u003eAdvSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:contentTBox",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "Node t k a -\u003e t k a",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#contentTBox",
        "fct-type": "function",
        "title": "contentTBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "contentTBox",
        "normalized": "Node a b c-\u003ea b c",
        "package": "tbox",
        "partial": "TBox",
        "signature": "Node t k a-\u003et k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:delete",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "delete",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that satisfy the predicate. O(n).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Returns all elements that satisfy the predicate",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "filter",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTSkipList c a b-\u003eAdvSTM(Map a b)",
        "package": "tbox",
        "partial": "",
        "signature": "(k-\u003ea-\u003eBool)-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that are greater than the key.\n TODO: currently in O(n), can be made more efficient (like \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#geq",
        "fct-type": "function",
        "title": "geq"
      },
      "index": {
        "description": "Returns all elements that are greater than the key TODO currently in can be made more efficient like leq",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "geq",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:insert",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:insertNode",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e Node t k a -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#insertNode",
        "fct-type": "function",
        "title": "insertNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "insertNode",
        "normalized": "a-\u003eNode b a c-\u003eTSkipList b a c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "Node",
        "signature": "k-\u003eNode t k a-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:key",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "Node t k a -\u003e k",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "key",
        "normalized": "Node a b c-\u003eb",
        "package": "tbox",
        "partial": "",
        "signature": "Node t k a-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:leq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that are smaller than the key. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#leq",
        "fct-type": "function",
        "title": "leq"
      },
      "index": {
        "description": "Returns all elements that are smaller than the key",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "leq",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:lookup",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "lookup",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:lookupNode",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Maybe (Node t k a))",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#lookupNode",
        "fct-type": "function",
        "title": "lookupNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "lookupNode",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Maybe(Node b a c))",
        "package": "tbox",
        "partial": "Node",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Maybe(Node t k a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:min",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the element with the least key, if it exists. \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "TSkipList t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "Returns the element with the least key if it exists",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "min",
        "normalized": "TSkipList a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "TSkipList t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty skiplist.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "Float-\u003e Int-\u003e IO (TSkipList t k a)",
        "fct-type": "function",
        "title": "newIO"
      },
      "index": {
        "description": "An empty skiplist",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "newIO",
        "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b c)",
        "package": "tbox",
        "partial": "IO",
        "signature": "Float-\u003eInt-\u003eIO(TSkipList t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:newNode",
      "description": {
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e t k a -\u003e Int -\u003e AdvSTM (Node t k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#newNode",
        "fct-type": "function",
        "title": "newNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "newNode",
        "normalized": "a-\u003eb a c-\u003eInt-\u003eAdvSTM(Node b a c)",
        "package": "tbox",
        "partial": "Node",
        "signature": "k-\u003et k a-\u003eInt-\u003eAdvSTM(Node t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:readAndValidate",
      "description": {
        "fct-descr": "\u003cp\u003eReads the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e of the node. If the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty, the node\n is removed from the skip list.\n This is necessary when \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es are shared between different data\n structures.  \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "TSkipList t k a -\u003e Node t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#readAndValidate",
        "fct-type": "function",
        "title": "readAndValidate"
      },
      "index": {
        "description": "Reads the TBox of the node If the TBox is empty the node is removed from the skip list This is necessary when TBox are shared between different data structures",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "readAndValidate",
        "normalized": "TSkipList a b c-\u003eNode a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "And Validate",
        "signature": "TSkipList t k a-\u003eNode t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eDebug helper. Returns the skip list as a string.\n All elements smaller than the given key are written to the string.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM String",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Debug helper Returns the skip list as string All elements smaller than the given key are written to the string",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "toString",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM String",
        "package": "tbox",
        "partial": "String",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates an element. Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the element is not in the\n list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Updates an element Throws AssertionFailed if the element is not in the list",
        "hierarchy": "Control Concurrent TBox TSkipList",
        "module": "Control.Concurrent.TBox.TSkipList",
        "name": "update",
        "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract interface for transactional variables with IO hooks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TBox.html",
        "fct-type": "module",
        "title": "TBox"
      },
      "index": {
        "description": "An abstract interface for transactional variables with IO hooks",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "TBox",
        "normalized": "",
        "package": "tbox",
        "partial": "TBox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#t:TBox",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is a (Adv)STM variable that might contain a value of \n some type \u003ccode\u003ea\u003c/code\u003e. In contrast to a plain 'TVar (Maybe a)', a \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has IO hooks that are executed transparently on writes and reads,\n which makes it particularly suitable for implementing a persistent and thread-safe storage.\n The type variable \u003ccode\u003ek\u003c/code\u003e can be used to provide additional storage information, e.g.,\n a filepath. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e Note that the read/write functions of this type class, i.e.,\n \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSTM\u003c/a\u003e\u003c/code\u003e should \n \u003cem\u003eonly\u003c/em\u003e be used to derive new \n instances and do not serve to modify the state of a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n The interface defined in module \u003ccode\u003eTBox.Operations\u003c/code\u003e provides \n operations on \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es that guarantee consistency.\n\u003c/p\u003e\u003cp\u003eSee the module \u003ccode\u003eControl.Concurrent.TFile\u003c/code\u003e for a sample instance.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#TBox",
        "fct-type": "class",
        "title": "TBox"
      },
      "index": {
        "description": "An instance of TBox is Adv STM variable that might contain value of some type In contrast to plain TVar Maybe TBox has IO hooks that are executed transparently on writes and reads which makes it particularly suitable for implementing persistent and thread-safe storage The type variable can be used to provide additional storage information e.g filepath Important Note that the read write functions of this type class i.e readIO readSTM writeIO writeSTM clearIO clearSTM should only be used to derive new instances and do not serve to modify the state of TBox The interface defined in module TBox.Operations provides operations on TBox that guarantee consistency See the module Control.Concurrent.TFile for sample instance",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "TBox",
        "normalized": "",
        "package": "tbox",
        "partial": "TBox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Deletes the content",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "clear",
        "normalized": "a b c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clearIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e during the commit phase.\n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#clearIO",
        "fct-type": "method",
        "title": "clearIO"
      },
      "index": {
        "description": "Used in TBox.clear during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "clearIO",
        "normalized": "a b c-\u003eIO()",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clearSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#clearSTM",
        "fct-type": "method",
        "title": "clearSTM"
      },
      "index": {
        "description": "Used in TBox.clear",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "clearSTM",
        "normalized": "a b c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isDirty",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisDirty\u003c/a\u003e\u003c/code\u003e yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e hook will be \n run on the next read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#isDirty",
        "fct-type": "method",
        "title": "isDirty"
      },
      "index": {
        "description": "If isDirty yields True the readIO hook will be run on the next read",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "isDirty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Dirty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True iff the TBox is empty",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "isEmpty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Empty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isEmptyNotDirty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty and not dirty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmptyNotDirty",
        "fct-type": "function",
        "title": "isEmptyNotDirty"
      },
      "index": {
        "description": "Returns True iff the TBox is empty and not dirty",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "isEmptyNotDirty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Empty Not Dirty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "Takes key and an initial value",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "new",
        "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
        "fct-type": "method",
        "title": "newEmpty"
      },
      "index": {
        "description": "Takes key and returns an empty",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "newEmpty",
        "normalized": "a-\u003eAdvSTM(b a c)",
        "package": "tbox",
        "partial": "Empty",
        "signature": "k-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newEmptyIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
        "fct-type": "method",
        "title": "newEmptyIO"
      },
      "index": {
        "description": "Takes key and returns an empty Has default implementation",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "newEmptyIO",
        "normalized": "a-\u003eIO(b a c)",
        "package": "tbox",
        "partial": "Empty IO",
        "signature": "k-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
        "fct-type": "method",
        "title": "newIO"
      },
      "index": {
        "description": "Takes key and an initial value Has default implementation",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "newIO",
        "normalized": "a-\u003eb-\u003eIO(c a b)",
        "package": "tbox",
        "partial": "IO",
        "signature": "k-\u003ea-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eIf the TBox is dirty, this retries the transaction and\n rereads the content using \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e in a separate thread.\n Otherwise it simply returns the result of \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Depending on the instance implementation, careless \n use of \u003ccode\u003e\u003ca\u003esetDirty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in the same transaction might lead\n to nonterminating retry loops.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "If the TBox is dirty this retries the transaction and rereads the content using readIO in separate thread Otherwise it simply returns the result of readSTM Note Depending on the instance implementation careless use of setDirty and read in the same transaction might lead to nonterminating retry loops",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "read",
        "normalized": "a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:readIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e when retrying the transaction, which happens when the \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has been marked \"dirty\".\n Note: Might be executed multiple times for the\n same \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e in a single transaction. See \u003ccode\u003e\u003ca\u003eunsafeRetryWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#readIO",
        "fct-type": "method",
        "title": "readIO"
      },
      "index": {
        "description": "Used in TBox.read when retrying the transaction which happens when the TBox has been marked dirty Note Might be executed multiple times for the same TBox in single transaction See unsafeRetryWith",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "readIO",
        "normalized": "a b c-\u003eIO(Maybe c)",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:readSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#readSTM",
        "fct-type": "method",
        "title": "readSTM"
      },
      "index": {
        "description": "Used in TBox.read",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "readSTM",
        "normalized": "a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:setDirty",
      "description": {
        "fct-descr": "\u003cp\u003eChange the \"dirty\" status of the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e Bool -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#setDirty",
        "fct-type": "method",
        "title": "setDirty"
      },
      "index": {
        "description": "Change the dirty status of the TBox",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "setDirty",
        "normalized": "a b c-\u003eBool-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "Dirty",
        "signature": "t k a-\u003eBool-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the new content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes the new content",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "write",
        "normalized": "a b c-\u003ec-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003ea-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:writeIO",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e during the commit phase. \n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#writeIO",
        "fct-type": "method",
        "title": "writeIO"
      },
      "index": {
        "description": "Used in TBox.write during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "writeIO",
        "normalized": "a b c-\u003ec-\u003eIO()",
        "package": "tbox",
        "partial": "IO",
        "signature": "t k a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:writeSTM",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TBox",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#writeSTM",
        "fct-type": "method",
        "title": "writeSTM"
      },
      "index": {
        "description": "Used in TBox.write",
        "hierarchy": "Control Concurrent TBox",
        "module": "Control.Concurrent.TBox",
        "name": "writeSTM",
        "normalized": "a b c-\u003ec-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "STM",
        "signature": "t k a-\u003ea-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstantiates the STM skiplist implementation of\n Control.Concurrent.TBox.TSkipList with the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e backend.\n\u003c/p\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e t \u003c- newIO 0.5 5  :: IO (TSkipList Int String) \n atomically $ sequence_ [ insert i (show i) t | i \u003c- [1..10] ]\n\n putStr =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 7 9\n 1 3 7 9\n 1 2 3 4 5 6 7 8 9 10\n\n atomically $ delete  7 t\n putStr =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 9\n 1 3 9\n 1 2 3 4 5 6 8 9 10\n \n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"8\",Just \"9\",Just \"10\"]\n\n atomically $ update 8 \"X\" t\n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"X\",Just \"9\",Just \"10\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TFile-TSkipList.html",
        "fct-type": "module",
        "title": "TSkipList"
      },
      "index": {
        "description": "Instantiates the STM skiplist implementation of Control.Concurrent.TBox.TSkipList with the TFile backend This module should be imported qualified Example newIO IO TSkipList Int String atomically sequence insert show putStr atomically toString atomically delete putStr atomically toString atomically sequence lookup Just Just Nothing Just Just Just atomically update atomically sequence lookup Just Just Nothing Just Just Just",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tbox",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#t:TSkipList",
      "description": {
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-TFile-TSkipList.html#TSkipList",
        "fct-type": "type",
        "title": "TSkipList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tbox",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:chooseLevel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a randomly chosen level. Is used for inserting new elements.\n Note that this function uses \u003ccode\u003e\u003ca\u003eunsafeIOToAdvSTM\u003c/a\u003e\u003c/code\u003e to access the random\n number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "TSkipList t k a -\u003e AdvSTM Int",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#chooseLevel",
        "fct-type": "function",
        "title": "chooseLevel"
      },
      "index": {
        "description": "Returns randomly chosen level Is used for inserting new elements Note that this function uses unsafeIOToAdvSTM to access the random number generator",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "chooseLevel",
        "normalized": "TSkipList a b c-\u003eAdvSTM Int",
        "package": "tbox",
        "partial": "Level",
        "signature": "TSkipList t k a-\u003eAdvSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:delete",
      "description": {
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "delete",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that satisfy the predicate. O(n).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Returns all elements that satisfy the predicate",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "filter",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTSkipList c a b-\u003eAdvSTM(Map a b)",
        "package": "tbox",
        "partial": "",
        "signature": "(k-\u003ea-\u003eBool)-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that are greater than the key.\n TODO: currently in O(n), can be made more efficient (like \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#geq",
        "fct-type": "function",
        "title": "geq"
      },
      "index": {
        "description": "Returns all elements that are greater than the key TODO currently in can be made more efficient like leq",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "geq",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:insert",
      "description": {
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:leq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that are smaller than the key. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#leq",
        "fct-type": "function",
        "title": "leq"
      },
      "index": {
        "description": "Returns all elements that are smaller than the key",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "leq",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:lookup",
      "description": {
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "lookup",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:min",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the element with the least key, if it exists. \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "TSkipList t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "Returns the element with the least key if it exists",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "min",
        "normalized": "TSkipList a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "TSkipList t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:newEmptyIO",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a new (reconstructed!) \u003ccode\u003e\u003ca\u003eTSkipList\u003c/a\u003e\u003c/code\u003e. Automatically inserts all \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e entries found\n in \"basedir\u003ca\u003e/\u003c/a\u003e\". \n Note that the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003es are initially empty, i.e., the file content will only be\n read into memory on demand.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "Float -\u003e Int -\u003e IO (TSkipList k a)",
        "fct-source": "src/Control-Concurrent-TFile-TSkipList.html#newEmptyIO",
        "fct-type": "function",
        "title": "newEmptyIO"
      },
      "index": {
        "description": "Returns new reconstructed TSkipList Automatically inserts all TFile entries found in basedir Note that the TFile are initially empty i.e the file content will only be read into memory on demand",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "newEmptyIO",
        "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b)",
        "package": "tbox",
        "partial": "Empty IO",
        "signature": "Float-\u003eInt-\u003eIO(TSkipList k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a new (reconstructed!) \u003ccode\u003e\u003ca\u003eTSkipList\u003c/a\u003e\u003c/code\u003e. Automatically inserts all \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e entries found\n in \"basedir\u003ca\u003e/\u003c/a\u003e\". \n In contrast to \u003ccode\u003e\u003ca\u003enewEmptyIO\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003es initially contain the file content.\n Use this if you want to have all data in memory from the start.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "Float -\u003e Int -\u003e IO (TSkipList k a)",
        "fct-source": "src/Control-Concurrent-TFile-TSkipList.html#newIO",
        "fct-type": "function",
        "title": "newIO"
      },
      "index": {
        "description": "Returns new reconstructed TSkipList Automatically inserts all TFile entries found in basedir In contrast to newEmptyIO the TFile initially contain the file content Use this if you want to have all data in memory from the start",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "newIO",
        "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b)",
        "package": "tbox",
        "partial": "IO",
        "signature": "Float-\u003eInt-\u003eIO(TSkipList k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eDebug helper. Returns the skip list as a string.\n All elements smaller than the given key are written to the string.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e TSkipList t k a -\u003e AdvSTM String",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Debug helper Returns the skip list as string All elements smaller than the given key are written to the string",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "toString",
        "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM String",
        "package": "tbox",
        "partial": "String",
        "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates an element. Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the element is not in the\n list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile.TSkipList",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-TSkipList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Updates an element Throws AssertionFailed if the element is not in the list",
        "hierarchy": "Control Concurrent TFile TSkipList",
        "module": "Control.Concurrent.TFile.TSkipList",
        "name": "update",
        "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA transactional variable that writes its content to a file when updated.\n Due to the atomicity guarantees of the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad, an update to a\n \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e is only committed when the file operation succeeds.   \n\u003c/p\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-TFile.html",
        "fct-type": "module",
        "title": "TFile"
      },
      "index": {
        "description": "transactional variable that writes its content to file when updated Due to the atomicity guarantees of the AdvSTM monad an update to TFile is only committed when the file operation succeeds This module should be imported qualified",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "TFile",
        "normalized": "",
        "package": "tbox",
        "partial": "TFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#t:TFile",
      "description": {
        "fct-descr": "\u003cp\u003eA transactional variable that writes its content to a file on each update.\n The file is created in directory \"./_TFile/\".\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e hook of the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad guarantee that the updated memory content \n of the TFile is only visible to other threads \u003cem\u003eiff\u003c/em\u003e the file has been written \n successfully. \n\u003c/li\u003e\u003cli\u003e If the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e is \"dirty\", the content is (re)read from the file on the next\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-TFile.html#TFile",
        "fct-type": "data",
        "title": "TFile"
      },
      "index": {
        "description": "transactional variable that writes its content to file on each update The file is created in directory TFile The onCommit hook of the AdvSTM monad guarantee that the updated memory content of the TFile is only visible to other threads iff the file has been written successfully If the TFile is dirty the content is re read from the file on the next read",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "TFile",
        "normalized": "",
        "package": "tbox",
        "partial": "TFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:basedir",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently set to \"./_TFile\"\n TODO: provide interface for updating base directory within a transaction(?)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "FilePath",
        "fct-source": "src/Control-Concurrent-TFile.html#basedir",
        "fct-type": "function",
        "title": "basedir"
      },
      "index": {
        "description": "Currently set to TFile TODO provide interface for updating base directory within transaction",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "basedir",
        "normalized": "",
        "package": "tbox",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Deletes the content",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "clear",
        "normalized": "a b c-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM Bool",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True iff the TBox is empty",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "isEmpty",
        "normalized": "a b c-\u003eAdvSTM Bool",
        "package": "tbox",
        "partial": "Empty",
        "signature": "t k a-\u003eAdvSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Takes key and an initial value",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "new",
        "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
        "package": "tbox",
        "partial": "",
        "signature": "k-\u003ea-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e AdvSTM (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
        "fct-type": "function",
        "title": "newEmpty"
      },
      "index": {
        "description": "Takes key and returns an empty",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "newEmpty",
        "normalized": "a-\u003eAdvSTM(b a c)",
        "package": "tbox",
        "partial": "Empty",
        "signature": "k-\u003eAdvSTM(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmptyFromFileIO",
      "description": {
        "fct-descr": "\u003cp\u003eTries to construct a \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e from a given filepath. \n Note that the content of the file is read into memory only on demand, i.e.,\n when executing \u003ccode\u003eTBox.read\u003c/code\u003e.\n Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the filename could not be parsed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "FilePath -\u003e IO (TFile k a, k)",
        "fct-source": "src/Control-Concurrent-TFile.html#newEmptyFromFileIO",
        "fct-type": "function",
        "title": "newEmptyFromFileIO"
      },
      "index": {
        "description": "Tries to construct TFile from given filepath Note that the content of the file is read into memory only on demand i.e when executing TBox.read Throws AssertionFailed if the filename could not be parsed",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "newEmptyFromFileIO",
        "normalized": "FilePath-\u003eIO(TFile a b,a)",
        "package": "tbox",
        "partial": "Empty From File IO",
        "signature": "FilePath-\u003eIO(TFile k a,k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmptyIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
        "fct-type": "function",
        "title": "newEmptyIO"
      },
      "index": {
        "description": "Takes key and returns an empty Has default implementation",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "newEmptyIO",
        "normalized": "a-\u003eIO(b a c)",
        "package": "tbox",
        "partial": "Empty IO",
        "signature": "k-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newFromFileIO",
      "description": {
        "fct-descr": "\u003cp\u003eTries to construct a \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e from a given filepath. \n Reads the content of the file into memory.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "FilePath -\u003e IO (TFile k a, k)",
        "fct-source": "src/Control-Concurrent-TFile.html#newFromFileIO",
        "fct-type": "function",
        "title": "newFromFileIO"
      },
      "index": {
        "description": "Tries to construct TFile from given filepath Reads the content of the file into memory",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "newFromFileIO",
        "normalized": "FilePath-\u003eIO(TFile a b,a)",
        "package": "tbox",
        "partial": "From File IO",
        "signature": "FilePath-\u003eIO(TFile k a,k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "k -\u003e a -\u003e IO (t k a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
        "fct-type": "function",
        "title": "newIO"
      },
      "index": {
        "description": "Takes key and an initial value Has default implementation",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "newIO",
        "normalized": "a-\u003eb-\u003eIO(c a b)",
        "package": "tbox",
        "partial": "IO",
        "signature": "k-\u003ea-\u003eIO(t k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eIf the TBox is dirty, this retries the transaction and\n rereads the content using \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e in a separate thread.\n Otherwise it simply returns the result of \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Depending on the instance implementation, careless \n use of \u003ccode\u003e\u003ca\u003esetDirty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in the same transaction might lead\n to nonterminating retry loops.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e AdvSTM (Maybe a)",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "If the TBox is dirty this retries the transaction and rereads the content using readIO in separate thread Otherwise it simply returns the result of readSTM Note Depending on the instance implementation careless use of setDirty and read in the same transaction might lead to nonterminating retry loops",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "read",
        "normalized": "a b c-\u003eAdvSTM(Maybe c)",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003eAdvSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the new content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.TFile",
        "fct-package": "tbox",
        "fct-signature": "t k a -\u003e a -\u003e AdvSTM ()",
        "fct-source": "src/Control-Concurrent-TBox-Internal-Operations.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes the new content",
        "hierarchy": "Control Concurrent TFile",
        "module": "Control.Concurrent.TFile",
        "name": "write",
        "normalized": "a b c-\u003ec-\u003eAdvSTM()",
        "package": "tbox",
        "partial": "",
        "signature": "t k a-\u003ea-\u003eAdvSTM()"
      }
    }
  }
]