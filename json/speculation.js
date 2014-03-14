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
        "word": "speculation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersions of the combinators from the \u003ccode\u003especulation\u003c/code\u003e package\n with the signature rearranged to enable them to be used\n directly as actions in the \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e monads\n or any other \u003ccode\u003eCodensity\u003c/code\u003e-shaped monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "Class",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Versions of the combinators from the speculation package with the signature rearranged to enable them to be used directly as actions in the Cont and ContT monads or any other Codensity shaped monad",
          "hierarchy": "Control Concurrent Speculation Class",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "Class",
          "package": "speculation",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Class",
          "name": "MonadSpec",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation-Class.html#MonadSpec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Class",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "MonadSpec",
          "package": "speculation",
          "partial": "Monad Spec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#t:MonadSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espec\u003c/code\u003e with a user supplied comparison function\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specByM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-Speculation-Class.html#specByM",
          "type": "method"
        },
        "index": {
          "description": "spec with user supplied comparison function",
          "hierarchy": "Control Concurrent Speculation Class",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specByM",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003eb a",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a is unevaluated, \u003ccode\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e evaluates the current continuation \n with \u003ccode\u003eg\u003c/code\u003e while testing if \u003ccode\u003eg\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, if they differ, it re-evalutes the\n continuation with \u003ccode\u003ea\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e was already evaluated, the continuation is\n just directly applied to \u003ccode\u003ea\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specM",
          "package": "speculation",
          "signature": "a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-Speculation-Class.html#specM",
          "type": "function"
        },
        "index": {
          "description": "When is unevaluated spec evaluates the current continuation with while testing if if they differ it re-evalutes the continuation with If was already evaluated the continuation is just directly applied to instead",
          "hierarchy": "Control Concurrent Speculation Class",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specM",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "speculation",
          "signature": "a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espec'\u003c/code\u003e with a user supplied comparison function\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specOnM",
          "package": "speculation",
          "signature": "(a -\u003e c) -\u003e a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-Speculation-Class.html#specOnM",
          "type": "function"
        },
        "index": {
          "description": "spec with user supplied comparison function",
          "hierarchy": "Control Concurrent Speculation Class",
          "module": "Control.Concurrent.Speculation.Class",
          "name": "specOnM",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec a",
          "package": "speculation",
          "partial": "On",
          "signature": "(a-\u003ec)-\u003ea-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "Foldable",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "Foldable",
          "package": "speculation",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "all",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "all",
          "normalized": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "speculation",
          "signature": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "and",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e t Bool -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "and",
          "normalized": "(Int-\u003eBool)-\u003ea Bool-\u003eBool",
          "package": "speculation",
          "signature": "(Int-\u003eBool)-\u003et Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "any",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "any",
          "normalized": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "speculation",
          "signature": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "asum",
          "package": "speculation",
          "signature": "(Int -\u003e f a) -\u003e t (f a) -\u003e f a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#asum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "asum",
          "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
          "package": "speculation",
          "signature": "(Int-\u003ef a)-\u003et(f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "asumBy",
          "package": "speculation",
          "signature": "(f a -\u003e f a -\u003e Bool) -\u003e (Int -\u003e f a) -\u003e t (f a) -\u003e f a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#asumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "asumBy",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
          "package": "speculation",
          "partial": "By",
          "signature": "(f a-\u003ef a-\u003eBool)-\u003e(Int-\u003ef a)-\u003et(f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:asumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concat",
          "package": "speculation",
          "signature": "(Int -\u003e [a]) -\u003e t [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concat",
          "normalized": "(Int-\u003e[a])-\u003eb[a]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003e[a])-\u003et[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatBy",
          "package": "speculation",
          "signature": "([a] -\u003e [a] -\u003e Bool) -\u003e (Int -\u003e [a]) -\u003e t [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#concatBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatBy",
          "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003eb[a]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003et[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatMap",
          "package": "speculation",
          "signature": "(Int -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e t a -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatMap",
          "normalized": "(Int-\u003e[a])-\u003e(b-\u003e[a])-\u003ec b-\u003e[a]",
          "package": "speculation",
          "partial": "Map",
          "signature": "(Int-\u003e[b])-\u003e(a-\u003e[b])-\u003et a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatMapBy",
          "package": "speculation",
          "signature": "([b] -\u003e [b] -\u003e Bool) -\u003e (Int -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e t a -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#concatMapBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "concatMapBy",
          "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003e(b-\u003e[a])-\u003ec b-\u003e[a]",
          "package": "speculation",
          "partial": "Map By",
          "signature": "([b]-\u003e[b]-\u003eBool)-\u003e(Int-\u003e[b])-\u003e(a-\u003e[b])-\u003et a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatMapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "elem",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "elem",
          "normalized": "(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
          "package": "speculation",
          "signature": "(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "elemBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#elemBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "elemBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:elemBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "find",
          "package": "speculation",
          "signature": "(Int -\u003e Maybe a) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Maybe a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "find",
          "normalized": "(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003eb a-\u003eMaybe a",
          "package": "speculation",
          "signature": "(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003et a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "findBy",
          "package": "speculation",
          "signature": "(Maybe a -\u003e Maybe a -\u003e Bool) -\u003e (Int -\u003e Maybe a) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Maybe a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#findBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "findBy",
          "normalized": "(Maybe a-\u003eMaybe a-\u003eBool)-\u003e(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003eb a-\u003eMaybe a",
          "package": "speculation",
          "partial": "By",
          "signature": "(Maybe a-\u003eMaybe a-\u003eBool)-\u003e(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003et a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:findBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "fold",
          "package": "speculation",
          "signature": "(Int -\u003e m) -\u003e f m -\u003e m",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator fold xs yields the same answer as fold xs should supply an estimate of the value of the monoidal summation over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "fold",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003em)-\u003ef m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldBy",
          "package": "speculation",
          "signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e f m -\u003e m",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldBy",
          "type": "function"
        },
        "index": {
          "description": "fold using specBy",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003ef m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldMap",
          "package": "speculation",
          "signature": "(Int -\u003e m) -\u003e (a -\u003e m) -\u003e f a -\u003e m",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldMap",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator foldMap xs yields the same answer as foldMap xs should supply an estimate of the value of the monoidal summation over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldMap",
          "normalized": "(Int-\u003ea)-\u003e(b-\u003ea)-\u003ec b-\u003ea",
          "package": "speculation",
          "partial": "Map",
          "signature": "(Int-\u003em)-\u003e(a-\u003em)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldMapBy",
          "package": "speculation",
          "signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e (a -\u003e m) -\u003e f a -\u003e m",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldMapBy",
          "type": "function"
        },
        "index": {
          "description": "foldMap using specBy",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldMapBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea)-\u003ec b-\u003ea",
          "package": "speculation",
          "partial": "Map By",
          "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e(a-\u003em)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldMapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003efoldl'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from folding over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl",
          "package": "speculation",
          "signature": "(Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator foldl xs yields the same answer as foldl xs should supply an estimate of the value returned from folding over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl1",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl1",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl1By",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldl1By",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldl1By",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl1By"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlBy",
          "package": "speculation",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldlBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlByM",
          "package": "speculation",
          "signature": "(m b -\u003e m b -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e (b -\u003e a -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldlByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlByM",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(b-\u003ec-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
          "package": "speculation",
          "partial": "By",
          "signature": "(m b-\u003em b-\u003eBool)-\u003e(Int-\u003em b)-\u003e(b-\u003ea-\u003em b)-\u003em b-\u003ef a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlBySTM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e (a -\u003e b -\u003e STM a) -\u003e STM a -\u003e f b -\u003e STM a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldlBySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlBySTM",
          "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
          "package": "speculation",
          "partial": "By STM",
          "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ef b-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlBySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlM",
          "package": "speculation",
          "signature": "(Int -\u003e m b) -\u003e (b -\u003e a -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldlM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlM",
          "normalized": "(Int-\u003ea b)-\u003e(b-\u003ec-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
          "package": "speculation",
          "signature": "(Int-\u003em b)-\u003e(b-\u003ea-\u003em b)-\u003em b-\u003ef a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlSTM",
          "package": "speculation",
          "signature": "(Int -\u003e STM a) -\u003e (a -\u003e b -\u003e STM a) -\u003e STM a -\u003e f b -\u003e STM a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldlSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldlSTM",
          "normalized": "(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
          "package": "speculation",
          "partial": "STM",
          "signature": "(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ef b-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr",
          "package": "speculation",
          "signature": "(Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr",
          "normalized": "(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr1",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr1",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr1By",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldr1By",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldr1By",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr1By"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003efoldr'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from folding over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrBy",
          "package": "speculation",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldrBy",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator foldr xs yields the same answer as foldr xs should supply an estimate of the value returned from folding over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrByM",
          "package": "speculation",
          "signature": "(m b -\u003e m b -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e (a -\u003e b -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldrByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrByM",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003eb-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
          "package": "speculation",
          "partial": "By",
          "signature": "(m b-\u003em b-\u003eBool)-\u003e(Int-\u003em b)-\u003e(a-\u003eb-\u003em b)-\u003em b-\u003ef a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrBySTM",
          "package": "speculation",
          "signature": "(b -\u003e b -\u003e STM Bool) -\u003e (Int -\u003e STM b) -\u003e (a -\u003e b -\u003e STM b) -\u003e STM b -\u003e f a -\u003e STM b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldrBySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrBySTM",
          "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(b-\u003ea-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
          "package": "speculation",
          "partial": "By STM",
          "signature": "(b-\u003eb-\u003eSTM Bool)-\u003e(Int-\u003eSTM b)-\u003e(a-\u003eb-\u003eSTM b)-\u003eSTM b-\u003ef a-\u003eSTM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrBySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrM",
          "package": "speculation",
          "signature": "(Int -\u003e m b) -\u003e (a -\u003e b -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldrM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrM",
          "normalized": "(Int-\u003ea b)-\u003e(c-\u003eb-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
          "package": "speculation",
          "signature": "(Int-\u003em b)-\u003e(a-\u003eb-\u003em b)-\u003em b-\u003ef a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrSTM",
          "package": "speculation",
          "signature": "(Int -\u003e STM b) -\u003e (a -\u003e b -\u003e STM b) -\u003e STM b -\u003e f a -\u003e STM b",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#foldrSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "foldrSTM",
          "normalized": "(Int-\u003eSTM a)-\u003e(b-\u003ea-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
          "package": "speculation",
          "partial": "STM",
          "signature": "(Int-\u003eSTM b)-\u003e(a-\u003eb-\u003eSTM b)-\u003eSTM b-\u003ef a-\u003eSTM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forByM_",
          "package": "speculation",
          "signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m c) -\u003e t a -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#forByM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forByM_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em c)-\u003et a-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forByM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forBy_",
          "package": "speculation",
          "signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f c) -\u003e t a -\u003e (a -\u003e f b) -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#forBy_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forBy_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef c)-\u003et a-\u003e(a-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forM_",
          "package": "speculation",
          "signature": "(Int -\u003e m c) -\u003e t a -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#forM_",
          "type": "function"
        },
        "index": {
          "description": "for is mapM with its arguments flipped",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forM_",
          "normalized": "(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003em c)-\u003et a-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forSTM_",
          "package": "speculation",
          "signature": "STM Bool -\u003e (Int -\u003e STM c) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#forSTM_",
          "type": "function"
        },
        "index": {
          "description": "for is mapM with its arguments flipped",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "forSTM_",
          "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003eb c-\u003e(c-\u003eSTM d)-\u003eSTM()",
          "package": "speculation",
          "partial": "STM",
          "signature": "STM Bool-\u003e(Int-\u003eSTM c)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forSTM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "for_",
          "package": "speculation",
          "signature": "(Int -\u003e f c) -\u003e t a -\u003e (a -\u003e f b) -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#for_",
          "type": "function"
        },
        "index": {
          "description": "for is traverse with its arguments flipped",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "for_",
          "normalized": "(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003ef c)-\u003et a-\u003e(a-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapByM_",
          "package": "speculation",
          "signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m c) -\u003e (a -\u003e m b) -\u003e t a -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#mapByM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapByM_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em c)-\u003e(a-\u003em b)-\u003et a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapByM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of the structure to a monadic action, evaluating these actions\n from left to right and ignoring the results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapM_",
          "package": "speculation",
          "signature": "(Int -\u003e m c) -\u003e (a -\u003e m b) -\u003e t a -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "Map each element of the structure to monadic action evaluating these actions from left to right and ignoring the results",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapM_",
          "normalized": "(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003em c)-\u003e(a-\u003em b)-\u003et a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of the structure to a monadic action, evaluating these actions\n from left to right and ignoring the results, while transactional side-effects from \n mis-speculated actions are rolled back.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapSTM_",
          "package": "speculation",
          "signature": "STM Bool -\u003e (Int -\u003e STM c) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#mapSTM_",
          "type": "function"
        },
        "index": {
          "description": "Map each element of the structure to monadic action evaluating these actions from left to right and ignoring the results while transactional side-effects from mis-speculated actions are rolled back",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "mapSTM_",
          "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003e(b-\u003eSTM c)-\u003ed b-\u003eSTM()",
          "package": "speculation",
          "partial": "STM",
          "signature": "STM Bool-\u003e(Int-\u003eSTM c)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapSTM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "maximum",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "maximum",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "maximumBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#maximumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "minimum",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "minimum",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "minimumBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#minimumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "msum",
          "package": "speculation",
          "signature": "(Int -\u003e m a) -\u003e t (m a) -\u003e m a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#msum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "msum",
          "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
          "package": "speculation",
          "signature": "(Int-\u003em a)-\u003et(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "msumBy",
          "package": "speculation",
          "signature": "(m a -\u003e m a -\u003e Bool) -\u003e (Int -\u003e m a) -\u003e t (m a) -\u003e m a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#msumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "msumBy",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
          "package": "speculation",
          "partial": "By",
          "signature": "(m a-\u003em a-\u003eBool)-\u003e(Int-\u003em a)-\u003et(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:msumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "notElem",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "notElem",
          "normalized": "(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
          "package": "speculation",
          "partial": "Elem",
          "signature": "(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "notElemBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#notElemBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "notElemBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
          "package": "speculation",
          "partial": "Elem By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:notElemBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "or",
          "package": "speculation",
          "signature": "(Int -\u003e Bool) -\u003e t Bool -\u003e Bool",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "or",
          "normalized": "(Int-\u003eBool)-\u003ea Bool-\u003eBool",
          "package": "speculation",
          "signature": "(Int-\u003eBool)-\u003et Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "product",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "product",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "productBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#productBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "productBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:productBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceA_",
          "package": "speculation",
          "signature": "(Int -\u003e f b) -\u003e t (f a) -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceA_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceA_",
          "normalized": "(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003ef b)-\u003et(f a)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceA_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceByA_",
          "package": "speculation",
          "signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f b) -\u003e t (f a) -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceByA_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceByA_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef b)-\u003et(f a)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceByA_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceBy_",
          "package": "speculation",
          "signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e t (m a) -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceBy_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceBy_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em b)-\u003et(m a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceSTM_",
          "package": "speculation",
          "signature": "STM Bool -\u003e (Int -\u003e STM a) -\u003e t (STM b) -\u003e STM ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceSTM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequenceSTM_",
          "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003eb(STM c)-\u003eSTM()",
          "package": "speculation",
          "partial": "STM",
          "signature": "STM Bool-\u003e(Int-\u003eSTM a)-\u003et(STM b)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceSTM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequence_",
          "package": "speculation",
          "signature": "(Int -\u003e m b) -\u003e t (m a) -\u003e m ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sequence_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sequence_",
          "normalized": "(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003em b)-\u003et(m a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sum",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sum",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sumBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#sumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "sumBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "toList",
          "package": "speculation",
          "signature": "(Int -\u003e [a]) -\u003e t a -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "toList",
          "normalized": "(Int-\u003e[a])-\u003eb a-\u003e[a]",
          "package": "speculation",
          "partial": "List",
          "signature": "(Int-\u003e[a])-\u003et a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "toListBy",
          "package": "speculation",
          "signature": "([a] -\u003e [a] -\u003e Bool) -\u003e (Int -\u003e [a]) -\u003e t a -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#toListBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "toListBy",
          "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003eb a-\u003e[a]",
          "package": "speculation",
          "partial": "List By",
          "signature": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003et a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:toListBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "traverseBy_",
          "package": "speculation",
          "signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f c) -\u003e (a -\u003e f b) -\u003e t a -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#traverseBy_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "traverseBy_",
          "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
          "package": "speculation",
          "partial": "By",
          "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef c)-\u003e(a-\u003ef b)-\u003et a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:traverseBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to an action, evaluate these actions\n from left to right and ignore the results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "traverse_",
          "package": "speculation",
          "signature": "(Int -\u003e f c) -\u003e (a -\u003e f b) -\u003e t a -\u003e f ()",
          "source": "src/Control-Concurrent-Speculation-Foldable.html#traverse_",
          "type": "function"
        },
        "index": {
          "description": "Map each element of structure to an action evaluate these actions from left to right and ignore the results",
          "hierarchy": "Control Concurrent Speculation Foldable",
          "module": "Control.Concurrent.Speculation.Foldable",
          "name": "traverse_",
          "normalized": "(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
          "package": "speculation",
          "signature": "(Int-\u003ef c)-\u003e(a-\u003ef b)-\u003et a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "List",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "List",
          "package": "speculation",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e g xs\u003c/code\u003e converts \u003ccode\u003exs\u003c/code\u003e into a list of the prefix sums.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the prefix sum, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scan",
          "package": "speculation",
          "signature": "(Int -\u003e m) -\u003e [m] -\u003e [m]",
          "source": "src/Control-Concurrent-Speculation-List.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator scan xs converts xs into list of the prefix sums should supply an estimate of the value of the monoidal summation over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the prefix sum then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scan",
          "normalized": "(Int-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003em)-\u003e[m]-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanBy",
          "package": "speculation",
          "signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e [m] -\u003e [m]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanBy",
          "type": "function"
        },
        "index": {
          "description": "scan using specBy",
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e[m]-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escanMap\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e converts \u003ccode\u003exs\u003c/code\u003e into a list of the prefix sums.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the scan, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e\u003cpre\u003e scan = scanMap id\n scanMap = scanMapBy (==)\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanMap",
          "package": "speculation",
          "signature": "(Int -\u003e m) -\u003e (a -\u003e m) -\u003e [a] -\u003e [m]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanMap",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator scanMap xs converts xs into list of the prefix sums should supply an estimate of the value of the monoidal summation over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the scan then this can provide increased opportunities for parallelism scan scanMap id scanMap scanMapBy",
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanMap",
          "normalized": "(Int-\u003ea)-\u003e(b-\u003ea)-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "partial": "Map",
          "signature": "(Int-\u003em)-\u003e(a-\u003em)-\u003e[a]-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanMapBy",
          "package": "speculation",
          "signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e (a -\u003e m) -\u003e [a] -\u003e [m]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanMapBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanMapBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea)-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "partial": "Map By",
          "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e(a-\u003em)-\u003e[a]-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanMapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl",
          "package": "speculation",
          "signature": "(Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl1",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl1",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl1By",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanl1By",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanl1By",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl1By"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanlBy",
          "package": "speculation",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanlBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanlBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanlBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003escanr'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from scanning over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the scan, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr",
          "package": "speculation",
          "signature": "(Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "Given valid estimator scanr xs yields the same answer as scanr xs should supply an estimate of the value returned from scanning over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the scan then this can provide increased opportunities for parallelism",
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr",
          "normalized": "(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr1",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr1",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr1By",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanr1By",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanr1By",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr1By"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanrBy",
          "package": "speculation",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/Control-Concurrent-Speculation-List.html#scanrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation List",
          "module": "Control.Concurrent.Speculation.List",
          "name": "scanrBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "speculation",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "Traversable",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "Traversable",
          "package": "speculation",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "for",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e (a -\u003e f b) -\u003e f (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#for",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "for",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003e(a-\u003ef b)-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e (a -\u003e f b) -\u003e f (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#forBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003e(a-\u003ef b)-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forByM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e (a -\u003e m b) -\u003e m (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#forByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forByM",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003e(a-\u003em b)-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forBySTM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#forBySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forBySTM",
          "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003eb a-\u003e(a-\u003eSTM c)-\u003eSTM(b c)",
          "package": "speculation",
          "partial": "By STM",
          "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forBySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forM",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e t a -\u003e (a -\u003e m b) -\u003e m (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#forM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forM",
          "normalized": "(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003et a-\u003e(a-\u003em b)-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forSTM",
          "package": "speculation",
          "signature": "(Int -\u003e STM a) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#forSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "forSTM",
          "normalized": "(Int-\u003eSTM a)-\u003eb a-\u003e(a-\u003eSTM c)-\u003eSTM(b c)",
          "package": "speculation",
          "partial": "STM",
          "signature": "(Int-\u003eSTM a)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumL",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumL",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "speculation",
          "partial": "Accum",
          "signature": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumLBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumLBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumLBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "speculation",
          "partial": "Accum LBy",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumLBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumR",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumR",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "speculation",
          "partial": "Accum",
          "signature": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumRBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumRBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapAccumRBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "speculation",
          "partial": "Accum RBy",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumRBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapByM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e m b) -\u003e t a -\u003e m (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapByM",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003em b)-\u003et a-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapBySTM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapBySTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapBySTM",
          "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003ec a-\u003eSTM(c b)",
          "package": "speculation",
          "partial": "By STM",
          "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapBySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapM",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e m b) -\u003e t a -\u003e m (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapM",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003em b)-\u003et a-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapSTM",
          "package": "speculation",
          "signature": "(Int -\u003e STM a) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#mapSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "mapSTM",
          "normalized": "(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003ec a-\u003eSTM(c b)",
          "package": "speculation",
          "partial": "STM",
          "signature": "(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequence",
          "package": "speculation",
          "signature": "(Int -\u003e m a) -\u003e t (m a) -\u003e m (t a)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequence",
          "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
          "package": "speculation",
          "signature": "(Int-\u003em a)-\u003et(m a)-\u003em(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceA",
          "package": "speculation",
          "signature": "(Int -\u003e f a) -\u003e t (f a) -\u003e f (t a)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceA",
          "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
          "package": "speculation",
          "signature": "(Int-\u003ef a)-\u003et(f a)-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceBy",
          "package": "speculation",
          "signature": "(m a -\u003e m a -\u003e Bool) -\u003e (Int -\u003e m a) -\u003e t (m a) -\u003e m (t a)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceBy",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
          "package": "speculation",
          "partial": "By",
          "signature": "(m a-\u003em a-\u003eBool)-\u003e(Int-\u003em a)-\u003et(m a)-\u003em(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceByA",
          "package": "speculation",
          "signature": "(f a -\u003e f a -\u003e Bool) -\u003e (Int -\u003e f a) -\u003e t (f a) -\u003e f (t a)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceByA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "sequenceByA",
          "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
          "package": "speculation",
          "partial": "By",
          "signature": "(f a-\u003ef a-\u003eBool)-\u003e(Int-\u003ef a)-\u003et(f a)-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceByA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "traverse",
          "package": "speculation",
          "signature": "(Int -\u003e a) -\u003e (a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "traverse",
          "normalized": "(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "speculation",
          "signature": "(Int-\u003ea)-\u003e(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "traverseBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Control-Concurrent-Speculation-Traversable.html#traverseBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation Traversable",
          "module": "Control.Concurrent.Speculation.Traversable",
          "name": "traverseBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:traverseBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Speculation",
          "name": "Speculation",
          "package": "speculation",
          "source": "src/Control-Concurrent-Speculation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "Speculation",
          "package": "speculation",
          "partial": "Speculation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e g f a\u003c/code\u003e evaluates \u003ccode\u003ef g\u003c/code\u003e while forcing \u003ccode\u003ea\u003c/code\u003e, if \u003ccode\u003eg == a\u003c/code\u003e then \u003ccode\u003ef g\u003c/code\u003e is returned, otherwise \u003ccode\u003ef a\u003c/code\u003e is evaluated and returned. Furthermore, if the argument has already been evaluated or are not running on the threaded runtime, we skip the \u003ccode\u003ef g\u003c/code\u003e computation entirely. If a good guess at the value of \u003ccode\u003ea\u003c/code\u003e is available, this is one way to induce parallelism in an otherwise sequential task. However, if the guess isn't available more cheaply than the actual answer, then this saves no work and if the guess is wrong, you risk evaluating the function twice. Under high load or in a runtime with access to a single capability, since 'f g' is computed via the spark queue, the speculation will be skipped and you will obtain the same answer as 'f $! a'.\n\u003c/p\u003e\u003cp\u003eThe best-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]    (check g == a)\n spark:         [----- f g -----]\n overall:    [--- spec g f a ---]\n\u003c/pre\u003e\u003cp\u003eThe worst-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n spark:         [----- f g -----]\n overall:    [-------- spec g f a ---------]\n\u003c/pre\u003e\u003cp\u003eNote that, if \u003ccode\u003ef g\u003c/code\u003e takes longer than a to compute, in the HEAD release of GHC, \u003ccode\u003ef g\u003c/code\u003e will be collected and killed during garbage collection.\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n spark:         [---- f g ----######         (#'s mark when this spark is collectable)\n overall:    [--------- spec g f a --------]\n\u003c/pre\u003e\u003cp\u003eUnder high load:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n overall:    [-------- spec g f a ---------]\n\u003c/pre\u003e\u003cp\u003eCompare these to the timeline of \u003ccode\u003ef $! a\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [---- f a ----]\n orverall:   [---------- f $! a ---------]\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "spec",
          "package": "speculation",
          "signature": "a -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Concurrent-Speculation.html#spec",
          "type": "function"
        },
        "index": {
          "description": "spec evaluates while forcing if then is returned otherwise is evaluated and returned Furthermore if the argument has already been evaluated or are not running on the threaded runtime we skip the computation entirely If good guess at the value of is available this is one way to induce parallelism in an otherwise sequential task However if the guess isn available more cheaply than the actual answer then this saves no work and if the guess is wrong you risk evaluating the function twice Under high load or in runtime with access to single capability since is computed via the spark queue the speculation will be skipped and you will obtain the same answer as The best-case timeline looks like foreground foreground check spark overall spec The worst-case timeline looks like foreground foreground check foreground spark overall spec Note that if takes longer than to compute in the HEAD release of GHC will be collected and killed during garbage collection foreground foreground check foreground spark mark when this spark is collectable overall spec Under high load foreground foreground check foreground overall spec Compare these to the timeline of foreground foreground orverall",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "spec",
          "normalized": "a-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "speculation",
          "signature": "a-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e with a user defined comparison function\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "specBy",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Concurrent-Speculation.html#specBy",
          "type": "function"
        },
        "index": {
          "description": "spec with user defined comparison function",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "specBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "speculation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e using a user defined comparison function\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "specBySTM",
          "package": "speculation",
          "signature": "(a -\u003e a -\u003e STM Bool) -\u003e STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
          "source": "src/Control-Concurrent-Speculation.html#specBySTM",
          "type": "function"
        },
        "index": {
          "description": "specSTM using user defined comparison function",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "specBySTM",
          "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
          "package": "speculation",
          "partial": "By STM",
          "signature": "(a-\u003ea-\u003eSTM Bool)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specBySTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e comparing by projection onto another type\n\u003c/p\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "specOn",
          "package": "speculation",
          "signature": "(a -\u003e c) -\u003e a -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Concurrent-Speculation.html#specOn",
          "type": "function"
        },
        "index": {
          "description": "spec comparing by projection onto another type",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "specOn",
          "normalized": "(a-\u003eb)-\u003ea-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "package": "speculation",
          "partial": "On",
          "signature": "(a-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003especBySTM\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e (==)\u003c/pre\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "specOnSTM",
          "package": "speculation",
          "signature": "(a -\u003e STM c) -\u003e STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
          "source": "src/Control-Concurrent-Speculation.html#specOnSTM",
          "type": "function"
        },
        "index": {
          "description": "specBySTM on",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "specOnSTM",
          "normalized": "(a-\u003eSTM b)-\u003eSTM a-\u003e(a-\u003eSTM c)-\u003ea-\u003eSTM c",
          "package": "speculation",
          "partial": "On STM",
          "signature": "(a-\u003eSTM c)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specOnSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e g f a\u003c/code\u003e evaluates \u003ccode\u003efg = do g' \u003c- g; f g'\u003c/code\u003e, while forcing \u003ccode\u003ea\u003c/code\u003e, then if \u003ccode\u003eg' == a\u003c/code\u003e then \u003ccode\u003efg\u003c/code\u003e is returned. Otherwise the side-effects of \u003ccode\u003efg\u003c/code\u003e are rolled back and \u003ccode\u003ef a\u003c/code\u003e is evaluated. \u003ccode\u003eg\u003c/code\u003e is allowed to be a monadic action, so that we can kickstart the computation of \u003ccode\u003ea\u003c/code\u003e earlier. Under high load, or when we are not using the parallel runtime, the speculation is avoided, to enable this to more closely approximate the runtime profile of spec.\n\u003c/p\u003e\u003cp\u003eIf the argument \u003ccode\u003ea\u003c/code\u003e is already evaluated, we don't bother to perform \u003ccode\u003ef g\u003c/code\u003e at all.\n\u003c/p\u003e\u003cp\u003eIf a good guess at the value of \u003ccode\u003ea\u003c/code\u003e is available, this is one way to induce parallelism in an otherwise sequential task.\n\u003c/p\u003e\u003cp\u003eHowever, if the guess isn't available more cheaply than the actual answer then this saves no work, and if the guess is\n wrong, you risk evaluating the function twice.\n\u003c/p\u003e\u003cp\u003eThe best-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [--- g \u003e\u003e= f ---]\n spark:          [------- a -------]\n foreground:                       [-] (compare g' == a)\n overall:    [---- specSTM g f a ----]\n\u003c/pre\u003e\u003cp\u003eThe worst-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [---- g \u003e\u003e= f ----]\n spark:         [------- a -------]\n foreground:                      [-] (check if g' == a)\n foreground:                        [--] (rollback)\n foreground:                           [------ f a ------]\n overall:    [------------ specSTM g f a ----------------]\n\u003c/pre\u003e\u003cp\u003eUnder high load, \u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e degrades less gracefully than \u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [---- g \u003e\u003e= f ----]\n spark:                        [------- a -------]\n foreground:                                     [-] (check if g' == a)\n foreground:                                       [--] (rollback)\n foreground:                                          [------ f a ------]\n overall:    [--------------------specSTM g f a ------------------------]\n\u003c/pre\u003e\u003cp\u003eCompare these to the timeline of \u003ccode\u003ef $! a\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [------- a -------]\n foreground:                   [------ f a ------]\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Speculation",
          "name": "specSTM",
          "package": "speculation",
          "signature": "STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
          "source": "src/Control-Concurrent-Speculation.html#specSTM",
          "type": "function"
        },
        "index": {
          "description": "specSTM evaluates fg do while forcing then if then fg is returned Otherwise the side-effects of fg are rolled back and is evaluated is allowed to be monadic action so that we can kickstart the computation of earlier Under high load or when we are not using the parallel runtime the speculation is avoided to enable this to more closely approximate the runtime profile of spec If the argument is already evaluated we don bother to perform at all If good guess at the value of is available this is one way to induce parallelism in an otherwise sequential task However if the guess isn available more cheaply than the actual answer then this saves no work and if the guess is wrong you risk evaluating the function twice The best-case timeline looks like foreground spark foreground compare overall specSTM The worst-case timeline looks like foreground spark foreground check if foreground rollback foreground overall specSTM Under high load specSTM degrades less gracefully than spec foreground spark foreground check if foreground rollback foreground overall specSTM Compare these to the timeline of foreground foreground",
          "hierarchy": "Control Concurrent Speculation",
          "module": "Control.Concurrent.Speculation",
          "name": "specSTM",
          "normalized": "STM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
          "package": "speculation",
          "partial": "STM",
          "signature": "STM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specSTM"
      }
    }
  ]
]