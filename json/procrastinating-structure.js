[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA procrastinating queue. You can populate the back of the queue in\n  IO and read the front of the queue in pure code. The front of an\n  empty, un\u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed queue is \u003ccode\u003e_|_\u003c/code\u003e. I think it fits the definition of\n  referentially transparent, but it's possible to do some really\n  stupid things with one of these \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es. If you read the source,\n  this serves as an example of using \u003ca\u003eData.PVar.Structure\u003c/a\u003e. Here's a\n  simple example of using a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding (sum)\n import Data.Foldable (sum)\n\n main :: IO ()\n main = do\n   (back, front) \u003c- newQueue  -- Create a new queue.\n   mapM_ (push back) [0..9]   -- Push some values to the back of the queue.\n   print $ peek front         -- Safe to do since we know something has been written\n   close back                 -- Close the queue.\n   print $ sum front          -- Safe to do since the queue is finalized\n\u003c/pre\u003e\u003cp\u003eThe output of the above program is:\n\u003c/p\u003e\u003cpre\u003e Just 0\n 45\n\u003c/pre\u003e\u003cp\u003eIs this useful? Who knows? It was a fun exercise.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "module",
        "fct-source": "src/Data-PVar-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "procrastinating queue You can populate the back of the queue in IO and read the front of the queue in pure code The front of an empty un close queue is think it fits the definition of referentially transparent but it possible to do some really stupid things with one of these Queue If you read the source this serves as an example of using Data.PVar.Structure Here simple example of using Queue import Prelude hiding sum import Data.Foldable sum main IO main do back front newQueue Create new queue mapM push back Push some values to the back of the queue print peek front Safe to do since we know something has been written close back Close the queue print sum front Safe to do since the queue is finalized The output of the above program is Just Is this useful Who knows It was fun exercise",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#t:Queue",
      "description": {
        "fct-descr": "\u003cp\u003eA pure queue.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "data",
        "fct-source": "src/Data-PVar-Queue.html#Queue",
        "fct-type": "data",
        "title": "Queue"
      },
      "index": {
        "description": "pure queue",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#t:QueueBack",
      "description": {
        "fct-descr": "\u003cp\u003eThe impure back of a pure queue.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "data",
        "fct-source": "src/Data-PVar-Queue.html#QueueBack",
        "fct-type": "data",
        "title": "QueueBack"
      },
      "index": {
        "description": "The impure back of pure queue",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "QueueBack",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Queue Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e. This finalizes the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and means that it\n   is safe to evaluate all the way to the end.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "QueueBack a -\u003e IO ()",
        "fct-source": "src/Data-PVar-Queue.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close QueueBack This finalizes the Queue and means that it is safe to evaluate all the way to the end",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "close",
        "normalized": "QueueBack a-\u003eIO()",
        "package": "procrastinating-structure",
        "partial": "",
        "signature": "QueueBack a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:newQueue",
      "description": {
        "fct-descr": "\u003cp\u003eCreate both ends of a procrastinating queue.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "IO (QueueBack a, Queue a)",
        "fct-source": "src/Data-PVar-Queue.html#newQueue",
        "fct-type": "function",
        "title": "newQueue"
      },
      "index": {
        "description": "Create both ends of procrastinating queue",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "newQueue",
        "normalized": "IO(QueueBack a,Queue a)",
        "package": "procrastinating-structure",
        "partial": "Queue",
        "signature": "IO(QueueBack a,Queue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value at the front of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if we\n   are at the end of a \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "Queue a -\u003e Maybe a",
        "fct-source": "src/Data-PVar-Queue.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Get the value at the front of Queue Returns False if we are at the end of close Queue",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "peek",
        "normalized": "Queue a-\u003eMaybe a",
        "package": "procrastinating-structure",
        "partial": "",
        "signature": "Queue a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value at the front of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and return the remainder\n   of the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if we are at the end of a\n   \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "Queue a -\u003e Maybe (Queue a, a)",
        "fct-source": "src/Data-PVar-Queue.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Get the value at the front of Queue and return the remainder of the Queue Returns False if we are at the end of close Queue",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "pop",
        "normalized": "Queue a-\u003eMaybe(Queue a,a)",
        "package": "procrastinating-structure",
        "partial": "",
        "signature": "Queue a-\u003eMaybe(Queue a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush to the back of an open \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e has\n   been closed, returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Queue",
        "fct-package": "procrastinating-structure",
        "fct-signature": "QueueBack a -\u003e a -\u003e IO Bool",
        "fct-source": "src/Data-PVar-Queue.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push to the back of an open QueueBack If the QueueBack has been closed returns False",
        "hierarchy": "Data PVar Queue",
        "module": "Data.PVar.Queue",
        "name": "push",
        "normalized": "QueueBack a-\u003ea-\u003eIO Bool",
        "package": "procrastinating-structure",
        "partial": "",
        "signature": "QueueBack a-\u003ea-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e type class, enabling you to\n  create a pure data structure, which is available immediately, and\n  then gradually fill it in using the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad. This means that you\n  can go ahead and start using the structure before it is fully\n  defined. If a part of the structure is evaluated before it has been\n  written then that part is treated as \u003ccode\u003e_|_\u003c/code\u003e. This is technically more\n  pure than values from \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e. Evaluating the\n  structure, even before it is defined, doesn't perform any IO. All\n  the IO happens in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eHere is an example of creating a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es and then writing\n  each level of it step by step. The returned result is \u003ccode\u003e[5]\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e foo :: IO [Int]\n foo = do\n\n   -- Create the pure list and the handle for writing to it.\n   (pxs, xs) \u003c- newStruc\n\n   -- Write the cons constructor to the list. This gives us handles\n   -- for writing the head and tail of the list.\n   Just (h, t) \u003c- writeStruc pxs ConsC\n\n   -- Write the head of the list.\n   writeStruc h 5\n\n   -- Write the tail of the list. This finishes it.\n   writeStruc t NilC\n\n   -- Get rid of the Value wrapper on the list's value and return\n   -- the resulting list.\n   return $ map getValue xs\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "module",
        "fct-source": "src/Data-PVar-Structure.html",
        "fct-type": "module",
        "title": "Structure"
      },
      "index": {
        "description": "This module provides the Structure type class enabling you to create pure data structure which is available immediately and then gradually fill it in using the IO monad This means that you can go ahead and start using the structure before it is fully defined If part of the structure is evaluated before it has been written then that part is treated as This is technically more pure than values from unsafeInterleaveIO Evaluating the structure even before it is defined doesn perform any IO All the IO happens in the IO monad Here is an example of creating list of Int and then writing each level of it step by step The returned result is foo IO Int foo do Create the pure list and the handle for writing to it pxs xs newStruc Write the cons constructor to the list This gives us handles for writing the head and tail of the list Just writeStruc pxs ConsC Write the head of the list writeStruc Write the tail of the list This finishes it writeStruc NilC Get rid of the Value wrapper on the list value and return the resulting list return map getValue xs",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "Structure",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:EitherC",
      "description": {
        "fct-descr": "\u003cp\u003eConstructors for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "data",
        "fct-source": "src/Data-PVar-Structure.html#EitherC",
        "fct-type": "data",
        "title": "EitherC"
      },
      "index": {
        "description": "Constructors for the Either instance",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "EitherC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:ListC",
      "description": {
        "fct-descr": "\u003cp\u003eConstructors for the list instance.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "data",
        "fct-source": "src/Data-PVar-Structure.html#ListC",
        "fct-type": "data",
        "title": "ListC"
      },
      "index": {
        "description": "Constructors for the list instance",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "ListC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:MaybeC",
      "description": {
        "fct-descr": "\u003cp\u003eConstructors for the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "data",
        "fct-source": "src/Data-PVar-Structure.html#MaybeC",
        "fct-type": "data",
        "title": "MaybeC"
      },
      "index": {
        "description": "Constructors for the Maybe instance",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "MaybeC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:Structure",
      "description": {
        "fct-descr": "\u003cp\u003eA structure type is one which represents any lazy data\n  structure. With the exception of the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e newtype wrapper, there\n  is little reason to define an instance of \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e for completely\n  strict types. This is because the entire thing must be defined at\n  once anyway, so you might as well just use a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "class",
        "fct-source": "src/Data-PVar-Structure.html#Structure",
        "fct-type": "class",
        "title": "Structure"
      },
      "index": {
        "description": "structure type is one which represents any lazy data structure With the exception of the Value newtype wrapper there is little reason to define an instance of Structure for completely strict types This is because the entire thing must be defined at once anyway so you might as well just use PVar",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "Structure",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eTreat the wrapped value as an atomic structure. This has the same\n   effect as a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e, but allows you to use the \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e\n   interface. This is also necessary for the leaves of most\n   structures.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PVar-Structure.html#Value",
        "fct-type": "newtype",
        "title": "Value"
      },
      "index": {
        "description": "Treat the wrapped value as an atomic structure This has the same effect as PVar but allows you to use the Structure interface This is also necessary for the leaves of most structures",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "Value",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:ConsC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "ConsC",
        "fct-source": "src/Data-PVar-Structure.html#ListC",
        "fct-type": "function",
        "title": "ConsC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "ConsC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:JustC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "JustC",
        "fct-source": "src/Data-PVar-Structure.html#MaybeC",
        "fct-type": "function",
        "title": "JustC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "JustC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:LeftC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "LeftC",
        "fct-source": "src/Data-PVar-Structure.html#EitherC",
        "fct-type": "function",
        "title": "LeftC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "LeftC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:NilC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "NilC",
        "fct-source": "src/Data-PVar-Structure.html#ListC",
        "fct-type": "function",
        "title": "NilC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "NilC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:NothingC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "NothingC",
        "fct-source": "src/Data-PVar-Structure.html#MaybeC",
        "fct-type": "function",
        "title": "NothingC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "NothingC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:RightC",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "RightC",
        "fct-source": "src/Data-PVar-Structure.html#EitherC",
        "fct-type": "function",
        "title": "RightC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "RightC",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:Value",
      "description": {
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "Value",
        "fct-source": "src/Data-PVar-Structure.html#Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "Value",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:getValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "a",
        "fct-source": "src/Data-PVar-Structure.html#Value",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "getValue",
        "normalized": "",
        "package": "procrastinating-structure",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:newStruc",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new structure and a handle for writing to it.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "IO (PStructure a, a)",
        "fct-source": "src/Data-PVar-Structure.html#newStruc",
        "fct-type": "method",
        "title": "newStruc"
      },
      "index": {
        "description": "Create new structure and handle for writing to it",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "newStruc",
        "normalized": "IO(PStructure a,a)",
        "package": "procrastinating-structure",
        "partial": "Struc",
        "signature": "IO(PStructure a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:writeSoleCon",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the constructor for a structure with only one possible\n   structure, assuming that the \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e type for that type is\n   ().\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "PStructure a -\u003e IO (Inner a)",
        "fct-source": "src/Data-PVar-Structure.html#writeSoleCon",
        "fct-type": "function",
        "title": "writeSoleCon"
      },
      "index": {
        "description": "Write the constructor for structure with only one possible structure assuming that the Constructor type for that type is",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "writeSoleCon",
        "normalized": "PStructure a-\u003eIO(Inner a)",
        "package": "procrastinating-structure",
        "partial": "Sole Con",
        "signature": "PStructure a-\u003eIO(Inner a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:writeStruc",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the specified constructor to the given handle and\n   return whatever other handles are necessary to write deeper\n   levels of the structure.\n\u003c/p\u003e",
        "fct-module": "Data.PVar.Structure",
        "fct-package": "procrastinating-structure",
        "fct-signature": "PStructure a -\u003e Constructor a -\u003e IO (Inner a)",
        "fct-source": "src/Data-PVar-Structure.html#writeStruc",
        "fct-type": "method",
        "title": "writeStruc"
      },
      "index": {
        "description": "Write the specified constructor to the given handle and return whatever other handles are necessary to write deeper levels of the structure",
        "hierarchy": "Data PVar Structure",
        "module": "Data.PVar.Structure",
        "name": "writeStruc",
        "normalized": "PStructure a-\u003eConstructor a-\u003eIO(Inner a)",
        "package": "procrastinating-structure",
        "partial": "Struc",
        "signature": "PStructure a-\u003eConstructor a-\u003eIO(Inner a)"
      }
    }
  }
]