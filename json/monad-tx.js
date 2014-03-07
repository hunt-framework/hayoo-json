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
        "word": "monad-tx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA transactional state monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Tx",
          "name": "Tx",
          "package": "monad-tx",
          "source": "src/Control-Monad-Tx.html",
          "type": "module"
        },
        "index": {
          "description": "transactional state monad",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Tx",
          "package": "monad-tx",
          "partial": "Tx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction handle.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "Tx",
          "package": "monad-tx",
          "source": "src/Control-Monad-Tx.html#Tx",
          "type": "data"
        },
        "index": {
          "description": "transaction handle",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Tx",
          "package": "monad-tx",
          "partial": "Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#t:Tx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transaction monad. A State monad, with transactional state.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "TxM",
          "package": "monad-tx",
          "source": "src/Control-Monad-Tx.html#TxM",
          "type": "data"
        },
        "index": {
          "description": "The transaction monad State monad with transactional state",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "TxM",
          "package": "monad-tx",
          "partial": "Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#t:TxM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction Status.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "TxStat",
          "package": "monad-tx",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "data"
        },
        "index": {
          "description": "Transaction Status",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "TxStat",
          "package": "monad-tx",
          "partial": "Tx Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#t:TxStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverted  state, returned an error.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "Abort",
          "package": "monad-tx",
          "signature": "Abort (Maybe e)",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "function"
        },
        "index": {
          "description": "Reverted state returned an error",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Abort",
          "package": "monad-tx",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "Begin",
          "package": "monad-tx",
          "signature": "Begin",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Begin",
          "package": "monad-tx",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommitted state, returned a result.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "Commit",
          "package": "monad-tx",
          "signature": "Commit a",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "function"
        },
        "index": {
          "description": "Committed state returned result",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Commit",
          "package": "monad-tx",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommitted state, returned an error.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "Dirty",
          "package": "monad-tx",
          "signature": "Dirty (Maybe e)",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "function"
        },
        "index": {
          "description": "Committed state returned an error",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Dirty",
          "package": "monad-tx",
          "partial": "Dirty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:Dirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverted  state, returned a result.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "Rollback",
          "package": "monad-tx",
          "signature": "Rollback a",
          "source": "src/Control-Monad-Tx.html#TxStat",
          "type": "function"
        },
        "index": {
          "description": "Reverted state returned result",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "Rollback",
          "package": "monad-tx",
          "partial": "Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:Rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRevert state, return an error.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "abort",
          "package": "monad-tx",
          "signature": "Tx o s e a -\u003e Maybe e -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#abort",
          "type": "function"
        },
        "index": {
          "description": "Revert state return an error",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "abort",
          "normalized": "Tx a b c d-\u003eMaybe c-\u003eTxM a b()",
          "package": "monad-tx",
          "signature": "Tx o s e a-\u003eMaybe e-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin a transaction. \u003ccode\u003ebegin\u003c/code\u003e takes a function\n  which represents this transaction.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "begin",
          "package": "monad-tx",
          "signature": "(Tx o s e a -\u003e TxM o s ()) -\u003e TxM o s (TxStat e a)",
          "source": "src/Control-Monad-Tx.html#begin",
          "type": "function"
        },
        "index": {
          "description": "Begin transaction begin takes function which represents this transaction",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "begin",
          "normalized": "(Tx a b c d-\u003eTxM a b())-\u003eTxM a b(TxStat c d)",
          "package": "monad-tx",
          "signature": "(Tx o s e a-\u003eTxM o s())-\u003eTxM o s(TxStat e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit state, return a result.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "commit",
          "package": "monad-tx",
          "signature": "Tx o s e a -\u003e a -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#commit",
          "type": "function"
        },
        "index": {
          "description": "Commit state return result",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "commit",
          "normalized": "Tx a b c d-\u003ed-\u003eTxM a b()",
          "package": "monad-tx",
          "signature": "Tx o s e a-\u003ea-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit state, return an error.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "dirty",
          "package": "monad-tx",
          "signature": "Tx o s e a -\u003e Maybe e -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#dirty",
          "type": "function"
        },
        "index": {
          "description": "Commit state return an error",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "dirty",
          "normalized": "Tx a b c d-\u003eMaybe c-\u003eTxM a b()",
          "package": "monad-tx",
          "signature": "Tx o s e a-\u003eMaybe e-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:dirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "get",
          "package": "monad-tx",
          "signature": "TxM o s s",
          "source": "src/Control-Monad-Tx.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "get",
          "package": "monad-tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "gets",
          "package": "monad-tx",
          "signature": "(s -\u003e a) -\u003e TxM o s a",
          "source": "src/Control-Monad-Tx.html#gets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003eTxM c a b",
          "package": "monad-tx",
          "signature": "(s-\u003ea)-\u003eTxM o s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "modify",
          "package": "monad-tx",
          "signature": "(s -\u003e s) -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eTxM b a()",
          "package": "monad-tx",
          "signature": "(s-\u003es)-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRevert state, return a result.\n\u003c/p\u003e",
          "module": "Control.Monad.Tx",
          "name": "rollback",
          "package": "monad-tx",
          "signature": "Tx o s e a -\u003e a -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#rollback",
          "type": "function"
        },
        "index": {
          "description": "Revert state return result",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "rollback",
          "normalized": "Tx a b c d-\u003ed-\u003eTxM a b()",
          "package": "monad-tx",
          "signature": "Tx o s e a-\u003ea-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e runTest0 :: [(TxStat String String, Int)]\n runTest0 = fmap (runTxM_ (begin test0)) [0..4]\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e mapM_ print runTest0\n (Abort Nothing,0)\n (Abort (Just \"1\"),1)\n (Dirty (Just \"2\"),99)\n (Rollback \"rollback!\",3)\n (Commit \"wooo\",99)\n\u003c/pre\u003e",
          "module": "Control.Monad.Tx",
          "name": "runTest0",
          "package": "monad-tx",
          "signature": "[(TxStat String String, Int)]",
          "source": "src/Control-Monad-Tx.html#runTest0",
          "type": "function"
        },
        "index": {
          "description": "runTest0 TxStat String String Int runTest0 fmap runTxM begin test0 ghci mapM print runTest0 Abort Nothing Abort Just Dirty Just Rollback rollback Commit wooo",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "runTest0",
          "normalized": "[(TxStat String String,Int)]",
          "package": "monad-tx",
          "partial": "Test",
          "signature": "[(TxStat String String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:runTest0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "runTxM",
          "package": "monad-tx",
          "signature": "TxM o s a -\u003e s -\u003e (s -\u003e a -\u003e o) -\u003e o",
          "source": "src/Control-Monad-Tx.html#runTxM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "runTxM",
          "normalized": "TxM a b c-\u003eb-\u003e(b-\u003ec-\u003ea)-\u003ea",
          "package": "monad-tx",
          "partial": "Tx",
          "signature": "TxM o s a-\u003es-\u003e(s-\u003ea-\u003eo)-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:runTxM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "runTxM_",
          "package": "monad-tx",
          "signature": "TxM (a, s) s a -\u003e s -\u003e (a, s)",
          "source": "src/Control-Monad-Tx.html#runTxM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "runTxM_",
          "normalized": "TxM(a,b)b a-\u003eb-\u003e(a,b)",
          "package": "monad-tx",
          "partial": "Tx",
          "signature": "TxM(a,s)s a-\u003es-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:runTxM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tx",
          "name": "set",
          "package": "monad-tx",
          "signature": "s -\u003e TxM o s ()",
          "source": "src/Control-Monad-Tx.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "set",
          "normalized": "a-\u003eTxM b a()",
          "package": "monad-tx",
          "signature": "s-\u003eTxM o s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e test0 :: Tx o Int String String -\u003e TxM o Int ()\n test0 tx = do\n   s \u003c- get\n   set 99\n   case s of\n     0 -\u003e return   ()\n     1 -\u003e abort    tx (Just (show s))\n     2 -\u003e dirty    tx (Just (show s))\n     3 -\u003e rollback tx  \"rollback!\"\n     _ -\u003e commit   tx  \"wooo\"\n\u003c/pre\u003e",
          "module": "Control.Monad.Tx",
          "name": "test0",
          "package": "monad-tx",
          "signature": "Tx o Int String String -\u003e TxM o Int ()",
          "source": "src/Control-Monad-Tx.html#test0",
          "type": "function"
        },
        "index": {
          "description": "test0 Tx Int String String TxM Int test0 tx do get set case of return abort tx Just show dirty tx Just show rollback tx rollback commit tx wooo",
          "hierarchy": "Control Monad Tx",
          "module": "Control.Monad.Tx",
          "name": "test0",
          "normalized": "Tx a Int String String-\u003eTxM a Int()",
          "package": "monad-tx",
          "signature": "Tx o Int String String-\u003eTxM o Int()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-tx/docs/Control-Monad-Tx.html#v:test0"
      }
    }
  ]
]