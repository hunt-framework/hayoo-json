[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Atom monad provides functions which convert objects to unique\n atoms (represented as Ints). Example:\n\u003c/p\u003e\u003cpre\u003e example = evalAtom $ do \n   xs \u003c- mapM toAtom \"abcabd\"\n   zs \u003c- mapM fromAtom xs \n   return $ zip zs xs\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[('a',0),('b',1),('c',2),('a',0),('b',1),('d',3)]\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Atom.html",
        "fct-type": "module",
        "title": "Atom"
      },
      "index": {
        "description": "The Atom monad provides functions which convert objects to unique atoms represented as Ints Example example evalAtom do xs mapM toAtom abcabd zs mapM fromAtom xs return zip zs xs example",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "Atom",
        "normalized": "",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#t:Atom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAtom\u003c/code\u003e is a specialized state monad for converting to and from\n \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Atom.html#Atom",
        "fct-type": "data",
        "title": "Atom"
      },
      "index": {
        "description": "Atom is specialized state monad for converting to and from Int",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "Atom",
        "normalized": "",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#t:AtomTable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAtomTable\u003c/code\u003e holds the state necessary for converting to and from\n \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Atom.html#AtomTable",
        "fct-type": "data",
        "title": "AtomTable"
      },
      "index": {
        "description": "AtomTable holds the state necessary for converting to and from Int",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "AtomTable",
        "normalized": "",
        "package": "monad-atom-simple",
        "partial": "Atom Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eempty\u003c/code\u003e is the initial empty \u003ccode\u003eAtomTable\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "AtomTable a",
        "fct-source": "src/Control-Monad-Atom.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is the initial empty AtomTable",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "empty",
        "normalized": "",
        "package": "monad-atom-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:evalAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eevalAtom c\u003c/code\u003e runs computation c in the Atom monad with the empty\n initial \u003ccode\u003eAtomTable\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "Atom a t -\u003e t",
        "fct-source": "src/Control-Monad-Atom.html#evalAtom",
        "fct-type": "function",
        "title": "evalAtom"
      },
      "index": {
        "description": "evalAtom runs computation in the Atom monad with the empty initial AtomTable",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "evalAtom",
        "normalized": "Atom a b-\u003eb",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": "Atom a t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:fromAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromAtom i\u003c/code\u003e converts the \u003ccode\u003eInt\u003c/code\u003e \u003ccode\u003ei\u003c/code\u003e to its corresponding object\n in the Atom monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "Int -\u003e Atom a a",
        "fct-source": "src/Control-Monad-Atom.html#fromAtom",
        "fct-type": "function",
        "title": "fromAtom"
      },
      "index": {
        "description": "fromAtom converts the Int to its corresponding object in the Atom monad",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "fromAtom",
        "normalized": "Int-\u003eAtom a a",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": "Int-\u003eAtom a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:mapping",
      "description": {
        "fct-descr": "\u003cp\u003eThe mapping stored in the atom table\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "AtomTable a -\u003e Map a Int",
        "fct-source": "src/Control-Monad-Atom.html#mapping",
        "fct-type": "function",
        "title": "mapping"
      },
      "index": {
        "description": "The mapping stored in the atom table",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "mapping",
        "normalized": "AtomTable a-\u003eMap a Int",
        "package": "monad-atom-simple",
        "partial": "",
        "signature": "AtomTable a-\u003eMap a Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:maybeToAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emaybeToAtom x\u003c/code\u003e converts \u003ccode\u003ex\u003c/code\u003e to a unique \u003ccode\u003eInt\u003c/code\u003e in the \u003ccode\u003eAtom\u003c/code\u003e\n monad only if \u003ccode\u003ex\u003c/code\u003e already has a corresponding \u003ccode\u003eInt\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "a -\u003e Atom a (Maybe Int)",
        "fct-source": "src/Control-Monad-Atom.html#maybeToAtom",
        "fct-type": "function",
        "title": "maybeToAtom"
      },
      "index": {
        "description": "maybeToAtom converts to unique Int in the Atom monad only if already has corresponding Int",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "maybeToAtom",
        "normalized": "a-\u003eAtom a(Maybe Int)",
        "package": "monad-atom-simple",
        "partial": "To Atom",
        "signature": "a-\u003eAtom a(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:runAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erunAtom c s\u003c/code\u003e runs computation c in the Atom monad with the\n initial \u003ccode\u003eAtomTable\u003c/code\u003e s.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "Atom a t -\u003e AtomTable a -\u003e (t, AtomTable a)",
        "fct-source": "src/Control-Monad-Atom.html#runAtom",
        "fct-type": "function",
        "title": "runAtom"
      },
      "index": {
        "description": "runAtom runs computation in the Atom monad with the initial AtomTable",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "runAtom",
        "normalized": "Atom a b-\u003eAtomTable a-\u003e(b,AtomTable a)",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": "Atom a t-\u003eAtomTable a-\u003e(t,AtomTable a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-atom-simple/docs/Control-Monad-Atom.html#v:toAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoAtom x\u003c/code\u003e converts \u003ccode\u003ex\u003c/code\u003e to a unique \u003ccode\u003eInt\u003c/code\u003e in the \u003ccode\u003eAtom\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Atom",
        "fct-package": "monad-atom-simple",
        "fct-signature": "a -\u003e Atom a Int",
        "fct-source": "src/Control-Monad-Atom.html#toAtom",
        "fct-type": "function",
        "title": "toAtom"
      },
      "index": {
        "description": "toAtom converts to unique Int in the Atom monad",
        "hierarchy": "Control Monad Atom",
        "module": "Control.Monad.Atom",
        "name": "toAtom",
        "normalized": "a-\u003eAtom a Int",
        "package": "monad-atom-simple",
        "partial": "Atom",
        "signature": "a-\u003eAtom a Int"
      }
    }
  }
]