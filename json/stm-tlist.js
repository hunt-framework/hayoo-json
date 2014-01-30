[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an API very similar to \u003ca\u003eControl.Concurrent.STM.TChan\u003c/a\u003e.\n However, unlike \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It is based on \u003ca\u003eData.STM.TList\u003c/a\u003e, rather than using an abstract internal\n    representation.\n\u003c/li\u003e\u003cli\u003e It separates the read end and write end.  This means if the channel has no\n    readers, items written with \u003ccode\u003e\u003ca\u003ewriteTCursor\u003c/a\u003e\u003c/code\u003e can be garbage collected.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere is an implementation of \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e based on \u003ccode\u003e\u003ca\u003eTCursor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003etype TChan a = (TCursor a, TCursor a)\n\nnewTChan = newTCursorPair\n\nnewTChanIO = newTCursorPairIO\n\nreadTChan = readTCursor . fst\n\nwriteTChan = writeTCursor . snd\n\ndupTChan (_, writeEnd) = do\n    newReadEnd \u003c- dupTCursor writeEnd\n    return (newReadEnd, writeEnd)\n\nunGetTChan = unGetTCursor . fst\n\nisEmptyTChan = isEmptyTCursor . fst\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "module",
        "fct-source": "src/Data-STM-TCursor.html",
        "fct-type": "module",
        "title": "TCursor"
      },
      "index": {
        "description": "This module provides an API very similar to Control.Concurrent.STM.TChan However unlike TChan It is based on Data.STM.TList rather than using an abstract internal representation It separates the read end and write end This means if the channel has no readers items written with writeTCursor can be garbage collected Here is an implementation of TChan based on TCursor type TChan TCursor TCursor newTChan newTCursorPair newTChanIO newTCursorPairIO readTChan readTCursor fst writeTChan writeTCursor snd dupTChan writeEnd do newReadEnd dupTCursor writeEnd return newReadEnd writeEnd unGetTChan unGetTCursor fst isEmptyTChan isEmptyTCursor fst",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "TCursor",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TCursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#t:TCursor",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTCursor\u003c/a\u003e\u003c/code\u003e is a mutable cursor used for traversing items.  While \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e return the subsequent \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadTCursor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteTCursor\u003c/a\u003e\u003c/code\u003e\n modify the cursor in-place, and thus behave more like \u003ccode\u003e\u003ca\u003ereadTChan\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ewriteTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "type",
        "fct-source": "src/Data-STM-TCursor.html#TCursor",
        "fct-type": "type",
        "title": "TCursor"
      },
      "index": {
        "description": "TCursor is mutable cursor used for traversing items While uncons and append return the subsequent TList readTCursor and writeTCursor modify the cursor in-place and thus behave more like readTChan and writeTChan",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "TCursor",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TCursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:dupTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Make a copy of a \u003ccode\u003e\u003ca\u003eTCursor\u003c/a\u003e\u003c/code\u003e.  Modifying the old cursor with\n \u003ccode\u003e\u003ca\u003ereadTCursor\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewriteTCursor\u003c/a\u003e\u003c/code\u003e will not affect the new cursor, and vice\n versa.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e STM (TCursor a)",
        "fct-source": "src/Data-STM-TCursor.html#dupTCursor",
        "fct-type": "function",
        "title": "dupTCursor"
      },
      "index": {
        "description": "Make copy of TCursor Modifying the old cursor with readTCursor or writeTCursor will not affect the new cursor and vice versa",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "dupTCursor",
        "normalized": "TCursor a-\u003eSTM(TCursor a)",
        "package": "stm-tlist",
        "partial": "TCursor",
        "signature": "TCursor a-\u003eSTM(TCursor a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:isEmptyTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the channel is empty.\n\u003c/p\u003e\u003cp\u003eThis should be called on the \u003cem\u003eread\u003c/em\u003e cursor of the channel.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e STM Bool",
        "fct-source": "src/Data-STM-TCursor.html#isEmptyTCursor",
        "fct-type": "function",
        "title": "isEmptyTCursor"
      },
      "index": {
        "description": "Return True if the channel is empty This should be called on the read cursor of the channel",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "isEmptyTCursor",
        "normalized": "TCursor a-\u003eSTM Bool",
        "package": "stm-tlist",
        "partial": "Empty TCursor",
        "signature": "TCursor a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:newTCursorPair",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Construct an empty channel, returning the read cursor (\u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e) and\n write cursor (\u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "STM (TCursor a, TCursor a)",
        "fct-source": "src/Data-STM-TCursor.html#newTCursorPair",
        "fct-type": "function",
        "title": "newTCursorPair"
      },
      "index": {
        "description": "Construct an empty channel returning the read cursor fst and write cursor snd",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "newTCursorPair",
        "normalized": "STM(TCursor a,TCursor a)",
        "package": "stm-tlist",
        "partial": "TCursor Pair",
        "signature": "STM(TCursor a,TCursor a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:newTCursorPairIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003enewCursorPair\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e for the\n rationale.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "IO (TCursor a, TCursor a)",
        "fct-source": "src/Data-STM-TCursor.html#newTCursorPairIO",
        "fct-type": "function",
        "title": "newTCursorPairIO"
      },
      "index": {
        "description": "IO variant of newCursorPair See newTVarIO for the rationale",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "newTCursorPairIO",
        "normalized": "IO(TCursor a,TCursor a)",
        "package": "stm-tlist",
        "partial": "TCursor Pair IO",
        "signature": "IO(TCursor a,TCursor a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:readTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Read the next item and advance the cursor.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the\n channel is currently empty.\n\u003c/p\u003e\u003cp\u003eThis should be called on the \u003cem\u003eread\u003c/em\u003e cursor of the channel.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e STM a",
        "fct-source": "src/Data-STM-TCursor.html#readTCursor",
        "fct-type": "function",
        "title": "readTCursor"
      },
      "index": {
        "description": "Read the next item and advance the cursor retry if the channel is currently empty This should be called on the read cursor of the channel",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "readTCursor",
        "normalized": "TCursor a-\u003eSTM a",
        "package": "stm-tlist",
        "partial": "TCursor",
        "signature": "TCursor a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:tryReadTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Like \u003ccode\u003e\u003ca\u003ereadTCursor\u003c/a\u003e\u003c/code\u003e, but return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, rather than \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003eing,\n if the list is currently empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e STM (Maybe a)",
        "fct-source": "src/Data-STM-TCursor.html#tryReadTCursor",
        "fct-type": "function",
        "title": "tryReadTCursor"
      },
      "index": {
        "description": "Like readTCursor but return Nothing rather than retry ing if the list is currently empty",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "tryReadTCursor",
        "normalized": "TCursor a-\u003eSTM(Maybe a)",
        "package": "stm-tlist",
        "partial": "Read TCursor",
        "signature": "TCursor a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:unGetTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Put an item back on the channel, where it will be the next item\n read by \u003ccode\u003e\u003ca\u003ereadTCursor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis should be called on the \u003cem\u003eread\u003c/em\u003e cursor of the channel.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-STM-TCursor.html#unGetTCursor",
        "fct-type": "function",
        "title": "unGetTCursor"
      },
      "index": {
        "description": "Put an item back on the channel where it will be the next item read by readTCursor This should be called on the read cursor of the channel",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "unGetTCursor",
        "normalized": "TCursor a-\u003ea-\u003eSTM()",
        "package": "stm-tlist",
        "partial": "Get TCursor",
        "signature": "TCursor a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TCursor.html#v:writeTCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Append an item and advance the cursor.\n\u003c/p\u003e\u003cp\u003eThis should be called on the \u003cem\u003ewrite\u003c/em\u003e cursor of the channel.  See \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e\n for more details.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TCursor",
        "fct-package": "stm-tlist",
        "fct-signature": "TCursor a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-STM-TCursor.html#writeTCursor",
        "fct-type": "function",
        "title": "writeTCursor"
      },
      "index": {
        "description": "Append an item and advance the cursor This should be called on the write cursor of the channel See append for more details",
        "hierarchy": "Data STM TCursor",
        "module": "Data.STM.TCursor",
        "name": "writeTCursor",
        "normalized": "TCursor a-\u003ea-\u003eSTM()",
        "package": "stm-tlist",
        "partial": "TCursor",
        "signature": "TCursor a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses many names from Prelude, so consider importing it\n qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.STM.TList (TList)\nimport qualified Data.STM.TList as TList\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "module",
        "fct-source": "src/Data-STM-TList.html",
        "fct-type": "module",
        "title": "TList"
      },
      "index": {
        "description": "This module uses many names from Prelude so consider importing it qualified import Data.STM.TList TList import qualified Data.STM.TList as TList",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "TList",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#t:TCell",
      "description": {
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "data",
        "fct-source": "src/Data-STM-TList.html#TCell",
        "fct-type": "data",
        "title": "TCell"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "TCell",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TCell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#t:TList",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e is a mutable linked list node.  A \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e node containing \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e\n is usually called a \"hole\" or \"write end\", and can be \"filled\" using\n \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "type",
        "fct-source": "src/Data-STM-TList.html#TList",
        "fct-type": "type",
        "title": "TList"
      },
      "index": {
        "description": "TList is mutable linked list node TList node containing TNil is usually called hole or write end and can be filled using append",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "TList",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:TCons",
      "description": {
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TCons a !(TList a)",
        "fct-source": "src/Data-STM-TList.html#TCell",
        "fct-type": "function",
        "title": "TCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "TCons",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TCons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:TNil",
      "description": {
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TNil",
        "fct-source": "src/Data-STM-TList.html#TCell",
        "fct-type": "function",
        "title": "TNil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "TNil",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "TNil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Append an item to the list, returning the new write end.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e normally points to a \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e, a \"hole\" into which the next item\n will be written.  However, if it doesn't, \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e will silently overwrite\n the next item.  It is up to the application to ensure that the \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e\n points to a \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e, or that overwriting an item in this case is desirable.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e a -\u003e STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Append an item to the list returning the new write end The TList normally points to TNil hole into which the next item will be written However if it doesn append will silently overwrite the next item It is up to the application to ensure that the TList points to TNil or that overwriting an item in this case is desirable",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "append",
        "normalized": "TList a-\u003ea-\u003eSTM(TList a)",
        "package": "stm-tlist",
        "partial": "",
        "signature": "TList a-\u003ea-\u003eSTM(TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:appendList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Append a list of items, returning the new write end.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e [a] -\u003e STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#appendList",
        "fct-type": "function",
        "title": "appendList"
      },
      "index": {
        "description": "Append list of items returning the new write end",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "appendList",
        "normalized": "TList a-\u003e[a]-\u003eSTM(TList a)",
        "package": "stm-tlist",
        "partial": "List",
        "signature": "TList a-\u003e[a]-\u003eSTM(TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Prepend an item to the list, returning the new beginning of the\n list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "a -\u003e TList a -\u003e STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Prepend an item to the list returning the new beginning of the list",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "cons",
        "normalized": "a-\u003eTList a-\u003eSTM(TList a)",
        "package": "stm-tlist",
        "partial": "",
        "signature": "a-\u003eTList a-\u003eSTM(TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Skip the given number of items.  Return the end of the list if a\n \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e is reached.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "Int -\u003e TList a -\u003e STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Skip the given number of items Return the end of the list if TNil is reached",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "drop",
        "normalized": "Int-\u003eTList a-\u003eSTM(TList a)",
        "package": "stm-tlist",
        "partial": "",
        "signature": "Int-\u003eTList a-\u003eSTM(TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Construct a new, empty \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct new empty TList",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "empty",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:emptyIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e for the rationale.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "IO (TList a)",
        "fct-source": "src/Data-STM-TList.html#emptyIO",
        "fct-type": "function",
        "title": "emptyIO"
      },
      "index": {
        "description": "IO variant of empty See newTVarIO for the rationale",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "emptyIO",
        "normalized": "",
        "package": "stm-tlist",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:end",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Traverse the list, stopping when a \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e is reached.\n\u003c/p\u003e\u003cp\u003eBear in mind that \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003es are mutable.  In particular, the \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e of a\n \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e is not as boring as the end of a pure list (\u003ccode\u003e[]\u003c/code\u003e, a.k.a.\n \"nil\").  It is usually the write end, to which additional items may be\n \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e STM (TList a)",
        "fct-source": "src/Data-STM-TList.html#end",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "Traverse the list stopping when TNil is reached Bear in mind that TList are mutable In particular the end of TList is not as boring as the end of pure list a.k.a nil It is usually the write end to which additional items may be append ed",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "end",
        "normalized": "TList a-\u003eSTM(TList a)",
        "package": "stm-tlist",
        "partial": "",
        "signature": "TList a-\u003eSTM(TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Traverse the list with an accumulator function and initial value.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e TList b -\u003e STM a",
        "fct-source": "src/Data-STM-TList.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Traverse the list with an accumulator function and initial value",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eTList b-\u003eSTM a",
        "package": "stm-tlist",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eTList b-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Convert a pure list to a \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e, returning the head (read end)\n and tail (write end) of the list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "[a] -\u003e STM (TList a, TList a)",
        "fct-source": "src/Data-STM-TList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert pure list to TList returning the head read end and tail write end of the list",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "fromList",
        "normalized": "[a]-\u003eSTM(TList a,TList a)",
        "package": "stm-tlist",
        "partial": "List",
        "signature": "[a]-\u003eSTM(TList a,TList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Traverse the list, returning its length.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e STM Int",
        "fct-source": "src/Data-STM-TList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Traverse the list returning its length",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "length",
        "normalized": "TList a-\u003eSTM Int",
        "package": "stm-tlist",
        "partial": "",
        "signature": "TList a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the list is empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e STM Bool",
        "fct-source": "src/Data-STM-TList.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Return True if the list is empty",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "null",
        "normalized": "TList a-\u003eSTM Bool",
        "package": "stm-tlist",
        "partial": "",
        "signature": "TList a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Traverse a \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e, returning its items as a pure list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "TList a -\u003e STM [a]",
        "fct-source": "src/Data-STM-TList.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Traverse TList returning its items as pure list",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "toList",
        "normalized": "TList a-\u003eSTM[a]",
        "package": "stm-tlist",
        "partial": "List",
        "signature": "TList a-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-tlist/docs/Data-STM-TList.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Get the next item of the list (if available).  Handle \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e (no\n items available) or \u003ccode\u003e\u003ca\u003eTCons\u003c/a\u003e\u003c/code\u003e (next item) using the appropriate continuation.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTList\u003c/a\u003e\u003c/code\u003e argument being at the end means \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e can be partially\n applied in many situations.\n\u003c/p\u003e",
        "fct-module": "Data.STM.TList",
        "fct-package": "stm-tlist",
        "fct-signature": "STM b-\u003e (a -\u003e TList a -\u003e STM b)-\u003e TList a-\u003e STM b",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Get the next item of the list if available Handle TNil no items available or TCons next item using the appropriate continuation The TList argument being at the end means uncons can be partially applied in many situations",
        "hierarchy": "Data STM TList",
        "module": "Data.STM.TList",
        "name": "uncons",
        "normalized": "STM a-\u003e(b-\u003eTList b-\u003eSTM a)-\u003eTList b-\u003eSTM a",
        "package": "stm-tlist",
        "partial": "",
        "signature": "STM b-\u003e(a-\u003eTList a-\u003eSTM b)-\u003eTList a-\u003eSTM b"
      }
    }
  }
]