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
        "word": "repa"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Arbitrary",
          "name": "Arbitrary",
          "package": "repa",
          "source": "src/Data-Array-Repa-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "Arbitrary",
          "package": "repa",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random unboxed array of a given shape\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "arbitraryUShaped",
          "package": "repa",
          "signature": "sh -\u003e Gen (Array U sh a)",
          "source": "src/Data-Array-Repa-Arbitrary.html#arbitraryUShaped",
          "type": "function"
        },
        "index": {
          "description": "Generates random unboxed array of given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "arbitraryUShaped",
          "normalized": "a-\u003eGen(Array U a b)",
          "package": "repa",
          "partial": "UShaped",
          "signature": "sh-\u003eGen(Array U sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:arbitraryUShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random boxed array of a given shape\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "arbitraryVShaped",
          "package": "repa",
          "signature": "sh -\u003e Gen (Array V sh a)",
          "source": "src/Data-Array-Repa-Arbitrary.html#arbitraryVShaped",
          "type": "function"
        },
        "index": {
          "description": "Generates random boxed array of given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "arbitraryVShaped",
          "normalized": "a-\u003eGen(Array V a b)",
          "package": "repa",
          "partial": "VShaped",
          "signature": "sh-\u003eGen(Array V sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:arbitraryVShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for pair of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll2UShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array U sh a, Array U sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll2UShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for pair of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll2UShaped",
          "normalized": "a-\u003e((Array U a b,Array U a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All UShaped",
          "signature": "sh-\u003e((Array U sh a,Array U sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll2UShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for pair of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll2VShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array V sh a, Array V sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll2VShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for pair of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll2VShaped",
          "normalized": "a-\u003e((Array V a b,Array V a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All VShaped",
          "signature": "sh-\u003e((Array V sh a,Array V sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll2VShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for triple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll3UShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array U sh a, Array U sh a, Array U sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll3UShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for triple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll3UShaped",
          "normalized": "a-\u003e((Array U a b,Array U a b,Array U a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All UShaped",
          "signature": "sh-\u003e((Array U sh a,Array U sh a,Array U sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll3UShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for triple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll3VShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array V sh a, Array V sh a, Array V sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll3VShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for triple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll3VShaped",
          "normalized": "a-\u003e((Array V a b,Array V a b,Array V a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All VShaped",
          "signature": "sh-\u003e((Array V sh a,Array V sh a,Array V sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll3VShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for quadruple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll4UShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array U sh a, Array U sh a, Array U sh a, Array U sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll4UShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for quadruple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll4UShaped",
          "normalized": "a-\u003e((Array U a b,Array U a b,Array U a b,Array U a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All UShaped",
          "signature": "sh-\u003e((Array U sh a,Array U sh a,Array U sh a,Array U sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll4UShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for quadruple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll4VShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array V sh a, Array V sh a, Array V sh a, Array V sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll4VShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for quadruple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll4VShaped",
          "normalized": "a-\u003e((Array V a b,Array V a b,Array V a b,Array V a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All VShaped",
          "signature": "sh-\u003e((Array V sh a,Array V sh a,Array V sh a,Array V sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll4VShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for 5-tuple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll5UShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array U sh a, Array U sh a, Array U sh a, Array U sh a, Array U sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll5UShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for tuple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll5UShaped",
          "normalized": "a-\u003e((Array U a b,Array U a b,Array U a b,Array U a b,Array U a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All UShaped",
          "signature": "sh-\u003e((Array U sh a,Array U sh a,Array U sh a,Array U sh a,Array U sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll5UShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for 5-tuple of unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll5VShaped",
          "package": "repa",
          "signature": "sh -\u003e ((Array V sh a, Array V sh a, Array V sh a, Array V sh a, Array V sh a) -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAll5VShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for tuple of unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAll5VShaped",
          "normalized": "a-\u003e((Array V a b,Array V a b,Array V a b,Array V a b,Array V a b)-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All VShaped",
          "signature": "sh-\u003e((Array V sh a,Array V sh a,Array V sh a,Array V sh a,Array V sh a)-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAll5VShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAllUShaped",
          "package": "repa",
          "signature": "sh -\u003e (Array U sh a -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAllUShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAllUShaped",
          "normalized": "a-\u003e(Array U a b-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All UShaped",
          "signature": "sh-\u003e(Array U sh a-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAllUShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty tested for unboxed random arrays with a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAllVShaped",
          "package": "repa",
          "signature": "sh -\u003e (Array V sh a -\u003e prop) -\u003e Property",
          "source": "src/Data-Array-Repa-Arbitrary.html#forAllVShaped",
          "type": "function"
        },
        "index": {
          "description": "Property tested for unboxed random arrays with given shape",
          "hierarchy": "Data Array Repa Arbitrary",
          "module": "Data.Array.Repa.Arbitrary",
          "name": "forAllVShaped",
          "normalized": "a-\u003e(Array V a b-\u003ec)-\u003eProperty",
          "package": "repa",
          "partial": "All VShaped",
          "signature": "sh-\u003e(Array V sh a-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Arbitrary.html#v:forAllVShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGang Primitives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "Gang",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Gang.html",
          "type": "module"
        },
        "index": {
          "description": "Gang Primitives",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "Gang",
          "package": "repa",
          "partial": "Gang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads that execute arbitrary work requests.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "Gang",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Gang.html#Gang",
          "type": "data"
        },
        "index": {
          "description": "Gang is group of threads that execute arbitrary work requests",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "Gang",
          "package": "repa",
          "partial": "Gang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#t:Gang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e with the given number of threads (at least 1).\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "forkGang",
          "package": "repa",
          "signature": "Int -\u003e IO Gang",
          "source": "src/Data-Array-Repa-Eval-Gang.html#forkGang",
          "type": "function"
        },
        "index": {
          "description": "Fork Gang with the given number of threads at least",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "forkGang",
          "normalized": "Int-\u003eIO Gang",
          "package": "repa",
          "partial": "Gang",
          "signature": "Int-\u003eIO Gang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#v:forkGang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue work requests for the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and wait until they complete.\n\u003c/p\u003e\u003cp\u003eIf the gang is already busy then print a warning to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e and just\n   run the actions sequentially in the requesting thread.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangIO",
          "package": "repa",
          "signature": "Gang -\u003e (Int -\u003e IO ()) -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Gang.html#gangIO",
          "type": "function"
        },
        "index": {
          "description": "Issue work requests for the Gang and wait until they complete If the gang is already busy then print warning to stderr and just run the actions sequentially in the requesting thread",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangIO",
          "normalized": "Gang-\u003e(Int-\u003eIO())-\u003eIO()",
          "package": "repa",
          "partial": "IO",
          "signature": "Gang-\u003e(Int-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#v:gangIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egangIO\u003c/a\u003e\u003c/code\u003e but in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangST",
          "package": "repa",
          "signature": "Gang -\u003e (Int -\u003e ST s ()) -\u003e ST s ()",
          "source": "src/Data-Array-Repa-Eval-Gang.html#gangST",
          "type": "function"
        },
        "index": {
          "description": "Same as gangIO but in the ST monad",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangST",
          "normalized": "Gang-\u003e(Int-\u003eST a())-\u003eST a()",
          "package": "repa",
          "partial": "ST",
          "signature": "Gang-\u003e(Int-\u003eST s())-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#v:gangST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of threads in the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangSize",
          "package": "repa",
          "signature": "Gang -\u003e Int",
          "source": "src/Data-Array-Repa-Eval-Gang.html#gangSize",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of threads in the Gang",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "gangSize",
          "normalized": "Gang-\u003eInt",
          "package": "repa",
          "partial": "Size",
          "signature": "Gang-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#v:gangSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis globally shared gang is auto-initialised at startup and shared by all\n   Repa computations.\n\u003c/p\u003e\u003cp\u003eIn a data parallel setting, it does not help to have multiple gangs\n   running at the same time. This is because a single data parallel\n   computation should already be able to keep all threads busy. If we had\n   multiple gangs running at the same time, then the system as a whole would\n   run slower as the gangs would contend for cache and thrash the scheduler.\n\u003c/p\u003e\u003cp\u003eIf, due to laziness or otherwise, you try to start multiple parallel\n   Repa computations at the same time, then you will get the following\n   warning on stderr at runtime:\n\u003c/p\u003e\u003cpre\u003eData.Array.Repa: Performing nested parallel computation sequentially.\n    You've probably called the \u003ccode\u003ecompute\u003c/code\u003e or \u003ccode\u003ecopy\u003c/code\u003e function while another\n    instance was already running. This can happen if the second version\n    was suspended due to lazy evaluation. Use \u003ccode\u003edeepSeqArray\u003c/code\u003e to ensure that\n    each array is fully evaluated before you \u003ccode\u003ecompute\u003c/code\u003e the next one.\n\u003c/pre\u003e",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "theGang",
          "package": "repa",
          "signature": "Gang",
          "source": "src/Data-Array-Repa-Eval-Gang.html#theGang",
          "type": "function"
        },
        "index": {
          "description": "This globally shared gang is auto-initialised at startup and shared by all Repa computations In data parallel setting it does not help to have multiple gangs running at the same time This is because single data parallel computation should already be able to keep all threads busy If we had multiple gangs running at the same time then the system as whole would run slower as the gangs would contend for cache and thrash the scheduler If due to laziness or otherwise you try to start multiple parallel Repa computations at the same time then you will get the following warning on stderr at runtime Data.Array.Repa Performing nested parallel computation sequentially You ve probably called the compute or copy function while another instance was already running This can happen if the second version was suspended due to lazy evaluation Use deepSeqArray to ensure that each array is fully evaluated before you compute the next one",
          "hierarchy": "Data Array Repa Eval Gang",
          "module": "Data.Array.Repa.Eval.Gang",
          "name": "theGang",
          "package": "repa",
          "partial": "Gang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval-Gang.html#v:theGang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level interface to parallel array filling operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "Eval",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Low level interface to parallel array filling operators",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "Eval",
          "package": "repa",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement types that can be used with the blockwise filling functions.\n\u003c/p\u003e\u003cp\u003eThis class is mainly used to define the \u003ccode\u003e\u003ca\u003etouch\u003c/a\u003e\u003c/code\u003e method. This is used internally\n   in the imeplementation of Repa to prevent let-binding from being floated\n   inappropriately by the GHC simplifier.  Doing a \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e sometimes isn't enough,\n   because the GHC simplifier can erase these, and still move around the bindings.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "Elt",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Elt.html#Elt",
          "type": "class"
        },
        "index": {
          "description": "Element types that can be used with the blockwise filling functions This class is mainly used to define the touch method This is used internally in the imeplementation of Repa to prevent let-binding from being floated inappropriately by the GHC simplifier Doing seq sometimes isn enough because the GHC simplifier can erase these and still move around the bindings",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "Elt",
          "package": "repa",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all elements defined by an array and write them to a manifest\n   target representation.\n\u003c/p\u003e\u003cp\u003eNote that instances require that the source array to have a delayed\n   representation such as \u003ccode\u003eD\u003c/code\u003e or \u003ccode\u003eC\u003c/code\u003e. If you want to use a pre-existing\n   manifest array as the source then \u003ccode\u003edelay\u003c/code\u003e it first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "Load",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Load.html#Load",
          "type": "class"
        },
        "index": {
          "description": "Compute all elements defined by an array and write them to manifest target representation Note that instances require that the source array to have delayed representation such as or If you want to use pre-existing manifest array as the source then delay it first",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "Load",
          "package": "repa",
          "partial": "Load",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#t:Load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a range of elements defined by an array and write them to a fillable\n   representation.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "LoadRange",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Load.html#LoadRange",
          "type": "class"
        },
        "index": {
          "description": "Compute range of elements defined by an array and write them to fillable representation",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "LoadRange",
          "package": "repa",
          "partial": "Load Range",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#t:LoadRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of manifest array representations that can be constructed in parallel.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "Target",
          "package": "repa",
          "source": "src/Data-Array-Repa-Eval-Target.html#Target",
          "type": "class"
        },
        "index": {
          "description": "Class of manifest array representations that can be constructed in parallel",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "Target",
          "package": "repa",
          "partial": "Target",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel computation of array elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The source array must have a delayed representation like \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eC\u003c/code\u003e or \u003ccode\u003eP\u003c/code\u003e, \n     and the result a manifest representation like \u003ccode\u003eU\u003c/code\u003e or \u003ccode\u003eF\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If you want to copy data between manifest representations then use\n    \u003ccode\u003e\u003ca\u003ecopyP\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003cli\u003e If you want to convert a manifest array back to a delayed representation\n     then use \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Eval\",\"Data.Array.Repa\"]",
          "name": "computeP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e m (Array r2 sh e)",
          "source": "src/Data-Array-Repa-Eval.html#computeP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:computeP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:computeP\"]"
        },
        "index": {
          "description": "Parallel computation of array elements The source array must have delayed representation like or and the result manifest representation like or If you want to copy data between manifest representations then use copyP instead If you want to convert manifest array back to delayed representation then use delay instead",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "computeP",
          "normalized": "Array a b c-\u003ed(Array a b c)",
          "package": "repa",
          "signature": "Array r sh e-\u003em(Array r sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:computeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential computation of array elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Eval\",\"Data.Array.Repa\"]",
          "name": "computeS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array r2 sh e",
          "source": "src/Data-Array-Repa-Eval.html#computeS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:computeS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:computeS\"]"
        },
        "index": {
          "description": "Sequential computation of array elements",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "computeS",
          "normalized": "Array a b c-\u003eArray a b c",
          "package": "repa",
          "signature": "Array r sh e-\u003eArray r sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:computeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel copying of arrays.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is a wrapper that delays an array before calling \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e. \n\u003c/li\u003e\u003cli\u003e You can use it to copy manifest arrays between representations.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Eval\",\"Data.Array.Repa\"]",
          "name": "copyP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e m (Array r2 sh e)",
          "source": "src/Data-Array-Repa-Eval.html#copyP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:copyP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:copyP\"]"
        },
        "index": {
          "description": "Parallel copying of arrays This is wrapper that delays an array before calling computeP You can use it to copy manifest arrays between representations",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "copyP",
          "normalized": "Array a b c-\u003ed(Array a b c)",
          "package": "repa",
          "signature": "Array r sh e-\u003em(Array r sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:copyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential copying of arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Eval\",\"Data.Array.Repa\"]",
          "name": "copyS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array r2 sh e",
          "source": "src/Data-Array-Repa-Eval.html#copyS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:copyS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:copyS\"]"
        },
        "index": {
          "description": "Sequential copying of arrays",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "copyS",
          "normalized": "Array a b c-\u003eArray a b c",
          "package": "repa",
          "signature": "Array r sh e-\u003eArray r sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:copyS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure the strucure of a mutable array is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "deepSeqMVec",
          "package": "repa",
          "signature": "MVec r e -\u003e a -\u003e a",
          "source": "src/Data-Array-Repa-Eval-Target.html#deepSeqMVec",
          "type": "method"
        },
        "index": {
          "description": "Ensure the strucure of mutable array is fully evaluated",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "deepSeqMVec",
          "normalized": "MVec a b-\u003ec-\u003ec",
          "package": "repa",
          "partial": "Seq MVec",
          "signature": "MVec r e-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:deepSeqMVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a block in a rank-2 array in parallel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Blockwise filling can be more cache-efficient than linear filling for\n    rank-2 arrays.\n\u003c/li\u003e\u003cli\u003e Coordinates given are of the filled edges of the block.\n\u003c/li\u003e\u003cli\u003e We divide the block into columns, and give one column to each thread.\n\u003c/li\u003e\u003cli\u003e Each column is filled in row major order from top to bottom.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillBlock2P",
          "package": "repa",
          "signature": "(Int -\u003e a -\u003e IO ())-\u003e (DIM2 -\u003e a)-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill block in rank-2 array in parallel Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays Coordinates given are of the filled edges of the block We divide the block into columns and give one column to each thread Each column is filled in row major order from top to bottom",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillBlock2P",
          "normalized": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "package": "repa",
          "partial": "Block",
          "signature": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillBlock2P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a block in a rank-2 array, sequentially.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Blockwise filling can be more cache-efficient than linear filling for\n     rank-2 arrays.\n\u003c/li\u003e\u003cli\u003e The block is filled in row major order from top to bottom.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillBlock2S",
          "package": "repa",
          "signature": "(Int -\u003e a -\u003e IO ())-\u003e (DIM2 -\u003e a)-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill block in rank-2 array sequentially Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays The block is filled in row major order from top to bottom",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillBlock2S",
          "normalized": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "package": "repa",
          "partial": "Block",
          "signature": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillBlock2S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill something in parallel, using a separate IO action for each thread.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The array is split into linear chunks,\n     and each thread linearly fills one chunk.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillChunkedIOP",
          "package": "repa",
          "signature": "Int-\u003e (Int -\u003e a -\u003e IO ())-\u003e (Int -\u003e IO (Int -\u003e IO a))-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill something in parallel using separate IO action for each thread The array is split into linear chunks and each thread linearly fills one chunk",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillChunkedIOP",
          "normalized": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003eIO(Int-\u003eIO a))-\u003eIO()",
          "package": "repa",
          "partial": "Chunked IOP",
          "signature": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003eIO(Int-\u003eIO a))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillChunkedIOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill something in parallel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The array is split into linear chunks,\n     and each thread linearly fills one chunk.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillChunkedP",
          "package": "repa",
          "signature": "Int-\u003e (Int -\u003e a -\u003e IO ())-\u003e (Int -\u003e a)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill something in parallel The array is split into linear chunks and each thread linearly fills one chunk",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillChunkedP",
          "normalized": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "package": "repa",
          "partial": "Chunked",
          "signature": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillChunkedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a block in a rank-2 array in parallel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays.\n\u003c/li\u003e\u003cli\u003e Using cursor functions can help to expose inter-element indexing computations to\n     the GHC and LLVM optimisers.\n\u003c/li\u003e\u003cli\u003e Coordinates given are of the filled edges of the block.\n\u003c/li\u003e\u003cli\u003e We divide the block into columns, and give one column to each thread.\n\u003c/li\u003e\u003cli\u003e Each column is filled in row major order from top to bottom.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillCursoredBlock2P",
          "package": "repa",
          "signature": "(Int -\u003e a -\u003e IO ())-\u003e (DIM2 -\u003e cursor)-\u003e (DIM2 -\u003e cursor -\u003e cursor)-\u003e (cursor -\u003e a)-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill block in rank-2 array in parallel Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays Using cursor functions can help to expose inter-element indexing computations to the GHC and LLVM optimisers Coordinates given are of the filled edges of the block We divide the block into columns and give one column to each thread Each column is filled in row major order from top to bottom",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillCursoredBlock2P",
          "normalized": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003eb)-\u003e(DIM-\u003eb-\u003eb)-\u003e(b-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "package": "repa",
          "partial": "Cursored Block",
          "signature": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ecursor)-\u003e(DIM-\u003ecursor-\u003ecursor)-\u003e(cursor-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillCursoredBlock2P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a block in a rank-2 array, sequentially.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays.\n\u003c/li\u003e\u003cli\u003e Using cursor functions can help to expose inter-element indexing computations to\n     the GHC and LLVM optimisers.\n\u003c/li\u003e\u003cli\u003e Coordinates given are of the filled edges of the block.\n\u003c/li\u003e\u003cli\u003e The block is filled in row major order from top to bottom.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillCursoredBlock2S",
          "package": "repa",
          "signature": "(Int -\u003e a -\u003e IO ())-\u003e (DIM2 -\u003e cursor)-\u003e (DIM2 -\u003e cursor -\u003e cursor)-\u003e (cursor -\u003e a)-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e Int#-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill block in rank-2 array sequentially Blockwise filling can be more cache-efficient than linear filling for rank-2 arrays Using cursor functions can help to expose inter-element indexing computations to the GHC and LLVM optimisers Coordinates given are of the filled edges of the block The block is filled in row major order from top to bottom",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillCursoredBlock2S",
          "normalized": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003eb)-\u003e(DIM-\u003eb-\u003eb)-\u003e(b-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "package": "repa",
          "partial": "Cursored Block",
          "signature": "(Int-\u003ea-\u003eIO())-\u003e(DIM-\u003ecursor)-\u003e(DIM-\u003ecursor-\u003ecursor)-\u003e(cursor-\u003ea)-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eInt #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillCursoredBlock2S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill something in parallel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The array is split into linear chunks and each thread fills one chunk.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillInterleavedP",
          "package": "repa",
          "signature": "Int-\u003e (Int -\u003e a -\u003e IO ())-\u003e (Int -\u003e a)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill something in parallel The array is split into linear chunks and each thread fills one chunk",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillInterleavedP",
          "normalized": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "package": "repa",
          "partial": "Interleaved",
          "signature": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillInterleavedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill something sequentially.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The array is filled linearly from start to finish.  \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fillLinearS",
          "package": "repa",
          "signature": "Int-\u003e (Int -\u003e a -\u003e IO ())-\u003e (Int -\u003e a)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Fill something sequentially The array is filled linearly from start to finish",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fillLinearS",
          "normalized": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "package": "repa",
          "partial": "Linear",
          "signature": "Int-\u003e(Int-\u003ea-\u003eIO())-\u003e(Int-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fillLinearS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Construct a manifest array from a list.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "fromList",
          "package": "repa",
          "signature": "sh -\u003e [e] -\u003e Array r sh e",
          "source": "src/Data-Array-Repa-Eval-Target.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct manifest array from list",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "fromList",
          "normalized": "a-\u003e[b]-\u003eArray c a b",
          "package": "repa",
          "partial": "List",
          "signature": "sh-\u003e[e]-\u003eArray r sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill an entire array in parallel.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "loadP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e MVec r2 e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Load.html#loadP",
          "type": "method"
        },
        "index": {
          "description": "Fill an entire array in parallel",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "loadP",
          "normalized": "Array a b c-\u003eMVec a c-\u003eIO()",
          "package": "repa",
          "signature": "Array r sh e-\u003eMVec r e-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:loadP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a range of an array in parallel.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "loadRangeP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e MVec r2 e -\u003e sh -\u003e sh -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Load.html#loadRangeP",
          "type": "method"
        },
        "index": {
          "description": "Fill range of an array in parallel",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "loadRangeP",
          "normalized": "Array a b c-\u003eMVec a c-\u003eb-\u003eb-\u003eIO()",
          "package": "repa",
          "partial": "Range",
          "signature": "Array r sh e-\u003eMVec r e-\u003esh-\u003esh-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:loadRangeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a range of an array sequentially.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "loadRangeS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e MVec r2 e -\u003e sh -\u003e sh -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Load.html#loadRangeS",
          "type": "method"
        },
        "index": {
          "description": "Fill range of an array sequentially",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "loadRangeS",
          "normalized": "Array a b c-\u003eMVec a c-\u003eb-\u003eb-\u003eIO()",
          "package": "repa",
          "partial": "Range",
          "signature": "Array r sh e-\u003eMVec r e-\u003esh-\u003esh-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:loadRangeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill an entire array sequentially.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "loadS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e MVec r2 e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Load.html#loadS",
          "type": "method"
        },
        "index": {
          "description": "Fill an entire array sequentially",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "loadS",
          "normalized": "Array a b c-\u003eMVec a c-\u003eIO()",
          "package": "repa",
          "signature": "Array r sh e-\u003eMVec r e-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:loadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new mutable array of the given size.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "newMVec",
          "package": "repa",
          "signature": "Int -\u003e IO (MVec r e)",
          "source": "src/Data-Array-Repa-Eval-Target.html#newMVec",
          "type": "method"
        },
        "index": {
          "description": "Allocate new mutable array of the given size",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "newMVec",
          "normalized": "Int-\u003eIO(MVec a b)",
          "package": "repa",
          "partial": "MVec",
          "signature": "Int-\u003eIO(MVec r e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:newMVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003edeepSeqArray\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eForces an suspended array computation to be completed at this point\n   in a monadic computation.\n\u003c/p\u003e\u003cpre\u003e do  let arr2 = suspendedComputeP arr1\n     ...\n     arr3 \u003c- now $ arr2\n     ...\n\u003c/pre\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "now",
          "package": "repa",
          "signature": "Array r sh e -\u003e m (Array r sh e)",
          "source": "src/Data-Array-Repa-Eval.html#now",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of deepSeqArray Forces an suspended array computation to be completed at this point in monadic computation do let arr2 suspendedComputeP arr1 arr3 now arr2",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "now",
          "normalized": "Array a b c-\u003ed(Array a b c)",
          "package": "repa",
          "signature": "Array r sh e-\u003em(Array r sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric one value, helpful for debugging.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "one",
          "package": "repa",
          "signature": "a",
          "source": "src/Data-Array-Repa-Eval-Elt.html#one",
          "type": "method"
        },
        "index": {
          "description": "Generic one value helpful for debugging",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "one",
          "package": "repa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect indices matching a predicate, in parallel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This primitive can be useful for writing filtering functions.\n\u003c/li\u003e\u003cli\u003e The array is split into linear chunks, with one chunk being given to\n     each thread.\n\u003c/li\u003e\u003cli\u003e The number of elements in the result array depends on how many threads\n     you're running the program with.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "selectChunkedP",
          "package": "repa",
          "signature": "(Int -\u003e Bool)-\u003e (Int -\u003e a)-\u003e Int-\u003e IO [IOVector a]",
          "type": "function"
        },
        "index": {
          "description": "Select indices matching predicate in parallel This primitive can be useful for writing filtering functions The array is split into linear chunks with one chunk being given to each thread The number of elements in the result array depends on how many threads you re running the program with",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "selectChunkedP",
          "normalized": "(Int-\u003eBool)-\u003e(Int-\u003ea)-\u003eInt-\u003eIO[IOVector a]",
          "package": "repa",
          "partial": "Chunked",
          "signature": "(Int-\u003eBool)-\u003e(Int-\u003ea)-\u003eInt-\u003eIO[IOVector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:selectChunkedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect indices matching a predicate.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This primitive can be useful for writing filtering functions.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "selectChunkedS",
          "package": "repa",
          "signature": "(sh -\u003e a -\u003e IO ())-\u003e (sh -\u003e Bool)-\u003e (sh -\u003e a)-\u003e sh-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Select indices matching predicate This primitive can be useful for writing filtering functions",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "selectChunkedS",
          "normalized": "(a-\u003eb-\u003eIO())-\u003e(a-\u003eBool)-\u003e(a-\u003eb)-\u003ea-\u003eIO Int",
          "package": "repa",
          "partial": "Chunked",
          "signature": "(sh-\u003ea-\u003eIO())-\u003e(sh-\u003eBool)-\u003e(sh-\u003ea)-\u003esh-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:selectChunkedS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuspended parallel computation of array elements.\n\u003c/p\u003e\u003cp\u003eThis version creates a thunk that will evaluate the array on demand.\n   If you force it when another parallel computation is already running\n   then you  will get a runtime warning and evaluation will be sequential. \n   Use \u003ccode\u003e\u003ca\u003edeepSeqArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enow\u003c/a\u003e\u003c/code\u003e to ensure that each array is evaluated\n   before proceeding to the next one. \n\u003c/p\u003e\u003cp\u003eIf unsure then just use the monadic version \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e. This one ensures\n   that each array is fully evaluated before continuing.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "suspendedComputeP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array r2 sh e",
          "source": "src/Data-Array-Repa-Eval.html#suspendedComputeP",
          "type": "function"
        },
        "index": {
          "description": "Suspended parallel computation of array elements This version creates thunk that will evaluate the array on demand If you force it when another parallel computation is already running then you will get runtime warning and evaluation will be sequential Use deepSeqArray and now to ensure that each array is evaluated before proceeding to the next one If unsure then just use the monadic version computeP This one ensures that each array is fully evaluated before continuing",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "suspendedComputeP",
          "normalized": "Array a b c-\u003eArray a b c",
          "package": "repa",
          "partial": "Compute",
          "signature": "Array r sh e-\u003eArray r sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:suspendedComputeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuspended parallel copy of array elements.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "suspendedCopyP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array r2 sh e",
          "source": "src/Data-Array-Repa-Eval.html#suspendedCopyP",
          "type": "function"
        },
        "index": {
          "description": "Suspended parallel copy of array elements",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "suspendedCopyP",
          "normalized": "Array a b c-\u003eArray a b c",
          "package": "repa",
          "partial": "Copy",
          "signature": "Array r sh e-\u003eArray r sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:suspendedCopyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a demand on a value at a particular point in an IO computation.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "touch",
          "package": "repa",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Elt.html#touch",
          "type": "method"
        },
        "index": {
          "description": "Place demand on value at particular point in an IO computation",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "touch",
          "normalized": "a-\u003eIO()",
          "package": "repa",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure the array is still live at this point.\n   Needed when the mutable array is a ForeignPtr with a finalizer.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "touchMVec",
          "package": "repa",
          "signature": "MVec r e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Target.html#touchMVec",
          "type": "method"
        },
        "index": {
          "description": "Ensure the array is still live at this point Needed when the mutable array is ForeignPtr with finalizer",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "touchMVec",
          "normalized": "MVec a b-\u003eIO()",
          "package": "repa",
          "partial": "MVec",
          "signature": "MVec r e-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:touchMVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze the mutable array into an immutable Repa array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "unsafeFreezeMVec",
          "package": "repa",
          "signature": "sh -\u003e MVec r e -\u003e IO (Array r sh e)",
          "source": "src/Data-Array-Repa-Eval-Target.html#unsafeFreezeMVec",
          "type": "method"
        },
        "index": {
          "description": "Freeze the mutable array into an immutable Repa array",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "unsafeFreezeMVec",
          "normalized": "a-\u003eMVec b c-\u003eIO(Array b a c)",
          "package": "repa",
          "partial": "Freeze MVec",
          "signature": "sh-\u003eMVec r e-\u003eIO(Array r sh e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:unsafeFreezeMVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element into the mutable array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "unsafeWriteMVec",
          "package": "repa",
          "signature": "MVec r e -\u003e Int -\u003e e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Eval-Target.html#unsafeWriteMVec",
          "type": "method"
        },
        "index": {
          "description": "Write an element into the mutable array",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "unsafeWriteMVec",
          "normalized": "MVec a b-\u003eInt-\u003eb-\u003eIO()",
          "package": "repa",
          "partial": "Write MVec",
          "signature": "MVec r e-\u003eInt-\u003ee-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:unsafeWriteMVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric zero value, helpful for debugging.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Eval",
          "name": "zero",
          "package": "repa",
          "signature": "a",
          "source": "src/Data-Array-Repa-Eval-Elt.html#zero",
          "type": "method"
        },
        "index": {
          "description": "Generic zero value helpful for debugging",
          "hierarchy": "Data Array Repa Eval",
          "module": "Data.Array.Repa.Eval",
          "name": "zero",
          "package": "repa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Eval.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIndex types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Index",
          "name": "Index",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html",
          "type": "module"
        },
        "index": {
          "description": "Index types",
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "Index",
          "package": "repa",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur index type, used for both shapes and indices.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index",
          "name": ":.",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "Our index type used for both shapes and indices",
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": ":.",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM0",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM0",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM1",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM1",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM2",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM2",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM3",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM3",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM4",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM4",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "DIM5",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#DIM5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "DIM5",
          "package": "repa",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:DIM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index of dimension zero\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index",
          "name": "Z",
          "package": "repa",
          "source": "src/Data-Array-Repa-Index.html#Z",
          "type": "data"
        },
        "index": {
          "description": "An index of dimension zero",
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "Z",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": ":.",
          "package": "repa",
          "signature": "tail :. !head",
          "source": "src/Data-Array-Repa-Index.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": ":.",
          "package": "repa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "Z",
          "package": "repa",
          "signature": "Z",
          "source": "src/Data-Array-Repa-Index.html#Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "Z",
          "package": "repa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for index construction.\n\u003c/p\u003e\u003cp\u003eUse this instead of explicit constructors like \u003ccode\u003e(Z :. (x :: Int))\u003c/code\u003e.\n   The this is sometimes needed to ensure that \u003ccode\u003ex\u003c/code\u003e is constrained to \n   be in \u003ccode\u003eInt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index",
          "name": "ix1",
          "package": "repa",
          "signature": "Int -\u003e DIM1",
          "source": "src/Data-Array-Repa-Index.html#ix1",
          "type": "function"
        },
        "index": {
          "description": "Helper for index construction Use this instead of explicit constructors like Int The this is sometimes needed to ensure that is constrained to be in Int",
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "ix1",
          "normalized": "Int-\u003eDIM",
          "package": "repa",
          "signature": "Int-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:ix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "ix2",
          "package": "repa",
          "signature": "Int -\u003e Int -\u003e DIM2",
          "source": "src/Data-Array-Repa-Index.html#ix2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "ix2",
          "normalized": "Int-\u003eInt-\u003eDIM",
          "package": "repa",
          "signature": "Int-\u003eInt-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:ix2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "ix3",
          "package": "repa",
          "signature": "Int -\u003e Int -\u003e Int -\u003e DIM3",
          "source": "src/Data-Array-Repa-Index.html#ix3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "ix3",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eDIM",
          "package": "repa",
          "signature": "Int-\u003eInt-\u003eInt-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:ix3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "ix4",
          "package": "repa",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e DIM4",
          "source": "src/Data-Array-Repa-Index.html#ix4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "ix4",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eDIM",
          "package": "repa",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:ix4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index",
          "name": "ix5",
          "package": "repa",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e DIM5",
          "source": "src/Data-Array-Repa-Index.html#ix5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index",
          "module": "Data.Array.Repa.Index",
          "name": "ix5",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eDIM",
          "package": "repa",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Index.html#v:ix5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "IndexSpace",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "IndexSpace",
          "package": "repa",
          "partial": "Index Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "(++)",
          "package": "repa",
          "signature": "Array r1 (sh :. Int) e -\u003e Array r2 (sh :. Int) e -\u003e Array D (sh :. Int) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#%2B%2B",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:-43--43-\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-43--43-\"]"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "(++) ++",
          "normalized": "Array a(b Int)c-\u003eArray a(b Int)c-\u003eArray D(b Int)c",
          "package": "repa",
          "signature": "Array r(sh Int)e-\u003eArray r(sh Int)e-\u003eArray D(sh Int)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "append",
          "package": "repa",
          "signature": "Array r1 (sh :. Int) e -\u003e Array r2 (sh :. Int) e -\u003e Array D (sh :. Int) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:append\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:append\"]"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "append",
          "normalized": "Array a(b Int)c-\u003eArray a(b Int)c-\u003eArray D(b Int)c",
          "package": "repa",
          "signature": "Array r(sh Int)e-\u003eArray r(sh Int)e-\u003eArray D(sh Int)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackwards permutation of an array's elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "backpermute",
          "package": "repa",
          "signature": "sh2-\u003e (sh2 -\u003e sh1)-\u003e Array r sh1 e-\u003e Array D sh2 e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:backpermute\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:backpermute\"]"
        },
        "index": {
          "description": "Backwards permutation of an array elements",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "backpermute",
          "normalized": "a-\u003e(a-\u003ea)-\u003eArray b a c-\u003eArray D a c",
          "package": "repa",
          "signature": "sh-\u003e(sh-\u003esh)-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault backwards permutation of an array's elements.\n\tIf the function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value at that index is taken\n\tfrom the default array (\u003ccode\u003earrDft\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "backpermuteDft",
          "package": "repa",
          "signature": "Array r2 sh2 e-\u003e (sh2 -\u003e Maybe sh1)-\u003e Array r1 sh1 e-\u003e Array D sh2 e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:backpermuteDft\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:backpermuteDft\"]"
        },
        "index": {
          "description": "Default backwards permutation of an array elements If the function returns Nothing then the value at that index is taken from the default array arrDft",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "backpermuteDft",
          "normalized": "Array a b c-\u003e(b-\u003eMaybe b)-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "partial": "Dft",
          "signature": "Array r sh e-\u003e(sh-\u003eMaybe sh)-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:backpermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an array, according to a given slice specification.\n\u003c/p\u003e\u003cp\u003eFor example, to replicate the rows of an array use the following:\n\u003c/p\u003e\u003cpre\u003eextend arr (Any :. (5::Int) :. All)\u003c/pre\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "extend",
          "package": "repa",
          "signature": "sl -\u003e Array r (SliceShape sl) e -\u003e Array D (FullShape sl) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#extend",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:extend\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:extend\"]"
        },
        "index": {
          "description": "Extend an array according to given slice specification For example to replicate the rows of an array use the following extend arr Any Int All",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "extend",
          "normalized": "a-\u003eArray b(SliceShape a)c-\u003eArray D(FullShape a)c",
          "package": "repa",
          "signature": "sl-\u003eArray r(SliceShape sl)e-\u003eArray D(FullShape sl)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a sub-range of elements from an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "extract",
          "package": "repa",
          "signature": "sh-\u003e sh-\u003e Array r sh e-\u003e Array D sh e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:extract\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:extract\"]"
        },
        "index": {
          "description": "Extract sub-range of elements from an array",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "extract",
          "normalized": "a-\u003ea-\u003eArray b a c-\u003eArray D a c",
          "package": "repa",
          "signature": "sh-\u003esh-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImpose a new shape on the elements of an array.\n   The new extent must be the same size as the original, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "reshape",
          "package": "repa",
          "signature": "sh2 -\u003e Array r1 sh1 e -\u003e Array D sh2 e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#reshape",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:reshape\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:reshape\"]"
        },
        "index": {
          "description": "Impose new shape on the elements of an array The new extent must be the same size as the original else error",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "reshape",
          "normalized": "a-\u003eArray b a c-\u003eArray D a c",
          "package": "repa",
          "signature": "sh-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:reshape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a slice from an array, according to a given specification.\n\u003c/p\u003e\u003cp\u003eFor example, to take a row from a matrix use the following:\n\u003c/p\u003e\u003cpre\u003eslice arr (Any :. (5::Int) :. All)\u003c/pre\u003e\u003cp\u003eTo take a column use:\n\u003c/p\u003e\u003cpre\u003eslice arr (Any :. (5::Int))\u003c/pre\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "slice",
          "package": "repa",
          "signature": "Array r (FullShape sl) e -\u003e sl -\u003e Array D (SliceShape sl) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#slice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:slice\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:slice\"]"
        },
        "index": {
          "description": "Take slice from an array according to given specification For example to take row from matrix use the following slice arr Any Int All To take column use slice arr Any Int",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "slice",
          "normalized": "Array a(FullShape b)c-\u003eb-\u003eArray D(SliceShape b)c",
          "package": "repa",
          "signature": "Array r(FullShape sl)e-\u003esl-\u003eArray D(SliceShape sl)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose the lowest two dimensions of an array.\n\tTransposing an array twice yields the original.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa\"]",
          "name": "transpose",
          "package": "repa",
          "signature": "Array r ((sh :. Int) :. Int) e -\u003e Array D ((sh :. Int) :. Int) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:transpose\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:transpose\"]"
        },
        "index": {
          "description": "Transpose the lowest two dimensions of an array Transposing an array twice yields the original",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "transpose",
          "normalized": "Array a((b Int)Int)c-\u003eArray D((b Int)Int)c",
          "package": "repa",
          "signature": "Array r((sh Int)Int)e-\u003eArray D((sh Int)Int)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackwards permutation of an array's elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeBackpermute",
          "package": "repa",
          "signature": "sh2-\u003e (sh2 -\u003e sh1)-\u003e Array r sh1 e-\u003e Array D sh2 e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeBackpermute\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeBackpermute\"]"
        },
        "index": {
          "description": "Backwards permutation of an array elements",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "unsafeBackpermute",
          "normalized": "a-\u003e(a-\u003ea)-\u003eArray b a c-\u003eArray D a c",
          "package": "repa",
          "partial": "Backpermute",
          "signature": "sh-\u003e(sh-\u003esh)-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeBackpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault backwards permutation of an array's elements.\n\tIf the function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value at that index is taken\n\tfrom the default array (\u003ccode\u003earrDft\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeBackpermuteDft",
          "package": "repa",
          "signature": "Array r2 sh2 e-\u003e (sh2 -\u003e Maybe sh1)-\u003e Array r1 sh1 e-\u003e Array D sh2 e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeBackpermuteDft\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeBackpermuteDft\"]"
        },
        "index": {
          "description": "Default backwards permutation of an array elements If the function returns Nothing then the value at that index is taken from the default array arrDft",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "unsafeBackpermuteDft",
          "normalized": "Array a b c-\u003e(b-\u003eMaybe b)-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "partial": "Backpermute Dft",
          "signature": "Array r sh e-\u003e(sh-\u003eMaybe sh)-\u003eArray r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeBackpermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an array, according to a given slice specification.\n\u003c/p\u003e\u003cp\u003eFor example, to replicate the rows of an array use the following:\n\u003c/p\u003e\u003cpre\u003eextend arr (Any :. (5::Int) :. All)\u003c/pre\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeExtend",
          "package": "repa",
          "signature": "sl -\u003e Array r (SliceShape sl) e -\u003e Array D (FullShape sl) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#unsafeExtend",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeExtend\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeExtend\"]"
        },
        "index": {
          "description": "Extend an array according to given slice specification For example to replicate the rows of an array use the following extend arr Any Int All",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "unsafeExtend",
          "normalized": "a-\u003eArray b(SliceShape a)c-\u003eArray D(FullShape a)c",
          "package": "repa",
          "partial": "Extend",
          "signature": "sl-\u003eArray r(SliceShape sl)e-\u003eArray D(FullShape sl)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a slice from an array, according to a given specification.\n\u003c/p\u003e\u003cp\u003eFor example, to take a row from a matrix use the following:\n\u003c/p\u003e\u003cpre\u003eslice arr (Any :. (5::Int) :. All)\u003c/pre\u003e\u003cp\u003eTo take a column use:\n\u003c/p\u003e\u003cpre\u003eslice arr (Any :. (5::Int))\u003c/pre\u003e",
          "module": "[\"Data.Array.Repa.Operators.IndexSpace\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeSlice",
          "package": "repa",
          "signature": "Array r (FullShape sl) e -\u003e sl -\u003e Array D (SliceShape sl) e",
          "source": "src/Data-Array-Repa-Operators-IndexSpace.html#unsafeSlice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeSlice\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeSlice\"]"
        },
        "index": {
          "description": "Take slice from an array according to given specification For example to take row from matrix use the following slice arr Any Int All To take column use slice arr Any Int",
          "hierarchy": "Data Array Repa Operators IndexSpace",
          "module": "Data.Array.Repa.Operators.IndexSpace",
          "name": "unsafeSlice",
          "normalized": "Array a(FullShape b)c-\u003eb-\u003eArray D(SliceShape b)c",
          "package": "repa",
          "partial": "Slice",
          "signature": "Array r(FullShape sl)e-\u003esl-\u003eArray D(SliceShape sl)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-IndexSpace.html#v:unsafeSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.Interleave",
          "name": "Interleave",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Interleave.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Interleave",
          "module": "Data.Array.Repa.Operators.Interleave",
          "name": "Interleave",
          "package": "repa",
          "partial": "Interleave",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of two arrays.\n   All the input arrays must have the same extent, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n   The lowest dimension of the result array is twice the size of the inputs.\n\u003c/p\u003e\u003cpre\u003e\n  interleave2 a1 a2   b1 b2  =\u003e  a1 b1 a2 b2\n              a3 a4   b3 b4      a3 b3 a4 b4\n\u003c/pre\u003e",
          "module": "[\"Data.Array.Repa.Operators.Interleave\",\"Data.Array.Repa\"]",
          "name": "interleave2",
          "package": "repa",
          "signature": "Array r1 (sh :. Int) a -\u003e Array r2 (sh :. Int) a -\u003e Array D (sh :. Int) a",
          "source": "src/Data-Array-Repa-Operators-Interleave.html#interleave2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave2\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:interleave2\"]"
        },
        "index": {
          "description": "Interleave the elements of two arrays All the input arrays must have the same extent else error The lowest dimension of the result array is twice the size of the inputs interleave2 a1 a2 b1 b2 a1 b1 a2 b2 a3 a4 b3 b4 a3 b3 a4 b4",
          "hierarchy": "Data Array Repa Operators Interleave",
          "module": "Data.Array.Repa.Operators.Interleave",
          "name": "interleave2",
          "normalized": "Array a(b Int)c-\u003eArray a(b Int)c-\u003eArray D(b Int)c",
          "package": "repa",
          "signature": "Array r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray D(sh Int)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of three arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Interleave\",\"Data.Array.Repa\"]",
          "name": "interleave3",
          "package": "repa",
          "signature": "Array r1 (sh :. Int) a -\u003e Array r2 (sh :. Int) a -\u003e Array r3 (sh :. Int) a -\u003e Array D (sh :. Int) a",
          "source": "src/Data-Array-Repa-Operators-Interleave.html#interleave3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave3\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:interleave3\"]"
        },
        "index": {
          "description": "Interleave the elements of three arrays",
          "hierarchy": "Data Array Repa Operators Interleave",
          "module": "Data.Array.Repa.Operators.Interleave",
          "name": "interleave3",
          "normalized": "Array a(b Int)c-\u003eArray a(b Int)c-\u003eArray a(b Int)c-\u003eArray D(b Int)c",
          "package": "repa",
          "signature": "Array r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray D(sh Int)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of four arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Interleave\",\"Data.Array.Repa\"]",
          "name": "interleave4",
          "package": "repa",
          "signature": "Array r1 (sh :. Int) a -\u003e Array r2 (sh :. Int) a -\u003e Array r3 (sh :. Int) a -\u003e Array r4 (sh :. Int) a -\u003e Array D (sh :. Int) a",
          "source": "src/Data-Array-Repa-Operators-Interleave.html#interleave4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave4\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:interleave4\"]"
        },
        "index": {
          "description": "Interleave the elements of four arrays",
          "hierarchy": "Data Array Repa Operators Interleave",
          "module": "Data.Array.Repa.Operators.Interleave",
          "name": "interleave4",
          "normalized": "Array a(b Int)c-\u003eArray a(b Int)c-\u003eArray a(b Int)c-\u003eArray a(b Int)c-\u003eArray D(b Int)c",
          "package": "repa",
          "signature": "Array r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray r(sh Int)a-\u003eArray D(sh Int)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Interleave.html#v:interleave4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "Mapping",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Mapping.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "Mapping",
          "package": "repa",
          "partial": "Mapping",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured versions of \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003ezipWith\u003c/code\u003e that preserve the representation\n   of cursored and partitioned arrays. \n\u003c/p\u003e\u003cp\u003eFor cursored (\u003ccode\u003eC\u003c/code\u003e) arrays, the cursoring of the source array is preserved.\n\u003c/p\u003e\u003cp\u003eFor partitioned (\u003ccode\u003eP\u003c/code\u003e) arrays, the worker function is fused with each array\n   partition separately, instead of treating the whole array as a single\n   bulk object. \n\u003c/p\u003e\u003cp\u003ePreserving the cursored and/or paritioned representation of an array \n   is will make follow-on computation more efficient than if the array was\n   converted to a vanilla Delayed (\u003ccode\u003eD\u003c/code\u003e) array as with plain \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the source array is not cursored or partitioned then \u003ccode\u003e\u003ca\u003esmap\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eszipWith\u003c/a\u003e\u003c/code\u003e are identical to the plain functions.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "Structured",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#Structured",
          "type": "class"
        },
        "index": {
          "description": "Structured versions of map and zipWith that preserve the representation of cursored and partitioned arrays For cursored arrays the cursoring of the source array is preserved For partitioned arrays the worker function is fused with each array partition separately instead of treating the whole array as single bulk object Preserving the cursored and or paritioned representation of an array is will make follow-on computation more efficient than if the array was converted to vanilla Delayed array as with plain map and zipWith If the source array is not cursored or partitioned then smap and szipWith are identical to the plain functions",
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "Structured",
          "package": "repa",
          "partial": "Structured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#t:Structured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "(*^)",
          "package": "repa",
          "signature": "Array r1 sh c -\u003e Array r2 sh c -\u003e Array D sh c",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#%2A%5E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-42--94-\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-42--94-\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "(*^) *^",
          "normalized": "Array a b c-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "signature": "Array r sh c-\u003eArray r sh c-\u003eArray D sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "(+^)",
          "package": "repa",
          "signature": "Array r1 sh c -\u003e Array r2 sh c -\u003e Array D sh c",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#%2B%5E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-43--94-\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-43--94-\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "(+^) +^",
          "normalized": "Array a b c-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "signature": "Array r sh c-\u003eArray r sh c-\u003eArray D sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "(-^)",
          "package": "repa",
          "signature": "Array r1 sh c -\u003e Array r2 sh c -\u003e Array D sh c",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#-%5E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-45--94-\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-45--94-\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "(-^) -^",
          "normalized": "Array a b c-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "signature": "Array r sh c-\u003eArray r sh c-\u003eArray D sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "(/^)",
          "package": "repa",
          "signature": "Array r1 sh c -\u003e Array r2 sh c -\u003e Array D sh c",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#%2F%5E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-47--94-\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-47--94-\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "(/^) /^",
          "normalized": "Array a b c-\u003eArray a b c-\u003eArray D b c",
          "package": "repa",
          "signature": "Array r sh c-\u003eArray r sh c-\u003eArray D sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:-47--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to each element of an array, \n   yielding a new array with the same extent.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "map",
          "package": "repa",
          "signature": "(a -\u003e b) -\u003e Array r sh a -\u003e Array D sh b",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:map\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:map\"]"
        },
        "index": {
          "description": "Apply worker function to each element of an array yielding new array with the same extent",
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eArray c d a-\u003eArray D d b",
          "package": "repa",
          "signature": "(a-\u003eb)-\u003eArray r sh a-\u003eArray D sh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured \u003ccode\u003emap\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "smap",
          "package": "repa",
          "signature": "(a -\u003e b) -\u003e Array r1 sh a -\u003e Array (TR r1) sh b",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#smap",
          "type": "method"
        },
        "index": {
          "description": "Structured map",
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "smap",
          "normalized": "(a-\u003eb)-\u003eArray c d a-\u003eArray(TR c)d b",
          "package": "repa",
          "signature": "(a-\u003eb)-\u003eArray r sh a-\u003eArray(TR r)sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:smap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured \u003ccode\u003ezipWith\u003c/code\u003e.\n   If you have a cursored or partitioned source array then use that as\n   the third argument (corresponding to \u003ccode\u003er1\u003c/code\u003e here)\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "szipWith",
          "package": "repa",
          "signature": "(c -\u003e a -\u003e b) -\u003e Array r sh c -\u003e Array r1 sh a -\u003e Array (TR r1) sh b",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#szipWith",
          "type": "method"
        },
        "index": {
          "description": "Structured zipWith If you have cursored or partitioned source array then use that as the third argument corresponding to r1 here",
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "szipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eArray d e a-\u003eArray d e b-\u003eArray(TR d)e c",
          "package": "repa",
          "partial": "With",
          "signature": "(c-\u003ea-\u003eb)-\u003eArray r sh c-\u003eArray r sh a-\u003eArray(TR r)sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:szipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays, element-wise, with a binary operator.\n\tIf the extent of the two array arguments differ,\n\tthen the resulting array's extent is their intersection.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Mapping\",\"Data.Array.Repa\"]",
          "name": "zipWith",
          "package": "repa",
          "signature": "(a -\u003e b -\u003e c) -\u003e Array r1 sh a -\u003e Array r2 sh b -\u003e Array D sh c",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#zipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:zipWith\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:zipWith\"]"
        },
        "index": {
          "description": "Combine two arrays element-wise with binary operator If the extent of the two array arguments differ then the resulting array extent is their intersection",
          "hierarchy": "Data Array Repa Operators Mapping",
          "module": "Data.Array.Repa.Operators.Mapping",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eArray d e a-\u003eArray d e b-\u003eArray D e c",
          "package": "repa",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eArray r sh a-\u003eArray r sh b-\u003eArray D sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Mapping.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "Reduction",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Reduction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "Reduction",
          "package": "repa",
          "partial": "Reduction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether two arrays have the same shape and contain equal elements,\n   in parallel.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "equalsP",
          "package": "repa",
          "signature": "Array r1 sh a -\u003e Array r2 sh a -\u003e m Bool",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#equalsP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:equalsP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:equalsP\"]"
        },
        "index": {
          "description": "Check whether two arrays have the same shape and contain equal elements in parallel",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "equalsP",
          "normalized": "Array a b c-\u003eArray a b c-\u003ed Bool",
          "package": "repa",
          "signature": "Array r sh a-\u003eArray r sh a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:equalsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether two arrays have the same shape and contain equal elements,\n   sequentially.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "equalsS",
          "package": "repa",
          "signature": "Array r1 sh a -\u003e Array r2 sh a -\u003e Bool",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#equalsS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:equalsS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:equalsS\"]"
        },
        "index": {
          "description": "Check whether two arrays have the same shape and contain equal elements sequentially",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "equalsS",
          "normalized": "Array a b c-\u003eArray a b c-\u003eBool",
          "package": "repa",
          "signature": "Array r sh a-\u003eArray r sh a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:equalsS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel reduction of an array of arbitrary rank to a single scalar value.\n\u003c/p\u003e\u003cp\u003eThe first argument needs to be an associative sequential operator.\n   The starting element must be neutral with respect to the operator,\n   for example \u003ccode\u003e0\u003c/code\u003e is neutral with respect to \u003ccode\u003e(+)\u003c/code\u003e as \u003ccode\u003e0 + a = a\u003c/code\u003e.\n   These restrictions are required to support parallel evaluation, as the\n   starting element may be used multiple times depending on the number of threads.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "foldAllP",
          "package": "repa",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array r sh a -\u003e m a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#foldAllP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldAllP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:foldAllP\"]"
        },
        "index": {
          "description": "Parallel reduction of an array of arbitrary rank to single scalar value The first argument needs to be an associative sequential operator The starting element must be neutral with respect to the operator for example is neutral with respect to as These restrictions are required to support parallel evaluation as the starting element may be used multiple times depending on the number of threads",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "foldAllP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray b c a-\u003ed a",
          "package": "repa",
          "partial": "All",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray r sh a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldAllP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential reduction of an array of arbitrary rank to a single scalar value.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "foldAllS",
          "package": "repa",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array r sh a -\u003e a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#foldAllS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldAllS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:foldAllS\"]"
        },
        "index": {
          "description": "Sequential reduction of an array of arbitrary rank to single scalar value",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "foldAllS",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray b c a-\u003ea",
          "package": "repa",
          "partial": "All",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray r sh a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldAllS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel reduction of the innermost dimension of an arbitray rank array.\n\u003c/p\u003e\u003cp\u003eThe first argument needs to be an associative sequential operator.\n   The starting element must be neutral with respect to the operator, for\n   example \u003ccode\u003e0\u003c/code\u003e is neutral with respect to \u003ccode\u003e(+)\u003c/code\u003e as \u003ccode\u003e0 + a = a\u003c/code\u003e.\n   These restrictions are required to support parallel evaluation, as the\n   starting element may be used multiple times depending on the number of threads.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "foldP",
          "package": "repa",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array r (sh :. Int) a -\u003e m (Array U sh a)",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#foldP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:foldP\"]"
        },
        "index": {
          "description": "Parallel reduction of the innermost dimension of an arbitray rank array The first argument needs to be an associative sequential operator The starting element must be neutral with respect to the operator for example is neutral with respect to as These restrictions are required to support parallel evaluation as the starting element may be used multiple times depending on the number of threads",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "foldP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray b(c Int)a-\u003ed(Array U c a)",
          "package": "repa",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray r(sh Int)a-\u003em(Array U sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential reduction of the innermost dimension of an arbitrary rank array.\n\u003c/p\u003e\u003cp\u003eCombine this with \u003ccode\u003etranspose\u003c/code\u003e to fold any other dimension.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "foldS",
          "package": "repa",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array r (sh :. Int) a -\u003e Array U sh a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#foldS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:foldS\"]"
        },
        "index": {
          "description": "Sequential reduction of the innermost dimension of an arbitrary rank array Combine this with transpose to fold any other dimension",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "foldS",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray b(c Int)a-\u003eArray U c a",
          "package": "repa",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray r(sh Int)a-\u003eArray U sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:foldS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel sum all the elements of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "sumAllP",
          "package": "repa",
          "signature": "Array r sh a -\u003e m a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#sumAllP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumAllP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:sumAllP\"]"
        },
        "index": {
          "description": "Parallel sum all the elements of an array",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "sumAllP",
          "normalized": "Array a b c-\u003ed c",
          "package": "repa",
          "partial": "All",
          "signature": "Array r sh a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumAllP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential sum of all the elements of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "sumAllS",
          "package": "repa",
          "signature": "Array r sh a -\u003e a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#sumAllS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumAllS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:sumAllS\"]"
        },
        "index": {
          "description": "Sequential sum of all the elements of an array",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "sumAllS",
          "normalized": "Array a b c-\u003ec",
          "package": "repa",
          "partial": "All",
          "signature": "Array r sh a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumAllS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel sum the innermost dimension of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "sumP",
          "package": "repa",
          "signature": "Array r (sh :. Int) a -\u003e m (Array U sh a)",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#sumP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:sumP\"]"
        },
        "index": {
          "description": "Parallel sum the innermost dimension of an array",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "sumP",
          "normalized": "Array a(b Int)c-\u003ed(Array U b c)",
          "package": "repa",
          "signature": "Array r(sh Int)a-\u003em(Array U sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential sum the innermost dimension of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Reduction\",\"Data.Array.Repa\"]",
          "name": "sumS",
          "package": "repa",
          "signature": "Array r (sh :. Int) a -\u003e Array U sh a",
          "source": "src/Data-Array-Repa-Operators-Reduction.html#sumS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:sumS\"]"
        },
        "index": {
          "description": "Sequential sum the innermost dimension of an array",
          "hierarchy": "Data Array Repa Operators Reduction",
          "module": "Data.Array.Repa.Operators.Reduction",
          "name": "sumS",
          "normalized": "Array a(b Int)c-\u003eArray U b c",
          "package": "repa",
          "signature": "Array r(sh Int)a-\u003eArray U sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Reduction.html#v:sumS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.Selection",
          "name": "Selection",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Selection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Selection",
          "module": "Data.Array.Repa.Operators.Selection",
          "name": "Selection",
          "package": "repa",
          "partial": "Selection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Selection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an array by applying a predicate to a range of integers.\n   If the predicate matches, then use the second function to generate\n   the element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is a low-level function helpful for writing filtering\n     operations on arrays.\n\u003c/li\u003e\u003cli\u003e Use the integer as the index into the array you're filtering.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Operators.Selection\",\"Data.Array.Repa\"]",
          "name": "selectP",
          "package": "repa",
          "signature": "(Int -\u003e Bool)-\u003e (Int -\u003e a)-\u003e Int-\u003e m (Array U DIM1 a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Selection.html#v:selectP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:selectP\"]"
        },
        "index": {
          "description": "Produce an array by applying predicate to range of integers If the predicate matches then use the second function to generate the element This is low-level function helpful for writing filtering operations on arrays Use the integer as the index into the array you re filtering",
          "hierarchy": "Data Array Repa Operators Selection",
          "module": "Data.Array.Repa.Operators.Selection",
          "name": "selectP",
          "normalized": "(Int-\u003eBool)-\u003e(Int-\u003ea)-\u003eInt-\u003eb(Array U DIM a)",
          "package": "repa",
          "signature": "(Int-\u003eBool)-\u003e(Int-\u003ea)-\u003eInt-\u003em(Array U DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Selection.html#v:selectP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "Traversal",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Traversal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "Traversal",
          "package": "repa",
          "partial": "Traversal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa\"]",
          "name": "traverse",
          "package": "repa",
          "signature": "Array r sh a-\u003e (sh -\u003e sh')-\u003e ((sh -\u003e a) -\u003e sh' -\u003e b)-\u003e Array D sh' b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:traverse\"]"
        },
        "index": {
          "description": "Unstructured traversal",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "traverse",
          "normalized": "Array a b c-\u003e(b-\u003ed)-\u003e((b-\u003ec)-\u003ed-\u003ee)-\u003eArray D d e",
          "package": "repa",
          "signature": "Array r sh a-\u003e(sh-\u003esh')-\u003e((sh-\u003ea)-\u003esh'-\u003eb)-\u003eArray D sh' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over two arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa\"]",
          "name": "traverse2",
          "package": "repa",
          "signature": "Array r1 sh a-\u003e Array r2 sh' b-\u003e (sh -\u003e sh' -\u003e sh'')-\u003e ((sh -\u003e a) -\u003e (sh' -\u003e b) -\u003e sh'' -\u003e c)-\u003e Array D sh'' c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse2\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:traverse2\"]"
        },
        "index": {
          "description": "Unstructured traversal over two arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "traverse2",
          "normalized": "Array a b c-\u003eArray a d e-\u003e(b-\u003ed-\u003ef)-\u003e((b-\u003ec)-\u003e(d-\u003ee)-\u003ef-\u003eg)-\u003eArray D f g",
          "package": "repa",
          "signature": "Array r sh a-\u003eArray r sh' b-\u003e(sh-\u003esh'-\u003esh'')-\u003e((sh-\u003ea)-\u003e(sh'-\u003eb)-\u003esh''-\u003ec)-\u003eArray D sh'' c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over three arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa\"]",
          "name": "traverse3",
          "package": "repa",
          "signature": "Array r1 sh1 a -\u003e Array r2 sh2 b -\u003e Array r3 sh3 c -\u003e (sh1 -\u003e sh2 -\u003e sh3 -\u003e sh4) -\u003e ((sh1 -\u003e a) -\u003e (sh2 -\u003e b) -\u003e (sh3 -\u003e c) -\u003e sh4 -\u003e d) -\u003e Array D sh4 d",
          "source": "src/Data-Array-Repa-Operators-Traversal.html#traverse3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse3\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:traverse3\"]"
        },
        "index": {
          "description": "Unstructured traversal over three arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "traverse3",
          "normalized": "Array a b c-\u003eArray a b d-\u003eArray a b e-\u003e(b-\u003eb-\u003eb-\u003eb)-\u003e((b-\u003ec)-\u003e(b-\u003ed)-\u003e(b-\u003ee)-\u003eb-\u003ef)-\u003eArray D b f",
          "package": "repa",
          "signature": "Array r sh a-\u003eArray r sh b-\u003eArray r sh c-\u003e(sh-\u003esh-\u003esh-\u003esh)-\u003e((sh-\u003ea)-\u003e(sh-\u003eb)-\u003e(sh-\u003ec)-\u003esh-\u003ed)-\u003eArray D sh d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over four arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa\"]",
          "name": "traverse4",
          "package": "repa",
          "signature": "Array r1 sh1 a -\u003e Array r2 sh2 b -\u003e Array r3 sh3 c -\u003e Array r4 sh4 d -\u003e (sh1 -\u003e sh2 -\u003e sh3 -\u003e sh4 -\u003e sh5) -\u003e ((sh1 -\u003e a) -\u003e (sh2 -\u003e b) -\u003e (sh3 -\u003e c) -\u003e (sh4 -\u003e d) -\u003e sh5 -\u003e e) -\u003e Array D sh5 e",
          "source": "src/Data-Array-Repa-Operators-Traversal.html#traverse4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse4\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:traverse4\"]"
        },
        "index": {
          "description": "Unstructured traversal over four arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "traverse4",
          "normalized": "Array a b c-\u003eArray a b d-\u003eArray a b e-\u003eArray a b f-\u003e(b-\u003eb-\u003eb-\u003eb-\u003eb)-\u003e((b-\u003ec)-\u003e(b-\u003ed)-\u003e(b-\u003ee)-\u003e(b-\u003ef)-\u003eb-\u003eg)-\u003eArray D b g",
          "package": "repa",
          "signature": "Array r sh a-\u003eArray r sh b-\u003eArray r sh c-\u003eArray r sh d-\u003e(sh-\u003esh-\u003esh-\u003esh-\u003esh)-\u003e((sh-\u003ea)-\u003e(sh-\u003eb)-\u003e(sh-\u003ec)-\u003e(sh-\u003ed)-\u003esh-\u003ee)-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:traverse4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeTraverse",
          "package": "repa",
          "signature": "Array r sh a-\u003e (sh -\u003e sh')-\u003e ((sh -\u003e a) -\u003e sh' -\u003e b)-\u003e Array D sh' b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeTraverse\"]"
        },
        "index": {
          "description": "Unstructured traversal",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "unsafeTraverse",
          "normalized": "Array a b c-\u003e(b-\u003ed)-\u003e((b-\u003ec)-\u003ed-\u003ee)-\u003eArray D d e",
          "package": "repa",
          "partial": "Traverse",
          "signature": "Array r sh a-\u003e(sh-\u003esh')-\u003e((sh-\u003ea)-\u003esh'-\u003eb)-\u003eArray D sh' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over two arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeTraverse2",
          "package": "repa",
          "signature": "Array r1 sh a-\u003e Array r2 sh' b-\u003e (sh -\u003e sh' -\u003e sh'')-\u003e ((sh -\u003e a) -\u003e (sh' -\u003e b) -\u003e sh'' -\u003e c)-\u003e Array D sh'' c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse2\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeTraverse2\"]"
        },
        "index": {
          "description": "Unstructured traversal over two arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "unsafeTraverse2",
          "normalized": "Array a b c-\u003eArray a d e-\u003e(b-\u003ed-\u003ef)-\u003e((b-\u003ec)-\u003e(d-\u003ee)-\u003ef-\u003eg)-\u003eArray D f g",
          "package": "repa",
          "partial": "Traverse",
          "signature": "Array r sh a-\u003eArray r sh' b-\u003e(sh-\u003esh'-\u003esh'')-\u003e((sh-\u003ea)-\u003e(sh'-\u003eb)-\u003esh''-\u003ec)-\u003eArray D sh'' c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over three arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeTraverse3",
          "package": "repa",
          "signature": "Array r1 sh1 a -\u003e Array r2 sh2 b -\u003e Array r3 sh3 c -\u003e (sh1 -\u003e sh2 -\u003e sh3 -\u003e sh4) -\u003e ((sh1 -\u003e a) -\u003e (sh2 -\u003e b) -\u003e (sh3 -\u003e c) -\u003e sh4 -\u003e d) -\u003e Array D sh4 d",
          "source": "src/Data-Array-Repa-Operators-Traversal.html#unsafeTraverse3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse3\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeTraverse3\"]"
        },
        "index": {
          "description": "Unstructured traversal over three arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "unsafeTraverse3",
          "normalized": "Array a b c-\u003eArray a b d-\u003eArray a b e-\u003e(b-\u003eb-\u003eb-\u003eb)-\u003e((b-\u003ec)-\u003e(b-\u003ed)-\u003e(b-\u003ee)-\u003eb-\u003ef)-\u003eArray D b f",
          "package": "repa",
          "partial": "Traverse",
          "signature": "Array r sh a-\u003eArray r sh b-\u003eArray r sh c-\u003e(sh-\u003esh-\u003esh-\u003esh)-\u003e((sh-\u003ea)-\u003e(sh-\u003eb)-\u003e(sh-\u003ec)-\u003esh-\u003ed)-\u003eArray D sh d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnstructured traversal over four arrays at once.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Operators.Traversal\",\"Data.Array.Repa.Unsafe\"]",
          "name": "unsafeTraverse4",
          "package": "repa",
          "signature": "Array r1 sh1 a -\u003e Array r2 sh2 b -\u003e Array r3 sh3 c -\u003e Array r4 sh4 d -\u003e (sh1 -\u003e sh2 -\u003e sh3 -\u003e sh4 -\u003e sh5) -\u003e ((sh1 -\u003e a) -\u003e (sh2 -\u003e b) -\u003e (sh3 -\u003e c) -\u003e (sh4 -\u003e d) -\u003e sh5 -\u003e e) -\u003e Array D sh5 e",
          "source": "src/Data-Array-Repa-Operators-Traversal.html#unsafeTraverse4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse4\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#v:unsafeTraverse4\"]"
        },
        "index": {
          "description": "Unstructured traversal over four arrays at once",
          "hierarchy": "Data Array Repa Operators Traversal",
          "module": "Data.Array.Repa.Operators.Traversal",
          "name": "unsafeTraverse4",
          "normalized": "Array a b c-\u003eArray a b d-\u003eArray a b e-\u003eArray a b f-\u003e(b-\u003eb-\u003eb-\u003eb-\u003eb)-\u003e((b-\u003ec)-\u003e(b-\u003ed)-\u003e(b-\u003ee)-\u003e(b-\u003ef)-\u003eb-\u003eg)-\u003eArray D b g",
          "package": "repa",
          "partial": "Traverse",
          "signature": "Array r sh a-\u003eArray r sh b-\u003eArray r sh c-\u003eArray r sh d-\u003e(sh-\u003esh-\u003esh-\u003esh-\u003esh)-\u003e((sh-\u003ea)-\u003e(sh-\u003eb)-\u003e(sh-\u003ec)-\u003e(sh-\u003ed)-\u003esh-\u003ee)-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Operators-Traversal.html#v:unsafeTraverse4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "ByteString",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr ByteString",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "ByteString",
          "package": "repa",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict ByteStrings arrays are represented as ForeignPtr buffers of Word8\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "B",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-ByteString.html#B",
          "type": "data"
        },
        "index": {
          "description": "Strict ByteStrings arrays are represented as ForeignPtr buffers of Word8",
          "hierarchy": "Data Array Repa Repr ByteString",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "B",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ByteString.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Wrap a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "fromByteString",
          "package": "repa",
          "signature": "sh -\u003e ByteString -\u003e Array B sh Word8",
          "source": "src/Data-Array-Repa-Repr-ByteString.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Wrap ByteString as an array",
          "hierarchy": "Data Array Repa Repr ByteString",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "fromByteString",
          "normalized": "a-\u003eByteString-\u003eArray B a Word",
          "package": "repa",
          "partial": "Byte String",
          "signature": "sh-\u003eByteString-\u003eArray B sh Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ByteString.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unpack a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "toByteString",
          "package": "repa",
          "signature": "Array B sh Word8 -\u003e ByteString",
          "source": "src/Data-Array-Repa-Repr-ByteString.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Unpack ByteString from an array",
          "hierarchy": "Data Array Repa Repr ByteString",
          "module": "Data.Array.Repa.Repr.ByteString",
          "name": "toByteString",
          "normalized": "Array B a Word-\u003eByteString",
          "package": "repa",
          "partial": "Byte String",
          "signature": "Array B sh Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ByteString.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "Cursored",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Cursored.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Cursored",
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "Cursored",
          "package": "repa",
          "partial": "Cursored",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Cursored.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCursored Arrays.\n   These are produced by Repa's stencil functions, and help the fusion\n   framework to share index compuations between array elements.\n\u003c/p\u003e\u003cp\u003eThe basic idea is described in ``Efficient Parallel Stencil Convolution'',\n   Ben Lippmeier and Gabriele Keller, Haskell 2011 -- though the underlying\n   array representation has changed since this paper was published.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "C",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Cursored.html#C",
          "type": "data"
        },
        "index": {
          "description": "Cursored Arrays These are produced by Repa stencil functions and help the fusion framework to share index compuations between array elements The basic idea is described in Efficient Parallel Stencil Convolution Ben Lippmeier and Gabriele Keller Haskell though the underlying array representation has changed since this paper was published",
          "hierarchy": "Data Array Repa Repr Cursored",
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "C",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Cursored.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a new cursored array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "makeCursored",
          "package": "repa",
          "signature": "sh-\u003e (sh -\u003e cursor)-\u003e (sh -\u003e cursor -\u003e cursor)-\u003e (cursor -\u003e e)-\u003e Array C sh e",
          "type": "function"
        },
        "index": {
          "description": "Define new cursored array",
          "hierarchy": "Data Array Repa Repr Cursored",
          "module": "Data.Array.Repa.Repr.Cursored",
          "name": "makeCursored",
          "normalized": "a-\u003e(a-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003e(b-\u003ec)-\u003eArray C a c",
          "package": "repa",
          "partial": "Cursored",
          "signature": "sh-\u003e(sh-\u003ecursor)-\u003e(sh-\u003ecursor-\u003ecursor)-\u003e(cursor-\u003ee)-\u003eArray C sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Cursored.html#v:makeCursored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "Delayed",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Delayed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Delayed",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "Delayed",
          "package": "repa",
          "partial": "Delayed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed arrays are represented as functions from the index to element value.\n\u003c/p\u003e\u003cp\u003eEvery time you index into a delayed array the element at that position \n   is recomputed.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "D",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Delayed.html#D",
          "type": "data"
        },
        "index": {
          "description": "Delayed arrays are represented as functions from the index to element value Every time you index into delayed array the element at that position is recomputed",
          "hierarchy": "Data Array Repa Repr Delayed",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "D",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Delay an array.\n   This wraps the internal representation to be a function from\n   indices to elements, so consumers don't need to worry about\n   what the previous representation was.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Repr.Delayed\",\"Data.Array.Repa\"]",
          "name": "delay",
          "package": "repa",
          "signature": "Array r sh e -\u003e Array D sh e",
          "source": "src/Data-Array-Repa-Repr-Delayed.html#delay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:delay\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:delay\"]"
        },
        "index": {
          "description": "Delay an array This wraps the internal representation to be function from indices to elements so consumers don need to worry about what the previous representation was",
          "hierarchy": "Data Array Repa Repr Delayed",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "delay",
          "normalized": "Array a b c-\u003eArray D b c",
          "package": "repa",
          "signature": "Array r sh e-\u003eArray D sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Wrap a function as a delayed array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Repr.Delayed\",\"Data.Array.Repa\"]",
          "name": "fromFunction",
          "package": "repa",
          "signature": "sh -\u003e (sh -\u003e a) -\u003e Array D sh a",
          "source": "src/Data-Array-Repa-Repr-Delayed.html#fromFunction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:fromFunction\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:fromFunction\"]"
        },
        "index": {
          "description": "Wrap function as delayed array",
          "hierarchy": "Data Array Repa Repr Delayed",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "fromFunction",
          "normalized": "a-\u003e(a-\u003eb)-\u003eArray D a b",
          "package": "repa",
          "partial": "Function",
          "signature": "sh-\u003e(sh-\u003ea)-\u003eArray D sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:fromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Produce the extent of an array, and a function to retrieve an\n   arbitrary element.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Repr.Delayed\",\"Data.Array.Repa\"]",
          "name": "toFunction",
          "package": "repa",
          "signature": "Array r1 sh a -\u003e (sh, sh -\u003e a)",
          "source": "src/Data-Array-Repa-Repr-Delayed.html#toFunction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:toFunction\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:toFunction\"]"
        },
        "index": {
          "description": "Produce the extent of an array and function to retrieve an arbitrary element",
          "hierarchy": "Data Array Repa Repr Delayed",
          "module": "Data.Array.Repa.Repr.Delayed",
          "name": "toFunction",
          "normalized": "Array a b c-\u003e(b,b-\u003ec)",
          "package": "repa",
          "partial": "Function",
          "signature": "Array r sh a-\u003e(sh,sh-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Delayed.html#v:toFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "ForeignPtr",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "ForeignPtr",
          "package": "repa",
          "partial": "Foreign Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays represented as foreign buffers in the C heap.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "F",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html#F",
          "type": "data"
        },
        "index": {
          "description": "Arrays represented as foreign buffers in the heap",
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "F",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an array in parallel and write the elements into a foreign\n   buffer without intermediate copying. If you want to copy a\n   pre-existing manifest array to a foreign buffer then \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e it first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "computeIntoP",
          "package": "repa",
          "signature": "ForeignPtr e -\u003e Array r1 sh e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html#computeIntoP",
          "type": "function"
        },
        "index": {
          "description": "Compute an array in parallel and write the elements into foreign buffer without intermediate copying If you want to copy pre-existing manifest array to foreign buffer then delay it first",
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "computeIntoP",
          "normalized": "ForeignPtr a-\u003eArray b c a-\u003eIO()",
          "package": "repa",
          "partial": "Into",
          "signature": "ForeignPtr e-\u003eArray r sh e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#v:computeIntoP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an array sequentially and write the elements into a foreign\n   buffer without intermediate copying. If you want to copy a\n   pre-existing manifest array to a foreign buffer then \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e it first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "computeIntoS",
          "package": "repa",
          "signature": "ForeignPtr e -\u003e Array r1 sh e -\u003e IO ()",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html#computeIntoS",
          "type": "function"
        },
        "index": {
          "description": "Compute an array sequentially and write the elements into foreign buffer without intermediate copying If you want to copy pre-existing manifest array to foreign buffer then delay it first",
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "computeIntoS",
          "normalized": "ForeignPtr a-\u003eArray b c a-\u003eIO()",
          "package": "repa",
          "partial": "Into",
          "signature": "ForeignPtr e-\u003eArray r sh e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#v:computeIntoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Wrap a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e as an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "fromForeignPtr",
          "package": "repa",
          "signature": "sh -\u003e ForeignPtr e -\u003e Array F sh e",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html#fromForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Wrap ForeignPtr as an array",
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "fromForeignPtr",
          "normalized": "a-\u003eForeignPtr b-\u003eArray F a b",
          "package": "repa",
          "partial": "Foreign Ptr",
          "signature": "sh-\u003eForeignPtr e-\u003eArray F sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unpack a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "toForeignPtr",
          "package": "repa",
          "signature": "Array F sh e -\u003e ForeignPtr e",
          "source": "src/Data-Array-Repa-Repr-ForeignPtr.html#toForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Unpack ForeignPtr from an array",
          "hierarchy": "Data Array Repa Repr ForeignPtr",
          "module": "Data.Array.Repa.Repr.ForeignPtr",
          "name": "toForeignPtr",
          "normalized": "Array F a b-\u003eForeignPtr b",
          "package": "repa",
          "partial": "Foreign Ptr",
          "signature": "Array F sh e-\u003eForeignPtr e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-ForeignPtr.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "HintInterleave",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-HintInterleave.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr HintInterleave",
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "HintInterleave",
          "package": "repa",
          "partial": "Hint Interleave",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintInterleave.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHints that computing this array will be an unbalanced workload\n   and evaluation should be interleaved between the processors.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "I",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-HintInterleave.html#I",
          "type": "data"
        },
        "index": {
          "description": "Hints that computing this array will be an unbalanced workload and evaluation should be interleaved between the processors",
          "hierarchy": "Data Array Repa Repr HintInterleave",
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "I",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintInterleave.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an array with a unbalanced-ness hint.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "hintInterleave",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array (I r1) sh e",
          "source": "src/Data-Array-Repa-Repr-HintInterleave.html#hintInterleave",
          "type": "function"
        },
        "index": {
          "description": "Wrap an array with unbalanced-ness hint",
          "hierarchy": "Data Array Repa Repr HintInterleave",
          "module": "Data.Array.Repa.Repr.HintInterleave",
          "name": "hintInterleave",
          "normalized": "Array a b c-\u003eArray(I a)b c",
          "package": "repa",
          "partial": "Interleave",
          "signature": "Array r sh e-\u003eArray(I r)sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintInterleave.html#v:hintInterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "HintSmall",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-HintSmall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr HintSmall",
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "HintSmall",
          "package": "repa",
          "partial": "Hint Small",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintSmall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHints that evaluating this array is only a small amount of work.\n   It will be evaluated sequentially in the main thread, instead of\n   in parallel on the gang. This avoids the associated scheduling overhead.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "S",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-HintSmall.html#S",
          "type": "data"
        },
        "index": {
          "description": "Hints that evaluating this array is only small amount of work It will be evaluated sequentially in the main thread instead of in parallel on the gang This avoids the associated scheduling overhead",
          "hierarchy": "Data Array Repa Repr HintSmall",
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "S",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintSmall.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an array with a smallness hint.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "hintSmall",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array (S r1) sh e",
          "source": "src/Data-Array-Repa-Repr-HintSmall.html#hintSmall",
          "type": "function"
        },
        "index": {
          "description": "Wrap an array with smallness hint",
          "hierarchy": "Data Array Repa Repr HintSmall",
          "module": "Data.Array.Repa.Repr.HintSmall",
          "name": "hintSmall",
          "normalized": "Array a b c-\u003eArray(S a)b c",
          "package": "repa",
          "partial": "Small",
          "signature": "Array r sh e-\u003eArray(S r)sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-HintSmall.html#v:hintSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Partitioned",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Partitioned.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Partitioned",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Partitioned",
          "package": "repa",
          "partial": "Partitioned",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Partitioned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartitioned arrays.\n   The last partition takes priority\n\u003c/p\u003e\u003cp\u003eThese are produced by Repa's support functions and allow arrays to be defined\n   using a different element function for each partition.\n\u003c/p\u003e\u003cp\u003eThe basic idea is described in ``Efficient Parallel Stencil Convolution'',\n   Ben Lippmeier and Gabriele Keller, Haskell 2011 -- though the underlying\n   array representation has changed since this paper was published.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "P",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Partitioned.html#P",
          "type": "data"
        },
        "index": {
          "description": "Partitioned arrays The last partition takes priority These are produced by Repa support functions and allow arrays to be defined using different element function for each partition The basic idea is described in Efficient Parallel Stencil Convolution Ben Lippmeier and Gabriele Keller Haskell though the underlying array representation has changed since this paper was published",
          "hierarchy": "Data Array Repa Repr Partitioned",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "P",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Partitioned.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Range",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Partitioned.html#Range",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Partitioned",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Range",
          "package": "repa",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Partitioned.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Range",
          "package": "repa",
          "signature": "Range !sh !sh (sh -\u003e Bool)",
          "source": "src/Data-Array-Repa-Repr-Partitioned.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Partitioned",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "Range",
          "normalized": "Range a a(a-\u003eBool)",
          "package": "repa",
          "partial": "Range",
          "signature": "Range sh sh(sh-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Partitioned.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an index is within the given range.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "inRange",
          "package": "repa",
          "signature": "Range sh -\u003e sh -\u003e Bool",
          "source": "src/Data-Array-Repa-Repr-Partitioned.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Check whether an index is within the given range",
          "hierarchy": "Data Array Repa Repr Partitioned",
          "module": "Data.Array.Repa.Repr.Partitioned",
          "name": "inRange",
          "normalized": "Range a-\u003ea-\u003eBool",
          "package": "repa",
          "partial": "Range",
          "signature": "Range sh-\u003esh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Partitioned.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "Unboxed",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "Unboxed",
          "package": "repa",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnboxed arrays are represented as unboxed vectors.\n\u003c/p\u003e\u003cp\u003eThe implementation uses \u003ccode\u003eData.Vector.Unboxed\u003c/code\u003e which is based on type\n   families and picks an efficient, specialised representation for every\n   element type. In particular, unboxed vectors of pairs are represented\n   as pairs of unboxed vectors.\n   This is the most efficient representation for numerical data.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "U",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#U",
          "type": "data"
        },
        "index": {
          "description": "Unboxed arrays are represented as unboxed vectors The implementation uses Data.Vector.Unboxed which is based on type families and picks an efficient specialised representation for every element type In particular unboxed vectors of pairs are represented as pairs of unboxed vectors This is the most efficient representation for numerical data",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "U",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "Unbox",
          "package": "repa",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "Unbox",
          "package": "repa",
          "partial": "Unbox",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#t:Unbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel computation of array elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an alias for \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e with a more specific type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Repr.Unboxed\",\"Data.Array.Repa\"]",
          "name": "computeUnboxedP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e m (Array U sh e)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#computeUnboxedP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:computeUnboxedP\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:computeUnboxedP\"]"
        },
        "index": {
          "description": "Parallel computation of array elements This is an alias for computeP with more specific type",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "computeUnboxedP",
          "normalized": "Array a b c-\u003ed(Array U b c)",
          "package": "repa",
          "partial": "Unboxed",
          "signature": "Array r sh e-\u003em(Array U sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:computeUnboxedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential computation of array elements..\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an alias for \u003ccode\u003e\u003ca\u003ecomputeS\u003c/a\u003e\u003c/code\u003e with a more specific type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Repr.Unboxed\",\"Data.Array.Repa\"]",
          "name": "computeUnboxedS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array U sh e",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#computeUnboxedS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:computeUnboxedS\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:computeUnboxedS\"]"
        },
        "index": {
          "description": "Sequential computation of array elements This is an alias for computeS with more specific type",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "computeUnboxedS",
          "normalized": "Array a b c-\u003eArray U b c",
          "package": "repa",
          "partial": "Unboxed",
          "signature": "Array r sh e-\u003eArray U sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:computeUnboxedS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a list to an unboxed vector array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an alias for \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e with a more specific type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Repa.Repr.Unboxed\",\"Data.Array.Repa\"]",
          "name": "fromListUnboxed",
          "package": "repa",
          "signature": "sh -\u003e [a] -\u003e Array U sh a",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#fromListUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:fromListUnboxed\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:fromListUnboxed\"]"
        },
        "index": {
          "description": "Convert list to an unboxed vector array This is an alias for fromList with more specific type",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "fromListUnboxed",
          "normalized": "a-\u003e[b]-\u003eArray U a b",
          "package": "repa",
          "partial": "List Unboxed",
          "signature": "sh-\u003e[a]-\u003eArray U sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:fromListUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Wrap an unboxed vector as an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Repr.Unboxed\",\"Data.Array.Repa\"]",
          "name": "fromUnboxed",
          "package": "repa",
          "signature": "sh -\u003e Vector e -\u003e Array U sh e",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#fromUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:fromUnboxed\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:fromUnboxed\"]"
        },
        "index": {
          "description": "Wrap an unboxed vector as an array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "fromUnboxed",
          "normalized": "a-\u003eVector b-\u003eArray U a b",
          "package": "repa",
          "partial": "Unboxed",
          "signature": "sh-\u003eVector e-\u003eArray U sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:fromUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unpack an unboxed vector from an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Repr.Unboxed\",\"Data.Array.Repa\"]",
          "name": "toUnboxed",
          "package": "repa",
          "signature": "Array U sh e -\u003e Vector e",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#toUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:toUnboxed\",\"http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:toUnboxed\"]"
        },
        "index": {
          "description": "Unpack an unboxed vector from an array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "toUnboxed",
          "normalized": "Array U a b-\u003eVector b",
          "package": "repa",
          "partial": "Unboxed",
          "signature": "Array U sh e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:toUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip",
          "package": "repa",
          "signature": "Array U sh (a, b) -\u003e (Array U sh a, Array U sh b)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip an unboxed array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip",
          "normalized": "Array U a(b,c)-\u003e(Array U a b,Array U a c)",
          "package": "repa",
          "signature": "Array U sh(a,b)-\u003e(Array U sh a,Array U sh b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip3",
          "package": "repa",
          "signature": "Array U sh (a, b, c) -\u003e (Array U sh a, Array U sh b, Array U sh c)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "Unzip an unboxed array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip3",
          "normalized": "Array U a(b,c,d)-\u003e(Array U a b,Array U a c,Array U a d)",
          "package": "repa",
          "signature": "Array U sh(a,b,c)-\u003e(Array U sh a,Array U sh b,Array U sh c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip4",
          "package": "repa",
          "signature": "Array U sh (a, b, c, d) -\u003e (Array U sh a, Array U sh b, Array U sh c, Array U sh d)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#unzip4",
          "type": "function"
        },
        "index": {
          "description": "Unzip an unboxed array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip4",
          "normalized": "Array U a(b,c,d,e)-\u003e(Array U a b,Array U a c,Array U a d,Array U a e)",
          "package": "repa",
          "signature": "Array U sh(a,b,c,d)-\u003e(Array U sh a,Array U sh b,Array U sh c,Array U sh d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip5",
          "package": "repa",
          "signature": "Array U sh (a, b, c, d, e) -\u003e (Array U sh a, Array U sh b, Array U sh c, Array U sh d, Array U sh e)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#unzip5",
          "type": "function"
        },
        "index": {
          "description": "Unzip an unboxed array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip5",
          "normalized": "Array U a(b,c,d,e,f)-\u003e(Array U a b,Array U a c,Array U a d,Array U a e,Array U a f)",
          "package": "repa",
          "signature": "Array U sh(a,b,c,d,e)-\u003e(Array U sh a,Array U sh b,Array U sh c,Array U sh d,Array U sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip6",
          "package": "repa",
          "signature": "Array U sh (a, b, c, d, e, f) -\u003e (Array U sh a, Array U sh b, Array U sh c, Array U sh d, Array U sh e, Array U sh f)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#unzip6",
          "type": "function"
        },
        "index": {
          "description": "Unzip an unboxed array",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "unzip6",
          "normalized": "Array U a(b,c,d,e,f,g)-\u003e(Array U a b,Array U a c,Array U a d,Array U a e,Array U a f,Array U a g)",
          "package": "repa",
          "signature": "Array U sh(a,b,c,d,e,f)-\u003e(Array U sh a,Array U sh b,Array U sh c,Array U sh d,Array U sh e,Array U sh f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip some unboxed arrays.\n         The shapes must be identical else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip",
          "package": "repa",
          "signature": "Array U sh a -\u003e Array U sh b -\u003e Array U sh (a, b)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip some unboxed arrays The shapes must be identical else error",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip",
          "normalized": "Array U a b-\u003eArray U a c-\u003eArray U a(b,c)",
          "package": "repa",
          "signature": "Array U sh a-\u003eArray U sh b-\u003eArray U sh(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip some unboxed arrays.\n         The shapes must be identical else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip3",
          "package": "repa",
          "signature": "Array U sh a -\u003e Array U sh b -\u003e Array U sh c -\u003e Array U sh (a, b, c)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Zip some unboxed arrays The shapes must be identical else error",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip3",
          "normalized": "Array U a b-\u003eArray U a c-\u003eArray U a d-\u003eArray U a(b,c,d)",
          "package": "repa",
          "signature": "Array U sh a-\u003eArray U sh b-\u003eArray U sh c-\u003eArray U sh(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip some unboxed arrays.\n         The shapes must be identical else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip4",
          "package": "repa",
          "signature": "Array U sh a -\u003e Array U sh b -\u003e Array U sh c -\u003e Array U sh d -\u003e Array U sh (a, b, c, d)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Zip some unboxed arrays The shapes must be identical else error",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip4",
          "normalized": "Array U a b-\u003eArray U a c-\u003eArray U a d-\u003eArray U a e-\u003eArray U a(b,c,d,e)",
          "package": "repa",
          "signature": "Array U sh a-\u003eArray U sh b-\u003eArray U sh c-\u003eArray U sh d-\u003eArray U sh(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip some unboxed arrays.\n         The shapes must be identical else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip5",
          "package": "repa",
          "signature": "Array U sh a -\u003e Array U sh b -\u003e Array U sh c -\u003e Array U sh d -\u003e Array U sh e -\u003e Array U sh (a, b, c, d, e)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Zip some unboxed arrays The shapes must be identical else error",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip5",
          "normalized": "Array U a b-\u003eArray U a c-\u003eArray U a d-\u003eArray U a e-\u003eArray U a f-\u003eArray U a(b,c,d,e,f)",
          "package": "repa",
          "signature": "Array U sh a-\u003eArray U sh b-\u003eArray U sh c-\u003eArray U sh d-\u003eArray U sh e-\u003eArray U sh(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip some unboxed arrays.\n         The shapes must be identical else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip6",
          "package": "repa",
          "signature": "Array U sh a -\u003e Array U sh b -\u003e Array U sh c -\u003e Array U sh d -\u003e Array U sh e -\u003e Array U sh f -\u003e Array U sh (a, b, c, d, e, f)",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#zip6",
          "type": "function"
        },
        "index": {
          "description": "Zip some unboxed arrays The shapes must be identical else error",
          "hierarchy": "Data Array Repa Repr Unboxed",
          "module": "Data.Array.Repa.Repr.Unboxed",
          "name": "zip6",
          "normalized": "Array U a b-\u003eArray U a c-\u003eArray U a d-\u003eArray U a e-\u003eArray U a f-\u003eArray U a g-\u003eArray U a(b,c,d,e,f,g)",
          "package": "repa",
          "signature": "Array U sh a-\u003eArray U sh b-\u003eArray U sh c-\u003eArray U sh d-\u003eArray U sh e-\u003eArray U sh f-\u003eArray U sh(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Unboxed.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Undefined",
          "name": "Undefined",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Undefined.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Undefined",
          "module": "Data.Array.Repa.Repr.Undefined",
          "name": "Undefined",
          "package": "repa",
          "partial": "Undefined",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Undefined.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array with undefined elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is normally used as the last representation in a partitioned array, \n     as the previous partitions are expected to provide full coverage.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Repr.Undefined",
          "name": "X",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Undefined.html#X",
          "type": "data"
        },
        "index": {
          "description": "An array with undefined elements This is normally used as the last representation in partitioned array as the previous partitions are expected to provide full coverage",
          "hierarchy": "Data Array Repa Repr Undefined",
          "module": "Data.Array.Repa.Repr.Undefined",
          "name": "X",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Undefined.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "Vector",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "Vector",
          "package": "repa",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays represented as boxed vectors.\n\u003c/p\u003e\u003cp\u003eThis representation should only be used when your element type doesn't\n   have an \u003ccode\u003eUnbox\u003c/code\u003e instsance. If it does, then use the Unboxed \u003ccode\u003eU\u003c/code\u003e\n   representation will be faster.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "V",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Vector.html#V",
          "type": "data"
        },
        "index": {
          "description": "Arrays represented as boxed vectors This representation should only be used when your element type doesn have an Unbox instsance If it does then use the Unboxed representation will be faster",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "V",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel computation of array elements.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "computeVectorP",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e m (Array V sh e)",
          "source": "src/Data-Array-Repa-Repr-Vector.html#computeVectorP",
          "type": "function"
        },
        "index": {
          "description": "Parallel computation of array elements",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "computeVectorP",
          "normalized": "Array a b c-\u003ed(Array V b c)",
          "package": "repa",
          "partial": "Vector",
          "signature": "Array r sh e-\u003em(Array V sh e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#v:computeVectorP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential computation of array elements.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an alias for \u003ccode\u003ecompute\u003c/code\u003e with a more specific type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "computeVectorS",
          "package": "repa",
          "signature": "Array r1 sh e -\u003e Array V sh e",
          "source": "src/Data-Array-Repa-Repr-Vector.html#computeVectorS",
          "type": "function"
        },
        "index": {
          "description": "Sequential computation of array elements This is an alias for compute with more specific type",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "computeVectorS",
          "normalized": "Array a b c-\u003eArray V b c",
          "package": "repa",
          "partial": "Vector",
          "signature": "Array r sh e-\u003eArray V sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#v:computeVectorS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert a list to a boxed vector array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an alias for \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e with a more specific type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "fromListVector",
          "package": "repa",
          "signature": "sh -\u003e [a] -\u003e Array V sh a",
          "source": "src/Data-Array-Repa-Repr-Vector.html#fromListVector",
          "type": "function"
        },
        "index": {
          "description": "Convert list to boxed vector array This is an alias for fromList with more specific type",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "fromListVector",
          "normalized": "a-\u003e[b]-\u003eArray V a b",
          "package": "repa",
          "partial": "List Vector",
          "signature": "sh-\u003e[a]-\u003eArray V sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#v:fromListVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Wrap a boxed vector as an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "fromVector",
          "package": "repa",
          "signature": "sh -\u003e Vector e -\u003e Array V sh e",
          "source": "src/Data-Array-Repa-Repr-Vector.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Wrap boxed vector as an array",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "fromVector",
          "normalized": "a-\u003eVector b-\u003eArray V a b",
          "package": "repa",
          "partial": "Vector",
          "signature": "sh-\u003eVector e-\u003eArray V sh e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unpack a boxed vector from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "toVector",
          "package": "repa",
          "signature": "Array V sh e -\u003e Vector e",
          "source": "src/Data-Array-Repa-Repr-Vector.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "Unpack boxed vector from an array",
          "hierarchy": "Data Array Repa Repr Vector",
          "module": "Data.Array.Repa.Repr.Vector",
          "name": "toVector",
          "normalized": "Array V a b-\u003eVector b",
          "package": "repa",
          "partial": "Vector",
          "signature": "Array V sh e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Repr-Vector.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of types that can be used as array shapes and indices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "Shape",
          "package": "repa",
          "source": "src/Data-Array-Repa-Shape.html",
          "type": "module"
        },
        "index": {
          "description": "Class of types that can be used as array shapes and indices",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "Shape",
          "package": "repa",
          "partial": "Shape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that can be used as array shapes and indices.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "Shape",
          "package": "repa",
          "source": "src/Data-Array-Repa-Shape.html#Shape",
          "type": "class"
        },
        "index": {
          "description": "Class of types that can be used as array shapes and indices",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "Shape",
          "package": "repa",
          "partial": "Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the coordinates of two shapes componentwise\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "addDim",
          "package": "repa",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Array-Repa-Shape.html#addDim",
          "type": "method"
        },
        "index": {
          "description": "Add the coordinates of two shapes componentwise",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "addDim",
          "normalized": "a-\u003ea-\u003ea",
          "package": "repa",
          "partial": "Dim",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:addDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that a shape is completely evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "deepSeq",
          "package": "repa",
          "signature": "sh -\u003e a -\u003e a",
          "source": "src/Data-Array-Repa-Shape.html#deepSeq",
          "type": "method"
        },
        "index": {
          "description": "Ensure that shape is completely evaluated",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "deepSeq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "repa",
          "partial": "Seq",
          "signature": "sh-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:deepSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003etoIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "fromIndex",
          "package": "repa",
          "signature": "fromIndex",
          "source": "src/Data-Array-Repa-Shape.html#fromIndex",
          "type": "method"
        },
        "index": {
          "description": "Inverse of toIndex",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "fromIndex",
          "package": "repa",
          "partial": "Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:fromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an index is a part of a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "inShape",
          "package": "repa",
          "signature": "sh-\u003e sh-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether an index is part of given shape",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "inShape",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "repa",
          "partial": "Shape",
          "signature": "sh-\u003esh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:inShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an index is within a given shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "inShapeRange",
          "package": "repa",
          "signature": "inShapeRange",
          "source": "src/Data-Array-Repa-Shape.html#inShapeRange",
          "type": "method"
        },
        "index": {
          "description": "Check whether an index is within given shape",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "inShapeRange",
          "package": "repa",
          "partial": "Shape Range",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:inShapeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection of two shapes.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "intersectDim",
          "package": "repa",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Array-Repa-Shape.html#intersectDim",
          "type": "method"
        },
        "index": {
          "description": "Compute the intersection of two shapes",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "intersectDim",
          "normalized": "a-\u003ea-\u003ea",
          "package": "repa",
          "partial": "Dim",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:intersectDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a shape into its list of dimensions.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "listOfShape",
          "package": "repa",
          "signature": "sh -\u003e [Int]",
          "source": "src/Data-Array-Repa-Shape.html#listOfShape",
          "type": "method"
        },
        "index": {
          "description": "Convert shape into its list of dimensions",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "listOfShape",
          "normalized": "a-\u003e[Int]",
          "package": "repa",
          "partial": "Of Shape",
          "signature": "sh-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:listOfShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of dimensions in a shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "rank",
          "package": "repa",
          "signature": "sh -\u003e Int",
          "source": "src/Data-Array-Repa-Shape.html#rank",
          "type": "method"
        },
        "index": {
          "description": "Get the number of dimensions in shape",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "rank",
          "normalized": "a-\u003eInt",
          "package": "repa",
          "signature": "sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of dimensions to a shape\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "shapeOfList",
          "package": "repa",
          "signature": "[Int] -\u003e sh",
          "source": "src/Data-Array-Repa-Shape.html#shapeOfList",
          "type": "method"
        },
        "index": {
          "description": "Convert list of dimensions to shape",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "shapeOfList",
          "normalized": "[Int]-\u003ea",
          "package": "repa",
          "partial": "Of List",
          "signature": "[Int]-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:shapeOfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNicely format a shape as a string\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "showShape",
          "package": "repa",
          "signature": "sh -\u003e String",
          "source": "src/Data-Array-Repa-Shape.html#showShape",
          "type": "function"
        },
        "index": {
          "description": "Nicely format shape as string",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "showShape",
          "normalized": "a-\u003eString",
          "package": "repa",
          "partial": "Shape",
          "signature": "sh-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:showShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the total number of elements in an array with this shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "size",
          "package": "repa",
          "signature": "sh -\u003e Int",
          "source": "src/Data-Array-Repa-Shape.html#size",
          "type": "method"
        },
        "index": {
          "description": "Get the total number of elements in an array with this shape",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "repa",
          "signature": "sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether this shape is small enough so that its flat\n\tindices an be represented as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. If this returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then your\n\tarray is too big. Mostly used for writing QuickCheck tests.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "sizeIsValid",
          "package": "repa",
          "signature": "sh -\u003e Bool",
          "source": "src/Data-Array-Repa-Shape.html#sizeIsValid",
          "type": "method"
        },
        "index": {
          "description": "Check whether this shape is small enough so that its flat indices an be represented as Int If this returns False then your array is too big Mostly used for writing QuickCheck tests",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "sizeIsValid",
          "normalized": "a-\u003eBool",
          "package": "repa",
          "partial": "Is Valid",
          "signature": "sh-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:sizeIsValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an index into its equivalent flat, linear, row-major version.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "toIndex",
          "package": "repa",
          "signature": "toIndex",
          "source": "src/Data-Array-Repa-Shape.html#toIndex",
          "type": "method"
        },
        "index": {
          "description": "Convert an index into its equivalent flat linear row-major version",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "toIndex",
          "package": "repa",
          "partial": "Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:toIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape of an array with size one, with a particular dimensionality.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "unitDim",
          "package": "repa",
          "signature": "sh",
          "source": "src/Data-Array-Repa-Shape.html#unitDim",
          "type": "method"
        },
        "index": {
          "description": "The shape of an array with size one with particular dimensionality",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "unitDim",
          "package": "repa",
          "partial": "Dim",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:unitDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape of an array of size zero, with a particular dimensionality.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Shape",
          "name": "zeroDim",
          "package": "repa",
          "signature": "sh",
          "source": "src/Data-Array-Repa-Shape.html#zeroDim",
          "type": "method"
        },
        "index": {
          "description": "The shape of an array of size zero with particular dimensionality",
          "hierarchy": "Data Array Repa Shape",
          "module": "Data.Array.Repa.Shape",
          "name": "zeroDim",
          "package": "repa",
          "partial": "Dim",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Shape.html#v:zeroDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIndex space transformation between arrays and slices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "Slice",
          "package": "repa",
          "source": "src/Data-Array-Repa-Slice.html",
          "type": "module"
        },
        "index": {
          "description": "Index space transformation between arrays and slices",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "Slice",
          "package": "repa",
          "partial": "Slice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all indices at a certain position.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "All",
          "package": "repa",
          "source": "src/Data-Array-Repa-Slice.html#All",
          "type": "data"
        },
        "index": {
          "description": "Select all indices at certain position",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "All",
          "package": "repa",
          "partial": "All",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace holder for any possible shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "Any",
          "package": "repa",
          "source": "src/Data-Array-Repa-Slice.html#Any",
          "type": "data"
        },
        "index": {
          "description": "Place holder for any possible shape",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "Any",
          "package": "repa",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a type of the index in the full shape, to the type of the index in the slice.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "FullShape",
          "package": "repa",
          "signature": "FullShape",
          "type": "function"
        },
        "index": {
          "description": "Map type of the index in the full shape to the type of the index in the slice",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "FullShape",
          "package": "repa",
          "partial": "Full Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#t:FullShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of index types that can map to slices.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "Slice",
          "package": "repa",
          "source": "src/Data-Array-Repa-Slice.html#Slice",
          "type": "class"
        },
        "index": {
          "description": "Class of index types that can map to slices",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "Slice",
          "package": "repa",
          "partial": "Slice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#t:Slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the type of an index in the slice, to the type of the index in the full shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "SliceShape",
          "package": "repa",
          "signature": "SliceShape",
          "type": "function"
        },
        "index": {
          "description": "Map the type of an index in the slice to the type of the index in the full shape",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "SliceShape",
          "package": "repa",
          "partial": "Slice Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#t:SliceShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Slice",
          "name": "All",
          "package": "repa",
          "signature": "All",
          "source": "src/Data-Array-Repa-Slice.html#All",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "All",
          "package": "repa",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Slice",
          "name": "Any",
          "package": "repa",
          "signature": "Any",
          "source": "src/Data-Array-Repa-Slice.html#Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "Any",
          "package": "repa",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap an index of a slice onto an index of the full shape.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "fullOfSlice",
          "package": "repa",
          "signature": "ss -\u003e SliceShape ss -\u003e FullShape ss",
          "source": "src/Data-Array-Repa-Slice.html#fullOfSlice",
          "type": "method"
        },
        "index": {
          "description": "Map an index of slice onto an index of the full shape",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "fullOfSlice",
          "normalized": "a-\u003eSliceShape a-\u003eFullShape a",
          "package": "repa",
          "partial": "Of Slice",
          "signature": "ss-\u003eSliceShape ss-\u003eFullShape ss",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#v:fullOfSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap an index of a full shape onto an index of some slice.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Slice",
          "name": "sliceOfFull",
          "package": "repa",
          "signature": "ss -\u003e FullShape ss -\u003e SliceShape ss",
          "source": "src/Data-Array-Repa-Slice.html#sliceOfFull",
          "type": "method"
        },
        "index": {
          "description": "Map an index of full shape onto an index of some slice",
          "hierarchy": "Data Array Repa Slice",
          "module": "Data.Array.Repa.Slice",
          "name": "sliceOfFull",
          "normalized": "a-\u003eFullShape a-\u003eSliceShape a",
          "package": "repa",
          "partial": "Of Full",
          "signature": "ss-\u003eFullShape ss-\u003eSliceShape ss",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Slice.html#v:sliceOfFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions specialised for arrays of dimension 2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "Dim2",
          "package": "repa",
          "source": "src/Data-Array-Repa-Specialised-Dim2.html",
          "type": "module"
        },
        "index": {
          "description": "Functions specialised for arrays of dimension",
          "hierarchy": "Data Array Repa Specialised Dim2",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "Dim2",
          "package": "repa",
          "partial": "Dim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Specialised-Dim2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the extent of an array, clamp the components of an index so they\n   lie within the given array. Outlying indices are clamped to the index\n   of the nearest border element.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "clampToBorder2",
          "package": "repa",
          "signature": "DIM2-\u003e DIM2-\u003e DIM2",
          "type": "function"
        },
        "index": {
          "description": "Given the extent of an array clamp the components of an index so they lie within the given array Outlying indices are clamped to the index of the nearest border element",
          "hierarchy": "Data Array Repa Specialised Dim2",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "clampToBorder2",
          "normalized": "DIM-\u003eDIM-\u003eDIM",
          "package": "repa",
          "partial": "To Border",
          "signature": "DIM-\u003eDIM-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Specialised-Dim2.html#v:clampToBorder2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an index lies inside the given extent.\n   As opposed to \u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Array.Repa.Index\u003c/a\u003e,\n   this is a short-circuited test that checks that lowest dimension first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "isInside2",
          "package": "repa",
          "signature": "DIM2-\u003e DIM2-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if an index lies inside the given extent As opposed to inRange from Data.Array.Repa.Index this is short-circuited test that checks that lowest dimension first",
          "hierarchy": "Data Array Repa Specialised Dim2",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "isInside2",
          "normalized": "DIM-\u003eDIM-\u003eBool",
          "package": "repa",
          "partial": "Inside",
          "signature": "DIM-\u003eDIM-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Specialised-Dim2.html#v:isInside2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an index lies outside the given extent.\n   As opposed to \u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Array.Repa.Index\u003c/a\u003e,\n   this is a short-circuited test that checks the lowest dimension first.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "isOutside2",
          "package": "repa",
          "signature": "DIM2-\u003e DIM2-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if an index lies outside the given extent As opposed to inRange from Data.Array.Repa.Index this is short-circuited test that checks the lowest dimension first",
          "hierarchy": "Data Array Repa Specialised Dim2",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "isOutside2",
          "normalized": "DIM-\u003eDIM-\u003eBool",
          "package": "repa",
          "partial": "Outside",
          "signature": "DIM-\u003eDIM-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Specialised-Dim2.html#v:isOutside2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a 2D partitioned array from two others, one to produce the elements\n   in the internal region, and one to produce elements in the border region.\n   The two arrays must have the same extent.\n   The border must be the same width on all sides.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "makeBordered2",
          "package": "repa",
          "signature": "DIM2-\u003e Int-\u003e Array r1 DIM2 a-\u003e Array r2 DIM2 a-\u003e Array (P r1 (P r2 (P r2 (P r2 (P r2 X))))) DIM2 a",
          "type": "function"
        },
        "index": {
          "description": "Make partitioned array from two others one to produce the elements in the internal region and one to produce elements in the border region The two arrays must have the same extent The border must be the same width on all sides",
          "hierarchy": "Data Array Repa Specialised Dim2",
          "module": "Data.Array.Repa.Specialised.Dim2",
          "name": "makeBordered2",
          "normalized": "DIM-\u003eInt-\u003eArray a DIM b-\u003eArray a DIM b-\u003eArray(P a(P a(P a(P a(P a X)))))DIM b",
          "package": "repa",
          "partial": "Bordered",
          "signature": "DIM-\u003eInt-\u003eArray r DIM a-\u003eArray r DIM a-\u003eArray(P r(P r(P r(P r(P r X)))))DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Specialised-Dim2.html#v:makeBordered2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "Dim2",
          "package": "repa",
          "source": "src/Data-Array-Repa-Stencil-Dim2.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "Dim2",
          "package": "repa",
          "partial": "Dim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "PC5",
          "package": "repa",
          "source": "src/Data-Array-Repa-Stencil-Dim2.html#PC5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "PC5",
          "package": "repa",
          "partial": "PC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#t:PC5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapStencil2\u003c/a\u003e\u003c/code\u003e but with the parameters flipped.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "forStencil2",
          "package": "repa",
          "signature": "Boundary a -\u003e Array r DIM2 a -\u003e Stencil DIM2 a -\u003e Array PC5 DIM2 a",
          "source": "src/Data-Array-Repa-Stencil-Dim2.html#forStencil2",
          "type": "function"
        },
        "index": {
          "description": "Like mapStencil2 but with the parameters flipped",
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "forStencil2",
          "normalized": "Boundary a-\u003eArray b DIM a-\u003eStencil DIM a-\u003eArray PC DIM a",
          "package": "repa",
          "partial": "Stencil",
          "signature": "Boundary a-\u003eArray r DIM a-\u003eStencil DIM a-\u003eArray PC DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#v:forStencil2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003emakeStencil\u003c/a\u003e\u003c/code\u003e that requires a DIM2 stencil.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "makeStencil2",
          "package": "repa",
          "signature": "Int-\u003e Int-\u003e (DIM2 -\u003e Maybe a)-\u003e Stencil DIM2 a",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for makeStencil that requires DIM2 stencil",
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "makeStencil2",
          "normalized": "Int-\u003eInt-\u003e(DIM-\u003eMaybe a)-\u003eStencil DIM a",
          "package": "repa",
          "partial": "Stencil",
          "signature": "Int-\u003eInt-\u003e(DIM-\u003eMaybe a)-\u003eStencil DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#v:makeStencil2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a stencil to every element of a 2D array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "mapStencil2",
          "package": "repa",
          "signature": "Boundary a-\u003e Stencil DIM2 a-\u003e Array r DIM2 a-\u003e Array PC5 DIM2 a",
          "type": "function"
        },
        "index": {
          "description": "Apply stencil to every element of array",
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "mapStencil2",
          "normalized": "Boundary a-\u003eStencil DIM a-\u003eArray b DIM a-\u003eArray PC DIM a",
          "package": "repa",
          "partial": "Stencil",
          "signature": "Boundary a-\u003eStencil DIM a-\u003eArray r DIM a-\u003eArray PC DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#v:mapStencil2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for producing a static stencil defintion.\n\u003c/p\u003e\u003cp\u003eA definition like\n\u003c/p\u003e\u003cpre\u003e\n     [stencil2|  0 1 0\n                 1 0 1\n                 0 1 0 |]\n\u003c/pre\u003e\u003cp\u003eIs converted to:\n\u003c/p\u003e\u003cpre\u003e\n     makeStencil2 (Z:.3:.3)\n        (\\ix -\u003e case ix of\n                  Z :. -1 :.  0  -\u003e Just 1\n                  Z :.  0 :. -1  -\u003e Just 1\n                  Z :.  0 :.  1  -\u003e Just 1\n                  Z :.  1 :.  0  -\u003e Just 1\n                  _              -\u003e Nothing)\n\u003c/pre\u003e",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "stencil2",
          "package": "repa",
          "signature": "QuasiQuoter",
          "source": "src/Data-Array-Repa-Stencil-Template.html#stencil2",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for producing static stencil defintion definition like stencil2 Is converted to makeStencil2 ix case ix of Just Just Just Just Nothing",
          "hierarchy": "Data Array Repa Stencil Dim2",
          "module": "Data.Array.Repa.Stencil.Dim2",
          "name": "stencil2",
          "package": "repa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil-Dim2.html#v:stencil2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient computation of stencil based convolutions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "Stencil",
          "package": "repa",
          "source": "src/Data-Array-Repa-Stencil.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient computation of stencil based convolutions",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "Stencil",
          "package": "repa",
          "partial": "Stencil",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to handle the case when the stencil lies partly outside the array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "Boundary",
          "package": "repa",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Boundary",
          "type": "data"
        },
        "index": {
          "description": "How to handle the case when the stencil lies partly outside the array",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "Boundary",
          "package": "repa",
          "partial": "Boundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#t:Boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a convolution stencil that we can apply to array.\n   Only statically known stencils are supported right now.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "Stencil",
          "package": "repa",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Stencil",
          "type": "data"
        },
        "index": {
          "description": "Represents convolution stencil that we can apply to array Only statically known stencils are supported right now",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "Stencil",
          "package": "repa",
          "partial": "Stencil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#t:Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClamp points outside to the same value as the edge pixel.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundClamp",
          "package": "repa",
          "signature": "BoundClamp",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "Clamp points outside to the same value as the edge pixel",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundClamp",
          "package": "repa",
          "partial": "Bound Clamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:BoundClamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat points outside the array as having a constant value.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundConst",
          "package": "repa",
          "signature": "BoundConst !a",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "Treat points outside the array as having constant value",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundConst",
          "package": "repa",
          "partial": "Bound Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:BoundConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a fixed value for border regions.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundFixed",
          "package": "repa",
          "signature": "BoundFixed !a",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "Use fixed value for border regions",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "BoundFixed",
          "package": "repa",
          "partial": "Bound Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:BoundFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatic stencils are used when the coefficients are fixed,\n   and known at compile time.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "StencilStatic",
          "package": "repa",
          "signature": "StencilStatic",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Stencil",
          "type": "function"
        },
        "index": {
          "description": "Static stencils are used when the coefficients are fixed and known at compile time",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "StencilStatic",
          "package": "repa",
          "partial": "Stencil Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:StencilStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a stencil from a function yielding coefficients at each index.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Stencil",
          "name": "makeStencil",
          "package": "repa",
          "signature": "sh-\u003e (sh -\u003e Maybe a)-\u003e Stencil sh a",
          "type": "function"
        },
        "index": {
          "description": "Make stencil from function yielding coefficients at each index",
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "makeStencil",
          "normalized": "a-\u003e(a-\u003eMaybe b)-\u003eStencil a b",
          "package": "repa",
          "partial": "Stencil",
          "signature": "sh-\u003e(sh-\u003eMaybe a)-\u003eStencil sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:makeStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilAcc",
          "package": "repa",
          "signature": "(sh -\u003e a -\u003e a -\u003e a)",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilAcc",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)",
          "package": "repa",
          "partial": "Acc",
          "signature": "(sh-\u003ea-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:stencilAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilExtent",
          "package": "repa",
          "signature": "sh",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilExtent",
          "package": "repa",
          "partial": "Extent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:stencilExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilZero",
          "package": "repa",
          "signature": "a",
          "source": "src/Data-Array-Repa-Stencil-Base.html#Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Stencil",
          "module": "Data.Array.Repa.Stencil",
          "name": "stencilZero",
          "package": "repa",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Stencil.html#v:stencilZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions without sanity or bounds checks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Unsafe",
          "name": "Unsafe",
          "package": "repa",
          "source": "src/Data-Array-Repa-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Functions without sanity or bounds checks",
          "hierarchy": "Data Array Repa Unsafe",
          "module": "Data.Array.Repa.Unsafe",
          "name": "Unsafe",
          "package": "repa",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepa arrays are wrappers around a linear structure that holds the element\n   data. \n\u003c/p\u003e\u003cp\u003eThe representation tag determines what structure holds the data.\n\u003c/p\u003e\u003cp\u003eDelayed Representations (functions that compute elements)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e  -- Functions from indices to elements.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e  -- Cursor functions.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eManifest Representations (real data)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eU\u003c/a\u003e\u003c/code\u003e  -- Adaptive unboxed vectors.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e  -- Boxed vectors.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e  -- Strict ByteStrings.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e  -- Foreign memory buffers.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMeta Representations\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e  -- Arrays that are partitioned into several representations.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e  -- Hints that computing this array is a small amount of work,\n             so computation should be sequential rather than parallel to avoid\n             scheduling overheads.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e  -- Hints that computing this array will be an unbalanced workload,\n             so computation of successive elements should be interleaved between\n             the processors\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eX\u003c/code\u003e  -- Arrays whose elements are all undefined.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eArray fusion is achieved via the delayed (\u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e) and cursored (\u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e)\n  representations. At compile time, the GHC simplifier combines the functions\n  contained within \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e arrays without needing to create manifest\n  intermediate arrays. \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAdvice for writing fast code:\u003c/em\u003e\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Repa does not support nested parallellism. \n     This means that you cannot \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e a parallel worker function across\n     an array and then call \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e to evaluate it, or pass a parallel\n     worker to parallel reductions such as \u003ccode\u003e\u003ca\u003efoldP\u003c/a\u003e\u003c/code\u003e. If you do then you will\n     get a run-time warning and the code will run very slowly.\n\u003c/li\u003e\u003cli\u003e Arrays of type \u003ccode\u003e(Array D sh a)\u003c/code\u003e or \u003ccode\u003e(Array C sh a)\u003c/code\u003e are \u003cem\u003enot real arrays\u003c/em\u003e.\n     They are represented as functions that compute each element on demand.\n     You need to use \u003ccode\u003e\u003ca\u003ecomputeS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomputeUnboxedP\u003c/a\u003e\u003c/code\u003e\n     and so on to actually evaluate the elements.\n\u003c/li\u003e\u003cli\u003e Add \u003ccode\u003eINLINE\u003c/code\u003e pragmas to all leaf-functions in your code, expecially ones\n     that compute numeric results. Non-inlined lazy function calls can cost\n     upwards of 50 cycles each, while each numeric operator only costs one (or less).\n     Inlining leaf functions also ensures they are specialised at the appropriate\n     numeric types.\n\u003c/li\u003e\u003cli\u003e Add bang patterns to all function arguments, and all fields of your data\n     types. In a high-performance Haskell program, the cost of lazy evaluation\n     can easily dominate the run time if not handled correctly. You don't want\n     to rely on the strictness analyser in numeric code because if it does not\n     return a perfect result then the performance of your program will be awful.\n     This is less of a problem for general Haskell code, and in a different\n     context relying on strictness analysis is fine.\n\u003c/li\u003e\u003cli\u003e Scheduling an 8-thread parallel computation can take 50us on a Linux machine. \n     You should switch to sequential evaluation functions like \u003ccode\u003e\u003ca\u003ecomputeS\u003c/a\u003e\u003c/code\u003e and\n     \u003ccode\u003e\u003ca\u003efoldS\u003c/a\u003e\u003c/code\u003e for small arrays in inner loops, and at the bottom of a \n     divide-and-conquer algorithm. Consider using a \u003ccode\u003e\u003ca\u003ecomputeP\u003c/a\u003e\u003c/code\u003e that evaluates\n     an array defined using \u003ccode\u003e\u003ca\u003ecomputeS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldS\u003c/a\u003e\u003c/code\u003e for each element.\n\u003c/li\u003e\u003cli\u003e Compile the modules that use Repa with the following flags:\n     \u003ccode\u003e-Odph -rtsopts -threaded\u003c/code\u003e\n     \u003ccode\u003e-fno-liberate-case -funfolding-use-threshold1000 -funfolding-keeness-factor1000\u003c/code\u003e\n     \u003ccode\u003e-fllvm -optlo-O3\u003c/code\u003e\n     You don't want the liberate-case transform because it tends to duplicate\n     too much intermediate code, and is not needed if you use bang patterns\n     as per point 4. The unfolding flags tell the inliner to not to fool around with \n     heuristics, and just inline everything. If the binaries become too big then \n     split the array part of your program into separate modules and only compile\n     those with the unfolding flags.\n\u003c/li\u003e\u003cli\u003e Repa writes to the GHC eventlog at the start and end of  each parallel computation.\n     Use threadscope to see what your program is doing.\n\u003c/li\u003e\u003cli\u003e When you're sure your program works, switch to the unsafe versions\n     of functions like \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e. These don't do bounds checks.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e\u003cem\u003eChanges for Repa 3.2:\u003c/em\u003e\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Renamed some Repa 3.1 type classes to have more intuitive names: \n     \u003ccode\u003eRepr\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eFill\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eFillable\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTarget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eCombine\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Also renamed \u003ccode\u003eMArray\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eMVec\u003c/a\u003e\u003c/code\u003e to emphasise its linear structure.\n\u003c/li\u003e\u003cli\u003e Made \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMVec\u003c/a\u003e\u003c/code\u003e associated types of \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTarget\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/li\u003e\u003cli\u003e Added the \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e (Smallness) and \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e (Interleave) hints.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa",
          "name": "Repa",
          "package": "repa",
          "source": "src/Data-Array-Repa.html",
          "type": "module"
        },
        "index": {
          "description": "Repa arrays are wrappers around linear structure that holds the element data The representation tag determines what structure holds the data Delayed Representations functions that compute elements Functions from indices to elements Cursor functions Manifest Representations real data Adaptive unboxed vectors Boxed vectors Strict ByteStrings Foreign memory buffers Meta Representations Arrays that are partitioned into several representations Hints that computing this array is small amount of work so computation should be sequential rather than parallel to avoid scheduling overheads Hints that computing this array will be an unbalanced workload so computation of successive elements should be interleaved between the processors Arrays whose elements are all undefined Array fusion is achieved via the delayed and cursored representations At compile time the GHC simplifier combines the functions contained within and arrays without needing to create manifest intermediate arrays Advice for writing fast code Repa does not support nested parallellism This means that you cannot map parallel worker function across an array and then call computeP to evaluate it or pass parallel worker to parallel reductions such as foldP If you do then you will get run-time warning and the code will run very slowly Arrays of type Array sh or Array sh are not real arrays They are represented as functions that compute each element on demand You need to use computeS computeP computeUnboxedP and so on to actually evaluate the elements Add INLINE pragmas to all leaf-functions in your code expecially ones that compute numeric results Non-inlined lazy function calls can cost upwards of cycles each while each numeric operator only costs one or less Inlining leaf functions also ensures they are specialised at the appropriate numeric types Add bang patterns to all function arguments and all fields of your data types In high-performance Haskell program the cost of lazy evaluation can easily dominate the run time if not handled correctly You don want to rely on the strictness analyser in numeric code because if it does not return perfect result then the performance of your program will be awful This is less of problem for general Haskell code and in different context relying on strictness analysis is fine Scheduling an thread parallel computation can take us on Linux machine You should switch to sequential evaluation functions like computeS and foldS for small arrays in inner loops and at the bottom of divide-and-conquer algorithm Consider using computeP that evaluates an array defined using computeS or foldS for each element Compile the modules that use Repa with the following flags Odph rtsopts threaded fno-liberate-case funfolding-use-threshold1000 funfolding-keeness-factor1000 fllvm optlo-O3 You don want the liberate-case transform because it tends to duplicate too much intermediate code and is not needed if you use bang patterns as per point The unfolding flags tell the inliner to not to fool around with heuristics and just inline everything If the binaries become too big then split the array part of your program into separate modules and only compile those with the unfolding flags Repa writes to the GHC eventlog at the start and end of each parallel computation Use threadscope to see what your program is doing When you re sure your program works switch to the unsafe versions of functions like traverse These don do bounds checks Changes for Repa Renamed some Repa type classes to have more intuitive names Repr Source Fill Load Fillable Target Combine Structured Also renamed MArray MVec to emphasise its linear structure Made Array and MVec associated types of Source and Target respectively Added the Smallness and Interleave hints",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "Repa",
          "package": "repa",
          "partial": "Repa",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed arrays are represented as functions from the index to element value.\n\u003c/p\u003e\u003cp\u003eEvery time you index into a delayed array the element at that position \n   is recomputed.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "D",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Delayed.html#D",
          "type": "data"
        },
        "index": {
          "description": "Delayed arrays are represented as functions from the index to element value Every time you index into delayed array the element at that position is recomputed",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "D",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of array representations that we can read elements from.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "Source",
          "package": "repa",
          "source": "src/Data-Array-Repa-Base.html#Source",
          "type": "class"
        },
        "index": {
          "description": "Class of array representations that we can read elements from",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "Source",
          "package": "repa",
          "partial": "Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured versions of \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003ezipWith\u003c/code\u003e that preserve the representation\n   of cursored and partitioned arrays. \n\u003c/p\u003e\u003cp\u003eFor cursored (\u003ccode\u003eC\u003c/code\u003e) arrays, the cursoring of the source array is preserved.\n\u003c/p\u003e\u003cp\u003eFor partitioned (\u003ccode\u003eP\u003c/code\u003e) arrays, the worker function is fused with each array\n   partition separately, instead of treating the whole array as a single\n   bulk object. \n\u003c/p\u003e\u003cp\u003ePreserving the cursored and/or paritioned representation of an array \n   is will make follow-on computation more efficient than if the array was\n   converted to a vanilla Delayed (\u003ccode\u003eD\u003c/code\u003e) array as with plain \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the source array is not cursored or partitioned then \u003ccode\u003e\u003ca\u003esmap\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eszipWith\u003c/a\u003e\u003c/code\u003e are identical to the plain functions.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "Structured",
          "package": "repa",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#Structured",
          "type": "class"
        },
        "index": {
          "description": "Structured versions of map and zipWith that preserve the representation of cursored and partitioned arrays For cursored arrays the cursoring of the source array is preserved For partitioned arrays the worker function is fused with each array partition separately instead of treating the whole array as single bulk object Preserving the cursored and or paritioned representation of an array is will make follow-on computation more efficient than if the array was converted to vanilla Delayed array as with plain map and zipWith If the source array is not cursored or partitioned then smap and szipWith are identical to the plain functions",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "Structured",
          "package": "repa",
          "partial": "Structured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#t:Structured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnboxed arrays are represented as unboxed vectors.\n\u003c/p\u003e\u003cp\u003eThe implementation uses \u003ccode\u003eData.Vector.Unboxed\u003c/code\u003e which is based on type\n   families and picks an efficient, specialised representation for every\n   element type. In particular, unboxed vectors of pairs are represented\n   as pairs of unboxed vectors.\n   This is the most efficient representation for numerical data.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "U",
          "package": "repa",
          "source": "src/Data-Array-Repa-Repr-Unboxed.html#U",
          "type": "data"
        },
        "index": {
          "description": "Unboxed arrays are represented as unboxed vectors The implementation uses Data.Vector.Unboxed which is based on type families and picks an efficient specialised representation for every element type In particular unboxed vectors of pairs are represented as pairs of unboxed vectors This is the most efficient representation for numerical data",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "U",
          "package": "repa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Alias for \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "(!)",
          "package": "repa",
          "signature": "Array r sh e -\u003e sh -\u003e e",
          "source": "src/Data-Array-Repa-Base.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Alias for index",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "(!) !",
          "normalized": "Array a b c-\u003eb-\u003ec",
          "package": "repa",
          "signature": "Array r sh e-\u003esh-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure an array's data structure is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "deepSeqArray",
          "package": "repa",
          "signature": "Array r sh e -\u003e b -\u003e b",
          "source": "src/Data-Array-Repa-Base.html#deepSeqArray",
          "type": "method"
        },
        "index": {
          "description": "Ensure an array data structure is fully evaluated",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "deepSeqArray",
          "normalized": "Array a b c-\u003ed-\u003ed",
          "package": "repa",
          "partial": "Seq Array",
          "signature": "Array r sh e-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:deepSeqArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003edeepSeqArray\u003c/a\u003e\u003c/code\u003e to up to four arrays. \n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "deepSeqArrays",
          "package": "repa",
          "signature": "[Array r sh e] -\u003e b -\u003e b",
          "source": "src/Data-Array-Repa-Base.html#deepSeqArrays",
          "type": "function"
        },
        "index": {
          "description": "Apply deepSeqArray to up to four arrays",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "deepSeqArrays",
          "normalized": "[Array a b c]-\u003ed-\u003ed",
          "package": "repa",
          "partial": "Seq Arrays",
          "signature": "[Array r sh e]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:deepSeqArrays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the extent (size) of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "extent",
          "package": "repa",
          "signature": "Array r sh e -\u003e sh",
          "source": "src/Data-Array-Repa-Base.html#extent",
          "type": "method"
        },
        "index": {
          "description": "Take the extent size of an array",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "extent",
          "normalized": "Array a b c-\u003eb",
          "package": "repa",
          "signature": "Array r sh e-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:extent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Shape polymorphic indexing.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "index",
          "package": "repa",
          "signature": "Array r sh e -\u003e sh -\u003e e",
          "source": "src/Data-Array-Repa-Base.html#index",
          "type": "method"
        },
        "index": {
          "description": "Shape polymorphic indexing",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "index",
          "normalized": "Array a b c-\u003eb-\u003ec",
          "package": "repa",
          "signature": "Array r sh e-\u003esh-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Linear indexing into underlying, row-major, array representation.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "linearIndex",
          "package": "repa",
          "signature": "Array r sh e -\u003e Int -\u003e e",
          "source": "src/Data-Array-Repa-Base.html#linearIndex",
          "type": "method"
        },
        "index": {
          "description": "Linear indexing into underlying row-major array representation",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "linearIndex",
          "normalized": "Array a b c-\u003eInt-\u003ec",
          "package": "repa",
          "partial": "Index",
          "signature": "Array r sh e-\u003eInt-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:linearIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured \u003ccode\u003emap\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "smap",
          "package": "repa",
          "signature": "(a -\u003e b) -\u003e Array r1 sh a -\u003e Array (TR r1) sh b",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#smap",
          "type": "method"
        },
        "index": {
          "description": "Structured map",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "smap",
          "normalized": "(a-\u003eb)-\u003eArray c d a-\u003eArray(TR c)d b",
          "package": "repa",
          "signature": "(a-\u003eb)-\u003eArray r sh a-\u003eArray(TR r)sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:smap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured \u003ccode\u003ezipWith\u003c/code\u003e.\n   If you have a cursored or partitioned source array then use that as\n   the third argument (corresponding to \u003ccode\u003er1\u003c/code\u003e here)\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "szipWith",
          "package": "repa",
          "signature": "(c -\u003e a -\u003e b) -\u003e Array r sh c -\u003e Array r1 sh a -\u003e Array (TR r1) sh b",
          "source": "src/Data-Array-Repa-Operators-Mapping.html#szipWith",
          "type": "method"
        },
        "index": {
          "description": "Structured zipWith If you have cursored or partitioned source array then use that as the third argument corresponding to r1 here",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "szipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eArray d e a-\u003eArray d e b-\u003eArray(TR d)e c",
          "package": "repa",
          "partial": "With",
          "signature": "(c-\u003ea-\u003eb)-\u003eArray r sh c-\u003eArray r sh a-\u003eArray(TR r)sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:szipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert an array to a list.\n\u003c/p\u003e",
          "module": "Data.Array.Repa",
          "name": "toList",
          "package": "repa",
          "signature": "Array r sh e -\u003e [e]",
          "source": "src/Data-Array-Repa-Base.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert an array to list",
          "hierarchy": "Data Array Repa",
          "module": "Data.Array.Repa",
          "name": "toList",
          "normalized": "Array a b c-\u003e[c]",
          "package": "repa",
          "partial": "List",
          "signature": "Array r sh e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa/docs/Data-Array-Repa.html#v:toList"
      }
    }
  ]
]