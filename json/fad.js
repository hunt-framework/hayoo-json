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
        "word": "fad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForward Automatic Differentiation via overloading to perform\nnonstandard interpretation that replaces original numeric type with\ncorresponding generalized dual number type.\n\u003c/p\u003e\u003cp\u003eCredits:\n\u003c/p\u003e\u003cp\u003eAuthors: Copyright 2008,\nBarak A. Pearlmutter (\u003ca\u003ebarak@cs.nuim.ie\u003c/a\u003e) &\nJeffrey Mark Siskind (\u003ca\u003eqobi@purdue.edu\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eWork started as stripped-down version of higher-order tower code\npublished by Jerzy Karczmarczuk (\u003ca\u003ejerzy.karczmarczuk@info.unicaen.fr\u003c/a\u003e)\nwhich used a non-standard standard prelude.\n\u003c/p\u003e\u003cp\u003eInitial perturbation-confusing code is a modified version of\n\u003ca\u003ehttp://cdsmith.wordpress.com/2007/11/29/some-playing-with-derivatives/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTag trick, called \"branding\" in the Haskell community, from\nBj&#246;rn Buckwalter (\u003ca\u003ebjorn.buckwalter@gmail.com\u003c/a\u003e)\n\u003ca\u003ehttp://thread.gmane.org/gmane.comp.lang.haskell.cafe/22308/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNotes:\n\u003c/p\u003e\u003cp\u003eEach invocation of the differentiation function introduces a distinct\nperturbation, which requires a distinct derivative-carrying number\ntype.  In order to prevent these from being confused, tagging, called\nbranding in the Haskell community, is used.  This seems to prevent\nperturbation confusion, although it would be nice to have an actual\nproof of this.  The technique does require adding invocations of lift\nat appropriate places when nesting is present, and degrades modularity\nby exposing \u003ca\u003eforall\u003c/a\u003e types in type signatures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FAD",
          "name": "FAD",
          "package": "fad",
          "source": "src/Numeric-FAD.html",
          "type": "module"
        },
        "index": {
          "description": "Forward Automatic Differentiation via overloading to perform nonstandard interpretation that replaces original numeric type with corresponding generalized dual number type Credits Authors Copyright Barak Pearlmutter barak@cs.nuim.ie Jeffrey Mark Siskind qobi@purdue.edu Work started as stripped-down version of higher-order tower code published by Jerzy Karczmarczuk jerzy.karczmarczuk@info.unicaen.fr which used non-standard standard prelude Initial perturbation-confusing code is modified version of http cdsmith.wordpress.com some-playing-with-derivatives Tag trick called branding in the Haskell community from Bj rn Buckwalter bjorn.buckwalter@gmail.com http thread.gmane.org gmane.comp.lang.haskell.cafe Notes Each invocation of the differentiation function introduces distinct perturbation which requires distinct derivative-carrying number type In order to prevent these from being confused tagging called branding in the Haskell community is used This seems to prevent perturbation confusion although it would be nice to have an actual proof of this The technique does require adding invocations of lift at appropriate places when nesting is present and degrades modularity by exposing forall types in type signatures",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "FAD",
          "package": "fad",
          "partial": "FAD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTower\u003c/a\u003e\u003c/code\u003e type is a concrete representation of a higher-order\n Dual number, meaning a number augmented with a tower of\n derivatives.  These generalize the Dual numbers of Clifford (1873),\n which hold only a first derivative.  They can be converted to\n formal power series via division by the sequence of factorials.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "Tower",
          "package": "fad",
          "source": "src/Numeric-FAD.html#Tower",
          "type": "data"
        },
        "index": {
          "description": "The Tower type is concrete representation of higher-order Dual number meaning number augmented with tower of derivatives These generalize the Dual numbers of Clifford which hold only first derivative They can be converted to formal power series via division by the sequence of factorials",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "Tower",
          "package": "fad",
          "partial": "Tower",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#t:Tower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eargminNaiveGradient\u003c/a\u003e\u003c/code\u003e function performs a multivariate\n optimization, based on the naive-gradient-descent in the file\n \u003ccode\u003estalingrad/examples/flow-tests/pre-saddle-1a.vlad\u003c/code\u003e from the\n VLAD compiler Stalingrad sources.  Its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)  The\n gradient is calculated using Forward AD, which is O(n) inefficient\n as compared to Reverse AD, where n is the input dimensionality.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "argminNaiveGradient",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag a) -\u003e [a] -\u003e [[a]]",
          "source": "src/Numeric-FAD.html#argminNaiveGradient",
          "type": "function"
        },
        "index": {
          "description": "The argminNaiveGradient function performs multivariate optimization based on the naive-gradient-descent in the file stalingrad examples flow-tests pre-saddle-1a.vlad from the VLAD compiler Stalingrad sources Its output is stream of increasingly accurate results Modulo the usual caveats The gradient is calculated using Forward AD which is inefficient as compared to Reverse AD where is the input dimensionality",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "argminNaiveGradient",
          "normalized": "(a b[Tower c d]-\u003eTower c d)-\u003e[d]-\u003e[[d]]",
          "package": "fad",
          "partial": "Naive Gradient",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag a)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:argminNaiveGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediffUU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e b",
          "source": "src/Numeric-FAD.html#diff",
          "type": "function"
        },
        "index": {
          "description": "The diff function is synonym for diffUU",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003ee",
          "package": "fad",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff2\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediff2UU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff2",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e (b, b)",
          "source": "src/Numeric-FAD.html#diff2",
          "type": "function"
        },
        "index": {
          "description": "The diff2 function is synonym for diff2UU",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff2",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e(e,e)",
          "package": "fad",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ediffMF2\u003c/code\u003e function calculates the value and directional\n derivative, as a pair, of a nonscalar-to-nonscalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff2MF",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e f (Tower tag b)) -\u003e [a] -\u003e [a] -\u003e (f b, f b)",
          "source": "src/Numeric-FAD.html#diff2MF",
          "type": "function"
        },
        "index": {
          "description": "The diffMF2 function calculates the value and directional derivative as pair of nonscalar-to-nonscalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff2MF",
          "normalized": "(a b[Tower c d]-\u003ee(Tower c f))-\u003e[d]-\u003e[d]-\u003e(e f,e f)",
          "package": "fad",
          "partial": "MF",
          "signature": "(forall tag.[Tower tag a]-\u003ef(Tower tag b))-\u003e[a]-\u003e[a]-\u003e(f b,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff2MF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ediffMU2\u003c/code\u003e function calculates the value and directional\n derivative, as a pair, of a nonscalar-to-scalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff2MU",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag b) -\u003e [a] -\u003e [a] -\u003e (b, b)",
          "source": "src/Numeric-FAD.html#diff2MU",
          "type": "function"
        },
        "index": {
          "description": "The diffMU2 function calculates the value and directional derivative as pair of nonscalar-to-scalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff2MU",
          "normalized": "(a b[Tower c d]-\u003eTower c e)-\u003e[d]-\u003e[d]-\u003e(e,e)",
          "package": "fad",
          "partial": "MU",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag b)-\u003e[a]-\u003e[a]-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff2MU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ediffUF2\u003c/code\u003e function calculates the value and derivative, as a\n pair, of a scalar-to-nonscalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff2UF",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e f (Tower tag b)) -\u003e a -\u003e (f b, f b)",
          "source": "src/Numeric-FAD.html#diff2UF",
          "type": "function"
        },
        "index": {
          "description": "The diffUF2 function calculates the value and derivative as pair of scalar-to-nonscalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff2UF",
          "normalized": "(a b Tower c d-\u003ee(Tower c f))-\u003ed-\u003e(e f,e f)",
          "package": "fad",
          "partial": "UF",
          "signature": "(forall tag. Tower tag a-\u003ef(Tower tag b))-\u003ea-\u003e(f b,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff2UF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff2UU\u003c/a\u003e\u003c/code\u003e function calculates the value and derivative, as a\n pair, of a scalar-to-scalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diff2UU",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e (b, b)",
          "source": "src/Numeric-FAD.html#diff2UU",
          "type": "function"
        },
        "index": {
          "description": "The diff2UU function calculates the value and derivative as pair of scalar-to-scalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diff2UU",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e(e,e)",
          "package": "fad",
          "partial": "UU",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diff2UU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffMF\u003c/a\u003e\u003c/code\u003e function calculates the product of the Jacobian of a\n nonscalar-to-nonscalar function with a given vector.  Aka:\n directional derivative.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffMF",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e f (Tower tag b)) -\u003e [a] -\u003e [a] -\u003e f b",
          "source": "src/Numeric-FAD.html#diffMF",
          "type": "function"
        },
        "index": {
          "description": "The diffMF function calculates the product of the Jacobian of nonscalar-to-nonscalar function with given vector Aka directional derivative",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffMF",
          "normalized": "(a b[Tower c d]-\u003ee(Tower c f))-\u003e[d]-\u003e[d]-\u003ee f",
          "package": "fad",
          "partial": "MF",
          "signature": "(forall tag.[Tower tag a]-\u003ef(Tower tag b))-\u003e[a]-\u003e[a]-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffMU\u003c/a\u003e\u003c/code\u003e function calculate the product of the Jacobian of a\n nonscalar-to-scalar function with a given vector.  Aka: directional\n derivative.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffMU",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag b) -\u003e [a] -\u003e [a] -\u003e b",
          "source": "src/Numeric-FAD.html#diffMU",
          "type": "function"
        },
        "index": {
          "description": "The diffMU function calculate the product of the Jacobian of nonscalar-to-scalar function with given vector Aka directional derivative",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffMU",
          "normalized": "(a b[Tower c d]-\u003eTower c e)-\u003e[d]-\u003e[d]-\u003ee",
          "package": "fad",
          "partial": "MU",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag b)-\u003e[a]-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffMU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffUF\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of\n scalar-to-nonscalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffUF",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e f (Tower tag b)) -\u003e a -\u003e f b",
          "source": "src/Numeric-FAD.html#diffUF",
          "type": "function"
        },
        "index": {
          "description": "The diffUF function calculates the first derivative of scalar-to-nonscalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffUF",
          "normalized": "(a b Tower c d-\u003ee(Tower c f))-\u003ed-\u003ee f",
          "package": "fad",
          "partial": "UF",
          "signature": "(forall tag. Tower tag a-\u003ef(Tower tag b))-\u003ea-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffUU\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of a\n scalar-to-scalar function.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffUU",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e b",
          "source": "src/Numeric-FAD.html#diffUU",
          "type": "function"
        },
        "index": {
          "description": "The diffUU function calculates the first derivative of scalar-to-scalar function",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffUU",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003ee",
          "package": "fad",
          "partial": "UU",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediffsUU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffs",
          "type": "function"
        },
        "index": {
          "description": "The diffs function is synonym for diffsUU",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e[e]",
          "package": "fad",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs0\u003c/a\u003e\u003c/code\u003e function is a synonym for \u003ccode\u003e\u003ca\u003ediffs0UU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs0",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffs0",
          "type": "function"
        },
        "index": {
          "description": "The diffs0 function is synonym for diffs0UU",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs0",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e[e]",
          "package": "fad",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs0MF\u003c/a\u003e\u003c/code\u003e function is like \u003ccode\u003e\u003ca\u003ediffsMF\u003c/a\u003e\u003c/code\u003e except the output is zero padded.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs0MF",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e f (Tower tag b)) -\u003e [[a]] -\u003e [f b]",
          "source": "src/Numeric-FAD.html#diffs0MF",
          "type": "function"
        },
        "index": {
          "description": "The diffs0MF function is like diffsMF except the output is zero padded",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs0MF",
          "normalized": "(a b[Tower c d]-\u003ee(Tower c f))-\u003e[[d]]-\u003e[e f]",
          "package": "fad",
          "partial": "MF",
          "signature": "(forall tag.[Tower tag a]-\u003ef(Tower tag b))-\u003e[[a]]-\u003e[f b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs0MF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs0MU\u003c/a\u003e\u003c/code\u003e function is like \u003ccode\u003e\u003ca\u003ediffsMU\u003c/a\u003e\u003c/code\u003e except the output is zero padded.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs0MU",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag b) -\u003e [[a]] -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffs0MU",
          "type": "function"
        },
        "index": {
          "description": "The diffs0MU function is like diffsMU except the output is zero padded",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs0MU",
          "normalized": "(a b[Tower c d]-\u003eTower c e)-\u003e[[d]]-\u003e[e]",
          "package": "fad",
          "partial": "MU",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag b)-\u003e[[a]]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs0MU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs0UF\u003c/a\u003e\u003c/code\u003e function is like \u003ccode\u003e\u003ca\u003ediffsUF\u003c/a\u003e\u003c/code\u003e except the output is zero padded.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs0UF",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e f (Tower tag b)) -\u003e a -\u003e [f b]",
          "source": "src/Numeric-FAD.html#diffs0UF",
          "type": "function"
        },
        "index": {
          "description": "The diffs0UF function is like diffsUF except the output is zero padded",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs0UF",
          "normalized": "(a b Tower c d-\u003ee(Tower c f))-\u003ed-\u003e[e f]",
          "package": "fad",
          "partial": "UF",
          "signature": "(forall tag. Tower tag a-\u003ef(Tower tag b))-\u003ea-\u003e[f b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs0UF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffs0UU\u003c/a\u003e\u003c/code\u003e function is like \u003ccode\u003e\u003ca\u003ediffsUU\u003c/a\u003e\u003c/code\u003e except the output is zero padded.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffs0UU",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffs0UU",
          "type": "function"
        },
        "index": {
          "description": "The diffs0UU function is like diffsUU except the output is zero padded",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffs0UU",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e[e]",
          "package": "fad",
          "partial": "UU",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffs0UU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffsMF\u003c/a\u003e\u003c/code\u003e function calculates an infinite list of derivatives\n of a nonscalar-to-nonscalar function.  The 0-th element of the list\n is the primal value, the 1-st element is the first derivative, etc.\n The input is a (possibly truncated) list of the primal, first\n derivative, etc, of the input.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffsMF",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e f (Tower tag b)) -\u003e [[a]] -\u003e [f b]",
          "source": "src/Numeric-FAD.html#diffsMF",
          "type": "function"
        },
        "index": {
          "description": "The diffsMF function calculates an infinite list of derivatives of nonscalar-to-nonscalar function The th element of the list is the primal value the st element is the first derivative etc The input is possibly truncated list of the primal first derivative etc of the input",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffsMF",
          "normalized": "(a b[Tower c d]-\u003ee(Tower c f))-\u003e[[d]]-\u003e[e f]",
          "package": "fad",
          "partial": "MF",
          "signature": "(forall tag.[Tower tag a]-\u003ef(Tower tag b))-\u003e[[a]]-\u003e[f b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffsMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffsMU\u003c/a\u003e\u003c/code\u003e function calculates an infinite list of derivatives\n of a nonscalar-to-scalar function.  The 0-th element of the list is\n the primal value, the 1-st element is the first derivative, etc.\n The input is a (possibly truncated) list of the primal, first\n derivative, etc, of the input.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffsMU",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag b) -\u003e [[a]] -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffsMU",
          "type": "function"
        },
        "index": {
          "description": "The diffsMU function calculates an infinite list of derivatives of nonscalar-to-scalar function The th element of the list is the primal value the st element is the first derivative etc The input is possibly truncated list of the primal first derivative etc of the input",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffsMU",
          "normalized": "(a b[Tower c d]-\u003eTower c e)-\u003e[[d]]-\u003e[e]",
          "package": "fad",
          "partial": "MU",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag b)-\u003e[[a]]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffsMU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffsUF\u003c/a\u003e\u003c/code\u003e function calculates an infinite list of derivatives\n of a scalar-to-nonscalar function.  The 0-th element of the list is\n the primal value, the 1-st element is the first derivative, etc.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffsUF",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e f (Tower tag b)) -\u003e a -\u003e [f b]",
          "source": "src/Numeric-FAD.html#diffsUF",
          "type": "function"
        },
        "index": {
          "description": "The diffsUF function calculates an infinite list of derivatives of scalar-to-nonscalar function The th element of the list is the primal value the st element is the first derivative etc",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffsUF",
          "normalized": "(a b Tower c d-\u003ee(Tower c f))-\u003ed-\u003e[e f]",
          "package": "fad",
          "partial": "UF",
          "signature": "(forall tag. Tower tag a-\u003ef(Tower tag b))-\u003ea-\u003e[f b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffsUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffsUU\u003c/a\u003e\u003c/code\u003e function calculates a list of derivatives of a\n scalar-to-scalar function. The 0-th element of the list is the\n primal value, the 1-st element is the first derivative, etc.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "diffsUU",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e [b]",
          "source": "src/Numeric-FAD.html#diffsUU",
          "type": "function"
        },
        "index": {
          "description": "The diffsUU function calculates list of derivatives of scalar-to-scalar function The th element of the list is the primal value the st element is the first derivative etc",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "diffsUU",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003e[e]",
          "package": "fad",
          "partial": "UU",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:diffsUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremumNewton\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Newton's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "extremumNewton",
          "package": "fad",
          "signature": "(forall tag tag1.  Tower tag1 (Tower tag a) -\u003e Tower tag1 (Tower tag a)) -\u003e a -\u003e [a]",
          "source": "src/Numeric-FAD.html#extremumNewton",
          "type": "function"
        },
        "index": {
          "description": "The extremumNewton function finds an extremum of scalar function using Newton method produces stream of increasingly accurate results Modulo the usual caveats",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "extremumNewton",
          "normalized": "(a b b Tower b(Tower b c)-\u003eTower b(Tower b c))-\u003ec-\u003e[c]",
          "package": "fad",
          "partial": "Newton",
          "signature": "(forall tag tag Tower tag(Tower tag a)-\u003eTower tag(Tower tag a))-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:extremumNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPointNewton\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Newton's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "fixedPointNewton",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-FAD.html#fixedPointNewton",
          "type": "function"
        },
        "index": {
          "description": "The fixedPointNewton function find fixedpoint of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "fixedPointNewton",
          "normalized": "(a b Tower c d-\u003eTower c d)-\u003ed-\u003e[d]",
          "package": "fad",
          "partial": "Point Newton",
          "signature": "(forall tag. Tower tag a-\u003eTower tag a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:fixedPointNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a\n nonscalar-to-scalar function, using n invocations of forward AD,\n where n is the input dimmensionality.  NOTE: this is O(n)\n inefficient as compared to reverse AD.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "grad",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e Tower tag b) -\u003e [a] -\u003e [b]",
          "source": "src/Numeric-FAD.html#grad",
          "type": "function"
        },
        "index": {
          "description": "The grad function calculates the gradient of nonscalar-to-scalar function using invocations of forward AD where is the input dimmensionality NOTE this is inefficient as compared to reverse AD",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "grad",
          "normalized": "(a b[Tower c d]-\u003eTower c e)-\u003e[d]-\u003e[e]",
          "package": "fad",
          "signature": "(forall tag.[Tower tag a]-\u003eTower tag b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverseNewton\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eTEST CASE:\n   \u003ccode\u003etake 10 $ inverseNewton sqrt 1 (sqrt 10)  -- converge to 10\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "inverseNewton",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-FAD.html#inverseNewton",
          "type": "function"
        },
        "index": {
          "description": "The inverseNewton function inverts scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats TEST CASE take inverseNewton sqrt sqrt converge to",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "inverseNewton",
          "normalized": "(a b Tower c d-\u003eTower c d)-\u003ed-\u003ed-\u003e[d]",
          "package": "fad",
          "partial": "Newton",
          "signature": "(forall tag. Tower tag a-\u003eTower tag a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:inverseNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calcualtes the Jacobian of a\n nonscalar-to-nonscalar function, using n invocations of forward AD,\n where n is the input dimmensionality.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "jacobian",
          "package": "fad",
          "signature": "(forall tag.  [Tower tag a] -\u003e [Tower tag b]) -\u003e [a] -\u003e [[b]]",
          "source": "src/Numeric-FAD.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calcualtes the Jacobian of nonscalar-to-nonscalar function using invocations of forward AD where is the input dimmensionality",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "jacobian",
          "normalized": "(a b[Tower c d]-\u003e[Tower c e])-\u003e[d]-\u003e[[e]]",
          "package": "fad",
          "signature": "(forall tag.[Tower tag a]-\u003e[Tower tag b])-\u003e[a]-\u003e[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e function injects a primal number into the domain of\n derivative towers, with a zero tower.  If generalized dual numbers\n were a monad, \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e would be \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "lift",
          "package": "fad",
          "signature": "a -\u003e Tower tag a",
          "source": "src/Numeric-FAD.html#lift",
          "type": "function"
        },
        "index": {
          "description": "The lift function injects primal number into the domain of derivative towers with zero tower If generalized dual numbers were monad lift would be return",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "lift",
          "normalized": "a-\u003eTower b a",
          "package": "fad",
          "signature": "a-\u003eTower tag a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprimal\u003c/a\u003e\u003c/code\u003e function finds the primal value from a derivative\n | tower.  The inverse of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "primal",
          "package": "fad",
          "signature": "Tower tag a -\u003e a",
          "source": "src/Numeric-FAD.html#primal",
          "type": "function"
        },
        "index": {
          "description": "The primal function finds the primal value from derivative tower The inverse of lift",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "primal",
          "normalized": "Tower a b-\u003eb",
          "package": "fad",
          "signature": "Tower tag a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:primal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprimalFF\u003c/a\u003e\u003c/code\u003e function lowers a function over dual numbers to a\n function over primals where the function is nonscalar-to-nonscalar.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "primalFF",
          "package": "fad",
          "signature": "(forall tag.  fa (Tower tag a) -\u003e fb (Tower tag b)) -\u003e fa a -\u003e fb b",
          "source": "src/Numeric-FAD.html#primalFF",
          "type": "function"
        },
        "index": {
          "description": "The primalFF function lowers function over dual numbers to function over primals where the function is nonscalar-to-nonscalar",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "primalFF",
          "normalized": "(a b c(Tower d e)-\u003ef(Tower d g))-\u003ec e-\u003ef g",
          "package": "fad",
          "partial": "FF",
          "signature": "(forall tag. fa(Tower tag a)-\u003efb(Tower tag b))-\u003efa a-\u003efb b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:primalFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprimalFU\u003c/a\u003e\u003c/code\u003e function lowers a function over dual numbers to a\n function over primals where the function is nonscalar-to-scalar.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "primalFU",
          "package": "fad",
          "signature": "(forall tag.  fa (Tower tag a) -\u003e Tower tag b) -\u003e fa a -\u003e b",
          "source": "src/Numeric-FAD.html#primalFU",
          "type": "function"
        },
        "index": {
          "description": "The primalFU function lowers function over dual numbers to function over primals where the function is nonscalar-to-scalar",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "primalFU",
          "normalized": "(a b c(Tower d e)-\u003eTower d f)-\u003ec e-\u003ef",
          "package": "fad",
          "partial": "FU",
          "signature": "(forall tag. fa(Tower tag a)-\u003eTower tag b)-\u003efa a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:primalFU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprimalUF\u003c/a\u003e\u003c/code\u003e function lowers a function over dual numbers to a\n function over primals, where the function is scalar-to-nonscalar.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "primalUF",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e fb (Tower tag b)) -\u003e a -\u003e fb b",
          "source": "src/Numeric-FAD.html#primalUF",
          "type": "function"
        },
        "index": {
          "description": "The primalUF function lowers function over dual numbers to function over primals where the function is scalar-to-nonscalar",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "primalUF",
          "normalized": "(a b Tower c d-\u003ee(Tower c f))-\u003ed-\u003ee f",
          "package": "fad",
          "partial": "UF",
          "signature": "(forall tag. Tower tag a-\u003efb(Tower tag b))-\u003ea-\u003efb b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:primalUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprimalUU\u003c/a\u003e\u003c/code\u003e function lowers a function over dual numbers to a\n function in the primal domain, where the function is\n scalar-to-scalar.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "primalUU",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag b) -\u003e a -\u003e b",
          "source": "src/Numeric-FAD.html#primalUU",
          "type": "function"
        },
        "index": {
          "description": "The primalUU function lowers function over dual numbers to function in the primal domain where the function is scalar-to-scalar",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "primalUU",
          "normalized": "(a b Tower c d-\u003eTower c e)-\u003ed-\u003ee",
          "package": "fad",
          "partial": "UU",
          "signature": "(forall tag. Tower tag a-\u003eTower tag b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:primalUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etaylor\u003c/a\u003e\u003c/code\u003e function evaluate a Taylor series of the given\n function around the given point with the given delta.  It returns a\n list of increasingly higher-order approximations.\n\u003c/p\u003e\u003cp\u003eEXAMPLE: \u003ccode\u003etaylor exp 0 1\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "taylor",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-FAD.html#taylor",
          "type": "function"
        },
        "index": {
          "description": "The taylor function evaluate Taylor series of the given function around the given point with the given delta It returns list of increasingly higher-order approximations EXAMPLE taylor exp",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "taylor",
          "normalized": "(a b Tower c d-\u003eTower c d)-\u003ed-\u003ed-\u003e[d]",
          "package": "fad",
          "signature": "(forall tag. Tower tag a-\u003eTower tag a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:taylor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etaylor2\u003c/a\u003e\u003c/code\u003e function evaluates a two-dimensional Taylor series\n of the given function.  This is calculated by nested application of\n the \u003ccode\u003e\u003ca\u003etaylor\u003c/a\u003e\u003c/code\u003e function, and the exported signature reflects this.\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "taylor2",
          "package": "fad",
          "signature": "(forall tag0 tag.  Tower tag0 (Tower tag a) -\u003e Tower tag0 (Tower tag a) -\u003e Tower tag0 (Tower tag a)) -\u003e a -\u003e a -\u003e a -\u003e a -\u003e [[a]]",
          "source": "src/Numeric-FAD.html#taylor2",
          "type": "function"
        },
        "index": {
          "description": "The taylor2 function evaluates two-dimensional Taylor series of the given function This is calculated by nested application of the taylor function and the exported signature reflects this",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "taylor2",
          "normalized": "(a b c Tower b(Tower b d)-\u003eTower b(Tower b d)-\u003eTower b(Tower b d))-\u003ed-\u003ed-\u003ed-\u003ed-\u003e[[d]]",
          "package": "fad",
          "signature": "(forall tag tag. Tower tag(Tower tag a)-\u003eTower tag(Tower tag a)-\u003eTower tag(Tower tag a))-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:taylor2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezeroNewton\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eTEST CASE:\n  \u003ccode\u003etake 10 $ zeroNewton (\\x-\u003ex^2-4) 1  -- converge to 2.0\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTEST CASE\n  :module Data.Complex Numeric.FAD\n  \u003ccode\u003etake 10 $ zeroNewton ((+1).(^2)) (1 :+ 1)  -- converge to (0 :+ 1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.FAD",
          "name": "zeroNewton",
          "package": "fad",
          "signature": "(forall tag.  Tower tag a -\u003e Tower tag a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-FAD.html#zeroNewton",
          "type": "function"
        },
        "index": {
          "description": "The zeroNewton function finds zero of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats TEST CASE take zeroNewton converge to TEST CASE module Data.Complex Numeric.FAD take zeroNewton converge to",
          "hierarchy": "Numeric FAD",
          "module": "Numeric.FAD",
          "name": "zeroNewton",
          "normalized": "(a b Tower c d-\u003eTower c d)-\u003ed-\u003e[d]",
          "package": "fad",
          "partial": "Newton",
          "signature": "(forall tag. Tower tag a-\u003eTower tag a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fad/docs/Numeric-FAD.html#v:zeroNewton"
      }
    }
  ]
]