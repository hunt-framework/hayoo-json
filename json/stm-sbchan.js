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
        "word": "stm-sbchan"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFIFO queue for STM, bounded by the total \"size\" of the items.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.STM.SBChan",
          "name": "SBChan",
          "package": "stm-sbchan",
          "source": "src/Data-STM-SBChan.html",
          "type": "module"
        },
        "index": {
          "description": "FIFO queue for STM bounded by the total size of the items",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "SBChan",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.SBChan",
          "name": "ItemSize",
          "package": "stm-sbchan",
          "source": "src/Data-STM-SBChan.html#ItemSize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "ItemSize",
          "package": "stm-sbchan",
          "partial": "Item Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#t:ItemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for items where \u003ccode\u003e\u003ccode\u003e\u003ca\u003eitemSize\u003c/a\u003e\u003c/code\u003e item = 1\u003c/code\u003e.  This helps you use\n \u003ccode\u003e\u003ca\u003eSBChan\u003c/a\u003e\u003c/code\u003e as a channel with a maximum \u003cem\u003enumber\u003c/em\u003e of items.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "SBCItem",
          "package": "stm-sbchan",
          "source": "src/Data-STM-SBChan.html#SBCItem",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for items where itemSize item This helps you use SBChan as channel with maximum number of items",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "SBCItem",
          "package": "stm-sbchan",
          "partial": "SBCItem",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#t:SBCItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.SBChan",
          "name": "SBChan",
          "package": "stm-sbchan",
          "source": "src/Data-STM-SBChan.html#SBChan",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "SBChan",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#t:SBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.SBChan",
          "name": "SBCItem",
          "package": "stm-sbchan",
          "signature": "SBCItem",
          "source": "src/Data-STM-SBChan.html#SBCItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "SBCItem",
          "package": "stm-sbchan",
          "partial": "SBCItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:SBCItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all items from the \u003ccode\u003e\u003ca\u003eSBChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "clearSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM ()",
          "source": "src/Data-STM-SBChan.html#clearSBChan",
          "type": "function"
        },
        "index": {
          "description": "Remove all items from the SBChan",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "clearSBChan",
          "normalized": "SBChan a-\u003eSTM()",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:clearSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewriteSBChan\u003c/a\u003e\u003c/code\u003e, but ignore the channel size limit.  This will always\n succeed, and will not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "cramSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e a -\u003e STM ()",
          "source": "src/Data-STM-SBChan.html#cramSBChan",
          "type": "function"
        },
        "index": {
          "description": "Like writeSBChan but ignore the channel size limit This will always succeed and will not retry",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "cramSBChan",
          "normalized": "SBChan a-\u003ea-\u003eSTM()",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:cramSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current limit on total size of items in the channel.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "getLimitSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM Int",
          "source": "src/Data-STM-SBChan.html#getLimitSBChan",
          "type": "function"
        },
        "index": {
          "description": "Get the current limit on total size of items in the channel",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "getLimitSBChan",
          "normalized": "SBChan a-\u003eSTM Int",
          "package": "stm-sbchan",
          "partial": "Limit SBChan",
          "signature": "SBChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:getLimitSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the channel is empty.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "isEmptySBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM Bool",
          "source": "src/Data-STM-SBChan.html#isEmptySBChan",
          "type": "function"
        },
        "index": {
          "description": "Return True if the channel is empty",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "isEmptySBChan",
          "normalized": "SBChan a-\u003eSTM Bool",
          "package": "stm-sbchan",
          "partial": "Empty SBChan",
          "signature": "SBChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:isEmptySBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \"size\" of an individual item.  This is usually an\n estimate of how many bytes the item takes up in memory, including\n channel overhead.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eitemSize\u003c/a\u003e\u003c/code\u003e must return a number \u003e= 0.  \u003ccode\u003e\u003ca\u003eitemSize\u003c/a\u003e\u003c/code\u003e should be fast, in\n case it is re-evaluated often due to transaction retries and\n invalidations.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "itemSize",
          "package": "stm-sbchan",
          "signature": "a -\u003e Int",
          "source": "src/Data-STM-SBChan.html#itemSize",
          "type": "method"
        },
        "index": {
          "description": "Return the size of an individual item This is usually an estimate of how many bytes the item takes up in memory including channel overhead itemSize must return number itemSize should be fast in case it is re-evaluated often due to transaction retries and invalidations",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "itemSize",
          "normalized": "a-\u003eInt",
          "package": "stm-sbchan",
          "partial": "Size",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:itemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty \u003ccode\u003e\u003ca\u003eSBChan\u003c/a\u003e\u003c/code\u003e, with the given size limit.\n\u003c/p\u003e\u003cp\u003eTo change the size limit later, use \u003ccode\u003e\u003ca\u003esetLimitSBChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "newSBChan",
          "package": "stm-sbchan",
          "signature": "Int -\u003e STM (SBChan a)",
          "source": "src/Data-STM-SBChan.html#newSBChan",
          "type": "function"
        },
        "index": {
          "description": "Create new empty SBChan with the given size limit To change the size limit later use setLimitSBChan",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "newSBChan",
          "normalized": "Int-\u003eSTM(SBChan a)",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "Int-\u003eSTM(SBChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:newSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003enewSBChan\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n\u003ccode\u003e\u003ca\u003eSBChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because performing\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside a pure computation is extremely dangerous (can lead to\n\u003ccode\u003e\u003ca\u003eNestedAtomically\u003c/a\u003e\u003c/code\u003e errors and even segfaults,\nsee GHC ticket #5866).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nlogChannel :: \u003ccode\u003e\u003ca\u003eSBChan\u003c/a\u003e\u003c/code\u003e LogEntry\nlogChannel = \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enewSBChanIO\u003c/a\u003e\u003c/code\u003e 500000)\n{-# NOINLINE logChannel #-}\n\u003c/pre\u003e",
          "module": "Data.STM.SBChan",
          "name": "newSBChanIO",
          "package": "stm-sbchan",
          "signature": "Int -\u003e IO (SBChan a)",
          "source": "src/Data-STM-SBChan.html#newSBChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO variant of newSBChan This is useful for creating top-level SBChan using unsafePerformIO because performing atomically inside pure computation is extremely dangerous can lead to NestedAtomically errors and even segfaults see GHC ticket Example logChannel SBChan LogEntry logChannel unsafePerformIO newSBChanIO NOINLINE logChannel",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "newSBChanIO",
          "normalized": "Int-\u003eIO(SBChan a)",
          "package": "stm-sbchan",
          "partial": "SBChan IO",
          "signature": "Int-\u003eIO(SBChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:newSBChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next item from the channel without removing it.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the\n channel is empty.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "peekSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM a",
          "source": "src/Data-STM-SBChan.html#peekSBChan",
          "type": "function"
        },
        "index": {
          "description": "Get the next item from the channel without removing it retry if the channel is empty",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "peekSBChan",
          "normalized": "SBChan a-\u003eSTM a",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:peekSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next item from the channel.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the channel is empty.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "readSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM a",
          "source": "src/Data-STM-SBChan.html#readSBChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next item from the channel retry if the channel is empty",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "readSBChan",
          "normalized": "SBChan a-\u003eSTM a",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:readSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewriteSBChan\u003c/a\u003e\u003c/code\u003e, but if the channel is full, drop items from the\n beginning of the channel until there is enough room for the new item\n (or until the channel is empty).  This will always succeed, and will not\n \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturn the number of items dropped.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "rollSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e a -\u003e STM Int",
          "source": "src/Data-STM-SBChan.html#rollSBChan",
          "type": "function"
        },
        "index": {
          "description": "Like writeSBChan but if the channel is full drop items from the beginning of the channel until there is enough room for the new item or until the channel is empty This will always succeed and will not retry Return the number of items dropped",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "rollSBChan",
          "normalized": "SBChan a-\u003ea-\u003eSTM Int",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003ea-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:rollSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop items from the beginning of the channel until the channel's size\n limit is satisfied, or until there is only one item left in the channel.\n\u003c/p\u003e\u003cp\u003eReturn the number of items dropped.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "satisfyLimitSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM Int",
          "source": "src/Data-STM-SBChan.html#satisfyLimitSBChan",
          "type": "function"
        },
        "index": {
          "description": "Drop items from the beginning of the channel until the channel size limit is satisfied or until there is only one item left in the channel Return the number of items dropped",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "satisfyLimitSBChan",
          "normalized": "SBChan a-\u003eSTM Int",
          "package": "stm-sbchan",
          "partial": "Limit SBChan",
          "signature": "SBChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:satisfyLimitSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the total size limit.  If the channel exceeds the new limit, too bad.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "setLimitSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e Int -\u003e STM ()",
          "source": "src/Data-STM-SBChan.html#setLimitSBChan",
          "type": "function"
        },
        "index": {
          "description": "Set the total size limit If the channel exceeds the new limit too bad",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "setLimitSBChan",
          "normalized": "SBChan a-\u003eInt-\u003eSTM()",
          "package": "stm-sbchan",
          "partial": "Limit SBChan",
          "signature": "SBChan a-\u003eInt-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:setLimitSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003epeekSBChan\u003c/a\u003e\u003c/code\u003e which does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  Instead, it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the channel is empty.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "tryPeekSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM (Maybe a)",
          "source": "src/Data-STM-SBChan.html#tryPeekSBChan",
          "type": "function"
        },
        "index": {
          "description": "Variant of peekSBChan which does not retry Instead it returns Nothing if the channel is empty",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "tryPeekSBChan",
          "normalized": "SBChan a-\u003eSTM(Maybe a)",
          "package": "stm-sbchan",
          "partial": "Peek SBChan",
          "signature": "SBChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:tryPeekSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ereadSBChan\u003c/a\u003e\u003c/code\u003e which does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  Instead, it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the channel is empty.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "tryReadSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e STM (Maybe a)",
          "source": "src/Data-STM-SBChan.html#tryReadSBChan",
          "type": "function"
        },
        "index": {
          "description": "Variant of readSBChan which does not retry Instead it returns Nothing if the channel is empty",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "tryReadSBChan",
          "normalized": "SBChan a-\u003eSTM(Maybe a)",
          "package": "stm-sbchan",
          "partial": "Read SBChan",
          "signature": "SBChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:tryReadSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ewriteSBChan\u003c/a\u003e\u003c/code\u003e which does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  Instead, it returns\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the item does not fit.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "tryWriteSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e a -\u003e STM Bool",
          "source": "src/Data-STM-SBChan.html#tryWriteSBChan",
          "type": "function"
        },
        "index": {
          "description": "Variant of writeSBChan which does not retry Instead it returns False if the item does not fit",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "tryWriteSBChan",
          "normalized": "SBChan a-\u003ea-\u003eSTM Bool",
          "package": "stm-sbchan",
          "partial": "Write SBChan",
          "signature": "SBChan a-\u003ea-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:tryWriteSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an item back on the channel, where it will be the next item read.\n\u003c/p\u003e\u003cp\u003eThis will always succeed, even if it causes the channel's size limit to be\n exceeded.  The rationale is that the size limit can be exceeded in some\n cases (e.g. by writing an oversized item to an empty channel).  If we allow\n \u003ccode\u003e\u003ca\u003ewriteSBChan\u003c/a\u003e\u003c/code\u003e to exceed the limit, but don't allow \u003ccode\u003e\u003ca\u003eunGetSBChan\u003c/a\u003e\u003c/code\u003e to exceed\n the limit, then we can't always read an item and put it back.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eunGetTBQueue\u003c/a\u003e\u003c/code\u003e in\n \u003ca\u003eControl.Concurrent.STM.TBQueue\u003c/a\u003e is different: it will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the queue\n is full.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "unGetSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e a -\u003e STM ()",
          "source": "src/Data-STM-SBChan.html#unGetSBChan",
          "type": "function"
        },
        "index": {
          "description": "Put an item back on the channel where it will be the next item read This will always succeed even if it causes the channel size limit to be exceeded The rationale is that the size limit can be exceeded in some cases e.g by writing an oversized item to an empty channel If we allow writeSBChan to exceed the limit but don allow unGetSBChan to exceed the limit then we can always read an item and put it back Note that unGetTBQueue in Control.Concurrent.STM.TBQueue is different it will retry if the queue is full",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "unGetSBChan",
          "normalized": "SBChan a-\u003ea-\u003eSTM()",
          "package": "stm-sbchan",
          "partial": "Get SBChan",
          "signature": "SBChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:unGetSBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.SBChan",
          "name": "unSBCItem",
          "package": "stm-sbchan",
          "signature": "a",
          "source": "src/Data-STM-SBChan.html#SBCItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "unSBCItem",
          "package": "stm-sbchan",
          "partial": "SBCItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:unSBCItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an item to the channel.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the item does not fit.\n\u003c/p\u003e\u003cp\u003eAs an exception, if the channel is currently empty, but the item's size\n exceeds the channel limit all by itself, it will be written to the channel\n anyway.  This is to prevent a large item from causing the application to\n deadlock.\n\u003c/p\u003e",
          "module": "Data.STM.SBChan",
          "name": "writeSBChan",
          "package": "stm-sbchan",
          "signature": "SBChan a -\u003e a -\u003e STM ()",
          "source": "src/Data-STM-SBChan.html#writeSBChan",
          "type": "function"
        },
        "index": {
          "description": "Write an item to the channel retry if the item does not fit As an exception if the channel is currently empty but the item size exceeds the channel limit all by itself it will be written to the channel anyway This is to prevent large item from causing the application to deadlock",
          "hierarchy": "Data STM SBChan",
          "module": "Data.STM.SBChan",
          "name": "writeSBChan",
          "normalized": "SBChan a-\u003ea-\u003eSTM()",
          "package": "stm-sbchan",
          "partial": "SBChan",
          "signature": "SBChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-sbchan/docs/Data-STM-SBChan.html#v:writeSBChan"
      }
    }
  ]
]