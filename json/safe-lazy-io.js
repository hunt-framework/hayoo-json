[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:!\u003e\u003e=",
      "description": {
        "fct-descr": "A kind of strict \u003cem\u003ebind\u003c/em\u003e over lazy inputs.\n",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI sa -\u003e (sa -\u003e LI b) -\u003e LI b",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#%21%3E%3E%3D",
        "fct-type": "unknown",
        "title": "!\u003e\u003e="
      },
      "index": {
        "description": "kind of strict bind over lazy inputs",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "!\u003e\u003e=",
        "normalized": "LI a-\u003e(a-\u003eLI b)-\u003eLI b",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI sa-\u003e(sa-\u003eLI b)-\u003eLI b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:=\u003c\u003c!",
      "description": {
        "fct-descr": "Same as \u003ctt\u003e\u003ca\u003e!\u003e\u003e=\u003c/a\u003e\u003c/tt\u003e but with arguments flipped.\n",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(sa -\u003e LI b) -\u003e LI sa -\u003e LI b",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#%3D%3C%3C%21",
        "fct-type": "unknown",
        "title": "=\u003c\u003c!"
      },
      "index": {
        "description": "Same as but with arguments flipped",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "=\u003c\u003c!",
        "normalized": "(a-\u003eLI b)-\u003eLI a-\u003eLI b",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "(sa-\u003eLI b)-\u003eLI sa-\u003eLI b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:ap'",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a function wrapped as a lazy input and an argument.\n This is like \u003ctt\u003e\u003ca\u003eap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/tt\u003e but stricter.\n\u003c/p\u003e\u003cp\u003eNote that since functions types are not member of \u003ctt\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/tt\u003e, this function\n is the only one dealing with functions wrapped as lazy inputs.\n\u003c/p\u003e\u003cp\u003eHowever as with \u003ctt\u003e\u003ca\u003eap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/tt\u003e, this function generalize \u003ctt\u003e\u003ca\u003elift2ForceSecond\u003c/a\u003e\u003c/tt\u003e, lift3Fst...\n\u003c/p\u003e\u003cp\u003eExample:\n \u003ctt\u003e\n lift3Fst f x y z = f \u003ca\u003e$\u003c/a\u003e x \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e y \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e z\n\nlift3strict f x y z = pureLI f \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e x \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e y \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e z\n \u003c/tt\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e function only deeply force the second argument, so in the case\n of chaining, the arguments will be forced from left to right. Note that\n if one starts the chain by lifting the function using \u003ctt\u003e\u003ca\u003epureLI\u003c/a\u003e\u003c/tt\u003e, then all\n the arguments will be forced. One can let one of the arguments lazy\n by using note however that if one start the chain with \u003ctt\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/tt\u003e (same as\n \u003ctt\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/tt\u003e) then the first argument would not be forced, but one\n can start with \u003ctt\u003e\u003ca\u003epureLI\u003c/a\u003e\u003c/tt\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI (sa -\u003e b) -\u003e LI sa -\u003e LI b",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#ap%27",
        "fct-type": "unknown",
        "title": "ap'"
      },
      "index": {
        "description": "Combines function wrapped as lazy input and an argument This is like ap or but stricter Note that since functions types are not member of NFData this function is the only one dealing with functions wrapped as lazy inputs However as with ap or this function generalize lift2ForceSecond lift3Fst Example lift3Fst ap ap lift3strict pureLI ap ap ap The ap function only deeply force the second argument so in the case of chaining the arguments will be forced from left to right Note that if one starts the chain by lifting the function using pureLI then all the arguments will be forced One can let one of the arguments lazy by using note however that if one start the chain with same as fmap or liftM then the first argument would not be forced but one can start with pureLI",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "ap'",
        "normalized": "LI(a-\u003eb)-\u003eLI a-\u003eLI b",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI(sa-\u003eb)-\u003eLI sa-\u003eLI b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceBoth",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that both arguments are deeply forced before calling the function.\n See \u003ctt\u003e\u003ca\u003elift2ForceFirst\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003elift2ForceSecond\u003c/a\u003e\u003c/tt\u003e for lazier versions.\n\u003c/p\u003e\u003cp\u003eThis one can also be generalized to n-ary functions:\n\u003c/p\u003e\u003cpre\u003e\n liftN f mx1 mx2 ... mxN = pureLI f \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mx1 \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mx2 \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e ... \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mxN\n\u003c/pre\u003e",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(sa -\u003e sb -\u003e c) -\u003e LI sa -\u003e LI sb -\u003e LI c",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceBoth",
        "fct-type": "unknown",
        "title": "lift2ForceBoth"
      },
      "index": {
        "description": "Lift pure two arguments function to function over lazy inputs Note that both arguments are deeply forced before calling the function See lift2ForceFirst and lift2ForceSecond for lazier versions This one can also be generalized to n-ary functions liftN mx1 mx2 mxN pureLI ap mx1 ap mx2 ap ap mxN",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "lift2ForceBoth",
        "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
        "package": "safe-lazy-io",
        "partial": "Force Both",
        "signature": "(sa-\u003esb-\u003ec)-\u003eLI sa-\u003eLI sb-\u003eLI c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceFirst",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that the only the first argument is deeply forced before calling the function.\n\u003c/p\u003e\u003cp\u003eThe strictness is here to enforce the evaluation order of reading inputs.\n\u003c/p\u003e\u003cp\u003eThis lifting function can be generalized to n-ary functions, all arguments\n but the last one will be deeply forced.\n\u003c/p\u003e\u003cpre\u003e\n liftN f mx1 mx2 ... mxN = mx1 !\u003e\u003e= x1 -\u003e mx2 !\u003e\u003e= x2 -\u003e ... f x1 x2 \u003ca\u003e$\u003c/a\u003e mxN\n\u003c/pre\u003e",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(sa -\u003e b -\u003e c) -\u003e LI sa -\u003e LI b -\u003e LI c",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceFirst",
        "fct-type": "unknown",
        "title": "lift2ForceFirst"
      },
      "index": {
        "description": "Lift pure two arguments function to function over lazy inputs Note that the only the first argument is deeply forced before calling the function The strictness is here to enforce the evaluation order of reading inputs This lifting function can be generalized to n-ary functions all arguments but the last one will be deeply forced liftN mx1 mx2 mxN mx1 x1 mx2 x2 x1 x2 mxN",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "lift2ForceFirst",
        "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
        "package": "safe-lazy-io",
        "partial": "Force First",
        "signature": "(sa-\u003eb-\u003ec)-\u003eLI sa-\u003eLI b-\u003eLI c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceSecond",
      "description": {
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(a -\u003e sb -\u003e c) -\u003e LI a -\u003e LI sb -\u003e LI c",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceSecond",
        "fct-type": "unknown",
        "title": "lift2ForceSecond"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "lift2ForceSecond",
        "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
        "package": "safe-lazy-io",
        "partial": "Force Second",
        "signature": "(a-\u003esb-\u003ec)-\u003eLI a-\u003eLI sb-\u003eLI c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2MayForceFirst",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that the only the first argument \u003cem\u003emay\u003c/em\u003e be deeply forced.\n In particular it is deeply forced if the function use its second argument.\n\u003c/p\u003e\u003cp\u003eThe strictness is here to enforce the evaluation order of reading inputs.\n\u003c/p\u003e\u003cp\u003eSince too much strictness breaks the interest of lazy inputs, one provides\n more specific but lazier combinators like \u003ctt\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/tt\u003e, and \u003ctt\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(sa -\u003e b -\u003e c) -\u003e LI sa -\u003e LI b -\u003e LI c",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2MayForceFirst",
        "fct-type": "unknown",
        "title": "lift2MayForceFirst"
      },
      "index": {
        "description": "Lift pure two arguments function to function over lazy inputs Note that the only the first argument may be deeply forced In particular it is deeply forced if the function use its second argument The strictness is here to enforce the evaluation order of reading inputs Since too much strictness breaks the interest of lazy inputs one provides more specific but lazier combinators like append interleave and zip",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "lift2MayForceFirst",
        "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
        "package": "safe-lazy-io",
        "partial": "May Force First",
        "signature": "(sa-\u003eb-\u003ec)-\u003eLI sa-\u003eLI b-\u003eLI c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:sequence",
      "description": {
        "fct-descr": "Turns a list of lazy inputs as an input of list.\n",
        "fct-module": "System.IO.Lazy.Input.Extra",
        "fct-package": "safe-lazy-io",
        "fct-signature": "[LI sa] -\u003e LI [sa]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#sequence",
        "fct-type": "unknown",
        "title": "sequence"
      },
      "index": {
        "description": "Turns list of lazy inputs as an input of list",
        "hierarchy": "System IO Lazy Input Extra",
        "module": "System.IO.Lazy.Input.Extra",
        "name": "sequence",
        "normalized": "[LI a]-\u003eLI[a]",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "[LI sa]-\u003eLI[sa]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#t:Finalized",
      "description": {
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#Finalized",
        "fct-type": "unknown",
        "title": "Finalized"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "Finalized",
        "normalized": "",
        "package": "safe-lazy-io",
        "partial": "Finalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#t:LI",
      "description": {
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "newtype",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#LI",
        "fct-type": "unknown",
        "title": "LI"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "LI",
        "normalized": "",
        "package": "safe-lazy-io",
        "partial": "LI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:catchEOF",
      "description": {
        "fct-descr": "\u003ctt\u003ex `catchEOF` y\u003c/tt\u003e performs \u003ctt\u003ex\u003c/tt\u003e and if it fails due to the EOF error then performs \u003ctt\u003ey\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "IO a -\u003e IO a -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#catchEOF",
        "fct-type": "unknown",
        "title": "catchEOF"
      },
      "index": {
        "description": "catchEOF performs and if it fails due to the EOF error then performs",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "catchEOF",
        "normalized": "IO a-\u003eIO a-\u003eIO a",
        "package": "safe-lazy-io",
        "partial": "EOF",
        "signature": "IO a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:chanFromList",
      "description": {
        "fct-descr": "Take a list and returns a new channel the list written in it.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "[a] -\u003e IO (Chan a)",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#chanFromList",
        "fct-type": "unknown",
        "title": "chanFromList"
      },
      "index": {
        "description": "Take list and returns new channel the list written in it",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "chanFromList",
        "normalized": "[a]-\u003eIO(Chan a)",
        "package": "safe-lazy-io",
        "partial": "From List",
        "signature": "[a]-\u003eIO(Chan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:finalize",
      "description": {
        "fct-descr": "Run a \u003cem\u003efinalized\u003c/em\u003e computation.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Finalized (IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#finalize",
        "fct-type": "unknown",
        "title": "finalize"
      },
      "index": {
        "description": "Run finalized computation",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "finalize",
        "normalized": "Finalized(IO a)-\u003eIO a",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "Finalized(IO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:finallyLI",
      "description": {
        "fct-descr": "Build lazy input (\u003ctt\u003e\u003ca\u003eLI\u003c/a\u003e\u003c/tt\u003e) from an \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e computation and a \u003ctt\u003e\u003ca\u003efinalizer\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "IO a -\u003e IO () -\u003e LI a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#finallyLI",
        "fct-type": "unknown",
        "title": "finallyLI"
      },
      "index": {
        "description": "Build lazy input LI from an IO computation and finalizer",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "finallyLI",
        "normalized": "IO a-\u003eIO()-\u003eLI a",
        "package": "safe-lazy-io",
        "partial": "LI",
        "signature": "IO a-\u003eIO()-\u003eLI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:mapFinalized",
      "description": {
        "fct-descr": "Update the underlying \u003ctt\u003e\u003ca\u003eFinalized\u003c/a\u003e\u003c/tt\u003e value.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(Finalized a -\u003e Finalized b) -\u003e LI a -\u003e LI b",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#mapFinalized",
        "fct-type": "unknown",
        "title": "mapFinalized"
      },
      "index": {
        "description": "Update the underlying Finalized value",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "mapFinalized",
        "normalized": "(Finalized a-\u003eFinalized b)-\u003eLI a-\u003eLI b",
        "package": "safe-lazy-io",
        "partial": "Finalized",
        "signature": "(Finalized a-\u003eFinalized b)-\u003eLI a-\u003eLI b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:nonFinalized",
      "description": {
        "fct-descr": "Build lazy input (\u003ctt\u003e\u003ca\u003eLI\u003c/a\u003e\u003c/tt\u003e) from an \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e computation.\n Use this function when the computation does not require a finalizer.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "IO a -\u003e LI a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#nonFinalized",
        "fct-type": "unknown",
        "title": "nonFinalized"
      },
      "index": {
        "description": "Build lazy input LI from an IO computation Use this function when the computation does not require finalizer",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "nonFinalized",
        "normalized": "IO a-\u003eLI a",
        "package": "safe-lazy-io",
        "partial": "Finalized",
        "signature": "IO a-\u003eLI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:rnfList",
      "description": {
        "fct-descr": "This function lazily returns an element strict list.\n It is lazier than \u003ctt\u003ernf\u003c/tt\u003e and stricter than \u003ctt\u003emap (\\x-\u003e rnf x \u003ctt\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/tt\u003e x)\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input.Internals",
        "fct-package": "safe-lazy-io",
        "fct-signature": "[sa] -\u003e [sa]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#rnfList",
        "fct-type": "unknown",
        "title": "rnfList"
      },
      "index": {
        "description": "This function lazily returns an element strict list It is lazier than rnf and stricter than map rnf seq",
        "hierarchy": "System IO Lazy Input Internals",
        "module": "System.IO.Lazy.Input.Internals",
        "name": "rnfList",
        "normalized": "[a]-\u003e[a]",
        "package": "safe-lazy-io",
        "partial": "List",
        "signature": "[sa]-\u003e[sa]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#t:LI",
      "description": {
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#LI",
        "fct-type": "unknown",
        "title": "LI"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "LI",
        "normalized": "",
        "package": "safe-lazy-io",
        "partial": "LI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:append",
      "description": {
        "fct-descr": "Sequence two lazy inputs that produces lists as one only\n list. Note that the resource management is precise. As\n soon as the beginning of the second input is required,\n the resource of the first input is released and the\n the second resource is acquired.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI [sa] -\u003e LI [sa] -\u003e LI [sa]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#append",
        "fct-type": "unknown",
        "title": "append"
      },
      "index": {
        "description": "Sequence two lazy inputs that produces lists as one only list Note that the resource management is precise As soon as the beginning of the second input is required the resource of the first input is released and the the second resource is acquired",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "append",
        "normalized": "LI[a]-\u003eLI[a]-\u003eLI[a]",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI[sa]-\u003eLI[sa]-\u003eLI[sa]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:concat",
      "description": {
        "fct-descr": "Same as \u003ctt\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/tt\u003e but for a list of inputs.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "[LI [sa]] -\u003e LI [sa]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#concat",
        "fct-type": "unknown",
        "title": "concat"
      },
      "index": {
        "description": "Same as append but for list of inputs",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "concat",
        "normalized": "[LI[a]]-\u003eLI[a]",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "[LI[sa]]-\u003eLI[sa]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:getChanContents",
      "description": {
        "fct-descr": "Return a lazy list representing the contents of the supplied\n \u003ctt\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/tt\u003e, much like System.IO.hGetContents.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Chan a -\u003e LI [a]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#getChanContents",
        "fct-type": "unknown",
        "title": "getChanContents"
      },
      "index": {
        "description": "Return lazy list representing the contents of the supplied Chan much like System.IO.hGetContents",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "getChanContents",
        "normalized": "Chan a-\u003eLI[a]",
        "package": "safe-lazy-io",
        "partial": "Chan Contents",
        "signature": "Chan a-\u003eLI[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:getContents",
      "description": {
        "fct-descr": "Returns the contents of standard input lazily.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI String",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#getContents",
        "fct-type": "unknown",
        "title": "getContents"
      },
      "index": {
        "description": "Returns the contents of standard input lazily",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "getContents",
        "normalized": "",
        "package": "safe-lazy-io",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:hGetContents",
      "description": {
        "fct-descr": "Returns the contents of the given handle lazily.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Handle -\u003e LI String",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#hGetContents",
        "fct-type": "unknown",
        "title": "hGetContents"
      },
      "index": {
        "description": "Returns the contents of the given handle lazily",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "hGetContents",
        "normalized": "Handle-\u003eLI String",
        "package": "safe-lazy-io",
        "partial": "Get Contents",
        "signature": "Handle-\u003eLI String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:interleave",
      "description": {
        "fct-descr": "Takes two lazy inputs and returns a single interleaved lazy input.\n Note that this function is left biased, this is always the left\n canal that is read first. This function is rarely used directly\n with file contents since it mixes the two contents, one generally\n use some tagging to separate them back. Look at \u003ctt\u003e\u003ca\u003einterleaveEither\u003c/a\u003e\u003c/tt\u003e\n for such a function.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI [sa] -\u003e LI [sa] -\u003e LI [sa]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#interleave",
        "fct-type": "unknown",
        "title": "interleave"
      },
      "index": {
        "description": "Takes two lazy inputs and returns single interleaved lazy input Note that this function is left biased this is always the left canal that is read first This function is rarely used directly with file contents since it mixes the two contents one generally use some tagging to separate them back Look at interleaveEither for such function",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "interleave",
        "normalized": "LI[a]-\u003eLI[a]-\u003eLI[a]",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI[sa]-\u003eLI[sa]-\u003eLI[sa]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:interleaveEither",
      "description": {
        "fct-descr": "Like \u003ctt\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/tt\u003e but it starts by tagging the left input by \u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e and right\n input by \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e leading to lazy input of \u003ctt\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/tt\u003es.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI [sa] -\u003e LI [sb] -\u003e LI [Either sa sb]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#interleaveEither",
        "fct-type": "unknown",
        "title": "interleaveEither"
      },
      "index": {
        "description": "Like interleave but it starts by tagging the left input by Left and right input by Right leading to lazy input of Either",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "interleaveEither",
        "normalized": "LI[a]-\u003eLI[b]-\u003eLI[Either a b]",
        "package": "safe-lazy-io",
        "partial": "Either",
        "signature": "LI[sa]-\u003eLI[sb]-\u003eLI[Either sa sb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:pureLI",
      "description": {
        "fct-descr": "Any pure data can lifted as lazy input.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "a -\u003e LI a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#pureLI",
        "fct-type": "unknown",
        "title": "pureLI"
      },
      "index": {
        "description": "Any pure data can lifted as lazy input",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "pureLI",
        "normalized": "a-\u003eLI a",
        "package": "safe-lazy-io",
        "partial": "LI",
        "signature": "a-\u003eLI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:readFile",
      "description": {
        "fct-descr": "Like \u003ctt\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/tt\u003e but it takes a \u003ctt\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "FilePath -\u003e LI String",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#readFile",
        "fct-type": "unknown",
        "title": "readFile"
      },
      "index": {
        "description": "Like hGetContents but it takes FilePath",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "readFile",
        "normalized": "FilePath-\u003eLI String",
        "package": "safe-lazy-io",
        "partial": "File",
        "signature": "FilePath-\u003eLI String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:run",
      "description": {
        "fct-descr": "Extract the data from a lazy input, this is commonly\n used to actually run the given process over lazy inputs.\n As in all the functions that requires a \u003ctt\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/tt\u003e instance\n this means the result will forced using \u003ctt\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI sa -\u003e IO sa",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#run",
        "fct-type": "unknown",
        "title": "run"
      },
      "index": {
        "description": "Extract the data from lazy input this is commonly used to actually run the given process over lazy inputs As in all the functions that requires NFData instance this means the result will forced using rnf",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "run",
        "normalized": "LI a-\u003eIO a",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI sa-\u003eIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:run'",
      "description": {
        "fct-descr": "Pretty much as \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e expect that one can use strict\n \u003cem\u003eIO\u003c/em\u003es (\u003ca\u003eSystem.IO.Strict\u003c/a\u003e) to produce the final result.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI (SIO sa) -\u003e IO sa",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#run%27",
        "fct-type": "unknown",
        "title": "run'"
      },
      "index": {
        "description": "Pretty much as run expect that one can use strict IO System.IO.Strict to produce the final result",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "run'",
        "normalized": "LI(SIO a)-\u003eIO a",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI(SIO sa)-\u003eIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:runAsSIO",
      "description": {
        "fct-descr": "Pretty much as \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e but live in the \u003ctt\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/tt\u003e monad instead of \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI sa -\u003e SIO sa",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#runAsSIO",
        "fct-type": "unknown",
        "title": "runAsSIO"
      },
      "index": {
        "description": "Pretty much as run but live in the SIO monad instead of IO",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "runAsSIO",
        "normalized": "LI a-\u003eSIO a",
        "package": "safe-lazy-io",
        "partial": "As SIO",
        "signature": "LI sa-\u003eSIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:runAsSIO'",
      "description": {
        "fct-descr": "Pretty much as \u003ctt\u003e\u003ca\u003erun'\u003c/a\u003e\u003c/tt\u003e but live in the \u003ctt\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/tt\u003e monad instead of \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI (SIO sa) -\u003e SIO sa",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#runAsSIO%27",
        "fct-type": "unknown",
        "title": "runAsSIO'"
      },
      "index": {
        "description": "Pretty much as run but live in the SIO monad instead of IO",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "runAsSIO'",
        "normalized": "LI(SIO a)-\u003eSIO a",
        "package": "safe-lazy-io",
        "partial": "As SIO'",
        "signature": "LI(SIO sa)-\u003eSIO sa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:trace",
      "description": {
        "fct-descr": "Add debugging messages using the given string.\n This will returns the same lazy input but more verbose.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "String -\u003e LI a -\u003e LI a",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#trace",
        "fct-type": "unknown",
        "title": "trace"
      },
      "index": {
        "description": "Add debugging messages using the given string This will returns the same lazy input but more verbose",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "trace",
        "normalized": "String-\u003eLI a-\u003eLI a",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "String-\u003eLI a-\u003eLI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two lazy inputs as a single lazy input of pairs.\n\u003c/p\u003e\u003cp\u003eNote that if one input list is short, excess elements of the longer list are discarded.\n\u003c/p\u003e",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "LI [sa] -\u003e LI [sb] -\u003e LI [(sa, sb)]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zip",
        "fct-type": "unknown",
        "title": "zip"
      },
      "index": {
        "description": "Combine two lazy inputs as single lazy input of pairs Note that if one input list is short excess elements of the longer list are discarded",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "zip",
        "normalized": "LI[a]-\u003eLI[b]-\u003eLI[(a,b)]",
        "package": "safe-lazy-io",
        "partial": "",
        "signature": "LI[sa]-\u003eLI[sb]-\u003eLI[(sa,sb)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipHandles",
      "description": {
        "fct-descr": "A shorthand for \u003ctt\u003e\\h1 h2-\u003e zip (hGetContents h1) (hGetContents h2)\u003c/tt\u003e.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Handle -\u003e Handle -\u003e LI [(Char, Char)]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipHandles",
        "fct-type": "unknown",
        "title": "zipHandles"
      },
      "index": {
        "description": "shorthand for h1 h2 zip hGetContents h1 hGetContents h2",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "zipHandles",
        "normalized": "Handle-\u003eHandle-\u003eLI[(Char,Char)]",
        "package": "safe-lazy-io",
        "partial": "Handles",
        "signature": "Handle-\u003eHandle-\u003eLI[(Char,Char)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipMaybesWith",
      "description": {
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(Maybe sa -\u003e Maybe sb -\u003e c) -\u003e LI [sa] -\u003e LI [sb] -\u003e LI [c]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipMaybesWith",
        "fct-type": "unknown",
        "title": "zipMaybesWith"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "zipMaybesWith",
        "normalized": "(Maybe a-\u003eMaybe b-\u003ec)-\u003eLI[a]-\u003eLI[b]-\u003eLI[c]",
        "package": "safe-lazy-io",
        "partial": "Maybes With",
        "signature": "(Maybe sa-\u003eMaybe sb-\u003ec)-\u003eLI[sa]-\u003eLI[sb]-\u003eLI[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipWith",
      "description": {
        "fct-descr": "\u003ctt\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/tt\u003e generalize \u003ctt\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/tt\u003e with any combining function.\n",
        "fct-module": "System.IO.Lazy.Input",
        "fct-package": "safe-lazy-io",
        "fct-signature": "(sa -\u003e sb -\u003e c) -\u003e LI [sa] -\u003e LI [sb] -\u003e LI [c]",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipWith",
        "fct-type": "unknown",
        "title": "zipWith"
      },
      "index": {
        "description": "zipWith generalize zip with any combining function",
        "hierarchy": "System IO Lazy Input",
        "module": "System.IO.Lazy.Input",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eLI[a]-\u003eLI[b]-\u003eLI[c]",
        "package": "safe-lazy-io",
        "partial": "With",
        "signature": "(sa-\u003esb-\u003ec)-\u003eLI[sa]-\u003eLI[sb]-\u003eLI[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Unsafe-GetContents.html#v:lazyRead",
      "description": {
        "fct-module": "System.IO.Unsafe.GetContents",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Unsafe-GetContents.html#lazyRead",
        "fct-type": "unknown",
        "title": "lazyRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Unsafe GetContents",
        "module": "System.IO.Unsafe.GetContents",
        "name": "lazyRead",
        "normalized": "Handle-\u003eIO String",
        "package": "safe-lazy-io",
        "partial": "Read",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Unsafe-GetContents.html#v:unsafeHGetContents",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eunsafeHGetContents\u003c/a\u003e\u003c/tt\u003e is pretty much like hGetContents but does not\n discards I/O errors get during the lazy reading.\n\u003c/p\u003e\u003cp\u003eThis code was copy/pasted from the GHC version of hGetContents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Unsafe.GetContents",
        "fct-package": "safe-lazy-io",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Unsafe-GetContents.html#unsafeHGetContents",
        "fct-type": "unknown",
        "title": "unsafeHGetContents"
      },
      "index": {
        "description": "unsafeHGetContents is pretty much like hGetContents but does not discards errors get during the lazy reading This code was copy pasted from the GHC version of hGetContents",
        "hierarchy": "System IO Unsafe GetContents",
        "module": "System.IO.Unsafe.GetContents",
        "name": "unsafeHGetContents",
        "normalized": "Handle-\u003eIO String",
        "package": "safe-lazy-io",
        "partial": "HGet Contents",
        "signature": "Handle-\u003eIO String"
      }
    }
  }
]