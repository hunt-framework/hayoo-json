[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Multiplicative and Comultiplicative type classes,\n which provide a generalization of \u003ccode\u003esplitP\u003c/code\u003e and \u003ccode\u003ejoinP\u003c/code\u003e to arbitrary monoidal\n categories.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Category-Multiplicative.html",
        "fct-type": "module",
        "title": "Multiplicative"
      },
      "index": {
        "description": "This module contains Multiplicative and Comultiplicative type classes which provide generalization of splitP and joinP to arbitrary monoidal categories",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "Multiplicative",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Multiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#t:Comultiplicative",
      "description": {
        "fct-descr": "\u003cp\u003eComonoidal category with a comultiplication natural transformation.\n\u003c/p\u003e\u003cp\u003eA comultiplicative structure on \u003ccode\u003ek\u003c/code\u003e is the same thing as a coalgebra object\n structure on the identity functor, when End(k) is given the pointwise\n comonoidal structure.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e first counit . comult = coidl\n second counit . comult = coidr\n first diag . diag = disassociate . second diag . diag\n\u003c/pre\u003e",
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "class",
        "fct-source": "src/Control-Category-Multiplicative.html#Comultiplicative",
        "fct-type": "class",
        "title": "Comultiplicative"
      },
      "index": {
        "description": "Comonoidal category with comultiplication natural transformation comultiplicative structure on is the same thing as coalgebra object structure on the identity functor when End is given the pointwise comonoidal structure Laws first counit comult coidl second counit comult coidr first diag diag disassociate second diag diag",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "Comultiplicative",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Comultiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#t:Multiplicative",
      "description": {
        "fct-descr": "\u003cp\u003eMonoidal category with a multiplication natural transformation.\n\u003c/p\u003e\u003cp\u003eA multiplicative structure on \u003ccode\u003ek\u003c/code\u003e is the same thing as a monoid object\n structure on the identity functor, when End(k) is given the pointwise\n monoidal structure.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e first unit . mult = idl\n second unit . mult = idr\n mult . first mult = mult . second mult . associate\n\u003c/pre\u003e",
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "class",
        "fct-source": "src/Control-Category-Multiplicative.html#Multiplicative",
        "fct-type": "class",
        "title": "Multiplicative"
      },
      "index": {
        "description": "Monoidal category with multiplication natural transformation multiplicative structure on is the same thing as monoid object structure on the identity functor when End is given the pointwise monoidal structure Laws first unit mult idl second unit mult idr mult first mult mult second mult associate",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "Multiplicative",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Multiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:comult",
      "description": {
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "k a (p a a)",
        "fct-source": "src/Control-Category-Multiplicative.html#comult",
        "fct-type": "method",
        "title": "comult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "comult",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:counit",
      "description": {
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "k a (Id k p)",
        "fct-source": "src/Control-Category-Multiplicative.html#counit",
        "fct-type": "method",
        "title": "counit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "counit",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:mult",
      "description": {
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "k (p a a) a",
        "fct-source": "src/Control-Category-Multiplicative.html#mult",
        "fct-type": "method",
        "title": "mult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "mult",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Category-Multiplicative.html#v:unit",
      "description": {
        "fct-module": "Control.Category.Multiplicative",
        "fct-package": "pipes-core",
        "fct-signature": "k (Id k p) a",
        "fct-source": "src/Control-Category-Multiplicative.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Category Multiplicative",
        "module": "Control.Category.Multiplicative",
        "name": "unit",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#",
      "description": {
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Category.html",
        "fct-type": "module",
        "title": "Category"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "Category",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#t:IFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity-on-objects functor.\n\u003c/p\u003e\u003cp\u003eThis is part of the interface of Arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "class",
        "fct-source": "src/Control-Pipe-Category.html#IFunctor",
        "fct-type": "class",
        "title": "IFunctor"
      },
      "index": {
        "description": "Identity-on-objects functor This is part of the interface of Arrow",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "IFunctor",
        "normalized": "",
        "package": "pipes-core",
        "partial": "IFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#t:PipeC",
      "description": {
        "fct-descr": "\u003cp\u003eCategory of pipes.\n\u003c/p\u003e\u003cp\u003eComposition corresponds to \u003ccode\u003e\u003ca\u003e\u003c+\u003c\u003c/a\u003e\u003c/code\u003e and identity to \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Pipe-Category.html#PipeC",
        "fct-type": "newtype",
        "title": "PipeC"
      },
      "index": {
        "description": "Category of pipes Composition corresponds to and identity to idP",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "PipeC",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:PipeC",
      "description": {
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "PipeC",
        "fct-source": "src/Control-Pipe-Category.html#PipeC",
        "fct-type": "function",
        "title": "PipeC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "PipeC",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:arr",
      "description": {
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e b) -\u003e k a b",
        "fct-source": "src/Control-Pipe-Category.html#arr",
        "fct-type": "method",
        "title": "arr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "arr",
        "normalized": "(a-\u003eb)-\u003ec a b",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ek a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Category.html#v:unPipeC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Pipe.Category",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r",
        "fct-source": "src/Control-Pipe-Category.html#PipeC",
        "fct-type": "function",
        "title": "unPipeC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Category",
        "module": "Control.Pipe.Category",
        "name": "unPipeC",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic pipe combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Basic pipe combinators",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eConnect producer to consumer, ignoring producer return value.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe x a m r' -\u003e Pipe a y m r -\u003e Pipe x y m (Maybe r)",
        "fct-source": "src/Control-Pipe-Combinators.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "Connect producer to consumer ignoring producer return value",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "($$) $$",
        "normalized": "Pipe a b c d-\u003ePipe b e c f-\u003ePipe a e c(Maybe f)",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe x a m r'-\u003ePipe a y m r-\u003ePipe x y m(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate all input values into a list.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a x m [a]",
        "fct-source": "src/Control-Pipe-Combinators.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Accumulate all input values into list",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "consume",
        "normalized": "Pipe a b c[a]",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a x m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:consume1",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate all input values into a non-empty list.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a x m [a]",
        "fct-source": "src/Control-Pipe-Combinators.html#consume1",
        "fct-type": "function",
        "title": "consume1"
      },
      "index": {
        "description": "Accumulate all input values into non-empty list",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "consume1",
        "normalized": "Pipe a b c[a]",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a x m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the first \u003ccode\u003en\u003c/code\u003e values from the stream, then act as an identity.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Int -\u003e Pipe a a m r",
        "fct-source": "src/Control-Pipe-Combinators.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Remove the first values from the stream then act as an identity",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "drop",
        "normalized": "Int-\u003ePipe a a b c",
        "package": "pipes-core",
        "partial": "",
        "signature": "Int-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eRemove inputs as long as they satisfy the given predicate, then act as an\n identity.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
        "fct-source": "src/Control-Pipe-Combinators.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Remove inputs as long as they satisfy the given predicate then act as an identity",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
        "package": "pipes-core",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:feed",
      "description": {
        "fct-descr": "\u003cp\u003eFeed an input element to a pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "a -\u003e Pipe a b m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Combinators.html#feed",
        "fct-type": "function",
        "title": "feed"
      },
      "index": {
        "description": "Feed an input element to pipe",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "feed",
        "normalized": "a-\u003ePipe a b c d-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "a-\u003ePipe a b m r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eRemove values from the stream that don't satisfy the given predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a a m r",
        "fct-source": "src/Control-Pipe-Combinators.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Remove values from the stream that don satisfy the given predicate",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003ePipe a a b c",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eA fold pipe. Apply a binary function to successive input values and an\n accumulator, and return the final result.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Pipe a x m b",
        "fct-source": "src/Control-Pipe-Combinators.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "fold pipe Apply binary function to successive input values and an accumulator and return the final result",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ePipe b c d a",
        "package": "pipes-core",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ePipe a x m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fold1",
      "description": {
        "fct-descr": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e without an initial value for the accumulator. This\n pipe doesn't return any value if no input values are received.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Pipe a x m a",
        "fct-source": "src/Control-Pipe-Combinators.html#fold1",
        "fct-type": "function",
        "title": "fold1"
      },
      "index": {
        "description": "variation of fold without an initial value for the accumulator This pipe doesn return any value if no input values are received",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "fold1",
        "normalized": "(a-\u003ea-\u003ea)-\u003ePipe a b c a",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ePipe a x m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:forP",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified pipe for each value in the input stream.\n\u003c/p\u003e\u003cp\u003eAny action after a call to \u003ccode\u003e\u003ca\u003eforP\u003c/a\u003e\u003c/code\u003e will be executed when upstream terminates.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Pipe a b m r) -\u003e Pipe a b m ()",
        "fct-source": "src/Control-Pipe-Combinators.html#forP",
        "fct-type": "function",
        "title": "forP"
      },
      "index": {
        "description": "Execute the specified pipe for each value in the input stream Any action after call to forP will be executed when upstream terminates",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "forP",
        "normalized": "(a-\u003ePipe a b c d)-\u003ePipe a b c()",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003ePipe a b m r)-\u003ePipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessively yield elements of a list.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "[a] -\u003e Pipe x a m ()",
        "fct-source": "src/Control-Pipe-Combinators.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Successively yield elements of list",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "fromList",
        "normalized": "[a]-\u003ePipe b a c()",
        "package": "pipes-core",
        "partial": "List",
        "signature": "[a]-\u003ePipe x a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGroup input values by the given predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Pipe a [a] m r",
        "fct-source": "src/Control-Pipe-Combinators.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Group input values by the given predicate",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "groupBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ePipe a[a]b c",
        "package": "pipes-core",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ePipe a[a]m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003eYield Nothing when an input satisfying the predicate is received.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a (Maybe a) m r",
        "fct-source": "src/Control-Pipe-Combinators.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "Yield Nothing when an input satisfying the predicate is received",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "intersperse",
        "normalized": "(a-\u003eBool)-\u003ePipe a(Maybe a)b c",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ePipe a(Maybe a)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:nullP",
      "description": {
        "fct-descr": "\u003cp\u003eA pipe that terminates immediately.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m ()",
        "fct-source": "src/Control-Pipe-Combinators.html#nullP",
        "fct-type": "function",
        "title": "nullP"
      },
      "index": {
        "description": "pipe that terminates immediately",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "nullP",
        "normalized": "Pipe a b c()",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:pipeList",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function with multiple return values to the stream.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e [b]) -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Combinators.html#pipeList",
        "fct-type": "function",
        "title": "pipeList"
      },
      "index": {
        "description": "Apply function with multiple return values to the stream",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "pipeList",
        "normalized": "(a-\u003e[b])-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "List",
        "signature": "(a-\u003e[b])-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eAct as an identity for the first \u003ccode\u003en\u003c/code\u003e values, then terminate.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Int -\u003e Pipe a a m ()",
        "fct-source": "src/Control-Pipe-Combinators.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Act as an identity for the first values then terminate",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "take",
        "normalized": "Int-\u003ePipe a a b()",
        "package": "pipes-core",
        "partial": "",
        "signature": "Int-\u003ePipe a a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eAct as an identity until as long as inputs satisfy the given predicate.\n Return the first element that doesn't satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a a m a",
        "fct-source": "src/Control-Pipe-Combinators.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Act as an identity until as long as inputs satisfy the given predicate Return the first element that doesn satisfy the predicate",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003ePipe a a b a",
        "package": "pipes-core",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003ePipe a a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:takeWhile_",
      "description": {
        "fct-descr": "\u003cp\u003eVariation of \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e returning \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a a m ()",
        "fct-source": "src/Control-Pipe-Combinators.html#takeWhile_",
        "fct-type": "function",
        "title": "takeWhile_"
      },
      "index": {
        "description": "Variation of takeWhile returning",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "takeWhile_",
        "normalized": "(a-\u003eBool)-\u003ePipe a a b()",
        "package": "pipes-core",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003ePipe a a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Combinators.html#v:tryAwait",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003eJust x\u003c/code\u003e when the upstream pipe yields some value\n \u003ccode\u003ex\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when it terminates.\n\u003c/p\u003e\u003cp\u003eFurther calls to \u003ccode\u003e\u003ca\u003etryAwait\u003c/a\u003e\u003c/code\u003e after upstream termination will keep returning\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, whereas calling \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e will terminate the current pipe\n immediately.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Combinators",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m (Maybe a)",
        "fct-source": "src/Control-Pipe-Combinators.html#tryAwait",
        "fct-type": "function",
        "title": "tryAwait"
      },
      "index": {
        "description": "Like await but returns Just when the upstream pipe yields some value and Nothing when it terminates Further calls to tryAwait after upstream termination will keep returning Nothing whereas calling await will terminate the current pipe immediately",
        "hierarchy": "Control Pipe Combinators",
        "module": "Control.Pipe.Combinators",
        "name": "tryAwait",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Await",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Common",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:BrokenPipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBrokenPipe\u003c/a\u003e\u003c/code\u003e exception is used to signal termination of the\n upstream portion of a \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e before the current pipe\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBrokenPipe\u003c/a\u003e\u003c/code\u003e exception can be caught to perform cleanup actions\n immediately before termination, like returning a result or yielding\n additional values.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Common.html#BrokenPipe",
        "fct-type": "data",
        "title": "BrokenPipe"
      },
      "index": {
        "description": "The BrokenPipe exception is used to signal termination of the upstream portion of Pipeline before the current pipe BrokenPipe exception can be caught to perform cleanup actions immediately before termination like returning result or yielding additional values",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "BrokenPipe",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Broken Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA pipe that can only consume values.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "type",
        "fct-source": "src/Control-Pipe-Common.html#Consumer",
        "fct-type": "type",
        "title": "Consumer"
      },
      "index": {
        "description": "pipe that can only consume values",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Consumer",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:MaskState",
      "description": {
        "fct-descr": "\u003cp\u003eType of action in the base monad.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Common.html#MaskState",
        "fct-type": "data",
        "title": "MaskState"
      },
      "index": {
        "description": "Type of action in the base monad",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "MaskState",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Mask State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe base type for pipes.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of input received fom upstream pipes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eb\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of output delivered to downstream pipes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The base monad.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003er\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of the monad's final result.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "data",
        "title": "Pipe"
      },
      "index": {
        "description": "The base type for pipes The type of input received fom upstream pipes The type of output delivered to downstream pipes The base monad The type of the monad final result",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Pipe",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Pipeline",
      "description": {
        "fct-descr": "\u003cp\u003eA self-contained pipeline that is ready to be run.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "type",
        "fct-source": "src/Control-Pipe-Common.html#Pipeline",
        "fct-type": "type",
        "title": "Pipeline"
      },
      "index": {
        "description": "self-contained pipeline that is ready to be run",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Pipeline",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipeline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA pipe that can only produce values.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "type",
        "fct-source": "src/Control-Pipe-Common.html#Producer",
        "fct-type": "type",
        "title": "Producer"
      },
      "index": {
        "description": "pipe that can only produce values",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Producer",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#t:Void",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Void",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:-60--43--60-",
      "description": {
        "fct-descr": "\u003cp\u003eRight to left pipe composition.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe b c m r -\u003e Pipe a b m r -\u003e Pipe a c m r",
        "fct-source": "src/Control-Pipe-Common.html#%3C%2B%3C",
        "fct-type": "function",
        "title": "(\u003c+\u003c)"
      },
      "index": {
        "description": "Right to left pipe composition",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "(\u003c+\u003c) \u003c+\u003c",
        "normalized": "Pipe a b c d-\u003ePipe e a c d-\u003ePipe e b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe b c m r-\u003ePipe a b m r-\u003ePipe a c m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:-62--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft to right pipe composition.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r -\u003e Pipe b c m r -\u003e Pipe a c m r",
        "fct-source": "src/Control-Pipe-Common.html#%3E%2B%3E",
        "fct-type": "function",
        "title": "(\u003e+\u003e)"
      },
      "index": {
        "description": "Left to right pipe composition",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "(\u003e+\u003e) \u003e+\u003e",
        "normalized": "Pipe a b c d-\u003ePipe b e c d-\u003ePipe a e c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003ePipe b c m r-\u003ePipe a c m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Await",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Await (a -\u003e Pipe a b m r) (SomeException -\u003e Pipe a b m r)",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "function",
        "title": "Await"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Await",
        "normalized": "Await(a-\u003ePipe a b c d)(SomeException-\u003ePipe a b c d)",
        "package": "pipes-core",
        "partial": "Await",
        "signature": "Await(a-\u003ePipe a b m r)(SomeException-\u003ePipe a b m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:M",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "M MaskState (m (Pipe a b m r)) (SomeException -\u003e Pipe a b m r)",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "M",
        "normalized": "M MaskState(a(Pipe b c a d))(SomeException-\u003ePipe b c a d)",
        "package": "pipes-core",
        "partial": "",
        "signature": "M MaskState(m(Pipe a b m r))(SomeException-\u003ePipe a b m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Masked",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be run with asynchronous exceptions masked.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Masked",
        "fct-source": "src/Control-Pipe-Common.html#MaskState",
        "fct-type": "function",
        "title": "Masked"
      },
      "index": {
        "description": "Action to be run with asynchronous exceptions masked",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Masked",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Masked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Pure",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pure r (Finalizer m)",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Pure",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Throw",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Throw SomeException (Finalizer m)",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "function",
        "title": "Throw"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Throw",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Unmasked",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be run with asynchronous exceptions unmasked.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Unmasked",
        "fct-source": "src/Control-Pipe-Common.html#MaskState",
        "fct-type": "function",
        "title": "Unmasked"
      },
      "index": {
        "description": "Action to be run with asynchronous exceptions unmasked",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Unmasked",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Unmasked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:Yield",
      "description": {
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Yield b (Pipe a b m r) (Finalizer m)",
        "fct-source": "src/Control-Pipe-Common.html#Pipe",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "Yield",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:await",
      "description": {
        "fct-descr": "\u003cp\u003eWait for input from upstream within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e blocks until input is ready.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m a",
        "fct-source": "src/Control-Pipe-Common.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "Wait for input from upstream within the Pipe monad await blocks until input is ready",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "await",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:catchP",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an exception within the pipe monad.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r -\u003e (SomeException -\u003e Pipe a b m r) -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#catchP",
        "fct-type": "function",
        "title": "catchP"
      },
      "index": {
        "description": "Catch an exception within the pipe monad",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "catchP",
        "normalized": "Pipe a b c d-\u003e(SomeException-\u003ePipe a b c d)-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003e(SomeException-\u003ePipe a b m r)-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:discard",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediscard\u003c/a\u003e\u003c/code\u003e pipe silently discards all input fed to it.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#discard",
        "fct-type": "function",
        "title": "discard"
      },
      "index": {
        "description": "The discard pipe silently discards all input fed to it",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "discard",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:idP",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a a m r",
        "fct-source": "src/Control-Pipe-Common.html#idP",
        "fct-type": "function",
        "title": "idP"
      },
      "index": {
        "description": "The identity pipe",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "idP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:liftP",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action in the base monad with the given \u003ccode\u003e\u003ca\u003eMaskState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "MaskState -\u003e m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#liftP",
        "fct-type": "function",
        "title": "liftP"
      },
      "index": {
        "description": "Execute an action in the base monad with the given MaskState",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "liftP",
        "normalized": "MaskState-\u003ea b-\u003ePipe c d a b",
        "package": "pipes-core",
        "partial": "",
        "signature": "MaskState-\u003em r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:masked",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action in the base monad with asynchronous exceptions masked.\n\u003c/p\u003e\u003cp\u003eThis function is effective only if the \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e is run with \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e,\n otherwise it is identical to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#masked",
        "fct-type": "function",
        "title": "masked"
      },
      "index": {
        "description": "Execute an action in the base monad with asynchronous exceptions masked This function is effective only if the Pipeline is run with runPipe otherwise it is identical to lift",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "masked",
        "normalized": "a b-\u003ePipe c d a b",
        "package": "pipes-core",
        "partial": "",
        "signature": "m r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:pipe",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a pure function into a pipe.\n\u003c/p\u003e\u003cpre\u003e pipe = forever $ do\n   x \u003c- await\n   yield (f x)\n\u003c/pre\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "(a -\u003e b) -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#pipe",
        "fct-type": "function",
        "title": "pipe"
      },
      "index": {
        "description": "Convert pure function into pipe pipe forever do await yield",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "pipe",
        "normalized": "(a-\u003eb)-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPipe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a self-contained \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e, converting it to an action in the base\n monad.\n\u003c/p\u003e\u003cp\u003eThis function is exception-safe. Any exception thrown in the base monad\n during execution of the pipeline will be captured by\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e statements in the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipeline m r -\u003e m r",
        "fct-source": "src/Control-Pipe-Common.html#runPipe",
        "fct-type": "function",
        "title": "runPipe"
      },
      "index": {
        "description": "Run self-contained Pipeline converting it to an action in the base monad This function is exception-safe Any exception thrown in the base monad during execution of the pipeline will be captured by catch statements in the Pipe monad",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "runPipe",
        "normalized": "Pipeline a b-\u003ea b",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": "Pipeline m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPurePipe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a self-contained pipeline over an arbitrary monad, with fewer\n exception-safety guarantees than \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOnly pipe termination exceptions and exceptions thrown using\n \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e will be catchable within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n Any other exception will terminate execution immediately and finalizers will\n not be called.\n\u003c/p\u003e\u003cp\u003eAny captured exception will be returned in the left component of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipeline m r -\u003e m (Either SomeException r)",
        "fct-source": "src/Control-Pipe-Common.html#runPurePipe",
        "fct-type": "function",
        "title": "runPurePipe"
      },
      "index": {
        "description": "Run self-contained pipeline over an arbitrary monad with fewer exception-safety guarantees than runPipe Only pipe termination exceptions and exceptions thrown using throw will be catchable within the Pipe monad Any other exception will terminate execution immediately and finalizers will not be called Any captured exception will be returned in the left component of the result",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "runPurePipe",
        "normalized": "Pipeline a b-\u003ea(Either SomeException b)",
        "package": "pipes-core",
        "partial": "Pure Pipe",
        "signature": "Pipeline m r-\u003em(Either SomeException r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:runPurePipe_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunPurePipe\u003c/a\u003e\u003c/code\u003e which rethrows any captured exception instead\n of returning it.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "Pipeline m r -\u003e m r",
        "fct-source": "src/Control-Pipe-Common.html#runPurePipe_",
        "fct-type": "function",
        "title": "runPurePipe_"
      },
      "index": {
        "description": "version of runPurePipe which rethrows any captured exception instead of returning it",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "runPurePipe_",
        "normalized": "Pipeline a b-\u003ea b",
        "package": "pipes-core",
        "partial": "Pure Pipe",
        "signature": "Pipeline m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:throwP",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "SomeException -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Common.html#throwP",
        "fct-type": "function",
        "title": "throwP"
      },
      "index": {
        "description": "Throw an exception within the Pipe monad",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "throwP",
        "normalized": "SomeException-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "SomeException-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Common.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003ePass output downstream within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e blocks until the downstream pipe calls \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Common",
        "fct-package": "pipes-core",
        "fct-signature": "b -\u003e Pipe a b m ()",
        "fct-source": "src/Control-Pipe-Common.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Pass output downstream within the Pipe monad yield blocks until the downstream pipe calls await again",
        "hierarchy": "Control Pipe Common",
        "module": "Control.Pipe.Common",
        "name": "yield",
        "normalized": "a-\u003ePipe b a c()",
        "package": "pipes-core",
        "partial": "",
        "signature": "b-\u003ePipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#",
      "description": {
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a resource within the base monad, run a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, then ensure the\n resource is released.\n\u003c/p\u003e\u003cp\u003eThe typical example is reading from a file:\n\u003c/p\u003e\u003cpre\u003e bracket\n   (openFile \"filename\" ReadMode)\n   hClose\n   (\\handle -\u003e do\n       line \u003c- lift $ hGetLine handle\n       yield line\n       ...)\n\u003c/pre\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "m r-\u003e (r -\u003e m y)-\u003e (r -\u003e Pipe a b m x)-\u003e Pipe a b m x",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Allocate resource within the base monad run Pipe then ensure the resource is released The typical example is reading from file bracket openFile filename ReadMode hClose handle do line lift hGetLine handle yield line",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ePipe d e a f)-\u003ePipe d e a f",
        "package": "pipes-core",
        "partial": "",
        "signature": "m r-\u003e(r-\u003em y)-\u003e(r-\u003ePipe a b m x)-\u003ePipe a b m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracketOnError",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the \"release\" action if there was an\n exception raised by the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "m r-\u003e (r -\u003e m y)-\u003e (r -\u003e Pipe a b m x)-\u003e Pipe a b m x",
        "fct-type": "function",
        "title": "bracketOnError"
      },
      "index": {
        "description": "Like bracket but only performs the release action if there was an exception raised by the Pipe",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "bracketOnError",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ePipe d e a f)-\u003ePipe d e a f",
        "package": "pipes-core",
        "partial": "On Error",
        "signature": "m r-\u003e(r-\u003em y)-\u003e(r-\u003ePipe a b m x)-\u003ePipe a b m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the allocation action\n is not required.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "m r-\u003e m y-\u003e Pipe a b m x-\u003e Pipe a b m x",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "variant of bracket where the return value from the allocation action is not required",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "bracket_",
        "normalized": "a b-\u003ea c-\u003ePipe d e a f-\u003ePipe d e a f",
        "package": "pipes-core",
        "partial": "",
        "signature": "m r-\u003em y-\u003ePipe a b m x-\u003ePipe a b m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis function takes a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, runs it, and if an exception is raised it\n executes the handler, passing it the value of the exception.  Otherwise, the\n result is returned as normal.\n\u003c/p\u003e\u003cp\u003eFor example, given a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e reader :: Pipe () String IO ()\n\u003c/pre\u003e\u003cp\u003ewe can use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e to resume after an exception. For example:\n\u003c/p\u003e\u003cpre\u003e safeReader :: Pipe () (Either SomeException String) IO ()\n safeReader = catch (reader \u003e+\u003e 'Pipe' Right) $ \\e -\u003e do\n   yield $ Left e\n\u003c/pre\u003e\u003cp\u003eNote that only the initial monadic actions contained in a handler are\n guaranteed to be executed.  Anything else is subject to the usual\n termination rule of \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es: if a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e at either side terminates, the\n whole pipeline terminates.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r-\u003e (e -\u003e Pipe a b m r)-\u003e Pipe a b m r",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "Catch an exception within the Pipe monad This function takes Pipe runs it and if an exception is raised it executes the handler passing it the value of the exception Otherwise the result is returned as normal For example given Pipe reader Pipe String IO we can use catch to resume after an exception For example safeReader Pipe Either SomeException String IO safeReader catch reader Pipe Right do yield Left Note that only the initial monadic actions contained in handler are guaranteed to be executed Anything else is subject to the usual termination rule of Pipe if Pipe at either side terminates the whole pipeline terminates",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "catch",
        "normalized": "Pipe a b c d-\u003e(e-\u003ePipe a b c d)-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003e(e-\u003ePipe a b m r)-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eA specialized variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with just a computation to run\n afterwards.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r-\u003e m s-\u003e Pipe a b m r",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "specialized variant of bracket with just computation to run afterwards",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "finally",
        "normalized": "Pipe a b c d-\u003ec e-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003em s-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r-\u003e Pipe a b m s-\u003e Pipe a b m r",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Like finally but only performs the final action if there was an exception raised by the Pipe",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "onException",
        "normalized": "Pipe a b c d-\u003ePipe a b c e-\u003ePipe a b c d",
        "package": "pipes-core",
        "partial": "Exception",
        "signature": "Pipe a b m r-\u003ePipe a b m s-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Exception.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception within the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eAn exception thrown with \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e can be caught by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e with any base\n monad.\n\u003c/p\u003e\u003cp\u003eIf the exception is not caught in the \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e at all, it will be rethrown\n as a normal Haskell exception when using \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e.  Note that \u003ccode\u003e\u003ca\u003erunPurePipe\u003c/a\u003e\u003c/code\u003e\n returns the exception in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value, instead.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Exception",
        "fct-package": "pipes-core",
        "fct-signature": "e -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Exception.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "Throw an exception within the Pipe monad An exception thrown with throw can be caught by catch with any base monad If the exception is not caught in the Pipeline at all it will be rethrown as normal Haskell exception when using runPipe Note that runPurePipe returns the exception in an Either value instead",
        "hierarchy": "Control Pipe Exception",
        "module": "Control.Pipe.Exception",
        "name": "throw",
        "normalized": "a-\u003ePipe b c d e",
        "package": "pipes-core",
        "partial": "",
        "signature": "e-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#",
      "description": {
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Monoidal.html",
        "fct-type": "module",
        "title": "Monoidal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "Monoidal",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Monoidal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:-42--42--42-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two pipes into a single pipe that behaves like the first on the\n left component, and the second on the right component.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r -\u003e Pipe a' b' m r -\u003e Pipe (Either a a') (Either b b') m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#%2A%2A%2A",
        "fct-type": "function",
        "title": "(***)"
      },
      "index": {
        "description": "Combine two pipes into single pipe that behaves like the first on the left component and the second on the right component",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "(***) ***",
        "normalized": "Pipe a b c d-\u003ePipe e f c d-\u003ePipe(Either a e)(Either b f)c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003ePipe a' b' m r-\u003ePipe(Either a a')(Either b b')m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:associateP",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between the two possible associations of a triple sum.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either (Either a b) c) (Either a (Either b c)) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#associateP",
        "fct-type": "function",
        "title": "associateP"
      },
      "index": {
        "description": "Convert between the two possible associations of triple sum",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "associateP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:disassociateP",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003eassociateP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either a (Either b c)) (Either (Either a b) c) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#disassociateP",
        "fct-type": "function",
        "title": "disassociateP"
      },
      "index": {
        "description": "Inverse of associateP",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "disassociateP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:discardL",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard all values on the left component.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either x a) a m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#discardL",
        "fct-type": "function",
        "title": "discardL"
      },
      "index": {
        "description": "Discard all values on the left component",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "discardL",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:discardR",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard all values on the right component.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either a x) a m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#discardR",
        "fct-type": "function",
        "title": "discardR"
      },
      "index": {
        "description": "Discard all values on the right component",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "discardR",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:firstP",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e that behaves like the given \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e of the left component\n of the input, and lets values in the right component pass through.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r -\u003e Pipe (Either a c) (Either b c) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#firstP",
        "fct-type": "function",
        "title": "firstP"
      },
      "index": {
        "description": "Create Pipe that behaves like the given Pipe of the left component of the input and lets values in the right component pass through",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "firstP",
        "normalized": "Pipe a b c d-\u003ePipe(Either a e)(Either b e)c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003ePipe(Either a c)(Either b c)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:joinP",
      "description": {
        "fct-descr": "\u003cp\u003eYield both components of input values into the output.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either a a) a m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#joinP",
        "fct-type": "function",
        "title": "joinP"
      },
      "index": {
        "description": "Yield both components of input values into the output",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "joinP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:loopP",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eloopP\u003c/a\u003e\u003c/code\u003e combinator allows to create \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es whose output value is fed\n back to the \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e as input.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either a c) (Either b c) m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#loopP",
        "fct-type": "function",
        "title": "loopP"
      },
      "index": {
        "description": "The loopP combinator allows to create Pipe whose output value is fed back to the Pipe as input",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "loopP",
        "normalized": "Pipe(Either a b)(Either c b)d e-\u003ePipe a c d e",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe(Either a c)(Either b c)m r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:secondP",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is the equivalent of \u003ccode\u003e\u003ca\u003efirstP\u003c/a\u003e\u003c/code\u003e for the right component.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a b m r -\u003e Pipe (Either c a) (Either c b) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#secondP",
        "fct-type": "function",
        "title": "secondP"
      },
      "index": {
        "description": "This function is the equivalent of firstP for the right component",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "secondP",
        "normalized": "Pipe a b c d-\u003ePipe(Either e a)(Either e b)c d",
        "package": "pipes-core",
        "partial": "",
        "signature": "Pipe a b m r-\u003ePipe(Either c a)(Either c b)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:splitP",
      "description": {
        "fct-descr": "\u003cp\u003eYield all input values into both the left and right components of the\n output.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe a (Either a a) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#splitP",
        "fct-type": "function",
        "title": "splitP"
      },
      "index": {
        "description": "Yield all input values into both the left and right components of the output",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "splitP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe-Monoidal.html#v:swapP",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the left and right components.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Monoidal",
        "fct-package": "pipes-core",
        "fct-signature": "Pipe (Either a b) (Either b a) m r",
        "fct-source": "src/Control-Pipe-Monoidal.html#swapP",
        "fct-type": "function",
        "title": "swapP"
      },
      "index": {
        "description": "Swap the left and right components",
        "hierarchy": "Control Pipe Monoidal",
        "module": "Control.Pipe.Monoidal",
        "name": "swapP",
        "normalized": "",
        "package": "pipes-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-core/docs/Control-Pipe.html#",
      "description": {
        "fct-module": "Control.Pipe",
        "fct-package": "pipes-core",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe.html",
        "fct-type": "module",
        "title": "Pipe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe",
        "module": "Control.Pipe",
        "name": "Pipe",
        "normalized": "",
        "package": "pipes-core",
        "partial": "Pipe",
        "signature": ""
      }
    }
  }
]