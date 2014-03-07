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
        "word": "procrastinating-structure"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA procrastinating queue. You can populate the back of the queue in\n  IO and read the front of the queue in pure code. The front of an\n  empty, un\u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed queue is \u003ccode\u003e_|_\u003c/code\u003e. I think it fits the definition of\n  referentially transparent, but it's possible to do some really\n  stupid things with one of these \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es. If you read the source,\n  this serves as an example of using \u003ca\u003eData.PVar.Structure\u003c/a\u003e. Here's a\n  simple example of using a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding (sum)\n import Data.Foldable (sum)\n\n main :: IO ()\n main = do\n   (back, front) \u003c- newQueue  -- Create a new queue.\n   mapM_ (push back) [0..9]   -- Push some values to the back of the queue.\n   print $ peek front         -- Safe to do since we know something has been written\n   close back                 -- Close the queue.\n   print $ sum front          -- Safe to do since the queue is finalized\n\u003c/pre\u003e\u003cp\u003eThe output of the above program is:\n\u003c/p\u003e\u003cpre\u003e Just 0\n 45\n\u003c/pre\u003e\u003cp\u003eIs this useful? Who knows? It was a fun exercise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PVar.Queue",
          "name": "Queue",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Queue.html",
          "type": "module"
        },
        "index": {
          "description": "procrastinating queue You can populate the back of the queue in IO and read the front of the queue in pure code The front of an empty un close queue is think it fits the definition of referentially transparent but it possible to do some really stupid things with one of these Queue If you read the source this serves as an example of using Data.PVar.Structure Here simple example of using Queue import Prelude hiding sum import Data.Foldable sum main IO main do back front newQueue Create new queue mapM push back Push some values to the back of the queue print peek front Safe to do since we know something has been written close back Close the queue print sum front Safe to do since the queue is finalized The output of the above program is Just Is this useful Who knows It was fun exercise",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "Queue",
          "package": "procrastinating-structure",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure queue.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "Queue",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "description": "pure queue",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "Queue",
          "package": "procrastinating-structure",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe impure back of a pure queue.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "QueueBack",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Queue.html#QueueBack",
          "type": "data"
        },
        "index": {
          "description": "The impure back of pure queue",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "QueueBack",
          "package": "procrastinating-structure",
          "partial": "Queue Back",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#t:QueueBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e. This finalizes the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and means that it\n   is safe to evaluate all the way to the end.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "close",
          "package": "procrastinating-structure",
          "signature": "QueueBack a -\u003e IO ()",
          "source": "src/Data-PVar-Queue.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close QueueBack This finalizes the Queue and means that it is safe to evaluate all the way to the end",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "close",
          "normalized": "QueueBack a-\u003eIO()",
          "package": "procrastinating-structure",
          "signature": "QueueBack a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate both ends of a procrastinating queue.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "newQueue",
          "package": "procrastinating-structure",
          "signature": "IO (QueueBack a, Queue a)",
          "source": "src/Data-PVar-Queue.html#newQueue",
          "type": "function"
        },
        "index": {
          "description": "Create both ends of procrastinating queue",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "newQueue",
          "normalized": "IO(QueueBack a,Queue a)",
          "package": "procrastinating-structure",
          "partial": "Queue",
          "signature": "IO(QueueBack a,Queue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value at the front of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if we\n   are at the end of a \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "peek",
          "package": "procrastinating-structure",
          "signature": "Queue a -\u003e Maybe a",
          "source": "src/Data-PVar-Queue.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Get the value at the front of Queue Returns False if we are at the end of close Queue",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "peek",
          "normalized": "Queue a-\u003eMaybe a",
          "package": "procrastinating-structure",
          "signature": "Queue a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value at the front of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and return the remainder\n   of the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if we are at the end of a\n   \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003ed \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "pop",
          "package": "procrastinating-structure",
          "signature": "Queue a -\u003e Maybe (Queue a, a)",
          "source": "src/Data-PVar-Queue.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Get the value at the front of Queue and return the remainder of the Queue Returns False if we are at the end of close Queue",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "pop",
          "normalized": "Queue a-\u003eMaybe(Queue a,a)",
          "package": "procrastinating-structure",
          "signature": "Queue a-\u003eMaybe(Queue a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush to the back of an open \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eQueueBack\u003c/a\u003e\u003c/code\u003e has\n   been closed, returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PVar.Queue",
          "name": "push",
          "package": "procrastinating-structure",
          "signature": "QueueBack a -\u003e a -\u003e IO Bool",
          "source": "src/Data-PVar-Queue.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push to the back of an open QueueBack If the QueueBack has been closed returns False",
          "hierarchy": "Data PVar Queue",
          "module": "Data.PVar.Queue",
          "name": "push",
          "normalized": "QueueBack a-\u003ea-\u003eIO Bool",
          "package": "procrastinating-structure",
          "signature": "QueueBack a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Queue.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e type class, enabling you to\n  create a pure data structure, which is available immediately, and\n  then gradually fill it in using the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad. This means that you\n  can go ahead and start using the structure before it is fully\n  defined. If a part of the structure is evaluated before it has been\n  written then that part is treated as \u003ccode\u003e_|_\u003c/code\u003e. This is technically more\n  pure than values from \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e. Evaluating the\n  structure, even before it is defined, doesn't perform any IO. All\n  the IO happens in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eHere is an example of creating a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es and then writing\n  each level of it step by step. The returned result is \u003ccode\u003e[5]\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e foo :: IO [Int]\n foo = do\n\n   -- Create the pure list and the handle for writing to it.\n   (pxs, xs) \u003c- newStruc\n\n   -- Write the cons constructor to the list. This gives us handles\n   -- for writing the head and tail of the list.\n   Just (h, t) \u003c- writeStruc pxs ConsC\n\n   -- Write the head of the list.\n   writeStruc h 5\n\n   -- Write the tail of the list. This finishes it.\n   writeStruc t NilC\n\n   -- Get rid of the Value wrapper on the list's value and return\n   -- the resulting list.\n   return $ map getValue xs\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.PVar.Structure",
          "name": "Structure",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Structure type class enabling you to create pure data structure which is available immediately and then gradually fill it in using the IO monad This means that you can go ahead and start using the structure before it is fully defined If part of the structure is evaluated before it has been written then that part is treated as This is technically more pure than values from unsafeInterleaveIO Evaluating the structure even before it is defined doesn perform any IO All the IO happens in the IO monad Here is an example of creating list of Int and then writing each level of it step by step The returned result is foo IO Int foo do Create the pure list and the handle for writing to it pxs xs newStruc Write the cons constructor to the list This gives us handles for writing the head and tail of the list Just writeStruc pxs ConsC Write the head of the list writeStruc Write the tail of the list This finishes it writeStruc NilC Get rid of the Value wrapper on the list value and return the resulting list return map getValue xs",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "Structure",
          "package": "procrastinating-structure",
          "partial": "Structure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "EitherC",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html#EitherC",
          "type": "data"
        },
        "index": {
          "description": "Constructors for the Either instance",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "EitherC",
          "package": "procrastinating-structure",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:EitherC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for the list instance.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "ListC",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html#ListC",
          "type": "data"
        },
        "index": {
          "description": "Constructors for the list instance",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "ListC",
          "package": "procrastinating-structure",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:ListC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors for the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "MaybeC",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html#MaybeC",
          "type": "data"
        },
        "index": {
          "description": "Constructors for the Maybe instance",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "MaybeC",
          "package": "procrastinating-structure",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:MaybeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure type is one which represents any lazy data\n  structure. With the exception of the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e newtype wrapper, there\n  is little reason to define an instance of \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e for completely\n  strict types. This is because the entire thing must be defined at\n  once anyway, so you might as well just use a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "Structure",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html#Structure",
          "type": "class"
        },
        "index": {
          "description": "structure type is one which represents any lazy data structure With the exception of the Value newtype wrapper there is little reason to define an instance of Structure for completely strict types This is because the entire thing must be defined at once anyway so you might as well just use PVar",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "Structure",
          "package": "procrastinating-structure",
          "partial": "Structure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:Structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat the wrapped value as an atomic structure. This has the same\n   effect as a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e, but allows you to use the \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e\n   interface. This is also necessary for the leaves of most\n   structures.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "Value",
          "package": "procrastinating-structure",
          "source": "src/Data-PVar-Structure.html#Value",
          "type": "newtype"
        },
        "index": {
          "description": "Treat the wrapped value as an atomic structure This has the same effect as PVar but allows you to use the Structure interface This is also necessary for the leaves of most structures",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "Value",
          "package": "procrastinating-structure",
          "partial": "Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "ConsC",
          "package": "procrastinating-structure",
          "signature": "ConsC",
          "source": "src/Data-PVar-Structure.html#ListC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "ConsC",
          "package": "procrastinating-structure",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:ConsC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "JustC",
          "package": "procrastinating-structure",
          "signature": "JustC",
          "source": "src/Data-PVar-Structure.html#MaybeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "JustC",
          "package": "procrastinating-structure",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:JustC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "LeftC",
          "package": "procrastinating-structure",
          "signature": "LeftC",
          "source": "src/Data-PVar-Structure.html#EitherC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "LeftC",
          "package": "procrastinating-structure",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:LeftC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "NilC",
          "package": "procrastinating-structure",
          "signature": "NilC",
          "source": "src/Data-PVar-Structure.html#ListC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "NilC",
          "package": "procrastinating-structure",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:NilC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "NothingC",
          "package": "procrastinating-structure",
          "signature": "NothingC",
          "source": "src/Data-PVar-Structure.html#MaybeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "NothingC",
          "package": "procrastinating-structure",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:NothingC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "RightC",
          "package": "procrastinating-structure",
          "signature": "RightC",
          "source": "src/Data-PVar-Structure.html#EitherC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "RightC",
          "package": "procrastinating-structure",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:RightC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "Value",
          "package": "procrastinating-structure",
          "signature": "Value",
          "source": "src/Data-PVar-Structure.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "Value",
          "package": "procrastinating-structure",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PVar.Structure",
          "name": "getValue",
          "package": "procrastinating-structure",
          "signature": "a",
          "source": "src/Data-PVar-Structure.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "getValue",
          "package": "procrastinating-structure",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new structure and a handle for writing to it.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "newStruc",
          "package": "procrastinating-structure",
          "signature": "IO (PStructure a, a)",
          "source": "src/Data-PVar-Structure.html#newStruc",
          "type": "method"
        },
        "index": {
          "description": "Create new structure and handle for writing to it",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "newStruc",
          "normalized": "IO(PStructure a,a)",
          "package": "procrastinating-structure",
          "partial": "Struc",
          "signature": "IO(PStructure a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:newStruc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the constructor for a structure with only one possible\n   structure, assuming that the \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e type for that type is\n   ().\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "writeSoleCon",
          "package": "procrastinating-structure",
          "signature": "PStructure a -\u003e IO (Inner a)",
          "source": "src/Data-PVar-Structure.html#writeSoleCon",
          "type": "function"
        },
        "index": {
          "description": "Write the constructor for structure with only one possible structure assuming that the Constructor type for that type is",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "writeSoleCon",
          "normalized": "PStructure a-\u003eIO(Inner a)",
          "package": "procrastinating-structure",
          "partial": "Sole Con",
          "signature": "PStructure a-\u003eIO(Inner a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:writeSoleCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the specified constructor to the given handle and\n   return whatever other handles are necessary to write deeper\n   levels of the structure.\n\u003c/p\u003e",
          "module": "Data.PVar.Structure",
          "name": "writeStruc",
          "package": "procrastinating-structure",
          "signature": "PStructure a -\u003e Constructor a -\u003e IO (Inner a)",
          "source": "src/Data-PVar-Structure.html#writeStruc",
          "type": "method"
        },
        "index": {
          "description": "Write the specified constructor to the given handle and return whatever other handles are necessary to write deeper levels of the structure",
          "hierarchy": "Data PVar Structure",
          "module": "Data.PVar.Structure",
          "name": "writeStruc",
          "normalized": "PStructure a-\u003eConstructor a-\u003eIO(Inner a)",
          "package": "procrastinating-structure",
          "partial": "Struc",
          "signature": "PStructure a-\u003eConstructor a-\u003eIO(Inner a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-structure/docs/Data-PVar-Structure.html#v:writeStruc"
      }
    }
  ]
]