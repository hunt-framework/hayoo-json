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
        "word": "tbox"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "Class",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The type class TBox",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "Class",
          "package": "tbox",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is a (Adv)STM variable that might contain a value of \n some type \u003ccode\u003ea\u003c/code\u003e. In contrast to a plain 'TVar (Maybe a)', a \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has IO hooks that are executed transparently on writes and reads,\n which makes it particularly suitable for implementing a persistent and thread-safe storage.\n The type variable \u003ccode\u003ek\u003c/code\u003e can be used to provide additional storage information, e.g.,\n a filepath. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e Note that the read/write functions of this type class, i.e.,\n \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSTM\u003c/a\u003e\u003c/code\u003e should \n \u003cem\u003eonly\u003c/em\u003e be used to derive new \n instances and do not serve to modify the state of a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n The interface defined in module \u003ccode\u003eTBox.Operations\u003c/code\u003e provides \n operations on \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es that guarantee consistency.\n\u003c/p\u003e\u003cp\u003eSee the module \u003ccode\u003eControl.Concurrent.TFile\u003c/code\u003e for a sample instance.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "TBox",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#TBox",
          "type": "class"
        },
        "index": {
          "description": "An instance of TBox is Adv STM variable that might contain value of some type In contrast to plain TVar Maybe TBox has IO hooks that are executed transparently on writes and reads which makes it particularly suitable for implementing persistent and thread-safe storage The type variable can be used to provide additional storage information e.g filepath Important Note that the read write functions of this type class i.e readIO readSTM writeIO writeSTM clearIO clearSTM should only be used to derive new instances and do not serve to modify the state of TBox The interface defined in module TBox.Operations provides operations on TBox that guarantee consistency See the module Control.Concurrent.TFile for sample instance",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "TBox",
          "package": "tbox",
          "partial": "TBox",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#t:TBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e during the commit phase.\n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "clearIO",
          "package": "tbox",
          "signature": "t k a -\u003e IO ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#clearIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.clear during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "clearIO",
          "normalized": "a b c-\u003eIO()",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:clearIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "clearSTM",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#clearSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.clear",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "clearSTM",
          "normalized": "a b c-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:clearSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisDirty\u003c/a\u003e\u003c/code\u003e yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e hook will be \n run on the next read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "isDirty",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM Bool",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#isDirty",
          "type": "method"
        },
        "index": {
          "description": "If isDirty yields True the readIO hook will be run on the next read",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "isDirty",
          "normalized": "a b c-\u003eAdvSTM Bool",
          "package": "tbox",
          "partial": "Dirty",
          "signature": "t k a-\u003eAdvSTM Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:isDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "new",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
          "type": "method"
        },
        "index": {
          "description": "Takes key and an initial value",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "new",
          "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
          "package": "tbox",
          "signature": "k-\u003ea-\u003eAdvSTM(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newEmpty",
          "package": "tbox",
          "signature": "k -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
          "type": "method"
        },
        "index": {
          "description": "Takes key and returns an empty",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newEmpty",
          "normalized": "a-\u003eAdvSTM(b a c)",
          "package": "tbox",
          "partial": "Empty",
          "signature": "k-\u003eAdvSTM(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newEmptyIO",
          "package": "tbox",
          "signature": "k -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
          "type": "method"
        },
        "index": {
          "description": "Takes key and returns an empty Has default implementation",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newEmptyIO",
          "normalized": "a-\u003eIO(b a c)",
          "package": "tbox",
          "partial": "Empty IO",
          "signature": "k-\u003eIO(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newEmptyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newIO",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
          "type": "method"
        },
        "index": {
          "description": "Takes key and an initial value Has default implementation",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "newIO",
          "normalized": "a-\u003eb-\u003eIO(c a b)",
          "package": "tbox",
          "partial": "IO",
          "signature": "k-\u003ea-\u003eIO(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:newIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e when retrying the transaction, which happens when the \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has been marked \"dirty\".\n Note: Might be executed multiple times for the\n same \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e in a single transaction. See \u003ccode\u003e\u003ca\u003eunsafeRetryWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "readIO",
          "package": "tbox",
          "signature": "t k a -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#readIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.read when retrying the transaction which happens when the TBox has been marked dirty Note Might be executed multiple times for the same TBox in single transaction See unsafeRetryWith",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "readIO",
          "normalized": "a b c-\u003eIO(Maybe c)",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "readSTM",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#readSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.read",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "readSTM",
          "normalized": "a b c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003eAdvSTM(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:readSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the \"dirty\" status of the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "setDirty",
          "package": "tbox",
          "signature": "t k a -\u003e Bool -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#setDirty",
          "type": "method"
        },
        "index": {
          "description": "Change the dirty status of the TBox",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "setDirty",
          "normalized": "a b c-\u003eBool-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "Dirty",
          "signature": "t k a-\u003eBool-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:setDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e during the commit phase. \n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "writeIO",
          "package": "tbox",
          "signature": "t k a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#writeIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.write during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "writeIO",
          "normalized": "a b c-\u003ec-\u003eIO()",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:writeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "writeSTM",
          "package": "tbox",
          "signature": "t k a -\u003e a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#writeSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.write",
          "hierarchy": "Control Concurrent TBox Internal Class",
          "module": "Control.Concurrent.TBox.Internal.Class",
          "name": "writeSTM",
          "normalized": "a b c-\u003ec-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003ea-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Class.html#v:writeSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on instances of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "Operations",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on instances of TBox",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "Operations",
          "package": "tbox",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the content.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.Internal.Operations\",\"Control.Concurrent.TBox\",\"Control.Concurrent.TFile\"]",
          "name": "clear",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html#clear",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:clear\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clear\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:clear\"]"
        },
        "index": {
          "description": "Deletes the content",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "clear",
          "normalized": "a b c-\u003eAdvSTM()",
          "package": "tbox",
          "signature": "t k a-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.Internal.Operations\",\"Control.Concurrent.TBox\",\"Control.Concurrent.TFile\"]",
          "name": "isEmpty",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM Bool",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmpty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmpty\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isEmpty\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:isEmpty\"]"
        },
        "index": {
          "description": "Returns True iff the TBox is empty",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "isEmpty",
          "normalized": "a b c-\u003eAdvSTM Bool",
          "package": "tbox",
          "partial": "Empty",
          "signature": "t k a-\u003eAdvSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty and not dirty.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.Internal.Operations\",\"Control.Concurrent.TBox\"]",
          "name": "isEmptyNotDirty",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM Bool",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html#isEmptyNotDirty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmptyNotDirty\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isEmptyNotDirty\"]"
        },
        "index": {
          "description": "Returns True iff the TBox is empty and not dirty",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "isEmptyNotDirty",
          "normalized": "a b c-\u003eAdvSTM Bool",
          "package": "tbox",
          "partial": "Empty Not Dirty",
          "signature": "t k a-\u003eAdvSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:isEmptyNotDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the TBox is dirty, this retries the transaction and\n rereads the content using \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e in a separate thread.\n Otherwise it simply returns the result of \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Depending on the instance implementation, careless \n use of \u003ccode\u003e\u003ca\u003esetDirty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in the same transaction might lead\n to nonterminating retry loops.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.Internal.Operations\",\"Control.Concurrent.TBox\",\"Control.Concurrent.TFile\"]",
          "name": "read",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html#read",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:read\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:read\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:read\"]"
        },
        "index": {
          "description": "If the TBox is dirty this retries the transaction and rereads the content using readIO in separate thread Otherwise it simply returns the result of readSTM Note Depending on the instance implementation careless use of setDirty and read in the same transaction might lead to nonterminating retry loops",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "read",
          "normalized": "a b c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "signature": "t k a-\u003eAdvSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the new content.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.Internal.Operations\",\"Control.Concurrent.TBox\",\"Control.Concurrent.TFile\"]",
          "name": "write",
          "package": "tbox",
          "signature": "t k a -\u003e a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Operations.html#write",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:write\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:write\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:write\"]"
        },
        "index": {
          "description": "Writes the new content",
          "hierarchy": "Control Concurrent TBox Internal Operations",
          "module": "Control.Concurrent.TBox.Internal.Operations",
          "name": "write",
          "normalized": "a b c-\u003ec-\u003eAdvSTM()",
          "package": "tbox",
          "signature": "t k a-\u003ea-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-Internal-Operations.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an implementation of a skip list in the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad.\n A skip list is a probabilistic data structure with map-like operations.\n In contrast to a balanced tree, a skip list does not need any rebalancing,\n which makes it suitable for concurrent programming.\n See: \u003cem\u003eWilliam Pugh. Skip Lists: A Probabilistic Alternative to Balanced Trees.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe elements of the skip list are stored in a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n When an element of the skip list is modified, the operation is relegated\n to the corresponding \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor a concrete instance see module \u003ccode\u003eControl.Concurrent.TFile.TSkipList\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-TSkipList.html",
          "type": "module"
        },
        "index": {
          "description": "Provides an implementation of skip list in the AdvSTM monad skip list is probabilistic data structure with map-like operations In contrast to balanced tree skip list does not need any rebalancing which makes it suitable for concurrent programming See William Pugh Skip Lists Probabilistic Alternative to Balanced Trees The elements of the skip list are stored in TBox When an element of the skip list is modified the operation is relegated to the corresponding TBox For concrete instance see module Control.Concurrent.TFile.TSkipList",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "partial": "TSkip List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#TSkipList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "partial": "TSkip List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#t:TSkipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a randomly chosen level. Is used for inserting new elements.\n Note that this function uses \u003ccode\u003e\u003ca\u003eunsafeIOToAdvSTM\u003c/a\u003e\u003c/code\u003e to access the random\n number generator.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "chooseLevel",
          "package": "tbox",
          "signature": "TSkipList t k a -\u003e AdvSTM Int",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#chooseLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:chooseLevel\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:chooseLevel\"]"
        },
        "index": {
          "description": "Returns randomly chosen level Is used for inserting new elements Note that this function uses unsafeIOToAdvSTM to access the random number generator",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "chooseLevel",
          "normalized": "TSkipList a b c-\u003eAdvSTM Int",
          "package": "tbox",
          "partial": "Level",
          "signature": "TSkipList t k a-\u003eAdvSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:chooseLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "contentTBox",
          "package": "tbox",
          "signature": "Node t k a -\u003e t k a",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#contentTBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "contentTBox",
          "normalized": "Node a b c-\u003ea b c",
          "package": "tbox",
          "partial": "TBox",
          "signature": "Node t k a-\u003et k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:contentTBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "delete",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:delete\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:delete\"]"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "delete",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM()",
          "package": "tbox",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements that satisfy the predicate. O(n).\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "filter",
          "package": "tbox",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:filter\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:filter\"]"
        },
        "index": {
          "description": "Returns all elements that satisfy the predicate",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "filter",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eTSkipList c a b-\u003eAdvSTM(Map a b)",
          "package": "tbox",
          "signature": "(k-\u003ea-\u003eBool)-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements that are greater than the key.\n TODO: currently in O(n), can be made more efficient (like \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "geq",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#geq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:geq\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:geq\"]"
        },
        "index": {
          "description": "Returns all elements that are greater than the key TODO currently in can be made more efficient like leq",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "geq",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
          "package": "tbox",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "insert",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:insert\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:insert\"]"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
          "package": "tbox",
          "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "insertNode",
          "package": "tbox",
          "signature": "k -\u003e Node t k a -\u003e TSkipList t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#insertNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "insertNode",
          "normalized": "a-\u003eNode b a c-\u003eTSkipList b a c-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "Node",
          "signature": "k-\u003eNode t k a-\u003eTSkipList t k a-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:insertNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "key",
          "package": "tbox",
          "signature": "Node t k a -\u003e k",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "key",
          "normalized": "Node a b c-\u003eb",
          "package": "tbox",
          "signature": "Node t k a-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements that are smaller than the key. \n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "leq",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Map k a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#leq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:leq\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:leq\"]"
        },
        "index": {
          "description": "Returns all elements that are smaller than the key",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "leq",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Map a c)",
          "package": "tbox",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:leq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "lookup",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:lookup\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:lookup\"]"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "lookup",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "lookupNode",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM (Maybe (Node t k a))",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#lookupNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "lookupNode",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM(Maybe(Node b a c))",
          "package": "tbox",
          "partial": "Node",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM(Maybe(Node t k a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:lookupNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the element with the least key, if it exists. \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "min",
          "package": "tbox",
          "signature": "TSkipList t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#min",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:min\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:min\"]"
        },
        "index": {
          "description": "Returns the element with the least key if it exists",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "min",
          "normalized": "TSkipList a b c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "signature": "TSkipList t k a-\u003eAdvSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty skiplist.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "newIO",
          "package": "tbox",
          "signature": "Float-\u003e Int-\u003e IO (TSkipList t k a)",
          "type": "function"
        },
        "index": {
          "description": "An empty skiplist",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "newIO",
          "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b c)",
          "package": "tbox",
          "partial": "IO",
          "signature": "Float-\u003eInt-\u003eIO(TSkipList t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:newIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "newNode",
          "package": "tbox",
          "signature": "k -\u003e t k a -\u003e Int -\u003e AdvSTM (Node t k a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#newNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "newNode",
          "normalized": "a-\u003eb a c-\u003eInt-\u003eAdvSTM(Node b a c)",
          "package": "tbox",
          "partial": "Node",
          "signature": "k-\u003et k a-\u003eInt-\u003eAdvSTM(Node t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:newNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e of the node. If the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is empty, the node\n is removed from the skip list.\n This is necessary when \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es are shared between different data\n structures.  \n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "readAndValidate",
          "package": "tbox",
          "signature": "TSkipList t k a -\u003e Node t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#readAndValidate",
          "type": "function"
        },
        "index": {
          "description": "Reads the TBox of the node If the TBox is empty the node is removed from the skip list This is necessary when TBox are shared between different data structures",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "readAndValidate",
          "normalized": "TSkipList a b c-\u003eNode a b c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "partial": "And Validate",
          "signature": "TSkipList t k a-\u003eNode t k a-\u003eAdvSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:readAndValidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug helper. Returns the skip list as a string.\n All elements smaller than the given key are written to the string.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "toString",
          "package": "tbox",
          "signature": "k -\u003e TSkipList t k a -\u003e AdvSTM String",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#toString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:toString\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:toString\"]"
        },
        "index": {
          "description": "Debug helper Returns the skip list as string All elements smaller than the given key are written to the string",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "toString",
          "normalized": "a-\u003eTSkipList b a c-\u003eAdvSTM String",
          "package": "tbox",
          "partial": "String",
          "signature": "k-\u003eTSkipList t k a-\u003eAdvSTM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates an element. Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the element is not in the\n list.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.TBox.TSkipList\",\"Control.Concurrent.TFile.TSkipList\"]",
          "name": "update",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e TSkipList t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-TSkipList.html#update",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:update\",\"http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:update\"]"
        },
        "index": {
          "description": "Updates an element Throws AssertionFailed if the element is not in the list",
          "hierarchy": "Control Concurrent TBox TSkipList",
          "module": "Control.Concurrent.TBox.TSkipList",
          "name": "update",
          "normalized": "a-\u003eb-\u003eTSkipList c a b-\u003eAdvSTM()",
          "package": "tbox",
          "signature": "k-\u003ea-\u003eTSkipList t k a-\u003eAdvSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox-TSkipList.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract interface for transactional variables with IO hooks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "TBox",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox.html",
          "type": "module"
        },
        "index": {
          "description": "An abstract interface for transactional variables with IO hooks",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "TBox",
          "package": "tbox",
          "partial": "TBox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e is a (Adv)STM variable that might contain a value of \n some type \u003ccode\u003ea\u003c/code\u003e. In contrast to a plain 'TVar (Maybe a)', a \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has IO hooks that are executed transparently on writes and reads,\n which makes it particularly suitable for implementing a persistent and thread-safe storage.\n The type variable \u003ccode\u003ek\u003c/code\u003e can be used to provide additional storage information, e.g.,\n a filepath. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e Note that the read/write functions of this type class, i.e.,\n \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclearSTM\u003c/a\u003e\u003c/code\u003e should \n \u003cem\u003eonly\u003c/em\u003e be used to derive new \n instances and do not serve to modify the state of a \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n The interface defined in module \u003ccode\u003eTBox.Operations\u003c/code\u003e provides \n operations on \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003es that guarantee consistency.\n\u003c/p\u003e\u003cp\u003eSee the module \u003ccode\u003eControl.Concurrent.TFile\u003c/code\u003e for a sample instance.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "TBox",
          "package": "tbox",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#TBox",
          "type": "class"
        },
        "index": {
          "description": "An instance of TBox is Adv STM variable that might contain value of some type In contrast to plain TVar Maybe TBox has IO hooks that are executed transparently on writes and reads which makes it particularly suitable for implementing persistent and thread-safe storage The type variable can be used to provide additional storage information e.g filepath Important Note that the read write functions of this type class i.e readIO readSTM writeIO writeSTM clearIO clearSTM should only be used to derive new instances and do not serve to modify the state of TBox The interface defined in module TBox.Operations provides operations on TBox that guarantee consistency See the module Control.Concurrent.TFile for sample instance",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "TBox",
          "package": "tbox",
          "partial": "TBox",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#t:TBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e during the commit phase.\n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "clearIO",
          "package": "tbox",
          "signature": "t k a -\u003e IO ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#clearIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.clear during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "clearIO",
          "normalized": "a b c-\u003eIO()",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clearIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.clear\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "clearSTM",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#clearSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.clear",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "clearSTM",
          "normalized": "a b c-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:clearSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisDirty\u003c/a\u003e\u003c/code\u003e yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e hook will be \n run on the next read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "isDirty",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM Bool",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#isDirty",
          "type": "method"
        },
        "index": {
          "description": "If isDirty yields True the readIO hook will be run on the next read",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "isDirty",
          "normalized": "a b c-\u003eAdvSTM Bool",
          "package": "tbox",
          "partial": "Dirty",
          "signature": "t k a-\u003eAdvSTM Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:isDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "new",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
          "type": "method"
        },
        "index": {
          "description": "Takes key and an initial value",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "new",
          "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
          "package": "tbox",
          "signature": "k-\u003ea-\u003eAdvSTM(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "newEmpty",
          "package": "tbox",
          "signature": "k -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
          "type": "method"
        },
        "index": {
          "description": "Takes key and returns an empty",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "newEmpty",
          "normalized": "a-\u003eAdvSTM(b a c)",
          "package": "tbox",
          "partial": "Empty",
          "signature": "k-\u003eAdvSTM(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "newEmptyIO",
          "package": "tbox",
          "signature": "k -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
          "type": "method"
        },
        "index": {
          "description": "Takes key and returns an empty Has default implementation",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "newEmptyIO",
          "normalized": "a-\u003eIO(b a c)",
          "package": "tbox",
          "partial": "Empty IO",
          "signature": "k-\u003eIO(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newEmptyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "newIO",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
          "type": "method"
        },
        "index": {
          "description": "Takes key and an initial value Has default implementation",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "newIO",
          "normalized": "a-\u003eb-\u003eIO(c a b)",
          "package": "tbox",
          "partial": "IO",
          "signature": "k-\u003ea-\u003eIO(t k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:newIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e when retrying the transaction, which happens when the \n \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e has been marked \"dirty\".\n Note: Might be executed multiple times for the\n same \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e in a single transaction. See \u003ccode\u003e\u003ca\u003eunsafeRetryWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "readIO",
          "package": "tbox",
          "signature": "t k a -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#readIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.read when retrying the transaction which happens when the TBox has been marked dirty Note Might be executed multiple times for the same TBox in single transaction See unsafeRetryWith",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "readIO",
          "normalized": "a b c-\u003eIO(Maybe c)",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.read\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "readSTM",
          "package": "tbox",
          "signature": "t k a -\u003e AdvSTM (Maybe a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#readSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.read",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "readSTM",
          "normalized": "a b c-\u003eAdvSTM(Maybe c)",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003eAdvSTM(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:readSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the \"dirty\" status of the \u003ccode\u003e\u003ca\u003eTBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "setDirty",
          "package": "tbox",
          "signature": "t k a -\u003e Bool -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#setDirty",
          "type": "method"
        },
        "index": {
          "description": "Change the dirty status of the TBox",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "setDirty",
          "normalized": "a b c-\u003eBool-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "Dirty",
          "signature": "t k a-\u003eBool-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:setDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e during the commit phase. \n Is guaranteed to be executed exactly once \u003cem\u003eiff\u003c/em\u003e the transaction commits.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "writeIO",
          "package": "tbox",
          "signature": "t k a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#writeIO",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.write during the commit phase Is guaranteed to be executed exactly once iff the transaction commits",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "writeIO",
          "normalized": "a b c-\u003ec-\u003eIO()",
          "package": "tbox",
          "partial": "IO",
          "signature": "t k a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:writeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003eTBox.write\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TBox",
          "name": "writeSTM",
          "package": "tbox",
          "signature": "t k a -\u003e a -\u003e AdvSTM ()",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#writeSTM",
          "type": "method"
        },
        "index": {
          "description": "Used in TBox.write",
          "hierarchy": "Control Concurrent TBox",
          "module": "Control.Concurrent.TBox",
          "name": "writeSTM",
          "normalized": "a b c-\u003ec-\u003eAdvSTM()",
          "package": "tbox",
          "partial": "STM",
          "signature": "t k a-\u003ea-\u003eAdvSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TBox.html#v:writeSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstantiates the STM skiplist implementation of\n Control.Concurrent.TBox.TSkipList with the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e backend.\n\u003c/p\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e t \u003c- newIO 0.5 5  :: IO (TSkipList Int String) \n atomically $ sequence_ [ insert i (show i) t | i \u003c- [1..10] ]\n\n putStr =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 7 9\n 1 3 7 9\n 1 2 3 4 5 6 7 8 9 10\n\n atomically $ delete  7 t\n putStr =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 9\n 1 3 9\n 1 2 3 4 5 6 8 9 10\n \n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"8\",Just \"9\",Just \"10\"]\n\n atomically $ update 8 \"X\" t\n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"X\",Just \"9\",Just \"10\"]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "source": "src/Control-Concurrent-TFile-TSkipList.html",
          "type": "module"
        },
        "index": {
          "description": "Instantiates the STM skiplist implementation of Control.Concurrent.TBox.TSkipList with the TFile backend This module should be imported qualified Example newIO IO TSkipList Int String atomically sequence insert show putStr atomically toString atomically delete putStr atomically toString atomically sequence lookup Just Just Nothing Just Just Just atomically update atomically sequence lookup Just Just Nothing Just Just Just",
          "hierarchy": "Control Concurrent TFile TSkipList",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "partial": "TSkip List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "source": "src/Control-Concurrent-TFile-TSkipList.html#TSkipList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent TFile TSkipList",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "TSkipList",
          "package": "tbox",
          "partial": "TSkip List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#t:TSkipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new (reconstructed!) \u003ccode\u003e\u003ca\u003eTSkipList\u003c/a\u003e\u003c/code\u003e. Automatically inserts all \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e entries found\n in \"basedir\u003ca\u003e/\u003c/a\u003e\". \n Note that the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003es are initially empty, i.e., the file content will only be\n read into memory on demand.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "newEmptyIO",
          "package": "tbox",
          "signature": "Float -\u003e Int -\u003e IO (TSkipList k a)",
          "source": "src/Control-Concurrent-TFile-TSkipList.html#newEmptyIO",
          "type": "function"
        },
        "index": {
          "description": "Returns new reconstructed TSkipList Automatically inserts all TFile entries found in basedir Note that the TFile are initially empty i.e the file content will only be read into memory on demand",
          "hierarchy": "Control Concurrent TFile TSkipList",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "newEmptyIO",
          "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b)",
          "package": "tbox",
          "partial": "Empty IO",
          "signature": "Float-\u003eInt-\u003eIO(TSkipList k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:newEmptyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new (reconstructed!) \u003ccode\u003e\u003ca\u003eTSkipList\u003c/a\u003e\u003c/code\u003e. Automatically inserts all \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e entries found\n in \"basedir\u003ca\u003e/\u003c/a\u003e\". \n In contrast to \u003ccode\u003e\u003ca\u003enewEmptyIO\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003es initially contain the file content.\n Use this if you want to have all data in memory from the start.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "newIO",
          "package": "tbox",
          "signature": "Float -\u003e Int -\u003e IO (TSkipList k a)",
          "source": "src/Control-Concurrent-TFile-TSkipList.html#newIO",
          "type": "function"
        },
        "index": {
          "description": "Returns new reconstructed TSkipList Automatically inserts all TFile entries found in basedir In contrast to newEmptyIO the TFile initially contain the file content Use this if you want to have all data in memory from the start",
          "hierarchy": "Control Concurrent TFile TSkipList",
          "module": "Control.Concurrent.TFile.TSkipList",
          "name": "newIO",
          "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b)",
          "package": "tbox",
          "partial": "IO",
          "signature": "Float-\u003eInt-\u003eIO(TSkipList k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile-TSkipList.html#v:newIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA transactional variable that writes its content to a file when updated.\n Due to the atomicity guarantees of the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad, an update to a\n \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e is only committed when the file operation succeeds.   \n\u003c/p\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "TFile",
          "package": "tbox",
          "source": "src/Control-Concurrent-TFile.html",
          "type": "module"
        },
        "index": {
          "description": "transactional variable that writes its content to file when updated Due to the atomicity guarantees of the AdvSTM monad an update to TFile is only committed when the file operation succeeds This module should be imported qualified",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "TFile",
          "package": "tbox",
          "partial": "TFile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transactional variable that writes its content to a file on each update.\n The file is created in directory \"./_TFile/\".\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eonCommit\u003c/a\u003e\u003c/code\u003e hook of the \u003ccode\u003e\u003ca\u003eAdvSTM\u003c/a\u003e\u003c/code\u003e monad guarantee that the updated memory content \n of the TFile is only visible to other threads \u003cem\u003eiff\u003c/em\u003e the file has been written \n successfully. \n\u003c/li\u003e\u003cli\u003e If the \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e is \"dirty\", the content is (re)read from the file on the next\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "TFile",
          "package": "tbox",
          "source": "src/Control-Concurrent-TFile.html#TFile",
          "type": "data"
        },
        "index": {
          "description": "transactional variable that writes its content to file on each update The file is created in directory TFile The onCommit hook of the AdvSTM monad guarantee that the updated memory content of the TFile is only visible to other threads iff the file has been written successfully If the TFile is dirty the content is re read from the file on the next read",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "TFile",
          "package": "tbox",
          "partial": "TFile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#t:TFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently set to \"./_TFile\"\n TODO: provide interface for updating base directory within a transaction(?)\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "basedir",
          "package": "tbox",
          "signature": "FilePath",
          "source": "src/Control-Concurrent-TFile.html#basedir",
          "type": "function"
        },
        "index": {
          "description": "Currently set to TFile TODO provide interface for updating base directory within transaction",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "basedir",
          "package": "tbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:basedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "new",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#new",
          "type": "function"
        },
        "index": {
          "description": "Takes key and an initial value",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "new",
          "normalized": "a-\u003eb-\u003eAdvSTM(c a b)",
          "package": "tbox",
          "signature": "k-\u003ea-\u003eAdvSTM(t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "newEmpty",
          "package": "tbox",
          "signature": "k -\u003e AdvSTM (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmpty",
          "type": "function"
        },
        "index": {
          "description": "Takes key and returns an empty",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "newEmpty",
          "normalized": "a-\u003eAdvSTM(b a c)",
          "package": "tbox",
          "partial": "Empty",
          "signature": "k-\u003eAdvSTM(t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to construct a \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e from a given filepath. \n Note that the content of the file is read into memory only on demand, i.e.,\n when executing \u003ccode\u003eTBox.read\u003c/code\u003e.\n Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the filename could not be parsed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "newEmptyFromFileIO",
          "package": "tbox",
          "signature": "FilePath -\u003e IO (TFile k a, k)",
          "source": "src/Control-Concurrent-TFile.html#newEmptyFromFileIO",
          "type": "function"
        },
        "index": {
          "description": "Tries to construct TFile from given filepath Note that the content of the file is read into memory only on demand i.e when executing TBox.read Throws AssertionFailed if the filename could not be parsed",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "newEmptyFromFileIO",
          "normalized": "FilePath-\u003eIO(TFile a b,a)",
          "package": "tbox",
          "partial": "Empty From File IO",
          "signature": "FilePath-\u003eIO(TFile k a,k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmptyFromFileIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and returns an empty \u003ccode\u003et\u003c/code\u003e. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "newEmptyIO",
          "package": "tbox",
          "signature": "k -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newEmptyIO",
          "type": "function"
        },
        "index": {
          "description": "Takes key and returns an empty Has default implementation",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "newEmptyIO",
          "normalized": "a-\u003eIO(b a c)",
          "package": "tbox",
          "partial": "Empty IO",
          "signature": "k-\u003eIO(t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newEmptyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to construct a \u003ccode\u003e\u003ca\u003eTFile\u003c/a\u003e\u003c/code\u003e from a given filepath. \n Reads the content of the file into memory.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "newFromFileIO",
          "package": "tbox",
          "signature": "FilePath -\u003e IO (TFile k a, k)",
          "source": "src/Control-Concurrent-TFile.html#newFromFileIO",
          "type": "function"
        },
        "index": {
          "description": "Tries to construct TFile from given filepath Reads the content of the file into memory",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "newFromFileIO",
          "normalized": "FilePath-\u003eIO(TFile a b,a)",
          "package": "tbox",
          "partial": "From File IO",
          "signature": "FilePath-\u003eIO(TFile k a,k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newFromFileIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a key and an initial value. Has a default implementation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.TFile",
          "name": "newIO",
          "package": "tbox",
          "signature": "k -\u003e a -\u003e IO (t k a)",
          "source": "src/Control-Concurrent-TBox-Internal-Class.html#newIO",
          "type": "function"
        },
        "index": {
          "description": "Takes key and an initial value Has default implementation",
          "hierarchy": "Control Concurrent TFile",
          "module": "Control.Concurrent.TFile",
          "name": "newIO",
          "normalized": "a-\u003eb-\u003eIO(c a b)",
          "package": "tbox",
          "partial": "IO",
          "signature": "k-\u003ea-\u003eIO(t k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tbox/docs/Control-Concurrent-TFile.html#v:newIO"
      }
    }
  ]
]