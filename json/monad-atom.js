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
        "word": "monad-atom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Atom monad provides functions which convert objects to unique\n atoms (represented as Ints). Example:\n\u003c/p\u003e\u003cpre\u003e example = evalAtom $ do\n   xs \u003c- mapM toAtom \"abcabd\"\n   zs \u003c- mapM fromAtom xs\n   return $ zip zs xs\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[('a',0),('b',1),('c',2),('a',0),('b',1),('d',3)]\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Atom",
          "name": "Atom",
          "package": "monad-atom",
          "source": "src/Control-Monad-Atom.html",
          "type": "module"
        },
        "index": {
          "description": "The Atom monad provides functions which convert objects to unique atoms represented as Ints Example example evalAtom do xs mapM toAtom abcabd zs mapM fromAtom xs return zip zs xs example",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "Atom",
          "package": "monad-atom",
          "partial": "Atom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAtom\u003c/code\u003e is a specialized state monad for converting to and from\n \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "Atom",
          "package": "monad-atom",
          "source": "src/Control-Monad-Atom.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "Atom is specialized state monad for converting to and from Int",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "Atom",
          "package": "monad-atom",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAtomT\u003c/code\u003e is a specialized state monad transformer for converting\n to and from \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "AtomT",
          "package": "monad-atom",
          "source": "src/Control-Monad-Atom.html#AtomT",
          "type": "data"
        },
        "index": {
          "description": "AtomT is specialized state monad transformer for converting to and from Int",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "AtomT",
          "package": "monad-atom",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#t:AtomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAtomTable\u003c/code\u003e holds the state necessary for converting to and from\n \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "AtomTable",
          "package": "monad-atom",
          "source": "src/Control-Monad-Atom.html#AtomTable",
          "type": "data"
        },
        "index": {
          "description": "AtomTable holds the state necessary for converting to and from Int",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "AtomTable",
          "package": "monad-atom",
          "partial": "Atom Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#t:AtomTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eempty\u003c/code\u003e is the initial empty \u003ccode\u003eAtomTable\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "empty",
          "package": "monad-atom",
          "signature": "AtomTable a",
          "source": "src/Control-Monad-Atom.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty is the initial empty AtomTable",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "empty",
          "package": "monad-atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eevalAtom c\u003c/code\u003e runs computation c in the Atom monad with the empty\n initial \u003ccode\u003eAtomTable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "evalAtom",
          "package": "monad-atom",
          "signature": "Atom a r -\u003e r",
          "source": "src/Control-Monad-Atom.html#evalAtom",
          "type": "function"
        },
        "index": {
          "description": "evalAtom runs computation in the Atom monad with the empty initial AtomTable",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "evalAtom",
          "normalized": "Atom a b-\u003eb",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "Atom a r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:evalAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eevalAtomT c\u003c/code\u003e runs computation c in the AtomT monad transformer\n with the empty initial \u003ccode\u003eAtomTable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "evalAtomT",
          "package": "monad-atom",
          "signature": "AtomT a m r -\u003e m r",
          "source": "src/Control-Monad-Atom.html#evalAtomT",
          "type": "function"
        },
        "index": {
          "description": "evalAtomT runs computation in the AtomT monad transformer with the empty initial AtomTable",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "evalAtomT",
          "normalized": "AtomT a b c-\u003eb c",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "AtomT a m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:evalAtomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromAtom i\u003c/code\u003e converts the \u003ccode\u003eInt\u003c/code\u003e \u003ccode\u003ei\u003c/code\u003e to its corresponding object\n in the Atom monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "fromAtom",
          "package": "monad-atom",
          "signature": "Int -\u003e m (Key m)",
          "source": "src/Control-Monad-Atom.html#fromAtom",
          "type": "function"
        },
        "index": {
          "description": "fromAtom converts the Int to its corresponding object in the Atom monad",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "fromAtom",
          "normalized": "Int-\u003ea(Key a)",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "Int-\u003em(Key m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:fromAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mapping stored in the atom table\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "mapping",
          "package": "monad-atom",
          "signature": "AtomTable a -\u003e Map a Int",
          "source": "src/Control-Monad-Atom.html#mapping",
          "type": "function"
        },
        "index": {
          "description": "The mapping stored in the atom table",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "mapping",
          "normalized": "AtomTable a-\u003eMap a Int",
          "package": "monad-atom",
          "signature": "AtomTable a-\u003eMap a Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emaybeToAtom x\u003c/code\u003e converts \u003ccode\u003ex\u003c/code\u003e to a unique \u003ccode\u003eInt\u003c/code\u003e in the \u003ccode\u003eAtom\u003c/code\u003e\n monad only if \u003ccode\u003ex\u003c/code\u003e already has a corresponding \u003ccode\u003eInt\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "maybeToAtom",
          "package": "monad-atom",
          "signature": "Key m -\u003e m (Maybe Int)",
          "source": "src/Control-Monad-Atom.html#maybeToAtom",
          "type": "function"
        },
        "index": {
          "description": "maybeToAtom converts to unique Int in the Atom monad only if already has corresponding Int",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "maybeToAtom",
          "normalized": "Key a-\u003ea(Maybe Int)",
          "package": "monad-atom",
          "partial": "To Atom",
          "signature": "Key m-\u003em(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:maybeToAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunAtom c s\u003c/code\u003e runs computation c in the Atom monad with the\n initial \u003ccode\u003eAtomTable\u003c/code\u003e s.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "runAtom",
          "package": "monad-atom",
          "signature": "Atom a r -\u003e AtomTable a -\u003e (r, AtomTable a)",
          "source": "src/Control-Monad-Atom.html#runAtom",
          "type": "function"
        },
        "index": {
          "description": "runAtom runs computation in the Atom monad with the initial AtomTable",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "runAtom",
          "normalized": "Atom a b-\u003eAtomTable a-\u003e(b,AtomTable a)",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "Atom a r-\u003eAtomTable a-\u003e(r,AtomTable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:runAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunAtomT c s\u003c/code\u003e runs computation c in the AtomT monad transformer\n with the initial \u003ccode\u003eAtomTable\u003c/code\u003e s.\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "runAtomT",
          "package": "monad-atom",
          "signature": "AtomT a m r -\u003e AtomTable a -\u003e m (r, AtomTable a)",
          "source": "src/Control-Monad-Atom.html#runAtomT",
          "type": "function"
        },
        "index": {
          "description": "runAtomT runs computation in the AtomT monad transformer with the initial AtomTable",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "runAtomT",
          "normalized": "AtomT a b c-\u003eAtomTable a-\u003eb(c,AtomTable a)",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "AtomT a m r-\u003eAtomTable a-\u003em(r,AtomTable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:runAtomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoAtom x\u003c/code\u003e converts \u003ccode\u003ex\u003c/code\u003e to a unique \u003ccode\u003eInt\u003c/code\u003e in the \u003ccode\u003eAtom\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Control.Monad.Atom",
          "name": "toAtom",
          "package": "monad-atom",
          "signature": "Key m -\u003e m Int",
          "source": "src/Control-Monad-Atom.html#toAtom",
          "type": "function"
        },
        "index": {
          "description": "toAtom converts to unique Int in the Atom monad",
          "hierarchy": "Control Monad Atom",
          "module": "Control.Monad.Atom",
          "name": "toAtom",
          "normalized": "Key a-\u003ea Int",
          "package": "monad-atom",
          "partial": "Atom",
          "signature": "Key m-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-atom/docs/Control-Monad-Atom.html#v:toAtom"
      }
    }
  ]
]