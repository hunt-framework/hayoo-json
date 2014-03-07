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
        "word": "abstract-deque"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract, parameterizable interface for queues.  \n\u003c/p\u003e\u003cp\u003eThis interface includes a non-associated type family for Deques\n   plus separate type classes encapsulating the Deque operations.\n   That is, we separate type selection (type family) from function overloading\n   (vanilla type classes).\n\u003c/p\u003e\u003cp\u003eThis design strives to hide the extra phantom-type parameters from\n   the Class constraints and therefore from the type signatures of\n   client code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Class",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html",
          "type": "module"
        },
        "index": {
          "description": "An abstract parameterizable interface for queues This interface includes non-associated type family for Deques plus separate type classes encapsulating the Deque operations That is we separate type selection type family from function overloading vanilla type classes This design strives to hide the extra phantom-type parameters from the Class constraints and therefore from the type signatures of client code",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Class",
          "package": "abstract-deque",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue has bounded capacity.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Bound",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Bound",
          "type": "data"
        },
        "index": {
          "description": "The queue has bounded capacity",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Bound",
          "package": "abstract-deque",
          "partial": "Bound",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "BoundedL",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#BoundedL",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "BoundedL",
          "package": "abstract-deque",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:BoundedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "BoundedR",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#BoundedR",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "BoundedR",
          "package": "abstract-deque",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:BoundedR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent deque.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "ConcDeque",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#ConcDeque",
          "type": "type"
        },
        "index": {
          "description": "concurrent deque",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "ConcDeque",
          "package": "abstract-deque",
          "partial": "Conc Deque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:ConcDeque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent queue.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "ConcQueue",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#ConcQueue",
          "type": "type"
        },
        "index": {
          "description": "concurrent queue",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "ConcQueue",
          "package": "abstract-deque",
          "partial": "Conc Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:ConcQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "D",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "D",
          "package": "abstract-deque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA family of Deques implementations.  A concrete Deque implementation\n is selected based on the (phantom) type parameters, which encode\n several choices.\n\u003c/p\u003e\u003cp\u003eFor example, a work stealing deque is threadsafe only on one end and\n supports push/pop on one end (and pop-only) on the other:\n\u003c/p\u003e\u003cpre\u003e\u003e (Deque NT T  D S Grow elt)\n\u003c/pre\u003e\u003cp\u003eNote, however, that the above example is overconstraining in many\n situations.  It demands an implementation which is NOT threadsafe on\n one end and does NOT support push on one end, whereas both these\n features would not hurt, if present.\n\u003c/p\u003e\u003cp\u003eThus when accepting a queue as input to a function you probably never\n want to overconstrain by demanding a less-featureful option.\n\u003c/p\u003e\u003cp\u003eFor example, rather than \u003ccode\u003e(Deque NT D T S Grow elt)\u003c/code\u003e\n   You would probably want: \u003ccode\u003e(Deque nt D T s Grow elt)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Deque",
          "package": "abstract-deque",
          "signature": "Deque",
          "type": "function"
        },
        "index": {
          "description": "family of Deques implementations concrete Deque implementation is selected based on the phantom type parameters which encode several choices For example work stealing deque is threadsafe only on one end and supports push pop on one end and pop-only on the other Deque NT Grow elt Note however that the above example is overconstraining in many situations It demands an implementation which is NOT threadsafe on one end and does NOT support push on one end whereas both these features would not hurt if present Thus when accepting queue as input to function you probably never want to overconstrain by demanding less-featureful option For example rather than Deque NT Grow elt You would probably want Deque nt Grow elt",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Deque",
          "package": "abstract-deque",
          "partial": "Deque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Deque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass encompassing the basic queue operations that hold for all\n   single, 1.5, and double ended modes.  We arbitrarily call the\n   ends \"left\" and \"right\" and choose the natural operations to be\n   pushing on the left and popping on the right.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "DequeClass",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#DequeClass",
          "type": "class"
        },
        "index": {
          "description": "Class encompassing the basic queue operations that hold for all single and double ended modes We arbitrarily call the ends left and right and choose the natural operations to be pushing on the left and popping on the right",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "DequeClass",
          "package": "abstract-deque",
          "partial": "Deque Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:DequeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis end of the queue supports both push and pop.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "DoubleEnd",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#DoubleEnd",
          "type": "data"
        },
        "index": {
          "description": "This end of the queue supports both push and pop",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "DoubleEnd",
          "package": "abstract-deque",
          "partial": "Double End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:DoubleEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop operations may possibly duplicate elements.  Hopefully with low probability!\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Dup",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Dup",
          "type": "data"
        },
        "index": {
          "description": "Pop operations may possibly duplicate elements Hopefully with low probability",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Dup",
          "package": "abstract-deque",
          "partial": "Dup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue can grow as elements are added.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Grow",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Grow",
          "type": "data"
        },
        "index": {
          "description": "The queue can grow as elements are added",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Grow",
          "package": "abstract-deque",
          "partial": "Grow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "NT",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#NT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "NT",
          "package": "abstract-deque",
          "partial": "NT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:NT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly one thread at a time may access this end of the queue.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Nonthreadsafe",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Nonthreadsafe",
          "type": "data"
        },
        "index": {
          "description": "Only one thread at time may access this end of the queue",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Nonthreadsafe",
          "package": "abstract-deque",
          "partial": "Nonthreadsafe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Nonthreadsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "PopL",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#PopL",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "PopL",
          "package": "abstract-deque",
          "partial": "Pop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:PopL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "PushR",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#PushR",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "PushR",
          "package": "abstract-deque",
          "partial": "Push",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:PushR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA traditional single-threaded, single-ended queue.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Queue",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Queue",
          "type": "type"
        },
        "index": {
          "description": "traditional single-threaded single-ended queue",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Queue",
          "package": "abstract-deque",
          "partial": "Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "S",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "S",
          "package": "abstract-deque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue will not duplicate elements.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Safe",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Safe",
          "type": "data"
        },
        "index": {
          "description": "The queue will not duplicate elements",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Safe",
          "package": "abstract-deque",
          "partial": "Safe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis end of the queue provides push-only (left) or pop-only\n   (right) functionality. Thus a \u003ccode\u003e\u003ca\u003eSingleEnd\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eSingleEnd\u003c/a\u003e\u003c/code\u003e combination\n   is what is commonly referred to as a \u003cem\u003esingle ended queue\u003c/em\u003e, whereas\n   \u003ccode\u003e\u003ca\u003eDoubleEnd\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eDoubleEnd\u003c/a\u003e\u003c/code\u003e is \n   a \u003cem\u003edouble ended queue\u003c/em\u003e.  Heterogeneous combinations are sometimes\n   colloquially referred to as \"1.5 ended queues\".\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "SingleEnd",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#SingleEnd",
          "type": "data"
        },
        "index": {
          "description": "This end of the queue provides push-only left or pop-only right functionality Thus SingleEnd SingleEnd combination is what is commonly referred to as single ended queue whereas DoubleEnd DoubleEnd is double ended queue Heterogeneous combinations are sometimes colloquially referred to as ended queues",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "SingleEnd",
          "package": "abstract-deque",
          "partial": "Single End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:SingleEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Class",
          "name": "T",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "T",
          "package": "abstract-deque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell IO threads (\u003ca\u003eControl.Concurrent\u003c/a\u003e) may concurrently access\n   this end of the queue.  Note that this attribute is set\n   separately for the left and right ends.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Threadsafe",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#Threadsafe",
          "type": "data"
        },
        "index": {
          "description": "Haskell IO threads Control.Concurrent may concurrently access this end of the queue Note that this attribute is set separately for the left and right ends",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "Threadsafe",
          "package": "abstract-deque",
          "partial": "Threadsafe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:Threadsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWork-stealing deques (1.5 ended).  Typically the worker pushes\n   and pops its own queue (left) whereas thieves only pop (right).\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "WSDeque",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Class.html#WSDeque",
          "type": "type"
        },
        "index": {
          "description": "Work-stealing deques ended Typically the worker pushes and pops its own queue left whereas thieves only pop right",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "WSDeque",
          "package": "abstract-deque",
          "partial": "WSDeque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#t:WSDeque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime indication of thread saftey for \u003ccode\u003e\u003ca\u003epushL\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003epopL\u003c/code\u003e).\n (Argument unused.)            \n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "leftThreadSafe",
          "package": "abstract-deque",
          "signature": "d elt -\u003e Bool",
          "source": "src/Data-Concurrent-Deque-Class.html#leftThreadSafe",
          "type": "method"
        },
        "index": {
          "description": "Runtime indication of thread saftey for pushL and popL Argument unused",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "leftThreadSafe",
          "normalized": "a b-\u003eBool",
          "package": "abstract-deque",
          "partial": "Thread Safe",
          "signature": "d elt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:leftThreadSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, bounded deque with a specified capacity.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "newBoundedQ",
          "package": "abstract-deque",
          "signature": "Int -\u003e IO (d elt)",
          "source": "src/Data-Concurrent-Deque-Class.html#newBoundedQ",
          "type": "method"
        },
        "index": {
          "description": "Create new bounded deque with specified capacity",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "newBoundedQ",
          "normalized": "Int-\u003eIO(a b)",
          "package": "abstract-deque",
          "partial": "Bounded",
          "signature": "Int-\u003eIO(d elt)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:newBoundedQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new deque.  Most appropriate for unbounded deques.\n   If bounded, the size is unspecified.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "newQ",
          "package": "abstract-deque",
          "signature": "IO (d elt)",
          "source": "src/Data-Concurrent-Deque-Class.html#newQ",
          "type": "method"
        },
        "index": {
          "description": "Create new deque Most appropriate for unbounded deques If bounded the size is unspecified",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "newQ",
          "package": "abstract-deque",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:newQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the queue currently empty?  Beware that this can be a highly transient state.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "nullQ",
          "package": "abstract-deque",
          "signature": "d elt -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Class.html#nullQ",
          "type": "method"
        },
        "index": {
          "description": "Is the queue currently empty Beware that this can be highly transient state",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "nullQ",
          "normalized": "a b-\u003eIO Bool",
          "package": "abstract-deque",
          "signature": "d elt-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:nullQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural push: push onto the left end of the deque.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "pushL",
          "package": "abstract-deque",
          "signature": "d elt -\u003e elt -\u003e IO ()",
          "source": "src/Data-Concurrent-Deque-Class.html#pushL",
          "type": "method"
        },
        "index": {
          "description": "Natural push push onto the left end of the deque",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "pushL",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "abstract-deque",
          "signature": "d elt-\u003eelt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:pushL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushing is not the native operation for the right end, so it requires\n   that end be a \u003ccode\u003e\u003ca\u003eDoubleEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "pushR",
          "package": "abstract-deque",
          "signature": "d elt -\u003e elt -\u003e IO ()",
          "source": "src/Data-Concurrent-Deque-Class.html#pushR",
          "type": "method"
        },
        "index": {
          "description": "Pushing is not the native operation for the right end so it requires that end be DoubleEnd",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "pushR",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "abstract-deque",
          "signature": "d elt-\u003eelt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:pushR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime indication of thread saftey for \u003ccode\u003e\u003ca\u003etryPopR\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003epushR\u003c/a\u003e\u003c/code\u003e).\n (Argument unused.) \n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "rightThreadSafe",
          "package": "abstract-deque",
          "signature": "d elt -\u003e Bool",
          "source": "src/Data-Concurrent-Deque-Class.html#rightThreadSafe",
          "type": "method"
        },
        "index": {
          "description": "Runtime indication of thread saftey for tryPopR and pushR Argument unused",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "rightThreadSafe",
          "normalized": "a b-\u003eBool",
          "package": "abstract-deque",
          "partial": "Thread Safe",
          "signature": "d elt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:rightThreadSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopL is not the native operation for the left end, so it requires\n   that the left end be a \u003ccode\u003e\u003ca\u003eDoubleEnd\u003c/a\u003e\u003c/code\u003e, but places no other requirements\n   on the input queue.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPopL",
          "package": "abstract-deque",
          "signature": "d elt -\u003e IO (Maybe elt)",
          "source": "src/Data-Concurrent-Deque-Class.html#tryPopL",
          "type": "method"
        },
        "index": {
          "description": "PopL is not the native operation for the left end so it requires that the left end be DoubleEnd but places no other requirements on the input queue",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPopL",
          "normalized": "a b-\u003eIO(Maybe b)",
          "package": "abstract-deque",
          "partial": "Pop",
          "signature": "d elt-\u003eIO(Maybe elt)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:tryPopL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural pop: pop from the right end of the deque.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPopR",
          "package": "abstract-deque",
          "signature": "d elt -\u003e IO (Maybe elt)",
          "source": "src/Data-Concurrent-Deque-Class.html#tryPopR",
          "type": "method"
        },
        "index": {
          "description": "Natural pop pop from the right end of the deque",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPopR",
          "normalized": "a b-\u003eIO(Maybe b)",
          "package": "abstract-deque",
          "partial": "Pop",
          "signature": "d elt-\u003eIO(Maybe elt)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:tryPopR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a bounded deque, pushing may fail if the deque is full.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPushL",
          "package": "abstract-deque",
          "signature": "d elt -\u003e elt -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Class.html#tryPushL",
          "type": "method"
        },
        "index": {
          "description": "For bounded deque pushing may fail if the deque is full",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPushL",
          "normalized": "a b-\u003eb-\u003eIO Bool",
          "package": "abstract-deque",
          "partial": "Push",
          "signature": "d elt-\u003eelt-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:tryPushL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a bounded deque, pushing may fail if the deque is full.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPushR",
          "package": "abstract-deque",
          "signature": "d elt -\u003e elt -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Class.html#tryPushR",
          "type": "method"
        },
        "index": {
          "description": "For bounded deque pushing may fail if the deque is full",
          "hierarchy": "Data Concurrent Deque Class",
          "module": "Data.Concurrent.Deque.Class",
          "name": "tryPushR",
          "normalized": "a b-\u003eb-\u003eIO Bool",
          "package": "abstract-deque",
          "partial": "Push",
          "signature": "d elt-\u003eelt-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Class.html#v:tryPushR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a wrapper around a deque that can enforce additional\n invariants at runtime for debugging purposes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "Debugger",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Debugger.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides wrapper around deque that can enforce additional invariants at runtime for debugging purposes",
          "hierarchy": "Data Concurrent Deque Debugger",
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "Debugger",
          "package": "abstract-deque",
          "partial": "Debugger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Debugger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarning, this enforces the excessively STRONG invariant that if any end of the\n deque is non-threadsafe then it may ever only be touched by one thread during its\n entire lifetime.\n\u003c/p\u003e\u003cp\u003eThis extreme form of monagamy is easier to verify, because we don't have enough\n information to know if two operations on different threads are racing with one\n another or are properly synchronized.\n\u003c/p\u003e\u003cp\u003eThe wrapper data structure has two IORefs to track the last thread that touched\n the left and right end of the deque, respectively.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "DebugDeque",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Debugger.html#DebugDeque",
          "type": "data"
        },
        "index": {
          "description": "Warning this enforces the excessively STRONG invariant that if any end of the deque is non-threadsafe then it may ever only be touched by one thread during its entire lifetime This extreme form of monagamy is easier to verify because we don have enough information to know if two operations on different threads are racing with one another or are properly synchronized The wrapper data structure has two IORefs to track the last thread that touched the left and right end of the deque respectively",
          "hierarchy": "Data Concurrent Deque Debugger",
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "DebugDeque",
          "package": "abstract-deque",
          "partial": "Debug Deque",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Debugger.html#t:DebugDeque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "DebugDeque",
          "package": "abstract-deque",
          "signature": "DebugDeque (IORef (Maybe ThreadId), IORef (Maybe ThreadId)) (d elt)",
          "source": "src/Data-Concurrent-Deque-Debugger.html#DebugDeque",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Debugger",
          "module": "Data.Concurrent.Deque.Debugger",
          "name": "DebugDeque",
          "normalized": "DebugDeque(IORef(Maybe ThreadId),IORef(Maybe ThreadId))(a b)",
          "package": "abstract-deque",
          "partial": "Debug Deque",
          "signature": "DebugDeque(IORef(Maybe ThreadId),IORef(Maybe ThreadId))(d elt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Debugger.html#v:DebugDeque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBy convention, every provider of the \u003ca\u003eData.Concurrent.Deque.Class\u003c/a\u003e\n  interface optionally provides a module that provides the relevant\n  instances of the \u003ccode\u003e\u003ca\u003eDeque\u003c/a\u003e\u003c/code\u003e type class, covering the [maximum] portion\n  of the configuration space that the implementation is able to\n  handle.\n\u003c/p\u003e\u003cp\u003eThis is kept in a separate package because importing instances is\n  unconditional and the user may well want to assemble their own\n  combination of \u003ccode\u003e\u003ca\u003eDeque\u003c/a\u003e\u003c/code\u003e instances to cover the configuration\n  space.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Concurrent.Deque.Reference.DequeInstance",
          "name": "DequeInstance",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Reference-DequeInstance.html",
          "type": "module"
        },
        "index": {
          "description": "By convention every provider of the Data.Concurrent.Deque.Class interface optionally provides module that provides the relevant instances of the Deque type class covering the maximum portion of the configuration space that the implementation is able to handle This is kept in separate package because importing instances is unconditional and the user may well want to assemble their own combination of Deque instances to cover the configuration space",
          "hierarchy": "Data Concurrent Deque Reference DequeInstance",
          "module": "Data.Concurrent.Deque.Reference.DequeInstance",
          "name": "DequeInstance",
          "package": "abstract-deque",
          "partial": "Deque Instance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference-DequeInstance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA strawman implementation of concurrent Dequeues.  This\n  implementation is so simple that it also makes a good reference\n  implementation for debugging.\n\u003c/p\u003e\u003cp\u003eThe queue representation is simply an IORef containing a Data.Sequence.\n\u003c/p\u003e\u003cp\u003eAlso see \u003ca\u003eData.Concurrent.Deque.Reference.DequeInstance\u003c/a\u003e.\n  By convention a module of this name is also provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "Reference",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Reference.html",
          "type": "module"
        },
        "index": {
          "description": "strawman implementation of concurrent Dequeues This implementation is so simple that it also makes good reference implementation for debugging The queue representation is simply an IORef containing Data.Sequence Also see Data.Concurrent.Deque.Reference.DequeInstance By convention module of this name is also provided",
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "Reference",
          "package": "abstract-deque",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores a size bound (if any) as well as a mutable Seq.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "SimpleDeque",
          "package": "abstract-deque",
          "source": "src/Data-Concurrent-Deque-Reference.html#SimpleDeque",
          "type": "data"
        },
        "index": {
          "description": "Stores size bound if any as well as mutable Seq",
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "SimpleDeque",
          "package": "abstract-deque",
          "partial": "Simple Deque",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#t:SimpleDeque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "DQ",
          "package": "abstract-deque",
          "signature": "DQ !Int !(IORef (Seq elt))",
          "source": "src/Data-Concurrent-Deque-Reference.html#SimpleDeque",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "DQ",
          "package": "abstract-deque",
          "partial": "DQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:DQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "_is_using_CAS",
          "package": "abstract-deque",
          "signature": "Bool",
          "source": "src/Data-Concurrent-Deque-Reference.html#_is_using_CAS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "_is_using_CAS",
          "package": "abstract-deque",
          "partial": "CAS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:_is_using_CAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "newBoundedQ",
          "package": "abstract-deque",
          "signature": "Int -\u003e IO (SimpleDeque elt)",
          "source": "src/Data-Concurrent-Deque-Reference.html#newBoundedQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "newBoundedQ",
          "normalized": "Int-\u003eIO(SimpleDeque a)",
          "package": "abstract-deque",
          "partial": "Bounded",
          "signature": "Int-\u003eIO(SimpleDeque elt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:newBoundedQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "newQ",
          "package": "abstract-deque",
          "signature": "IO (SimpleDeque elt)",
          "source": "src/Data-Concurrent-Deque-Reference.html#newQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "newQ",
          "package": "abstract-deque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:newQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "nullQ",
          "package": "abstract-deque",
          "signature": "SimpleDeque elt -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Reference.html#nullQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "nullQ",
          "normalized": "SimpleDeque a-\u003eIO Bool",
          "package": "abstract-deque",
          "signature": "SimpleDeque elt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:nullQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "pushL",
          "package": "abstract-deque",
          "signature": "SimpleDeque t -\u003e t -\u003e IO ()",
          "source": "src/Data-Concurrent-Deque-Reference.html#pushL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "pushL",
          "normalized": "SimpleDeque a-\u003ea-\u003eIO()",
          "package": "abstract-deque",
          "signature": "SimpleDeque t-\u003et-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:pushL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "pushR",
          "package": "abstract-deque",
          "signature": "SimpleDeque t -\u003e t -\u003e IO ()",
          "source": "src/Data-Concurrent-Deque-Reference.html#pushR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "pushR",
          "normalized": "SimpleDeque a-\u003ea-\u003eIO()",
          "package": "abstract-deque",
          "signature": "SimpleDeque t-\u003et-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:pushR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPopL",
          "package": "abstract-deque",
          "signature": "SimpleDeque a -\u003e IO (Maybe a)",
          "source": "src/Data-Concurrent-Deque-Reference.html#tryPopL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPopL",
          "normalized": "SimpleDeque a-\u003eIO(Maybe a)",
          "package": "abstract-deque",
          "partial": "Pop",
          "signature": "SimpleDeque a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:tryPopL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPopR",
          "package": "abstract-deque",
          "signature": "SimpleDeque a -\u003e IO (Maybe a)",
          "source": "src/Data-Concurrent-Deque-Reference.html#tryPopR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPopR",
          "normalized": "SimpleDeque a-\u003eIO(Maybe a)",
          "package": "abstract-deque",
          "partial": "Pop",
          "signature": "SimpleDeque a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:tryPopR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPushL",
          "package": "abstract-deque",
          "signature": "SimpleDeque a -\u003e a -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Reference.html#tryPushL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPushL",
          "normalized": "SimpleDeque a-\u003ea-\u003eIO Bool",
          "package": "abstract-deque",
          "partial": "Push",
          "signature": "SimpleDeque a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:tryPushL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPushR",
          "package": "abstract-deque",
          "signature": "SimpleDeque a -\u003e a -\u003e IO Bool",
          "source": "src/Data-Concurrent-Deque-Reference.html#tryPushR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Concurrent Deque Reference",
          "module": "Data.Concurrent.Deque.Reference",
          "name": "tryPushR",
          "normalized": "SimpleDeque a-\u003ea-\u003eIO Bool",
          "package": "abstract-deque",
          "partial": "Push",
          "signature": "SimpleDeque a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abstract-deque/docs/Data-Concurrent-Deque-Reference.html#v:tryPushR"
      }
    }
  ]
]