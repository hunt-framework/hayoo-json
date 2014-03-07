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
        "word": "peano-inf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Number.Peano.Inf.Functions",
          "name": "Functions",
          "package": "peano-inf",
          "source": "src/Number-Peano-Inf-Functions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "Functions",
          "package": "peano-inf",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazyness properties of \u003ccode\u003eNat\u003c/code\u003e makes it ideal for lazy list length computation. \nExamples:\n\u003c/p\u003e\u003cpre\u003e length [1..] \u003e 100\n\u003c/pre\u003e\u003cpre\u003e length undefined \u003e= 0\n\u003c/pre\u003e\u003cpre\u003e length (undefined: undefined) \u003e= 1\n\u003c/pre\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "length",
          "package": "peano-inf",
          "signature": "[a] -\u003e Nat",
          "source": "src/Number-Peano-Inf-Functions.html#length",
          "type": "function"
        },
        "index": {
          "description": "Lazyness properties of Nat makes it ideal for lazy list length computation Examples length length undefined length undefined undefined",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "length",
          "normalized": "[a]-\u003eNat",
          "package": "peano-inf",
          "signature": "[a]-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum of the list elements.\nWorks also for empty lists.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "maximum",
          "package": "peano-inf",
          "signature": "[Nat] -\u003e Nat",
          "source": "src/Number-Peano-Inf-Functions.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Maximum of the list elements Works also for empty lists",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "maximum",
          "normalized": "[Nat]-\u003eNat",
          "package": "peano-inf",
          "signature": "[Nat]-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum of the list elements.\nWorks also for empty lists.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "minimum",
          "package": "peano-inf",
          "signature": "[Nat] -\u003e Nat",
          "source": "src/Number-Peano-Inf-Functions.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Minimum of the list elements Works also for empty lists",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "minimum",
          "normalized": "[Nat]-\u003eNat",
          "package": "peano-inf",
          "signature": "[Nat]-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank computation with lazy Peano numbers.\n\u003c/p\u003e\u003cp\u003eThe dependence function represents a graph with multiedges (edges with multiple start nodes).\n\u003ccode\u003edependence n\u003c/code\u003e is the list of the start nodes of all multiedges whose end node is \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003enodeRank n\u003c/code\u003e computes the length of the shortest path to \u003ccode\u003en\u003c/code\u003e. Note that if \u003ccode\u003en\u003c/code\u003e is an end point of a multiedge with no start point,\nthen \u003ccode\u003enodeRank n == 0\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003eany null (dependence n)\u003c/code\u003e then \u003ccode\u003enodeRank n == 0\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Otherwise \u003ccode\u003enodeRank n == 1 + minimum [maximum (map nodeRank l1), maximum (map nodeRank l2), ..] where \u003c/code\u003e[l1, l2, ..] == dependence n\u003ccode\u003e if this is computable.\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Otherwise the rank is \u003ccode\u003einfinity\u003c/code\u003e. (These cases are observable.)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRank",
          "package": "peano-inf",
          "signature": "(n -\u003e [[n]])-\u003e n-\u003e Nat",
          "type": "function"
        },
        "index": {
          "description": "Rank computation with lazy Peano numbers The dependence function represents graph with multiedges edges with multiple start nodes dependence is the list of the start nodes of all multiedges whose end node is nodeRank computes the length of the shortest path to Note that if is an end point of multiedge with no start point then nodeRank If any null dependence then nodeRank Otherwise nodeRank minimum maximum map nodeRank l1 maximum map nodeRank l2 where l1 l2 dependence if this is computable Otherwise the rank is infinity These cases are observable",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRank",
          "normalized": "(a-\u003e[[a]])-\u003ea-\u003eNat",
          "package": "peano-inf",
          "partial": "Rank",
          "signature": "(n-\u003e[[n]])-\u003en-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:nodeRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoising version of \u003ccode\u003enodeRank\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe rank of inaccessable nodes are \u003ccode\u003einductive_infinity\u003c/code\u003e.\nThese cases are observable with the predicate \u003ccode\u003e(\u003e n)\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is an upper bound for the number of nodes in the graph.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRankMemo",
          "package": "peano-inf",
          "signature": "(n -\u003e [[n]])-\u003e (n -\u003e Nat)-\u003e n -\u003e Nat",
          "type": "function"
        },
        "index": {
          "description": "Memoising version of nodeRank The rank of inaccessable nodes are inductive infinity These cases are observable with the predicate where is an upper bound for the number of nodes in the graph",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRankMemo",
          "normalized": "(a-\u003e[[a]])-\u003e(a-\u003eNat)-\u003ea-\u003eNat",
          "package": "peano-inf",
          "partial": "Rank Memo",
          "signature": "(n-\u003e[[n]])-\u003e(n-\u003eNat)-\u003en-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:nodeRankMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enodeRankMemo\u003c/code\u003e specialised for integral types.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRankMemoIntegral",
          "package": "peano-inf",
          "signature": "(a -\u003e [[a]])-\u003e a-\u003e Nat",
          "type": "function"
        },
        "index": {
          "description": "nodeRankMemo specialised for integral types",
          "hierarchy": "Number Peano Inf Functions",
          "module": "Number.Peano.Inf.Functions",
          "name": "nodeRankMemoIntegral",
          "normalized": "(a-\u003e[[a]])-\u003ea-\u003eNat",
          "package": "peano-inf",
          "partial": "Rank Memo Integral",
          "signature": "(a-\u003e[[a]])-\u003ea-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Functions.html#v:nodeRankMemoIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYou can find the properties in the source code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Number.Peano.Inf.Test",
          "name": "Test",
          "package": "peano-inf",
          "source": "src/Number-Peano-Inf-Test.html",
          "type": "module"
        },
        "index": {
          "description": "You can find the properties in the source code",
          "hierarchy": "Number Peano Inf Test",
          "module": "Number.Peano.Inf.Test",
          "name": "Test",
          "package": "peano-inf",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Number.Peano.Inf.Test",
          "name": "test",
          "package": "peano-inf",
          "signature": "IO ()",
          "source": "src/Number-Peano-Inf-Test.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Number Peano Inf Test",
          "module": "Number.Peano.Inf.Test",
          "name": "test",
          "normalized": "IO()",
          "package": "peano-inf",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf-Test.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy Peano numbers including observable infinity value.\n\u003c/p\u003e\u003cp\u003eProperties of \u003ccode\u003eNat\u003c/code\u003e can be found in the source of \u003ca\u003eNumber.Peano.Inf.Test\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Number.Peano.Inf",
          "name": "Inf",
          "package": "peano-inf",
          "source": "src/Number-Peano-Inf.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy Peano numbers including observable infinity value Properties of Nat can be found in the source of Number.Peano.Inf.Test",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "Inf",
          "package": "peano-inf",
          "partial": "Inf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural numbers and infinity.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf",
          "name": "Nat",
          "package": "peano-inf",
          "source": "src/Number-Peano-Inf.html#Nat",
          "type": "data"
        },
        "index": {
          "description": "Natural numbers and infinity",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "Nat",
          "package": "peano-inf",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-negative subtraction. For example, \u003ccode\u003e5 -| 8  ==  0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf",
          "name": "(-|)",
          "package": "peano-inf",
          "signature": "Nat -\u003e Nat -\u003e Nat",
          "source": "src/Number-Peano-Inf.html#-%7C",
          "type": "function"
        },
        "index": {
          "description": "Non-negative subtraction For example",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "(-|) -|",
          "normalized": "Nat-\u003eNat-\u003eNat",
          "package": "peano-inf",
          "signature": "Nat-\u003eNat-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference of two natural numbers: the result is either positive or negative.\n\u003c/p\u003e\u003cp\u003eThe following value is undefined:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ediff infinity infinity\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Number.Peano.Inf",
          "name": "diff",
          "package": "peano-inf",
          "signature": "Nat-\u003e Nat-\u003e Either Nat Nat",
          "type": "function"
        },
        "index": {
          "description": "Difference of two natural numbers the result is either positive or negative The following value is undefined diff infinity infinity",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "diff",
          "normalized": "Nat-\u003eNat-\u003eEither Nat Nat",
          "package": "peano-inf",
          "signature": "Nat-\u003eNat-\u003eEither Nat Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraditional infinity value: \u003ccode\u003elet n = Succ n in n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003einfinity\u003c/code\u003e is equal to \u003ccode\u003einductive_infinity\u003c/code\u003e but \u003ccode\u003einfinity\u003c/code\u003e is lazier.\nIn other words:\nFor every function \u003ccode\u003ef :: Nat -\u003e Bool\u003c/code\u003e, either \u003ccode\u003ef inductive_infinity\u003c/code\u003e is bottom or \u003ccode\u003ef inductive_infinity\u003c/code\u003e is equal to \u003ccode\u003ef infinity\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf",
          "name": "inductive_infinity",
          "package": "peano-inf",
          "signature": "Nat",
          "source": "src/Number-Peano-Inf.html#inductive_infinity",
          "type": "function"
        },
        "index": {
          "description": "Traditional infinity value let Succ in infinity is equal to inductive infinity but infinity is lazier In other words For every function Nat Bool either inductive infinity is bottom or inductive infinity is equal to infinity",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "inductive_infinity",
          "package": "peano-inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:inductive_infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003ediff\u003c/code\u003e: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003einfDiff infinity infinity  ==  Left infinity\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Number.Peano.Inf",
          "name": "infDiff",
          "package": "peano-inf",
          "signature": "Nat -\u003e Nat -\u003e Either Nat Nat",
          "source": "src/Number-Peano-Inf.html#infDiff",
          "type": "function"
        },
        "index": {
          "description": "Variant of diff infDiff infinity infinity Left infinity",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "infDiff",
          "normalized": "Nat-\u003eNat-\u003eEither Nat Nat",
          "package": "peano-inf",
          "partial": "Diff",
          "signature": "Nat-\u003eNat-\u003eEither Nat Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:infDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObservable infinity value.\n\u003c/p\u003e",
          "module": "Number.Peano.Inf",
          "name": "infinity",
          "package": "peano-inf",
          "signature": "Nat",
          "source": "src/Number-Peano-Inf.html#infinity",
          "type": "function"
        },
        "index": {
          "description": "Observable infinity value",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "infinity",
          "package": "peano-inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003ediff\u003c/code\u003e: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ezeroDiff infinity infinity  ==  Left 0\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Number.Peano.Inf",
          "name": "zeroDiff",
          "package": "peano-inf",
          "signature": "Nat -\u003e Nat -\u003e Either Nat Nat",
          "source": "src/Number-Peano-Inf.html#zeroDiff",
          "type": "function"
        },
        "index": {
          "description": "Variant of diff zeroDiff infinity infinity Left",
          "hierarchy": "Number Peano Inf",
          "module": "Number.Peano.Inf",
          "name": "zeroDiff",
          "normalized": "Nat-\u003eNat-\u003eEither Nat Nat",
          "package": "peano-inf",
          "partial": "Diff",
          "signature": "Nat-\u003eNat-\u003eEither Nat Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peano-inf/docs/Number-Peano-Inf.html#v:zeroDiff"
      }
    }
  ]
]