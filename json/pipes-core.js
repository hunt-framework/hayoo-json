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
        "word": "pipes-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Multiplicative and Comultiplicative type classes,\n which provide a generalization of \u003ccode\u003esplitP\u003c/code\u003e and \u003ccode\u003ejoinP\u003c/code\u003e to arbitrary monoidal\n categories.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Category.Multiplicative",
          "name": "Multiplicative",
          "package": "pipes-core",
          "source": "src/Control-Category-Multiplicative.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Multiplicative and Comultiplicative type classes which provide generalization of splitP and joinP to arbitrary monoidal categories",
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "Multiplicative",
          "package": "pipes-core",
          "partial": "Multiplicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComonoidal category with a comultiplication natural transformation.\n\u003c/p\u003e\u003cp\u003eA comultiplicative structure on \u003ccode\u003ek\u003c/code\u003e is the same thing as a coalgebra object\n structure on the identity functor, when End(k) is given the pointwise\n comonoidal structure.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e first counit . comult = coidl\n second counit . comult = coidr\n first diag . diag = disassociate . second diag . diag\n\u003c/pre\u003e",
          "module": "Control.Category.Multiplicative",
          "name": "Comultiplicative",
          "package": "pipes-core",
          "source": "src/Control-Category-Multiplicative.html#Comultiplicative",
          "type": "class"
        },
        "index": {
          "description": "Comonoidal category with comultiplication natural transformation comultiplicative structure on is the same thing as coalgebra object structure on the identity functor when End is given the pointwise comonoidal structure Laws first counit comult coidl second counit comult coidr first diag diag disassociate second diag diag",
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "Comultiplicative",
          "package": "pipes-core",
          "partial": "Comultiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#t:Comultiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidal category with a multiplication natural transformation.\n\u003c/p\u003e\u003cp\u003eA multiplicative structure on \u003ccode\u003ek\u003c/code\u003e is the same thing as a monoid object\n structure on the identity functor, when End(k) is given the pointwise\n monoidal structure.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e first unit . mult = idl\n second unit . mult = idr\n mult . first mult = mult . second mult . associate\n\u003c/pre\u003e",
          "module": "Control.Category.Multiplicative",
          "name": "Multiplicative",
          "package": "pipes-core",
          "source": "src/Control-Category-Multiplicative.html#Multiplicative",
          "type": "class"
        },
        "index": {
          "description": "Monoidal category with multiplication natural transformation multiplicative structure on is the same thing as monoid object structure on the identity functor when End is given the pointwise monoidal structure Laws first unit mult idl second unit mult idr mult first mult mult second mult associate",
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "Multiplicative",
          "package": "pipes-core",
          "partial": "Multiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#t:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Multiplicative",
          "name": "comult",
          "package": "pipes-core",
          "signature": "k a (p a a)",
          "source": "src/Control-Category-Multiplicative.html#comult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "comult",
          "package": "pipes-core",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:comult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Multiplicative",
          "name": "counit",
          "package": "pipes-core",
          "signature": "k a (Id k p)",
          "source": "src/Control-Category-Multiplicative.html#counit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "counit",
          "package": "pipes-core",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Multiplicative",
          "name": "mult",
          "package": "pipes-core",
          "signature": "k (p a a) a",
          "source": "src/Control-Category-Multiplicative.html#mult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "mult",
          "package": "pipes-core",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Multiplicative",
          "name": "unit",
          "package": "pipes-core",
          "signature": "k (Id k p) a",
          "source": "src/Control-Category-Multiplicative.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Multiplicative",
          "module": "Control.Category.Multiplicative",
          "name": "unit",
          "package": "pipes-core",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Category",
          "name": "Category",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Category.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "Category",
          "package": "pipes-core",
          "partial": "Category",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity-on-objects functor.\n\u003c/p\u003e\u003cp\u003eThis is part of the interface of Arrow.\n\u003c/p\u003e",
          "module": "Control.Pipe.Category",
          "name": "IFunctor",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Category.html#IFunctor",
          "type": "class"
        },
        "index": {
          "description": "Identity-on-objects functor This is part of the interface of Arrow",
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "IFunctor",
          "package": "pipes-core",
          "partial": "IFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#t:IFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategory of pipes.\n\u003c/p\u003e\u003cp\u003eComposition corresponds to \u003ccode\u003e\u003ca\u003e\u003c+\u003c\u003c/a\u003e\u003c/code\u003e and identity to \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Category",
          "name": "PipeC",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Category.html#PipeC",
          "type": "newtype"
        },
        "index": {
          "description": "Category of pipes Composition corresponds to and identity to idP",
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "PipeC",
          "package": "pipes-core",
          "partial": "Pipe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#t:PipeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Category",
          "name": "PipeC",
          "package": "pipes-core",
          "signature": "PipeC",
          "source": "src/Control-Pipe-Category.html#PipeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "PipeC",
          "package": "pipes-core",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:PipeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Category",
          "name": "arr",
          "package": "pipes-core",
          "signature": "(a -\u003e b) -\u003e k a b",
          "source": "src/Control-Pipe-Category.html#arr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "arr",
          "normalized": "(a-\u003eb)-\u003ec a b",
          "package": "pipes-core",
          "signature": "(a-\u003eb)-\u003ek a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Category",
          "name": "unPipeC",
          "package": "pipes-core",
          "signature": "Pipe a b m r",
          "source": "src/Control-Pipe-Category.html#PipeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Category",
          "module": "Control.Pipe.Category",
          "name": "unPipeC",
          "package": "pipes-core",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:unPipeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic pipe combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "Combinators",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Basic pipe combinators",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "Combinators",
          "package": "pipes-core",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect producer to consumer, ignoring producer return value.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "($$)",
          "package": "pipes-core",
          "signature": "Pipe x a m r' -\u003e Pipe a y m r -\u003e Pipe x y m (Maybe r)",
          "source": "src/Control-Pipe-Combinators.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Connect producer to consumer ignoring producer return value",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "($$) $$",
          "normalized": "Pipe a b c d-\u003ePipe b e c f-\u003ePipe a e c(Maybe f)",
          "package": "pipes-core",
          "signature": "Pipe x a m r'-\u003ePipe a y m r-\u003ePipe x y m(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate all input values into a list.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "consume",
          "package": "pipes-core",
          "signature": "Pipe a x m [a]",
          "source": "src/Control-Pipe-Combinators.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Accumulate all input values into list",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "consume",
          "normalized": "Pipe a b c[a]",
          "package": "pipes-core",
          "signature": "Pipe a x m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate all input values into a non-empty list.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "consume1",
          "package": "pipes-core",
          "signature": "Pipe a x m [a]",
          "source": "src/Control-Pipe-Combinators.html#consume1",
          "type": "function"
        },
        "index": {
          "description": "Accumulate all input values into non-empty list",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "consume1",
          "normalized": "Pipe a b c[a]",
          "package": "pipes-core",
          "signature": "Pipe a x m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:consume1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the first \u003ccode\u003en\u003c/code\u003e values from the stream, then act as an identity.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "drop",
          "package": "pipes-core",
          "signature": "Int -\u003e Pipe a a m r",
          "source": "src/Control-Pipe-Combinators.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Remove the first values from the stream then act as an identity",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "drop",
          "normalized": "Int-\u003ePipe a a b c",
          "package": "pipes-core",
          "signature": "Int-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove inputs as long as they satisfy the given predicate, then act as an\n identity.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "dropWhile",
          "package": "pipes-core",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
          "source": "src/Control-Pipe-Combinators.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Remove inputs as long as they satisfy the given predicate then act as an identity",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
          "package": "pipes-core",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed an input element to a pipe.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "feed",
          "package": "pipes-core",
          "signature": "a -\u003e Pipe a b m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Combinators.html#feed",
          "type": "function"
        },
        "index": {
          "description": "Feed an input element to pipe",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "feed",
          "normalized": "a-\u003ePipe a b c d-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "a-\u003ePipe a b m r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove values from the stream that don't satisfy the given predicate.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "filter",
          "package": "pipes-core",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
          "source": "src/Control-Pipe-Combinators.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Remove values from the stream that don satisfy the given predicate",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
          "package": "pipes-core",
          "signature": "(a-\u003eBool)-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold pipe. Apply a binary function to successive input values and an\n accumulator, and return the final result.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "fold",
          "package": "pipes-core",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Pipe a x m b",
          "source": "src/Control-Pipe-Combinators.html#fold",
          "type": "function"
        },
        "index": {
          "description": "fold pipe Apply binary function to successive input values and an accumulator and return the final result",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ePipe b c d a",
          "package": "pipes-core",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ePipe a x m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e without an initial value for the accumulator. This\n pipe doesn't return any value if no input values are received.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "fold1",
          "package": "pipes-core",
          "signature": "(a -\u003e a -\u003e a) -\u003e Pipe a x m a",
          "source": "src/Control-Pipe-Combinators.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "variation of fold without an initial value for the accumulator This pipe doesn return any value if no input values are received",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003ePipe a b c a",
          "package": "pipes-core",
          "signature": "(a-\u003ea-\u003ea)-\u003ePipe a x m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified pipe for each value in the input stream.\n\u003c/p\u003e\u003cp\u003eAny action after a call to \u003ccode\u003e\u003ca\u003eforP\u003c/a\u003e\u003c/code\u003e will be executed when upstream terminates.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "forP",
          "package": "pipes-core",
          "signature": "(a -\u003e Pipe a b m r) -\u003e Pipe a b m ()",
          "source": "src/Control-Pipe-Combinators.html#forP",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified pipe for each value in the input stream Any action after call to forP will be executed when upstream terminates",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "forP",
          "normalized": "(a-\u003ePipe a b c d)-\u003ePipe a b c()",
          "package": "pipes-core",
          "signature": "(a-\u003ePipe a b m r)-\u003ePipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:forP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessively yield elements of a list.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "fromList",
          "package": "pipes-core",
          "signature": "[a] -\u003e Pipe x a m ()",
          "source": "src/Control-Pipe-Combinators.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Successively yield elements of list",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "fromList",
          "normalized": "[a]-\u003ePipe b a c()",
          "package": "pipes-core",
          "partial": "List",
          "signature": "[a]-\u003ePipe x a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup input values by the given predicate.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "groupBy",
          "package": "pipes-core",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Pipe a [a] m r",
          "source": "src/Control-Pipe-Combinators.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "Group input values by the given predicate",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ePipe a[a]b c",
          "package": "pipes-core",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ePipe a[a]m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield Nothing when an input satisfying the predicate is received.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "intersperse",
          "package": "pipes-core",
          "signature": "(a -\u003e Bool) -\u003e Pipe a (Maybe a) m r",
          "source": "src/Control-Pipe-Combinators.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "Yield Nothing when an input satisfying the predicate is received",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "intersperse",
          "normalized": "(a-\u003eBool)-\u003ePipe a(Maybe a)b c",
          "package": "pipes-core",
          "signature": "(a-\u003eBool)-\u003ePipe a(Maybe a)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pipe that terminates immediately.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "nullP",
          "package": "pipes-core",
          "signature": "Pipe a b m ()",
          "source": "src/Control-Pipe-Combinators.html#nullP",
          "type": "function"
        },
        "index": {
          "description": "pipe that terminates immediately",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "nullP",
          "normalized": "Pipe a b c()",
          "package": "pipes-core",
          "signature": "Pipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:nullP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function with multiple return values to the stream.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "pipeList",
          "package": "pipes-core",
          "signature": "(a -\u003e [b]) -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Combinators.html#pipeList",
          "type": "function"
        },
        "index": {
          "description": "Apply function with multiple return values to the stream",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "pipeList",
          "normalized": "(a-\u003e[b])-\u003ePipe a b c d",
          "package": "pipes-core",
          "partial": "List",
          "signature": "(a-\u003e[b])-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:pipeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAct as an identity for the first \u003ccode\u003en\u003c/code\u003e values, then terminate.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "take",
          "package": "pipes-core",
          "signature": "Int -\u003e Pipe a a m ()",
          "source": "src/Control-Pipe-Combinators.html#take",
          "type": "function"
        },
        "index": {
          "description": "Act as an identity for the first values then terminate",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "take",
          "normalized": "Int-\u003ePipe a a b()",
          "package": "pipes-core",
          "signature": "Int-\u003ePipe a a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAct as an identity until as long as inputs satisfy the given predicate.\n Return the first element that doesn't satisfy the predicate.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "takeWhile",
          "package": "pipes-core",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m a",
          "source": "src/Control-Pipe-Combinators.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Act as an identity until as long as inputs satisfy the given predicate Return the first element that doesn satisfy the predicate",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b a",
          "package": "pipes-core",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003ePipe a a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation of \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e returning \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "takeWhile_",
          "package": "pipes-core",
          "signature": "(a -\u003e Bool) -\u003e Pipe a a m ()",
          "source": "src/Control-Pipe-Combinators.html#takeWhile_",
          "type": "function"
        },
        "index": {
          "description": "Variation of takeWhile returning",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "takeWhile_",
          "normalized": "(a-\u003eBool)-\u003ePipe a a b()",
          "package": "pipes-core",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003ePipe a a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:takeWhile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003eJust x\u003c/code\u003e when the upstream pipe yields some value\n \u003ccode\u003ex\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when it terminates.\n\u003c/p\u003e\u003cp\u003eFurther calls to \u003ccode\u003e\u003ca\u003etryAwait\u003c/a\u003e\u003c/code\u003e after upstream termination will keep returning\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, whereas calling \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e will terminate the current pipe\n immediately.\n\u003c/p\u003e",
          "module": "Control.Pipe.Combinators",
          "name": "tryAwait",
          "package": "pipes-core",
          "signature": "Pipe a b m (Maybe a)",
          "source": "src/Control-Pipe-Combinators.html#tryAwait",
          "type": "function"
        },
        "index": {
          "description": "Like await but returns Just when the upstream pipe yields some value and Nothing when it terminates Further calls to tryAwait after upstream termination will keep returning Nothing whereas calling await will terminate the current pipe immediately",
          "hierarchy": "Control Pipe Combinators",
          "module": "Control.Pipe.Combinators",
          "name": "tryAwait",
          "package": "pipes-core",
          "partial": "Await",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:tryAwait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Common",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Common",
          "package": "pipes-core",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBrokenPipe\u003c/a\u003e\u003c/code\u003e exception is used to signal termination of the\n upstream portion of a \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e before the current pipe\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBrokenPipe\u003c/a\u003e\u003c/code\u003e exception can be caught to perform cleanup actions\n immediately before termination, like returning a result or yielding\n additional values.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "BrokenPipe",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#BrokenPipe",
          "type": "data"
        },
        "index": {
          "description": "The BrokenPipe exception is used to signal termination of the upstream portion of Pipeline before the current pipe BrokenPipe exception can be caught to perform cleanup actions immediately before termination like returning result or yielding additional values",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "BrokenPipe",
          "package": "pipes-core",
          "partial": "Broken Pipe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:BrokenPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pipe that can only consume values.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "Consumer",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#Consumer",
          "type": "type"
        },
        "index": {
          "description": "pipe that can only consume values",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Consumer",
          "package": "pipes-core",
          "partial": "Consumer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of action in the base monad.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "MaskState",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#MaskState",
          "type": "data"
        },
        "index": {
          "description": "Type of action in the base monad",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "MaskState",
          "package": "pipes-core",
          "partial": "Mask State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:MaskState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base type for pipes.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of input received fom upstream pipes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eb\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of output delivered to downstream pipes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The base monad.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003er\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of the monad's final result.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Pipe.Common",
          "name": "Pipe",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "data"
        },
        "index": {
          "description": "The base type for pipes The type of input received fom upstream pipes The type of output delivered to downstream pipes The base monad The type of the monad final result",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Pipe",
          "package": "pipes-core",
          "partial": "Pipe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA self-contained pipeline that is ready to be run.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "Pipeline",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#Pipeline",
          "type": "type"
        },
        "index": {
          "description": "self-contained pipeline that is ready to be run",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Pipeline",
          "package": "pipes-core",
          "partial": "Pipeline",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Pipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pipe that can only produce values.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "Producer",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Common.html#Producer",
          "type": "type"
        },
        "index": {
          "description": "pipe that can only produce values",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Producer",
          "package": "pipes-core",
          "partial": "Producer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Producer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Void",
          "package": "pipes-core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Void",
          "package": "pipes-core",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight to left pipe composition.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "(\u003c+\u003c)",
          "package": "pipes-core",
          "signature": "Pipe b c m r -\u003e Pipe a b m r -\u003e Pipe a c m r",
          "source": "src/Control-Pipe-Common.html#%3C%2B%3C",
          "type": "function"
        },
        "index": {
          "description": "Right to left pipe composition",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "(\u003c+\u003c) \u003c+\u003c",
          "normalized": "Pipe a b c d-\u003ePipe e a c d-\u003ePipe e b c d",
          "package": "pipes-core",
          "signature": "Pipe b c m r-\u003ePipe a b m r-\u003ePipe a c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:-60--43--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft to right pipe composition.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "(\u003e+\u003e)",
          "package": "pipes-core",
          "signature": "Pipe a b m r -\u003e Pipe b c m r -\u003e Pipe a c m r",
          "source": "src/Control-Pipe-Common.html#%3E%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Left to right pipe composition",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "(\u003e+\u003e) \u003e+\u003e",
          "normalized": "Pipe a b c d-\u003ePipe b e c d-\u003ePipe a e c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003ePipe b c m r-\u003ePipe a c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:-62--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Await",
          "package": "pipes-core",
          "signature": "Await (a -\u003e Pipe a b m r) (SomeException -\u003e Pipe a b m r)",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Await",
          "normalized": "Await(a-\u003ePipe a b c d)(SomeException-\u003ePipe a b c d)",
          "package": "pipes-core",
          "partial": "Await",
          "signature": "Await(a-\u003ePipe a b m r)(SomeException-\u003ePipe a b m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "M",
          "package": "pipes-core",
          "signature": "M MaskState (m (Pipe a b m r)) (SomeException -\u003e Pipe a b m r)",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "M",
          "normalized": "M MaskState(a(Pipe b c a d))(SomeException-\u003ePipe b c a d)",
          "package": "pipes-core",
          "signature": "M MaskState(m(Pipe a b m r))(SomeException-\u003ePipe a b m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be run with asynchronous exceptions masked.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "Masked",
          "package": "pipes-core",
          "signature": "Masked",
          "source": "src/Control-Pipe-Common.html#MaskState",
          "type": "function"
        },
        "index": {
          "description": "Action to be run with asynchronous exceptions masked",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Masked",
          "package": "pipes-core",
          "partial": "Masked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Masked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Pure",
          "package": "pipes-core",
          "signature": "Pure r (Finalizer m)",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Pure",
          "package": "pipes-core",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Throw",
          "package": "pipes-core",
          "signature": "Throw SomeException (Finalizer m)",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Throw",
          "package": "pipes-core",
          "partial": "Throw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be run with asynchronous exceptions unmasked.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "Unmasked",
          "package": "pipes-core",
          "signature": "Unmasked",
          "source": "src/Control-Pipe-Common.html#MaskState",
          "type": "function"
        },
        "index": {
          "description": "Action to be run with asynchronous exceptions unmasked",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Unmasked",
          "package": "pipes-core",
          "partial": "Unmasked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Unmasked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Common",
          "name": "Yield",
          "package": "pipes-core",
          "signature": "Yield b (Pipe a b m r) (Finalizer m)",
          "source": "src/Control-Pipe-Common.html#Pipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "Yield",
          "package": "pipes-core",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for input from upstream within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e blocks until input is ready.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "await",
          "package": "pipes-core",
          "signature": "Pipe a b m a",
          "source": "src/Control-Pipe-Common.html#await",
          "type": "function"
        },
        "index": {
          "description": "Wait for input from upstream within the Pipe monad await blocks until input is ready",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "await",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception within the pipe monad.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "catchP",
          "package": "pipes-core",
          "signature": "Pipe a b m r -\u003e (SomeException -\u003e Pipe a b m r) -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#catchP",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception within the pipe monad",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "catchP",
          "normalized": "Pipe a b c d-\u003e(SomeException-\u003ePipe a b c d)-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003e(SomeException-\u003ePipe a b m r)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:catchP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediscard\u003c/a\u003e\u003c/code\u003e pipe silently discards all input fed to it.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "discard",
          "package": "pipes-core",
          "signature": "Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#discard",
          "type": "function"
        },
        "index": {
          "description": "The discard pipe silently discards all input fed to it",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "discard",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity pipe.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "idP",
          "package": "pipes-core",
          "signature": "Pipe a a m r",
          "source": "src/Control-Pipe-Common.html#idP",
          "type": "function"
        },
        "index": {
          "description": "The identity pipe",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "idP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:idP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action in the base monad with the given \u003ccode\u003e\u003ca\u003eMaskState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "liftP",
          "package": "pipes-core",
          "signature": "MaskState -\u003e m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#liftP",
          "type": "function"
        },
        "index": {
          "description": "Execute an action in the base monad with the given MaskState",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "liftP",
          "normalized": "MaskState-\u003ea b-\u003ePipe c d a b",
          "package": "pipes-core",
          "signature": "MaskState-\u003em r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:liftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action in the base monad with asynchronous exceptions masked.\n\u003c/p\u003e\u003cp\u003eThis function is effective only if the \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e is run with \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e,\n otherwise it is identical to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "masked",
          "package": "pipes-core",
          "signature": "m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#masked",
          "type": "function"
        },
        "index": {
          "description": "Execute an action in the base monad with asynchronous exceptions masked This function is effective only if the Pipeline is run with runPipe otherwise it is identical to lift",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "masked",
          "normalized": "a b-\u003ePipe c d a b",
          "package": "pipes-core",
          "signature": "m r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:masked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pure function into a pipe.\n\u003c/p\u003e\u003cpre\u003e pipe = forever $ do\n   x \u003c- await\n   yield (f x)\n\u003c/pre\u003e",
          "module": "Control.Pipe.Common",
          "name": "pipe",
          "package": "pipes-core",
          "signature": "(a -\u003e b) -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#pipe",
          "type": "function"
        },
        "index": {
          "description": "Convert pure function into pipe pipe forever do await yield",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "pipe",
          "normalized": "(a-\u003eb)-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "(a-\u003eb)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a self-contained \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e, converting it to an action in the base\n monad.\n\u003c/p\u003e\u003cp\u003eThis function is exception-safe. Any exception thrown in the base monad\n during execution of the pipeline will be captured by\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e statements in the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "runPipe",
          "package": "pipes-core",
          "signature": "Pipeline m r -\u003e m r",
          "source": "src/Control-Pipe-Common.html#runPipe",
          "type": "function"
        },
        "index": {
          "description": "Run self-contained Pipeline converting it to an action in the base monad This function is exception-safe Any exception thrown in the base monad during execution of the pipeline will be captured by catch statements in the Pipe monad",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "runPipe",
          "normalized": "Pipeline a b-\u003ea b",
          "package": "pipes-core",
          "partial": "Pipe",
          "signature": "Pipeline m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a self-contained pipeline over an arbitrary monad, with fewer\n exception-safety guarantees than \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOnly pipe termination exceptions and exceptions thrown using\n \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e will be catchable within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n Any other exception will terminate execution immediately and finalizers will\n not be called.\n\u003c/p\u003e\u003cp\u003eAny captured exception will be returned in the left component of the result.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "runPurePipe",
          "package": "pipes-core",
          "signature": "Pipeline m r -\u003e m (Either SomeException r)",
          "source": "src/Control-Pipe-Common.html#runPurePipe",
          "type": "function"
        },
        "index": {
          "description": "Run self-contained pipeline over an arbitrary monad with fewer exception-safety guarantees than runPipe Only pipe termination exceptions and exceptions thrown using throw will be catchable within the Pipe monad Any other exception will terminate execution immediately and finalizers will not be called Any captured exception will be returned in the left component of the result",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "runPurePipe",
          "normalized": "Pipeline a b-\u003ea(Either SomeException b)",
          "package": "pipes-core",
          "partial": "Pure Pipe",
          "signature": "Pipeline m r-\u003em(Either SomeException r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPurePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunPurePipe\u003c/a\u003e\u003c/code\u003e which rethrows any captured exception instead\n of returning it.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "runPurePipe_",
          "package": "pipes-core",
          "signature": "Pipeline m r -\u003e m r",
          "source": "src/Control-Pipe-Common.html#runPurePipe_",
          "type": "function"
        },
        "index": {
          "description": "version of runPurePipe which rethrows any captured exception instead of returning it",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "runPurePipe_",
          "normalized": "Pipeline a b-\u003ea b",
          "package": "pipes-core",
          "partial": "Pure Pipe",
          "signature": "Pipeline m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPurePipe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "throwP",
          "package": "pipes-core",
          "signature": "SomeException -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Common.html#throwP",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception within the Pipe monad",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "throwP",
          "normalized": "SomeException-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "SomeException-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:throwP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass output downstream within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e blocks until the downstream pipe calls \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
          "module": "Control.Pipe.Common",
          "name": "yield",
          "package": "pipes-core",
          "signature": "b -\u003e Pipe a b m ()",
          "source": "src/Control-Pipe-Common.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Pass output downstream within the Pipe monad yield blocks until the downstream pipe calls await again",
          "hierarchy": "Control Pipe Common",
          "module": "Control.Pipe.Common",
          "name": "yield",
          "normalized": "a-\u003ePipe b a c()",
          "package": "pipes-core",
          "signature": "b-\u003ePipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Exception",
          "name": "Exception",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "Exception",
          "package": "pipes-core",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a resource within the base monad, run a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, then ensure the\n resource is released.\n\u003c/p\u003e\u003cp\u003eThe typical example is reading from a file:\n\u003c/p\u003e\u003cpre\u003e bracket\n   (openFile \"filename\" ReadMode)\n   hClose\n   (\\handle -\u003e do\n       line \u003c- lift $ hGetLine handle\n       yield line\n       ...)\n\u003c/pre\u003e",
          "module": "Control.Pipe.Exception",
          "name": "bracket",
          "package": "pipes-core",
          "signature": "m r-\u003e (r -\u003e m y)-\u003e (r -\u003e Pipe a b m x)-\u003e Pipe a b m x",
          "type": "function"
        },
        "index": {
          "description": "Allocate resource within the base monad run Pipe then ensure the resource is released The typical example is reading from file bracket openFile filename ReadMode hClose handle do line lift hGetLine handle yield line",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ePipe d e a f)-\u003ePipe d e a f",
          "package": "pipes-core",
          "signature": "m r-\u003e(r-\u003em y)-\u003e(r-\u003ePipe a b m x)-\u003ePipe a b m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the \"release\" action if there was an\n exception raised by the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "bracketOnError",
          "package": "pipes-core",
          "signature": "m r-\u003e (r -\u003e m y)-\u003e (r -\u003e Pipe a b m x)-\u003e Pipe a b m x",
          "type": "function"
        },
        "index": {
          "description": "Like bracket but only performs the release action if there was an exception raised by the Pipe",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ePipe d e a f)-\u003ePipe d e a f",
          "package": "pipes-core",
          "partial": "On Error",
          "signature": "m r-\u003e(r-\u003em y)-\u003e(r-\u003ePipe a b m x)-\u003ePipe a b m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the allocation action\n is not required.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "bracket_",
          "package": "pipes-core",
          "signature": "m r-\u003e m y-\u003e Pipe a b m x-\u003e Pipe a b m x",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the return value from the allocation action is not required",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ePipe d e a f-\u003ePipe d e a f",
          "package": "pipes-core",
          "signature": "m r-\u003em y-\u003ePipe a b m x-\u003ePipe a b m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis function takes a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, runs it, and if an exception is raised it\n executes the handler, passing it the value of the exception.  Otherwise, the\n result is returned as normal.\n\u003c/p\u003e\u003cp\u003eFor example, given a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e reader :: Pipe () String IO ()\n\u003c/pre\u003e\u003cp\u003ewe can use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e to resume after an exception. For example:\n\u003c/p\u003e\u003cpre\u003e safeReader :: Pipe () (Either SomeException String) IO ()\n safeReader = catch (reader \u003e+\u003e 'Pipe' Right) $ \\e -\u003e do\n   yield $ Left e\n\u003c/pre\u003e\u003cp\u003eNote that only the initial monadic actions contained in a handler are\n guaranteed to be executed.  Anything else is subject to the usual\n termination rule of \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es: if a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e at either side terminates, the\n whole pipeline terminates.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "catch",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003e (e -\u003e Pipe a b m r)-\u003e Pipe a b m r",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception within the Pipe monad This function takes Pipe runs it and if an exception is raised it executes the handler passing it the value of the exception Otherwise the result is returned as normal For example given Pipe reader Pipe String IO we can use catch to resume after an exception For example safeReader Pipe Either SomeException String IO safeReader catch reader Pipe Right do yield Left Note that only the initial monadic actions contained in handler are guaranteed to be executed Anything else is subject to the usual termination rule of Pipe if Pipe at either side terminates the whole pipeline terminates",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "catch",
          "normalized": "Pipe a b c d-\u003e(e-\u003ePipe a b c d)-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003e(e-\u003ePipe a b m r)-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with just a computation to run\n afterwards.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "finally",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003e m s-\u003e Pipe a b m r",
          "type": "function"
        },
        "index": {
          "description": "specialized variant of bracket with just computation to run afterwards",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "finally",
          "normalized": "Pipe a b c d-\u003ec e-\u003ePipe a b c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003em s-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "onException",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003e Pipe a b m s-\u003e Pipe a b m r",
          "type": "function"
        },
        "index": {
          "description": "Like finally but only performs the final action if there was an exception raised by the Pipe",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "onException",
          "normalized": "Pipe a b c d-\u003ePipe a b c e-\u003ePipe a b c d",
          "package": "pipes-core",
          "partial": "Exception",
          "signature": "Pipe a b m r-\u003ePipe a b m s-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eAn exception thrown with \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e can be caught by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e with any base\n monad.\n\u003c/p\u003e\u003cp\u003eIf the exception is not caught in the \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e at all, it will be rethrown\n as a normal Haskell exception when using \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e.  Note that \u003ccode\u003e\u003ca\u003erunPurePipe\u003c/a\u003e\u003c/code\u003e\n returns the exception in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value, instead.\n\u003c/p\u003e",
          "module": "Control.Pipe.Exception",
          "name": "throw",
          "package": "pipes-core",
          "signature": "e -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Exception.html#throw",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception within the Pipe monad An exception thrown with throw can be caught by catch with any base monad If the exception is not caught in the Pipeline at all it will be rethrown as normal Haskell exception when using runPipe Note that runPurePipe returns the exception in an Either value instead",
          "hierarchy": "Control Pipe Exception",
          "module": "Control.Pipe.Exception",
          "name": "throw",
          "normalized": "a-\u003ePipe b c d e",
          "package": "pipes-core",
          "signature": "e-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Monoidal",
          "name": "Monoidal",
          "package": "pipes-core",
          "source": "src/Control-Pipe-Monoidal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "Monoidal",
          "package": "pipes-core",
          "partial": "Monoidal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two pipes into a single pipe that behaves like the first on the\n left component, and the second on the right component.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "(***)",
          "package": "pipes-core",
          "signature": "Pipe a b m r -\u003e Pipe a' b' m r -\u003e Pipe (Either a a') (Either b b') m r",
          "source": "src/Control-Pipe-Monoidal.html#%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "description": "Combine two pipes into single pipe that behaves like the first on the left component and the second on the right component",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "(***) ***",
          "normalized": "Pipe a b c d-\u003ePipe e f c d-\u003ePipe(Either a e)(Either b f)c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003ePipe a' b' m r-\u003ePipe(Either a a')(Either b b')m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between the two possible associations of a triple sum.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "associateP",
          "package": "pipes-core",
          "signature": "Pipe (Either (Either a b) c) (Either a (Either b c)) m r",
          "source": "src/Control-Pipe-Monoidal.html#associateP",
          "type": "function"
        },
        "index": {
          "description": "Convert between the two possible associations of triple sum",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "associateP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:associateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003eassociateP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "disassociateP",
          "package": "pipes-core",
          "signature": "Pipe (Either a (Either b c)) (Either (Either a b) c) m r",
          "source": "src/Control-Pipe-Monoidal.html#disassociateP",
          "type": "function"
        },
        "index": {
          "description": "Inverse of associateP",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "disassociateP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:disassociateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard all values on the left component.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "discardL",
          "package": "pipes-core",
          "signature": "Pipe (Either x a) a m r",
          "source": "src/Control-Pipe-Monoidal.html#discardL",
          "type": "function"
        },
        "index": {
          "description": "Discard all values on the left component",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "discardL",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:discardL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard all values on the right component.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "discardR",
          "package": "pipes-core",
          "signature": "Pipe (Either a x) a m r",
          "source": "src/Control-Pipe-Monoidal.html#discardR",
          "type": "function"
        },
        "index": {
          "description": "Discard all values on the right component",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "discardR",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:discardR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that behaves like the given \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e of the left component\n of the input, and lets values in the right component pass through.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "firstP",
          "package": "pipes-core",
          "signature": "Pipe a b m r -\u003e Pipe (Either a c) (Either b c) m r",
          "source": "src/Control-Pipe-Monoidal.html#firstP",
          "type": "function"
        },
        "index": {
          "description": "Create Pipe that behaves like the given Pipe of the left component of the input and lets values in the right component pass through",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "firstP",
          "normalized": "Pipe a b c d-\u003ePipe(Either a e)(Either b e)c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003ePipe(Either a c)(Either b c)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:firstP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield both components of input values into the output.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "joinP",
          "package": "pipes-core",
          "signature": "Pipe (Either a a) a m r",
          "source": "src/Control-Pipe-Monoidal.html#joinP",
          "type": "function"
        },
        "index": {
          "description": "Yield both components of input values into the output",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "joinP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:joinP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eloopP\u003c/a\u003e\u003c/code\u003e combinator allows to create \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es whose output value is fed\n back to the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e as input.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "loopP",
          "package": "pipes-core",
          "signature": "Pipe (Either a c) (Either b c) m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Monoidal.html#loopP",
          "type": "function"
        },
        "index": {
          "description": "The loopP combinator allows to create Pipe whose output value is fed back to the Pipe as input",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "loopP",
          "normalized": "Pipe(Either a b)(Either c b)d e-\u003ePipe a c d e",
          "package": "pipes-core",
          "signature": "Pipe(Either a c)(Either b c)m r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:loopP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is the equivalent of \u003ccode\u003e\u003ca\u003efirstP\u003c/a\u003e\u003c/code\u003e for the right component.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "secondP",
          "package": "pipes-core",
          "signature": "Pipe a b m r -\u003e Pipe (Either c a) (Either c b) m r",
          "source": "src/Control-Pipe-Monoidal.html#secondP",
          "type": "function"
        },
        "index": {
          "description": "This function is the equivalent of firstP for the right component",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "secondP",
          "normalized": "Pipe a b c d-\u003ePipe(Either e a)(Either e b)c d",
          "package": "pipes-core",
          "signature": "Pipe a b m r-\u003ePipe(Either c a)(Either c b)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:secondP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield all input values into both the left and right components of the\n output.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "splitP",
          "package": "pipes-core",
          "signature": "Pipe a (Either a a) m r",
          "source": "src/Control-Pipe-Monoidal.html#splitP",
          "type": "function"
        },
        "index": {
          "description": "Yield all input values into both the left and right components of the output",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "splitP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:splitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the left and right components.\n\u003c/p\u003e",
          "module": "Control.Pipe.Monoidal",
          "name": "swapP",
          "package": "pipes-core",
          "signature": "Pipe (Either a b) (Either b a) m r",
          "source": "src/Control-Pipe-Monoidal.html#swapP",
          "type": "function"
        },
        "index": {
          "description": "Swap the left and right components",
          "hierarchy": "Control Pipe Monoidal",
          "module": "Control.Pipe.Monoidal",
          "name": "swapP",
          "package": "pipes-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:swapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe",
          "name": "Pipe",
          "package": "pipes-core",
          "source": "src/Control-Pipe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe",
          "module": "Control.Pipe",
          "name": "Pipe",
          "package": "pipes-core",
          "partial": "Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe.html#"
      }
    }
  ]
]