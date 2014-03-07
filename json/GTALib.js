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
        "word": "GTALib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the core functionalities of the GTA (Generate, Test, and Aggregate) programming framework on Haskell (c.f., Kento Emoto, Sebastian Fischer, Zhenjiang Hu: Generate, Test, and Aggregate - A Calculation-based Framework for Systematic Parallel Programming with MapReduce. ESOP 2012: 254-273. The authors' version is available at \u003ca\u003ehttp://www.ipl-lab.org/~emoto/ESOP2012.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample of GTA program\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe following code is a GTA program to solve the 0-1 Knapsack problem (\u003ca\u003ehttp://en.wikipedia.org/wiki/Knapsack_problem\u003c/a\u003e). It \u003cem\u003eappears to be an exponential cost\u003c/em\u003e proram in the number of input items, because it appears to generate all item selections by \u003ccode\u003esubsP items\u003c/code\u003e (\u003cem\u003eGenerate\u003c/em\u003e), discard those with total weight heavier than the knapsack's capacity by \u003ccode\u003e\u003ccode\u003e\u003ca\u003efilterBy\u003c/a\u003e\u003c/code\u003e weightlimit capacity\u003c/code\u003e (\u003cem\u003eTest\u003c/em\u003e), and take the most valuable selection by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaggregateBy\u003c/a\u003e\u003c/code\u003e maxsumsolutionWith getValue\u003c/code\u003e (\u003cem\u003eAggregate\u003c/em\u003e). However, it \u003cem\u003eactually runs in a linear time\u003c/em\u003e owing to our proposed program transformation 'Filter-embedding Semiring Fusion' implemented in the library. In addition, it runs in \u003cem\u003eparallel\u003c/em\u003e so that you can get linear speedup. The predicate \u003ccode\u003eweightlimit\u003c/code\u003e is defined based on the join list algebra given in \u003ca\u003eGTA.Data.JoinList\u003c/a\u003e module. \n\u003c/p\u003e\u003cpre\u003e knapsack capacity items = \n  subsP items \n  `filterBy` weightlimit capacity\n  `aggregateBy` maxsumsolutionWith getValue\n \n getValue (_, v) = v\n getWeight (w, _) = w\n\n weightlimit w = (\u003c=w) \u003c.\u003e weightsum where\n   weightsum = homJ' times single nil\n   x1 `times` x2  = (   x1 +    x2) `min` (w+1)\n   single i  = getWeight i `min` (w+1)\n   nil = 0\n\u003c/pre\u003e\u003cp\u003eSeveral example GTA programs are found in \u003cem\u003eexamples\u003c/em\u003e directory at \u003ca\u003ehttps://bitbucket.org/emoto/gtalib/src\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module provides generic functionalities in the GTA programming framework. Data-strructure-dependent definitions are found in GTA.Data.* modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Core",
          "name": "Core",
          "package": "GTALib",
          "source": "src/GTA-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the core functionalities of the GTA Generate Test and Aggregate programming framework on Haskell c.f Kento Emoto Sebastian Fischer Zhenjiang Hu Generate Test and Aggregate Calculation-based Framework for Systematic Parallel Programming with MapReduce ESOP The authors version is available at http www.ipl-lab.org emoto ESOP2012.pdf Example of GTA program The following code is GTA program to solve the Knapsack problem http en.wikipedia.org wiki Knapsack problem It appears to be an exponential cost proram in the number of input items because it appears to generate all item selections by subsP items Generate discard those with total weight heavier than the knapsack capacity by filterBy weightlimit capacity Test and take the most valuable selection by aggregateBy maxsumsolutionWith getValue Aggregate However it actually runs in linear time owing to our proposed program transformation Filter-embedding Semiring Fusion implemented in the library In addition it runs in parallel so that you can get linear speedup The predicate weightlimit is defined based on the join list algebra given in GTA.Data.JoinList module knapsack capacity items subsP items filterBy weightlimit capacity aggregateBy maxsumsolutionWith getValue getValue getWeight weightlimit weightsum where weightsum homJ times single nil x1 times x2 x1 x2 min single getWeight min nil Several example GTA programs are found in examples directory at https bitbucket.org emoto gtalib src This module provides generic functionalities in the GTA programming framework Data-strructure-dependent definitions are found in GTA.Data modules",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "Core",
          "package": "GTALib",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces an identity \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e to a given type. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "AddIdentity",
          "package": "GTALib",
          "source": "src/GTA-Core.html#AddIdentity",
          "type": "data"
        },
        "index": {
          "description": "Introduces an identity Identity to given type",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "AddIdentity",
          "package": "GTALib",
          "partial": "Add Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:AddIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bag is a multiset, i.e., a set in which members are allowed to appear more than one. The order of memebrs is ignored: e.g., \u003ccode\u003eBag [1,2] == Bag [2,1]\u003c/code\u003e is True. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "Bag",
          "package": "GTALib",
          "source": "src/GTA-Core.html#Bag",
          "type": "data"
        },
        "index": {
          "description": "bag is multiset i.e set in which members are allowed to appear more than one The order of memebrs is ignored e.g Bag Bag is True",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "Bag",
          "package": "GTALib",
          "partial": "Bag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:Bag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommutative monoid is an algebra of an associative, commutative binary operator with its identity. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "CommutativeMonoid",
          "package": "GTALib",
          "source": "src/GTA-Core.html#CommutativeMonoid",
          "type": "data"
        },
        "index": {
          "description": "Commutative monoid is an algebra of an associative commutative binary operator with its identity",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "CommutativeMonoid",
          "package": "GTALib",
          "partial": "Commutative Monoid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:CommutativeMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic semiring is a combination of a commutative monoid and an algebra such that operators of the algebra distributes over \u003ccode\u003e\u003ca\u003eoplus\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e is the zero of the operators. \n\u003c/p\u003e\u003cp\u003eFor example, the usual semiring is a combination of a commutative monoid and a \u003ccode\u003e\u003ca\u003eJoinListAlgebra\u003c/a\u003e\u003c/code\u003e, in which we have the distributivity and the zeroness:\n\u003c/p\u003e\u003cpre\u003e a `times` (b `oplus` c) == (a `times` b) `oplus` (a `times` c)\n (a `oplus` b) `times` c == (a `times` c) `oplus` (b `times` c)\n a `times` identity == identity `times` a == identity\n\u003c/pre\u003e",
          "module": "GTA.Core",
          "name": "GenericSemiring",
          "package": "GTALib",
          "source": "src/GTA-Core.html#GenericSemiring",
          "type": "data"
        },
        "index": {
          "description": "generic semiring is combination of commutative monoid and an algebra such that operators of the algebra distributes over oplus and identity is the zero of the operators For example the usual semiring is combination of commutative monoid and JoinListAlgebra in which we have the distributivity and the zeroness times oplus times oplus times oplus times times oplus times times identity identity times identity",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "GenericSemiring",
          "package": "GTALib",
          "partial": "Generic Semiring",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:GenericSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection of data-structure-dependent definitions necessary for the GTA framework, including the free algebra, lifting of a generic semirig with an algebra, construction of useful algebras, etc. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "GenericSemiringStructure",
          "package": "GTALib",
          "source": "src/GTA-Core.html#GenericSemiringStructure",
          "type": "class"
        },
        "index": {
          "description": "Collection of data-structure-dependent definitions necessary for the GTA framework including the free algebra lifting of generic semirig with an algebra construction of useful algebras etc",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "GenericSemiringStructure",
          "package": "GTALib",
          "partial": "Generic Semiring Structure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:GenericSemiringStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses the order of a given type. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "RevOrd",
          "package": "GTALib",
          "source": "src/GTA-Core.html#RevOrd",
          "type": "data"
        },
        "index": {
          "description": "Reverses the order of given type",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "RevOrd",
          "package": "GTALib",
          "partial": "Rev Ord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:RevOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator to build a pair of a judgement function and an algebra, which represents a Tester. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003c.\u003e)",
          "package": "GTALib",
          "signature": "forall alg a b.  (b -\u003e Bool) -\u003e alg b -\u003e (b -\u003e Bool, alg b)",
          "source": "src/GTA-Core.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Operator to build pair of judgement function and an algebra which represents Tester",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "a b c d(e-\u003eBool)-\u003eb e-\u003e(e-\u003eBool,b e)",
          "package": "GTALib",
          "signature": "forall alg a b.(b-\u003eBool)-\u003ealg b-\u003e(b-\u003eBool,alg b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInefficient version of \u003ccode\u003e\u003ca\u003e\u003e==\u003c/a\u003e\u003c/code\u003e (i.e., it does not do optimziation at all). \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003e##)",
          "package": "GTALib",
          "signature": "(GenericSemiring alg (Bag free) -\u003e Bag free) -\u003e (b -\u003e Bool, alg b) -\u003e GenericSemiring alg (Bag free) -\u003e Bag free",
          "source": "src/GTA-Core.html#%3E%23%23",
          "type": "function"
        },
        "index": {
          "description": "Inefficient version of i.e it does not do optimziation at all",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003e##) \u003e##",
          "normalized": "(GenericSemiring a(Bag b)-\u003eBag b)-\u003e(c-\u003eBool,a c)-\u003eGenericSemiring a(Bag b)-\u003eBag b",
          "package": "GTALib",
          "signature": "(GenericSemiring alg(Bag free)-\u003eBag free)-\u003e(b-\u003eBool,alg b)-\u003eGenericSemiring alg(Bag free)-\u003eBag free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--35--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInefficient version of \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e (i.e., it does not do optimziation at all). \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003e#\u003e)",
          "package": "GTALib",
          "signature": "(GenericSemiring alg (Bag free) -\u003e Bag free) -\u003e GenericSemiring alg a -\u003e a",
          "source": "src/GTA-Core.html#%3E%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Inefficient version of i.e it does not do optimziation at all",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003e#\u003e) \u003e#\u003e",
          "normalized": "(GenericSemiring a(Bag b)-\u003eBag b)-\u003eGenericSemiring a c-\u003ec",
          "package": "GTALib",
          "signature": "(GenericSemiring alg(Bag free)-\u003eBag free)-\u003eGenericSemiring alg a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for transforming a generator by a transformer. A transformer is an aggregator polymorphic over another generic semiring. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003e=\u003c)",
          "package": "GTALib",
          "signature": "(GenericSemiring alg' c -\u003e c) -\u003e (GenericSemiring alg c -\u003e GenericSemiring alg' c) -\u003e GenericSemiring alg c -\u003e c",
          "source": "src/GTA-Core.html#%3E%3D%3C",
          "type": "function"
        },
        "index": {
          "description": "Combinator for transforming generator by transformer transformer is an aggregator polymorphic over another generic semiring",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003e=\u003c) \u003e=\u003c",
          "normalized": "(GenericSemiring a b-\u003eb)-\u003e(GenericSemiring c b-\u003eGenericSemiring a b)-\u003eGenericSemiring c b-\u003eb",
          "package": "GTALib",
          "signature": "(GenericSemiring alg' c-\u003ec)-\u003e(GenericSemiring alg c-\u003eGenericSemiring alg' c)-\u003eGenericSemiring alg c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for connecting a generator and a filter to build another generator. A fitler is represented by a pair of a judgement function and an algebra. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003e==)",
          "package": "GTALib",
          "signature": "(GenericSemiring alg (Map c b) -\u003e Map k b) -\u003e (k -\u003e Bool, alg c) -\u003e GenericSemiring alg b -\u003e b",
          "source": "src/GTA-Core.html#%3E%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Combinator for connecting generator and filter to build another generator fitler is represented by pair of judgement function and an algebra",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003e==) \u003e==",
          "normalized": "(GenericSemiring a(Map b c)-\u003eMap d c)-\u003e(d-\u003eBool,a b)-\u003eGenericSemiring a c-\u003ec",
          "package": "GTALib",
          "signature": "(GenericSemiring alg(Map c b)-\u003eMap k b)-\u003e(k-\u003eBool,alg c)-\u003eGenericSemiring alg b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for connecting a generator and an aggregator to get the result. An aggregator is represented by a generic semiring. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "(\u003e=\u003e)",
          "package": "GTALib",
          "signature": "(GenericSemiring alg b -\u003e b) -\u003e GenericSemiring alg b -\u003e b",
          "source": "src/GTA-Core.html#%3E%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Combinator for connecting generator and an aggregator to get the result An aggregator is represented by generic semiring",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(GenericSemiring a b-\u003eb)-\u003eGenericSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "(GenericSemiring alg b-\u003eb)-\u003eGenericSemiring alg b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "AddIdentity",
          "package": "GTALib",
          "signature": "AddIdentity a",
          "source": "src/GTA-Core.html#AddIdentity",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "AddIdentity",
          "package": "GTALib",
          "partial": "Add Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:AddIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "Bag",
          "package": "GTALib",
          "signature": "Bag [a]",
          "source": "src/GTA-Core.html#Bag",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "Bag",
          "normalized": "Bag[a]",
          "package": "GTALib",
          "partial": "Bag",
          "signature": "Bag[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:Bag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "CommutativeMonoid",
          "package": "GTALib",
          "signature": "CommutativeMonoid",
          "source": "src/GTA-Core.html#CommutativeMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "CommutativeMonoid",
          "package": "GTALib",
          "partial": "Commutative Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:CommutativeMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "GenericSemiring",
          "package": "GTALib",
          "signature": "GenericSemiring",
          "source": "src/GTA-Core.html#GenericSemiring",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "GenericSemiring",
          "package": "GTALib",
          "partial": "Generic Semiring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:GenericSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "Identity",
          "package": "GTALib",
          "signature": "Identity",
          "source": "src/GTA-Core.html#AddIdentity",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "Identity",
          "package": "GTALib",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "RevOrd",
          "package": "GTALib",
          "signature": "RevOrd a",
          "source": "src/GTA-Core.html#RevOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "RevOrd",
          "package": "GTALib",
          "partial": "Rev Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:RevOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces an identity. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "addIdentity",
          "package": "GTALib",
          "signature": "forall a.  a -\u003e AddIdentity a",
          "source": "src/GTA-Core.html#addIdentity",
          "type": "function"
        },
        "index": {
          "description": "Introduces an identity",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "addIdentity",
          "normalized": "a b c-\u003eAddIdentity c",
          "package": "GTALib",
          "partial": "Identity",
          "signature": "forall a. a-\u003eAddIdentity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:addIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "aggregateBy",
          "package": "GTALib",
          "signature": "(GenericSemiring alg b -\u003e b) -\u003e GenericSemiring alg b -\u003e b",
          "source": "src/GTA-Core.html#aggregateBy",
          "type": "function"
        },
        "index": {
          "description": "The same as",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "aggregateBy",
          "normalized": "(GenericSemiring a b-\u003eb)-\u003eGenericSemiring a b-\u003eb",
          "package": "GTALib",
          "partial": "By",
          "signature": "(GenericSemiring alg b-\u003eb)-\u003eGenericSemiring alg b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:aggregateBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "algebra",
          "package": "GTALib",
          "signature": "alg a",
          "source": "src/GTA-Core.html#GenericSemiring",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "algebra",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a bag that contains the given memebrs. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "bag",
          "package": "GTALib",
          "signature": "forall a.  [a] -\u003e Bag a",
          "source": "src/GTA-Core.html#bag",
          "type": "function"
        },
        "index": {
          "description": "Makes bag that contains the given memebrs",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "bag",
          "normalized": "a b[c]-\u003eBag c",
          "package": "GTALib",
          "signature": "forall a.[a]-\u003eBag a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:bag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e==\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "filterBy",
          "package": "GTALib",
          "signature": "(GenericSemiring alg (Map c b) -\u003e Map k b) -\u003e (k -\u003e Bool, alg c) -\u003e GenericSemiring alg b -\u003e b",
          "source": "src/GTA-Core.html#filterBy",
          "type": "function"
        },
        "index": {
          "description": "The same as",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "filterBy",
          "normalized": "(GenericSemiring a(Map b c)-\u003eMap d c)-\u003e(d-\u003eBool,a b)-\u003eGenericSemiring a c-\u003ec",
          "package": "GTALib",
          "partial": "By",
          "signature": "(GenericSemiring alg(Map c b)-\u003eMap k b)-\u003e(k-\u003eBool,alg c)-\u003eGenericSemiring alg b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:filterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "foldingAlgebra",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e uniformer a -\u003e alg a",
          "source": "src/GTA-Core.html#foldingAlgebra",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "foldingAlgebra",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ec a",
          "package": "GTALib",
          "partial": "Algebra",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003euniformer a-\u003ealg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:foldingAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "freeAlgebra",
          "package": "GTALib",
          "signature": "alg free",
          "source": "src/GTA-Core.html#freeAlgebra",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "freeAlgebra",
          "package": "GTALib",
          "partial": "Algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:freeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "freeSemiring",
          "package": "GTALib",
          "signature": "GenericSemiring alg (Bag free)",
          "source": "src/GTA-Core.html#freeSemiring",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "freeSemiring",
          "package": "GTALib",
          "partial": "Semiring",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:freeSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "hom",
          "package": "GTALib",
          "signature": "alg a -\u003e free -\u003e a",
          "source": "src/GTA-Core.html#hom",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "hom",
          "normalized": "a b-\u003ec-\u003eb",
          "package": "GTALib",
          "signature": "alg a-\u003efree-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:hom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "identity",
          "package": "GTALib",
          "signature": "a",
          "source": "src/GTA-Core.html#CommutativeMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "identity",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts members from a bag. The order of members is undecidable. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "items",
          "package": "GTALib",
          "signature": "Bag a -\u003e [a]",
          "source": "src/GTA-Core.html#items",
          "type": "function"
        },
        "index": {
          "description": "Extracts members from bag The order of members is undecidable",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "items",
          "normalized": "Bag a-\u003e[a]",
          "package": "GTALib",
          "signature": "Bag a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "liftedSemiring",
          "package": "GTALib",
          "signature": "GenericSemiring alg a -\u003e alg c -\u003e GenericSemiring alg (Map c a)",
          "source": "src/GTA-Core.html#liftedSemiring",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "liftedSemiring",
          "normalized": "GenericSemiring a b-\u003ea c-\u003eGenericSemiring a(Map c b)",
          "package": "GTALib",
          "partial": "Semiring",
          "signature": "GenericSemiring alg a-\u003ealg c-\u003eGenericSemiring alg(Map c a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:liftedSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "makeAlgebra",
          "package": "GTALib",
          "signature": "CommutativeMonoid m -\u003e alg a -\u003e (m -\u003e [a]) -\u003e (a -\u003e m) -\u003e alg m",
          "source": "src/GTA-Core.html#makeAlgebra",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "makeAlgebra",
          "normalized": "CommutativeMonoid a-\u003eb c-\u003e(a-\u003e[c])-\u003e(c-\u003ea)-\u003eb a",
          "package": "GTALib",
          "partial": "Algebra",
          "signature": "CommutativeMonoid m-\u003ealg a-\u003e(m-\u003e[a])-\u003e(a-\u003em)-\u003ealg m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:makeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to take the maximum items under a given monotonic sum \u003ccode\u003emplus\u003c/code\u003e with its identity \u003ccode\u003emid\u003c/code\u003e after \u003cem\u003emap\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e c == a `max` b   =\u003e   d `mplus` (a `max` b) == (d `mplus` a) `max` (d `mplus` b)\n\u003c/pre\u003e",
          "module": "GTA.Core",
          "name": "maxMonoSumBy",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
          "source": "src/GTA-Core.html#maxMonoSumBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to take the maximum items under given monotonic sum mplus with its identity mid after map max mplus max mplus max mplus",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxMonoSumBy",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb(AddIdentity a)-\u003eGenericSemiring c(AddIdentity a)",
          "package": "GTALib",
          "partial": "Mono Sum By",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to find the best k maximum items under a given monotonic sum. An extension of \u003ccode\u003e\u003ca\u003emaxMonoSumBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxMonoSumKBy",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
          "source": "src/GTA-Core.html#maxMonoSumKBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to find the best maximum items under given monotonic sum An extension of maxMonoSumBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxMonoSumKBy",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eb(AddIdentity a)-\u003eGenericSemiring c[AddIdentity a]",
          "package": "GTALib",
          "partial": "Mono Sum KBy",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tupling of maxMonoSumBy and a given generic semiring. The second component of the result is the aggregation of the maximum items by the given generaic semiring.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxMonoSumsolutionXBy",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
          "source": "src/GTA-Core.html#maxMonoSumsolutionXBy",
          "type": "function"
        },
        "index": {
          "description": "The tupling of maxMonoSumBy and given generic semiring The second component of the result is the aggregation of the maximum items by the given generaic semiring",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxMonoSumsolutionXBy",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring b c-\u003ed(AddIdentity a)-\u003eGenericSemiring b(AddIdentity a,c)",
          "package": "GTALib",
          "partial": "Mono Sumsolution XBy",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumsolutionXBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxMonoSumsolutionXBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxMonoSumsolutionXKBy",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
          "source": "src/GTA-Core.html#maxMonoSumsolutionXKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxMonoSumsolutionXBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxMonoSumsolutionXKBy",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring b c-\u003eInt-\u003ed(AddIdentity a)-\u003eGenericSemiring b[(AddIdentity a,c)]",
          "package": "GTALib",
          "partial": "Mono Sumsolution XKBy",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumsolutionXKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to take the maximum product on \u003cem\u003enon-negative\u003c/em\u003e numbers.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodBy",
          "package": "GTALib",
          "signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
          "source": "src/GTA-Core.html#maxprodBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to take the maximum product on non-negative numbers",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodBy",
          "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b)",
          "package": "GTALib",
          "partial": "By",
          "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodKBy",
          "package": "GTALib",
          "signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
          "source": "src/GTA-Core.html#maxprodKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodKBy",
          "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[AddIdentity b]",
          "package": "GTALib",
          "partial": "KBy",
          "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to find the items with the maximum product on \u003cem\u003enon-negative\u003c/em\u003e numbers.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodsolutionBy",
          "package": "GTALib",
          "signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, Bag free)",
          "source": "src/GTA-Core.html#maxprodsolutionBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to find the items with the maximum product on non-negative numbers",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodsolutionBy",
          "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b,Bag d)",
          "package": "GTALib",
          "partial": "By",
          "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,Bag free)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodsolutionKBy",
          "package": "GTALib",
          "signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, Bag free)]",
          "source": "src/GTA-Core.html#maxprodsolutionKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodsolutionBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodsolutionKBy",
          "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[(AddIdentity b,Bag d)]",
          "package": "GTALib",
          "partial": "KBy",
          "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,Bag free)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tupling of \u003ccode\u003e\u003ca\u003emaxprodsolutionBy\u003c/a\u003e\u003c/code\u003e and a given generic semiring. The second component of the result is the aggregation of the best items by the given generic emiring.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodsolutionXBy",
          "package": "GTALib",
          "signature": "GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
          "source": "src/GTA-Core.html#maxprodsolutionXBy",
          "type": "function"
        },
        "index": {
          "description": "The tupling of maxprodsolutionBy and given generic semiring The second component of the result is the aggregation of the best items by the given generic emiring",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodsolutionXBy",
          "normalized": "GenericSemiring a b-\u003ec(AddIdentity d)-\u003eGenericSemiring a(AddIdentity d,b)",
          "package": "GTALib",
          "partial": "XBy",
          "signature": "GenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionXBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionXBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxprodsolutionXKBy",
          "package": "GTALib",
          "signature": "GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
          "source": "src/GTA-Core.html#maxprodsolutionXKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodsolutionXBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxprodsolutionXKBy",
          "normalized": "GenericSemiring a b-\u003eInt-\u003ec(AddIdentity d)-\u003eGenericSemiring a[(AddIdentity d,b)]",
          "package": "GTALib",
          "partial": "XKBy",
          "signature": "GenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionXKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to the maximum sum after \u003cem\u003emap\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumBy",
          "package": "GTALib",
          "signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
          "source": "src/GTA-Core.html#maxsumBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to the maximum sum after map",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumBy",
          "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b)",
          "package": "GTALib",
          "partial": "By",
          "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumKBy",
          "package": "GTALib",
          "signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
          "source": "src/GTA-Core.html#maxsumKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumKBy",
          "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[AddIdentity b]",
          "package": "GTALib",
          "partial": "KBy",
          "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003emaxMonoSumsolutionBy\u003c/code\u003e with the usual summation.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumsolutionBy",
          "package": "GTALib",
          "signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, Bag free)",
          "source": "src/GTA-Core.html#maxsumsolutionBy",
          "type": "function"
        },
        "index": {
          "description": "An instance of maxMonoSumsolutionBy with the usual summation",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumsolutionBy",
          "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b,Bag d)",
          "package": "GTALib",
          "partial": "By",
          "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,Bag free)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumsolutionKBy",
          "package": "GTALib",
          "signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, Bag free)]",
          "source": "src/GTA-Core.html#maxsumsolutionKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumsolutionBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumsolutionKBy",
          "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[(AddIdentity b,Bag d)]",
          "package": "GTALib",
          "partial": "KBy",
          "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,Bag free)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003emaxMonoSumsolutionXBy\u003c/a\u003e\u003c/code\u003e with the usual summation.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumsolutionXBy",
          "package": "GTALib",
          "signature": "GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
          "source": "src/GTA-Core.html#maxsumsolutionXBy",
          "type": "function"
        },
        "index": {
          "description": "An instance of maxMonoSumsolutionXBy with the usual summation",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumsolutionXBy",
          "normalized": "GenericSemiring a b-\u003ec(AddIdentity d)-\u003eGenericSemiring a(AddIdentity d,b)",
          "package": "GTALib",
          "partial": "XBy",
          "signature": "GenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionXBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionXBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "maxsumsolutionXKBy",
          "package": "GTALib",
          "signature": "GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
          "source": "src/GTA-Core.html#maxsumsolutionXKBy",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumsolutionXBy",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "maxsumsolutionXKBy",
          "normalized": "GenericSemiring a b-\u003eInt-\u003ec(AddIdentity d)-\u003eGenericSemiring a[(AddIdentity d,b)]",
          "package": "GTALib",
          "partial": "XKBy",
          "signature": "GenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionXKBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "monoid",
          "package": "GTALib",
          "signature": "CommutativeMonoid a",
          "source": "src/GTA-Core.html#GenericSemiring",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "monoid",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "oplus",
          "package": "GTALib",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/GTA-Core.html#CommutativeMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "oplus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "GTALib",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:oplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "pairAlgebra",
          "package": "GTALib",
          "signature": "alg a -\u003e alg b -\u003e alg (a, b)",
          "source": "src/GTA-Core.html#pairAlgebra",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "pairAlgebra",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "GTALib",
          "partial": "Algebra",
          "signature": "alg a-\u003ealg b-\u003ealg(a,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:pairAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "pairSemiring",
          "package": "GTALib",
          "signature": "GenericSemiring alg a -\u003e GenericSemiring alg b -\u003e GenericSemiring alg (a, b)",
          "source": "src/GTA-Core.html#pairSemiring",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "pairSemiring",
          "normalized": "GenericSemiring a b-\u003eGenericSemiring a c-\u003eGenericSemiring a(b,c)",
          "package": "GTALib",
          "partial": "Semiring",
          "signature": "GenericSemiring alg a-\u003eGenericSemiring alg b-\u003eGenericSemiring alg(a,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:pairSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to extract all items generated by a generator. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "result",
          "package": "GTALib",
          "signature": "GenericSemiring alg (Bag free)",
          "source": "src/GTA-Core.html#result",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to extract all items generated by generator",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "result",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses the order of the argument, so that we can use aggregators maxXXX to take the minimum XXX. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "revOrd",
          "package": "GTALib",
          "signature": "forall a.  a -\u003e RevOrd a",
          "source": "src/GTA-Core.html#revOrd",
          "type": "function"
        },
        "index": {
          "description": "Reverses the order of the argument so that we can use aggregators maxXXX to take the minimum XXX",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "revOrd",
          "normalized": "a b c-\u003eRevOrd c",
          "package": "GTALib",
          "partial": "Ord",
          "signature": "forall a. a-\u003eRevOrd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:revOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Core",
          "name": "shom",
          "package": "GTALib",
          "signature": "GenericSemiring alg a -\u003e Bag free -\u003e a",
          "source": "src/GTA-Core.html#shom",
          "type": "method"
        },
        "index": {
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "shom",
          "normalized": "GenericSemiring a b-\u003eBag c-\u003eb",
          "package": "GTALib",
          "signature": "GenericSemiring alg a-\u003eBag free-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:shom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to compute a sum of products. Each product is of all values in the data structure after \u003cem\u003emap\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "sumproductBy",
          "package": "GTALib",
          "signature": "uniformer a -\u003e GenericSemiring alg a",
          "source": "src/GTA-Core.html#sumproductBy",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to compute sum of products Each product is of all values in the data structure after map",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "sumproductBy",
          "normalized": "a b-\u003eGenericSemiring c b",
          "package": "GTALib",
          "partial": "By",
          "signature": "uniformer a-\u003eGenericSemiring alg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:sumproductBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e=\u003c\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "GTA.Core",
          "name": "transformBy",
          "package": "GTALib",
          "signature": "(GenericSemiring alg' c -\u003e c) -\u003e (GenericSemiring alg c -\u003e GenericSemiring alg' c) -\u003e GenericSemiring alg c -\u003e c",
          "source": "src/GTA-Core.html#transformBy",
          "type": "function"
        },
        "index": {
          "description": "The same as",
          "hierarchy": "GTA Core",
          "module": "GTA.Core",
          "name": "transformBy",
          "normalized": "(GenericSemiring a b-\u003eb)-\u003e(GenericSemiring c b-\u003eGenericSemiring a b)-\u003eGenericSemiring c b-\u003eb",
          "package": "GTALib",
          "partial": "By",
          "signature": "(GenericSemiring alg' c-\u003ec)-\u003e(GenericSemiring alg c-\u003eGenericSemiring alg' c)-\u003eGenericSemiring alg c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:transformBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on binary (and\n leaf-valued) trees, such as definitions of the data structures\n and their algebras, generators, aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Data.BinTree",
          "name": "BinTree",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the GTA framework on binary and leaf-valued trees such as definitions of the data structures and their algebras generators aggregators etc",
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTree",
          "package": "GTALib",
          "partial": "Bin Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTree",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#BinTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTree",
          "package": "GTALib",
          "partial": "Bin Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTreeAlgebra",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTreeAlgebra",
          "package": "GTALib",
          "partial": "Bin Tree Algebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTreeMapFs",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTreeMapFs",
          "package": "GTALib",
          "partial": "Bin Tree Map Fs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTreeSemiring",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#BinTreeSemiring",
          "type": "type"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTreeSemiring",
          "package": "GTALib",
          "partial": "Bin Tree Semiring",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTree",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#LVTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTree",
          "package": "GTALib",
          "partial": "LVTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTreeAlgebra",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTreeAlgebra",
          "package": "GTALib",
          "partial": "LVTree Algebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTreeMapFs",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTreeMapFs",
          "package": "GTALib",
          "partial": "LVTree Map Fs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTreeSemiring",
          "package": "GTALib",
          "source": "src/GTA-Data-BinTree.html#LVTreeSemiring",
          "type": "type"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTreeSemiring",
          "package": "GTALib",
          "partial": "LVTree Semiring",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinLeaf",
          "package": "GTALib",
          "signature": "BinLeaf l",
          "source": "src/GTA-Data-BinTree.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinLeaf",
          "package": "GTALib",
          "partial": "Bin Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinNode",
          "package": "GTALib",
          "signature": "BinNode n (BinTree n l) (BinTree n l)",
          "source": "src/GTA-Data-BinTree.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinNode",
          "package": "GTALib",
          "partial": "Bin Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTreeAlgebra",
          "package": "GTALib",
          "signature": "BinTreeAlgebra",
          "source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTreeAlgebra",
          "package": "GTALib",
          "partial": "Bin Tree Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "BinTreeMapFs",
          "package": "GTALib",
          "signature": "BinTreeMapFs",
          "source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "BinTreeMapFs",
          "package": "GTALib",
          "partial": "Bin Tree Map Fs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinTreeMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTreeAlgebra",
          "package": "GTALib",
          "signature": "LVTreeAlgebra",
          "source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTreeAlgebra",
          "package": "GTALib",
          "partial": "LVTree Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LVTreeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LVTreeMapFs",
          "package": "GTALib",
          "signature": "LVTreeMapFs",
          "source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LVTreeMapFs",
          "package": "GTALib",
          "partial": "LVTree Map Fs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LVTreeMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "LeafLV",
          "package": "GTALib",
          "signature": "LeafLV a",
          "source": "src/GTA-Data-BinTree.html#LVTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "LeafLV",
          "package": "GTALib",
          "partial": "Leaf LV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LeafLV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "NodeLV",
          "package": "GTALib",
          "signature": "NodeLV (LVTree a) (LVTree a)",
          "source": "src/GTA-Data-BinTree.html#LVTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "NodeLV",
          "package": "GTALib",
          "partial": "Node LV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:NodeLV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "assignTrans",
          "package": "GTALib",
          "signature": "[b] -\u003e [c] -\u003e BinTreeSemiring c (b, a) s -\u003e LVTreeSemiring a s",
          "source": "src/GTA-Data-BinTree.html#assignTrans",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "assignTrans",
          "normalized": "[a]-\u003e[b]-\u003eBinTreeSemiring b(a,c)d-\u003eLVTreeSemiring c d",
          "package": "GTALib",
          "partial": "Trans",
          "signature": "[b]-\u003e[c]-\u003eBinTreeSemiring c(b,a)s-\u003eLVTreeSemiring a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:assignTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "assignTrees",
          "package": "GTALib",
          "signature": "[b] -\u003e [c] -\u003e [a] -\u003e BinTreeSemiring c (b, a) s -\u003e s",
          "source": "src/GTA-Data-BinTree.html#assignTrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "assignTrees",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003eBinTreeSemiring b(a,c)d-\u003ed",
          "package": "GTALib",
          "partial": "Trees",
          "signature": "[b]-\u003e[c]-\u003e[a]-\u003eBinTreeSemiring c(b,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:assignTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "binLeaf",
          "package": "GTALib",
          "signature": "l -\u003e a",
          "source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "binLeaf",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "partial": "Leaf",
          "signature": "l-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "binLeafF",
          "package": "GTALib",
          "signature": "l -\u003e b'",
          "source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "binLeafF",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "partial": "Leaf",
          "signature": "l-\u003eb'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binLeafF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "binNode",
          "package": "GTALib",
          "signature": "n -\u003e a -\u003e a -\u003e a",
          "source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "binNode",
          "normalized": "a-\u003eb-\u003eb-\u003eb",
          "package": "GTALib",
          "partial": "Node",
          "signature": "n-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "binNodeF",
          "package": "GTALib",
          "signature": "n -\u003e b'",
          "source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "binNodeF",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "partial": "Node",
          "signature": "n-\u003eb'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binNodeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "count",
          "package": "GTALib",
          "signature": "BinTreeSemiring n l a",
          "source": "src/GTA-Data-BinTree.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "count",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "leafLV",
          "package": "GTALib",
          "signature": "b -\u003e a",
          "source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "leafLV",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "partial": "LV",
          "signature": "b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:leafLV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "leafLVF",
          "package": "GTALib",
          "signature": "b -\u003e b'",
          "source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "leafLVF",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "partial": "LVF",
          "signature": "b-\u003eb'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:leafLVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "lvtrees",
          "package": "GTALib",
          "signature": "[a] -\u003e LVTreeSemiring a s -\u003e s",
          "source": "src/GTA-Data-BinTree.html#lvtrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "lvtrees",
          "normalized": "[a]-\u003eLVTreeSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eLVTreeSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:lvtrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "maxsum",
          "package": "GTALib",
          "signature": "BinTreeSemiring (Bool, a) (Bool, a) (AddIdentity a)",
          "source": "src/GTA-Data-BinTree.html#maxsum",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "maxsum",
          "normalized": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a)",
          "package": "GTALib",
          "signature": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:maxsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "maxsumsolution",
          "package": "GTALib",
          "signature": "BinTreeSemiring (Bool, a) (Bool, a) (AddIdentity a, Bag (BinTree (Bool, a) (Bool, a)))",
          "source": "src/GTA-Data-BinTree.html#maxsumsolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "maxsumsolution",
          "normalized": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a,Bag(BinTree(Bool,a)(Bool,a)))",
          "package": "GTALib",
          "signature": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a,Bag(BinTree(Bool,a)(Bool,a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:maxsumsolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "nodeLV",
          "package": "GTALib",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "nodeLV",
          "normalized": "a-\u003ea-\u003ea",
          "package": "GTALib",
          "partial": "LV",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:nodeLV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "selects",
          "package": "GTALib",
          "signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
          "source": "src/GTA-Data-BinTree.html#selects",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "selects",
          "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
          "package": "GTALib",
          "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:selects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "subtreeSelects",
          "package": "GTALib",
          "signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
          "source": "src/GTA-Data-BinTree.html#subtreeSelects",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "subtreeSelects",
          "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
          "package": "GTALib",
          "partial": "Selects",
          "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:subtreeSelects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.BinTree",
          "name": "subtreeSelectsWithRoot",
          "package": "GTALib",
          "signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
          "source": "src/GTA-Data-BinTree.html#subtreeSelectsWithRoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data BinTree",
          "module": "GTA.Data.BinTree",
          "name": "subtreeSelectsWithRoot",
          "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
          "package": "GTALib",
          "partial": "Selects With Root",
          "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:subtreeSelectsWithRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on cons lists, such as\n definitions of the data structure and its algebra, generators,\n aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Data.ConsList",
          "name": "ConsList",
          "package": "GTALib",
          "source": "src/GTA-Data-ConsList.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the GTA framework on cons lists such as definitions of the data structure and its algebra generators aggregators etc",
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsList",
          "package": "GTALib",
          "partial": "Cons List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "ConsList",
          "package": "GTALib",
          "source": "src/GTA-Data-ConsList.html#ConsList",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsList",
          "package": "GTALib",
          "partial": "Cons List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "ConsListAlgebra",
          "package": "GTALib",
          "source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsListAlgebra",
          "package": "GTALib",
          "partial": "Cons List Algebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsListAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "ConsListMapFs",
          "package": "GTALib",
          "source": "src/GTA-Data-ConsList.html#ConsListMapFs",
          "type": "data"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsListMapFs",
          "package": "GTALib",
          "partial": "Cons List Map Fs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsListMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "ConsSemiring",
          "package": "GTALib",
          "source": "src/GTA-Data-ConsList.html#ConsSemiring",
          "type": "type"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsSemiring",
          "package": "GTALib",
          "partial": "Cons Semiring",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "Cons",
          "package": "GTALib",
          "signature": "Cons a (ConsList a)",
          "source": "src/GTA-Data-ConsList.html#ConsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "Cons",
          "package": "GTALib",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "ConsListAlgebra",
          "package": "GTALib",
          "signature": "ConsListAlgebra",
          "source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "ConsListAlgebra",
          "package": "GTALib",
          "partial": "Cons List Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:ConsListAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "Nil",
          "package": "GTALib",
          "signature": "Nil",
          "source": "src/GTA-Data-ConsList.html#ConsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "Nil",
          "package": "GTALib",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "assigns",
          "package": "GTALib",
          "signature": "[m] -\u003e [a] -\u003e ConsSemiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#assigns",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "assigns",
          "normalized": "[a]-\u003e[b]-\u003eConsSemiring(a,b)c-\u003ec",
          "package": "GTALib",
          "signature": "[m]-\u003e[a]-\u003eConsSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:assigns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "assignsBy",
          "package": "GTALib",
          "signature": "(a -\u003e [m]) -\u003e [a] -\u003e ConsSemiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#assignsBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "assignsBy",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003eConsSemiring(b,a)c-\u003ec",
          "package": "GTALib",
          "partial": "By",
          "signature": "(a-\u003e[m])-\u003e[a]-\u003eConsSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:assignsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "bagOfNil",
          "package": "GTALib",
          "signature": "Bag (ConsList a)",
          "source": "src/GTA-Data-ConsList.html#bagOfNil",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "bagOfNil",
          "package": "GTALib",
          "partial": "Of Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:bagOfNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "bagUnion",
          "package": "GTALib",
          "signature": "Bag (ConsList a) -\u003e Bag (ConsList a) -\u003e Bag (ConsList a)",
          "source": "src/GTA-Data-ConsList.html#bagUnion",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "bagUnion",
          "normalized": "Bag(ConsList a)-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
          "package": "GTALib",
          "partial": "Union",
          "signature": "Bag(ConsList a)-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:bagUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "cons",
          "package": "GTALib",
          "signature": "b -\u003e a -\u003e a",
          "source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "GTALib",
          "signature": "b-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "consize",
          "package": "GTALib",
          "signature": "forall a.  [a] -\u003e ConsList a",
          "source": "src/GTA-Data-ConsList.html#consize",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "consize",
          "normalized": "a b[c]-\u003eConsList c",
          "package": "GTALib",
          "signature": "forall a.[a]-\u003eConsList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:consize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "count",
          "package": "GTALib",
          "signature": "ConsSemiring b a",
          "source": "src/GTA-Data-ConsList.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "count",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "crossCons",
          "package": "GTALib",
          "signature": "a -\u003e Bag (ConsList a) -\u003e Bag (ConsList a)",
          "source": "src/GTA-Data-ConsList.html#crossCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "crossCons",
          "normalized": "a-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
          "package": "GTALib",
          "partial": "Cons",
          "signature": "a-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:crossCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "deconsize",
          "package": "GTALib",
          "signature": "forall a.  ConsList a -\u003e [a]",
          "source": "src/GTA-Data-ConsList.html#deconsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "deconsize",
          "normalized": "a b ConsList c-\u003e[c]",
          "package": "GTALib",
          "signature": "forall a. ConsList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:deconsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "emptyBag",
          "package": "GTALib",
          "signature": "Bag (ConsList a)",
          "source": "src/GTA-Data-ConsList.html#emptyBag",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "emptyBag",
          "package": "GTALib",
          "partial": "Bag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:emptyBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "foldr'",
          "package": "GTALib",
          "signature": "forall a s.  (a -\u003e s -\u003e s) -\u003e s -\u003e ConsListAlgebra a s",
          "source": "src/GTA-Data-ConsList.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "foldr'",
          "normalized": "a b c(b-\u003ed-\u003ed)-\u003ed-\u003eConsListAlgebra b d",
          "package": "GTALib",
          "signature": "forall a s.(a-\u003es-\u003es)-\u003es-\u003eConsListAlgebra a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "inits",
          "package": "GTALib",
          "signature": "[a] -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#inits",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "inits",
          "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "mapC",
          "package": "GTALib",
          "signature": "forall b a.  (b -\u003e a) -\u003e ConsListMapFs b a",
          "source": "src/GTA-Data-ConsList.html#mapC",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "mapC",
          "normalized": "a b c(b-\u003ed)-\u003eConsListMapFs b d",
          "package": "GTALib",
          "signature": "forall b a.(b-\u003ea)-\u003eConsListMapFs b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:mapC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "mapMap",
          "package": "GTALib",
          "signature": "(b -\u003e b') -\u003e GenericSemiring (ConsListAlgebra b') a -\u003e GenericSemiring (ConsListAlgebra b) a",
          "source": "src/GTA-Data-ConsList.html#mapMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "mapMap",
          "normalized": "(a-\u003eb)-\u003eGenericSemiring(ConsListAlgebra b)c-\u003eGenericSemiring(ConsListAlgebra a)c",
          "package": "GTALib",
          "partial": "Map",
          "signature": "(b-\u003eb')-\u003eGenericSemiring(ConsListAlgebra b')a-\u003eGenericSemiring(ConsListAlgebra b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:mapMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [AddIdentity a]",
          "source": "src/GTA-Data-ConsList.html#maxprodKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[AddIdentity b]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a)",
          "source": "src/GTA-Data-ConsList.html#maxprodWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodWith",
          "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b)",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [(AddIdentity a, Bag (ConsList b))]",
          "source": "src/GTA-Data-ConsList.html#maxprodsolutionKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[(AddIdentity b,Bag(ConsList a))]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[(AddIdentity a,Bag(ConsList b))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a, Bag (ConsList b))",
          "source": "src/GTA-Data-ConsList.html#maxprodsolutionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionWith",
          "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b,Bag(ConsList a))",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a,Bag(ConsList b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionXKWith",
          "package": "GTALib",
          "signature": "ConsSemiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e ConsSemiring c [(AddIdentity a, b)]",
          "source": "src/GTA-Data-ConsList.html#maxprodsolutionXKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionXKWith",
          "normalized": "ConsSemiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eConsSemiring a[(AddIdentity c,b)]",
          "package": "GTALib",
          "partial": "XKWith",
          "signature": "ConsSemiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eConsSemiring c[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionXKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionXWith",
          "package": "GTALib",
          "signature": "ConsSemiring c b -\u003e (c -\u003e a) -\u003e ConsSemiring c (AddIdentity a, b)",
          "source": "src/GTA-Data-ConsList.html#maxprodsolutionXWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxprodsolutionXWith",
          "normalized": "ConsSemiring a b-\u003e(a-\u003ec)-\u003eConsSemiring a(AddIdentity c,b)",
          "package": "GTALib",
          "partial": "XWith",
          "signature": "ConsSemiring c b-\u003e(c-\u003ea)-\u003eConsSemiring c(AddIdentity a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionXWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsum",
          "package": "GTALib",
          "signature": "ConsSemiring a (AddIdentity a)",
          "source": "src/GTA-Data-ConsList.html#maxsum",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsum",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [AddIdentity a]",
          "source": "src/GTA-Data-ConsList.html#maxsumKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[AddIdentity b]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a)",
          "source": "src/GTA-Data-ConsList.html#maxsumWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumWith",
          "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b)",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolution",
          "package": "GTALib",
          "signature": "ConsSemiring a (AddIdentity a, Bag (ConsList a))",
          "source": "src/GTA-Data-ConsList.html#maxsumsolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolution",
          "normalized": "ConsSemiring a(AddIdentity a,Bag(ConsList a))",
          "package": "GTALib",
          "signature": "ConsSemiring a(AddIdentity a,Bag(ConsList a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [(AddIdentity a, Bag (ConsList b))]",
          "source": "src/GTA-Data-ConsList.html#maxsumsolutionKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[(AddIdentity b,Bag(ConsList a))]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[(AddIdentity a,Bag(ConsList b))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a, Bag (ConsList b))",
          "source": "src/GTA-Data-ConsList.html#maxsumsolutionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionWith",
          "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b,Bag(ConsList a))",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a,Bag(ConsList b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionXKWith",
          "package": "GTALib",
          "signature": "ConsSemiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e ConsSemiring c [(AddIdentity a, b)]",
          "source": "src/GTA-Data-ConsList.html#maxsumsolutionXKWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionXKWith",
          "normalized": "ConsSemiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eConsSemiring a[(AddIdentity c,b)]",
          "package": "GTALib",
          "partial": "XKWith",
          "signature": "ConsSemiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eConsSemiring c[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionXKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionXWith",
          "package": "GTALib",
          "signature": "ConsSemiring c b -\u003e (c -\u003e a) -\u003e ConsSemiring c (AddIdentity a, b)",
          "source": "src/GTA-Data-ConsList.html#maxsumsolutionXWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "maxsumsolutionXWith",
          "normalized": "ConsSemiring a b-\u003e(a-\u003ec)-\u003eConsSemiring a(AddIdentity c,b)",
          "package": "GTALib",
          "partial": "XWith",
          "signature": "ConsSemiring c b-\u003e(c-\u003ea)-\u003eConsSemiring c(AddIdentity a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionXWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "nil",
          "package": "GTALib",
          "signature": "a",
          "source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "nil",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "paths",
          "package": "GTALib",
          "signature": "BinTree a a -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#paths",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "paths",
          "normalized": "BinTree a a-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "BinTree a a-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:paths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "perms",
          "package": "GTALib",
          "signature": "[a] -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#perms",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "perms",
          "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:perms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "segs",
          "package": "GTALib",
          "signature": "[a] -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#segs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "segs",
          "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:segs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "subs",
          "package": "GTALib",
          "signature": "[a] -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#subs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "subs",
          "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:subs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.ConsList",
          "name": "tails",
          "package": "GTALib",
          "signature": "[a] -\u003e ConsSemiring a s -\u003e s",
          "source": "src/GTA-Data-ConsList.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data ConsList",
          "module": "GTA.Data.ConsList",
          "name": "tails",
          "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eConsSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on join lists, such as\n definitions of the data structure and its algebra,\n parallel/serial generators, aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Data.JoinList",
          "name": "JoinList",
          "package": "GTALib",
          "source": "src/GTA-Data-JoinList.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the GTA framework on join lists such as definitions of the data structure and its algebra parallel serial generators aggregators etc",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "JoinList",
          "package": "GTALib",
          "partial": "Join List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin lists. \n\u003c/p\u003e\u003cpre\u003e x ++ y ==\u003e x `Times` y\n [a]    ==\u003e Single a\n []     ==\u003e Nil\n\u003c/pre\u003e\u003cp\u003eWe assume that \u003ccode\u003e\u003ca\u003eTimes\u003c/a\u003e\u003c/code\u003e is associative and \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e is its identity:\n\u003c/p\u003e\u003cpre\u003e x `Times` (y `Times` z) == (x `Times` y) `Times` z\n x `Times` Nil == Nil `Times` x == x\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "JoinList",
          "package": "GTALib",
          "source": "src/GTA-Data-JoinList.html#JoinList",
          "type": "data"
        },
        "index": {
          "description": "Join lists Times Single Nil We assume that Times is associative and Nil is its identity Times Times Times Times Times Nil Nil Times",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "JoinList",
          "package": "GTALib",
          "partial": "Join List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebra of join lists.\n\u003c/p\u003e\u003cp\u003eWe assume that \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e is associative and \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e is its identity, inheriting those of \u003ccode\u003e\u003ca\u003eTimes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e x `times` (y `times` z) == (x `times` y) `times` z\n x `times` nil == nil `times` x == x\n\u003c/pre\u003e\u003cp\u003eThis can be generated automatically by \u003ccode\u003egenAllDecl ''JoinList\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "JoinListAlgebra",
          "package": "GTALib",
          "source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
          "type": "data"
        },
        "index": {
          "description": "The algebra of join lists We assume that times is associative and nil is its identity inheriting those of Times and Nil times times times times times nil nil times This can be generated automatically by genAllDecl JoinList",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "JoinListAlgebra",
          "package": "GTALib",
          "partial": "Join List Algebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinListAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record to hold a function to be applied to elements of a list.\n\u003c/p\u003e\u003cp\u003eThis can be generated automatically by \u003ccode\u003egenAllDecl ''JoinList\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "JoinListMapFs",
          "package": "GTALib",
          "source": "src/GTA-Data-JoinList.html#JoinListMapFs",
          "type": "data"
        },
        "index": {
          "description": "record to hold function to be applied to elements of list This can be generated automatically by genAllDecl JoinList",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "JoinListMapFs",
          "package": "GTALib",
          "partial": "Join List Map Fs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinListMapFs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe usual semiring is a generic semiring of join lists:\n\u003c/p\u003e\u003cpre\u003e a `times` (b `oplus` c) == (a `times` b) `oplus` (a `times` c)\n (a `oplus` b) `times` c == (a `times` c) `oplus` (b `times` c)\n a `times` identity == identity `times` a == identity\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "Semiring",
          "package": "GTALib",
          "source": "src/GTA-Data-JoinList.html#Semiring",
          "type": "type"
        },
        "index": {
          "description": "The usual semiring is generic semiring of join lists times oplus times oplus times oplus times times oplus times times identity identity times identity",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "Semiring",
          "package": "GTALib",
          "partial": "Semiring",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:Semiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "JoinListAlgebra",
          "package": "GTALib",
          "signature": "JoinListAlgebra",
          "source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "JoinListAlgebra",
          "package": "GTALib",
          "partial": "Join List Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:JoinListAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "Nil",
          "package": "GTALib",
          "signature": "Nil",
          "source": "src/GTA-Data-JoinList.html#JoinList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "Nil",
          "package": "GTALib",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "Single",
          "package": "GTALib",
          "signature": "Single a",
          "source": "src/GTA-Data-JoinList.html#JoinList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "Single",
          "package": "GTALib",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "Times",
          "package": "GTALib",
          "signature": "Times (JoinList a) (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#JoinList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "Times",
          "package": "GTALib",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all assignments of elements of the first list to elements of the second list.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassigns [True,False] [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[(True,1),(True,2),(True,3)],[(True,1),(True,2),(False,3)],[(True,1),(False,2),(True,3)],[(True,1),(False,2),(False,3)],[(False,1),(True,2),(True,3)],[(False,1),(True,2),(False,3)],[(False,1),(False,2),(True,3)],[(False,1),(False,2),(False,3)]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "assigns",
          "package": "GTALib",
          "signature": "[m] -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#assigns",
          "type": "function"
        },
        "index": {
          "description": "This generates all assignments of elements of the first list to elements of the second list For example assigns True False aggregateBy result Bag True True True True True False True False True True False False False True True False True False False False True False False False",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "assigns",
          "normalized": "[a]-\u003e[b]-\u003eSemiring(a,b)c-\u003ec",
          "package": "GTALib",
          "signature": "[m]-\u003e[a]-\u003eSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assigns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a generalization of \u003ccode\u003e\u003ca\u003eassigns\u003c/a\u003e\u003c/code\u003e: the values to be assigned is dependent of the target.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassignsBy (\\a -\u003e if odd a then [True, False] else [True]) [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[(True,1),(True,2),(True,3)],[(True,1),(True,2),(False,3)],[(False,1),(True,2),(True,3)],[(False,1),(True,2),(False,3)]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "assignsBy",
          "package": "GTALib",
          "signature": "(a -\u003e [m]) -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#assignsBy",
          "type": "function"
        },
        "index": {
          "description": "This is generalization of assigns the values to be assigned is dependent of the target For example assignsBy if odd then True False else True aggregateBy result Bag True True True True True False False True True False True False",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "assignsBy",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003eSemiring(b,a)c-\u003ec",
          "package": "GTALib",
          "partial": "By",
          "signature": "(a-\u003e[m])-\u003e[a]-\u003eSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eassignsBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "assignsByP",
          "package": "GTALib",
          "signature": "(a -\u003e [m]) -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#assignsByP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of assignsBy",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "assignsByP",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003eSemiring(b,a)c-\u003ec",
          "package": "GTALib",
          "partial": "By",
          "signature": "(a-\u003e[m])-\u003e[a]-\u003eSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsByP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eassigns\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "assignsP",
          "package": "GTALib",
          "signature": "[m] -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#assignsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of assigns",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "assignsP",
          "normalized": "[a]-\u003e[b]-\u003eSemiring(a,b)c-\u003ec",
          "package": "GTALib",
          "signature": "[m]-\u003e[a]-\u003eSemiring(m,a)s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebagOfNil\n\u003c/code\u003e\u003c/strong\u003eBag [[]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "bagOfNil",
          "package": "GTALib",
          "signature": "Bag (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#bagOfNil",
          "type": "function"
        },
        "index": {
          "description": "Constructor of bag of join lists For example bagOfNil Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "bagOfNil",
          "package": "GTALib",
          "partial": "Of Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagOfNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebagOfSingleton 1\n\u003c/code\u003e\u003c/strong\u003eBag [[1]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "bagOfSingleton",
          "package": "GTALib",
          "signature": "a -\u003e Bag (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#bagOfSingleton",
          "type": "function"
        },
        "index": {
          "description": "Constructor of bag of join lists For example bagOfSingleton Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "bagOfSingleton",
          "normalized": "a-\u003eBag(JoinList a)",
          "package": "GTALib",
          "partial": "Of Singleton",
          "signature": "a-\u003eBag(JoinList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagOfSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(bag (map joinize [[1,2], [3]])) `bagUnion` (bag (map joinize [[4,5], [6]]))\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2],[3],[4,5],[6]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "bagUnion",
          "package": "GTALib",
          "signature": "Bag (JoinList a) -\u003e Bag (JoinList a) -\u003e Bag (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#bagUnion",
          "type": "function"
        },
        "index": {
          "description": "Constructor of bag of join lists For example bag map joinize bagUnion bag map joinize Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "bagUnion",
          "normalized": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
          "package": "GTALib",
          "partial": "Union",
          "signature": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to count the number of items in a generated bag.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "count",
          "package": "GTALib",
          "signature": "Semiring b a",
          "source": "src/GTA-Data-JoinList.html#count",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to count the number of items in generated bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "count",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(bag (map joinize [[1,2], [3]])) `crossConcat` (bag (map joinize [[4,5], [6]]))\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,4,5],[1,2,6],[3,4,5],[3,6]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "crossConcat",
          "package": "GTALib",
          "signature": "Bag (JoinList a) -\u003e Bag (JoinList a) -\u003e Bag (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#crossConcat",
          "type": "function"
        },
        "index": {
          "description": "Constructor of bag of join lists For example bag map joinize crossConcat bag map joinize Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "crossConcat",
          "normalized": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
          "package": "GTALib",
          "partial": "Concat",
          "signature": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:crossConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a join list to a usual list. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "dejoinize",
          "package": "GTALib",
          "signature": "forall a.  JoinList a -\u003e [a]",
          "source": "src/GTA-Data-JoinList.html#dejoinize",
          "type": "function"
        },
        "index": {
          "description": "Conversion from join list to usual list",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "dejoinize",
          "normalized": "a b JoinList c-\u003e[c]",
          "package": "GTALib",
          "signature": "forall a. JoinList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:dejoinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eemptyBag\n\u003c/code\u003e\u003c/strong\u003eBag []\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "emptyBag",
          "package": "GTALib",
          "signature": "Bag (JoinList a)",
          "source": "src/GTA-Data-JoinList.html#emptyBag",
          "type": "function"
        },
        "index": {
          "description": "Constructor of bag of join lists For example emptyBag Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "emptyBag",
          "package": "GTALib",
          "partial": "Bag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:emptyBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper function for JoinList homomorphism. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "homJ",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e (b -\u003e a) -\u003e a -\u003e JoinList b -\u003e a",
          "source": "src/GTA-Data-JoinList.html#homJ",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for JoinList homomorphism",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "homJ",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinList b-\u003ea",
          "package": "GTALib",
          "signature": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:homJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fake function of homJ to build \u003ccode\u003e\u003ca\u003eJoinListAlgebra\u003c/a\u003e\u003c/code\u003e instead of executing the homomorphism with it. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "homJ'",
          "package": "GTALib",
          "signature": "(a -\u003e a -\u003e a) -\u003e (b -\u003e a) -\u003e a -\u003e JoinListAlgebra b a",
          "source": "src/GTA-Data-JoinList.html#homJ%27",
          "type": "function"
        },
        "index": {
          "description": "fake function of homJ to build JoinListAlgebra instead of executing the homomorphism with it",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "homJ'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinListAlgebra b a",
          "package": "GTALib",
          "partial": "J'",
          "signature": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinListAlgebra b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:homJ-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all prefixes of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einits [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[],[1],[1,2],[1,2,3]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "inits",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#inits",
          "type": "function"
        },
        "index": {
          "description": "This generates all prefixes of given list For example inits aggregateBy result Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "inits",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "initsP",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#initsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of inits",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "initsP",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:initsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a usual list to a join list. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "joinize",
          "package": "GTALib",
          "signature": "forall a.  [a] -\u003e JoinList a",
          "source": "src/GTA-Data-JoinList.html#joinize",
          "type": "function"
        },
        "index": {
          "description": "Conversion from usual list to join list",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "joinize",
          "normalized": "a b[c]-\u003eJoinList c",
          "package": "GTALib",
          "signature": "forall a.[a]-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:joinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eJoinListMapFs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "mapJ",
          "package": "GTALib",
          "signature": "forall b a.  (b -\u003e a) -\u003e JoinListMapFs b a",
          "source": "src/GTA-Data-JoinList.html#mapJ",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for JoinListMapFs",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "mapJ",
          "normalized": "a b c(b-\u003ed)-\u003eJoinListMapFs b d",
          "package": "GTALib",
          "signature": "forall b a.(b-\u003ea)-\u003eJoinListMapFs b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:mapJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transfomer that applies given function to every element in every list in a given bag.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "mapMap",
          "package": "GTALib",
          "signature": "(b -\u003e b') -\u003e GenericSemiring (JoinListAlgebra b') a -\u003e GenericSemiring (JoinListAlgebra b) a",
          "source": "src/GTA-Data-JoinList.html#mapMap",
          "type": "function"
        },
        "index": {
          "description": "transfomer that applies given function to every element in every list in given bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "mapMap",
          "normalized": "(a-\u003eb)-\u003eGenericSemiring(JoinListAlgebra b)c-\u003eGenericSemiring(JoinListAlgebra a)c",
          "package": "GTALib",
          "partial": "Map",
          "signature": "(b-\u003eb')-\u003eGenericSemiring(JoinListAlgebra b')a-\u003eGenericSemiring(JoinListAlgebra b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:mapMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [AddIdentity a]",
          "source": "src/GTA-Data-JoinList.html#maxprodKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[AddIdentity b]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to take the maximum product of \u003cem\u003enon-negative\u003c/em\u003e numbers after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a)",
          "source": "src/GTA-Data-JoinList.html#maxprodWith",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to take the maximum product of non-negative numbers after map",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodWith",
          "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b)",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [(AddIdentity a, Bag (JoinList b))]",
          "source": "src/GTA-Data-JoinList.html#maxprodsolutionKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodsolutionWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[(AddIdentity b,Bag(JoinList a))]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[(AddIdentity a,Bag(JoinList b))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to find items with the maximum product. The numbers have to be \u003cem\u003enon-negative\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a, Bag (JoinList b))",
          "source": "src/GTA-Data-JoinList.html#maxprodsolutionWith",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to find items with the maximum product The numbers have to be non-negative",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionWith",
          "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b,Bag(JoinList a))",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a,Bag(JoinList b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionXWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionXKWith",
          "package": "GTALib",
          "signature": "Semiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e Semiring c [(AddIdentity a, b)]",
          "source": "src/GTA-Data-JoinList.html#maxprodsolutionXKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxprodsolutionXWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionXKWith",
          "normalized": "Semiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eSemiring a[(AddIdentity c,b)]",
          "package": "GTALib",
          "partial": "XKWith",
          "signature": "Semiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eSemiring c[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionXKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tupling of maxprodsolution and a given semiring. The second component is the aggregation of the maximum items by the given semiring.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionXWith",
          "package": "GTALib",
          "signature": "Semiring c b -\u003e (c -\u003e a) -\u003e Semiring c (AddIdentity a, b)",
          "source": "src/GTA-Data-JoinList.html#maxprodsolutionXWith",
          "type": "function"
        },
        "index": {
          "description": "The tupling of maxprodsolution and given semiring The second component is the aggregation of the maximum items by the given semiring",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxprodsolutionXWith",
          "normalized": "Semiring a b-\u003e(a-\u003ec)-\u003eSemiring a(AddIdentity c,b)",
          "package": "GTALib",
          "partial": "XWith",
          "signature": "Semiring c b-\u003e(c-\u003ea)-\u003eSemiring c(AddIdentity a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionXWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to take the maximum sum.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsum",
          "package": "GTALib",
          "signature": "Semiring a (AddIdentity a)",
          "source": "src/GTA-Data-JoinList.html#maxsum",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to take the maximum sum",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsum",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [AddIdentity a]",
          "source": "src/GTA-Data-JoinList.html#maxsumKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[AddIdentity b]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[AddIdentity a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to take the maximum sum after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a)",
          "source": "src/GTA-Data-JoinList.html#maxsumWith",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to take the maximum sum after map",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumWith",
          "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b)",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to find items with the maximum sum.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolution",
          "package": "GTALib",
          "signature": "Semiring a (AddIdentity a, Bag (JoinList a))",
          "source": "src/GTA-Data-JoinList.html#maxsumsolution",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to find items with the maximum sum",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolution",
          "normalized": "Semiring a(AddIdentity a,Bag(JoinList a))",
          "package": "GTALib",
          "signature": "Semiring a(AddIdentity a,Bag(JoinList a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionKWith",
          "package": "GTALib",
          "signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [(AddIdentity a, Bag (JoinList b))]",
          "source": "src/GTA-Data-JoinList.html#maxsumsolutionKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumsolutionWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionKWith",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[(AddIdentity b,Bag(JoinList a))]",
          "package": "GTALib",
          "partial": "KWith",
          "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[(AddIdentity a,Bag(JoinList b))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregator to find items with the maximum sum after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionWith",
          "package": "GTALib",
          "signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a, Bag (JoinList b))",
          "source": "src/GTA-Data-JoinList.html#maxsumsolutionWith",
          "type": "function"
        },
        "index": {
          "description": "The aggregator to find items with the maximum sum after map",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionWith",
          "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b,Bag(JoinList a))",
          "package": "GTALib",
          "partial": "With",
          "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a,Bag(JoinList b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionXWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionXKWith",
          "package": "GTALib",
          "signature": "Semiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e Semiring c [(AddIdentity a, b)]",
          "source": "src/GTA-Data-JoinList.html#maxsumsolutionXKWith",
          "type": "function"
        },
        "index": {
          "description": "The best-k extension of maxsumsolutionXWith",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionXKWith",
          "normalized": "Semiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eSemiring a[(AddIdentity c,b)]",
          "package": "GTALib",
          "partial": "XKWith",
          "signature": "Semiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eSemiring c[(AddIdentity a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionXKWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tupling of maxsumsolution and a given semiring. The second component is the aggregation of the maximum items by the given semiring.\n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionXWith",
          "package": "GTALib",
          "signature": "Semiring c b -\u003e (c -\u003e a) -\u003e Semiring c (AddIdentity a, b)",
          "source": "src/GTA-Data-JoinList.html#maxsumsolutionXWith",
          "type": "function"
        },
        "index": {
          "description": "The tupling of maxsumsolution and given semiring The second component is the aggregation of the maximum items by the given semiring",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "maxsumsolutionXWith",
          "normalized": "Semiring a b-\u003e(a-\u003ec)-\u003eSemiring a(AddIdentity c,b)",
          "package": "GTALib",
          "partial": "XWith",
          "signature": "Semiring c b-\u003e(c-\u003ea)-\u003eSemiring c(AddIdentity a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionXWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "nil",
          "package": "GTALib",
          "signature": "a",
          "source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "nil",
          "package": "GTALib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all paths from the root to leaves of a given binary tree.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e*Main GTA.Data.BinTree\u003e paths (BinNode 1 (BinLeaf 2) (BinNode 3 (BinLeaf 4) (BinLeaf 5))) `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2],[1,3,4],[1,3,5]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "paths",
          "package": "GTALib",
          "signature": "BinTree a a -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#paths",
          "type": "function"
        },
        "index": {
          "description": "This generates all paths from the root to leaves of given binary tree For example Main GTA.Data.BinTree paths BinNode BinLeaf BinNode BinLeaf BinLeaf aggregateBy result Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "paths",
          "normalized": "BinTree a a-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "BinTree a a-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:paths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all permutations of a given list.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eperms \"hoge\" `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [\"hoge\",\"hoeg\",\"ohge\",\"oheg\",\"hgoe\",\"hgeo\",\"ghoe\",\"gheo\",\"heog\",\"hego\",\"ehog\",\"ehgo\",\"oghe\",\"ogeh\",\"gohe\",\"goeh\",\"oehg\",\"oegh\",\"eohg\",\"eogh\",\"geho\",\"geoh\",\"egho\",\"egoh\"]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "perms",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#perms",
          "type": "function"
        },
        "index": {
          "description": "This generates all permutations of given list For example perms hoge aggregateBy result Bag hoge hoeg ohge oheg hgoe hgeo ghoe gheo heog hego ehog ehgo oghe ogeh gohe goeh oehg oegh eohg eogh geho geoh egho egoh",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "perms",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:perms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eperms\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "permsP",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#permsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of perms",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "permsP",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:permsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty of \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e of a JoinListAlgebra:\n\u003c/p\u003e\u003cpre\u003e x `times` (y `times` z) == (x `times` y) `times` z\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "prop_Associativity",
          "package": "GTALib",
          "signature": "JoinListAlgebra a b -\u003e (b, b, b) -\u003e Bool",
          "source": "src/GTA-Data-JoinList.html#prop_Associativity",
          "type": "function"
        },
        "index": {
          "description": "Property of times of JoinListAlgebra times times times times",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "prop_Associativity",
          "normalized": "JoinListAlgebra a b-\u003e(b,b,b)-\u003eBool",
          "package": "GTALib",
          "partial": "Associativity",
          "signature": "JoinListAlgebra a b-\u003e(b,b,b)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:prop_Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty of \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e of a JoinListAlgebra:\n\u003c/p\u003e\u003cpre\u003e (x `times` nil == x) && (nil `times` x == x)\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "prop_Identity",
          "package": "GTALib",
          "signature": "JoinListAlgebra a b -\u003e b -\u003e Bool",
          "source": "src/GTA-Data-JoinList.html#prop_Identity",
          "type": "function"
        },
        "index": {
          "description": "Property of times and nil of JoinListAlgebra times nil nil times",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "prop_Identity",
          "normalized": "JoinListAlgebra a b-\u003eb-\u003eBool",
          "package": "GTALib",
          "partial": "Identity",
          "signature": "JoinListAlgebra a b-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:prop_Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all segments (continuous subsequences) of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esegs [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1],[2],[3],[2,3],[1,2],[1,2,3],[]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "segs",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#segs",
          "type": "function"
        },
        "index": {
          "description": "This generates all segments continuous subsequences of given list For example segs aggregateBy result Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "segs",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:segs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003esegs\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "segsP",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#segsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of segs",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "segsP",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:segsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "single",
          "package": "GTALib",
          "signature": "b -\u003e a",
          "source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "single",
          "normalized": "a-\u003eb",
          "package": "GTALib",
          "signature": "b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all subsequences of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubs [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "subs",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#subs",
          "type": "function"
        },
        "index": {
          "description": "This generates all subsequences of given list For example subs aggregateBy result Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "subs",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:subs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003esubs\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "subsP",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#subsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of subs",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "subsP",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:subsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates all suffixes of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etails [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,3],[2,3],[3],[]]\n\u003c/pre\u003e",
          "module": "GTA.Data.JoinList",
          "name": "tails",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#tails",
          "type": "function"
        },
        "index": {
          "description": "This generates all suffixes of given list For example tails aggregateBy result Bag",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "tails",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "GTA.Data.JoinList",
          "name": "tailsP",
          "package": "GTALib",
          "signature": "[a] -\u003e Semiring a s -\u003e s",
          "source": "src/GTA-Data-JoinList.html#tailsP",
          "type": "function"
        },
        "index": {
          "description": "Parallel version of tails",
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "tailsP",
          "normalized": "[a]-\u003eSemiring a b-\u003eb",
          "package": "GTALib",
          "signature": "[a]-\u003eSemiring a s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:tailsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GTA.Data.JoinList",
          "name": "times",
          "package": "GTALib",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "GTA Data JoinList",
          "module": "GTA.Data.JoinList",
          "name": "times",
          "normalized": "a-\u003ea-\u003ea",
          "package": "GTALib",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a mechanism for automatic generation of data-structure-dependent definitions necessary for the GTA framework (namely, an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e as well as definitions of algebras and structures for map functions). \n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "GenericSemiringStructureTemplate",
          "package": "GTALib",
          "source": "src/GTA-Util-GenericSemiringStructureTemplate.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides mechanism for automatic generation of data-structure-dependent definitions necessary for the GTA framework namely an instance of GenericSemiringStructure as well as definitions of algebras and structures for map functions",
          "hierarchy": "GTA Util GenericSemiringStructureTemplate",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "GenericSemiringStructureTemplate",
          "package": "GTALib",
          "partial": "Generic Semiring Structure Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates a definition of the algebra of a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following definition of the algebra is generated by \u003ccode\u003egenAlgebraDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data BinTreeAlgebra n l a = BinTreeAlgebra {\n       binNode :: n -\u003e a -\u003e a -\u003e a,\n       binLeaf :: l -\u003e a\n     }\n\u003c/pre\u003e",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genAlgebraDecl",
          "package": "GTALib",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genAlgebraDecl",
          "type": "function"
        },
        "index": {
          "description": "This function generates definition of the algebra of given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following definition of the algebra is generated by genAlgebraDecl BinTree data BinTreeAlgebra BinTreeAlgebra binNode binLeaf",
          "hierarchy": "GTA Util GenericSemiringStructureTemplate",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genAlgebraDecl",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "GTALib",
          "partial": "Algebra Decl",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genAlgebraDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a data structure, this function generates a definition of its algebra (by \u003ccode\u003egenAlgebraDecl\u003c/code\u003e), a record of map functions (by \u003ccode\u003egenMapFunctionsDecl\u003c/code\u003e), and an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e (by \u003ccode\u003egenInstanceDecl\u003c/code\u003e). Usage: \u003ccode\u003egenAllDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genAllDecl",
          "package": "GTALib",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genAllDecl",
          "type": "function"
        },
        "index": {
          "description": "Given data structure this function generates definition of its algebra by genAlgebraDecl record of map functions by genMapFunctionsDecl and an instance of GenericSemiringStructure by genInstanceDecl Usage genAllDecl BinTree",
          "hierarchy": "GTA Util GenericSemiringStructureTemplate",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genAllDecl",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "GTALib",
          "partial": "All Decl",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genAllDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e for a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following record is generated by \u003ccode\u003egenInstanceDecl''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e instance GenericSemiringStructure (BinTreeAlgebra n l) (BinTree n l) (BinTreeMapFs n l) where\n   freeAlgebra = BinTreeAlgebra {..} where\n       binNode = BinNode\n       binLeaf = BinLeaf\n   pairAlgebra lvta1 lvta2 = BinTreeAlgebra {..} where\n       binNode a (l1, l2) (r1, r2) = (binNode1 a l1 r1, binNode2 a l2 r2)\n       binLeaf a                   = (binLeaf1 a, binLeaf2 a)\n       (binNode1, binLeaf1) = let BinTreeAlgebra {..} = lvta1 in (binNode, binLeaf)\n       (binNode2, binLeaf2) = let BinTreeAlgebra {..} = lvta2 in (binNode, binLeaf)\n   makeAlgebra (CommutativeMonoid {..}) lvta frec fsingle = BinTreeAlgebra {..} where  \n       binNode a l r = foldr oplus identity [fsingle (binNode' a l' r') | l' \u003c- frec l, r' \u003c- frec r]\n       binLeaf a     = fsingle (binLeaf' a)\n       (binNode', binLeaf') = let BinTreeAlgebra {..} = lvta in (binNode, binLeaf)\n   foldingAlgebra op iop (BinTreeMapFs {..}) = BinTreeAlgebra {..} where\n       binNode a l r = binNodeF a `op` l `op` r\n       binLeaf a     = binLeafF a\n   hom (BinTreeAlgebra {..}) = h where\n       h (BinNode a l r) = binNode a (h l) (h r)\n       h (BinLeaf a)     = binLeaf a\n \n\u003c/pre\u003e",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genInstanceDecl",
          "package": "GTALib",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genInstanceDecl",
          "type": "function"
        },
        "index": {
          "description": "This function generates an instance of GenericSemiringStructure for given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following record is generated by genInstanceDecl BinTree instance GenericSemiringStructure BinTreeAlgebra BinTree BinTreeMapFs where freeAlgebra BinTreeAlgebra where binNode BinNode binLeaf BinLeaf pairAlgebra lvta1 lvta2 BinTreeAlgebra where binNode l1 l2 r1 r2 binNode1 l1 r1 binNode2 l2 r2 binLeaf binLeaf1 binLeaf2 binNode1 binLeaf1 let BinTreeAlgebra lvta1 in binNode binLeaf binNode2 binLeaf2 let BinTreeAlgebra lvta2 in binNode binLeaf makeAlgebra CommutativeMonoid lvta frec fsingle BinTreeAlgebra where binNode foldr oplus identity fsingle binNode frec frec binLeaf fsingle binLeaf binNode binLeaf let BinTreeAlgebra lvta in binNode binLeaf foldingAlgebra op iop BinTreeMapFs BinTreeAlgebra where binNode binNodeF op op binLeaf binLeafF hom BinTreeAlgebra where BinNode binNode BinLeaf binLeaf",
          "hierarchy": "GTA Util GenericSemiringStructureTemplate",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genInstanceDecl",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "GTALib",
          "partial": "Instance Decl",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genInstanceDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates a definition of a record holding functions to be mapped to values in a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following record is generated by \u003ccode\u003egenMapFunctionsDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data BinTreeMapFs n l b' = BinTreeMapFs {\n       binNodeF :: n -\u003e b',\n       binLeafF :: l -\u003e b'\n     }\n\u003c/pre\u003e",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genMapFunctionsDecl",
          "package": "GTALib",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genMapFunctionsDecl",
          "type": "function"
        },
        "index": {
          "description": "This function generates definition of record holding functions to be mapped to values in given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following record is generated by genMapFunctionsDecl BinTree data BinTreeMapFs BinTreeMapFs binNodeF binLeafF",
          "hierarchy": "GTA Util GenericSemiringStructureTemplate",
          "module": "GTA.Util.GenericSemiringStructureTemplate",
          "name": "genMapFunctionsDecl",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "GTALib",
          "partial": "Map Functions Decl",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genMapFunctionsDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCopied from \u003ca\u003ehttp://haskell.1045720.n5.nabble.com/Deriving-Read-with-Template-Haskell-Re-automatic-instances-for-pretty-printing-and-parsing-td3197647.html\u003c/a\u003e, and modified a bit.\n\u003c/p\u003e\u003cp\u003eObserving a structure of a datatype in a uniform way no matter\n   whether it was defined in infix, prefix or record form.\n\u003c/p\u003e\u003cp\u003eThis code is based on the \u003ccode\u003eDerive\u003c/code\u003e module from the SYB3 code distribution,\n   (C) 2005, Ralf Laemmel and Simon Peyton Jones, see\n   \u003ca\u003ehttp://homepages.cwi.nl/~ralf/syb3/code.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GTA.Util.TypeInfo",
          "name": "TypeInfo",
          "package": "GTALib",
          "source": "src/GTA-Util-TypeInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Copied from http haskell.1045720.n5.nabble.com Deriving-Read-with-Template-Haskell-Re-automatic-instances-for-pretty-printing-and-parsing-td3197647.html and modified bit Observing structure of datatype in uniform way no matter whether it was defined in infix prefix or record form This code is based on the Derive module from the SYB3 code distribution Ralf Laemmel and Simon Peyton Jones see http homepages.cwi.nl ralf syb3 code.html",
          "hierarchy": "GTA Util TypeInfo",
          "module": "GTA.Util.TypeInfo",
          "name": "TypeInfo",
          "package": "GTALib",
          "partial": "Type Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first part is the name, the second - a list of type parameters,\n   the third - a list of constructors. For each constructor we have a name\n   and a list describing constructor fields.\n\u003c/p\u003e\u003cp\u003etype TypeInfo = (Name, [Name], [(Name, [(Maybe Name, Type)])])\n\u003c/p\u003e",
          "module": "GTA.Util.TypeInfo",
          "name": "TypeInfo",
          "package": "GTALib",
          "source": "src/GTA-Util-TypeInfo.html#TypeInfo",
          "type": "type"
        },
        "index": {
          "description": "The first part is the name the second list of type parameters the third list of constructors For each constructor we have name and list describing constructor fields type TypeInfo Name Name Name Maybe Name Type",
          "hierarchy": "GTA Util TypeInfo",
          "module": "GTA.Util.TypeInfo",
          "name": "TypeInfo",
          "package": "GTALib",
          "partial": "Type Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003enameBase\u003c/a\u003e\u003c/code\u003e to the name.\n\u003c/p\u003e",
          "module": "GTA.Util.TypeInfo",
          "name": "simpleName",
          "package": "GTALib",
          "signature": "Name -\u003e Name",
          "source": "src/GTA-Util-TypeInfo.html#simpleName",
          "type": "function"
        },
        "index": {
          "description": "Apply nameBase to the name",
          "hierarchy": "GTA Util TypeInfo",
          "module": "GTA.Util.TypeInfo",
          "name": "simpleName",
          "normalized": "Name-\u003eName",
          "package": "GTALib",
          "partial": "Name",
          "signature": "Name-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#v:simpleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns type information of a given type.\n\u003c/p\u003e",
          "module": "GTA.Util.TypeInfo",
          "name": "typeInfo",
          "package": "GTALib",
          "signature": "Name -\u003e Q TypeInfo",
          "source": "src/GTA-Util-TypeInfo.html#typeInfo",
          "type": "function"
        },
        "index": {
          "description": "Returns type information of given type",
          "hierarchy": "GTA Util TypeInfo",
          "module": "GTA.Util.TypeInfo",
          "name": "typeInfo",
          "normalized": "Name-\u003eQ TypeInfo",
          "package": "GTALib",
          "partial": "Info",
          "signature": "Name-\u003eQ TypeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#v:typeInfo"
      }
    }
  ]
]