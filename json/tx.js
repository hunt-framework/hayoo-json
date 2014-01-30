[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#",
      "description": {
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "module",
        "fct-source": "src/TX.html",
        "fct-type": "module",
        "title": "TX"
      },
      "index": {
        "description": "",
        "hierarchy": "TX",
        "module": "TX",
        "name": "TX",
        "normalized": "",
        "package": "tx",
        "partial": "TX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type wrapping any kind of user data for use in the \u003ccode\u003e\u003ca\u003eTX\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "data",
        "fct-source": "src/TX.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "An opaque type wrapping any kind of user data for use in the TX monad",
        "hierarchy": "TX",
        "module": "TX",
        "name": "Database",
        "normalized": "",
        "package": "tx",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#t:Persistable",
      "description": {
        "fct-descr": "\u003cp\u003eThe type family at the heart of TX.\n\u003c/p\u003e\u003cp\u003eYou make any data type you want to use with the TX monad an instance of\n \u003ccode\u003e\u003ca\u003ePersistable\u003c/a\u003e\u003c/code\u003e and define \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e constructors for each of the methods\n acting on this type that you want to be able to record during a transaction.\n Then you implement \u003ccode\u003e\u003ca\u003ereplay\u003c/a\u003e\u003c/code\u003e in such a way that for each of the Update\n constructors, the appropiate method is called.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e data MyDB = MyDB { posts :: TVar [String] }\n\n instance Persistable MyDB where\n     data Update MyDB = CreatePost String\n                      | ModifyPost Int String\n\n     replay (CreatePost p)   = void $ createPost p\n     replay (ModifyPost n p) = modifyPost n p\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ecreatePost\u003c/code\u003e and \u003ccode\u003emodifyPost\u003c/code\u003e are functions in the TX monad:\n\u003c/p\u003e\u003cpre\u003e createPost :: String -\u003e TX MyDB Int\n createPost p = do\n     record (CreatePost p)\n     (MyDB posts) \u003c- getData\n     liftSTM $ do\n         ps \u003c- readTVar posts\n         writeTVar posts (ps ++ [p])\n         return $ length ps\n\n modifyPost :: Int -\u003e String -\u003e TX MyDB ()\n modifyPost n p = do\n     record (ModifyPost n p)\n     (MyDB posts) \u003c- getData\n     liftSTM $ do\n         ps \u003c- readTVar posts\n         let (xs,ys) = splitAt n ps\n             ps'     = xs ++ p : (tail ys)\n         writeTVar posts ps'\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003eUpdate\u003c/code\u003e also needs to be an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e. Currently,\n it's not possible to derive SafeCopy instances for associated types\n automatically, so you have to do it by hand:\n\u003c/p\u003e\u003cpre\u003e instance SafeCopy (Update MyDB) where\n     putCopy (CreatePost p)   = contain $ putWord8 0 \u003e\u003e safePut p\n     putCopy (ModifyPost n p) = contain $ putWord8 1 \u003e\u003e safePut n \u003e\u003e safePut p\n     getCopy = contain $ do\n         tag \u003c- getWord8\n         case tag of\n             0 -\u003e CreatePost \u003c$\u003e safeGet\n             1 -\u003e ModifyPost \u003c$\u003e safeGet \u003c*\u003e safeGet\n             _ -\u003e fail $ \"unknown tag: \" ++ show tag\n\u003c/pre\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "class",
        "fct-source": "src/TX.html#Persistable",
        "fct-type": "class",
        "title": "Persistable"
      },
      "index": {
        "description": "The type family at the heart of TX You make any data type you want to use with the TX monad an instance of Persistable and define Update constructors for each of the methods acting on this type that you want to be able to record during transaction Then you implement replay in such way that for each of the Update constructors the appropiate method is called Example data MyDB MyDB posts TVar String instance Persistable MyDB where data Update MyDB CreatePost String ModifyPost Int String replay CreatePost void createPost replay ModifyPost modifyPost where createPost and modifyPost are functions in the TX monad createPost String TX MyDB Int createPost do record CreatePost MyDB posts getData liftSTM do ps readTVar posts writeTVar posts ps return length ps modifyPost Int String TX MyDB modifyPost do record ModifyPost MyDB posts getData liftSTM do ps readTVar posts let xs ys splitAt ps ps xs tail ys writeTVar posts ps Note that Update also needs to be an instance of SafeCopy Currently it not possible to derive SafeCopy instances for associated types automatically so you have to do it by hand instance SafeCopy Update MyDB where putCopy CreatePost contain putWord8 safePut putCopy ModifyPost contain putWord8 safePut safePut getCopy contain do tag getWord8 case tag of CreatePost safeGet ModifyPost safeGet safeGet fail unknown tag show tag",
        "hierarchy": "TX",
        "module": "TX",
        "name": "Persistable",
        "normalized": "",
        "package": "tx",
        "partial": "Persistable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#t:TX",
      "description": {
        "fct-descr": "\u003cp\u003eA thin wrapper around STM. The main feature is the ability to \u003ccode\u003e\u003ca\u003erecord\u003c/a\u003e\u003c/code\u003e\n updates of the underlying data.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "data",
        "fct-source": "src/TX.html#TX",
        "fct-type": "data",
        "title": "TX"
      },
      "index": {
        "description": "thin wrapper around STM The main feature is the ability to record updates of the underlying data",
        "hierarchy": "TX",
        "module": "TX",
        "name": "TX",
        "normalized": "",
        "package": "tx",
        "partial": "TX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cpre\u003eact \u003c?\u003e err = maybe (throwTX err) return =\u003c\u003c act\u003c/pre\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "TX d (Maybe a) -\u003e e -\u003e TX d a",
        "fct-source": "src/TX.html#%3C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "act err maybe throwTX err return act",
        "hierarchy": "TX",
        "module": "TX",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "TX a(Maybe b)-\u003ec-\u003eTX a b",
        "package": "tx",
        "partial": "",
        "signature": "TX d(Maybe a)-\u003ee-\u003eTX d a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:closeDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eClose a database. Blocks until all pending recordings been serialized.\n Using a database after it has been closed is an error.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "Database d -\u003e IO ()",
        "fct-source": "src/TX.html#closeDatabase",
        "fct-type": "function",
        "title": "closeDatabase"
      },
      "index": {
        "description": "Close database Blocks until all pending recordings been serialized Using database after it has been closed is an error",
        "hierarchy": "TX",
        "module": "TX",
        "name": "closeDatabase",
        "normalized": "Database a-\u003eIO()",
        "package": "tx",
        "partial": "Database",
        "signature": "Database d-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:getData",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user data from the database.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "TX d d",
        "fct-source": "src/TX.html#getData",
        "fct-type": "function",
        "title": "getData"
      },
      "index": {
        "description": "Get the user data from the database",
        "hierarchy": "TX",
        "module": "TX",
        "name": "getData",
        "normalized": "",
        "package": "tx",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:liftSTM",
      "description": {
        "fct-descr": "\u003cp\u003eRun STM actions inside TX.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "STM a -\u003e TX d a",
        "fct-source": "src/TX.html#liftSTM",
        "fct-type": "function",
        "title": "liftSTM"
      },
      "index": {
        "description": "Run STM actions inside TX",
        "hierarchy": "TX",
        "module": "TX",
        "name": "liftSTM",
        "normalized": "STM a-\u003eTX b a",
        "package": "tx",
        "partial": "STM",
        "signature": "STM a-\u003eTX d a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:openDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eOpens the database at the given path or creates a new one.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "FilePath-\u003e d-\u003e IO (Database d)",
        "fct-type": "function",
        "title": "openDatabase"
      },
      "index": {
        "description": "Opens the database at the given path or creates new one",
        "hierarchy": "TX",
        "module": "TX",
        "name": "openDatabase",
        "normalized": "FilePath-\u003ea-\u003eIO(Database a)",
        "package": "tx",
        "partial": "Database",
        "signature": "FilePath-\u003ed-\u003eIO(Database d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:persistently",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a series of TX actions persistently.\n\u003c/p\u003e\u003cp\u003eNote that there is no guarantee that all recorded updates have been serialized\n when the functions returns. As such, durability is only partially guaranteed.\n\u003c/p\u003e\u003cp\u003eSince this calls \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e on the underlying STM actions,\n the same caveats apply (e.g. you can't use it inside \u003ccode\u003eunsafePerformIO\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "Database d -\u003e TX d a -\u003e IO a",
        "fct-source": "src/TX.html#persistently",
        "fct-type": "function",
        "title": "persistently"
      },
      "index": {
        "description": "Perform series of TX actions persistently Note that there is no guarantee that all recorded updates have been serialized when the functions returns As such durability is only partially guaranteed Since this calls atomically on the underlying STM actions the same caveats apply e.g you can use it inside unsafePerformIO",
        "hierarchy": "TX",
        "module": "TX",
        "name": "persistently",
        "normalized": "Database a-\u003eTX a b-\u003eIO b",
        "package": "tx",
        "partial": "",
        "signature": "Database d-\u003eTX d a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:record",
      "description": {
        "fct-descr": "\u003cp\u003eRecord an \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e to be serialized to disk when the transaction commits.\n If the transaction retries, the update is still only recorded once.\n If the transaction aborts, the update is not recorded at all.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "Update d -\u003e TX d ()",
        "fct-source": "src/TX.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "Record an Update to be serialized to disk when the transaction commits If the transaction retries the update is still only recorded once If the transaction aborts the update is not recorded at all",
        "hierarchy": "TX",
        "module": "TX",
        "name": "record",
        "normalized": "Update a-\u003eTX a()",
        "package": "tx",
        "partial": "",
        "signature": "Update d-\u003eTX d()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:replay",
      "description": {
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "Update d -\u003e TX d ()",
        "fct-source": "src/TX.html#replay",
        "fct-type": "method",
        "title": "replay"
      },
      "index": {
        "description": "",
        "hierarchy": "TX",
        "module": "TX",
        "name": "replay",
        "normalized": "Update a-\u003eTX a()",
        "package": "tx",
        "partial": "",
        "signature": "Update d-\u003eTX d()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:throwTX",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception in TX, which will abort the transaction.\n\u003c/p\u003e\u003cpre\u003ethrowTX = liftSTM . throwSTM\u003c/pre\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "e -\u003e TX d a",
        "fct-source": "src/TX.html#throwTX",
        "fct-type": "function",
        "title": "throwTX"
      },
      "index": {
        "description": "Throw an exception in TX which will abort the transaction throwTX liftSTM throwSTM",
        "hierarchy": "TX",
        "module": "TX",
        "name": "throwTX",
        "normalized": "a-\u003eTX b c",
        "package": "tx",
        "partial": "TX",
        "signature": "e-\u003eTX d a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:unsafeIOToTX",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely performs IO in the TX monad. Highly dangerous!\n The same caveats as with \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e apply.\n\u003c/p\u003e\u003cpre\u003eunsafeIOToTX = liftSTM . unsafeIOToSTM\u003c/pre\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "IO a -\u003e TX d a",
        "fct-source": "src/TX.html#unsafeIOToTX",
        "fct-type": "function",
        "title": "unsafeIOToTX"
      },
      "index": {
        "description": "Unsafely performs IO in the TX monad Highly dangerous The same caveats as with unsafeIOToSTM apply unsafeIOToTX liftSTM unsafeIOToSTM",
        "hierarchy": "TX",
        "module": "TX",
        "name": "unsafeIOToTX",
        "normalized": "IO a-\u003eTX b a",
        "package": "tx",
        "partial": "IOTo TX",
        "signature": "IO a-\u003eTX d a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tx/docs/TX.html#v:withUserData",
      "description": {
        "fct-descr": "\u003cp\u003eOperate non-persistently on the user data contained in the database.\n\u003c/p\u003e",
        "fct-module": "TX",
        "fct-package": "tx",
        "fct-signature": "Database d -\u003e (d -\u003e a) -\u003e a",
        "fct-source": "src/TX.html#withUserData",
        "fct-type": "function",
        "title": "withUserData"
      },
      "index": {
        "description": "Operate non-persistently on the user data contained in the database",
        "hierarchy": "TX",
        "module": "TX",
        "name": "withUserData",
        "normalized": "Database a-\u003e(a-\u003eb)-\u003eb",
        "package": "tx",
        "partial": "User Data",
        "signature": "Database d-\u003e(d-\u003ea)-\u003ea"
      }
    }
  }
]