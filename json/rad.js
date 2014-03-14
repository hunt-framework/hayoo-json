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
        "word": "rad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse Mode Automatic Differentiation via overloading to perform\n nonstandard interpretation that replaces original numeric type with\n a bundle that contains a value of the original type and the tape that\n will be used to recover the value of the sensitivity.\n\u003c/p\u003e\u003cp\u003eThis package uses StableNames internally to recover sharing information from \n the tape to avoid combinatorial explosion, and thus runs asymptotically faster\n than it could without such sharing information, but the use of side-effects\n contained herein is benign.\n\u003c/p\u003e\u003cp\u003eThe API has been built to be close to the design of \u003ccode\u003e\u003ca\u003eFAD\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003efad\u003c/code\u003e package\n by Barak Pearlmutter and Jeffrey Mark Siskind and contains portions of that code, with minor liberties taken.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.RAD",
          "name": "RAD",
          "package": "rad",
          "source": "src/Numeric-RAD.html",
          "type": "module"
        },
        "index": {
          "description": "Reverse Mode Automatic Differentiation via overloading to perform nonstandard interpretation that replaces original numeric type with bundle that contains value of the original type and the tape that will be used to recover the value of the sensitivity This package uses StableNames internally to recover sharing information from the tape to avoid combinatorial explosion and thus runs asymptotically faster than it could without such sharing information but the use of side-effects contained herein is benign The API has been built to be close to the design of FAD from the fad package by Barak Pearlmutter and Jeffrey Mark Siskind and contains portions of that code with minor liberties taken",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "RAD",
          "package": "rad",
          "partial": "RAD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.RAD",
          "name": "RAD",
          "package": "rad",
          "source": "src/Numeric-RAD.html#RAD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "RAD",
          "package": "rad",
          "partial": "RAD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#t:RAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eargminNaiveGradient\u003c/a\u003e\u003c/code\u003e function performs a multivariate\n optimization, based on the naive-gradient-descent in the file\n \u003ccode\u003estalingrad/examples/flow-tests/pre-saddle-1a.vlad\u003c/code\u003e from the\n VLAD compiler Stalingrad sources.  Its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)  \n This is \u003cem\u003eO(n)\u003c/em\u003e faster than \u003ccode\u003e\u003ca\u003eargminNaiveGradient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "argminNaiveGradient",
          "package": "rad",
          "signature": "(forall s.  [RAD s a] -\u003e RAD s a) -\u003e [a] -\u003e [[a]]",
          "source": "src/Numeric-RAD.html#argminNaiveGradient",
          "type": "function"
        },
        "index": {
          "description": "The argminNaiveGradient function performs multivariate optimization based on the naive-gradient-descent in the file stalingrad examples flow-tests pre-saddle-1a.vlad from the VLAD compiler Stalingrad sources Its output is stream of increasingly accurate results Modulo the usual caveats This is faster than argminNaiveGradient",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "argminNaiveGradient",
          "normalized": "(a b[RAD c d]-\u003eRAD c d)-\u003e[d]-\u003e[[d]]",
          "package": "rad",
          "partial": "Naive Gradient",
          "signature": "(forall s.[RAD s a]-\u003eRAD s a)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:argminNaiveGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediffUU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diff",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-RAD.html#diff",
          "type": "function"
        },
        "index": {
          "description": "The diff function is synonym for diffUU",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diff",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003ed",
          "package": "rad",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff2\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediff2UU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diff2",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-RAD.html#diff2",
          "type": "function"
        },
        "index": {
          "description": "The diff2 function is synonym for diff2UU",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diff2",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003e(d,d)",
          "package": "rad",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diff2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that the signature differs from that used in Numeric.FAD, because while you can always\n \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e an arbitrary functor, not all functors can be zipped.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diff2UF",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e f (RAD s a)) -\u003e a -\u003e f (a, a)",
          "source": "src/Numeric-RAD.html#diff2UF",
          "type": "function"
        },
        "index": {
          "description": "Note that the signature differs from that used in Numeric.FAD because while you can always unzip an arbitrary functor not all functors can be zipped",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diff2UF",
          "normalized": "(a b RAD c d-\u003ee(RAD c d))-\u003ed-\u003ee(d,d)",
          "package": "rad",
          "partial": "UF",
          "signature": "(forall s. RAD s a-\u003ef(RAD s a))-\u003ea-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diff2UF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff2UU\u003c/a\u003e\u003c/code\u003e function calculates the value and derivative, as a\n pair, of a scalar-to-scalar function.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diff2UU",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-RAD.html#diff2UU",
          "type": "function"
        },
        "index": {
          "description": "The diff2UU function calculates the value and derivative as pair of scalar-to-scalar function",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diff2UU",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003e(d,d)",
          "package": "rad",
          "partial": "UU",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diff2UU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffUF\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of\n scalar-to-nonscalar function.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diffUF",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e f (RAD s a)) -\u003e a -\u003e f a",
          "source": "src/Numeric-RAD.html#diffUF",
          "type": "function"
        },
        "index": {
          "description": "The diffUF function calculates the first derivative of scalar-to-nonscalar function",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diffUF",
          "normalized": "(a b RAD c d-\u003ee(RAD c d))-\u003ed-\u003ee d",
          "package": "rad",
          "partial": "UF",
          "signature": "(forall s. RAD s a-\u003ef(RAD s a))-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diffUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffUU\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of a\n scalar-to-scalar function.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "diffUU",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-RAD.html#diffUU",
          "type": "function"
        },
        "index": {
          "description": "The diffUU function calculates the first derivative of scalar-to-scalar function",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "diffUU",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003ed",
          "package": "rad",
          "partial": "UU",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:diffUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremumNewton\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Newton's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "extremumNewton",
          "package": "rad",
          "signature": "(forall s t.  RAD t (RAD s a) -\u003e RAD t (RAD s a)) -\u003e a -\u003e [a]",
          "source": "src/Numeric-RAD.html#extremumNewton",
          "type": "function"
        },
        "index": {
          "description": "The extremumNewton function finds an extremum of scalar function using Newton method produces stream of increasingly accurate results Modulo the usual caveats",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "extremumNewton",
          "normalized": "(a b c RAD d(RAD b e)-\u003eRAD d(RAD b e))-\u003ee-\u003e[e]",
          "package": "rad",
          "partial": "Newton",
          "signature": "(forall s t. RAD t(RAD s a)-\u003eRAD t(RAD s a))-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:extremumNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPointNewton\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Newton's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "fixedPointNewton",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-RAD.html#fixedPointNewton",
          "type": "function"
        },
        "index": {
          "description": "The fixedPointNewton function find fixedpoint of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "fixedPointNewton",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003e[d]",
          "package": "rad",
          "partial": "Point Newton",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:fixedPointNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.RAD",
          "name": "grad",
          "package": "rad",
          "signature": "(forall s.  f (RAD s a) -\u003e RAD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-RAD.html#grad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "grad",
          "normalized": "(a b c(RAD d e)-\u003eRAD d e)-\u003ec e-\u003ec e",
          "package": "rad",
          "signature": "(forall s. f(RAD s a)-\u003eRAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.RAD",
          "name": "grad2",
          "package": "rad",
          "signature": "(forall s.  f (RAD s a) -\u003e RAD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-RAD.html#grad2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "grad2",
          "normalized": "(a b c(RAD d e)-\u003eRAD d e)-\u003ec e-\u003e(e,c e)",
          "package": "rad",
          "signature": "(forall s. f(RAD s a)-\u003eRAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:grad2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverseNewton\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eTEST CASE:\n   \u003ccode\u003etake 10 $ inverseNewton sqrt 1 (sqrt 10)  -- converge to 10\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "inverseNewton",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-RAD.html#inverseNewton",
          "type": "function"
        },
        "index": {
          "description": "The inverseNewton function inverts scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats TEST CASE take inverseNewton sqrt sqrt converge to",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "inverseNewton",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003ed-\u003e[d]",
          "package": "rad",
          "partial": "Newton",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:inverseNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calcualtes the Jacobian of a\n nonscalar-to-nonscalar function, using m invocations of reverse AD,\n where m is the output dimensionality. When the output dimensionality is\n significantly greater than the input dimensionality you should use \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "jacobian",
          "package": "rad",
          "signature": "(forall s.  f (RAD s a) -\u003e g (RAD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-RAD.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calcualtes the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality When the output dimensionality is significantly greater than the input dimensionality you should use jacobian instead",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "jacobian",
          "normalized": "(a b c(RAD d e)-\u003ef(RAD d e))-\u003ec e-\u003ef(c e)",
          "package": "rad",
          "signature": "(forall s. f(RAD s a)-\u003eg(RAD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian2\u003c/a\u003e\u003c/code\u003e function calcualtes both the result and the Jacobian of a\n nonscalar-to-nonscalar function, using m invocations of reverse AD,\n where m is the output dimensionality. \n 'fmap snd' on the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "jacobian2",
          "package": "rad",
          "signature": "(forall s.  f (RAD s a) -\u003e g (RAD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-RAD.html#jacobian2",
          "type": "function"
        },
        "index": {
          "description": "The jacobian2 function calcualtes both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality fmap snd on the result will recover the result of jacobian",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "jacobian2",
          "normalized": "(a b c(RAD d e)-\u003ef(RAD d e))-\u003ec e-\u003ef(e,c e)",
          "package": "rad",
          "signature": "(forall s. f(RAD s a)-\u003eg(RAD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:jacobian2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e function injects a primal number into the RAD data type with a 0 derivative.\n If reverse-mode AD numbers formed a monad, then \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e would be \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "lift",
          "package": "rad",
          "signature": "a -\u003e RAD s a",
          "source": "src/Numeric-RAD.html#lift",
          "type": "function"
        },
        "index": {
          "description": "The lift function injects primal number into the RAD data type with derivative If reverse-mode AD numbers formed monad then lift would be return",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "lift",
          "normalized": "a-\u003eRAD b a",
          "package": "rad",
          "signature": "a-\u003eRAD s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezeroNewton\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eTEST CASE:\n  \u003ccode\u003etake 10 $ zeroNewton (\\x-\u003ex^2-4) 1  -- converge to 2.0\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTEST CASE\n  :module Data.Complex Numeric.RAD\n  \u003ccode\u003etake 10 $ zeroNewton ((+1).(^2)) (1 :+ 1)  -- converge to (0 :+ 1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.RAD",
          "name": "zeroNewton",
          "package": "rad",
          "signature": "(forall s.  RAD s a -\u003e RAD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-RAD.html#zeroNewton",
          "type": "function"
        },
        "index": {
          "description": "The zeroNewton function finds zero of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats TEST CASE take zeroNewton converge to TEST CASE module Data.Complex Numeric.RAD take zeroNewton converge to",
          "hierarchy": "Numeric RAD",
          "module": "Numeric.RAD",
          "name": "zeroNewton",
          "normalized": "(a b RAD c d-\u003eRAD c d)-\u003ed-\u003e[d]",
          "package": "rad",
          "partial": "Newton",
          "signature": "(forall s. RAD s a-\u003eRAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rad/docs/Numeric-RAD.html#v:zeroNewton"
      }
    }
  ]
]