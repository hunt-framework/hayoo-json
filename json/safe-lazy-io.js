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
        "word": "safe-lazy-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A kind of strict \u003cem\u003ebind\u003c/em\u003e over lazy inputs.\n",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "!\u003e\u003e=",
          "package": "safe-lazy-io",
          "signature": "LI sa -\u003e (sa -\u003e LI b) -\u003e LI b",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#%21%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "kind of strict bind over lazy inputs",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "!\u003e\u003e=",
          "normalized": "LI a-\u003e(a-\u003eLI b)-\u003eLI b",
          "package": "safe-lazy-io",
          "signature": "LI sa-\u003e(sa-\u003eLI b)-\u003eLI b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:!\u003e\u003e="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Same as \u003ctt\u003e\u003ca\u003e!\u003e\u003e=\u003c/a\u003e\u003c/tt\u003e but with arguments flipped.\n",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "=\u003c\u003c!",
          "package": "safe-lazy-io",
          "signature": "(sa -\u003e LI b) -\u003e LI sa -\u003e LI b",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#%3D%3C%3C%21",
          "type": "function"
        },
        "index": {
          "description": "Same as but with arguments flipped",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "=\u003c\u003c!",
          "normalized": "(a-\u003eLI b)-\u003eLI a-\u003eLI b",
          "package": "safe-lazy-io",
          "signature": "(sa-\u003eLI b)-\u003eLI sa-\u003eLI b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:=\u003c\u003c!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a function wrapped as a lazy input and an argument.\n This is like \u003ctt\u003e\u003ca\u003eap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/tt\u003e but stricter.\n\u003c/p\u003e\u003cp\u003eNote that since functions types are not member of \u003ctt\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/tt\u003e, this function\n is the only one dealing with functions wrapped as lazy inputs.\n\u003c/p\u003e\u003cp\u003eHowever as with \u003ctt\u003e\u003ca\u003eap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/tt\u003e, this function generalize \u003ctt\u003e\u003ca\u003elift2ForceSecond\u003c/a\u003e\u003c/tt\u003e, lift3Fst...\n\u003c/p\u003e\u003cp\u003eExample:\n \u003ctt\u003e\n lift3Fst f x y z = f \u003ca\u003e$\u003c/a\u003e x \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e y \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e z\n\nlift3strict f x y z = pureLI f \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e x \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e y \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e z\n \u003c/tt\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e function only deeply force the second argument, so in the case\n of chaining, the arguments will be forced from left to right. Note that\n if one starts the chain by lifting the function using \u003ctt\u003e\u003ca\u003epureLI\u003c/a\u003e\u003c/tt\u003e, then all\n the arguments will be forced. One can let one of the arguments lazy\n by using note however that if one start the chain with \u003ctt\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/tt\u003e (same as\n \u003ctt\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/tt\u003e) then the first argument would not be forced, but one\n can start with \u003ctt\u003e\u003ca\u003epureLI\u003c/a\u003e\u003c/tt\u003e\n\u003c/p\u003e",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "ap'",
          "package": "safe-lazy-io",
          "signature": "LI (sa -\u003e b) -\u003e LI sa -\u003e LI b",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#ap%27",
          "type": "function"
        },
        "index": {
          "description": "Combines function wrapped as lazy input and an argument This is like ap or but stricter Note that since functions types are not member of NFData this function is the only one dealing with functions wrapped as lazy inputs However as with ap or this function generalize lift2ForceSecond lift3Fst Example lift3Fst ap ap lift3strict pureLI ap ap ap The ap function only deeply force the second argument so in the case of chaining the arguments will be forced from left to right Note that if one starts the chain by lifting the function using pureLI then all the arguments will be forced One can let one of the arguments lazy by using note however that if one start the chain with same as fmap or liftM then the first argument would not be forced but one can start with pureLI",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "ap'",
          "normalized": "LI(a-\u003eb)-\u003eLI a-\u003eLI b",
          "package": "safe-lazy-io",
          "signature": "LI(sa-\u003eb)-\u003eLI sa-\u003eLI b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:ap'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that both arguments are deeply forced before calling the function.\n See \u003ctt\u003e\u003ca\u003elift2ForceFirst\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003elift2ForceSecond\u003c/a\u003e\u003c/tt\u003e for lazier versions.\n\u003c/p\u003e\u003cp\u003eThis one can also be generalized to n-ary functions:\n\u003c/p\u003e\u003cpre\u003e\n liftN f mx1 mx2 ... mxN = pureLI f \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mx1 \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mx2 \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e ... \u003ctt\u003e\u003ca\u003eap'\u003c/a\u003e\u003c/tt\u003e mxN\n\u003c/pre\u003e",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceBoth",
          "package": "safe-lazy-io",
          "signature": "(sa -\u003e sb -\u003e c) -\u003e LI sa -\u003e LI sb -\u003e LI c",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceBoth",
          "type": "function"
        },
        "index": {
          "description": "Lift pure two arguments function to function over lazy inputs Note that both arguments are deeply forced before calling the function See lift2ForceFirst and lift2ForceSecond for lazier versions This one can also be generalized to n-ary functions liftN mx1 mx2 mxN pureLI ap mx1 ap mx2 ap ap mxN",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceBoth",
          "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
          "package": "safe-lazy-io",
          "partial": "Force Both",
          "signature": "(sa-\u003esb-\u003ec)-\u003eLI sa-\u003eLI sb-\u003eLI c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that the only the first argument is deeply forced before calling the function.\n\u003c/p\u003e\u003cp\u003eThe strictness is here to enforce the evaluation order of reading inputs.\n\u003c/p\u003e\u003cp\u003eThis lifting function can be generalized to n-ary functions, all arguments\n but the last one will be deeply forced.\n\u003c/p\u003e\u003cpre\u003e\n liftN f mx1 mx2 ... mxN = mx1 !\u003e\u003e= x1 -\u003e mx2 !\u003e\u003e= x2 -\u003e ... f x1 x2 \u003ca\u003e$\u003c/a\u003e mxN\n\u003c/pre\u003e",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceFirst",
          "package": "safe-lazy-io",
          "signature": "(sa -\u003e b -\u003e c) -\u003e LI sa -\u003e LI b -\u003e LI c",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceFirst",
          "type": "function"
        },
        "index": {
          "description": "Lift pure two arguments function to function over lazy inputs Note that the only the first argument is deeply forced before calling the function The strictness is here to enforce the evaluation order of reading inputs This lifting function can be generalized to n-ary functions all arguments but the last one will be deeply forced liftN mx1 mx2 mxN mx1 x1 mx2 x2 x1 x2 mxN",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceFirst",
          "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
          "package": "safe-lazy-io",
          "partial": "Force First",
          "signature": "(sa-\u003eb-\u003ec)-\u003eLI sa-\u003eLI b-\u003eLI c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceSecond",
          "package": "safe-lazy-io",
          "signature": "(a -\u003e sb -\u003e c) -\u003e LI a -\u003e LI sb -\u003e LI c",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2ForceSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2ForceSecond",
          "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
          "package": "safe-lazy-io",
          "partial": "Force Second",
          "signature": "(a-\u003esb-\u003ec)-\u003eLI a-\u003eLI sb-\u003eLI c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2ForceSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a pure two arguments function, to a function over lazy inputs.\n\u003c/p\u003e\u003cp\u003eNote that the only the first argument \u003cem\u003emay\u003c/em\u003e be deeply forced.\n In particular it is deeply forced if the function use its second argument.\n\u003c/p\u003e\u003cp\u003eThe strictness is here to enforce the evaluation order of reading inputs.\n\u003c/p\u003e\u003cp\u003eSince too much strictness breaks the interest of lazy inputs, one provides\n more specific but lazier combinators like \u003ctt\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/tt\u003e, and \u003ctt\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2MayForceFirst",
          "package": "safe-lazy-io",
          "signature": "(sa -\u003e b -\u003e c) -\u003e LI sa -\u003e LI b -\u003e LI c",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#lift2MayForceFirst",
          "type": "function"
        },
        "index": {
          "description": "Lift pure two arguments function to function over lazy inputs Note that the only the first argument may be deeply forced In particular it is deeply forced if the function use its second argument The strictness is here to enforce the evaluation order of reading inputs Since too much strictness breaks the interest of lazy inputs one provides more specific but lazier combinators like append interleave and zip",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "lift2MayForceFirst",
          "normalized": "(a-\u003eb-\u003ec)-\u003eLI a-\u003eLI b-\u003eLI c",
          "package": "safe-lazy-io",
          "partial": "May Force First",
          "signature": "(sa-\u003eb-\u003ec)-\u003eLI sa-\u003eLI b-\u003eLI c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:lift2MayForceFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Turns a list of lazy inputs as an input of list.\n",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "sequence",
          "package": "safe-lazy-io",
          "signature": "[LI sa] -\u003e LI [sa]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Extra.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Turns list of lazy inputs as an input of list",
          "hierarchy": "System IO Lazy Input Extra",
          "module": "System.IO.Lazy.Input.Extra",
          "name": "sequence",
          "normalized": "[LI a]-\u003eLI[a]",
          "package": "safe-lazy-io",
          "signature": "[LI sa]-\u003eLI[sa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Extra.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy.Input.Internals",
          "name": "Finalized",
          "package": "safe-lazy-io",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#Finalized",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "Finalized",
          "package": "safe-lazy-io",
          "partial": "Finalized",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#t:Finalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy.Input.Internals",
          "name": "LI",
          "package": "safe-lazy-io",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#LI",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "LI",
          "package": "safe-lazy-io",
          "partial": "LI",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#t:LI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003ex `catchEOF` y\u003c/tt\u003e performs \u003ctt\u003ex\u003c/tt\u003e and if it fails due to the EOF error then performs \u003ctt\u003ey\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "catchEOF",
          "package": "safe-lazy-io",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#catchEOF",
          "type": "function"
        },
        "index": {
          "description": "catchEOF performs and if it fails due to the EOF error then performs",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "catchEOF",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "safe-lazy-io",
          "partial": "EOF",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:catchEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Take a list and returns a new channel the list written in it.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "chanFromList",
          "package": "safe-lazy-io",
          "signature": "[a] -\u003e IO (Chan a)",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#chanFromList",
          "type": "function"
        },
        "index": {
          "description": "Take list and returns new channel the list written in it",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "chanFromList",
          "normalized": "[a]-\u003eIO(Chan a)",
          "package": "safe-lazy-io",
          "partial": "From List",
          "signature": "[a]-\u003eIO(Chan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:chanFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run a \u003cem\u003efinalized\u003c/em\u003e computation.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "finalize",
          "package": "safe-lazy-io",
          "signature": "Finalized (IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "Run finalized computation",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "finalize",
          "normalized": "Finalized(IO a)-\u003eIO a",
          "package": "safe-lazy-io",
          "signature": "Finalized(IO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Build lazy input (\u003ctt\u003e\u003ca\u003eLI\u003c/a\u003e\u003c/tt\u003e) from an \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e computation and a \u003ctt\u003e\u003ca\u003efinalizer\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "finallyLI",
          "package": "safe-lazy-io",
          "signature": "IO a -\u003e IO () -\u003e LI a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#finallyLI",
          "type": "function"
        },
        "index": {
          "description": "Build lazy input LI from an IO computation and finalizer",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "finallyLI",
          "normalized": "IO a-\u003eIO()-\u003eLI a",
          "package": "safe-lazy-io",
          "partial": "LI",
          "signature": "IO a-\u003eIO()-\u003eLI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:finallyLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Update the underlying \u003ctt\u003e\u003ca\u003eFinalized\u003c/a\u003e\u003c/tt\u003e value.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "mapFinalized",
          "package": "safe-lazy-io",
          "signature": "(Finalized a -\u003e Finalized b) -\u003e LI a -\u003e LI b",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#mapFinalized",
          "type": "function"
        },
        "index": {
          "description": "Update the underlying Finalized value",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "mapFinalized",
          "normalized": "(Finalized a-\u003eFinalized b)-\u003eLI a-\u003eLI b",
          "package": "safe-lazy-io",
          "partial": "Finalized",
          "signature": "(Finalized a-\u003eFinalized b)-\u003eLI a-\u003eLI b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:mapFinalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Build lazy input (\u003ctt\u003e\u003ca\u003eLI\u003c/a\u003e\u003c/tt\u003e) from an \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e computation.\n Use this function when the computation does not require a finalizer.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "nonFinalized",
          "package": "safe-lazy-io",
          "signature": "IO a -\u003e LI a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#nonFinalized",
          "type": "function"
        },
        "index": {
          "description": "Build lazy input LI from an IO computation Use this function when the computation does not require finalizer",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "nonFinalized",
          "normalized": "IO a-\u003eLI a",
          "package": "safe-lazy-io",
          "partial": "Finalized",
          "signature": "IO a-\u003eLI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:nonFinalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This function lazily returns an element strict list.\n It is lazier than \u003ctt\u003ernf\u003c/tt\u003e and stricter than \u003ctt\u003emap (\\x-\u003e rnf x \u003ctt\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/tt\u003e x)\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "rnfList",
          "package": "safe-lazy-io",
          "signature": "[sa] -\u003e [sa]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#rnfList",
          "type": "function"
        },
        "index": {
          "description": "This function lazily returns an element strict list It is lazier than rnf and stricter than map rnf seq",
          "hierarchy": "System IO Lazy Input Internals",
          "module": "System.IO.Lazy.Input.Internals",
          "name": "rnfList",
          "normalized": "[a]-\u003e[a]",
          "package": "safe-lazy-io",
          "partial": "List",
          "signature": "[sa]-\u003e[sa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input-Internals.html#v:rnfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy.Input",
          "name": "LI",
          "package": "safe-lazy-io",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input-Internals.html#LI",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "LI",
          "package": "safe-lazy-io",
          "partial": "LI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#t:LI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequence two lazy inputs that produces lists as one only\n list. Note that the resource management is precise. As\n soon as the beginning of the second input is required,\n the resource of the first input is released and the\n the second resource is acquired.\n",
          "module": "System.IO.Lazy.Input",
          "name": "append",
          "package": "safe-lazy-io",
          "signature": "LI [sa] -\u003e LI [sa] -\u003e LI [sa]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#append",
          "type": "function"
        },
        "index": {
          "description": "Sequence two lazy inputs that produces lists as one only list Note that the resource management is precise As soon as the beginning of the second input is required the resource of the first input is released and the the second resource is acquired",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "append",
          "normalized": "LI[a]-\u003eLI[a]-\u003eLI[a]",
          "package": "safe-lazy-io",
          "signature": "LI[sa]-\u003eLI[sa]-\u003eLI[sa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Same as \u003ctt\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/tt\u003e but for a list of inputs.\n",
          "module": "System.IO.Lazy.Input",
          "name": "concat",
          "package": "safe-lazy-io",
          "signature": "[LI [sa]] -\u003e LI [sa]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Same as append but for list of inputs",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "concat",
          "normalized": "[LI[a]]-\u003eLI[a]",
          "package": "safe-lazy-io",
          "signature": "[LI[sa]]-\u003eLI[sa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return a lazy list representing the contents of the supplied\n \u003ctt\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/tt\u003e, much like System.IO.hGetContents.\n",
          "module": "System.IO.Lazy.Input",
          "name": "getChanContents",
          "package": "safe-lazy-io",
          "signature": "Chan a -\u003e LI [a]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Return lazy list representing the contents of the supplied Chan much like System.IO.hGetContents",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eLI[a]",
          "package": "safe-lazy-io",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003eLI[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the contents of standard input lazily.\n",
          "module": "System.IO.Lazy.Input",
          "name": "getContents",
          "package": "safe-lazy-io",
          "signature": "LI String",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "Returns the contents of standard input lazily",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "getContents",
          "package": "safe-lazy-io",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the contents of the given handle lazily.\n",
          "module": "System.IO.Lazy.Input",
          "name": "hGetContents",
          "package": "safe-lazy-io",
          "signature": "Handle -\u003e LI String",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Returns the contents of the given handle lazily",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "hGetContents",
          "normalized": "Handle-\u003eLI String",
          "package": "safe-lazy-io",
          "partial": "Get Contents",
          "signature": "Handle-\u003eLI String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Takes two lazy inputs and returns a single interleaved lazy input.\n Note that this function is left biased, this is always the left\n canal that is read first. This function is rarely used directly\n with file contents since it mixes the two contents, one generally\n use some tagging to separate them back. Look at \u003ctt\u003e\u003ca\u003einterleaveEither\u003c/a\u003e\u003c/tt\u003e\n for such a function.\n",
          "module": "System.IO.Lazy.Input",
          "name": "interleave",
          "package": "safe-lazy-io",
          "signature": "LI [sa] -\u003e LI [sa] -\u003e LI [sa]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Takes two lazy inputs and returns single interleaved lazy input Note that this function is left biased this is always the left canal that is read first This function is rarely used directly with file contents since it mixes the two contents one generally use some tagging to separate them back Look at interleaveEither for such function",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "interleave",
          "normalized": "LI[a]-\u003eLI[a]-\u003eLI[a]",
          "package": "safe-lazy-io",
          "signature": "LI[sa]-\u003eLI[sa]-\u003eLI[sa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like \u003ctt\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/tt\u003e but it starts by tagging the left input by \u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e and right\n input by \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e leading to lazy input of \u003ctt\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/tt\u003es.\n",
          "module": "System.IO.Lazy.Input",
          "name": "interleaveEither",
          "package": "safe-lazy-io",
          "signature": "LI [sa] -\u003e LI [sb] -\u003e LI [Either sa sb]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#interleaveEither",
          "type": "function"
        },
        "index": {
          "description": "Like interleave but it starts by tagging the left input by Left and right input by Right leading to lazy input of Either",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "interleaveEither",
          "normalized": "LI[a]-\u003eLI[b]-\u003eLI[Either a b]",
          "package": "safe-lazy-io",
          "partial": "Either",
          "signature": "LI[sa]-\u003eLI[sb]-\u003eLI[Either sa sb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:interleaveEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Any pure data can lifted as lazy input.\n",
          "module": "System.IO.Lazy.Input",
          "name": "pureLI",
          "package": "safe-lazy-io",
          "signature": "a -\u003e LI a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#pureLI",
          "type": "function"
        },
        "index": {
          "description": "Any pure data can lifted as lazy input",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "pureLI",
          "normalized": "a-\u003eLI a",
          "package": "safe-lazy-io",
          "partial": "LI",
          "signature": "a-\u003eLI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:pureLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like \u003ctt\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/tt\u003e but it takes a \u003ctt\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input",
          "name": "readFile",
          "package": "safe-lazy-io",
          "signature": "FilePath -\u003e LI String",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Like hGetContents but it takes FilePath",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "readFile",
          "normalized": "FilePath-\u003eLI String",
          "package": "safe-lazy-io",
          "partial": "File",
          "signature": "FilePath-\u003eLI String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract the data from a lazy input, this is commonly\n used to actually run the given process over lazy inputs.\n As in all the functions that requires a \u003ctt\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/tt\u003e instance\n this means the result will forced using \u003ctt\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input",
          "name": "run",
          "package": "safe-lazy-io",
          "signature": "LI sa -\u003e IO sa",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#run",
          "type": "function"
        },
        "index": {
          "description": "Extract the data from lazy input this is commonly used to actually run the given process over lazy inputs As in all the functions that requires NFData instance this means the result will forced using rnf",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "run",
          "normalized": "LI a-\u003eIO a",
          "package": "safe-lazy-io",
          "signature": "LI sa-\u003eIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pretty much as \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e expect that one can use strict\n \u003cem\u003eIO\u003c/em\u003es (\u003ca\u003eSystem.IO.Strict\u003c/a\u003e) to produce the final result.\n",
          "module": "System.IO.Lazy.Input",
          "name": "run'",
          "package": "safe-lazy-io",
          "signature": "LI (SIO sa) -\u003e IO sa",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#run%27",
          "type": "function"
        },
        "index": {
          "description": "Pretty much as run expect that one can use strict IO System.IO.Strict to produce the final result",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "run'",
          "normalized": "LI(SIO a)-\u003eIO a",
          "package": "safe-lazy-io",
          "signature": "LI(SIO sa)-\u003eIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:run'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pretty much as \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e but live in the \u003ctt\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/tt\u003e monad instead of \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input",
          "name": "runAsSIO",
          "package": "safe-lazy-io",
          "signature": "LI sa -\u003e SIO sa",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#runAsSIO",
          "type": "function"
        },
        "index": {
          "description": "Pretty much as run but live in the SIO monad instead of IO",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "runAsSIO",
          "normalized": "LI a-\u003eSIO a",
          "package": "safe-lazy-io",
          "partial": "As SIO",
          "signature": "LI sa-\u003eSIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:runAsSIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pretty much as \u003ctt\u003e\u003ca\u003erun'\u003c/a\u003e\u003c/tt\u003e but live in the \u003ctt\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/tt\u003e monad instead of \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input",
          "name": "runAsSIO'",
          "package": "safe-lazy-io",
          "signature": "LI (SIO sa) -\u003e SIO sa",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#runAsSIO%27",
          "type": "function"
        },
        "index": {
          "description": "Pretty much as run but live in the SIO monad instead of IO",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "runAsSIO'",
          "normalized": "LI(SIO a)-\u003eSIO a",
          "package": "safe-lazy-io",
          "partial": "As SIO'",
          "signature": "LI(SIO sa)-\u003eSIO sa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:runAsSIO'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add debugging messages using the given string.\n This will returns the same lazy input but more verbose.\n",
          "module": "System.IO.Lazy.Input",
          "name": "trace",
          "package": "safe-lazy-io",
          "signature": "String -\u003e LI a -\u003e LI a",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Add debugging messages using the given string This will returns the same lazy input but more verbose",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "trace",
          "normalized": "String-\u003eLI a-\u003eLI a",
          "package": "safe-lazy-io",
          "signature": "String-\u003eLI a-\u003eLI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two lazy inputs as a single lazy input of pairs.\n\u003c/p\u003e\u003cp\u003eNote that if one input list is short, excess elements of the longer list are discarded.\n\u003c/p\u003e",
          "module": "System.IO.Lazy.Input",
          "name": "zip",
          "package": "safe-lazy-io",
          "signature": "LI [sa] -\u003e LI [sb] -\u003e LI [(sa, sb)]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Combine two lazy inputs as single lazy input of pairs Note that if one input list is short excess elements of the longer list are discarded",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "zip",
          "normalized": "LI[a]-\u003eLI[b]-\u003eLI[(a,b)]",
          "package": "safe-lazy-io",
          "signature": "LI[sa]-\u003eLI[sb]-\u003eLI[(sa,sb)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A shorthand for \u003ctt\u003e\\h1 h2-\u003e zip (hGetContents h1) (hGetContents h2)\u003c/tt\u003e.\n",
          "module": "System.IO.Lazy.Input",
          "name": "zipHandles",
          "package": "safe-lazy-io",
          "signature": "Handle -\u003e Handle -\u003e LI [(Char, Char)]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipHandles",
          "type": "function"
        },
        "index": {
          "description": "shorthand for h1 h2 zip hGetContents h1 hGetContents h2",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "zipHandles",
          "normalized": "Handle-\u003eHandle-\u003eLI[(Char,Char)]",
          "package": "safe-lazy-io",
          "partial": "Handles",
          "signature": "Handle-\u003eHandle-\u003eLI[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Lazy.Input",
          "name": "zipMaybesWith",
          "package": "safe-lazy-io",
          "signature": "(Maybe sa -\u003e Maybe sb -\u003e c) -\u003e LI [sa] -\u003e LI [sb] -\u003e LI [c]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipMaybesWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "zipMaybesWith",
          "normalized": "(Maybe a-\u003eMaybe b-\u003ec)-\u003eLI[a]-\u003eLI[b]-\u003eLI[c]",
          "package": "safe-lazy-io",
          "partial": "Maybes With",
          "signature": "(Maybe sa-\u003eMaybe sb-\u003ec)-\u003eLI[sa]-\u003eLI[sb]-\u003eLI[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipMaybesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/tt\u003e generalize \u003ctt\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/tt\u003e with any combining function.\n",
          "module": "System.IO.Lazy.Input",
          "name": "zipWith",
          "package": "safe-lazy-io",
          "signature": "(sa -\u003e sb -\u003e c) -\u003e LI [sa] -\u003e LI [sb] -\u003e LI [c]",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Lazy-Input.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalize zip with any combining function",
          "hierarchy": "System IO Lazy Input",
          "module": "System.IO.Lazy.Input",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eLI[a]-\u003eLI[b]-\u003eLI[c]",
          "package": "safe-lazy-io",
          "partial": "With",
          "signature": "(sa-\u003esb-\u003ec)-\u003eLI[sa]-\u003eLI[sb]-\u003eLI[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Lazy-Input.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Unsafe.GetContents",
          "name": "lazyRead",
          "package": "safe-lazy-io",
          "signature": "Handle -\u003e IO String",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Unsafe-GetContents.html#lazyRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Unsafe GetContents",
          "module": "System.IO.Unsafe.GetContents",
          "name": "lazyRead",
          "normalized": "Handle-\u003eIO String",
          "package": "safe-lazy-io",
          "partial": "Read",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Unsafe-GetContents.html#v:lazyRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eunsafeHGetContents\u003c/a\u003e\u003c/tt\u003e is pretty much like hGetContents but does not\n discards I/O errors get during the lazy reading.\n\u003c/p\u003e\u003cp\u003eThis code was copy/pasted from the GHC version of hGetContents.\n\u003c/p\u003e",
          "module": "System.IO.Unsafe.GetContents",
          "name": "unsafeHGetContents",
          "package": "safe-lazy-io",
          "signature": "Handle -\u003e IO String",
          "source": "http://hackage.haskell.org/package/safe-lazy-io/docs/src/System-IO-Unsafe-GetContents.html#unsafeHGetContents",
          "type": "function"
        },
        "index": {
          "description": "unsafeHGetContents is pretty much like hGetContents but does not discards errors get during the lazy reading This code was copy pasted from the GHC version of hGetContents",
          "hierarchy": "System IO Unsafe GetContents",
          "module": "System.IO.Unsafe.GetContents",
          "name": "unsafeHGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "safe-lazy-io",
          "partial": "HGet Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-lazy-io/docs/System-IO-Unsafe-GetContents.html#v:unsafeHGetContents"
      }
    }
  ]
]