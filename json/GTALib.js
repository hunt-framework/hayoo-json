[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the core functionalities of the GTA (Generate, Test, and Aggregate) programming framework on Haskell (c.f., Kento Emoto, Sebastian Fischer, Zhenjiang Hu: Generate, Test, and Aggregate - A Calculation-based Framework for Systematic Parallel Programming with MapReduce. ESOP 2012: 254-273. The authors' version is available at \u003ca\u003ehttp://www.ipl-lab.org/~emoto/ESOP2012.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample of GTA program\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe following code is a GTA program to solve the 0-1 Knapsack problem (\u003ca\u003ehttp://en.wikipedia.org/wiki/Knapsack_problem\u003c/a\u003e). It \u003cem\u003eappears to be an exponential cost\u003c/em\u003e proram in the number of input items, because it appears to generate all item selections by \u003ccode\u003esubsP items\u003c/code\u003e (\u003cem\u003eGenerate\u003c/em\u003e), discard those with total weight heavier than the knapsack's capacity by \u003ccode\u003e\u003ccode\u003e\u003ca\u003efilterBy\u003c/a\u003e\u003c/code\u003e weightlimit capacity\u003c/code\u003e (\u003cem\u003eTest\u003c/em\u003e), and take the most valuable selection by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaggregateBy\u003c/a\u003e\u003c/code\u003e maxsumsolutionWith getValue\u003c/code\u003e (\u003cem\u003eAggregate\u003c/em\u003e). However, it \u003cem\u003eactually runs in a linear time\u003c/em\u003e owing to our proposed program transformation 'Filter-embedding Semiring Fusion' implemented in the library. In addition, it runs in \u003cem\u003eparallel\u003c/em\u003e so that you can get linear speedup. The predicate \u003ccode\u003eweightlimit\u003c/code\u003e is defined based on the join list algebra given in \u003ca\u003eGTA.Data.JoinList\u003c/a\u003e module. \n\u003c/p\u003e\u003cpre\u003e knapsack capacity items = \n  subsP items \n  `filterBy` weightlimit capacity\n  `aggregateBy` maxsumsolutionWith getValue\n \n getValue (_, v) = v\n getWeight (w, _) = w\n\n weightlimit w = (\u003c=w) \u003c.\u003e weightsum where\n   weightsum = homJ' times single nil\n   x1 `times` x2  = (   x1 +    x2) `min` (w+1)\n   single i  = getWeight i `min` (w+1)\n   nil = 0\n\u003c/pre\u003e\u003cp\u003eSeveral example GTA programs are found in \u003cem\u003eexamples\u003c/em\u003e directory at \u003ca\u003ehttps://bitbucket.org/emoto/gtalib/src\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module provides generic functionalities in the GTA programming framework. Data-strructure-dependent definitions are found in GTA.Data.* modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module provides the core functionalities of the GTA Generate Test and Aggregate programming framework on Haskell c.f Kento Emoto Sebastian Fischer Zhenjiang Hu Generate Test and Aggregate Calculation-based Framework for Systematic Parallel Programming with MapReduce ESOP The authors version is available at http www.ipl-lab.org emoto ESOP2012.pdf Example of GTA program The following code is GTA program to solve the Knapsack problem http en.wikipedia.org wiki Knapsack problem It appears to be an exponential cost proram in the number of input items because it appears to generate all item selections by subsP items Generate discard those with total weight heavier than the knapsack capacity by filterBy weightlimit capacity Test and take the most valuable selection by aggregateBy maxsumsolutionWith getValue Aggregate However it actually runs in linear time owing to our proposed program transformation Filter-embedding Semiring Fusion implemented in the library In addition it runs in parallel so that you can get linear speedup The predicate weightlimit is defined based on the join list algebra given in GTA.Data.JoinList module knapsack capacity items subsP items filterBy weightlimit capacity aggregateBy maxsumsolutionWith getValue getValue getWeight weightlimit weightsum where weightsum homJ times single nil x1 times x2 x1 x2 min single getWeight min nil Several example GTA programs are found in examples directory at https bitbucket.org emoto gtalib src This module provides generic functionalities in the GTA programming framework Data-strructure-dependent definitions are found in GTA.Data modules",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "Core",
        "normalized": "",
        "package": "GTALib",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:AddIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces an identity \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e to a given type. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Core.html#AddIdentity",
        "fct-type": "data",
        "title": "AddIdentity"
      },
      "index": {
        "description": "Introduces an identity Identity to given type",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "AddIdentity",
        "normalized": "",
        "package": "GTALib",
        "partial": "Add Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:Bag",
      "description": {
        "fct-descr": "\u003cp\u003eA bag is a multiset, i.e., a set in which members are allowed to appear more than one. The order of memebrs is ignored: e.g., \u003ccode\u003eBag [1,2] == Bag [2,1]\u003c/code\u003e is True. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Core.html#Bag",
        "fct-type": "data",
        "title": "Bag"
      },
      "index": {
        "description": "bag is multiset i.e set in which members are allowed to appear more than one The order of memebrs is ignored e.g Bag Bag is True",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "Bag",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:CommutativeMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eCommutative monoid is an algebra of an associative, commutative binary operator with its identity. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Core.html#CommutativeMonoid",
        "fct-type": "data",
        "title": "CommutativeMonoid"
      },
      "index": {
        "description": "Commutative monoid is an algebra of an associative commutative binary operator with its identity",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "CommutativeMonoid",
        "normalized": "",
        "package": "GTALib",
        "partial": "Commutative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:GenericSemiring",
      "description": {
        "fct-descr": "\u003cp\u003eA generic semiring is a combination of a commutative monoid and an algebra such that operators of the algebra distributes over \u003ccode\u003e\u003ca\u003eoplus\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e is the zero of the operators. \n\u003c/p\u003e\u003cp\u003eFor example, the usual semiring is a combination of a commutative monoid and a \u003ccode\u003e\u003ca\u003eJoinListAlgebra\u003c/a\u003e\u003c/code\u003e, in which we have the distributivity and the zeroness:\n\u003c/p\u003e\u003cpre\u003e a `times` (b `oplus` c) == (a `times` b) `oplus` (a `times` c)\n (a `oplus` b) `times` c == (a `times` c) `oplus` (b `times` c)\n a `times` identity == identity `times` a == identity\n\u003c/pre\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Core.html#GenericSemiring",
        "fct-type": "data",
        "title": "GenericSemiring"
      },
      "index": {
        "description": "generic semiring is combination of commutative monoid and an algebra such that operators of the algebra distributes over oplus and identity is the zero of the operators For example the usual semiring is combination of commutative monoid and JoinListAlgebra in which we have the distributivity and the zeroness times oplus times oplus times oplus times times oplus times times identity identity times identity",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "GenericSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Generic Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:GenericSemiringStructure",
      "description": {
        "fct-descr": "\u003cp\u003eCollection of data-structure-dependent definitions necessary for the GTA framework, including the free algebra, lifting of a generic semirig with an algebra, construction of useful algebras, etc. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "class",
        "fct-source": "src/GTA-Core.html#GenericSemiringStructure",
        "fct-type": "class",
        "title": "GenericSemiringStructure"
      },
      "index": {
        "description": "Collection of data-structure-dependent definitions necessary for the GTA framework including the free algebra lifting of generic semirig with an algebra construction of useful algebras etc",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "GenericSemiringStructure",
        "normalized": "",
        "package": "GTALib",
        "partial": "Generic Semiring Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#t:RevOrd",
      "description": {
        "fct-descr": "\u003cp\u003eReverses the order of a given type. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Core.html#RevOrd",
        "fct-type": "data",
        "title": "RevOrd"
      },
      "index": {
        "description": "Reverses the order of given type",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "RevOrd",
        "normalized": "",
        "package": "GTALib",
        "partial": "Rev Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eOperator to build a pair of a judgement function and an algebra, which represents a Tester. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "forall alg a b.  (b -\u003e Bool) -\u003e alg b -\u003e (b -\u003e Bool, alg b)",
        "fct-source": "src/GTA-Core.html#%3C.%3E",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "Operator to build pair of judgement function and an algebra which represents Tester",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "a b c d(e-\u003eBool)-\u003eb e-\u003e(e-\u003eBool,b e)",
        "package": "GTALib",
        "partial": "",
        "signature": "forall alg a b.(b-\u003eBool)-\u003ealg b-\u003e(b-\u003eBool,alg b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--35--35-",
      "description": {
        "fct-descr": "\u003cp\u003eInefficient version of \u003ccode\u003e\u003ca\u003e\u003e==\u003c/a\u003e\u003c/code\u003e (i.e., it does not do optimziation at all). \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg (Bag free) -\u003e Bag free) -\u003e (b -\u003e Bool, alg b) -\u003e GenericSemiring alg (Bag free) -\u003e Bag free",
        "fct-source": "src/GTA-Core.html#%3E%23%23",
        "fct-type": "function",
        "title": "(\u003e##)"
      },
      "index": {
        "description": "Inefficient version of i.e it does not do optimziation at all",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003e##) \u003e##",
        "normalized": "(GenericSemiring a(Bag b)-\u003eBag b)-\u003e(c-\u003eBool,a c)-\u003eGenericSemiring a(Bag b)-\u003eBag b",
        "package": "GTALib",
        "partial": "",
        "signature": "(GenericSemiring alg(Bag free)-\u003eBag free)-\u003e(b-\u003eBool,alg b)-\u003eGenericSemiring alg(Bag free)-\u003eBag free"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInefficient version of \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e (i.e., it does not do optimziation at all). \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg (Bag free) -\u003e Bag free) -\u003e GenericSemiring alg a -\u003e a",
        "fct-source": "src/GTA-Core.html#%3E%23%3E",
        "fct-type": "function",
        "title": "(\u003e#\u003e)"
      },
      "index": {
        "description": "Inefficient version of i.e it does not do optimziation at all",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003e#\u003e) \u003e#\u003e",
        "normalized": "(GenericSemiring a(Bag b)-\u003eBag b)-\u003eGenericSemiring a c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "(GenericSemiring alg(Bag free)-\u003eBag free)-\u003eGenericSemiring alg a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for transforming a generator by a transformer. A transformer is an aggregator polymorphic over another generic semiring. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg' c -\u003e c) -\u003e (GenericSemiring alg c -\u003e GenericSemiring alg' c) -\u003e GenericSemiring alg c -\u003e c",
        "fct-source": "src/GTA-Core.html#%3E%3D%3C",
        "fct-type": "function",
        "title": "(\u003e=\u003c)"
      },
      "index": {
        "description": "Combinator for transforming generator by transformer transformer is an aggregator polymorphic over another generic semiring",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003e=\u003c) \u003e=\u003c",
        "normalized": "(GenericSemiring a b-\u003eb)-\u003e(GenericSemiring c b-\u003eGenericSemiring a b)-\u003eGenericSemiring c b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "(GenericSemiring alg' c-\u003ec)-\u003e(GenericSemiring alg c-\u003eGenericSemiring alg' c)-\u003eGenericSemiring alg c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for connecting a generator and a filter to build another generator. A fitler is represented by a pair of a judgement function and an algebra. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg (Map c b) -\u003e Map k b) -\u003e (k -\u003e Bool, alg c) -\u003e GenericSemiring alg b -\u003e b",
        "fct-source": "src/GTA-Core.html#%3E%3D%3D",
        "fct-type": "function",
        "title": "(\u003e==)"
      },
      "index": {
        "description": "Combinator for connecting generator and filter to build another generator fitler is represented by pair of judgement function and an algebra",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003e==) \u003e==",
        "normalized": "(GenericSemiring a(Map b c)-\u003eMap d c)-\u003e(d-\u003eBool,a b)-\u003eGenericSemiring a c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "(GenericSemiring alg(Map c b)-\u003eMap k b)-\u003e(k-\u003eBool,alg c)-\u003eGenericSemiring alg b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:-62--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for connecting a generator and an aggregator to get the result. An aggregator is represented by a generic semiring. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg b -\u003e b) -\u003e GenericSemiring alg b -\u003e b",
        "fct-source": "src/GTA-Core.html#%3E%3D%3E",
        "fct-type": "function",
        "title": "(\u003e=\u003e)"
      },
      "index": {
        "description": "Combinator for connecting generator and an aggregator to get the result An aggregator is represented by generic semiring",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "(\u003e=\u003e) \u003e=\u003e",
        "normalized": "(GenericSemiring a b-\u003eb)-\u003eGenericSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "(GenericSemiring alg b-\u003eb)-\u003eGenericSemiring alg b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:AddIdentity",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "AddIdentity a",
        "fct-source": "src/GTA-Core.html#AddIdentity",
        "fct-type": "function",
        "title": "AddIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "AddIdentity",
        "normalized": "",
        "package": "GTALib",
        "partial": "Add Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:Bag",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Bag [a]",
        "fct-source": "src/GTA-Core.html#Bag",
        "fct-type": "function",
        "title": "Bag"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "Bag",
        "normalized": "Bag[a]",
        "package": "GTALib",
        "partial": "Bag",
        "signature": "Bag[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:CommutativeMonoid",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "CommutativeMonoid",
        "fct-source": "src/GTA-Core.html#CommutativeMonoid",
        "fct-type": "function",
        "title": "CommutativeMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "CommutativeMonoid",
        "normalized": "",
        "package": "GTALib",
        "partial": "Commutative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:GenericSemiring",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring",
        "fct-source": "src/GTA-Core.html#GenericSemiring",
        "fct-type": "function",
        "title": "GenericSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "GenericSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Generic Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:Identity",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Identity",
        "fct-source": "src/GTA-Core.html#AddIdentity",
        "fct-type": "function",
        "title": "Identity"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "Identity",
        "normalized": "",
        "package": "GTALib",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:RevOrd",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "RevOrd a",
        "fct-source": "src/GTA-Core.html#RevOrd",
        "fct-type": "function",
        "title": "RevOrd"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "RevOrd",
        "normalized": "",
        "package": "GTALib",
        "partial": "Rev Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:addIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces an identity. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  a -\u003e AddIdentity a",
        "fct-source": "src/GTA-Core.html#addIdentity",
        "fct-type": "function",
        "title": "addIdentity"
      },
      "index": {
        "description": "Introduces an identity",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "addIdentity",
        "normalized": "a b c-\u003eAddIdentity c",
        "package": "GTALib",
        "partial": "Identity",
        "signature": "forall a. a-\u003eAddIdentity a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:aggregateBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg b -\u003e b) -\u003e GenericSemiring alg b -\u003e b",
        "fct-source": "src/GTA-Core.html#aggregateBy",
        "fct-type": "function",
        "title": "aggregateBy"
      },
      "index": {
        "description": "The same as",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "aggregateBy",
        "normalized": "(GenericSemiring a b-\u003eb)-\u003eGenericSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "By",
        "signature": "(GenericSemiring alg b-\u003eb)-\u003eGenericSemiring alg b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:algebra",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "alg a",
        "fct-source": "src/GTA-Core.html#GenericSemiring",
        "fct-type": "function",
        "title": "algebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "algebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:bag",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a bag that contains the given memebrs. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  [a] -\u003e Bag a",
        "fct-source": "src/GTA-Core.html#bag",
        "fct-type": "function",
        "title": "bag"
      },
      "index": {
        "description": "Makes bag that contains the given memebrs",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "bag",
        "normalized": "a b[c]-\u003eBag c",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a.[a]-\u003eBag a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:filterBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e==\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg (Map c b) -\u003e Map k b) -\u003e (k -\u003e Bool, alg c) -\u003e GenericSemiring alg b -\u003e b",
        "fct-source": "src/GTA-Core.html#filterBy",
        "fct-type": "function",
        "title": "filterBy"
      },
      "index": {
        "description": "The same as",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "filterBy",
        "normalized": "(GenericSemiring a(Map b c)-\u003eMap d c)-\u003e(d-\u003eBool,a b)-\u003eGenericSemiring a c-\u003ec",
        "package": "GTALib",
        "partial": "By",
        "signature": "(GenericSemiring alg(Map c b)-\u003eMap k b)-\u003e(k-\u003eBool,alg c)-\u003eGenericSemiring alg b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:foldingAlgebra",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e uniformer a -\u003e alg a",
        "fct-source": "src/GTA-Core.html#foldingAlgebra",
        "fct-type": "method",
        "title": "foldingAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "foldingAlgebra",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ec a",
        "package": "GTALib",
        "partial": "Algebra",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003euniformer a-\u003ealg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:freeAlgebra",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "alg free",
        "fct-source": "src/GTA-Core.html#freeAlgebra",
        "fct-type": "method",
        "title": "freeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "freeAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:freeSemiring",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg (Bag free)",
        "fct-source": "src/GTA-Core.html#freeSemiring",
        "fct-type": "method",
        "title": "freeSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "freeSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:hom",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "alg a -\u003e free -\u003e a",
        "fct-source": "src/GTA-Core.html#hom",
        "fct-type": "method",
        "title": "hom"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "hom",
        "normalized": "a b-\u003ec-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "alg a-\u003efree-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:identity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "a",
        "fct-source": "src/GTA-Core.html#CommutativeMonoid",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "identity",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:items",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts members from a bag. The order of members is undecidable. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Bag a -\u003e [a]",
        "fct-source": "src/GTA-Core.html#items",
        "fct-type": "function",
        "title": "items"
      },
      "index": {
        "description": "Extracts members from bag The order of members is undecidable",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "items",
        "normalized": "Bag a-\u003e[a]",
        "package": "GTALib",
        "partial": "",
        "signature": "Bag a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:liftedSemiring",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg a -\u003e alg c -\u003e GenericSemiring alg (Map c a)",
        "fct-source": "src/GTA-Core.html#liftedSemiring",
        "fct-type": "method",
        "title": "liftedSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "liftedSemiring",
        "normalized": "GenericSemiring a b-\u003ea c-\u003eGenericSemiring a(Map c b)",
        "package": "GTALib",
        "partial": "Semiring",
        "signature": "GenericSemiring alg a-\u003ealg c-\u003eGenericSemiring alg(Map c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:makeAlgebra",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "CommutativeMonoid m -\u003e alg a -\u003e (m -\u003e [a]) -\u003e (a -\u003e m) -\u003e alg m",
        "fct-source": "src/GTA-Core.html#makeAlgebra",
        "fct-type": "method",
        "title": "makeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "makeAlgebra",
        "normalized": "CommutativeMonoid a-\u003eb c-\u003e(a-\u003e[c])-\u003e(c-\u003ea)-\u003eb a",
        "package": "GTALib",
        "partial": "Algebra",
        "signature": "CommutativeMonoid m-\u003ealg a-\u003e(m-\u003e[a])-\u003e(a-\u003em)-\u003ealg m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to take the maximum items under a given monotonic sum \u003ccode\u003emplus\u003c/code\u003e with its identity \u003ccode\u003emid\u003c/code\u003e after \u003cem\u003emap\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e c == a `max` b   =\u003e   d `mplus` (a `max` b) == (d `mplus` a) `max` (d `mplus` b)\n\u003c/pre\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
        "fct-source": "src/GTA-Core.html#maxMonoSumBy",
        "fct-type": "function",
        "title": "maxMonoSumBy"
      },
      "index": {
        "description": "The aggregator to take the maximum items under given monotonic sum mplus with its identity mid after map max mplus max mplus max mplus",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxMonoSumBy",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb(AddIdentity a)-\u003eGenericSemiring c(AddIdentity a)",
        "package": "GTALib",
        "partial": "Mono Sum By",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to find the best k maximum items under a given monotonic sum. An extension of \u003ccode\u003e\u003ca\u003emaxMonoSumBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
        "fct-source": "src/GTA-Core.html#maxMonoSumKBy",
        "fct-type": "function",
        "title": "maxMonoSumKBy"
      },
      "index": {
        "description": "The aggregator to find the best maximum items under given monotonic sum An extension of maxMonoSumBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxMonoSumKBy",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eb(AddIdentity a)-\u003eGenericSemiring c[AddIdentity a]",
        "package": "GTALib",
        "partial": "Mono Sum KBy",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumsolutionXBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe tupling of maxMonoSumBy and a given generic semiring. The second component of the result is the aggregation of the maximum items by the given generaic semiring.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
        "fct-source": "src/GTA-Core.html#maxMonoSumsolutionXBy",
        "fct-type": "function",
        "title": "maxMonoSumsolutionXBy"
      },
      "index": {
        "description": "The tupling of maxMonoSumBy and given generic semiring The second component of the result is the aggregation of the maximum items by the given generaic semiring",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxMonoSumsolutionXBy",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring b c-\u003ed(AddIdentity a)-\u003eGenericSemiring b(AddIdentity a,c)",
        "package": "GTALib",
        "partial": "Mono Sumsolution XBy",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxMonoSumsolutionXKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxMonoSumsolutionXBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Core.html#maxMonoSumsolutionXKBy",
        "fct-type": "function",
        "title": "maxMonoSumsolutionXKBy"
      },
      "index": {
        "description": "The best-k extension of maxMonoSumsolutionXBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxMonoSumsolutionXKBy",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring b c-\u003eInt-\u003ed(AddIdentity a)-\u003eGenericSemiring b[(AddIdentity a,c)]",
        "package": "GTALib",
        "partial": "Mono Sumsolution XKBy",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eGenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to take the maximum product on \u003cem\u003enon-negative\u003c/em\u003e numbers.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
        "fct-source": "src/GTA-Core.html#maxprodBy",
        "fct-type": "function",
        "title": "maxprodBy"
      },
      "index": {
        "description": "The aggregator to take the maximum product on non-negative numbers",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodBy",
        "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b)",
        "package": "GTALib",
        "partial": "By",
        "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
        "fct-source": "src/GTA-Core.html#maxprodKBy",
        "fct-type": "function",
        "title": "maxprodKBy"
      },
      "index": {
        "description": "The best-k extension of maxprodBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodKBy",
        "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[AddIdentity b]",
        "package": "GTALib",
        "partial": "KBy",
        "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to find the items with the maximum product on \u003cem\u003enon-negative\u003c/em\u003e numbers.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, Bag free)",
        "fct-source": "src/GTA-Core.html#maxprodsolutionBy",
        "fct-type": "function",
        "title": "maxprodsolutionBy"
      },
      "index": {
        "description": "The aggregator to find the items with the maximum product on non-negative numbers",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodsolutionBy",
        "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b,Bag d)",
        "package": "GTALib",
        "partial": "By",
        "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,Bag free)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, Bag free)]",
        "fct-source": "src/GTA-Core.html#maxprodsolutionKBy",
        "fct-type": "function",
        "title": "maxprodsolutionKBy"
      },
      "index": {
        "description": "The best-k extension of maxprodsolutionBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodsolutionKBy",
        "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[(AddIdentity b,Bag d)]",
        "package": "GTALib",
        "partial": "KBy",
        "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,Bag free)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionXBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe tupling of \u003ccode\u003e\u003ca\u003emaxprodsolutionBy\u003c/a\u003e\u003c/code\u003e and a given generic semiring. The second component of the result is the aggregation of the best items by the given generic emiring.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
        "fct-source": "src/GTA-Core.html#maxprodsolutionXBy",
        "fct-type": "function",
        "title": "maxprodsolutionXBy"
      },
      "index": {
        "description": "The tupling of maxprodsolutionBy and given generic semiring The second component of the result is the aggregation of the best items by the given generic emiring",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodsolutionXBy",
        "normalized": "GenericSemiring a b-\u003ec(AddIdentity d)-\u003eGenericSemiring a(AddIdentity d,b)",
        "package": "GTALib",
        "partial": "XBy",
        "signature": "GenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxprodsolutionXKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionXBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Core.html#maxprodsolutionXKBy",
        "fct-type": "function",
        "title": "maxprodsolutionXKBy"
      },
      "index": {
        "description": "The best-k extension of maxprodsolutionXBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxprodsolutionXKBy",
        "normalized": "GenericSemiring a b-\u003eInt-\u003ec(AddIdentity d)-\u003eGenericSemiring a[(AddIdentity d,b)]",
        "package": "GTALib",
        "partial": "XKBy",
        "signature": "GenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to the maximum sum after \u003cem\u003emap\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a)",
        "fct-source": "src/GTA-Core.html#maxsumBy",
        "fct-type": "function",
        "title": "maxsumBy"
      },
      "index": {
        "description": "The aggregator to the maximum sum after map",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumBy",
        "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b)",
        "package": "GTALib",
        "partial": "By",
        "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [AddIdentity a]",
        "fct-source": "src/GTA-Core.html#maxsumKBy",
        "fct-type": "function",
        "title": "maxsumKBy"
      },
      "index": {
        "description": "The best-k extension of maxsumBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumKBy",
        "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[AddIdentity b]",
        "package": "GTALib",
        "partial": "KBy",
        "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionBy",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003emaxMonoSumsolutionBy\u003c/code\u003e with the usual summation.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, Bag free)",
        "fct-source": "src/GTA-Core.html#maxsumsolutionBy",
        "fct-type": "function",
        "title": "maxsumsolutionBy"
      },
      "index": {
        "description": "An instance of maxMonoSumsolutionBy with the usual summation",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumsolutionBy",
        "normalized": "a(AddIdentity b)-\u003eGenericSemiring c(AddIdentity b,Bag d)",
        "package": "GTALib",
        "partial": "By",
        "signature": "uniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,Bag free)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, Bag free)]",
        "fct-source": "src/GTA-Core.html#maxsumsolutionKBy",
        "fct-type": "function",
        "title": "maxsumsolutionKBy"
      },
      "index": {
        "description": "The best-k extension of maxsumsolutionBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumsolutionKBy",
        "normalized": "Int-\u003ea(AddIdentity b)-\u003eGenericSemiring c[(AddIdentity b,Bag d)]",
        "package": "GTALib",
        "partial": "KBy",
        "signature": "Int-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,Bag free)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionXBy",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003emaxMonoSumsolutionXBy\u003c/a\u003e\u003c/code\u003e with the usual summation.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg t -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg (AddIdentity a, t)",
        "fct-source": "src/GTA-Core.html#maxsumsolutionXBy",
        "fct-type": "function",
        "title": "maxsumsolutionXBy"
      },
      "index": {
        "description": "An instance of maxMonoSumsolutionXBy with the usual summation",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumsolutionXBy",
        "normalized": "GenericSemiring a b-\u003ec(AddIdentity d)-\u003eGenericSemiring a(AddIdentity d,b)",
        "package": "GTALib",
        "partial": "XBy",
        "signature": "GenericSemiring alg t-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg(AddIdentity a,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:maxsumsolutionXKBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionXBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg b -\u003e Int -\u003e uniformer (AddIdentity a) -\u003e GenericSemiring alg [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Core.html#maxsumsolutionXKBy",
        "fct-type": "function",
        "title": "maxsumsolutionXKBy"
      },
      "index": {
        "description": "The best-k extension of maxsumsolutionXBy",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "maxsumsolutionXKBy",
        "normalized": "GenericSemiring a b-\u003eInt-\u003ec(AddIdentity d)-\u003eGenericSemiring a[(AddIdentity d,b)]",
        "package": "GTALib",
        "partial": "XKBy",
        "signature": "GenericSemiring alg b-\u003eInt-\u003euniformer(AddIdentity a)-\u003eGenericSemiring alg[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:monoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "CommutativeMonoid a",
        "fct-source": "src/GTA-Core.html#GenericSemiring",
        "fct-type": "function",
        "title": "monoid"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "monoid",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:oplus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/GTA-Core.html#CommutativeMonoid",
        "fct-type": "function",
        "title": "oplus"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "oplus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "GTALib",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:pairAlgebra",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "alg a -\u003e alg b -\u003e alg (a, b)",
        "fct-source": "src/GTA-Core.html#pairAlgebra",
        "fct-type": "method",
        "title": "pairAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "pairAlgebra",
        "normalized": "a b-\u003ea c-\u003ea(b,c)",
        "package": "GTALib",
        "partial": "Algebra",
        "signature": "alg a-\u003ealg b-\u003ealg(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:pairSemiring",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg a -\u003e GenericSemiring alg b -\u003e GenericSemiring alg (a, b)",
        "fct-source": "src/GTA-Core.html#pairSemiring",
        "fct-type": "method",
        "title": "pairSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "pairSemiring",
        "normalized": "GenericSemiring a b-\u003eGenericSemiring a c-\u003eGenericSemiring a(b,c)",
        "package": "GTALib",
        "partial": "Semiring",
        "signature": "GenericSemiring alg a-\u003eGenericSemiring alg b-\u003eGenericSemiring alg(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to extract all items generated by a generator. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg (Bag free)",
        "fct-source": "src/GTA-Core.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "The aggregator to extract all items generated by generator",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "result",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:revOrd",
      "description": {
        "fct-descr": "\u003cp\u003eReverses the order of the argument, so that we can use aggregators maxXXX to take the minimum XXX. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  a -\u003e RevOrd a",
        "fct-source": "src/GTA-Core.html#revOrd",
        "fct-type": "function",
        "title": "revOrd"
      },
      "index": {
        "description": "Reverses the order of the argument so that we can use aggregators maxXXX to take the minimum XXX",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "revOrd",
        "normalized": "a b c-\u003eRevOrd c",
        "package": "GTALib",
        "partial": "Ord",
        "signature": "forall a. a-\u003eRevOrd a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:shom",
      "description": {
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "GenericSemiring alg a -\u003e Bag free -\u003e a",
        "fct-source": "src/GTA-Core.html#shom",
        "fct-type": "method",
        "title": "shom"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "shom",
        "normalized": "GenericSemiring a b-\u003eBag c-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "GenericSemiring alg a-\u003eBag free-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:sumproductBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to compute a sum of products. Each product is of all values in the data structure after \u003cem\u003emap\u003c/em\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "uniformer a -\u003e GenericSemiring alg a",
        "fct-source": "src/GTA-Core.html#sumproductBy",
        "fct-type": "function",
        "title": "sumproductBy"
      },
      "index": {
        "description": "The aggregator to compute sum of products Each product is of all values in the data structure after map",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "sumproductBy",
        "normalized": "a b-\u003eGenericSemiring c b",
        "package": "GTALib",
        "partial": "By",
        "signature": "uniformer a-\u003eGenericSemiring alg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Core.html#v:transformBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e\u003e=\u003c\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "GTA.Core",
        "fct-package": "GTALib",
        "fct-signature": "(GenericSemiring alg' c -\u003e c) -\u003e (GenericSemiring alg c -\u003e GenericSemiring alg' c) -\u003e GenericSemiring alg c -\u003e c",
        "fct-source": "src/GTA-Core.html#transformBy",
        "fct-type": "function",
        "title": "transformBy"
      },
      "index": {
        "description": "The same as",
        "hierarchy": "GTA Core",
        "module": "GTA.Core",
        "name": "transformBy",
        "normalized": "(GenericSemiring a b-\u003eb)-\u003e(GenericSemiring c b-\u003eGenericSemiring a b)-\u003eGenericSemiring c b-\u003eb",
        "package": "GTALib",
        "partial": "By",
        "signature": "(GenericSemiring alg' c-\u003ec)-\u003e(GenericSemiring alg c-\u003eGenericSemiring alg' c)-\u003eGenericSemiring alg c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on binary (and\n leaf-valued) trees, such as definitions of the data structures\n and their algebras, generators, aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Data-BinTree.html",
        "fct-type": "module",
        "title": "BinTree"
      },
      "index": {
        "description": "This module provides the GTA framework on binary and leaf-valued trees such as definitions of the data structures and their algebras generators aggregators etc",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTree",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTree",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#BinTree",
        "fct-type": "data",
        "title": "BinTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTree",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeAlgebra",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
        "fct-type": "data",
        "title": "BinTreeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTreeAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeMapFs",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
        "fct-type": "data",
        "title": "BinTreeMapFs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTreeMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:BinTreeSemiring",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "type",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeSemiring",
        "fct-type": "type",
        "title": "BinTreeSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTreeSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTree",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#LVTree",
        "fct-type": "data",
        "title": "LVTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTree",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeAlgebra",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
        "fct-type": "data",
        "title": "LVTreeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTreeAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeMapFs",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
        "fct-type": "data",
        "title": "LVTreeMapFs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTreeMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#t:LVTreeSemiring",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "type",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeSemiring",
        "fct-type": "type",
        "title": "LVTreeSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTreeSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinLeaf",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinLeaf l",
        "fct-source": "src/GTA-Data-BinTree.html#BinTree",
        "fct-type": "function",
        "title": "BinLeaf"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinLeaf",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinNode",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinNode n (BinTree n l) (BinTree n l)",
        "fct-source": "src/GTA-Data-BinTree.html#BinTree",
        "fct-type": "function",
        "title": "BinNode"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinNode",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinTreeAlgebra",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTreeAlgebra",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
        "fct-type": "function",
        "title": "BinTreeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTreeAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:BinTreeMapFs",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTreeMapFs",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
        "fct-type": "function",
        "title": "BinTreeMapFs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "BinTreeMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bin Tree Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LVTreeAlgebra",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "LVTreeAlgebra",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
        "fct-type": "function",
        "title": "LVTreeAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTreeAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LVTreeMapFs",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "LVTreeMapFs",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
        "fct-type": "function",
        "title": "LVTreeMapFs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LVTreeMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "LVTree Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:LeafLV",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "LeafLV a",
        "fct-source": "src/GTA-Data-BinTree.html#LVTree",
        "fct-type": "function",
        "title": "LeafLV"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "LeafLV",
        "normalized": "",
        "package": "GTALib",
        "partial": "Leaf LV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:NodeLV",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "NodeLV (LVTree a) (LVTree a)",
        "fct-source": "src/GTA-Data-BinTree.html#LVTree",
        "fct-type": "function",
        "title": "NodeLV"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "NodeLV",
        "normalized": "",
        "package": "GTALib",
        "partial": "Node LV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:assignTrans",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "[b] -\u003e [c] -\u003e BinTreeSemiring c (b, a) s -\u003e LVTreeSemiring a s",
        "fct-source": "src/GTA-Data-BinTree.html#assignTrans",
        "fct-type": "function",
        "title": "assignTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "assignTrans",
        "normalized": "[a]-\u003e[b]-\u003eBinTreeSemiring b(a,c)d-\u003eLVTreeSemiring c d",
        "package": "GTALib",
        "partial": "Trans",
        "signature": "[b]-\u003e[c]-\u003eBinTreeSemiring c(b,a)s-\u003eLVTreeSemiring a s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:assignTrees",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "[b] -\u003e [c] -\u003e [a] -\u003e BinTreeSemiring c (b, a) s -\u003e s",
        "fct-source": "src/GTA-Data-BinTree.html#assignTrees",
        "fct-type": "function",
        "title": "assignTrees"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "assignTrees",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003eBinTreeSemiring b(a,c)d-\u003ed",
        "package": "GTALib",
        "partial": "Trees",
        "signature": "[b]-\u003e[c]-\u003e[a]-\u003eBinTreeSemiring c(b,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binLeaf",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "l -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
        "fct-type": "function",
        "title": "binLeaf"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "binLeaf",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "Leaf",
        "signature": "l-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binLeafF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "l -\u003e b'",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
        "fct-type": "function",
        "title": "binLeafF"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "binLeafF",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "Leaf",
        "signature": "l-\u003eb'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "n -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeAlgebra",
        "fct-type": "function",
        "title": "binNode"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "binNode",
        "normalized": "a-\u003eb-\u003eb-\u003eb",
        "package": "GTALib",
        "partial": "Node",
        "signature": "n-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:binNodeF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "n -\u003e b'",
        "fct-source": "src/GTA-Data-BinTree.html#BinTreeMapFs",
        "fct-type": "function",
        "title": "binNodeF"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "binNodeF",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "Node",
        "signature": "n-\u003eb'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:count",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTreeSemiring n l a",
        "fct-source": "src/GTA-Data-BinTree.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "count",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:leafLV",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "b -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
        "fct-type": "function",
        "title": "leafLV"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "leafLV",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "LV",
        "signature": "b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:leafLVF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "b -\u003e b'",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeMapFs",
        "fct-type": "function",
        "title": "leafLVF"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "leafLVF",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "LVF",
        "signature": "b-\u003eb'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:lvtrees",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e LVTreeSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-BinTree.html#lvtrees",
        "fct-type": "function",
        "title": "lvtrees"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "lvtrees",
        "normalized": "[a]-\u003eLVTreeSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eLVTreeSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:maxsum",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTreeSemiring (Bool, a) (Bool, a) (AddIdentity a)",
        "fct-source": "src/GTA-Data-BinTree.html#maxsum",
        "fct-type": "function",
        "title": "maxsum"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "maxsum",
        "normalized": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a)",
        "package": "GTALib",
        "partial": "",
        "signature": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:maxsumsolution",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTreeSemiring (Bool, a) (Bool, a) (AddIdentity a, Bag (BinTree (Bool, a) (Bool, a)))",
        "fct-source": "src/GTA-Data-BinTree.html#maxsumsolution",
        "fct-type": "function",
        "title": "maxsumsolution"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "maxsumsolution",
        "normalized": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a,Bag(BinTree(Bool,a)(Bool,a)))",
        "package": "GTALib",
        "partial": "",
        "signature": "BinTreeSemiring(Bool,a)(Bool,a)(AddIdentity a,Bag(BinTree(Bool,a)(Bool,a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:nodeLV",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#LVTreeAlgebra",
        "fct-type": "function",
        "title": "nodeLV"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "nodeLV",
        "normalized": "a-\u003ea-\u003ea",
        "package": "GTALib",
        "partial": "LV",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:selects",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#selects",
        "fct-type": "function",
        "title": "selects"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "selects",
        "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:subtreeSelects",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#subtreeSelects",
        "fct-type": "function",
        "title": "subtreeSelects"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "subtreeSelects",
        "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
        "package": "GTALib",
        "partial": "Selects",
        "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-BinTree.html#v:subtreeSelectsWithRoot",
      "description": {
        "fct-module": "GTA.Data.BinTree",
        "fct-package": "GTALib",
        "fct-signature": "BinTree n l -\u003e BinTreeSemiring (Bool, n) (Bool, l) a -\u003e a",
        "fct-source": "src/GTA-Data-BinTree.html#subtreeSelectsWithRoot",
        "fct-type": "function",
        "title": "subtreeSelectsWithRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data BinTree",
        "module": "GTA.Data.BinTree",
        "name": "subtreeSelectsWithRoot",
        "normalized": "BinTree a b-\u003eBinTreeSemiring(Bool,a)(Bool,b)c-\u003ec",
        "package": "GTALib",
        "partial": "Selects With Root",
        "signature": "BinTree n l-\u003eBinTreeSemiring(Bool,n)(Bool,l)a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on cons lists, such as\n definitions of the data structure and its algebra, generators,\n aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Data-ConsList.html",
        "fct-type": "module",
        "title": "ConsList"
      },
      "index": {
        "description": "This module provides the GTA framework on cons lists such as definitions of the data structure and its algebra generators aggregators etc",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsList",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsList",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-ConsList.html#ConsList",
        "fct-type": "data",
        "title": "ConsList"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsList",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsListAlgebra",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
        "fct-type": "data",
        "title": "ConsListAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsListAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons List Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsListMapFs",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-ConsList.html#ConsListMapFs",
        "fct-type": "data",
        "title": "ConsListMapFs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsListMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons List Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#t:ConsSemiring",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "type",
        "fct-source": "src/GTA-Data-ConsList.html#ConsSemiring",
        "fct-type": "type",
        "title": "ConsSemiring"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsSemiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:Cons",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Cons a (ConsList a)",
        "fct-source": "src/GTA-Data-ConsList.html#ConsList",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "Cons",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:ConsListAlgebra",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsListAlgebra",
        "fct-source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
        "fct-type": "function",
        "title": "ConsListAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "ConsListAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Cons List Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:Nil",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Nil",
        "fct-source": "src/GTA-Data-ConsList.html#ConsList",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "Nil",
        "normalized": "",
        "package": "GTALib",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:assigns",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[m] -\u003e [a] -\u003e ConsSemiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#assigns",
        "fct-type": "function",
        "title": "assigns"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "assigns",
        "normalized": "[a]-\u003e[b]-\u003eConsSemiring(a,b)c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "[m]-\u003e[a]-\u003eConsSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:assignsBy",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e [m]) -\u003e [a] -\u003e ConsSemiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#assignsBy",
        "fct-type": "function",
        "title": "assignsBy"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "assignsBy",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003eConsSemiring(b,a)c-\u003ec",
        "package": "GTALib",
        "partial": "By",
        "signature": "(a-\u003e[m])-\u003e[a]-\u003eConsSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:bagOfNil",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (ConsList a)",
        "fct-source": "src/GTA-Data-ConsList.html#bagOfNil",
        "fct-type": "function",
        "title": "bagOfNil"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "bagOfNil",
        "normalized": "",
        "package": "GTALib",
        "partial": "Of Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:bagUnion",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (ConsList a) -\u003e Bag (ConsList a) -\u003e Bag (ConsList a)",
        "fct-source": "src/GTA-Data-ConsList.html#bagUnion",
        "fct-type": "function",
        "title": "bagUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "bagUnion",
        "normalized": "Bag(ConsList a)-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
        "package": "GTALib",
        "partial": "Union",
        "signature": "Bag(ConsList a)-\u003eBag(ConsList a)-\u003eBag(ConsList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:cons",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "b -\u003e a -\u003e a",
        "fct-source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "b-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:consize",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  [a] -\u003e ConsList a",
        "fct-source": "src/GTA-Data-ConsList.html#consize",
        "fct-type": "function",
        "title": "consize"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "consize",
        "normalized": "a b[c]-\u003eConsList c",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a.[a]-\u003eConsList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:count",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring b a",
        "fct-source": "src/GTA-Data-ConsList.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "count",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:crossCons",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "a -\u003e Bag (ConsList a) -\u003e Bag (ConsList a)",
        "fct-source": "src/GTA-Data-ConsList.html#crossCons",
        "fct-type": "function",
        "title": "crossCons"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "crossCons",
        "normalized": "a-\u003eBag(ConsList a)-\u003eBag(ConsList a)",
        "package": "GTALib",
        "partial": "Cons",
        "signature": "a-\u003eBag(ConsList a)-\u003eBag(ConsList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:deconsize",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  ConsList a -\u003e [a]",
        "fct-source": "src/GTA-Data-ConsList.html#deconsize",
        "fct-type": "function",
        "title": "deconsize"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "deconsize",
        "normalized": "a b ConsList c-\u003e[c]",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a. ConsList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:emptyBag",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (ConsList a)",
        "fct-source": "src/GTA-Data-ConsList.html#emptyBag",
        "fct-type": "function",
        "title": "emptyBag"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "emptyBag",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:foldr-39-",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "forall a s.  (a -\u003e s -\u003e s) -\u003e s -\u003e ConsListAlgebra a s",
        "fct-source": "src/GTA-Data-ConsList.html#foldr%27",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "foldr'",
        "normalized": "a b c(b-\u003ed-\u003ed)-\u003ed-\u003eConsListAlgebra b d",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a s.(a-\u003es-\u003es)-\u003es-\u003eConsListAlgebra a s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:inits",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "inits",
        "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:mapC",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "forall b a.  (b -\u003e a) -\u003e ConsListMapFs b a",
        "fct-source": "src/GTA-Data-ConsList.html#mapC",
        "fct-type": "function",
        "title": "mapC"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "mapC",
        "normalized": "a b c(b-\u003ed)-\u003eConsListMapFs b d",
        "package": "GTALib",
        "partial": "",
        "signature": "forall b a.(b-\u003ea)-\u003eConsListMapFs b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:mapMap",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e b') -\u003e GenericSemiring (ConsListAlgebra b') a -\u003e GenericSemiring (ConsListAlgebra b) a",
        "fct-source": "src/GTA-Data-ConsList.html#mapMap",
        "fct-type": "function",
        "title": "mapMap"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "mapMap",
        "normalized": "(a-\u003eb)-\u003eGenericSemiring(ConsListAlgebra b)c-\u003eGenericSemiring(ConsListAlgebra a)c",
        "package": "GTALib",
        "partial": "Map",
        "signature": "(b-\u003eb')-\u003eGenericSemiring(ConsListAlgebra b')a-\u003eGenericSemiring(ConsListAlgebra b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [AddIdentity a]",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodKWith",
        "fct-type": "function",
        "title": "maxprodKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[AddIdentity b]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a)",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodWith",
        "fct-type": "function",
        "title": "maxprodWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodWith",
        "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b)",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [(AddIdentity a, Bag (ConsList b))]",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodsolutionKWith",
        "fct-type": "function",
        "title": "maxprodsolutionKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodsolutionKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[(AddIdentity b,Bag(ConsList a))]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[(AddIdentity a,Bag(ConsList b))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a, Bag (ConsList b))",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodsolutionWith",
        "fct-type": "function",
        "title": "maxprodsolutionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodsolutionWith",
        "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b,Bag(ConsList a))",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a,Bag(ConsList b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionXKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e ConsSemiring c [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodsolutionXKWith",
        "fct-type": "function",
        "title": "maxprodsolutionXKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodsolutionXKWith",
        "normalized": "ConsSemiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eConsSemiring a[(AddIdentity c,b)]",
        "package": "GTALib",
        "partial": "XKWith",
        "signature": "ConsSemiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eConsSemiring c[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxprodsolutionXWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring c b -\u003e (c -\u003e a) -\u003e ConsSemiring c (AddIdentity a, b)",
        "fct-source": "src/GTA-Data-ConsList.html#maxprodsolutionXWith",
        "fct-type": "function",
        "title": "maxprodsolutionXWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxprodsolutionXWith",
        "normalized": "ConsSemiring a b-\u003e(a-\u003ec)-\u003eConsSemiring a(AddIdentity c,b)",
        "package": "GTALib",
        "partial": "XWith",
        "signature": "ConsSemiring c b-\u003e(c-\u003ea)-\u003eConsSemiring c(AddIdentity a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsum",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring a (AddIdentity a)",
        "fct-source": "src/GTA-Data-ConsList.html#maxsum",
        "fct-type": "function",
        "title": "maxsum"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsum",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [AddIdentity a]",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumKWith",
        "fct-type": "function",
        "title": "maxsumKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[AddIdentity b]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a)",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumWith",
        "fct-type": "function",
        "title": "maxsumWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumWith",
        "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b)",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolution",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring a (AddIdentity a, Bag (ConsList a))",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumsolution",
        "fct-type": "function",
        "title": "maxsumsolution"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumsolution",
        "normalized": "ConsSemiring a(AddIdentity a,Bag(ConsList a))",
        "package": "GTALib",
        "partial": "",
        "signature": "ConsSemiring a(AddIdentity a,Bag(ConsList a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e ConsSemiring b [(AddIdentity a, Bag (ConsList b))]",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumsolutionKWith",
        "fct-type": "function",
        "title": "maxsumsolutionKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumsolutionKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eConsSemiring a[(AddIdentity b,Bag(ConsList a))]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eConsSemiring b[(AddIdentity a,Bag(ConsList b))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e ConsSemiring b (AddIdentity a, Bag (ConsList b))",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumsolutionWith",
        "fct-type": "function",
        "title": "maxsumsolutionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumsolutionWith",
        "normalized": "(a-\u003eb)-\u003eConsSemiring a(AddIdentity b,Bag(ConsList a))",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eConsSemiring b(AddIdentity a,Bag(ConsList b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionXKWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e ConsSemiring c [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumsolutionXKWith",
        "fct-type": "function",
        "title": "maxsumsolutionXKWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumsolutionXKWith",
        "normalized": "ConsSemiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eConsSemiring a[(AddIdentity c,b)]",
        "package": "GTALib",
        "partial": "XKWith",
        "signature": "ConsSemiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eConsSemiring c[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:maxsumsolutionXWith",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "ConsSemiring c b -\u003e (c -\u003e a) -\u003e ConsSemiring c (AddIdentity a, b)",
        "fct-source": "src/GTA-Data-ConsList.html#maxsumsolutionXWith",
        "fct-type": "function",
        "title": "maxsumsolutionXWith"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "maxsumsolutionXWith",
        "normalized": "ConsSemiring a b-\u003e(a-\u003ec)-\u003eConsSemiring a(AddIdentity c,b)",
        "package": "GTALib",
        "partial": "XWith",
        "signature": "ConsSemiring c b-\u003e(c-\u003ea)-\u003eConsSemiring c(AddIdentity a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:nil",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "a",
        "fct-source": "src/GTA-Data-ConsList.html#ConsListAlgebra",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "nil",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:paths",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "BinTree a a -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#paths",
        "fct-type": "function",
        "title": "paths"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "paths",
        "normalized": "BinTree a a-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "BinTree a a-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:perms",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#perms",
        "fct-type": "function",
        "title": "perms"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "perms",
        "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:segs",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#segs",
        "fct-type": "function",
        "title": "segs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "segs",
        "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:subs",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#subs",
        "fct-type": "function",
        "title": "subs"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "subs",
        "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-ConsList.html#v:tails",
      "description": {
        "fct-module": "GTA.Data.ConsList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e ConsSemiring a s -\u003e s",
        "fct-source": "src/GTA-Data-ConsList.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data ConsList",
        "module": "GTA.Data.ConsList",
        "name": "tails",
        "normalized": "[a]-\u003eConsSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eConsSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GTA framework on join lists, such as\n definitions of the data structure and its algebra,\n parallel/serial generators, aggregators, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Data-JoinList.html",
        "fct-type": "module",
        "title": "JoinList"
      },
      "index": {
        "description": "This module provides the GTA framework on join lists such as definitions of the data structure and its algebra parallel serial generators aggregators etc",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "JoinList",
        "normalized": "",
        "package": "GTALib",
        "partial": "Join List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinList",
      "description": {
        "fct-descr": "\u003cp\u003eJoin lists. \n\u003c/p\u003e\u003cpre\u003e x ++ y ==\u003e x `Times` y\n [a]    ==\u003e Single a\n []     ==\u003e Nil\n\u003c/pre\u003e\u003cp\u003eWe assume that \u003ccode\u003e\u003ca\u003eTimes\u003c/a\u003e\u003c/code\u003e is associative and \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e is its identity:\n\u003c/p\u003e\u003cpre\u003e x `Times` (y `Times` z) == (x `Times` y) `Times` z\n x `Times` Nil == Nil `Times` x == x\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-JoinList.html#JoinList",
        "fct-type": "data",
        "title": "JoinList"
      },
      "index": {
        "description": "Join lists Times Single Nil We assume that Times is associative and Nil is its identity Times Times Times Times Times Nil Nil Times",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "JoinList",
        "normalized": "",
        "package": "GTALib",
        "partial": "Join List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinListAlgebra",
      "description": {
        "fct-descr": "\u003cp\u003eThe algebra of join lists.\n\u003c/p\u003e\u003cp\u003eWe assume that \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e is associative and \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e is its identity, inheriting those of \u003ccode\u003e\u003ca\u003eTimes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e x `times` (y `times` z) == (x `times` y) `times` z\n x `times` nil == nil `times` x == x\n\u003c/pre\u003e\u003cp\u003eThis can be generated automatically by \u003ccode\u003egenAllDecl ''JoinList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
        "fct-type": "data",
        "title": "JoinListAlgebra"
      },
      "index": {
        "description": "The algebra of join lists We assume that times is associative and nil is its identity inheriting those of Times and Nil times times times times times nil nil times This can be generated automatically by genAllDecl JoinList",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "JoinListAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Join List Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:JoinListMapFs",
      "description": {
        "fct-descr": "\u003cp\u003eA record to hold a function to be applied to elements of a list.\n\u003c/p\u003e\u003cp\u003eThis can be generated automatically by \u003ccode\u003egenAllDecl ''JoinList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "data",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListMapFs",
        "fct-type": "data",
        "title": "JoinListMapFs"
      },
      "index": {
        "description": "record to hold function to be applied to elements of list This can be generated automatically by genAllDecl JoinList",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "JoinListMapFs",
        "normalized": "",
        "package": "GTALib",
        "partial": "Join List Map Fs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#t:Semiring",
      "description": {
        "fct-descr": "\u003cp\u003eThe usual semiring is a generic semiring of join lists:\n\u003c/p\u003e\u003cpre\u003e a `times` (b `oplus` c) == (a `times` b) `oplus` (a `times` c)\n (a `oplus` b) `times` c == (a `times` c) `oplus` (b `times` c)\n a `times` identity == identity `times` a == identity\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "type",
        "fct-source": "src/GTA-Data-JoinList.html#Semiring",
        "fct-type": "type",
        "title": "Semiring"
      },
      "index": {
        "description": "The usual semiring is generic semiring of join lists times oplus times oplus times oplus times times oplus times times identity identity times identity",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "Semiring",
        "normalized": "",
        "package": "GTALib",
        "partial": "Semiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:JoinListAlgebra",
      "description": {
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "JoinListAlgebra",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
        "fct-type": "function",
        "title": "JoinListAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "JoinListAlgebra",
        "normalized": "",
        "package": "GTALib",
        "partial": "Join List Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Nil",
      "description": {
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Nil",
        "fct-source": "src/GTA-Data-JoinList.html#JoinList",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "Nil",
        "normalized": "",
        "package": "GTALib",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Single",
      "description": {
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Single a",
        "fct-source": "src/GTA-Data-JoinList.html#JoinList",
        "fct-type": "function",
        "title": "Single"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "Single",
        "normalized": "",
        "package": "GTALib",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:Times",
      "description": {
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Times (JoinList a) (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#JoinList",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "Times",
        "normalized": "",
        "package": "GTALib",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assigns",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all assignments of elements of the first list to elements of the second list.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassigns [True,False] [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[(True,1),(True,2),(True,3)],[(True,1),(True,2),(False,3)],[(True,1),(False,2),(True,3)],[(True,1),(False,2),(False,3)],[(False,1),(True,2),(True,3)],[(False,1),(True,2),(False,3)],[(False,1),(False,2),(True,3)],[(False,1),(False,2),(False,3)]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[m] -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#assigns",
        "fct-type": "function",
        "title": "assigns"
      },
      "index": {
        "description": "This generates all assignments of elements of the first list to elements of the second list For example assigns True False aggregateBy result Bag True True True True True False True False True True False False False True True False True False False False True False False False",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "assigns",
        "normalized": "[a]-\u003e[b]-\u003eSemiring(a,b)c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "[m]-\u003e[a]-\u003eSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsBy",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a generalization of \u003ccode\u003e\u003ca\u003eassigns\u003c/a\u003e\u003c/code\u003e: the values to be assigned is dependent of the target.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassignsBy (\\a -\u003e if odd a then [True, False] else [True]) [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[(True,1),(True,2),(True,3)],[(True,1),(True,2),(False,3)],[(False,1),(True,2),(True,3)],[(False,1),(True,2),(False,3)]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e [m]) -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#assignsBy",
        "fct-type": "function",
        "title": "assignsBy"
      },
      "index": {
        "description": "This is generalization of assigns the values to be assigned is dependent of the target For example assignsBy if odd then True False else True aggregateBy result Bag True True True True True False False True True False True False",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "assignsBy",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003eSemiring(b,a)c-\u003ec",
        "package": "GTALib",
        "partial": "By",
        "signature": "(a-\u003e[m])-\u003e[a]-\u003eSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsByP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eassignsBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e [m]) -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#assignsByP",
        "fct-type": "function",
        "title": "assignsByP"
      },
      "index": {
        "description": "Parallel version of assignsBy",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "assignsByP",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003eSemiring(b,a)c-\u003ec",
        "package": "GTALib",
        "partial": "By",
        "signature": "(a-\u003e[m])-\u003e[a]-\u003eSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:assignsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eassigns\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[m] -\u003e [a] -\u003e Semiring (m, a) s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#assignsP",
        "fct-type": "function",
        "title": "assignsP"
      },
      "index": {
        "description": "Parallel version of assigns",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "assignsP",
        "normalized": "[a]-\u003e[b]-\u003eSemiring(a,b)c-\u003ec",
        "package": "GTALib",
        "partial": "",
        "signature": "[m]-\u003e[a]-\u003eSemiring(m,a)s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagOfNil",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebagOfNil\n\u003c/code\u003e\u003c/strong\u003eBag [[]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#bagOfNil",
        "fct-type": "function",
        "title": "bagOfNil"
      },
      "index": {
        "description": "Constructor of bag of join lists For example bagOfNil Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "bagOfNil",
        "normalized": "",
        "package": "GTALib",
        "partial": "Of Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagOfSingleton",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebagOfSingleton 1\n\u003c/code\u003e\u003c/strong\u003eBag [[1]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "a -\u003e Bag (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#bagOfSingleton",
        "fct-type": "function",
        "title": "bagOfSingleton"
      },
      "index": {
        "description": "Constructor of bag of join lists For example bagOfSingleton Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "bagOfSingleton",
        "normalized": "a-\u003eBag(JoinList a)",
        "package": "GTALib",
        "partial": "Of Singleton",
        "signature": "a-\u003eBag(JoinList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:bagUnion",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(bag (map joinize [[1,2], [3]])) `bagUnion` (bag (map joinize [[4,5], [6]]))\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2],[3],[4,5],[6]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (JoinList a) -\u003e Bag (JoinList a) -\u003e Bag (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#bagUnion",
        "fct-type": "function",
        "title": "bagUnion"
      },
      "index": {
        "description": "Constructor of bag of join lists For example bag map joinize bagUnion bag map joinize Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "bagUnion",
        "normalized": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
        "package": "GTALib",
        "partial": "Union",
        "signature": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to count the number of items in a generated bag.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring b a",
        "fct-source": "src/GTA-Data-JoinList.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The aggregator to count the number of items in generated bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "count",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:crossConcat",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(bag (map joinize [[1,2], [3]])) `crossConcat` (bag (map joinize [[4,5], [6]]))\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,4,5],[1,2,6],[3,4,5],[3,6]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (JoinList a) -\u003e Bag (JoinList a) -\u003e Bag (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#crossConcat",
        "fct-type": "function",
        "title": "crossConcat"
      },
      "index": {
        "description": "Constructor of bag of join lists For example bag map joinize crossConcat bag map joinize Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "crossConcat",
        "normalized": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)",
        "package": "GTALib",
        "partial": "Concat",
        "signature": "Bag(JoinList a)-\u003eBag(JoinList a)-\u003eBag(JoinList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:dejoinize",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from a join list to a usual list. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  JoinList a -\u003e [a]",
        "fct-source": "src/GTA-Data-JoinList.html#dejoinize",
        "fct-type": "function",
        "title": "dejoinize"
      },
      "index": {
        "description": "Conversion from join list to usual list",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "dejoinize",
        "normalized": "a b JoinList c-\u003e[c]",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a. JoinList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:emptyBag",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor of a bag of join lists.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eemptyBag\n\u003c/code\u003e\u003c/strong\u003eBag []\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Bag (JoinList a)",
        "fct-source": "src/GTA-Data-JoinList.html#emptyBag",
        "fct-type": "function",
        "title": "emptyBag"
      },
      "index": {
        "description": "Constructor of bag of join lists For example emptyBag Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "emptyBag",
        "normalized": "",
        "package": "GTALib",
        "partial": "Bag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:homJ",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper function for JoinList homomorphism. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (b -\u003e a) -\u003e a -\u003e JoinList b -\u003e a",
        "fct-source": "src/GTA-Data-JoinList.html#homJ",
        "fct-type": "function",
        "title": "homJ"
      },
      "index": {
        "description": "wrapper function for JoinList homomorphism",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "homJ",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinList b-\u003ea",
        "package": "GTALib",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinList b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:homJ-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA fake function of homJ to build \u003ccode\u003e\u003ca\u003eJoinListAlgebra\u003c/a\u003e\u003c/code\u003e instead of executing the homomorphism with it. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (b -\u003e a) -\u003e a -\u003e JoinListAlgebra b a",
        "fct-source": "src/GTA-Data-JoinList.html#homJ%27",
        "fct-type": "function",
        "title": "homJ'"
      },
      "index": {
        "description": "fake function of homJ to build JoinListAlgebra instead of executing the homomorphism with it",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "homJ'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinListAlgebra b a",
        "package": "GTALib",
        "partial": "J'",
        "signature": "(a-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003ea-\u003eJoinListAlgebra b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:inits",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all prefixes of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einits [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[],[1],[1,2],[1,2,3]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "This generates all prefixes of given list For example inits aggregateBy result Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "inits",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:initsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#initsP",
        "fct-type": "function",
        "title": "initsP"
      },
      "index": {
        "description": "Parallel version of inits",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "initsP",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:joinize",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from a usual list to a join list. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "forall a.  [a] -\u003e JoinList a",
        "fct-source": "src/GTA-Data-JoinList.html#joinize",
        "fct-type": "function",
        "title": "joinize"
      },
      "index": {
        "description": "Conversion from usual list to join list",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "joinize",
        "normalized": "a b[c]-\u003eJoinList c",
        "package": "GTALib",
        "partial": "",
        "signature": "forall a.[a]-\u003eJoinList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:mapJ",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eJoinListMapFs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "forall b a.  (b -\u003e a) -\u003e JoinListMapFs b a",
        "fct-source": "src/GTA-Data-JoinList.html#mapJ",
        "fct-type": "function",
        "title": "mapJ"
      },
      "index": {
        "description": "Wrapper for JoinListMapFs",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "mapJ",
        "normalized": "a b c(b-\u003ed)-\u003eJoinListMapFs b d",
        "package": "GTALib",
        "partial": "",
        "signature": "forall b a.(b-\u003ea)-\u003eJoinListMapFs b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:mapMap",
      "description": {
        "fct-descr": "\u003cp\u003eA transfomer that applies given function to every element in every list in a given bag.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e b') -\u003e GenericSemiring (JoinListAlgebra b') a -\u003e GenericSemiring (JoinListAlgebra b) a",
        "fct-source": "src/GTA-Data-JoinList.html#mapMap",
        "fct-type": "function",
        "title": "mapMap"
      },
      "index": {
        "description": "transfomer that applies given function to every element in every list in given bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "mapMap",
        "normalized": "(a-\u003eb)-\u003eGenericSemiring(JoinListAlgebra b)c-\u003eGenericSemiring(JoinListAlgebra a)c",
        "package": "GTALib",
        "partial": "Map",
        "signature": "(b-\u003eb')-\u003eGenericSemiring(JoinListAlgebra b')a-\u003eGenericSemiring(JoinListAlgebra b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [AddIdentity a]",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodKWith",
        "fct-type": "function",
        "title": "maxprodKWith"
      },
      "index": {
        "description": "The best-k extension of maxprodWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[AddIdentity b]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to take the maximum product of \u003cem\u003enon-negative\u003c/em\u003e numbers after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a)",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodWith",
        "fct-type": "function",
        "title": "maxprodWith"
      },
      "index": {
        "description": "The aggregator to take the maximum product of non-negative numbers after map",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodWith",
        "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b)",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [(AddIdentity a, Bag (JoinList b))]",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodsolutionKWith",
        "fct-type": "function",
        "title": "maxprodsolutionKWith"
      },
      "index": {
        "description": "The best-k extension of maxprodsolutionWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodsolutionKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[(AddIdentity b,Bag(JoinList a))]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[(AddIdentity a,Bag(JoinList b))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to find items with the maximum product. The numbers have to be \u003cem\u003enon-negative\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a, Bag (JoinList b))",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodsolutionWith",
        "fct-type": "function",
        "title": "maxprodsolutionWith"
      },
      "index": {
        "description": "The aggregator to find items with the maximum product The numbers have to be non-negative",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodsolutionWith",
        "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b,Bag(JoinList a))",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a,Bag(JoinList b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionXKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxprodsolutionXWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e Semiring c [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodsolutionXKWith",
        "fct-type": "function",
        "title": "maxprodsolutionXKWith"
      },
      "index": {
        "description": "The best-k extension of maxprodsolutionXWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodsolutionXKWith",
        "normalized": "Semiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eSemiring a[(AddIdentity c,b)]",
        "package": "GTALib",
        "partial": "XKWith",
        "signature": "Semiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eSemiring c[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxprodsolutionXWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe tupling of maxprodsolution and a given semiring. The second component is the aggregation of the maximum items by the given semiring.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring c b -\u003e (c -\u003e a) -\u003e Semiring c (AddIdentity a, b)",
        "fct-source": "src/GTA-Data-JoinList.html#maxprodsolutionXWith",
        "fct-type": "function",
        "title": "maxprodsolutionXWith"
      },
      "index": {
        "description": "The tupling of maxprodsolution and given semiring The second component is the aggregation of the maximum items by the given semiring",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxprodsolutionXWith",
        "normalized": "Semiring a b-\u003e(a-\u003ec)-\u003eSemiring a(AddIdentity c,b)",
        "package": "GTALib",
        "partial": "XWith",
        "signature": "Semiring c b-\u003e(c-\u003ea)-\u003eSemiring c(AddIdentity a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsum",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to take the maximum sum.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring a (AddIdentity a)",
        "fct-source": "src/GTA-Data-JoinList.html#maxsum",
        "fct-type": "function",
        "title": "maxsum"
      },
      "index": {
        "description": "The aggregator to take the maximum sum",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsum",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [AddIdentity a]",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumKWith",
        "fct-type": "function",
        "title": "maxsumKWith"
      },
      "index": {
        "description": "The best-k extension of maxsumWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[AddIdentity b]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[AddIdentity a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to take the maximum sum after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a)",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumWith",
        "fct-type": "function",
        "title": "maxsumWith"
      },
      "index": {
        "description": "The aggregator to take the maximum sum after map",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumWith",
        "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b)",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolution",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to find items with the maximum sum.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring a (AddIdentity a, Bag (JoinList a))",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumsolution",
        "fct-type": "function",
        "title": "maxsumsolution"
      },
      "index": {
        "description": "The aggregator to find items with the maximum sum",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumsolution",
        "normalized": "Semiring a(AddIdentity a,Bag(JoinList a))",
        "package": "GTALib",
        "partial": "",
        "signature": "Semiring a(AddIdentity a,Bag(JoinList a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Int -\u003e (b -\u003e a) -\u003e Semiring b [(AddIdentity a, Bag (JoinList b))]",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumsolutionKWith",
        "fct-type": "function",
        "title": "maxsumsolutionKWith"
      },
      "index": {
        "description": "The best-k extension of maxsumsolutionWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumsolutionKWith",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eSemiring a[(AddIdentity b,Bag(JoinList a))]",
        "package": "GTALib",
        "partial": "KWith",
        "signature": "Int-\u003e(b-\u003ea)-\u003eSemiring b[(AddIdentity a,Bag(JoinList b))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe aggregator to find items with the maximum sum after \u003ccode\u003emap f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "(b -\u003e a) -\u003e Semiring b (AddIdentity a, Bag (JoinList b))",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumsolutionWith",
        "fct-type": "function",
        "title": "maxsumsolutionWith"
      },
      "index": {
        "description": "The aggregator to find items with the maximum sum after map",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumsolutionWith",
        "normalized": "(a-\u003eb)-\u003eSemiring a(AddIdentity b,Bag(JoinList a))",
        "package": "GTALib",
        "partial": "With",
        "signature": "(b-\u003ea)-\u003eSemiring b(AddIdentity a,Bag(JoinList b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionXKWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003ebest-k\u003c/em\u003e extension of \u003ccode\u003e\u003ca\u003emaxsumsolutionXWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring c b -\u003e Int -\u003e (c -\u003e a) -\u003e Semiring c [(AddIdentity a, b)]",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumsolutionXKWith",
        "fct-type": "function",
        "title": "maxsumsolutionXKWith"
      },
      "index": {
        "description": "The best-k extension of maxsumsolutionXWith",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumsolutionXKWith",
        "normalized": "Semiring a b-\u003eInt-\u003e(a-\u003ec)-\u003eSemiring a[(AddIdentity c,b)]",
        "package": "GTALib",
        "partial": "XKWith",
        "signature": "Semiring c b-\u003eInt-\u003e(c-\u003ea)-\u003eSemiring c[(AddIdentity a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:maxsumsolutionXWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe tupling of maxsumsolution and a given semiring. The second component is the aggregation of the maximum items by the given semiring.\n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "Semiring c b -\u003e (c -\u003e a) -\u003e Semiring c (AddIdentity a, b)",
        "fct-source": "src/GTA-Data-JoinList.html#maxsumsolutionXWith",
        "fct-type": "function",
        "title": "maxsumsolutionXWith"
      },
      "index": {
        "description": "The tupling of maxsumsolution and given semiring The second component is the aggregation of the maximum items by the given semiring",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "maxsumsolutionXWith",
        "normalized": "Semiring a b-\u003e(a-\u003ec)-\u003eSemiring a(AddIdentity c,b)",
        "package": "GTALib",
        "partial": "XWith",
        "signature": "Semiring c b-\u003e(c-\u003ea)-\u003eSemiring c(AddIdentity a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:nil",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "a",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "nil",
        "normalized": "",
        "package": "GTALib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:paths",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all paths from the root to leaves of a given binary tree.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e*Main GTA.Data.BinTree\u003e paths (BinNode 1 (BinLeaf 2) (BinNode 3 (BinLeaf 4) (BinLeaf 5))) `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2],[1,3,4],[1,3,5]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "BinTree a a -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#paths",
        "fct-type": "function",
        "title": "paths"
      },
      "index": {
        "description": "This generates all paths from the root to leaves of given binary tree For example Main GTA.Data.BinTree paths BinNode BinLeaf BinNode BinLeaf BinLeaf aggregateBy result Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "paths",
        "normalized": "BinTree a a-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "BinTree a a-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:perms",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all permutations of a given list.\n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eperms \"hoge\" `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [\"hoge\",\"hoeg\",\"ohge\",\"oheg\",\"hgoe\",\"hgeo\",\"ghoe\",\"gheo\",\"heog\",\"hego\",\"ehog\",\"ehgo\",\"oghe\",\"ogeh\",\"gohe\",\"goeh\",\"oehg\",\"oegh\",\"eohg\",\"eogh\",\"geho\",\"geoh\",\"egho\",\"egoh\"]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#perms",
        "fct-type": "function",
        "title": "perms"
      },
      "index": {
        "description": "This generates all permutations of given list For example perms hoge aggregateBy result Bag hoge hoeg ohge oheg hgoe hgeo ghoe gheo heog hego ehog ehgo oghe ogeh gohe goeh oehg oegh eohg eogh geho geoh egho egoh",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "perms",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:permsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003eperms\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#permsP",
        "fct-type": "function",
        "title": "permsP"
      },
      "index": {
        "description": "Parallel version of perms",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "permsP",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:prop_Associativity",
      "description": {
        "fct-descr": "\u003cp\u003eProperty of \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e of a JoinListAlgebra:\n\u003c/p\u003e\u003cpre\u003e x `times` (y `times` z) == (x `times` y) `times` z\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "JoinListAlgebra a b -\u003e (b, b, b) -\u003e Bool",
        "fct-source": "src/GTA-Data-JoinList.html#prop_Associativity",
        "fct-type": "function",
        "title": "prop_Associativity"
      },
      "index": {
        "description": "Property of times of JoinListAlgebra times times times times",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "prop_Associativity",
        "normalized": "JoinListAlgebra a b-\u003e(b,b,b)-\u003eBool",
        "package": "GTALib",
        "partial": "Associativity",
        "signature": "JoinListAlgebra a b-\u003e(b,b,b)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:prop_Identity",
      "description": {
        "fct-descr": "\u003cp\u003eProperty of \u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e of a JoinListAlgebra:\n\u003c/p\u003e\u003cpre\u003e (x `times` nil == x) && (nil `times` x == x)\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "JoinListAlgebra a b -\u003e b -\u003e Bool",
        "fct-source": "src/GTA-Data-JoinList.html#prop_Identity",
        "fct-type": "function",
        "title": "prop_Identity"
      },
      "index": {
        "description": "Property of times and nil of JoinListAlgebra times nil nil times",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "prop_Identity",
        "normalized": "JoinListAlgebra a b-\u003eb-\u003eBool",
        "package": "GTALib",
        "partial": "Identity",
        "signature": "JoinListAlgebra a b-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:segs",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all segments (continuous subsequences) of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esegs [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1],[2],[3],[2,3],[1,2],[1,2,3],[]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#segs",
        "fct-type": "function",
        "title": "segs"
      },
      "index": {
        "description": "This generates all segments continuous subsequences of given list For example segs aggregateBy result Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "segs",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:segsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003esegs\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#segsP",
        "fct-type": "function",
        "title": "segsP"
      },
      "index": {
        "description": "Parallel version of segs",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "segsP",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:single",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "b -\u003e a",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "single",
        "normalized": "a-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:subs",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all subsequences of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubs [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#subs",
        "fct-type": "function",
        "title": "subs"
      },
      "index": {
        "description": "This generates all subsequences of given list For example subs aggregateBy result Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "subs",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:subsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003esubs\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#subsP",
        "fct-type": "function",
        "title": "subsP"
      },
      "index": {
        "description": "Parallel version of subs",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "subsP",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:tails",
      "description": {
        "fct-descr": "\u003cp\u003eThis generates all suffixes of a given list. \n\u003c/p\u003e\u003cp\u003eFor example, \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etails [1,2,3] `aggregateBy` result\n\u003c/code\u003e\u003c/strong\u003eBag [[1,2,3],[2,3],[3],[]]\n\u003c/pre\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "This generates all suffixes of given list For example tails aggregateBy result Bag",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "tails",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:tailsP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel version of \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "[a] -\u003e Semiring a s -\u003e s",
        "fct-source": "src/GTA-Data-JoinList.html#tailsP",
        "fct-type": "function",
        "title": "tailsP"
      },
      "index": {
        "description": "Parallel version of tails",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "tailsP",
        "normalized": "[a]-\u003eSemiring a b-\u003eb",
        "package": "GTALib",
        "partial": "",
        "signature": "[a]-\u003eSemiring a s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Data-JoinList.html#v:times",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GTA.Data.JoinList",
        "fct-package": "GTALib",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/GTA-Data-JoinList.html#JoinListAlgebra",
        "fct-type": "function",
        "title": "times"
      },
      "index": {
        "description": "",
        "hierarchy": "GTA Data JoinList",
        "module": "GTA.Data.JoinList",
        "name": "times",
        "normalized": "a-\u003ea-\u003ea",
        "package": "GTALib",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a mechanism for automatic generation of data-structure-dependent definitions necessary for the GTA framework (namely, an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e as well as definitions of algebras and structures for map functions). \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Util.GenericSemiringStructureTemplate",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Util-GenericSemiringStructureTemplate.html",
        "fct-type": "module",
        "title": "GenericSemiringStructureTemplate"
      },
      "index": {
        "description": "This module provides mechanism for automatic generation of data-structure-dependent definitions necessary for the GTA framework namely an instance of GenericSemiringStructure as well as definitions of algebras and structures for map functions",
        "hierarchy": "GTA Util GenericSemiringStructureTemplate",
        "module": "GTA.Util.GenericSemiringStructureTemplate",
        "name": "GenericSemiringStructureTemplate",
        "normalized": "",
        "package": "GTALib",
        "partial": "Generic Semiring Structure Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genAlgebraDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates a definition of the algebra of a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following definition of the algebra is generated by \u003ccode\u003egenAlgebraDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data BinTreeAlgebra n l a = BinTreeAlgebra {\n       binNode :: n -\u003e a -\u003e a -\u003e a,\n       binLeaf :: l -\u003e a\n     }\n\u003c/pre\u003e",
        "fct-module": "GTA.Util.GenericSemiringStructureTemplate",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genAlgebraDecl",
        "fct-type": "function",
        "title": "genAlgebraDecl"
      },
      "index": {
        "description": "This function generates definition of the algebra of given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following definition of the algebra is generated by genAlgebraDecl BinTree data BinTreeAlgebra BinTreeAlgebra binNode binLeaf",
        "hierarchy": "GTA Util GenericSemiringStructureTemplate",
        "module": "GTA.Util.GenericSemiringStructureTemplate",
        "name": "genAlgebraDecl",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "GTALib",
        "partial": "Algebra Decl",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genAllDecl",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a data structure, this function generates a definition of its algebra (by \u003ccode\u003egenAlgebraDecl\u003c/code\u003e), a record of map functions (by \u003ccode\u003egenMapFunctionsDecl\u003c/code\u003e), and an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e (by \u003ccode\u003egenInstanceDecl\u003c/code\u003e). Usage: \u003ccode\u003egenAllDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GTA.Util.GenericSemiringStructureTemplate",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genAllDecl",
        "fct-type": "function",
        "title": "genAllDecl"
      },
      "index": {
        "description": "Given data structure this function generates definition of its algebra by genAlgebraDecl record of map functions by genMapFunctionsDecl and an instance of GenericSemiringStructure by genInstanceDecl Usage genAllDecl BinTree",
        "hierarchy": "GTA Util GenericSemiringStructureTemplate",
        "module": "GTA.Util.GenericSemiringStructureTemplate",
        "name": "genAllDecl",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "GTALib",
        "partial": "All Decl",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genInstanceDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates an instance of \u003ccode\u003e\u003ca\u003eGenericSemiringStructure\u003c/a\u003e\u003c/code\u003e for a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following record is generated by \u003ccode\u003egenInstanceDecl''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e instance GenericSemiringStructure (BinTreeAlgebra n l) (BinTree n l) (BinTreeMapFs n l) where\n   freeAlgebra = BinTreeAlgebra {..} where\n       binNode = BinNode\n       binLeaf = BinLeaf\n   pairAlgebra lvta1 lvta2 = BinTreeAlgebra {..} where\n       binNode a (l1, l2) (r1, r2) = (binNode1 a l1 r1, binNode2 a l2 r2)\n       binLeaf a                   = (binLeaf1 a, binLeaf2 a)\n       (binNode1, binLeaf1) = let BinTreeAlgebra {..} = lvta1 in (binNode, binLeaf)\n       (binNode2, binLeaf2) = let BinTreeAlgebra {..} = lvta2 in (binNode, binLeaf)\n   makeAlgebra (CommutativeMonoid {..}) lvta frec fsingle = BinTreeAlgebra {..} where  \n       binNode a l r = foldr oplus identity [fsingle (binNode' a l' r') | l' \u003c- frec l, r' \u003c- frec r]\n       binLeaf a     = fsingle (binLeaf' a)\n       (binNode', binLeaf') = let BinTreeAlgebra {..} = lvta in (binNode, binLeaf)\n   foldingAlgebra op iop (BinTreeMapFs {..}) = BinTreeAlgebra {..} where\n       binNode a l r = binNodeF a `op` l `op` r\n       binLeaf a     = binLeafF a\n   hom (BinTreeAlgebra {..}) = h where\n       h (BinNode a l r) = binNode a (h l) (h r)\n       h (BinLeaf a)     = binLeaf a\n \n\u003c/pre\u003e",
        "fct-module": "GTA.Util.GenericSemiringStructureTemplate",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genInstanceDecl",
        "fct-type": "function",
        "title": "genInstanceDecl"
      },
      "index": {
        "description": "This function generates an instance of GenericSemiringStructure for given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following record is generated by genInstanceDecl BinTree instance GenericSemiringStructure BinTreeAlgebra BinTree BinTreeMapFs where freeAlgebra BinTreeAlgebra where binNode BinNode binLeaf BinLeaf pairAlgebra lvta1 lvta2 BinTreeAlgebra where binNode l1 l2 r1 r2 binNode1 l1 r1 binNode2 l2 r2 binLeaf binLeaf1 binLeaf2 binNode1 binLeaf1 let BinTreeAlgebra lvta1 in binNode binLeaf binNode2 binLeaf2 let BinTreeAlgebra lvta2 in binNode binLeaf makeAlgebra CommutativeMonoid lvta frec fsingle BinTreeAlgebra where binNode foldr oplus identity fsingle binNode frec frec binLeaf fsingle binLeaf binNode binLeaf let BinTreeAlgebra lvta in binNode binLeaf foldingAlgebra op iop BinTreeMapFs BinTreeAlgebra where binNode binNodeF op op binLeaf binLeafF hom BinTreeAlgebra where BinNode binNode BinLeaf binLeaf",
        "hierarchy": "GTA Util GenericSemiringStructureTemplate",
        "module": "GTA.Util.GenericSemiringStructureTemplate",
        "name": "genInstanceDecl",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "GTALib",
        "partial": "Instance Decl",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-GenericSemiringStructureTemplate.html#v:genMapFunctionsDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates a definition of a record holding functions to be mapped to values in a given data structure. For example, given a data structure defined below,\n\u003c/p\u003e\u003cpre\u003e data BinTree n l = BinNode n (BinTree n l) (BinTree n l)\n                  | BinLeaf l\n\u003c/pre\u003e\u003cp\u003ethe following record is generated by \u003ccode\u003egenMapFunctionsDecl ''BinTree\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data BinTreeMapFs n l b' = BinTreeMapFs {\n       binNodeF :: n -\u003e b',\n       binLeafF :: l -\u003e b'\n     }\n\u003c/pre\u003e",
        "fct-module": "GTA.Util.GenericSemiringStructureTemplate",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/GTA-Util-GenericSemiringStructureTemplate.html#genMapFunctionsDecl",
        "fct-type": "function",
        "title": "genMapFunctionsDecl"
      },
      "index": {
        "description": "This function generates definition of record holding functions to be mapped to values in given data structure For example given data structure defined below data BinTree BinNode BinTree BinTree BinLeaf the following record is generated by genMapFunctionsDecl BinTree data BinTreeMapFs BinTreeMapFs binNodeF binLeafF",
        "hierarchy": "GTA Util GenericSemiringStructureTemplate",
        "module": "GTA.Util.GenericSemiringStructureTemplate",
        "name": "genMapFunctionsDecl",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "GTALib",
        "partial": "Map Functions Decl",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCopied from \u003ca\u003ehttp://haskell.1045720.n5.nabble.com/Deriving-Read-with-Template-Haskell-Re-automatic-instances-for-pretty-printing-and-parsing-td3197647.html\u003c/a\u003e, and modified a bit.\n\u003c/p\u003e\u003cp\u003eObserving a structure of a datatype in a uniform way no matter\n   whether it was defined in infix, prefix or record form.\n\u003c/p\u003e\u003cp\u003eThis code is based on the \u003ccode\u003eDerive\u003c/code\u003e module from the SYB3 code distribution,\n   (C) 2005, Ralf Laemmel and Simon Peyton Jones, see\n   \u003ca\u003ehttp://homepages.cwi.nl/~ralf/syb3/code.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GTA.Util.TypeInfo",
        "fct-package": "GTALib",
        "fct-signature": "module",
        "fct-source": "src/GTA-Util-TypeInfo.html",
        "fct-type": "module",
        "title": "TypeInfo"
      },
      "index": {
        "description": "Copied from http haskell.1045720.n5.nabble.com Deriving-Read-with-Template-Haskell-Re-automatic-instances-for-pretty-printing-and-parsing-td3197647.html and modified bit Observing structure of datatype in uniform way no matter whether it was defined in infix prefix or record form This code is based on the Derive module from the SYB3 code distribution Ralf Laemmel and Simon Peyton Jones see http homepages.cwi.nl ralf syb3 code.html",
        "hierarchy": "GTA Util TypeInfo",
        "module": "GTA.Util.TypeInfo",
        "name": "TypeInfo",
        "normalized": "",
        "package": "GTALib",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#t:TypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe first part is the name, the second - a list of type parameters,\n   the third - a list of constructors. For each constructor we have a name\n   and a list describing constructor fields.\n\u003c/p\u003e\u003cp\u003etype TypeInfo = (Name, [Name], [(Name, [(Maybe Name, Type)])])\n\u003c/p\u003e",
        "fct-module": "GTA.Util.TypeInfo",
        "fct-package": "GTALib",
        "fct-signature": "type",
        "fct-source": "src/GTA-Util-TypeInfo.html#TypeInfo",
        "fct-type": "type",
        "title": "TypeInfo"
      },
      "index": {
        "description": "The first part is the name the second list of type parameters the third list of constructors For each constructor we have name and list describing constructor fields type TypeInfo Name Name Name Maybe Name Type",
        "hierarchy": "GTA Util TypeInfo",
        "module": "GTA.Util.TypeInfo",
        "name": "TypeInfo",
        "normalized": "",
        "package": "GTALib",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#v:simpleName",
      "description": {
        "fct-descr": "\u003cp\u003eApply \u003ccode\u003e\u003ca\u003enameBase\u003c/a\u003e\u003c/code\u003e to the name.\n\u003c/p\u003e",
        "fct-module": "GTA.Util.TypeInfo",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Name",
        "fct-source": "src/GTA-Util-TypeInfo.html#simpleName",
        "fct-type": "function",
        "title": "simpleName"
      },
      "index": {
        "description": "Apply nameBase to the name",
        "hierarchy": "GTA Util TypeInfo",
        "module": "GTA.Util.TypeInfo",
        "name": "simpleName",
        "normalized": "Name-\u003eName",
        "package": "GTALib",
        "partial": "Name",
        "signature": "Name-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GTALib/docs/GTA-Util-TypeInfo.html#v:typeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eReturns type information of a given type.\n\u003c/p\u003e",
        "fct-module": "GTA.Util.TypeInfo",
        "fct-package": "GTALib",
        "fct-signature": "Name -\u003e Q TypeInfo",
        "fct-source": "src/GTA-Util-TypeInfo.html#typeInfo",
        "fct-type": "function",
        "title": "typeInfo"
      },
      "index": {
        "description": "Returns type information of given type",
        "hierarchy": "GTA Util TypeInfo",
        "module": "GTA.Util.TypeInfo",
        "name": "typeInfo",
        "normalized": "Name-\u003eQ TypeInfo",
        "package": "GTALib",
        "partial": "Info",
        "signature": "Name-\u003eQ TypeInfo"
      }
    }
  }
]