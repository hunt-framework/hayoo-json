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
        "word": "stm-chans"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e where the queue is\n bounded in length. This variant incorporates ideas from Thomas\n M. DuBuisson's \u003ccode\u003ebounded-tchan\u003c/code\u003e package in order to reduce\n contention between readers and writers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "TBChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBChan.html",
          "type": "module"
        },
        "index": {
          "description": "version of Control.Concurrent.STM.TChan where the queue is bounded in length This variant incorporates ideas from Thomas DuBuisson bounded-tchan package in order to reduce contention between readers and writers",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "TBChan",
          "package": "stm-chans",
          "partial": "TBChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTBChan\u003c/code\u003e is an abstract type representing a bounded FIFO\n channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "TBChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBChan.html#TBChan",
          "type": "data"
        },
        "index": {
          "description": "TBChan is an abstract type representing bounded FIFO channel",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "TBChan",
          "package": "stm-chans",
          "partial": "TBChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#t:TBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimate the number of free slots. If the result is positive,\n then it's a minimum bound; if it's non-positive then it's exact.\n It will only be negative if the initial limit was negative or\n if \u003ccode\u003e\u003ca\u003eunGetTBChan\u003c/a\u003e\u003c/code\u003e was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with writers, but only contends\n with readers when it has to; compare against \u003ccode\u003e\u003ca\u003efreeSlotsTBChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "estimateFreeSlotsTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBChan.html#estimateFreeSlotsTBChan",
          "type": "function"
        },
        "index": {
          "description": "Estimate the number of free slots If the result is positive then it minimum bound if it non-positive then it exact It will only be negative if the initial limit was negative or if unGetTBChan was used to go over the initial limit This function always contends with writers but only contends with readers when it has to compare against freeSlotsTBChan",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "estimateFreeSlotsTBChan",
          "normalized": "TBChan a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Free Slots TBChan",
          "signature": "TBChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:estimateFreeSlotsTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the exact number of free slots. The result can be\n negative if the initial limit was negative or if \u003ccode\u003e\u003ca\u003eunGetTBChan\u003c/a\u003e\u003c/code\u003e\n was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with both readers and writers;\n compare against \u003ccode\u003e\u003ca\u003eestimateFreeSlotsTBChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "freeSlotsTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBChan.html#freeSlotsTBChan",
          "type": "function"
        },
        "index": {
          "description": "Return the exact number of free slots The result can be negative if the initial limit was negative or if unGetTBChan was used to go over the initial limit This function always contends with both readers and writers compare against estimateFreeSlotsTBChan",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "freeSlotsTBChan",
          "normalized": "TBChan a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Slots TBChan",
          "signature": "TBChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:freeSlotsTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBChan\u003c/code\u003e is empty (i.e., has\n no elements). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBChan\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and\n `\u003ccode\u003efull'\u003c/code\u003e at the same time, if the initial limit was non-positive.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "isEmptyTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBChan.html#isEmptyTBChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBChan is empty i.e has no elements N.B TBChan can be both empty and full at the same time if the initial limit was non-positive",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "isEmptyTBChan",
          "normalized": "TBChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Empty TBChan",
          "signature": "TBChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:isEmptyTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBChan\u003c/code\u003e is full (i.e., is over\n its limit). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBChan\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and `\u003ccode\u003efull'\u003c/code\u003e\n at the same time, if the initial limit was non-positive. \u003cem\u003eN.B.\u003c/em\u003e,\n a \u003ccode\u003eTBChan\u003c/code\u003e may still be full after reading, if \u003ccode\u003e\u003ca\u003eunGetTBChan\u003c/a\u003e\u003c/code\u003e was\n used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to: \u003ccode\u003eliftM (\u003c= 0) estimateFreeSlotsTBMChan\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "isFullTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBChan.html#isFullTBChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBChan is full i.e is over its limit N.B TBChan can be both empty and full at the same time if the initial limit was non-positive N.B TBChan may still be full after reading if unGetTBChan was used to go over the initial limit This is equivalent to liftM estimateFreeSlotsTBMChan",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "isFullTBChan",
          "normalized": "TBChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Full TBChan",
          "signature": "TBChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:isFullTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003eTBChan\u003c/code\u003e with the given\n capacity. \u003cem\u003eN.B.\u003c/em\u003e, we do not verify the capacity is positive, but\n if it is non-positive then \u003ccode\u003e\u003ca\u003ewriteTBChan\u003c/a\u003e\u003c/code\u003e will always retry and\n \u003ccode\u003e\u003ca\u003eisFullTBChan\u003c/a\u003e\u003c/code\u003e will always be true.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "newTBChan",
          "package": "stm-chans",
          "signature": "Int -\u003e STM (TBChan a)",
          "source": "src/Control-Concurrent-STM-TBChan.html#newTBChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TBChan with the given capacity N.B we do not verify the capacity is positive but if it is non-positive then writeTBChan will always retry and isFullTBChan will always be true",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "newTBChan",
          "normalized": "Int-\u003eSTM(TBChan a)",
          "package": "stm-chans",
          "partial": "TBChan",
          "signature": "Int-\u003eSTM(TBChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:newTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTBChan\u003c/a\u003e\u003c/code\u003e. This is useful for creating\n top-level \u003ccode\u003eTBChan\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "newTBChanIO",
          "package": "stm-chans",
          "signature": "Int -\u003e IO (TBChan a)",
          "source": "src/Control-Concurrent-STM-TBChan.html#newTBChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTBChan This is useful for creating top-level TBChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "newTBChanIO",
          "normalized": "Int-\u003eIO(TBChan a)",
          "package": "stm-chans",
          "partial": "TBChan IO",
          "signature": "Int-\u003eIO(TBChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:newTBChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTBChan\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "peekTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TBChan.html#peekTBChan",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TBChan without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "peekTBChan",
          "normalized": "TBChan a-\u003eSTM a",
          "package": "stm-chans",
          "partial": "TBChan",
          "signature": "TBChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:peekTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eTBChan\u003c/code\u003e, retrying if the channel\n is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "readTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TBChan.html#readTBChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TBChan retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "readTBChan",
          "normalized": "TBChan a-\u003eSTM a",
          "package": "stm-chans",
          "partial": "TBChan",
          "signature": "TBChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:readTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTBChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryPeekTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBChan.html#tryPeekTBChan",
          "type": "function"
        },
        "index": {
          "description": "version of peekTBChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryPeekTBChan",
          "normalized": "TBChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "Peek TBChan",
          "signature": "TBChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:tryPeekTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTBChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryReadTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBChan.html#tryReadTBChan",
          "type": "function"
        },
        "index": {
          "description": "version of readTBChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryReadTBChan",
          "normalized": "TBChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "Read TBChan",
          "signature": "TBChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:tryReadTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewriteTBChan\u003c/a\u003e\u003c/code\u003e which does not retry. Returns \u003ccode\u003eTrue\u003c/code\u003e\n if the value was successfully written, and \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryWriteTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBChan.html#tryWriteTBChan",
          "type": "function"
        },
        "index": {
          "description": "version of writeTBChan which does not retry Returns True if the value was successfully written and False otherwise",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "tryWriteTBChan",
          "normalized": "TBChan a-\u003ea-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Write TBChan",
          "signature": "TBChan a-\u003ea-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:tryWriteTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next\n item read. \u003cem\u003eN.B.\u003c/em\u003e, this could allow the channel to temporarily\n become longer than the specified limit, which is necessary to\n ensure that the item is indeed the next one read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "unGetTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBChan.html#unGetTBChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read N.B this could allow the channel to temporarily become longer than the specified limit which is necessary to ensure that the item is indeed the next one read",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "unGetTBChan",
          "normalized": "TBChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "Get TBChan",
          "signature": "TBChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:unGetTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003eTBChan\u003c/code\u003e, retrying if the channel is full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "writeTBChan",
          "package": "stm-chans",
          "signature": "TBChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBChan.html#writeTBChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to TBChan retrying if the channel is full",
          "hierarchy": "Control Concurrent STM TBChan",
          "module": "Control.Concurrent.STM.TBChan",
          "name": "writeTBChan",
          "normalized": "TBChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TBChan",
          "signature": "TBChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBChan.html#v:writeTBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e where the queue is\n bounded in length and closeable. This combines the abilities of\n \u003ca\u003eControl.Concurrent.STM.TBChan\u003c/a\u003e and \u003ca\u003eControl.Concurrent.STM.TMChan\u003c/a\u003e.\n This variant incorporates ideas from Thomas M. DuBuisson's\n \u003ccode\u003ebounded-tchan\u003c/code\u003e package in order to reduce contention between\n readers and writers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "TBMChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBMChan.html",
          "type": "module"
        },
        "index": {
          "description": "version of Control.Concurrent.STM.TChan where the queue is bounded in length and closeable This combines the abilities of Control.Concurrent.STM.TBChan and Control.Concurrent.STM.TMChan This variant incorporates ideas from Thomas DuBuisson bounded-tchan package in order to reduce contention between readers and writers",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "TBMChan",
          "package": "stm-chans",
          "partial": "TBMChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTBMChan\u003c/code\u003e is an abstract type representing a bounded closeable\n FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "TBMChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBMChan.html#TBMChan",
          "type": "data"
        },
        "index": {
          "description": "TBMChan is an abstract type representing bounded closeable FIFO channel",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "TBMChan",
          "package": "stm-chans",
          "partial": "TBMChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#t:TBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the \u003ccode\u003eTBMChan\u003c/code\u003e, preventing any further writes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "closeTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMChan.html#closeTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Closes the TBMChan preventing any further writes",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "closeTBMChan",
          "normalized": "TBMChan a-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:closeTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimate the number of free slots. If the result is positive,\n then it's a minimum bound; if it's non-positive then it's exact.\n It will only be negative if the initial limit was negative or\n if \u003ccode\u003e\u003ca\u003eunGetTBMChan\u003c/a\u003e\u003c/code\u003e was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with writers, but only contends\n with readers when it has to; compare against \u003ccode\u003e\u003ca\u003efreeSlotsTBMChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "estimateFreeSlotsTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBMChan.html#estimateFreeSlotsTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Estimate the number of free slots If the result is positive then it minimum bound if it non-positive then it exact It will only be negative if the initial limit was negative or if unGetTBMChan was used to go over the initial limit This function always contends with writers but only contends with readers when it has to compare against freeSlotsTBMChan",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "estimateFreeSlotsTBMChan",
          "normalized": "TBMChan a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Free Slots TBMChan",
          "signature": "TBMChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:estimateFreeSlotsTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the exact number of free slots. The result can be\n negative if the initial limit was negative or if \u003ccode\u003e\u003ca\u003eunGetTBMChan\u003c/a\u003e\u003c/code\u003e\n was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with both readers and writers;\n compare against \u003ccode\u003e\u003ca\u003eestimateFreeSlotsTBMChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "freeSlotsTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBMChan.html#freeSlotsTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Return the exact number of free slots The result can be negative if the initial limit was negative or if unGetTBMChan was used to go over the initial limit This function always contends with both readers and writers compare against estimateFreeSlotsTBMChan",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "freeSlotsTBMChan",
          "normalized": "TBMChan a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Slots TBMChan",
          "signature": "TBMChan a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:freeSlotsTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMChan\u003c/code\u003e has been closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isClosedTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMChan.html#isClosedTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMChan has been closed",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isClosedTBMChan",
          "normalized": "TBMChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Closed TBMChan",
          "signature": "TBMChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:isClosedTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMChan\u003c/code\u003e is empty (i.e., has\n no elements). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMChan\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and\n `\u003ccode\u003efull'\u003c/code\u003e at the same time, if the initial limit was non-positive.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isEmptyTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMChan.html#isEmptyTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMChan is empty i.e has no elements N.B TBMChan can be both empty and full at the same time if the initial limit was non-positive",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isEmptyTBMChan",
          "normalized": "TBMChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Empty TBMChan",
          "signature": "TBMChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:isEmptyTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMChan\u003c/code\u003e is full (i.e., is\n over its limit). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMChan\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and\n `\u003ccode\u003efull'\u003c/code\u003e at the same time, if the initial limit was non-positive.\n \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMChan\u003c/code\u003e may still be full after reading, if\n \u003ccode\u003e\u003ca\u003eunGetTBMChan\u003c/a\u003e\u003c/code\u003e was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to: \u003ccode\u003eliftM (\u003c= 0) estimateFreeSlotsTBMChan\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isFullTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMChan.html#isFullTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMChan is full i.e is over its limit N.B TBMChan can be both empty and full at the same time if the initial limit was non-positive N.B TBMChan may still be full after reading if unGetTBMChan was used to go over the initial limit This is equivalent to liftM estimateFreeSlotsTBMChan",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "isFullTBMChan",
          "normalized": "TBMChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Full TBMChan",
          "signature": "TBMChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:isFullTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003eTBMChan\u003c/code\u003e with the given\n capacity. \u003cem\u003eN.B.\u003c/em\u003e, we do not verify the capacity is positive, but\n if it is non-positive then \u003ccode\u003e\u003ca\u003ewriteTBMChan\u003c/a\u003e\u003c/code\u003e will always retry and\n \u003ccode\u003e\u003ca\u003eisFullTBMChan\u003c/a\u003e\u003c/code\u003e will always be true.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "newTBMChan",
          "package": "stm-chans",
          "signature": "Int -\u003e STM (TBMChan a)",
          "source": "src/Control-Concurrent-STM-TBMChan.html#newTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TBMChan with the given capacity N.B we do not verify the capacity is positive but if it is non-positive then writeTBMChan will always retry and isFullTBMChan will always be true",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "newTBMChan",
          "normalized": "Int-\u003eSTM(TBMChan a)",
          "package": "stm-chans",
          "partial": "TBMChan",
          "signature": "Int-\u003eSTM(TBMChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:newTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTBMChan\u003c/a\u003e\u003c/code\u003e. This is useful for creating\n top-level \u003ccode\u003eTBMChan\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "newTBMChanIO",
          "package": "stm-chans",
          "signature": "Int -\u003e IO (TBMChan a)",
          "source": "src/Control-Concurrent-STM-TBMChan.html#newTBMChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTBMChan This is useful for creating top-level TBMChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "newTBMChanIO",
          "normalized": "Int-\u003eIO(TBMChan a)",
          "package": "stm-chans",
          "partial": "TBMChan IO",
          "signature": "Int-\u003eIO(TBMChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:newTBMChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTBMChan\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "peekTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBMChan.html#peekTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TBMChan without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "peekTBMChan",
          "normalized": "TBMChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:peekTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eTBMChan\u003c/code\u003e, retrying if the channel\n is empty (and not closed). We return \u003ccode\u003eNothing\u003c/code\u003e immediately if\n the channel is closed and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "readTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBMChan.html#readTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TBMChan retrying if the channel is empty and not closed We return Nothing immediately if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "readTBMChan",
          "normalized": "TBMChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:readTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTBMChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the channel is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the channel is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryPeekTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TBMChan.html#tryPeekTBMChan",
          "type": "function"
        },
        "index": {
          "description": "version of peekTBMChan which does not retry Instead it returns Just Nothing if the channel is open but no value is available it still returns Nothing if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryPeekTBMChan",
          "normalized": "TBMChan a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Peek TBMChan",
          "signature": "TBMChan a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:tryPeekTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTBMChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the channel is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the channel is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryReadTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TBMChan.html#tryReadTBMChan",
          "type": "function"
        },
        "index": {
          "description": "version of readTBMChan which does not retry Instead it returns Just Nothing if the channel is open but no value is available it still returns Nothing if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryReadTBMChan",
          "normalized": "TBMChan a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Read TBMChan",
          "signature": "TBMChan a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:tryReadTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewriteTBMChan\u003c/a\u003e\u003c/code\u003e which does not retry. Returns \u003ccode\u003eJust\n True\u003c/code\u003e if the value was successfully written, \u003ccode\u003eJust False\u003c/code\u003e if it\n could not be written (but the channel was open), and \u003ccode\u003eNothing\u003c/code\u003e\n if it was discarded (i.e., the channel was closed).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryWriteTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e a -\u003e STM (Maybe Bool)",
          "source": "src/Control-Concurrent-STM-TBMChan.html#tryWriteTBMChan",
          "type": "function"
        },
        "index": {
          "description": "version of writeTBMChan which does not retry Returns Just True if the value was successfully written Just False if it could not be written but the channel was open and Nothing if it was discarded i.e the channel was closed",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "tryWriteTBMChan",
          "normalized": "TBMChan a-\u003ea-\u003eSTM(Maybe Bool)",
          "package": "stm-chans",
          "partial": "Write TBMChan",
          "signature": "TBMChan a-\u003ea-\u003eSTM(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:tryWriteTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next\n item read. If the channel is closed then the value is silently\n discarded; you can use \u003ccode\u003e\u003ca\u003epeekTBMChan\u003c/a\u003e\u003c/code\u003e to circumvent this in certain\n circumstances. \u003cem\u003eN.B.\u003c/em\u003e, this could allow the channel to temporarily\n become longer than the specified limit, which is necessary to\n ensure that the item is indeed the next one read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "unGetTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMChan.html#unGetTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read If the channel is closed then the value is silently discarded you can use peekTBMChan to circumvent this in certain circumstances N.B this could allow the channel to temporarily become longer than the specified limit which is necessary to ensure that the item is indeed the next one read",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "unGetTBMChan",
          "normalized": "TBMChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "Get TBMChan",
          "signature": "TBMChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:unGetTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003eTBMChan\u003c/code\u003e, retrying if the channel is full.\n If the channel is closed then the value is silently discarded.\n Use \u003ccode\u003e\u003ca\u003eisClosedTBMChan\u003c/a\u003e\u003c/code\u003e to determine if the channel is closed\n before writing, as needed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "writeTBMChan",
          "package": "stm-chans",
          "signature": "TBMChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMChan.html#writeTBMChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to TBMChan retrying if the channel is full If the channel is closed then the value is silently discarded Use isClosedTBMChan to determine if the channel is closed before writing as needed",
          "hierarchy": "Control Concurrent STM TBMChan",
          "module": "Control.Concurrent.STM.TBMChan",
          "name": "writeTBMChan",
          "normalized": "TBMChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMChan.html#v:writeTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eControl.Concurrent.STM.TQueue\u003c/a\u003e where the queue is\n bounded in length and closeable. This combines the abilities of\n \u003ca\u003eControl.Concurrent.STM.TBQueue\u003c/a\u003e and \u003ca\u003eControl.Concurrent.STM.TMQueue\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "TBMQueue",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBMQueue.html",
          "type": "module"
        },
        "index": {
          "description": "version of Control.Concurrent.STM.TQueue where the queue is bounded in length and closeable This combines the abilities of Control.Concurrent.STM.TBQueue and Control.Concurrent.STM.TMQueue Since",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "TBMQueue",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTBMQueue\u003c/code\u003e is an abstract type representing a bounded closeable\n FIFO queue.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "TBMQueue",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#TBMQueue",
          "type": "data"
        },
        "index": {
          "description": "TBMQueue is an abstract type representing bounded closeable FIFO queue",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "TBMQueue",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#t:TBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the \u003ccode\u003eTBMQueue\u003c/code\u003e, preventing any further writes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "closeTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#closeTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Closes the TBMQueue preventing any further writes",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "closeTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:closeTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimate the number of free slots. If the result is positive,\n then it's a minimum bound; if it's non-positive then it's exact.\n It will only be negative if the initial limit was negative or\n if \u003ccode\u003e\u003ca\u003eunGetTBMQueue\u003c/a\u003e\u003c/code\u003e was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with writers, but only contends\n with readers when it has to; compare against \u003ccode\u003e\u003ca\u003efreeSlotsTBMQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "estimateFreeSlotsTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#estimateFreeSlotsTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Estimate the number of free slots If the result is positive then it minimum bound if it non-positive then it exact It will only be negative if the initial limit was negative or if unGetTBMQueue was used to go over the initial limit This function always contends with writers but only contends with readers when it has to compare against freeSlotsTBMQueue",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "estimateFreeSlotsTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Free Slots TBMQueue",
          "signature": "TBMQueue a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:estimateFreeSlotsTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the exact number of free slots. The result can be\n negative if the initial limit was negative or if \u003ccode\u003e\u003ca\u003eunGetTBMQueue\u003c/a\u003e\u003c/code\u003e\n was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis function always contends with both readers and writers;\n compare against \u003ccode\u003e\u003ca\u003eestimateFreeSlotsTBMQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "freeSlotsTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM Int",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#freeSlotsTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Return the exact number of free slots The result can be negative if the initial limit was negative or if unGetTBMQueue was used to go over the initial limit This function always contends with both readers and writers compare against estimateFreeSlotsTBMQueue",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "freeSlotsTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM Int",
          "package": "stm-chans",
          "partial": "Slots TBMQueue",
          "signature": "TBMQueue a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:freeSlotsTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMQueue\u003c/code\u003e has been closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isClosedTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#isClosedTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMQueue has been closed",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isClosedTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Closed TBMQueue",
          "signature": "TBMQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:isClosedTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMQueue\u003c/code\u003e is empty (i.e., has\n no elements). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMQueue\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and\n `\u003ccode\u003efull'\u003c/code\u003e at the same time, if the initial limit was non-positive.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isEmptyTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#isEmptyTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMQueue is empty i.e has no elements N.B TBMQueue can be both empty and full at the same time if the initial limit was non-positive",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isEmptyTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Empty TBMQueue",
          "signature": "TBMQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:isEmptyTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTBMQueue\u003c/code\u003e is full (i.e., is\n over its limit). \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMQueue\u003c/code\u003e can be both `\u003ccode\u003eempty'\u003c/code\u003e and\n `\u003ccode\u003efull'\u003c/code\u003e at the same time, if the initial limit was non-positive.\n \u003cem\u003eN.B.\u003c/em\u003e, a \u003ccode\u003eTBMQueue\u003c/code\u003e may still be full after reading, if\n \u003ccode\u003e\u003ca\u003eunGetTBMQueue\u003c/a\u003e\u003c/code\u003e was used to go over the initial limit.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to: \u003ccode\u003eliftM (\u003c= 0) estimateFreeSlotsTBMQueue\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isFullTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#isFullTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBMQueue is full i.e is over its limit N.B TBMQueue can be both empty and full at the same time if the initial limit was non-positive N.B TBMQueue may still be full after reading if unGetTBMQueue was used to go over the initial limit This is equivalent to liftM estimateFreeSlotsTBMQueue",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "isFullTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Full TBMQueue",
          "signature": "TBMQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:isFullTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003eTBMQueue\u003c/code\u003e with the given\n capacity. \u003cem\u003eN.B.\u003c/em\u003e, we do not verify the capacity is positive, but\n if it is non-positive then \u003ccode\u003e\u003ca\u003ewriteTBMQueue\u003c/a\u003e\u003c/code\u003e will always retry and\n \u003ccode\u003e\u003ca\u003eisFullTBMQueue\u003c/a\u003e\u003c/code\u003e will always be true.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "newTBMQueue",
          "package": "stm-chans",
          "signature": "Int -\u003e STM (TBMQueue a)",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#newTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TBMQueue with the given capacity N.B we do not verify the capacity is positive but if it is non-positive then writeTBMQueue will always retry and isFullTBMQueue will always be true",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "newTBMQueue",
          "normalized": "Int-\u003eSTM(TBMQueue a)",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "signature": "Int-\u003eSTM(TBMQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:newTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTBMQueue\u003c/a\u003e\u003c/code\u003e. This is useful for creating\n top-level \u003ccode\u003eTBMQueue\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "newTBMQueueIO",
          "package": "stm-chans",
          "signature": "Int -\u003e IO (TBMQueue a)",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#newTBMQueueIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTBMQueue This is useful for creating top-level TBMQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "newTBMQueueIO",
          "normalized": "Int-\u003eIO(TBMQueue a)",
          "package": "stm-chans",
          "partial": "TBMQueue IO",
          "signature": "Int-\u003eIO(TBMQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:newTBMQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTBMQueue\u003c/code\u003e without removing it,\n retrying if the queue is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "peekTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#peekTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TBMQueue without removing it retrying if the queue is empty",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "peekTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:peekTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eTBMQueue\u003c/code\u003e, retrying if the queue\n is empty (and not closed). We return \u003ccode\u003eNothing\u003c/code\u003e immediately if\n the queue is closed and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "readTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#readTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TBMQueue retrying if the queue is empty and not closed We return Nothing immediately if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "readTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:readTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTBMQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the queue is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the queue is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryPeekTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#tryPeekTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "version of peekTBMQueue which does not retry Instead it returns Just Nothing if the queue is open but no value is available it still returns Nothing if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryPeekTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Peek TBMQueue",
          "signature": "TBMQueue a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:tryPeekTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTBMQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the queue is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the queue is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryReadTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#tryReadTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "version of readTBMQueue which does not retry Instead it returns Just Nothing if the queue is open but no value is available it still returns Nothing if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryReadTBMQueue",
          "normalized": "TBMQueue a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Read TBMQueue",
          "signature": "TBMQueue a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:tryReadTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewriteTBMQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Returns \u003ccode\u003eJust\n True\u003c/code\u003e if the value was successfully written, \u003ccode\u003eJust False\u003c/code\u003e if it\n could not be written (but the queue was open), and \u003ccode\u003eNothing\u003c/code\u003e\n if it was discarded (i.e., the queue was closed).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryWriteTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e a -\u003e STM (Maybe Bool)",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#tryWriteTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "version of writeTBMQueue which does not retry Returns Just True if the value was successfully written Just False if it could not be written but the queue was open and Nothing if it was discarded i.e the queue was closed",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "tryWriteTBMQueue",
          "normalized": "TBMQueue a-\u003ea-\u003eSTM(Maybe Bool)",
          "package": "stm-chans",
          "partial": "Write TBMQueue",
          "signature": "TBMQueue a-\u003ea-\u003eSTM(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:tryWriteTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a queue, where it will be the next\n item read. If the queue is closed then the value is silently\n discarded; you can use \u003ccode\u003e\u003ca\u003epeekTBMQueue\u003c/a\u003e\u003c/code\u003e to circumvent this in certain\n circumstances. \u003cem\u003eN.B.\u003c/em\u003e, this could allow the queue to temporarily\n become longer than the specified limit, which is necessary to\n ensure that the item is indeed the next one read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "unGetTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#unGetTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto queue where it will be the next item read If the queue is closed then the value is silently discarded you can use peekTBMQueue to circumvent this in certain circumstances N.B this could allow the queue to temporarily become longer than the specified limit which is necessary to ensure that the item is indeed the next one read",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "unGetTBMQueue",
          "normalized": "TBMQueue a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "Get TBMQueue",
          "signature": "TBMQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:unGetTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003eTBMQueue\u003c/code\u003e, retrying if the queue is full.\n If the queue is closed then the value is silently discarded.\n Use \u003ccode\u003e\u003ca\u003eisClosedTBMQueue\u003c/a\u003e\u003c/code\u003e to determine if the queue is closed\n before writing, as needed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "writeTBMQueue",
          "package": "stm-chans",
          "signature": "TBMQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBMQueue.html#writeTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "Write value to TBMQueue retrying if the queue is full If the queue is closed then the value is silently discarded Use isClosedTBMQueue to determine if the queue is closed before writing as needed",
          "hierarchy": "Control Concurrent STM TBMQueue",
          "module": "Control.Concurrent.STM.TBMQueue",
          "name": "writeTBMQueue",
          "normalized": "TBMQueue a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TBMQueue.html#v:writeTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e where the queue is\n closeable. This is similar to a \u003ccode\u003eTChan (Maybe a)\u003c/code\u003e with a\n monotonicity guarantee that once there's a \u003ccode\u003eNothing\u003c/code\u003e there will\n always be \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "TMChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TMChan.html",
          "type": "module"
        },
        "index": {
          "description": "version of Control.Concurrent.STM.TChan where the queue is closeable This is similar to TChan Maybe with monotonicity guarantee that once there Nothing there will always be Nothing",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "TMChan",
          "package": "stm-chans",
          "partial": "TMChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTMChan\u003c/code\u003e is an abstract type representing a closeable FIFO\n channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "TMChan",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TMChan.html#TMChan",
          "type": "data"
        },
        "index": {
          "description": "TMChan is an abstract type representing closeable FIFO channel",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "TMChan",
          "package": "stm-chans",
          "partial": "TMChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#t:TMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the \u003ccode\u003eTMChan\u003c/code\u003e, preventing any further writes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "closeTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMChan.html#closeTMChan",
          "type": "function"
        },
        "index": {
          "description": "Closes the TMChan preventing any further writes",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "closeTMChan",
          "normalized": "TMChan a-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:closeTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate a \u003ccode\u003eTMChan\u003c/code\u003e: the duplicate channel begins empty, but\n data written to either channel from then on will be available\n from both, and closing one copy will close them all. Hence this\n creates a kind of broadcast channel, where data written by anyone\n is seen by everyone else.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "dupTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM (TMChan a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#dupTMChan",
          "type": "function"
        },
        "index": {
          "description": "Duplicate TMChan the duplicate channel begins empty but data written to either channel from then on will be available from both and closing one copy will close them all Hence this creates kind of broadcast channel where data written by anyone is seen by everyone else",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "dupTMChan",
          "normalized": "TMChan a-\u003eSTM(TMChan a)",
          "package": "stm-chans",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eSTM(TMChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:dupTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTMChan\u003c/code\u003e has been closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "isClosedTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMChan.html#isClosedTMChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TMChan has been closed",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "isClosedTMChan",
          "normalized": "TMChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Closed TMChan",
          "signature": "TMChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:isClosedTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTMChan\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "isEmptyTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMChan.html#isEmptyTMChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TMChan is empty",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "isEmptyTMChan",
          "normalized": "TMChan a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Empty TMChan",
          "signature": "TMChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:isEmptyTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewBroadcastTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.1.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newBroadcastTMChan",
          "package": "stm-chans",
          "signature": "STM (TMChan a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#newBroadcastTMChan",
          "type": "function"
        },
        "index": {
          "description": "Like newBroadcastTChan Since",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newBroadcastTMChan",
          "package": "stm-chans",
          "partial": "Broadcast TMChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:newBroadcastTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewBroadcastTMChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.1.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newBroadcastTMChanIO",
          "package": "stm-chans",
          "signature": "IO (TMChan a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#newBroadcastTMChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newBroadcastTMChan Since",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newBroadcastTMChanIO",
          "package": "stm-chans",
          "partial": "Broadcast TMChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:newBroadcastTMChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003eTMChan\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newTMChan",
          "package": "stm-chans",
          "signature": "STM (TMChan a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#newTMChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TMChan",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newTMChan",
          "package": "stm-chans",
          "partial": "TMChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:newTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTMChan\u003c/a\u003e\u003c/code\u003e. This is useful for creating\n top-level \u003ccode\u003eTMChan\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newTMChanIO",
          "package": "stm-chans",
          "signature": "IO (TMChan a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#newTMChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTMChan This is useful for creating top-level TMChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "newTMChanIO",
          "package": "stm-chans",
          "partial": "TMChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:newTMChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTMChan\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "peekTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#peekTMChan",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TMChan without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "peekTMChan",
          "normalized": "TMChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:peekTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eTMChan\u003c/code\u003e, retrying if the channel\n is empty (and not closed). We return \u003ccode\u003eNothing\u003c/code\u003e immediately if\n the channel is closed and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "readTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMChan.html#readTMChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TMChan retrying if the channel is empty and not closed We return Nothing immediately if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "readTMChan",
          "normalized": "TMChan a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:readTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTMChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the channel is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the channel is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "tryPeekTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TMChan.html#tryPeekTMChan",
          "type": "function"
        },
        "index": {
          "description": "version of peekTMChan which does not retry Instead it returns Just Nothing if the channel is open but no value is available it still returns Nothing if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "tryPeekTMChan",
          "normalized": "TMChan a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Peek TMChan",
          "signature": "TMChan a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:tryPeekTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTMChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the channel is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the channel is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "tryReadTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TMChan.html#tryReadTMChan",
          "type": "function"
        },
        "index": {
          "description": "version of readTMChan which does not retry Instead it returns Just Nothing if the channel is open but no value is available it still returns Nothing if the channel is closed and empty",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "tryReadTMChan",
          "normalized": "TMChan a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Read TMChan",
          "signature": "TMChan a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:tryReadTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next\n item read. If the channel is closed then the value is silently\n discarded; you can use \u003ccode\u003e\u003ca\u003epeekTMChan\u003c/a\u003e\u003c/code\u003e to circumvent this in certain\n circumstances.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "unGetTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMChan.html#unGetTMChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read If the channel is closed then the value is silently discarded you can use peekTMChan to circumvent this in certain circumstances",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "unGetTMChan",
          "normalized": "TMChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "Get TMChan",
          "signature": "TMChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:unGetTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003eTMChan\u003c/code\u003e. If the channel is closed then the\n value is silently discarded. Use \u003ccode\u003e\u003ca\u003eisClosedTMChan\u003c/a\u003e\u003c/code\u003e to determine\n if the channel is closed before writing, as needed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "writeTMChan",
          "package": "stm-chans",
          "signature": "TMChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMChan.html#writeTMChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to TMChan If the channel is closed then the value is silently discarded Use isClosedTMChan to determine if the channel is closed before writing as needed",
          "hierarchy": "Control Concurrent STM TMChan",
          "module": "Control.Concurrent.STM.TMChan",
          "name": "writeTMChan",
          "normalized": "TMChan a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TMChan",
          "signature": "TMChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMChan.html#v:writeTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ca\u003eControl.Concurrent.STM.TQueue\u003c/a\u003e where the queue is\n closeable. This is similar to a \u003ccode\u003eTQueue (Maybe a)\u003c/code\u003e with a\n monotonicity guarantee that once there's a \u003ccode\u003eNothing\u003c/code\u003e there will\n always be \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "TMQueue",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TMQueue.html",
          "type": "module"
        },
        "index": {
          "description": "version of Control.Concurrent.STM.TQueue where the queue is closeable This is similar to TQueue Maybe with monotonicity guarantee that once there Nothing there will always be Nothing Since",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "TMQueue",
          "package": "stm-chans",
          "partial": "TMQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTMQueue\u003c/code\u003e is an abstract type representing a closeable FIFO\n queue.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "TMQueue",
          "package": "stm-chans",
          "source": "src/Control-Concurrent-STM-TMQueue.html#TMQueue",
          "type": "data"
        },
        "index": {
          "description": "TMQueue is an abstract type representing closeable FIFO queue",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "TMQueue",
          "package": "stm-chans",
          "partial": "TMQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#t:TMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the \u003ccode\u003eTMQueue\u003c/code\u003e, preventing any further writes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "closeTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMQueue.html#closeTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Closes the TMQueue preventing any further writes",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "closeTMQueue",
          "normalized": "TMQueue a-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:closeTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTMQueue\u003c/code\u003e has been closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "isClosedTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMQueue.html#isClosedTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TMQueue has been closed",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "isClosedTMQueue",
          "normalized": "TMQueue a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Closed TMQueue",
          "signature": "TMQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:isClosedTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the supplied \u003ccode\u003eTMQueue\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "isEmptyTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMQueue.html#isEmptyTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TMQueue is empty",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "isEmptyTMQueue",
          "normalized": "TMQueue a-\u003eSTM Bool",
          "package": "stm-chans",
          "partial": "Empty TMQueue",
          "signature": "TMQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:isEmptyTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003eTMQueue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "newTMQueue",
          "package": "stm-chans",
          "signature": "STM (TMQueue a)",
          "source": "src/Control-Concurrent-STM-TMQueue.html#newTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TMQueue",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "newTMQueue",
          "package": "stm-chans",
          "partial": "TMQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:newTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTMQueue\u003c/a\u003e\u003c/code\u003e. This is useful for creating\n top-level \u003ccode\u003eTMQueue\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "newTMQueueIO",
          "package": "stm-chans",
          "signature": "IO (TMQueue a)",
          "source": "src/Control-Concurrent-STM-TMQueue.html#newTMQueueIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTMQueue This is useful for creating top-level TMQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "newTMQueueIO",
          "package": "stm-chans",
          "partial": "TMQueue IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:newTMQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTMQueue\u003c/code\u003e without removing it,\n retrying if the queue is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "peekTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMQueue.html#peekTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TMQueue without removing it retrying if the queue is empty",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "peekTMQueue",
          "normalized": "TMQueue a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:peekTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eTMQueue\u003c/code\u003e, retrying if the queue\n is empty (and not closed). We return \u003ccode\u003eNothing\u003c/code\u003e immediately if\n the queue is closed and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "readTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMQueue.html#readTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TMQueue retrying if the queue is empty and not closed We return Nothing immediately if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "readTMQueue",
          "normalized": "TMQueue a-\u003eSTM(Maybe a)",
          "package": "stm-chans",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:readTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTMQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the queue is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the queue is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "tryPeekTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TMQueue.html#tryPeekTMQueue",
          "type": "function"
        },
        "index": {
          "description": "version of peekTMQueue which does not retry Instead it returns Just Nothing if the queue is open but no value is available it still returns Nothing if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "tryPeekTMQueue",
          "normalized": "TMQueue a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Peek TMQueue",
          "signature": "TMQueue a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:tryPeekTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTMQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eJust Nothing\u003c/code\u003e if the queue is open but no value is\n available; it still returns \u003ccode\u003eNothing\u003c/code\u003e if the queue is closed\n and empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "tryReadTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e STM (Maybe (Maybe a))",
          "source": "src/Control-Concurrent-STM-TMQueue.html#tryReadTMQueue",
          "type": "function"
        },
        "index": {
          "description": "version of readTMQueue which does not retry Instead it returns Just Nothing if the queue is open but no value is available it still returns Nothing if the queue is closed and empty",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "tryReadTMQueue",
          "normalized": "TMQueue a-\u003eSTM(Maybe(Maybe a))",
          "package": "stm-chans",
          "partial": "Read TMQueue",
          "signature": "TMQueue a-\u003eSTM(Maybe(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:tryReadTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a queue, where it will be the next\n item read. If the queue is closed then the value is silently\n discarded; you can use \u003ccode\u003e\u003ca\u003epeekTMQueue\u003c/a\u003e\u003c/code\u003e to circumvent this in certain\n circumstances.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "unGetTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMQueue.html#unGetTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto queue where it will be the next item read If the queue is closed then the value is silently discarded you can use peekTMQueue to circumvent this in certain circumstances",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "unGetTMQueue",
          "normalized": "TMQueue a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "Get TMQueue",
          "signature": "TMQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:unGetTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003eTMQueue\u003c/code\u003e. If the queue is closed then the\n value is silently discarded. Use \u003ccode\u003e\u003ca\u003eisClosedTMQueue\u003c/a\u003e\u003c/code\u003e to determine\n if the queue is closed before writing, as needed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "writeTMQueue",
          "package": "stm-chans",
          "signature": "TMQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMQueue.html#writeTMQueue",
          "type": "function"
        },
        "index": {
          "description": "Write value to TMQueue If the queue is closed then the value is silently discarded Use isClosedTMQueue to determine if the queue is closed before writing as needed",
          "hierarchy": "Control Concurrent STM TMQueue",
          "module": "Control.Concurrent.STM.TMQueue",
          "name": "writeTMQueue",
          "normalized": "TMQueue a-\u003ea-\u003eSTM()",
          "package": "stm-chans",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-chans/docs/Control-Concurrent-STM-TMQueue.html#v:writeTMQueue"
      }
    }
  ]
]